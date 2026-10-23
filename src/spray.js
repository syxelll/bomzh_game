import * as THREE from 'three';
// Comedic, clothed attack: a short arc and droplets, with no anatomy shown.
export class SprayEffect{
 constructor(scene){
  this.root=new THREE.Group();scene.add(this.root);this.root.visible=false;
  const curve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(0,.86,.25),new THREE.Vector3(0,1.5,1.6),new THREE.Vector3(0,.08,3.2));
  this.curve=curve;
  this.jet=new THREE.Mesh(new THREE.TubeGeometry(curve,30,.025,5,false),new THREE.MeshBasicMaterial({color:'#f2d44c',transparent:true,opacity:.8}));this.root.add(this.jet);
  this.positions=new Float32Array(48*3);const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(this.positions,3));
  this.drops=new THREE.Points(geometry,new THREE.PointsMaterial({color:'#ffe678',size:.065,transparent:true,opacity:.9,depthWrite:false}));this.root.add(this.drops);
  this.splash=new THREE.Mesh(new THREE.RingGeometry(.12,.32,24),new THREE.MeshBasicMaterial({color:'#d4bd46',transparent:true,opacity:.5,side:THREE.DoubleSide,depthWrite:false}));this.splash.rotation.x=-Math.PI/2;this.splash.position.set(0,.025,3.2);this.root.add(this.splash);
 }
 update(player,active,time){
  this.root.visible=!!active;if(!active)return;
  this.root.position.set(player.x,0,player.z);this.root.rotation.y=player.heading;
  const p=new THREE.Vector3();
  for(let i=0;i<48;i++){const t=(i/48+time*1.8)%1;this.curve.getPoint(t,p);p.x+=Math.sin(i*11+time*14)*.055*t;p.y+=Math.cos(i*7+time*12)*.04*t;p.toArray(this.positions,i*3);}
  this.drops.geometry.attributes.position.needsUpdate=true;this.splash.scale.setScalar(1+.12*Math.sin(time*21));
 }
}
