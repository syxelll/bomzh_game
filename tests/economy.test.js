import {test} from 'node:test';import assert from 'node:assert/strict';
import {Wallet} from '../src/economy.js';import {requestReward} from '../src/rewards.js';
const storage=()=>{const values=new Map();return {getItem:k=>values.get(k)??null,setItem:(k,v)=>values.set(k,v)};};
test('earnings survive death/reload, purchases charge once and only owned cosmetics equip',()=>{
 const s=storage(),w=new Wallet(s);w.beginRun('first');assert.equal(w.earn(60),true);assert.equal(w.buy('gold').reason,'funds');assert.equal(w.profile.coins,60);
 assert.equal(w.equip('gold'),false);assert.equal(w.buy('shades').ok,true);assert.equal(w.profile.coins,0);assert.equal(w.buy('shades').ok,false);
 const loaded=new Wallet(s);assert.equal(loaded.profile.equipped,'shades');assert.deepEqual(loaded.profile.owned,['classic','shades']);loaded.beginRun('next');assert.equal(loaded.run.earned,0);assert.equal(loaded.profile.coins,0);assert.equal(loaded.equip('classic'),true);
});
test('revive is once per run; double payout is once, closes the run and blocks late callbacks',()=>{
 const w=new Wallet(storage());w.beginRun('a');w.earn(40);assert.equal(w.claim('revive','old-run'),false);assert.equal(w.claim('revive','a'),true);assert.equal(w.claim('revive','a'),false);
 w.earn(15);assert.equal(w.claim('double','a'),true);assert.equal(w.profile.coins,110);assert.equal(w.claim('double','a'),false);assert.equal(w.earn(3),false);
 w.beginRun('b');assert.equal(w.claim('revive','a'),false);assert.equal(w.claim('double','b'),false);assert.equal(w.run.revived,false);
});
test('doubling before revival ends the run and preserves purchases and full reward balance',()=>{
 const w=new Wallet(storage());w.beginRun('a');w.earn(90);assert.equal(w.buy('shades').ok,true);assert.equal(w.profile.coins,30);assert.equal(w.claim('double','a'),true);assert.equal(w.profile.coins,120);assert.equal(w.claim('revive','a'),false);
});
test('corrupt balances, missing storage and invalid awards cannot create negative or NaN coins',()=>{
 const s=storage();s.setItem('bomzh:wallet:v1',JSON.stringify({version:1,coins:-3,owned:['gold']}));const w=new Wallet(s);assert.equal(w.profile.coins,0);assert.equal(w.equip('gold'),false);
 w.beginRun('a');for(const n of [-1,NaN,Infinity,1.5,Number.MAX_SAFE_INTEGER+1])assert.equal(w.earn(n),false);
 const broken=new Wallet({getItem(){throw Error();},setItem(){throw Error();}});broken.beginRun('a');assert.equal(broken.earn(60),true);assert.equal(broken.buy('shades').ok,true);assert.equal(broken.persistent,false);
});
test('cancelled, failed and timed-out ad providers never grant rewards',async()=>{
 assert.equal(await requestReward({request:async()=>({completed:true})},'revive','a'),true);
 assert.equal(await requestReward({request:async()=>({completed:false})},'revive','a'),false);
 assert.equal(await requestReward({request:async()=>({completed:'false'})},'revive','a'),false);
 assert.equal(await requestReward({request:async()=>{throw Error();}},'revive','a'),false);
 assert.equal(await requestReward({request:()=>new Promise(()=>{})},'double','a',5),false);
});
