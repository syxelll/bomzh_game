import {darkenPaving,detailPaving,addRoadEdgeDust} from './paving.js';
import {detailStreetTrash} from './trash-details.js';
import {HitEffects} from './hit-effects.js';
import {applyPaintedAsphalt,preloadPaintedAsphalt} from './painted-asphalt.js';
import {russianFacades,addRussianDetails} from './russian-neighborhood.js';
import {VirtualJoystick} from './virtual-joystick.js';
import {beginEnemyAttack,enemyAttackPose} from './enemy-animation.js';
import {prepareStreetGround} from './ground-transitions.js';
import {replaceStreetSigns} from './street-signs.js';
import {moveCharacter,bodyRadius} from './character-collisions.js';
import {WindPapers} from './wind-papers.js';
import {CompositingSettings} from './compositing.js';
import {detailAuthoredWindows} from './aged-windows.js';
import {routeStage,exitForClear} from './route.js';
import {COURTYARD_TYPES,COURTYARD_NAMES} from './route.js';
import {createCourtyard} from './courtyards.js';
import {LocationDoor} from './location-door.js';
import {addSurfaceWear} from './surface-wear.js';
import {createEntrance,locationForStage,locationNames,swapLocation} from './entrance.js';
import {LocationLighting,configureEntranceLamps} from './location-lighting.js';
import {startPickup,pickupProgress,DrinkingBottle} from './pickup-animation.js';
import {MainMenu} from './main-menu.js';
import {Appearance,characters} from './appearance.js';
import {Medkits} from './medkits.js';
import {FireBarrels} from './fire-barrels.js';
import {Weapons,weaponTypes,weaponAttack} from './weapons.js';
import {dodgeSpec} from './dodge.js';
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
import {attachUserActions,comboClips,comboSpec,weaponComboClips,weaponComboSpec} from './user-actions.js';
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
const requestedLocation=new URLSearchParams(location.search).get('location');
let startingLocation=requestedLocation==='entrance'?'entrance':'street';
if(!requestedLocation)try{if(localStorage.getItem('bomzh:starting-location')==='entrance')startingLocation='entrance';}catch{}
let currentLocation=startingLocation,streetTemplate=null,courtyardTemplates=[],locationTransition=null,pendingExit=null;
const courtyardPreview=requestedLocation==='courtyard';
const entranceTemplate=createEntrance();addRussianDetails(entranceTemplate,'entrance');addSurfaceWear(entranceTemplate,'entrance');const entranceLampClock=configureEntranceLamps(entranceTemplate);
const lightingEditor=['lighting','compositing'].includes(new URLSearchParams(location.search).get('editor'));
const compositing=new CompositingSettings();
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
const menuBackgroundCamera=camera.clone();
const dof=new DepthOfField(renderer,{grading:compositing,lowQuality,samples:graphics.samples,enabled:new URLSearchParams(location.search).get('dof')==='on'});
const dofFocus=new THREE.Vector3();
const cameraRig=new GameCamera(camera,{reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches});
try{const preference=localStorage.getItem('bomzh:camera-shake:v1');if(preference==='on'||preference==='off')cameraRig.setShakeEnabled(preference==='on');}catch{}
$('camera-shake').checked=cameraRig.isShakeEnabled();$('camera-shake').onchange=e=>{cameraRig.setShakeEnabled(e.target.checked);try{localStorage.setItem('bomzh:camera-shake:v1',e.target.checked?'on':'off');}catch{}};
const ambient=new THREE.HemisphereLight('#e1e4e2', '#696a67', 2.6);scene.add(ambient);
const sun = new THREE.DirectionalLight('#f1e8df', 2.2); sun.position.set(-8,14,6); sun.castShadow=true;
sun.shadow.mapSize.set(graphics.shadowSize,graphics.shadowSize); Object.assign(sun.shadow.camera,{left:-18,right:18,top:14,bottom:-14,far:45}); sun.shadow.bias=-.001;sun.shadow.normalBias=.025;sun.shadow.radius=3;scene.add(sun,sun.target);
const lighting=new LightingSettings({scene,renderer,sun,ambient,lowQuality});
if(new URLSearchParams(location.search).get('lighting')==='reference')lighting.reset();
const locationLighting=new LocationLighting({scene,lighting,sun,ambient,renderer,lampClock:entranceLampClock});
const mat=color=>new THREE.MeshStandardMaterial({color,roughness:.92});
const contactShadows=new ContactShadows(scene);
const sprayEffect=new SprayEffect(scene);
const burpEffect=new BurpEffect(scene);
const locationDoor=new LocationDoor(scene);
const fireBarrels=new FireBarrels(scene);
const windPapers=new WindPapers(scene,{lowQuality});
const medkits=new Medkits(scene);
const weapons=new Weapons(scene);
const street=new Street(scene,{textured:false});street.update(-8);
const drinkingBottle=new DrinkingBottle(scene,street);
const state={health:100,bottles:0,drunkBottles:0,score:0,defeated:0,bruisersDefeated:0,over:false};
const player={x:-8,z:.5,facing:1,heading:Math.PI/2,attack:null,attackTime:0,cooldowns:{jab:0,kick:0,spray:0,burp:0},queuedAttack:null,stun:0,combo:0,lastJab:-10,invulnerable:0,stamina:100,regenDelay:0,dodge:0,dodgeCooldown:0,dashX:1,dashZ:0};
const wallet=new Wallet();wallet.beginRun(globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`);
const appearance=new Appearance();
let mainMenu=null,cosmetics=null,shopOpen=false,shopWasPaused=false,rewardBusy=false;
const encounters=new Encounters();let spawnEncounterEnemy=null;
let cinematic=null,superPower=0,returnWall=-8;
let bottleChoice=null,paused=false,best=readRecord();const pendingSpawns=[],spawnAudit=[];
const enemies=[];const keys=new Set();let frames=0;let time=0,toastUntil=0,audio=null,sound=false,ready=false;
function yardInfo(index){if(courtyardPreview&&index<=0)return {courtyard:true,variant:Math.max(0,COURTYARD_TYPES.indexOf(new URLSearchParams(location.search).get('yard')))};const info=routeStage(index,startingLocation);return currentLocation==='street'&&index>=0&&info.location==='entrance'?{...info,courtyard:true}:info;}
function isCourtyard(x){return currentLocation==='street'&&!!yardInfo(Math.floor(x/26)).courtyard;}
function laneMinimum(x){if(!isCourtyard(x))return -2;const local=((x%26)+26)%26,t=Math.max(0,Math.min(1,(local-4.8)/2,(21.2-local)/2));return -2-1.5*t;}
function moveEnemy(enemy,x,z,walking=false){const distance=moveCharacter(enemy,x,z,[player,...enemies],(x,z)=>{if(!enemy.entering){const [left,right]=encounters.bounds;x=THREE.MathUtils.clamp(x,left+.3,right-.3);}return [x,THREE.MathUtils.clamp(z,laneMinimum(x),2)];});if(walking)advanceWalk(enemy,distance);return distance;}
function updateLocationUI(){const name=currentLocation==='street'&&isCourtyard(player.x)?COURTYARD_NAMES[yardInfo(Math.floor(player.x/26)).variant]:locationNames[currentLocation];$('location-name').textContent=name;document.querySelectorAll('[data-start-location]').forEach(b=>{b.classList.toggle('selected',b.dataset.startLocation===startingLocation);b.setAttribute('aria-pressed',String(b.dataset.startLocation===startingLocation));b.disabled=time>0;});}
function applyLocation(location){currentLocation=location;for(const e of enemies)if(e.health<=0){e.corpseAge=4;e.root.visible=false;e.warning.visible=false;}swapLocation(street,location==='entrance'?entranceTemplate:streetTemplate,player.x);fireBarrels.setVisible(location==='street');updateLocationUI();}
function beginLocationTransition(to){if(to===currentLocation)return;player.heading=Math.PI;player.facing=1;locationTransition={to,elapsed:0,applied:false};keys.clear();$('location-transition').hidden=false;$('transition-title').textContent=locationNames[to];$('transition-subtitle').textContent=to==='entrance'?'С улицы — в подъезд':'Снова на район';}
function updateLocationTransition(dt){if(!locationTransition)return;const t=locationTransition;t.elapsed+=dt;const opacity=Math.min(1,t.elapsed/.22,(.75-t.elapsed)/.28);$('location-transition').style.opacity=Math.max(0,opacity);if(!t.applied&&t.elapsed>=.25){t.applied=true;if(pendingExit){player.x=Math.floor(pendingExit.x/26)*26+(t.to==='entrance'?15.15:23.2);player.z=-1.45;player.heading=Math.PI/2;player.facing=1;returnWall=Math.max(returnWall,player.x-.25);}applyLocation(t.to);pendingExit=null;locationDoor.set(null);}if(t.elapsed>=.75){locationTransition=null;$('location-transition').hidden=true;keys.clear();}}
for(const b of document.querySelectorAll('[data-start-location]'))b.onclick=()=>{if(!ready||time>0)return;startingLocation=b.dataset.startLocation;try{localStorage.setItem('bomzh:starting-location',startingLocation);}catch{}applyLocation(startingLocation);};
function toast(text){$('toast').textContent=text;toastUntil=time+2;}
function tone(frequency=400){if(!sound)return;audio??=new AudioContext();audio.resume();const osc=audio.createOscillator(),gain=audio.createGain();osc.type='triangle';osc.frequency.setValueAtTime(frequency,audio.currentTime);gain.gain.setValueAtTime(.05,audio.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.12);osc.connect(gain);gain.connect(audio.destination);osc.start();osc.stop(audio.currentTime+.13);}
$('sound').onclick=()=>{sound=!sound;$('sound').textContent='Звук: '+(sound?'вкл.':'выкл.');tone();};
function updateHUD(){best=saveRecord({levels:encounters.index,score:state.score});$('health').textContent=Math.ceil(state.health);$('health-bar').value=state.health;$('level').textContent=encounters.index+1;$('score').textContent=state.score;$('best').textContent=best.levels;updateWalletUI();}
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
function togglePause(){if(bottleChoice){closeBottleChoice();return;}if(mainMenu?.visible||locationTransition)return;if(lightingPanel.isOpen()){lightingPanel.hide();return;}if(!ready||state.over||shopOpen)return;paused=!paused;keys.clear();$('pause-menu').hidden=!paused;if(paused)$('resume').focus();}
const lightingPanel=mountLightingPanel(lighting,{open:()=>{if(!lightingEditor||!paused||shopOpen)return false;keys.clear();$('pause-menu').hidden=true;},close:()=>{$('pause-menu').hidden=false;$('lighting-open').focus();}},compositing);
$('back-to-menu').onclick=()=>{$('pause-menu').hidden=true;mainMenu?.show();};$('ending-menu').onclick=()=>mainMenu?.show();
$('pause').onclick=togglePause;$('resume').onclick=togglePause;
function attack(kind){
 if(kind==='kick')return;
 if(!ready||state.over||paused||locationTransition||cinematic||player.stun>0||player.dodge>0||player.pickup)return;
 if(player.attack){if(player.attackTime/(player.attackSpec??attacks[player.attack]).duration>.15)player.queuedAttack={kind,until:time+(player.attackSpec??attacks[player.attack]).duration-player.attackTime+.2};return;}
 if(player.cooldowns[kind]>0)return;
 if(!spendStamina(player,kind)){toast('Передохни или продолжай кулаками — они не тратят силы');return;}
 if(kind==='jab'){const count=(weapons.equipped?weaponComboClips(player.userActions).length:comboClips(player.userActions).length)||3;player.combo=time-player.lastJab<(player.attackSpec?.duration??.65)+.65?(player.combo%count)+1:1;player.lastJab=time;}else player.combo=0;
 player.attackSpec=kind==='jab'?{...attacks.jab,...comboSpec(player.userActions,player.combo-1)}:player.userActions?.clips[kind]?{...attacks[kind],duration:player.userActions.clips[kind].duration,clip:kind}:attacks[kind];if(kind==='jab'&&weapons.equipped){const authored=weaponComboSpec(player.userActions,player.combo-1);if(!authored)player.combo=1;player.attackSpec={...weaponAttack(weapons.equipped.type,attacks.jab),...authored};}player.attackSerial=(player.attackSerial??0)+1;
 player.attack=kind;player.attackTime=0;player.cooldowns[kind]=player.attackSpec.cooldown;player.hit=false;player.sprayHits=new Set();
 tone(kind==='burp'?90:kind==='kick'?180:300);
}
function dodge(){if(!ready||state.over||paused||locationTransition||cinematic||player.dodge>0||player.dodgeCooldown>0||player.pickup||!spendStamina(player,'dodge'))return;let x=Number(keys.has('right'))-Number(keys.has('left')),z=Number(keys.has('down'))-Number(keys.has('up'));const len=Math.hypot(x,z);if(len){x/=len;z/=len;}else{x=Math.sin(player.heading);z=Math.cos(player.heading);}const spec=dodgeSpec(player.userActions);player.dashX=x;player.dashZ=z;player.heading=directionYaw(x,z);if(Math.abs(x)>.01)player.facing=Math.sign(x);player.dodgeDuration=spec.duration;player.dodgeSpeed=spec.speed;player.dodge=spec.duration;player.dodgeCooldown=spec.cooldown;player.invulnerable=Math.max(player.invulnerable,spec.invulnerability);player.hurt=0;player.attack=null;player.queuedAttack=null;player.stun=0;player.combo=0;cameraRig.impact(.08);tone(520);}
function awardDefeat(enemy){state.score+=enemy.type==='bruiser'?75:25;state.defeated++;wallet.earn(enemy.type==='bruiser'?8:3);if(enemy.type==='bruiser')state.bruisersDefeated++;}
function superAttack(){
 if(!ready||state.over||paused||locationTransition||cinematic||player.stun>0||player.dodge>0||player.attack||player.pickup)return;
 if(superPower<100){toast('Суперсила копится от попаданий');return;}
 const target=selectFinisherTarget(player,enemies);if(!target){toast('Подойди к противнику ближе');return;}
 superPower=0;player.attack=null;player.queuedAttack=null;keys.clear();
 const {side,endX}=finisherPlacement(player,target,[Math.max(returnWall,encounters.bounds[0]),encounters.bounds[1]]);
 cinematic={target,elapsed:0,hit:false,startX:player.x,startZ:player.z,endX,side};
 player.facing=side;player.heading=side*Math.PI/2;
 for(const e of enemies){if(e!==target)e.root.visible=false;e.warning.visible=false;e.bar.visible=false;e.badge.visible=false;}
 document.body.classList.add('finishing');$('cinema').querySelector('span').textContent='РЕШАЮЩИЙ УДАР';$('cinema').hidden=false;
}
function nearestPickup(){const bottle=street.nearestBottle(player),weapon=weapons.nearby;if(bottle&&(!weapon||Math.hypot(bottle.x-player.x,bottle.z-player.z)<=Math.hypot(weapon.x-player.x,weapon.z-player.z)))return {kind:'bottle',item:bottle};return weapon?{kind:'weapon',item:weapon}:null;}
function pickupWeapon(){if(!ready||paused||locationTransition||state.over||cinematic||player.attack||player.pickup||player.dodge>0||player.stun>0)return;if(pendingExit&&locationDoor.near(player)){beginLocationTransition(pendingExit.to);return;}const nearest=nearestPickup();if(!nearest)return;const item=nearest.item;
 if(nearest.kind==='bottle'){bottleChoice=item;paused=true;keys.clear();$('bottle-choice').hidden=false;$('bottle-drink').focus();return;}
 if(startPickup(player,'weapon_pickup',item)){const dx=item.x-player.x,dz=item.z-player.z;player.heading=directionYaw(dx,dz);if(Math.abs(dx)>.01)player.facing=Math.sign(dx);keys.clear();return;}const name=weapons.pickup(item);if(name){player.combo=0;player.lastJab=-10;toast(`${name} в руках · J — удар`);tone(480);}}

function closeBottleChoice(){bottleChoice=null;paused=false;keys.clear();$('bottle-choice').hidden=true;}
function finishBottleDrink(){state.drunkBottles++;superPower=chargeSuper(superPower,20);if(state.drunkBottles%5===0)state.health=Math.min(100,state.health+5);toast('Глоток кваса · +20% суперсилы');tone(650);updateHUD();}
function chooseBottle(mode){const item=bottleChoice;if(!item)return;closeBottleChoice();if(!street.takeBottle(player,item))return;state.bottles++;wallet.earn(3);state.score+=10;player.combo=0;player.lastJab=-10;const kind=mode==='smash'?'bottle_smash':'bottle_pickup';if(!startPickup(player,kind,1))finishBottleDrink();updateHUD();}
$('bottle-drink').onclick=()=>chooseBottle('drink');$('bottle-smash').onclick=()=>chooseBottle('smash');$('bottle-cancel').onclick=closeBottleChoice;
$('bottle-choice').onclick=e=>{if(e.target===$('bottle-choice'))closeBottleChoice();};
$('weapon-pickup').onpointerdown=e=>{e.preventDefault();pickupWeapon();};
$('super').onpointerdown=e=>{e.preventDefault();superAttack();};
$('dodge').onpointerdown=e=>{e.preventDefault();dodge();};
for(const b of document.querySelectorAll('[data-attack]'))b.addEventListener('pointerdown',e=>{e.preventDefault();attack(b.dataset.attack);});
const joystick=new VirtualJoystick($('joystick'),()=>ready&&!paused&&!locationTransition&&!mainMenu?.visible&&!state.over);
const keyMap={A:'left',D:'right',W:'up',S:'down',a:'left',ArrowLeft:'left',d:'right',ArrowRight:'right',w:'up',ArrowUp:'up',s:'down',ArrowDown:'down'};
window.addEventListener('keydown',e=>{if(bottleChoice){if(e.key==='Escape'){e.preventDefault();closeBottleChoice();}else if(!e.repeat&&(e.code==='Digit1'||e.code==='Digit2')){e.preventDefault();chooseBottle(e.code==='Digit1'?'drink':'smash');}else if(e.key==='Tab'){const buttons=[$('bottle-drink'),$('bottle-smash'),$('bottle-cancel')],i=buttons.indexOf(document.activeElement);e.preventDefault();buttons[(i+(e.shiftKey?2:1)+3)%3].focus();}return;}if(e.key==='Escape'&&!e.repeat){if(shopOpen)closeShop();else togglePause();return;}if(paused||locationTransition)return;if(e.key==='Shift')keys.add('slow');if(keyMap[e.key]){e.preventDefault();keys.add(keyMap[e.key]);}if(!e.repeat){const k=e.key.toLowerCase();if(k==='e'||e.code==='KeyE'){e.preventDefault();pickupWeapon();}if(k==='f')superAttack();if(k==='j')attack('jab');if(k==='l')attack('spray');if(k==='k')attack('burp');if(e.code==='Space'){e.preventDefault();dodge();}}});
window.addEventListener('keyup',e=>keys.delete(e.key==='Shift'?'slow':keyMap[e.key]));window.addEventListener('blur',()=>keys.clear());document.addEventListener('visibilitychange',()=>{keys.clear();});
function character(template,height){const root=new THREE.Group(),visual=clone(template);visual.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(visual),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());const scale=height/size.y;visual.scale.setScalar(scale);visual.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);root.add(visual);scene.add(root);const bones=[];visual.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}if(o.isBone)bones.push({bone:o,rest:o.rotation.clone()});});const actor={root,visual,bones,height,walkDistance:0,baseVisualY:visual.position.y,shadow:contactShadows.add()};prepareAnimator(actor);return actor;}
const loader=new GLTFLoader();
try{
 const [hero,enemy,actions,environment,enemyActions]=await Promise.all([loader.loadAsync('/models/hobo.glb?v=oct29'),loader.loadAsync('/models/enemy.glb?v=perf1'),fetch('/models/hobo-actions.json?v=run1').then(r=>{if(!r.ok)throw new Error('Actions unavailable');return r.json();}),loader.loadAsync('/models/street.glb?v=bench1'),fetch('/models/enemy-actions.json?v=run1').then(r=>{if(!r.ok)throw new Error('Enemy actions unavailable');return r.json();}),preloadPaintedAsphalt()]);
 environment.scene.traverse(o=>{if(o.isMesh&&(/graffiti/i.test(o.name)||/graffiti/i.test(o.material?.name??'')))o.visible=false;});prepareStreetGround(environment.scene);applyPaintedAsphalt(environment.scene);darkenPaving(environment.scene);extendFrontPaving(environment.scene);detailAuthoredWindows(environment.scene);replaceStreetSigns(environment.scene);russianFacades(environment.scene);addRussianDetails(environment.scene,'street');detailStreetTrash(environment.scene);detailPaving(environment.scene);addRoadEdgeDust(environment.scene);addSurfaceWear(environment.scene,'street');
 streetTemplate=environment.scene;courtyardTemplates=COURTYARD_TYPES.map((_,v)=>{const root=createCourtyard(streetTemplate,v);applyPaintedAsphalt(root);darkenPaving(root);addRussianDetails(root,'courtyard',v);detailPaving(root);addRoadEdgeDust(root,true);addSurfaceWear(root,'street');return root;});setupStreetReflections(environment.scene,renderer,lighting,courtyardTemplates);street.templateForChunk=index=>{if(currentLocation==='entrance')return entranceTemplate;const info=yardInfo(index);return info.courtyard?courtyardTemplates[info.variant]:streetTemplate;};street.setEnvironment(currentLocation==='entrance'?entranceTemplate:streetTemplate);street.update(-8);fireBarrels.setVisible(currentLocation==='street');updateLocationUI();
 function makeActor(c){const actor=character(c.model==='hero'?hero.scene:enemy.scene,c.height);attachUserActions(actor,c.model==='hero'?actions:enemyActions);return actor;}
 function discardActor(actor){scene.remove(actor.root,actor.shadow);const skeletons=new Set();actor.visual.traverse(o=>{if(o.isSkinnedMesh)skeletons.add(o.skeleton);if(o.isMesh&&o.userData.wardrobeMaterials)for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();});for(const skeleton of skeletons)skeleton.dispose();}
 let actorKeys=[];
 function equipCharacter(){if(player.visual){cosmetics?.set('classic');discardActor(player);for(const key of [...actorKeys,'userActions','userBoneIndices','walkSpeed','walkStride','runSpeed','runStride','closedLoops','referenceFingers','referenceFingersByClip','poseHierarchy','bindByName','lastMotion','transitionFrom','motionId','transitionStart','weaponReferenceRotation'])delete player[key];}const actor=makeActor(characters.find(c=>c.id===appearance.character));actorKeys=Object.keys(actor);Object.assign(player,actor);weapons.hand=null;weapons.palmOffset=null;appearance.apply(player);cosmetics=new Cosmetics(player);cosmetics.set(wallet.profile.equipped);player.root.position.set(player.x,0,player.z);player.root.rotation.y=player.heading;pose(player,time,false,null,0);}
 equipCharacter();
 mainMenu=new MainMenu({renderer,wallet,appearance,makeActor:c=>{const actor=makeActor(c);scene.remove(actor.root,actor.shadow);return actor;},record:()=>best,onOpen:()=>{updateLocationUI();paused=true;keys.clear();$('pause-menu').hidden=true;$('ending').hidden=true;$('menu-play').querySelector('span').textContent=state.over?'Новый забег':time>0?'Продолжить':'Начать забег';},onStart:()=>{if(state.over){sessionStorage.setItem('bomzh:start-now','1');location.reload();return;}equipCharacter();paused=false;$('pause-menu').hidden=true;updateHUD();}});

 function spawnEnemy(x,z,type,encounter,scaling){
  const base=enemyTypes[type],spec={...base,health:Math.round(base.health*scaling.health),damage:Math.round(base.damage*scaling.damage),speed:base.speed*scaling.speed,windup:base.windup*scaling.windup};const actor=character(enemy.scene,type==='bruiser'?2.2:type==='runner'?1.8:1.95);attachUserActions(actor,enemyActions);actor.root.position.set(x,0,z);actor.root.rotation.y=-Math.PI/2;
  const bar=new THREE.Mesh(new THREE.PlaneGeometry(.8,.07),new THREE.MeshBasicMaterial({color:spec.color,side:THREE.DoubleSide}));bar.position.y=2.4;actor.root.add(bar);
  const warning=new THREE.Mesh(new THREE.RingGeometry(spec.range-.08,spec.range,32),new THREE.MeshBasicMaterial({color:type==='bruiser'?'#ec738d':'#f2bb51',transparent:true,opacity:.55,side:THREE.DoubleSide,depthWrite:false}));warning.rotation.x=-Math.PI/2;warning.position.set(x,.015,z);warning.visible=false;scene.add(warning);
  const badge=new THREE.Mesh(new THREE.OctahedronGeometry(type==='bruiser'?.14:.08),mat(spec.color));badge.position.set(-.7,2.7,0);actor.root.add(badge);
  enemies.push({...actor,x,z,type,spec,encounter,entering:true,corpseAge:0,down:0,stun:0,knockback:0,health:spec.health,windup:0,cooldown:1,bar,warning,badge,flash:0,aimX:-1,aimZ:0});
 }
 spawnEncounterEnemy=spawnEnemy;
 ready=true;initTelegram();$('loading').style.display='none';updateHUD();if(lightingEditor){cameraRig.update({player,enemies,time:0,dt:3,width:innerWidth,height:innerHeight});togglePause();$('lighting-open').click();}else {cameraRig.update({player,enemies,time:0,dt:3,width:innerWidth,height:innerHeight});mainMenu.show();if(sessionStorage.getItem('bomzh:start-now')==='1'){sessionStorage.removeItem('bomzh:start-now');$('menu-play').click();}}
}catch(error){console.error(error);$('load-status').textContent='Не удалось загрузить модели. Проверь соединение и обнови страницу.';}
let hitStop=0;
const hitEffects=new HitEffects(scene);
function impact(x,z,strength=.18,kind='jab'){cameraRig.impact(strength);hitEffects.emit(x,z,strength,kind,camera);hitStop=.055;}
const clock=new THREE.Clock();let pendingResolution=null;
function frame(){if(paused||locationTransition||state.over||cinematic)joystick.reset();frames++;requestAnimationFrame(frame);const elapsed=clock.getDelta();const ratio=resolution.sample(elapsed,ready&&!paused&&!document.hidden);if(ratio!==null)pendingResolution=ratio;if(pendingResolution!==null&&ready&&!paused&&!player.moving&&!player.attack&&!player.pickup&&!cinematic&&keys.size===0){renderer.setPixelRatio(pendingResolution);resize();pendingResolution=null;}const rawDt=Math.min(elapsed,.05);updateLocationTransition(paused?0:rawDt);const dt=hitStop>0||paused||locationTransition?0:rawDt;hitStop=Math.max(0,hitStop-rawDt);time+=dt;hitEffects.update(paused?0:rawDt);
 if(ready&&!state.over&&!cinematic&&!mainMenu?.visible){
  if(dt>0)for(let i=pendingSpawns.length-1;i>=0;i--){const item=pendingSpawns[i];item.wait-=dt;if(item.wait<=0){const entry=offscreenSpawn(camera,item.foe.side,item.foe.z);spawnEncounterEnemy(entry.x,entry.z,item.foe.type,item.arena.id,item.arena.scaling);spawnAudit.push({level:item.arena.number,...entry});if(spawnAudit.length>24)spawnAudit.shift();pendingSpawns.splice(i,1);}}

  if(player.pickup){const pickup=player.pickup;pickup.elapsed+=dt;const p=pickupProgress(player);if(!pickup.applied&&p>=.55){pickup.applied=true;if(pickup.kind==='weapon_pickup'){const name=weapons.pickup(pickup.payload);if(name){player.combo=0;player.lastJab=-10;toast(`${name} в руках · J — комбо`);tone(480);}}else if(pickup.kind==='bottle_smash'){weapons.equip('bottle');player.combo=0;player.lastJab=-10;cameraRig.impact(.1);tone(180);toast('Розочка в руке · J — удар');updateHUD();}else finishBottleDrink();}if(p>=1)player.pickup=null;}
  player.stun=Math.max(0,player.stun-dt);recoverStamina(player,dt);player.dodgeCooldown=Math.max(0,player.dodgeCooldown-dt);const dodgeStep=Math.min(player.dodge,dt);player.dodge=Math.max(0,player.dodge-dt);const dodging=player.dodge>0||dodgeStep>0;
  for(const k of Object.keys(attacks))player.cooldowns[k]=Math.max(0,player.cooldowns[k]-dt);
  player.invulnerable=Math.max(0,player.invulnerable-dt);player.hurt=Math.max(0,(player.hurt??0)-dt);
  let dx=Number(keys.has('right'))-Number(keys.has('left'))+joystick.x,dz=Number(keys.has('down'))-Number(keys.has('up'))+joystick.y;const length=Math.hypot(dx,dz);player.moving=length>0;if(length){dx/=length;dz/=length;}
  const analog=keys.has('left')||keys.has('right')||keys.has('up')||keys.has('down')?1:Math.min(1,length);player.locomotion=keys.has('slow')||(joystick.active&&analog<.65)?'walk':'run';const gaitSpeed=player.locomotion==='run'?(player.runSpeed??(player.walkSpeed??WALK_SPEED)*1.6):(player.walkSpeed??WALK_SPEED);const oldX=player.x,oldZ=player.z;
  if(dodging){dx=player.dashX;dz=player.dashZ;}const movementDt=dodging?dodgeStep:dt,speed=player.pickup?0:dodging?(player.dodgeSpeed??8):player.stun>0?.6:player.attack?.35:gaitSpeed*analog;let [left,right]=encounters.bounds;if(encounters.active){const visible=laneBounds(cameraRig.framingCamera,player.z);left=Math.max(left,visible[0]+.9);right=Math.min(right,visible[1]-.9);if(left>right){left=encounters.bounds[0];right=encounters.bounds[1];}}if(pendingExit)right=Math.min(right,pendingExit.x+.8);left=Math.max(left,returnWall);moveCharacter(player,player.x+dx*speed*movementDt,player.z+dz*speed*movementDt,enemies,(x,z)=>{x=THREE.MathUtils.clamp(x,left,right);return [x,THREE.MathUtils.clamp(z,laneMinimum(x),2.1)];});if(length&&!player.attack&&!player.pickup){player.heading=turnToward(player.heading,directionYaw(dx,dz),dt);if(dx)player.facing=Math.sign(dx);}
  const travelled=Math.hypot(player.x-oldX,player.z-oldZ);player.moving=travelled>1e-5;if(!player.attack&&!dodging)advanceWalk(player,travelled);
  let progress=0;
  if(player.attack){const spec=player.attackSpec??attacks[player.attack];player.attackTime+=dt;progress=player.attackTime/spec.duration;
   if(progress>=spec.hitAt&&(player.attack==='spray'?progress<=spec.activeUntil:!player.hit)){player.hit=true;let hits=0;for(const enemy of enemies){if(enemy.health>0&&!(player.attack==='spray'&&player.sprayHits.has(enemy))&&canHit(player,enemy,player.attack)){if(player.attack==='spray')player.sprayHits.add(enemy);superPower=chargeSuper(superPower,12);enemy.health-=spec.damage+(player.combo===3?12:0);const finisher=player.combo===3;enemy.knockback=player.facing*(finisher?5:player.attack==='kick'?4:1.4);enemy.flash=.22;impact(enemy.x,enemy.z,finisher?.26:player.attack==='kick'?.24:player.attack==='spray'?.1:.18,player.attack);if(enemy.type!=='bruiser'||player.attack!=='jab'){enemy.windup=0;enemy.strike=0;enemy.cooldown=.4;enemy.stun=player.attack==='jab'?.22:player.attack==='spray'?.7:.4;if(finisher){enemy.down=1.25;enemy.stun=0;}}hits++;if(enemy.health<=0){awardDefeat(enemy);superPower=chargeSuper(superPower,18);toast('Противник побеждён');}}}if(hits){if(spec.weapon&&weapons.wear())toast('Оружие сломалось — продолжай кулаками');tone(110);if(player.combo===3)toast('Комбо! Третий удар сильнее');updateHUD();}}
   if(progress>=1){player.cooldowns[player.attack]=Math.max(0,player.cooldowns[player.attack]-1e-6);player.attack=null;if(player.queuedAttack){const queued=player.queuedAttack;player.queuedAttack=null;if(queued.until>=time){attack(queued.kind);progress=0;}}}
  }
  const walkPose=player.moving&&(!dodging||length>0);player.root.position.set(player.x,0,player.z);player.root.rotation.y=player.heading+sampleMotion(time,walkPose,player.attack,progress,player.combo).spin;player.weaponType=weapons.equipped?.type??(player.attack?player.attackSpec?.weapon:null);player.animationTime=time;pose(player,time,walkPose,player.pickup?.kind??player.attack,player.pickup?pickupProgress(player):progress);
  for(const enemy of enemies){
   if(enemy.health<=0){enemy.corpseAge+=dt;enemy.root.rotation.z=THREE.MathUtils.damp(enemy.root.rotation.z,-(enemy.fallSide??1)*Math.PI/2,5,dt);enemy.root.position.y=THREE.MathUtils.damp(enemy.root.position.y,.2,5,dt);enemy.bar.visible=false;enemy.badge.visible=false;enemy.warning.visible=false;pose(enemy,time,false,null,0);continue;}
   if(enemy.entering){const mx=player.x-enemy.x,mz=player.z-enemy.z,distance=Math.hypot(mx,mz),speed=Math.max(3.8,enemy.spec.speed*1.65);if(distance>.1){moveEnemy(enemy,enemy.x+mx/distance*dt*speed,enemy.z+mz/distance*dt*speed,true);}enemy.root.position.set(enemy.x,0,enemy.z);enemy.root.rotation.y=turnToward(enemy.root.rotation.y,directionYaw(mx,mz),dt);pose(enemy,time,true,null,0);if(distance<3.4&&enemy.x>encounters.bounds[0]+.4&&enemy.x<encounters.bounds[1]-.4)enemy.entering=false;continue;}
   const [arenaLeft,arenaRight]=encounters.bounds;moveEnemy(enemy,enemy.x+enemy.knockback*dt,enemy.z);enemy.knockback*=Math.exp(-8*dt);
   enemy.down=Math.max(0,enemy.down-dt);enemy.stun=Math.max(0,enemy.stun-dt);
   if(enemy.down>0){enemy.windup=0;enemy.strike=0;enemy.warning.visible=false;enemy.bar.visible=false;enemy.badge.visible=false;enemy.root.position.set(enemy.x,.06,enemy.z);enemy.root.rotation.z=THREE.MathUtils.damp(enemy.root.rotation.z,enemy.down>.4?-1.48:0,12,dt);pose(enemy,time,false,null,0);continue;}
   enemy.root.rotation.z=THREE.MathUtils.damp(enemy.root.rotation.z,0,14,dt);enemy.root.position.y=0;enemy.bar.visible=true;enemy.badge.visible=true;
   const distance=Math.hypot(player.x-enemy.x,player.z-enemy.z);enemy.cooldown-=dt;enemy.flash=Math.max(0,enemy.flash-dt);enemy.hurt=enemy.flash;let moving=false;
   if(enemy.stun>0){enemy.windup=0;enemy.strike=0;}
   else if(enemy.strike>0){const before=enemy.strike;enemy.strike=Math.max(0,enemy.strike-dt);if(enemy.type==='runner'){moveEnemy(enemy,enemy.x+enemy.aimX*3*dt,enemy.z+enemy.aimZ*3*dt);}if(before>.225&&enemy.strike<=.225&&enemyConnects(enemy,player)){state.health=Math.max(0,state.health-enemy.spec.damage);player.invulnerable=.55;player.hurt=.22;player.stun=.18;player.attack=null;player.pickup=null;player.queuedAttack=null;player.combo=0;player.regenDelay=1;impact(player.x,player.z,enemy.type==='bruiser'?.3:.22,'hurt');toast(`${enemy.spec.label}: −${enemy.spec.damage} здоровья`);tone(90);updateHUD();if(!state.health)finish();}}
   else if(enemy.windup>0){enemy.windup=Math.max(0,enemy.windup-dt);if(enemy.windup<=0){enemy.strike=.3;enemy.cooldown=enemy.spec.recovery;}}
   else if(distance<8&&distance>enemy.spec.range*.7){const side=enemies.indexOf(enemy)%2?1:-1;const targetZ=THREE.MathUtils.clamp(player.z+side*.55,laneMinimum(enemy.x)+.1,1.9),mx=player.x-enemy.x,mz=targetZ-enemy.z,dist=Math.hypot(mx,mz);if(dist>.05){moveEnemy(enemy,enemy.x+mx/dist*dt*enemy.spec.speed,enemy.z+mz/dist*dt*enemy.spec.speed,true);}moving=true;}
   else if(distance<=enemy.spec.range&&enemy.cooldown<=0){beginEnemyAttack(enemy);enemy.windup=enemy.spec.windup;enemy.aimX=(player.x-enemy.x)/Math.max(distance,.01);enemy.aimZ=(player.z-enemy.z)/Math.max(distance,.01);}
   enemy.warning.visible=enemy.windup>0||enemy.strike>0;enemy.warning.position.set(enemy.x,.015,enemy.z);enemy.warning.material.opacity=enemy.windup>0?.3+.4*(1-enemy.windup/enemy.spec.windup):.7;
   enemy.root.position.set(enemy.x,0,enemy.z);enemy.root.rotation.y=turnToward(enemy.root.rotation.y,directionYaw(player.x-enemy.x,player.z-enemy.z),dt);
   enemy.bar.scale.x=Math.max(0,enemy.health/enemy.spec.health);enemy.bar.quaternion.copy(camera.quaternion);enemy.bar.quaternion.premultiply(enemy.root.quaternion.clone().invert());enemy.bar.material.color.set(enemy.windup>0?'#ffdd66':enemy.spec.color);const attackPose=enemyAttackPose(enemy);pose(enemy,time,moving,attackPose.kind,attackPose.progress);
  }
  for(let i=enemies.length-1;i>=0;i--)if(enemies[i].health<=0&&enemies[i].corpseAge>3){const e=enemies[i];scene.remove(e.root,e.warning,e.shadow);for(const mesh of [e.warning,e.bar,e.badge]){mesh.geometry.dispose();mesh.material.dispose();}const skeletons=new Set();e.root.traverse(o=>{if(o.isSkinnedMesh)skeletons.add(o.skeleton);});for(const skeleton of skeletons)skeleton.dispose();enemies.splice(i,1);}
  weapons.update(player);fireBarrels.update(player.x,time,camera);const healing=medkits.update(player,state.health,dt>0);if(healing){state.health+=healing;toast(`Аптечка · +${healing} здоровья`);tone(740);updateHUD();}
  street.update(player.x);updateLocationUI();locationDoor.update(time);
  const pending=pendingSpawns.map(item=>({encounter:item.arena.id,health:1}));const event=pendingExit?null:encounters.update(dt,player.x,[...enemies,...pending]);
  if(event?.type==='spawn')for(const foe of event.enemies)pendingSpawns.push({foe,arena:event.arena,wait:foe.delay});
  if(event?.type==='warning')toast(`${event.arena.title} · противники приближаются!`);
  if(event?.type==='clear'){pendingExit=exitForClear(event.arena.index,startingLocation);locationDoor.set(pendingExit);returnWall=Math.max(returnWall,player.x-.25);wallet.earn(15);state.score+=100*event.arena.number;state.health=Math.min(100,state.health+8);player.stamina=100;toast(`Участок ${event.arena.number} пройден · +8 здоровья`);updateHUD();}
  $('danger').hidden=!encounters.active;$('danger').textContent=encounters.active?`${encounters.arena.title} · ${encounters.phase==='incoming'?'Новая волна · '+Math.ceil(encounters.delay):'Осталось: '+enemies.filter(e=>e.encounter===encounters.arena.id&&e.health>0).length}`:'';
  $('go').hidden=encounters.goTime<=0||encounters.active;
  $('stamina').value=player.stamina;$('stamina-value').textContent=Math.floor(player.stamina);$('dodge').disabled=!!player.pickup||player.dodgeCooldown>0||player.stamina<staminaCosts.dodge;
  $('objective').textContent=`Бутылки: ${state.bottles} · Побеждено: ${state.defeated} · ${pendingExit?(pendingExit.to==='entrance'?'Войди в подъезд →':'Найди выход во двор →'):encounters.active?'Победи группу':'Двигайся вправо →'}`;
  for(const b of document.querySelectorAll('[data-attack]')){const k=b.dataset.attack;b.disabled=!!player.pickup||(!player.attack&&player.cooldowns[k]>0)||player.dodge>0||player.stun>0||player.stamina<staminaCosts[k];}
 }
 if(cinematic){
  const c=cinematic,e=c.target;c.elapsed+=paused?0:rawDt*(c.elapsed>=1.3&&c.elapsed<1.5?.3:1);
  const p=finisherPose(c.elapsed);
  player.x=THREE.MathUtils.lerp(c.startX,c.endX,p.approach);player.z=THREE.MathUtils.lerp(c.startZ,e.z,p.approach);
  player.root.position.set(player.x,0,player.z);player.root.rotation.y=player.heading;
  pose(player,time,false,'finisher',Math.min(1,c.elapsed/2.8));
  e.root.rotation.y=-c.side*Math.PI/2;e.root.position.set(e.x+c.side*p.fall*.55,Math.sin(p.fall*Math.PI)*.65,e.z);e.root.rotation.z=-c.side*p.fall*1.5;
  e.flash=p.contact?.18*(1-p.fall):0;pose(e,time,false,null,0);
  if(p.contact&&!c.hit){c.hit=true;e.fallSide=c.side;e.health=0;$('cinema').querySelector('span').textContent='НОКАУТ';e.corpseAge=0;awardDefeat(e);impact(e.x,e.z,.3,'finisher');tone(75);updateHUD();}
  cameraRig.cinematic(player,e,c.elapsed,paused?0:rawDt,innerWidth,innerHeight);
  if(p.done){e.x=e.root.position.x;e.down=0;e.knockback=0;player.invulnerable=.6;player.attack=null;player.heading=c.side*Math.PI/2;cinematic=null;for(const foe of enemies)foe.root.visible=true;document.body.classList.remove('finishing');$('cinema').hidden=true;toast('Решающий удар!');}
 }
 $('super-meter').value=superPower;$('super-value').textContent=`${Math.floor(superPower)}%`;
 const held=weapons.equipped,weapon=held?weaponTypes[held.type]:null;
 $('weapon-name').textContent=weapon?.label??'Кулаки';$('weapon-uses').textContent=held?`${held.uses} / ${weapon.uses} ударов`:'Без оружия';$('weapon-durability').max=weapon?.uses??1;$('weapon-durability').value=held?.uses??0;
 const nearDoor=pendingExit&&locationDoor.near(player),nearby=nearestPickup();$('weapon-pickup').hidden=!!player.pickup||(!nearby&&!nearDoor)||state.over||!!cinematic||paused||!!locationTransition;$('weapon-pickup').textContent=nearDoor?(pendingExit.to==='entrance'?'E · Войти в подъезд':'E · Выйти во двор'):nearby?.kind==='bottle'?'E · Поднять бутылку':nearby?`E · Взять: ${weaponTypes[nearby.item.type].label}`:'';
 document.querySelector('[data-attack="jab"] b').textContent=weapon?.label??'Удар';
 if(ready)weapons.pose(player,player.pickup?.kind==='bottle_pickup'||player.pickup?.kind==='bottle_smash'&&pickupProgress(player)<.55||player.pickup?.kind==='weapon_pickup'&&pickupProgress(player)<.55||mainMenu?.visible||!!cinematic||state.over||!!player.attack&&player.attack!=='jab');
 $('super').disabled=!!player.pickup||superPower<100||!!cinematic||!!player.attack||player.stun>0||player.dodge>0||state.over;
 $('super').classList.toggle('ready',superPower>=100);
 if(time>toastUntil)$('toast').textContent='';
 sprayEffect.update(player,ready&&!state.over&&!cinematic&&player.attack==='spray',time);
 drinkingBottle.update(player,ready&&!state.over&&!cinematic&&!mainMenu?.visible);
 burpEffect.update(player,ready&&!state.over&&!cinematic&&player.attack==='burp');
 $('shop-open').disabled=!ready||!!cinematic;
 cosmetics?.update();if(ready){contactShadows.update(player);for(const e of enemies)contactShadows.update(e);}
 const targetX=ready?player.x:-8;if(!cinematic)cameraRig.update({player:ready?player:{x:-8,z:0,facing:1},enemies,arena:encounters.arena,time,dt:paused?0:rawDt,width:innerWidth,height:innerHeight});
 lighting.follow(targetX);locationLighting.update(currentLocation,targetX,time);windPapers.update(targetX,mainMenu?.visible?rawDt:dt,currentLocation==='street');if(mainMenu?.visible){dof.renderCustom(()=>mainMenu.render(rawDt,()=>{fireBarrels.update(player.x,time+mainMenu.time,camera);menuBackgroundCamera.copy(camera);menuBackgroundCamera.position.x+=Math.sin(mainMenu.time*.15)*.12;renderer.render(scene,menuBackgroundCamera);}));return;}
 const subject=cinematic?.target;dofFocus.set(subject?(player.x+subject.root.position.x)/2:player.x,1,subject?(player.z+subject.root.position.z)/2:player.z);dof.render(scene,camera,dofFocus,paused?0:rawDt);
}
function resize(){const w=innerWidth,h=innerHeight;renderer.setSize(w,h);dof.resize(w,h);camera.aspect=w/h;camera.fov=w<650?53:40;camera.updateProjectionMatrix();}window.addEventListener('resize',resize);resize();compositing.onChange=()=>dof.resize(innerWidth,innerHeight);camera.position.set(-6.55,1.8,6.2);frame();
// Read-only diagnostics for smoke tests; no gameplay mutations are exposed.
window.gameDebug=()=>({ready,frames,...state,paused,bottleChoice:!!bottleChoice,location:currentLocation,startingLocation,courtyard:isCourtyard(player.x),pendingExit:pendingExit?{...pendingExit,near:locationDoor.near(player)}:null,locationTransition:locationTransition?{to:locationTransition.to,elapsed:locationTransition.elapsed}:null,menu:mainMenu?.visible??false,character:appearance.character,palette:appearance.palette,nearbyPickup:nearestPickup()?.kind??null,weapons:weapons.debug(),medkits:medkits.debug(),graphics:{mode:graphics.mode,pixelRatio:renderer.getPixelRatio(),width:renderer.domElement.width,height:renderer.domElement.height,samples:dof.enabled||compositing.active?dof.target.samples:0,triangles:renderer.info.render.triangles,drawCalls:renderer.info.render.calls,frameMs:resolution.averageMs,adaptive:true,pendingPixelRatio:pendingResolution,shadows:{enabled:renderer.shadowMap.enabled,filter:renderer.shadowMap.type===THREE.PCFSoftShadowMap?'soft':'pcf',everyFrame:renderer.shadowMap.autoUpdate,size:sun.shadow.mapSize.x}},compositing:{active:compositing.active,targetWidth:dof.target.width,targetHeight:dof.target.height,settings:{...compositing.value}},depthOfField:{enabled:dof.enabled,focus:dof.focus,maxBlur:dof.maxBlur},lighting:{...lighting.value},environment:street.template?'authored':'procedural',streetSign:streetTemplate?.getObjectByName('Weathered_street_sign')?.position.toArray()??null,windowDetails:{street:streetTemplate?.getObjectByName('Detailed_aged_windows')?.userData.windowCount??0,courtyard:courtyardTemplates[0]?.userData.windowCount??0,entrance:entranceTemplate.userData.windowCount??0},cameraShake:{enabled:cameraRig.isShakeEnabled(),strength:cameraRig.shake},entranceLamps:locationLighting.lights.map(l=>({visible:l.visible,intensity:l.intensity,x:l.position.x})),shopOpen,economy:{coins:wallet.profile.coins,owned:[...wallet.profile.owned],equipped:wallet.profile.equipped,run:{...wallet.run},persistent:wallet.persistent,rewardMode:rewardProvider.mode},sprayVisible:sprayEffect.root.visible,sprayGrowth:sprayEffect.growth,sprayOrigin:sprayEffect.root.position.toArray(),burpVisible:burpEffect.root.visible,drinkingBottleVisible:drinkingBottle.root.visible,superPower,returnWall,cinematic:cinematic?{elapsed:cinematic.elapsed,hit:cinematic.hit,target:cinematic.target.type}:null,best:{...best},worldChunks:street.chunks.size,authoredActions:Object.keys(player.userActions?.clips??{}),pendingSpawns:pendingSpawns.length,spawnAudit:spawnAudit.map(a=>({...a})),player:{radius:bodyRadius(player),pickup:player.pickup?{kind:player.pickup.kind,progress:pickupProgress(player)}:null,x:player.x,z:player.z,moving:!!player.moving,locomotion:player.locomotion,joystick:{x:joystick.x,y:joystick.y},motion:player.motionId,attack:player.attack,attackTime:player.attackTime,attackClip:player.attackSpec?.clip,attackSerial:player.attackSerial,stamina:player.stamina,dodge:player.dodge,dodgeDuration:player.dodgeDuration,dodgeClip:player.dodge>0&&player.userActions?.clips.dodge?'dodge':null,dodgeCooldown:player.dodgeCooldown,facing:player.facing,heading:player.heading,walkDistance:player.walkDistance,walkStride:player.walkStride,feetY:player.feetY,groundOffset:player.groundOffset,combo:player.combo,stun:player.stun,invulnerable:player.invulnerable,cooldowns:{...player.cooldowns}},enemies:enemies.map(e=>({authored:!!e.userActions,attackClip:e.attackSpec?.clip,motion:e.motionId,radius:bodyRadius(e),x:e.x,z:e.z,health:e.health,type:e.type,feetY:e.feetY,windup:e.windup,strike:e.strike,down:e.down,entering:e.entering,encounter:e.encounter})),encounter:{active:encounters.active,phase:encounters.phase,wave:encounters.wave,index:encounters.index,bounds:encounters.bounds}});


function initTelegram(){const tg=window.Telegram?.WebApp;if(tg){tg.ready();tg.expand();if(tg.isVersionAtLeast?.('7.7'))tg.disableVerticalSwipes?.();}}
window.addEventListener('telegram-ready',()=>{if(ready)initTelegram();});
