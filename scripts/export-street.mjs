// Export the actual procedural meshes, rather than duplicating their dimensions.
import * as THREE from 'three';
import {writeFileSync} from 'node:fs';
import {Street} from '../src/world.js';
globalThis.document={createElement:()=>({width:512,height:128,getContext:()=>({fillRect(){},fillText(){},set fillStyle(v){},set font(v){},set textAlign(v){}})})};
const scene=new THREE.Scene(),street=new Street(scene,{textured:false}),chunks=[];
for(const index of [-1,0,1]){
 const {group}=street.makeChunk(index);group.updateMatrixWorld(true);const meshes=[];
 group.traverse(o=>{if(!o.isMesh)return;const count=o.isInstancedMesh?o.count:1;for(let instance=0;instance<count;instance++){
  const matrix=o.matrixWorld.clone();if(o.isInstancedMesh){const local=new THREE.Matrix4();o.getMatrixAt(instance,local);matrix.multiply(local);}
  const g=o.geometry,p=g.attributes.position,vertices=[];for(let i=0;i<p.count;i++){const v=new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(matrix);vertices.push([v.x,-v.z,v.y]);}
  const indices=g.index?Array.from(g.index.array):Array.from({length:p.count},(_,i)=>i),faces=[];for(let i=0;i<indices.length;i+=3)faces.push(indices.slice(i,i+3));meshes.push({vertices,faces,color:'#'+o.material.color.getHexString(),sign:!!o.material.map});
 }});

 chunks.push({index,meshes});
}
writeFileSync(process.argv[2] || '/tmp/street-meshes.json',JSON.stringify(chunks));
