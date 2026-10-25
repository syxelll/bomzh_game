import * as THREE from 'three';
// Sample an actual clothing/face vertex with the same skinning used by rendering.
export function surfaceAnchor(actor,pattern,normalized){
 let mesh;actor.visual.traverse(o=>{if(!mesh&&o.isSkinnedMesh&&pattern.test(o.name))mesh=o;});if(!mesh)return null;
 const positions=mesh.geometry.attributes.position,model=new THREE.Matrix4().copy(actor.visual.matrixWorld).invert().multiply(mesh.matrixWorld),box=new THREE.Box3(),p=new THREE.Vector3();
 for(let i=0;i<positions.count;i++)box.expandByPoint(p.fromBufferAttribute(positions,i).applyMatrix4(model));
 const size=box.getSize(new THREE.Vector3()),target=box.min.clone().add(size.clone().multiply(new THREE.Vector3(...normalized)));let nearest=0,best=Infinity;
 for(let i=0;i<positions.count;i++){p.fromBufferAttribute(positions,i).applyMatrix4(model).sub(target);const score=p.x*p.x*3+p.y*p.y*2+p.z*p.z;if(score<best){best=score;nearest=i;}}
 const position=new THREE.Vector3().fromBufferAttribute(positions,nearest).applyMatrix4(mesh.bindMatrix),joints=[];
 for(let c=0;c<4;c++){const weight=mesh.geometry.attributes.skinWeight.getComponent(nearest,c),i=mesh.geometry.attributes.skinIndex.getComponent(nearest,c);if(weight)joints.push({bone:mesh.skeleton.bones[i],inverse:mesh.skeleton.boneInverses[i],weight});}
 const scratch=new THREE.Vector3(),matrix=new THREE.Matrix4();
 return {get(out){out.set(0,0,0);for(const j of joints){matrix.multiplyMatrices(actor.posedWorld.get(j.bone)??j.bone.matrixWorld,j.inverse);out.addScaledVector(scratch.copy(position).applyMatrix4(matrix),j.weight);}return out.applyMatrix4(mesh.bindMatrixInverse).applyMatrix4(mesh.matrixWorld);}};
}
