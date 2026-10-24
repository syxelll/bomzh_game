import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {dedup,prune,textureCompress} from '@gltf-transform/functions';
import sharp from 'sharp';
import {stat} from 'node:fs/promises';
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS);
const requested=process.argv.slice(2);
for(const name of (requested.length?requested:['hobo','enemy'])){
 const source=`/workspace/model-exports/mobile/${name}.glb`,target=`public/models/${name==='hobo-updated'?'hobo':name}.glb`;
 const doc=await io.read(source);
 await doc.transform(dedup(),prune(),textureCompress({encoder:sharp,targetFormat:'webp',resize:[512,512],lossless:true,pattern:/^(?!.*shtani)/}),textureCompress({encoder:sharp,targetFormat:'webp',resize:[1024,1024],lossless:true,pattern:/shtani/}));
 await io.write(target,doc);console.log(name,(await stat(source)).size,'→',(await stat(target)).size,'bytes');
}
