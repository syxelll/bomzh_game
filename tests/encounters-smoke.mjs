import {chromium} from '@playwright/test';import assert from 'node:assert/strict';
const targetAreas=process.argv.includes('--first-area')?1:4;
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{
 const page=await browser.newPage({viewport:{width:1000,height:700}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173?quality=low');await page.waitForFunction(()=>window.gameDebug?.().ready&&window.gameDebug().frames>5,null,{timeout:60000});
 const held=new Set();async function movement(wanted=[]){for(const key of [...held])if(!wanted.includes(key)){await page.keyboard.up(key);held.delete(key);}for(const key of wanted)if(!held.has(key)){await page.keyboard.down(key);held.add(key);}}
 let fall=false,completed=0,lastWave='',comboSeen=false;
 for(let step=0;step<1600;step++){
  const s=await page.evaluate(()=>window.gameDebug());assert.equal(s.over,false,'player survived: '+JSON.stringify(s));
  assert.ok(s.player.x>=s.encounter.bounds[0]-.01&&s.player.x<=s.encounter.bounds[1]+.01,'arena boundary');
  if(s.encounter.index>completed){completed=s.encounter.index;console.log('Cleared',completed,'health',s.health);await page.screenshot({path:`/workspace/encounter-clear-${completed}.png`});if(completed===targetAreas)break;}
  const wave=`${s.encounter.index}:${s.encounter.wave}:${s.encounter.phase}`;if(wave!==lastWave){console.log('Phase',wave);lastWave=wave;}
  if(s.player.combo>=2)comboSeen=true;
  const live=s.enemies.filter(e=>e.health>0);
  if(!fall&&live.some(e=>e.down>.6)){fall=true;await page.screenshot({path:'/workspace/encounter-knockdown.png'});}
  if(!s.encounter.active)await movement(['d']);
  else if(s.encounter.phase==='incoming')await movement([]);
  else{
   const target=live.filter(e=>e.down<=0).sort((a,b)=>Math.hypot(a.x-s.player.x,a.z-s.player.z)-Math.hypot(b.x-s.player.x,b.z-s.player.z))[0];
   if(!target){await movement([]);}else{
    const dx=target.x-s.player.x,dz=target.z-s.player.z,dist=Math.hypot(dx,dz),direction=dx>=0?'d':'a';
    const imminent=live.some(e=>e.down<=0&&e.windup>0&&e.windup<.18&&Math.hypot(e.x-s.player.x,e.z-s.player.z)<2.2);
    if(imminent&&s.player.invulnerable<=0&&s.player.dodgeCooldown<=0&&s.player.stamina>=16){await movement([dx>=0?'a':'d']);await page.keyboard.press('Space');}
    else{
     const move=[];if(dist>1.05||(!s.player.attack&&s.player.facing!==(dx>=0?1:-1)))move.push(direction);if(Math.abs(dz)>.2)move.push(dz>0?'s':'w');await movement(move);
     if(dist<1.8&&s.player.stun===0){const crowd=live.filter(e=>e.down<=0&&Math.hypot(e.x-s.player.x,e.z-s.player.z)<2).length;
      if(!s.player.attack&&crowd>1&&s.player.cooldowns.spin===0&&s.player.stamina>=32)await page.keyboard.press('l');
      else if(!s.player.attack&&target.type==='bruiser'&&s.player.cooldowns.kick===0&&s.player.stamina>=14)await page.keyboard.press('k');
      else if(!s.player.attack&&target.type==='bruiser'&&s.player.cooldowns.spin===0&&s.player.stamina>=32)await page.keyboard.press('l');
      else if(dist<1.35&&(!s.player.attack||s.player.attack==='jab'))await page.keyboard.press('j');
     }
    }
   }
  }
  await page.waitForFunction(frame=>window.gameDebug().frames>=frame+2,s.frames,{timeout:60000});
 }
 await movement([]);const result=await page.evaluate(()=>window.gameDebug());assert.equal(completed,targetAreas,'all selected areas clear: '+JSON.stringify(result));assert.ok(fall,'knockdown rendered');assert.ok(comboSeen,'combo followed through');if(targetAreas>=3)assert.ok(result.bruisersDefeated>=1);assert.equal(result.worldChunks,5);assert.ok(result.enemies.length<=8);assert.ok(result.spawnAudit.length>0);for(const audit of result.spawnAudit)assert.ok(audit.side<0?audit.projected[1]<-1.15:audit.projected[0]>1.15,'offscreen creation');assert.equal(result.best.levels,targetAreas);assert.deepEqual(result.authoredActions.sort(),['idle','jab_01','kick']);assert.deepEqual(errors,[]);
 console.log('Endless stages, offscreen entrants, authored actions, combos and bounded world OK',JSON.stringify(result));await page.reload();await page.waitForFunction(()=>window.gameDebug?.().ready,null,{timeout:60000});assert.equal(await page.evaluate(()=>window.gameDebug().best.levels),targetAreas);assert.equal(await page.evaluate(()=>window.gameDebug().encounter.index),0);console.log('Record survived reload; new run reset');
}finally{await browser.close();}
