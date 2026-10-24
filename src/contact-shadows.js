import * as THREE from 'three';
export class ContactShadows{
 constructor(scene){this.scene=scene;const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const ctx=canvas.getContext('2d'),gradient=ctx.createRadialGradient(64,64,5,64,64,64);gradient.addColorStop(0,'rgba(0,0,0,.55)');gradient.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=gradient;ctx.fillRect(0,0,128,128);this.geometry=new THREE.PlaneGeometry(1,1);this.material=new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(canvas),transparent:true,depthWrite:false});}
 add(){const shadow=new THREE.Mesh(this.geometry,this.material);shadow.rotation.x=-Math.PI/2;this.scene.add(shadow);return shadow;}
 update(actor){const shadow=actor.shadow;if(!shadow)return;shadow.visible=actor.root.visible;shadow.position.set(actor.root.position.x,.012,actor.root.position.z);shadow.scale.set(.9+Math.max(0,actor.root.position.y)*.2,.6,1);}
}
