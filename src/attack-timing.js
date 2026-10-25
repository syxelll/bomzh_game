export function streamEnvelope(seconds,duration){const start=duration*.2,end=duration*.8;return Math.max(0,Math.min(1,(seconds-start)/.22,(end-seconds)/.18));}
export function streamReach(seconds,duration){const t=streamEnvelope(seconds,duration);return t*t*(3-2*t);}
