import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{
 const page=await browser.newPage({viewport:{width:640,height:480}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173?quality=low');await page.waitForFunction(()=>window.gameDebug?.().frames>5,null,{timeout:60000});
 await page.keyboard.down('d');await page.waitForFunction(()=>window.gameDebug().player.x>-1.1,null,{timeout:120000});await page.keyboard.up('d');
 await page.keyboard.press('l');await page.waitForFunction(()=>window.gameDebug().player.attack===null,null,{timeout:60000});await page.waitForFunction(()=>window.gameDebug().enemies[0].health<70,null,{timeout:60000});
 await page.waitForFunction(()=>!document.querySelector('[data-attack="kick"]').disabled,null,{timeout:60000});await page.keyboard.press('k');await page.waitForFunction(()=>window.gameDebug().player.attack===null,null,{timeout:60000});
 await page.waitForFunction(()=>!document.querySelector('[data-attack="jab"]').disabled,null,{timeout:60000});await page.keyboard.press('j');await page.waitForFunction(()=>window.gameDebug().player.attack===null,null,{timeout:60000});
 // A second combination also covers enemy knockback moving the target out of range.
 for(let i=0;i<4;i++){
  if(await page.evaluate(()=>window.gameDebug().enemies[0].health<=0))break;
  await page.waitForFunction(()=>!document.querySelector('[data-attack="spin"]').disabled,null,{timeout:60000});await page.keyboard.press('l');await page.waitForFunction(()=>window.gameDebug().player.attack===null,null,{timeout:60000});
  await page.waitForFunction(()=>!document.querySelector('[data-attack="jab"]').disabled,null,{timeout:60000});
 }
 const fight=await page.evaluate(()=>window.gameDebug());assert.ok(fight.enemies[0].health<=0,'enemy defeated: '+JSON.stringify(fight));assert.ok(fight.coins>=5,'combat reward');assert.ok(fight.health>0,'survived');
 await page.keyboard.down('w');await page.waitForFunction(()=>window.gameDebug().player.z<=-1.95,null,{timeout:60000});await page.keyboard.up('w');
 await page.keyboard.down('d');await page.waitForFunction(()=>window.gameDebug().player.x>=29,null,{timeout:180000});await page.keyboard.up('d');
 const before=await page.evaluate(()=>window.gameDebug());assert.ok(before.bottles>0);await page.keyboard.press('e');
 await page.waitForFunction(()=>window.gameDebug().bottles===0,null,{timeout:60000});const after=await page.evaluate(()=>window.gameDebug());
 assert.equal(after.coins,before.coins+before.bottles*3);assert.equal(after.sold,before.bottles);assert.deepEqual(errors,[]);
 console.log('Combat and exchange OK',JSON.stringify(after));
}finally{await browser.close();}
