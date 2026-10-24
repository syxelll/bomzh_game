// Replace this provider with the chosen rewarded-ad SDK. Only its completed callback
// may return {completed:true}; cancellations and errors must never grant rewards.
// The preview provider is explicitly free and does not simulate an advertisement.
export const rewardProvider={mode:'free-preview',async request(){return {completed:true};}};

export async function requestReward(provider,placement,runId,timeoutMs=30000){
 let timer;
 try{return (await Promise.race([Promise.resolve().then(()=>provider.request({placement,runId})),new Promise(resolve=>{timer=setTimeout(()=>resolve({completed:false}),timeoutMs);})]))?.completed===true;}
 catch{return false;}finally{clearTimeout(timer);}
}
