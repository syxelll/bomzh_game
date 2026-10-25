import * as THREE from 'three';
import {surfaceAnchor} from './surface-anchor.js';
import {streamEnvelope,streamReach} from './attack-timing.js';
export {streamEnvelope} from './attack-timing.js';
export class SprayEffect{
 constructor(scene){
  this.root=new THREE.Group();scene.add(this.root);this.root.visible=false;this.growth=0;
  this.curve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(),new THREE.Vector3(0,.4,1.35),new THREE.Vector3(0,-.8,3.05));
  this.geometry=new THREE.TubeGeometry(this.curve,30,.018,5,false);this.geometry.attributes.position.setUsage(THREE.DynamicDrawUsage);
  this.jet=new THREE.Mesh(this.geometry,new THREE.MeshBasicMaterial({color:'#e7c648',transparent:true,opacity:.75,depthWrite:false}));this.jet.frustumCulled=false;this.root.add(this.jet);
  this.positions=new Float32Array(32*3);const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(this.positions,3).setUsage(THREE.DynamicDrawUsage));
  this.drops=new THREE.Points(geometry,new THREE.PointsMaterial({color:'#f4d85d',size:.04,transparent:true,opacity:.7,depthWrite:false}));this.drops.frustumCulled=false;this.root.add(this.drops);
  this.splash=new THREE.Mesh(new THREE.RingGeometry(.08,.23,20),new THREE.MeshBasicMaterial({color:'#cdb745',transparent:true,opacity:.3,side:THREE.DoubleSide,depthWrite:false}));this.splash.rotation.x=-Math.PI/2;this.root.add(this.splash);
  this.point=new THREE.Vector3();this.tangent=new THREE.Vector3();this.normal=new THREE.Vector3();
 }
 update(player,active,time){
  const duration=player.attackSpec?.duration??1.4,amount=active?streamEnvelope(player.attackTime,duration):0;this.growth=amount;this.root.visible=amount>0;if(!this.root.visible)return;
  this.anchor??=surfaceAnchor(player,/shtani/i,[.5,.82,1]);
  if(this.anchor)this.anchor.get(this.root.position);else this.root.position.set(player.x,.85,player.z);
  this.root.rotation.y=player.heading;this.root.position.x+=Math.sin(player.heading)*.012;this.root.position.z+=Math.cos(player.heading)*.012;
  const height=this.root.position.y;this.curve.v2.y=.025-height;
  const p=this.point,tangent=this.tangent,normal=this.normal,attr=this.geometry.attributes.position;
  // The tip travels out from the trousers, rather than revealing the full arc at once.
  const reach=streamReach(player.attackTime,duration);
  for(let i=0;i<=30;i++){const t=i/30*reach;this.curve.getPoint(t,p);this.curve.getTangent(t,tangent);normal.set(0,-tangent.z,tangent.y);for(let j=0;j<=5;j++){const a=j/5*Math.PI*2,r=.018*Math.min(1,amount*3);attr.setXYZ(i*6+j,p.x+Math.cos(a)*r,p.y+normal.y*Math.sin(a)*r,p.z+normal.z*Math.sin(a)*r);}}
  attr.needsUpdate=true;this.jet.material.opacity=.75*Math.min(1,amount*4);
  for(let i=0;i<32;i++){const t=((i/32+time*1.8)%1)*reach;this.curve.getPoint(t,p);p.x+=Math.sin(i*11+time*14)*.035*t;p.y+=Math.cos(i*7+time*12)*.025*t;p.toArray(this.positions,i*3);}
  this.drops.geometry.attributes.position.needsUpdate=true;this.drops.material.opacity=.7*amount;
  this.splash.visible=reach>.94;this.splash.position.set(0,.026-height,3.05);this.splash.scale.setScalar(amount*(1+.1*Math.sin(time*21)));this.splash.material.opacity=.3*amount;
 }
}
