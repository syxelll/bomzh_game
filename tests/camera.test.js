import {test} from 'node:test';import assert from 'node:assert/strict';import * as THREE from 'three';import {GameCamera} from '../src/camera.js';import {createEncounter} from '../src/encounters.js';
test('portrait camera frames player and nearby enemies after settling',()=>{
 const camera=new THREE.PerspectiveCamera(53,390/844,.1,100),rig=new GameCamera(camera);const player={x:2,z:0,facing:1};const enemies=[{x:3.5,z:0,health:80}];
 for(let i=0;i<240;i++)rig.update({player,enemies,arena:createEncounter(0),dt:1/60,width:390,height:844,time:i/60});camera.updateMatrixWorld();
 for(const actor of [player,...enemies]){const screen=new THREE.Vector3(actor.x,1,actor.z).project(camera);assert.ok(Math.abs(screen.x)<.95&&Math.abs(screen.y)<.95,JSON.stringify(screen));}
});
test('camera shake respects reduced motion and settles',()=>{const camera=new THREE.PerspectiveCamera(),rig=new GameCamera(camera,{reducedMotion:true});rig.impact(1);assert.equal(rig.shake,0);rig.reducedMotion=false;rig.impact(1);assert.equal(rig.shake,.3);rig.update({player:{x:0,z:0,facing:1},dt:1});assert.equal(rig.shake,0);assert.ok(camera.position.toArray().every(Number.isFinite));});
