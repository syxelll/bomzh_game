import * as THREE from 'three';
import {walkFrame,WALK_RATE} from './locomotion.js';
import {blendTransform,blendUserTransition} from './pose-transitions.js';
export {blendTransform,blendUserTransition} from './pose-transitions.js';
export function validateActions(data){if(data?.version!==1||!Array.isArray(data.bones)||!data.bones.length||!Number.isFinite(data.fps)||data.fps<=0)throw new Error('Invalid action data');if(!data.clips?.idle||!(data.clips.jab_01||comboClips(data).length))throw new Error('Missing authored idle or attack');for(const name of Object.keys(data.clips??{})){const frames=data.clips?.[name]?.frames;if(!frames?.length||frames.some(f=>f.length!==data.bones.length*16||!f.every(Number.isFinite)))throw new Error(`Invalid clip ${name}`);}return data;}
export function comboClips(data){return Object.keys(data?.clips??{}).filter(n=>n.endsWith('_combo')).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));}
export function comboSpec(data,index){const name=comboClips(data)[index],clip=data?.clips[name];if(!clip)return null;const duration=Math.max(.3,clip.duration);return {...(name.startsWith('kick')?{range:1.9,damage:18}:{}),clip:name,duration,cooldown:duration,hitAt:clip.markers?.hit!==undefined?clip.markers.hit/(clip.frames.length-1):.9};}
export function attachUserActions(actor,data){actor.userActions=validateActions(data);actor.userBoneIndices=new Map(data.bones.map((name,i)=>[name,i*16]));actor.walkStride=measureStride(actor);actor.walkSpeed=data.clips.walk?actor.walkStride/data.clips.walk.duration*WALK_RATE:undefined;actor.closedLoops=new Set(['idle','walk'].filter(name=>{const f=data.clips[name]?.frames;return f?.length&&f[0].every((v,i)=>Math.abs(v-f.at(-1)[i])<1e-5);}));}
function measureStride(actor){
 const data=actor.userActions,clip=data.clips.walk;let span=0;
 if(clip)for(const name of ['foot.l','foot.r']){const offset=actor.userBoneIndices.get(name),bind=actor.bind.find(b=>b.name===name);if(offset===undefined||!bind)continue;let min=Infinity,max=-Infinity;for(const frame of clip.frames){const point=new THREE.Vector3().setFromMatrixPosition(new THREE.Matrix4().fromArray(frame,offset).multiply(bind.matrix));min=Math.min(min,point.z);max=Math.max(max,point.z);}span=Math.max(span,max-min);}
 const height=actor.height??1.85,value=span*2*actor.visual.scale.z;return value>.1?Math.max(height*.35,Math.min(height*.95,value)):height*.65;
}
const tempA=new THREE.Matrix4();
const blendA=new THREE.Matrix4(),blendB=new THREE.Matrix4(),loopFirst=new THREE.Matrix4();
function interpolateMatrix(out,a,b,alpha,offset=0){blendA.fromArray(a,offset);blendB.fromArray(b,offset);return blendTransform(out,blendA,blendB,alpha);}
function sample(actor,name,progress,time,offset,out){
 const frames=actor.userActions.clips[name].frames,loop=name==='idle'||name==='walk',last=frames.length-1;
 const frame=name==='walk'&&Number.isFinite(actor.walkDistance)?walkFrame(actor.walkDistance,actor.walkStride,frames.length):loop?(time*actor.userActions.fps)%Math.max(1,last):Math.max(0,Math.min(1,progress))*last;
 const lo=Math.floor(frame),hi=Math.min(last,lo+1);interpolateMatrix(out,frames[lo],frames[hi],frame-lo,offset);
 const tail=actor.closedLoops.has(name)?0:Math.min(8,last*.2);
 if(loop&&tail>0&&frame>last-tail){const t=(frame-(last-tail))/tail;loopFirst.fromArray(frames[0],offset);blendTransform(out,out,loopFirst,t*t*(3-2*t));}
 return out;
}

export function applyUserAction(actor,time,walk,kind,progress){
 if(!actor.userActions||actor.hurt>0||(actor.dodge>0&&!actor.userActions.clips.dodge))return false;
 const dodging=actor.dodge>0;
 const name=dodging?'dodge':kind==='jab'?(actor.attackSpec?.clip??comboClips(actor.userActions)[Math.max(0,(actor.combo??1)-1)%Math.max(1,comboClips(actor.userActions).length)]??'jab_01'):kind==='kick'?'kick':kind==='spray'?'spray':kind==='burp'?'burp':!kind?(walk?(actor.userActions.clips.walk?'walk':null):'idle'):null;if(!name||!actor.userActions.clips[name])return false;
 actor.visual.position.y=actor.baseVisualY;actor.root.updateMatrixWorld(true);
 const returning=kind==='jab'&&!name.endsWith('_combo')&&progress>.76;
 const sampleName=returning?'idle':name,clipProgress=dodging?Math.max(0,Math.min(1,1-actor.dodge/(actor.dodgeDuration??.24))):kind==='jab'&&!name.endsWith('_combo')?Math.min(1,progress/.7):progress;
 function delta(bone,out){const offset=actor.userBoneIndices.get(bone);if(offset===undefined)return out.identity();return sample(actor,sampleName,clipProgress,returning?0:time,offset,out);}

 for(const b of actor.bind){delta(b.name,tempA);let world=actor.posedWorld.get(b.bone);if(!world){world=new THREE.Matrix4();actor.posedWorld.set(b.bone,world);}world.copy(actor.visual.matrixWorld).multiply(tempA).multiply(b.matrix);}

 if(name.endsWith('_combo')||name==='spray'||name==='burp'||name==='dodge')applyReferenceHands(actor);
 return returning?'jab:return':kind==='jab'?name+':'+(actor.attackSerial??0):name;
}
// Reuse the authored hand shape for procedural moves instead of curling weighted
// ARP control bones independently (which separates vertices at finger bases).
export function applyReferenceHands(actor){
 if(!actor.userActions)return;
 if(!actor.referenceFingers){
  actor.referenceFingers=[];const frame=actor.userActions.clips.idle.frames[0],byName=new Map(actor.bind.map(b=>[b.name,b]));
  for(const b of actor.bind){if(!/^(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie)/.test(b.name))continue;
   const side=b.name.endsWith('.l')?'.l':'.r',hand=byName.get('hand'+side),hi=actor.userBoneIndices.get('hand'+side),bi=actor.userBoneIndices.get(b.name);if(!hand||hi===undefined||bi===undefined)continue;
   const wrist=new THREE.Matrix4().fromArray(frame,hi).multiply(hand.matrix),finger=new THREE.Matrix4().fromArray(frame,bi).multiply(b.matrix);
   actor.referenceFingers.push({bone:b.bone,hand:hand.bone,relative:wrist.invert().multiply(finger)});
  }
 }
 for(const b of actor.referenceFingers){const hand=actor.posedWorld.get(b.hand);if(hand)actor.posedWorld.get(b.bone).copy(hand).multiply(b.relative);}
}
