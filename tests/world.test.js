import {test} from 'node:test';import assert from 'node:assert/strict';import * as T from 'three';import {Street} from '../src/world.js';
test('detailed street batches static decor and releases chunks without growing caches',()=>{
 const old=globalThis.document;globalThis.document={createElement:()=>({getContext:()=>({fillRect(){},fillText(){}})})};
 try{const scene=new T.Scene(),street=new Street(scene,{textured:false});street.update(0);const chunk=street.chunks.get(0);let instances=0;for(const o of chunk.group.children)if(o.isInstancedMesh)instances+=o.count;assert.ok(instances>300);assert.ok(chunk.group.children.length<80);
 for(let i=1;i<100;i++)street.update(i*26);assert.equal(street.chunks.size,5);assert.equal(scene.children.length,5);assert.ok(street.geometries.size<50);assert.ok(street.materials.size<60);
 const b=street.chunks.get(99).bottles[0];assert.equal(street.collect({x:b.x,z:b.z}),1);assert.equal(street.collect({x:b.x,z:b.z}),0);
 }finally{globalThis.document=old;}
});
