import {test} from 'node:test';
import assert from 'node:assert/strict';
import {canHit,sellBottles} from '../src/game.js';
test('direct attacks require facing and reach, spin hits behind',()=>{
 const player={x:0,z:0,facing:1};
 assert.equal(canHit(player,{x:1,z:0},'jab'),true);
 assert.equal(canHit(player,{x:-1,z:0},'jab'),false);
 assert.equal(canHit(player,{x:-1,z:0},'spin'),true);
 assert.equal(canHit(player,{x:1.7,z:0},'jab'),false);
 assert.equal(canHit(player,{x:1.7,z:0},'kick'),true);
 assert.equal(canHit(player,{x:1,z:2},'kick'),false);
});
test('exchange pays exactly once and retains prior coins',()=>{
 const state={bottles:4,coins:5,sold:2};
 assert.equal(sellBottles(state),4);assert.deepEqual(state,{bottles:0,coins:17,sold:6});
 assert.equal(sellBottles(state),0);assert.equal(state.coins,17);
});
