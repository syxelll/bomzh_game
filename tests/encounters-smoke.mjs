import {chromium} from '@playwright/test';import assert from 'node:assert/strict';
const testShake=process.argv.includes('--shake');const testSuper=process.argv.includes('--super'),mobile=process.argv.includes('--mobile');
const targetAreas=process.argv.includes('--first-area')?1:testSuper?2:4;
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{
 const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1000,height:700},deviceScaleFactor:.65}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(process.env.GAME_URL??'http://127.0.0.1:5173?quality=low');await page.waitForFunction(()=>window.gameDebug?.().ready&&window.gameDebug().frames>5,null,{timeout:60000});
 const held=new Set();async function movement(wanted=[]){for(const key of [...held])if(!wanted.includes(key)){await page.keyboard.up(key);held.delete(key);}for(const key of wanted)if(!held.has(key)){await page.keyboard.down(key);held.add(key);}}
 let superSeen=false;
 await page.keyboard.down('a');const startFrame=await page.evaluate(()=>window.gameDebug().frames);await page.waitForFunction(n=>window.gameDebug().frames>n+15,startFrame);await page.keyboard.up('a');assert.equal(await page.evaluate(()=>window.gameDebug().player.x),-8,'start return wall');
 await page.keyboard.down('s');await page.waitForFunction(()=>Math.abs(window.gameDebug().player.heading)<.15);await page.keyboard.up('s');
 assert.ok(await page.evaluate(()=>window.gameDebug().player.z>.5),'down movement faces camera');
 let maxShake=0;let fall=false,completed=0,lastWave='',comboSeen=false;
 for(let step=0;step<1600;step++){
  const s=await page.evaluate(()=>window.gameDebug());maxShake=Math.max(maxShake,s.cameraShake?.strength??0);assert.equal(s.over,false,'player survived: '+JSON.stringify(s));
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
    if(testSuper&&!superSeen&&s.superPower>=100&&!s.player.attack&&s.player.stun<=0&&s.player.dodge<=0&&dist<2.8&&!target.entering){
     await movement([]);const before=s.defeated;await page.keyboard.press('f');await page.waitForFunction(()=>!!window.gameDebug().cinematic);
     await page.waitForFunction(()=>window.gameDebug().cinematic?.elapsed>.8);await page.keyboard.press('Escape');const frozen=await page.evaluate(()=>window.gameDebug());
     await page.waitForFunction(n=>window.gameDebug().frames>=n+4,frozen.frames);assert.equal(await page.evaluate(()=>window.gameDebug().cinematic.elapsed),frozen.cinematic.elapsed,'cinematic pause');
     await page.keyboard.press('Escape');await page.waitForFunction(()=>window.gameDebug().cinematic?.hit);await page.screenshot({path:`/workspace/finisher-${mobile?'mobile':'desktop'}.png`});
     await page.waitForFunction(()=>!window.gameDebug().cinematic);const after=await page.evaluate(()=>window.gameDebug());assert.equal(after.defeated,before+1,'exactly one cinematic kill');assert.equal(after.superPower,0);assert.equal(after.health,s.health,'other enemies frozen');superSeen=true;console.log('Cinematic one-hit finish and pause OK');continue;
    }
    const imminent=live.some(e=>e.down<=0&&e.windup>0&&e.windup<.18&&Math.hypot(e.x-s.player.x,e.z-s.player.z)<2.2);
    if(imminent&&s.player.invulnerable<=0&&s.player.dodgeCooldown<=0&&s.player.stamina>=16){await movement([dx>=0?'a':'d']);await page.keyboard.press('Space');}
    else{
     const move=[];if(dist>1.05||(!s.player.attack&&(dx*Math.sin(s.player.heading)+dz*Math.cos(s.player.heading))/Math.max(.01,dist)<.7))move.push(direction);if(Math.abs(dz)>.2)move.push(dz>0?'s':'w');await movement(move);
     if(dist<1.8&&s.player.stun===0){const crowd=live.filter(e=>e.down<=0&&Math.hypot(e.x-s.player.x,e.z-s.player.z)<2).length;
      if(!s.player.attack&&crowd>1&&s.player.cooldowns.spray===0&&s.player.stamina>=32)await page.keyboard.press('l');
      else if(!s.player.attack&&target.type==='bruiser'&&s.player.cooldowns.spray===0&&s.player.stamina>=32)await page.keyboard.press('l');
      else if(dist<1.35&&(!s.player.attack||s.player.attack==='jab'))await page.keyboard.press('j');
     }
    }
   }
  }
  await page.waitForFunction(frame=>window.gameDebug().frames>=frame+2,s.frames,{timeout:60000});
 }
 await movement(['a']);await page.waitForFunction(()=>window.gameDebug().player.x<=window.gameDebug().returnWall+.005,null,{timeout:60000});await movement([]);const result=await page.evaluate(()=>window.gameDebug());assert.equal(completed,targetAreas,'all selected areas clear: '+JSON.stringify(result));assert.ok(fall||superSeen,'knockdown or finisher rendered');if(testSuper)assert.ok(superSeen,'super used');assert.ok(result.returnWall>-8,'checkpoint wall advances');assert.ok(Math.abs(result.player.x-result.returnWall)<.01,'cannot cross checkpoint wall');assert.ok(comboSeen,'combo followed through');if(targetAreas>=3)assert.ok(result.bruisersDefeated>=1);assert.equal(result.worldChunks,5);assert.ok(result.enemies.length<=8);assert.ok(result.spawnAudit.length>0);for(const audit of result.spawnAudit)assert.ok(audit.side<0?audit.projected[1]<-1.15:audit.projected[0]>1.15,'offscreen creation');assert.equal(result.best.levels,targetAreas);assert.deepEqual(result.authoredActions.sort(),['idle','jab_01_combo','jab_02_combo','kick_combo','walk']);assert.deepEqual(errors,[]);if(testShake)assert.ok(maxShake>.02,'combat camera impulse observed');
 console.log('Endless stages, offscreen entrants, authored actions, combos and bounded world OK',JSON.stringify(result));await page.reload();await page.waitForFunction(()=>window.gameDebug?.().ready,null,{timeout:60000});assert.equal(await page.evaluate(()=>window.gameDebug().best.levels),targetAreas);assert.equal(await page.evaluate(()=>window.gameDebug().encounter.index),0);console.log('Record survived reload; new run reset');
}finally{await browser.close();}
