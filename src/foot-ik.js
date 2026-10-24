import * as THREE from 'three';
export function configureFootIK(actor){
 const byName=new Map((actor.bind??[]).map(b=>[b.name,b.bone]));actor.ikLegs=new Map();
 for(const side of ['l','r']){
  const hip=byName.get('thigh_stretch.'+side),knee=byName.get('leg_stretch.'+side),ankle=byName.get('foot.'+side);if(!hip||!knee||!ankle)continue;
  const groups={upper:[],lower:[],foot:[]};for(const b of actor.bind){if(!b.name.endsWith('.'+side))continue;if(/^(?:c_)?thigh(?:_|\.)/.test(b.name))groups.upper.push(b.bone);else if(/^(?:c_)?leg(?:_|\.)/.test(b.name))groups.lower.push(b.bone);else if(/^(?:c_)?(?:foot|toe)/.test(b.name))groups.foot.push(b.bone);}
  actor.ikLegs.set(side,{hip,knee,ankle,groups});
 }
}
function mapSegment(a,b,c,d){const q=new THREE.Quaternion().setFromUnitVectors(b.clone().sub(a).normalize(),d.clone().sub(c).normalize());return new THREE.Matrix4().makeTranslation(c.x,c.y,c.z).multiply(new THREE.Matrix4().makeRotationFromQuaternion(q)).multiply(new THREE.Matrix4().makeTranslation(-a.x,-a.y,-a.z));}
export function solveFoot(actor,side,dy){
 const leg=actor.ikLegs.get(side),poses=actor.posedWorld;if(!leg||Math.abs(dy)<1e-7)return false;
 const h=new THREE.Vector3().setFromMatrixPosition(poses.get(leg.hip)),k=new THREE.Vector3().setFromMatrixPosition(poses.get(leg.knee)),a=new THREE.Vector3().setFromMatrixPosition(poses.get(leg.ankle)),target=a.clone();target.y+=dy;
 const upper=h.distanceTo(k),lower=k.distanceTo(a),reach=upper+lower-.00001;if(upper<1e-5||lower<1e-5)return false;
 // A straight trailing leg can plant by slightly shortening the horizontal step.
 const vertical=target.y-h.y;if(Math.abs(vertical)>reach)return false;
 const horizontal=new THREE.Vector2(target.x-h.x,target.z-h.z),allowed=Math.sqrt(Math.max(0,reach*reach-vertical*vertical));if(horizontal.length()>allowed){horizontal.setLength(allowed);target.x=h.x+horizontal.x;target.z=h.z+horizontal.y;}
 const direction=target.clone().sub(h),distance=direction.length();direction.normalize();
 let pole=k.clone().sub(h);pole.addScaledVector(direction,-pole.dot(direction));
 const forward=new THREE.Vector3(0,0,1).applyQuaternion(actor.root.quaternion);forward.addScaledVector(direction,-forward.dot(direction)).normalize();
 if(pole.length()<.001||pole.clone().normalize().dot(forward)<.1)pole.copy(forward);else pole.normalize();
 const along=(upper*upper-lower*lower+distance*distance)/(2*distance),bend=Math.sqrt(Math.max(0,upper*upper-along*along)),newKnee=h.clone().addScaledVector(direction,along).addScaledVector(pole,bend);
 const transforms={upper:mapSegment(h,k,h,newKnee),lower:mapSegment(k,a,newKnee,target),foot:new THREE.Matrix4().makeTranslation(target.x-a.x,target.y-a.y,target.z-a.z)};
 for(const group of ['upper','lower','foot'])for(const bone of leg.groups[group])if(poses.has(bone))poses.get(bone).premultiply(transforms[group]);
 return true;
}
