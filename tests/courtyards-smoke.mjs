import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const yard=process.env.YARD??'laundry';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{
 for(const mobile of [false,true]){
  const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1100,height:750},deviceScaleFactor:.65,isMobile:mobile,hasTouch:mobile}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.route('https://telegram.org/**',r=>r.fulfill({body:''}));
  try{
   await page.goto('http://localhost:5173?location=courtyard&quality=low&yard='+encodeURIComponent(yard));
   await page.waitForFunction(()=>window.gameDebug?.().ready,null,{timeout:120000});
   await page.locator('#menu-play').click();
   await page.waitForFunction(()=>!gameDebug().menu&&!gameDebug().paused);
   assert.equal(await page.evaluate(()=>gameDebug().courtyard),true);
   await page.keyboard.down('w');
   await page.waitForFunction(()=>gameDebug().player.z< -3,null,{timeout:60000});
   await page.keyboard.up('w');
   await page.keyboard.press('Escape');
   await page.addStyleTag({content:'#pause-menu{visibility:hidden!important}'});
   await page.screenshot({path:`/workspace/courtyard-${yard}-${mobile?'mobile':'desktop'}.png`});
   assert.equal(await page.evaluate(()=>gameDebug().worldChunks),5);
   assert.deepEqual(errors,[]);
   console.log(yard,mobile?'Mobile courtyard OK':'Desktop courtyard OK');
  }catch(error){console.error(yard,mobile?'mobile':'desktop',await page.evaluate(()=>window.gameDebug?.()));throw error;}
  await page.close();
 }
}finally{await browser.close();}
