export function actionEvent(actor,name,event,fallback){const clip=actor.userActions?.clips[name],frame=clip?.markers?.[event];return clip&&frame!==undefined?frame/Math.max(1,clip.frames.length-1)*clip.duration:fallback;}
export function actionDuration(actor,name,fallback){return actor.userActions?.clips[name]?.duration??fallback;}
export function startReaction(actor){if(actor.health<=0||actor.grabbed||actor.down>0)return;actor.reaction={elapsed:0};actor.stun=Math.max(actor.stun??0,actionDuration(actor,'hurt',.45));}
export function tickReaction(actor,dt){if(!actor.reaction)return;actor.reaction.elapsed+=Math.max(0,dt);if(actor.reaction.elapsed>=actionDuration(actor,'hurt',.56))actor.reaction=null;}
export function startFall(actor,{landed=false}={}){const fall=actionDuration(actor,'fall_back',.74);actor.fallen={elapsed:landed?fall:0};actor.down=fall+.3+actionDuration(actor,'getup_back',1.18)-actor.fallen.elapsed;actor.stun=Math.max(actor.stun??0,actor.down+.12);actor.windup=actor.strike=0;actor.reaction=null;actor.disgust=null;}
export function fallenPose(actor,dt){const state=actor.fallen;if(!state)return null;state.elapsed+=Math.max(0,dt);const fall=actionDuration(actor,'fall_back',.74),getup=actionDuration(actor,'getup_back',1.18),t=state.elapsed;
 if(t<fall)return {kind:'fall_back',progress:t/fall};
 if(actor.health<=0||t<fall+.3)return {kind:'grounded_back',progress:1};
 if(t<fall+.3+getup)return {kind:'getup_back',progress:(t-fall-.3)/getup};
 actor.fallen=null;actor.down=0;actor.slammed=false;return null;
}
