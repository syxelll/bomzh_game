import fs from 'node:fs/promises';
const root=new URL('../dist/',import.meta.url);
let html=await fs.readFile(new URL('index.html',root),'utf8');
const jsPath=html.match(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/)[1];
let js=await fs.readFile(new URL(jsPath.slice(1),root),'utf8');
for(const name of ['hobo','enemy']){
 const bytes=await fs.readFile(new URL(`models/${name}.glb`,root));
 const uri='data:model/gltf-binary;base64,'+bytes.toString('base64');
 js=js.replaceAll(new RegExp(`/models/${name}\\.glb(?:\\?[^\"'\\s]*)?`,'g'),uri);
}
const actionBytes=await fs.readFile(new URL('models/hobo-actions.json',root));js=js.replaceAll('/models/hobo-actions.json','data:application/json;base64,'+actionBytes.toString('base64'));
const cssPath=html.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/)[1];
const css=await fs.readFile(new URL(cssPath.slice(1),root),'utf8');
html=html.replace(/<script async src="https:\/\/telegram.org[^>]*><\/script>/,'');
html=html.replace(/<script type="module"[^>]*src="[^"]+"[^>]*><\/script>/,()=>'<script>(async()=>{if(document.readyState==="loading")await new Promise(resolve=>document.addEventListener("DOMContentLoaded",resolve,{once:true}));'+js.replaceAll('</script','<\\/script')+'})();</script>');
html=html.replace(/<link rel="stylesheet"[^>]*href="[^"]+"[^>]*>/,()=>'<style>'+css+'</style>');
const output=new URL('game-standalone.html',root);await fs.writeFile(output,html);console.log(output.pathname,Buffer.byteLength(html),'bytes');
