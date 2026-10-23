import * as THREE from 'three';
export class GameCamera{
 constructor(camera,{reducedMotion=false}={}){this.camera=camera;this.focus=new THREE.Vector3(-7.3,1,0);this.lead=.7;this.distance=8.8;this.shake=0;this.reducedMotion=reducedMotion;this.position=new THREE.Vector3();this.target=new THREE.Vector3();}
 impact(strength=.16){if(!this.reducedMotion)this.shake=Math.min(.3,this.shake+strength);}
 update({player,enemies=[],npc=null,time=0,dt=.016,width=1000,height=700}){
  const mobile=width<650,aspect=width/height;
  const threats=enemies.filter(e=>e.health>0&&Math.hypot(e.x-player.x,e.z-player.z)<5);
  const blend=1-Math.exp(-dt*3.7);
  const moving=player.moving??false;this.lead=THREE.MathUtils.lerp(this.lead,player.facing*(moving?.7:.25),blend);
  let x=player.x+this.lead,z=player.z*.3;
  if(threats.length){const mean=threats.reduce((n,e)=>n+e.x,0)/threats.length;x+=THREE.MathUtils.clamp((mean-player.x)*.16,-.6,.6);}
  if(npc){x=(player.x+npc.x)/2;z=(player.z+npc.z)/2;}
  let distance=8.8;
  const fov=mobile?53:42;
  // Keep close threats inside the narrow portrait frame without extreme zoom-outs.
  if(mobile&&threats.length){const span=Math.max(...threats.map(e=>Math.abs(e.x-x)),Math.abs(player.x-x))+.75;distance=Math.max(distance,Math.min(13,span/(Math.tan(THREE.MathUtils.degToRad(fov/2))*aspect)));}
  this.distance=THREE.MathUtils.lerp(this.distance,distance,1-Math.exp(-dt*2.5));
  this.target.set(x,1,z);this.focus.lerp(this.target,blend);
  this.shake=Math.max(0,this.shake-dt*1.4);const kick=this.reducedMotion?0:this.shake*this.shake;
  this.position.set(this.focus.x+Math.sin(time*59)*kick,this.focus.y+this.distance*.3+Math.cos(time*67)*kick,this.focus.z+this.distance);
  this.camera.position.lerp(this.position,1-Math.exp(-dt*7));this.camera.lookAt(this.focus);
  if(Math.abs(this.camera.fov-fov)>.01){this.camera.fov=fov;this.camera.updateProjectionMatrix();}
 }
}
