import * as THREE from 'three';
const mod=(x,y)=>((x%y)+y)%y;
export function lampFlicker(time,index){
 const period=6.7+mod(index*1.37,2.8),phase=mod(time+index*1.91,period);
 const dip=phase<.055?.12:phase<.10?.78:phase<.17?.2:phase<.22?.62:1;
 return dip*(.98+.02*Math.sin(time*47+index*3));
}
// Share one time uniform across cloned chunks; world X gives every lamp its own phase.
export function configureEntranceLamps(root){
 const clock={value:0};root.traverse(mesh=>{if(!mesh.isMesh||mesh.material?.name!=='Entrance warm lamps')return;
 const material=mesh.material.clone();material.onBeforeCompile=shader=>{
  shader.uniforms.entranceLampTime=clock;
  shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying float entranceLampIndex;').replace('#include <project_vertex>',`#include <project_vertex>
   vec4 lampCenter=vec4(0.,0.,0.,1.);
   #ifdef USE_INSTANCING
    lampCenter=instanceMatrix*lampCenter;
   #endif
   entranceLampIndex=floor((modelMatrix*lampCenter).x/13.);`);
  shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
   uniform float entranceLampTime;varying float entranceLampIndex;
   float oldLampFlicker(float t,float index){float phase=mod(t+index*1.91,6.7+mod(index*1.37,2.8));
    float dip=phase<.055?.12:phase<.10?.78:phase<.17?.2:phase<.22?.62:1.;
    return dip*(.98+.02*sin(t*47.+index*3.));}`)
   .replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\ntotalEmissiveRadiance*=oldLampFlicker(entranceLampTime,entranceLampIndex);');
 };material.customProgramCacheKey=()=>'entrance-lamp-flicker-v1';mesh.material=material;
 });return clock;
}
export class LocationLighting{
 constructor({scene,lighting,sun,ambient,renderer,lampClock={value:0}}){Object.assign(this,{scene,lighting,sun,ambient,renderer,lampClock});this.indoor=false;this.lights=[0,1].map(()=>{const light=new THREE.PointLight('#ffca83',18,14,2);light.visible=false;scene.add(light);return light;});}
 update(location,x,time=0){this.lampClock.value=time;const indoor=location==='entrance';if(!indoor){if(this.indoor)this.lighting.apply();for(const l of this.lights)l.visible=false;this.indoor=false;return;}this.indoor=true;const v=this.lighting.value;this.sun.intensity=v.sunIntensity*.28;this.sun.color.set('#e8d4a8');this.sun.position.set(x-4,3.8,3.5);this.sun.target.position.set(x,0,-2);this.ambient.intensity=Math.max(.45,v.ambientIntensity*.65);this.ambient.color.set('#b8b6a1');this.ambient.groundColor.set('#444c3c');this.renderer.toneMappingExposure=v.exposure*1.06;this.scene.background.set('#565b50');this.scene.fog.color.set('#565b50');this.scene.fog.near=16;this.scene.fog.far=42;const base=Math.floor((x-4)/13)*13+4;this.lights.forEach((l,i)=>{l.visible=true;l.position.set(base+i*13,3.6,-2.65);l.intensity=18*lampFlicker(time,Math.floor((base+i*13)/13));});}
}
