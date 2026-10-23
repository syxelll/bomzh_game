export function directionYaw(dx,dz,fallback=0){return Math.hypot(dx,dz)>.001?Math.atan2(dx,dz):fallback;}
export function turnToward(current,target,dt,speed=14){const delta=Math.atan2(Math.sin(target-current),Math.cos(target-current));return current+delta*(1-Math.exp(-speed*dt));}
