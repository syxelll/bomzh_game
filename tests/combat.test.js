import {test} from 'node:test';import assert from 'node:assert/strict';
import {spendStamina,recoverStamina,enemyConnects,enemyTypes} from '../src/combat.js';
test('exhaustion blocks repeated specials, regeneration waits and respects pause',()=>{
 const p={stamina:100,regenDelay:0};for(let i=0;i<3;i++)assert.equal(spendStamina(p,'spray'),true);assert.equal(spendStamina(p,'spray'),false);assert.equal(p.stamina,4);
 recoverStamina(p,0);assert.equal(p.stamina,4);recoverStamina(p,.2);assert.equal(p.stamina,4);recoverStamina(p,.5);assert.ok(Math.abs(p.stamina-11)<1e-8);recoverStamina(p,10);assert.equal(p.stamina,100);
 p.stamina=0;assert.equal(spendStamina(p,'jab'),true);assert.equal(p.stamina,0);

});
test('locked attack direction can be sidestepped, dodge avoids heavy area attack',()=>{
 const e={x:0,z:0,type:'fighter',spec:enemyTypes.fighter,aimX:1,aimZ:0};assert.equal(enemyConnects(e,{x:1,z:0,invulnerable:0}),true);assert.equal(enemyConnects(e,{x:-1,z:0,invulnerable:0}),false);assert.equal(enemyConnects(e,{x:1,z:0,invulnerable:.2}),false);e.type='bruiser';e.spec=enemyTypes.bruiser;assert.equal(enemyConnects(e,{x:-1,z:0,invulnerable:0}),true);assert.equal(enemyConnects(e,{x:3,z:0,invulnerable:0}),false);
});
