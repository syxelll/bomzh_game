import *as THREE from 'three';
import {BURP_CAMERA_MAX_ARC} from './burp-camera.js';
export const WALL_KICK={duration:1.15,push:.27,hit:.68,cost:28,cooldown:2.8,damage:34,reach:2.6};
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),smooth=t=>{t=clamp(t,0,1);return t*t*(3-2*t);};
const mix=(a,b,t)=>a+(b-a)*t,angleMix=(a,b,t)=>a+Math.atan2(Math.sin(b-a),Math.cos(b-a))*t;

export function wallMeshes(roots,{camera=false}={}){const meshes=[];for(const root of roots){root.updateMatrixWorld(true);root.traverse(o=>{if(!o.isMesh||Array.isArray(o.material))return;const name=o.material.name??'';if(/notice|plaque|paper|vegetation|runoff/i.test(name))return;if(camera&&/window|glass|passing tunnel/i.test(name)){meshes.push(o);return;}if(o.userData.noShadow||o.material.transparent||/window|glass/i.test(name))return;if(/brick|limestone|concrete|plaster|facade|enamel|door|painted metal|green paint/i.test(name))meshes.push(o);});}return meshes;}

// A rail, drainpipe or imaginary lane boundary is not a usable wall: the body
// needs a broad, nearly vertical surface at four points across the foot plant.
export function findKickWall(player,meshes,{directions=[{x:0,z:-1},{x:-1,z:0},{x:1,z:0}],reach=WALL_KICK.reach}={}){
 const ray=new THREE.Raycaster(),direction=new THREE.Vector3(),normalMatrix=new THREE.Matrix3();let nearest=null;
 for(const d of directions){direction.set(d.x,0,d.z).normalize();if(!direction.lengthSq())continue;const tangent=new THREE.Vector3(-direction.z,0,direction.x),hits=[];
  for(const [offset,y]of[[-.22,1.20],[0,1.20],[.22,1.20],[0,1.72]]){
   ray.set(new THREE.Vector3(player.x+tangent.x*offset,y,player.z+tangent.z*offset),direction);ray.near=.2;ray.far=reach;
   const hit=ray.intersectObjects(meshes,false).find(h=>{const n=h.face.normal.clone().applyNormalMatrix(normalMatrix.getNormalMatrix(h.object.matrixWorld));return Math.abs(n.y)<.12&&n.dot(direction)<-.88;});
   if(!hit)break;hits.push(hit);
  }
  if(hits.length!==4||Math.max(...hits.map(h=>h.distance))-Math.min(...hits.map(h=>h.distance))>.14)continue;
  const centre=hits[1],normal=centre.face.normal.clone().applyNormalMatrix(normalMatrix.getNormalMatrix(centre.object.matrixWorld));
  if(!nearest||centre.distance<nearest.distance)nearest={point:centre.point.clone(),normal,distance:centre.distance};
 }return nearest;
}

// Check only the short, scene-facing arc. Occlusion can shorten the motion,
// but open space must never turn it into a full orbit.
export function safeBurpArc(player,meshes,{startAngle=.13}={}){const ray=new THREE.Raycaster(),origin=new THREE.Vector3(player.x,1.02,player.z),side=player.facing||1;let arc=0;
 for(let i=0;i<=6;i++){const a=startAngle+side*BURP_CAMERA_MAX_ARC*i/6,centre=origin.clone().add(new THREE.Vector3(Math.sin(a)*4, .52,Math.cos(a)*4));let blocked=false;
  for(const offset of[new THREE.Vector3(),new THREE.Vector3(0,0,-.60),new THREE.Vector3(side*.60,0,0)]){const target=centre.clone().add(offset),dir=target.sub(origin),distance=dir.length();ray.set(origin,dir.normalize());ray.near=.3;ray.far=distance;if(ray.intersectObjects(meshes,false).length){blocked=true;break;}}
  if(blocked)break;arc=BURP_CAMERA_MAX_ARC*i/6;
 }return Math.max(0,arc-.01);
}

export function beginWallKick(player,wall,enemies,{bounds=[-Infinity,Infinity],minZ=-2,maxZ=2.1,maxHeight=.95,duration=WALL_KICK.duration,push=WALL_KICK.push,hit=WALL_KICK.hit}={}){
 if(!wall||wall.distance>WALL_KICK.reach||player.stamina<WALL_KICK.cost)return null;
 const contact={x:wall.point.x+wall.normal.x*.54,z:wall.point.z+wall.normal.z*.54},target=enemies.filter(e=>e.health>0&&!e.entering&&!e.grabbed&&!(e.down>0)&&Math.hypot(e.x-player.x,e.z-player.z)<6).sort((a,b)=>Math.hypot(a.x-player.x,a.z-player.z)-Math.hypot(b.x-player.x,b.z-player.z))[0];
 let endX=player.x+(player.facing||1)*2.5,endZ=player.z+wall.normal.z*.6;
 if(target){const dx=target.x-contact.x,dz=target.z-contact.z,d=Math.hypot(dx,dz)||1;endX=target.x-dx/d*.95;endZ=target.z-dz/d*.95;}
 endX=clamp(endX,Math.max(bounds[0]+.4,player.x-3.6),Math.min(bounds[1]-.4,player.x+3.6));endZ=clamp(endZ,minZ+.15,maxZ-.15);
 player.stamina-=WALL_KICK.cost;player.regenDelay=1;player.attack=null;player.queuedAttack=null;player.combo=0;player.hurt=0;player.reaction=null;player.moving=false;
 return {elapsed:0,duration,push:clamp(push,.12,duration*.45),hitAt:clamp(hit,duration*.45,duration*.85),height:maxHeight,start:{x:player.x,z:player.z,heading:player.heading},contact,end:{x:endX,z:endZ},wallHeading:Math.atan2(-wall.normal.x,-wall.normal.z),heading:Math.atan2(endX-contact.x,endZ-contact.z),hit:false,pushed:false};
}

export function wallKickPose(action){const t=clamp(action.elapsed,0,action.duration),a=action.start,c=action.contact;
 if(t<=action.push){const p=t/action.push,u=smooth(p);return {x:mix(a.x,c.x,u*u),z:mix(a.z,c.z,u*u),y:action.height*.82*Math.sin(p*Math.PI/2),heading:angleMix(a.heading,action.wallHeading,u),done:false};}
 const u=(t-action.push)/(action.duration-action.push),travel=1-(1-u)**2;
 return {x:mix(c.x,action.end.x,travel),z:mix(c.z,action.end.z,travel),y:action.height*((1-u)*.82+2.24*u*(1-u)),heading:angleMix(action.wallHeading,action.heading,smooth(u/.30)),done:t>=action.duration};
}

export function wallKickClipProgress(action,hitProgress=1/3){const t=action.elapsed;if(t<=action.push)return .14*smooth(t/action.push);if(t<=action.hitAt)return mix(.14,hitProgress,smooth((t-action.push)/(action.hitAt-action.push)));return mix(hitProgress,1,smooth((t-action.hitAt)/(action.duration-action.hitAt)));}

export function wallKickContact(from,to,enemies){let result=null,nearest=Infinity;const dx=to.x-from.x,dz=to.z-from.z,length=dx*dx+dz*dz;
 for(const e of enemies){if(e.health<=0||e.entering||e.grabbed||e.down>0)continue;const t=clamp(length?((e.x-from.x)*dx+(e.z-from.z)*dz)/length:0,0,1),x=from.x+dx*t,z=from.z+dz*t,y=mix(from.y,to.y,t),r=(e.type==='bruiser'?.46:.38)+.43;
  if(y<.25||y>(e.height??1.95)+.15||Math.hypot(e.x-x,e.z-z)>r)continue;if(t<nearest){result=e;nearest=t;}
 }return result;
}
