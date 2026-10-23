export const attacks = {
  jab: { duration: .48, cooldown: .5, hitAt: .43, damage: 14, range: 1.35, label: 'Кулак' },
  kick: { duration: .75, cooldown: .85, hitAt: .48, damage: 25, range: 1.9, label: 'Пинок' },
  spin: { duration: .95, cooldown: 2.4, hitAt: .5, damage: 34, range: 2.1, label: 'Вертушка' },
};
export function canHit(player, enemy, kind) {
  const dx = enemy.x - player.x, dz = enemy.z - player.z;
  return Math.hypot(dx, dz) < attacks[kind].range && (kind === 'spin' || dx * player.facing > -.15);
}
export function sellBottles(state) {
  const count = state.bottles;
  state.coins += count * 3; state.sold += count; state.bottles = 0;
  return count;
}
