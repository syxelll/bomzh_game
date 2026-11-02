const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>{x=clamp(x);return x*x*(3-2*x);};
// Match the reference's profile -> front -> opposite profile arc and gentle
// push-in, then return to the gameplay camera. Only a new shot uses this clock.
export class BurpCameraShot{
 constructor(){this.active=false;this.elapsed=0;this.returnTime=.45;}
 start({duration=1.2,facing=1,arc=Math.PI,startAngle=.13}={}){this.active=true;this.elapsed=0;this.duration=duration;this.facing=facing;this.arc=arc;this.startAngle=startAngle;this.cancelled=null;}
 cancel(){if(this.active&&this.cancelled===null)this.cancelled=this.elapsed;}
 update(dt){if(!this.active)return;this.elapsed+=Math.max(0,dt);const end=this.cancelled??this.duration;if(this.elapsed>=end+this.returnTime)this.active=false;}
 sample({reducedMotion=false}={}){if(!this.active)return {weight:0,angle:0,distance:4,roll:0};const p=clamp(Math.min(this.elapsed,this.cancelled??Infinity)/this.duration),end=this.cancelled??this.duration;
  const weight=smooth(this.elapsed/.14)*(1-smooth((this.elapsed-end)/this.returnTime));
  return {weight,angle:reducedMotion?0:this.facing*this.arc*smooth(p),distance:reducedMotion?6:4-.55*Math.sin(Math.PI*p),roll:reducedMotion?0:.012*Math.sin(Math.PI*2*p)};
 }
}
