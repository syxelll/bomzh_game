import {AdaptiveResolution} from './adaptive-resolution.js';
import {BurpEffect} from './burp.js';
import {graphicsQuality} from './graphics-quality.js';
import {DepthOfField} from './depth-of-field.js';
import {extendFrontPaving,setupStreetReflections} from './street-environment.js';
import {LightingSettings} from './lighting.js';
import {mountLightingPanel} from './lighting-panel.js';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone } from 'three/addons/utils/SkeletonUtils.js';
import { attacks, canHit } from './game.js';
import './style.css';
import {attachUserActions,comboClips,comboSpec} from './user-actions.js';
import {Encounters} from './encounters.js';
import {GameCamera} from './camera.js';
import {enemyTypes,staminaCosts,spendStamina,recoverStamina,enemyConnects} from './combat.js';
import {WALK_SPEED,advanceWalk} from './locomotion.js';
import {directionYaw,turnToward} from './movement.js';
import {chargeSuper,selectFinisherTarget,finisherPose,finisherPlacement} from './finisher.js';
import {SprayEffect} from './spray.js';
import {Street} from './world.js';
import {ContactShadows} from './contact-shadows.js';
import {Wallet,catalog} from './economy.js';
import {rewardProvider,requestReward} from './rewards.js';
import {Cosmetics} from './cosmetics.js';
import {readRecord,saveRecord} from './records.js';
import {laneBounds,offscreenSpawn} from './spawning.js';
import { pose, prepareAnimator, sampleMotion } from './animation.js';

const $ = id => document.getElementById(id);
const lightingEditor=new URLSearchParams(location.search).get('editor')==='lighting';
$('lighting-open').hidden=!lightingEditor;
const scene = new THREE.Scene(); scene.background = new THREE.Color('#92968d'); scene.fog = new THREE.Fog('#92968d', 24, 62);
const graphics=graphicsQuality(new URLSearchParams(location.search).get('quality'),innerWidth,devicePixelRatio);
const lowQuality=graphics.lowQuality;
const resolution=new AdaptiveResolution(graphics.pixelRatio);
const renderer = new THREE.WebGLRenderer({ canvas: $('game'), antialias: !lowQuality, powerPreference:'high-performance' });
renderer.setPixelRatio(graphics.pixelRatio); renderer.shadowMap.enabled = !lowQuality;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.shadowMap.autoUpdate=true;renderer.shadowMap.needsUpdate=true; renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.08;
const camera = new THREE.PerspectiveCamera(40, 1, .1, 100);
const dof=new DepthOfField(renderer,{lowQuality,samples:graphics.samples,enabled:new URLSearchParams(location.search).get('dof')==='on'});
const dofFocus=new THREE.Vector3();
const cameraRig=new GameCamera(camera,{reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches});
try{const preference=localStorage.getItem('bomzh:camera-shake:v1');if(preference==='on'||preference==='off')cameraRig.setShakeEnabled(preference==='on');}catch{}
$('camera-shake').checked=cameraRig.isShakeEnabled();$('camera-shake').onchange=e=>{cameraRig.setShakeEnabled(e.target.checked);try{localStorage.setItem('bomzh:camera-shake:v1',e.target.checked?'on':'off');}catch{}};
const ambient=new THREE.HemisphereLight('#e1e4e2', '#696a67', 2.6);scene.add(ambient);
const sun = new THREE.DirectionalLight('#f1e8df', 2.2); sun.position.set(-8,14,6); sun.castShadow=true;
sun.shadow.mapSize.set(graphics.shadowSize,graphics.shadowSize); Object.assign(sun.shadow.camera,{left:-18,right:18,top:14,bottom:-14,far:45}); sun.shadow.bias=-.001;sun.shadow.normalBias=.025;sun.shadow.radius=3;scene.add(sun,sun.target);
const lighting=new LightingSettings({scene,renderer,sun,ambient,lowQuality});
if(new URLSearchParams(location.search).get('lighting')==='reference')lighting.reset();
const mat=color=>new THREE.MeshStandardMaterial({color,roughness:.92});
const contactShadows=new ContactShadows(scene);
const sprayEffect=new SprayEffect(scene);
const burpEffect=new BurpEffect(scene);
const street=new Street(scene,{textured:false});street.update(-8);
const state={health:100,bottles:0,score:0,defeated:0,bruisersDefeated:0,over:false};
const player={x:-8,z:.5,facing:1,heading:Math.PI/2,attack:null,attackTime:0,cooldowns:{jab:0,kick:0,spray:0,burp:0},queuedAttack:null,stun:0,combo:0,lastJab:-10,invulnerable:0,stamina:100,regenDelay:0,dodge:0,dodgeCooldown:0,dashX:1,dashZ:0};
const wallet=new Wallet();wallet.beginRun(globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`);
let cosmetics=null,shopOpen=false,shopWasPaused=false,rewardBusy=false;
const encounters=new Encounters();let spawnEncounterEnemy=null;
let cinematic=null,superPower=0,returnWall=-8;
let paused=false,best=readRecord();const pendingSpawns=[],spawnAudit=[];
const enemies=[];const keys=new Set();let frames=0;let time=0,toastUntil=0,audio=null,sound=false,ready=false;
function toast(text){$('toast').textContent=text;toastUntil=time+2;}
function tone(frequency=400){if(!sound)return;audio??=new AudioContext();audio.resume();const osc=audio.createOscillator(),gain=audio.createGain();osc.type='triangle';osc.frequency.setValueAtTime(frequency,audio.currentTime);gain.gain.setValueAtTime(.05,audio.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.12);osc.connect(gain);gain.connect(audio.destination);osc.start();osc.stop(audio.currentTime+.13);}
$('sound').onclick=()=>{sound=!sound;$('sound').textContent='Звук: '+(sound?'вкл.':'выкл.');tone();};
function updateHUD(){best=saveRecord({levels:encounters.index,score:state.score});$('health').textContent=Math.ceil(state.health);$('level').textContent=encounters.index+1;$('score').textContent=state.score;$('best').textContent=best.levels;updateWalletUI();}
function updateWalletUI(){
 $('wallet').textContent=wallet.profile.coins;$('shop-open').disabled=!ready||!!cinematic;
 $('shop-coins').textContent=wallet.profile.coins;$('storage-hint').hidden=wallet.persistent;
 if(state.over)renderEnding();
}
function renderEnding(){
 const r=wallet.run;
 $('run-coins').textContent=`Монеты за забег: ${r.earned}${r.doubled?' + '+r.earned+' бонус':''} · В кошельке: ${wallet.profile.coins}`;
 $('revive').hidden=r.revived||r.closed;$('revive').disabled=rewardBusy;
 $('double-coins').hidden=r.doubled;$('double-coins').disabled=rewardBusy||r.earned===0;
 $('reward-note').textContent=r.doubled?'Монеты удвоены. Можно начать новый забег.':'Второй шанс: 60 здоровья и 3 секунды защиты. Бонусы бесплатные в тестовой версии. Удвоение завершает забег.';
 $('restart').disabled=rewardBusy;$('ending-shop').disabled=rewardBusy;
}
function finish(){state.over=true;keys.clear();updateHUD();$('ending').hidden=false;$('ending-title').textContent='Забег окончен';$('ending-text').textContent=`Пройдено участков: ${encounters.index}. Очки: ${state.score}. Побеждено: ${state.defeated}. Рекорд: ${best.levels} участков.`;$('reward-status').textContent='';renderEnding();}
function renderShop(){
 const container=$('shop-items');container.replaceChildren();
 for(const item of catalog){
  const owned=wallet.profile.owned.includes(item.id),selected=wallet.profile.equipped===item.id;
  const card=document.createElement('article');card.className='shop-item'+(selected?' selected':'');
  card.innerHTML=`<span class="shop-icon" aria-hidden="true">${item.icon}</span><div><h3>${item.name}</h3><p>${item.description}</p></div>`;
  const button=document.createElement('button');button.dataset.cosmetic=item.id;button.textContent=selected?'Надето':owned?'Надеть':`${item.price} 🪙 · Купить`;button.disabled=selected||(!owned&&wallet.profile.coins<item.price);
  button.onclick=()=>{const ok=owned?wallet.equip(item.id):wallet.buy(item.id).ok;if(ok){cosmetics?.set(wallet.profile.equipped);$('shop-status').textContent=owned?'Образ надет.':'Куплено и надето!';updateWalletUI();renderShop();}};
  card.append(button);container.append(card);
 }
}
function openShop(){if(!ready||cinematic||rewardBusy||shopOpen||lightingPanel.isOpen())return;shopWasPaused=paused;shopOpen=true;paused=true;keys.clear();$('pause-menu').hidden=true;$('shop').hidden=false;$('shop-status').textContent='';updateWalletUI();renderShop();$('shop-close').focus();}
function closeShop(){shopOpen=false;paused=shopWasPaused;$('shop').hidden=true;$('pause-menu').hidden=!paused;if(!state.over)$('shop-open').focus();}
$('shop-open').onclick=openShop;$('ending-shop').onclick=openShop;$('shop-close').onclick=closeShop;
async function claimBonus(kind){
 if(!state.over||rewardBusy||shopOpen)return;
 const r=wallet.run;if(kind==='revive'&&(r.revived||r.closed)||kind==='double'&&(r.doubled||r.earned===0))return;
 rewardBusy=true;renderEnding();$('reward-status').textContent='Получаем бонус…';
 const completed=await requestReward(rewardProvider,kind,r.id);
 if(completed&&state.over&&wallet.claim(kind,r.id)){
  if(kind==='revive'){
   state.over=false;state.health=60;player.stamina=100;player.stun=0;player.hurt=0;player.attack=null;player.queuedAttack=null;player.dodge=0;player.combo=0;player.invulnerable=3;keys.clear();hitStop=0;
   for(const e of enemies){e.windup=0;e.strike=0;e.cooldown=Math.max(1.5,e.cooldown);e.stun=Math.max(1,e.stun);e.warning.visible=false;}
   $('ending').hidden=true;toast('Второй шанс! 3 секунды защиты');
  }else $('reward-status').textContent='Монеты удвоены!';
 }else $('reward-status').textContent='Бонус не получен. Можно попробовать ещё раз.';
 rewardBusy=false;updateHUD();
}
$('revive').onclick=()=>claimBonus('revive');$('double-coins').onclick=()=>claimBonus('double');
$('restart').onclick=()=>location.reload();
function togglePause(){if(lightingPanel.isOpen()){lightingPanel.hide();return;}if(!ready||state.over||shopOpen)return;paused=!paused;keys.clear();$('pause-menu').hidden=!paused;if(paused)$('resume').focus();}
const lightingPanel=mountLightingPanel(lighting,{open:()=>{if(!lightingEditor||!paused||shopOpen)return false;keys.clear();$('pause-menu').hidden=true;},close:()=>{$('pause-menu').hidden=false;$('lighting-open').focus();}});
$('pause').onclick=togglePause;$('resume').onclick=togglePause;
function attack(kind){
 if(kind==='kick')return;
 if(!ready||state.over||paused||cinematic||player.stun>0||player.dodge>0)return;
 if(player.attack){if(player.attackTime/(player.attackSpec??attacks[player.attack]).duration>.15)player.queuedAttack={kind,until:time+(player.attackSpec??attacks[player.attack]).duration-player.attackTime+.2};return;}
 if(player.cooldowns[kind]>0)return;
 if(!spendStamina(player,kind)){toast('Передохни или продолжай кулаками — они не тратят силы');return;}
 if(kind==='jab'){const count=comboClips(player.userActions).length||3;player.combo=time-player.lastJab<(player.attackSpec?.duration??.65)+.65?(player.combo%count)+1:1;player.lastJab=time;}else player.combo=0;
 player.attackSpec=kind==='jab'?{...attacks.jab,...comboSpec(player.userActions,player.combo-1)}:player.userActions?.clips[kind]?{...attacks[kind],duration:player.userActions.clips[kind].duration,clip:kind}:attacks[kind];player.attackSerial=(player.attackSerial??0)+1;
 player.attack=kind;player.attackTime=0;player.cooldowns[kind]=player.attackSpec.cooldown;player.hit=false;player.sprayHits=new Set();
 tone(kind==='burp'?90:kind==='kick'?180:300);
}
function dodge(){if(!ready||state.over||paused||cinematic||player.dodgeCooldown>0||!spendStamina(player,'dodge'))return;let x=Number(keys.has('right'))-Number(keys.has('left')),z=Number(keys.has('down'))-Number(keys.has('up'));const len=Math.hypot(x,z);if(len){x/=len;z/=len;}else{x=player.facing;z=0;}player.dashX=x;player.dashZ=z;player.dodge=.24;player.dodgeCooldown=.85;player.invulnerable=Math.max(player.invulnerable,.3);player.attack=null;player.queuedAttack=null;player.stun=0;player.combo=0;cameraRig.impact(.08);tone(520);}
function awardDefeat(enemy){state.score+=enemy.type==='bruiser'?75:25;state.defeated++;wallet.earn(enemy.type==='bruiser'?8:3);if(enemy.type==='bruiser')state.bruisersDefeated++;}
function superAttack(){
 if(!ready||state.over||paused||cinematic||player.stun>0||player.dodge>0||player.attack)return;
 if(superPower<100){toast('Суперсила копится от попаданий');return;}
 const target=selectFinisherTarget(player,enemies);if(!target){toast('Подойди к противнику ближе');return;}
 superPower=0;player.attack=null;player.queuedAttack=null;keys.clear();
 const {side,endX}=finisherPlacement(player,target,[Math.max(returnWall,encounters.bounds[0]),encounters.bounds[1]]);
 cinematic={target,elapsed:0,hit:false,startX:player.x,startZ:player.z,endX,side};
 player.facing=side;player.heading=side*Math.PI/2;
 for(const e of enemies){if(e!==target)e.root.visible=false;e.warning.visible=false;e.bar.visible=false;e.badge.visible=false;}
 document.body.classList.add('finishing');$('cinema').querySelector('span').textContent='РЕШАЮЩИЙ УДАР';$('cinema').hidden=false;
}
$('super').onpointerdown=e=>{e.preventDefault();superAttack();};
$('dodge').onpointerdown=e=>{e.preventDefault();dodge();};
for(const b of document.querySelectorAll('[data-attack]'))b.addEventListener('pointerdown',e=>{e.preventDefault();attack(b.dataset.attack);});
for(const b of document.querySelectorAll('[data-move]')){
 const k=b.dataset.move;b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);keys.add(k);});
 for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,()=>keys.delete(k));
}
const keyMap={a:'left',ArrowLeft:'left',d:'right',ArrowRight:'right',w:'up',ArrowUp:'up',s:'down',ArrowDown:'down'};
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&!e.repeat){if(shopOpen)closeShop();else togglePause();return;}if(paused)return;if(keyMap[e.key]){e.preventDefault();keys.add(keyMap[e.key]);}if(!e.repeat){const k=e.key.toLowerCase();if(k==='f')superAttack();if(k==='j')attack('jab');if(k==='l')attack('spray');if(k==='k')attack('burp');if(e.code==='Space'){e.preventDefault();dodge();}}});
window.addEventListener('keyup',e=>keys.delete(keyMap[e.key]));window.addEventListener('blur',()=>keys.clear());document.addEventListener('visibilitychange',()=>{keys.clear();});
function character(template,height){const root=new THREE.Group(),visual=clone(template);visual.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(visual),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());const scale=height/size.y;visual.scale.setScalar(scale);visual.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);root.add(visual);scene.add(root);const bones=[];visual.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}if(o.isBone)bones.push({bone:o,rest:o.rotation.clone()});});const actor={root,visual,bones,height,walkDistance:0,baseVisualY:visual.position.y,shadow:contactShadows.add()};prepareAnimator(actor);return actor;}
const loader=new GLTFLoader();
try{
 const [hero,enemy,actions,environment]=await Promise.all([loader.loadAsync('/models/hobo.glb?v=effectsperf1'),loader.loadAsync('/models/enemy.glb?v=perf1'),fetch('/models/hobo-actions.json?v=effectsperf1').then(r=>{if(!r.ok)throw new Error('Actions unavailable');return r.json();}),loader.loadAsync('/models/street.glb?v=doors1')]);
 extendFrontPaving(environment.scene);setupStreetReflections(environment.scene,renderer,lighting);
 street.setEnvironment(environment.scene);street.update(-8);
 Object.assign(player,character(hero.scene,1.85));attachUserActions(player,actions);cosmetics=new Cosmetics(player);cosmetics.set(wallet.profile.equipped);player.root.rotation.y=Math.PI/2;
 function spawnEnemy(x,z,type,encounter,scaling){
  const base=enemyTypes[type],spec={...base,health:Math.round(base.health*scaling.health),damage:Math.round(base.damage*scaling.damage),speed:base.speed*scaling.speed,windup:base.windup*scaling.windup};const actor=character(enemy.scene,type==='bruiser'?2.2:type==='runner'?1.8:1.95);actor.root.position.set(x,0,z);actor.root.rotation.y=-Math.PI/2;
  const bar=new THREE.Mesh(new THREE.PlaneGeometry(.8,.07),new THREE.MeshBasicMaterial({color:spec.color,side:THREE.DoubleSide}));bar.position.y=2.4;actor.root.add(bar);
  const warning=new THREE.Mesh(new THREE.RingGeometry(spec.range-.08,spec.range,32),new THREE.MeshBasicMaterial({color:type==='bruiser'?'#ec738d':'#f2bb51',transparent:true,opacity:.55,side:THREE.DoubleSide,depthWrite:false}));warning.rotation.x=-Math.PI/2;warning.position.set(x,.015,z);warning.visible=false;scene.add(warning);
  const badge=new THREE.Mesh(new THREE.OctahedronGeometry(type==='bruiser'?.14:.08),mat(spec.color));badge.position.set(-.7,2.7,0);actor.root.add(badge);
  enemies.push({...actor,x,z,type,spec,encounter,entering:true,corpseAge:0,down:0,stun:0,knockback:0,health:spec.health,windup:0,cooldown:1,bar,warning,badge,flash:0,aimX:-1,aimZ:0});
 }
 spawnEncounterEnemy=spawnEnemy;
 ready=true;initTelegram();$('loading').style.display='none';updateHUD();if(lightingEditor){cameraRig.update({player,enemies,time:0,dt:3,width:innerWidth,height:innerHeight});togglePause();$('lighting-open').click();}else toast('Иди вправо. Пройди как можно больше участков!');
}catch(error){console.error(error);$('load-status').textContent='Не удалось загрузить модели. Проверь соединение и обнови страницу.';}
let hitStop=0;
const impacts=[];
function impact(x,z,strength=.18){cameraRig.impact(strength);const mesh=new THREE.Mesh(new THREE.RingGeometry(.1,.22,12),new THREE.MeshBasicMaterial({color:0xffe29a,transparent:true,depthWrite:false,side:THREE.DoubleSide}));mesh.position.set(x,1.1,z);mesh.quaternion.copy(camera.quaternion);scene.add(mesh);impacts.push({mesh,age:0});hitStop=.055;}
const clock=new THREE.Clock();let pendingResolution=null;
function frame(){frames++;requestAnimationFrame(frame);const elapsed=clock.getDelta();const ratio=resolution.sample(elapsed,ready&&!paused&&!document.hidden);if(ratio!==null)pendingResolution=ratio;if(pendingResolution!==null&&ready&&!paused&&!player.moving&&!player.attack&&!cinematic&&keys.size===0){renderer.setPixelRatio(pendingResolution);resize();pendingResolution=null;}const rawDt=Math.min(elapsed,.05);const dt=hitStop>0||paused?0:rawDt;hitStop=Math.max(0,hitStop-rawDt);time+=dt;for(let i=impacts.length-1;i>=0;i--){const e=impacts[i];e.age+=rawDt;e.mesh.scale.setScalar(1+e.age*6);e.mesh.material.opacity=1-e.age/.22;if(e.age>=.22){scene.remove(e.mesh);e.mesh.geometry.dispose();e.mesh.material.dispose();impacts.splice(i,1);}}
 if(ready&&!state.over&&!cinematic){
  if(dt>0)for(let i=pendingSpawns.length-1;i>=0;i--){const item=pendingSpawns[i];item.wait-=dt;if(item.wait<=0){const entry=offscreenSpawn(camera,item.foe.side,item.foe.z);spawnEncounterEnemy(entry.x,entry.z,item.foe.type,item.arena.id,item.arena.scaling);spawnAudit.push({level:item.arena.number,...entry});if(spawnAudit.length>24)spawnAudit.shift();pendingSpawns.splice(i,1);}}

  player.stun=Math.max(0,player.stun-dt);recoverStamina(player,dt);player.dodgeCooldown=Math.max(0,player.dodgeCooldown-dt);player.dodge=Math.max(0,player.dodge-dt);
  for(const k of Object.keys(attacks))player.cooldowns[k]=Math.max(0,player.cooldowns[k]-dt);
  player.invulnerable=Math.max(0,player.invulnerable-dt);player.hurt=Math.max(0,(player.hurt??0)-dt);
  let dx=Number(keys.has('right'))-Number(keys.has('left')),dz=Number(keys.has('down'))-Number(keys.has('up'));const length=Math.hypot(dx,dz);player.moving=length>0;if(length){dx/=length;dz/=length;}
  const oldX=player.x,oldZ=player.z;
  if(player.dodge>0){dx=player.dashX;dz=player.dashZ;}const speed=player.dodge>0?8:player.stun>0?.6:player.attack?.35:(player.walkSpeed??WALK_SPEED);let [left,right]=encounters.bounds;if(encounters.active){const visible=laneBounds(cameraRig.framingCamera,player.z);left=Math.max(left,visible[0]+.9);right=Math.min(right,visible[1]-.9);if(left>right){left=encounters.bounds[0];right=encounters.bounds[1];}}left=Math.max(left,returnWall);player.x=THREE.MathUtils.clamp(player.x+dx*speed*dt,left,right);player.z=THREE.MathUtils.clamp(player.z+dz*speed*dt,-2,2.1);if(length&&!player.attack){player.heading=turnToward(player.heading,directionYaw(dx,dz),dt);if(dx)player.facing=Math.sign(dx);}
  const travelled=Math.hypot(player.x-oldX,player.z-oldZ);player.moving=travelled>1e-5;if(!player.attack&&player.dodge<=0)advanceWalk(player,travelled);
  let progress=0;
  if(player.attack){const spec=player.attackSpec??attacks[player.attack];player.attackTime+=dt;progress=player.attackTime/spec.duration;
   if(progress>=spec.hitAt&&(player.attack==='spray'?progress<=spec.activeUntil:!player.hit)){player.hit=true;let hits=0;for(const enemy of enemies){if(enemy.health>0&&!(player.attack==='spray'&&player.sprayHits.has(enemy))&&canHit(player,enemy,player.attack)){if(player.attack==='spray')player.sprayHits.add(enemy);superPower=chargeSuper(superPower,12);enemy.health-=spec.damage+(player.combo===3?12:0);const finisher=player.combo===3;enemy.knockback=player.facing*(finisher?5:player.attack==='kick'?4:1.4);enemy.flash=.22;impact(enemy.x,enemy.z,finisher?.26:player.attack==='kick'?.24:player.attack==='spray'?.1:.18);if(enemy.type!=='bruiser'||player.attack!=='jab'){enemy.windup=0;enemy.strike=0;enemy.cooldown=.4;enemy.stun=player.attack==='jab'?.22:player.attack==='spray'?.7:.4;if(finisher){enemy.down=1.25;enemy.stun=0;}}hits++;if(enemy.health<=0){awardDefeat(enemy);superPower=chargeSuper(superPower,18);toast('Противник побеждён');}}}if(hits){tone(110);if(player.combo===3)toast('Комбо! Третий удар сильнее');updateHUD();}}
   if(progress>=1){player.cooldowns[player.attack]=Math.max(0,player.cooldowns[player.attack]-1e-6);player.attack=null;if(player.queuedAttack){const queued=player.queuedAttack;player.queuedAttack=null;if(queued.until>=time){attack(queued.kind);progress=0;}}}
  }
  player.root.position.set(player.x,0,player.z);player.root.rotation.y=player.heading+sampleMotion(time,player.moving,player.attack,progress,player.combo).spin;pose(player,time,player.moving,player.attack,progress);
  for(const enemy of enemies){
   if(enemy.health<=0){enemy.corpseAge+=dt;enemy.root.rotation.z=THREE.MathUtils.damp(enemy.root.rotation.z,-(enemy.fallSide??1)*Math.PI/2,5,dt);enemy.root.position.y=THREE.MathUtils.damp(enemy.root.position.y,.2,5,dt);enemy.bar.visible=false;enemy.badge.visible=false;enemy.warning.visible=false;pose(enemy,time,false,null,0);continue;}
   if(enemy.entering){const mx=player.x-enemy.x,mz=player.z-enemy.z,distance=Math.hypot(mx,mz),speed=Math.max(3.8,enemy.spec.speed*1.65);if(distance>.1){enemy.x+=mx/distance*dt*speed;enemy.z+=mz/distance*dt*speed;advanceWalk(enemy,speed*dt);}enemy.root.position.set(enemy.x,0,enemy.z);enemy.root.rotation.y=turnToward(enemy.root.rotation.y,directionYaw(mx,mz),dt);pose(enemy,time,true,null,0);if(distance<3.4&&enemy.x>encounters.bounds[0]+.4&&enemy.x<encounters.bounds[1]-.4)enemy.entering=false;continue;}
   const [arenaLeft,arenaRight]=encounters.bounds;enemy.x=THREE.MathUtils.clamp(enemy.x+enemy.knockback*dt,arenaLeft+.3,arenaRight-.3);enemy.knockback*=Math.exp(-8*dt);
   enemy.down=Math.max(0,enemy.down-dt);enemy.stun=Math.max(0,enemy.stun-dt);
   if(enemy.down>0){enemy.windup=0;enemy.strike=0;enemy.warning.visible=false;enemy.bar.visible=false;enemy.badge.visible=false;enemy.root.position.set(enemy.x,.06,enemy.z);enemy.root.rotation.z=THREE.MathUtils.damp(enemy.root.rotation.z,enemy.down>.4?-1.48:0,12,dt);pose(enemy,time,false,null,0);continue;}
   enemy.root.rotation.z=THREE.MathUtils.damp(enemy.root.rotation.z,0,14,dt);enemy.root.position.y=0;enemy.bar.visible=true;enemy.badge.visible=true;
   const distance=Math.hypot(player.x-enemy.x,player.z-enemy.z);enemy.cooldown-=dt;enemy.flash=Math.max(0,enemy.flash-dt);let moving=false;
   if(enemy.stun>0){enemy.windup=0;enemy.strike=0;}
   else if(enemy.strike>0){const before=enemy.strike;enemy.strike=Math.max(0,enemy.strike-dt);if(enemy.type==='runner'){enemy.x=THREE.MathUtils.clamp(enemy.x+enemy.aimX*3*dt,arenaLeft+.3,arenaRight-.3);enemy.z=THREE.MathUtils.clamp(enemy.z+enemy.aimZ*3*dt,-2,2);}if(before>.225&&enemy.strike<=.225&&enemyConnects(enemy,player)){state.health=Math.max(0,state.health-enemy.spec.damage);player.invulnerable=.55;player.hurt=.22;player.stun=.18;player.attack=null;player.queuedAttack=null;player.combo=0;player.regenDelay=1;impact(player.x,player.z,enemy.type==='bruiser'?.3:.22);toast(`${enemy.spec.label}: −${enemy.spec.damage} здоровья`);tone(90);updateHUD();if(!state.health)finish();}}
   else if(enemy.windup>0){enemy.windup=Math.max(0,enemy.windup-dt);if(enemy.windup<=0){enemy.strike=.3;enemy.cooldown=enemy.spec.recovery;}}
   else if(distance<8&&distance>enemy.spec.range*.7){const side=enemies.indexOf(enemy)%2?1:-1;const targetZ=THREE.MathUtils.clamp(player.z+side*.55,-1.9,1.9),mx=player.x-enemy.x,mz=targetZ-enemy.z,dist=Math.hypot(mx,mz);if(dist>.05){enemy.x+=mx/dist*dt*enemy.spec.speed;enemy.z+=mz/dist*dt*enemy.spec.speed;advanceWalk(enemy,enemy.spec.speed*dt);}moving=true;}
   else if(distance<=enemy.spec.range&&enemy.cooldown<=0){enemy.windup=enemy.spec.windup;enemy.aimX=(player.x-enemy.x)/Math.max(distance,.01);enemy.aimZ=(player.z-enemy.z)/Math.max(distance,.01);}
   enemy.warning.visible=enemy.windup>0||enemy.strike>0;enemy.warning.position.set(enemy.x,.015,enemy.z);enemy.warning.material.opacity=enemy.windup>0?.3+.4*(1-enemy.windup/enemy.spec.windup):.7;
   enemy.root.position.set(enemy.x,0,enemy.z);enemy.root.rotation.y=turnToward(enemy.root.rotation.y,directionYaw(player.x-enemy.x,player.z-enemy.z),dt);
   enemy.bar.scale.x=Math.max(0,enemy.health/enemy.spec.health);enemy.bar.quaternion.copy(camera.quaternion);enemy.bar.quaternion.premultiply(enemy.root.quaternion.clone().invert());enemy.bar.material.color.set(enemy.windup>0?'#ffdd66':enemy.spec.color);pose(enemy,time,moving,(enemy.windup>0||enemy.strike>0)?'jab':null,enemy.strike>0?.25+.75*(1-enemy.strike/.3):enemy.windup>0?.25*(1-enemy.windup/enemy.spec.windup):0);
  }
  for(let i=enemies.length-1;i>=0;i--)if(enemies[i].health<=0&&enemies[i].corpseAge>3){const e=enemies[i];scene.remove(e.root,e.warning,e.shadow);for(const mesh of [e.warning,e.bar,e.badge]){mesh.geometry.dispose();mesh.material.dispose();}const skeletons=new Set();e.root.traverse(o=>{if(o.isSkinnedMesh)skeletons.add(o.skeleton);});for(const skeleton of skeletons)skeleton.dispose();enemies.splice(i,1);}
  street.update(player.x);const collected=street.collect(player);if(collected){const before=state.bottles;state.bottles+=collected;wallet.earn(collected*3);state.score+=collected*10;if(Math.floor(state.bottles/5)>Math.floor(before/5))state.health=Math.min(100,state.health+5);tone(650);toast(`+${collected} бутылка · +${collected*10} очков`);updateHUD();}
  const pending=pendingSpawns.map(item=>({encounter:item.arena.id,health:1}));const event=encounters.update(dt,player.x,[...enemies,...pending]);
  if(event?.type==='spawn')for(const foe of event.enemies)pendingSpawns.push({foe,arena:event.arena,wait:foe.delay});
  if(event?.type==='warning')toast(`${event.arena.title} · противники приближаются!`);
  if(event?.type==='clear'){returnWall=Math.max(returnWall,player.x-.25);wallet.earn(15);state.score+=100*event.arena.number;state.health=Math.min(100,state.health+8);player.stamina=100;toast(`Участок ${event.arena.number} пройден · +8 здоровья`);updateHUD();}
  $('danger').hidden=!encounters.active;$('danger').textContent=encounters.active?`${encounters.arena.title} · ${encounters.phase==='incoming'?'Новая волна · '+Math.ceil(encounters.delay):'Осталось: '+enemies.filter(e=>e.encounter===encounters.arena.id&&e.health>0).length}`:'';
  $('go').hidden=encounters.goTime<=0||encounters.active;
  $('stamina').value=player.stamina;$('stamina-value').textContent=Math.floor(player.stamina);$('dodge').disabled=player.dodgeCooldown>0||player.stamina<staminaCosts.dodge;
  $('objective').textContent=`Бутылки: ${state.bottles} · Побеждено: ${state.defeated} · ${encounters.active?'Победи группу':'Двигайся вправо →'}`;
  for(const b of document.querySelectorAll('[data-attack]')){const k=b.dataset.attack;b.disabled=(!player.attack&&player.cooldowns[k]>0)||player.dodge>0||player.stun>0||player.stamina<staminaCosts[k];}
 }
 if(cinematic){
  const c=cinematic,e=c.target;c.elapsed+=paused?0:rawDt*(c.elapsed>=1.3&&c.elapsed<1.5?.3:1);
  const p=finisherPose(c.elapsed);
  player.x=THREE.MathUtils.lerp(c.startX,c.endX,p.approach);player.z=THREE.MathUtils.lerp(c.startZ,e.z,p.approach);
  player.root.position.set(player.x,0,player.z);player.root.rotation.y=player.heading;
  pose(player,time,false,'finisher',Math.min(1,c.elapsed/2.8));
  e.root.rotation.y=-c.side*Math.PI/2;e.root.position.set(e.x+c.side*p.fall*.55,Math.sin(p.fall*Math.PI)*.65,e.z);e.root.rotation.z=-c.side*p.fall*1.5;
  e.flash=p.contact?.18*(1-p.fall):0;pose(e,time,false,null,0);
  if(p.contact&&!c.hit){c.hit=true;e.fallSide=c.side;e.health=0;$('cinema').querySelector('span').textContent='НОКАУТ';e.corpseAge=0;awardDefeat(e);impact(e.x,e.z,.3);tone(75);updateHUD();}
  cameraRig.cinematic(player,e,c.elapsed,paused?0:rawDt,innerWidth,innerHeight);
  if(p.done){e.x=e.root.position.x;e.down=0;e.knockback=0;player.invulnerable=.6;player.attack=null;player.heading=c.side*Math.PI/2;cinematic=null;for(const foe of enemies)foe.root.visible=true;document.body.classList.remove('finishing');$('cinema').hidden=true;toast('Решающий удар!');}
 }
 $('super-meter').value=superPower;$('super-value').textContent=`${Math.floor(superPower)}%`;
 $('super').disabled=superPower<100||!!cinematic||!!player.attack||player.stun>0||player.dodge>0||state.over;
 $('super').classList.toggle('ready',superPower>=100);
 if(time>toastUntil)$('toast').textContent='';
 sprayEffect.update(player,ready&&!state.over&&!cinematic&&player.attack==='spray',time);
 burpEffect.update(player,ready&&!state.over&&!cinematic&&player.attack==='burp');
 $('shop-open').disabled=!ready||!!cinematic;
 cosmetics?.update();if(ready){contactShadows.update(player);for(const e of enemies)contactShadows.update(e);}
 const targetX=ready?player.x:-8;if(!cinematic)cameraRig.update({player:ready?player:{x:-8,z:0,facing:1},enemies,arena:encounters.arena,time,dt:paused?0:rawDt,width:innerWidth,height:innerHeight});
 lighting.follow(targetX);const subject=cinematic?.target;dofFocus.set(subject?(player.x+subject.root.position.x)/2:player.x,1,subject?(player.z+subject.root.position.z)/2:player.z);dof.render(scene,camera,dofFocus,paused?0:rawDt);
}
function resize(){const w=innerWidth,h=innerHeight;renderer.setSize(w,h);dof.resize(w,h);camera.aspect=w/h;camera.fov=w<650?53:40;camera.updateProjectionMatrix();}window.addEventListener('resize',resize);resize();camera.position.set(-6.55,1.8,6.2);frame();
// Read-only diagnostics for smoke tests; no gameplay mutations are exposed.
window.gameDebug=()=>({ready,frames,...state,paused,graphics:{mode:graphics.mode,pixelRatio:renderer.getPixelRatio(),width:renderer.domElement.width,height:renderer.domElement.height,samples:dof.enabled?dof.target.samples:0,triangles:renderer.info.render.triangles,drawCalls:renderer.info.render.calls,frameMs:resolution.averageMs,adaptive:true,pendingPixelRatio:pendingResolution,shadows:{enabled:renderer.shadowMap.enabled,filter:renderer.shadowMap.type===THREE.PCFSoftShadowMap?'soft':'pcf',everyFrame:renderer.shadowMap.autoUpdate,size:sun.shadow.mapSize.x}},depthOfField:{enabled:dof.enabled,focus:dof.focus,maxBlur:dof.maxBlur},lighting:{...lighting.value},environment:street.template?'authored':'procedural',cameraShake:{enabled:cameraRig.isShakeEnabled(),strength:cameraRig.shake},shopOpen,economy:{coins:wallet.profile.coins,owned:[...wallet.profile.owned],equipped:wallet.profile.equipped,run:{...wallet.run},persistent:wallet.persistent,rewardMode:rewardProvider.mode},sprayVisible:sprayEffect.root.visible,sprayGrowth:sprayEffect.growth,sprayOrigin:sprayEffect.root.position.toArray(),burpVisible:burpEffect.root.visible,superPower,returnWall,cinematic:cinematic?{elapsed:cinematic.elapsed,hit:cinematic.hit,target:cinematic.target.type}:null,best:{...best},worldChunks:street.chunks.size,authoredActions:Object.keys(player.userActions?.clips??{}),pendingSpawns:pendingSpawns.length,spawnAudit:spawnAudit.map(a=>({...a})),player:{x:player.x,z:player.z,moving:!!player.moving,motion:player.motionId,attack:player.attack,attackTime:player.attackTime,attackClip:player.attackSpec?.clip,attackSerial:player.attackSerial,stamina:player.stamina,dodge:player.dodge,dodgeCooldown:player.dodgeCooldown,facing:player.facing,heading:player.heading,walkDistance:player.walkDistance,walkStride:player.walkStride,feetY:player.feetY,groundOffset:player.groundOffset,combo:player.combo,stun:player.stun,invulnerable:player.invulnerable,cooldowns:{...player.cooldowns}},enemies:enemies.map(e=>({x:e.x,z:e.z,health:e.health,type:e.type,feetY:e.feetY,windup:e.windup,down:e.down,entering:e.entering,encounter:e.encounter})),encounter:{active:encounters.active,phase:encounters.phase,wave:encounters.wave,index:encounters.index,bounds:encounters.bounds}});


function initTelegram(){const tg=window.Telegram?.WebApp;if(tg){tg.ready();tg.expand();if(tg.isVersionAtLeast?.('7.7'))tg.disableVerticalSwipes?.();}}
window.addEventListener('telegram-ready',()=>{if(ready)initTelegram();});
