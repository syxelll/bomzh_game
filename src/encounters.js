// Only the current plan is retained; stage numbering has no final level.
export function createEncounter(index){
 if(!Number.isSafeInteger(index)||index<0)throw new RangeError('Invalid stage');
 const center=index*26+1,number=index+1,count=index===0?1:Math.min(4,2+Math.floor(index/4));
 const waveCount=index<3?1:Math.min(3,1+Math.floor(index/4));
 const waves=Array.from({length:waveCount},(_,wave)=>Array.from({length:count},(_,i)=>({
  type:index===0?'fighter':index>=2&&(i===0&&(index%3===2||number%5===0))?'bruiser':(index+wave+i)%2?'runner':'fighter',
  side:index<2?1:i%2?-1:1,z:[-.9,.8,0,1.4][(index+wave+i)%4],delay:i*.4,
 })));
 return {id:`street-${number}`,index,number,title:`Участок ${number}`,center,halfWidth:10,trigger:center-3,left:center-10,right:center+10,waves,
  scaling:{health:1+Math.min(1.5,index*.065),damage:1+Math.min(1,index*.035),speed:1+Math.min(.35,index*.012),windup:1-Math.min(.22,index*.008)}};
}
export class Encounters{
 constructor(){this.index=0;this.active=false;this.wave=0;this.phase='explore';this.delay=0;this.goTime=0;this.current=createEncounter(0);}
 get arena(){return this.active?this.current:null;}
 get bounds(){return this.active?[this.current.left,this.current.right]:[this.current.center-36,this.current.right+20];}
 update(dt,x,enemies){
  if(dt<=0)return null;this.goTime=Math.max(0,this.goTime-dt);
  if(!this.active){if(x>=this.current.trigger){this.active=true;this.wave=0;this.phase='incoming';this.delay=1.25;this.goTime=0;return {type:'warning',arena:this.current};}return null;}
  const arena=this.current;
  if(this.phase==='incoming'){this.delay=Math.max(0,this.delay-dt);if(this.delay===0){this.phase='fight';return {type:'spawn',arena,wave:this.wave,enemies:arena.waves[this.wave]};}}
  else if(!enemies.some(e=>e.encounter===arena.id&&e.health>0)){
   if(this.wave+1<arena.waves.length){this.wave++;this.phase='incoming';this.delay=1.25;return {type:'warning',arena};}
   else{this.index++;this.active=false;this.phase='explore';this.goTime=5;this.current=createEncounter(this.index);return {type:'clear',arena};}
  }
  return null;
 }
}
