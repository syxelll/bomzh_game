import {test} from 'node:test';import assert from 'node:assert/strict';import * as THREE from 'three';import {GameCamera} from '../src/camera.js';import {createEncounter} from '../src/encounters.js';
test('portrait camera frames player and nearby enemies after settling',()=>{
 const camera=new THREE.PerspectiveCamera(53,390/844,.1,100),rig=new GameCamera(camera);const player={x:2,z:0,facing:1};const enemies=[{x:3.5,z:0,health:80}];
 for(let i=0;i<240;i++)rig.update({player,enemies,arena:createEncounter(0),dt:1/60,width:390,height:844,time:i/60});camera.updateMatrixWorld();
 for(const actor of [player,...enemies]){const screen=new THREE.Vector3(actor.x,1,actor.z).project(camera);assert.ok(Math.abs(screen.x)<.95&&Math.abs(screen.y)<.95,JSON.stringify(screen));}
});
test('camera shake respects reduced motion and settles',()=>{const camera=new THREE.PerspectiveCamera(),rig=new GameCamera(camera,{reducedMotion:true});rig.impact(1);assert.equal(rig.shake,0);rig.reducedMotion=false;rig.impact(1);assert.equal(rig.shake,.3);rig.update({player:{x:0,z:0,facing:1},dt:1});assert.equal(rig.shake,0);assert.ok(camera.position.toArray().every(Number.isFinite));});

test('shake is visible and bounded while base framing remains identical, then settles without drift',()=>{
 const camera=new THREE.PerspectiveCamera(42,16/9,.1,100),control=camera.clone(),rig=new GameCamera(camera),plain=new GameCamera(control),player={x:0,z:0,facing:1};
 for(let i=0;i<180;i++){rig.update({player,dt:1/60});plain.update({player,dt:1/60});}
 rig.impact(.3);let peak=0,rotation=0;
 for(let i=0;i<90;i++){rig.update({player,dt:1/60});plain.update({player,dt:1/60});const displacement=camera.position.distanceTo(control.position);peak=Math.max(peak,displacement);rotation=Math.max(rotation,camera.quaternion.angleTo(control.quaternion));assert.ok(displacement<.12);assert.ok(rig.framingCamera.position.distanceTo(control.position)<1e-10);}
 assert.ok(peak>.02,'impact should produce a perceptible displacement');assert.ok(rotation>.003,'impact includes camera rotation');assert.equal(rig.shake,0);assert.ok(camera.position.distanceTo(control.position)<1e-10);assert.ok(camera.quaternion.angleTo(control.quaternion)<1e-6);
});
test('cinematic impacts shake too, pause freezes them and the setting disables them',()=>{
 const camera=new THREE.PerspectiveCamera(42,16/9,.1,100),rig=new GameCamera(camera),p={x:0,z:0},target={x:1,z:0};
 rig.impact(.3);rig.cinematic(p,target,1.3,1/60,1365,768);assert.ok(camera.position.distanceTo(rig.framingCamera.position)>.005);
 const position=camera.position.clone(),rotation=camera.quaternion.clone(),strength=rig.shake;
 for(let i=0;i<20;i++)rig.cinematic(p,target,1.3,0,1365,768);
 assert.equal(rig.shake,strength);assert.ok(camera.position.distanceTo(position)<1e-10);assert.ok(camera.quaternion.angleTo(rotation)<1e-6);
 rig.setShakeEnabled(false);rig.impact(1);rig.cinematic(p,target,1.3,0,1365,768);assert.equal(rig.shake,0);assert.ok(camera.position.distanceTo(rig.framingCamera.position)<1e-10);
});
