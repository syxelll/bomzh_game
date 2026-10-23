import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{
 const page=await browser.newPage({viewport:{width:900,height:700}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173?quality=low');await page.waitForFunction(()=>window.gameDebug?.().ready&&window.gameDebug().frames>5,null,{timeout:60000});
 await page.keyboard.press('e');await page.getByRole('button',{name:'Взять задание',exact:true}).click();
 assert.equal(await page.evaluate(()=>window.gameDebug().quests[0].status),'active');
 const paused=await page.evaluate(()=>window.gameDebug());await page.keyboard.press('d');await page.keyboard.press('j');
 const after=await page.evaluate(()=>window.gameDebug());assert.deepEqual(after.player,paused.player);assert.equal(after.health,paused.health);
 await page.screenshot({path:'/workspace/npc-dialogue.png'});await page.getByRole('button',{name:'До встречи · Esc',exact:true}).click();
 async function axis(key,value){const before=await page.evaluate(()=>window.gameDebug().player);if(Math.abs(before[key]-value)<.1)return;const positive=before[key]<value;const code=key==='x'?(positive?'d':'a'):(positive?'s':'w');await page.keyboard.down(code);await page.waitForFunction(({key,value,positive})=>positive?window.gameDebug().player[key]>=value-.08:window.gameDebug().player[key]<=value+.08,{key,value,positive},{timeout:120000});await page.keyboard.up(code);}
 for(const [x,z] of [[-6,0],[-4.1,1.29],[-2.2,-1.31]]){await axis('x',x);await axis('z',z);}
 await page.waitForFunction(()=>window.gameDebug().collected>=3,null,{timeout:60000});
 await axis('z',-.8);await axis('x',-8.8);await page.keyboard.press('e');
 const beforeReward=await page.evaluate(()=>window.gameDebug().coins);await page.getByRole('button',{name:'Получить награду · 12 монет',exact:true}).click();
 const result=await page.evaluate(()=>window.gameDebug());assert.equal(result.quests[0].status,'completed');assert.equal(result.coins,beforeReward+12);assert.equal(await page.getByRole('button',{name:/Получить награду/}).count(),0);
 await page.getByRole('button',{name:'До встречи · Esc',exact:true}).click();await page.keyboard.press('q');assert.equal(await page.locator('#journal').isVisible(),true);assert.ok((await page.locator('#quest-list').textContent()).includes('✓ Выполнено'));
 await page.screenshot({path:'/workspace/quests-journal.png'});assert.deepEqual(errors,[]);console.log('Quest dialogue, pause, collection, turn-in and journal OK',JSON.stringify(result));
}finally{await browser.close();}
