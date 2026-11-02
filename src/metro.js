import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
export const METRO_LANE={min:-.9,max:.9};
export const METRO_DOORS=[1.55,8.05,14.55,21.05];
export function metroLampBrightness(time,index){const phase=((time+index*1.37)%12.7+12.7)%12.7;return (phase<.07?.63:phase<.15?.86:1)*(.985+.015*Math.sin(time*39+index));}
function labelMap(kind){if(typeof document==='undefined')return null;const c=document.createElement('canvas');c.width=768;c.height=128;const ctx=c.getContext('2d');ctx.fillStyle='#b8b49b';ctx.fillRect(0,0,768,128);ctx.fillStyle='#3b4943';ctx.textAlign='center';if(kind==='route'){ctx.fillStyle='#7c4939';ctx.fillRect(35,53,698,6);for(let i=0;i<5;i++){const x=50+i*167;ctx.fillStyle='#3e5048';ctx.beginPath();ctx.arc(x,56,9,0,Math.PI*2);ctx.fill();ctx.fillStyle='#c9c4a9';ctx.beginPath();ctx.arc(x,56,4,0,Math.PI*2);ctx.fill();ctx.fillStyle='#33433d';ctx.font='bold 17px Arial';ctx.fillText(['ДЕПО','ЗАВОД','РАЙОН','ПЛОЩАДЬ','ЦЕНТР'][i],x,100);}}else{ctx.font=kind==='warning'?'bold 43px Arial':'bold 34px Arial';ctx.fillText(kind==='warning'?'НЕ ПРИСЛОНЯТЬСЯ':'0816  •  ВАГОН МЕТРО',384,82);}for(let i=0;i<450;i++){ctx.fillStyle=i%2?'#f0e5bd18':'#343b2b20';ctx.fillRect((i*113.9)%768,(i*37.3)%128,2+i%8,1+i%4);}const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;return map;}
export class MetroAtmosphere{
 constructor(){this.clock={value:0};}
 update(time){this.clock.value=time;}
}
function tunnelMaterial(clock){const material=new THREE.MeshBasicMaterial({name:'Metro passing tunnel',color:'#202a2a'});material.onBeforeCompile=shader=>{shader.uniforms.metroTime=clock;shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 tunnelPoint;').replace('#include <project_vertex>',`#include <project_vertex>
 vec4 tunnelVertex=vec4(transformed,1.);
 #ifdef USE_INSTANCING
 tunnelVertex=instanceMatrix*tunnelVertex;
 #endif
 tunnelPoint=(modelMatrix*tunnelVertex).xyz;`);shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nuniform float metroTime;varying vec3 tunnelPoint;').replace('#include <color_fragment>',`#include <color_fragment>
 float travel=tunnelPoint.x+metroTime*10.5,beam=1.-smoothstep(.12,.38,abs(mod(travel,5.7)-.5));
 float stripe=1.-smoothstep(.035,.085,abs(tunnelPoint.y-1.66));float grit=.5+.22*sin(travel*4.7+tunnelPoint.y*9.)+.18*sin(travel*12.1-tunnelPoint.y*3.);
 diffuseColor.rgb=mix(vec3(.035,.051,.050),vec3(.14,.17,.155),grit*.38);diffuseColor.rgb*=1.-beam*.74;
 float serviceLight=(1.-smoothstep(.06,.24,abs(mod(travel,17.5)-2.)))*(1.-smoothstep(.10,.23,abs(tunnelPoint.y-2.03)));
 diffuseColor.rgb+=stripe*vec3(.035,.039,.027)+serviceLight*vec3(.23,.19,.11);`);};material.customProgramCacheKey=()=>'painted-metro-tunnel-v1';return material;}
export function createMetro({clock={value:0}}={}){
 const root=new THREE.Group();root.name='Metro_car_26m';const parts=new Map(),unit=new THREE.BoxGeometry(1,1,1),metal=new THREE.MeshStandardMaterial({name:'Metro worn steel',color:'#7a8173',roughness:.81,metalness:.18}),enamel=new THREE.MeshStandardMaterial({name:'Metro aged ivory enamel',color:'#b0b09a',roughness:.92}),lower=new THREE.MeshStandardMaterial({name:'Metro faded teal enamel',color:'#4c645f',roughness:.94}),leather=new THREE.MeshStandardMaterial({name:'Metro cracked brown vinyl',color:'#64503e',roughness:.93}),floor=new THREE.MeshStandardMaterial({name:'Metro worn rubber floor',color:'#56594f',roughness:1}),rubber=new THREE.MeshStandardMaterial({name:'Metro black rubber seals',color:'#202923',roughness:1}),dark=new THREE.MeshStandardMaterial({name:'Metro panel recess',color:'#28332f',roughness:1}),paper=new THREE.MeshStandardMaterial({name:'Metro discarded paper',color:'#b2a68b',roughness:1,side:THREE.DoubleSide}),lamp=new THREE.MeshStandardMaterial({name:'Metro fluorescent diffuser',color:'#c4c5a9',emissive:'#d7d9a8',emissiveIntensity:.52,roughness:.85}),tunnel=tunnelMaterial(clock),glass=new THREE.MeshStandardMaterial({name:'Metro dusty glass',color:'#738b7b',transparent:true,opacity:.13,roughness:.48,depthWrite:false});
 const label=(kind)=>new THREE.MeshStandardMaterial({name:'Metro '+kind+' placard',map:labelMap(kind),color:'#d4ceb6',roughness:1});const route=label('route'),warning=label('warning'),serial=label('serial');
 lamp.onBeforeCompile=shader=>{shader.uniforms.metroTime=clock;shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying float metroLampIndex;').replace('#include <project_vertex>',`#include <project_vertex>
 vec4 lampCenter=vec4(transformed,1.);
 #ifdef USE_INSTANCING
 lampCenter=instanceMatrix*lampCenter;
 #endif
 metroLampIndex=floor((modelMatrix*lampCenter).x/6.5);`);shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nuniform float metroTime;varying float metroLampIndex;').replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
 float phase=mod(metroTime+metroLampIndex*1.37,12.7);totalEmissiveRadiance*=(phase<.07?.63:phase<.15?.86:1.)*(.985+.015*sin(metroTime*39.+metroLampIndex));`);};lamp.customProgramCacheKey=()=>'metro-fluorescent-v1';
 const add=(g,m,x,y,z,rotation=null)=>{if(rotation)g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(...rotation)));g.translate(x,y,z);if(!parts.has(m))parts.set(m,[]);parts.get(m).push(g);};
 const box=(w,h,d,m,x,y,z,rotation=null)=>add(new THREE.BoxGeometry(w,h,d),m,x,y,z,rotation);
 const rod=(a,b,r=.022,m=metal)=>{a=new THREE.Vector3(...a);b=new THREE.Vector3(...b);const delta=b.clone().sub(a),g=new THREE.CylinderGeometry(r,r,delta.length(),8);g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize()));add(g,m,...a.add(b).multiplyScalar(.5).toArray());};
 const pane=(x,y,w,h)=>{box(w+.13,h+.13,.07,rubber,x,y,-2.07);box(w,h,.022,tunnel,x,y,-2.015);box(w,h,.016,glass,x,y,-1.99);for(const dx of[-w/2-.035,w/2+.035])box(.045,h+.1,.065,metal,x+dx,y,-1.95);for(const dy of[-h/2-.035,h/2+.035])box(w+.11,.045,.065,metal,x,y+dy,-1.95);};
 // Overscan the cut-away floor so the game camera never sees its open edge.
 box(26,.16,16.25,floor,13,-.08,5.875);box(26,.12,.12,rubber,13,.06,-2.1);
 // The near side and roof are cut away for the game camera; furniture still
 // establishes the carriage width, while the central aisle is physically clear.
 for(let bay=0;bay<4;bay++){const start=bay*6.5,door=start+1.55,window=start+4.53;
  for(const [x,w]of[[start+.34,.68],[start+2.65,.5],[start+6.35,.3]])box(w,2.75,.15,enamel,x,1.375,-2.14);
  box(3.48,1.24,.15,lower,window,.62,-2.14);box(3.48,.25,.16,enamel,window,2.64,-2.14);box(3.48,.09,.18,metal,window,1.25,-2.08);
  pane(window,1.88,3.17,1.10);box(.04,1.10,.07,metal,window,1.88,-1.95);
  for(const side of[-1,1]){const x=door+side*.405;box(.79,1.28,.12,lower,x,.64,-2.08);box(.79,.13,.12,enamel,x,2.48,-2.08);for(const dx of[-.357,.357])box(.075,1.17,.12,enamel,x+dx,1.865,-2.08);pane(x,1.86,.59,1.03);box(.025,2.50,.025,rubber,door+side*.015,1.25,-1.995);box(.035,.20,.045,metal,door+side*.085,1.13,-1.96);}
  for(const dx of[-.87,.87])box(.06,2.59,.16,metal,door+dx,1.295,-2.02);box(1.82,.07,.16,metal,door,2.57,-2.02);box(1.75,.035,.32,metal,door,.018,-1.98);box(1.27,.14,.016,warning,door,2.70,-2.04);
  box(3.18,.17,.62,leather,window,.48,-1.73);box(3.18,.57,.16,leather,window,.88,-2.0);box(3.25,.07,.67,metal,window,.365,-1.73);box(3.24,.06,.12,metal,window,1.195,-2.0);
  for(let seat=0;seat<4;seat++){const sx=window-1.17+seat*.78;box(.015,.018,.52,dark,sx+.38,.573,-1.72);box(.016,.44,.018,dark,sx+.38,.89,-1.906);for(const yy of[.73,1.04])box(.045,.016,.023,metal,sx,yy,-1.9);}
  for(const dx of[-1.48,1.48]){box(.08,.38,.48,dark,window+dx,.23,-1.75);rod([window+dx,.56,-1.38],[window+dx,1.30,-1.95]);}
  for(const dx of[-.98,.98]){box(.37,.13,.10,dark,window+dx,.18,-1.44);for(let n=0;n<5;n++)box(.03,.065,.013,metal,window+dx-.12+n*.06,.18,-1.38);}
  // Grab rails remain along the wall/ceiling, outside the combat lane.
  rod([door-.91,.08,-1.44],[door-.91,2.7,-1.44]);rod([door+.91,.08,-1.44],[door+.91,2.7,-1.44]);
  rod([start+.2,2.69,-1.28],[start+6.3,2.69,-1.28],.025);
  for(const dx of[-.65,.65]){rod([window+dx,2.67,-1.28],[window+dx,2.34,-1.28],.018);add(new THREE.TorusGeometry(.085,.014,6,16),metal,window+dx,2.28,-1.28);}
  box(2.65,.14,.018,route,window,2.58,-2.04);box(.74,.16,.018,serial,start+.34,1.23,-2.045);
  box(2.35,.10,.34,metal,start+3.25,2.94,-.88);box(2.18,.045,.23,lamp,start+3.25,2.88,-.88);for(const dx of[-1.05,1.05])box(.045,.05,.26,metal,start+3.25+dx,2.865,-.88);
  for(let n=0;n<9;n++)box(.052,.075,.02,dark,start+2.9+n*.09,2.70,-2.045);
  // The camera-facing seats are cut away below the knees, like the near wall.
  // Keep gaps between them so attacks, fallen bodies and pickups stay readable.
  box(2.35,.12,.52,leather,window,.25,1.96);box(2.35,.15,.10,leather,window,.35,2.18);box(2.42,.04,.57,metal,window,.175,1.96);for(const dx of[-1.08,1.08])box(.065,.15,.42,dark,window+dx,.075,1.96);
  for(let n=0;n<3;n++)box(.22,.006,.15,paper,start+3.2+n*.84,.012,n%2?.78:-.77,[0,n*.57+bay,0]);
  // Old scuffs and patches are geometry, not bright decorative trim.
  for(let n=0;n<4;n++)box(.11,.008,.18,dark,door-.55+n*.32,.004,-1.36,[0,n*.3,0]);
 }
 for(const end of[.05,25.95]){box(.12,2.78,.88,enamel,end,1.39,-1.84);box(.12,.24,.88,lower,end,.12,1.84);box(.16,.15,1.25,metal,end,2.85,-1.57);for(let n=0;n<4;n++){const x=end+(end<1?1:-1)*n*.045;box(.027,2.6,.075,rubber,x,1.3,-1.38);box(.027,.24,.075,rubber,x,.12,1.38);}box(.15,.004,2.7,metal,end,.002,0);}
 // Faceted curved ceiling over the far half of the carriage.
 for(let section=0;section<5;section++){const z=-2.22+section*.30,y=2.76+Math.sin((section+1)/6*Math.PI/2)*.35;box(26,.065,.34,enamel,13,y,z,[section<3?-.30:-.10,0,0]);}
 for(const [material,geometries]of parts){const plain=geometries.map(g=>g.index?g.toNonIndexed():g),geometry=mergeGeometries(plain);for(const g of new Set([...geometries,...plain]))g.dispose();const mesh=new THREE.Mesh(geometry,material);mesh.name=material.name;mesh.castShadow=!['Metro passing tunnel','Metro dusty glass','Metro fluorescent diffuser','Metro discarded paper'].includes(material.name);mesh.userData.noShadow=!mesh.castShadow;mesh.receiveShadow=true;root.add(mesh);}
 unit.dispose();root.userData={metro:true,windowCount:12,doorCount:4,seatPlaces:32,carLength:26,lane:{...METRO_LANE},foreground:true};return root;
}
