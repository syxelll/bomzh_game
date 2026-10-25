export const DODGE_DISTANCE=1.92;
export function dodgeSpec(actions){const duration=Math.max(.16,actions?.clips?.dodge?.duration??.24);return {duration,speed:DODGE_DISTANCE/duration,cooldown:Math.max(.85,duration+.12),invulnerability:.3};}
