export const COMBAT_CHORDS={
 'burp+jab':'grab',
 'jab+spray':'throw',
 'burp+spray':'super',
 'dodge+jab':'wallKick',
};
export const combatChord=(a,b)=>a===b?null:COMBAT_CHORDS[[a,b].sort().join('+')]??null;

// Reserve the first key briefly so a chord never also spends its component
// attacks. Touch taps commit on release; a drag can join two buttons one-handed.
export class CombatInputs{
 constructor(dispatch,{window=.10}={}){this.dispatch=dispatch;this.window=window;this.held=new Map();this.lastCombo=null;}
 press(token,button,time,{touch=false}={}){
  if(this.held.has(token))return;
  this.flush(time);
  const input={button,deadline:touch?Infinity:time+this.window,used:false};
  this.held.set(token,input);
  for(const [otherToken,other]of this.held){
   if(otherToken===token||other.used)continue;
   const action=combatChord(button,other.button);
   if(action){input.used=other.used=true;this.lastCombo={action,time};this.dispatch(action);return;}
  }
 }
 release(token,time){const input=this.held.get(token);if(!input)return;this.held.delete(token);if(!input.used){input.used=true;this.dispatch(input.button);}}
 gesture(token,button,time){const input=this.held.get(token);if(!input||input.used)return false;const action=combatChord(input.button,button);if(!action)return false;input.used=true;for(const other of this.held.values())if(other.button===button)other.used=true;this.lastCombo={action,time};this.dispatch(action);return true;}
 flush(time){for(const input of this.held.values())if(!input.used&&time>=input.deadline){input.used=true;this.dispatch(input.button);}}
 cancel(token){this.held.delete(token);}
 reset(){this.held.clear();}
 isHeld(button){return [...this.held.values()].some(input=>input.button===button);}
}
