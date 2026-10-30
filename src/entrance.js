import {createAgedWindowSet} from './aged-windows.js';
import * as THREE from 'three';
export {locationForStage} from './route.js';
export const locationNames={street:'Улица',entrance:'Подъезд'};
function textures(){if(typeof document==='undefined')return {};let seed=93;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const make=kind=>{const c=document.createElement('canvas');c.width=c.height=512;const ctx=c.getContext('2d');ctx.fillStyle=kind==='floor'?'#89857a':'#c1b9a2';ctx.fillRect(0,0,512,512);for(let i=0;i<3500;i++){ctx.fillStyle=rand()>.5?'#292f2112':'#fff5d318';ctx.fillRect(rand()*512,rand()*512,rand()*8+1,rand()*9+1);}if(kind==='floor'){for(let y=0;y<512;y+=64)for(let x=0;x<512;x+=64){ctx.fillStyle=(x+y)%128?'#383c3325':'#d4c7ac20';ctx.fillRect(x+1,y+1,62,62);ctx.strokeStyle='#33382e80';ctx.strokeRect(x,y,64,64);}}else{for(let i=0;i<90;i++){const x=rand()*512,y=rand()*512;ctx.fillStyle='#7c786734';ctx.beginPath();ctx.ellipse(x,y,rand()*20+2,rand()*13+2,rand()*3,0,Math.PI*2);ctx.fill();}ctx.strokeStyle='#4c52434a';for(let i=0;i<12;i++){let x=rand()*512,y=rand()*512;ctx.beginPath();ctx.moveTo(x,y);for(let j=0;j<5;j++){x+=(rand()-.5)*26;y+=rand()*25;ctx.lineTo(x,y);}ctx.stroke();}}
 const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.colorSpace=THREE.SRGBColorSpace;return t;};return {wall:make('wall'),floor:make('floor')};}
export function createEntrance(){
 const root=new THREE.Group();root.name='Entrance_26m';const windows=createAgedWindowSet();const tex=textures(),unit=new THREE.BoxGeometry(1,1,1),cylinder=new THREE.CylinderGeometry(.022,.022,1,6),batches=new Map();
 const material=(name,color,map=null,extra={})=>{const m=new THREE.MeshStandardMaterial({color,map,roughness:.94,...extra});m.name=name;return m;};
 if(tex.floor)tex.floor.repeat.set(6.5,5.75);if(tex.wall)tex.wall.repeat.set(3,1.5);
 const plaster=material('Entrance aged plaster','#d9cead',tex.wall),paint=material('Entrance chipped green paint','#748774',tex.wall),floor=material('Entrance terrazzo','#b3b0a0',tex.floor),concrete=material('Entrance concrete stairs','#8e9182',tex.wall),metal=material('Entrance painted steel','#4b5c57',null,{metalness:.3}),dark=material('Entrance recess','#282e29'),wood=material('Entrance doors','#695c44',tex.wall),paper=material('Entrance paper','#e4d9ba'),glass=material('Entrance window glass','#455c66',null,{emissive:'#526f7c',emissiveIntensity:.45}),lamp=material('Entrance warm lamps','#e4cd8a',null,{emissive:'#ffbf60',emissiveIntensity:2});
 function add(geometry,mat,position,scale,rotation=null,shadow=true){const mesh=new THREE.Mesh(geometry,mat);mesh.position.fromArray(position);mesh.scale.fromArray(scale);if(rotation)mesh.rotation.set(...rotation);mesh.updateMatrix();const key=geometry.uuid+mat.uuid+shadow;if(!batches.has(key))batches.set(key,{geometry,mat,shadow,meshes:[]});batches.get(key).meshes.push(mesh);return mesh;}
 const box=(name,w,h,d,mat,x,y,z,rot=null,shadow=true)=>{const mesh=add(unit,mat,[x,y,z],[w,h,d],rot,shadow);mesh.name=name;return mesh;};
 box('Continuous level floor',26,.16,23,floor,13,-.08,2.5,null,false);
 for(let bay=0;bay<2;bay++){const offset=bay*13;
  // Wall opening exposes a staircase, while the fighting lane remains flat.
  for(const [x,w]of [[3.95,7.9],[12.35,1.3]]){box('Plaster upper wall',w,3.1,.24,plaster,offset+x,2.85,-3.6);box('Green lower wall',w,1.3,.25,paint,offset+x,.65,-3.59);box('Skirting',w,.14,.29,metal,offset+x,.07,-3.55);box('Paint border',w,.045,.28,metal,offset+x,1.3,-3.55);}
  // Close the sides and ceiling of the recess: the oblique camera must not see sky through it.
  for(const sideX of [7.88,11.72]){box('Stairwell side plaster',.2,3.2,3.15,plaster,offset+sideX,2.9,-5.05);box('Stairwell side green paint',.22,1.3,3.15,paint,offset+sideX,.65,-5.05);}
  box('Stairwell ceiling',4,.16,3.25,plaster,offset+9.8,4.5,-5.05,null,false);
  box('Stairwell back wall',3.8,4.5,.2,plaster,offset+9.8,2.25,-6.5);box('Stairwell landing',3.8,.16,1,concrete,offset+9.8,1.68,-6.05);
  for(let step=0;step<12;step++){const height=(step+1)*.14,z=-3.7-step*.2;box('Stair tread',2.15,height,.22,concrete,offset+9.8,height/2,z);for(const side of [-1,1]){const x=offset+9.8+side*1.12;box('Stair baluster',.035,.85,.035,metal,x,height+.425,z);}}
  for(const side of [-1,1]){const a=new THREE.Vector3(offset+9.8+side*1.12,.96,-3.7),b=new THREE.Vector3(a.x,2.5,-5.9),length=a.distanceTo(b),mesh=add(cylinder,metal,a.clone().add(b).multiplyScalar(.5).toArray(),[1,length,1]);mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),b.sub(a).normalize());mesh.updateMatrix();}
  box('Landing rail',3.5,.06,.06,metal,offset+9.8,2.5,-6.05);for(let n=0;n<9;n++)box('Landing rail post',.035,.75,.035,metal,offset+8.2+n*.4,2.13,-6.05);
  box('Door recess',1.42,2.48,.16,dark,offset+2.15,1.24,-3.4);box('Apartment door',1.16,2.3,.12,wood,offset+2.15,1.15,-3.29);for(const dx of [-.63,.63])box('Door trim',.09,2.4,.2,metal,offset+2.15+dx,1.2,-3.23);box('Door lintel',1.36,.1,.2,metal,offset+2.15,2.43,-3.23);box('Door handle',.13,.035,.07,metal,offset+2.55,1.03,-3.18);box('Peephole',.035,.035,.03,metal,offset+2.15,1.68,-3.19);
  for(let row=0;row<2;row++)for(let col=0;col<4;col++){const x=offset+4.3+col*.39,y=1.15+row*.42;box('Mailbox frame',.38,.4,.21,dark,x,y,-3.35);box('Mailbox door',.34,.35,.025,col%3?metal:paint,x,y,-3.23);box('Mailbox letter slot',.23,.025,.015,dark,x,y+.1,-3.207);box('Mailbox label',.1,.04,.018,paper,x,y-.07,-3.2);}
  box('Noticeboard frame',1.3,1.45,.12,wood,offset+6.9,1.8,-3.35);box('Noticeboard backing',1.17,1.3,.03,dark,offset+6.9,1.8,-3.27);for(let n=0;n<6;n++){const x=offset+6.6+(n%2)*.48,y=2.13-Math.floor(n/2)*.37;box('Paper notices',.36,.3,.015,paper,x,y,-3.24,[0,0,(n%3-1)*.06]);for(let line=0;line<3;line++)box('Notice ink',.24,.012,.018,metal,x,y+.06-line*.045,-3.23);}
  for(const [col,wx]of [2.15,5.1].entries())windows.add(offset+wx,3.28,-3.475,1.7,1.12,0,bay*3+col+1);
  box('Ceiling edge',13,.24,.38,concrete,offset+6.5,4.35,-3.5,null,false);box('Ceiling soffit',13,.13,4.8,plaster,offset+6.5,4.5,-1.1,null,false);
  box('Lamp bracket',.32,.1,.35,metal,offset+4,3.92,-3.21);box('Warm bulkhead lamp',.21,.26,.12,lamp,offset+4,3.73,-3.15,null,false);
  for(let pipe=0;pipe<2;pipe++)box('Old heating pipe',.055,3.8,.055,metal,offset+.45+pipe*.13,1.9,-3.28);
  for(let n=0;n<7;n++)box('Radiator section',.08,.6,.18,paper,offset+6.15+n*.11,.46,-3.25);
  for(let n=0;n<7;n++)box('Scattered paper',.16,.007,.12,paper,offset+1+n*1.7,.009,n%2?2.5:-2.65,[0,n*.8,0],false);
 }
 for(const {geometry,mat,shadow,meshes}of batches.values()){const batch=new THREE.InstancedMesh(geometry,mat,meshes.length);for(let i=0;i<meshes.length;i++)batch.setMatrixAt(i,meshes[i].matrix);batch.castShadow=shadow;batch.receiveShadow=true;batch.computeBoundingSphere();batch.name=mat.name;root.add(batch);}
 const windowGroup=windows.finish();root.add(...windowGroup.children.slice());root.userData.windowAnchors=windows.stats.anchors;root.userData.windowCount=windows.stats.count;
 return root;
}
export function swapLocation(street,template,x){const taken=new Map([...street.chunks].map(([i,c])=>[i,c.bottles.map(b=>b.taken)]));street.setEnvironment(template);street.update(x);for(const[i,c]of street.chunks){const previous=taken.get(i);if(previous)c.bottles.forEach((b,j)=>{if(previous[j]){b.taken=true;b.mesh.visible=false;}});}}
