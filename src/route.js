export const OUTDOOR_STAGES=5,INDOOR_STAGES=3;
const CYCLE=OUTDOOR_STAGES+INDOOR_STAGES;
export function routeStage(index,start='street'){
 const phase=((index+(start==='entrance'?OUTDOOR_STAGES:0))%CYCLE+CYCLE)%CYCLE,location=phase<OUTDOOR_STAGES?'street':'entrance',section=location==='street'?phase:phase-OUTDOOR_STAGES;
 return {location,section,courtyard:location==='street'&&[1,3,4].includes(section),variant:((Math.floor(index/CYCLE)+section)%3+3)%3,last:section===(location==='street'?OUTDOOR_STAGES:INDOOR_STAGES)-1};
}
export function locationForStage(index,start='street'){return routeStage(index,start).location;}
export function exitForClear(clearedIndex,start='street'){const current=routeStage(clearedIndex,start),next=routeStage(clearedIndex+1,start);return current.location!==next.location?{to:next.location,x:clearedIndex*26+(current.location==='street'?23.2:15.15),z:-1.45,doorZ:-3.18}:null;}
