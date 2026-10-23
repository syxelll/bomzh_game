import * as THREE from 'three';
export class GameCamera{
 constructor(camera,{reducedMotion=false}={}){this.camera=camera;this.focus=new THREE.Vector3(-7.3,1,0);this.lead=.7;this.distance=7.7;this.shake=0;this.reducedMotion=reducedMotion;this.position=new THREE.Vector3();this.target=new THREE.Vector3();}
 cinematic(player,target,elapsed,dt,width,height){
  const mobile=width<650,aspect=width/height;
  const midpoint=new THREE.Vector3((player.x+(target.root?.position.x??target.x))/2,1.05,(player.z+target.z)/2);
  const distance=Math.max(mobile?6.5:4.8,1.35/(Math.tan(THREE.MathUtils.degToRad(45/2))*aspect));
  const orbit=(mobile?.55:0)+(this.reducedMotion?0:.18*Math.sin(Math.min(1,elapsed/2.8)*Math.PI));
  const desired=midpoint.clone().add(new THREE.Vector3(Math.sin(orbit)*distance,distance*.22,Math.cos(orbit)*distance));
  const blend=1-Math.exp(-dt*5);this.focus.lerp(midpoint,blend);this.camera.position.lerp(desired,blend);this.camera.lookAt(this.focus);
  this.camera.fov=THREE.MathUtils.lerp(this.camera.fov,45,blend);this.camera.updateProjectionMatrix();
 }
 impact(strength=.16){if(!this.reducedMotion)this.shake=Math.min(.3,this.shake+strength);}
 update({player,enemies=[],arena=null,time=0,dt=.016,width=1000,height=700}){
  const mobile=width<650,aspect=width/height,blend=1-Math.exp(-dt*3.7);
  this.lead=THREE.MathUtils.lerp(this.lead,player.facing*(player.moving?.7:.25),blend);
  const distance=arena?(mobile?8.6:6.9):(mobile?9.2:7.7);
  this.distance=THREE.MathUtils.lerp(this.distance,distance,1-Math.exp(-dt*2.8));
  let fov=mobile?53:42,x=player.x+this.lead;
  if(arena){
   // The actual fight limits stay beyond the frame, including on ultrawide screens.
   fov=Math.min(fov,THREE.MathUtils.radToDeg(2*Math.atan((arena.halfWidth-2)/(this.distance*1.25*aspect))));
   const halfView=this.distance*1.25*Math.tan(THREE.MathUtils.degToRad(fov/2))*aspect;
   x=mobile?player.x+this.lead*.45:arena.center;
   x=THREE.MathUtils.clamp(x,arena.left+halfView+1,arena.right-halfView-1);
  }
  this.target.set(x,1,player.z*.15);this.focus.lerp(this.target,blend);
  this.shake=Math.max(0,this.shake-dt*1.4);const kick=this.reducedMotion?0:this.shake*this.shake;
  this.position.set(this.focus.x+Math.sin(time*59)*kick,this.focus.y+this.distance*.3+Math.cos(time*67)*kick,this.focus.z+this.distance);
  this.camera.position.lerp(this.position,1-Math.exp(-dt*7));this.camera.lookAt(this.focus);
  const next=THREE.MathUtils.lerp(this.camera.fov,fov,blend);if(Math.abs(this.camera.fov-next)>.001){this.camera.fov=next;this.camera.updateProjectionMatrix();}
 }
}
