// Evaluate the actual street in Chromium so its canvas textures are preserved.
import {createServer} from 'vite';
import {chromium} from '@playwright/test';
import {writeFileSync} from 'node:fs';
const server=await createServer({server:{host:'127.0.0.1',port:0},logLevel:'error'});await server.listen();
let browser;
try{
 browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 const page=await browser.newPage();await page.route('**/__street-export',r=>r.fulfill({contentType:'text/html',body:'<!doctype html><html><body></body></html>'}));
 await page.goto('http://127.0.0.1:'+server.httpServer.address().port+'/__street-export');
 const data=await page.evaluate(async()=>{
  const THREE=await import('/node_modules/three/build/three.module.js'),{Street}=await import('/src/world.js'),{lightingDefaults}=await import('/src/lighting.js');
  const scene=new THREE.Scene(),street=new Street(scene),chunks=[],materials=[],textures=[],materialIds=new Map(),textureIds=new Map();
  function textureId(t){if(!t)return null;if(!textureIds.has(t.uuid)){textureIds.set(t.uuid,textures.length);textures.push({name:'StreetTexture_'+textures.length,data:t.image.toDataURL('image/png'),repeat:t.wrapS===THREE.RepeatWrapping});}return textureIds.get(t.uuid);}
  function materialId(m){if(!materialIds.has(m.uuid)){const name=[...street.materials].find(([,v])=>v===m)?.[0]??'sign';materialIds.set(m.uuid,materials.length);materials.push({name,color:'#'+m.color.getHexString(),roughness:m.roughness??1,unlit:m.isMeshBasicMaterial??false,map:textureId(m.map),bumpMap:textureId(m.bumpMap),bumpScale:m.bumpScale??0});}return materialIds.get(m.uuid);}
  for(const index of [-1,0,1]){
   const chunk=street.makeChunk(index),{group}=chunk;group.updateMatrixWorld(true);const meshes=[];
   group.traverse(o=>{if(!o.isMesh)return;let p=o,pickup=false;while(p&&p!==group){if(chunk.bottles.some(b=>b.mesh===p))pickup=true;p=p.parent;}
    const count=o.isInstancedMesh?o.count:1;for(let instance=0;instance<count;instance++){
     const matrix=o.matrixWorld.clone();if(o.isInstancedMesh){const local=new THREE.Matrix4();o.getMatrixAt(instance,local);matrix.multiply(local);}
     const g=o.geometry,position=g.attributes.position,vertices=[];for(let i=0;i<position.count;i++){const v=new THREE.Vector3().fromBufferAttribute(position,i).applyMatrix4(matrix);vertices.push([v.x,-v.z,v.y]);}
     const indices=g.index?Array.from(g.index.array):Array.from({length:position.count},(_,i)=>i),faces=[];for(let i=0;i<indices.length;i+=3)faces.push(indices.slice(i,i+3));
     const uv=g.attributes.uv?Array.from({length:position.count},(_,i)=>[g.attributes.uv.getX(i),g.attributes.uv.getY(i)]):null;
     meshes.push({vertices,faces,uv,material:materialId(o.material),pickup});
    }
   });chunks.push({index,meshes});
  }
  return {version:2,chunks,materials,textures,lighting:lightingDefaults};
 });
 const output=process.argv[2]||'/tmp/street-meshes.json';writeFileSync(output,JSON.stringify(data));console.log('Exported',data.chunks.reduce((n,c)=>n+c.meshes.length,0),'meshes,',data.materials.length,'materials,',data.textures.length,'textures to',output);
}finally{await browser?.close();await server.close();}
