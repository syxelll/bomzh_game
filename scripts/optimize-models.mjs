import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {dedup,prune,compressTexture} from '@gltf-transform/functions';
import sharp from 'sharp';
import {stat} from 'node:fs/promises';
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS);
const requested=process.argv.slice(2);
for(const name of (requested.length?requested:['hobo','enemy'])){
 const source=`/workspace/model-exports/mobile/${name}.glb`,target=`public/models/${name.startsWith('hobo-')?'hobo':name}.glb`;
 const doc=await io.read(source);
 await doc.transform(dedup(),prune());
 for(const texture of doc.getRoot().listTextures()){const size=texture.getName().includes('shtani')?1024:512;await compressTexture(texture,{encoder:sharp,targetFormat:'webp',resize:[size,size],lossless:true});}
 await io.write(target,doc);console.log(name,(await stat(source)).size,'→',(await stat(target)).size,'bytes');
}
