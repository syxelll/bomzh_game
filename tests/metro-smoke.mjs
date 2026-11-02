import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';

const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{
 for(const mobile of [false,true]){
  const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1100,height:750},deviceScaleFactor:.65,isMobile:mobile,hasTouch:mobile}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error'&&/shader|webgl|THREE/i.test(m.text()))errors.push(m.text());});
  await page.route('https://telegram.org/**',r=>r.fulfill({body:''}));
  await page.goto(`http://localhost:5173?quality=${mobile?'low':'medium'}&location=metro`);
  await page.waitForFunction(()=>window.gameDebug?.().ready,null,{timeout:120000});
  assert.equal(await page.evaluate(()=>gameDebug().location),'metro');
  for(const location of ['street','entrance','metro']){
   await page.locator(`[data-start-location="${location}"]`).click();
   assert.equal(await page.evaluate(()=>gameDebug().location),location);
  }
  await page.locator('#menu-play').click();
  await page.waitForFunction(()=>!gameDebug().menu&&gameDebug().frames>5);
  for(const [key,z] of [['w',-.9],['s',.9]]){
   await page.keyboard.down(key);
   await page.waitForFunction(z=>Math.abs(gameDebug().player.z-z)<.001,z,{timeout:60000});
   await page.keyboard.up(key);
  }
  await page.keyboard.down('w');
  await page.waitForFunction(()=>gameDebug().player.z<=.05);
  await page.keyboard.up('w');
  await page.keyboard.down('d');
  await page.waitForFunction(()=>gameDebug().player.x>=-1.8,null,{timeout:60000});
  await page.keyboard.up('d');
  await page.waitForFunction(()=>gameDebug().enemies.some(e=>e.windup>0),null,{timeout:120000});
  await page.keyboard.press('Escape');
  const frozen=await page.evaluate(()=>gameDebug());
  await page.waitForFunction(f=>gameDebug().frames>=f+5,frozen.frames);
  const state=await page.evaluate(()=>gameDebug());
  assert.equal(state.metro.travelTime,frozen.metro.travelTime,'the passing tunnel pauses with the game');
  assert.equal(state.worldChunks,5);
  assert.equal(state.foreground.visibleChunks,0,'outdoor and entrance props are hidden in the carriage');
  assert.ok([state.player,...state.enemies].every(e=>Math.abs(e.z)<=.901));
  assert.ok(state.medkits.every(p=>Math.abs(p.z)<=.65));
  assert.ok(state.weapons.items.every(p=>Math.abs(p.z)<=.65));
  assert.equal(await page.locator('#location-name').textContent(),'Вагон метро');
  await page.addStyleTag({content:'#pause-menu{visibility:hidden!important}'});
  await page.screenshot({path:`/workspace/metro-${mobile?'mobile':'desktop'}.png`});
  await page.keyboard.press('Escape');
  const beforeHit=state.enemies[0].health;
  await page.keyboard.press('k');
  await page.waitForFunction(health=>gameDebug().enemies[0].health<health,beforeHit,{timeout:60000});
  await page.waitForFunction(()=>!gameDebug().player.attack);
  await page.keyboard.press('g');
  await page.waitForFunction(()=>gameDebug().grapple?.hit,null,{timeout:60000});
  const slammed=await page.evaluate(()=>gameDebug());
  assert.ok(slammed.enemies[0].health<beforeHit-24,'burp and ground throw both connect in the aisle');
  assert.ok(Math.abs(slammed.enemies[0].z)<=.901,'grappling keeps the victim inside the carriage');
  assert.deepEqual(errors,[]);
  console.log(`${mobile?'Mobile':'Desktop'} metro: selection, burp, ground throw, aisle bounds, pickups and pause OK`);
  await page.close();
 }
}finally{await browser.close();}
