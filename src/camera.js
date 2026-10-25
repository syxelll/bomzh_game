import * as THREE from 'three';
export class GameCamera{
 constructor(camera,{reducedMotion=false}={}){this.camera=camera;this.focus=new THREE.Vector3(-7.3,1,0);this.lead=.7;this.distance=6.2;this.shake=0;this.shakeClock=0;this.shakeOverride=null;this.savedBase=null;this.framingCamera=camera.clone();this.reducedMotion=reducedMotion;this.position=new THREE.Vector3();this.target=new THREE.Vector3();}
 cinematic(player,target,elapsed,dt,width,height){
  this.restoreBase();
  const mobile=width<650,aspect=width/height;
  const midpoint=new THREE.Vector3((player.x+(target.root?.position.x??target.x))/2,1.05,(player.z+target.z)/2);
  const distance=Math.max(mobile?6.5:4.8,1.35/(Math.tan(THREE.MathUtils.degToRad(45/2))*aspect));
  const orbit=(mobile?.55:0)+(this.reducedMotion?0:.18*Math.sin(Math.min(1,elapsed/2.8)*Math.PI));
  const desired=midpoint.clone().add(new THREE.Vector3(Math.sin(orbit)*distance,distance*.14,Math.cos(orbit)*distance));
  const blend=1-Math.exp(-dt*5);this.focus.lerp(midpoint,blend);this.camera.position.lerp(desired,blend);this.camera.lookAt(this.focus);
  this.camera.fov=THREE.MathUtils.lerp(this.camera.fov,45,blend);this.camera.updateProjectionMatrix();this.applyShake(dt);
 }
 isShakeEnabled(){return this.shakeOverride??!this.reducedMotion;}
 setShakeEnabled(enabled){this.shakeOverride=!!enabled;if(!enabled)this.shake=0;}
 restoreBase(){if(!this.savedBase)return;this.camera.position.copy(this.savedBase.position);this.camera.quaternion.copy(this.savedBase.quaternion);}
 impact(strength=.18){if(this.isShakeEnabled()&&Number.isFinite(strength)&&strength>0)this.shake=Math.min(.3,this.shake+strength);}
 applyShake(dt){
  const camera=this.camera;
  this.savedBase??={position:new THREE.Vector3(),quaternion:new THREE.Quaternion()};this.savedBase.position.copy(camera.position);this.savedBase.quaternion.copy(camera.quaternion);
  this.framingCamera.copy(camera,false);this.framingCamera.updateMatrixWorld(true);
  this.shakeClock+=Math.max(0,dt);this.shake=Math.max(0,this.shake-Math.max(0,dt)*1.25);
  if(!this.isShakeEnabled()||this.shake===0)return;
  const a=(this.shake/.3)**2,t=this.shakeClock;
  const offset=new THREE.Vector3(.09*a*(Math.sin(t*64+1.1)+.4*Math.sin(t*101))/1.4,.065*a*Math.cos(t*79+.4),.025*a*Math.sin(t*53));
  offset.applyQuaternion(this.savedBase.quaternion);camera.position.add(offset);
  camera.quaternion.multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(.008*a*Math.sin(t*71),.006*a*Math.cos(t*59),.018*a*Math.sin(t*67+.8))));
 }

 update({player,enemies=[],arena=null,time=0,dt=.016,width=1000,height=700}){
  this.restoreBase();
  const mobile=width<650,aspect=width/height,blend=1-Math.exp(-dt*3.7);
  this.lead=THREE.MathUtils.lerp(this.lead,player.facing*(player.moving?.7:.25),blend);
  const distance=arena?(mobile?7:5.8):(mobile?7.6:6.2);
  this.distance=THREE.MathUtils.lerp(this.distance,distance,1-Math.exp(-dt*2.8));
  let fov=mobile?53:40,x=player.x+this.lead;
  if(arena){
   // The actual fight limits stay beyond the frame, including on ultrawide screens.
   fov=Math.min(fov,THREE.MathUtils.radToDeg(2*Math.atan((arena.halfWidth-2)/(this.distance*1.25*aspect))));
   const halfView=this.distance*1.25*Math.tan(THREE.MathUtils.degToRad(fov/2))*aspect;
   x=mobile?player.x+this.lead*.45:arena.center;
   x=THREE.MathUtils.clamp(x,arena.left+halfView+1,arena.right-halfView-1);
  }
  this.target.set(x,1,player.z*.6);this.focus.lerp(this.target,blend);
  this.position.set(this.focus.x+1.2,this.focus.y+this.distance*.13,this.focus.z+this.distance);
  this.camera.position.lerp(this.position,1-Math.exp(-dt*7));this.camera.lookAt(this.focus);
  const next=THREE.MathUtils.lerp(this.camera.fov,fov,blend);if(Math.abs(this.camera.fov-next)>.001){this.camera.fov=next;this.camera.updateProjectionMatrix();}
  this.applyShake(dt);
 }
}
