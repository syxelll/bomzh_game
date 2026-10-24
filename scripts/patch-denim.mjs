import {NodeIO} from '@gltf-transform/core';import {ALL_EXTENSIONS} from '@gltf-transform/extensions';import sharp from 'sharp';import fs from 'node:fs/promises';
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS),filename='public/models/hobo.glb',doc=await io.read(filename),mat=doc.getRoot().listMaterials().find(m=>m.getName().includes('shtani'));
if(!mat)throw Error('Denim material missing');
const dir='/workspace/model-exports/denim-fixed';
const encode=bytes=>sharp(bytes).webp({lossless:true}).toBuffer();
const base=doc.createTexture('denim_BaseColor_1024').setMimeType('image/webp').setImage(await encode(await fs.readFile(dir+'/DIFFUSE.png')));
const normal=doc.createTexture('denim_Normal_1024').setMimeType('image/webp').setImage(await encode(await fs.readFile(dir+'/NORMAL.png')));
const {data,info}=await sharp(dir+'/ROUGHNESS.png').removeAlpha().raw().toBuffer({resolveWithObject:true}),packed=new Uint8Array(info.width*info.height*3);
for(let i=0;i<info.width*info.height;i++){packed[i*3]=255;packed[i*3+1]=data[i*info.channels];packed[i*3+2]=0;}
const rough=doc.createTexture('denim_MetallicRoughness_1024').setMimeType('image/webp').setImage(await sharp(packed,{raw:{width:info.width,height:info.height,channels:3}}).webp({lossless:true}).toBuffer());
mat.setBaseColorTexture(base).setNormalTexture(normal).setMetallicRoughnessTexture(rough).setMetallicFactor(0).setRoughnessFactor(1);
// Keep the current rig, geometry, animation bind data and every other material.
const used=new Set();for(const m of doc.getRoot().listMaterials())for(const texture of [m.getBaseColorTexture(),m.getNormalTexture(),m.getMetallicRoughnessTexture(),m.getOcclusionTexture(),m.getEmissiveTexture()])if(texture)used.add(texture);
for(const texture of doc.getRoot().listTextures())if(!used.has(texture))texture.dispose();
await io.write(filename,doc);console.log('Updated denim: original UV atlas, 1024px base color / roughness / normals');
