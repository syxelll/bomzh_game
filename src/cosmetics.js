import * as THREE from 'three';
export class Cosmetics{
 constructor(actor){this.actor=actor;this.root=new THREE.Group();actor.root.add(this.root);this.skin=null;this.head=actor.bind.find(b=>b.name==='head.x')??actor.bind.find(b=>b.name==='head');}
 set(id){if(id===this.skin)return;this.skin=id;for(const o of [...this.root.children]){this.root.remove(o);o.geometry.dispose();o.material.dispose();}if(id==='classic')return;
  const add=(geometry,color,x,y,z)=>{const mesh=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color,roughness:.55}));mesh.position.set(x,y,z);this.root.add(mesh);return mesh;};
  // Place accessories relative to the actual head pivot in the normalized model.
  this.actor.root.updateMatrixWorld(true);const h=this.head?new THREE.Vector3().setFromMatrixPosition(this.actor.visual.matrixWorld.clone().multiply(this.head.matrix)).applyMatrix4(this.actor.root.matrixWorld.clone().invert()):new THREE.Vector3(0,1.55,0);
  for(const x of [-.1,.1]){add(new THREE.TorusGeometry(.087,.018,6,16),id==='gold'?'#edbc40':'#242928',h.x+x,h.y+.08,h.z+.17);add(new THREE.CircleGeometry(.07,16),'#243d3c',h.x+x,h.y+.08,h.z+.171);}
  add(new THREE.BoxGeometry(.07,.025,.025),id==='gold'?'#edbc40':'#242928',h.x,h.y+.08,h.z+.17);
  if(id==='gold'){add(new THREE.TorusGeometry(.14,.045,6,20),'#bb3e32',h.x,h.y-.17,h.z).rotation.x=Math.PI/2;add(new THREE.BoxGeometry(.095,.3,.035),'#bb3e32',h.x-.1,h.y-.32,h.z+.12);}
 }
 update(){if(!this.head||!this.root.children.length)return;const a=this.actor,world=a.posedWorld.get(this.head.bone);if(!world)return;
  const bindWorld=a.visual.matrixWorld.clone().multiply(this.head.matrix);
  this.root.matrixAutoUpdate=false;this.root.matrix.copy(a.root.matrixWorld).invert().multiply(world).multiply(bindWorld.invert()).multiply(a.root.matrixWorld);this.root.updateWorldMatrix(false,true);
 }
}
