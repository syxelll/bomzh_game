import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {propMaterials} from './prop-materials.js';
let palette;
function materials(){
 if(palette)return palette;
 const {metal,wood,trim,soil}=propMaterials();const blue=metal.clone();blue.name='Worn blue courtyard paint';blue.color.set('#68878d');const green=metal.clone();green.name='Worn green courtyard paint';green.color.set('#82936a');const rubber=new THREE.MeshStandardMaterial({name:'Old tyre rubber',color:'#292b26',roughness:1});
 let atlas=null,panelMap=null;
 if(typeof document!=='undefined'){
  const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=1024;const c=canvas.getContext('2d');
  const cards=[['УЛИЦА','ДВОРОВАЯ, 7'],['ПОДЪЕЗД 1','КВ. 1–20'],['ОБЪЯВЛЕНИЯ','УК «НАШ ДОМ»'],['УВАЖАЕМЫЕ ЖИЛЬЦЫ','СОБЛЮДАЙТЕ ЧИСТОТУ'],['САНТЕХНИК','РЕМОНТ · ВЫЗОВ МАСТЕРА'],['ГАРАЖ № 12','ПОСТОРОННИМ НЕ ВХОДИТЬ'],['1 ЭТАЖ','КВАРТИРЫ 1–8'],['ДВЕРЬ ЗАКРЫВАЙТЕ','БЕРЕГИТЕ ТЕПЛО']];
  for(let i=0;i<8;i++){const x=i%2*512,y=Math.floor(i/2)*256;c.save();c.translate(x,y);c.fillStyle=i===0?'#254c79':i===1?'#244a3a':'#d4cbb1';c.fillRect(0,0,512,256);c.strokeStyle=i<2?'#c7d2c3':'#777567';c.lineWidth=6;c.strokeRect(12,12,488,232);c.fillStyle=i<2?'#e2e0cf':'#343b35';c.textAlign='center';c.font='bold 28px Arial';c.fillText(cards[i][0],256,90);c.font=`bold ${i===0?44:26}px Arial`;c.fillText(cards[i][1],256,145);
   if(i>1){c.font='18px Arial';c.fillText(i===4?'С 9:00 ДО 18:00 · БЕЗ ВЫХОДНЫХ':'ИНФОРМАЦИЯ ДЛЯ ЖИТЕЛЕЙ',256,190);for(let n=0;n<9;n++){c.fillStyle='#424b3925';c.fillRect(38+n*49,220,1,26);}}
   for(let n=0;n<100;n++){const xx=(n*71.37)%512,yy=(n*43.19)%256;c.fillStyle=n%2?'#3e422f35':'#e8dfbe45';c.fillRect(xx,yy,n%7+1,n%3+1);}for(const xx of[24,488])for(const yy of[24,232]){c.fillStyle='#46493d';c.beginPath();c.arc(xx,yy,4,0,7);c.fill();}c.restore();
  }
  atlas=new THREE.CanvasTexture(canvas);atlas.colorSpace=THREE.SRGBColorSpace;
  const surface=document.createElement('canvas');surface.width=surface.height=512;const p=surface.getContext('2d');p.fillStyle='#aaa89a';p.fillRect(0,0,512,512);let seed=711;const rand=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
  for(let i=0;i<15000;i++){p.fillStyle=i%2?'#e8e4cb22':'#3d423321';p.fillRect(rand()*512,rand()*512,rand()*3+1,rand()*3+1);}
  // Large concrete panel joints, with worn sealant and runoff below them.
  p.fillStyle='#5a5f52';p.fillRect(0,0,5,512);p.fillRect(0,0,512,5);p.fillStyle='#ddd8bc90';p.fillRect(6,6,2,506);p.fillRect(6,6,506,2);
  for(let i=0;i<65;i++){const x=rand()*512,h=15+rand()*230,g=p.createLinearGradient(0,5,0,h);g.addColorStop(0,'#3a44313d');g.addColorStop(1,'#3a443100');p.fillStyle=g;p.fillRect(x,5,1+rand()*6,h);}
  for(let i=0;i<16;i++){const x=rand()*512,y=rand()*512;p.strokeStyle='#424b383d';p.lineWidth=.8;p.beginPath();p.moveTo(x,y);p.lineTo(x+9,y+13);p.lineTo(x+3,y+28);p.stroke();}
  panelMap=new THREE.CanvasTexture(surface);panelMap.colorSpace=THREE.SRGBColorSpace;panelMap.wrapS=panelMap.wrapT=THREE.RepeatWrapping;
 }
 const panels=new THREE.MeshStandardMaterial({name:'Russian weathered concrete panels',map:panelMap,color:panelMap?'#ffffff':'#aaa89a',roughness:1,bumpMap:panelMap,bumpScale:.012});
 const signs=new THREE.MeshStandardMaterial({name:'Russian enamel plaques and paper notices',map:atlas,color:atlas?'#ffffff':'#c4ceb9',roughness:.95});
 return palette={metal,wood,trim,soil,blue,green,rubber,panels,signs};
}
export function russianFacades(root){
 if(root.userData.russianFacades)return;root.userData.russianFacades=true;root.updateMatrixWorld(true);const {panels}=materials();
 root.traverse(mesh=>{if(!mesh.isMesh)return;
  // This authored batch also contains the American-style exterior stair flights.
  if(/AIR_CONDITIONER_/.test(mesh.name)||/FIRE_ESCAPE_/.test(mesh.name))mesh.visible=false;
  if(mesh.parent&&/AIR_CONDITIONER_|FIRE_ESCAPE_/.test(mesh.parent.name))mesh.visible=false;
  if(/FENCE_ROW_/.test(mesh.name)||/FENCE_ROW_/.test(mesh.parent?.name??''))mesh.visible=false;
  // Export merged some fire escape rails/flights into the bench's iron batch.
  // Keep the complete bench below 1.3 m and remove the elevated exterior stairs.
  if(!Array.isArray(mesh.material)&&mesh.material.name==='Light iron'){
   const g=mesh.geometry,p=g.attributes.position,indices=g.index,keep=[],v=new THREE.Vector3();
   for(let i=0;i<(indices?.count??p.count);i+=3){const triangle=[0,1,2].map(k=>indices?indices.getX(i+k):i+k);if(triangle.every(j=>v.fromBufferAttribute(p,j).applyMatrix4(mesh.matrixWorld).y<=1.3))keep.push(...triangle);}
   mesh.geometry=g.clone();mesh.geometry.setIndex(keep);mesh.geometry.computeBoundingBox();mesh.geometry.computeBoundingSphere();
  }
  if(!Array.isArray(mesh.material)&&/COURT_Limestone/.test(mesh.material.name)){
   mesh.material=panels;mesh.geometry=mesh.geometry.clone();const p=mesh.geometry.attributes.position,uv=mesh.geometry.attributes.uv,n=mesh.geometry.attributes.normal,v=new THREE.Vector3();
   for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(mesh.matrixWorld);uv.setXY(i,(Math.abs(n.getZ(i))>.5?v.x:v.z)/3.25,v.y/2.05);}uv.needsUpdate=true;
  }
 });
}
export function addRussianDetails(root,kind='street',variant=0){
 if(root.getObjectByName('Russian_neighborhood_details'))return;const group=new THREE.Group();group.name='Russian_neighborhood_details';const m=materials(),parts=new Map(),counts={intercoms:0,notices:0,playground:0};
 const add=(geometry,mat,x,y,z,rotation=null)=>{if(rotation)geometry.rotateZ(rotation);geometry.translate(x,y,z);if(!parts.has(mat))parts.set(mat,[]);parts.get(mat).push(geometry);};
 const box=(w,h,d,mat,x,y,z)=>add(new THREE.BoxGeometry(w,h,d),mat,x,y,z);
 const sign=(index,x,y,z,w,h)=>{const g=new THREE.PlaneGeometry(w,h),uv=g.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,(index%2+(.02+uv.getX(i)*.96))/2,(3-Math.floor(index/2)+(.02+uv.getY(i)*.96))/4);add(g,m.signs,x,y,z);};
 const rod=(a,b,r,mat)=>{const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),delta=end.clone().sub(start),g=new THREE.CylinderGeometry(r,r,delta.length(),8);g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize()));const center=start.add(end).multiplyScalar(.5);add(g,mat,center.x,center.y,center.z);};
 const entrance=(x,z,w=.95,h=2)=>{
  box(w-.03,h-.04,.045,m.green,x,h/2,z);for(const dx of[-w/2,w/2])box(.035,h+.04,.09,m.metal,x+dx,h/2,z+.02);
  box(w,.035,.09,m.metal,x,h,z+.02);sign(1,x-.05,h-.24,z+.029,w*.65,.21);
  const cx=x+w*.32;box(.13,.28,.045,m.metal,cx,1.22,z+.05);box(.085,.035,.012,m.rubber,cx,1.3,z+.08);
  for(let row=0;row<4;row++)for(let col=0;col<3;col++)box(.016,.012,.012,m.trim,cx-.028+col*.028,1.24-row*.03,z+.08);
  for(const dx of[-.13,.13])rod([x+dx,.8,z+.08],[x+dx,1.1,z+.08],.012,m.metal);box(.34,.025,.04,m.metal,x,.95,z+.08);
  box(w*.85,.25,.016,m.metal,x,.19,z+.03);sign(7,x,1.52,z+.03,w*.68,.19);counts.intercoms++;
 };
 if(kind==='street'){
  for(const x of[3.25,9.75,16.25,22.75])entrance(x,-3.96);
  // An enamel address replaces the old neon-like courtyard plaque on clear masonry.
  const plate=root.getObjectByName('Weathered_street_sign');if(plate){const face=plate.children.find(o=>o.isMesh&&o.geometry.type==='PlaneGeometry');if(face){const g=face.geometry,uv=g.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,(.02+uv.getX(i)*.96)/2,(3+.02+uv.getY(i)*.96)/4);face.material=m.signs;}}
 }else if(kind==='courtyard'){
  entrance(15.15,-8.815,1.18,2.27);entrance(23.2,-3.155,1.3,2.3);
  sign(0,23.2,2.5,-3.14,1.1,.32);
  // Notices are mounted on a freestanding board, away from every window and doorway.
  const x=variant%2?19.2:6.1,z=-4.35;for(const dx of[-.54,.54])rod([x+dx,0,z],[x+dx,2.05,z],.025,m.metal);box(1.25,1.25,.11,m.blue,x,1.45,z);box(1.1,1.1,.025,m.wood,x,1.45,z+.065);sign(2,x,1.91,z+.085,1.02,.22);for(let i=0;i<4;i++)sign(i%2?4:3,x-.27+i%2*.54,1.55-Math.floor(i/2)*.4,z+.087,.46,.34);counts.notices=4;
  // Low painted pipe fencing and half-buried tyres belong to the background, outside the combat lane.
  for(const bx of[5.6,20.4]){for(const dx of[-.82,.82])rod([bx+dx,0,-5.12],[bx+dx,.52,-5.12],.025,m.green);for(const yy of[.17,.43])rod([bx-.82,yy,-5.12],[bx+.82,yy,-5.12],.02,m.green);}
  if(variant===0){const x=17.6,z=-4.9;box(2.1,.12,1.7,m.soil,x,.06,z);for(const dz of[-.88,.88])box(2.25,.22,.12,m.blue,x,.14,z+dz);for(const dx of[-1.06,1.06])box(.12,.22,1.7,m.green,x+dx,.14,z);
   rod([x,0,z],[x,2.1,z],.065,m.wood);const roof=new THREE.ConeGeometry(1.12,.48,24);add(roof,m.green,x,2.15,z);const band=new THREE.TorusGeometry(1.1,.035,5,24);band.rotateX(Math.PI/2);add(band,m.blue,x,1.92,z);counts.playground++;
  }
  if(variant===3){for(const x of[9,13,17]){box(.045,2.15,.035,m.trim,x,1.12,-5.785);for(const dx of[-1.3,1.3])for(const yy of[.55,1.75])box(.17,.055,.06,m.rubber,x+dx,yy,-5.76);sign(5,x,1.67,-5.755,.9,.4);}}
 }else{
  for(const offset of[0,13]){sign(6,offset+2.15,2.15,-3.205,.48,.16);sign(2,offset+6.9,2.37,-3.16,1.02,.22);for(let i=0;i<6;i++)sign(i%2?4:3,offset+6.6+i%2*.48,2.13-Math.floor(i/2)*.37,-3.205,.35,.29);sign(7,offset+.95,1.8,-3.44,.55,.27);counts.notices+=6;}
 }
 for(const [mat,geometries]of parts){const geometry=mergeGeometries(geometries);geometries.forEach(g=>g.dispose());const mesh=new THREE.Mesh(geometry,mat);mesh.name=mat.name;mesh.castShadow=mat!==m.signs;mesh.receiveShadow=true;group.add(mesh);}group.userData={...counts,style:'Russian residential neighborhood'};root.add(group);return group;
}
