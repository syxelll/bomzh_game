import test from 'node:test';import assert from 'node:assert/strict';import{moveCharacter,bodyRadius}from'../src/character-collisions.js';
const actor=(x,z,type)=>({x,z,type,health:100});
test('walking and a fast dash stop at bodies, while diagonal movement slides and escaping remains possible',()=>{
 for(const speed of[.1,8]){const p=actor(-2,0),e=actor(0,0);for(let i=0;i<100;i++)moveCharacter(p,p.x+speed,p.z,[e]);assert.ok(p.x<0);assert.ok(Math.hypot(p.x-e.x,p.z-e.z)>=bodyRadius(p)+bodyRadius(e)-1e-6);const x=p.x;moveCharacter(p,p.x+.2,p.z+.4,[e]);assert.ok(p.z>.1);moveCharacter(p,p.x-1,p.z,[e]);assert.ok(p.x<x);}
});
test('crowds, heavy bodies and constrained lanes remain separated without contact jitter',()=>{
 const bodies=[actor(-1,0),actor(0,0,'bruiser'),actor(1,0,'runner')];const bounds=(x,z)=>[Math.max(-2,Math.min(2,x)),Math.max(-1,Math.min(1,z))];
 for(let frame=0;frame<600;frame++)for(const [i,a]of bodies.entries())moveCharacter(a,a.x+(i===0?.08:-.08),a.z,bodies,bounds);
 for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++)assert.ok(Math.hypot(bodies[i].x-bodies[j].x,bodies[i].z-bodies[j].z)>=bodyRadius(bodies[i])+bodyRadius(bodies[j])-1e-4);
 const saved=bodies.map(a=>[a.x,a.z]);for(const [i,a]of bodies.entries()){moveCharacter(a,a.x,a.z,bodies,bounds);assert.deepEqual([a.x,a.z],saved[i]);}
});
test('initial overlapping arrivals separate, defeated bodies do not block and pausing never moves anyone',()=>{
 const p=actor(0,0),e=actor(0,0);moveCharacter(p,-.1,0,[e]);assert.ok(Math.hypot(p.x,p.z)>=bodyRadius(p)+bodyRadius(e));e.health=0;moveCharacter(p,1,0,[e]);assert.equal(p.x,1);const before={...p};moveCharacter(p,p.x,p.z,[e]);assert.deepEqual(p,before);
});
