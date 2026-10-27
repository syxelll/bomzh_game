import {chromium} from '@playwright/test';import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{for(const mobile of [false,true]){
 const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1100,height:750},deviceScaleFactor:.65}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173/?quality=low');await page.waitForFunction(()=>window.gameDebug?.().ready,null,{timeout:60000});if(await page.locator('#menu-play').isVisible())await page.locator('#menu-play').click();assert.equal(await page.evaluate(()=>window.gameDebug().cameraShake.enabled),true);
 await page.keyboard.press('Escape');await page.locator('#camera-shake').uncheck();assert.equal(await page.evaluate(()=>window.gameDebug().cameraShake.enabled),false);await page.click('#resume');
 await page.reload();await page.waitForFunction(()=>window.gameDebug?.().ready,null,{timeout:60000});if(await page.locator('#menu-play').isVisible())await page.locator('#menu-play').click();assert.equal(await page.evaluate(()=>window.gameDebug().cameraShake.enabled),false);
 await page.keyboard.press('Escape');await page.locator('#camera-shake').check();await page.click('#resume');assert.equal(await page.evaluate(()=>window.gameDebug().cameraShake.enabled),true);assert.deepEqual(errors,[]);console.log(mobile?'Mobile':'Desktop','camera shake setting persists and resumes correctly');await page.close();
}}finally{await browser.close();}
