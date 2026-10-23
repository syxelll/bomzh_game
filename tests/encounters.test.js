import {test} from 'node:test';import assert from 'node:assert/strict';import {Encounters,encounterLayout} from '../src/encounters.js';
test('encounter gates wait for every wave and do not advance while paused',()=>{
 const d=new Encounters();assert.equal(d.update(.1,-2,[]),null);assert.equal(d.active,false);
 assert.equal(d.update(.1,0,[]).type,'warning');assert.deepEqual(d.bounds,[-3.5,8]);
 assert.equal(d.update(0,0,[]),null);assert.equal(d.phase,'incoming');
 const spawn=d.update(2,0,[]);assert.equal(spawn.type,'spawn');const foes=spawn.enemies.map(e=>({...e,health:10,encounter:spawn.arena.id}));
 assert.equal(d.update(.1,0,foes),null);foes[0].health=0;assert.equal(d.update(.1,0,foes).type,'warning');assert.equal(d.active,true);
 const second=d.update(2,0,foes);assert.equal(second.wave,1);foes.push({...second.enemies[0],health:1,encounter:'yard'});assert.equal(d.update(.1,0,foes),null);
 foes.at(-1).health=0;assert.equal(d.update(.1,0,foes).type,'clear');assert.deepEqual(d.bounds,[-11,33]);assert.ok(d.goTime>0);assert.deepEqual(d.cleared,['yard']);
});
test('all three areas advance in order and final group includes the bruiser',()=>{
 const d=new Encounters();for(const arena of encounterLayout){assert.equal(d.update(.1,arena.trigger,[]).arena.id,arena.id);for(let wave=0;wave<arena.waves.length;wave++){const spawn=d.update(2,arena.trigger,[]);assert.equal(spawn.wave,wave);const result=d.update(.1,arena.trigger,spawn.enemies.map(e=>({...e,health:0,encounter:arena.id})));assert.equal(result.type,wave===arena.waves.length-1?'clear':'warning');}}
 assert.deepEqual(d.cleared,['yard','garage','exit']);assert.equal(d.update(.1,33,[]),null);assert.ok(encounterLayout.at(-1).waves[0].some(e=>e.type==='bruiser'));
});
