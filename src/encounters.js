export const encounterLayout=[
 {id:'yard',title:'Первый двор',trigger:-1.2,left:-3.5,right:8,waves:[[{x:2.5,z:.6,type:'fighter'}],[{x:5,z:-.9,type:'runner'}]]},
 {id:'garage',title:'У гаражей',trigger:12,left:9,right:20,waves:[[{x:15,z:-1,type:'fighter'},{x:17,z:1,type:'runner'}]]},
 {id:'exit',title:'Последний заслон',trigger:24,left:20.5,right:32.5,waves:[[{x:27,z:.8,type:'bruiser'},{x:29,z:-1.1,type:'runner'}]]},
];
export class Encounters{
 constructor(){this.index=0;this.active=false;this.wave=0;this.phase='explore';this.delay=0;this.cleared=[];this.goTime=0;}
 get arena(){return this.active?encounterLayout[this.index]:null;}
 get bounds(){return this.arena?[this.arena.left,this.arena.right]:[-11,33];}
 update(dt,x,enemies){
  if(dt<=0)return null;this.goTime=Math.max(0,this.goTime-dt);
  if(!this.active){const next=encounterLayout[this.index];if(next&&x>=next.trigger){this.active=true;this.wave=0;this.phase='incoming';this.delay=1.2;this.goTime=0;return {type:'warning',arena:next};}return null;}
  const arena=this.arena;
  if(this.phase==='incoming'){this.delay=Math.max(0,this.delay-dt);if(this.delay===0){this.phase='fight';return {type:'spawn',arena,wave:this.wave,enemies:arena.waves[this.wave]};}}
  else if(!enemies.some(e=>e.encounter===arena.id&&e.health>0)){
   if(this.wave+1<arena.waves.length){this.wave++;this.phase='incoming';this.delay=1.5;return {type:'warning',arena};}
   else{this.cleared.push(arena.id);this.index++;this.active=false;this.phase='explore';this.goTime=5;return {type:'clear',arena};}
  }
  return null;
 }
}
