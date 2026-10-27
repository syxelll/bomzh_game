import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{
 const page=await browser.newPage({viewport:{width:640,height:400}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(process.env.GAME_URL??'http://127.0.0.1:5173/?quality=low');await page.waitForFunction(()=>window.gameDebug?.().ready,null,{timeout:90000});if(await page.locator('#menu-play').isVisible())await page.locator('#menu-play').click();
 assert.equal(await page.locator('[data-attack="kick"]').count(),0);
 const clips=[];
 await page.keyboard.press('j');
 for(let serial=1;serial<=3;serial++){
  await page.waitForFunction(n=>gameDebug().player.attackSerial===n,serial,{timeout:90000}).catch(async e=>{console.log('TIMEOUT',await page.evaluate(()=>gameDebug()));throw e;});
  clips.push((await page.evaluate(()=>gameDebug())).player.attackClip);
  if(serial<3){await page.waitForFunction(()=>{const p=gameDebug().player;return p.attackTime> .15;},null,{timeout:90000});await page.keyboard.press('j');}
 }
 assert.deepEqual(clips,['jab_01_combo','jab_02_combo','kick_combo']);
 await page.waitForFunction(()=>!gameDebug().player.attack,null,{timeout:90000});
 // Wait for elapsed game time through the public cooldown, not wall-clock FPS.
 await page.keyboard.down('ArrowRight');const start=(await page.evaluate(()=>gameDebug())).player.walkDistance;
 await page.waitForFunction(x=>gameDebug().player.walkDistance>x+2,start,{timeout:90000});await page.keyboard.up('ArrowRight');
 await page.locator('[data-attack="jab"]').click();assert.equal((await page.evaluate(()=>gameDebug())).player.attackClip,'jab_01_combo');
 assert.deepEqual(errors,[]);console.log('Keyboard combo, kick removal, timeout reset and touch button passed',clips);
}finally{await browser.close();}
