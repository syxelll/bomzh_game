import test from 'node:test';import assert from 'node:assert/strict';import * as T from 'three';import{prepareStreetGround,courtyardPaving}from'../src/ground-transitions.js';import{createCourtyard}from'../src/courtyards.js';
test('courtyard joins preserve authored sidewalk heights and UVs while leaving the deep combat lane open',()=>{
 const source=new T.Group(),asphalt=new T.MeshStandardMaterial({name:'Stylized Asphalt'}),paving=new T.MeshStandardMaterial({name:'Pavement tiles'});
 const box=(w,h,d,m,x,y,z)=>{const mesh=new T.Mesh(new T.BoxGeometry(w,h,d),m);mesh.position.set(x,y,z);source.add(mesh);};box(26,.2,4.54,asphalt,13,-.1,.25);box(26,.05,1.6,paving,13,-.035,3.3);box(26,.18,.25,paving,13,-.02,2.5);box(26,.05,1.7,paving,13,-.03,-2.85);
 prepareStreetGround(source);const yard=createCourtyard(source,0);yard.updateMatrixWorld(true);source.updateMatrixWorld(true);const ray=new T.Raycaster();const hit=(root,x,z)=>{ray.set(new T.Vector3(x,2,z),new T.Vector3(0,-1,0));return ray.intersectObject(root,true)[0];};
 for(const x of[.01,25.99])for(const z of[3.3,2.5,-2.85]){const a=hit(source,x,z),b=hit(yard,x,z);assert.ok(a&&b);assert.ok(Math.abs(a.point.y-b.point.y)<1e-5);assert.ok(a.uv.distanceTo(b.uv)<1e-4);}
 assert.ok(Math.abs(hit(yard,13,-3.3).point.y)<1e-5);const asphaltMesh=source.children[0];for(let i=0;i<asphaltMesh.geometry.attributes.position.count;i++)if(asphaltMesh.geometry.attributes.normal.getY(i)>.8){const u=asphaltMesh.geometry.attributes.uv.getX(i);assert.ok(Math.abs(u-Math.round(u))<1e-5,'26m sections must meet at an integer texture repeat');}
 assert.equal(courtyardPaving(source).children.length,1);
});
