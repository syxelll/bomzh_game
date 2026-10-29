import {createAgedWindowSet} from './aged-windows.js';
import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
// Reuse the street's existing texture images; each yard is one 26 m module.
export function createCourtyard(source,variant=0){
 const root=new THREE.Group();root.name=`Courtyard_${variant}`;root.userData.courtyard=true;const originals=new Map();source.traverse(o=>{if(o.isMesh)for(const m of Array.isArray(o.material)?o.material:[o.material])originals.set(m.name,m);});
 const copy=(pattern,name,color)=>{const original=[...originals.values()].find(m=>pattern.test(m.name));const m=original?original.clone():new THREE.MeshStandardMaterial({color,roughness:.95});m.name=name;for(const key of['map','normalMap','roughnessMap','metalnessMap'])if(m[key]){m[key]=m[key].clone();m[key].wrapS=m[key].wrapT=THREE.RepeatWrapping;m[key].needsUpdate=true;}return m;};
 const brick=copy(/brick/,'Courtyard brick','#896e55'),stone=copy(/Limestone/,'Courtyard limestone','#a49d84'),floor=copy(/Asphalt/,'Courtyard asphalt','#64675c'),plinth=copy(/DampFoundation/,'Courtyard damp foundation','#555e4b'),wood=copy(/Old wood/,'Courtyard old wood','#78644b'),metal=new THREE.MeshStandardMaterial({color:'#485b4b',roughness:.86,metalness:.4}),trim=new THREE.MeshStandardMaterial({color:'#a5a38d',roughness:1}),earth=new THREE.MeshStandardMaterial({color:'#515541',roughness:1}),leaves=new THREE.MeshStandardMaterial({color:variant===1?'#777146':'#536647',roughness:1});
 const windows=createAgedWindowSet(),batches=new Map(),geometries=new Map();
 function box(name,w,h,d,material,x,y,z,rotate=0){const key=[w,h,d].join(':');if(!geometries.has(key)){const g=new THREE.BoxGeometry(w,h,d),p=g.attributes.position,n=g.attributes.normal,uv=g.attributes.uv;for(let i=0;i<p.count;i++)uv.setXY(i,(Math.abs(n.getX(i))>.5?p.getZ(i):p.getX(i))/2,(Math.abs(n.getY(i))>.5?p.getZ(i):p.getY(i))/2);geometries.set(key,g);}const geometry=geometries.get(key),mesh=new THREE.Mesh(geometry,material);mesh.name=name;mesh.position.set(x,y,z);mesh.rotation.y=rotate;mesh.updateMatrix();const groupKey=key+material.uuid;if(!batches.has(groupKey))batches.set(groupKey,{geometry,material,items:[]});batches.get(groupKey).items.push(mesh);return mesh;}
 box('Yard level ground',26,.16,25,floor,13,-.08,1.5);
 box('Rear apartment building',17,7.2,.7,variant===1?stone:brick,13,3.6,-9.5);box('Rear foundation',17,.55,.78,plinth,13,.275,-9.43);
 for(const x of[2.25,23.75]){box('Street-facing wing',4.5,7.8,6.1,variant===2?stone:brick,x,3.9,-6.5);box('Wing foundation',4.55,.55,6.15,plinth,x,.275,-6.48);}
 for(let row=0;row<3;row++)for(const [col,x]of[6.4,9.7,12.8,16.2,19.5].entries())windows.add(x,1.65+row*1.9,-9.145,1.3,1.5,0,row*5+col+variant*3);
 for(const side of[0,1])for(let row=0;row<3;row++)for(const [col,x]of[1.25,3.25].entries()){if(side===1&&row===0&&x===3.25)continue;windows.add(side?26-x:x,1.6+row*2,-3.445,1.2,1.4,0,side*5+row*2+col+variant);}
 box('Wing entrance door',1.42,2.4,.16,metal,23.2,1.2,-3.28);box('Wing entrance canopy',1.9,.1,.8,metal,23.2,2.65,-2.95);
 // Side windows face into the yard and make the gap read as real depth.
 for(const side of[-1,1])for(let row=0;row<3;row++)for(const [col,z]of[-5.2,-7.6].entries())windows.add(side<0?4.505:21.495,1.6+row*1.9,z,1.2,1.4,side<0?Math.PI/2:-Math.PI/2,row*3+col+variant+(side>0?4:0));
 box('Low rear path',17,.06,1.3,stone,13,.02,-7.5);
 // A porch for the eventual entrance; no props occupy the combat lane.
 box('Rear porch door',1.3,2.35,.18,metal,15.15,1.175,-8.94);box('Porch canopy',2.1,.12,1.1,metal,15.15,2.65,-8.5);
 const bench=(x,z)=>{box('Yard bench seat',2,.1,.55,wood,x,.48,z);box('Yard bench back',2,.45,.1,wood,x,.8,z-.24);for(const dx of[-.72,.72])box('Bench supports',.08,.48,.4,metal,x+dx,.24,z);};bench(7.6,-5.2);if(variant!==2)bench(18.1,-6.3);
 for(const x of[5.6,20.4]){box('Planter kerb',1.6,.28,1.4,stone,x,.14,-5.9);box('Planter soil',1.4,.07,1.2,earth,x,.3,-5.9);const geometry=new THREE.IcosahedronGeometry(.55,1);const items=[];for(let i=0;i<3;i++){const mesh=new THREE.Mesh(geometry,leaves);mesh.position.set(x+(i-1)*.33,.65+(i%2)*.18,-5.9);mesh.scale.set(.8,.8+(i%2)*.2,.8);mesh.updateMatrix();items.push(mesh);}batches.set('Shrub_'+x,{geometry,material:leaves,items});}
 if(variant===0){for(const x of[10.8,13.1])box('Clothes line posts',.06,3,.06,metal,x,1.5,-6.3);box('Clothes line',2.3,.022,.022,metal,11.95,2.8,-6.3);for(let i=0;i<3;i++)box('Hanging laundry',.5,.75,.025,i%2?trim:wood,11.25+i*.65,2.4,-6.3);}
 if(variant===1){for(const x of[10.2,12.8])box('Playground bar posts',.07,2.6,.07,metal,x,1.3,-5.4);box('Playground bar',2.67,.07,.07,metal,11.5,2.58,-5.4);box('Abandoned sandbox',3,.22,2,wood,11.5,.11,-6.7);box('Sandbox fill',2.8,.04,1.8,earth,11.5,.23,-6.7);}
 if(variant===2){box('Service dumpster',1.6,1.15,1.1,metal,11.6,.575,-5.8);box('Dumpster lid',1.7,.1,1.2,metal,11.6,1.2,-5.8);for(let i=0;i<4;i++)box('Stacked pallets',1.25,.12,.9,wood,18,.08+i*.14,-5.4);}
 for(let i=0;i<3;i++)box('Rear downpipe',.09,6.8,.1,metal,5.2+i*7.5,3.4,-9.06);
 const groups=new Map();let boxes=0;for(const {geometry,material,items}of batches.values()){if(!groups.has(material))groups.set(material,[]);for(const item of items){groups.get(material).push(geometry.clone().applyMatrix4(item.matrix));boxes++;}}
 for(const [material,parts]of groups){const geometry=mergeGeometries(parts);for(const p of parts)p.dispose();const mesh=new THREE.Mesh(geometry,material);mesh.castShadow=true;mesh.receiveShadow=true;mesh.name=material.name;root.add(mesh);}const windowGroup=windows.finish();root.add(...windowGroup.children.slice());root.userData.windowCount=windows.stats.count;root.userData.windowStyles=windows.stats.styles.size;root.userData.staticBoxes=boxes+windows.stats.parts;
 return root;
}
