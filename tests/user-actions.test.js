import {test} from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import {validateActions,comboClips,comboSpec} from '../src/user-actions.js';
test('authored Blender actions contain finite baked matrices for the game rig',()=>{const data=validateActions(JSON.parse(fs.readFileSync(new URL('../public/models/hobo-actions.json',import.meta.url))));assert.ok(data.bones.length>100);assert.deepEqual(Object.keys(data.clips).sort(),['idle','jab_01_combo','jab_02_combo','kick_combo','walk']);assert.equal(data.clips.idle.frames.length,173);assert.equal(data.clips.jab_01_combo.frames.length,15);assert.equal(data.clips.kick_combo.frames.length,15);assert.equal(data.clips.walk.frames.length,23);assert.ok(data.bones.includes('foot.r'));assert.throws(()=>validateActions({version:9}));});

test('walking keeps planar root motion in the game controller',async()=>{
 const THREE=await import('three'),bytes=fs.readFileSync(new URL('../public/models/hobo.glb',import.meta.url)),length=bytes.readUInt32LE(12),gltf=JSON.parse(bytes.subarray(20,20+length));
 const data=JSON.parse(fs.readFileSync(new URL('../public/models/hobo-actions.json',import.meta.url))),offset=data.bones.indexOf('root.x')*16;assert.ok(offset>=0);
 const parents=new Map();gltf.nodes.forEach((n,i)=>n.children?.forEach(c=>parents.set(c,i)));
 function world(i){const n=gltf.nodes[i],m=n.matrix?new THREE.Matrix4().fromArray(n.matrix):new THREE.Matrix4().compose(new THREE.Vector3().fromArray(n.translation??[0,0,0]),new THREE.Quaternion().fromArray(n.rotation??[0,0,0,1]),new THREE.Vector3().fromArray(n.scale??[1,1,1]));return parents.has(i)?world(parents.get(i)).multiply(m):m;}
 const bind=world(gltf.nodes.findIndex(n=>n.name==='root.x')),positions=data.clips.walk.frames.map(f=>new THREE.Vector3().setFromMatrixPosition(new THREE.Matrix4().fromArray(f,offset).multiply(bind)));
 for(const p of positions)assert.ok(Math.hypot(p.x-positions[0].x,p.z-positions[0].z)<1e-4,'authored walk must not slide away from collision position');
 assert.throws(()=>validateActions({...data,clips:{...data.clips,walk:{frames:[[NaN]]}}}));
});

test('combo follows authored order and timing, including the kick on the same button',()=>{const d=JSON.parse(fs.readFileSync(new URL('../public/models/hobo-actions.json',import.meta.url)));assert.deepEqual(comboClips(d),['jab_01_combo','jab_02_combo','kick_combo']);assert.equal(comboSpec(d,1).duration,.3);assert.equal(comboSpec(d,2).clip,'kick_combo');assert.equal(comboSpec(d,3),null);});
