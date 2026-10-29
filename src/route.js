export const OUTDOOR_STAGES=5,INDOOR_STAGES=3;
export const COURTYARD_TYPES=['laundry','basketball','service','garages','market','garden','workshop','sport'];
export const COURTYARD_NAMES=['Двор с бельём','Баскетбольная площадка','Хозяйственный двор','Гаражный двор','Старый рынок','Зелёный двор','Ремонтный двор','Спортивный двор'];
const CYCLE=OUTDOOR_STAGES+INDOOR_STAGES;
export function routeStage(index,start='street'){
 const shifted=index+(start==='entrance'?OUTDOOR_STAGES:0),phase=((shifted%CYCLE)+CYCLE)%CYCLE,location=phase<OUTDOOR_STAGES?'street':'entrance',section=location==='street'?phase:phase-OUTDOOR_STAGES;
 const slot=Math.max(0,[1,3,4].indexOf(section)),ordinal=Math.floor(shifted/CYCLE)*3+slot,variant=((ordinal*5)%COURTYARD_TYPES.length+COURTYARD_TYPES.length)%COURTYARD_TYPES.length;
 return {location,section,courtyard:location==='street'&&[1,3,4].includes(section),variant,last:section===(location==='street'?OUTDOOR_STAGES:INDOOR_STAGES)-1};
}
export function locationForStage(index,start='street'){return routeStage(index,start).location;}
export function exitForClear(clearedIndex,start='street'){const current=routeStage(clearedIndex,start),next=routeStage(clearedIndex+1,start);return current.location!==next.location?{to:next.location,x:clearedIndex*26+(current.location==='street'?23.2:15.15),z:-1.45,doorZ:-3.18}:null;}
