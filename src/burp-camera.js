const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>{x=clamp(x);return x*x*(3-2*x);};
export const BURP_CAMERA_MAX_ARC=.20;
export const BURP_CAMERA_FOCAL_LENGTH=24;
// The reference makes a short excursion toward a three-quarter view and
// returns to the same side during the action. It never circles the character.
export class BurpCameraShot{
 constructor(){this.active=false;this.elapsed=0;this.returnTime=.20;}
 start({duration=1.2,facing=1,arc=BURP_CAMERA_MAX_ARC}={}){this.active=true;this.elapsed=0;this.duration=duration;this.facing=facing;this.arc=Math.max(0,Math.min(BURP_CAMERA_MAX_ARC,arc));this.cancelled=null;}
 cancel(){if(this.active&&this.cancelled===null)this.cancelled=this.elapsed;}
 update(dt){if(!this.active)return;this.elapsed+=Math.max(0,dt);if(this.elapsed>=(this.cancelled===null?this.duration:this.cancelled+this.returnTime))this.active=false;}
 sample({reducedMotion=false}={}){if(!this.active)return {weight:0,angle:0,distanceScale:1,focalLength:BURP_CAMERA_FOCAL_LENGTH,roll:0};const p=clamp(Math.min(this.elapsed,this.cancelled??Infinity)/this.duration);
  const release=this.cancelled===null?1:1-smooth((this.elapsed-this.cancelled)/this.returnTime);
  const weight=smooth(p/.25)*(1-smooth((p-.55)/.40))*release;
  return {weight,angle:reducedMotion?0:this.facing*this.arc*weight,distanceScale:1-(reducedMotion?.015:.03)*weight,focalLength:BURP_CAMERA_FOCAL_LENGTH+(reducedMotion?0:4*weight),roll:0};
 }
}
