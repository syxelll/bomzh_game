import * as THREE from 'three';
let shared;
export function paintedAsphalt(){
 if(shared)return shared;let map=null,bump=null;
 if(typeof document!=='undefined'){
  const size=1024,canvas=document.createElement('canvas');canvas.width=canvas.height=size;const c=canvas.getContext('2d');c.fillStyle='#5f655f';c.fillRect(0,0,size,size);let seed=9473;const rand=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
  // Wrap every brush dab at the tile boundary. No cracks or recognisable stamps.
  for(let i=0;i<160;i++){const x=rand()*size,y=rand()*size,length=100+rand()*380,width=20+rand()*70,angle=rand()*Math.PI,color=['#858575','#4f5955','#777d6e','#565e57','#7c8172'][i%5],alpha=.065+rand()*.045,bristles=Array.from({length:6},()=>.6+rand()*1.2);
   for(const ox of[-size,0,size])for(const oy of[-size,0,size]){c.save();c.translate(x+ox,y+oy);c.rotate(angle);c.fillStyle=color;c.globalAlpha=alpha;c.beginPath();c.moveTo(-length/2,-width*.25);c.bezierCurveTo(-length*.15,-width*.62,length*.25,-width*.4,length/2,-width*.12);c.lineTo(length*.45,width*.3);c.bezierCurveTo(length*.16,width*.55,-length*.3,width*.4,-length/2,width*.18);c.fill();c.globalAlpha=.007;for(let line=0;line<3;line++){c.fillStyle=line%2?'#d0c7aa':'#414e44';c.fillRect(-length*.42,(line/3-.5)*width,length*.85,bristles[line]);}c.restore();}
  }
  for(let i=0;i<18000;i++){c.globalAlpha=.025;c.fillStyle=i%2?'#d0c7aa':'#38473e';c.fillRect(rand()*size,rand()*size,1+rand()*2,1+rand()*2);}c.globalAlpha=1;
  map=new THREE.CanvasTexture(canvas);map.name='Seamless painted asphalt brushwork';map.colorSpace=THREE.SRGBColorSpace;map.wrapS=map.wrapT=THREE.RepeatWrapping;map.anisotropy=4;
  const relief=document.createElement('canvas');relief.width=relief.height=128;const r=relief.getContext('2d');r.fillStyle='#808080';r.fillRect(0,0,128,128);for(let i=0;i<1800;i++){r.fillStyle=i%2?'#777777':'#898989';r.fillRect(rand()*128,rand()*128,1,1);}bump=new THREE.CanvasTexture(relief);bump.wrapS=bump.wrapT=THREE.RepeatWrapping;
 }
 shared=new THREE.MeshStandardMaterial({name:'Painted asphalt',map,bumpMap:bump,bumpScale:.008,roughness:.97,metalness:0,color:map?'#ffffff':'#5f655f',envMapIntensity:.12});
 shared.onBeforeCompile=shader=>{
  shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec2 asphaltWorld;').replace('#include <project_vertex>',`#include <project_vertex>
   vec4 asphaltPoint=vec4(transformed,1.);
   #ifdef USE_INSTANCING
    asphaltPoint=instanceMatrix*asphaltPoint;
   #endif
   asphaltWorld=(modelMatrix*asphaltPoint).xz;`);
  shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
   varying vec2 asphaltWorld;
   float asphaltHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
   float asphaltNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(asphaltHash(i),asphaltHash(i+vec2(1.,0.)),f.x),mix(asphaltHash(i+vec2(0.,1.)),asphaltHash(i+1.),f.x),f.y);}`)
   .replace('#include <map_fragment>',`#include <map_fragment>
    float broad=asphaltNoise(asphaltWorld*.13)*.7+asphaltNoise(asphaltWorld*.37+17.3)*.3;
    diffuseColor.rgb*=mix(.82,1.14,broad);
    diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(1.035,1.015,.95),asphaltNoise(asphaltWorld*.21+43.));`);
 };shared.customProgramCacheKey=()=> 'painted-asphalt-world-tone-v1';return shared;
}
export function applyPaintedAsphalt(root){const material=paintedAsphalt();root.traverse(mesh=>{if(mesh.isMesh&&!Array.isArray(mesh.material)&&/asphalt/i.test(mesh.material.name)){mesh.material=material;mesh.userData.paintedAsphalt=true;}});return material;}
