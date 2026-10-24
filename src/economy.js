export const catalog=Object.freeze([
 {id:'classic',name:'Свой парень',price:0,icon:'🧢',description:'Оригинальный образ.'},
 {id:'shades',name:'Тёмные очки',price:60,icon:'🕶️',description:'Круглые очки для серьёзных разборок.'},
 {id:'gold',name:'Король двора',price:180,icon:'👑',description:'Золотые очки и красный шарф.'},
]);
const KEY='bomzh:wallet:v1',valid=n=>Number.isSafeInteger(n)&&n>=0;
const fresh=()=>({version:1,coins:0,owned:['classic'],equipped:'classic'});
function read(storage){try{const p=JSON.parse(storage.getItem(KEY));if(p?.version!==1||!valid(p.coins)||!Array.isArray(p.owned))return fresh();const owned=[...new Set(['classic',...p.owned.filter(id=>catalog.some(i=>i.id===id))])];return {version:1,coins:p.coins,owned,equipped:owned.includes(p.equipped)?p.equipped:'classic'};}catch{return fresh();}}
export class Wallet{
 constructor(storage){try{this.storage=storage??globalThis.localStorage;}catch{}this.profile=read(this.storage);this.persistent=true;this.run=null;}
 save(){try{this.storage.setItem(KEY,JSON.stringify(this.profile));this.persistent=true;}catch{this.persistent=false;}}
 beginRun(id){this.run={id,earned:0,revived:false,doubled:false,closed:false};return this.run;}
 earn(amount){if(!this.run||this.run.closed||!valid(amount)||!valid(this.profile.coins+amount)||!valid(this.run.earned+amount))return false;this.profile.coins+=amount;this.run.earned+=amount;this.save();return true;}
 buy(id){const item=catalog.find(i=>i.id===id);if(!item||this.profile.owned.includes(id))return {ok:false,reason:'owned'};if(this.profile.coins<item.price)return {ok:false,reason:'funds'};this.profile.coins-=item.price;this.profile.owned.push(id);this.profile.equipped=id;this.save();return {ok:true};}
 equip(id){if(!this.profile.owned.includes(id))return false;this.profile.equipped=id;this.save();return true;}
 claim(kind,runId){const r=this.run;if(!r||r.id!==runId||r.closed)return false;
  if(kind==='revive'){if(r.revived)return false;r.revived=true;return true;}
  if(kind==='double'){if(r.doubled||r.earned===0||!valid(this.profile.coins+r.earned))return false;this.profile.coins+=r.earned;r.doubled=true;r.closed=true;this.save();return true;}
  return false;
 }
}
