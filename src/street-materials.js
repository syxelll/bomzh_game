import * as THREE from 'three';
export function streetTextures(){
 let seed=8141;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const canvas=()=>{const c=document.createElement('canvas');c.width=c.height=512;return c;};
 const brick=canvas(),bump=canvas(),asphalt=canvas(),concrete=canvas(),rust=canvas();
 const b=brick.getContext('2d'),h=bump.getContext('2d');b.fillStyle='#625e54';b.fillRect(0,0,512,512);h.fillStyle='#555';h.fillRect(0,0,512,512);
 const palette=['#876655','#785a4e','#936f5b','#755449','#826357'];
 for(let row=0;row<16;row++)for(let col=-1;col<9;col++){const x=col*64+(row%2)*32,y=row*32;b.fillStyle=palette[Math.floor(random()*palette.length)];b.fillRect(x+2,y+2,60,28);b.fillStyle='#c5aa812b';b.fillRect(x+3,y+3,58,2);h.fillStyle='#bbb';h.fillRect(x+2,y+2,60,28);}
 function grain(c,amount){const ctx=c.getContext('2d'),image=ctx.getImageData(0,0,512,512);for(let i=0;i<image.data.length;i+=4){const n=(random()-.5)*amount;for(let j=0;j<3;j++)image.data[i+j]+=n;}ctx.putImageData(image,0,0);}
 grain(brick,25);
 const a=asphalt.getContext('2d');a.fillStyle='#65665f';a.fillRect(0,0,512,512);grain(asphalt,24);
 for(let i=0;i<35;i++){let x=random()*512,y=random()*512;a.strokeStyle=i%2?'#383d3699':'#92918355';a.lineWidth=1+random();a.beginPath();a.moveTo(x,y);for(let j=0;j<8;j++){x+=(random()-.5)*45;y+=random()*25;a.lineTo(x,y);}a.stroke();}
 for(let i=0;i<18;i++){a.fillStyle='#333a3020';a.beginPath();a.ellipse(random()*512,random()*512,20+random()*65,10+random()*25,random()*3,0,Math.PI*2);a.fill();}
 const c=concrete.getContext('2d');c.fillStyle='#929185';c.fillRect(0,0,512,512);grain(concrete,35);c.strokeStyle='#4b514746';c.lineWidth=3;for(let i=0;i<=512;i+=128){c.strokeRect(i,0,128,512);c.strokeRect(0,i,512,128);}
 const r=rust.getContext('2d');r.fillStyle='#707d69';r.fillRect(0,0,512,512);for(let i=0;i<130;i++){r.fillStyle=i%2?'#654735':'#8f6848';r.beginPath();r.ellipse(random()*512,random()*512,random()*18,random()*38,random()*4,0,Math.PI*2);r.fill();}grain(rust,20);
 const texture=(c,color=true)=>{const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.colorSpace=color?THREE.SRGBColorSpace:THREE.NoColorSpace;t.anisotropy=4;return t;};
 return {brick:texture(brick),brickBump:texture(bump,false),asphalt:texture(asphalt),concrete:texture(concrete),rust:texture(rust)};
}
