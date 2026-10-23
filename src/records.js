const key='bomzh:endless-record:v1';
const valid=n=>Number.isSafeInteger(n)&&n>=0;
export function readRecord(storage){try{const value=JSON.parse((storage??globalThis.localStorage).getItem(key));return value&&valid(value.levels)&&valid(value.score)?value:{levels:0,score:0};}catch{return {levels:0,score:0};}}
export function saveRecord(run,storage){const best=readRecord(storage);if(!valid(run.levels)||!valid(run.score))return best;const better=run.levels>best.levels||(run.levels===best.levels&&run.score>best.score);if(!better)return best;const result={levels:run.levels,score:run.score};try{(storage??globalThis.localStorage).setItem(key,JSON.stringify(result));}catch{/* The run remains playable when browser storage is unavailable. */}return result;}
