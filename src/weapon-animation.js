import * as THREE from 'three';
const smooth=t=>{t=THREE.MathUtils.clamp(t,0,1);return t*t*(3-2*t);};
const keys=[
 [0,[-.27,1.06,.18],[-.12,.96,.27]],
 [.3,[-.5,1.72,-.28],[-.15,.66,-.74]],
 [.4,[-.55,1.65,.35],[-.15,.95,.25]],
 [.52,[-.22,1.18,.77],[.04,-.42,.91]],
 [.7,[-.22,.98,.62],[.08,-.7,.7]],
 [1,[-.27,1.06,.18],[-.12,.96,.27]],
];
export function weaponMotion(progress=0,striking=false){
 if(!striking)return {wrist:new THREE.Vector3(...keys[0][1]),direction:new THREE.Vector3(...keys[0][2]).normalize()};
 const t=THREE.MathUtils.clamp(progress,0,1);let i=1;while(i<keys.length-1&&t>keys[i][0])i++;const a=keys[i-1],b=keys[i],alpha=smooth((t-a[0])/(b[0]-a[0]));
 return {wrist:new THREE.Vector3(...a[1]).lerp(new THREE.Vector3(...b[1]),alpha),direction:new THREE.Vector3(0,1,0).applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),new THREE.Vector3(...a[2]).normalize()).slerp(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),new THREE.Vector3(...b[2]).normalize()),alpha))};
}
function around(point,q){return new THREE.Matrix4().makeTranslation(...point.toArray()).multiply(new THREE.Matrix4().makeRotationFromQuaternion(q)).multiply(new THREE.Matrix4().makeTranslation(...point.clone().negate().toArray()));}
// Rotate the two actual segments, never translate or scale individual joints.
function aimArm(actor,side,target,pole){
 const find=name=>actor.bind.find(b=>b.name===name+side),shoulder=find('arm_stretch'),elbow=find('forearm_stretch'),hand=find('hand');if(!shoulder||!elbow||!hand)return;
 const point=b=>new THREE.Vector3().setFromMatrixPosition(actor.posedWorld.get(b.bone));
 const s=point(shoulder),e=point(elbow),w=point(hand),a=s.distanceTo(e),b=e.distanceTo(w),axis=target.clone().sub(s),distance=THREE.MathUtils.clamp(axis.length(),Math.abs(a-b)+.001,a+b-.002);axis.normalize();
 const projection=(a*a-b*b+distance*distance)/(2*distance),height=Math.sqrt(Math.max(0,a*a-projection*projection));
 const bend=pole.clone().sub(s).addScaledVector(axis,-pole.clone().sub(s).dot(axis)).normalize();const goal=s.clone().addScaledVector(axis,projection).addScaledVector(bend,height);
 const upper=around(s,new THREE.Quaternion().setFromUnitVectors(e.clone().sub(s).normalize(),goal.clone().sub(s).normalize()));const movedW=w.clone().applyMatrix4(upper);
 const lower=around(goal,new THREE.Quaternion().setFromUnitVectors(movedW.sub(goal).normalize(),s.clone().addScaledVector(axis,distance).sub(goal).normalize()));
 for(const node of actor.bind){if(!node.name.endsWith(side))continue;const m=actor.posedWorld.get(node.bone);if(!m)continue;if(/^(?:arm_stretch|c_arm_twist_offset)/.test(node.name))m.premultiply(upper);else if(/^(?:forearm|hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/.test(node.name))m.premultiply(upper).premultiply(lower);}
}
export function applyWeaponPose(actor,progress,striking){
 const motion=weaponMotion(progress,striking),world=v=>actor.root.localToWorld(v.clone());
 aimArm(actor,'.r',world(motion.wrist),world(new THREE.Vector3(-.65,1.12,.12)));
 aimArm(actor,'.l',world(new THREE.Vector3(.24,1.14,.25)),world(new THREE.Vector3(.6,.97,-.05)));
 const hand=actor.bind.find(b=>b.name==='hand.r'),posed=hand&&actor.posedWorld.get(hand.bone);
 if(posed){
  if(!actor.weaponReferenceRotation){const data=actor.userActions,index=data?.bones.indexOf('hand.r');const reference=data?new THREE.Matrix4().fromArray(data.clips.idle.frames[0],index*16).multiply(hand.matrix):hand.matrix.clone();actor.weaponReferenceRotation=new THREE.Quaternion();reference.decompose(new THREE.Vector3(),actor.weaponReferenceRotation,new THREE.Vector3());}
  const current=new THREE.Quaternion();posed.decompose(new THREE.Vector3(),current,new THREE.Vector3());
  const carry=weaponMotion().direction,delta=new THREE.Quaternion().setFromUnitVectors(carry,motion.direction);
  const desired=actor.root.getWorldQuaternion(new THREE.Quaternion()).multiply(delta).multiply(actor.weaponReferenceRotation);
  const correction=around(new THREE.Vector3().setFromMatrixPosition(posed),desired.multiply(current.invert()));
  for(const node of actor.bind)if(node.name.endsWith('.r')&&/^(?:hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/.test(node.name))actor.posedWorld.get(node.bone)?.premultiply(correction);
 }
 actor.weaponDirection=motion.direction;
}
