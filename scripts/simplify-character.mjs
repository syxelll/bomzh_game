import {NodeIO} from '@gltf-transform/core';import {ALL_EXTENSIONS} from '@gltf-transform/extensions';import {simplifyPrimitive,weld,prune} from '@gltf-transform/functions';import {MeshoptSimplifier} from 'meshoptimizer';
const [source,target]=process.argv.slice(2);if(!source||!target)throw Error('Pass source and destination GLBs');await MeshoptSimplifier.ready;
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS),doc=await io.read(source);await doc.transform(weld());let before=0,after=0;
for(const node of doc.getRoot().listNodes()){const mesh=node.getMesh();if(!mesh)continue;for(const p of mesh.listPrimitives()){
 const tris=p.getIndices().getCount()/3;before+=tris;const name=node.getName().toLowerCase();const budget=/shoe|boot/.test(name)?5000:/glaza/.test(name)?1800:name==='mesh'?6000:name==='mesh.001'?2500:6000;
 // Keep original vertex positions, UV seams, skin weights and morph targets intact.
 if(tris>budget&&!p.listTargets().length)simplifyPrimitive(p,{simplifier:MeshoptSimplifier,ratio:budget/tris,error:.01,lockBorder:false});
 after+=p.getIndices().getCount()/3;console.log(node.getName(),tris,'->',p.getIndices().getCount()/3);
}}
await doc.transform(prune());await io.write(target,doc);console.log('CHARACTER_TRIANGLES',before,'->',after);
