import {chromium} from '@playwright/test';import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{
 const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:.65}),errors=[];page.on('pageerror',e=>{errors.push(e.message);console.log('ERROR',e.message);});
 // A seeded wallet tests the store; all gameplay rewards below use real inputs.
 await page.addInitScript(()=>{if(!localStorage.getItem('bomzh:wallet:v1'))localStorage.setItem('bomzh:wallet:v1',JSON.stringify({version:1,coins:240,owned:['classic'],equipped:'classic'}));});
 await page.goto('http://127.0.0.1:5173?quality=low');await page.waitForFunction(()=>window.gameDebug?.().ready,null,{timeout:60000});if(await page.locator('#menu-play').isVisible())await page.locator('#menu-play').click();
 await page.click('#shop-open');await page.click('[data-cosmetic="shades"]');assert.equal(await page.evaluate(()=>window.gameDebug().economy.coins),180);
 await page.click('[data-cosmetic="gold"]');assert.equal(await page.evaluate(()=>window.gameDebug().economy.coins),0);assert.equal(await page.locator('[data-cosmetic="gold"]').isDisabled(),true);
 await page.screenshot({path:'/workspace/shop-mobile.png'});await page.click('#shop-close');await page.screenshot({path:'/workspace/cosmetic-gold.png'});
 await page.reload();await page.waitForFunction(()=>window.gameDebug?.().ready,null,{timeout:60000});if(await page.locator('#menu-play').isVisible())await page.locator('#menu-play').click();let s=await page.evaluate(()=>window.gameDebug());assert.equal(s.economy.equipped,'gold');assert.equal(s.economy.coins,0);assert.deepEqual(s.economy.owned,['classic','shades','gold']);
 await page.keyboard.down('d');await page.waitForFunction(()=>gameDebug().nearbyPickup==='bottle');await page.keyboard.up('d');await page.keyboard.press('e');await page.waitForFunction(()=>gameDebug().bottleChoice);await page.locator('#bottle-drink').click();await page.waitForFunction(()=>gameDebug().bottles>=1);
 s=await page.evaluate(()=>window.gameDebug());assert.equal(s.economy.coins,3);assert.equal(s.economy.run.earned,3);console.log('Store, equip persistence and bottle coins OK');
 if(!process.argv.includes('--shop-only')){
 await page.keyboard.down('d');await page.waitForFunction(()=>window.gameDebug().player.x>=0);await page.keyboard.up('d');
 await page.waitForFunction(()=>window.gameDebug().over,null,{timeout:180000});s=await page.evaluate(()=>window.gameDebug());assert.equal(await page.locator('#revive').isVisible(),true);await page.screenshot({path:'/workspace/rewards-mobile.png'});
 await page.click('#revive');await page.waitForFunction(()=>!window.gameDebug().over);let revived=await page.evaluate(()=>window.gameDebug());assert.equal(revived.health,60);assert.equal(revived.economy.run.revived,true);assert.ok(revived.player.invulnerable>2.8);assert.equal(revived.encounter.index,s.encounter.index);console.log('Death and one free revive OK');
 await page.waitForFunction(()=>window.gameDebug().over,null,{timeout:180000});assert.equal(await page.locator('#revive').isVisible(),false);const before=await page.evaluate(()=>window.gameDebug().economy);
 await page.click('#double-coins');await page.waitForFunction(()=>window.gameDebug().economy.run.doubled);const doubled=await page.evaluate(()=>window.gameDebug().economy);assert.equal(doubled.coins,before.coins+before.run.earned);assert.equal(doubled.run.closed,true);assert.equal(await page.locator('#double-coins').isVisible(),false);assert.equal(await page.locator('#revive').isVisible(),false);
 await page.click('#restart');await page.waitForFunction(()=>window.gameDebug?.().ready&&!window.gameDebug().over);if(await page.locator('#menu-play').isVisible())await page.locator('#menu-play').click();s=await page.evaluate(()=>window.gameDebug());assert.equal(s.health,100);assert.equal(s.economy.run.revived,false);assert.equal(s.economy.run.earned,0);assert.equal(s.economy.coins,doubled.coins);assert.equal(s.economy.equipped,'gold');assert.deepEqual(errors,[]);console.log('Second death, one double reward, restart and wallet persistence OK');
 }
 assert.deepEqual(errors,[]);
}finally{await browser.close();}
