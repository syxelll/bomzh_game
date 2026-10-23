import * as THREE from 'three';
export class Street{
 constructor(scene){this.scene=scene;this.chunks=new Map();this.unit=new THREE.BoxGeometry(1,1,1);this.plane=new THREE.PlaneGeometry(1,1);this.body=new THREE.CylinderGeometry(.085,.09,.3,8);this.neck=new THREE.CylinderGeometry(.035,.055,.14,8);this.ring=new THREE.TorusGeometry(.17,.015,5,20);this.materials=new Map();this.chunkIndex=null;}
 material(color){if(!this.materials.has(color))this.materials.set(color,new THREE.MeshStandardMaterial({color,roughness:.92}));return this.materials.get(color);}
 makeChunk(index){
  const group=new THREE.Group(),bottles=[],local=[];group.position.x=index*26;
  const box=(w,h,d,color,x,y,z)=>{const m=new THREE.Mesh(this.unit,this.material(color));m.scale.set(w,h,d);m.position.set(x,y,z);m.castShadow=h>.2;m.receiveShadow=true;group.add(m);return m;};
  box(26,.2,18,'#8c8b7b',13,-.17,0);box(26,.04,6,'#535d59',13,-.04,6);box(26,.18,.24,'#b9b6a2',13,0,2.7);box(26,.18,.24,'#b9b6a2',13,0,-2.8);
  for(let x=1;x<26;x+=4)box(1.5,.02,.1,'#b9b6a2',x,0,6);
  const palette=['#a9a28d','#938d7d','#b7ad95','#7d9187'];
  for(let i=0;i<4;i++){const x=3.25+i*6.5,h=5+((Math.abs(index)+i)%3)*.6,color=palette[((index+i)%4+4)%4];box(6.4,h,3,color,x,h/2,-5.6);box(6.5,.18,3.1,'#b9b6a2',x,h,-5.6);for(let floor=0;floor<3;floor++)for(let j=0;j<3;j++){box(.85,1.1,.08,'#3c5554',x-1.8+j*1.8,1.5+floor*1.5,-4.06);box(.91,.08,.16,'#b9b6a2',x-1.8+j*1.8,1+floor*1.5,-4);}}
  for(const x of [4,17]){box(.1,4,.1,'#52675d',x,2,-2.5);box(.9,.18,.4,'#b9b6a2',x+.3,4,-2.5);}
  box(1.7,.15,.6,'#88744d',11,.65,-2);box(1.7,.65,.12,'#88744d',11,1,-2.3);for(const dx of [-.6,.6])box(.1,.65,.4,'#52675d',11+dx,.3,-2);box(.55,.8,.55,'#52675d',21,.4,-2.1);
  const canvas=document.createElement('canvas');canvas.width=512;canvas.height=128;const ctx=canvas.getContext('2d');ctx.fillStyle='#244338';ctx.fillRect(0,0,512,128);ctx.fillStyle='#f4e4b5';ctx.font='bold 34px Arial';ctx.textAlign='center';ctx.fillText(['УЛИЦА НАДЕЖДЫ','ДАЛЬШЕ — БОЛЬШЕ','ДВОРОВЫЕ ИСТОРИИ'][((index%3)+3)%3],256,76);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;const signMaterial=new THREE.MeshBasicMaterial({map:texture}),sign=new THREE.Mesh(this.plane,signMaterial);sign.scale.set(3.5,.875,1);sign.position.set(8,3,-3.98);group.add(sign);local.push(texture,signMaterial);
  for(let i=0;i<5;i++){const object=new THREE.Group(),body=new THREE.Mesh(this.body,this.material('#638b4c')),neck=new THREE.Mesh(this.neck,this.material('#638b4c')),ring=new THREE.Mesh(this.ring,this.material('#e7c25c'));body.position.y=.2;neck.position.y=.41;ring.rotation.x=-Math.PI/2;ring.position.y=.04;object.add(body,neck,ring);const x=2+i*4.7,z=Math.sin(index*3+i*2.1)*1.5;object.position.set(x,0,z);group.add(object);bottles.push({mesh:object,x:index*26+x,z,taken:false});}
  this.scene.add(group);return {group,bottles,local};
 }
 update(x){const index=Math.floor(x/26);if(index===this.chunkIndex)return;this.chunkIndex=index;for(let i=index-2;i<=index+2;i++)if(!this.chunks.has(i))this.chunks.set(i,this.makeChunk(i));for(const [i,chunk] of this.chunks)if(Math.abs(i-index)>2){this.scene.remove(chunk.group);for(const resource of chunk.local)resource.dispose();this.chunks.delete(i);}}
 collect(player){let count=0;for(const chunk of this.chunks.values())for(const bottle of chunk.bottles)if(!bottle.taken&&Math.hypot(bottle.x-player.x,bottle.z-player.z)<.65){bottle.taken=true;bottle.mesh.visible=false;count++;}return count;}
}
