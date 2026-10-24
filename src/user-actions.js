import * as THREE from 'three';
import {blendTransform,blendUserTransition} from './pose-transitions.js';
export {blendTransform,blendUserTransition} from './pose-transitions.js';
export function validateActions(data){if(data?.version!==1||!Array.isArray(data.bones)||!data.bones.length||!Number.isFinite(data.fps)||data.fps<=0)throw new Error('Invalid action data');for(const name of ['idle','jab_01','kick',...(data.clips?.walk?['walk']:[])]){const frames=data.clips?.[name]?.frames;if(!frames?.length||frames.some(f=>f.length!==data.bones.length*16||!f.every(Number.isFinite)))throw new Error(`Invalid clip ${name}`);}return data;}
export function attachUserActions(actor,data){actor.userActions=validateActions(data);actor.userBoneIndices=new Map(data.bones.map((name,i)=>[name,i*16]));actor.closedLoops=new Set(['idle','walk'].filter(name=>{const f=data.clips[name]?.frames;return f?.length&&f[0].every((v,i)=>Math.abs(v-f.at(-1)[i])<1e-5);}));}
const tempA=new THREE.Matrix4();
const blendA=new THREE.Matrix4(),blendB=new THREE.Matrix4(),loopFirst=new THREE.Matrix4();
function interpolateMatrix(out,a,b,alpha,offset=0){blendA.fromArray(a,offset);blendB.fromArray(b,offset);return blendTransform(out,blendA,blendB,alpha);}
function sample(actor,name,progress,time,offset,out){
 const frames=actor.userActions.clips[name].frames,loop=name==='idle'||name==='walk',last=frames.length-1;
 const frame=loop?(time*actor.userActions.fps)%Math.max(1,last):Math.max(0,Math.min(1,progress))*last;
 const lo=Math.floor(frame),hi=Math.min(last,lo+1);interpolateMatrix(out,frames[lo],frames[hi],frame-lo,offset);
 const tail=actor.closedLoops.has(name)?0:Math.min(8,last*.2);
 if(loop&&tail>0&&frame>last-tail){const t=(frame-(last-tail))/tail;loopFirst.fromArray(frames[0],offset);blendTransform(out,out,loopFirst,t*t*(3-2*t));}
 return out;
}

export function applyUserAction(actor,time,walk,kind,progress){
 if(!actor.userActions||actor.hurt>0||actor.dodge>0)return false;
 const name=kind==='jab'?'jab_01':kind==='kick'?'kick':!kind?(walk?(actor.userActions.clips.walk?'walk':null):'idle'):null;if(!name)return false;
 actor.visual.position.y=actor.baseVisualY;actor.root.updateMatrixWorld(true);
 const returning=kind==='jab'&&progress>.76;
 const sampleName=returning?'idle':name,clipProgress=kind==='jab'?Math.min(1,progress/.7):progress;
 function delta(bone,out){const offset=actor.userBoneIndices.get(bone);if(offset===undefined)return out.identity();return sample(actor,sampleName,clipProgress,returning?0:time,offset,out);}

 for(const b of actor.bind){delta(b.name,tempA);let world=actor.posedWorld.get(b.bone);if(!world){world=new THREE.Matrix4();actor.posedWorld.set(b.bone,world);}world.copy(actor.visual.matrixWorld).multiply(tempA).multiply(b.matrix);}

 return returning?'jab:return':name;
}
// Reuse the authored hand shape for procedural moves instead of curling weighted
// ARP control bones independently (which separates vertices at finger bases).
export function applyReferenceHands(actor){
 if(!actor.userActions)return;
 if(!actor.referenceFingers){
  actor.referenceFingers=[];const frame=actor.userActions.clips.idle.frames[0],byName=new Map(actor.bind.map(b=>[b.name,b]));
  for(const b of actor.bind){if(!/^(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie)/.test(b.name))continue;
   const side=b.name.endsWith('.l')?'.l':'.r',hand=byName.get('hand'+side),hi=actor.userBoneIndices.get('hand'+side),bi=actor.userBoneIndices.get(b.name);if(!hand||hi===undefined||bi===undefined)continue;
   const wrist=new THREE.Matrix4().fromArray(frame,hi).multiply(hand.matrix),finger=new THREE.Matrix4().fromArray(frame,bi).multiply(b.matrix);
   actor.referenceFingers.push({bone:b.bone,hand:hand.bone,relative:wrist.invert().multiply(finger)});
  }
 }
 for(const b of actor.referenceFingers){const hand=actor.posedWorld.get(b.hand);if(hand)actor.posedWorld.get(b.bone).copy(hand).multiply(b.relative);}
}
