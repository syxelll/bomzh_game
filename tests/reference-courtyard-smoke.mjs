import {chromium} from '@playwright/test';import assert from 'node:assert/strict';import sharp from 'sharp';
const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{for(const mobile of [false,true]){
 const context=await b.newContext({viewport:mobile?{width:390,height:844}:{width:1584,height:672},deviceScaleFactor:mobile?2:1,isMobile:mobile,hasTouch:mobile,ignoreHTTPSErrors:true}),p=await context.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 await p.route('https://telegram.org/js/telegram-web-app.js',r=>r.fulfill({contentType:'text/javascript',body:''}));
 const url=new URL(process.env.GAME_URL??'http://127.0.0.1:5181/');url.searchParams.set('quality','high');url.searchParams.set('lighting','reference');url.searchParams.set('editor','lighting');await p.goto(url.href);await p.waitForFunction(()=>window.gameDebug?.().ready&&gameDebug().frames>4,null,{timeout:120000});const d=await p.evaluate(()=>gameDebug());assert.equal(d.environment,'authored');assert.equal(d.graphics.mode,'high');assert.equal(d.lighting.ambientIntensity,1.5);assert.equal(d.worldChunks,5);
 await p.evaluate(()=>{document.getElementById('lighting-panel').hidden=true;});
 const shot=await p.screenshot({path:'/workspace/reference-courtyard-'+(mobile?'mobile':'desktop')+'.png'});if(!mobile)await sharp(shot).jpeg({quality:90}).toFile('location-editing/courtyard-preview.jpg');assert.deepEqual(errors,[]);console.log(mobile?'Phone high-DPI':'Wide desktop','reference courtyard, preset, HDR, alpha materials and HUD render without errors');await context.close();
}}finally{await b.close();}
