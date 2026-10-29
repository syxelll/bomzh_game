import * as THREE from 'three';
import {streetTextures} from './street-materials.js';
export class Street{
 constructor(scene,{textured=true,editable=false}={}){this.editable=editable;this.scene=scene;this.chunks=new Map();this.unit=new THREE.BoxGeometry(1,1,1);this.plane=new THREE.PlaneGeometry(1,1);this.body=new THREE.LatheGeometry([[0,0],[.062,0],[.072,.02],[.072,.28],[.06,.31],[.03,.34],[.027,.45],[.031,.46],[0,.46]].map(([x,y])=>new THREE.Vector2(x,y)),10);this.label=new THREE.CylinderGeometry(.073,.073,.12,10,1,true);this.ring=new THREE.TorusGeometry(.17,.015,5,20);this.materials=new Map();this.geometries=new Map();this.textures=textured?streetTextures():{};this.chunkIndex=null;this.labelMaterial=new THREE.MeshStandardMaterial({color:'#cdbf94',roughness:.94});this.labelMaterial.name='Bottle_label';if(typeof document!=='undefined'){const canvas=document.createElement('canvas');canvas.width=128;canvas.height=64;const ctx=canvas.getContext('2d');ctx.fillStyle='#cdbf94';ctx.fillRect(0,0,128,64);ctx.fillStyle='#753c31';ctx.fillRect(0,23,128,18);ctx.fillStyle='#e6d5b0';ctx.font='bold 10px Arial';ctx.textAlign='center';ctx.fillText('КВАС',32,36);ctx.fillText('КВАС',96,36);this.labelMaterial.color.set('#ffffff');this.labelMaterial.map=new THREE.CanvasTexture(canvas);this.labelMaterial.map.colorSpace=THREE.SRGBColorSpace;}}
 material(color,kind='plain'){const key=kind+color;if(!this.materials.has(key)){const t=this.textures,m=new THREE.MeshStandardMaterial({color,roughness:kind==='metal'?.76:.96});if(kind==='brick'){m.map=t.brick;m.bumpMap=t.brickBump;m.bumpScale=.028;}if(['asphalt','concrete','rust'].includes(kind)){m.map=t[kind];m.bumpMap=t[kind];m.bumpScale=kind==='asphalt'?.025:.012;}this.materials.set(key,m);}return this.materials.get(key);}
 metricBox(w,h,d,tile){const key=[w,h,d,tile].join(':');if(!this.geometries.has(key)){const g=new THREE.BoxGeometry(w,h,d),p=g.attributes.position,n=g.attributes.normal,uv=g.attributes.uv;for(let i=0;i<p.count;i++){if(Math.abs(n.getY(i))>.5)uv.setXY(i,p.getX(i)/tile,p.getZ(i)/tile);else uv.setXY(i,(Math.abs(n.getX(i))>.5?p.getZ(i):p.getX(i))/tile,p.getY(i)/tile);}this.geometries.set(key,g);}return this.geometries.get(key);}
 setEnvironment(template){
  for(const chunk of this.chunks.values()){this.scene.remove(chunk.group);for(const resource of chunk.local)resource.dispose();}
  this.chunks.clear();this.template=template;this.chunkIndex=null;
  template.traverse(o=>{if(o.isMesh){o.castShadow=!o.userData.noShadow;o.receiveShadow=true;}});
 }
 addBottles(group,index){
  const bottles=[];
  for(let i=0;i<5;i++){const object=new THREE.Group(),body=new THREE.Mesh(this.body,this.material('#756033')),label=new THREE.Mesh(this.label,this.labelMaterial),ring=new THREE.Mesh(this.ring,this.material('#e7c25c'));label.position.y=.18;ring.rotation.x=-Math.PI/2;ring.position.y=.018;object.add(body,label,ring);if(this.editable)for(const m of [body,label,ring])m.userData.module={kind:'pickup',id:String(i)};const x=2+i*4.7,z=Math.sin(index*3+i*2.1)*1.5;object.position.set(x,0,z);group.add(object);bottles.push({mesh:object,x:index*26+x,z,taken:false});}
  return bottles;
 }
 makeChunk(index){
  if(this.template){const group=new THREE.Group();group.position.x=index*26;const scenery=this.template.clone(true),local=[];scenery.traverse(o=>{o.updateMatrix();o.matrixAutoUpdate=false;if(o.isInstancedMesh)local.push(o);});group.add(scenery);const bottles=this.addBottles(group,index);this.scene.add(group);return {group,bottles,local};}
  const group=new THREE.Group(),bottles=[],local=[],staticMeshes=[];group.position.x=index*26;
  let module={kind:'road',id:'road'};const mark=(kind,id)=>module={kind,id:String(id)};
  const box=(w,h,d,color,x,y,z,kind='plain')=>{const textured=['brick','asphalt','concrete','rust'].includes(kind),geometry=textured?this.metricBox(w,h,d,kind==='asphalt'?4:2):this.unit,m=new THREE.Mesh(geometry,this.material(color,kind));if(!textured)m.scale.set(w,h,d);m.position.set(x,y,z);if(this.editable)m.userData.module=module;staticMeshes.push(m);return m;};
  box(26,.2,18,'#c3c3bd',13,-.1,0,'asphalt');box(26,.05,1.7,'#b5b5a7',13,-.03,-2.85,'concrete');box(26,.18,.25,'#868a7c',13,-.02,-1.98,'concrete');box(26,.05,1.6,'#a6a99b',13,-.035,3.3,'concrete');box(26,.18,.25,'#858b7c',13,-.02,2.5,'concrete');
  const palette=['#c4b8ab','#c1b1a3','#b2ada2','#c1b3a7'];
  for(let i=0;i<4;i++){
   const x=3.25+i*6.5,h=6.8+((Math.abs(index)+i)%3)*.5,color=palette[((index+i)%4+4)%4];
   mark('building',i);box(6.5,h,3,color,x,h/2,-5.6,'brick');box(6.5,.18,3.15,'#797b70',x,h,-5.6,'concrete');box(6.5,.45,.08,'#535c50',x,.22,-4.06);
   for(let floor=0;floor<4;floor++)for(let j=0;j<3;j++){
    const wx=x-1.8+j*1.8,y=1.25+floor*1.65;
    mark(floor===0&&j===1?'door':'window',i+':'+floor+':'+j);if(floor===0&&j===1){box(.95,2,.15,i%2?'#48574e':'#66514a',wx,1,-4.0,'rust');box(1.12,.12,.22,'#858a7d',wx,2,-3.96,'concrete');box(.055,.06,.05,'#b4aa83',wx+.31,1,-3.89);continue;}
    box(.93,1.25,.11,'#777e73',wx,y,-4.01);box(.75,1.05,.14,'#343e3b',wx,y,-3.98);box(.035,1.05,.17,'#616b62',wx,y,-3.97);box(.75,.035,.17,'#616b62',wx,y,-3.97);box(1,.09,.25,'#8d9183',wx,y-.64,-3.94,'concrete');
    if(j===2&&floor===1){mark('air_conditioner',i);box(.65,.38,.4,'#9a9b8c',wx,y-.36,-3.72);for(let n=0;n<4;n++)box(.52,.023,.04,'#525d54',wx,y-.48+n*.07,-3.50);}
   }
   // Thin metal fire escapes, with landings above the playable lane.
   mark('fire_escape',i);if(i%2===0){for(let floor=1;floor<=3;floor++){const y=floor*1.65+.25;box(2.5,.09,.7,'#343d35',x,y,-3.65,'metal');box(2.5,.05,.05,'#323d35',x,y+.7,-3.28,'metal');for(let n=0;n<6;n++)box(.035,.7,.035,'#343d35',x-1.2+n*.48,y+.35,-3.28,'metal');for(const dx of [-1.2,1.2])box(.045,.7,.65,'#343d35',x+dx,y+.35,-3.65,'metal');if(floor<3){for(const dx of [-.32,.32])box(.04,1.95,.05,'#343d35',x+.6+dx,y+.86,-3.42,'metal').rotation.z=-.38;for(let n=0;n<8;n++)box(.7,.035,.06,'#343d35',x+.3+n*.09,y+.13+n*.21,-3.42,'metal');}if(floor===2&&((index+i)%3===0))for(let n=0;n<3;n++)box(.4,.55,.025,n%2?'#9d9e8c':'#c5c0a9',x-.65+n*.45,y+.4,-3.22);}}
   mark('downpipe',i);box(.07,h,.1,'#48574c',x+2.9,h/2,-3.97,'metal');
   mark('pallet',i);if(i===1){for(let n=0;n<4;n++)box(.1,1.1,.08,'#81775c',x-1+n*.25,.57,-3.7).rotation.z=-.12;box(1,.08,.08,'#81775c',x-.6,.35,-3.65);}
  }
  for(const x of [4,17]){mark('streetlight',x);box(.1,4.2,.1,'#657365',x,2.1,-2.5,'metal');box(1.25,.08,.1,'#657365',x+.55,4.16,-2.5,'metal');box(.6,.15,.3,'#9a9e8d',x+1.05,4.06,-2.5);box(.26,.22,.26,'#696f5e',x,.11,-2.5);}
  mark('bench',0);box(1.7,.12,.6,'#76654c',11,.55,-2.7);box(1.7,.55,.1,'#76654c',11,.86,-3);for(const dx of [-.6,.6])box(.08,.55,.4,'#435347',11+dx,.27,-2.7,'metal');mark('dumpster',0);box(.85,1.05,.7,'#b0b8a0',21,.52,-2.7,'rust');box(.94,.07,.78,'#5d6c59',21,1.07,-2.7,'metal');
  // Decorative litter remains separate from the highlighted collectible bottles.
  for(let i=0;i<15;i++){mark('litter',i);const x=(i*7.13+Math.abs(index)*.9)%26,z=i%2?-1.7-(i%3)*.14:2.15;box(.16+(i%3)*.04,.009,.11,i%4?'#b3b2a0':'#815243',x,.012,z).rotation.y=i*2.1;}
  const canvas=document.createElement('canvas');canvas.width=512;canvas.height=128;const ctx=canvas.getContext('2d');ctx.fillStyle='#363e34';ctx.fillRect(0,0,512,128);ctx.fillStyle='#c8c3a9';ctx.font='bold 34px Arial';ctx.textAlign='center';ctx.fillText(['ДВОР № 7','ПРОХОД','ДВОРОВЫЕ ИСТОРИИ'][((index%3)+3)%3],256,76);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;const signMaterial=new THREE.MeshBasicMaterial({map:texture}),sign=new THREE.Mesh(this.plane,signMaterial);sign.scale.set(2.5,.625,1);sign.position.set(8,2.8,-3.89);if(this.editable)sign.userData.module={kind:'sign',id:'sign'};group.add(sign);local.push(texture,signMaterial);
  // Batch static boxes so the added facade detail stays cheap on phones.
  const batches=new Map();for(const mesh of staticMeshes){const key=mesh.geometry.uuid+mesh.material.uuid;if(!batches.has(key))batches.set(key,[]);batches.get(key).push(mesh);}
  for(const meshes of batches.values()){const first=meshes[0],batch=new THREE.InstancedMesh(first.geometry,first.material,meshes.length);if(this.editable)batch.userData.modules=meshes.map(m=>m.userData.module);for(let i=0;i<meshes.length;i++){meshes[i].updateMatrix();batch.setMatrixAt(i,meshes[i].matrix);}batch.castShadow=true;batch.receiveShadow=true;batch.computeBoundingSphere();group.add(batch);local.push(batch);}
  bottles.push(...this.addBottles(group,index));
  this.scene.add(group);return {group,bottles,local};
 }
 update(x){const index=Math.floor(x/26);if(index===this.chunkIndex)return;this.chunkIndex=index;for(let i=index-2;i<=index+2;i++)if(!this.chunks.has(i))this.chunks.set(i,this.makeChunk(i));for(const [i,chunk] of this.chunks)if(Math.abs(i-index)>2){this.scene.remove(chunk.group);for(const resource of chunk.local)resource.dispose();this.chunks.delete(i);}}
 nearestBottle(player,radius=.95){let nearest=null;for(const chunk of this.chunks.values())for(const bottle of chunk.bottles){const distance=Math.hypot(bottle.x-player.x,bottle.z-player.z);if(!bottle.taken&&distance<radius){radius=distance;nearest=bottle;}}return nearest;}
 takeBottle(player,bottle){if(!bottle||bottle.taken||!Array.from(this.chunks.values()).some(c=>c.bottles.includes(bottle))||Math.hypot(bottle.x-player.x,bottle.z-player.z)>=.95)return false;bottle.taken=true;bottle.mesh.visible=false;return true;}
 collect(player){let count=0;for(const chunk of this.chunks.values())for(const bottle of chunk.bottles)if(!bottle.taken&&Math.hypot(bottle.x-player.x,bottle.z-player.z)<.65){bottle.taken=true;bottle.mesh.visible=false;count++;}return count;}
}
