import * as THREE from 'three';
const posA=new THREE.Vector3(),posB=new THREE.Vector3(),scaleA=new THREE.Vector3(),scaleB=new THREE.Vector3(),rotA=new THREE.Quaternion(),rotB=new THREE.Quaternion();
export function blendTransform(out,a,b,alpha){
 if(alpha<=0)return out.copy(a);if(alpha>=1)return out.copy(b);
 a.decompose(posA,rotA,scaleA);b.decompose(posB,rotB,scaleB);
 return out.compose(posA.lerp(posB,alpha),rotA.slerp(rotB,alpha).normalize(),scaleA.lerp(scaleB,alpha));
}
const handPart=/^(?:hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/;
function virtualParent(name){
 const side=name.endsWith('.l')?'.l':name.endsWith('.r')?'.r':'';
 const stem=side?name.slice(0,-2):name;
 if(stem==='shoulder')return 'spine_03.x';
 if(stem==='arm_stretch')return 'shoulder'+side;
 if(stem==='c_arm_twist_offset')return 'arm_stretch'+side;
 if(stem==='forearm_stretch')return 'arm_stretch'+side;
 if(stem==='forearm_twist'||stem==='hand')return 'forearm_stretch'+side;
 if(stem==='thigh_stretch')return 'root.x';
 if(stem==='thigh_twist'||stem==='leg_stretch')return 'thigh_stretch'+side;
 if(stem==='leg_twist'||stem==='foot')return 'leg_stretch'+side;
 if(stem==='toes_01')return 'foot'+side;
 return {'root.x':null,'spine_01.x':'root.x','spine_02.x':'spine_01.x','spine_03.x':'spine_02.x','neck.x':'spine_03.x','c_head.x':'neck.x','head.x':'c_head.x','jawbone.x':'head.x'}[name];
}
function configure(actor){
 const byName=new Map(actor.bind.map(b=>[b.name,b])),selected=new Set(actor.userActions.bones);
 const nodes=new Map();for(const b of actor.bind)if(selected.has(b.name))nodes.set(b.name,{...b,inverse:b.matrix.clone().invert()});
 for(const node of nodes.values()){
  let parentName=virtualParent(node.name);
  if(parentName===undefined){let p=node.bone.parent;while(p){const name=p.userData.name??p.name;if(nodes.has(name)){parentName=name;break;}p=p.parent;}}
  if(parentName===undefined&&handPart.test(node.name))parentName='hand'+(node.name.endsWith('.l')?'.l':'.r');
  node.parent=nodes.get(parentName)??null;
 }
 const ordered=[],visiting=new Set(),done=new Set();
 function visit(n){if(done.has(n))return;if(visiting.has(n))throw Error('Animation hierarchy cycle');visiting.add(n);if(n.parent)visit(n.parent);visiting.delete(n);done.add(n);ordered.push(n);}
 for(const n of nodes.values())visit(n);
 for(const n of ordered){const p=new THREE.Vector3(),q=new THREE.Quaternion(),scale=new THREE.Vector3();n.matrix.decompose(p,q,scale);n.bindRotation=q.normalize();n.bindFrame=new THREE.Matrix4().compose(p,n.bindRotation,new THREE.Vector3(1,1,1));}
 for(const n of ordered){n.localBind=n.parent?n.parent.bindFrame.clone().invert().multiply(n.matrix):n.matrix.clone();n.localInverse=n.localBind.clone().invert();}
 actor.poseHierarchy=ordered;actor.bindByName=byName;
}
export function normalizeHands(actor,poses){
 for(const suffix of ['.l','.r']){
  const bind=actor.bindByName.get('hand'+suffix),wrist=bind&&poses.get(bind.bone);if(!wrist)continue;
  const delta=wrist.clone().multiply(bind.matrix.clone().invert()),p=new THREE.Vector3(),q=new THREE.Quaternion(),s=new THREE.Vector3();delta.decompose(p,q,s);
  if(s.toArray().some(v=>v<=1e-8)||Math.max(...s.toArray().map(v=>Math.abs(v-1)))<1e-4)continue;
  const pivot=new THREE.Vector3().setFromMatrixPosition(wrist),rotation=new THREE.Matrix4().makeRotationFromQuaternion(q.normalize());
  const correction=new THREE.Matrix4().makeTranslation(...pivot.toArray()).multiply(rotation).multiply(new THREE.Matrix4().makeScale(1/s.x,1/s.y,1/s.z)).multiply(rotation.clone().invert()).multiply(new THREE.Matrix4().makeTranslation(-pivot.x,-pivot.y,-pivot.z));
  for(const b of actor.bind)if(b.name.endsWith(suffix)&&handPart.test(b.name)&&poses.has(b.bone))poses.get(b.bone).premultiply(correction);
 }
}
// Blend local joint deformations, then rebuild parents before children. ARP's
// stretch bones use constraints rather than an anatomical scene-parent chain.
function rigidFrame(node,pose){
 const p=new THREE.Vector3().setFromMatrixPosition(pose),q=new THREE.Quaternion(),scale=new THREE.Vector3();
 pose.clone().multiply(node.inverse).decompose(new THREE.Vector3(),q,scale);
 return new THREE.Matrix4().compose(p,q.normalize().multiply(node.bindRotation),new THREE.Vector3(1,1,1));
}
export function blendPoseMaps(actor,from,to,alpha){
 const result=new Map(to);
 for(const n of actor.poseHierarchy){
  const a=from.get(n.bone),b=to.get(n.bone);if(!a||!b)continue;
  const ap=n.parent?rigidFrame(n.parent,from.get(n.parent.bone)):null,bp=n.parent?rigidFrame(n.parent,to.get(n.parent.bone)):null;
  const la=ap?ap.clone().invert().multiply(a):a.clone(),lb=bp?bp.clone().invert().multiply(b):b.clone();
  la.multiply(n.localInverse);lb.multiply(n.localInverse);
  const local=blendTransform(new THREE.Matrix4(),la,lb,alpha).multiply(n.localBind);
  const parent=n.parent?rigidFrame(n.parent,result.get(n.parent.bone)):null;
  result.set(n.bone,parent?parent.clone().multiply(local):local);
 }
 return result;
}
export function blendUserTransition(actor,time,id){
 if(!actor.userActions)return;
 if(!actor.poseHierarchy)configure(actor);
 const inverse=actor.visual.matrixWorld.clone().invert(),target=new Map();
 for(const [bone,world] of actor.posedWorld)target.set(bone,inverse.clone().multiply(world));
 normalizeHands(actor,target);
 if(actor.motionId!==id){actor.transitionFrom=actor.lastMotion;actor.transitionStart=time;actor.motionId=id;}
 const duration=id==='jab:return'?.14:id==='dodge'?.06:id.includes('_combo:')?.06:.12,t=Math.min(1,Math.max(0,(time-actor.transitionStart)/duration)),alpha=t*t*(3-2*t);
 const final=actor.transitionFrom&&alpha<1?blendPoseMaps(actor,actor.transitionFrom,target,alpha):target;
 for(const [bone,model] of final)actor.posedWorld.get(bone).copy(actor.visual.matrixWorld).multiply(model);
 actor.lastMotion=final;if(alpha===1)actor.transitionFrom=null;
}
export function updateRigidAttachments(actor){
 for(const attachment of actor.rigid){
  const parent=actor.bindByName?.get(attachment.parentBoneName)??actor.bind.find(b=>b.name===attachment.parentBoneName);
  const posed=parent&&actor.posedWorld.get(parent.bone);
  const desired=posed?posed.clone().multiply(parent.matrix.clone().invert()).multiply(attachment.matrix):actor.visual.matrixWorld.clone().multiply(attachment.matrix);
  attachment.mesh.matrix.copy(attachment.mesh.parent.matrixWorld).invert().multiply(desired);attachment.mesh.updateWorldMatrix(false,false);
 }
}
