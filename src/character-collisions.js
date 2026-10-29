// Upright bodies use stable ground-plane circles, independent of animated hands/feet.
export function bodyRadius(actor){return actor.collisionRadius??(actor.type==='bruiser'?.46:actor.type==='runner'?.34:.38);}
const EPS=1e-5;
export function moveCharacter(actor,targetX,targetZ,others,constrain=(x,z)=>[x,z]){
 const startX=actor.x,startZ=actor.z;
 if(Math.hypot(targetX-startX,targetZ-startZ)<1e-10)return 0;
 const bodies=others.filter(other=>other!==actor&&!(other.health<=0)&&other.collidable!==false),radius=bodyRadius(actor);
 let x=startX,z=startZ;
 // Repair initial overlaps (e.g. two off-screen arrivals) before sweeping movement.
 for(let pass=0;pass<8;pass++){let changed=false;for(const other of bodies){let nx=x-other.x,nz=z-other.z,dist=Math.hypot(nx,nz);const gap=radius+bodyRadius(other)+EPS;if(dist>=gap-EPS*.1)continue;if(dist<EPS){nx=startX-targetX;nz=startZ-targetZ;dist=Math.hypot(nx,nz)||1;if(!nx&&!nz)nx=1;}const push=gap-Math.hypot(x-other.x,z-other.z);[x,z]=constrain(x+nx/dist*push,z+nz/dist*push);changed=true;}if(!changed)break;}
 let [endX,endZ]=constrain(targetX,targetZ),dx=endX-x,dz=endZ-z;
 for(let pass=0;pass<6&&dx*dx+dz*dz>1e-14;pass++){
  let time=1,hit=null;const a=dx*dx+dz*dz;
  for(const other of bodies){const ox=x-other.x,oz=z-other.z,r=radius+bodyRadius(other),b=ox*dx+oz*dz,c=ox*ox+oz*oz-r*r;if(b>=0)continue;const disc=b*b-a*c;if(disc<0)continue;const t=(-b-Math.sqrt(disc))/a;if(t>=-EPS&&t<time){time=Math.max(0,t);hit=other;}}
  if(!hit){[x,z]=constrain(x+dx,z+dz);break;}
  const safe=Math.max(0,time-EPS/Math.sqrt(a));[x,z]=constrain(x+dx*safe,z+dz*safe);dx*=1-time;dz*=1-time;
  const nx=x-hit.x,nz=z-hit.z,length=Math.hypot(nx,nz)||1,into=(dx*nx+dz*nz)/length;
  if(into<0){dx-=into*nx/length;dz-=into*nz/length;}
  [endX,endZ]=constrain(x+dx,z+dz);dx=endX-x;dz=endZ-z;
 }
 actor.x=x;actor.z=z;return Math.hypot(x-startX,z-startZ);
}
