import * as THREE from 'three';
import {DecalGeometry} from 'three/addons/geometries/DecalGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
let sharedMaterial;
function atlasMaterial(){
 if(sharedMaterial)return sharedMaterial;if(typeof document==='undefined')return null;
 const canvas=document.createElement('canvas');canvas.width=canvas.height=1024;const ctx=canvas.getContext('2d');let seed=7149;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 for(let cell=0;cell<16;cell++){
  ctx.save();ctx.translate((cell%4)*256,Math.floor(cell/4)*256);ctx.beginPath();ctx.rect(5,5,246,246);ctx.clip();
  if(cell<4){const words=['РАЙОН','НЕ СПИ','ДВОР','СВОИ'],colors=['#b8a65d','#91a8a2','#ad6855','#d1c7a5'];ctx.translate(128,130);ctx.rotate((cell%2?1:-1)*.065);ctx.transform(1,-.07,-.15,1,0,0);ctx.font='900 53px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';ctx.strokeStyle='#202b29e0';ctx.lineWidth=14;ctx.strokeText(words[cell],0,0,217);ctx.strokeStyle=colors[(cell+1)%4];ctx.lineWidth=8;ctx.strokeText(words[cell],0,0,217);ctx.fillStyle=colors[cell];ctx.fillText(words[cell],0,0,217);ctx.strokeStyle='#ddd4af90';ctx.lineWidth=1.3;ctx.strokeText(words[cell],-1,-2,217);ctx.strokeStyle=colors[cell];ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-102,44);ctx.quadraticCurveTo(-20,64,108,25);ctx.stroke();for(let n=0;n<14;n++){const x=-90+random()*180;ctx.globalAlpha=.25+random()*.4;ctx.lineWidth=.8+random()*2;ctx.beginPath();ctx.moveTo(x,10);ctx.lineTo(x+1,18+random()*43);ctx.stroke();}
  }else if(cell<8){ctx.strokeStyle=['#c7bf9db0','#332e3bbd','#8d4143bd','#283c3cbf'][cell-4];ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=3+random()*2;for(let word=0;word<2;word++){ctx.beginPath();ctx.moveTo(22,90+word*65);for(let n=0;n<5;n++){const x=24+n*40,y=80+word*60;ctx.bezierCurveTo(x+58,y-70-random()*25,x-20,y+70,x+40,y+random()*25);}ctx.stroke();}ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(20,208);ctx.lineTo(228,175);ctx.moveTo(162,172);ctx.lineTo(237,182);ctx.lineTo(200,207);ctx.stroke();
  }else{
   const damp=cell>=12;for(let n=0;n<95;n++){const x=10+random()*236,y=15+random()*228,r=6+random()*(damp?34:20);const gradient=ctx.createRadialGradient(x,y,0,x,y,r);gradient.addColorStop(0,damp?'#303c2755':'#42382b48');gradient.addColorStop(1,'#31352100');ctx.fillStyle=gradient;ctx.fillRect(x-r,y-r,r*2,r*2);}
   if(!damp)for(let n=0;n<40;n++){const x=12+random()*232,y=18+random()*70,length=25+random()*148;const gradient=ctx.createLinearGradient(0,y,0,y+length);gradient.addColorStop(0,'#57412b80');gradient.addColorStop(.45,'#4d422c40');gradient.addColorStop(1,'#41452900');ctx.fillStyle=gradient;ctx.fillRect(x,y,.8+random()*4,length);}
   else for(let n=0;n<200;n++){ctx.fillStyle=n%3?'#4e5c3438':'#282e2538';ctx.beginPath();ctx.ellipse(14+random()*228,14+random()*228,1+random()*8,1+random()*5,random()*3,0,Math.PI*2);ctx.fill();}
  }
  // Distress the paint; alpha holes let the actual brick/plaster show through.
  ctx.setTransform(1,0,0,1,(cell%4)*256,Math.floor(cell/4)*256);ctx.globalAlpha=1;ctx.globalCompositeOperation='destination-out';for(let n=0;n<140;n++){ctx.fillStyle=`rgba(0,0,0,${.12+random()*.6})`;ctx.fillRect(8+random()*240,8+random()*240,1+random()*4,.5+random()*2);}ctx.restore();
 }
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;texture.name='Shared dirt and graffiti atlas';
 sharedMaterial=new THREE.MeshStandardMaterial({map:texture,transparent:true,alphaTest:.025,depthWrite:false,roughness:1,polygonOffset:true,polygonOffsetFactor:-3,polygonOffsetUnits:-3});sharedMaterial.name='Wall dirt and spray paint';return sharedMaterial;
}
const surfaceName=/brick|limestone|concrete wall|dampfoundation|entrance aged plaster|entrance chipped green|old wood|entrance doors/i;
export function addSurfaceWear(root,location,material=atlasMaterial()){
 if(!material||root.getObjectByName('Surface_wear'))return null;
 root.updateMatrixWorld(true);const candidates=[];root.traverse(mesh=>{if(mesh.isMesh&&!Array.isArray(mesh.material)&&surfaceName.test(mesh.material.name))candidates.push(mesh);});
 const floors=[];root.traverse(mesh=>{if(mesh.isMesh&&!Array.isArray(mesh.material)&&/asphalt|pavement tiles|entrance terrazzo/i.test(mesh.material.name))floors.push(mesh);});
 const ray=new THREE.Raycaster(),direction=new THREE.Vector3(0,0,-1),parts=[];let patches=0;
 const place=(x,y,w,h,cell,angle=0,ground=false)=>{
  ray.set(ground?new THREE.Vector3(x,2,y):new THREE.Vector3(x,y,3),ground?new THREE.Vector3(0,-1,0):direction);const hit=ray.intersectObjects(ground?floors:candidates,false).find(h=>{const n=h.face.normal.clone().transformDirection(h.object.matrixWorld);return ground?n.y>.7:n.z>.7;});if(!hit)return;
  const source=hit.object,proxy=new THREE.Mesh(source.geometry,source.material);proxy.matrixWorld.copy(source.matrixWorld);if(source.isInstancedMesh){const instance=new THREE.Matrix4();source.getMatrixAt(hit.instanceId,instance);proxy.matrixWorld.multiply(instance);}
  const orientation=new THREE.Euler(ground?-Math.PI/2:0,0,angle),geometry=new DecalGeometry(proxy,hit.point,orientation,new THREE.Vector3(w,h,.045));if(!geometry.attributes.position.count){geometry.dispose();return;}
  const uv=geometry.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,((cell%4)+(6+uv.getX(i)*244)/256)/4,(3-Math.floor(cell/4)+(6+uv.getY(i)*244)/256)/4);
  parts.push(geometry);patches++;
 };
 if(location==='entrance'){
  for(const offset of [0,13]){place(offset+1.15,.55,1.55,1.05,12);place(offset+3.25,.8,1.05,1.5,8);place(offset+5.5,.3,2.1,.5,13);place(offset+6.6,2.65,1.45,1,9);place(offset+12.2,.55,1.4,1.1,14);place(offset+2.15,.45,.85,.8,10);place(offset+3.25,1.65,1.15,.85,5,-.04);place(offset+12.1,1.35,1.5,.95,0,.035);place(offset+1,2.05,1.3,.8,6,-.04);place(offset+5.25,2.15,1.85,1.05,1,-.035);}
 }else{
  for(let i=0;i<8;i++){place(1.2+i*3.25,.38,2.2,.72,12+i%4);place(1.6+i*3.15,2.3,1.25,1.8,8+i%4);}
  for(const [x,y,w,h,cell]of [[1.05,1.3,1.5,.9,2],[4.8,1.25,2.15,1.1,0],[8.2,1.7,1.5,1,4],[11.6,1.25,1.7,1.05,3],[15.3,1.45,1.5,.95,6],[18.1,1.4,1.8,1.1,1],[21.3,1.65,1.4,1.05,7],[24.2,1.3,1.9,1.05,2]])place(x,y,w,h,cell,(x%3-1)*.04);
 }
 for(let i=0;i<9;i++)place(1+i*3,i%2?2.8:-2.55,.8+(i%3)*.4,1.1+(i%2)*.6,12+i%4,i*.4,true);
 if(!parts.length)return null;const geometry=mergeGeometries(parts);for(const g of parts)g.dispose();root.updateMatrixWorld(true);geometry.applyMatrix4(root.matrixWorld.clone().invert());const mesh=new THREE.Mesh(geometry,material);mesh.name='Surface_wear';mesh.userData.noShadow=true;mesh.userData.patches=patches;mesh.receiveShadow=true;mesh.castShadow=false;root.add(mesh);return mesh;
}
