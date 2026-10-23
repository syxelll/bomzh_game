import {test} from 'node:test';
import assert from 'node:assert/strict';
import {canHit,sellBottles} from '../src/game.js';
test('direct attacks require facing and reach, spray requires aiming forward',()=>{
 const player={x:0,z:0,facing:1};
 assert.equal(canHit(player,{x:1,z:0},'jab'),true);
 assert.equal(canHit(player,{x:-1,z:0},'jab'),false);
 assert.equal(canHit(player,{x:-1,z:0},'spray'),false);
 assert.equal(canHit(player,{x:1.7,z:0},'jab'),false);
 assert.equal(canHit(player,{x:1.7,z:0},'kick'),true);
 assert.equal(canHit(player,{x:1,z:2},'kick'),false);
});
test('exchange pays exactly once and retains prior coins',()=>{
 const state={bottles:4,coins:5,sold:2};
 assert.equal(sellBottles(state),4);assert.deepEqual(state,{bottles:0,coins:17,sold:6});
 assert.equal(sellBottles(state),0);assert.equal(state.coins,17);
});
test('grounded enemies cannot be hit again until they recover',()=>{assert.equal(canHit({x:0,z:0,facing:1},{x:.5,z:0,down:.8},'jab'),false);assert.equal(canHit({x:0,z:0,facing:1},{x:.5,z:0,down:0},'jab'),true);});

test('spray follows four facing directions and excludes side targets and excess range',()=>{
 for(const heading of [0,Math.PI/2,Math.PI,-Math.PI/2]){
  const p={x:0,z:0,heading},target=d=>({x:Math.sin(heading)*d,z:Math.cos(heading)*d});
  assert.equal(canHit(p,target(3),'spray'),true);assert.equal(canHit(p,target(-1),'spray'),false);assert.equal(canHit(p,target(3.3),'spray'),false);
  assert.equal(canHit(p,{x:Math.cos(heading)*1.5,z:-Math.sin(heading)*1.5},'spray'),false);
 }
});
