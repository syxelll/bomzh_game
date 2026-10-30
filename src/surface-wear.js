import * as THREE from 'three';
import {DecalGeometry} from 'three/addons/geometries/DecalGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
let sharedMaterial;
function atlasMaterial(){
 if(sharedMaterial)return sharedMaterial;if(typeof document==='undefined')return null;
 const canvas=document.createElement('canvas'),pixels=typeof location!=='undefined'&&new URLSearchParams(location.search).get('quality')==='high'?2048:1024;canvas.width=pixels;canvas.height=pixels/2;const ctx=canvas.getContext('2d'),density=pixels/1024;ctx.scale(density,density);let seed=7149;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 for(let cell=0;cell<8;cell++){
  ctx.save();ctx.translate((cell%4)*256,Math.floor(cell/4)*256);ctx.beginPath();ctx.rect(5,5,246,246);ctx.clip();const damp=cell>=4;
  for(let n=0;n<170;n++){const x=10+random()*236,y=15+random()*228,r=6+random()*(damp?34:20);const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,damp?'#29322482':'#3c302578');g.addColorStop(1,'#31352100');ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);}
  if(!damp)for(let n=0;n<85;n++){const x=12+random()*232,y=18+random()*70,length=25+random()*180;const g=ctx.createLinearGradient(0,y,0,y+length);g.addColorStop(0,'#4c3723ad');g.addColorStop(.45,'#4d422c60');g.addColorStop(1,'#41452900');ctx.fillStyle=g;ctx.fillRect(x,y,.8+random()*4,length);}
  else for(let n=0;n<650;n++){ctx.fillStyle=n%3?'#4e5c3458':'#282e2558';ctx.beginPath();ctx.ellipse(14+random()*228,14+random()*228,.5+random()*6,.5+random()*4,random()*3,0,Math.PI*2);ctx.fill();}
  for(let n=0;n<1600;n++){ctx.fillStyle=n%4?'#2c302a38':'#99815a50';ctx.fillRect(8+random()*240,8+random()*240,.3+random()*1.3,.3+random()*1.8);}
  for(let n=0;n<14;n++){const x=15+random()*220,y=20+random()*215;ctx.strokeStyle='#292b2560';ctx.lineWidth=.4+random()*.8;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+random()*8,y+10);ctx.lineTo(x-5,y+17);ctx.lineTo(x+4,y+26);ctx.stroke();}
  ctx.globalCompositeOperation='destination-out';for(let n=0;n<140;n++){ctx.fillStyle=`rgba(0,0,0,${.12+random()*.6})`;ctx.fillRect(8+random()*240,8+random()*240,1+random()*4,.5+random()*2);}ctx.globalCompositeOperation='destination-in';const fade=ctx.createRadialGradient(128,128,55,128,128,127);fade.addColorStop(0,'#ffffffff');fade.addColorStop(1,'#ffffff00');ctx.fillStyle=fade;ctx.fillRect(0,0,256,256);ctx.restore();
 }
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;texture.name='Shared detailed grime atlas';sharedMaterial=new THREE.MeshStandardMaterial({map:texture,transparent:true,alphaTest:.02,depthWrite:false,roughness:1,polygonOffset:true,polygonOffsetFactor:-3,polygonOffsetUnits:-3});sharedMaterial.name='Dirt damp and runoff';return sharedMaterial;
}
const surfaceName=/Russian weathered concrete panels|brick|limestone|concrete wall|dampfoundation|entrance aged plaster|entrance chipped green|old wood|entrance doors|courtyard brick|courtyard limestone|courtyard damp foundation|courtyard old wood/i;
export function addSurfaceWear(root,location,material=atlasMaterial()){
 if(!material||root.getObjectByName('Surface_wear'))return null;root.updateMatrixWorld(true);const walls=[],floors=[];root.traverse(mesh=>{if(!mesh.isMesh||Array.isArray(mesh.material))return;if(surfaceName.test(mesh.material.name))walls.push(mesh);if(/asphalt|pavement tiles|entrance terrazzo/i.test(mesh.material.name))floors.push(mesh);});
 const ray=new THREE.Raycaster(),parts=[];let patches=0;
 const place=(x,y,w,h,cell,angle=0,ground=false)=>{
  ray.set(ground?new THREE.Vector3(x,2,y):new THREE.Vector3(x,y,3),ground?new THREE.Vector3(0,-1,0):new THREE.Vector3(0,0,-1));const hit=ray.intersectObjects(ground?floors:walls,false).find(h=>{const n=h.face.normal.clone().transformDirection(h.object.matrixWorld);return ground?n.y>.7:n.z>.7;});if(!hit)return;
  const source=hit.object,proxy=new THREE.Mesh(source.geometry,source.material);proxy.matrixWorld.copy(source.matrixWorld);if(source.isInstancedMesh){const instance=new THREE.Matrix4();source.getMatrixAt(hit.instanceId,instance);proxy.matrixWorld.multiply(instance);}
  const geometry=new DecalGeometry(proxy,hit.point,new THREE.Euler(ground?-Math.PI/2:0,0,angle),new THREE.Vector3(w,h,.045));if(!geometry.attributes.position.count){geometry.dispose();return;}
  const uv=geometry.attributes.uv,slot=cell-8;for(let i=0;i<uv.count;i++)uv.setXY(i,((slot%4)+(6+uv.getX(i)*244)/256)/4,(1-Math.floor(slot/4)+(6+uv.getY(i)*244)/256)/2);parts.push(geometry);patches++;
 };
 if(location==='entrance')for(const offset of[0,13]){for(const x of[.9,3.65,5.6,7.05,12.35])place(offset+x,.35,1.55,.7,14);for(const x of[2.15,5.1])place(offset+x,2.45,1.8,1.25,8);place(offset+.55,1.6,.8,2.6,11);place(offset+3.25,.8,1.05,1.5,8);place(offset+6.6,2.65,1.45,1,9);place(offset+2.15,.45,.85,.8,10);place(offset+12.1,1.7,.8,2.5,9);}
 else for(let i=0;i<14;i++){place(.7+i*1.85,.3,2,.65,12+i%4);place(1+i*1.85,1.6,.85,2.15,8+i%4);place(1.6+i*1.8,2.8,1.45,1.4,9);}
 for(let i=0;i<18;i++)place(1+i*1.4,i%2?2.8:-2.55,1.2+(i%3)*.4,1.6+(i%2)*.6,8+i%4,i*.4,true);
 if(!parts.length)return null;const geometry=mergeGeometries(parts);for(const g of parts)g.dispose();geometry.applyMatrix4(root.matrixWorld.clone().invert());const mesh=new THREE.Mesh(geometry,material);mesh.name='Surface_wear';mesh.userData.noShadow=true;mesh.userData.patches=patches;mesh.receiveShadow=true;mesh.castShadow=false;root.add(mesh);return mesh;
}
