import {comboClips,comboSpec} from './user-actions.js';
export function beginEnemyAttack(enemy){
 const clips=comboClips(enemy.userActions);let index=(enemy.attackSerial??0)%Math.min(2,clips.length||2);
 if(enemy.type==='runner')index=(index+1)%Math.min(2,clips.length||2);
 if(enemy.type==='bruiser'&&clips.length>2)index=2;
 enemy.attackSerial=(enemy.attackSerial??0)+1;enemy.combo=index+1;enemy.attackSpec=comboSpec(enemy.userActions,index)??null;
}
export function enemyAttackPose(enemy){
 const hit=enemy.attackSpec?.hitAt??.9;
 if(enemy.windup>0)return {kind:'jab',progress:Math.max(0,Math.min(1,1-enemy.windup/enemy.spec.windup))*hit*.85};
 if(enemy.strike>0){const phase=Math.max(0,Math.min(1,1-enemy.strike/.3));return {kind:'jab',progress:phase<=.25?hit*(.85+.15*phase/.25):hit+(1-hit)*(phase-.25)/.75};}
 return {kind:null,progress:0};
}
