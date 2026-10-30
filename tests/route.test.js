import test from'node:test';import assert from'node:assert/strict';import * as THREE from'three';import{routeStage,exitForClear,COURTYARD_TYPES}from'../src/route.js';import{createCourtyard}from'../src/courtyards.js';import{LocationDoor}from'../src/location-door.js';import{Street}from'../src/world.js';
test('only the last stage of a block creates a reachable door before the next fight',()=>{for(const start of['street','entrance'])for(let i=0;i<100;i++){const route=routeStage(i,start),exit=exitForClear(i,start);assert.equal(!!exit,route.last);if(exit){assert.notEqual(exit.to,route.location);assert.ok(exit.x>i*26+11);assert.ok(exit.x<(i+1)*26-2);}}});
test('courtyard variants keep their walking area clear and merge static details by material',()=>{for(let v=0;v<COURTYARD_TYPES.length;v++){const root=createCourtyard(new THREE.Group(),v);assert.equal(root.userData.courtyard,true);assert.ok(root.children.length<=16);assert.ok(root.userData.staticBoxes>120);root.updateMatrixWorld(true);const ray=new THREE.Raycaster();for(const x of[6,13,20])for(const z of[-3.3,0,2]){ray.set(new THREE.Vector3(x,2,z),new THREE.Vector3(0,-1,0));const hit=ray.intersectObject(root,true)[0];assert.ok(hit);assert.ok(Math.abs(hit.point.y)<.001,'the widened lane has a continuous flat floor');}}});

test('door interaction requires proximity and the world can vary scenery without resetting pickups',()=>{const door=new LocationDoor(new THREE.Scene()),exit=exitForClear(4);door.set(exit);assert.equal(door.near({x:exit.x-5,z:exit.z}),false);assert.equal(door.near({x:exit.x,z:exit.z}),true);door.set(null);assert.equal(door.near({x:exit.x,z:exit.z}),false);const street=new Street(new THREE.Scene(),{textured:false}),base=new THREE.Group(),yard=createCourtyard(base);street.setEnvironment(base);street.templateForChunk=i=>i===1?yard:base;street.update(0);assert.ok(street.chunks.get(1).group.children[0].userData.courtyard);const bottle=street.chunks.get(0).bottles[0];street.takeBottle(bottle,bottle);street.update(26);assert.equal(street.chunks.get(0).bottles[0].taken,true);assert.equal(street.chunks.size,5);});

test('each outdoor theme appears once before repeating across route blocks and both starts',()=>{for(const start of ['street','entrance']){const yards=[];for(let i=0;i<300;i++){const stage=routeStage(i,start);if(stage.courtyard)yards.push(stage.variant);}for(let i=0;i<=yards.length-COURTYARD_TYPES.length;i++)assert.equal(new Set(yards.slice(i,i+COURTYARD_TYPES.length)).size,COURTYARD_TYPES.length);}});

test('rear door and canopy stay clear of actual window panes and frames in every yard',()=>{
 const porch=new THREE.Box3(new THREE.Vector3(14.05,0,-9.3),new THREE.Vector3(16.22,2.73,-8.8));
 for(let variant=0;variant<COURTYARD_TYPES.length;variant++){
  const root=createCourtyard(new THREE.Group(),variant);
  root.traverse(mesh=>{if(!mesh.isMesh||!/Aged window (chipped|dusty)/.test(mesh.material.name))return;const g=mesh.geometry,p=g.attributes.position,index=g.index;
   for(let i=0;i<(index?.count??p.count);i+=3){const points=[0,1,2].map(j=>new THREE.Vector3().fromBufferAttribute(p,index?index.getX(i+j):i+j));const bounds=new THREE.Box3().setFromPoints(points);assert.equal(bounds.intersectsBox(porch),false,'window geometry intersects porch door or canopy');}
  });
 }
});
