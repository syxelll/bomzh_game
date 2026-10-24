import {test} from 'node:test';import assert from 'node:assert/strict';import * as T from 'three';
import {advanceWalk,walkFrame,WALK_SPEED} from '../src/locomotion.js';import {prepareGrounding,feetHeight,groundPose} from '../src/grounding.js';
test('walk phase is proportional to real distance, independent of frame rate and idle time',()=>{
 const a={walkDistance:0},b={walkDistance:0};for(let i=0;i<120;i++)advanceWalk(a,.01);for(let i=0;i<12;i++)advanceWalk(b,.1);assert.ok(Math.abs(a.walkDistance-b.walkDistance)<1e-10);assert.ok(Math.abs(walkFrame(a.walkDistance,1.4,34)-walkFrame(b.walkDistance,1.4,34))<1e-8);
 const before=walkFrame(a.walkDistance,1.4,34);advanceWalk(a,0);advanceWalk(a,-1);assert.equal(walkFrame(a.walkDistance,1.4,34),before);assert.ok(Math.abs(walkFrame(.35,1.4,34)-8.25)<1e-8);assert.ok(WALK_SPEED<2);
});
function feetActor(){
 const root=new T.Group(),bones=[new T.Bone(),new T.Bone()];root.add(...bones);const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute([-.3,.1,-.1,-.2,.1,.1,-.1,.1,-.1,.1,.1,-.1,.2,.1,.1,.3,.1,-.1],3));g.setAttribute('skinIndex',new T.Uint16BufferAttribute([0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],4));g.setAttribute('skinWeight',new T.Float32BufferAttribute(Array.from({length:6},()=>[1,0,0,0]).flat(),4));const mesh=new T.SkinnedMesh(g,new T.MeshBasicMaterial());mesh.name='boots';root.add(mesh);root.updateMatrixWorld(true);mesh.bind(new T.Skeleton(bones));const actor={root,visual:root,posedWorld:new Map([[bones[0],new T.Matrix4().makeTranslation(0,.3,0)],[bones[1],new T.Matrix4().makeTranslation(0,1,0)]])};prepareGrounding(actor);return {actor,bones};
}
test('the support sole reaches the plane while the kicking foot stays raised',()=>{
 const {actor,bones}=feetActor();assert.ok(Math.abs(feetHeight(actor)-.4)<1e-6);groundPose(actor);assert.ok(Math.abs(feetHeight(actor))<1e-6);assert.ok(Math.abs(actor.posedWorld.get(bones[1]).elements[13]-.6)<1e-6);
});
test('corpses and knocked-down actors keep their staged airborne/fall poses',()=>{const {actor,bones}=feetActor();actor.health=0;groundPose(actor);assert.equal(actor.feetY,null);assert.equal(actor.posedWorld.get(bones[0]).elements[13],.3);});
