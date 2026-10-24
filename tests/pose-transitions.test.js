import {test} from 'node:test';import assert from 'node:assert/strict';import * as T from 'three';
import {blendTransform,normalizeHands,updateRigidAttachments} from '../src/pose-transitions.js';
test('hand scale correction preserves the wrist and normalizes finger geometry together',()=>{
 const wrist=new T.Bone(),finger=new T.Bone(),bind=new T.Matrix4().makeTranslation(1,0,0),fingerBind=new T.Matrix4().makeTranslation(1,.1,0);
 const hand={bone:wrist,name:'hand.r',matrix:bind},digit={bone:finger,name:'c_index2.r',matrix:fingerBind};
 const actor={bind:[hand,digit],bindByName:new Map([[hand.name,hand],[digit.name,digit]])};
 const pose=new T.Matrix4().compose(new T.Vector3(3,2,0),new T.Quaternion(),new T.Vector3(2,2,2)),fpose=pose.clone().multiply(new T.Matrix4().makeTranslation(0,.1,0)),poses=new Map([[wrist,pose],[finger,fpose]]);
 normalizeHands(actor,poses);const p=new T.Vector3(),q=new T.Quaternion(),s=new T.Vector3();poses.get(wrist).decompose(p,q,s);assert.ok(p.distanceTo(new T.Vector3(3,2,0))<1e-8);assert.ok(s.distanceTo(new T.Vector3(1,1,1))<1e-8);assert.ok(Math.abs(new T.Vector3().setFromMatrixPosition(poses.get(finger)).distanceTo(p)-.1)<1e-8);
});
test('rigid attachments follow the final blended bone rather than the unsmoothed scene bone',()=>{
 const visual=new T.Group(),bone=new T.Bone(),hat=new T.Mesh();visual.add(bone);bone.add(hat);hat.matrixAutoUpdate=false;visual.updateMatrixWorld(true);
 const desired=new T.Matrix4().makeRotationZ(.5).setPosition(2,3,0),offset=new T.Matrix4().makeTranslation(0,.2,0),b={bone,name:'head.x',matrix:new T.Matrix4()};
 updateRigidAttachments({visual,bind:[b],rigid:[{mesh:hat,parentBoneName:'head.x',matrix:offset}],posedWorld:new Map([[bone,desired]])});
 const expected=desired.clone().multiply(offset);assert.ok(expected.elements.every((v,i)=>Math.abs(v-hat.matrixWorld.elements[i])<1e-8));
});
test('blend endpoints retain exact affine bind data including shear',()=>{
 const a=new T.Matrix4().makeShear(.2,0,0,0,0,0),b=new T.Matrix4().makeRotationY(1),out=new T.Matrix4();assert.deepEqual(blendTransform(out,a,b,0).elements,a.elements);assert.deepEqual(blendTransform(out,a,b,1).elements,b.elements);
});
