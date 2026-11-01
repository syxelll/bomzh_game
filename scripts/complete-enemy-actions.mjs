// Preserve the user's actual strike, add full-body preparation and recovery in
// anatomical local frames. No linear mixing of unrelated world-space joints.
import fs from 'node:fs';import * as T from 'three';import {rig} from './lib/gltf-rig.mjs';
import {blendUserTransition,blendPoseMaps} from '../src/pose-transitions.js';
const path='public/models/hobo-actions.json',data=JSON.parse(fs.readFileSync(path)),source=rig('public/models/hobo.glb'),byName=new Map();
for(const name of data.bones)byName.set(name,{name,userData:{name},isBone:true,parent:null});for(const [name,bone]of byName)bone.parent=byName.get(source.parentNames.get(name))??null;
const bind=data.bones.map(name=>({name,bone:byName.get(name),matrix:source.matrices.get(name)}));const actor={bind,userActions:data,visual:new T.Group(),posedWorld:new Map(bind.map(b=>[b.bone,b.matrix.clone()]))};actor.visual.updateMatrixWorld();blendUserTransition(actor,0,'setup');
const poses=frame=>new Map(bind.map((b,i)=>[b.bone,new T.Matrix4().fromArray(frame,i*16).multiply(b.matrix)]));const idle=poses(data.clips.idle.frames[0]);
const blend=(a,b,u)=>blendPoseMaps(actor,a,b,T.MathUtils.smoothstep(u,0,1));
for(const [name,original]of Object.entries({enemy_punch_01:'jab_01_combo',enemy_punch_02:'jab_02_combo',enemy_kick:'kick_combo'})){
 const c=data.clips[original],prep=.20,recovery=original.startsWith('kick')?.0:.32,duration=prep+c.duration+recovery,hit=(c.markers.hit/(c.frames.length-1))*c.duration+prep,count=Math.round(duration*data.fps),frames=[];
 const start=poses(c.frames[0]),end=poses(c.frames.at(-1));for(let f=0;f<=count;f++){const t=f/count*duration;let pose;if(t<prep)pose=blend(idle,start,t/prep);else if(t<=prep+c.duration){const index=(t-prep)/c.duration*(c.frames.length-1),lo=Math.min(c.frames.length-1,Math.floor(index)),hi=Math.min(c.frames.length-1,lo+1);pose=blendPoseMaps(actor,poses(c.frames[lo]),poses(c.frames[hi]),index-lo);}else pose=blend(end,idle,(t-prep-c.duration)/recovery);const values=[];for(const b of bind)values.push(...pose.get(b.bone).clone().multiply(b.matrix.clone().invert()).toArray().map(v=>Math.round(v*1e6)/1e6));frames.push(values);}
 // Kicks already contain their complete recovery; make the endpoint an idle pose.
 if(!recovery)frames[frames.length-1]=data.clips.idle.frames[0].slice();
 data.clips[name]={frames,duration,start:1,end:count+1,markers:{hit:Math.round(hit/duration*count),strikeStart:Math.round(prep/duration*count)},complete:true,source:original};console.log(name,duration,hit);
}
fs.writeFileSync(path,JSON.stringify(data));
