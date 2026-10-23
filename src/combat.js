export const enemyTypes={
 runner:{label:'Задира',health:60,speed:2.35,damage:9,windup:.42,recovery:1.15,range:1.45,color:'#d59861'},
 fighter:{label:'Боец',health:80,speed:1.7,damage:14,windup:.65,recovery:1.35,range:1.65,color:'#d68664'},
 bruiser:{label:'Громила',health:110,speed:1.05,damage:24,windup:1,recovery:2,range:2,color:'#c16c84'},
};
export const staminaCosts={jab:0,kick:14,spray:32,dodge:16};
export function spendStamina(player,action){const cost=staminaCosts[action];if(cost===undefined||player.stamina<cost)return false;player.stamina-=cost;if(cost>0)player.regenDelay=.45;return true;}
export function recoverStamina(player,dt){if(dt<=0)return;const delay=player.regenDelay;player.regenDelay=Math.max(0,delay-dt);player.stamina=Math.min(100,player.stamina+Math.max(0,dt-delay)*28);}
export function enemyConnects(enemy,player){const dx=player.x-enemy.x,dz=player.z-enemy.z,d=Math.hypot(dx,dz);if(player.invulnerable>0||d>=enemy.spec.range)return false;return enemy.type==='bruiser'||d<.01||(dx*enemy.aimX+dz*enemy.aimZ)/d>.25;}
