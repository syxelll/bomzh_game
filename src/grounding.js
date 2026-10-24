import * as THREE from 'three';
import {configureFootIK,solveFoot} from './foot-ik.js';
// Cache a handful of real sole vertices, not the conservative morph bounding box.
export function prepareGrounding(actor){
 const meshes=[];actor.visual.traverse(o=>{if(o.isSkinnedMesh&&/shoe|boot/i.test(o.name))meshes.push(o);});
 let bindMinimum=Infinity;
 actor.groundSamples=[];actor.groundJoints=new Map();actor.groundPrefixes=new Map();
 for(const mesh of meshes){
  const p=mesh.geometry.attributes.position,points=[];let min=Infinity;
  for(let i=0;i<p.count;i++){const v=new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(mesh.matrixWorld);min=Math.min(min,v.y);points.push(v);}
  bindMinimum=Math.min(bindMinimum,min);
  const bottom=points.map((p,i)=>({p,i})).filter(v=>v.p.y<=min+.025),chosen=new Set();
  for(const [x,z] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]){let best=bottom[0],score=-Infinity;for(const v of bottom){const value=v.p.x*x+v.p.z*z;if(value>score){score=value;best=v;}}if(best)chosen.add(best.i);}
  let lowest=0;for(let i=1;i<points.length;i++)if(points[i].y<points[lowest].y)lowest=i;chosen.add(lowest);
  actor.groundPrefixes.set(mesh,new THREE.Matrix4());
  for(const i of chosen){const joints=[];for(let c=0;c<4;c++){const index=mesh.geometry.attributes.skinIndex.getComponent(i,c),weight=mesh.geometry.attributes.skinWeight.getComponent(i,c);if(!weight)continue;const bone=mesh.skeleton.bones[index];let joint=actor.groundJoints.get(bone);if(!joint){joint={bone,inverse:mesh.skeleton.boneInverses[index],matrix:new THREE.Matrix4()};actor.groundJoints.set(bone,joint);}joints.push({joint,weight});}
   const lateral={l:0,r:0};for(const j of joints){const name=j.joint.bone.userData.name??j.joint.bone.name;if(name.endsWith('.l'))lateral.l+=j.weight;if(name.endsWith('.r'))lateral.r+=j.weight;}
   actor.groundSamples.push({mesh,side:lateral.l>lateral.r?'l':'r',position:new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(mesh.bindMatrix),joints});
  }
 }
 actor.groundScratch={p:new THREE.Vector3(),v:new THREE.Vector3()};
 actor.stableGroundOffset=Number.isFinite(bindMinimum)?-bindMinimum-.035:0;configureFootIK(actor);
}
export function footHeights(actor){
 if(!actor.groundSamples?.length)return {l:Infinity,r:Infinity};
 for(const [mesh,matrix] of actor.groundPrefixes)matrix.multiplyMatrices(mesh.matrixWorld,mesh.bindMatrixInverse);
 for(const joint of actor.groundJoints.values())joint.matrix.multiplyMatrices(actor.posedWorld.get(joint.bone)??joint.bone.matrixWorld,joint.inverse);
 const {p,v}=actor.groundScratch;const heights={l:Infinity,r:Infinity};
 for(const sample of actor.groundSamples){v.set(0,0,0);for(const {joint,weight} of sample.joints)v.addScaledVector(p.copy(sample.position).applyMatrix4(joint.matrix),weight);v.applyMatrix4(actor.groundPrefixes.get(sample.mesh));heights[sample.side]=Math.min(heights[sample.side],v.y);}
 return heights;
}
export function feetHeight(actor){const h=footHeights(actor),min=Math.min(h.l,h.r);return Number.isFinite(min)?min:null;}
function translateBody(actor,dy){for(const matrix of actor.posedWorld.values())matrix.elements[13]+=dy;}
export function groundPose(actor,groundY=0,{kind=null,time=0}={}){
 const min=feetHeight(actor);if(min===null||actor.health<=0||actor.down>0||Math.abs(actor.root.rotation.z)>.3){actor.feetY=null;return;}
 if(!kind&&actor.ikLegs?.size===2){
  const target=actor.stableGroundOffset+groundY;
  if(actor.groundMode!=='stable'){actor.groundMode='stable';actor.groundBlendStart=time;actor.groundBlendFrom=actor.groundOffset??target;}
  const t=Math.min(1,Math.max(0,(time-actor.groundBlendStart)/.16)),alpha=t*t*(3-2*t),offset=actor.groundBlendFrom+(target-actor.groundBlendFrom)*alpha;
  translateBody(actor,offset);actor.groundOffset=offset;
  // Keep the torso still; plant the supporting foot through the leg chain.
  for(let iteration=0;iteration<3;iteration++){
   const heights=footHeights(actor),lowest=Math.min(heights.l,heights.r);
   for(const side of ['l','r']){const y=heights[side];if(!Number.isFinite(y))continue;const u=Math.min(1,Math.max(0,(y-lowest)/.05)),weight=y<groundY?1:1-u*u*(3-2*u);solveFoot(actor,side,(groundY-y)*weight);}
  }
  actor.feetY=feetHeight(actor);return;
 }
 actor.groundMode='pose';const correction=groundY-min;translateBody(actor,correction);actor.groundOffset=correction;actor.feetY=groundY;
}
