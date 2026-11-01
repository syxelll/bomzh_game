import {comboClips,comboSpec} from './user-actions.js';
export const ENEMY_CONTACT_DELAY=.075;
export function beginEnemyAttack(enemy){
 const clips=comboClips(enemy.userActions);let index=(enemy.attackSerial??0)%Math.min(2,clips.length||2);
 if(enemy.type==='runner')index=(index+1)%Math.min(2,clips.length||2);
 if(enemy.type==='bruiser'&&clips.length>2)index=2;
 enemy.attackSerial=(enemy.attackSerial??0)+1;enemy.combo=index+1;
 const name=['enemy_punch_01','enemy_punch_02','enemy_kick'][index],clip=enemy.userActions?.clips[name];
 if(clip){const hitAt=clip.markers.hit/(clip.frames.length-1),prepare=clip.markers.strikeStart/(clip.frames.length-1)*clip.duration;enemy.attackSpec={clip:name,duration:clip.duration,hitAt,prepare,strikeDuration:ENEMY_CONTACT_DELAY+clip.duration*(1-hitAt)};}else enemy.attackSpec={...comboSpec(enemy.userActions,index),strikeDuration:.3};
}
export function enemyContactRemaining(enemy){return (enemy.attackSpec?.strikeDuration??.3)-ENEMY_CONTACT_DELAY;}
export function enemyAttackPose(enemy){
 const spec=enemy.attackSpec,hit=spec?.hitAt??.9,clip=enemy.userActions?.clips[spec?.clip];
 if(clip?.complete){const hitTime=hit*clip.duration,preparation=spec.prepare??0,punchTime=hitTime-preparation,anticipation=Math.max(.05,enemy.spec.windup+ENEMY_CONTACT_DELAY-punchTime);let t;
  if(enemy.windup>0){const elapsed=enemy.spec.windup-enemy.windup;t=elapsed<anticipation?preparation*(elapsed/anticipation):preparation+elapsed-anticipation;}
  else if(enemy.strike>0){const elapsed=(spec.strikeDuration??.3)-enemy.strike;t=hitTime-ENEMY_CONTACT_DELAY+elapsed;}
  else return {kind:null,progress:0};
  return {kind:'jab',progress:Math.max(0,Math.min(1,t/clip.duration))};
 }
 if(enemy.windup>0)return {kind:'jab',progress:Math.max(0,Math.min(1,1-enemy.windup/enemy.spec.windup))*hit*.85};
 if(enemy.strike>0){const phase=Math.max(0,Math.min(1,1-enemy.strike/.3));return {kind:'jab',progress:phase<=.25?hit*(.85+.15*phase/.25):hit+(1-hit)*(phase-.25)/.75};}
 return {kind:null,progress:0};
}
// Keep the visible strike aligned with its committed damage direction while a
// player dodges past. Tracking resumes after the complete recovery.
export function enemyFacingTarget(enemy,player){return enemy.windup>0||enemy.strike>0?Math.atan2(enemy.aimX??0,enemy.aimZ??1):Math.atan2(player.x-enemy.x,player.z-enemy.z);}
