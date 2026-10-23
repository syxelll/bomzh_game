import {chromium} from '@playwright/test';import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{
 for(const mobile of [false,true]){
 const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1100,height:750},hasTouch:mobile,isMobile:mobile}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173?quality=low');await page.waitForFunction(()=>window.gameDebug?.().ready&&window.gameDebug().frames>5,null,{timeout:60000});
 const initial=await page.evaluate(()=>window.gameDebug());assert.equal(initial.encounter.phase,'explore');assert.equal(initial.enemies.length,0);
 if(mobile)await page.locator('#dodge').tap();else await page.keyboard.press('Space');
 await page.waitForFunction(()=>window.gameDebug().player.dodge===0,null,{timeout:60000});const after=await page.evaluate(()=>window.gameDebug());assert.ok(after.player.x>initial.player.x+1);assert.ok(after.player.stamina<100&&after.player.stamina>=84);
 await page.waitForFunction(()=>window.gameDebug().player.stamina>=99,null,{timeout:60000});
 const screen=await page.evaluate(()=>{const e=document.getElementById('dodge').getBoundingClientRect();return {x:e.x,y:e.y,r:e.right,b:e.bottom,w:innerWidth,h:innerHeight};});assert.ok(screen.x>=0&&screen.r<=screen.w&&screen.y>=0&&screen.b<=screen.h);
 await page.screenshot({path:`/workspace/dynamics-${mobile?'mobile':'desktop'}.png`});assert.deepEqual(errors,[]);console.log(mobile?'Mobile':'Desktop','dodge, stamina recovery, exploration and camera render OK');await page.close();
 }
}finally{await browser.close();}
