import {test} from 'node:test';import assert from 'node:assert/strict';import * as THREE from 'three';
import {directionYaw,turnToward} from '../src/movement.js';
import {chargeSuper,selectFinisherTarget,finisherPose,FINISHER_CONTACT,FINISHER_DURATION} from '../src/finisher.js';
import {canHit} from '../src/game.js';import {blendTransform} from '../src/user-actions.js';
test('all movement directions face travel and direct hits use the same heading',()=>{
 for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1]]){
  const heading=directionYaw(dx,dz),p={x:0,z:0,heading,facing:1};assert.ok(canHit(p,{x:dx*.5,z:dz*.5},'jab'));assert.ok(!canHit(p,{x:-dx*.5,z:-dz*.5},'jab'));
  let yaw=0;for(let i=0;i<100;i++)yaw=turnToward(yaw,heading,.016);assert.ok(Math.abs(Math.atan2(Math.sin(yaw-heading),Math.cos(yaw-heading)))<.001);
 }
 assert.equal(turnToward(1,2,0),1);
});
test('super charge clamps and only a nearby available opponent can be selected',()=>{
 assert.equal(chargeSuper(95,18),100);assert.equal(chargeSuper(0,-1),0);
 const p={x:0,z:0},target={x:2,z:0,health:1};
 assert.equal(selectFinisherTarget(p,[{x:.1,z:0,health:0},{x:.2,z:0,health:20,entering:true},{x:1,z:0,health:20,down:1},target]),target);
 assert.equal(selectFinisherTarget(p,[{x:3,z:0,health:20}]),null);
});
test('finisher has anticipation, single contact boundary and finite recovery',()=>{
 assert.equal(finisherPose(FINISHER_CONTACT-.001).contact,false);assert.equal(finisherPose(FINISHER_CONTACT).contact,true);
 assert.equal(finisherPose(FINISHER_DURATION).done,true);assert.equal(finisherPose(0).punch,0);
 for(let t=0;t<FINISHER_DURATION;t+=.01){const p=finisherPose(t);assert.ok(p.punch>=0&&p.punch<=1&&p.fall>=0&&p.fall<=1);}
});
test('half-turn animation interpolation keeps bones rigid instead of collapsing their axes',()=>{
 const a=new THREE.Matrix4(),b=new THREE.Matrix4().makeRotationY(Math.PI),out=new THREE.Matrix4();blendTransform(out,a,b,.5);
 assert.ok(Math.abs(out.determinant()-1)<1e-6);for(let i=0;i<3;i++)assert.ok(Math.abs(new THREE.Vector3().setFromMatrixColumn(out,i).length()-1)<1e-6);
});

test('procedural guard bends sideways bind arms downward without changing limb lengths',async()=>{
 const {prepareAnimator,pose}=await import('../src/animation.js');
 const root=new THREE.Group(),visual=new THREE.Group();root.add(visual);const bones=[];
 for(const [side,sign] of [['l',1],['r',-1]])for(const [name,x] of [['arm',.3],['forearm',.7],['hand',1.1]]){const bone=new THREE.Bone();bone.name=`${name}.${side}`;bone.position.set(x*sign,1.5,0);visual.add(bone);bones.push({bone});}
 const actor={root,visual,bones,baseVisualY:0};prepareAnimator(actor);pose(actor,0,false,null,0);
 for(const side of ['l','r']){
  const point=name=>new THREE.Vector3().setFromMatrixPosition(actor.posedWorld.get(bones.find(b=>b.bone.name===`${name}.${side}`).bone));
  const shoulder=point('arm'),elbow=point('forearm'),wrist=point('hand');
  assert.ok(elbow.y<shoulder.y-.25,'elbow lowered rather than axial shoulder twist');assert.ok(wrist.z>elbow.z+.25,'forearm bends toward the front');
  assert.ok(Math.abs(shoulder.distanceTo(elbow)-.4)<1e-6);assert.ok(Math.abs(elbow.distanceTo(wrist)-.4)<1e-6);
 }
});

test('cinematic camera retains both full bodies in desktop and portrait frames',async()=>{
 const {GameCamera}=await import('../src/camera.js');
 for(const [width,height] of [[1365,768],[390,844]]){
  const cam=new THREE.PerspectiveCamera(42,width/height,.1,100),rig=new GameCamera(cam);cam.position.set(0,4,8);
  const player={x:0,z:0},target={x:1.3,z:0,root:{position:{x:1.85}}};
  for(let i=0;i<180;i++)rig.cinematic(player,target,1.6,.016,width,height);cam.updateMatrixWorld();
  for(const x of [-.35,.35,1.5,2.2])for(const y of [0,2.2]){const p=new THREE.Vector3(x,y,0).project(cam);assert.ok(Math.abs(p.x)<.95&&Math.abs(p.y)<.9,JSON.stringify({width,x,y,p}));}
 }
});

test('finisher placement keeps actual striking distance and stays inside invisible walls',async()=>{
 const {finisherPlacement}=await import('../src/finisher.js');
 for(const targetX of [.15,5,9.85])for(const playerX of [0,10]){
  const p=finisherPlacement({x:playerX},{x:targetX},[0,10]);assert.ok(p.endX>=.1&&p.endX<=9.9);assert.ok(Math.abs(Math.abs(p.endX-targetX)-.65)<1e-6);assert.equal(Math.sign(targetX-p.endX),p.side);
 }
});
