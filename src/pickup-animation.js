import * as THREE from 'three';
import {surfaceAnchor} from './surface-anchor.js';
const smooth=(a,b,t)=>{t=THREE.MathUtils.clamp((t-a)/(b-a),0,1);return t*t*(3-2*t);};
export function startPickup(actor,kind,payload=null){const clip=kind==='bottle_smash'?{duration:1.25}:actor.userActions?.clips[kind];if(!clip||actor.pickup)return false;actor.pickup={kind,elapsed:0,duration:clip.duration,payload,applied:false};return true;}
export function pickupProgress(actor){return actor.pickup?Math.min(1,actor.pickup.elapsed/actor.pickup.duration):0;}
export class DrinkingBottle{
 constructor(scene,street){this.root=new THREE.Group();const body=new THREE.Mesh(street.body,street.material('#756033')),label=new THREE.Mesh(street.label,street.labelMaterial);body.position.y=-.25;label.position.y=.18-.25;this.root.add(body,label);this.body=body;this.label=label;this.root.scale.setScalar(.65);this.root.visible=false;scene.add(this.root);this.reference=new THREE.Quaternion();this.rotation=new THREE.Quaternion();}
 update(actor,active){
 const p=pickupProgress(actor);const smashing=actor.pickup?.kind==='bottle_smash';this.root.visible=active&&(smashing||actor.pickup?.kind==='bottle_pickup')&&p>(smashing?.08:.22)&&p<(smashing?.55:.95);if(!this.root.visible){this.serial=null;return;}
 const hand=actor.bind.find(b=>b.name==='hand.r'),matrix=hand&&actor.posedWorld.get(hand.bone);if(!matrix){this.root.visible=false;return;}
 matrix.decompose(this.root.position,this.rotation,new THREE.Vector3());const center=new THREE.Vector3();let count=0;
 for(const name of ['c_middle2.r','c_ring2.r','c_thumb2.r']){const b=actor.bind.find(b=>b.name===name),m=b&&actor.posedWorld.get(b.bone);if(m){center.add(new THREE.Vector3().setFromMatrixPosition(m));count++;}}
 if(count)this.root.position.copy(center.divideScalar(count));
 if(this.serial!==actor.pickup){this.serial=actor.pickup;this.reference.copy(this.rotation).invert();}
 if(this.anchorActor!==actor.visual){this.anchorActor=actor.visual;this.mouth=surfaceAnchor(actor,/teeth/i,[.5,.55,1]);}
 const carry=new THREE.Vector3(0,1,0).applyQuaternion(this.rotation.clone().multiply(this.reference));
 const amount=smashing?smooth(.16,.44,p):smooth(.35,.49,p)*(1-smooth(.8,.94,p));let grip=smashing?.38:.25;
 if(this.mouth&&amount>0){const mouth=this.mouth.get(new THREE.Vector3());if(smashing)mouth.y+=.14;const toward=smashing?this.root.position.clone().sub(mouth):mouth.sub(this.root.position),distance=toward.length();
  if(distance>.015){const q=new THREE.Quaternion().setFromUnitVectors(carry,toward.normalize());carry.applyQuaternion(new THREE.Quaternion().slerp(q,amount));if(!smashing)grip=THREE.MathUtils.lerp(.25,THREE.MathUtils.clamp(.46-distance/.65,.17,.32),amount);}
 }
 this.body.position.y=-grip;this.label.position.y=.18-grip;
 this.root.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),carry.normalize());
 }
}
