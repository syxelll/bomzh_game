import {test} from 'node:test';import assert from 'node:assert/strict';import {NodeIO} from '@gltf-transform/core';import {ALL_EXTENSIONS} from '@gltf-transform/extensions';import sharp from 'sharp';
test('denim retains 1024px fabric and wear detail instead of a flat baked color',async()=>{
 const doc=await new NodeIO().registerExtensions(ALL_EXTENSIONS).read(new URL('../public/models/hobo.glb',import.meta.url).pathname),m=doc.getRoot().listMaterials().find(m=>m.getName().includes('shtani'));assert.ok(m);
 for(const t of [m.getBaseColorTexture(),m.getNormalTexture(),m.getMetallicRoughnessTexture()]){assert.ok(t);const meta=await sharp(t.getImage()).metadata();assert.equal(meta.width,1024);assert.equal(meta.height,1024);}
 const {data,info}=await sharp(m.getBaseColorTexture().getImage()).removeAlpha().raw().toBuffer({resolveWithObject:true}),colors=new Set();for(let i=0;i<data.length;i+=info.channels*5){const [r,g,b]=data.subarray(i,i+3);if(r+g+b>45)colors.add([r>>3,g>>3,b>>3].join(':'));}assert.ok(colors.size>40,'fabric texture must have variation inside painted UV islands');
});
