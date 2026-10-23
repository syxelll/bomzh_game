import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone } from 'three/addons/utils/SkeletonUtils.js';
import { attacks, canHit, sellBottles } from './game.js';
import './style.css';

const $ = id => document.getElementById(id);
const scene = new THREE.Scene(); scene.background = new THREE.Color('#94aaa3'); scene.fog = new THREE.Fog('#94aaa3', 26, 65);
const lowQuality = innerWidth < 650 || new URLSearchParams(location.search).get('quality') === 'low';
const renderer = new THREE.WebGLRenderer({ canvas: $('game'), antialias: !lowQuality, powerPreference:'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, lowQuality ? 1 : 1.5)); renderer.shadowMap.enabled = !lowQuality;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1;
const camera = new THREE.PerspectiveCamera(42, 1, .1, 100);
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
const state={health:100,bottles:0,coins:0,sold:0,over:false};
const player={x:-8,z:.5,facing:1,attack:null,attackTime:0,cooldowns:{jab:0,kick:0,spin:0},combo:0,lastJab:-10,invulnerable:0};
const enemies=[];const keys=new Set();let frames=0;let time=0,toastUntil=0,audio=null,sound=false,ready=false;
function toast(text){$('toast').textContent=text;toastUntil=time+2;}
function tone(frequency=400){if(!sound)return;audio??=new AudioContext();audio.resume();const osc=audio.createOscillator(),gain=audio.createGain();osc.type='triangle';osc.frequency.setValueAtTime(frequency,audio.currentTime);gain.gain.setValueAtTime(.05,audio.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.12);osc.connect(gain);gain.connect(audio.destination);osc.start();osc.stop(audio.currentTime+.13);}
$('sound').onclick=()=>{sound=!sound;$('sound').textContent='Звук: '+(sound?'вкл.':'выкл.');tone();};
function updateHUD(){for(const k of ['health','bottles','coins'])$(k).textContent=Math.ceil(state[k]);}
function finish(win){state.over=true;$('ending').hidden=false;$('ending-title').textContent=win?'Двор пройден!':'Сегодня не твой день';$('ending-text').textContent=win?`Все противники побеждены. Сдано бутылок: ${state.sold}. Монет: ${state.coins}.`:'Бутылки подождут. Попробуй чередовать быстрые удары, пинки и отходы.';}
$('restart').onclick=()=>location.reload();
function sell(){if(!ready||state.over||Math.hypot(player.x-30,player.z+.3)>3)return;const n=sellBottles(state);toast(n?`Сдано ${n} бутылок · +${n*3} монет`:'Сначала собери бутылки');if(n)tone(750);updateHUD();}
$('sell').onclick=sell;
function attack(kind){if(!ready||state.over||player.attack||player.cooldowns[kind]>0)return;player.attack=kind;player.attackTime=0;player.cooldowns[kind]=attacks[kind].cooldown;player.hit=false;
 if(kind==='jab'){player.combo=time-player.lastJab<1.3?(player.combo%3)+1:1;player.lastJab=time;}else player.combo=0;
 tone(kind==='kick'?180:300);}
for(const b of document.querySelectorAll('[data-attack]'))b.addEventListener('pointerdown',e=>{e.preventDefault();attack(b.dataset.attack);});
for(const b of document.querySelectorAll('[data-move]')){
 const k=b.dataset.move;b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);keys.add(k);});
 for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,()=>keys.delete(k));
}
const keyMap={a:'left',ArrowLeft:'left',d:'right',ArrowRight:'right',w:'up',ArrowUp:'up',s:'down',ArrowDown:'down'};
window.addEventListener('keydown',e=>{if(keyMap[e.key]){e.preventDefault();keys.add(keyMap[e.key]);}if(!e.repeat){const k=e.key.toLowerCase();if(k==='j')attack('jab');if(k==='k')attack('kick');if(k==='l')attack('spin');if(k==='e')sell();}});
window.addEventListener('keyup',e=>keys.delete(keyMap[e.key]));window.addEventListener('blur',()=>keys.clear());document.addEventListener('visibilitychange',()=>{keys.clear();});
function character(template,height){const root=new THREE.Group(),visual=clone(template);visual.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(visual),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());const scale=height/size.y;visual.scale.setScalar(scale);visual.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);root.add(visual);scene.add(root);const bones=[];visual.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}if(o.isBone)bones.push({bone:o,rest:o.rotation.clone()});});return{root,visual,bones};}
function pose(actor,walk,attackKind,progress){
 actor.root.updateMatrixWorld(true);
 if(!actor.bind){
  const inverse=actor.visual.matrixWorld.clone().invert();
  actor.bind=actor.bones.map(({bone})=>({bone,matrix:new THREE.Matrix4().multiplyMatrices(inverse,bone.matrixWorld),side:bone.name.endsWith('.l')?1:-1,group:/arm|shoulder|hand|thumb|index|middle|ring|pinky|pinkie/i.test(bone.name)?'arm':/thigh|leg|foot|toe/i.test(bone.name)?'leg':null}));
  actor.pivots={};for(const side of [1,-1])for(const group of ['arm','leg']){const suffix=side===1?'.l':'.r',target=actor.bind.find(b=>b.bone.name===(group==='arm'?'arm':'thigh')+suffix);actor.pivots[group+side]=target?new THREE.Vector3().setFromMatrixPosition(target.matrix):new THREE.Vector3(0,group==='arm'?1.4:.9,0);}
 }
 const transforms={};for(const side of [1,-1])for(const group of ['arm','leg']){
  let angle=walk?Math.sin(time*9+(side===1?0:Math.PI))*(group==='arm'?.22:.28):0;
  if(attackKind&&group==='arm')angle+=Math.sin(progress*Math.PI)*(attackKind==='jab'?(side===1?1.1:.3):.8);
  if(attackKind==='kick'&&group==='leg'&&side===1)angle-=Math.sin(progress*Math.PI)*1.15;
  const p=actor.pivots[group+side];transforms[group+side]=new THREE.Matrix4().makeTranslation(p.x,p.y,p.z).multiply(new THREE.Matrix4().makeRotationX(angle)).multiply(new THREE.Matrix4().makeTranslation(-p.x,-p.y,-p.z));
 }
 const desired=new THREE.Matrix4(),local=new THREE.Matrix4();
 for(const b of actor.bind){desired.copy(actor.visual.matrixWorld);if(b.group)desired.multiply(transforms[b.group+b.side]);desired.multiply(b.matrix);local.copy(b.bone.parent.matrixWorld).invert().multiply(desired);local.decompose(b.bone.position,b.bone.quaternion,b.bone.scale);b.bone.updateWorldMatrix(false,false);}
}
const loader=new GLTFLoader();
try{
 const [hero,enemy]=await Promise.all([loader.loadAsync('/models/hobo.glb'),loader.loadAsync('/models/enemy.glb')]);
 Object.assign(player,character(hero.scene,1.85));player.root.rotation.y=Math.PI/2;
 for(const [i,x] of [0,10,22].entries()){
  const actor=character(enemy.scene,1.95);actor.root.position.set(x,0,i%2?-1:1);actor.root.rotation.y=-Math.PI/2;
  const bar=new THREE.Mesh(new THREE.PlaneGeometry(.8,.07),new THREE.MeshBasicMaterial({color:'#d68664',side:THREE.DoubleSide}));bar.position.y=2.25;actor.root.add(bar);
  enemies.push({...actor,x,z:i%2?-1:1,health:70,windup:0,cooldown:1,bar,flash:0});
 }
 ready=true;initTelegram();$('loading').style.display='none';toast('Первый двор. Собери стеклотару и не дай себя обидеть.');
}catch(error){console.error(error);$('load-status').textContent='Не удалось загрузить модели. Проверь соединение и обнови страницу.';}
const clock=new THREE.Clock();
function frame(){frames++;requestAnimationFrame(frame);const dt=Math.min(clock.getDelta(),.05);time+=dt;
 if(ready&&!state.over){
  for(const k of Object.keys(attacks))player.cooldowns[k]=Math.max(0,player.cooldowns[k]-dt);
  player.invulnerable=Math.max(0,player.invulnerable-dt);
  let dx=Number(keys.has('right'))-Number(keys.has('left')),dz=Number(keys.has('down'))-Number(keys.has('up'));const length=Math.hypot(dx,dz);if(length){dx/=length;dz/=length;}
  const speed=player.attack?1:3.2;player.x=THREE.MathUtils.clamp(player.x+dx*speed*dt,-11,33);player.z=THREE.MathUtils.clamp(player.z+dz*speed*dt,-2,2.1);if(dx&&!player.attack)player.facing=Math.sign(dx);
  let progress=0;
  if(player.attack){const spec=attacks[player.attack];player.attackTime+=dt;progress=player.attackTime/spec.duration;
   if(progress>.35&&!player.hit){player.hit=true;let hits=0;for(const enemy of enemies){if(enemy.health>0&&canHit(player,enemy,player.attack)){enemy.health-=spec.damage+(player.combo===3?12:0);enemy.x=THREE.MathUtils.clamp(enemy.x+player.facing*.45,-10,32);enemy.flash=.18;enemy.windup=0;enemy.cooldown=.8;hits++;if(enemy.health<=0){state.coins+=5;toast('Противник побеждён · +5 монет');}}}if(hits){tone(110);if(player.combo===3)toast('Комбо! Третий удар сильнее');updateHUD();}}
   if(progress>=1)player.attack=null;
  }
  player.root.position.set(player.x,Math.sin(time*11)*(length?.025:0),player.z);player.root.rotation.y=player.facing*Math.PI/2+(player.attack==='spin'?progress*Math.PI*2:0);player.visual.rotation.z=player.attack==='jab'?-Math.sin(progress*Math.PI)*.09:0;pose(player,length,player.attack,progress);
  for(const enemy of enemies){
   if(enemy.health<=0){enemy.root.rotation.z=THREE.MathUtils.damp(enemy.root.rotation.z,-Math.PI/2,5,dt);enemy.root.position.y=THREE.MathUtils.damp(enemy.root.position.y,.2,5,dt);enemy.bar.visible=false;continue;}
   const distance=Math.hypot(player.x-enemy.x,player.z-enemy.z);enemy.cooldown-=dt;enemy.flash=Math.max(0,enemy.flash-dt);let moving=false;
   if(enemy.windup>0){enemy.windup-=dt;if(enemy.windup<=0){if(distance<1.65&&player.invulnerable<=0){state.health=Math.max(0,state.health-10);player.invulnerable=.7;toast('Получен удар · −10 здоровья');tone(90);updateHUD();if(!state.health)finish(false);}enemy.cooldown=1.4;}}
   else if(distance<6&&distance>1.15){const speed=1.2;enemy.x+=(player.x-enemy.x)/distance*dt*speed;enemy.z+=(player.z-enemy.z)/distance*dt*speed;moving=true;}
   else if(distance<=1.4&&enemy.cooldown<=0){enemy.windup=.65;}
   enemy.root.position.set(enemy.x,0,enemy.z);enemy.root.rotation.y=(player.x>enemy.x?1:-1)*Math.PI/2;enemy.visual.rotation.z=enemy.windup>0?-.15:0;
   enemy.bar.scale.x=Math.max(0,enemy.health/70);enemy.bar.quaternion.copy(camera.quaternion);enemy.bar.quaternion.premultiply(enemy.root.quaternion.clone().invert());enemy.bar.material.color.set(enemy.windup>0?'#ffdd66':'#d68664');pose(enemy,moving,enemy.windup?'jab':null,enemy.windup?1-enemy.windup/.65:0);
  }
  for(const bottle of bottles){if(bottle.taken)continue;bottle.mesh.rotation.y=time; if(Math.hypot(bottle.x-player.x,bottle.z-player.z)<.65){bottle.taken=true;bottle.mesh.visible=false;state.bottles++;tone(650);toast('+1 бутылка');updateHUD();}}
  const near=Math.hypot(player.x-30,player.z+.3)<3;$('exchange').style.display=near?'flex':'none';
  if(enemies.every(e=>e.health<=0)&&state.sold>=1&&state.bottles===0&&bottles.every(b=>b.taken))finish(true);
  $('objective').textContent=enemies.every(e=>e.health<=0)?'Собери оставшиеся бутылки и сдай их в конце улицы':'Собирай бутылки · жёлтая полоска — враг готовит удар';
  for(const b of document.querySelectorAll('[data-attack]')){const k=b.dataset.attack;b.disabled=player.cooldowns[k]>0||!!player.attack;}
 }
 if(time>toastUntil)$('toast').textContent='';
 const targetX=ready?player.x:-8;camera.position.lerp(new THREE.Vector3(targetX+1,7.4,11.5),1-Math.exp(-5*dt));camera.lookAt(targetX+1,.9,0);
 sun.position.x=targetX-4;sun.target.position.set(targetX,0,0);renderer.render(scene,camera);
}
function resize(){const w=innerWidth,h=innerHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.fov=w<h?55:42;camera.updateProjectionMatrix();}window.addEventListener('resize',resize);resize();camera.position.set(-7,7.4,11.5);frame();
// Read-only diagnostics for smoke tests; no gameplay mutations are exposed.
window.gameDebug=()=>({ready,frames,...state,player:{x:player.x,z:player.z},enemies:enemies.map(e=>({x:e.x,z:e.z,health:e.health})),remainingBottles:bottles.filter(b=>!b.taken).length});

function initTelegram(){const tg=window.Telegram?.WebApp;if(tg){tg.ready();tg.expand();if(tg.isVersionAtLeast?.('7.7'))tg.disableVerticalSwipes?.();}}
window.addEventListener('telegram-ready',()=>{if(ready)initTelegram();});
