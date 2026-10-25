export function graphicsQuality(requested,width,pixelRatio=1){
 const high=requested==='high',low=requested==='low'||(!high&&width<650);
 return {mode:high?'high':low?'low':'balanced',lowQuality:low,pixelRatio:Math.min(pixelRatio,high?2:low?1:1.5),samples:high?2:0,shadowSize:high?2048:1024};
}
