import {chromium} from '@playwright/test';import assert from 'node:assert/strict';
const burp=process.argv.includes('--burp'),kind=burp?'burp':'spray';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{
 for(const mobile of (process.argv.includes('--mobile')?[true]:[false,true])){
  const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1000,height:700},deviceScaleFactor:.65}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:5173?quality=low');await page.waitForFunction(()=>window.gameDebug?.().ready,null,{timeout:60000});
  await page.keyboard.down('w');await page.waitForFunction(()=>window.gameDebug().player.z<-.45);await page.keyboard.up('w');
  await page.keyboard.down('d');await page.waitForFunction(()=>window.gameDebug().player.x>=-1.9,null,{timeout:60000});await page.keyboard.up('d');
  await page.waitForFunction(()=>{const s=window.gameDebug(),e=s.enemies[0];return e&&!e.entering&&Math.hypot(e.x-s.player.x,e.z-s.player.z)<2.8&&Math.abs(e.z-s.player.z)<.8;},null,{timeout:60000});
  const before=await page.evaluate(()=>window.gameDebug());
  if(mobile)await page.locator(`[data-attack="${kind}"]`).dispatchEvent('pointerdown');else await page.keyboard.press(burp?'k':'l');
  await page.waitForFunction(k=>window.gameDebug()[k+'Visible'],kind,{timeout:60000});
  await page.keyboard.press('Escape');const paused=await page.evaluate(()=>window.gameDebug());await page.waitForFunction(n=>window.gameDebug().frames>n+3,paused.frames);assert.equal(await page.evaluate(()=>window.gameDebug().player.attackTime),paused.player.attackTime);await page.keyboard.press('Escape');
  await page.waitForFunction(beforeHealth=>window.gameDebug().enemies[0].health<beforeHealth,before.enemies[0].health,{timeout:15000}).catch(async error=>{console.log('Failure state',JSON.stringify({before,current:await page.evaluate(()=>window.gameDebug()),errors}));throw error;});await page.screenshot({path:`/workspace/spray-${mobile?'mobile':'desktop'}.png`});
  await page.waitForFunction(()=>!window.gameDebug().player.attack,null,{timeout:60000});const after=await page.evaluate(()=>window.gameDebug());
  assert.equal(before.enemies[0].health-after.enemies[0].health,burp?24:34,'one damage application despite continuous visual stream');assert.equal(after[kind+'Visible'],false);assert.equal(after.superPower,12);assert.equal(after.player.cooldowns[kind]>0,true);assert.ok(Math.abs(after.player.heading-Math.PI/2)<.01,'no spin');assert.deepEqual(errors,[]);console.log(mobile?'Mobile touch':'Desktop keyboard',kind,'damage, aim, pause, cooldown OK');await page.close();
 }
}finally{await browser.close();}
