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

test('foot IK plants through the knee without moving the hip or changing leg lengths',async()=>{
 const {solveFoot}=await import('../src/foot-ik.js');const hip=new T.Bone(),knee=new T.Bone(),ankle=new T.Bone();
 const h=new T.Vector3(0,1,0),k=new T.Vector3(0,.55,.14),a=new T.Vector3(0,.1,0),matrix=p=>new T.Matrix4().makeTranslation(p.x,p.y,p.z);
 const actor={root:new T.Group(),posedWorld:new Map([[hip,matrix(h)],[knee,matrix(k)],[ankle,matrix(a)]]),ikLegs:new Map([['l',{hip,knee,ankle,groups:{upper:[hip],lower:[knee],foot:[ankle]}}]])};
 assert.equal(solveFoot(actor,'l',.05),true);const point=b=>new T.Vector3().setFromMatrixPosition(actor.posedWorld.get(b));assert.ok(point(hip).distanceTo(h)<1e-8);assert.ok(Math.abs(point(ankle).y-.15)<1e-8);assert.ok(Math.abs(point(hip).distanceTo(point(knee))-h.distanceTo(k))<1e-8);assert.ok(Math.abs(point(knee).distanceTo(point(ankle))-k.distanceTo(a))<1e-8);
});

test('planting nearly straight legs never amplifies inward knee noise into crossed legs',async()=>{
 const {solveFoot}=await import('../src/foot-ik.js');
 for(const sign of [-1,1])for(const yaw of [0,Math.PI/2,Math.PI,-Math.PI/2]){
  const root=new T.Group();root.rotation.y=yaw;root.updateMatrixWorld(true);
  const hip=new T.Bone(),knee=new T.Bone(),ankle=new T.Bone(),points=[new T.Vector3(sign*.14,1,0),new T.Vector3(sign*.12,.55,.004),new T.Vector3(sign*.14,.1,0)],matrix=p=>new T.Matrix4().makeTranslation(p.x,p.y,p.z).premultiply(root.matrixWorld);
  const actor={root,posedWorld:new Map([[hip,matrix(points[0])],[knee,matrix(points[1])],[ankle,matrix(points[2])]]),ikLegs:new Map([['l',{hip,knee,ankle,groups:{upper:[hip],lower:[knee],foot:[ankle]}}]])};
  assert.equal(solveFoot(actor,'l',.05),true);const localKnee=new T.Vector3().setFromMatrixPosition(actor.posedWorld.get(knee)).applyMatrix4(root.matrixWorld.clone().invert());assert.ok(localKnee.x*sign>=.12,'knee cannot collapse toward the opposite leg');assert.ok(localKnee.z>0,'knee bends forward');
 }
});

test('authored gait preserves leg joints and bounds vertical correction instead of re-solving knees',()=>{
 const {actor,bones}=feetActor();actor.userActions={};actor.transitionStart=-1;
 groundPose(actor,0,{time:1});const initial=actor.groundOffset;
 actor.posedWorld.get(bones[0]).elements[13]+=.03;
 actor.posedWorld.get(bones[1]).elements[13]+=.03;
 const before=actor.posedWorld.get(bones[1]).elements[13]-actor.posedWorld.get(bones[0]).elements[13];
 groundPose(actor,0,{time:1+1/60});
 assert.ok(Math.abs(actor.groundOffset-initial)<=.00120001);
 assert.ok(Math.abs(actor.posedWorld.get(bones[1]).elements[13]-actor.posedWorld.get(bones[0]).elements[13]-before)<1e-8);
});
