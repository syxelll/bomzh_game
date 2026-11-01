import fs from 'node:fs';
import * as T from 'three';
import {virtualParent} from '../src/pose-transitions.js';
import {rig} from './lib/gltf-rig.mjs';

const hero=rig('public/models/hobo.glb'),enemy=rig('public/models/enemy.glb'),data=JSON.parse(fs.readFileSync('public/models/hobo-actions.json'));
const selected=new Set([...data.bones,...enemy.weighted].filter(n=>hero.matrices.has(n)&&enemy.matrices.has(n))),nodes=new Map();
for(const name of selected){let parent=virtualParent(name);if(parent===undefined||parent&&!selected.has(parent)){parent=enemy.parentNames.get(name);while(parent&&!selected.has(parent))parent=enemy.parentNames.get(parent);}const h=hero.matrices.get(name),e=enemy.matrices.get(name),hp=new T.Vector3(),hq=new T.Quaternion(),hs=new T.Vector3(),ep=new T.Vector3(),eq=new T.Quaternion(),es=new T.Vector3();h.decompose(hp,hq,hs);e.decompose(ep,eq,es);nodes.set(name,{name,parent:parent??null,h,e,hp,hq,ep,eq,es});}
const ordered=[],done=new Set(),visiting=new Set();function visit(n){if(done.has(n.name))return;if(visiting.has(n.name))throw Error('Retarget hierarchy cycle: '+n.name);visiting.add(n.name);if(n.parent)visit(nodes.get(n.parent));ordered.push(n);done.add(n.name);visiting.delete(n.name);}for(const n of nodes.values())visit(n);
const hspan=nodes.get('c_head.x').hp.y-Math.min(nodes.get('foot.l').hp.y,nodes.get('foot.r').hp.y),espan=nodes.get('c_head.x').ep.y-Math.min(nodes.get('foot.l').ep.y,nodes.get('foot.r').ep.y),ratio=espan/hspan;
const result={version:1,fps:data.fps,sourceSha256:data.sourceSha256,retargetedFrom:'hobo',preserveBoneLengths:true,bones:ordered.map(n=>n.name),clips:{}};
for(const [name,clip]of Object.entries(data.clips)){
 const frames=[];
 for(const frame of clip.frames){const source=new Map(),target=new Map(),deltaQ=new Map();for(const n of ordered){const index=data.bones.indexOf(n.name);let pose;if(index>=0)pose=new T.Matrix4().fromArray(frame,index*16).multiply(n.h);else{let ancestor=hero.parentNames.get(n.name);while(ancestor&&!data.bones.includes(ancestor))ancestor=hero.parentNames.get(ancestor);pose=ancestor?new T.Matrix4().fromArray(frame,data.bones.indexOf(ancestor)*16).multiply(n.h):n.h.clone();}source.set(n.name,pose);const q=new T.Quaternion();pose.decompose(new T.Vector3(),q,new T.Vector3());deltaQ.set(n.name,q.normalize().multiply(n.hq.clone().invert()));}
  const values=[];for(const n of ordered){const pos=new T.Vector3();if(!n.parent){pos.copy(n.ep).add(new T.Vector3().setFromMatrixPosition(source.get(n.name)).sub(n.hp).multiplyScalar(ratio));}else{const p=nodes.get(n.parent),parentDelta=deltaQ.get(n.parent),sourceOffset=n.hp.clone().sub(p.hp).applyQuaternion(parentDelta),actualOffset=new T.Vector3().setFromMatrixPosition(source.get(n.name)).sub(new T.Vector3().setFromMatrixPosition(source.get(n.parent))),offset=n.ep.clone().sub(p.ep).applyQuaternion(parentDelta);if(sourceOffset.lengthSq()>1e-12&&actualOffset.lengthSq()>1e-12)offset.applyQuaternion(new T.Quaternion().setFromUnitVectors(sourceOffset.normalize(),actualOffset.normalize()));pos.copy(new T.Vector3().setFromMatrixPosition(target.get(n.parent))).add(offset);}const pose=new T.Matrix4().compose(pos,deltaQ.get(n.name).clone().multiply(n.eq),n.es);target.set(n.name,pose);const delta=pose.clone().multiply(n.e.clone().invert());values.push(...delta.toArray().map(v=>Math.round(v*1e6)/1e6));}frames.push(values);
 }
 result.clips[name]={...clip,frames};
}
if(data.weaponGrip){const axis=new T.Vector3(...data.weaponGrip.axis).applyQuaternion(nodes.get('hand.r').hq).applyQuaternion(nodes.get('hand.r').eq.clone().invert()).normalize();result.weaponGrip={...data.weaponGrip,axis:axis.toArray()};}
fs.writeFileSync('public/models/enemy-actions.json',JSON.stringify(result));console.log(`Retargeted ${Object.keys(result.clips).length} clips, ${result.bones.length} bones, body ratio ${ratio.toFixed(3)}`);
