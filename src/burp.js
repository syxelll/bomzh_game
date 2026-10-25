import * as THREE from 'three';
import {surfaceAnchor} from './surface-anchor.js';
export class BurpEffect{
 constructor(scene){
  const size=32,data=new Uint8Array(size*size*4);for(let y=0;y<size;y++)for(let x=0;x<size;x++){const i=(y*size+x)*4,r=Math.hypot((x+ .5-size/2)/(size/2),(y+ .5-size/2)/(size/2));data[i]=data[i+1]=data[i+2]=255;data[i+3]=Math.max(0,1-r)**2*180;}const map=new THREE.DataTexture(data,size,size);map.needsUpdate=true;
  this.positions=new Float32Array(24*3);const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(this.positions,3).setUsage(THREE.DynamicDrawUsage));
  this.root=new THREE.Points(geometry,new THREE.PointsMaterial({color:'#a6b958',map,size:.45,transparent:true,opacity:0,depthWrite:false}));this.root.frustumCulled=false;this.root.visible=false;scene.add(this.root);this.point=new THREE.Vector3();
 }
 update(player,active){
  const progress=player.attackTime/(player.attackSpec?.duration??1.2),amount=active?Math.max(0,Math.min(1,(progress-.22)/.12,(.85-progress)/.2)):0;this.root.visible=amount>0;if(!this.root.visible)return;
  this.anchor??=surfaceAnchor(player,/teeth/i,[.5,.65,1]);if(this.anchor)this.anchor.get(this.root.position);else this.root.position.set(player.x,1.52,player.z);this.root.rotation.y=player.heading;
  for(let i=0;i<24;i++){const t=((i/24+progress*1.5)%1)*amount;this.positions[i*3]=Math.sin(i*7.3)*(.04+t*.38);this.positions[i*3+1]=Math.cos(i*3.1)*t*.23+t*.16;this.positions[i*3+2]=.06+t*2.2;}
  this.root.geometry.attributes.position.needsUpdate=true;this.root.material.opacity=.55*amount;
 }
}
