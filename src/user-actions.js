import * as THREE from 'three';
export function validateActions(data){if(data?.version!==1||!Array.isArray(data.bones)||!data.bones.length||!Number.isFinite(data.fps)||data.fps<=0)throw new Error('Invalid action data');for(const name of ['idle','jab_01','kick']){const frames=data.clips?.[name]?.frames;if(!frames?.length||frames.some(f=>f.length!==data.bones.length*16||!f.every(Number.isFinite)))throw new Error(`Invalid clip ${name}`);}return data;}
export function attachUserActions(actor,data){actor.userActions=validateActions(data);actor.userBoneIndices=new Map(data.bones.map((name,i)=>[name,i*16]));}
const tempA=new THREE.Matrix4(),tempB=new THREE.Matrix4(),tempWorld=new THREE.Matrix4();
const blendA=new THREE.Matrix4(),blendB=new THREE.Matrix4();
const posA=new THREE.Vector3(),posB=new THREE.Vector3(),scaleA=new THREE.Vector3(),scaleB=new THREE.Vector3(),rotA=new THREE.Quaternion(),rotB=new THREE.Quaternion();
export function blendTransform(out,a,b,alpha){
 a.decompose(posA,rotA,scaleA);b.decompose(posB,rotB,scaleB);
 return out.compose(posA.lerp(posB,alpha),rotA.slerp(rotB,alpha).normalize(),scaleA.lerp(scaleB,alpha));
}
function interpolateMatrix(out,a,b,alpha,offset=0){blendA.fromArray(a,offset);blendB.fromArray(b,offset);return blendTransform(out,blendA,blendB,alpha);}
function sample(actor,name,progress,time,offset,out){const clip=actor.userActions.clips[name],frames=clip.frames;let frame=name==='idle'?(time*actor.userActions.fps)%Math.max(1,frames.length-1):Math.max(0,Math.min(1,progress))*(frames.length-1);const lo=Math.floor(frame),hi=Math.min(frames.length-1,lo+1);return interpolateMatrix(out,frames[lo],frames[hi],frame-lo,offset);}
export function applyUserAction(actor,time,walk,kind,progress){
 if(!actor.userActions||actor.hurt>0||actor.dodge>0)return false;
 const name=kind==='jab'?'jab_01':kind==='kick'?'kick':!kind&&!walk?'idle':null;if(!name)return false;
 actor.visual.position.y=actor.baseVisualY;actor.root.updateMatrixWorld(true);
 const clipProgress=kind==='jab'?Math.min(1,progress/.7):progress;
 function delta(bone,out){const offset=actor.userBoneIndices.get(bone);if(offset===undefined)return out.identity();sample(actor,name,clipProgress,time,offset,out);if(kind==='jab'&&progress>.7){sample(actor,'idle',0,0,offset,tempB);const t=Math.max(0,Math.min(1,(progress-.7)/.3));const alpha=t*t*(3-2*t);blendTransform(out,out,tempB,alpha);}return out;}
 for(const b of actor.bind){delta(b.name,tempA);let world=actor.posedWorld.get(b.bone);if(!world){world=new THREE.Matrix4();actor.posedWorld.set(b.bone,world);}world.copy(actor.visual.matrixWorld).multiply(tempA).multiply(b.matrix);}
 for(const b of actor.rigid){delta(b.parentBoneName,tempA);tempWorld.copy(actor.visual.matrixWorld).multiply(tempA).multiply(b.matrix);b.mesh.matrix.copy(b.mesh.parent.matrixWorld).invert().multiply(tempWorld);b.mesh.updateWorldMatrix(false,false);}
 return name;
}
export function blendUserTransition(actor,time,id){
 if(!actor.userActions)return;
 const inverse=actor.visual.matrixWorld.clone().invert();
 const previous=actor.lastMotion??new Map();
 if(actor.motionId!==id){actor.transitionFrom=previous;actor.transitionStart=time;actor.motionId=id;}
 const t=Math.min(1,(time-actor.transitionStart)/.12),alpha=t*t*(3-2*t),next=new Map();
 for(const [bone,world] of actor.posedWorld){const target=new THREE.Matrix4().multiplyMatrices(inverse,world),from=actor.transitionFrom?.get(bone);if(from&&alpha<1){
 // Interpolate deformation deltas, retaining the rig's original scaled bind matrices.
 const bind=actor.bind.find(b=>b.bone===bone)?.matrix;
 if(bind){const inverseBind=bind.clone().invert();const a=from.clone().multiply(inverseBind),b=target.clone().multiply(inverseBind);blendTransform(target,a,b,alpha);target.multiply(bind);}
 }next.set(bone,target);world.copy(actor.visual.matrixWorld).multiply(target);}
 actor.lastMotion=next;if(alpha===1)actor.transitionFrom=null;
}
