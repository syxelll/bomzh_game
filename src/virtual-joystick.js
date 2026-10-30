export function joystickVector(dx,dy,radius){const length=Math.hypot(dx,dy),strength=Math.min(1,length/radius);if(strength<.12)return {x:0,y:0};const value=(strength-.12)/.88;return {x:dx/length*value,y:dy/length*value};}
export class VirtualJoystick{
 constructor(element,enabled=()=>true){this.x=0;this.y=0;this.active=false;this.pointer=null;this.element=element;this.knob=element.querySelector('#joystick-knob');
 const reset=()=>{this.x=this.y=0;this.active=false;this.pointer=null;this.knob.style.transform='translate(-50%,-50%)';element.classList.remove('active');};this.reset=reset;
 const move=e=>{if(e.pointerId!==this.pointer)return;if(!enabled()){reset();return;}const rect=element.getBoundingClientRect(),radius=rect.width*.35,dx=e.clientX-rect.left-rect.width/2,dy=e.clientY-rect.top-rect.height/2;Object.assign(this,joystickVector(dx,dy,radius));const scale=Math.min(1,radius/(Math.hypot(dx,dy)||1));this.knob.style.transform=`translate(calc(-50% + ${dx*scale}px),calc(-50% + ${dy*scale}px))`;};
 element.addEventListener('pointerdown',e=>{e.preventDefault();if(!enabled()||this.pointer!==null)return;this.pointer=e.pointerId;this.active=true;element.setPointerCapture(e.pointerId);element.classList.add('active');move(e);});element.addEventListener('pointermove',move);
 for(const name of ['pointerup','pointercancel','lostpointercapture'])element.addEventListener(name,e=>{if(e.pointerId===this.pointer)reset();});window.addEventListener('blur',reset);document.addEventListener('visibilitychange',reset);
 this.observer=new MutationObserver(()=>{if(!enabled())reset();});this.observer.observe(document.body,{attributes:true,attributeFilter:['class']});
 }
}
