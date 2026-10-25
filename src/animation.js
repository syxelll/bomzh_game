import * as THREE from 'three';
import {applyUserAction,applyReferenceHands} from './user-actions.js';
import {prepareGrounding,groundPose} from './grounding.js';
import {blendUserTransition,updateRigidAttachments} from './pose-transitions.js';

const smooth = t => {t=Math.max(0,Math.min(1,t));return t*t*(3-2*t);};
const mix=(a,b,t)=>a+(b-a)*t;
// Pose channels: upper arm, elbow, thigh, knee. Angles are in radians.
const guard = { left:[-.5,-1.15,-.06,.08], right:[-.65,-1.05,.06,.08], lean:0, twist:0, drop:0, spin:0 };
function interpolate(a,b,t){
 const p={};for(const key of ['left','right'])p[key]=a[key].map((v,i)=>mix(v,b[key][i],smooth(t)));
 for(const key of ['lean','twist','drop','spin'])p[key]=mix(a[key]??0,b[key]??0,smooth(t));
 return p;
}
const key=(changes={})=>({...guard,...changes});
export function sampleMotion(time,walk,kind,progress=0,combo=1){
 if(!kind){
  const p=key({left:[...guard.left],right:[...guard.right]});
  if(walk)for(const [i,side] of ['left','right'].entries()){
   const swing=Math.sin(time*9+i*Math.PI);p[side][0]+=.25*swing;p[side][1]+=.15*Math.max(0,-swing);p[side][2]=.42*swing;p[side][3]=.55*Math.max(0,swing);
  }
  p.drop=walk?-.008*Math.abs(Math.sin(time*9)):-.005*(1+Math.sin(time*2));return p;
 }
 const active=combo%2===0?'right':'left';let frames;
 if(kind==='finisher'){
  frames=[[0,key()],[.22,key({right:[-.15,-.7,.18,.3],left:[-.6,-1.3,-.18,.25],twist:-.3,drop:-.08})],[.37,key({right:[.15,-1.5,.2,.45],left:[-.8,-1.4,-.25,.3],twist:-.55,lean:.18,drop:-.16})],[1.3/2.8,key({right:[-1.8,-.15,.15,.12],left:[-.65,-1.2,-.2,.2],twist:.55,lean:-.12,drop:.06})],[.58,key({right:[-1.75,-.2,.15,.12],twist:.4,lean:-.1,drop:.04})],[.86,key()],[1,key()]];
 }else if(kind==='burp'){
  frames=[[0,key()],[.24,key({lean:-.18,drop:-.025})],[.4,key({lean:.38,twist:.1,left:[-.1,-.8,-.06,.08],right:[-.1,-.8,.06,.08]})],[.68,key({lean:.18})],[1,key()]];
 }else if(kind==='jab'){
  frames=[[0,key()],[.25,key({[active]:[-.15,-1.9,0,.12],twist:-.25,drop:-.025})],[.43,key({[active]:[-1.65,-.08,-.1,.1],twist:.3,lean:.12})],[.58,key({[active]:[-1.55,-.12,-.1,.1],twist:.23,lean:.1})],[1,key()]];
 }else if(kind==='kick'){
  frames=[[0,key()],[.28,key({left:[-.9,-1.3,-1,.95],right:[-.2,-1.4,.12,.08],lean:-.12,drop:-.04})],[.48,key({left:[-.2,-1.25,-1.6,.05],right:[-.85,-1.2,.1,.08],lean:-.25})],[.62,key({left:[-.2,-1.25,-1.5,.08],lean:-.2})],[.8,key({left:[-.6,-1.3,-.85,.85],lean:-.1})],[1,key()]];
 }else{
  frames=[[0,key()],[.2,key({left:[.15,-1.35,-.12,.18],right:[.15,-1.35,.12,.18],lean:-.12,drop:-.04})],[.8,key({left:[.15,-1.35,-.12,.18],right:[.15,-1.35,.12,.18],lean:-.12,drop:-.04})],[1,key()]];
 }
 const t=Math.max(0,Math.min(1,progress));let i=1;while(i<frames.length-1&&t>frames[i][0])i++;
 return interpolate(frames[i-1][1],frames[i][1],(t-frames[i-1][0])/(frames[i][0]-frames[i-1][0]));
}
const lowerArm=/forearm|hand|thumb|index|middle|ring|pinky|pinkie/i;
const arm=/arm|shoulder|hand|thumb|index|middle|ring|pinky|pinkie/i;
const leg=/thigh|leg|foot|toe/i;
const lowerLeg=/leg|foot|toe/i;
function pivotTransform(p,x=0,y=0,z=0){return new THREE.Matrix4().makeTranslation(p.x,p.y,p.z).multiply(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(x,y,z))).multiply(new THREE.Matrix4().makeTranslation(-p.x,-p.y,-p.z));}
export function prepareAnimator(actor){
 actor.root.updateMatrixWorld(true);
 const inverse=actor.visual.matrixWorld.clone().invert();
 actor.bind=actor.bones.map(({bone})=>{const name=bone.userData.name??bone.name;return {bone,name,matrix:new THREE.Matrix4().multiplyMatrices(inverse,bone.matrixWorld),side:name.endsWith('.l')?'left':'right',group:arm.test(name)?(lowerArm.test(name)?'forearm':'arm'):leg.test(name)?(lowerLeg.test(name)?'shin':'leg'):'body'};});
 const point=(name,fallback)=>{const b=actor.bind.find(b=>b.name===name);return b?new THREE.Vector3().setFromMatrixPosition(b.matrix):fallback;};
 actor.pivots={hips:point('root.x',new THREE.Vector3(0,.5,0))};
 for(const [side,suffix] of [['left','.l'],['right','.r']])actor.pivots[side]={shoulder:point('arm'+suffix,new THREE.Vector3()),elbow:point('forearm'+suffix,new THREE.Vector3()),hip:point('thigh'+suffix,new THREE.Vector3()),knee:point('leg'+suffix,new THREE.Vector3()),wrist:point('hand'+suffix,new THREE.Vector3())};
 // Curl fingers in model space; preserve every joint's original scale and bind matrix.
 for(const b of actor.bind){
  const finger=b.name.match(/(thumb|index|middle|ring|pinky)([123])(?:_base|_rot)?\.([lr])/);
  b.curledMatrix=b.matrix.clone();if(!finger)continue;
  const curl=new THREE.Matrix4();
  for(let joint=1;joint<=Number(finger[2]);joint++){
   const source=actor.bind.find(v=>v.name===`c_${finger[1]}${joint}.${finger[3]}`);if(!source)continue;
   const pos=new THREE.Vector3(),q=new THREE.Quaternion(),scale=new THREE.Vector3();source.matrix.decompose(pos,q,scale);
   const pivot=new THREE.Matrix4().compose(pos,q,new THREE.Vector3(1,1,1));
   curl.multiply(pivot).multiply(new THREE.Matrix4().makeRotationX(finger[1]==='thumb'?.45:1.15)).multiply(pivot.clone().invert());
  }
  b.curledMatrix.premultiply(curl);
 }
 actor.rigid=[];actor.visual.traverse(mesh=>{if(mesh.isMesh&&!mesh.isSkinnedMesh){let parent=mesh.parent;while(parent&&!parent.isBone)parent=parent.parent;actor.rigid.push({mesh,parentBoneName:parent?(parent.userData.name??parent.name):null,matrix:new THREE.Matrix4().multiplyMatrices(inverse,mesh.matrixWorld)});mesh.matrixAutoUpdate=false;}});
 actor.posedWorld=new Map();
 const skeletons=new Set();actor.visual.traverse(o=>{if(o.isSkinnedMesh)skeletons.add(o.skeleton);});
 for(const skeleton of skeletons){const offset=new THREE.Matrix4();skeleton.update=function(){for(let i=0;i<this.bones.length;i++){const world=actor.posedWorld.get(this.bones[i])??this.bones[i].matrixWorld;offset.multiplyMatrices(world,this.boneInverses[i]).toArray(this.boneMatrices,i*16);}if(this.boneTexture)this.boneTexture.needsUpdate=true;};}
 actor.animationScratch={desired:new THREE.Matrix4()};prepareGrounding(actor);
}
export function pose(actor,time,walk,kind,progress){
 const authored=applyUserAction(actor,time,walk,kind,progress);if(authored){blendUserTransition(actor,time,authored);groundPose(actor,0,{kind:authored==='dodge'?'dodge':kind,time});updateRigidAttachments(actor);return sampleMotion(time,walk,kind,progress,actor.combo??1);}
 const motionTime=walk&&Number.isFinite(actor.walkDistance)?actor.walkDistance/(actor.walkStride??(actor.height??1.85)*.65)*(2*Math.PI/9):time;
 const p=sampleMotion(motionTime,walk,kind,progress,actor.combo??1);
 if(actor.dodge>0){p.drop-=.12;p.lean+=.25;}
 actor.visual.position.y=actor.baseVisualY+p.drop;
 actor.root.updateMatrixWorld(true);
 const hurt=Math.max(actor.flash??0,actor.hurt??0);
 const body=pivotTransform(actor.pivots.hips,p.lean-hurt*1.7,p.twist);
 const transforms={body};
 for(const side of ['left','right']){
  const angles=p[side],v=actor.pivots[side];
  // Bind arms point sideways: rotating around global X twists them instead of bending.
  // Aim the actual shoulder->elbow and elbow->wrist axes at anatomical targets.
  const lateral=side==='left'?1:-1;
  const upper=new THREE.Vector3(lateral*.16,-Math.cos(angles[0]),-Math.sin(angles[0])).normalize();
  const lower=new THREE.Vector3(lateral*.12,-Math.cos(angles[0]+angles[1]),-Math.sin(angles[0]+angles[1])).normalize();
  const q=new THREE.Quaternion().setFromUnitVectors(v.elbow.clone().sub(v.shoulder).normalize(),upper);
  const elbowQ=new THREE.Quaternion().setFromUnitVectors(v.wrist.clone().sub(v.elbow).normalize(),lower.applyQuaternion(q.clone().invert()));
  const around=(point,rotation)=>new THREE.Matrix4().makeTranslation(point.x,point.y,point.z).multiply(new THREE.Matrix4().makeRotationFromQuaternion(rotation)).multiply(new THREE.Matrix4().makeTranslation(-point.x,-point.y,-point.z));
  transforms['arm'+side]=body.clone().multiply(around(v.shoulder,q));
  transforms['forearm'+side]=transforms['arm'+side].clone().multiply(around(v.elbow,elbowQ));
  transforms['leg'+side]=pivotTransform(v.hip,angles[2]);
  transforms['shin'+side]=transforms['leg'+side].clone().multiply(pivotTransform(v.knee,angles[3]));
 }
 const {desired}=actor.animationScratch;
 for(const b of actor.bind){desired.copy(actor.visual.matrixWorld).multiply(transforms[b.group==='body'?'body':b.group+b.side]).multiply(b.curledMatrix);let world=actor.posedWorld.get(b.bone);if(!world){world=new THREE.Matrix4();actor.posedWorld.set(b.bone,world);}world.copy(desired);}

 applyReferenceHands(actor);
 blendUserTransition(actor,time,kind??(walk?'walk':'fallback-idle'));groundPose(actor,0,{kind,time});updateRigidAttachments(actor);
 return p;
}
