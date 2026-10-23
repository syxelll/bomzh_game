import {test} from 'node:test';
import assert from 'node:assert/strict';
import {quests,acceptQuest,claimQuest,questStatus} from '../src/quests.js';
test('quest needs acceptance and target, reward can only be claimed once',()=>{
 const log={},state={collected:2,coins:0,health:90};const q=quests[0];
 assert.equal(claimQuest(q.id,log,state),false);assert.equal(acceptQuest(q.id,log),true);
 assert.equal(questStatus(q,log,state),'active');assert.equal(claimQuest(q.id,log,state),false);
 state.collected=3;assert.equal(questStatus(q,log,state),'ready');assert.equal(claimQuest(q.id,log,state),true);
 assert.equal(state.coins,12);assert.equal(claimQuest(q.id,log,state),false);assert.equal(acceptQuest(q.id,log),false);assert.equal(state.coins,12);
});
test('earlier progress counts; sale and combat rewards are independent and healing is capped',()=>{
 const state={collected:18,sold:5,defeated:2,coins:30,health:90},log={};
 for(const q of quests){acceptQuest(q.id,log);assert.equal(questStatus(q,log,state),'ready');assert.equal(claimQuest(q.id,log,state),true);}
 assert.equal(state.coins,87);assert.equal(state.health,100);assert.equal(state.collected,18);assert.equal(state.sold,5);
 assert.equal(acceptQuest('unknown',log),false);assert.equal(claimQuest('unknown',log,state),false);
});
