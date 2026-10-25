import {test} from 'node:test';import assert from 'node:assert/strict';import * as T from 'three';import {Street} from '../src/world.js';
test('detailed street batches static decor and releases chunks without growing caches',()=>{
 const old=globalThis.document;globalThis.document={createElement:()=>({getContext:()=>({fillRect(){},fillText(){}})})};
 try{const scene=new T.Scene(),street=new Street(scene,{textured:false});street.update(0);const chunk=street.chunks.get(0);let instances=0;for(const o of chunk.group.children)if(o.isInstancedMesh)instances+=o.count;assert.ok(instances>300);assert.ok(chunk.group.children.length<80);
 for(let i=1;i<100;i++)street.update(i*26);assert.equal(street.chunks.size,5);assert.equal(scene.children.length,5);assert.ok(street.geometries.size<50);assert.ok(street.materials.size<60);
 const b=street.chunks.get(99).bottles[0];assert.equal(street.collect({x:b.x,z:b.z}),1);assert.equal(street.collect({x:b.x,z:b.z}),0);
 }finally{globalThis.document=old;}
});

test('authored street tiles at 26m without disposing shared assets and keeps independent pickups',()=>{
 const scene=new T.Scene(),street=new Street(scene,{textured:false}),template=new T.Group(),geometry=new T.BoxGeometry(26,.2,18),material=new T.MeshStandardMaterial();template.add(new T.Mesh(geometry,material));let disposed=0;geometry.addEventListener('dispose',()=>disposed++);material.addEventListener('dispose',()=>disposed++);
 street.setEnvironment(template);street.update(0);assert.equal(street.chunks.size,5);const a=street.chunks.get(0),b=street.chunks.get(1);assert.equal(b.group.position.x-a.group.position.x,26);assert.equal(a.group.children[0].children[0].geometry,geometry);
 const bottle=a.bottles[0];assert.equal(street.collect({x:bottle.x,z:bottle.z}),1);assert.equal(b.bottles[0].taken,false);
 for(let i=1;i<50;i++)street.update(i*26);assert.equal(street.chunks.size,5);assert.equal(scene.children.length,5);assert.equal(disposed,0);assert.equal(template.parent,null);
});

test('front paving continues beyond the camera with the same UV field and shared material',async()=>{
 const {extendFrontPaving}=await import('../src/street-environment.js'),root=new T.Group(),g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute([0,0,3,26,0,3,0,0,4.1,26,0,4.1],3));g.setAttribute('uv',new T.Float32BufferAttribute([0,0,13,0,0,.55,13,.55],2));g.setIndex([0,2,1,1,2,3]);g.computeVertexNormals();const material=new T.MeshStandardMaterial();material.name='Pavement tiles';root.add(new T.Mesh(g,material));extendFrontPaving(root);const added=root.getObjectByName('Camera_front_paving');assert.ok(added);assert.equal(added.material,material);assert.equal(new T.Box3().setFromObject(root).max.z,14);assert.ok(Math.abs(added.geometry.attributes.uv.getY(2)-5.5)<.001);assert.ok(added.geometry.attributes.normal.getY(0)>.99);
});
