import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createCourtyard} from '../src/courtyards.js';
test('detailed vegetation stays in one batch, within the triangle budget and outside the walking lane',()=>{
 for(let variant=0;variant<8;variant++){
  const yard=createCourtyard(new THREE.Group(),variant),plants=yard.getObjectByName('Detailed_vegetation');
  assert.equal(plants.children.length,1);
  let triangles=0;plants.traverse(o=>{if(o.isMesh){triangles+=(o.geometry.index?.count??o.geometry.attributes.position.count)/3;for(const value of o.geometry.attributes.position.array)assert.ok(Number.isFinite(value));}});
  assert.ok(triangles<24000);
  const bounds=new THREE.Box3().setFromObject(plants);assert.ok(bounds.max.z< -3.5);assert.ok(bounds.min.y>=.27);
 }
});
