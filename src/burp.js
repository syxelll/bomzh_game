import * as THREE from 'three';
import {surfaceAnchor} from './surface-anchor.js';
const COUNT=48,LIFE=.82,INTERVAL=.012;
const smooth=(a,b,x)=>THREE.MathUtils.smoothstep(x,a,b);
export class BurpEffect{
 constructor(scene){
  this.root=new THREE.Group();this.root.visible=false;scene.add(this.root);
  const geometry=new THREE.PlaneGeometry(1,1);this.opacity=new THREE.InstancedBufferAttribute(new Float32Array(COUNT),1).setUsage(THREE.DynamicDrawUsage);geometry.setAttribute('puffOpacity',this.opacity);
  geometry.setAttribute('puffSeed',new THREE.InstancedBufferAttribute(Float32Array.from({length:COUNT},(_,i)=>i*13.731),1));
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{clock:{value:0}},vertexShader:`
   attribute float puffOpacity,puffSeed;varying vec2 uvCloud;varying float alphaCloud,seedCloud;
   void main(){uvCloud=uv;alphaCloud=puffOpacity;seedCloud=puffSeed;
    vec4 center=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);
    center.xy+=position.xy*vec2(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz));
    gl_Position=projectionMatrix*center;}`,fragmentShader:`
   uniform float clock;varying vec2 uvCloud;varying float alphaCloud,seedCloud;
   float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
   float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
   void main(){if(alphaCloud<.002)discard;vec2 p=uvCloud*2.-1.;
    float a=seedCloud+clock*.27;mat2 turn=mat2(cos(a),-sin(a),sin(a),cos(a));
    vec2 q=turn*p*3.+vec2(seedCloud,clock*.12);
    float n=noise(q)*.57+noise(q*2.1)*.28+noise(q*4.3)*.15;
    float edge=1.-smoothstep(.68,.94,length(p)+(n-.5)*.48);
    float density=edge*mix(.68,1.,smoothstep(.22,.72,n));float alpha=density*alphaCloud;
    if(alpha<.005)discard;
    vec3 shade=mix(vec3(.035,.23,.008),vec3(.28,.72,.035),smoothstep(.3,.8,n*.6+uvCloud.y*.4));
    gl_FragColor=vec4(shade,alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`});
  this.cloud=new THREE.InstancedMesh(geometry,material,COUNT);this.cloud.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.cloud.frustumCulled=false;this.root.add(this.cloud);
  this.particles=Array.from({length:COUNT},(_,i)=>({birth:-Infinity,origin:new THREE.Vector3(),direction:new THREE.Vector3(),seed:i*2.399963}));this.cursor=0;this.point=new THREE.Vector3();this.matrix=new THREE.Matrix4();this.scale=new THREE.Vector3();this.rotation=new THREE.Quaternion();this.lastTime=0;this.lastAttack=-1;
 }
 update(player,active){
  const time=player.animationTime??0,dt=Math.max(0,Math.min(.05,time-this.lastTime));this.lastTime=time;
  if(this.visual!==player.visual){this.visual=player.visual;this.anchor=null;this.particles.forEach(p=>p.birth=-Infinity);}
  const duration=player.attackSpec?.duration??1.2,elapsed=player.attackTime??0,progress=elapsed/duration;
  if(active&&elapsed<this.lastAttack)this.emittedUntil=0;
  if(!active)this.emittedUntil=0;
  if(active&&progress>=.22&&progress<.72&&dt>0){
   this.anchor??=surfaceAnchor(player,/teeth/i,[.5,.65,1]);
   if(this.anchor)this.anchor.get(this.point);else this.point.set(player.x,1.52,player.z);
   const count=Math.min(5,Math.floor((elapsed-(this.emittedUntil??elapsed-dt))/INTERVAL));
   for(let n=0;n<count;n++){const p=this.particles[this.cursor++%COUNT];p.birth=time-n*INTERVAL;p.origin.copy(this.point);p.direction.set(Math.sin(player.heading),.035,Math.cos(player.heading));p.origin.addScaledVector(p.direction,.035);}
   if(count)this.emittedUntil=elapsed;
  }else if(active)this.emittedUntil=elapsed;
  this.lastAttack=active?elapsed:-1;
  let visible=0;
  for(let i=0;i<COUNT;i++){const p=this.particles[i],age=time-p.birth,t=age/LIFE,alive=t>=0&&t<1;
   if(alive){visible++;const reach=2.05*(1-Math.exp(-3.1*age));this.point.copy(p.origin).addScaledVector(p.direction,reach);
    const spread=.012+age*.22;this.point.x+=Math.cos(p.seed)*spread;this.point.z+=Math.sin(p.seed)*spread;this.point.y+=age*.18+Math.sin(p.seed+age*4)*spread*.65;
    const pulse=.88+.12*Math.sin(p.seed);const size=(.10+Math.pow(t,.65)*.78)*pulse;this.scale.set(size*(1.05+.16*Math.sin(p.seed)),size,1);this.opacity.setX(i,smooth(0,.035,age)*(1-smooth(.43,.82,age))*.82);
   }else{this.scale.set(0,0,0);this.opacity.setX(i,0);}
   this.matrix.compose(this.point,this.rotation,this.scale);this.cloud.setMatrixAt(i,this.matrix);
  }
  this.root.visible=visible>0;this.cloud.instanceMatrix.needsUpdate=true;this.opacity.needsUpdate=true;this.cloud.material.uniforms.clock.value=time;
 }
}
