export const attacks = {
  jab: { duration: .65, cooldown: .65, hitAt: .7, damage: 14, range: 1.35, label: 'Кулак' },
  kick: { duration: .7, cooldown: .8, hitAt: 9/17, damage: 25, range: 1.9, label: 'Пинок' },
  spray: { duration: 1.4, cooldown: 2.4, hitAt: .28, activeUntil: .8, damage: 34, range: 3.2, label: 'Струя' },
};
export function canHit(player, enemy, kind) {
  if(enemy.down>0)return false;
  const dx = enemy.x - player.x, dz = enemy.z - player.z;
  const heading=player.heading??player.facing*Math.PI/2,forward=dx*Math.sin(heading)+dz*Math.cos(heading),across=Math.abs(dx*Math.cos(heading)-dz*Math.sin(heading));
  if(kind==='spray')return forward>.15&&forward<attacks.spray.range&&across<.38+forward*.16;
  return Math.hypot(dx,dz)<(player.attackSpec?.range??attacks[kind].range)&&forward>-.15;
}
export function sellBottles(state) {
  const count = state.bottles;
  state.coins += count * 3; state.sold += count; state.bottles = 0;
  return count;
}
