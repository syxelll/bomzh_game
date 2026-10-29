import * as THREE from 'three';
export const weaponTypes={
 bottle:{label:'Розочка',damage:28,range:1.35,uses:6,color:0x65764a,length:.38},
 crowbar:{label:'Лом',damage:30,range:2.05,uses:12,color:0x687a7b,length:.85},
 stick:{label:'Палка',damage:23,range:2.4,uses:8,color:0x88623e,length:1.12},
 rebar:{label:'Арматура',damage:36,range:2.2,uses:10,color:0x88583c,length:1.02},
};
export function weaponAttack(type,base){const w=weaponTypes[type];return w?{...base,duration:.84,cooldown:.84,hitAt:.52,damage:w.damage,range:w.range,weapon:type}:base;}
export class Weapons{
 constructor(scene){this.scene=scene;this.chunks=new Map();this.equipped=null;this.held=null;this.nearby=null;this.point=new THREE.Vector3();this.quaternion=new THREE.Quaternion();this.scale=new THREE.Vector3();this.grip=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,0,-Math.PI/2));this.materials=new Map();this.geometries=new Map();}
 model(type){if(type==='bottle')return this.brokenBottle();const w=weaponTypes[type],root=new THREE.Group();let material=this.materials.get(type);if(!material){material=new THREE.MeshStandardMaterial({color:w.color,roughness:.85,metalness:type==='stick'?0:.65});this.materials.set(type,material);}const rod=(length,radius,x=0,y=0,angle=0)=>{const key=`${length}:${radius}`;if(!this.geometries.has(key))this.geometries.set(key,new THREE.CylinderGeometry(radius,radius,length,8));const mesh=new THREE.Mesh(this.geometries.get(key),material);mesh.position.set(x,y,0);mesh.rotation.z=angle;mesh.castShadow=true;root.add(mesh);};rod(w.length,type==='stick'?.035:.018,0,w.length/2-.12);if(type==='crowbar'){rod(.18,.018,.07,w.length-.12,-1.05);rod(.1,.023,-.025,-.13,.55);}if(type==='rebar')for(let i=0;i<10;i++)rod(.065,.009,0,i*.085,-.75);return root;}
 update(player){const chunk=Math.floor(player.x/26);for(let i=chunk-1;i<=chunk+2;i++)if(!this.chunks.has(i)){const items=[];for(let j=0;j<2;j++){const type=['crowbar','stick','rebar'][((i*2+j)%3+3)%3],x=i*26+(j?20:5),z=j?-.65:.5,mesh=this.model(type);mesh.position.set(x,.055,z);mesh.rotation.set(0,.45,Math.PI/2);this.scene.add(mesh);items.push({type,x,z,mesh,taken:false});}this.chunks.set(i,items);}for(const [i,items]of this.chunks)if(Math.abs(i-chunk)>2){for(const item of items)this.scene.remove(item.mesh);this.chunks.delete(i);}this.nearby=null;let distance=.95;for(const items of this.chunks.values())for(const item of items){if(item.taken)continue;const d=Math.hypot(player.x-item.x,player.z-item.z);if(d<distance){distance=d;this.nearby=item;}}
 }
 brokenBottle(){const root=new THREE.Group();if(!this.materials.has('bottle'))this.materials.set('bottle',new THREE.MeshStandardMaterial({color:0x65764a,roughness:.3,side:THREE.DoubleSide}));
  if(!this.geometries.has('broken-bottle')){const positions=[],indices=[],segments=12,levels=[[-.12,.028],[.03,.028],[.1,.068],[.22,.075]];for(let row=0;row<4;row++)for(let i=0;i<segments;i++){const a=i/segments*Math.PI*2;positions.push(Math.cos(a)*levels[row][1],levels[row][0]+(row===3?(i%2?.09:.015)+(i%3)*.013:0),Math.sin(a)*levels[row][1]);}for(let row=0;row<3;row++)for(let i=0;i<segments;i++){const a=row*segments+i,b=row*segments+(i+1)%segments;indices.push(a,b,a+segments,b,b+segments,a+segments);}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setIndex(indices);g.computeVertexNormals();this.geometries.set('broken-bottle',g);}const mesh=new THREE.Mesh(this.geometries.get('broken-bottle'),this.materials.get('bottle'));mesh.rotation.z=Math.PI;mesh.castShadow=true;root.add(mesh);return root;}
 equip(type){if(!weaponTypes[type])return null;if(this.held)this.scene.remove(this.held);this.equipped={type,uses:weaponTypes[type].uses};this.held=this.model(type);this.scene.add(this.held);this.nearby=null;return weaponTypes[type].label;}
 pickup(item=this.nearby){if(!item||item.taken)return null;item.taken=true;item.mesh.visible=false;return this.equip(item.type);}

 wear(){if(!this.equipped)return false;if(--this.equipped.uses>0)return false;this.equipped=null;if(this.held)this.scene.remove(this.held);this.held=null;return true;}
 pose(actor,hidden=false){
 if(!this.held)return;this.held.visible=!hidden;if(hidden)return;
 this.hand??=actor.bind.find(b=>b.name==='hand.r')?.bone;const world=actor.posedWorld.get(this.hand);if(!world){this.held.visible=false;return;}
 if(!this.palmOffset){
  const hand=actor.bind.find(b=>b.bone===this.hand),data=actor.userActions,frame=data?.clips.idle.frames[0];
  const reference=b=>data?new THREE.Matrix4().fromArray(frame,data.bones.indexOf(b.name)*16).multiply(b.matrix):b.matrix.clone();
  const refHand=reference(hand),center=new THREE.Vector3();let count=0;
  for(const name of ['c_middle2.r','c_ring2.r','c_thumb2.r']){const bone=actor.bind.find(b=>b.name===name);if(bone&&(!data||data.bones.includes(name))){center.add(new THREE.Vector3().setFromMatrixPosition(reference(bone)));count++;}}
  this.palmOffset=(count?center.divideScalar(count):new THREE.Vector3().setFromMatrixPosition(refHand)).applyMatrix4(refHand.clone().invert());
 }
 world.decompose(this.point,this.quaternion,this.scale);
 this.held.position.copy(this.palmOffset).applyMatrix4(world);
 // Carry upright; during the strike the whole handle follows a deliberate arc.
 // Blend its orientation through the same pose transition as the wrist.
 if(actor.userActions?.weaponGrip&&actor.weaponType){const axis=new THREE.Vector3(...actor.userActions.weaponGrip.axis).normalize();this.held.quaternion.copy(this.quaternion).multiply(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),axis));return;}
 const direction=actor.weaponDirection??new THREE.Vector3(-.12,.96,.27);
 const desired=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),direction.clone().transformDirection(actor.root.matrixWorld));
 if(this.orientationSerial!==actor.motionId){this.fromOrientation=this.held.quaternion.clone();this.orientationSerial=actor.motionId;}
 const t=THREE.MathUtils.clamp((actor.animationTime-(actor.transitionStart??-1))/.12,0,1);
 this.held.quaternion.copy(this.fromOrientation??desired).slerp(desired,t*t*(3-2*t));
 }

 debug(){return {equipped:this.equipped?{...this.equipped}:null,nearby:this.nearby?.type??null,items:[...this.chunks.values()].flat().filter(i=>!i.taken).map(({type,x,z})=>({type,x,z}))};}
}
