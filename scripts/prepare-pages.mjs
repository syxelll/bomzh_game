import fs from 'node:fs/promises';
import path from 'node:path';
// Keep the standalone download separate; publish normal assets for immediate loading UI.
const output=process.argv[2];if(!output)throw new Error('Pass an existing gh-pages checkout directory');
await fs.cp('dist/assets',path.join(output,'assets'),{recursive:true});
await fs.cp('dist/fonts',path.join(output,'fonts'),{recursive:true});
await fs.cp('dist/models',path.join(output,'models'),{recursive:true});
let html=await fs.readFile('dist/index.html','utf8');html=html.replaceAll('"/assets/','"./assets/');
await fs.writeFile(path.join(output,'index.html'),html);
for(const name of await fs.readdir(path.join(output,'assets')))if(name.endsWith('.js')){
 const filename=path.join(output,'assets',name),js=await fs.readFile(filename,'utf8');
 await fs.writeFile(filename,js.replaceAll('"/models/','"./models/'));
}
for(const name of await fs.readdir(path.join(output,'assets')))if(name.endsWith('.css')){const filename=path.join(output,'assets',name);await fs.writeFile(filename,(await fs.readFile(filename,'utf8')).replaceAll('url(/fonts/','url(../fonts/').replaceAll('url("/fonts/','url("../fonts/'));}
await fs.writeFile(path.join(output,'.nojekyll'),'');
console.log('Pages prepared: small HTML, separate assets and models');
