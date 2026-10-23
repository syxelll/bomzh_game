import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{
 for(const mobile of [false,true]){
  const context=await browser.newContext({viewport:mobile?{width:390,height:844}:{width:1365,height:900},hasTouch:mobile,isMobile:mobile});
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:5173?quality=low');await page.waitForFunction(()=>window.gameDebug?.().ready && window.gameDebug().frames>5,null,{timeout:60000});
  const initial=await page.evaluate(()=>window.gameDebug());assert.equal(initial.remainingBottles,18);assert.equal(initial.health,100);
  if(mobile){const b=page.locator('[data-move="right"]');await b.dispatchEvent('pointerdown',{pointerId:1});await page.waitForFunction(()=>window.gameDebug().bottles>0,null,{timeout:60000});await b.dispatchEvent('pointerup',{pointerId:1});}
  else{await page.keyboard.down('d');await page.waitForFunction(()=>window.gameDebug().bottles>0,null,{timeout:60000});await page.keyboard.up('d');}
  const after=await page.evaluate(()=>window.gameDebug());assert.ok(after.player.x>initial.player.x,'movement');assert.ok(after.bottles>0,'bottle pickup');
  await page.locator('[data-attack="kick"]').dispatchEvent('pointerdown');
  await page.screenshot({path:`/workspace/bomzh_game/${mobile?'mobile':'desktop'}-preview.png`});
  assert.deepEqual(errors,[]);console.log(mobile?'Mobile':'Desktop','OK',JSON.stringify(after));await context.close();
 }
}finally{await browser.close();}
