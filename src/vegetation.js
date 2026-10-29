import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
let foliageMaterial,branchMaterial;
function materials(){
 if(foliageMaterial)return;
 let map=null;
 if(typeof document!=='undefined'){
  const canvas=document.createElement('canvas');canvas.width=128;canvas.height=256;const c=canvas.getContext('2d');
  const shade=c.createLinearGradient(0,0,128,0);shade.addColorStop(0,'#93978b');shade.addColorStop(.48,'#ececdb');shade.addColorStop(.52,'#c8cbb9');shade.addColorStop(1,'#818a77');c.fillStyle=shade;c.fillRect(0,0,128,256);
  c.strokeStyle='#e0e2c28c';c.lineWidth=1.5;
  for(let y=25;y<256;y+=27)for(const side of[-1,1]){c.beginPath();c.moveTo(64,y);c.quadraticCurveTo(64+side*20,y-15,64+side*60,y-37);c.stroke();}
  c.strokeStyle='#e9e5bb';c.lineWidth=2;c.beginPath();c.moveTo(64,256);c.lineTo(64,0);c.stroke();
  map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;
 }
 foliageMaterial=new THREE.MeshStandardMaterial({name:'Vegetation leaves',map,vertexColors:true,side:THREE.DoubleSide,roughness:.94});
 branchMaterial=new THREE.MeshStandardMaterial({name:'Vegetation branches',color:'#66543b',roughness:1});
}
// Real curved leaf silhouettes, shared materials and just two meshes per yard.
export function createVegetation(seed=1){
 materials();const root=new THREE.Group();root.name='Detailed_vegetation';const positions=[],colors=[],uvs=[],indices=[],branches=[];let leaves=0;
 let state=(seed+1)*73856093;const random=()=>((state=(Math.imul(state,1664525)+1013904223)>>>0)/4294967296);
 function stem(a,b,r){const d=b.clone().sub(a),g=new THREE.CylinderGeometry(r*.45,r,d.length(),5);g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize()));g.translate(...a.clone().add(b).multiplyScalar(.5).toArray());branches.push(g);}
 function leaf(base,direction,length,width,dry=false){
  const axis=direction.clone().normalize(),side=new THREE.Vector3().crossVectors(axis,new THREE.Vector3(.21,1,.13)).normalize(),normal=new THREE.Vector3().crossVectors(side,axis).normalize(),offset=positions.length/3;
  const color=new THREE.Color().setHSL(dry?.12:.22+random()*.055,.25+random()*.17,.16+random()*.12);
  for(let i=0;i<=5;i++){const t=i/5,spread=Math.pow(Math.sin(Math.PI*t),.8)*width*(i%2?.96:1);for(let j=-1;j<=1;j++){const p=base.clone().addScaledVector(axis,t*length).addScaledVector(side,j*spread).addScaledVector(normal,Math.sin(Math.PI*t)*length*(j===0?.12:.035)).add(new THREE.Vector3(0,-t*t*length*.18,0));positions.push(...p.toArray());const tint=color.clone().multiplyScalar(j===0?1.2:1);colors.push(tint.r,tint.g,tint.b);uvs.push((j+1)/2,1-t);}}
  for(let i=0;i<5;i++)for(let j=0;j<2;j++){const a=offset+i*3+j,b=a+3;if(i>0)indices.push(a,b,a+1);if(i<4)indices.push(a+1,b,b+1);}leaves++;
 }
 function bush(x,y,z,size=1){
  const origin=new THREE.Vector3(x,y,z);
  for(let b=0;b<9;b++){const angle=b*2.399+random()*.4,top=origin.clone().add(new THREE.Vector3(Math.cos(angle)*(.24+random()*.2)*size,(.48+random()*.38)*size,Math.sin(angle)*.36*size));stem(origin,top,.018*size);
   for(let t=0;t<4;t++){const start=origin.clone().lerp(top,.3+t*.18),a=angle+t*2.1,end=start.clone().add(new THREE.Vector3(Math.cos(a)*.28*size,.12*size,Math.sin(a)*.28*size));stem(start,end,.006*size);
    for(let n=0;n<6;n++){const point=start.clone().lerp(end,.2+n*.15),turn=a+(n%2?1:-1)*.95;leaf(point,new THREE.Vector3(Math.cos(turn),.2+random()*.8,Math.sin(turn)),(.14+random()*.11)*size,.055*size,random()<.07);}
   }
  }
 }
 function plant(x,y,z){const base=new THREE.Vector3(x,y,z),tip=base.clone().add(new THREE.Vector3((random()-.5)*.15,.65+random()*.3,(random()-.5)*.12));stem(base,tip,.012);
  for(let i=0;i<13;i++){const t=.12+i*.06,a=i*2.399,point=base.clone().lerp(tip,t);leaf(point,new THREE.Vector3(Math.cos(a),.4,Math.sin(a)),.23+random()*.13,.07+random()*.025);}
 }
 function grass(x,y,z){for(let i=0;i<15;i++){const angle=random()*Math.PI*2;leaf(new THREE.Vector3(x+(random()-.5)*.2,y,z+(random()-.5)*.2),new THREE.Vector3(Math.cos(angle)*.25,1,Math.sin(angle)*.25),.14+random()*.19,.009+random()*.009,random()<.3);}}
 function finish(){
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));g.setIndex(indices);g.computeVertexNormals();const foliage=new THREE.Mesh(g,foliageMaterial);foliage.name='Individual curved leaves and grass';foliage.castShadow=foliage.receiveShadow=true;root.add(foliage);
  if(branches.length){const merged=mergeGeometries(branches);branches.forEach(g=>g.dispose());const mesh=new THREE.Mesh(merged,branchMaterial);mesh.name='Branching stems';mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);}
  root.userData.leafCount=leaves;return root;
 }
 return {bush,plant,grass,finish};
}
