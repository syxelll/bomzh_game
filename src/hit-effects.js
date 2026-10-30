import * as THREE from 'three';
const COUNT=128;
export class HitEffects{
 constructor(scene){
  const geometry=new THREE.PlaneGeometry(1,1);this.alpha=new THREE.InstancedBufferAttribute(new Float32Array(COUNT),1);this.mode=new THREE.InstancedBufferAttribute(new Float32Array(COUNT),1);this.seed=new THREE.InstancedBufferAttribute(Float32Array.from({length:COUNT},(_,i)=>i*7.319),1);geometry.setAttribute('effectAlpha',this.alpha);geometry.setAttribute('effectMode',this.mode);geometry.setAttribute('effectSeed',this.seed);
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,vertexShader:`attribute float effectAlpha,effectMode,effectSeed;varying vec2 pUv;varying vec3 tint;varying float opacityP,modeP,seedP;
   void main(){pUv=uv;tint=instanceColor;opacityP=effectAlpha;modeP=effectMode;seedP=effectSeed;vec4 p=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);float a=effectSeed;mat2 turn=mat2(cos(a),-sin(a),sin(a),cos(a));p.xy+=turn*(position.xy*vec2(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz)));gl_Position=projectionMatrix*p;}`,
   fragmentShader:`varying vec2 pUv;varying vec3 tint;varying float opacityP,modeP,seedP;
    float noise(vec2 p){return sin(p.x*9.+seedP)*sin(p.y*7.-seedP)*.5+.5;}
    void main(){vec2 p=pUv*2.-1.;float n=noise(p)*.6+noise(p*2.7)*.4,mask;
     if(modeP>1.5){float a=atan(p.y,p.x),r=length(p);float outline=.45+.16*cos(a*7.+seedP)+.08*sin(a*11.);mask=1.-smoothstep(outline-.05,outline+.07,r);}
     else if(modeP>.5){float edge=abs(p.x)+abs(p.y)*.28;mask=(1.-smoothstep(.15,.42,edge))*(1.-smoothstep(.55,1.,abs(p.y)));}
     else{mask=(1.-smoothstep(.55,.97,length(p)+(n-.5)*.22))*(.55+n*.45);}
     float a=mask*opacityP;if(a<.005)discard;vec3 color=mix(tint*.48,tint*1.25,smoothstep(.15,.85,n*.5+pUv.y*.5));gl_FragColor=vec4(color,a);
     #include <tonemapping_fragment>
     #include <colorspace_fragment>
    }`});
  this.mesh=new THREE.InstancedMesh(geometry,material,COUNT);this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.mesh.frustumCulled=false;this.mesh.visible=false;scene.add(this.mesh);this.particles=Array.from({length:COUNT},()=>({age:99,life:.4,position:new THREE.Vector3(),velocity:new THREE.Vector3(),size:1,mode:0}));this.cursor=0;this.matrix=new THREE.Matrix4();this.scale=new THREE.Vector3();this.rotation=new THREE.Quaternion();this.point=new THREE.Vector3();this.toward=new THREE.Vector3();this.color=new THREE.Color();
  for(let i=0;i<COUNT;i++){this.matrix.makeScale(0,0,0);this.mesh.setMatrixAt(i,this.matrix);this.mesh.setColorAt(i,new THREE.Color());}
 }
 emit(x,z,strength=.18,kind='jab',camera){const power=THREE.MathUtils.clamp(strength/.18,.65,1.65),tint=kind==='burp'?'#6ac928':kind==='spray'?'#d4b431':kind==='hurt'?'#ce3022':'#e94127';
  const toward=this.toward;if(camera)toward.copy(camera.position).sub(this.point.set(x,1.15,z)).normalize();else toward.set(0,0,1);
  for(let i=0;i<20;i++){const index=this.cursor++%COUNT,p=this.particles[index],a=(i*2.399963+this.cursor*.17),mode=i<2?2:i<11?1:0;
   p.age=0;p.life=mode===2?.11:mode===1?.25:.45;p.mode=mode;p.size=power*(mode===2?.45:mode===1?.12:.20+(i%3)*.035);p.position.set(x,1.15,z).addScaledVector(toward,.28);p.velocity.set(Math.cos(a)*(mode===1?2.2:.65),Math.sin(a)*(mode===1?2.0:.55)+.18,Math.sin(a*1.7)*.4).multiplyScalar(power);this.mode.setX(index,mode);this.color.set((kind==='jab'||kind==='kick'||kind==='finisher'||kind==='hurt')?(mode===2?'#f25029':mode===1?(i%2?'#bf1d15':'#e84322'):'#74372d'):tint);if(mode===0)this.color.multiplyScalar(.85);this.mesh.setColorAt(index,this.color);}
  this.mode.needsUpdate=true;this.mesh.instanceColor.needsUpdate=true;this.update(0);
 }
 update(dt){let visible=0;for(let i=0;i<COUNT;i++){const p=this.particles[i];p.age+=dt;const t=p.age/p.life;if(t>=1){this.scale.setScalar(0);this.alpha.setX(i,0);}else{visible++;this.point.copy(p.position).addScaledVector(p.velocity,p.age);this.point.y-=p.mode===1?p.age*p.age*1.3:0;const s=p.size*(p.mode===0?.6+t*2:p.mode===2?1+t*.8:1-t*.4);this.scale.set(s,p.mode===1?s*3.2:s,1);this.alpha.setX(i,(1-t)*(p.mode===0?.65:1));}this.matrix.compose(this.point,this.rotation,this.scale);this.mesh.setMatrixAt(i,this.matrix);}this.mesh.visible=visible>0;this.alpha.needsUpdate=true;this.mesh.instanceMatrix.needsUpdate=true;}
}
