import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {propMaterials} from './prop-materials.js';
export class ForegroundProps{
 constructor(scene,{lowQuality=false}={}){this.scene=scene;this.lowQuality=lowQuality;this.chunks=new Map();this.templates=new Map();this.palette=null;}
 template(kind){if(this.templates.has(kind))return this.templates.get(kind);this.palette??={...propMaterials(),rubber:new THREE.MeshStandardMaterial({name:'Foreground old tyre rubber',color:'#292d28',roughness:1}),paper:new THREE.MeshStandardMaterial({name:'Foreground dirty paper',color:'#958b6f',roughness:1})};const m=this.palette,parts=new Map(),root=new THREE.Group();root.name='Foreground_'+kind;
 const add=(g,material,x,y,z,rotate=null)=>{if(rotate)g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(...rotate)));g.translate(x,y,z);if(!parts.has(material))parts.set(material,[]);parts.get(material).push(g);};
 const box=(w,h,d,material,x,y,z)=>add(new THREE.BoxGeometry(w,h,d),material,x,y,z);
 const ring=(radius,tube,y,material=m.metal)=>add(new THREE.TorusGeometry(radius,tube,6,28),material,0,y,0,[Math.PI/2,0,0]);
 if(kind==='crate'){
  for(const z of[-.24,.24])for(let row=0;row<3;row++)box(.64,.125,.045,m.wood,0,.09+row*.15,z);
  for(const x of[-.3,.3]){for(let row=0;row<3;row++)box(.045,.125,.48,m.wood,x,.09+row*.15,0);for(const z of[-.21,.21])box(.055,.48,.055,m.wood,x,.24,z);}
  for(let i=0;i<4;i++)box(.14,.045,.48,m.wood,-.225+i*.15,.03,0);
  for(const x of[-.27,.27])for(const y of[.10,.39])add(new THREE.CylinderGeometry(.009,.009,.012,6),m.metal,x,y,.268,[Math.PI/2,0,0]);
 }else if(kind==='tyres'){
  ring(.21,.07,.075,m.rubber);add(new THREE.TorusGeometry(.21,.07,10,32),m.rubber,.20,.28,.12,[-.25,.35,0]);
  for(let i=0;i<28;i++){const a=i*Math.PI/14,g=new THREE.BoxGeometry(.045,.012,.05);g.rotateY(-a);g.translate(Math.cos(a)*.26,.143,Math.sin(a)*.26);if(!parts.has(m.rubber))parts.set(m.rubber,[]);parts.get(m.rubber).push(g);}
 }else if(kind==='bollard'){
  add(new THREE.CylinderGeometry(.048,.06,.78,12),m.metal,0,.42,0);add(new THREE.CylinderGeometry(.105,.105,.07,12),m.metal,0,.035,0);add(new THREE.SphereGeometry(.049,12,6),m.metal,0,.81,0);add(new THREE.CylinderGeometry(.050,.053,.09,12),m.trim,0,.62,0);
 }else{
  for(const y of[.06,.3,.59])ring(.17,.012,y);
  for(let i=0;i<16;i++){const a=i*Math.PI/8;add(new THREE.CylinderGeometry(.008,.008,.53,6),m.metal,Math.cos(a)*.17,.325,Math.sin(a)*.17);}
  add(new THREE.CylinderGeometry(.14,.14,.035,16),m.metal,0,.05,0);for(const x of[-.13,.13])box(.035,.10,.035,m.metal,x,.05,0);
  for(let i=0;i<4;i++){const g=new THREE.PlaneGeometry(.11,.12,2,2),p=g.attributes.position;for(let j=0;j<p.count;j++)p.setZ(j,Math.sin(j*1.7+i)*.02);g.computeVertexNormals();add(g,m.paper,Math.sin(i*2)*.07,.23+i*.045,Math.cos(i*2)*.06,[-1.1,i*.8,0]);}
 }
 for(const [material,geometries]of parts){const normalized=geometries.map(g=>g.index?g.toNonIndexed():g),geometry=mergeGeometries(normalized);geometries.forEach(g=>g.dispose());const mesh=new THREE.Mesh(geometry,material);mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);}root.updateMatrixWorld(true);root.traverse(o=>{o.updateMatrix();o.matrixAutoUpdate=false;});this.templates.set(kind,root);return root;
 }
 update(x,outdoors=true){if(!outdoors){for(const root of this.chunks.values())root.visible=false;return;}const index=Math.floor(x/8),kinds=['crate','tyres','bollard','bin'];for(let i=index-2;i<=index+2;i++){
  if(!this.chunks.has(i)){const root=new THREE.Group();root.name='Foreground_section_'+i;root.position.x=i*8;const n=((i%4)+4)%4,count=this.lowQuality?1:2;
   for(let j=0;j<count;j++){const prop=this.template(kinds[(n+j*2)%4]).clone(true);prop.position.set(j?6.3:1.7,.0,j?3.25:3.08);prop.rotation.y=(i*1.17+j*.8);prop.updateMatrix();root.add(prop);}this.scene.add(root);this.chunks.set(i,root);
  }this.chunks.get(i).visible=true;
 }for(const [i,root]of this.chunks)if(Math.abs(i-index)>2){this.scene.remove(root);this.chunks.delete(i);}
 }
}
