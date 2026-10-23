export const FINISHER_DURATION=2.8;
export const FINISHER_CONTACT=1.3;
export function chargeSuper(value,amount){return Math.min(100,Math.max(0,value+amount));}
export function selectFinisherTarget(player,enemies){return enemies.filter(e=>e.health>0&&!e.entering&&!(e.down>0)&&Math.hypot(e.x-player.x,e.z-player.z)<=2.8).sort((a,b)=>Math.hypot(a.x-player.x,a.z-player.z)-Math.hypot(b.x-player.x,b.z-player.z))[0]??null;}
const smooth=t=>{t=Math.min(1,Math.max(0,t));return t*t*(3-2*t);};
export function finisherPose(elapsed){
 const contact=elapsed>=FINISHER_CONTACT;
 // Deliberate anticipation, a single uppercut, impact hold, then recovery.
 const punch=elapsed<.65?.14*smooth(elapsed/.65):elapsed<1.3?.14+.56*smooth((elapsed-.65)/.65):elapsed<1.65?.7:.7+.3*smooth((elapsed-1.65)/.8);
 return {punch,contact,approach:smooth(elapsed/.55),fall:smooth((elapsed-FINISHER_CONTACT)/.85),done:elapsed>=FINISHER_DURATION};
}
export function finisherPlacement(player,target,bounds){
 const distance=.65;let side=target.x>=player.x?1:-1;
 if(target.x-side*distance<bounds[0]+.1||target.x-side*distance>bounds[1]-.1)side=-side;
 return {side,endX:Math.max(bounds[0]+.1,Math.min(bounds[1]-.1,target.x-side*distance))};
}
