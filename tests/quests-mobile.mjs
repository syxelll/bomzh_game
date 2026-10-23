import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{
 const page=await browser.newPage({viewport:{width:390,height:844},hasTouch:true,isMobile:true}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173?quality=low');await page.waitForFunction(()=>window.gameDebug?.().ready&&window.gameDebug().frames>5,null,{timeout:60000});
 await page.locator('#interact').tap();await page.getByRole('button',{name:'Взять задание',exact:true}).tap();
 assert.equal(await page.evaluate(()=>window.gameDebug().quests[0].status),'active');
 const bounds=await page.locator('.dialogue-card').boundingBox();assert.ok(bounds.x>=0&&bounds.x+bounds.width<=390&&bounds.y>=0&&bounds.y+bounds.height<=844);
 await page.screenshot({path:'/workspace/npc-mobile.png'});await page.getByRole('button',{name:'До встречи · Esc',exact:true}).tap();await page.locator('#journal-toggle').tap();assert.equal(await page.locator('#journal').isVisible(),true);assert.deepEqual(errors,[]);console.log('Mobile NPC dialogue, touch input and journal OK');
}finally{await browser.close();}
