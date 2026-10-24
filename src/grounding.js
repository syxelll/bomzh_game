import * as THREE from 'three';
// Cache a handful of real sole vertices, not the conservative morph bounding box.
export function prepareGrounding(actor){
 const meshes=[];actor.visual.traverse(o=>{if(o.isSkinnedMesh&&/shoe|boot/i.test(o.name))meshes.push(o);});
 actor.groundSamples=[];actor.groundJoints=new Map();actor.groundPrefixes=new Map();
 for(const mesh of meshes){
  const p=mesh.geometry.attributes.position,points=[];let min=Infinity;
  for(let i=0;i<p.count;i++){const v=new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(mesh.matrixWorld);min=Math.min(min,v.y);points.push(v);}
  const bottom=points.map((p,i)=>({p,i})).filter(v=>v.p.y<=min+.025),chosen=new Set();
  for(const [x,z] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]){let best=bottom[0],score=-Infinity;for(const v of bottom){const value=v.p.x*x+v.p.z*z;if(value>score){score=value;best=v;}}if(best)chosen.add(best.i);}
  let lowest=0;for(let i=1;i<points.length;i++)if(points[i].y<points[lowest].y)lowest=i;chosen.add(lowest);
  actor.groundPrefixes.set(mesh,new THREE.Matrix4());
  for(const i of chosen){const joints=[];for(let c=0;c<4;c++){const index=mesh.geometry.attributes.skinIndex.getComponent(i,c),weight=mesh.geometry.attributes.skinWeight.getComponent(i,c);if(!weight)continue;const bone=mesh.skeleton.bones[index];let joint=actor.groundJoints.get(bone);if(!joint){joint={bone,inverse:mesh.skeleton.boneInverses[index],matrix:new THREE.Matrix4()};actor.groundJoints.set(bone,joint);}joints.push({joint,weight});}
   actor.groundSamples.push({mesh,position:new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(mesh.bindMatrix),joints});
  }
 }
 actor.groundScratch={p:new THREE.Vector3(),v:new THREE.Vector3()};
}
export function feetHeight(actor){
 if(!actor.groundSamples?.length)return null;
 for(const [mesh,matrix] of actor.groundPrefixes)matrix.multiplyMatrices(mesh.matrixWorld,mesh.bindMatrixInverse);
 for(const joint of actor.groundJoints.values())joint.matrix.multiplyMatrices(actor.posedWorld.get(joint.bone)??joint.bone.matrixWorld,joint.inverse);
 const {p,v}=actor.groundScratch;let min=Infinity;
 for(const sample of actor.groundSamples){v.set(0,0,0);for(const {joint,weight} of sample.joints)v.addScaledVector(p.copy(sample.position).applyMatrix4(joint.matrix),weight);v.applyMatrix4(actor.groundPrefixes.get(sample.mesh));min=Math.min(min,v.y);}
 return min;
}
export function groundPose(actor,groundY=0){
 const min=feetHeight(actor);if(min===null||actor.health<=0||actor.down>0||Math.abs(actor.root.rotation.z)>.3){actor.feetY=null;return;}
 const correction=groundY-min;for(const matrix of actor.posedWorld.values())matrix.elements[13]+=correction;
 actor.groundOffset=correction;actor.feetY=groundY;
}
