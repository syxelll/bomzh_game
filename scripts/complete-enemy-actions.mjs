// Preserve the user's actual strike, add full-body preparation and recovery in
// anatomical local frames. No linear mixing of unrelated world-space joints.
import fs from 'node:fs';import * as T from 'three';import {rig} from './lib/gltf-rig.mjs';
import {blendUserTransition,blendPoseMaps} from '../src/pose-transitions.js';
const path='public/models/hobo-actions.json',data=JSON.parse(fs.readFileSync(path)),source=rig('public/models/hobo.glb'),byName=new Map();
for(const name of data.bones)byName.set(name,{name,userData:{name},isBone:true,parent:null});for(const [name,bone]of byName)bone.parent=byName.get(source.parentNames.get(name))??null;
const bind=data.bones.map(name=>({name,bone:byName.get(name),matrix:source.matrices.get(name)}));const actor={bind,userActions:data,visual:new T.Group(),posedWorld:new Map(bind.map(b=>[b.bone,b.matrix.clone()]))};actor.visual.updateMatrixWorld();blendUserTransition(actor,0,'setup');
const poses=frame=>new Map(bind.map((b,i)=>[b.bone,new T.Matrix4().fromArray(frame,i*16).multiply(b.matrix)]));const guardFrame=data.clips.enemy_guard?.frames[0]??data.clips.idle.frames[0],idle=poses(guardFrame);
const blend=(a,b,u)=>blendPoseMaps(actor,a,b,T.MathUtils.smoothstep(u,0,1));
for(const [name,original]of Object.entries({enemy_punch_01:'jab_01_combo',enemy_punch_02:'jab_02_combo',enemy_kick:'kick_combo'})){
 const c=data.clips[original],prep=.20,recovery=original.startsWith('kick')?.20:.32,duration=prep+c.duration+recovery,hit=(c.markers.hit/(c.frames.length-1))*c.duration+prep,count=Math.round(duration*data.fps),frames=[];
 const start=poses(c.frames[0]),end=poses(c.frames.at(-1));for(let f=0;f<=count;f++){const t=f/count*duration;let pose;if(t<prep)pose=blend(idle,start,t/prep);else if(t<=prep+c.duration){const index=(t-prep)/c.duration*(c.frames.length-1),lo=Math.min(c.frames.length-1,Math.floor(index)),hi=Math.min(c.frames.length-1,lo+1);pose=blendPoseMaps(actor,poses(c.frames[lo]),poses(c.frames[hi]),index-lo);}else pose=blend(end,idle,(t-prep-c.duration)/recovery);const values=[];for(const b of bind)values.push(...pose.get(b.bone).clone().multiply(b.matrix.clone().invert()).toArray().map(v=>Math.round(v*1e6)/1e6));frames.push(values);}
 // Kicks already contain their complete recovery; make the endpoint an idle pose.
 if(!recovery)frames[frames.length-1]=guardFrame.slice();
 data.clips[name]={frames,duration,start:1,end:count+1,markers:{hit:Math.round(hit/duration*count),strikeStart:Math.round(prep/duration*count)},complete:true,source:original};console.log(name,duration,hit);
}
// Reuse the finished authored pickup for the new smash's approach to the
// floor. The original clip is never edited; only the new action is assembled.
const smash=data.clips.bottle_smash,pickup=data.clips.bottle_pickup,native=smash.frames.slice();
function poseAt(clip,frames,time){const index=Math.max(0,Math.min(1,time/clip.duration))*(frames.length-1),lo=Math.floor(index),hi=Math.min(frames.length-1,lo+1);return blendPoseMaps(actor,poses(frames[lo]),poses(frames[hi]),index-lo);}
for(let f=0;f<smash.frames.length;f++){const t=f/(smash.frames.length-1)*smash.duration;if(t>=.94)continue;let pose;if(t<=.48)pose=poseAt(pickup,pickup.frames,t/.48*.28);else if(t<=.78)pose=poseAt(pickup,pickup.frames,.28+(t-.48)/.3*.22);else pose=blend(poseAt(pickup,pickup.frames,.5),poseAt(smash,native,.94),(t-.78)/.16);const values=[];for(const b of bind)values.push(...pose.get(b.bone).clone().multiply(b.matrix.clone().invert()).toArray().map(v=>Math.round(v*1e6)/1e6));smash.frames[f]=values;}
smash.pickupPrefix='bottle_pickup: frames 0–15, unchanged source';
// Finish the recovery in a fighting guard, rather than dropping both arms
// and lifting them again in a separate idle transition.
const getup=data.clips.getup_back;if(!getup.guardRecovery){for(let f=0;f<getup.frames.length;f++){const t=f/(getup.frames.length-1)*getup.duration;if(t<.88)continue;const pose=blend(poses(getup.frames[f]),idle,(t-.88)/(getup.duration-.88)),values=[];for(const b of bind)values.push(...pose.get(b.bone).clone().multiply(b.matrix.clone().invert()).toArray().map(v=>Math.round(v*1e6)/1e6));getup.frames[f]=values;}getup.guardRecovery=true;}
fs.writeFileSync(path,JSON.stringify(data));
