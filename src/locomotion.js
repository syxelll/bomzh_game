export const WALK_SPEED=1.8;
export function advanceWalk(actor,distance){if(Number.isFinite(distance)&&distance>0)actor.walkDistance=(actor.walkDistance??0)+distance;}
export function walkFrame(distance,stride,frames){return (((distance/stride)%1)+1)%1*Math.max(0,frames-1);}
