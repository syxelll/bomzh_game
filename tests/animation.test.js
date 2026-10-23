import {test} from 'node:test';
import assert from 'node:assert/strict';
import {sampleMotion} from '../src/animation.js';
import {attacks} from '../src/game.js';
test('attack motion stays finite and returns to the same guard without a loop snap',()=>{
 const guard=sampleMotion(0,false,null);
 for(const kind of Object.keys(attacks)){
  for(let i=0;i<=100;i++){
   const p=sampleMotion(0,false,kind,i/100);
   assert.ok(Object.values(p).flat().every(Number.isFinite));
  }
  const end=sampleMotion(0,false,kind,1);
  for(const side of ['left','right'])end[side].forEach((angle,i)=>assert.ok(Math.abs(angle-guard[side][i])<1e-10));
  assert.ok(Math.abs(Math.sin(end.spin))<1e-10);
 }
});
test('contact poses extend the striking limb and alternating punches change arms',()=>{
 const punch=sampleMotion(0,false,'jab',attacks.jab.hitAt,1);
 const other=sampleMotion(0,false,'jab',attacks.jab.hitAt,2);
 assert.ok(Math.abs(punch.left[1])<.2);assert.ok(Math.abs(punch.right[1])>1);
 assert.ok(Math.abs(other.right[1])<.2);assert.ok(Math.abs(other.left[1])>1);
 const kick=sampleMotion(0,false,'kick',attacks.kick.hitAt);
 assert.ok(kick.left[2]<-1.4&&Math.abs(kick.left[3])<.15);
 assert.ok(Math.abs(kick.right[2])<.2);
});
