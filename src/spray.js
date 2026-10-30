import * as THREE from 'three';
import {surfaceAnchor} from './surface-anchor.js';
import {streamEnvelope,streamReach} from './attack-timing.js';
export {streamEnvelope} from './attack-timing.js';
export class SprayEffect{
 constructor(scene){
  this.root=new THREE.Group();scene.add(this.root);this.root.visible=false;this.growth=0;
  this.curve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(),new THREE.Vector3(0,.4,1.35),new THREE.Vector3(0,-.8,3.05));
  this.geometry=new THREE.TubeGeometry(this.curve,30,.018,8,false);this.geometry.attributes.position.setUsage(THREE.DynamicDrawUsage);
  this.jet=new THREE.Mesh(this.geometry,new THREE.MeshStandardMaterial({color:'#c8a936',roughness:.35,metalness:0,transparent:true,opacity:.85,depthWrite:false}));this.jet.frustumCulled=false;this.root.add(this.jet);
  this.positions=new Float32Array(32*3);const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(this.positions,3).setUsage(THREE.DynamicDrawUsage));
  const size=32,data=new Uint8Array(size*size*4);for(let y=0;y<size;y++)for(let x=0;x<size;x++){const i=(y*size+x)*4,r=Math.hypot((x+.5)/size*2-1,(y+.5)/size*2-1);data[i]=data[i+1]=data[i+2]=255;data[i+3]=Math.round(Math.max(0,1-r*r)*255);}const dropMap=new THREE.DataTexture(data,size,size);dropMap.needsUpdate=true;
  this.drops=new THREE.Points(geometry,new THREE.PointsMaterial({color:'#d8bc55',map:dropMap,size:.045,transparent:true,opacity:.7,depthWrite:false}));this.drops.frustumCulled=false;this.root.add(this.drops);
  this.splash=new THREE.Mesh(new THREE.PlaneGeometry(.75,.55),new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{amount:{value:0}},vertexShader:'varying vec2 pUv;void main(){pUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec2 pUv;uniform float amount;void main(){vec2 p=pUv*2.-1.;float a=atan(p.y,p.x),r=length(p),edge=.72+.10*sin(a*7.)+.07*sin(a*11.);float mask=1.-smoothstep(edge-.12,edge+.05,r);vec3 color=mix(vec3(.30,.25,.055),vec3(.65,.53,.12),smoothstep(.0,.8,r));gl_FragColor=vec4(color,mask*amount*.48);
   #include <tonemapping_fragment>
   #include <colorspace_fragment>
  }`}));this.splash.rotation.x=-Math.PI/2;this.root.add(this.splash);
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
  for(let i=0;i<=30;i++){const t=i/30*reach;this.curve.getPoint(t,p);this.curve.getTangent(t,tangent);normal.set(0,-tangent.z,tangent.y);for(let j=0;j<=8;j++){const a=j/8*Math.PI*2,r=.018*Math.min(1,amount*3);attr.setXYZ(i*9+j,p.x+Math.cos(a)*r,p.y+normal.y*Math.sin(a)*r,p.z+normal.z*Math.sin(a)*r);}}
  attr.needsUpdate=true;this.jet.material.opacity=.75*Math.min(1,amount*4);
  for(let i=0;i<32;i++){const t=((i/32+time*1.8)%1)*reach;this.curve.getPoint(t,p);p.x+=Math.sin(i*11+time*14)*.035*t;p.y+=Math.cos(i*7+time*12)*.025*t;p.toArray(this.positions,i*3);}
  this.drops.geometry.attributes.position.needsUpdate=true;this.drops.material.opacity=.7*amount;
  this.splash.visible=reach>.94;this.splash.position.set(0,.026-height,3.05);this.splash.scale.setScalar(amount*(1+.1*Math.sin(time*21)));this.splash.material.uniforms.amount.value=amount;
 }
}
