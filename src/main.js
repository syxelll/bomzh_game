import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone } from 'three/addons/utils/SkeletonUtils.js';
import { attacks, canHit, sellBottles } from './game.js';
import './style.css';
import {Encounters,encounterLayout} from './encounters.js';
import {GameCamera} from './camera.js';
import {enemyTypes,staminaCosts,spendStamina,recoverStamina,enemyConnects} from './combat.js';
import {quests,questStatus,acceptQuest,claimQuest,questProgress} from './quests.js';
import { pose, prepareAnimator, sampleMotion } from './animation.js';

const $ = id => document.getElementById(id);
const scene = new THREE.Scene(); scene.background = new THREE.Color('#94aaa3'); scene.fog = new THREE.Fog('#94aaa3', 26, 65);
const lowQuality = innerWidth < 650 || new URLSearchParams(location.search).get('quality') === 'low';
const renderer = new THREE.WebGLRenderer({ canvas: $('game'), antialias: !lowQuality, powerPreference:'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, lowQuality ? 1 : 1.5)); renderer.shadowMap.enabled = !lowQuality;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1;
const camera = new THREE.PerspectiveCamera(42, 1, .1, 100);
const cameraRig=new GameCamera(camera,{reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches});
scene.add(new THREE.HemisphereLight('#e9e6d3', '#536850', 2.4));
const sun = new THREE.DirectionalLight('#ffdfaa', 3); sun.position.set(-4,12,8); sun.castShadow=true;
sun.shadow.mapSize.set(1024,1024); Object.assign(sun.shadow.camera,{left:-18,right:18,top:14,bottom:-14,far:45}); sun.shadow.bias=-.001;scene.add(sun,sun.target);
const mat = color => new THREE.MeshStandardMaterial({color,roughness:.92});
const materials = { ground:mat('#8c8b7b'),road:mat('#535d59'),stone:mat('#b9b6a2'),metal:mat('#52675d'),wood:mat('#88744d'),glass:mat('#638b4c'),gold:mat('#e7c25c') };
function box(w,h,d,material,x,y,z){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;scene.add(mesh);return mesh;}
box(80,.2,18,materials.ground,10,-.17,0);box(80,.04,6,materials.road,10,-.04,6);
box(80,.18,.24,materials.stone,10,0,2.7);box(80,.18,.24,materials.stone,10,0,-2.8);
for(let x=-25;x<55;x+=4) box(1.5,.02,.1,materials.stone,x,0,6);
for(let i=0;i<11;i++){
 const x=-20+i*6.5,h=5+(i%3)*1.1,m=mat(['#a9a28d','#938d7d','#b7ad95','#7d9187'][i%4]);
 box(6,h,3,m,x,h/2,-5.6);box(6.2,.24,3.2,materials.stone,x,h,-5.6);
 for(let floor=0;floor<3;floor++) for(let j=0;j<3;j++){
  box(.85,1.1,.08,mat('#3c5554'),x-1.8+j*1.8,1.5+floor*1.55,-4.06);
  box(.91,.08,.16,materials.stone,x-1.8+j*1.8,1+floor*1.55,-4);
 }
}
function sign(text,x,y,z,width=3){const c=document.createElement('canvas');c.width=512;c.height=128;const ctx=c.getContext('2d');ctx.fillStyle='#244338';ctx.fillRect(0,0,512,128);ctx.strokeStyle='#c7b57e';ctx.lineWidth=10;ctx.strokeRect(5,5,502,118);ctx.fillStyle='#f4e4b5';ctx.font='bold 36px Arial';ctx.textAlign='center';ctx.fillText(text,256,77);const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;const p=new THREE.Mesh(new THREE.PlaneGeometry(width,width/4),new THREE.MeshBasicMaterial({map:tex}));p.position.set(x,y,z);scene.add(p);return p;}
sign('УЛИЦА НАДЕЖДЫ',-7,3.1,-3.98);sign('ПРИЁМ БУТЫЛОК',30,2.8,-1.4,4);
box(4,2.5,1.8,mat('#4d7869'),30,1.25,-2.4);box(1.6,1.1,.1,mat('#233d35'),30,1.5,-1.44);sign('1 БУТЫЛКА = 3 МОНЕТЫ',30,.7,-1.38,2.5);
for(const x of [-10,3,16,28]){box(.1,4,.1,materials.metal,x,2,-2.5);box(.9,.18,.4,materials.stone,x+.3,4,-2.5);}
for(const x of [-4,9,20]){box(1.7,.15,.6,materials.wood,x,.65,-2);box(1.7,.65,.12,materials.wood,x,1,-2.3);for(const dx of [-.6,.6])box(.1,.65,.4,materials.metal,x+dx,.3,-2);}
for(const x of [1,14,25])box(.55,.8,.55,materials.metal,x,.4,-2.1);
const bottles=[];
for(let i=0;i<18;i++){
 const group=new THREE.Group();const body=new THREE.Mesh(new THREE.CylinderGeometry(.085,.09,.3,8),materials.glass);body.position.y=.2;const neck=new THREE.Mesh(new THREE.CylinderGeometry(.035,.055,.14,8),materials.glass);neck.position.y=.41;group.add(body,neck);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(.17,.015,5,20),materials.gold);ring.rotation.x=-Math.PI/2;ring.position.y=.04;group.add(ring);
 group.position.set(-6+i*1.9,0,Math.sin(i*2.1)*1.5);scene.add(group);bottles.push({mesh:group,x:group.position.x,z:group.position.z,taken:false});
}
const state={health:100,bottles:0,coins:0,sold:0,collected:0,defeated:0,bruisersDefeated:0,over:false};
const player={x:-8,z:.5,facing:1,attack:null,attackTime:0,cooldowns:{jab:0,kick:0,spin:0},queuedAttack:null,stun:0,combo:0,lastJab:-10,invulnerable:0,stamina:100,regenDelay:0,dodge:0,dodgeCooldown:0,dashX:1,dashZ:0};
const encounters=new Encounters();let spawnEncounterEnemy=null;
const enemies=[];const keys=new Set();let frames=0;let time=0,toastUntil=0,audio=null,sound=false,ready=false;
function toast(text){$('toast').textContent=text;toastUntil=time+2;}
function tone(frequency=400){if(!sound)return;audio??=new AudioContext();audio.resume();const osc=audio.createOscillator(),gain=audio.createGain();osc.type='triangle';osc.frequency.setValueAtTime(frequency,audio.currentTime);gain.gain.setValueAtTime(.05,audio.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.12);osc.connect(gain);gain.connect(audio.destination);osc.start();osc.stop(audio.currentTime+.13);}
$('sound').onclick=()=>{sound=!sound;$('sound').textContent='Звук: '+(sound?'вкл.':'выкл.');tone();};
function updateHUD(){for(const k of ['health','bottles','coins'])$(k).textContent=Math.ceil(state[k]);}
function finish(win){state.over=true;$('ending').hidden=false;$('ending-title').textContent=win?'Двор пройден!':'Сегодня не твой день';$('ending-text').textContent=win?`Все три поручения выполнены. Двор стал спокойнее. Заработано монет: ${state.coins}.`:'Бутылки подождут. Попробуй чередовать быстрые удары, пинки и отходы.';}
$('restart').onclick=()=>location.reload();
function sell(){if(!ready||state.over||Math.hypot(player.x-30,player.z+.3)>3)return;const n=sellBottles(state);toast(n?`Сдано ${n} бутылок · +${n*3} монет`:'Сначала собери бутылки');if(n)tone(750);updateHUD();renderJournal();}
$('sell').onclick=sell;
function attack(kind){
 if(!ready||state.over||dialogueNpc||player.stun>0||player.dodge>0)return;
 if(player.attack){if(player.attackTime/attacks[player.attack].duration>.45)player.queuedAttack={kind,until:time+.35};return;}
 if(player.cooldowns[kind]>0)return;
 if(!spendStamina(player,kind)){toast('Передохни или продолжай кулаками — они не тратят силы');return;}
 player.attack=kind;player.attackTime=0;player.cooldowns[kind]=attacks[kind].cooldown;player.hit=false;
 if(kind==='jab'){player.combo=time-player.lastJab<1.1?(player.combo%3)+1:1;player.lastJab=time;}else player.combo=0;
 tone(kind==='kick'?180:300);
}
function dodge(){if(!ready||state.over||dialogueNpc||player.dodgeCooldown>0||!spendStamina(player,'dodge'))return;let x=Number(keys.has('right'))-Number(keys.has('left')),z=Number(keys.has('down'))-Number(keys.has('up'));const len=Math.hypot(x,z);if(len){x/=len;z/=len;}else{x=player.facing;z=0;}player.dashX=x;player.dashZ=z;player.dodge=.24;player.dodgeCooldown=.85;player.invulnerable=Math.max(player.invulnerable,.3);player.attack=null;player.queuedAttack=null;player.stun=0;player.combo=0;tone(520);}
$('dodge').onpointerdown=e=>{e.preventDefault();dodge();};
for(const b of document.querySelectorAll('[data-attack]'))b.addEventListener('pointerdown',e=>{e.preventDefault();attack(b.dataset.attack);});
for(const b of document.querySelectorAll('[data-move]')){
 const k=b.dataset.move;b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);keys.add(k);});
 for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,()=>keys.delete(k));
}
const keyMap={a:'left',ArrowLeft:'left',d:'right',ArrowRight:'right',w:'up',ArrowUp:'up',s:'down',ArrowDown:'down'};
window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDialogue();return;}if(e.key.toLowerCase()==='q'&&!e.repeat){toggleJournal();return;}if(dialogueNpc)return;if(keyMap[e.key]){e.preventDefault();keys.add(keyMap[e.key]);}if(!e.repeat){const k=e.key.toLowerCase();if(k==='j')attack('jab');if(k==='k')attack('kick');if(k==='l')attack('spin');if(k==='e')interact();if(e.code==='Space'){e.preventDefault();dodge();}}});
window.addEventListener('keyup',e=>keys.delete(keyMap[e.key]));window.addEventListener('blur',()=>keys.clear());document.addEventListener('visibilitychange',()=>{keys.clear();});
function character(template,height){const root=new THREE.Group(),visual=clone(template);visual.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(visual),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());const scale=height/size.y;visual.scale.setScalar(scale);visual.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);root.add(visual);scene.add(root);const bones=[];visual.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}if(o.isBone)bones.push({bone:o,rest:o.rotation.clone()});});const actor={root,visual,bones,baseVisualY:visual.position.y};prepareAnimator(actor);return actor;}
const questLog={};let dialogueNpc=null,returnFocus=null;
const npcs=[{id:'semyon',name:'Семён',role:'СОСЕД · ПЕРВЫЙ ЗАРАБОТОК',x:-8.8,z:-.8,color:'#a58b67'},{id:'grisha',name:'Гриша',role:'МЕХАНИК · СПОКОЙНЫЙ ДВОР',x:10.2,z:-1.3,color:'#577c8b'},{id:'varya',name:'Варя',role:'ПРИЁМЩИЦА · СТЕКЛО В ДЕЛО',x:30,z:-.9,color:'#956f77'}];
function npcLabel(npc){const canvas=document.createElement('canvas');canvas.width=256;canvas.height=96;const ctx=canvas.getContext('2d');ctx.fillStyle='#19382de8';ctx.fillRect(0,0,256,96);ctx.fillStyle='#f5d58f';ctx.font='bold 30px Arial';ctx.textAlign='center';ctx.fillText(npc.name,128,60);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,depthTest:false}));sprite.scale.set(1.6,.6,1);sprite.position.set(npc.x,2.25,npc.z);scene.add(sprite);}
for(const npc of npcs){
 const group=new THREE.Group();group.position.set(npc.x,0,npc.z);const clothes=mat(npc.color),skin=mat('#cfac8b');
 function part(geometry,material,x,y,z){const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x,y,z);mesh.castShadow=true;group.add(mesh);return mesh;}
 part(new THREE.CylinderGeometry(.22,.27,.65,8),clothes,0,1.05,0);part(new THREE.SphereGeometry(.2,10,8),skin,0,1.62,0);
 for(const side of [-1,1]){part(new THREE.CylinderGeometry(.075,.09,.62,6),materials.metal,side*.12,.4,0);part(new THREE.CylinderGeometry(.065,.07,.58,6),clothes,side*.3,1.03,0);part(new THREE.SphereGeometry(.075,8,6),skin,side*.3,.7,0);}
 part(new THREE.CylinderGeometry(.23,.25,.14,8),clothes,0,1.8,0);part(new THREE.BoxGeometry(.04,.035,.025),materials.metal,-.07,1.65,.19);part(new THREE.BoxGeometry(.04,.035,.025),materials.metal,.07,1.65,.19);
 const marker=part(new THREE.OctahedronGeometry(.13),materials.gold,0,2.65,0);npc.root=group;npc.marker=marker;scene.add(group);npcLabel(npc);
}
function nearestNpc(){return npcs.filter(n=>Math.hypot(player.x-n.x,player.z-n.z)<1.9).sort((a,b)=>Math.hypot(player.x-a.x,player.z-a.z)-Math.hypot(player.x-b.x,player.z-b.z))[0];}
function renderJournal(){const list=$('quest-list');list.replaceChildren();for(const q of quests){const status=questStatus(q,questLog,state),entry=document.createElement('article');entry.className='quest-entry';const title=document.createElement('b');title.textContent=q.title;const text=document.createElement('p');text.textContent=q.description;const progress=document.createElement('small');progress.textContent=status==='completed'?'✓ Выполнено':status==='available'?`Поговори: ${npcs.find(n=>n.id===q.npc).name}`:`${questProgress(q,state)} · ${status==='ready'?'Вернись за наградой':'В работе'}`;entry.append(title,text,progress);list.append(entry);}}
function toggleJournal(){$('journal').hidden=!$('journal').hidden;$('journal-toggle').setAttribute('aria-expanded',String(!$('journal').hidden));renderJournal();}
function closeDialogue(){if(!dialogueNpc)return;dialogueNpc=null;$('dialogue').hidden=true;keys.clear();returnFocus?.focus();}
function openDialogue(npc,thanks=false){
 if(!dialogueNpc)returnFocus=document.activeElement;dialogueNpc=npc;keys.clear();$('dialogue').hidden=false;$('journal').hidden=true;$('journal-toggle').setAttribute('aria-expanded','false');$('dialogue-name').textContent=npc.name;$('dialogue-role').textContent=npc.role;
 const q=quests.find(q=>q.npc===npc.id),status=questStatus(q,questLog,state);$('dialogue-text').textContent=thanks?q.thanks:status==='completed'?'Спасибо за помощь. Если есть бутылки — Варя всегда принимает стеклотару.':status==='ready'?'Вижу, дело сделано. Забирай заслуженную награду!':status==='active'?q.description+` Сейчас: ${questProgress(q,state)}.`:q.request;
 const actions=$('dialogue-actions');actions.replaceChildren();function button(text,action){const b=document.createElement('button');b.textContent=text;b.onclick=action;actions.append(b);}
 if(status==='available')button('Взять задание',()=>{acceptQuest(q.id,questLog);renderJournal();openDialogue(npc);});
 if(status==='ready')button(`Получить награду · ${q.reward} монет`,()=>{if(claimQuest(q.id,questLog,state)){updateHUD();renderJournal();tone(850);openDialogue(npc,true);}});
 if(npc.id==='varya'&&state.bottles>0)button(`Сдать ${state.bottles} бутылок · +${state.bottles*3} монет`,()=>{sell();openDialogue(npc);});
 (actions.querySelector('button')??$('dialogue-close')).focus();
}
function interact(){if(!ready||state.over||dialogueNpc||player.attack)return;if(encounters.active){toast('Сначала закончи стычку — затем поговорим');return;}const npc=nearestNpc();if(npc)openDialogue(npc);else sell();}
function updateInteractions(){
 const nearby=nearestNpc();$('interact').hidden=!nearby||!!dialogueNpc;$('interact').textContent=nearby?`Поговорить: ${nearby.name} · E`:'';
 for(const npc of npcs){const q=quests.find(q=>q.npc===npc.id),status=questStatus(q,questLog,state);npc.marker.visible=status!=='completed';npc.marker.rotation.y=time;npc.marker.position.y=2.65+Math.sin(time*2)*.08;npc.marker.material=status==='ready'?materials.gold:materials.stone;}
 const active=quests.find(q=>questStatus(q,questLog,state)==='ready')??quests.find(q=>questStatus(q,questLog,state)==='active');
 $('objective').textContent=active?`${active.title}: ${questProgress(active,state)}${questStatus(active,questLog,state)==='ready'?' · забери награду':''}`:'Поговори с жителями: Семён — начало, Гриша — перед гаражами, Варя — конец улицы';
}
$('interact').onclick=interact;$('dialogue-close').onclick=closeDialogue;$('journal-toggle').onclick=toggleJournal;
$('dialogue').addEventListener('keydown',e=>{if(e.key!=='Tab')return;const buttons=[...$('dialogue').querySelectorAll('button')];const first=buttons[0],last=buttons.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}});
renderJournal();
const arenaGates=[];
for(const arena of encounterLayout)for(const x of [arena.left,arena.right]){const gate=new THREE.Mesh(new THREE.PlaneGeometry(.08,4.5),new THREE.MeshBasicMaterial({color:'#edb956',transparent:true,opacity:.5,side:THREE.DoubleSide,depthWrite:false}));gate.rotation.x=-Math.PI/2;gate.position.set(x,.035,0);gate.visible=false;gate.userData.encounter=arena.id;scene.add(gate);arenaGates.push(gate);}

const enemyLabelMaterials=new Map();
const loader=new GLTFLoader();
try{
 const [hero,enemy]=await Promise.all([loader.loadAsync('/models/hobo.glb'),loader.loadAsync('/models/enemy.glb')]);
 Object.assign(player,character(hero.scene,1.85));player.root.rotation.y=Math.PI/2;
 function spawnEnemy(x,z,type,encounter){
  const spec=enemyTypes[type],actor=character(enemy.scene,type==='bruiser'?2.2:type==='runner'?1.8:1.95);actor.root.position.set(x,0,z);actor.root.rotation.y=-Math.PI/2;
  const bar=new THREE.Mesh(new THREE.PlaneGeometry(.8,.07),new THREE.MeshBasicMaterial({color:spec.color,side:THREE.DoubleSide}));bar.position.y=2.4;actor.root.add(bar);
  const warning=new THREE.Mesh(new THREE.RingGeometry(spec.range-.08,spec.range,32),new THREE.MeshBasicMaterial({color:type==='bruiser'?'#ec738d':'#f2bb51',transparent:true,opacity:.55,side:THREE.DoubleSide,depthWrite:false}));warning.rotation.x=-Math.PI/2;warning.position.set(x,.015,z);warning.visible=false;scene.add(warning);
  let labelMaterial=enemyLabelMaterials.get(type);if(!labelMaterial){const canvas=document.createElement('canvas');canvas.width=256;canvas.height=64;const ctx=canvas.getContext('2d');ctx.fillStyle='#172d27dd';ctx.fillRect(0,0,256,64);ctx.fillStyle=spec.color;ctx.font='bold 30px Arial';ctx.textAlign='center';ctx.fillText(spec.label,128,44);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;labelMaterial=new THREE.SpriteMaterial({map:texture,depthTest:false});enemyLabelMaterials.set(type,labelMaterial);}const label=new THREE.Sprite(labelMaterial);label.position.y=2.7;label.scale.set(1.4,.35,1);actor.root.add(label);
  const badge=new THREE.Mesh(new THREE.OctahedronGeometry(type==='bruiser'?.14:.08),mat(spec.color));badge.position.set(-.7,2.7,0);actor.root.add(badge);
  enemies.push({...actor,x,z,type,spec,encounter,down:0,stun:0,knockback:0,health:spec.health,windup:0,cooldown:1,bar,warning,label,badge,flash:0,aimX:-1,aimZ:0});
 }
 spawnEncounterEnemy=spawnEnemy;
 ready=true;initTelegram();$('loading').style.display='none';toast('Подойди к Семёну у начала улицы и нажми E.');
}catch(error){console.error(error);$('load-status').textContent='Не удалось загрузить модели. Проверь соединение и обнови страницу.';}
let hitStop=0;
const impacts=[];
function impact(x,z){cameraRig.impact();const mesh=new THREE.Mesh(new THREE.RingGeometry(.1,.22,12),new THREE.MeshBasicMaterial({color:0xffe29a,transparent:true,depthWrite:false,side:THREE.DoubleSide}));mesh.position.set(x,1.1,z);mesh.quaternion.copy(camera.quaternion);scene.add(mesh);impacts.push({mesh,age:0});hitStop=.055;}
const clock=new THREE.Clock();
function frame(){frames++;requestAnimationFrame(frame);const rawDt=Math.min(clock.getDelta(),.05);const dt=hitStop>0||dialogueNpc?0:rawDt;hitStop=Math.max(0,hitStop-rawDt);time+=dt;for(let i=impacts.length-1;i>=0;i--){const e=impacts[i];e.age+=rawDt;e.mesh.scale.setScalar(1+e.age*6);e.mesh.material.opacity=1-e.age/.22;if(e.age>=.22){scene.remove(e.mesh);e.mesh.geometry.dispose();e.mesh.material.dispose();impacts.splice(i,1);}}
 if(ready&&!state.over){
  player.stun=Math.max(0,player.stun-dt);recoverStamina(player,dt);player.dodgeCooldown=Math.max(0,player.dodgeCooldown-dt);player.dodge=Math.max(0,player.dodge-dt);
  for(const k of Object.keys(attacks))player.cooldowns[k]=Math.max(0,player.cooldowns[k]-dt);
  player.invulnerable=Math.max(0,player.invulnerable-dt);player.hurt=Math.max(0,(player.hurt??0)-dt);
  let dx=Number(keys.has('right'))-Number(keys.has('left')),dz=Number(keys.has('down'))-Number(keys.has('up'));const length=Math.hypot(dx,dz);player.moving=length>0;if(length){dx/=length;dz/=length;}
  if(player.dodge>0){dx=player.dashX;dz=player.dashZ;}const speed=player.dodge>0?8:player.stun>0?.6:player.attack?.35:3.2;const [left,right]=encounters.bounds;player.x=THREE.MathUtils.clamp(player.x+dx*speed*dt,left,right);player.z=THREE.MathUtils.clamp(player.z+dz*speed*dt,-2,2.1);if(dx&&!player.attack)player.facing=Math.sign(dx);
  let progress=0;
  if(player.attack){const spec=attacks[player.attack];player.attackTime+=dt;progress=player.attackTime/spec.duration;
   if(progress>=spec.hitAt&&!player.hit){player.hit=true;let hits=0;for(const enemy of enemies){if(enemy.health>0&&canHit(player,enemy,player.attack)){enemy.health-=spec.damage+(player.combo===3?12:0);const finisher=player.attack==='spin'||player.combo===3;enemy.knockback=player.facing*(finisher?5:player.attack==='kick'?4:1.4);enemy.flash=.22;impact(enemy.x,enemy.z);if(enemy.type!=='bruiser'||player.attack!=='jab'){enemy.windup=0;enemy.strike=0;enemy.cooldown=.4;enemy.stun=player.attack==='jab'?.22:.4;if(finisher){enemy.down=1.25;enemy.stun=0;}}hits++;if(enemy.health<=0){state.coins+=5;state.defeated++;if(enemy.type==='bruiser')state.bruisersDefeated++;renderJournal();toast('Противник побеждён · +5 монет');}}}if(hits){tone(110);if(player.combo===3)toast('Комбо! Третий удар сильнее');updateHUD();}}
   if(progress>=1){player.attack=null;if(player.queuedAttack){const queued=player.queuedAttack;player.queuedAttack=null;if(queued.until>=time)attack(queued.kind);}}
  }
  player.root.position.set(player.x,0,player.z);player.root.rotation.y=player.facing*Math.PI/2+sampleMotion(time,length,player.attack,progress,player.combo).spin;pose(player,time,length,player.attack,progress);
  for(const enemy of enemies){
   if(enemy.health<=0){enemy.root.rotation.z=THREE.MathUtils.damp(enemy.root.rotation.z,-Math.PI/2,5,dt);enemy.root.position.y=THREE.MathUtils.damp(enemy.root.position.y,.2,5,dt);enemy.bar.visible=false;enemy.label.visible=false;enemy.badge.visible=false;enemy.warning.visible=false;pose(enemy,time,false,null,0);continue;}
   const [arenaLeft,arenaRight]=encounters.bounds;enemy.x=THREE.MathUtils.clamp(enemy.x+enemy.knockback*dt,arenaLeft+.3,arenaRight-.3);enemy.knockback*=Math.exp(-8*dt);
   enemy.down=Math.max(0,enemy.down-dt);enemy.stun=Math.max(0,enemy.stun-dt);
   if(enemy.down>0){enemy.windup=0;enemy.strike=0;enemy.warning.visible=false;enemy.bar.visible=false;enemy.label.visible=false;enemy.badge.visible=false;enemy.root.position.set(enemy.x,.06,enemy.z);enemy.root.rotation.z=THREE.MathUtils.damp(enemy.root.rotation.z,enemy.down>.4?-1.48:0,12,dt);pose(enemy,time,false,null,0);continue;}
   enemy.root.rotation.z=THREE.MathUtils.damp(enemy.root.rotation.z,0,14,dt);enemy.root.position.y=0;enemy.bar.visible=true;enemy.label.visible=true;enemy.badge.visible=true;
   const distance=Math.hypot(player.x-enemy.x,player.z-enemy.z);enemy.cooldown-=dt;enemy.flash=Math.max(0,enemy.flash-dt);let moving=false;
   if(enemy.stun>0){enemy.windup=0;enemy.strike=0;}
   else if(enemy.strike>0){const before=enemy.strike;enemy.strike=Math.max(0,enemy.strike-dt);if(enemy.type==='runner'){enemy.x=THREE.MathUtils.clamp(enemy.x+enemy.aimX*3*dt,-10,32);enemy.z=THREE.MathUtils.clamp(enemy.z+enemy.aimZ*3*dt,-2,2);}if(before>.225&&enemy.strike<=.225&&enemyConnects(enemy,player)){state.health=Math.max(0,state.health-enemy.spec.damage);player.invulnerable=.55;player.hurt=.22;player.stun=.18;player.attack=null;player.queuedAttack=null;player.combo=0;player.regenDelay=1;impact(player.x,player.z);toast(`${enemy.spec.label}: −${enemy.spec.damage} здоровья`);tone(90);updateHUD();if(!state.health)finish(false);}}
   else if(enemy.windup>0){enemy.windup=Math.max(0,enemy.windup-dt);if(enemy.windup<=0){enemy.strike=.3;enemy.cooldown=enemy.spec.recovery;}}
   else if(distance<8&&distance>enemy.spec.range*.7){const side=enemies.indexOf(enemy)%2?1:-1;const targetZ=THREE.MathUtils.clamp(player.z+side*.55,-1.9,1.9),mx=player.x-enemy.x,mz=targetZ-enemy.z,dist=Math.hypot(mx,mz);if(dist>.05){enemy.x+=mx/dist*dt*enemy.spec.speed;enemy.z+=mz/dist*dt*enemy.spec.speed;}moving=true;}
   else if(distance<=enemy.spec.range&&enemy.cooldown<=0){enemy.windup=enemy.spec.windup;enemy.aimX=(player.x-enemy.x)/Math.max(distance,.01);enemy.aimZ=(player.z-enemy.z)/Math.max(distance,.01);}
   enemy.warning.visible=enemy.windup>0||enemy.strike>0;enemy.warning.position.set(enemy.x,.015,enemy.z);enemy.warning.material.opacity=enemy.windup>0?.3+.4*(1-enemy.windup/enemy.spec.windup):.7;
   enemy.root.position.set(enemy.x,0,enemy.z);enemy.root.rotation.y=(player.x>enemy.x?1:-1)*Math.PI/2;
   enemy.bar.scale.x=Math.max(0,enemy.health/enemy.spec.health);enemy.bar.quaternion.copy(camera.quaternion);enemy.bar.quaternion.premultiply(enemy.root.quaternion.clone().invert());enemy.bar.material.color.set(enemy.windup>0?'#ffdd66':enemy.spec.color);pose(enemy,time,moving,(enemy.windup>0||enemy.strike>0)?'jab':null,enemy.strike>0?.25+.75*(1-enemy.strike/.3):enemy.windup>0?.25*(1-enemy.windup/enemy.spec.windup):0);
  }
  for(const bottle of bottles){if(bottle.taken)continue;bottle.mesh.rotation.y=time; if(Math.hypot(bottle.x-player.x,bottle.z-player.z)<.65){bottle.taken=true;bottle.mesh.visible=false;state.bottles++;state.collected++;renderJournal();tone(650);toast('+1 бутылка');updateHUD();}}
  const near=Math.hypot(player.x-30,player.z+.3)<3;$('exchange').style.display=near?'flex':'none';
  if(quests.every(q=>questStatus(q,questLog,state)==='completed')&&!dialogueNpc)finish(true);
  const event=encounters.update(dt,player.x,enemies);
  if(event?.type==='spawn')for(const foe of event.enemies)spawnEncounterEnemy(foe.x,foe.z,foe.type,event.arena.id);
  if(event?.type==='warning')toast(`${event.arena.title} · противники приближаются!`);
  if(event?.type==='clear'){toast('Участок свободен! Можно идти дальше.');player.stamina=Math.min(100,player.stamina+25);}
  for(const gate of arenaGates)gate.visible=encounters.active&&gate.userData.encounter===encounters.arena.id;
  $('danger').hidden=!encounters.active;$('danger').textContent=encounters.active?`${encounters.arena.title} · ${encounters.phase==='incoming'?'Новая волна · '+Math.ceil(encounters.delay):'Осталось: '+enemies.filter(e=>e.encounter===encounters.arena.id&&e.health>0).length}`:'';
  $('go').hidden=encounters.goTime<=0||encounters.active;
  $('stamina').value=player.stamina;$('stamina-value').textContent=Math.floor(player.stamina);$('dodge').disabled=player.dodgeCooldown>0||player.stamina<staminaCosts.dodge;
  updateInteractions();
  for(const b of document.querySelectorAll('[data-attack]')){const k=b.dataset.attack;b.disabled=(!player.attack&&player.cooldowns[k]>0)||player.dodge>0||player.stun>0||player.stamina<staminaCosts[k];}
 }
 if(time>toastUntil)$('toast').textContent='';
 const targetX=ready?player.x:-8;cameraRig.update({player:ready?player:{x:-8,z:0,facing:1},enemies,npc:dialogueNpc,time,dt:rawDt,width:innerWidth,height:innerHeight});
 sun.position.x=targetX-4;sun.target.position.set(targetX,0,0);renderer.render(scene,camera);
}
function resize(){const w=innerWidth,h=innerHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.fov=w<650?53:42;camera.updateProjectionMatrix();}window.addEventListener('resize',resize);resize();camera.position.set(-7.3,6,9);frame();
// Read-only diagnostics for smoke tests; no gameplay mutations are exposed.
window.gameDebug=()=>({ready,frames,...state,player:{x:player.x,z:player.z,attack:player.attack,attackTime:player.attackTime,stamina:player.stamina,dodge:player.dodge,dodgeCooldown:player.dodgeCooldown,facing:player.facing,combo:player.combo,stun:player.stun,invulnerable:player.invulnerable,cooldowns:{...player.cooldowns}},enemies:enemies.map(e=>({x:e.x,z:e.z,health:e.health,type:e.type,windup:e.windup,down:e.down,encounter:e.encounter})),encounter:{active:encounters.active,phase:encounters.phase,wave:encounters.wave,index:encounters.index,cleared:[...encounters.cleared],bounds:encounters.bounds},quests:quests.map(q=>({id:q.id,status:questStatus(q,questLog,state)})),dialogue:dialogueNpc?.id??null,remainingBottles:bottles.filter(b=>!b.taken).length});

function initTelegram(){const tg=window.Telegram?.WebApp;if(tg){tg.ready();tg.expand();if(tg.isVersionAtLeast?.('7.7'))tg.disableVerticalSwipes?.();}}
window.addEventListener('telegram-ready',()=>{if(ready)initTelegram();});
