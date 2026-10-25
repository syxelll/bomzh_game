// Adjust only drawing pixels: meshes, textures and game speed stay unchanged.
export class AdaptiveResolution{
 constructor(maxRatio,minRatio=Math.min(1,maxRatio)){this.max=maxRatio;this.min=minRatio;this.ratio=maxRatio;this.sum=0;this.count=0;this.warmup=1;this.averageMs=0;}
 sample(seconds,active=true){
  if(!active||!Number.isFinite(seconds)||seconds<=0||seconds>2)return null;
  if(this.warmup>0){this.warmup-=seconds;return null;}
  this.sum+=seconds;this.count++;if(this.sum<1||this.count<12)return null;
  this.averageMs=this.sum/this.count*1000;this.sum=0;this.count=0;let next=this.ratio;
  if(this.averageMs>29)next=Math.max(this.min,this.ratio-.2);else if(this.averageMs<18)next=Math.min(this.max,this.ratio+.1);
  next=Math.round(next*100)/100;if(next===this.ratio)return null;
  this.ratio=next;this.warmup=this.averageMs>29?.6:2;return next;
 }
}
