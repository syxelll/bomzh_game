import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {WindPapers} from '../src/wind-papers.js';
test('wind papers keep a fixed pool on endless travel, freeze on pause and reset outside interiors',()=>{
 for(const lowQuality of[false,true]){
  const scene=new THREE.Scene(),papers=new WindPapers(scene,{lowQuality}),geometry=papers.mesh.geometry;papers.update(0,.016);
  assert.equal(papers.mesh.count,lowQuality?8:14);
  for(let i=0;i<2000;i++)papers.update(i*7,.05);
  for(const item of papers.items)assert.ok(Math.abs(item.x-papers.center)<=24);
  const before=Array.from(papers.mesh.instanceMatrix.array),time=papers.clock.value;papers.update(papers.center,0);assert.deepEqual(Array.from(papers.mesh.instanceMatrix.array),before);assert.equal(papers.clock.value,time);
  papers.update(99999,.05,false);assert.equal(papers.mesh.visible,false);papers.update(99999,.016,true);assert.ok(papers.items.every(item=>Math.abs(item.x-99999)<24));
  assert.equal(scene.children.length,1);assert.equal(papers.mesh.geometry,geometry);assert.ok([...papers.mesh.instanceMatrix.array].every(Number.isFinite));
 }
});
