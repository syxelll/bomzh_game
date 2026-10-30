(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Ff(i,e,t){const n=Math.hypot(i,e),s=Math.min(1,n/t);if(s<.12)return{x:0,y:0};const r=(s-.12)/.88;return{x:i/n*r,y:e/n*r}}class Of{constructor(e,t=()=>!0){this.x=0,this.y=0,this.active=!1,this.pointer=null,this.element=e,this.knob=e.querySelector("#joystick-knob");const n=()=>{this.x=this.y=0,this.active=!1,this.pointer=null,this.knob.style.transform="translate(-50%,-50%)",e.classList.remove("active")};this.reset=n;const s=r=>{if(r.pointerId!==this.pointer)return;if(!t()){n();return}const o=e.getBoundingClientRect(),a=o.width*.35,l=r.clientX-o.left-o.width/2,u=r.clientY-o.top-o.height/2;Object.assign(this,Ff(l,u,a));const c=Math.min(1,a/(Math.hypot(l,u)||1));this.knob.style.transform=`translate(calc(-50% + ${l*c}px),calc(-50% + ${u*c}px))`};e.addEventListener("pointerdown",r=>{r.preventDefault(),!(!t()||this.pointer!==null)&&(this.pointer=r.pointerId,this.active=!0,e.setPointerCapture(r.pointerId),e.classList.add("active"),s(r))}),e.addEventListener("pointermove",s);for(const r of["pointerup","pointercancel","lostpointercapture"])e.addEventListener(r,o=>{o.pointerId===this.pointer&&n()});window.addEventListener("blur",n),document.addEventListener("visibilitychange",n),this.observer=new MutationObserver(()=>{t()||n()}),this.observer.observe(document.body,{attributes:!0,attributeFilter:["class"]})}}const Ql="180",kf=0,Zc=1,Bf=2,td=1,ec=2,si=3,ui=0,tn=1,Lt=2,wi=0,ms=1,Co=2,Qc=3,eu=4,zf=5,Bi=100,Hf=101,Vf=102,Gf=103,Wf=104,Xf=200,qf=201,jf=202,Yf=203,ja=204,Ya=205,Kf=206,$f=207,Jf=208,Zf=209,Qf=210,ep=211,tp=212,np=213,ip=214,Ka=0,$a=1,Ja=2,Ss=3,Za=4,Qa=5,el=6,tl=7,nd=0,sp=1,rp=2,Ei=0,op=1,ap=2,lp=3,id=4,cp=5,up=6,hp=7,tu="attached",dp="detached",sd=300,ws=301,Es=302,nl=303,il=304,Bo=306,En=1e3,Mi=1001,Po=1002,nn=1003,rd=1004,tr=1005,pn=1006,_o=1007,ai=1008,kn=1009,od=1010,ad=1011,xr=1012,tc=1013,Ti=1014,Un=1015,Ds=1016,nc=1017,ic=1018,vr=1020,ld=35902,cd=35899,ud=1021,hd=1022,Sn=1023,yr=1026,Mr=1027,sc=1028,rc=1029,dd=1030,oc=1031,ac=1033,xo=33776,vo=33777,yo=33778,Mo=33779,sl=35840,rl=35841,ol=35842,al=35843,ll=36196,cl=37492,ul=37496,hl=37808,dl=37809,fl=37810,pl=37811,ml=37812,gl=37813,_l=37814,xl=37815,vl=37816,yl=37817,Ml=37818,bl=37819,Sl=37820,wl=37821,El=36492,Tl=36494,Al=36495,Rl=36283,Cl=36284,Pl=36285,Il=36286,br=2300,Sr=2301,jo=2302,nu=2400,iu=2401,su=2402,fp=2500,pp=0,fd=1,Ll=2,mp=3200,gp=3201,pd=0,_p=1,oi="",st="srgb",rn="srgb-linear",Io="linear",ft="srgb",ji=7680,ru=519,xp=512,vp=513,yp=514,md=515,Mp=516,bp=517,Sp=518,wp=519,Dl=35044,wr=35048,ou="300 es",Wn=2e3,Lo=2001;class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let au=1234567;const or=Math.PI/180,Ts=180/Math.PI;function Fn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function lc(i,e){return(i%e+e)%e}function Ep(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Tp(i,e,t){return i!==e?(t-i)/(e-i):0}function ar(i,e,t){return(1-t)*i+t*e}function Ap(i,e,t,n){return ar(i,e,1-Math.exp(-t*n))}function Rp(i,e=1){return e-Math.abs(lc(i,e*2)-e)}function Cp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Pp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ip(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Lp(i,e){return i+Math.random()*(e-i)}function Dp(i){return i*(.5-Math.random())}function Up(i){i!==void 0&&(au=i);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Np(i){return i*or}function Fp(i){return i*Ts}function Op(i){return(i&i-1)===0&&i!==0}function kp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+n)/2),c=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*c,l*h,l*d,a*u);break;case"YZY":i.set(l*d,a*c,l*h,a*u);break;case"ZXZ":i.set(l*h,l*d,a*c,a*u);break;case"XZX":i.set(a*c,l*g,l*f,a*u);break;case"YXY":i.set(l*f,a*c,l*g,a*u);break;case"ZYZ":i.set(l*g,l*f,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const nt={DEG2RAD:or,RAD2DEG:Ts,generateUUID:Fn,clamp:Ye,euclideanModulo:lc,mapLinear:Ep,inverseLerp:Tp,lerp:ar,damp:Ap,pingpong:Rp,smoothstep:Cp,smootherstep:Pp,randInt:Ip,randFloat:Lp,randFloatSpread:Dp,seededRandom:Up,degToRad:Np,radToDeg:Fp,isPowerOfTwo:Op,ceilPowerOfTwo:kp,floorPowerOfTwo:Bp,setQuaternionFromProperEuler:zp,normalize:ct,denormalize:Ln};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],u=n[s+1],c=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||u!==f||c!==g){let m=1-a;const p=l*d+u*f+c*g+h*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const b=Math.sqrt(y),M=Math.atan2(b,p*x);m=Math.sin(m*M)/b,a=Math.sin(a*M)/b}const v=a*x;if(l=l*m+d*v,u=u*m+f*v,c=c*m+g*v,h=h*m+_*v,m===1-a){const b=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=b,u*=b,c*=b,h*=b}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],u=n[s+2],c=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+c*h+l*f-u*d,e[t+1]=l*g+c*d+u*h-a*f,e[t+2]=u*g+c*f+a*d-l*h,e[t+3]=c*g-a*h-l*d-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*c*h+u*f*g,this._y=u*f*h-d*c*g,this._z=u*c*g+d*f*h,this._w=u*c*h-d*f*g;break;case"YXZ":this._x=d*c*h+u*f*g,this._y=u*f*h-d*c*g,this._z=u*c*g-d*f*h,this._w=u*c*h+d*f*g;break;case"ZXY":this._x=d*c*h-u*f*g,this._y=u*f*h+d*c*g,this._z=u*c*g+d*f*h,this._w=u*c*h-d*f*g;break;case"ZYX":this._x=d*c*h-u*f*g,this._y=u*f*h+d*c*g,this._z=u*c*g-d*f*h,this._w=u*c*h+d*f*g;break;case"YZX":this._x=d*c*h+u*f*g,this._y=u*f*h+d*c*g,this._z=u*c*g-d*f*h,this._w=u*c*h-d*f*g;break;case"XZY":this._x=d*c*h-u*f*g,this._y=u*f*h-d*c*g,this._z=u*c*g+d*f*h,this._w=u*c*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-u)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+u)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-u)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+u)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-n*u,this._z=r*c+o*u+n*l-s*a,this._w=o*c-n*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*n),c=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*u+o*h-a*c,this.y=n+l*c+a*u-r*h,this.z=s+l*h+r*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new w,lu=new Ke;class Ge{constructor(e,t,n,s,r,o,a,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,u)}set(e,t,n,s,r,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=t,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],y=s[4],v=s[7],b=s[2],M=s[5],A=s[8];return r[0]=o*_+a*x+l*b,r[3]=o*m+a*y+l*M,r[6]=o*p+a*v+l*A,r[1]=u*_+c*x+h*b,r[4]=u*m+c*y+h*M,r[7]=u*p+c*v+h*A,r[2]=d*_+f*x+g*b,r[5]=d*m+f*y+g*M,r[8]=d*p+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-n*r*c+n*a*l+s*r*u-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*r,f=u*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*u-c*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(c*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-u*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ko.makeScale(e,t)),this}rotate(e){return this.premultiply(Ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ko=new Ge;function gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hp(){const i=Er("canvas");return i.style.display="block",i}const cu={};function Tr(i){i in cu||(cu[i]=!0,console.warn(i))}function Vp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const uu=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gp(){const i={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rn]:{primaries:e,whitePoint:n,transfer:Io,toXYZ:uu,fromXYZ:hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:st},outputColorSpaceConfig:{drawingBufferColorSpace:st}},[st]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:uu,fromXYZ:hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:st}}}),i}const et=Gp();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class Wp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=Er("canvas")),Yi.width=e.width,Yi.height=e.height;const s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xp=0;class cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($o(s[o].image)):r.push($o(s[o]))}else r=$o(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function $o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qp=0;const Jo=new w;class Ot extends Us{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Mi,s=Mi,r=pn,o=ai,a=Sn,l=kn,u=Ot.DEFAULT_ANISOTROPY,c=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Fn(),this.name="",this.source=new cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jo).x}get height(){return this.source.getSize(Jo).y}get depth(){return this.source.getSize(Jo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case En:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case En:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=sd;Ot.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,s=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,v=(f+1)/2,b=(p+1)/2,M=(c+d)/4,A=(h+_)/4,L=(g+m)/4;return y>v&&y>b?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=M/n,r=A/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=L/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=L/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-c)*(d-c));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(d-c)/x,this.w=Math.acos((u+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jp extends Us{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ot(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new cc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends jp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _d extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yp extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gn{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Br.subVectors(this.max,Vs),Ki.subVectors(e.a,Vs),$i.subVectors(e.b,Vs),Ji.subVectors(e.c,Vs),fi.subVectors($i,Ki),pi.subVectors(Ji,$i),Ii.subVectors(Ki,Ji);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ii.z,Ii.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ii.z,0,-Ii.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ii.y,Ii.x,0];return!Zo(t,Ki,$i,Ji,Br)||(t=[1,0,0,0,1,0,0,0,1],!Zo(t,Ki,$i,Ji,Br))?!1:(zr.crossVectors(fi,pi),t=[zr.x,zr.y,zr.z],Zo(t,Ki,$i,Ji,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new w,new w,new w,new w,new w,new w,new w,new w],An=new w,kr=new gn,Ki=new w,$i=new w,Ji=new w,fi=new w,pi=new w,Ii=new w,Vs=new w,Br=new w,zr=new w,Li=new w;function Zo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Li.fromArray(i,r);const a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=e.dot(Li),u=t.dot(Li),c=n.dot(Li);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Kp=new gn,Gs=new w,Qo=new w;class Yn{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Qo)),this.expandByPoint(Gs.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zn=new w,ea=new w,Hr=new w,mi=new w,ta=new w,Vr=new w,na=new w;class Ir{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ea.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(ea);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Hr),a=mi.dot(this.direction),l=-mi.dot(Hr),u=mi.lengthSq(),c=Math.abs(1-o*o);let h,d,f,g;if(c>0)if(h=o*l-a,d=o*a-l,g=r*c,h>=0)if(d>=-g)if(d<=g){const _=1/c;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+u;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+u;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+u):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+u):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+u);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ea).addScaledVector(Hr,d),f}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),c>=0?(r=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,s,r){ta.subVectors(t,e),Vr.subVectors(n,e),na.crossVectors(ta,Vr);let o=this.direction.dot(na),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(Vr.crossVectors(mi,Vr));if(l<0)return null;const u=a*this.direction.dot(ta.cross(mi));if(u<0||l+u>o)return null;const c=-a*mi.dot(na);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(e,t,n,s,r,o,a,l,u,c,h,d,f,g,_,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,u,c,h,d,f,g,_,m)}set(e,t,n,s,r,o,a,l,u,c,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*c,f=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=f+g*u,t[5]=d-_*u,t[9]=-a*l,t[2]=_-d*u,t[6]=g+f*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,f=l*h,g=u*c,_=u*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,f=l*h,g=u*c,_=u*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*c,t[9]=_-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,f=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=g*u-f,t[8]=d*u+_,t[1]=l*h,t[5]=_*u+d,t[9]=f*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=d*h+_,t[5]=o*c,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*c,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($p,e,Jp)}lookAt(e,t,n){const s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),gi.crossVectors(n,hn),gi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),gi.crossVectors(n,hn)),gi.normalize(),Gr.crossVectors(hn,gi),s[0]=gi.x,s[4]=Gr.x,s[8]=hn.x,s[1]=gi.y,s[5]=Gr.y,s[9]=hn.y,s[2]=gi.z,s[6]=Gr.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],b=n[15],M=s[0],A=s[4],L=s[8],E=s[12],C=s[1],T=s[5],D=s[9],S=s[13],O=s[2],k=s[6],F=s[10],j=s[14],G=s[3],te=s[7],oe=s[11],ue=s[15];return r[0]=o*M+a*C+l*O+u*G,r[4]=o*A+a*T+l*k+u*te,r[8]=o*L+a*D+l*F+u*oe,r[12]=o*E+a*S+l*j+u*ue,r[1]=c*M+h*C+d*O+f*G,r[5]=c*A+h*T+d*k+f*te,r[9]=c*L+h*D+d*F+f*oe,r[13]=c*E+h*S+d*j+f*ue,r[2]=g*M+_*C+m*O+p*G,r[6]=g*A+_*T+m*k+p*te,r[10]=g*L+_*D+m*F+p*oe,r[14]=g*E+_*S+m*j+p*ue,r[3]=x*M+y*C+v*O+b*G,r[7]=x*A+y*T+v*k+b*te,r[11]=x*L+y*D+v*F+b*oe,r[15]=x*E+y*S+v*j+b*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*u*h-r*a*d+n*u*d+s*a*f-n*l*f)+_*(+t*l*f-t*u*d+r*o*d-s*o*f+s*u*c-r*l*c)+m*(+t*u*h-t*a*f-r*o*h+n*o*f+r*a*c-n*u*c)+p*(-s*a*c-t*l*h+t*a*d+s*o*h-n*o*d+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=h*m*u-_*d*u+_*l*f-a*m*f-h*l*p+a*d*p,y=g*d*u-c*m*u-g*l*f+o*m*f+c*l*p-o*d*p,v=c*_*u-g*h*u+g*a*f-o*_*f-c*a*p+o*h*p,b=g*h*l-c*_*l-g*a*d+o*_*d+c*a*m-o*h*m,M=t*x+n*y+s*v+r*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=x*A,e[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*A,e[2]=(a*m*r-_*l*r+_*s*u-n*m*u-a*s*p+n*l*p)*A,e[3]=(h*l*r-a*d*r-h*s*u+n*d*u+a*s*f-n*l*f)*A,e[4]=y*A,e[5]=(c*m*r-g*d*r+g*s*f-t*m*f-c*s*p+t*d*p)*A,e[6]=(g*l*r-o*m*r-g*s*u+t*m*u+o*s*p-t*l*p)*A,e[7]=(o*d*r-c*l*r+c*s*u-t*d*u-o*s*f+t*l*f)*A,e[8]=v*A,e[9]=(g*h*r-c*_*r-g*n*f+t*_*f+c*n*p-t*h*p)*A,e[10]=(o*_*r-g*a*r+g*n*u-t*_*u-o*n*p+t*a*p)*A,e[11]=(c*a*r-o*h*r-c*n*u+t*h*u+o*n*f-t*a*f)*A,e[12]=b*A,e[13]=(c*_*s-g*h*s+g*n*d-t*_*d-c*n*m+t*h*m)*A,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*h*s-c*a*s+c*n*l-t*h*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,u=r*o,c=r*a;return this.set(u*o+n,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+n,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,c=o+o,h=a+a,d=r*u,f=r*c,g=r*h,_=o*c,m=o*h,p=a*h,x=l*u,y=l*c,v=l*h,b=n.x,M=n.y,A=n.z;return s[0]=(1-(_+p))*b,s[1]=(f+v)*b,s[2]=(g-y)*b,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(d+p))*M,s[6]=(m+x)*M,s[7]=0,s[8]=(g+y)*A,s[9]=(m-x)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Zi.set(s[0],s[1],s[2]).length();const o=Zi.set(s[4],s[5],s[6]).length(),a=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const u=1/r,c=1/o,h=1/a;return Rn.elements[0]*=u,Rn.elements[1]*=u,Rn.elements[2]*=u,Rn.elements[4]*=c,Rn.elements[5]*=c,Rn.elements[6]*=c,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Wn,l=!1){const u=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Wn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Lo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=h,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Wn,l=!1){const u=this.elements,c=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Wn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Lo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=h,u[9]=0,u[13]=f,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zi=new w,Rn=new ee,$p=new w(0,0,0),Jp=new w(1,1,1),gi=new w,Gr=new w,hn=new w,du=new ee,fu=new Ke;class on{constructor(e=0,t=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fu.setFromEuler(this),this.setFromQuaternion(fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class uc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zp=0;const pu=new w,Qi=new Ke,Qn=new ee,Wr=new w,Ws=new w,Qp=new w,em=new Ke,mu=new w(1,0,0),gu=new w(0,1,0),_u=new w(0,0,1),xu={type:"added"},tm={type:"removed"},es={type:"childadded",child:null},ia={type:"childremoved",child:null};class St extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new w,t=new on,n=new Ke,s=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Ge}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Ws,Wr,this.up):Qn.lookAt(Wr,Ws,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(Qn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xu),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tm),ia.child=e,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xu),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,Qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,em,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}St.DEFAULT_UP=new w(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new w,ei=new w,sa=new w,ti=new w,ts=new w,ns=new w,vu=new w,ra=new w,oa=new w,aa=new w,la=new Ze,ca=new Ze,ua=new Ze;class Dn{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Cn.subVectors(s,t),ei.subVectors(n,t),sa.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(ei),l=Cn.dot(sa),u=ei.dot(ei),c=ei.dot(sa),h=o*u-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(u*l-a*c)*d,g=(o*c-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return la.setScalar(0),ca.setScalar(0),ua.setScalar(0),la.fromBufferAttribute(e,t),ca.fromBufferAttribute(e,n),ua.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(la,r.x),o.addScaledVector(ca,r.y),o.addScaledVector(ua,r.z),o}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),ei.subVectors(e,t),Cn.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Cn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ts.subVectors(s,n),ns.subVectors(r,n),ra.subVectors(e,n);const l=ts.dot(ra),u=ns.dot(ra);if(l<=0&&u<=0)return t.copy(n);oa.subVectors(e,s);const c=ts.dot(oa),h=ns.dot(oa);if(c>=0&&h<=c)return t.copy(s);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(ts,o);aa.subVectors(e,r);const f=ts.dot(aa),g=ns.dot(aa);if(g>=0&&f<=g)return t.copy(r);const _=f*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(n).addScaledVector(ns,a);const m=c*g-f*h;if(m<=0&&h-c>=0&&f-g>=0)return vu.subVectors(r,s),a=(h-c)/(h-c+(f-g)),t.copy(s).addScaledVector(vu,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function ha(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=lc(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ha(o,r,e+1/3),this.g=ha(o,r,e),this.b=ha(o,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=st){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){const n=xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return et.workingToColorSpace(Xt.copy(this),e),Math.round(Ye(Xt.r*255,0,255))*65536+Math.round(Ye(Xt.g*255,0,255))*256+Math.round(Ye(Xt.b*255,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=st){et.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,s=Xt.b;return e!==st?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Xr);const n=ar(_i.h,Xr.h,t),s=ar(_i.s,Xr.s,t),r=ar(_i.l,Xr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new De;De.NAMES=xd;let nm=0;class Xn extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=ms,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Ya,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ft extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new w,qr=new pe;let im=0;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:im++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dl,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dl&&(e.usage=this.usage),e}}class vd extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yd extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ze extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sm=0;const vn=new ee,da=new St,is=new w,dn=new gn,Xs=new gn,Ht=new w;class xt extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?yd:vd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ze(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(dn.min,Xs.min),dn.expandByPoint(Ht),Ht.addVectors(dn.max,Xs.max),dn.expandByPoint(Ht)):(dn.expandByPoint(Xs.min),dn.expandByPoint(Xs.max))}dn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ht.fromBufferAttribute(a,u),l&&(is.fromBufferAttribute(e,u),Ht.add(is)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new w,l[L]=new w;const u=new w,c=new w,h=new w,d=new pe,f=new pe,g=new pe,_=new w,m=new w;function p(L,E,C){u.fromBufferAttribute(n,L),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,C),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,C),c.sub(u),h.sub(u),f.sub(d),g.sub(d);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(T),m.copy(h).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(T),a[L].add(_),a[E].add(_),a[C].add(_),l[L].add(m),l[E].add(m),l[C].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,E=x.length;L<E;++L){const C=x[L],T=C.start,D=C.count;for(let S=T,O=T+D;S<O;S+=3)p(e.getX(S+0),e.getX(S+1),e.getX(S+2))}const y=new w,v=new w,b=new w,M=new w;function A(L){b.fromBufferAttribute(s,L),M.copy(b);const E=a[L];y.copy(E),y.sub(b.multiplyScalar(b.dot(E))).normalize(),v.crossVectors(M,E);const T=v.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,T)}for(let L=0,E=x.length;L<E;++L){const C=x[L],T=C.start,D=C.count;for(let S=T,O=T+D;S<O;S+=3)A(e.getX(S+0)),A(e.getX(S+1)),A(e.getX(S+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new w,r=new w,o=new w,a=new w,l=new w,u=new w,c=new w,h=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),a.add(c),l.add(c),u.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*c;for(let p=0;p<c;p++)d[g++]=u[f++]}return new Vt(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=e(l,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const f=u[h];c.push(f.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(t))}const r=e.morphAttributes;for(const u in r){const c=[],h=r[u];for(let d=0,f=h.length;d<f;d++)c.push(h[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new ee,Di=new Ir,jr=new Yn,Mu=new w,Yr=new w,Kr=new w,$r=new w,fa=new w,Jr=new w,bu=new w,Zr=new w;class we extends St{constructor(e=new xt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Jr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=a[l],h=r[l];c!==0&&(fa.fromBufferAttribute(h,e),o?Jr.addScaledVector(fa,c):Jr.addScaledVector(fa.sub(t),c))}t.add(Jr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(jr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(jr,Mu)===null||Di.origin.distanceToSquared(Mu)>(e.far-e.near)**2))&&(yu.copy(r).invert(),Di.copy(e.ray).applyMatrix4(yu),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,b=y;v<b;v+=3){const M=a.getX(v),A=a.getX(v+1),L=a.getX(v+2);s=Qr(this,p,e,n,u,c,h,M,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Qr(this,o,e,n,u,c,h,x,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,b=y;v<b;v+=3){const M=v,A=v+1,L=v+2;s=Qr(this,p,e,n,u,c,h,M,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,v=m+2;s=Qr(this,o,e,n,u,c,h,x,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function rm(i,e,t,n,s,r,o,a){let l;if(e.side===tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ui,a),l===null)return null;Zr.copy(a),Zr.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Zr);return u<t.near||u>t.far?null:{distance:u,point:Zr.clone(),object:i}}function Qr(i,e,t,n,s,r,o,a,l,u){i.getVertexPosition(a,Yr),i.getVertexPosition(l,Kr),i.getVertexPosition(u,$r);const c=rm(i,e,t,n,Yr,Kr,$r,bu);if(c){const h=new w;Dn.getBarycoord(bu,Yr,Kr,$r,h),s&&(c.uv=Dn.getInterpolatedAttribute(s,a,l,u,h,new pe)),r&&(c.uv1=Dn.getInterpolatedAttribute(r,a,l,u,h,new pe)),o&&(c.normal=Dn.getInterpolatedAttribute(o,a,l,u,h,new w),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new w,materialIndex:0};Dn.getNormal(Yr,Kr,$r,d.normal),c.face=d,c.barycoord=h}return c}class Kt extends xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(h,2));function g(_,m,p,x,y,v,b,M,A,L,E){const C=v/A,T=b/L,D=v/2,S=b/2,O=M/2,k=A+1,F=L+1;let j=0,G=0;const te=new w;for(let oe=0;oe<F;oe++){const ue=oe*T-S;for(let Pe=0;Pe<k;Pe++){const be=Pe*C-D;te[_]=be*x,te[m]=ue*y,te[p]=O,u.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=M>0?1:-1,c.push(te.x,te.y,te.z),h.push(Pe/A),h.push(1-oe/L),j+=1}}for(let oe=0;oe<L;oe++)for(let ue=0;ue<A;ue++){const Pe=d+ue+k*oe,be=d+ue+k*(oe+1),Qe=d+(ue+1)+k*(oe+1),He=d+(ue+1)+k*oe;l.push(Pe,be,He),l.push(be,Qe,He),G+=6}a.addGroup(f,G,E),f+=G,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=As(i[t]);for(const s in n)e[s]=n[s]}return e}function om(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Md(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const am={clone:As,merge:Zt};var lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lm,this.fragmentShader=cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=om(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bd extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new w,Su=new pe,wu=new pe;class Yt extends bd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Su,wu),t.subVectors(wu,Su)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/u,s*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,rs=1;class um extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(ss,rs,e,t);s.layers=this.layers,this.add(s);const r=new Yt(ss,rs,e,t);r.layers=this.layers,this.add(r);const o=new Yt(ss,rs,e,t);o.layers=this.layers,this.add(o);const a=new Yt(ss,rs,e,t);a.layers=this.layers,this.add(a);const l=new Yt(ss,rs,e,t);l.layers=this.layers,this.add(l);const u=new Yt(ss,rs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const u of t)this.remove(u);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,c),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sd extends Ot{constructor(e=[],t=ws,n,s,r,o,a,l,u,c){super(e,t,n,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hm extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Sd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Kt(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:wi});r.uniforms.tEquirect.value=t;const o=new we(s,r),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=pn),new um(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class _t extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dm={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),f=.02,g=.005;u.inputState.pinching&&d>f+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=f-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new hc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class dc extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class fm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dl,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new w;class fc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Eu=new w,Tu=new Ze,Au=new Ze,pm=new w,Ru=new ee,eo=new w,ma=new Yn,Cu=new ee,ga=new Ir;class mm extends we{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tu,this.bindMatrix=new ee,this.bindMatrixInverse=new ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,eo),this.boundingBox.expandByPoint(eo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,eo),this.boundingSphere.expandByPoint(eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(s),e.ray.intersectsSphere(ma)!==!1&&(Cu.copy(s).invert(),ga.copy(e.ray).applyMatrix4(Cu),!(this.boundingBox!==null&&ga.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ga)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Tu.fromBufferAttribute(s.attributes.skinIndex,e),Au.fromBufferAttribute(s.attributes.skinWeight,e),Eu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Au.getComponent(r);if(o!==0){const a=Tu.getComponent(r);Ru.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(pm.copy(Eu).applyMatrix4(Ru),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class wd extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ed extends Ot{constructor(e=null,t=1,n=1,s,r,o,a,l,u=nn,c=nn,h,d){super(null,o,a,l,u,c,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pu=new ee,gm=new ee;class pc{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ee;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:gm;Pu.multiplyMatrices(a,t[r]),Pu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new pc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ed(t,e,e,Sn,Un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new wd),this.bones.push(o),this.boneInverses.push(new ee().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Rs extends Vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new ee,Iu=new ee,to=[],Lu=new gn,_m=new ee,qs=new we,js=new Yn;class Lr extends we{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_m)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Lu.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Lu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),js.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),e.ray.intersectsSphere(js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),Iu.multiplyMatrices(n,os),qs.matrixWorld=Iu,qs.raycast(e,to);for(let o=0,a=to.length;o<a;o++){const l=to[o];l.instanceId=r,l.object=this,t.push(l)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ed(new Float32Array(s*this.count),s,this.count,sc,Un));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _a=new w,xm=new w,vm=new Ge;class yi{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=_a.subVectors(n,t).cross(xm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vm.getNormalMatrix(e),s=this.coplanarPoint(_a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Yn,ym=new pe(.5,.5),no=new w;class mc{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],u=r[3],c=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],x=r[12],y=r[13],v=r[14],b=r[15];if(s[0].setComponents(u-o,f-c,p-g,b-x).normalize(),s[1].setComponents(u+o,f+c,p+g,b+x).normalize(),s[2].setComponents(u+a,f+h,p+_,b+y).normalize(),s[3].setComponents(u-a,f-h,p-_,b-y).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(u-l,f-d,p-m,b-v).normalize();else if(s[4].setComponents(u-l,f-d,p-m,b-v).normalize(),t===Wn)s[5].setComponents(u+l,f+d,p+m,b+v).normalize();else if(t===Lo)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){Ui.center.set(0,0,0);const t=ym.distanceTo(e.center);return Ui.radius=.7071067811865476+t,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(no.x=s.normal.x>0?e.max.x:e.min.x,no.y=s.normal.y>0?e.max.y:e.min.y,no.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Td extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Do=new w,Uo=new w,Du=new ee,Ys=new Ir,io=new Yn,xa=new w,Uu=new w;class gc extends St{constructor(e=new xt,t=new Td){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Do.fromBufferAttribute(t,s-1),Uo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Do.distanceTo(Uo);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(s),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;Du.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(Du);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=u){const p=c.getX(_),x=c.getX(_+1),y=so(this,e,Ys,l,p,x,_);y&&t.push(y)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(f),p=so(this,e,Ys,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=u){const p=so(this,e,Ys,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=so(this,e,Ys,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function so(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Do.fromBufferAttribute(a,s),Uo.fromBufferAttribute(a,r),t.distanceSqToSegment(Do,Uo,xa,Uu)>n)return;xa.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(xa);if(!(u<e.near||u>e.far))return{distance:u,point:Uu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Nu=new w,Fu=new w;class Mm extends gc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Nu.fromBufferAttribute(t,s),Fu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Nu.distanceTo(Fu);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bm extends gc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _c extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ou=new ee,Ul=new Ir,ro=new Yn,oo=new w;class Ad extends St{constructor(e=new xt,t=new _c){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;Ou.copy(s).invert(),Ul.copy(e.ray).applyMatrix4(Ou);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=u.getX(g);oo.fromBufferAttribute(h,m),ku(oo,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)oo.fromBufferAttribute(h,g),ku(oo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ku(i,e,t,n,s,r,o){const a=Ul.distanceSqToPoint(i);if(a<t){const l=new w;Ul.closestPointToPoint(i,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class sn extends Ot{constructor(e,t,n,s,r,o,a,l,u){super(e,t,n,s,r,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xc extends Ot{constructor(e,t,n=Ti,s,r,o,a=nn,l=nn,u,c=yr,h=1){if(c!==yr&&c!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,l,c,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rd extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ar extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],u=new w,c=new pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*s;u.x=e*Math.cos(f),u.y=e*Math.sin(f),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[d]/e+1)/2,c.y=(o[d+1]/e+1)/2,l.push(c.x,c.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(a,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jn extends xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;s=Math.floor(s),r=Math.floor(r);const c=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new ze(h,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(f,2));function x(){const v=new w,b=new w;let M=0;const A=(t-e)/n;for(let L=0;L<=r;L++){const E=[],C=L/r,T=C*(t-e)+e;for(let D=0;D<=s;D++){const S=D/s,O=S*l+a,k=Math.sin(O),F=Math.cos(O);b.x=T*k,b.y=-C*n+m,b.z=T*F,h.push(b.x,b.y,b.z),v.set(k,A,F).normalize(),d.push(v.x,v.y,v.z),f.push(S,1-C),E.push(g++)}_.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){const C=_[E][L],T=_[E+1][L],D=_[E+1][L+1],S=_[E][L+1];(e>0||E!==0)&&(c.push(C,T,S),M+=3),(t>0||E!==r-1)&&(c.push(T,D,S),M+=3)}u.addGroup(p,M,0),p+=M}function y(v){const b=g,M=new pe,A=new w;let L=0;const E=v===!0?e:t,C=v===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;const T=g;for(let D=0;D<=s;D++){const O=D/s*l+a,k=Math.cos(O),F=Math.sin(O);A.x=E*F,A.y=m*C,A.z=E*k,h.push(A.x,A.y,A.z),d.push(0,C,0),M.x=k*.5+.5,M.y=F*.5*C+.5,f.push(M.x,M.y),g++}for(let D=0;D<s;D++){const S=b+D,O=T+D;v===!0?c.push(O,O+1,S):c.push(O+1,O,S),L+=3}u.addGroup(p,L,v===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vc extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),u(n),c(),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(r.slice(),3)),this.setAttribute("uv",new ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new w,v=new w,b=new w;for(let M=0;M<t.length;M+=3)f(t[M+0],y),f(t[M+1],v),f(t[M+2],b),l(y,v,b,x)}function l(x,y,v,b){const M=b+1,A=[];for(let L=0;L<=M;L++){A[L]=[];const E=x.clone().lerp(v,L/M),C=y.clone().lerp(v,L/M),T=M-L;for(let D=0;D<=T;D++)D===0&&L===M?A[L][D]=E:A[L][D]=E.clone().lerp(C,D/T)}for(let L=0;L<M;L++)for(let E=0;E<2*(M-L)-1;E++){const C=Math.floor(E/2);E%2===0?(d(A[L][C+1]),d(A[L+1][C]),d(A[L][C])):(d(A[L][C+1]),d(A[L+1][C+1]),d(A[L+1][C]))}}function u(x){const y=new w;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function c(){const x=new w;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=m(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;o.push(v,1-b)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],b=o[x+4],M=Math.max(y,v,b),A=Math.min(y,v,b);M>.9&&A<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){const v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const x=new w,y=new w,v=new w,b=new w,M=new pe,A=new pe,L=new pe;for(let E=0,C=0;E<r.length;E+=9,C+=6){x.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),M.set(o[C+0],o[C+1]),A.set(o[C+2],o[C+3]),L.set(o[C+4],o[C+5]),b.copy(x).add(y).add(v).divideScalar(3);const T=m(b);_(M,C+0,x,T),_(A,C+2,y,T),_(L,C+4,v,T)}}function _(x,y,v,b){b<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.vertices,e.indices,e.radius,e.details)}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,u;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const c=n[s],d=n[s+1]-c,f=(o-c)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new pe:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new w,s=[],r=[],o=[],a=new w,l=new ee;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let u=Number.MAX_VALUE;const c=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=u&&(u=c,n.set(1,0,0)),h<=u&&(u=h,n.set(0,1,0)),d<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ye(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ye(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Cd extends di{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new pe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=u-this.aY;l=d*c-f*h+this.aX,u=d*h+f*c+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Sm extends Cd{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,u){s(o,a,u*(a-r),u*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,u,c,h){let d=(o-r)/u-(a-r)/(u+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+h)+(l-a)/h;d*=c,f*=c,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const ao=new w,va=new yc,ya=new yc,Ma=new yc;class wm extends di{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new w){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let u,c;this.closed||a>0?u=s[(a-1)%r]:(ao.subVectors(s[0],s[1]).add(s[0]),u=ao);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=ao),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(c),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),va.initNonuniformCatmullRom(u.x,h.x,d.x,c.x,g,_,m),ya.initNonuniformCatmullRom(u.y,h.y,d.y,c.y,g,_,m),Ma.initNonuniformCatmullRom(u.z,h.z,d.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(va.initCatmullRom(u.x,h.x,d.x,c.x,this.tension),ya.initCatmullRom(u.y,h.y,d.y,c.y,this.tension),Ma.initCatmullRom(u.z,h.z,d.z,c.z,this.tension));return n.set(va.calc(l),ya.calc(l),Ma.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bu(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Em(i,e){const t=1-i;return t*t*e}function Tm(i,e){return 2*(1-i)*i*e}function Am(i,e){return i*i*e}function lr(i,e,t,n){return Em(i,e)+Tm(i,t)+Am(i,n)}function Rm(i,e){const t=1-i;return t*t*t*e}function Cm(i,e){const t=1-i;return 3*t*t*i*e}function Pm(i,e){return 3*(1-i)*i*i*e}function Im(i,e){return i*i*i*e}function cr(i,e,t,n,s){return Rm(i,e)+Cm(i,t)+Pm(i,n)+Im(i,s)}class Lm extends di{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(e,s.x,r.x,o.x,a.x),cr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dm extends di{constructor(e=new w,t=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new w){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(e,s.x,r.x,o.x,a.x),cr(e,s.y,r.y,o.y,a.y),cr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Um extends di{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nm extends di{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fm extends di{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(e,s.x,r.x,o.x),lr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mc extends di{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(e,s.x,r.x,o.x),lr(e,s.y,r.y,o.y),lr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Om extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],u=s[o],c=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Bu(a,l.x,u.x,c.x,h.x),Bu(a,l.y,u.y,c.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new pe().fromArray(s))}return this}}var km=Object.freeze({__proto__:null,ArcCurve:Sm,CatmullRomCurve3:wm,CubicBezierCurve:Lm,CubicBezierCurve3:Dm,EllipseCurve:Cd,LineCurve:Um,LineCurve3:Nm,QuadraticBezierCurve:Fm,QuadraticBezierCurve3:Mc,SplineCurve:Om});class bc extends xt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ye(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],u=[],c=1/t,h=new w,d=new pe,f=new w,g=new w,_=new w;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let x=0;x<=t;x++){const y=n+x*c*s,v=Math.sin(y),b=Math.cos(y);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*v,h.y=e[M].y,h.z=e[M].x*b,o.push(h.x,h.y,h.z),d.x=x/t,d.y=M/(e.length-1),a.push(d.x,d.y);const A=l[3*M+0]*v,L=l[3*M+1],E=l[3*M+0]*b;u.push(A,L,E)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){const v=y+x*e.length,b=v,M=v+e.length,A=v+e.length+1,L=v+1;r.push(b,M,L),r.push(A,L,M)}this.setIndex(r),this.setAttribute("position",new ze(o,3)),this.setAttribute("uv",new ze(a,2)),this.setAttribute("normal",new ze(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.points,e.segments,e.phiStart,e.phiLength)}}class Sc extends vc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sc(e.radius,e.detail)}}class an extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),u=a+1,c=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const x=p*d-o;for(let y=0;y<u;y++){const v=y*h-r;g.push(v,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+u*p,v=x+u*(p+1),b=x+1+u*(p+1),M=x+1+u*p;f.push(y,v,M),f.push(v,b,M)}this.setIndex(f),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.widthSegments,e.heightSegments)}}class hi extends xt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],u=[],c=[];let h=e;const d=(t-e)/s,f=new w,g=new pe;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),u.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,c.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,y=x,v=x+n+1,b=x+n+2,M=x+1;a.push(y,v,M),a.push(v,b,M)}}this.setIndex(a),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wc extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new w,d=new w,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const M=b/t;h.x=-e*Math.cos(s+M*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+M*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(M+v,1-y),x.push(u++)}c.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=c[p][x+1],v=c[p][x],b=c[p+1][x],M=c[p+1][x+1];(p!==0||o>0)&&f.push(y,v,M),(p!==n-1||l<Math.PI)&&f.push(v,b,M)}this.setIndex(f),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wi extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],u=[],c=new w,h=new w,d=new w;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),c.x=e*Math.cos(_),c.y=e*Math.sin(_),d.subVectors(h,c).normalize(),l.push(d.x,d.y,d.z),u.push(g/s),u.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ec extends xt{constructor(e=new Mc(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,l=new w,u=new pe;let c=new w;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ze(h,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(f,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),x(),p()}function m(y){c=e.getPointAt(y/t,c);const v=o.normals[y],b=o.binormals[y];for(let M=0;M<=s;M++){const A=M/s*Math.PI*2,L=Math.sin(A),E=-Math.cos(A);l.x=E*v.x+L*b.x,l.y=E*v.y+L*b.y,l.z=E*v.z+L*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){const b=(s+1)*(y-1)+(v-1),M=(s+1)*y+(v-1),A=(s+1)*y+v,L=(s+1)*(y-1)+v;g.push(b,M,L),g.push(M,A,L)}}function x(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)u.x=y/t,u.y=v/s,f.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ec(new km[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Mt extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pd,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kn extends Mt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Bm extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zm extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function lo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Hm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vm(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function zu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Pd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Dr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gm extends Dr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nu,endingEnd:nu}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case iu:r=e,a=2*t-n;break;case su:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case iu:o=e,l=2*n-t;break;case su:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const u=(n-t)*.5,c=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-n),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let b=0;b!==a;++b)r[b]=p*o[c+b]+x*o[u+b]+y*o[l+b]+v*o[h+b];return r}}class Wm extends Dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=(n-t)/(s-t),h=1-c;for(let d=0;d!==a;++d)r[d]=o[u+d]*h+o[l+d]*c;return r}}class Xm extends Dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class zn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lo(t,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lo(e.times,Array),values:lo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case br:t=this.InterpolantFactoryMethodDiscrete;break;case Sr:t=this.InterpolantFactoryMethodLinear;break;case jo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return jo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Hm(s))for(let a=0,l=s.length;a!==l;++a){const u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const u=e[a],c=e[a+1];if(u!==c&&(a!==1||u!==e[0]))if(s)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,u=0;u!==n;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Sr;class Ns extends zn{constructor(e,t,n){super(e,t,n)}}Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=br;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Id extends zn{constructor(e,t,n,s){super(e,t,n,s)}}Id.prototype.ValueTypeName="color";class Cs extends zn{constructor(e,t,n,s){super(e,t,n,s)}}Cs.prototype.ValueTypeName="number";class qm extends Dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let u=e*a;for(let c=u+a;u!==c;u+=4)Ke.slerpFlat(r,0,o,u-a,o,u,l);return r}}class Ps extends zn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new qm(this.times,this.values,this.getValueSize(),e)}}Ps.prototype.ValueTypeName="quaternion";Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Fs extends zn{constructor(e,t,n){super(e,t,n)}}Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=br;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends zn{constructor(e,t,n,s){super(e,t,n,s)}}Is.prototype.ValueTypeName="vector";class jm{constructor(e="",t=-1,n=[],s=fp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Fn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Km(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(zn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],u=[];l.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const c=Vm(l);l=zu(l,1,c),u=zu(u,1,c),!s&&l[0]===0&&(l.push(r),u.push(u[0])),o.push(new Cs(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],c=u.name.match(r);if(c&&c.length>1){const h=c[1];let d=s[h];d||(s[h]=d=[]),d.push(u)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];Pd(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let h=0;h<u.length;h++){const d=u[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new Cs(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Is,f+".position",d,"pos",s),n(Ps,f+".quaternion",d,"rot",s),n(Is,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Ym(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cs;case"vector":case"vector2":case"vector3":case"vector4":return Is;case"color":return Id;case"quaternion":return Ps;case"bool":case"boolean":return Ns;case"string":return Fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Km(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ym(i.type);if(i.times===void 0){const t=[],n=[];Pd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const li={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class $m{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=u.length;h<d;h+=2){const f=u[h],g=u[h+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Jm=new $m;class Os{constructor(e){this.manager=e!==void 0?e:Jm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class Zm extends Error{constructor(e,t){super(e),this.response=t}}class Ld extends Os{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=li.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:s});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=ni[e],h=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let M=0,A=c.length;M<A;M++){const L=c[M];L.onProgress&&L.onProgress(b)}p.enqueue(v),x()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Zm(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a==="")return u.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return u.arrayBuffer().then(g=>f.decode(g))}}}).then(u=>{li.add(`file:${e}`,u);const c=ni[e];delete ni[e];for(let h=0,d=c.length;h<d;h++){const f=c[h];f.onLoad&&f.onLoad(u)}}).catch(u=>{const c=ni[e];if(c===void 0)throw this.manager.itemError(e),u;delete ni[e];for(let h=0,d=c.length;h<d;h++){const f=c[h];f.onError&&f.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const as=new WeakMap;class Qm extends Os{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=li.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=as.get(o);h===void 0&&(h=[],as.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=Er("img");function l(){c(),t&&t(this);const h=as.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}as.delete(this),r.manager.itemEnd(e)}function u(h){c(),s&&s(h),li.remove(`image:${e}`);const d=as.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}as.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),li.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class eg extends Os{constructor(e){super(e)}load(e,t,n,s){const r=new Ot,o=new Qm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class zo extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Dd extends zo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ba=new ee,Hu=new w,Vu=new w;class Tc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mc,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hu),Vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vu),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tg extends Tc{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ts*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ng extends zo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new tg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gu=new ee,Ks=new w,Sa=new w;class ig extends Tc{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ks),Sa.copy(n.position),Sa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sa),n.updateMatrixWorld(),s.makeTranslation(-Ks.x,-Ks.y,-Ks.z),Gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu,n.coordinateSystem,n.reversedDepth)}}class Ud extends zo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ig}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ho extends bd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sg extends Tc{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class No extends zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new sg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ur{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const wa=new WeakMap;class rg extends Os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=li.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{if(wa.has(o)===!0)s&&s(wa.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(u),r.manager.itemEnd(e),u});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return li.add(`image-bitmap:${e}`,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){s&&s(u),wa.set(l,u),li.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});li.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class og extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ag{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ac="\\[\\]\\.:\\/",lg=new RegExp("["+Ac+"]","g"),Rc="[^"+Ac+"]",cg="[^"+Ac.replace("\\.","")+"]",ug=/((?:WC+[\/:])*)/.source.replace("WC",Rc),hg=/(WCOD+)?/.source.replace("WCOD",cg),dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),fg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),pg=new RegExp("^"+ug+hg+dg+fg+"$"),mg=["material","materials","bones","map"];class gg{constructor(e,t,n){const s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lg,"")}static parseTrackName(e){const t=pg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);mg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[s];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=gg;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Wu=new ee;class Cc{constructor(e,t,n=0,s=1/0){this.ray=new Ir(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wu),this}intersectObject(e,t=!0,n=[]){return Nl(e,this,n,t),n.sort(Xu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Nl(e[s],this,n,t);return n.sort(Xu),n}}function Xu(i,e){return i.distance-e.distance}function Nl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Nl(r[o],e,t,!0)}}function qu(i,e,t,n){const s=_g(n);switch(t){case ud:return i*e;case sc:return i*e/s.components*s.byteLength;case rc:return i*e/s.components*s.byteLength;case dd:return i*e*2/s.components*s.byteLength;case oc:return i*e*2/s.components*s.byteLength;case hd:return i*e*3/s.components*s.byteLength;case Sn:return i*e*4/s.components*s.byteLength;case ac:return i*e*4/s.components*s.byteLength;case xo:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:case al:return Math.max(i,16)*Math.max(e,8)/4;case sl:case ol:return Math.max(i,8)*Math.max(e,8)/2;case ll:case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case El:case Tl:case Al:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Rl:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pl:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _g(i){switch(i){case kn:case od:return{byteLength:1,components:1};case xr:case ad:case Ds:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Ti:case tc:case Un:return{byteLength:4,components:1};case ld:case cd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);function Nd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xg(i){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,h=u.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,u,c),a.onUploadCallback();let f;if(u instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)f=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=i.SHORT;else if(u instanceof Uint32Array)f=i.UNSIGNED_INT;else if(u instanceof Int32Array)f=i.INT;else if(u instanceof Int8Array)f=i.BYTE;else if(u instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,u){const c=l.array,h=l.updateRanges;if(i.bindBuffer(u,a),h.length===0)i.bufferSubData(u,0,c);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}var vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ig=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,d0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,V0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,i_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,s_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,o_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,l_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,d_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,__=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,T_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,A_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,B_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,G_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,j_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:vg,alphahash_pars_fragment:yg,alphamap_fragment:Mg,alphamap_pars_fragment:bg,alphatest_fragment:Sg,alphatest_pars_fragment:wg,aomap_fragment:Eg,aomap_pars_fragment:Tg,batching_pars_vertex:Ag,batching_vertex:Rg,begin_vertex:Cg,beginnormal_vertex:Pg,bsdfs:Ig,iridescence_fragment:Lg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Ug,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:Fg,clipping_planes_vertex:Og,color_fragment:kg,color_pars_fragment:Bg,color_pars_vertex:zg,color_vertex:Hg,common:Vg,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:qg,emissivemap_fragment:jg,emissivemap_pars_fragment:Yg,colorspace_fragment:Kg,colorspace_pars_fragment:$g,envmap_fragment:Jg,envmap_common_pars_fragment:Zg,envmap_pars_fragment:Qg,envmap_pars_vertex:e0,envmap_physical_pars_fragment:h0,envmap_vertex:t0,fog_vertex:n0,fog_pars_vertex:i0,fog_fragment:s0,fog_pars_fragment:r0,gradientmap_pars_fragment:o0,lightmap_pars_fragment:a0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:c0,lights_pars_begin:u0,lights_toon_fragment:d0,lights_toon_pars_fragment:f0,lights_phong_fragment:p0,lights_phong_pars_fragment:m0,lights_physical_fragment:g0,lights_physical_pars_fragment:_0,lights_fragment_begin:x0,lights_fragment_maps:v0,lights_fragment_end:y0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:b0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:w0,map_fragment:E0,map_pars_fragment:T0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:P0,morphinstance_vertex:I0,morphcolor_vertex:L0,morphnormal_vertex:D0,morphtarget_pars_vertex:U0,morphtarget_vertex:N0,normal_fragment_begin:F0,normal_fragment_maps:O0,normal_pars_fragment:k0,normal_pars_vertex:B0,normal_vertex:z0,normalmap_pars_fragment:H0,clearcoat_normal_fragment_begin:V0,clearcoat_normal_fragment_maps:G0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:q0,packing:j0,premultiplied_alpha_fragment:Y0,project_vertex:K0,dithering_fragment:$0,dithering_pars_fragment:J0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:e_,shadowmap_pars_vertex:t_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:s_,skinning_pars_vertex:r_,skinning_vertex:o_,skinnormal_vertex:a_,specularmap_fragment:l_,specularmap_pars_fragment:c_,tonemapping_fragment:u_,tonemapping_pars_fragment:h_,transmission_fragment:d_,transmission_pars_fragment:f_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:__,background_vert:x_,background_frag:v_,backgroundCube_vert:y_,backgroundCube_frag:M_,cube_vert:b_,cube_frag:S_,depth_vert:w_,depth_frag:E_,distanceRGBA_vert:T_,distanceRGBA_frag:A_,equirect_vert:R_,equirect_frag:C_,linedashed_vert:P_,linedashed_frag:I_,meshbasic_vert:L_,meshbasic_frag:D_,meshlambert_vert:U_,meshlambert_frag:N_,meshmatcap_vert:F_,meshmatcap_frag:O_,meshnormal_vert:k_,meshnormal_frag:B_,meshphong_vert:z_,meshphong_frag:H_,meshphysical_vert:V_,meshphysical_frag:G_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:q_,points_frag:j_,shadow_vert:Y_,shadow_frag:K_,sprite_vert:$_,sprite_frag:J_},ce={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Gn={basic:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new De(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Zt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Zt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new De(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Zt([ce.points,ce.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Zt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Zt([ce.common,ce.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Zt([ce.sprite,ce.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Zt([ce.common,ce.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Zt([ce.lights,ce.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Gn.physical={uniforms:Zt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const co={r:0,b:0,g:0},Ni=new on,Z_=new ee;function Q_(i,e,t,n,s,r,o){const a=new De(0);let l=r===!0?0:1,u,c,h=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const b=g(y);b===null?p(a,l):b&&b.isColor&&(p(b,1),v=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===Bo)?(c===void 0&&(c=new we(new Kt(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:As(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Ni.copy(v.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Z_.makeRotationFromEuler(Ni)),c.material.toneMapped=et.getTransfer(b.colorSpace)!==ft,(h!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new we(new an(2,2),new Bn({name:"BackgroundMaterial",uniforms:As(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=et.getTransfer(b.colorSpace)!==ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function p(y,v){y.getRGB(co,Md(i)),n.buffers.color.setClear(co.r,co.g,co.b,v,o)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:x}}function ex(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(C,T,D,S,O){let k=!1;const F=h(S,D,T);r!==F&&(r=F,u(r.object)),k=f(C,S,D,O),k&&g(C,S,D,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(C,T,D,S),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function u(C){return i.bindVertexArray(C)}function c(C){return i.deleteVertexArray(C)}function h(C,T,D){const S=D.wireframe===!0;let O=n[C.id];O===void 0&&(O={},n[C.id]=O);let k=O[T.id];k===void 0&&(k={},O[T.id]=k);let F=k[S];return F===void 0&&(F=d(l()),k[S]=F),F}function d(C){const T=[],D=[],S=[];for(let O=0;O<t;O++)T[O]=0,D[O]=0,S[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:D,attributeDivisors:S,object:C,attributes:{},index:null}}function f(C,T,D,S){const O=r.attributes,k=T.attributes;let F=0;const j=D.getAttributes();for(const G in j)if(j[G].location>=0){const oe=O[G];let ue=k[G];if(ue===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),oe===void 0||oe.attribute!==ue||ue&&oe.data!==ue.data)return!0;F++}return r.attributesNum!==F||r.index!==S}function g(C,T,D,S){const O={},k=T.attributes;let F=0;const j=D.getAttributes();for(const G in j)if(j[G].location>=0){let oe=k[G];oe===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const ue={};ue.attribute=oe,oe&&oe.data&&(ue.data=oe.data),O[G]=ue,F++}r.attributes=O,r.attributesNum=F,r.index=S}function _(){const C=r.newAttributes;for(let T=0,D=C.length;T<D;T++)C[T]=0}function m(C){p(C,0)}function p(C,T){const D=r.newAttributes,S=r.enabledAttributes,O=r.attributeDivisors;D[C]=1,S[C]===0&&(i.enableVertexAttribArray(C),S[C]=1),O[C]!==T&&(i.vertexAttribDivisor(C,T),O[C]=T)}function x(){const C=r.newAttributes,T=r.enabledAttributes;for(let D=0,S=T.length;D<S;D++)T[D]!==C[D]&&(i.disableVertexAttribArray(D),T[D]=0)}function y(C,T,D,S,O,k,F){F===!0?i.vertexAttribIPointer(C,T,D,O,k):i.vertexAttribPointer(C,T,D,S,O,k)}function v(C,T,D,S){_();const O=S.attributes,k=D.getAttributes(),F=T.defaultAttributeValues;for(const j in k){const G=k[j];if(G.location>=0){let te=O[j];if(te===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),te!==void 0){const oe=te.normalized,ue=te.itemSize,Pe=e.get(te);if(Pe===void 0)continue;const be=Pe.buffer,Qe=Pe.type,He=Pe.bytesPerElement,K=Qe===i.INT||Qe===i.UNSIGNED_INT||te.gpuType===tc;if(te.isInterleavedBufferAttribute){const $=te.data,me=$.stride,Fe=te.offset;if($.isInstancedInterleavedBuffer){for(let Ee=0;Ee<G.locationSize;Ee++)p(G.location+Ee,$.meshPerAttribute);C.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)m(G.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Ee=0;Ee<G.locationSize;Ee++)y(G.location+Ee,ue/G.locationSize,Qe,oe,me*He,(Fe+ue/G.locationSize*Ee)*He,K)}else{if(te.isInstancedBufferAttribute){for(let $=0;$<G.locationSize;$++)p(G.location+$,te.meshPerAttribute);C.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let $=0;$<G.locationSize;$++)m(G.location+$);i.bindBuffer(i.ARRAY_BUFFER,be);for(let $=0;$<G.locationSize;$++)y(G.location+$,ue/G.locationSize,Qe,oe,ue*He,ue/G.locationSize*$*He,K)}}else if(F!==void 0){const oe=F[j];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(G.location,oe);break;case 3:i.vertexAttrib3fv(G.location,oe);break;case 4:i.vertexAttrib4fv(G.location,oe);break;default:i.vertexAttrib1fv(G.location,oe)}}}}x()}function b(){L();for(const C in n){const T=n[C];for(const D in T){const S=T[D];for(const O in S)c(S[O].object),delete S[O];delete T[D]}delete n[C]}}function M(C){if(n[C.id]===void 0)return;const T=n[C.id];for(const D in T){const S=T[D];for(const O in S)c(S[O].object),delete S[O];delete T[D]}delete n[C.id]}function A(C){for(const T in n){const D=n[T];if(D[C.id]===void 0)continue;const S=D[C.id];for(const O in S)c(S[O].object),delete S[O];delete D[C.id]}}function L(){E(),o=!0,r!==s&&(r=s,u(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function tx(i,e,t){let n;function s(u){n=u}function r(u,c){i.drawArrays(n,u,c),t.update(c,n,1)}function o(u,c,h){h!==0&&(i.drawArraysInstanced(n,u,c,h),t.update(c,n,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,h);let f=0;for(let g=0;g<h;g++)f+=c[g];t.update(f,n,1)}function l(u,c,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u.length;g++)o(u[g],c[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,u,0,c,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=c[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Sn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Un&&!L)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:b,maxSamples:M}}function ix(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new yi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?c(null):u();else{const x=r?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=c(g,d,y,f);for(let b=0;b!==y;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function sx(i){let e=new WeakMap;function t(o,a){return a===nl?o.mapping=ws:a===il&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===nl||a===il)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new hm(l.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ds=4,ju=[.125,.215,.35,.446,.526,.582],zi=20,Ea=new Ho,Yu=new De;let Ta=null,Aa=0,Ra=0,Ca=!1;const ki=(1+Math.sqrt(5))/2,ls=1/ki,Ku=[new w(-ki,ls,0),new w(ki,ls,0),new w(-ls,0,ki),new w(ls,0,ki),new w(0,ki,-ls),new w(0,ki,ls),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],rx=new w;class Fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=rx}=r;Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,Aa,Ra),this._renderer.xr.enabled=Ca,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ds,format:Sn,colorSpace:rn,depthBuffer:!1},s=$u(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ox(r)),this._blurMaterial=ax(r,e,t)}return s}_compileMaterial(e){const t=new we(this._lodPlanes[0],e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,n,s,r){const l=new Yt(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Yu),h.toneMapping=Ei,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new Ft({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new we(new Kt,_);let p=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,p=!0):(_.color.copy(Yu),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,u[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[y],r.y,r.z)):v===1?(l.up.set(0,0,u[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[y],r.z)):(l.up.set(0,u[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[y]));const b=this._cubeSize;uo(s,v*b,y>2?b:0,b,b),h.setRenderTarget(s),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ws||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;uo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ea)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ku[(s-r-1)%Ku.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new we(this._lodPlanes[s],u),d=u.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),_=r/g,m=isFinite(r)?1+Math.floor(c*_):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let x=0;for(let A=0;A<zi;++A){const L=A/_,E=Math.exp(-L*L/2);p.push(E),A===0?x+=E:A<m&&(x+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[s],b=3*v*(s>y-ds?s-y+ds:0),M=4*(this._cubeSize-v);uo(t,b,M,3*v,2*v),l.setRenderTarget(t),l.render(h,Ea)}}function ox(i){const e=[],t=[],n=[];let s=i;const r=i-ds+1+ju.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ds?l=ju[o-i+ds-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let M=0;M<f;M++){const A=M%3*2/3-1,L=M>2?0:-1,E=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];x.set(E,_*g*M),y.set(d,m*g*M);const C=[M,M,M,M,M,M];v.set(C,p*g*M)}const b=new xt;b.setAttribute("position",new Vt(x,_)),b.setAttribute("uv",new Vt(y,m)),b.setAttribute("faceIndex",new Vt(v,p)),e.push(b),s>ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $u(i,e,t){const n=new Ai(i,e,t);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ax(i,e,t){const n=new Float32Array(zi),s=new w(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ju(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Zu(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===nl||l===il,c=l===ws||l===Es;if(u||c){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Fl(i)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return u&&f&&f.height>0||c&&f&&s(f)?(t===null&&(t=new Fl(i)),h=u?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function cx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Tr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ux(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function u(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const b=x[y+0],M=x[y+1],A=x[y+2];d.push(b,M,M,A,A,b)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const b=y+0,M=y+1,A=y+2;d.push(b,M,M,A,A,b)}}else return;const m=new(gd(d)?yd:vd)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function c(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&u(h)}else u(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function hx(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function u(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function c(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)u(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function dx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function fx(i,e,t){const n=new WeakMap,s=new Ze;function r(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const M=new Float32Array(v*b*4*h),A=new _d(M,v,b,h);A.type=Un,A.needsUpdate=!0;const L=y*4;for(let C=0;C<h;C++){const T=m[C],D=p[C],S=x[C],O=v*b*4*C;for(let k=0;k<T.count;k++){const F=k*L;f===!0&&(s.fromBufferAttribute(T,k),M[O+F+0]=s.x,M[O+F+1]=s.y,M[O+F+2]=s.z,M[O+F+3]=0),g===!0&&(s.fromBufferAttribute(D,k),M[O+F+4]=s.x,M[O+F+5]=s.y,M[O+F+6]=s.z,M[O+F+7]=0),_===!0&&(s.fromBufferAttribute(S,k),M[O+F+8]=s.x,M[O+F+9]=s.y,M[O+F+10]=s.z,M[O+F+11]=S.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new pe(v,b)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<u.length;_++)f+=u[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function px(i,e,t,n){let s=new WeakMap;function r(l){const u=n.render.frame,c=l.geometry,h=e.get(l,c);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}const Fd=new Ot,Qu=new xc(1,1),Od=new _d,kd=new Yp,Bd=new Sd,eh=[],th=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=eh[s];if(r===void 0&&(r=new Float32Array(s),eh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vo(i,e){let t=th[e];t===void 0&&(t=new Int32Array(e),th[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function _x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function vx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;sh.set(n),i.uniformMatrix2fv(this.addr,!1,sh),Bt(t,n)}}function yx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;ih.set(n),i.uniformMatrix3fv(this.addr,!1,ih),Bt(t,n)}}function Mx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;nh.set(n),i.uniformMatrix4fv(this.addr,!1,nh),Bt(t,n)}}function bx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function Ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function Tx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function Rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function Cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function Px(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qu.compareFunction=md,r=Qu):r=Fd,t.setTexture2D(e||r,s)}function Ix(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kd,s)}function Lx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Bd,s)}function Dx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Od,s)}function Ux(i){switch(i){case 5126:return mx;case 35664:return gx;case 35665:return _x;case 35666:return xx;case 35674:return vx;case 35675:return yx;case 35676:return Mx;case 5124:case 35670:return bx;case 35667:case 35671:return Sx;case 35668:case 35672:return wx;case 35669:case 35673:return Ex;case 5125:return Tx;case 36294:return Ax;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Dx}}function Nx(i,e){i.uniform1fv(this.addr,e)}function Fx(i,e){const t=ks(e,this.size,2);i.uniform2fv(this.addr,t)}function Ox(i,e){const t=ks(e,this.size,3);i.uniform3fv(this.addr,t)}function kx(i,e){const t=ks(e,this.size,4);i.uniform4fv(this.addr,t)}function Bx(i,e){const t=ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zx(i,e){const t=ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hx(i,e){const t=ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vx(i,e){i.uniform1iv(this.addr,e)}function Gx(i,e){i.uniform2iv(this.addr,e)}function Wx(i,e){i.uniform3iv(this.addr,e)}function Xx(i,e){i.uniform4iv(this.addr,e)}function qx(i,e){i.uniform1uiv(this.addr,e)}function jx(i,e){i.uniform2uiv(this.addr,e)}function Yx(i,e){i.uniform3uiv(this.addr,e)}function Kx(i,e){i.uniform4uiv(this.addr,e)}function $x(i,e,t){const n=this.cache,s=e.length,r=Vo(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Fd,r[o])}function Jx(i,e,t){const n=this.cache,s=e.length,r=Vo(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||kd,r[o])}function Zx(i,e,t){const n=this.cache,s=e.length,r=Vo(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Bd,r[o])}function Qx(i,e,t){const n=this.cache,s=e.length,r=Vo(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Od,r[o])}function ev(i){switch(i){case 5126:return Nx;case 35664:return Fx;case 35665:return Ox;case 35666:return kx;case 35674:return Bx;case 35675:return zx;case 35676:return Hx;case 5124:case 35670:return Vx;case 35667:case 35671:return Gx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return jx;case 36295:return Yx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Qx}}class tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ux(t.type)}}class nv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ev(t.type)}}class iv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function rh(i,e){i.seq.push(e),i.map[e.id]=e}function sv(i,e,t){const n=i.name,s=n.length;for(Pa.lastIndex=0;;){const r=Pa.exec(n),o=Pa.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){rh(t,u===void 0?new tv(a,i,e):new nv(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new iv(a),rh(t,h)),t=h}}}class bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);sv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function oh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const rv=37297;let ov=0;function av(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ah=new Ge;function lv(i){et._getMatrix(ah,et.workingColorSpace,i);const e=`mat3( ${ah.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Io:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+av(i.getShaderSource(e),a)}else return r}function cv(i,e){const t=lv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uv(i,e){let t;switch(e){case op:t="Linear";break;case ap:t="Reinhard";break;case lp:t="Cineon";break;case id:t="ACESFilmic";break;case up:t="AgX";break;case hp:t="Neutral";break;case cp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ho=new w;function hv(){et.getLuminanceCoefficients(ho);const i=ho.x.toFixed(4),e=ho.y.toFixed(4),t=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function fv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function nr(i){return i!==""}function ch(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(mv,_v)}const gv=new Map;function _v(i,e){let t=je[e];if(t===void 0){const n=gv.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}const xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(i){return i.replace(xv,vv)}function vv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===td?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ec?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Mv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ws:case Es:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bv(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Es&&(e="ENVMAP_MODE_REFRACTION"),e}function Sv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nd:e="ENVMAP_BLENDING_MULTIPLY";break;case sp:e="ENVMAP_BLENDING_MIX";break;case rp:e="ENVMAP_BLENDING_ADD";break}return e}function wv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ev(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=yv(t),u=Mv(t),c=bv(t),h=Sv(t),d=wv(t),f=dv(t),g=fv(r),_=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(nr).join(`
`),p.length>0&&(p+=`
`)):(m=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),p=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?je.tonemapping_pars_fragment:"",t.toneMapping!==Ei?uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,cv("linearToOutputTexel",t.outputColorSpace),hv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),o=Ol(o),o=ch(o,t),o=uh(o,t),a=Ol(a),a=ch(a,t),a=uh(a,t),o=hh(o),a=hh(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,v=x+p+a,b=oh(s,s.VERTEX_SHADER,y),M=oh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,b),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(T){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",S=s.getShaderInfoLog(b)||"",O=s.getShaderInfoLog(M)||"",k=D.trim(),F=S.trim(),j=O.trim();let G=!0,te=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,M);else{const oe=lh(s,b,"vertex"),ue=lh(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+oe+`
`+ue)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||j==="")&&(te=!1);te&&(T.diagnostics={runnable:G,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(b),s.deleteShader(M),L=new bo(s,_),E=pv(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,rv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ov++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=M,this}let Tv=0;class Av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rv(e),t.set(e,n)),n}}class Rv{constructor(e){this.id=Tv++,this.code=e,this.usedTimes=0}}function Cv(i,e,t,n,s,r,o){const a=new uc,l=new Av,u=new Set,c=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,C,T,D,S){const O=D.fog,k=S.geometry,F=E.isMeshStandardMaterial?D.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||F),G=j&&j.mapping===Bo?j.image.height:null,te=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ue=oe!==void 0?oe.length:0;let Pe=0;k.morphAttributes.position!==void 0&&(Pe=1),k.morphAttributes.normal!==void 0&&(Pe=2),k.morphAttributes.color!==void 0&&(Pe=3);let be,Qe,He,K;if(te){const rt=Gn[te];be=rt.vertexShader,Qe=rt.fragmentShader}else be=E.vertexShader,Qe=E.fragmentShader,l.update(E),He=l.getVertexShaderID(E),K=l.getFragmentShaderID(E);const $=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Fe=S.isInstancedMesh===!0,Ee=S.isBatchedMesh===!0,Te=!!E.map,at=!!E.matcap,N=!!j,wt=!!E.aoMap,We=!!E.lightMap,ke=!!E.bumpMap,ye=!!E.normalMap,Et=!!E.displacementMap,Me=!!E.emissiveMap,qe=!!E.metalnessMap,zt=!!E.roughnessMap,Ut=E.anisotropy>0,U=E.clearcoat>0,R=E.dispersion>0,V=E.iridescence>0,Y=E.sheen>0,Q=E.transmission>0,q=Ut&&!!E.anisotropyMap,Ce=U&&!!E.clearcoatMap,ae=U&&!!E.clearcoatNormalMap,Se=U&&!!E.clearcoatRoughnessMap,Ae=V&&!!E.iridescenceMap,se=V&&!!E.iridescenceThicknessMap,fe=Y&&!!E.sheenColorMap,Oe=Y&&!!E.sheenRoughnessMap,Re=!!E.specularMap,he=!!E.specularColorMap,Xe=!!E.specularIntensityMap,B=Q&&!!E.transmissionMap,re=Q&&!!E.thicknessMap,le=!!E.gradientMap,_e=!!E.alphaMap,ne=E.alphaTest>0,Z=!!E.alphaHash,ve=!!E.extensions;let Ve=Ei;E.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ve=i.toneMapping);const mt={shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:be,fragmentShader:Qe,defines:E.defines,customVertexShaderID:He,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&S._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&S.instanceColor!==null,instancingMorph:Fe&&S.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:rn,alphaToCoverage:!!E.alphaToCoverage,map:Te,matcap:at,envMap:N,envMapMode:N&&j.mapping,envMapCubeUVHeight:G,aoMap:wt,lightMap:We,bumpMap:ke,normalMap:ye,displacementMap:d&&Et,emissiveMap:Me,normalMapObjectSpace:ye&&E.normalMapType===_p,normalMapTangentSpace:ye&&E.normalMapType===pd,metalnessMap:qe,roughnessMap:zt,anisotropy:Ut,anisotropyMap:q,clearcoat:U,clearcoatMap:Ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:Se,dispersion:R,iridescence:V,iridescenceMap:Ae,iridescenceThicknessMap:se,sheen:Y,sheenColorMap:fe,sheenRoughnessMap:Oe,specularMap:Re,specularColorMap:he,specularIntensityMap:Xe,transmission:Q,transmissionMap:B,thicknessMap:re,gradientMap:le,opaque:E.transparent===!1&&E.blending===ms&&E.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:Z,combine:E.combine,mapUv:Te&&_(E.map.channel),aoMapUv:wt&&_(E.aoMap.channel),lightMapUv:We&&_(E.lightMap.channel),bumpMapUv:ke&&_(E.bumpMap.channel),normalMapUv:ye&&_(E.normalMap.channel),displacementMapUv:Et&&_(E.displacementMap.channel),emissiveMapUv:Me&&_(E.emissiveMap.channel),metalnessMapUv:qe&&_(E.metalnessMap.channel),roughnessMapUv:zt&&_(E.roughnessMap.channel),anisotropyMapUv:q&&_(E.anisotropyMap.channel),clearcoatMapUv:Ce&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(E.sheenRoughnessMap.channel),specularMapUv:Re&&_(E.specularMap.channel),specularColorMapUv:he&&_(E.specularColorMap.channel),specularIntensityMapUv:Xe&&_(E.specularIntensityMap.channel),transmissionMapUv:B&&_(E.transmissionMap.channel),thicknessMapUv:re&&_(E.thicknessMap.channel),alphaMapUv:_e&&_(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ye||Ut),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!k.attributes.uv&&(Te||_e),fog:!!O,useFog:E.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:S.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Pe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Te&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===ft,decodeVideoTextureEmissive:Me&&E.emissiveMap.isVideoTexture===!0&&et.getTransfer(E.emissiveMap.colorSpace)===ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Lt,flipSided:E.side===tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ve&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&E.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return mt.vertexUv1s=u.has(1),mt.vertexUv2s=u.has(2),mt.vertexUv3s=u.has(3),u.clear(),mt}function p(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const T in E.defines)C.push(T),C.push(E.defines[T]);return E.isRawShaderMaterial===!1&&(x(C,E),y(C,E),C.push(i.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function x(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function y(E,C){a.disableAll(),C.supportsVertexTextures&&a.enable(0),C.instancing&&a.enable(1),C.instancingColor&&a.enable(2),C.instancingMorph&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),C.dispersion&&a.enable(20),C.batchingColor&&a.enable(21),C.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const C=g[E.type];let T;if(C){const D=Gn[C];T=am.clone(D.uniforms)}else T=E.uniforms;return T}function b(E,C){let T;for(let D=0,S=c.length;D<S;D++){const O=c[D];if(O.cacheKey===C){T=O,++T.usedTimes;break}}return T===void 0&&(T=new Ev(i,C,E,r),c.push(T)),T}function M(E){if(--E.usedTimes===0){const C=c.indexOf(E);c[C]=c[c.length-1],c.pop(),E.destroy()}}function A(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:L}}function Pv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Iv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ph(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function u(h,d){t.length>1&&t.sort(h||Iv),n.length>1&&n.sort(d||fh),s.length>1&&s.sort(d||fh)}function c(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function Lv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new ph,i.set(n,[o])):s>=r.length?(o=new ph,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new De};break;case"SpotLight":t={position:new w,direction:new w,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function Uv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Nv=0;function Fv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ov(i){const e=new Dv,t=Uv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new w);const s=new w,r=new ee,o=new ee;function a(u){let c=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,y=0,v=0,b=0,M=0,A=0;u.sort(Fv);for(let E=0,C=u.length;E<C;E++){const T=u[E],D=T.color,S=T.intensity,O=T.distance,k=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=D.r*S,h+=D.g*S,d+=D.b*S;else if(T.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(T.sh.coefficients[F],S);A++}else if(T.isDirectionalLight){const F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const j=T.shadow,G=t.get(T);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=T.shadow.matrix,x++}n.directional[f]=F,f++}else if(T.isSpotLight){const F=e.get(T);F.position.setFromMatrixPosition(T.matrixWorld),F.color.copy(D).multiplyScalar(S),F.distance=O,F.coneCos=Math.cos(T.angle),F.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),F.decay=T.decay,n.spot[_]=F;const j=T.shadow;if(T.map&&(n.spotLightMap[b]=T.map,b++,j.updateMatrices(T),T.castShadow&&M++),n.spotLightMatrix[_]=j.matrix,T.castShadow){const G=t.get(T);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=k,v++}_++}else if(T.isRectAreaLight){const F=e.get(T);F.color.copy(D).multiplyScalar(S),F.halfWidth.set(T.width*.5,0,0),F.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=F,m++}else if(T.isPointLight){const F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),F.distance=T.distance,F.decay=T.decay,T.castShadow){const j=T.shadow,G=t.get(T);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=T.shadow.matrix,y++}n.point[g]=F,g++}else if(T.isHemisphereLight){const F=e.get(T);F.skyColor.copy(T.color).multiplyScalar(S),F.groundColor.copy(T.groundColor).multiplyScalar(S),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==x||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==b||L.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+b-M,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=A,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=x,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=b,L.numLightProbes=A,n.version=Nv++)}function l(u,c){let h=0,d=0,f=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){const y=u[p];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function mh(i){const e=new Ov(i),t=[],n=[];function s(c){u.camera=c,t.length=0,n.length=0}function r(c){t.push(c)}function o(c){n.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function kv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new mh(i),e.set(s,[a])):r>=o.length?(a=new mh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hv(i,e,t){let n=new mc;const s=new pe,r=new pe,o=new Ze,a=new Bm({depthPacking:gp}),l=new zm,u={},c=t.maxTextureSize,h={[ui]:tn,[tn]:ui,[Lt]:Lt},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Bv,fragmentShader:zv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new xt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new we(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=td;let p=this.type;this.render=function(M,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const E=i.getRenderTarget(),C=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),D=i.state;D.setBlending(wi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const S=p!==si&&this.type===si,O=p===si&&this.type!==si;for(let k=0,F=M.length;k<F;k++){const j=M[k],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const te=G.getFrameExtents();if(s.multiply(te),r.copy(G.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/te.x),s.x=r.x*te.x,G.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/te.y),s.y=r.y*te.y,G.mapSize.y=r.y)),G.map===null||S===!0||O===!0){const ue=this.type!==si?{minFilter:nn,magFilter:nn}:{};G.map!==null&&G.map.dispose(),G.map=new Ai(s.x,s.y,ue),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const oe=G.getViewportCount();for(let ue=0;ue<oe;ue++){const Pe=G.getViewport(ue);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),D.viewport(o),G.updateMatrices(j,ue),n=G.getFrustum(),v(A,L,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===si&&x(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,C,T)};function x(M,A){const L=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ai(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,L,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,L,f,_,null)}function y(M,A,L,E){let C=null;const T=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)C=T;else if(C=L.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=C.uuid,S=A.uuid;let O=u[D];O===void 0&&(O={},u[D]=O);let k=O[S];k===void 0&&(k=C.clone(),O[S]=k,A.addEventListener("dispose",b)),C=k}if(C.visible=A.visible,C.wireframe=A.wireframe,E===si?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:h[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,L.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const D=i.properties.get(C);D.light=L}return C}function v(M,A,L,E,C){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===si)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const S=e.update(M),O=M.material;if(Array.isArray(O)){const k=S.groups;for(let F=0,j=k.length;F<j;F++){const G=k[F],te=O[G.materialIndex];if(te&&te.visible){const oe=y(M,te,E,C);M.onBeforeShadow(i,M,A,L,S,oe,G),i.renderBufferDirect(L,null,S,oe,M,G),M.onAfterShadow(i,M,A,L,S,oe,G)}}}else if(O.visible){const k=y(M,O,E,C);M.onBeforeShadow(i,M,A,L,S,k,null),i.renderBufferDirect(L,null,S,k,M,null),M.onAfterShadow(i,M,A,L,S,k,null)}}const D=M.children;for(let S=0,O=D.length;S<O;S++)v(D[S],A,L,E,C)}function b(M){M.target.removeEventListener("dispose",b);for(const L in u){const E=u[L],C=M.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}const Vv={[Ka]:$a,[Ja]:el,[Za]:tl,[Ss]:Qa,[$a]:Ka,[el]:Ja,[tl]:Za,[Qa]:Ss};function Gv(i,e){function t(){let B=!1;const re=new Ze;let le=null;const _e=new Ze(0,0,0,0);return{setMask:function(ne){le!==ne&&!B&&(i.colorMask(ne,ne,ne,ne),le=ne)},setLocked:function(ne){B=ne},setClear:function(ne,Z,ve,Ve,mt){mt===!0&&(ne*=Ve,Z*=Ve,ve*=Ve),re.set(ne,Z,ve,Ve),_e.equals(re)===!1&&(i.clearColor(ne,Z,ve,Ve),_e.copy(re))},reset:function(){B=!1,le=null,_e.set(-1,0,0,0)}}}function n(){let B=!1,re=!1,le=null,_e=null,ne=null;return{setReversed:function(Z){if(re!==Z){const ve=e.get("EXT_clip_control");Z?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),re=Z;const Ve=ne;ne=null,this.setClear(Ve)}},getReversed:function(){return re},setTest:function(Z){Z?$(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(Z){le!==Z&&!B&&(i.depthMask(Z),le=Z)},setFunc:function(Z){if(re&&(Z=Vv[Z]),_e!==Z){switch(Z){case Ka:i.depthFunc(i.NEVER);break;case $a:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case Qa:i.depthFunc(i.GEQUAL);break;case el:i.depthFunc(i.GREATER);break;case tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Z}},setLocked:function(Z){B=Z},setClear:function(Z){ne!==Z&&(re&&(Z=1-Z),i.clearDepth(Z),ne=Z)},reset:function(){B=!1,le=null,_e=null,ne=null,re=!1}}}function s(){let B=!1,re=null,le=null,_e=null,ne=null,Z=null,ve=null,Ve=null,mt=null;return{setTest:function(rt){B||(rt?$(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(rt){re!==rt&&!B&&(i.stencilMask(rt),re=rt)},setFunc:function(rt,$n,Hn){(le!==rt||_e!==$n||ne!==Hn)&&(i.stencilFunc(rt,$n,Hn),le=rt,_e=$n,ne=Hn)},setOp:function(rt,$n,Hn){(Z!==rt||ve!==$n||Ve!==Hn)&&(i.stencilOp(rt,$n,Hn),Z=rt,ve=$n,Ve=Hn)},setLocked:function(rt){B=rt},setClear:function(rt){mt!==rt&&(i.clearStencil(rt),mt=rt)},reset:function(){B=!1,re=null,le=null,_e=null,ne=null,Z=null,ve=null,Ve=null,mt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,u=new WeakMap;let c={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,b=null,M=null,A=new De(0,0,0),L=0,E=!1,C=null,T=null,D=null,S=null,O=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=j>=2);let te=null,oe={};const ue=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),be=new Ze().fromArray(ue),Qe=new Ze().fromArray(Pe);function He(B,re,le,_e){const ne=new Uint8Array(4),Z=i.createTexture();i.bindTexture(B,Z),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<le;ve++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(re+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Z}const K={};K[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(Ss),ke(!1),ye(Zc),$(i.CULL_FACE),wt(wi);function $(B){c[B]!==!0&&(i.enable(B),c[B]=!0)}function me(B){c[B]!==!1&&(i.disable(B),c[B]=!1)}function Fe(B,re){return h[B]!==re?(i.bindFramebuffer(B,re),h[B]=re,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=re),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Ee(B,re){let le=f,_e=!1;if(B){le=d.get(re),le===void 0&&(le=[],d.set(re,le));const ne=B.textures;if(le.length!==ne.length||le[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ve=ne.length;Z<ve;Z++)le[Z]=i.COLOR_ATTACHMENT0+Z;le.length=ne.length,_e=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,_e=!0);_e&&i.drawBuffers(le)}function Te(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const at={[Bi]:i.FUNC_ADD,[Hf]:i.FUNC_SUBTRACT,[Vf]:i.FUNC_REVERSE_SUBTRACT};at[Gf]=i.MIN,at[Wf]=i.MAX;const N={[Xf]:i.ZERO,[qf]:i.ONE,[jf]:i.SRC_COLOR,[ja]:i.SRC_ALPHA,[Qf]:i.SRC_ALPHA_SATURATE,[Jf]:i.DST_COLOR,[Kf]:i.DST_ALPHA,[Yf]:i.ONE_MINUS_SRC_COLOR,[Ya]:i.ONE_MINUS_SRC_ALPHA,[Zf]:i.ONE_MINUS_DST_COLOR,[$f]:i.ONE_MINUS_DST_ALPHA,[ep]:i.CONSTANT_COLOR,[tp]:i.ONE_MINUS_CONSTANT_COLOR,[np]:i.CONSTANT_ALPHA,[ip]:i.ONE_MINUS_CONSTANT_ALPHA};function wt(B,re,le,_e,ne,Z,ve,Ve,mt,rt){if(B===wi){_===!0&&(me(i.BLEND),_=!1);return}if(_===!1&&($(i.BLEND),_=!0),B!==zf){if(B!==m||rt!==E){if((p!==Bi||v!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,v=Bi),rt)switch(B){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.ONE,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,y=null,b=null,M=null,A.set(0,0,0),L=0,m=B,E=rt}return}ne=ne||re,Z=Z||le,ve=ve||_e,(re!==p||ne!==v)&&(i.blendEquationSeparate(at[re],at[ne]),p=re,v=ne),(le!==x||_e!==y||Z!==b||ve!==M)&&(i.blendFuncSeparate(N[le],N[_e],N[Z],N[ve]),x=le,y=_e,b=Z,M=ve),(Ve.equals(A)===!1||mt!==L)&&(i.blendColor(Ve.r,Ve.g,Ve.b,mt),A.copy(Ve),L=mt),m=B,E=!1}function We(B,re){B.side===Lt?me(i.CULL_FACE):$(i.CULL_FACE);let le=B.side===tn;re&&(le=!le),ke(le),B.blending===ms&&B.transparent===!1?wt(wi):wt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const _e=B.stencilWrite;a.setTest(_e),_e&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Me(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(B){C!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),C=B)}function ye(B){B!==kf?($(i.CULL_FACE),B!==T&&(B===Zc?i.cullFace(i.BACK):B===Bf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),T=B}function Et(B){B!==D&&(F&&i.lineWidth(B),D=B)}function Me(B,re,le){B?($(i.POLYGON_OFFSET_FILL),(S!==re||O!==le)&&(i.polygonOffset(re,le),S=re,O=le)):me(i.POLYGON_OFFSET_FILL)}function qe(B){B?$(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function zt(B){B===void 0&&(B=i.TEXTURE0+k-1),te!==B&&(i.activeTexture(B),te=B)}function Ut(B,re,le){le===void 0&&(te===null?le=i.TEXTURE0+k-1:le=te);let _e=oe[le];_e===void 0&&(_e={type:void 0,texture:void 0},oe[le]=_e),(_e.type!==B||_e.texture!==re)&&(te!==le&&(i.activeTexture(le),te=le),i.bindTexture(B,re||K[B]),_e.type=B,_e.texture=re)}function U(){const B=oe[te];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function R(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(B){be.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),be.copy(B))}function Oe(B){Qe.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Qe.copy(B))}function Re(B,re){let le=u.get(re);le===void 0&&(le=new WeakMap,u.set(re,le));let _e=le.get(B);_e===void 0&&(_e=i.getUniformBlockIndex(re,B.name),le.set(B,_e))}function he(B,re){const _e=u.get(re).get(B);l.get(re)!==_e&&(i.uniformBlockBinding(re,_e,B.__bindingPointIndex),l.set(re,_e))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},te=null,oe={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,b=null,M=null,A=new De(0,0,0),L=0,E=!1,C=null,T=null,D=null,S=null,O=null,be.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:me,bindFramebuffer:Fe,drawBuffers:Ee,useProgram:Te,setBlending:wt,setMaterial:We,setFlipSided:ke,setCullFace:ye,setLineWidth:Et,setPolygonOffset:Me,setScissorTest:qe,activeTexture:zt,bindTexture:Ut,unbindTexture:U,compressedTexImage2D:R,compressedTexImage3D:V,texImage2D:Ae,texImage3D:se,updateUBOMapping:Re,uniformBlockBinding:he,texStorage2D:ae,texStorage3D:Se,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Ce,scissor:fe,viewport:Oe,reset:Xe}}function Wv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new pe,c=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,R){return f?new OffscreenCanvas(U,R):Er("canvas")}function _(U,R,V){let Y=1;const Q=Ut(U);if((Q.width>V||Q.height>V)&&(Y=V/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const q=Math.floor(Y*Q.width),Ce=Math.floor(Y*Q.height);h===void 0&&(h=g(q,Ce));const ae=R?g(q,Ce):h;return ae.width=q,ae.height=Ce,ae.getContext("2d").drawImage(U,0,0,q,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Ce+")."),ae}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function x(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(U,R,V,Y,Q=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let q=R;if(R===i.RED&&(V===i.FLOAT&&(q=i.R32F),V===i.HALF_FLOAT&&(q=i.R16F),V===i.UNSIGNED_BYTE&&(q=i.R8)),R===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(q=i.R8UI),V===i.UNSIGNED_SHORT&&(q=i.R16UI),V===i.UNSIGNED_INT&&(q=i.R32UI),V===i.BYTE&&(q=i.R8I),V===i.SHORT&&(q=i.R16I),V===i.INT&&(q=i.R32I)),R===i.RG&&(V===i.FLOAT&&(q=i.RG32F),V===i.HALF_FLOAT&&(q=i.RG16F),V===i.UNSIGNED_BYTE&&(q=i.RG8)),R===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(q=i.RG8UI),V===i.UNSIGNED_SHORT&&(q=i.RG16UI),V===i.UNSIGNED_INT&&(q=i.RG32UI),V===i.BYTE&&(q=i.RG8I),V===i.SHORT&&(q=i.RG16I),V===i.INT&&(q=i.RG32I)),R===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(q=i.RGB8UI),V===i.UNSIGNED_SHORT&&(q=i.RGB16UI),V===i.UNSIGNED_INT&&(q=i.RGB32UI),V===i.BYTE&&(q=i.RGB8I),V===i.SHORT&&(q=i.RGB16I),V===i.INT&&(q=i.RGB32I)),R===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),V===i.UNSIGNED_INT&&(q=i.RGBA32UI),V===i.BYTE&&(q=i.RGBA8I),V===i.SHORT&&(q=i.RGBA16I),V===i.INT&&(q=i.RGBA32I)),R===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),R===i.RGBA){const Ce=Q?Io:et.getTransfer(Y);V===i.FLOAT&&(q=i.RGBA32F),V===i.HALF_FLOAT&&(q=i.RGBA16F),V===i.UNSIGNED_BYTE&&(q=Ce===ft?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(U,R){let V;return U?R===null||R===Ti||R===vr?V=i.DEPTH24_STENCIL8:R===Un?V=i.DEPTH32F_STENCIL8:R===xr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Ti||R===vr?V=i.DEPTH_COMPONENT24:R===Un?V=i.DEPTH_COMPONENT32F:R===xr&&(V=i.DEPTH_COMPONENT16),V}function b(U,R){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==nn&&U.minFilter!==pn?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function M(U){const R=U.target;R.removeEventListener("dispose",M),L(R),R.isVideoTexture&&c.delete(R)}function A(U){const R=U.target;R.removeEventListener("dispose",A),C(R)}function L(U){const R=n.get(U);if(R.__webglInit===void 0)return;const V=U.source,Y=d.get(V);if(Y){const Q=Y[R.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(U),Object.keys(Y).length===0&&d.delete(V)}n.remove(U)}function E(U){const R=n.get(U);i.deleteTexture(R.__webglTexture);const V=U.source,Y=d.get(V);delete Y[R.__cacheKey],o.memory.textures--}function C(U){const R=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(R.__webglFramebuffer[Y]))for(let Q=0;Q<R.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(R.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(R.__webglFramebuffer[Y]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[Y])}else{if(Array.isArray(R.__webglFramebuffer))for(let Y=0;Y<R.__webglFramebuffer.length;Y++)i.deleteFramebuffer(R.__webglFramebuffer[Y]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Y=0;Y<R.__webglColorRenderbuffer.length;Y++)R.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[Y]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const V=U.textures;for(let Y=0,Q=V.length;Y<Q;Y++){const q=n.get(V[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(V[Y])}n.remove(U)}let T=0;function D(){T=0}function S(){const U=T;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),T+=1,U}function O(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function k(U,R){const V=n.get(U);if(U.isVideoTexture&&qe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&V.__version!==U.version){const Y=U.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,U,R);return}}else U.isExternalTexture&&(V.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+R)}function F(U,R){const V=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&V.__version!==U.version){K(V,U,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+R)}function j(U,R){const V=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&V.__version!==U.version){K(V,U,R);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+R)}function G(U,R){const V=n.get(U);if(U.version>0&&V.__version!==U.version){$(V,U,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+R)}const te={[En]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},oe={[nn]:i.NEAREST,[rd]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[_o]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},ue={[xp]:i.NEVER,[wp]:i.ALWAYS,[vp]:i.LESS,[md]:i.LEQUAL,[yp]:i.EQUAL,[Sp]:i.GEQUAL,[Mp]:i.GREATER,[bp]:i.NOTEQUAL};function Pe(U,R){if(R.type===Un&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===pn||R.magFilter===_o||R.magFilter===tr||R.magFilter===ai||R.minFilter===pn||R.minFilter===_o||R.minFilter===tr||R.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,te[R.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,te[R.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,te[R.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,oe[R.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,oe[R.minFilter]),R.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ue[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===nn||R.minFilter!==tr&&R.minFilter!==ai||R.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function be(U,R){let V=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",M));const Y=R.source;let Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));const q=O(R);if(q!==U.__cacheKey){Q[q]===void 0&&(Q[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[q].usedTimes++;const Ce=Q[U.__cacheKey];Ce!==void 0&&(Q[U.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(R)),U.__cacheKey=q,U.__webglTexture=Q[q].texture}return V}function Qe(U,R,V){return Math.floor(Math.floor(U/V)/R)}function He(U,R,V,Y){const q=U.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,V,Y,R.data);else{q.sort((se,fe)=>se.start-fe.start);let Ce=0;for(let se=1;se<q.length;se++){const fe=q[Ce],Oe=q[se],Re=fe.start+fe.count,he=Qe(Oe.start,R.width,4),Xe=Qe(fe.start,R.width,4);Oe.start<=Re+1&&he===Xe&&Qe(Oe.start+Oe.count-1,R.width,4)===he?fe.count=Math.max(fe.count,Oe.start+Oe.count-fe.start):(++Ce,q[Ce]=Oe)}q.length=Ce+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let se=0,fe=q.length;se<fe;se++){const Oe=q[se],Re=Math.floor(Oe.start/4),he=Math.ceil(Oe.count/4),Xe=Re%R.width,B=Math.floor(Re/R.width),re=he,le=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Xe,B,re,le,V,Y,R.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function K(U,R,V){let Y=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Y=i.TEXTURE_3D);const Q=be(U,R),q=R.source;t.bindTexture(Y,U.__webglTexture,i.TEXTURE0+V);const Ce=n.get(q);if(q.version!==Ce.__version||Q===!0){t.activeTexture(i.TEXTURE0+V);const ae=et.getPrimaries(et.workingColorSpace),Se=R.colorSpace===oi?null:et.getPrimaries(R.colorSpace),Ae=R.colorSpace===oi||ae===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let se=_(R.image,!1,s.maxTextureSize);se=zt(R,se);const fe=r.convert(R.format,R.colorSpace),Oe=r.convert(R.type);let Re=y(R.internalFormat,fe,Oe,R.colorSpace,R.isVideoTexture);Pe(Y,R);let he;const Xe=R.mipmaps,B=R.isVideoTexture!==!0,re=Ce.__version===void 0||Q===!0,le=q.dataReady,_e=b(R,se);if(R.isDepthTexture)Re=v(R.format===Mr,R.type),re&&(B?t.texStorage2D(i.TEXTURE_2D,1,Re,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Re,se.width,se.height,0,fe,Oe,null));else if(R.isDataTexture)if(Xe.length>0){B&&re&&t.texStorage2D(i.TEXTURE_2D,_e,Re,Xe[0].width,Xe[0].height);for(let ne=0,Z=Xe.length;ne<Z;ne++)he=Xe[ne],B?le&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,fe,Oe,he.data):t.texImage2D(i.TEXTURE_2D,ne,Re,he.width,he.height,0,fe,Oe,he.data);R.generateMipmaps=!1}else B?(re&&t.texStorage2D(i.TEXTURE_2D,_e,Re,se.width,se.height),le&&He(R,se,fe,Oe)):t.texImage2D(i.TEXTURE_2D,0,Re,se.width,se.height,0,fe,Oe,se.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){B&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Re,Xe[0].width,Xe[0].height,se.depth);for(let ne=0,Z=Xe.length;ne<Z;ne++)if(he=Xe[ne],R.format!==Sn)if(fe!==null)if(B){if(le)if(R.layerUpdates.size>0){const ve=qu(he.width,he.height,R.format,R.type);for(const Ve of R.layerUpdates){const mt=he.data.subarray(Ve*ve/he.data.BYTES_PER_ELEMENT,(Ve+1)*ve/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Ve,he.width,he.height,1,fe,mt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,se.depth,fe,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Re,he.width,he.height,se.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,se.depth,fe,Oe,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Re,he.width,he.height,se.depth,0,fe,Oe,he.data)}else{B&&re&&t.texStorage2D(i.TEXTURE_2D,_e,Re,Xe[0].width,Xe[0].height);for(let ne=0,Z=Xe.length;ne<Z;ne++)he=Xe[ne],R.format!==Sn?fe!==null?B?le&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Re,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?le&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,fe,Oe,he.data):t.texImage2D(i.TEXTURE_2D,ne,Re,he.width,he.height,0,fe,Oe,he.data)}else if(R.isDataArrayTexture)if(B){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Re,se.width,se.height,se.depth),le)if(R.layerUpdates.size>0){const ne=qu(se.width,se.height,R.format,R.type);for(const Z of R.layerUpdates){const ve=se.data.subarray(Z*ne/se.data.BYTES_PER_ELEMENT,(Z+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,fe,Oe,ve)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,Oe,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,fe,Oe,se.data);else if(R.isData3DTexture)B?(re&&t.texStorage3D(i.TEXTURE_3D,_e,Re,se.width,se.height,se.depth),le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,Oe,se.data)):t.texImage3D(i.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,fe,Oe,se.data);else if(R.isFramebufferTexture){if(re)if(B)t.texStorage2D(i.TEXTURE_2D,_e,Re,se.width,se.height);else{let ne=se.width,Z=se.height;for(let ve=0;ve<_e;ve++)t.texImage2D(i.TEXTURE_2D,ve,Re,ne,Z,0,fe,Oe,null),ne>>=1,Z>>=1}}else if(Xe.length>0){if(B&&re){const ne=Ut(Xe[0]);t.texStorage2D(i.TEXTURE_2D,_e,Re,ne.width,ne.height)}for(let ne=0,Z=Xe.length;ne<Z;ne++)he=Xe[ne],B?le&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe,Oe,he):t.texImage2D(i.TEXTURE_2D,ne,Re,fe,Oe,he);R.generateMipmaps=!1}else if(B){if(re){const ne=Ut(se);t.texStorage2D(i.TEXTURE_2D,_e,Re,ne.width,ne.height)}le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Oe,se)}else t.texImage2D(i.TEXTURE_2D,0,Re,fe,Oe,se);m(R)&&p(Y),Ce.__version=q.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function $(U,R,V){if(R.image.length!==6)return;const Y=be(U,R),Q=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+V);const q=n.get(Q);if(Q.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+V);const Ce=et.getPrimaries(et.workingColorSpace),ae=R.colorSpace===oi?null:et.getPrimaries(R.colorSpace),Se=R.colorSpace===oi||Ce===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ae=R.isCompressedTexture||R.image[0].isCompressedTexture,se=R.image[0]&&R.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!Ae&&!se?fe[Z]=_(R.image[Z],!0,s.maxCubemapSize):fe[Z]=se?R.image[Z].image:R.image[Z],fe[Z]=zt(R,fe[Z]);const Oe=fe[0],Re=r.convert(R.format,R.colorSpace),he=r.convert(R.type),Xe=y(R.internalFormat,Re,he,R.colorSpace),B=R.isVideoTexture!==!0,re=q.__version===void 0||Y===!0,le=Q.dataReady;let _e=b(R,Oe);Pe(i.TEXTURE_CUBE_MAP,R);let ne;if(Ae){B&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,Oe.width,Oe.height);for(let Z=0;Z<6;Z++){ne=fe[Z].mipmaps;for(let ve=0;ve<ne.length;ve++){const Ve=ne[ve];R.format!==Sn?Re!==null?B?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,Ve.width,Ve.height,Re,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Xe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,Ve.width,Ve.height,Re,he,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Xe,Ve.width,Ve.height,0,Re,he,Ve.data)}}}else{if(ne=R.mipmaps,B&&re){ne.length>0&&_e++;const Z=Ut(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){B?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,Re,he,fe[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,fe[Z].width,fe[Z].height,0,Re,he,fe[Z].data);for(let ve=0;ve<ne.length;ve++){const mt=ne[ve].image[Z].image;B?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,mt.width,mt.height,Re,he,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Xe,mt.width,mt.height,0,Re,he,mt.data)}}else{B?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,he,fe[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,Re,he,fe[Z]);for(let ve=0;ve<ne.length;ve++){const Ve=ne[ve];B?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,Re,he,Ve.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Xe,Re,he,Ve.image[Z])}}}m(R)&&p(i.TEXTURE_CUBE_MAP),q.__version=Q.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function me(U,R,V,Y,Q,q){const Ce=r.convert(V.format,V.colorSpace),ae=r.convert(V.type),Se=y(V.internalFormat,Ce,ae,V.colorSpace),Ae=n.get(R),se=n.get(V);if(se.__renderTarget=R,!Ae.__hasExternalTextures){const fe=Math.max(1,R.width>>q),Oe=Math.max(1,R.height>>q);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,Se,fe,Oe,R.depth,0,Ce,ae,null):t.texImage2D(Q,q,Se,fe,Oe,0,Ce,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Me(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,se.__webglTexture,0,Et(R)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,se.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(U,R,V){if(i.bindRenderbuffer(i.RENDERBUFFER,U),R.depthBuffer){const Y=R.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=v(R.stencilBuffer,Q),Ce=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=Et(R);Me(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,q,R.width,R.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,q,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,q,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,U)}else{const Y=R.textures;for(let Q=0;Q<Y.length;Q++){const q=Y[Q],Ce=r.convert(q.format,q.colorSpace),ae=r.convert(q.type),Se=y(q.internalFormat,Ce,ae,q.colorSpace),Ae=Et(R);V&&Me(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Se,R.width,R.height):Me(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,Se,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Se,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(R.depthTexture);Y.__renderTarget=R,(!Y.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),k(R.depthTexture,0);const Q=Y.__webglTexture,q=Et(R);if(R.depthTexture.format===yr)Me(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(R.depthTexture.format===Mr)Me(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Te(U){const R=n.get(U),V=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const Y=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Y){const Q=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),R.__depthDisposeCallback=Q}R.__boundDepthTexture=Y}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Y=U.texture.mipmaps;Y&&Y.length>0?Ee(R.__webglFramebuffer[0],U):Ee(R.__webglFramebuffer,U)}else if(V){R.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[Y]),R.__webglDepthbuffer[Y]===void 0)R.__webglDepthbuffer[Y]=i.createRenderbuffer(),Fe(R.__webglDepthbuffer[Y],U,!1);else{const Q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=R.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}else{const Y=U.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Fe(R.__webglDepthbuffer,U,!1);else{const Q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(U,R,V){const Y=n.get(U);R!==void 0&&me(Y.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Te(U)}function N(U){const R=U.texture,V=n.get(U),Y=n.get(R);U.addEventListener("dispose",A);const Q=U.textures,q=U.isWebGLCubeRenderTarget===!0,Ce=Q.length>1;if(Ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=R.version,o.memory.textures++),q){V.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(R.mipmaps&&R.mipmaps.length>0){V.__webglFramebuffer[ae]=[];for(let Se=0;Se<R.mipmaps.length;Se++)V.__webglFramebuffer[ae][Se]=i.createFramebuffer()}else V.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){V.__webglFramebuffer=[];for(let ae=0;ae<R.mipmaps.length;ae++)V.__webglFramebuffer[ae]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let ae=0,Se=Q.length;ae<Se;ae++){const Ae=n.get(Q[ae]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&Me(U)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){const Se=Q[ae];V.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ae]);const Ae=r.convert(Se.format,Se.colorSpace),se=r.convert(Se.type),fe=y(Se.internalFormat,Ae,se,Se.colorSpace,U.isXRRenderTarget===!0),Oe=Et(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,fe,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,V.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(V.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,R);for(let ae=0;ae<6;ae++)if(R.mipmaps&&R.mipmaps.length>0)for(let Se=0;Se<R.mipmaps.length;Se++)me(V.__webglFramebuffer[ae][Se],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se);else me(V.__webglFramebuffer[ae],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(R)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ae=0,Se=Q.length;ae<Se;ae++){const Ae=Q[ae],se=n.get(Ae);let fe=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(fe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),Pe(fe,Ae),me(V.__webglFramebuffer,U,Ae,i.COLOR_ATTACHMENT0+ae,fe,0),m(Ae)&&p(fe)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ae=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,Y.__webglTexture),Pe(ae,R),R.mipmaps&&R.mipmaps.length>0)for(let Se=0;Se<R.mipmaps.length;Se++)me(V.__webglFramebuffer[Se],U,R,i.COLOR_ATTACHMENT0,ae,Se);else me(V.__webglFramebuffer,U,R,i.COLOR_ATTACHMENT0,ae,0);m(R)&&p(ae),t.unbindTexture()}U.depthBuffer&&Te(U)}function wt(U){const R=U.textures;for(let V=0,Y=R.length;V<Y;V++){const Q=R[V];if(m(Q)){const q=x(U),Ce=n.get(Q).__webglTexture;t.bindTexture(q,Ce),p(q),t.unbindTexture()}}}const We=[],ke=[];function ye(U){if(U.samples>0){if(Me(U)===!1){const R=U.textures,V=U.width,Y=U.height;let Q=i.COLOR_BUFFER_BIT;const q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(U),ae=R.length>1;if(ae)for(let Ae=0;Ae<R.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Se=U.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ae=0;Ae<R.length;Ae++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const se=n.get(R[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,Q,i.NEAREST),l===!0&&(We.length=0,ke.length=0,We.push(i.COLOR_ATTACHMENT0+Ae),U.depthBuffer&&U.resolveDepthBuffer===!1&&(We.push(q),ke.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Ae=0;Ae<R.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const se=n.get(R[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const R=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Et(U){return Math.min(s.maxSamples,U.samples)}function Me(U){const R=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function qe(U){const R=o.render.frame;c.get(U)!==R&&(c.set(U,R),U.update())}function zt(U,R){const V=U.colorSpace,Y=U.format,Q=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||V!==rn&&V!==oi&&(et.getTransfer(V)===ft?(Y!==Sn||Q!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),R}function Ut(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=S,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=at,this.setupRenderTarget=N,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Me}function Xv(i,e){function t(n,s=oi){let r;const o=et.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ic)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===od)return i.BYTE;if(n===ad)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===tc)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Ds)return i.HALF_FLOAT;if(n===ud)return i.ALPHA;if(n===hd)return i.RGB;if(n===Sn)return i.RGBA;if(n===yr)return i.DEPTH_COMPONENT;if(n===Mr)return i.DEPTH_STENCIL;if(n===sc)return i.RED;if(n===rc)return i.RED_INTEGER;if(n===dd)return i.RG;if(n===oc)return i.RG_INTEGER;if(n===ac)return i.RGBA_INTEGER;if(n===xo||n===vo||n===yo||n===Mo)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sl||n===rl||n===ol||n===al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===cl||n===ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ll||n===cl)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ul)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hl||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===bl||n===Sl||n===wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ml)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ml)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===El||n===Tl||n===Al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===El)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rl||n===Cl||n===Pl||n===Il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Rd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bn({vertexShader:qv,fragmentShader:jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kv extends Us{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Yv,p={},x=t.getContextAttributes();let y=null,v=null;const b=[],M=[],A=new pe;let L=null;const E=new Yt;E.viewport=new Ze;const C=new Yt;C.viewport=new Ze;const T=[E,C],D=new og;let S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=b[K];return $===void 0&&($=new pa,b[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=b[K];return $===void 0&&($=new pa,b[K]=$),$.getGripSpace()},this.getHand=function(K){let $=b[K];return $===void 0&&($=new pa,b[K]=$),$.getHandSpace()};function k(K){const $=M.indexOf(K.inputSource);if($===-1)return;const me=b[$];me!==void 0&&(me.update(K.inputSource,K.frame,u||o),me.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",j);for(let K=0;K<b.length;K++){const $=M[K];$!==null&&(M[K]=null,b[K].disconnect($))}S=null,O=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(y),f=null,d=null,h=null,s=null,v=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",F),s.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Fe=null,Ee=null;x.depth&&(Ee=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=x.stencil?Mr:yr,Fe=x.stencil?vr:Ti);const Te={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Te),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ai(d.textureWidth,d.textureHeight,{format:Sn,type:kn,depthTexture:new xc(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ai(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(K){for(let $=0;$<K.removed.length;$++){const me=K.removed[$],Fe=M.indexOf(me);Fe>=0&&(M[Fe]=null,b[Fe].disconnect(me))}for(let $=0;$<K.added.length;$++){const me=K.added[$];let Fe=M.indexOf(me);if(Fe===-1){for(let Te=0;Te<b.length;Te++)if(Te>=M.length){M.push(me),Fe=Te;break}else if(M[Te]===null){M[Te]=me,Fe=Te;break}if(Fe===-1)break}const Ee=b[Fe];Ee&&Ee.connect(me)}}const G=new w,te=new w;function oe(K,$,me){G.setFromMatrixPosition($.matrixWorld),te.setFromMatrixPosition(me.matrixWorld);const Fe=G.distanceTo(te),Ee=$.projectionMatrix.elements,Te=me.projectionMatrix.elements,at=Ee[14]/(Ee[10]-1),N=Ee[14]/(Ee[10]+1),wt=(Ee[9]+1)/Ee[5],We=(Ee[9]-1)/Ee[5],ke=(Ee[8]-1)/Ee[0],ye=(Te[8]+1)/Te[0],Et=at*ke,Me=at*ye,qe=Fe/(-ke+ye),zt=qe*-ke;if($.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(zt),K.translateZ(qe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ee[10]===-1)K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Ut=at+qe,U=N+qe,R=Et-zt,V=Me+(Fe-zt),Y=wt*N/U*Ut,Q=We*N/U*Ut;K.projectionMatrix.makePerspective(R,V,Y,Q,Ut,U),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ue(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let $=K.near,me=K.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(me=m.depthFar)),D.near=C.near=E.near=$,D.far=C.far=E.far=me,(S!==D.near||O!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),S=D.near,O=D.far),D.layers.mask=K.layers.mask|6,E.layers.mask=D.layers.mask&3,C.layers.mask=D.layers.mask&5;const Fe=K.parent,Ee=D.cameras;ue(D,Fe);for(let Te=0;Te<Ee.length;Te++)ue(Ee[Te],Fe);Ee.length===2?oe(D,E,C):D.projectionMatrix.copy(E.projectionMatrix),Pe(K,D,Fe)};function Pe(K,$,me){me===null?K.matrix.copy($.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply($.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ts*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(K){return p[K]};let be=null;function Qe(K,$){if(c=$.getViewerPose(u||o),g=$,c!==null){const me=c.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Fe=!1;me.length!==D.cameras.length&&(D.cameras.length=0,Fe=!0);for(let N=0;N<me.length;N++){const wt=me[N];let We=null;if(f!==null)We=f.getViewport(wt);else{const ye=h.getViewSubImage(d,wt);We=ye.viewport,N===0&&(e.setRenderTargetTextures(v,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(v))}let ke=T[N];ke===void 0&&(ke=new Yt,ke.layers.enable(N),ke.viewport=new Ze,T[N]=ke),ke.matrix.fromArray(wt.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(wt.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(We.x,We.y,We.width,We.height),N===0&&(D.matrix.copy(ke.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Fe===!0&&D.cameras.push(ke)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const N=h.getDepthInformation(me[0]);N&&N.isValid&&N.texture&&m.init(N,s.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let N=0;N<me.length;N++){const wt=me[N].camera;if(wt){let We=p[wt];We||(We=new Rd,p[wt]=We);const ke=h.getCameraImage(wt);We.sourceTexture=ke}}}}for(let me=0;me<b.length;me++){const Fe=M[me],Ee=b[me];Fe!==null&&Ee!==void 0&&Ee.update(Fe,$,u||o)}be&&be(K,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const He=new Nd;He.setAnimationLoop(Qe),this.setAnimationLoop=function(K){be=K},this.dispose=function(){}}}const Fi=new on,$v=new ee;function Jv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Md(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,Fi.copy(v),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4($v.makeRotationFromEuler(Fi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function u(x,y){let v=s[x.id];v===void 0&&(g(x),v=c(x),s[x.id]=v,x.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(x,b);const M=e.render.frame;r[x.id]!==M&&(d(x),r[x.id]=M)}function c(x){const y=h();x.__bindingPointIndex=y;const v=i.createBuffer(),b=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],v=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,A=v.length;M<A;M++){const L=Array.isArray(v[M])?v[M]:[v[M]];for(let E=0,C=L.length;E<C;E++){const T=L[E];if(f(T,M,E,b)===!0){const D=T.__offset,S=Array.isArray(T.value)?T.value:[T.value];let O=0;for(let k=0;k<S.length;k++){const F=S[k],j=_(F);typeof F=="number"||typeof F=="boolean"?(T.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,D+O,T.__data)):F.isMatrix3?(T.__data[0]=F.elements[0],T.__data[1]=F.elements[1],T.__data[2]=F.elements[2],T.__data[3]=0,T.__data[4]=F.elements[3],T.__data[5]=F.elements[4],T.__data[6]=F.elements[5],T.__data[7]=0,T.__data[8]=F.elements[6],T.__data[9]=F.elements[7],T.__data[10]=F.elements[8],T.__data[11]=0):(F.toArray(T.__data,O),O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,v,b){const M=x.value,A=y+"_"+v;if(b[A]===void 0)return typeof M=="number"||typeof M=="boolean"?b[A]=M:b[A]=M.clone(),!0;{const L=b[A];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return b[A]=M,!0}else if(L.equals(M)===!1)return L.copy(M),!0}return!1}function g(x){const y=x.uniforms;let v=0;const b=16;for(let A=0,L=y.length;A<L;A++){const E=Array.isArray(y[A])?y[A]:[y[A]];for(let C=0,T=E.length;C<T;C++){const D=E[C],S=Array.isArray(D.value)?D.value:[D.value];for(let O=0,k=S.length;O<k;O++){const F=S[O],j=_(F),G=v%b,te=G%j.boundary,oe=G+te;v+=te,oe!==0&&b-oe<j.storage&&(v+=b-oe),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=j.storage}}}const M=v%b;return M>0&&(v+=b-M),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:u,dispose:p}}class Qv{constructor(e={}){const{canvas:t=Hp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=st;let M=0,A=0,L=null,E=-1,C=null;const T=new Ze,D=new Ze;let S=null;const O=new De(0);let k=0,F=t.width,j=t.height,G=1,te=null,oe=null;const ue=new Ze(0,0,F,j),Pe=new Ze(0,0,F,j);let be=!1;const Qe=new mc;let He=!1,K=!1;const $=new ee,me=new w,Fe=new Ze,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function at(){return L===null?G:1}let N=n;function wt(I,z){return t.getContext(I,z)}try{const I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ql}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ne,!1),N===null){const z="webgl2";if(N=wt(z,I),N===null)throw wt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let We,ke,ye,Et,Me,qe,zt,Ut,U,R,V,Y,Q,q,Ce,ae,Se,Ae,se,fe,Oe,Re,he,Xe;function B(){We=new cx(N),We.init(),Re=new Xv(N,We),ke=new nx(N,We,e,Re),ye=new Gv(N,We),ke.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),Et=new dx(N),Me=new Pv,qe=new Wv(N,We,ye,Me,ke,Re,Et),zt=new sx(v),Ut=new lx(v),U=new xg(N),he=new ex(N,U),R=new ux(N,U,Et,he),V=new px(N,R,U,Et),se=new fx(N,ke,qe),ae=new ix(Me),Y=new Cv(v,zt,Ut,We,ke,he,ae),Q=new Jv(v,Me),q=new Lv,Ce=new kv(We),Ae=new Q_(v,zt,Ut,ye,V,f,l),Se=new Hv(v,V,ke),Xe=new Zv(N,Et,ke,ye),fe=new tx(N,We,Et),Oe=new hx(N,We,Et),Et.programs=Y.programs,v.capabilities=ke,v.extensions=We,v.properties=Me,v.renderLists=q,v.shadowMap=Se,v.state=ye,v.info=Et}B();const re=new Kv(v,N);this.xr=re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const I=We.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=We.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(I){I!==void 0&&(G=I,this.setSize(F,j,!1))},this.getSize=function(I){return I.set(F,j)},this.setSize=function(I,z,W=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=I,j=z,t.width=Math.floor(I*G),t.height=Math.floor(z*G),W===!0&&(t.style.width=I+"px",t.style.height=z+"px"),this.setViewport(0,0,I,z)},this.getDrawingBufferSize=function(I){return I.set(F*G,j*G).floor()},this.setDrawingBufferSize=function(I,z,W){F=I,j=z,G=W,t.width=Math.floor(I*W),t.height=Math.floor(z*W),this.setViewport(0,0,I,z)},this.getCurrentViewport=function(I){return I.copy(T)},this.getViewport=function(I){return I.copy(ue)},this.setViewport=function(I,z,W,X){I.isVector4?ue.set(I.x,I.y,I.z,I.w):ue.set(I,z,W,X),ye.viewport(T.copy(ue).multiplyScalar(G).round())},this.getScissor=function(I){return I.copy(Pe)},this.setScissor=function(I,z,W,X){I.isVector4?Pe.set(I.x,I.y,I.z,I.w):Pe.set(I,z,W,X),ye.scissor(D.copy(Pe).multiplyScalar(G).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(I){ye.setScissorTest(be=I)},this.setOpaqueSort=function(I){te=I},this.setTransparentSort=function(I){oe=I},this.getClearColor=function(I){return I.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(I=!0,z=!0,W=!0){let X=0;if(I){let H=!1;if(L!==null){const ie=L.texture.format;H=ie===ac||ie===oc||ie===rc}if(H){const ie=L.texture.type,de=ie===kn||ie===Ti||ie===xr||ie===vr||ie===nc||ie===ic,xe=Ae.getClearColor(),ge=Ae.getClearAlpha(),Ue=xe.r,Be=xe.g,Ie=xe.b;de?(g[0]=Ue,g[1]=Be,g[2]=Ie,g[3]=ge,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Ue,_[1]=Be,_[2]=Ie,_[3]=ge,N.clearBufferiv(N.COLOR,0,_))}else X|=N.COLOR_BUFFER_BIT}z&&(X|=N.DEPTH_BUFFER_BIT),W&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Ae.dispose(),q.dispose(),Ce.dispose(),Me.dispose(),zt.dispose(),Ut.dispose(),V.dispose(),he.dispose(),Xe.dispose(),Y.dispose(),re.dispose(),re.removeEventListener("sessionstart",Hn),re.removeEventListener("sessionend",qc),Ci.stop()};function le(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const I=Et.autoReset,z=Se.enabled,W=Se.autoUpdate,X=Se.needsUpdate,H=Se.type;B(),Et.autoReset=I,Se.enabled=z,Se.autoUpdate=W,Se.needsUpdate=X,Se.type=H}function ne(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Z(I){const z=I.target;z.removeEventListener("dispose",Z),ve(z)}function ve(I){Ve(I),Me.remove(I)}function Ve(I){const z=Me.get(I).programs;z!==void 0&&(z.forEach(function(W){Y.releaseProgram(W)}),I.isShaderMaterial&&Y.releaseShaderCache(I))}this.renderBufferDirect=function(I,z,W,X,H,ie){z===null&&(z=Ee);const de=H.isMesh&&H.matrixWorld.determinant()<0,xe=Pf(I,z,W,X,H);ye.setMaterial(X,de);let ge=W.index,Ue=1;if(X.wireframe===!0){if(ge=R.getWireframeAttribute(W),ge===void 0)return;Ue=2}const Be=W.drawRange,Ie=W.attributes.position;let Je=Be.start*Ue,ht=(Be.start+Be.count)*Ue;ie!==null&&(Je=Math.max(Je,ie.start*Ue),ht=Math.min(ht,(ie.start+ie.count)*Ue)),ge!==null?(Je=Math.max(Je,0),ht=Math.min(ht,ge.count)):Ie!=null&&(Je=Math.max(Je,0),ht=Math.min(ht,Ie.count));const Dt=ht-Je;if(Dt<0||Dt===1/0)return;he.setup(H,X,xe,W,ge);let vt,pt=fe;if(ge!==null&&(vt=U.get(ge),pt=Oe,pt.setIndex(vt)),H.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*at()),pt.setMode(N.LINES)):pt.setMode(N.TRIANGLES);else if(H.isLine){let Le=X.linewidth;Le===void 0&&(Le=1),ye.setLineWidth(Le*at()),H.isLineSegments?pt.setMode(N.LINES):H.isLineLoop?pt.setMode(N.LINE_LOOP):pt.setMode(N.LINE_STRIP)}else H.isPoints?pt.setMode(N.POINTS):H.isSprite&&pt.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Le=H._multiDrawStarts,Rt=H._multiDrawCounts,tt=H._multiDrawCount,cn=ge?U.get(ge).bytesPerElement:1,qi=Me.get(X).currentProgram.getUniforms();for(let un=0;un<tt;un++)qi.setValue(N,"_gl_DrawID",un),pt.render(Le[un]/cn,Rt[un])}else if(H.isInstancedMesh)pt.renderInstances(Je,Dt,H.count);else if(W.isInstancedBufferGeometry){const Le=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Rt=Math.min(W.instanceCount,Le);pt.renderInstances(Je,Dt,Rt)}else pt.render(Je,Dt)};function mt(I,z,W){I.transparent===!0&&I.side===Lt&&I.forceSinglePass===!1?(I.side=tn,I.needsUpdate=!0,Or(I,z,W),I.side=ui,I.needsUpdate=!0,Or(I,z,W),I.side=Lt):Or(I,z,W)}this.compile=function(I,z,W=null){W===null&&(W=I),p=Ce.get(W),p.init(z),y.push(p),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),I!==W&&I.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const X=new Set;return I.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ie=H.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const xe=ie[de];mt(xe,W,H),X.add(xe)}else mt(ie,W,H),X.add(ie)}),p=y.pop(),X},this.compileAsync=function(I,z,W=null){const X=this.compile(I,z,W);return new Promise(H=>{function ie(){if(X.forEach(function(de){Me.get(de).currentProgram.isReady()&&X.delete(de)}),X.size===0){H(I);return}setTimeout(ie,10)}We.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let rt=null;function $n(I){rt&&rt(I)}function Hn(){Ci.stop()}function qc(){Ci.start()}const Ci=new Nd;Ci.setAnimationLoop($n),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(I){rt=I,re.setAnimationLoop(I),I===null?Ci.stop():Ci.start()},re.addEventListener("sessionstart",Hn),re.addEventListener("sessionend",qc),this.render=function(I,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(z),z=re.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,z,L),p=Ce.get(I,y.length),p.init(z),y.push(p),$.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Qe.setFromProjectionMatrix($,Wn,z.reversedDepth),K=this.localClippingEnabled,He=ae.init(this.clippingPlanes,K),m=q.get(I,x.length),m.init(),x.push(m),re.enabled===!0&&re.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&Xo(ie,z,-1/0,v.sortObjects)}Xo(I,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(te,oe),Te=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Te&&Ae.addToRenderList(m,I),this.info.render.frame++,He===!0&&ae.beginShadows();const W=p.state.shadowsArray;Se.render(W,I,z),He===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ie=z.cameras;if(H.length>0)for(let de=0,xe=ie.length;de<xe;de++){const ge=ie[de];Yc(X,H,I,ge)}Te&&Ae.render(I);for(let de=0,xe=ie.length;de<xe;de++){const ge=ie[de];jc(m,I,ge,ge.viewport)}}else H.length>0&&Yc(X,H,I,z),Te&&Ae.render(I),jc(m,I,z);L!==null&&A===0&&(qe.updateMultisampleRenderTarget(L),qe.updateRenderTargetMipmap(L)),I.isScene===!0&&I.onAfterRender(v,I,z),he.resetDefaultState(),E=-1,C=null,y.pop(),y.length>0?(p=y[y.length-1],He===!0&&ae.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Xo(I,z,W,X){if(I.visible===!1)return;if(I.layers.test(z.layers)){if(I.isGroup)W=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(z);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Qe.intersectsSprite(I)){X&&Fe.setFromMatrixPosition(I.matrixWorld).applyMatrix4($);const de=V.update(I),xe=I.material;xe.visible&&m.push(I,de,xe,W,Fe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Qe.intersectsObject(I))){const de=V.update(I),xe=I.material;if(X&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Fe.copy(I.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Fe.copy(de.boundingSphere.center)),Fe.applyMatrix4(I.matrixWorld).applyMatrix4($)),Array.isArray(xe)){const ge=de.groups;for(let Ue=0,Be=ge.length;Ue<Be;Ue++){const Ie=ge[Ue],Je=xe[Ie.materialIndex];Je&&Je.visible&&m.push(I,de,Je,W,Fe.z,Ie)}}else xe.visible&&m.push(I,de,xe,W,Fe.z,null)}}const ie=I.children;for(let de=0,xe=ie.length;de<xe;de++)Xo(ie[de],z,W,X)}function jc(I,z,W,X){const H=I.opaque,ie=I.transmissive,de=I.transparent;p.setupLightsView(W),He===!0&&ae.setGlobalState(v.clippingPlanes,W),X&&ye.viewport(T.copy(X)),H.length>0&&Fr(H,z,W),ie.length>0&&Fr(ie,z,W),de.length>0&&Fr(de,z,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Yc(I,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Ai(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Ds:kn,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ie=p.state.transmissionRenderTarget[X.id],de=X.viewport||T;ie.setSize(de.z*v.transmissionResolutionScale,de.w*v.transmissionResolutionScale);const xe=v.getRenderTarget(),ge=v.getActiveCubeFace(),Ue=v.getActiveMipmapLevel();v.setRenderTarget(ie),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),Te&&Ae.render(W);const Be=v.toneMapping;v.toneMapping=Ei;const Ie=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),He===!0&&ae.setGlobalState(v.clippingPlanes,X),Fr(I,W,X),qe.updateMultisampleRenderTarget(ie),qe.updateRenderTargetMipmap(ie),We.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ht=0,Dt=z.length;ht<Dt;ht++){const vt=z[ht],pt=vt.object,Le=vt.geometry,Rt=vt.material,tt=vt.group;if(Rt.side===Lt&&pt.layers.test(X.layers)){const cn=Rt.side;Rt.side=tn,Rt.needsUpdate=!0,Kc(pt,W,X,Le,Rt,tt),Rt.side=cn,Rt.needsUpdate=!0,Je=!0}}Je===!0&&(qe.updateMultisampleRenderTarget(ie),qe.updateRenderTargetMipmap(ie))}v.setRenderTarget(xe,ge,Ue),v.setClearColor(O,k),Ie!==void 0&&(X.viewport=Ie),v.toneMapping=Be}function Fr(I,z,W){const X=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ie=I.length;H<ie;H++){const de=I[H],xe=de.object,ge=de.geometry,Ue=de.group;let Be=de.material;Be.allowOverride===!0&&X!==null&&(Be=X),xe.layers.test(W.layers)&&Kc(xe,z,W,ge,Be,Ue)}}function Kc(I,z,W,X,H,ie){I.onBeforeRender(v,z,W,X,H,ie),I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),H.onBeforeRender(v,z,W,X,I,ie),H.transparent===!0&&H.side===Lt&&H.forceSinglePass===!1?(H.side=tn,H.needsUpdate=!0,v.renderBufferDirect(W,z,X,H,I,ie),H.side=ui,H.needsUpdate=!0,v.renderBufferDirect(W,z,X,H,I,ie),H.side=Lt):v.renderBufferDirect(W,z,X,H,I,ie),I.onAfterRender(v,z,W,X,H,ie)}function Or(I,z,W){z.isScene!==!0&&(z=Ee);const X=Me.get(I),H=p.state.lights,ie=p.state.shadowsArray,de=H.state.version,xe=Y.getParameters(I,H.state,ie,z,W),ge=Y.getProgramCacheKey(xe);let Ue=X.programs;X.environment=I.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(I.isMeshStandardMaterial?Ut:zt).get(I.envMap||X.environment),X.envMapRotation=X.environment!==null&&I.envMap===null?z.environmentRotation:I.envMapRotation,Ue===void 0&&(I.addEventListener("dispose",Z),Ue=new Map,X.programs=Ue);let Be=Ue.get(ge);if(Be!==void 0){if(X.currentProgram===Be&&X.lightsStateVersion===de)return Jc(I,xe),Be}else xe.uniforms=Y.getUniforms(I),I.onBeforeCompile(xe,v),Be=Y.acquireProgram(xe,ge),Ue.set(ge,Be),X.uniforms=xe.uniforms;const Ie=X.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ie.clippingPlanes=ae.uniform),Jc(I,xe),X.needsLights=Lf(I),X.lightsStateVersion=de,X.needsLights&&(Ie.ambientLightColor.value=H.state.ambient,Ie.lightProbe.value=H.state.probe,Ie.directionalLights.value=H.state.directional,Ie.directionalLightShadows.value=H.state.directionalShadow,Ie.spotLights.value=H.state.spot,Ie.spotLightShadows.value=H.state.spotShadow,Ie.rectAreaLights.value=H.state.rectArea,Ie.ltc_1.value=H.state.rectAreaLTC1,Ie.ltc_2.value=H.state.rectAreaLTC2,Ie.pointLights.value=H.state.point,Ie.pointLightShadows.value=H.state.pointShadow,Ie.hemisphereLights.value=H.state.hemi,Ie.directionalShadowMap.value=H.state.directionalShadowMap,Ie.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ie.spotShadowMap.value=H.state.spotShadowMap,Ie.spotLightMatrix.value=H.state.spotLightMatrix,Ie.spotLightMap.value=H.state.spotLightMap,Ie.pointShadowMap.value=H.state.pointShadowMap,Ie.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Be,X.uniformsList=null,Be}function $c(I){if(I.uniformsList===null){const z=I.currentProgram.getUniforms();I.uniformsList=bo.seqWithValue(z.seq,I.uniforms)}return I.uniformsList}function Jc(I,z){const W=Me.get(I);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Pf(I,z,W,X,H){z.isScene!==!0&&(z=Ee),qe.resetTextureUnits();const ie=z.fog,de=X.isMeshStandardMaterial?z.environment:null,xe=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:rn,ge=(X.isMeshStandardMaterial?Ut:zt).get(X.envMap||de),Ue=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ie=!!W.morphAttributes.position,Je=!!W.morphAttributes.normal,ht=!!W.morphAttributes.color;let Dt=Ei;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const vt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pt=vt!==void 0?vt.length:0,Le=Me.get(X),Rt=p.state.lights;if(He===!0&&(K===!0||I!==C)){const $t=I===C&&X.id===E;ae.setState(X,I,$t)}let tt=!1;X.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Rt.state.version||Le.outputColorSpace!==xe||H.isBatchedMesh&&Le.batching===!1||!H.isBatchedMesh&&Le.batching===!0||H.isBatchedMesh&&Le.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Le.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Le.instancing===!1||!H.isInstancedMesh&&Le.instancing===!0||H.isSkinnedMesh&&Le.skinning===!1||!H.isSkinnedMesh&&Le.skinning===!0||H.isInstancedMesh&&Le.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Le.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Le.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Le.instancingMorph===!1&&H.morphTexture!==null||Le.envMap!==ge||X.fog===!0&&Le.fog!==ie||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ae.numPlanes||Le.numIntersection!==ae.numIntersection)||Le.vertexAlphas!==Ue||Le.vertexTangents!==Be||Le.morphTargets!==Ie||Le.morphNormals!==Je||Le.morphColors!==ht||Le.toneMapping!==Dt||Le.morphTargetsCount!==pt)&&(tt=!0):(tt=!0,Le.__version=X.version);let cn=Le.currentProgram;tt===!0&&(cn=Or(X,z,H));let qi=!1,un=!1,Hs=!1;const Ct=cn.getUniforms(),_n=Le.uniforms;if(ye.useProgram(cn.program)&&(qi=!0,un=!0,Hs=!0),X.id!==E&&(E=X.id,un=!0),qi||C!==I){ye.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ct.setValue(N,"projectionMatrix",I.projectionMatrix),Ct.setValue(N,"viewMatrix",I.matrixWorldInverse);const ln=Ct.map.cameraPosition;ln!==void 0&&ln.setValue(N,me.setFromMatrixPosition(I.matrixWorld)),ke.logarithmicDepthBuffer&&Ct.setValue(N,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ct.setValue(N,"isOrthographic",I.isOrthographicCamera===!0),C!==I&&(C=I,un=!0,Hs=!0)}if(H.isSkinnedMesh){Ct.setOptional(N,H,"bindMatrix"),Ct.setOptional(N,H,"bindMatrixInverse");const $t=H.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Ct.setValue(N,"boneTexture",$t.boneTexture,qe))}H.isBatchedMesh&&(Ct.setOptional(N,H,"batchingTexture"),Ct.setValue(N,"batchingTexture",H._matricesTexture,qe),Ct.setOptional(N,H,"batchingIdTexture"),Ct.setValue(N,"batchingIdTexture",H._indirectTexture,qe),Ct.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&Ct.setValue(N,"batchingColorTexture",H._colorsTexture,qe));const xn=W.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&se.update(H,W,cn),(un||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,Ct.setValue(N,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(_n.envMap.value=ge,_n.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(_n.envMapIntensity.value=z.environmentIntensity),un&&(Ct.setValue(N,"toneMappingExposure",v.toneMappingExposure),Le.needsLights&&If(_n,Hs),ie&&X.fog===!0&&Q.refreshFogUniforms(_n,ie),Q.refreshMaterialUniforms(_n,X,G,j,p.state.transmissionRenderTarget[I.id]),bo.upload(N,$c(Le),_n,qe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(bo.upload(N,$c(Le),_n,qe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ct.setValue(N,"center",H.center),Ct.setValue(N,"modelViewMatrix",H.modelViewMatrix),Ct.setValue(N,"normalMatrix",H.normalMatrix),Ct.setValue(N,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const $t=X.uniformsGroups;for(let ln=0,qo=$t.length;ln<qo;ln++){const Pi=$t[ln];Xe.update(Pi,cn),Xe.bind(Pi,cn)}}return cn}function If(I,z){I.ambientLightColor.needsUpdate=z,I.lightProbe.needsUpdate=z,I.directionalLights.needsUpdate=z,I.directionalLightShadows.needsUpdate=z,I.pointLights.needsUpdate=z,I.pointLightShadows.needsUpdate=z,I.spotLights.needsUpdate=z,I.spotLightShadows.needsUpdate=z,I.rectAreaLights.needsUpdate=z,I.hemisphereLights.needsUpdate=z}function Lf(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,z,W){const X=Me.get(I);X.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Me.get(I.texture).__webglTexture=z,Me.get(I.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,z){const W=Me.get(I);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const Df=N.createFramebuffer();this.setRenderTarget=function(I,z=0,W=0){L=I,M=z,A=W;let X=!0,H=null,ie=!1,de=!1;if(I){const ge=Me.get(I);if(ge.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(ge.__webglFramebuffer===void 0)qe.setupRenderTarget(I);else if(ge.__hasExternalTextures)qe.rebindTextures(I,Me.get(I.texture).__webglTexture,Me.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ie=I.depthTexture;if(ge.__boundDepthTexture!==Ie){if(Ie!==null&&Me.has(Ie)&&(I.width!==Ie.image.width||I.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(I)}}const Ue=I.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(de=!0);const Be=Me.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Be[z])?H=Be[z][W]:H=Be[z],ie=!0):I.samples>0&&qe.useMultisampledRTT(I)===!1?H=Me.get(I).__webglMultisampledFramebuffer:Array.isArray(Be)?H=Be[W]:H=Be,T.copy(I.viewport),D.copy(I.scissor),S=I.scissorTest}else T.copy(ue).multiplyScalar(G).floor(),D.copy(Pe).multiplyScalar(G).floor(),S=be;if(W!==0&&(H=Df),ye.bindFramebuffer(N.FRAMEBUFFER,H)&&X&&ye.drawBuffers(I,H),ye.viewport(T),ye.scissor(D),ye.setScissorTest(S),ie){const ge=Me.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,ge.__webglTexture,W)}else if(de){const ge=z;for(let Ue=0;Ue<I.textures.length;Ue++){const Be=Me.get(I.textures[Ue]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ue,Be.__webglTexture,W,ge)}}else if(I!==null&&W!==0){const ge=Me.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,W)}E=-1},this.readRenderTargetPixels=function(I,z,W,X,H,ie,de,xe=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Me.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){ye.bindFramebuffer(N.FRAMEBUFFER,ge);try{const Ue=I.textures[xe],Be=Ue.format,Ie=Ue.type;if(!ke.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=I.width-X&&W>=0&&W<=I.height-H&&(I.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe),N.readPixels(z,W,X,H,Re.convert(Be),Re.convert(Ie),ie))}finally{const Ue=L!==null?Me.get(L).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(I,z,W,X,H,ie,de,xe=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Me.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge)if(z>=0&&z<=I.width-X&&W>=0&&W<=I.height-H){ye.bindFramebuffer(N.FRAMEBUFFER,ge);const Ue=I.textures[xe],Be=Ue.format,Ie=Ue.type;if(!ke.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Je),N.bufferData(N.PIXEL_PACK_BUFFER,ie.byteLength,N.STREAM_READ),I.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe),N.readPixels(z,W,X,H,Re.convert(Be),Re.convert(Ie),0);const ht=L!==null?Me.get(L).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,ht);const Dt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Vp(N,Dt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Je),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ie),N.deleteBuffer(Je),N.deleteSync(Dt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,z=null,W=0){const X=Math.pow(2,-W),H=Math.floor(I.image.width*X),ie=Math.floor(I.image.height*X),de=z!==null?z.x:0,xe=z!==null?z.y:0;qe.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,de,xe,H,ie),ye.unbindTexture()};const Uf=N.createFramebuffer(),Nf=N.createFramebuffer();this.copyTextureToTexture=function(I,z,W=null,X=null,H=0,ie=null){ie===null&&(H!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=H,H=0):ie=0);let de,xe,ge,Ue,Be,Ie,Je,ht,Dt;const vt=I.isCompressedTexture?I.mipmaps[ie]:I.image;if(W!==null)de=W.max.x-W.min.x,xe=W.max.y-W.min.y,ge=W.isBox3?W.max.z-W.min.z:1,Ue=W.min.x,Be=W.min.y,Ie=W.isBox3?W.min.z:0;else{const xn=Math.pow(2,-H);de=Math.floor(vt.width*xn),xe=Math.floor(vt.height*xn),I.isDataArrayTexture?ge=vt.depth:I.isData3DTexture?ge=Math.floor(vt.depth*xn):ge=1,Ue=0,Be=0,Ie=0}X!==null?(Je=X.x,ht=X.y,Dt=X.z):(Je=0,ht=0,Dt=0);const pt=Re.convert(z.format),Le=Re.convert(z.type);let Rt;z.isData3DTexture?(qe.setTexture3D(z,0),Rt=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(qe.setTexture2DArray(z,0),Rt=N.TEXTURE_2D_ARRAY):(qe.setTexture2D(z,0),Rt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const tt=N.getParameter(N.UNPACK_ROW_LENGTH),cn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),qi=N.getParameter(N.UNPACK_SKIP_PIXELS),un=N.getParameter(N.UNPACK_SKIP_ROWS),Hs=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,vt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ue),N.pixelStorei(N.UNPACK_SKIP_ROWS,Be),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ie);const Ct=I.isDataArrayTexture||I.isData3DTexture,_n=z.isDataArrayTexture||z.isData3DTexture;if(I.isDepthTexture){const xn=Me.get(I),$t=Me.get(z),ln=Me.get(xn.__renderTarget),qo=Me.get($t.__renderTarget);ye.bindFramebuffer(N.READ_FRAMEBUFFER,ln.__webglFramebuffer),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,qo.__webglFramebuffer);for(let Pi=0;Pi<ge;Pi++)Ct&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(I).__webglTexture,H,Ie+Pi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(z).__webglTexture,ie,Dt+Pi)),N.blitFramebuffer(Ue,Be,de,xe,Je,ht,de,xe,N.DEPTH_BUFFER_BIT,N.NEAREST);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||I.isRenderTargetTexture||Me.has(I)){const xn=Me.get(I),$t=Me.get(z);ye.bindFramebuffer(N.READ_FRAMEBUFFER,Uf),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,Nf);for(let ln=0;ln<ge;ln++)Ct?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xn.__webglTexture,H,Ie+ln):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xn.__webglTexture,H),_n?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$t.__webglTexture,ie,Dt+ln):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,$t.__webglTexture,ie),H!==0?N.blitFramebuffer(Ue,Be,de,xe,Je,ht,de,xe,N.COLOR_BUFFER_BIT,N.NEAREST):_n?N.copyTexSubImage3D(Rt,ie,Je,ht,Dt+ln,Ue,Be,de,xe):N.copyTexSubImage2D(Rt,ie,Je,ht,Ue,Be,de,xe);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else _n?I.isDataTexture||I.isData3DTexture?N.texSubImage3D(Rt,ie,Je,ht,Dt,de,xe,ge,pt,Le,vt.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(Rt,ie,Je,ht,Dt,de,xe,ge,pt,vt.data):N.texSubImage3D(Rt,ie,Je,ht,Dt,de,xe,ge,pt,Le,vt):I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ie,Je,ht,de,xe,pt,Le,vt.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ie,Je,ht,vt.width,vt.height,pt,vt.data):N.texSubImage2D(N.TEXTURE_2D,ie,Je,ht,de,xe,pt,Le,vt);N.pixelStorei(N.UNPACK_ROW_LENGTH,tt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,cn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,qi),N.pixelStorei(N.UNPACK_SKIP_ROWS,un),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Hs),ie===0&&z.generateMipmaps&&N.generateMipmap(Rt),ye.unbindTexture()},this.initRenderTarget=function(I){Me.get(I).__webglFramebuffer===void 0&&qe.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?qe.setTextureCube(I,0):I.isData3DTexture?qe.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?qe.setTexture2DArray(I,0):qe.setTexture2D(I,0),ye.unbindTexture()},this.resetState=function(){M=0,A=0,L=null,ye.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const gh=1.15,_h=1.8;function zd(i,e){Number.isFinite(e)&&e>0&&(i.walkDistance=(i.walkDistance??0)+e)}function ey(i,e,t){return(i/e%1+1)%1*Math.max(0,t-1)}const xh=new w,vh=new w,yh=new w,Mh=new w,bh=new Ke,Sh=new Ke;function Ic(i,e,t,n){return n<=0?i.copy(e):n>=1?i.copy(t):(e.decompose(xh,bh,yh),t.decompose(vh,Sh,Mh),i.compose(xh.lerp(vh,n),bh.slerp(Sh,n).normalize(),yh.lerp(Mh,n)))}const Hd=/^(?:hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/;function ty(i){const e=i.endsWith(".l")?".l":i.endsWith(".r")?".r":"",t=e?i.slice(0,-2):i;return t==="shoulder"?"spine_03.x":t==="arm_stretch"?"shoulder"+e:t==="c_arm_twist_offset"||t==="forearm_stretch"?"arm_stretch"+e:t==="forearm_twist"||t==="hand"?"forearm_stretch"+e:t==="thigh_stretch"?"root.x":t==="thigh_twist"||t==="leg_stretch"?"thigh_stretch"+e:t==="leg_twist"||t==="foot"?"leg_stretch"+e:t==="toes_01"?"foot"+e:{"root.x":null,"spine_01.x":"root.x","spine_02.x":"spine_01.x","spine_03.x":"spine_02.x","neck.x":"spine_03.x","c_head.x":"neck.x","head.x":"c_head.x","jawbone.x":"head.x"}[i]}function ny(i){const e=new Map(i.bind.map(l=>[l.name,l])),t=new Set(i.userActions.bones),n=new Map;for(const l of i.bind)t.has(l.name)&&n.set(l.name,{...l,inverse:l.matrix.clone().invert()});for(const l of n.values()){let u=ty(l.name);if(u===void 0){let c=l.bone.parent;for(;c;){const h=c.userData.name??c.name;if(n.has(h)){u=h;break}c=c.parent}}u===void 0&&Hd.test(l.name)&&(u="hand"+(l.name.endsWith(".l")?".l":".r")),l.parent=n.get(u)??null}const s=[],r=new Set,o=new Set;function a(l){if(!o.has(l)){if(r.has(l))throw Error("Animation hierarchy cycle");r.add(l),l.parent&&a(l.parent),r.delete(l),o.add(l),s.push(l)}}for(const l of n.values())a(l);for(const l of s){const u=new w,c=new Ke,h=new w;l.matrix.decompose(u,c,h),l.bindRotation=c.normalize(),l.bindFrame=new ee().compose(u,l.bindRotation,new w(1,1,1))}for(const l of s)l.localBind=l.parent?l.parent.bindFrame.clone().invert().multiply(l.matrix):l.matrix.clone(),l.localInverse=l.localBind.clone().invert();i.poseHierarchy=s,i.bindByName=e}function iy(i,e){for(const t of[".l",".r"]){const n=i.bindByName.get("hand"+t),s=n&&e.get(n.bone);if(!s)continue;const r=s.clone().multiply(n.matrix.clone().invert()),o=new w,a=new Ke,l=new w;if(r.decompose(o,a,l),l.toArray().some(d=>d<=1e-8)||Math.max(...l.toArray().map(d=>Math.abs(d-1)))<1e-4)continue;const u=new w().setFromMatrixPosition(s),c=new ee().makeRotationFromQuaternion(a.normalize()),h=new ee().makeTranslation(...u.toArray()).multiply(c).multiply(new ee().makeScale(1/l.x,1/l.y,1/l.z)).multiply(c.clone().invert()).multiply(new ee().makeTranslation(-u.x,-u.y,-u.z));for(const d of i.bind)d.name.endsWith(t)&&Hd.test(d.name)&&e.has(d.bone)&&e.get(d.bone).premultiply(h)}}function Ia(i,e){const t=new w().setFromMatrixPosition(e),n=new Ke,s=new w;return e.clone().multiply(i.inverse).decompose(new w,n,s),new ee().compose(t,n.normalize().multiply(i.bindRotation),new w(1,1,1))}function sy(i,e,t,n){const s=new Map(t);for(const r of i.poseHierarchy){const o=e.get(r.bone),a=t.get(r.bone);if(!o||!a)continue;const l=r.parent?Ia(r.parent,e.get(r.parent.bone)):null,u=r.parent?Ia(r.parent,t.get(r.parent.bone)):null,c=l?l.clone().invert().multiply(o):o.clone(),h=u?u.clone().invert().multiply(a):a.clone();c.multiply(r.localInverse),h.multiply(r.localInverse);const d=Ic(new ee,c,h,n).multiply(r.localBind),f=r.parent?Ia(r.parent,s.get(r.parent.bone)):null;s.set(r.bone,f?f.clone().multiply(d):d)}return s}function wh(i,e,t){if(!i.userActions)return;i.poseHierarchy||ny(i);const n=i.visual.matrixWorld.clone().invert(),s=new Map;for(const[u,c]of i.posedWorld)s.set(u,n.clone().multiply(c));iy(i,s),i.motionId!==t&&(i.transitionFrom=i.lastMotion,i.transitionStart=e,i.motionId=t);const r=t==="jab:return"?.14:t==="dodge"||t.includes("_combo:")?.06:.12,o=Math.min(1,Math.max(0,(e-i.transitionStart)/r)),a=o*o*(3-2*o),l=i.transitionFrom&&a<1?sy(i,i.transitionFrom,s,a):s;for(const[u,c]of l)i.posedWorld.get(u).copy(i.visual.matrixWorld).multiply(c);i.lastMotion=l,a===1&&(i.transitionFrom=null)}function Eh(i){for(const e of i.rigid){const t=i.bindByName?.get(e.parentBoneName)??i.bind.find(r=>r.name===e.parentBoneName),n=t&&i.posedWorld.get(t.bone),s=n?n.clone().multiply(t.matrix.clone().invert()).multiply(e.matrix):i.visual.matrixWorld.clone().multiply(e.matrix);e.mesh.matrix.copy(e.mesh.parent.matrixWorld).invert().multiply(s),e.mesh.updateWorldMatrix(!1,!1)}}function ry(i){if(i?.version!==1||!Array.isArray(i.bones)||!i.bones.length||!Number.isFinite(i.fps)||i.fps<=0)throw new Error("Invalid action data");if(!i.clips?.idle||!(i.clips.jab_01||Ls(i).length))throw new Error("Missing authored idle or attack");for(const e of Object.keys(i.clips??{})){const t=i.clips?.[e]?.frames;if(!t?.length||t.some(n=>n.length!==i.bones.length*16||!n.every(Number.isFinite)))throw new Error(`Invalid clip ${e}`)}return i}function Ls(i){return Object.keys(i?.clips??{}).filter(e=>e.endsWith("_combo")&&!e.startsWith("weapon_")).sort((e,t)=>e.localeCompare(t,void 0,{numeric:!0}))}function Vd(i){return Object.keys(i?.clips??{}).filter(e=>e.startsWith("weapon_")&&e.endsWith("_combo")).sort()}function oy(i,e){const t=Vd(i)[e],n=i?.clips[t];return n?{clip:t,duration:n.duration,cooldown:n.duration,hitAt:n.markers?.hit!==void 0?n.markers.hit/Math.max(1,n.frames.length-1):.52}:null}function Gd(i,e){const t=Ls(i)[e],n=i?.clips[t];if(!n)return null;const s=Math.max(.3,n.duration);return{...t.startsWith("kick")?{range:1.9,damage:18}:{},clip:t,duration:s,cooldown:s,hitAt:n.markers?.hit!==void 0?n.markers.hit/(n.frames.length-1):.9}}function Th(i,e){i.userActions=ry(e),i.userBoneIndices=new Map(e.bones.map((t,n)=>[t,n*16])),i.walkStride=Ah(i),i.runStride=Ah(i,"run"),i.runSpeed=e.clips.run?i.runStride/e.clips.run.duration*gh:void 0,i.walkSpeed=e.clips.walk?i.walkStride/e.clips.walk.duration*gh:void 0,i.closedLoops=new Set(["idle","walk","run","weapon_idle"].filter(t=>{const n=e.clips[t]?.frames;return n?.length&&n[0].every((s,r)=>Math.abs(s-n.at(-1)[r])<1e-5)}))}function Ah(i,e="walk"){const t=i.userActions,n=t.clips[e];let s=0;if(n)for(const a of["foot.l","foot.r"]){const l=i.userBoneIndices.get(a),u=i.bind.find(d=>d.name===a);if(l===void 0||!u)continue;let c=1/0,h=-1/0;for(const d of n.frames){const f=new w().setFromMatrixPosition(new ee().fromArray(d,l).multiply(u.matrix));c=Math.min(c,f.z),h=Math.max(h,f.z)}s=Math.max(s,h-c)}const r=i.height??1.85,o=s*2*i.visual.scale.z;return o>.1?Math.max(r*.35,Math.min(r*.95,o)):r*.65}const fo=new ee,Rh=new ee,Ch=new ee,Ph=new ee;function ay(i,e,t,n,s=0){return Rh.fromArray(e,s),Ch.fromArray(t,s),Ic(i,Rh,Ch,n)}function La(i,e,t,n,s,r){const o=i.userActions.clips[e].frames,a=e==="idle"||e==="walk"||e==="run"||e==="weapon_idle",l=o.length-1,u=(e==="walk"||e==="run")&&Number.isFinite(i.walkDistance)?ey(i.walkDistance,e==="run"?i.runStride:i.walkStride,o.length):a?n*i.userActions.fps%Math.max(1,l):Math.max(0,Math.min(1,t))*l,c=Math.floor(u),h=Math.min(l,c+1);ay(r,o[c],o[h],u-c,s);const d=i.closedLoops.has(e)?0:Math.min(8,l*.2);if(a&&d>0&&u>l-d){const f=(u-(l-d))/d;Ph.fromArray(o[0],s),Ic(r,r,Ph,f*f*(3-2*f))}return r}function ly(i,e,t,n,s){if(!i.userActions||i.hurt>0||i.dodge>0&&!i.userActions.clips.dodge)return!1;const r=i.dodge>0,o=i.weaponType&&i.userActions.clips.weapon_idle,a=r?"dodge":n==="jab"?i.attackSpec?.clip??Ls(i.userActions)[Math.max(0,(i.combo??1)-1)%Math.max(1,Ls(i.userActions).length)]??"jab_01":i.userActions.clips[n]?n:n==="spray"?"spray":n==="burp"?"burp":n?null:t?i.locomotion==="run"&&i.userActions.clips.run?"run":"walk":o?"weapon_idle":"idle";if(!a||!i.userActions.clips[a])return!1;i.visual.position.y=i.baseVisualY,i.root.updateMatrixWorld(!0);const l=n==="jab"&&!a.endsWith("_combo")&&s>.76,u=l?"idle":a,c=r?Math.max(0,Math.min(1,1-i.dodge/(i.dodgeDuration??.24))):n==="jab"&&!a.endsWith("_combo")?Math.min(1,s/.7):s;function h(g,_){const m=i.userBoneIndices.get(g);return m===void 0?_.identity():La(i,u,c,l?0:e,m,_)}const d=o&&(a==="walk"||a==="run");let f;if(d){const g=i.bind.find(_=>_.name==="root.x");if(g){const _=h(g.name,new ee).multiply(g.matrix),m=La(i,"weapon_idle",0,e,i.userBoneIndices.get(g.name),new ee).multiply(g.matrix);f=_.multiply(m.invert())}}for(const g of i.bind){h(g.name,fo);let _=i.posedWorld.get(g.bone);if(_||(_=new ee,i.posedWorld.set(g.bone,_)),d&&f&&g.name!=="root.x"&&!/^(?:thigh|leg|foot|toes)/.test(g.name)){const p=i.userBoneIndices.get(g.name);p!==void 0&&(La(i,"weapon_idle",0,e,p,fo),fo.premultiply(f))}_.copy(i.visual.matrixWorld).multiply(fo).multiply(g.matrix)}return d&&_s(i,"weapon_idle"),a.startsWith("weapon_")&&a.endsWith("_combo")&&_s(i,"weapon_idle"),(a.endsWith("_combo")&&!a.startsWith("weapon_")||a==="spray"||a==="burp"||a==="dodge")&&_s(i),d?"weapon_"+a:l?"jab:return":n==="jab"?a+":"+(i.attackSerial??0):a}function _s(i,e="idle"){if(i.userActions){if(i.referenceFingersByClip??={},!i.referenceFingersByClip[e]){i.referenceFingersByClip[e]=[];const t=(i.userActions.clips[e]??i.userActions.clips.idle).frames[0],n=new Map(i.bind.map(s=>[s.name,s]));for(const s of i.bind){if(!/^(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie)/.test(s.name))continue;const r=s.name.endsWith(".l")?".l":".r",o=n.get("hand"+r),a=i.userBoneIndices.get("hand"+r),l=i.userBoneIndices.get(s.name);if(!o||a===void 0||l===void 0)continue;const u=new ee().fromArray(t,a).multiply(o.matrix),c=new ee().fromArray(t,l).multiply(s.matrix);i.referenceFingersByClip[e].push({bone:s.bone,hand:o.bone,relative:u.invert().multiply(c)})}}i.referenceFingers=i.referenceFingersByClip[e];for(const t of i.referenceFingers){const n=i.posedWorld.get(t.hand);n&&i.posedWorld.get(t.bone).copy(n).multiply(t.relative)}}}function cy(i){const e=Ls(i.userActions);let t=(i.attackSerial??0)%Math.min(2,e.length||2);i.type==="runner"&&(t=(t+1)%Math.min(2,e.length||2)),i.type==="bruiser"&&e.length>2&&(t=2),i.attackSerial=(i.attackSerial??0)+1,i.combo=t+1,i.attackSpec=Gd(i.userActions,t)??null}function uy(i){const e=i.attackSpec?.hitAt??.9;if(i.windup>0)return{kind:"jab",progress:Math.max(0,Math.min(1,1-i.windup/i.spec.windup))*e*.85};if(i.strike>0){const t=Math.max(0,Math.min(1,1-i.strike/.3));return{kind:"jab",progress:t<=.25?e*(.85+.15*t/.25):e+(1-e)*(t-.25)/.75}}return{kind:null,progress:0}}function Wd(i,e){const t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv,r=new w;if(s){for(let o=0;o<t.count;o++)n&&Math.abs(n.getY(o))<.8||(r.fromBufferAttribute(t,o).applyMatrix4(e),s.setXY(o,r.x/2,r.z/2));s.needsUpdate=!0}}function hy(i){i.updateMatrixWorld(!0),i.traverse(e=>{if(!(!e.isMesh||!/asphalt/i.test(e.material?.name??""))){Wd(e.geometry,e.matrixWorld);for(const t of["map","normalMap","roughnessMap","metalnessMap"]){const n=e.material[t];n&&(n.wrapS=n.wrapT=En,n.repeat.set(1,1),n.offset.set(0,0),n.rotation=0,n.needsUpdate=!0)}}})}function dy(i){i.updateMatrixWorld(!0);const e=new Map;function t(s,r){const o=[];for(let a=0;a<s.length;a++){const l=s[a],u=s[(a+1)%s.length],c=r(l.p),h=r(u.p);if(c>=-1e-6&&o.push(l),c>=0!=h>=0){const d=c/(c-h);o.push({p:l.p.clone().lerp(u.p,d),n:l.n.clone().lerp(u.n,d).normalize(),uv:l.uv.clone().lerp(u.uv,d)})}}return o}i.traverse(s=>{if(!s.isMesh||s.material?.name!=="Pavement tiles")return;const r=s.geometry,o=r.attributes.position,a=r.attributes.normal,l=r.attributes.uv,u=r.index;if(!l)return;const c=new Ge().getNormalMatrix(s.matrixWorld);e.has(s.material)||e.set(s.material,{p:[],n:[],uv:[]});const h=e.get(s.material);for(let d=0;d<(u?.count??o.count);d+=3){const f=[0,1,2].map(g=>{const _=u?u.getX(d+g):d+g;return{p:new w().fromBufferAttribute(o,_).applyMatrix4(s.matrixWorld),n:new w().fromBufferAttribute(a,_).applyMatrix3(c).normalize(),uv:new pe().fromBufferAttribute(l,_)}});for(const g of["front","left","right"]){let _=t(f,m=>g==="front"?m.z-2.35:-1.8-m.z);g!=="front"&&(_=t(_,m=>g==="left"?4.4+(m.z+3.6)*.9-m.x:m.x-(26-4.4-(m.z+3.6)*.9)));for(let m=1;m<_.length-1;m++)for(const p of[_[0],_[m],_[m+1]])h.p.push(...p.p.toArray()),h.n.push(...p.n.toArray()),h.uv.push(...p.uv.toArray())}}});const n=new _t;n.name="Continuous_courtyard_paving";for(const[s,r]of e){if(!r.p.length)continue;const o=new xt;o.setAttribute("position",new ze(r.p,3)),o.setAttribute("normal",new ze(r.n,3)),o.setAttribute("uv",new ze(r.uv,2));const a=new we(o,s);a.receiveShadow=a.castShadow=!0,n.add(a)}return n}function Go(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new xt;let u=0;for(let c=0;c<i.length;++c){const h=i[c];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,f,c),u+=f}}if(t){let c=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+c);c+=i[d].attributes.position.count}l.setIndex(h)}for(const c in r){const h=Ih(r[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,h)}for(const c in o){const h=o[c][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[c].length;++_)f.push(o[c][_][d]);const g=Ih(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Ih(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){const c=i[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}const o=new e(r),a=new Vt(o,t,n);let l=0;for(let u=0;u<i.length;++u){const c=i[u];if(c.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=c.count;d<f;d++)for(let g=0;g<t;g++){const _=c.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(c.array,l);l+=c.count*t}return s!==void 0&&(a.gpuType=s),a}function Lh(i,e){if(e===pp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ll||e===fd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Ll)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}let $s;function Lc(){if($s)return $s;let i=93051;const e=()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296;function t(n,s,r,o=0){let a=null,l=null,u=null;if(typeof document<"u"){const c=document.createElement("canvas");c.width=c.height=512;const h=c.getContext("2d");if(h.fillStyle=r,h.fillRect(0,0,512,512),n==="wood"){for(let _=0;_<1500;_++){const m=e()*512;h.strokeStyle=_%4?"#30291c30":"#d5c29345",h.lineWidth=.4+e()*2,h.beginPath(),h.moveTo(0,m),h.bezierCurveTo(150,m-8+e()*16,330,m-12+e()*24,512,m),h.stroke()}for(let _=0;_<22;_++){const m=e()*512,p=e()*512;h.strokeStyle="#201f19a0",h.lineWidth=.6,h.beginPath(),h.moveTo(m,p),h.lineTo(m+30,p+1),h.lineTo(m+60+e()*100,p-2),h.stroke()}for(let _=0;_<9;_++){const m=e()*512,p=e()*512;h.strokeStyle="#352f2360";for(let x=0;x<4;x++)h.beginPath(),h.ellipse(m,p,8+x*5,1+x*1.5,.05,0,Math.PI*2),h.stroke()}}if(n==="metal"){for(let _=0;_<180;_++){const m=e()*512,p=e()*512,x=1+e()*9;h.fillStyle=_%3?"#625940":"#7c6b4d",h.beginPath();for(let y=0;y<9;y++){const v=y*Math.PI*2/9,b=x*(.5+e()*.5),M=m+Math.cos(v)*b,A=p+Math.sin(v)*b;y?h.lineTo(M,A):h.moveTo(M,A)}h.closePath(),h.fill(),h.strokeStyle="#b4ae8240",h.lineWidth=1,h.stroke()}for(let _=0;_<95;_++){const m=e()*512,p=e()*512;h.strokeStyle="#b4b19d60",h.lineWidth=.5,h.beginPath(),h.moveTo(m,p),h.lineTo(m+e()*32,p+e()*4),h.stroke()}}if(n==="fabric"){for(let _=0;_<512;_+=4)h.fillStyle=_%8?"#d3c5a925":"#3a3f3630",h.fillRect(_,0,1,512),h.fillRect(0,_,512,1);for(let _=0;_<8;_++)h.fillStyle="#656b5b40",h.fillRect(_*64,0,12,512)}if(n==="soil")for(let _=0;_<1200;_++)h.fillStyle=["#2d2d21","#706b49","#4e4a32"][_%3],h.beginPath(),h.ellipse(e()*512,e()*512,1+e()*4,1+e()*3,e()*3,0,7),h.fill();if(n==="stone")for(let _=0;_<150;_++){const m=e()*512,p=e()*512;h.strokeStyle="#5b5c4740",h.lineWidth=.5,h.beginPath(),h.moveTo(m,p),h.lineTo(m+8,p+12),h.lineTo(m+3,p+27),h.stroke()}for(let _=0;_<12e3;_++)h.fillStyle=_%2?"#ede4bf10":"#1d241c18",h.fillRect(e()*512,e()*512,1+e()*2,1+e()*2);const d=h.createLinearGradient(0,280,0,512);d.addColorStop(0,"#272c2000"),d.addColorStop(1,"#252b2465"),h.fillStyle=d,h.fillRect(0,0,512,512),a=new sn(c),a.colorSpace=st,a.wrapS=a.wrapT=En;const f=document.createElement("canvas");f.width=f.height=256;const g=f.getContext("2d");g.fillStyle="#bdbdbd",g.fillRect(0,0,256,256);for(let _=0;_<2500;_++)g.fillStyle=_%2?"#b2b2b2":"#dedede",g.fillRect(e()*256,e()*256,n==="wood"?8+e()*25:1,n==="wood"?.5:1.5);l=new sn(f),l.wrapS=l.wrapT=En,u=l}return new Mt({name:s,color:a?"#ffffff":r,map:a,bumpMap:l,bumpScale:n==="wood"?.014:.007,roughnessMap:u,roughness:1,metalness:o})}return $s={wood:t("wood","Courtyard old wood","#75664b"),metal:t("metal","Prop chipped painted metal","#4d5c4b",.2),trim:t("stone","Prop worn concrete and fittings","#a6a28a"),soil:t("soil","Prop soil and dirt","#4a4932"),fabric:t("fabric","Prop faded cloth","#9b9c85")},$s.fabric.side=Lt,$s}function fy(){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=768,i.height=256;const e=i.getContext("2d");e.fillStyle="#394a40",e.fillRect(0,0,768,256),e.strokeStyle="#b7b59b",e.lineWidth=5,e.strokeRect(14,14,740,228),e.strokeStyle="#7d8975",e.lineWidth=2,e.strokeRect(23,23,722,210),e.fillStyle="#d4d0b6",e.textAlign="center",e.font="bold 58px serif",e.fillText("ДВОР № 7",384,112),e.font="24px serif",e.fillText("ЖИЛОЙ КВАРТАЛ · ПРОХОД ВО ДВОР",384,164);let t=781;const n=()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296;for(let r=0;r<450;r++){const o=n()*768,a=n()*256,l=o<32||o>736||a<27||a>229;e.fillStyle=l?"#796043":"#263a3335",e.fillRect(o,a,1+n()*(l?9:2),1+n()*(l?5:1.5))}for(let r=0;r<35;r++){e.strokeStyle="#c3c3a533",e.lineWidth=.7;const o=n()*768,a=n()*256;e.beginPath(),e.moveTo(o,a),e.lineTo(o+n()*45,a+n()*6),e.stroke()}const s=new sn(i);return s.colorSpace=st,s}function py(i){if(i.getObjectByName("Weathered_street_sign"))return i.getObjectByName("Weathered_street_sign");i.traverse(_=>{/^SIGN_/i.test(_.name)&&(_.visible=!1)}),i.updateMatrixWorld(!0);const e=[];i.traverse(_=>{_.isMesh&&_.visible&&!Array.isArray(_.material)&&_.geometry.attributes.position&&e.push(_)});const t=new Cc,n=1.4,s=.46;let r=null;for(const _ of[.72,1.15,3.4,5.3,2.78,4.52]){for(const m of[8,11,14,17,20,5,2,23,...Array.from({length:49},(p,x)=>1+x*.5)]){let p=null,x=!0;for(const y of[-n/2,0,n/2])for(const v of[-s/2,0,s/2]){t.set(new w(m+y,_+v,2),new w(0,0,-1));const b=t.intersectObjects(e,!1)[0];if(!b||!/brick|limestone|concrete wall|dampfoundation|plain#9a9b8c|plain#9d9e8c/i.test(b.object.material.name)||b.face.normal.clone().transformDirection(b.object.matrixWorld).z<.95){x=!1;break}if(p!==null&&Math.abs(b.point.z-p)>.025){x=!1;break}p=b.point.z}if(x&&p!==null){r=new w(m,_,p+.055);break}}if(r)break}if(!r)return null;const o=new _t;o.name="Weathered_street_sign",o.position.copy(r);const{metal:a,trim:l}=Lc(),u=[],c=new we(new Kt(n,s,.045),a);c.castShadow=c.receiveShadow=!0,o.add(c);const h=fy(),d=new we(new an(n-.065,s-.055),new Mt({name:"Weathered enamel courtyard plaque",map:h,color:h?"#ffffff":"#4b5b48",roughness:.88}));d.position.z=.026,d.receiveShadow=!0,o.add(d);for(const _ of[-n/2+.045,n/2-.045])for(const m of[-s/2+.045,s/2-.045]){const p=new jn(.014,.014,.016,8);p.rotateX(Math.PI/2),p.translate(_,m,.035),u.push(p)}const f=Go(u);u.forEach(_=>_.dispose());const g=new we(f,l);return o.add(g),i.add(o),i.updateMatrixWorld(!0),o}function hr(i){return i.collisionRadius??(i.type==="bruiser"?.46:i.type==="runner"?.34:.38)}const Js=1e-5;function Xd(i,e,t,n,s=(r,o)=>[r,o]){const r=i.x,o=i.z;if(Math.hypot(e-r,t-o)<1e-10)return 0;const a=n.filter(_=>_!==i&&!(_.health<=0)&&_.collidable!==!1),l=hr(i);let u=r,c=o;for(let _=0;_<8;_++){let m=!1;for(const p of a){let x=u-p.x,y=c-p.z,v=Math.hypot(x,y);const b=l+hr(p)+Js;if(v>=b-Js*.1)continue;v<Js&&(x=r-e,y=o-t,v=Math.hypot(x,y)||1,!x&&!y&&(x=1));const M=b-Math.hypot(u-p.x,c-p.z);[u,c]=s(u+x/v*M,c+y/v*M),m=!0}if(!m)break}let[h,d]=s(e,t),f=h-u,g=d-c;for(let _=0;_<6&&f*f+g*g>1e-14;_++){let m=1,p=null;const x=f*f+g*g;for(const L of a){const E=u-L.x,C=c-L.z,T=l+hr(L),D=E*f+C*g,S=E*E+C*C-T*T;if(D>=0)continue;const O=D*D-x*S;if(O<0)continue;const k=(-D-Math.sqrt(O))/x;k>=-Js&&k<m&&(m=Math.max(0,k),p=L)}if(!p){[u,c]=s(u+f,c+g);break}const y=Math.max(0,m-Js/Math.sqrt(x));[u,c]=s(u+f*y,c+g*y),f*=1-m,g*=1-m;const v=u-p.x,b=c-p.z,M=Math.hypot(v,b)||1,A=(f*v+g*b)/M;A<0&&(f-=A*v/M,g-=A*b/M),[h,d]=s(u+f,c+g),f=h-u,g=d-c}return i.x=u,i.z=c,Math.hypot(u-r,c-o)}function my(){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=768,i.height=384;const e=i.getContext("2d");for(let n=0;n<3;n++){if(e.save(),e.translate(n*256,0),e.fillStyle=["#d0c4a6","#b8ad91","#ddd2b5"][n],e.fillRect(0,0,256,384),e.strokeStyle="#80765b",e.lineWidth=1,e.strokeRect(9,9,238,366),e.fillStyle="#4e4c3f",e.textAlign="center",e.font="bold 24px serif",e.fillText(["РАЙОН","ОБЪЯВЛЕНИЯ","ВЕСТИ ДВОРА"][n],128,40,232),e.font="12px serif",e.fillText("ГОРОДСКАЯ ГАЗЕТА",128,58),e.fillRect(14,66,228,3),n===1){e.font="bold 30px sans-serif",e.fillText("КУПЛЮ",128,118),e.fillText("МЕТАЛЛ",128,153);for(let s=0;s<8;s++)e.fillRect(20+s*29,300,1,70),e.fillRect(24+s*29,315,18,3)}else e.fillStyle="#75745f",e.fillRect(15,80,105,78),e.fillStyle="#a39b81",e.beginPath(),e.moveTo(20,145),e.lineTo(54,98),e.lineTo(81,131),e.lineTo(112,105),e.lineTo(112,150),e.fill();e.fillStyle="#68634f";for(let s=0;s<3;s++)for(let r=0;r<24;r++){const o=n===1?175+r*5:178+r*7;if(o>288&&n===1)break;e.fillRect(15+s*78,o,47+(r*17+s*13)%23,1.5)}e.strokeStyle="#f1e5c380",e.lineWidth=2,e.beginPath(),e.moveTo(125,0),e.lineTo(130,384),e.stroke(),e.restore()}const t=new sn(i);return t.colorSpace=st,t}class gy{constructor(e,{lowQuality:t=!1}={}){const n=t?4:6,s=new an(1,1.4,3,5),r=new Float32Array(n);for(let a=0;a<n;a++)r[a]=a%3;s.setAttribute("paperStyle",new Rs(r,1)),this.clock={value:0};const o=new Mt({name:"Windblown newspapers",map:my(),roughness:1,side:Lt});o.onBeforeCompile=a=>{a.uniforms.paperTime=this.clock,a.vertexShader=`uniform float paperTime; attribute float paperStyle;
`+a.vertexShader,a.vertexShader=a.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv.x=(vMapUv.x+paperStyle)/3.0;
#endif`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.z += sin(position.y*5.0 + paperTime*5.0 + paperStyle*2.0)*0.085 + abs(position.x)*0.12;`)},this.mesh=new Lr(s,o,n),this.mesh.name="Windblown leaflets and newspapers",this.mesh.instanceMatrix.setUsage(wr),this.mesh.frustumCulled=!1,this.mesh.userData.noShadow=!0,this.mesh.visible=!1,e.add(this.mesh),this.items=Array.from({length:n},(a,l)=>({x:(l/n-.5)*48,speed:1.2+l*7%11/10,z:3.5+l%3*.22,phase:l*2.399,size:.14+l*3%5*.015})),this.dummy=new St,this.center=null}update(e,t,n=!0){if(!n){this.mesh.visible=!1,this.center=null;return}if(this.center===null)for(let o=0;o<this.items.length;o++)this.items[o].x=e+(o/this.items.length-.5)*48;this.center=e,this.mesh.visible=!0,this.clock.value+=Math.max(0,Math.min(t,.05));const r=this.clock.value;for(let o=0;o<this.items.length;o++){const a=this.items[o];a.x+=Math.max(0,Math.min(t,.05))*a.speed*(1+.35*Math.sin(r*.8));let l=a.x-e;(l>24||l<-24)&&(l=((l+24)%48+48)%48-24,a.x=e+l);const u=a.phase,c=nt.smoothstep(24-Math.abs(l),0,5),h=.5+o%4*.29;this.dummy.position.set(a.x,h+.16*Math.sin(r*1.7+u)+Math.max(0,Math.sin(r*.65+u))*.65,a.z+Math.sin(r*.7+u)*.12),this.dummy.rotation.set(-.7+Math.sin(r*1.8+u)*.8,r*.8+u,Math.sin(r*1.2+u)*.65),this.dummy.scale.setScalar(a.size*c),this.dummy.updateMatrix(),this.mesh.setMatrixAt(o,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}}const Dh="bomzh:compositing:v1",bi={enabled:!0,brightness:0,contrast:1,saturation:1,gamma:1,temperature:0,tint:0,shadows:0,highlights:0,vignette:0,splitStrength:0,shadowColor:"#53677f",highlightColor:"#d9b87a"},Dc={brightness:[-.5,.5,.01],contrast:[.5,1.8,.01],saturation:[0,2,.01],gamma:[.5,1.5,.01],temperature:[-1,1,.01],tint:[-1,1,.01],shadows:[-.4,.4,.01],highlights:[-.4,.4,.01],vignette:[0,.6,.01],splitStrength:[0,.5,.01]},_y={neutral:{...bi},warm:{...bi,contrast:1.08,saturation:.88,temperature:.18,shadows:.04,splitStrength:.09,vignette:.12},cold:{...bi,contrast:1.12,saturation:.75,temperature:-.2,tint:.025,vignette:.13},faded:{...bi,contrast:.88,saturation:.8,shadows:.07,temperature:.06}};function Da(i){const e={...bi};for(const[t,[n,s]]of Object.entries(Dc))Number.isFinite(i?.[t])&&(e[t]=nt.clamp(i[t],n,s));for(const t of["shadowColor","highlightColor"])/^#[0-9a-f]{6}$/i.test(i?.[t]??"")&&(e[t]=i[t]);return typeof i?.enabled=="boolean"&&(e.enabled=i.enabled),e}class xy{constructor(e){this.value={...bi};try{this.storage=e??globalThis.localStorage;const t=JSON.parse(this.storage.getItem(Dh));t?.version===1&&(this.value=Da(t.settings))}catch{}this.uniforms={gradeOn:{value:0},gradeA:{value:new Ze},gradeB:{value:new Ze},gradeC:{value:new w},gradeShadow:{value:new w},gradeHighlight:{value:new w}},this.apply()}get active(){const e=this.value;return e.enabled&&Object.keys(Dc).some(t=>Math.abs(e[t]-bi[t])>1e-6)}apply(){const e=this.value,t=this.uniforms;t.gradeOn.value=this.active?1:0,t.gradeA.value.set(e.brightness,e.contrast,e.saturation,e.gamma),t.gradeB.value.set(e.temperature,e.tint,e.shadows,e.highlights),t.gradeC.value.set(e.vignette,e.splitStrength,0);for(const[n,s]of[["shadowColor","gradeShadow"],["highlightColor","gradeHighlight"]]){const r=new De(e[n]);r.convertLinearToSRGB(),t[s].value.set(r.r,r.g,r.b)}this.onChange?.()}set(e){this.value=Da({...this.value,...e}),this.apply()}reset(){this.value={...bi},this.apply()}save(){try{return this.storage.setItem(Dh,JSON.stringify(this.export())),!0}catch{return!1}}export(){return{version:1,settings:{...this.value}}}import(e){if(e?.version!==1||!e.settings||typeof e.settings!="object"||Array.isArray(e.settings))throw Error("Нужен файл настроек композитинга.");this.value=Da(e.settings),this.apply()}}const vy=`
 uniform float gradeOn;
 uniform vec4 gradeA,gradeB;
 uniform vec3 gradeC,gradeShadow,gradeHighlight;
 vec3 applyGrade(vec3 linearColor,vec2 uv){
  if(gradeOn<.5)return linearColor;
  vec3 c=sRGBTransferOETF(vec4(max(linearColor,vec3(0.)),1.)).rgb;
  float l=dot(c,vec3(.2126,.7152,.0722));
  c+=gradeB.z*(1.-smoothstep(.05,.65,l))+gradeB.w*smoothstep(.35,.95,l);
  c*=vec3(1.+gradeB.x*.18+gradeB.y*.06,1.-gradeB.y*.12,1.-gradeB.x*.18+gradeB.y*.06);
  c+=gradeA.x;c=(c-.5)*gradeA.y+.5;
  c=pow(max(c,vec3(0.)),vec3(1./gradeA.w));
  float lum=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(lum),c,gradeA.z);
  vec3 tone=mix(gradeShadow,gradeHighlight,smoothstep(.15,.85,lum));c=mix(c,c*tone*2.,gradeC.y);
  float edge=smoothstep(.15,.7,length((uv-.5)*vec2(1.,.8)));c*=1.-gradeC.x*edge;
  return sRGBTransferEOTF(vec4(clamp(c,0.,1.),1.)).rgb;
 }
`;let po;function yy(){if(po)return po;let i=null,e=null,t=null;if(typeof document<"u"){let n=4189;const s=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296),r=document.createElement("canvas");r.width=256,r.height=512;const o=r.getContext("2d");o.fillStyle="#b0ae96",o.fillRect(0,0,256,512);for(let f=0;f<1700;f++){const g=s()*256,_=s()*512;o.fillStyle=f%3?"#6a645341":"#e4ddbf52",o.fillRect(g,_,.5+s()*3,2+s()*22)}for(let f=0;f<220;f++){const g=s()*256,_=s()*512;o.fillStyle="#565243",o.beginPath(),o.moveTo(g,_),o.lineTo(g+s()*12,_+s()*4),o.lineTo(g+s()*7,_+3+s()*18),o.lineTo(g-3,_+s()*12),o.fill(),o.strokeStyle="#d9d2b0",o.lineWidth=.7,o.stroke()}i=new sn(r),i.colorSpace=st;const a=document.createElement("canvas"),l=typeof location<"u"&&new URLSearchParams(location.search).get("quality")==="high",u=l?2:1;a.width=1024*u,a.height=512*u;const c=a.getContext("2d");c.scale(u,u);for(let f=0;f<8;f++){c.save(),c.translate(f%4*256,Math.floor(f/4)*256),c.beginPath(),c.rect(0,0,256,256),c.clip();const g=c.createLinearGradient(0,0,0,256);if(g.addColorStop(0,"#161e1e"),g.addColorStop(.65,["#30382e","#393a30","#303d3d","#3a3530"][f%4]),g.addColorStop(1,"#192420"),c.fillStyle=g,c.fillRect(0,0,256,256),f%4===2){for(let p=30;p<190;p+=12)c.fillStyle=p%24?"#7d8170":"#a4a28a",c.fillRect(4,p,248,7);c.strokeStyle="#4a534a",c.lineWidth=2,c.beginPath(),c.moveTo(54,15),c.lineTo(54,205),c.moveTo(205,15),c.lineTo(205,205),c.stroke()}else for(const p of[0,1]){const x=f%3===0?82:45+f*3;c.save(),p&&(c.translate(256,0),c.scale(-1,1)),c.fillStyle=["#9b9c86","#a4987c","#898f83"][f%3],c.beginPath(),c.moveTo(0,0),c.lineTo(x,0),c.bezierCurveTo(x-8,80,x-25,150,x+5,246),c.lineTo(0,256),c.closePath(),c.fill();for(let y=6;y<x-5;y+=9){const v=c.createLinearGradient(y,0,y+8,0);v.addColorStop(0,"#18211d7a"),v.addColorStop(.6,"#dfdac23b"),v.addColorStop(1,"#4850442b"),c.fillStyle=v,c.fillRect(y,0,7,256)}c.restore()}const _=c.createLinearGradient(0,0,180,256);_.addColorStop(0,"#9caeb64a"),_.addColorStop(.5,"#8daba916"),_.addColorStop(1,"#111b211b"),c.fillStyle=_,c.fillRect(0,0,256,256),c.fillStyle="#a7b5ab12",c.beginPath(),c.moveTo(5,12),c.lineTo(230,12),c.lineTo(145,100),c.lineTo(5,152),c.fill();for(let p=0;p<80;p++){const x=s()*256,y=s()*140,v=20+s()*120,b=c.createLinearGradient(0,y,0,y+v);b.addColorStop(0,"#5f614c65"),b.addColorStop(1,"#666d5500"),c.fillStyle=b,c.fillRect(x,y,.5+s()*2,v)}for(let p=0;p<1500;p++)c.fillStyle=p%3?"#c0b8951f":"#1a242025",c.fillRect(s()*256,s()*256,.5+s()*1.5,.5+s()*2);const m=c.createRadialGradient(128,118,55,128,128,180);if(m.addColorStop(0,"#17201b00"),m.addColorStop(.65,"#20281f2b"),m.addColorStop(1,"#111a16d9"),c.fillStyle=m,c.fillRect(0,0,256,256),c.strokeStyle="#333d2a",c.lineWidth=9,c.strokeRect(4,4,248,248),f===3||f===7){c.strokeStyle="#bbc4b37a",c.lineWidth=.9;const p=f===3?175:65,x=f===3?83:170;for(const[y,v]of[[-45,-80],[75,-35],[-90,55],[25,90]])c.beginPath(),c.moveTo(p,x),c.lineTo(p+y*.35+8,x+v*.4),c.lineTo(p+y,Math.max(0,Math.min(256,x+v))),c.stroke()}c.restore()}e=new sn(a),e.colorSpace=st;const h=document.createElement("canvas");h.width=h.height=256;const d=h.getContext("2d");for(let f=0;f<70;f++){const g=10+s()*236,_=5+s()*25,m=45+s()*200,p=d.createLinearGradient(0,_,0,_+m);p.addColorStop(0,"#3e41298c"),p.addColorStop(.4,"#43432d48"),p.addColorStop(1,"#39442f00"),d.fillStyle=p,d.fillRect(g,_,1+s()*5,m)}t=new sn(h),t.colorSpace=st}return po={paint:new Mt({name:"Aged window chipped wood",color:"#c8c6ac",map:i,roughness:.94}),pane:new Mt({name:"Aged window dusty glass and curtains",color:e?"#ffffff":"#485448",map:e,roughness:.76,metalness:.04}),recess:new Mt({name:"Aged window recess and fittings",color:"#353b32",roughness:.9}),drips:new Mt({name:"Aged window sill runoff",map:t,transparent:!0,opacity:.8,depthWrite:!1,roughness:1,alphaTest:.015,polygonOffset:!0,polygonOffsetFactor:-3})},po}function Uc(){const i=yy(),e=new Map,t=new Map,n={count:0,parts:0,styles:new Set},s=(r,o,a)=>{e.has(o)||e.set(o,[]),e.get(o).push(r.clone().applyMatrix4(a)),n.parts++};return{stats:n,add(r,o,a,l=1.3,u=1.5,c=0,h=0){h=(h%8+8)%8,n.count++,n.styles.add(h);const d=new ee().compose(new w(r,o,a),new Ke().setFromAxisAngle(new w(0,1,0),c),new w(1,1,1)),f=(y,v,b,M,A,L,E)=>{const C=[y,v,b].join(":");t.has(C)||t.set(C,new Kt(y,v,b)),s(t.get(C),M,d.clone().multiply(new ee().makeTranslation(A,L,E)))},g=l-.19,_=u-.2;f(l-.04,u-.04,.025,i.recess,0,0,.01);const m=new an(g,_),p=m.attributes.uv;for(let y=0;y<p.count;y++)p.setXY(y,(h%4+(.025+p.getX(y)*.95))/4,(1-Math.floor(h/4)+(.025+p.getY(y)*.95))/2);s(m,i.pane,d.clone().multiply(new ee().makeTranslation(0,0,.031))),m.dispose();for(const y of[-l/2+.045,l/2-.045])f(.09,u,.14,i.paint,y,0,.085);for(const y of[-u/2+.045,u/2-.045])f(l-.1,.09,.14,i.paint,0,y,.085);for(const y of[-g/2+.025,g/2-.025])f(.04,_,.085,i.paint,y,0,.085);for(const y of[-_/2+.025,_/2-.025])f(g,.04,.085,i.paint,0,y,.085);const x=h%3===1?.18*u:.1*u;f(g,.055,.12,i.paint,0,x,.11),f(.047,_,.12,i.paint,h%3===0?-.07:0,0,.11),f(.03,.105,.035,i.recess,(h%3===0?-.07:0)+.012,-.17*u,.18);for(const y of[-.28*u,.3*u])f(.033,.075,.045,i.recess,-l/2+.12,y,.17);if(f(l+.2,.1,.38,i.paint,0,-u/2-.04,.12),f(l+.1,.035,.28,i.recess,0,-u/2-.105,.095),i.drips.map){const y=new an(l+.12,.55);s(y,i.drips,d.clone().multiply(new ee().makeTranslation(0,-u/2-.34,.004))),y.dispose()}},finish(){const r=new _t;r.name="Detailed_aged_windows";for(const[o,a]of e){const l=Go(a);for(const c of a)c.dispose();const u=new we(l,o);u.name=o.name,u.castShadow=o!==i.drips,u.receiveShadow=!0,o===i.drips&&(u.userData.noShadow=!0),r.add(u)}for(const o of t.values())o.dispose();return r.userData.windowCount=n.count,r.userData.windowStyles=n.styles.size,r}}}function My(i){const e=i.getObjectByName("Detailed_aged_windows");if(e)return e;i.updateMatrixWorld(!0);const t=Uc(),n=new Set,s=[];if(i.traverse(o=>{if(!o.isMesh||Array.isArray(o.material))return;const a=o.material.name;if(/COURT_Curtains/i.test(a)){s.push(o);return}if(!/COURT_SmokyGlass/i.test(a))return;const l=o.geometry,u=l.attributes.position,c=l.index;for(let h=0;h<(c?.count??u.count);h+=3){const d=[0,1,2].map(x=>new w().fromBufferAttribute(u,c?c.getX(h+x):h+x).applyMatrix4(o.matrixWorld)),f=d[1].clone().sub(d[0]).cross(d[2].clone().sub(d[0])).normalize();if(Math.abs(f.z)<.98)continue;const g=new gn().setFromPoints(d),_=g.getSize(new w),m=g.getCenter(new w);if(_.x<.3||_.x>1.5||_.y<.5||_.y>2||_.z>.03)continue;const p=[m.x,m.y,m.z,_.x,_.y].map(x=>x.toFixed(2)).join(":");n.has(p)||(n.add(p),t.add(m.x,m.y,m.z+.02,_.x+.16,_.y+.16,0,n.size%8))}s.push(o)}),!t.stats.count)return null;for(const o of s)o.visible=!1;const r=t.finish();return r.applyMatrix4(i.matrixWorld.clone().invert()),i.add(r),r}const ir=5,qd=3,xs=["laundry","basketball","service","garages","market","garden","workshop","sport"],jd=["Двор с бельём","Баскетбольная площадка","Хозяйственный двор","Гаражный двор","Старый рынок","Зелёный двор","Ремонтный двор","Спортивный двор"],mo=ir+qd;function kl(i,e="street"){const t=i+(e==="entrance"?ir:0),n=(t%mo+mo)%mo,s=n<ir?"street":"entrance",r=s==="street"?n:n-ir,o=Math.max(0,[1,3,4].indexOf(r)),a=Math.floor(t/mo)*3+o,l=(a*5%xs.length+xs.length)%xs.length;return{location:s,section:r,courtyard:s==="street"&&[1,3,4].includes(r),variant:l,last:r===(s==="street"?ir:qd)-1}}function by(i,e="street"){const t=kl(i,e),n=kl(i+1,e);return t.location!==n.location?{to:n.location,x:i*26+(t.location==="street"?23.2:15.15),z:-1.45,doorZ:-3.18}:null}let Bl;function Sy(){if(Bl)return;let i=null;if(typeof document<"u"){const e=document.createElement("canvas");e.width=128,e.height=256;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,"#93978b"),n.addColorStop(.48,"#ececdb"),n.addColorStop(.52,"#c8cbb9"),n.addColorStop(1,"#818a77"),t.fillStyle=n,t.fillRect(0,0,128,256),t.strokeStyle="#e0e2c28c",t.lineWidth=1.5;for(let s=25;s<256;s+=27)for(const r of[-1,1])t.beginPath(),t.moveTo(64,s),t.quadraticCurveTo(64+r*20,s-15,64+r*60,s-37),t.stroke();t.strokeStyle="#e9e5bb",t.lineWidth=2,t.beginPath(),t.moveTo(64,256),t.lineTo(64,0),t.stroke(),i=new sn(e),i.colorSpace=st}Bl=new Mt({name:"Vegetation leaves",map:i,vertexColors:!0,side:Lt,roughness:.94})}function wy(i=1){Sy();const e=new _t;e.name="Detailed_vegetation";const t=[],n=[],s=[],r=[];let o=0,a=(i+1)*73856093;const l=()=>(a=Math.imul(a,1664525)+1013904223>>>0)/4294967296;function u(h,d,f){for(let g=0;g<15;g++){const _=l()*Math.PI*2,m=.12+l()*.22,p=.005+l()*.006,x=.025+l()*.09,y=h+(l()-.5)*.2,v=f+(l()-.5)*.2,b=t.length/3,M=new De().setHSL(l()<.2?.12:.23+l()*.035,.25+l()*.18,.14+l()*.12);for(let A=0;A<3;A++){const L=A/2,E=p*(1-L);for(const C of[-1,1]){t.push(y+Math.cos(_)*x*L*L+Math.cos(_+Math.PI/2)*E*C,d+m*L,v+Math.sin(_)*x*L*L+Math.sin(_+Math.PI/2)*E*C);const T=M.clone().multiplyScalar(.65+L*.45);n.push(T.r,T.g,T.b),s.push(C<0?0:1,L)}}r.push(b,b+2,b+1,b+1,b+2,b+3,b+2,b+4,b+3),o++}}function c(){const h=new xt;h.setAttribute("position",new ze(t,3)),h.setAttribute("color",new ze(n,3)),h.setAttribute("uv",new ze(s,2)),h.setIndex(r),h.computeVertexNormals();const d=new we(h,Bl);return d.name="Tapered grass blades",d.castShadow=d.receiveShadow=!0,e.add(d),e.userData.leafCount=o,e}return{grass:u,finish:c}}function Ey(i,e=0){const t=new _t;t.name=`Courtyard_${e}`,t.userData.courtyard=!0,t.userData.locationName=jd[e],t.userData.theme=xs[e];const n=new Map;i.traverse(T=>{if(T.isMesh)for(const D of Array.isArray(T.material)?T.material:[T.material])n.set(D.name,D)});const s=(T,D,S)=>{const O=[...n.values()].find(F=>T.test(F.name)),k=O?O.clone():new Mt({color:S,roughness:.95});k.name=D;for(const F of["map","normalMap","roughnessMap","metalnessMap"])k[F]&&(k[F]=k[F].clone(),k[F].wrapS=k[F].wrapT=En,k[F].needsUpdate=!0);return k},r=s(/brick/,"Courtyard brick","#896e55"),o=s(/Limestone/,"Courtyard limestone","#a49d84"),a=s(/Asphalt/,"Courtyard asphalt","#64675c"),l=s(/DampFoundation/,"Courtyard damp foundation","#555e4b"),{wood:u,metal:c,trim:h,soil:d,fabric:f}=Lc(),g=wy(e),_=Uc(),m=new Map,p=new Map;function x(T,D,S,O,k,F,j,G,te=0){const oe=[u,c,h,d,f].includes(k),ue=/Clothes line posts|Exercise|Rear downpipe|Bench fasteners/.test(T),Pe=T==="Hanging laundry",be=[D,S,O,oe,ue,Pe].join(":");if(!p.has(be)){let $;if(Pe){$=new an(D,S,4,5);const Te=$.attributes.position;for(let at=0;at<Te.count;at++)Te.setZ(at,Math.sin(Te.getX(at)*25)*.025+Math.pow((S/2-Te.getY(at))/S,2)*.055),Te.getY(at)<-S*.4&&Te.setY(at,Te.getY(at)+Math.sin(Te.getX(at)*14)*.025);$.computeVertexNormals()}else if(ue){const Te=Math.max(D,S,O),at=Math.min(D,S,O)/2;$=new jn(at,at,Te,8),D===Te?$.rotateZ(Math.PI/2):O===Te&&$.rotateX(Math.PI/2)}else $=new Kt(D,S,O);const me=$.attributes.position,Fe=$.attributes.normal,Ee=$.attributes.uv;if(!oe)for(let Te=0;Te<me.count;Te++)Ee.setXY(Te,(Math.abs(Fe.getX(Te))>.5?me.getZ(Te):me.getX(Te))/2,(Math.abs(Fe.getY(Te))>.5?me.getZ(Te):me.getY(Te))/2);p.set(be,$)}const Qe=p.get(be),He=new we(Qe,k);He.name=T,He.position.set(F,j,G),He.rotation.y=te,He.updateMatrix();const K=be+k.uuid;return m.has(K)||m.set(K,{geometry:Qe,material:k,items:[]}),m.get(K).items.push(He),He}x("Subgrade under paving",26,.16,25,a,13,-.2,1.5);for(const[T,D,S,O,k]of[["Continuous road",26,4.54,13,.25],["Recessed yard ground",17,9,13,-6.52]]){const F=x(T,D,.16,S,a,O,-.08,k);Wd(F.geometry,F.matrix)}x("Rear apartment building",17,7.2,.7,[1,4,5,7].includes(e)?o:r,13,3.6,-9.5),x("Rear foundation",17,.55,.78,l,13,.275,-9.43);for(const T of[2.25,23.75])x("Street-facing wing",4.5,7.8,6.1,[2,3,6].includes(e)?o:r,T,3.9,-6.5),x("Wing foundation",4.55,.55,6.15,l,T,.275,-6.48);for(let T=0;T<3;T++)for(const[D,S]of[6.4,9.7,12.8,16.2,19.5].entries())_.add(D===3?17:S,1.65+T*1.9,-9.145,1.3,1.5,0,T*5+D+e*3);for(const T of[0,1])for(let D=0;D<3;D++)for(const[S,O]of[1.25,3.25].entries())T===1&&D===0&&O===3.25||_.add(T?26-O:O,1.6+D*2,-3.445,1.2,1.4,0,T*5+D*2+S+e);x("Wing entrance door",1.42,2.4,.16,c,23.2,1.2,-3.28),x("Wing entrance canopy",1.9,.1,.8,c,23.2,2.65,-2.95);for(const T of[-1,1])for(let D=0;D<3;D++)for(const[S,O]of[-5.2,-7.6].entries())_.add(T<0?4.505:21.495,1.6+D*1.9,O,1.2,1.4,T<0?Math.PI/2:-Math.PI/2,D*3+S+e+(T>0?4:0));x("Low rear path",17,.06,e===1?.55:1.3,o,13,.02,e===1?-8.7:-7.5),x("Rear porch door",1.3,2.35,.18,c,15.15,1.175,-8.94),x("Porch canopy",2.1,.12,1.1,c,15.15,2.65,-8.5);function y(T,D,S=1.3,O=2.35){for(const k of[-S/2-.055,S/2+.055])x("Door casing",.1,O+.12,.18,h,T+k,O/2,D+.06);x("Door lintel",S+.22,.1,.2,h,T,O+.06,D+.06),x("Door threshold",S+.25,.08,.35,o,T,.04,D+.12);for(const k of[.55,1.65]){x("Recessed door panel",S-.2,.78,.025,c,T,k,D+.105);for(const F of[-S/2+.09,S/2-.09])x("Door raised edging",.025,.8,.035,h,T+F,k,D+.125)}x("Door lock plate",.11,.28,.04,h,T+S*.3,1.05,D+.14),x("Door handle",.15,.035,.09,c,T+S*.27,1.1,D+.2);for(const k of[.35,1.95])x("Door hinge",.055,.16,.08,c,T-S/2+.04,k,D+.16)}y(15.15,-8.94),y(23.2,-3.28,1.42,2.4);const v=(T,D)=>{for(let S=0;S<4;S++)x("Separate bench seat plank",2,.075,.115,u,T,.48+(S===2?.006:0),D-.2+S*.135);for(let S=0;S<3;S++)x("Separate bench back plank",2,.105,.07,u,T,.68+S*.14,D-.28);for(const S of[-.72,.72]){x("Bench legs",.075,.48,.075,c,T+S,.24,D-.18),x("Bench front legs",.075,.48,.075,c,T+S,.24,D+.18),x("Bench foot",.18,.06,.55,c,T+S,.04,D),x("Seat mounting rail",.09,.08,.55,c,T+S,.4,D),x("Back mounting rail",.07,.65,.06,c,T+S,.67,D-.32);for(const O of[.68,.82,.96])x("Bench fasteners",.035,.035,.025,h,T+S,O,D-.235)}};e!==1&&v(7.6,-5.2),e===0&&v(18.1,-6.3);function b(T,D,S,O,k){for(let F=0;F<Math.ceil(O/.22);F++)for(let j=0;j<Math.ceil(S/.22);j++)g.grass(T-S/2+.1+j*.22,k,D-O/2+.1+F*.22)}for(const T of[5.6,20.4]){for(const D of[-.65,.65])x("Planter long kerb",1.6,.28,.1,o,T,.14,-5.9+D);for(const D of[-.75,.75])x("Planter end kerb",.1,.28,1.2,o,T+D,.14,-5.9);x("Planter soil",1.4,.07,1.2,d,T,.24,-5.9),b(T,-5.9,1.3,1.1,.28)}function M(T,D,S,O=.7,k=.4,F=.65){for(const j of[-F/2,F/2])for(let G=0;G<3;G++)x("Crate side slat",O,k/3-.02,.045,u,T,D+G*k/3+k/6,S+j);for(const j of[-O/2,O/2])for(let G=0;G<3;G++)x("Crate end slat",.045,k/3-.02,F,u,T+j,D+G*k/3+k/6,S);for(const j of[-O/2+.04,O/2-.04])for(const G of[-F/2+.04,F/2-.04])x("Crate corner support",.06,k,.06,u,T+j,D+k/2,S+G);for(let j=0;j<4;j++)x("Crate floor plank",O/4-.015,.035,F,u,T-O/2+(j+.5)*O/4,D+.025,S)}if(e===0){for(const T of[10.8,13.1])x("Clothes line posts",.06,3,.06,c,T,1.5,-6.3);x("Clothes line",2.3,.022,.022,c,11.95,2.8,-6.3);for(let T=0;T<3;T++)x("Hanging laundry",.5,.75,.025,f,11.25+T*.65,2.4,-6.3)}if(e===1){let O=function(F,j,G,te,oe,ue,Pe){const be=new we(j,G);be.name=F,be.position.set(te,oe,ue),Pe&&be.rotation.set(...Pe),be.updateMatrix(),m.set(F,{geometry:j,material:G,items:[be]})},k=function(F,j,G,te,oe=c){const ue=new w(...j),Pe=new w(...G),be=Pe.clone().sub(ue),Qe=new jn(te,te,be.length(),5);Qe.applyQuaternion(new Ke().setFromUnitVectors(new w(0,1,0),be.normalize()));const He=ue.add(Pe).multiplyScalar(.5);O(F,Qe,oe,He.x,He.y,He.z)};t.userData.basketballCourt=!0;const T=h,D=d,S=u;x("Worn court surface",12.2,.018,4.9,D,13,.012,-5.95);for(const F of[-8.25,-3.65])x("Court sideline "+F,11.6,.006,.035,T,13,.025,F);for(const F of[7.2,18.8,13])x("Court line "+F,.035,.006,4.6,T,F,.025,-5.95);O("Centre circle",new hi(.74,.775,40),T,13,.029,-5.95,[-Math.PI/2,0,0]);for(const F of[-1,1]){const j=13+F*5.8,G=j-F*2.15;for(const be of[-6.95,-4.95])x("Key edge "+F+be,2.15,.006,.035,T,(j+G)/2,.027,be);x("Free throw line "+F,.035,.006,2,T,G,.027,-5.95),O("Free throw arc "+F,new hi(.98,1.015,28,1,F<0?-Math.PI/2:Math.PI/2,Math.PI),T,G,.03,-5.95,[-Math.PI/2,0,0]);const te=j+F*.22,oe=j-F*.18,ue=j-F*.6;k("Basket post "+F,[te,0,-5.95],[te,3.65,-5.95],.065),k("Basket support "+F,[te,3.45,-5.95],[oe,3.45,-5.95],.045),x("Aged backboard "+F,.085,1.05,1.6,h,oe,3.22,-5.95);const Pe=oe-F*.05;for(const be of[-6.26,-5.64])x("Target vertical "+F+be,.016,.42,.025,c,Pe,3.1,be);for(const be of[2.9,3.3])x("Target horizontal "+F+be,.016,.025,.64,c,Pe,be,-5.95);O("Basket rim "+F,new Wi(.24,.018,5,24),S,ue,2.89,-5.95,[Math.PI/2,0,0]);for(let be=0;be<10;be++){const Qe=be*Math.PI/5,He=Qe+Math.PI/5;k("Net "+F+":"+be,[ue+Math.cos(Qe)*.23,2.88,-5.95+Math.sin(Qe)*.23],[ue+Math.cos(He)*.13,2.52,-5.95+Math.sin(He)*.13],.007,T)}}for(let F=0;F<=6;F++){const j=6.7+F*2.1;k("Fence post "+F,[j,0,-8.65],[j,2.25,-8.65],.026)}for(const F of[.2,1.1,2.15])k("Fence rail "+F,[6.7,F,-8.65],[19.3,F,-8.65],.014);for(let F=0;F<63;F++){const j=6.7+F*.2;k("Fence wire "+F,[j,.2,-8.65],[j,2.15,-8.65],.004)}v(19.4,-7.5)}if(e===2){x("Service dumpster",1.6,.95,1.1,c,11.6,.65,-5.8);for(const T of[-.83,.83])x("Dumpster rim",.06,.1,1.16,c,11.6+T,1.16,-5.8);for(const T of[-.58,.58])x("Dumpster rim",1.7,.1,.06,c,11.6,1.16,-5.8+T);for(const T of[-.4,0,.4])x("Dumpster reinforcement ribs",.045,.74,.04,c,11.6+T,.65,-5.23);for(const T of[-.65,.65])for(const D of[-.4,.4])x("Dumpster casters",.13,.2,.16,c,11.6+T,.1,-5.8+D);x("Dumpster lid",1.72,.07,1.22,c,11.6,1.27,-5.8),x("Dumpster handle",.35,.05,.1,h,11.6,1.28,-5.13);for(let T=0;T<4;T++){for(let D=0;D<5;D++)x("Pallet top boards",.22,.04,.9,u,17.5+D*.25,.16+T*.15,-5.4);for(const D of[-.33,0,.33])x("Pallet stringers",1.25,.09,.09,u,18,.1+T*.15,-5.4+D)}}if(e===3){for(let T=0;T<3;T++){const D=9+T*4;x("Garage block",3.7,2.7,2.4,T%2?r:o,D,1.35,-7.1),x("Garage roof",3.95,.16,2.65,c,D,2.78,-7.1),x("Rolling garage door",3.05,2.25,.08,c,D,1.15,-5.85);for(const S of[-1.62,1.62])x("Garage door jamb",.12,2.5,.14,h,D+S,1.25,-5.77);x("Garage door handle",.26,.04,.08,h,D,.95,-5.72);for(let S=0;S<12;S++)x("Garage shutter ribs",3.05,.022,.035,c,D,.15+S*.18,-5.79)}for(let T=0;T<3;T++)M(18.8,T*.4,-5.2,.6)}if(e===4)for(let T=0;T<3;T++){const D=9.3+T*3.7;for(const S of[-1.3,1.3])x("Market stall posts",.07,2.4,.07,c,D+S,1.2,-6.5);for(let S=0;S<5;S++)x("Market counter planks",2.85,.08,.205,u,D,.9,-6.65+S*.23);x("Market awning",3.1,.12,1.9,T%2?c:h,D,2.45,-6.4);for(let S=0;S<3;S++)M(D-.85+S*.85,.99,-6.2,.7,.3,.7)}if(e===5){for(const T of[9.7,16.8]){for(const D of[-.95,.95])for(let S=0;S<3;S++)x("Grass bed side boards",3,.09,.08,u,T,.06+S*.11,-6.4+D);for(const D of[-1.46,1.46])for(let S=0;S<3;S++)x("Grass bed end boards",.08,.09,1.8,u,T+D,.06+S*.11,-6.4);x("Grass bed soil",2.8,.08,1.8,d,T,.24,-6.4),b(T,-6.4,2.65,1.65,.29)}for(let T=0;T<7;T++)x("Garden stepping stones",.65,.04,.65,o,13,.02,-4.2-T*.55);v(13,-8.15)}if(e===6){x("Workshop shed",7,2.9,2.4,r,13,1.45,-7.45),x("Workshop roof",7.4,.18,2.8,c,13,2.98,-7.45),x("Workshop double doors",3.4,2.35,.1,u,13,1.175,-6.18);for(const T of[12.25,13.75])x("Workshop door handles",.06,.32,.06,c,T,1.1,-6.1);for(let T=0;T<4;T++)x("Workbench top planks",2.6,.09,.19,u,18,.95,-6+T*.21);for(const T of[17,19])x("Workbench legs",.09,.9,.65,c,T,.45,-5.7);for(let T=0;T<5;T++)x("Stored metal beams",2.7,.08,.1,c,8,.15+T*.13,-5.9+T*.12)}if(e===7){for(const T of[9.5,12.8,16.1]){for(const D of[-1.2,1.2])x("Exercise bar supports",.09,2.5,.09,c,T+D,1.25,-6.7);x("Exercise overhead bar",2.5,.08,.08,c,T,2.5,-6.7)}for(let T=0;T<8;T++)x("Wall ladder rungs",2.4,.045,.055,u,12.8,.3+T*.29,-6.7);for(const T of[10,16]){x("Training bench",1.8,.12,.55,u,T,.5,-4.8);for(const D of[-.65,.65])x("Training bench feet",.08,.5,.45,c,T+D,.25,-4.8)}}for(let T=0;T<3;T++)x("Rear downpipe",.09,6.8,.1,c,5.2+T*7.5,3.4,-9.06);const A=new Map;let L=0;for(const{geometry:T,material:D,items:S}of m.values()){A.has(D)||A.set(D,[]);for(const O of S)A.get(D).push(T.clone().applyMatrix4(O.matrix)),L++}for(const[T,D]of A){if(D.some(k=>!!k.index)!==D.every(k=>!!k.index)){for(let k=0;k<D.length;k++)if(D[k].index){const F=D[k];D[k]=F.toNonIndexed(),F.dispose()}}const S=Go(D);for(const k of D)k.dispose();const O=new we(S,T);O.castShadow=!0,O.receiveShadow=!0,O.name=T.name,t.add(O)}const E=_.finish();t.add(...E.children.slice()),t.userData.windowCount=_.stats.count,t.userData.windowStyles=_.stats.styles.size,t.userData.staticBoxes=L+_.stats.parts,t.add(g.finish());const C=dy(i);return t.add(...C.children.slice()),t}class Ty{constructor(e){this.root=new _t,this.root.visible=!1,e.add(this.root);const{metal:t,trim:n}=Lc(),s=(r,o,a,l,u,c,h)=>{const d=new we(new Kt(r,o,a),l);d.position.set(u,c,h),d.castShadow=!0,this.root.add(d)};s(1.45,2.45,.2,t,0,1.225,-3.14);for(const r of[-.78,.78])s(.12,2.6,.27,n,r,1.3,-3.09);s(1.68,.12,.27,n,0,2.6,-3.09),s(.18,.04,.08,n,.43,1.05,-2.99);for(const r of[.55,1.7]){s(1.16,.75,.035,t,0,r,-3.015);for(const o of[-.6,.6])s(.025,.77,.04,n,o,r,-2.985)}s(.1,.24,.04,n,.45,1.05,-2.97);for(const r of[.35,2.1])s(.06,.15,.07,t,-.68,r,-2.98);this.sign=new we(new an(1.65,.37),new Ft({color:"#d8dbb9"})),this.sign.position.set(0,2.92,-3),this.root.add(this.sign),this.maps={};for(const[r,o]of[["entrance","ПОДЪЕЗД"],["street","ВЫХОД ВО ДВОР"]])if(typeof document<"u"){const a=document.createElement("canvas");a.width=512,a.height=128;const l=a.getContext("2d");l.fillStyle=r==="street"?"#3c5b45":"#313e36",l.fillRect(0,0,512,128),l.strokeStyle="#d7ceb0",l.lineWidth=6,l.strokeRect(6,6,500,116),l.fillStyle="#e9e2c8",l.font="bold 46px Arial",l.textAlign="center",l.fillText(o,256,82,470),this.maps[r]=new sn(a),this.maps[r].colorSpace=st}this.marker=new we(new hi(.38,.44,32),new Ft({color:"#e2c36a",transparent:!0,opacity:.75,depthWrite:!1,side:Lt})),this.marker.rotation.x=-Math.PI/2,this.marker.position.set(0,.018,-1.45),this.root.add(this.marker)}set(e){this.exit=e,this.root.visible=!!e,e&&(this.root.position.x=e.x,this.sign.material.map=this.maps[e.to]??null,this.sign.material.needsUpdate=!0)}near(e){return!!this.exit&&Math.hypot(e.x-this.exit.x,e.z-this.exit.z)<1.4}update(e){this.marker.material.opacity=.55+Math.sin(e*3)*.18}}class Ay extends xt{constructor(e=new we,t=new w,n=new on,s=new w(1,1,1)){super();const r=[],o=[],a=[],l=new w,u=new Ge().getNormalMatrix(e.matrixWorld),c=new ee;c.makeRotationFromEuler(n),c.setPosition(t);const h=new ee;h.copy(c).invert(),d(),this.setAttribute("position",new ze(r,3)),this.setAttribute("uv",new ze(a,2)),o.length>0&&this.setAttribute("normal",new ze(o,3));function d(){let m=[];const p=new w,x=new w,y=e.geometry,v=y.attributes.position,b=y.attributes.normal;if(y.index!==null){const M=y.index;for(let A=0;A<M.count;A++)p.fromBufferAttribute(v,M.getX(A)),b?(x.fromBufferAttribute(b,M.getX(A)),f(m,p,x)):f(m,p)}else{if(v===void 0)return;for(let M=0;M<v.count;M++)p.fromBufferAttribute(v,M),b?(x.fromBufferAttribute(b,M),f(m,p,x)):f(m,p)}m=g(m,l.set(1,0,0)),m=g(m,l.set(-1,0,0)),m=g(m,l.set(0,1,0)),m=g(m,l.set(0,-1,0)),m=g(m,l.set(0,0,1)),m=g(m,l.set(0,0,-1));for(let M=0;M<m.length;M++){const A=m[M];a.push(.5+A.position.x/s.x,.5+A.position.y/s.y),A.position.applyMatrix4(c),r.push(A.position.x,A.position.y,A.position.z),A.normal!==null&&o.push(A.normal.x,A.normal.y,A.normal.z)}}function f(m,p,x=null){p.applyMatrix4(e.matrixWorld),p.applyMatrix4(h),x?(x.applyNormalMatrix(u),m.push(new Ua(p.clone(),x.clone()))):m.push(new Ua(p.clone()))}function g(m,p){const x=[],y=.5*Math.abs(s.dot(p));for(let v=0;v<m.length;v+=3){let b=0,M,A,L,E;const C=m[v+0].position.dot(p)-y,T=m[v+1].position.dot(p)-y,D=m[v+2].position.dot(p)-y,S=C>0,O=T>0,k=D>0;switch(b=(S?1:0)+(O?1:0)+(k?1:0),b){case 0:{x.push(m[v]),x.push(m[v+1]),x.push(m[v+2]);break}case 1:{if(S&&(M=m[v+1],A=m[v+2],L=_(m[v],M,p,y),E=_(m[v],A,p,y)),O){M=m[v],A=m[v+2],L=_(m[v+1],M,p,y),E=_(m[v+1],A,p,y),x.push(L),x.push(A.clone()),x.push(M.clone()),x.push(A.clone()),x.push(L.clone()),x.push(E);break}k&&(M=m[v],A=m[v+1],L=_(m[v+2],M,p,y),E=_(m[v+2],A,p,y)),x.push(M.clone()),x.push(A.clone()),x.push(L),x.push(E),x.push(L.clone()),x.push(A.clone());break}case 2:{S||(M=m[v].clone(),A=_(M,m[v+1],p,y),L=_(M,m[v+2],p,y),x.push(M),x.push(A),x.push(L)),O||(M=m[v+1].clone(),A=_(M,m[v+2],p,y),L=_(M,m[v],p,y),x.push(M),x.push(A),x.push(L)),k||(M=m[v+2].clone(),A=_(M,m[v],p,y),L=_(M,m[v+1],p,y),x.push(M),x.push(A),x.push(L));break}}}return x}function _(m,p,x,y){const v=m.position.dot(x)-y,b=p.position.dot(x)-y,M=v/(v-b),A=new w(m.position.x+M*(p.position.x-m.position.x),m.position.y+M*(p.position.y-m.position.y),m.position.z+M*(p.position.z-m.position.z));let L=null;return m.normal!==null&&p.normal!==null&&(L=new w(m.normal.x+M*(p.normal.x-m.normal.x),m.normal.y+M*(p.normal.y-m.normal.y),m.normal.z+M*(p.normal.z-m.normal.z))),new Ua(A,L)}}}class Ua{constructor(e,t=null){this.position=e,this.normal=t}clone(){const e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}}let Zs;function Ry(){if(Zs)return Zs;if(typeof document>"u")return null;const i=document.createElement("canvas"),e=typeof location<"u"&&new URLSearchParams(location.search).get("quality")==="high"?2048:1024;i.width=e,i.height=e/2;const t=i.getContext("2d"),n=e/1024;t.scale(n,n);let s=7149;const r=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296);for(let a=0;a<8;a++){t.save(),t.translate(a%4*256,Math.floor(a/4)*256),t.beginPath(),t.rect(5,5,246,246),t.clip();const l=a>=4;for(let c=0;c<170;c++){const h=10+r()*236,d=15+r()*228,f=6+r()*(l?34:20),g=t.createRadialGradient(h,d,0,h,d,f);g.addColorStop(0,l?"#29322482":"#3c302578"),g.addColorStop(1,"#31352100"),t.fillStyle=g,t.fillRect(h-f,d-f,f*2,f*2)}if(l)for(let c=0;c<650;c++)t.fillStyle=c%3?"#4e5c3458":"#282e2558",t.beginPath(),t.ellipse(14+r()*228,14+r()*228,.5+r()*6,.5+r()*4,r()*3,0,Math.PI*2),t.fill();else for(let c=0;c<85;c++){const h=12+r()*232,d=18+r()*70,f=25+r()*180,g=t.createLinearGradient(0,d,0,d+f);g.addColorStop(0,"#4c3723ad"),g.addColorStop(.45,"#4d422c60"),g.addColorStop(1,"#41452900"),t.fillStyle=g,t.fillRect(h,d,.8+r()*4,f)}for(let c=0;c<1600;c++)t.fillStyle=c%4?"#2c302a38":"#99815a50",t.fillRect(8+r()*240,8+r()*240,.3+r()*1.3,.3+r()*1.8);for(let c=0;c<14;c++){const h=15+r()*220,d=20+r()*215;t.strokeStyle="#292b2560",t.lineWidth=.4+r()*.8,t.beginPath(),t.moveTo(h,d),t.lineTo(h+r()*8,d+10),t.lineTo(h-5,d+17),t.lineTo(h+4,d+26),t.stroke()}t.globalCompositeOperation="destination-out";for(let c=0;c<140;c++)t.fillStyle=`rgba(0,0,0,${.12+r()*.6})`,t.fillRect(8+r()*240,8+r()*240,1+r()*4,.5+r()*2);t.globalCompositeOperation="destination-in";const u=t.createRadialGradient(128,128,55,128,128,127);u.addColorStop(0,"#ffffffff"),u.addColorStop(1,"#ffffff00"),t.fillStyle=u,t.fillRect(0,0,256,256),t.restore()}const o=new sn(i);return o.colorSpace=st,o.anisotropy=4,o.name="Shared detailed grime atlas",Zs=new Mt({map:o,transparent:!0,alphaTest:.02,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Zs.name="Dirt damp and runoff",Zs}const Cy=/brick|limestone|concrete wall|dampfoundation|entrance aged plaster|entrance chipped green|old wood|entrance doors|courtyard brick|courtyard limestone|courtyard damp foundation|courtyard old wood/i;function zl(i,e,t=Ry()){if(!t||i.getObjectByName("Surface_wear"))return null;i.updateMatrixWorld(!0);const n=[],s=[];i.traverse(h=>{!h.isMesh||Array.isArray(h.material)||(Cy.test(h.material.name)&&n.push(h),/asphalt|pavement tiles|entrance terrazzo/i.test(h.material.name)&&s.push(h))});const r=new Cc,o=[];let a=0;const l=(h,d,f,g,_,m=0,p=!1)=>{r.set(p?new w(h,2,d):new w(h,d,3),p?new w(0,-1,0):new w(0,0,-1));const x=r.intersectObjects(p?s:n,!1).find(L=>{const E=L.face.normal.clone().transformDirection(L.object.matrixWorld);return p?E.y>.7:E.z>.7});if(!x)return;const y=x.object,v=new we(y.geometry,y.material);if(v.matrixWorld.copy(y.matrixWorld),y.isInstancedMesh){const L=new ee;y.getMatrixAt(x.instanceId,L),v.matrixWorld.multiply(L)}const b=new Ay(v,x.point,new on(p?-Math.PI/2:0,0,m),new w(f,g,.045));if(!b.attributes.position.count){b.dispose();return}const M=b.attributes.uv,A=_-8;for(let L=0;L<M.count;L++)M.setXY(L,(A%4+(6+M.getX(L)*244)/256)/4,(1-Math.floor(A/4)+(6+M.getY(L)*244)/256)/2);o.push(b),a++};if(e==="entrance")for(const h of[0,13]){for(const d of[.9,3.65,5.6,7.05,12.35])l(h+d,.35,1.55,.7,14);for(const d of[2.15,5.1])l(h+d,2.45,1.8,1.25,8);l(h+.55,1.6,.8,2.6,11),l(h+3.25,.8,1.05,1.5,8),l(h+6.6,2.65,1.45,1,9),l(h+2.15,.45,.85,.8,10),l(h+12.1,1.7,.8,2.5,9)}else for(let h=0;h<14;h++)l(.7+h*1.85,.3,2,.65,12+h%4),l(1+h*1.85,1.6,.85,2.15,8+h%4),l(1.6+h*1.8,2.8,1.45,1.4,9);for(let h=0;h<18;h++)l(1+h*1.4,h%2?2.8:-2.55,1.2+h%3*.4,1.6+h%2*.6,8+h%4,h*.4,!0);if(!o.length)return null;const u=Go(o);for(const h of o)h.dispose();u.applyMatrix4(i.matrixWorld.clone().invert());const c=new we(u,t);return c.name="Surface_wear",c.userData.noShadow=!0,c.userData.patches=a,c.receiveShadow=!0,c.castShadow=!1,i.add(c),c}const Yd={street:"Улица",entrance:"Подъезд"};function Py(){if(typeof document>"u")return{};let i=93;const e=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),t=n=>{const s=document.createElement("canvas");s.width=s.height=512;const r=s.getContext("2d");r.fillStyle=n==="floor"?"#89857a":"#c1b9a2",r.fillRect(0,0,512,512);for(let a=0;a<3500;a++)r.fillStyle=e()>.5?"#292f2112":"#fff5d318",r.fillRect(e()*512,e()*512,e()*8+1,e()*9+1);if(n==="floor")for(let a=0;a<512;a+=64)for(let l=0;l<512;l+=64)r.fillStyle=(l+a)%128?"#383c3325":"#d4c7ac20",r.fillRect(l+1,a+1,62,62),r.strokeStyle="#33382e80",r.strokeRect(l,a,64,64);else{for(let a=0;a<90;a++){const l=e()*512,u=e()*512;r.fillStyle="#7c786734",r.beginPath(),r.ellipse(l,u,e()*20+2,e()*13+2,e()*3,0,Math.PI*2),r.fill()}r.strokeStyle="#4c52434a";for(let a=0;a<12;a++){let l=e()*512,u=e()*512;r.beginPath(),r.moveTo(l,u);for(let c=0;c<5;c++)l+=(e()-.5)*26,u+=e()*25,r.lineTo(l,u);r.stroke()}}const o=new sn(s);return o.wrapS=o.wrapT=En,o.colorSpace=st,o};return{wall:t("wall"),floor:t("floor")}}function Iy(){const i=new _t;i.name="Entrance_26m";const e=Uc(),t=Py(),n=new Kt(1,1,1),s=new jn(.022,.022,1,6),r=new Map,o=(y,v,b=null,M={})=>{const A=new Mt({color:v,map:b,roughness:.94,...M});return A.name=y,A};t.floor&&t.floor.repeat.set(6.5,5.75),t.wall&&t.wall.repeat.set(3,1.5);const a=o("Entrance aged plaster","#d9cead",t.wall),l=o("Entrance chipped green paint","#748774",t.wall),u=o("Entrance terrazzo","#b3b0a0",t.floor),c=o("Entrance concrete stairs","#8e9182",t.wall),h=o("Entrance painted steel","#4b5c57",null,{metalness:.3}),d=o("Entrance recess","#282e29"),f=o("Entrance doors","#695c44",t.wall),g=o("Entrance paper","#e4d9ba");o("Entrance window glass","#455c66",null,{emissive:"#526f7c",emissiveIntensity:.45});const _=o("Entrance warm lamps","#e4cd8a",null,{emissive:"#ffbf60",emissiveIntensity:2});function m(y,v,b,M,A=null,L=!0){const E=new we(y,v);E.position.fromArray(b),E.scale.fromArray(M),A&&E.rotation.set(...A),E.updateMatrix();const C=y.uuid+v.uuid+L;return r.has(C)||r.set(C,{geometry:y,mat:v,shadow:L,meshes:[]}),r.get(C).meshes.push(E),E}const p=(y,v,b,M,A,L,E,C,T=null,D=!0)=>{const S=m(n,A,[L,E,C],[v,b,M],T,D);return S.name=y,S};p("Continuous level floor",26,.16,23,u,13,-.08,2.5,null,!1);for(let y=0;y<2;y++){const v=y*13;for(const[b,M]of[[3.95,7.9],[12.35,1.3]])p("Plaster upper wall",M,3.1,.24,a,v+b,2.85,-3.6),p("Green lower wall",M,1.3,.25,l,v+b,.65,-3.59),p("Skirting",M,.14,.29,h,v+b,.07,-3.55),p("Paint border",M,.045,.28,h,v+b,1.3,-3.55);for(const b of[7.88,11.72])p("Stairwell side plaster",.2,3.2,3.15,a,v+b,2.9,-5.05),p("Stairwell side green paint",.22,1.3,3.15,l,v+b,.65,-5.05);p("Stairwell ceiling",4,.16,3.25,a,v+9.8,4.5,-5.05,null,!1),p("Stairwell back wall",3.8,4.5,.2,a,v+9.8,2.25,-6.5),p("Stairwell landing",3.8,.16,1,c,v+9.8,1.68,-6.05);for(let b=0;b<12;b++){const M=(b+1)*.14,A=-3.7-b*.2;p("Stair tread",2.15,M,.22,c,v+9.8,M/2,A);for(const L of[-1,1]){const E=v+9.8+L*1.12;p("Stair baluster",.035,.85,.035,h,E,M+.425,A)}}for(const b of[-1,1]){const M=new w(v+9.8+b*1.12,.96,-3.7),A=new w(M.x,2.5,-5.9),L=M.distanceTo(A),E=m(s,h,M.clone().add(A).multiplyScalar(.5).toArray(),[1,L,1]);E.quaternion.setFromUnitVectors(new w(0,1,0),A.sub(M).normalize()),E.updateMatrix()}p("Landing rail",3.5,.06,.06,h,v+9.8,2.5,-6.05);for(let b=0;b<9;b++)p("Landing rail post",.035,.75,.035,h,v+8.2+b*.4,2.13,-6.05);p("Door recess",1.42,2.48,.16,d,v+2.15,1.24,-3.4),p("Apartment door",1.16,2.3,.12,f,v+2.15,1.15,-3.29);for(const b of[-.63,.63])p("Door trim",.09,2.4,.2,h,v+2.15+b,1.2,-3.23);p("Door lintel",1.36,.1,.2,h,v+2.15,2.43,-3.23),p("Door handle",.13,.035,.07,h,v+2.55,1.03,-3.18),p("Peephole",.035,.035,.03,h,v+2.15,1.68,-3.19);for(let b=0;b<2;b++)for(let M=0;M<4;M++){const A=v+4.3+M*.39,L=1.15+b*.42;p("Mailbox frame",.38,.4,.21,d,A,L,-3.35),p("Mailbox door",.34,.35,.025,M%3?h:l,A,L,-3.23),p("Mailbox letter slot",.23,.025,.015,d,A,L+.1,-3.207),p("Mailbox label",.1,.04,.018,g,A,L-.07,-3.2)}p("Noticeboard frame",1.3,1.45,.12,f,v+6.9,1.8,-3.35),p("Noticeboard backing",1.17,1.3,.03,d,v+6.9,1.8,-3.27);for(let b=0;b<6;b++){const M=v+6.6+b%2*.48,A=2.13-Math.floor(b/2)*.37;p("Paper notices",.36,.3,.015,g,M,A,-3.24,[0,0,(b%3-1)*.06]);for(let L=0;L<3;L++)p("Notice ink",.24,.012,.018,h,M,A+.06-L*.045,-3.23)}for(const[b,M]of[2.15,5.1].entries())e.add(v+M,3.28,-3.475,1.7,1.12,0,y*3+b+1);p("Ceiling edge",13,.24,.38,c,v+6.5,4.35,-3.5,null,!1),p("Ceiling soffit",13,.13,4.8,a,v+6.5,4.5,-1.1,null,!1),p("Lamp bracket",.32,.1,.35,h,v+4,3.92,-3.21),p("Warm bulkhead lamp",.21,.26,.12,_,v+4,3.73,-3.15,null,!1);for(let b=0;b<2;b++)p("Old heating pipe",.055,3.8,.055,h,v+.45+b*.13,1.9,-3.28);for(let b=0;b<7;b++)p("Radiator section",.08,.6,.18,g,v+6.15+b*.11,.46,-3.25);for(let b=0;b<7;b++)p("Scattered paper",.16,.007,.12,g,v+1+b*1.7,.009,b%2?2.5:-2.65,[0,b*.8,0],!1)}for(const{geometry:y,mat:v,shadow:b,meshes:M}of r.values()){const A=new Lr(y,v,M.length);for(let L=0;L<M.length;L++)A.setMatrixAt(L,M[L].matrix);A.castShadow=b,A.receiveShadow=!0,A.computeBoundingSphere(),A.name=v.name,i.add(A)}const x=e.finish();return i.add(...x.children.slice()),i.userData.windowCount=e.stats.count,i}function Ly(i,e,t){const n=new Map([...i.chunks].map(([s,r])=>[s,r.bottles.map(o=>o.taken)]));i.setEnvironment(e),i.update(t);for(const[s,r]of i.chunks){const o=n.get(s);o&&r.bottles.forEach((a,l)=>{o[l]&&(a.taken=!0,a.mesh.visible=!1)})}}class Dy{constructor({scene:e,lighting:t,sun:n,ambient:s,renderer:r}){Object.assign(this,{scene:e,lighting:t,sun:n,ambient:s,renderer:r}),this.indoor=!1,this.lights=[0,1].map(()=>{const o=new Ud("#ffca83",18,14,2);return o.visible=!1,e.add(o),o})}update(e,t){if(!(e==="entrance")){this.indoor&&this.lighting.apply();for(const o of this.lights)o.visible=!1;this.indoor=!1;return}this.indoor=!0;const s=this.lighting.value;this.sun.intensity=s.sunIntensity*.28,this.sun.color.set("#e8d4a8"),this.sun.position.set(t-4,3.8,3.5),this.sun.target.position.set(t,0,-2),this.ambient.intensity=Math.max(.45,s.ambientIntensity*.65),this.ambient.color.set("#b8b6a1"),this.ambient.groundColor.set("#444c3c"),this.renderer.toneMappingExposure=s.exposure*1.06,this.scene.background.set("#565b50"),this.scene.fog.color.set("#565b50"),this.scene.fog.near=16,this.scene.fog.far=42;const r=Math.floor((t-4)/13)*13+4;this.lights.forEach((o,a)=>{o.visible=!0,o.position.set(r+a*13,3.6,-2.65)})}}function Nc(i,e,t){let n;if(i.visual.traverse(m=>{!n&&m.isSkinnedMesh&&e.test(m.name)&&(n=m)}),!n)return null;const s=n.geometry.attributes.position,r=new ee().copy(i.visual.matrixWorld).invert().multiply(n.matrixWorld),o=new gn,a=new w;for(let m=0;m<s.count;m++)o.expandByPoint(a.fromBufferAttribute(s,m).applyMatrix4(r));const l=o.getSize(new w),u=o.min.clone().add(l.clone().multiply(new w(...t)));let c=0,h=1/0;for(let m=0;m<s.count;m++){a.fromBufferAttribute(s,m).applyMatrix4(r).sub(u);const p=a.x*a.x*3+a.y*a.y*2+a.z*a.z;p<h&&(h=p,c=m)}const d=new w().fromBufferAttribute(s,c).applyMatrix4(n.bindMatrix),f=[];for(let m=0;m<4;m++){const p=n.geometry.attributes.skinWeight.getComponent(c,m),x=n.geometry.attributes.skinIndex.getComponent(c,m);p&&f.push({bone:n.skeleton.bones[x],inverse:n.skeleton.boneInverses[x],weight:p})}const g=new w,_=new ee;return{get(m){m.set(0,0,0);for(const p of f)_.multiplyMatrices(i.posedWorld.get(p.bone)??p.bone.matrixWorld,p.inverse),m.addScaledVector(g.copy(d).applyMatrix4(_),p.weight);return m.applyMatrix4(n.bindMatrixInverse).applyMatrix4(n.matrixWorld)}}}const Na=(i,e,t)=>(t=nt.clamp((t-i)/(e-i),0,1),t*t*(3-2*t));function Kd(i,e,t=null){const n=e==="bottle_smash"?{duration:1.25}:i.userActions?.clips[e];return!n||i.pickup?!1:(i.pickup={kind:e,elapsed:0,duration:n.duration,payload:t,applied:!1},!0)}function fs(i){return i.pickup?Math.min(1,i.pickup.elapsed/i.pickup.duration):0}class Uy{constructor(e,t){this.root=new _t;const n=new we(t.body,t.material("#756033")),s=new we(t.label,t.labelMaterial);n.position.y=-.25,s.position.y=.18-.25,this.root.add(n,s),this.body=n,this.label=s,this.root.scale.setScalar(.65),this.root.visible=!1,e.add(this.root),this.reference=new Ke,this.rotation=new Ke}update(e,t){const n=fs(e),s=e.pickup?.kind==="bottle_smash";if(this.root.visible=t&&(s||e.pickup?.kind==="bottle_pickup")&&n>(s?.08:.22)&&n<(s?.55:.95),!this.root.visible){this.serial=null;return}const r=e.bind.find(d=>d.name==="hand.r"),o=r&&e.posedWorld.get(r.bone);if(!o){this.root.visible=!1;return}o.decompose(this.root.position,this.rotation,new w);const a=new w;let l=0;for(const d of["c_middle2.r","c_ring2.r","c_thumb2.r"]){const f=e.bind.find(_=>_.name===d),g=f&&e.posedWorld.get(f.bone);g&&(a.add(new w().setFromMatrixPosition(g)),l++)}l&&this.root.position.copy(a.divideScalar(l)),this.serial!==e.pickup&&(this.serial=e.pickup,this.reference.copy(this.rotation).invert()),this.anchorActor!==e.visual&&(this.anchorActor=e.visual,this.mouth=Nc(e,/teeth/i,[.5,.55,1]));const u=new w(0,1,0).applyQuaternion(this.rotation.clone().multiply(this.reference)),c=s?Na(.16,.44,n):Na(.35,.49,n)*(1-Na(.8,.94,n));let h=s?.38:.25;if(this.mouth&&c>0){const d=this.mouth.get(new w);s&&(d.y+=.14);const f=s?this.root.position.clone().sub(d):d.sub(this.root.position),g=f.length();if(g>.015){const _=new Ke().setFromUnitVectors(u,f.normalize());u.applyQuaternion(new Ke().slerp(_,c)),s||(h=nt.lerp(.25,nt.clamp(.46-g/.65,.17,.32),c))}}this.body.position.y=-h,this.label.position.y=.18-h,this.root.quaternion.setFromUnitVectors(new w(0,1,0),u.normalize())}}const vs=[{id:"hobo",name:"Свой парень",tag:"Легенда района",description:"Знакомый герой в потёртых джинсах.",model:"hero",height:1.85},{id:"fighter",name:"Патрульный",tag:"По другую сторону",description:"Форма и другой силуэт. Здоровье и урон одинаковы у всех.",model:"enemy",height:1.9}],So=[{id:"original",name:"Оригинал",shirt:"#ffffff",pants:"#ffffff",hat:"#ffffff"},{id:"olive",name:"Хаки",shirt:"#a9b689",pants:"#9aa38d",hat:"#818e6d"},{id:"rust",name:"Ржавчина",shirt:"#c28360",pants:"#ac9d90",hat:"#ba8a61"},{id:"night",name:"Ночной",shirt:"#748fa7",pants:"#7f8c9d",hat:"#8295ab"}],Uh="bomzh:appearance:v1";class Ny{constructor(e){try{this.storage=e??globalThis.localStorage;const t=JSON.parse(this.storage.getItem(Uh));this.character=vs.some(n=>n.id===t?.character)?t.character:"hobo",this.palette=So.some(n=>n.id===t?.palette)?t.palette:"original"}catch{this.character="hobo",this.palette="original"}}set(e,t){if(!vs.some(n=>n.id===e)||!So.some(n=>n.id===t))return!1;this.character=e,this.palette=t;try{this.storage.setItem(Uh,JSON.stringify({character:e,palette:t}))}catch{}return!0}apply(e){const t=So.find(n=>n.id===this.palette);e.visual.traverse(n=>{if(!n.isMesh)return;if(!n.userData.wardrobeMaterials){n.material=Array.isArray(n.material)?n.material.map(o=>o.clone()):n.material.clone(),n.userData.wardrobeMaterials=!0;const r=Array.isArray(n.material)?n.material:[n.material];n.userData.originalColors=r.map(o=>o.color?.clone())}(Array.isArray(n.material)?n.material:[n.material]).forEach((r,o)=>{if(!r.color)return;r.color.copy(n.userData.originalColors[o]);const a=n.name+" "+r.name,l=/shtani|pants|jeans/i.test(a)?t.pants:/hat|shap|cap/i.test(a)?t.hat:/shirt|maika|mayka|tank|uniform/i.test(a)?t.shirt:null;l&&r.color.multiply({isColor:!0,r:parseInt(l.slice(1,3),16)/255,g:parseInt(l.slice(3,5),16)/255,b:parseInt(l.slice(5,7),16)/255})})})}}const Rr=Object.freeze([{id:"classic",name:"Свой парень",price:0,icon:"🧢",description:"Оригинальный образ."},{id:"shades",name:"Тёмные очки",price:60,icon:"🕶️",description:"Круглые очки для серьёзных разборок."},{id:"gold",name:"Король двора",price:180,icon:"👑",description:"Золотые очки и красный шарф."}]),$d="bomzh:wallet:v1",sr=i=>Number.isSafeInteger(i)&&i>=0,Nh=()=>({version:1,coins:0,owned:["classic"],equipped:"classic"});function Fy(i){try{const e=JSON.parse(i.getItem($d));if(e?.version!==1||!sr(e.coins)||!Array.isArray(e.owned))return Nh();const t=[...new Set(["classic",...e.owned.filter(n=>Rr.some(s=>s.id===n))])];return{version:1,coins:e.coins,owned:t,equipped:t.includes(e.equipped)?e.equipped:"classic"}}catch{return Nh()}}class Oy{constructor(e){try{this.storage=e??globalThis.localStorage}catch{}this.profile=Fy(this.storage),this.persistent=!0,this.run=null}save(){try{this.storage.setItem($d,JSON.stringify(this.profile)),this.persistent=!0}catch{this.persistent=!1}}beginRun(e){return this.run={id:e,earned:0,revived:!1,doubled:!1,closed:!1},this.run}earn(e){return!this.run||this.run.closed||!sr(e)||!sr(this.profile.coins+e)||!sr(this.run.earned+e)?!1:(this.profile.coins+=e,this.run.earned+=e,this.save(),!0)}buy(e){const t=Rr.find(n=>n.id===e);return!t||this.profile.owned.includes(e)?{ok:!1,reason:"owned"}:this.profile.coins<t.price?{ok:!1,reason:"funds"}:(this.profile.coins-=t.price,this.profile.owned.push(e),this.profile.equipped=e,this.save(),{ok:!0})}equip(e){return this.profile.owned.includes(e)?(this.profile.equipped=e,this.save(),!0):!1}claim(e,t){const n=this.run;return!n||n.id!==t||n.closed?!1:e==="revive"?n.revived?!1:(n.revived=!0,!0):e==="double"?n.doubled||n.earned===0||!sr(this.profile.coins+n.earned)?!1:(this.profile.coins+=n.earned,n.doubled=!0,n.closed=!0,this.save(),!0):!1}}const Jd=i=>(i=nt.clamp(i,0,1),i*i*(3-2*i)),cs=[[0,[-.27,1.06,.18],[-.12,.96,.27]],[.3,[-.5,1.72,-.28],[-.15,.66,-.74]],[.4,[-.55,1.65,.35],[-.15,.95,.25]],[.52,[-.22,1.18,.77],[.04,-.42,.91]],[.7,[-.22,.98,.62],[.08,-.7,.7]],[1,[-.27,1.06,.18],[-.12,.96,.27]]];function Fh(i=0,e=!1){if(!e)return{wrist:new w(...cs[0][1]),direction:new w(...cs[0][2]).normalize()};const t=nt.clamp(i,0,1);let n=1;for(;n<cs.length-1&&t>cs[n][0];)n++;const s=cs[n-1],r=cs[n],o=Jd((t-s[0])/(r[0]-s[0]));return{wrist:new w(...s[1]).lerp(new w(...r[1]),o),direction:new w(0,1,0).applyQuaternion(new Ke().setFromUnitVectors(new w(0,1,0),new w(...s[2]).normalize()).slerp(new Ke().setFromUnitVectors(new w(0,1,0),new w(...r[2]).normalize()),o))}}function Hl(i,e){return new ee().makeTranslation(...i.toArray()).multiply(new ee().makeRotationFromQuaternion(e)).multiply(new ee().makeTranslation(...i.clone().negate().toArray()))}function Vl(i,e,t,n){const s=A=>i.bind.find(L=>L.name===A+e),r=s("arm_stretch"),o=s("forearm_stretch"),a=s("hand");if(!r||!o||!a)return;const l=A=>new w().setFromMatrixPosition(i.posedWorld.get(A.bone)),u=l(r),c=l(o),h=l(a),d=u.distanceTo(c),f=c.distanceTo(h),g=t.clone().sub(u),_=nt.clamp(g.length(),Math.abs(d-f)+.001,d+f-.002);g.normalize();const m=(d*d-f*f+_*_)/(2*_),p=Math.sqrt(Math.max(0,d*d-m*m)),x=n.clone().sub(u).addScaledVector(g,-n.clone().sub(u).dot(g)).normalize(),y=u.clone().addScaledVector(g,m).addScaledVector(x,p),v=Hl(u,new Ke().setFromUnitVectors(c.clone().sub(u).normalize(),y.clone().sub(u).normalize())),b=h.clone().applyMatrix4(v),M=Hl(y,new Ke().setFromUnitVectors(b.sub(y).normalize(),u.clone().addScaledVector(g,_).sub(y).normalize()));for(const A of i.bind){if(!A.name.endsWith(e))continue;const L=i.posedWorld.get(A.bone);L&&(/^(?:arm_stretch|c_arm_twist_offset)/.test(A.name)?L.premultiply(v):/^(?:forearm|hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/.test(A.name)&&L.premultiply(v).premultiply(M))}}function Oh(i,e,t){const n=Fh(e,t),s=a=>i.root.localToWorld(a.clone());Vl(i,".r",s(n.wrist),s(new w(-.65,1.12,.12))),Vl(i,".l",s(new w(.24,1.14,.25)),s(new w(.6,.97,-.05)));const r=i.bind.find(a=>a.name==="hand.r"),o=r&&i.posedWorld.get(r.bone);if(o){if(!i.weaponReferenceRotation){const d=i.userActions,f=d?.bones.indexOf("hand.r"),g=d?new ee().fromArray(d.clips.idle.frames[0],f*16).multiply(r.matrix):r.matrix.clone();i.weaponReferenceRotation=new Ke,g.decompose(new w,i.weaponReferenceRotation,new w)}const a=new Ke;o.decompose(new w,a,new w);const l=Fh().direction,u=new Ke().setFromUnitVectors(l,n.direction),c=i.root.getWorldQuaternion(new Ke).multiply(u).multiply(i.weaponReferenceRotation),h=Hl(new w().setFromMatrixPosition(o),c.multiply(a.invert()));for(const d of i.bind)d.name.endsWith(".r")&&/^(?:hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/.test(d.name)&&i.posedWorld.get(d.bone)?.premultiply(h)}i.weaponDirection=n.direction}function kh(i,e){const t=[[0,[-.27,1.06,.18]],[.28,[-.58,1.82,.08]],[.54,[-.29,1.8,.13]],[.66,[-.48,1.82,.15]],[1,[-.27,1.06,.18]]];let n=1;for(;n<t.length-1&&e>t[n][0];)n++;const s=t[n-1],r=t[n],o=Jd((e-s[0])/(r[0]-s[0])),a=new w(...s[1]).lerp(new w(...r[1]),o);a.multiplyScalar((i.height??1.85)/1.85),Vl(i,".r",i.root.localToWorld(a),i.root.localToWorld(new w(-.75,1.35,.05)))}function ky(i){const e=new Map((i.bind??[]).map(t=>[t.name,t.bone]));i.ikLegs=new Map;for(const t of["l","r"]){const n=e.get("thigh_stretch."+t),s=e.get("leg_stretch."+t),r=e.get("foot."+t);if(!n||!s||!r)continue;const o={upper:[],lower:[],foot:[]};for(const a of i.bind)a.name.endsWith("."+t)&&(/^(?:c_)?thigh(?:_|\.)/.test(a.name)?o.upper.push(a.bone):/^(?:c_)?leg(?:_|\.)/.test(a.name)?o.lower.push(a.bone):/^(?:c_)?(?:foot|toe)/.test(a.name)&&o.foot.push(a.bone));i.ikLegs.set(t,{hip:n,knee:s,ankle:r,groups:o})}}function Bh(i,e,t,n){const s=new Ke().setFromUnitVectors(e.clone().sub(i).normalize(),n.clone().sub(t).normalize());return new ee().makeTranslation(t.x,t.y,t.z).multiply(new ee().makeRotationFromQuaternion(s)).multiply(new ee().makeTranslation(-i.x,-i.y,-i.z))}function By(i,e,t){const n=i.ikLegs.get(e),s=i.posedWorld;if(!n||Math.abs(t)<1e-7)return!1;const r=new w().setFromMatrixPosition(s.get(n.hip)),o=new w().setFromMatrixPosition(s.get(n.knee)),a=new w().setFromMatrixPosition(s.get(n.ankle)),l=a.clone();l.y+=t;const u=r.distanceTo(o),c=o.distanceTo(a),h=u+c-1e-5;if(u<1e-5||c<1e-5)return!1;const d=l.y-r.y;if(Math.abs(d)>h)return!1;const f=new pe(l.x-r.x,l.z-r.z),g=Math.sqrt(Math.max(0,h*h-d*d));f.length()>g&&(f.setLength(g),l.x=r.x+f.x,l.z=r.z+f.y);const _=l.clone().sub(r),m=_.length();_.normalize();const p=new w(0,0,1).applyQuaternion(i.root.quaternion);if(p.addScaledVector(_,-p.dot(_)),p.lengthSq()<1e-8)return!1;p.normalize();const x=(u*u-c*c+m*m)/(2*m),y=Math.sqrt(Math.max(0,u*u-x*x)),v=r.clone().addScaledVector(_,x).addScaledVector(p,y),b={upper:Bh(r,o,r,v),lower:Bh(o,a,v,l),foot:new ee().makeTranslation(l.x-a.x,l.y-a.y,l.z-a.z)};for(const M of["upper","lower","foot"])for(const A of n.groups[M])s.has(A)&&s.get(A).premultiply(b[M]);return!0}function zy(i){const e=[];i.visual.traverse(n=>{n.isSkinnedMesh&&/shoe|boot/i.test(n.name)&&e.push(n)});let t=1/0;i.groundSamples=[],i.groundJoints=new Map,i.groundPrefixes=new Map;for(const n of e){const s=n.geometry.attributes.position,r=[];let o=1/0;for(let c=0;c<s.count;c++){const h=new w().fromBufferAttribute(s,c).applyMatrix4(n.matrixWorld);o=Math.min(o,h.y),r.push(h)}t=Math.min(t,o);const a=r.map((c,h)=>({p:c,i:h})).filter(c=>c.p.y<=o+.025),l=new Set;for(const[c,h]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]){let d=a[0],f=-1/0;for(const g of a){const _=g.p.x*c+g.p.z*h;_>f&&(f=_,d=g)}d&&l.add(d.i)}let u=0;for(let c=1;c<r.length;c++)r[c].y<r[u].y&&(u=c);l.add(u),i.groundPrefixes.set(n,new ee);for(const c of l){const h=[];for(let f=0;f<4;f++){const g=n.geometry.attributes.skinIndex.getComponent(c,f),_=n.geometry.attributes.skinWeight.getComponent(c,f);if(!_)continue;const m=n.skeleton.bones[g];let p=i.groundJoints.get(m);p||(p={bone:m,inverse:n.skeleton.boneInverses[g],matrix:new ee},i.groundJoints.set(m,p)),h.push({joint:p,weight:_})}const d={l:0,r:0};for(const f of h){const g=f.joint.bone.userData.name??f.joint.bone.name;g.endsWith(".l")&&(d.l+=f.weight),g.endsWith(".r")&&(d.r+=f.weight)}i.groundSamples.push({mesh:n,side:d.l>d.r?"l":"r",position:new w().fromBufferAttribute(s,c).applyMatrix4(n.bindMatrix),joints:h})}}i.groundScratch={p:new w,v:new w},i.stableGroundOffset=Number.isFinite(t)?-t-.035:0,ky(i)}function Zd(i){if(!i.groundSamples?.length)return{l:1/0,r:1/0};for(const[s,r]of i.groundPrefixes)r.multiplyMatrices(s.matrixWorld,s.bindMatrixInverse);for(const s of i.groundJoints.values())s.matrix.multiplyMatrices(i.posedWorld.get(s.bone)??s.bone.matrixWorld,s.inverse);const{p:e,v:t}=i.groundScratch,n={l:1/0,r:1/0};for(const s of i.groundSamples){t.set(0,0,0);for(const{joint:r,weight:o}of s.joints)t.addScaledVector(e.copy(s.position).applyMatrix4(r.matrix),o);t.applyMatrix4(i.groundPrefixes.get(s.mesh)),n[s.side]=Math.min(n[s.side],t.y)}return n}function Fa(i){const e=Zd(i),t=Math.min(e.l,e.r);return Number.isFinite(t)?t:null}function Oa(i,e){for(const t of i.posedWorld.values())t.elements[13]+=e}function zh(i,e=0,{kind:t=null,time:n=0}={}){const s=Fa(i);if(s===null||i.health<=0||i.down>0||Math.abs(i.root.rotation.z)>.3){i.feetY=null;return}if(!t&&i.userActions){const o=e-s,a=Math.max(0,Math.min(.05,n-(i.groundTime??n))),l=i.groundOffset??o,u=Math.max(-.072*a,Math.min(.072*a,(o-l)*(1-Math.exp(-12*a)))),c=i.transitionFrom&&n-(i.transitionStart??-1/0)<.14?o:l+u;Oa(i,c),i.groundOffset=c,i.groundTime=n,i.groundMode="authored",i.feetY=Fa(i);return}if(!t&&i.ikLegs?.size===2){const o=i.stableGroundOffset+e;i.groundMode!=="stable"&&(i.groundMode="stable",i.groundBlendStart=n,i.groundBlendFrom=i.groundOffset??o);const a=Math.min(1,Math.max(0,(n-i.groundBlendStart)/.16)),l=a*a*(3-2*a),u=i.groundBlendFrom+(o-i.groundBlendFrom)*l;Oa(i,u),i.groundOffset=u;for(let c=0;c<3;c++){const h=Zd(i),d=Math.min(h.l,h.r);for(const f of["l","r"]){const g=h[f];if(!Number.isFinite(g))continue;const _=Math.min(1,Math.max(0,(g-d)/.05)),m=g<e?1:1-_*_*(3-2*_);By(i,f,(e-g)*m)}}i.feetY=Fa(i);return}i.groundTime=n,i.groundMode="pose";const r=e-s;Oa(i,r),i.groundOffset=r,i.feetY=e}const Hh=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)),Vh=(i,e,t)=>i+(e-i)*t,Gl={left:[-.5,-1.15,-.06,.08],right:[-.65,-1.05,.06,.08],lean:0,twist:0,drop:0,spin:0};function Hy(i,e,t){const n={};for(const s of["left","right"])n[s]=i[s].map((r,o)=>Vh(r,e[s][o],Hh(t)));for(const s of["lean","twist","drop","spin"])n[s]=Vh(i[s]??0,e[s]??0,Hh(t));return n}const dt=(i={})=>({...Gl,...i});function Wl(i,e,t,n=0,s=1){if(!t){const u=dt({left:[...Gl.left],right:[...Gl.right]});if(e)for(const[c,h]of["left","right"].entries()){const d=Math.sin(i*9+c*Math.PI);u[h][0]+=.25*d,u[h][1]+=.15*Math.max(0,-d),u[h][2]=.42*d,u[h][3]=.55*Math.max(0,d)}return u.drop=e?-.008*Math.abs(Math.sin(i*9)):-.005*(1+Math.sin(i*2)),u}const r=s%2===0?"right":"left";let o;t==="finisher"?o=[[0,dt()],[.22,dt({right:[-.15,-.7,.18,.3],left:[-.6,-1.3,-.18,.25],twist:-.3,drop:-.08})],[.37,dt({right:[.15,-1.5,.2,.45],left:[-.8,-1.4,-.25,.3],twist:-.55,lean:.18,drop:-.16})],[1.3/2.8,dt({right:[-1.8,-.15,.15,.12],left:[-.65,-1.2,-.2,.2],twist:.55,lean:-.12,drop:.06})],[.58,dt({right:[-1.75,-.2,.15,.12],twist:.4,lean:-.1,drop:.04})],[.86,dt()],[1,dt()]]:t==="burp"?o=[[0,dt()],[.24,dt({lean:-.18,drop:-.025})],[.4,dt({lean:.38,twist:.1,left:[-.1,-.8,-.06,.08],right:[-.1,-.8,.06,.08]})],[.68,dt({lean:.18})],[1,dt()]]:t==="jab"?o=[[0,dt()],[.25,dt({[r]:[-.15,-1.9,0,.12],twist:-.25,drop:-.025})],[.43,dt({[r]:[-1.65,-.08,-.1,.1],twist:.3,lean:.12})],[.58,dt({[r]:[-1.55,-.12,-.1,.1],twist:.23,lean:.1})],[1,dt()]]:t==="kick"?o=[[0,dt()],[.28,dt({left:[-.9,-1.3,-1,.95],right:[-.2,-1.4,.12,.08],lean:-.12,drop:-.04})],[.48,dt({left:[-.2,-1.25,-1.6,.05],right:[-.85,-1.2,.1,.08],lean:-.25})],[.62,dt({left:[-.2,-1.25,-1.5,.08],lean:-.2})],[.8,dt({left:[-.6,-1.3,-.85,.85],lean:-.1})],[1,dt()]]:o=[[0,dt()],[.2,dt({left:[.15,-1.35,-.12,.18],right:[.15,-1.35,.12,.18],lean:-.12,drop:-.04})],[.8,dt({left:[.15,-1.35,-.12,.18],right:[.15,-1.35,.12,.18],lean:-.12,drop:-.04})],[1,dt()]];const a=Math.max(0,Math.min(1,n));let l=1;for(;l<o.length-1&&a>o[l][0];)l++;return Hy(o[l-1][1],o[l][1],(a-o[l-1][0])/(o[l][0]-o[l-1][0]))}const Vy=/forearm|hand|thumb|index|middle|ring|pinky|pinkie/i,Gy=/arm|shoulder|hand|thumb|index|middle|ring|pinky|pinkie/i,Wy=/thigh|leg|foot|toe/i,Xy=/leg|foot|toe/i;function ka(i,e=0,t=0,n=0){return new ee().makeTranslation(i.x,i.y,i.z).multiply(new ee().makeRotationFromEuler(new on(e,t,n))).multiply(new ee().makeTranslation(-i.x,-i.y,-i.z))}function qy(i){i.root.updateMatrixWorld(!0);const e=i.visual.matrixWorld.clone().invert();i.bind=i.bones.map(({bone:s})=>{const r=s.userData.name??s.name;return{bone:s,name:r,matrix:new ee().multiplyMatrices(e,s.matrixWorld),side:r.endsWith(".l")?"left":"right",group:Gy.test(r)?Vy.test(r)?"forearm":"arm":Wy.test(r)?Xy.test(r)?"shin":"leg":"body"}});const t=(s,r)=>{const o=i.bind.find(a=>a.name===s);return o?new w().setFromMatrixPosition(o.matrix):r};i.pivots={hips:t("root.x",new w(0,.5,0))};for(const[s,r]of[["left",".l"],["right",".r"]])i.pivots[s]={shoulder:t("arm"+r,new w),elbow:t("forearm"+r,new w),hip:t("thigh"+r,new w),knee:t("leg"+r,new w),wrist:t("hand"+r,new w)};for(const s of i.bind){const r=s.name.match(/(thumb|index|middle|ring|pinky)([123])(?:_base|_rot)?\.([lr])/);if(s.curledMatrix=s.matrix.clone(),!r)continue;const o=new ee;for(let a=1;a<=Number(r[2]);a++){const l=i.bind.find(f=>f.name===`c_${r[1]}${a}.${r[3]}`);if(!l)continue;const u=new w,c=new Ke,h=new w;l.matrix.decompose(u,c,h);const d=new ee().compose(u,c,new w(1,1,1));o.multiply(d).multiply(new ee().makeRotationX(r[1]==="thumb"?.45:1.15)).multiply(d.clone().invert())}s.curledMatrix.premultiply(o)}i.rigid=[],i.visual.traverse(s=>{if(s.isMesh&&!s.isSkinnedMesh){let r=s.parent;for(;r&&!r.isBone;)r=r.parent;i.rigid.push({mesh:s,parentBoneName:r?r.userData.name??r.name:null,matrix:new ee().multiplyMatrices(e,s.matrixWorld)}),s.matrixAutoUpdate=!1}}),i.posedWorld=new Map;const n=new Set;i.visual.traverse(s=>{s.isSkinnedMesh&&n.add(s.skeleton)});for(const s of n){const r=new ee;s.update=function(){for(let o=0;o<this.bones.length;o++){const a=i.posedWorld.get(this.bones[o])??this.bones[o].matrixWorld;r.multiplyMatrices(a,this.boneInverses[o]).toArray(this.boneMatrices,o*16)}this.boneTexture&&(this.boneTexture.needsUpdate=!0)}}i.animationScratch={desired:new ee},zy(i)}function ri(i,e,t,n,s){const r=i.weaponType&&!i.userActions?.clips.weapon_idle&&(!n||n==="jab")&&!(i.dodge>0)&&!(i.hurt>0),o=ly(i,e,t,n==="bottle_smash"||r&&n==="jab"?null:n,s);if(o)return n==="bottle_smash"&&(kh(i,s),_s(i,"weapon_idle")),r&&(Oh(i,s,n==="jab"),_s(i)),wh(i,e,n==="bottle_smash"?"bottle-smash":r?n==="jab"?"weapon-strike:"+i.attackSerial:"weapon-"+o:o),zh(i,0,{kind:o==="dodge"?"dodge":n,time:e}),Eh(i),Wl(e,t,n,s,i.combo??1);const a=t&&Number.isFinite(i.walkDistance)?i.walkDistance/(i.walkStride??(i.height??1.85)*.65)*(2*Math.PI/9):e,l=Wl(a,t,n,s,i.combo??1);i.dodge>0&&(l.drop-=.12,l.lean+=.25),i.visual.position.y=i.baseVisualY+l.drop,i.root.updateMatrixWorld(!0);const u=Math.max(i.flash??0,i.hurt??0),c=ka(i.pivots.hips,l.lean-u*1.7,l.twist),h={body:c};for(const f of["left","right"]){const g=l[f],_=i.pivots[f],m=f==="left"?1:-1,p=new w(m*.16,-Math.cos(g[0]),-Math.sin(g[0])).normalize(),x=new w(m*.12,-Math.cos(g[0]+g[1]),-Math.sin(g[0]+g[1])).normalize(),y=new Ke().setFromUnitVectors(_.elbow.clone().sub(_.shoulder).normalize(),p),v=new Ke().setFromUnitVectors(_.wrist.clone().sub(_.elbow).normalize(),x.applyQuaternion(y.clone().invert())),b=(M,A)=>new ee().makeTranslation(M.x,M.y,M.z).multiply(new ee().makeRotationFromQuaternion(A)).multiply(new ee().makeTranslation(-M.x,-M.y,-M.z));h["arm"+f]=c.clone().multiply(b(_.shoulder,y)),h["forearm"+f]=h["arm"+f].clone().multiply(b(_.elbow,v)),h["leg"+f]=ka(_.hip,g[2]),h["shin"+f]=h["leg"+f].clone().multiply(ka(_.knee,g[3]))}const{desired:d}=i.animationScratch;for(const f of i.bind){d.copy(i.visual.matrixWorld).multiply(h[f.group==="body"?"body":f.group+f.side]).multiply(f.curledMatrix);let g=i.posedWorld.get(f.bone);g||(g=new ee,i.posedWorld.set(f.bone,g)),g.copy(d)}if(r){Oh(i,s,n==="jab");const f=n==="jab"?"weapon-strike:"+i.attackSerial:"weapon-carry";i.motionId!==f&&(i.motionId=f,i.transitionStart=e)}return n==="bottle_smash"&&kh(i,s),_s(i),wh(i,e,n??(t?"walk":"fallback-idle")),zh(i,0,{kind:n,time:e}),Eh(i),l}class Qd{constructor(e){this.actor=e,this.root=new _t,e.root.add(this.root),this.skin=null,this.head=e.bind.find(t=>t.name==="head.x")??e.bind.find(t=>t.name==="head")}set(e){if(e===this.skin)return;this.skin=e;for(const s of[...this.root.children])this.root.remove(s),s.geometry.dispose(),s.material.dispose();if(e==="classic")return;const t=(s,r,o,a,l)=>{const u=new we(s,new Mt({color:r,roughness:.55}));return u.position.set(o,a,l),this.root.add(u),u};this.actor.root.updateMatrixWorld(!0);const n=this.head?new w().setFromMatrixPosition(this.actor.visual.matrixWorld.clone().multiply(this.head.matrix)).applyMatrix4(this.actor.root.matrixWorld.clone().invert()):new w(0,1.55,0);for(const s of[-.1,.1])t(new Wi(.087,.018,6,16),e==="gold"?"#edbc40":"#242928",n.x+s,n.y+.08,n.z+.17),t(new Ar(.07,16),"#243d3c",n.x+s,n.y+.08,n.z+.171);t(new Kt(.07,.025,.025),e==="gold"?"#edbc40":"#242928",n.x,n.y+.08,n.z+.17),e==="gold"&&(t(new Wi(.14,.045,6,20),"#bb3e32",n.x,n.y-.17,n.z).rotation.x=Math.PI/2,t(new Kt(.095,.3,.035),"#bb3e32",n.x-.1,n.y-.32,n.z+.12))}update(){if(!this.head||!this.root.children.length)return;const e=this.actor,t=e.posedWorld.get(this.head.bone);if(!t)return;const n=e.visual.matrixWorld.clone().multiply(this.head.matrix);this.root.matrixAutoUpdate=!1,this.root.matrix.copy(e.root.matrixWorld).invert().multiply(t).multiply(n.invert()).multiply(e.root.matrixWorld),this.root.updateWorldMatrix(!1,!0)}}class jy{constructor({renderer:e,wallet:t,appearance:n,makeActor:s,onStart:r,onOpen:o,record:a}){Object.assign(this,{renderer:e,wallet:t,appearance:n,makeActor:s,onStart:r,onOpen:o,record:a}),this.root=document.getElementById("main-menu"),this.visible=!1,this.tab="home",this.previewSkin=t.profile.equipped,this.scene=new dc,this.scene.background=null,this.scene.add(new Dd(15985104,2634795,2.5));const l=new No(16769978,3);l.position.set(-3,5,4),this.scene.add(l);const u=new No(10205376,2);u.position.set(3,3,-2),this.scene.add(u),this.camera=new Yt(33,1,.1,30),this.camera.position.set(3,1.7,5.2),this.camera.lookAt(0,1,0),this.time=0;const c=new we(new jn(1.05,1.15,.08,40),new Mt({color:3620659,roughness:1}));c.position.y=-.06,this.scene.add(c),this.root.querySelectorAll("[data-menu-tab]").forEach(h=>h.onclick=()=>{this.tab=h.dataset.menuTab,this.renderUI()}),document.getElementById("menu-play").onclick=()=>{this.hide(),r()},document.getElementById("menu-turn").oninput=h=>{this.rotation=Number(h.target.value)},this.changeActor()}changeActor(){if(this.actor){this.cosmetics.set("classic"),this.scene.remove(this.actor.root);const t=new Set;this.actor.visual.traverse(n=>{if(n.isSkinnedMesh&&t.add(n.skeleton),n.isMesh&&n.userData.wardrobeMaterials)for(const s of Array.isArray(n.material)?n.material:[n.material])s.dispose()});for(const n of t)n.dispose()}const e=vs.find(t=>t.id===this.appearance.character);this.actor=this.makeActor(e),this.scene.add(this.actor.root),this.appearance.apply(this.actor),this.cosmetics=new Qd(this.actor),this.cosmetics.set(this.previewSkin),this.rotation=.1,document.getElementById("menu-turn").value=.1}show(){this.visible=!0,this.root.hidden=!1,document.body.classList.add("in-main-menu"),this.previewSkin=this.wallet.profile.equipped,this.cosmetics.set(this.previewSkin),this.onOpen(),this.renderUI(),document.getElementById("menu-play").focus()}hide(){this.visible=!1,this.root.hidden=!0,document.body.classList.remove("in-main-menu")}renderUI(){const e=o=>document.getElementById(o);e("menu-coins").textContent=this.wallet.profile.coins,e("menu-record").textContent=this.record().levels,e("menu-character-title").textContent=vs.find(o=>o.id===this.appearance.character).name,this.root.querySelectorAll("[data-menu-tab]").forEach(o=>{o.classList.toggle("active",o.dataset.menuTab===this.tab),o.setAttribute("aria-selected",String(o.dataset.menuTab===this.tab))}),this.root.classList.toggle("menu-is-home",this.tab==="home"),this.root.querySelectorAll("[data-menu-page]").forEach(o=>o.hidden=o.dataset.menuPage!==this.tab);const t=e("character-options");t.replaceChildren();for(const o of vs){const a=document.createElement("button");a.className="character-option"+(o.id===this.appearance.character?" selected":""),a.innerHTML=`<span>${o.tag}</span><strong>${o.name}</strong><small>${o.description}</small><em>${o.id===this.appearance.character?"ВЫБРАН":"ВЫБРАТЬ"}</em>`,a.onclick=()=>{this.appearance.set(o.id,this.appearance.palette),this.changeActor(),this.renderUI()},t.append(a)}const n=e("wardrobe-colors");n.replaceChildren();for(const o of So){const a=document.createElement("button");a.textContent=o.name,a.className=o.id===this.appearance.palette?"selected":"",a.style.setProperty("--swatch",o.shirt),a.onclick=()=>{this.appearance.set(this.appearance.character,o.id),this.appearance.apply(this.actor),this.renderUI()},n.append(a)}const s=e("wardrobe-accessories");s.replaceChildren();for(const o of Rr.filter(a=>this.wallet.profile.owned.includes(a.id))){const a=document.createElement("button");a.textContent=o.icon+" "+o.name,a.className=this.wallet.profile.equipped===o.id?"selected":"",a.onclick=()=>{this.wallet.equip(o.id),this.previewSkin=o.id,this.cosmetics.set(o.id),this.renderUI()},s.append(a)}const r=e("menu-shop-items");r.replaceChildren();for(const o of Rr){const a=document.createElement("article");a.className="menu-shop-item";const l=this.wallet.profile.owned.includes(o.id),u=this.wallet.profile.equipped===o.id;a.innerHTML=`<span class="shop-icon">${o.icon}</span><div><strong>${o.name}</strong><p>${o.description}</p></div>`;const c=document.createElement("button");c.textContent="Примерить",c.onclick=()=>{this.previewSkin=o.id,this.cosmetics.set(o.id),e("menu-status").textContent=l?"Образ на примерке. Нажми «Надеть», чтобы сохранить.":"Примерка — покупка ещё не совершена."};const h=document.createElement("button");h.textContent=u?"Надето":l?"Надеть":`${o.price} · Купить`,h.disabled=u||!l&&this.wallet.profile.coins<o.price,h.onclick=()=>{(l?this.wallet.equip(o.id):this.wallet.buy(o.id).ok)&&(this.previewSkin=o.id,this.cosmetics.set(o.id),e("menu-status").textContent=l?"Образ сохранён.":"Куплено и надето.",this.renderUI())},a.append(c,h),r.append(a)}}render(e,t){if(this.time+=e,this.tab==="home"){t();return}if(!this.actor)return;this.actor.root.rotation.y=this.rotation??.1,ri(this.actor,this.time,!1,null,0),this.cosmetics.update();const n=document.getElementById("menu-stage").getBoundingClientRect(),s=innerWidth,r=innerHeight;this.camera.aspect=Math.max(.1,n.width/n.height),this.camera.updateProjectionMatrix();const o=this.renderer;t();const a=o.autoClear;o.autoClear=!1,o.clearDepth(),o.setScissor(n.left,r-n.bottom,n.width,n.height),o.setViewport(n.left,r-n.bottom,n.width,n.height),o.setScissorTest(!0),o.render(this.scene,this.camera),o.setScissorTest(!1),o.setViewport(0,0,s,r),o.autoClear=a}}const Yy=30;class Ky{constructor(e){this.scene=e,this.chunks=new Map,this.box=new Kt(.36,.24,.22),this.stripe=new Kt(.06,.14,.012),this.caseMaterial=new Mt({color:14144441,roughness:.85}),this.red=new Mt({color:11353904,roughness:.75}),this.ring=new hi(.24,.28,24),this.highlight=new Ft({color:10275475,transparent:!0,opacity:.7,depthWrite:!1,side:Lt})}make(e){const t=new _t,n=new we(this.box,this.caseMaterial);n.position.y=.15,n.castShadow=!0,t.add(n);for(const o of[0,Math.PI/2]){const a=new we(this.stripe,this.red);a.position.set(0,.15,.117),a.rotation.z=o,t.add(a)}const s=new we(this.ring,this.highlight);s.rotation.x=-Math.PI/2,s.position.y=.018,t.add(s);const r={x:e*26+12,z:Math.sin(e*1.8)*1.25,mesh:t,taken:!1};return t.position.set(r.x,0,r.z),this.scene.add(t),r}update(e,t,n=!0){const s=Math.floor(e.x/26);for(let r=s-1;r<=s+2;r++)this.chunks.has(r)||this.chunks.set(r,this.make(r));for(const[r,o]of this.chunks)Math.abs(r-s)>2&&(this.scene.remove(o.mesh),this.chunks.delete(r));if(!n||t>=100)return 0;for(const r of this.chunks.values())if(!r.taken&&Math.hypot(e.x-r.x,e.z-r.z)<.65)return r.taken=!0,r.mesh.visible=!1,Math.min(Yy,100-t);return 0}debug(){return[...this.chunks.values()].filter(e=>!e.taken).map(({x:e,z:t})=>({x:e,z:t}))}}class $y{constructor(e){this.scene=e,this.visible=!0,this.chunks=new Map,this.body=new jn(.29,.27,.72,12,1,!0),this.band=new Wi(.286,.018,4,12),this.floor=new Ar(.27,12),this.steel=new Mt({color:7622715,roughness:.95,metalness:.35,side:Lt}),this.rim=new Mt({color:3423025,roughness:.8,metalness:.6}),this.coals=new Ft({color:15426587,side:Lt}),this.flameGeometry=new an(.68,1.05),this.fire=new Bn({transparent:!0,depthWrite:!1,side:Lt,blending:Co,uniforms:{time:{value:0}},vertexShader:"varying vec2 vUv; varying float seed; void main(){vUv=uv;seed=modelMatrix[3].x;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;varying float seed;uniform float time;void main(){float y=vUv.y;float wave=sin(y*13.-time*7.+seed)*.08*y+sin(y*23.+time*4.)*.035;float width=(1.-y)*.44;float edge=1.-smoothstep(width*.3,width,abs(vUv.x-.5+wave));float lick=.65+.35*sin(y*19.-time*9.+seed);float alpha=edge*(1.-smoothstep(.25,1.,y))*smoothstep(0.,.07,y)*lick;vec3 color=mix(vec3(1.,.16,.015),vec3(1.,.85,.24),pow(1.-y,2.));gl_FragColor=vec4(color,alpha*.85);}"}),this.glow=new Ft({color:15628837,transparent:!0,opacity:.13,depthWrite:!1,blending:Co}),this.glowGeometry=new Ar(.9,20)}make(e){const t=new _t;t.visible=this.visible,t.position.set(e*26+22.5,0,-2.95);const n=new we(this.body,this.steel);n.position.y=.38,n.castShadow=!0,t.add(n);for(const o of[.08,.3,.57,.74]){const a=new we(this.band,this.rim);a.rotation.x=Math.PI/2,a.position.y=o,t.add(a)}const s=new we(this.floor,this.coals);s.rotation.x=-Math.PI/2,s.position.y=.68,t.add(s);for(const o of[0,Math.PI/2]){const a=new we(this.flameGeometry,this.fire);a.position.y=1.18,a.rotation.y=o,t.add(a)}const r=new we(this.glowGeometry,this.glow);return r.rotation.x=-Math.PI/2,r.position.y=.015,t.add(r),this.scene.add(t),t}setVisible(e){this.visible=e;for(const t of this.chunks.values())t.visible=e}update(e,t){this.fire.uniforms.time.value=t;const n=Math.floor(e/26);for(let s=n-1;s<=n+2;s++)this.chunks.has(s)||this.chunks.set(s,this.make(s));for(const[s,r]of this.chunks)Math.abs(s-n)>2&&(this.scene.remove(r),this.chunks.delete(s))}}const Hi={bottle:{label:"Розочка",damage:28,range:1.35,uses:6,color:6649418,length:.38},crowbar:{label:"Лом",damage:30,range:2.05,uses:12,color:6847099,length:.85},stick:{label:"Палка",damage:23,range:2.4,uses:8,color:8938046,length:1.12},rebar:{label:"Арматура",damage:36,range:2.2,uses:10,color:8935484,length:1.02}};function Jy(i,e){const t=Hi[i];return t?{...e,duration:.84,cooldown:.84,hitAt:.52,damage:t.damage,range:t.range,weapon:i}:e}class Zy{constructor(e){this.scene=e,this.chunks=new Map,this.equipped=null,this.held=null,this.nearby=null,this.point=new w,this.quaternion=new Ke,this.scale=new w,this.grip=new Ke().setFromEuler(new on(0,0,-Math.PI/2)),this.materials=new Map,this.geometries=new Map}model(e){if(e==="bottle")return this.brokenBottle();const t=Hi[e],n=new _t;let s=this.materials.get(e);s||(s=new Mt({color:t.color,roughness:.85,metalness:e==="stick"?0:.65}),this.materials.set(e,s));const r=(o,a,l=0,u=0,c=0)=>{const h=`${o}:${a}`;this.geometries.has(h)||this.geometries.set(h,new jn(a,a,o,8));const d=new we(this.geometries.get(h),s);d.position.set(l,u,0),d.rotation.z=c,d.castShadow=!0,n.add(d)};if(r(t.length,e==="stick"?.035:.018,0,t.length/2-.12),e==="crowbar"&&(r(.18,.018,.07,t.length-.12,-1.05),r(.1,.023,-.025,-.13,.55)),e==="rebar")for(let o=0;o<10;o++)r(.065,.009,0,o*.085,-.75);return n}update(e){const t=Math.floor(e.x/26);for(let s=t-1;s<=t+2;s++)if(!this.chunks.has(s)){const r=[];for(let o=0;o<2;o++){const a=["crowbar","stick","rebar"][((s*2+o)%3+3)%3],l=s*26+(o?20:5),u=o?-.65:.5,c=this.model(a);c.position.set(l,.055,u),c.rotation.set(0,.45,Math.PI/2),this.scene.add(c),r.push({type:a,x:l,z:u,mesh:c,taken:!1})}this.chunks.set(s,r)}for(const[s,r]of this.chunks)if(Math.abs(s-t)>2){for(const o of r)this.scene.remove(o.mesh);this.chunks.delete(s)}this.nearby=null;let n=.95;for(const s of this.chunks.values())for(const r of s){if(r.taken)continue;const o=Math.hypot(e.x-r.x,e.z-r.z);o<n&&(n=o,this.nearby=r)}}brokenBottle(){const e=new _t;if(this.materials.has("bottle")||this.materials.set("bottle",new Mt({color:6649418,roughness:.3,side:Lt})),!this.geometries.has("broken-bottle")){const n=[],s=[],o=[[-.12,.028],[.03,.028],[.1,.068],[.22,.075]];for(let l=0;l<4;l++)for(let u=0;u<12;u++){const c=u/12*Math.PI*2;n.push(Math.cos(c)*o[l][1],o[l][0]+(l===3?(u%2?.09:.015)+u%3*.013:0),Math.sin(c)*o[l][1])}for(let l=0;l<3;l++)for(let u=0;u<12;u++){const c=l*12+u,h=l*12+(u+1)%12;s.push(c,h,c+12,h,h+12,c+12)}const a=new xt;a.setAttribute("position",new ze(n,3)),a.setIndex(s),a.computeVertexNormals(),this.geometries.set("broken-bottle",a)}const t=new we(this.geometries.get("broken-bottle"),this.materials.get("bottle"));return t.castShadow=!0,e.add(t),e}equip(e){return Hi[e]?(this.held&&this.scene.remove(this.held),this.equipped={type:e,uses:Hi[e].uses},this.held=this.model(e),this.scene.add(this.held),this.nearby=null,Hi[e].label):null}pickup(e=this.nearby){return!e||e.taken?null:(e.taken=!0,e.mesh.visible=!1,this.equip(e.type))}wear(){return!this.equipped||--this.equipped.uses>0?!1:(this.equipped=null,this.held&&this.scene.remove(this.held),this.held=null,!0)}pose(e,t=!1){if(!this.held||(this.held.visible=!t,t))return;this.hand??=e.bind.find(a=>a.name==="hand.r")?.bone;const n=e.posedWorld.get(this.hand);if(!n){this.held.visible=!1;return}if(!this.palmOffset){const a=e.bind.find(g=>g.bone===this.hand),l=e.userActions,u=l?.clips.idle.frames[0],c=g=>l?new ee().fromArray(u,l.bones.indexOf(g.name)*16).multiply(g.matrix):g.matrix.clone(),h=c(a),d=new w;let f=0;for(const g of["c_middle2.r","c_ring2.r","c_thumb2.r"]){const _=e.bind.find(m=>m.name===g);_&&(!l||l.bones.includes(g))&&(d.add(new w().setFromMatrixPosition(c(_))),f++)}this.palmOffset=(f?d.divideScalar(f):new w().setFromMatrixPosition(h)).applyMatrix4(h.clone().invert())}if(n.decompose(this.point,this.quaternion,this.scale),this.held.position.copy(this.palmOffset).applyMatrix4(n),e.userActions?.weaponGrip&&e.weaponType){const a=new w(...e.userActions.weaponGrip.axis).normalize();this.held.quaternion.copy(this.quaternion).multiply(new Ke().setFromUnitVectors(new w(0,1,0),a));return}const s=e.weaponDirection??new w(-.12,.96,.27),r=new Ke().setFromUnitVectors(new w(0,1,0),s.clone().transformDirection(e.root.matrixWorld));this.orientationSerial!==e.motionId&&(this.fromOrientation=this.held.quaternion.clone(),this.orientationSerial=e.motionId);const o=nt.clamp((e.animationTime-(e.transitionStart??-1))/.12,0,1);this.held.quaternion.copy(this.fromOrientation??r).slerp(r,o*o*(3-2*o))}debug(){return{equipped:this.equipped?{...this.equipped}:null,nearby:this.nearby?.type??null,items:[...this.chunks.values()].flat().filter(e=>!e.taken).map(({type:e,x:t,z:n})=>({type:e,x:t,z:n}))}}}const Qy=1.92;function eM(i){const e=Math.max(.16,i?.clips?.dodge?.duration??.24);return{duration:e,speed:Qy/e,cooldown:Math.max(.85,e+.12),invulnerability:.3}}class tM{constructor(e,t=Math.min(1,e)){this.max=e,this.min=t,this.ratio=e,this.sum=0,this.count=0,this.warmup=1,this.averageMs=0}sample(e,t=!0){if(!t||!Number.isFinite(e)||e<=0||e>2)return null;if(this.warmup>0)return this.warmup-=e,null;if(this.sum+=e,this.count++,this.sum<1||this.count<12)return null;this.averageMs=this.sum/this.count*1e3,this.sum=0,this.count=0;let n=this.ratio;return this.averageMs>29?n=Math.max(this.min,this.ratio-.2):this.averageMs<18&&(n=Math.min(this.max,this.ratio+.1)),n=Math.round(n*100)/100,n===this.ratio?null:(this.ratio=n,this.warmup=this.averageMs>29?.6:2,n)}}const us=48,nM=.82,Gh=.012,Wh=(i,e,t)=>nt.smoothstep(t,i,e);class iM{constructor(e){this.root=new _t,this.root.visible=!1,e.add(this.root);const t=new an(1,1);this.opacity=new Rs(new Float32Array(us),1).setUsage(wr),t.setAttribute("puffOpacity",this.opacity),t.setAttribute("puffSeed",new Rs(Float32Array.from({length:us},(s,r)=>r*13.731),1));const n=new Bn({transparent:!0,depthWrite:!1,uniforms:{clock:{value:0}},vertexShader:`
   attribute float puffOpacity,puffSeed;varying vec2 uvCloud;varying float alphaCloud,seedCloud;
   void main(){uvCloud=uv;alphaCloud=puffOpacity;seedCloud=puffSeed;
    vec4 center=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);
    center.xy+=position.xy*vec2(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz));
    gl_Position=projectionMatrix*center;}`,fragmentShader:`
   uniform float clock;varying vec2 uvCloud;varying float alphaCloud,seedCloud;
   float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
   float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
   void main(){if(alphaCloud<.002)discard;vec2 p=uvCloud*2.-1.;
    float a=seedCloud+clock*.27;mat2 turn=mat2(cos(a),-sin(a),sin(a),cos(a));
    vec2 q=turn*p*3.+vec2(seedCloud,clock*.12);
    float n=noise(q)*.57+noise(q*2.1)*.28+noise(q*4.3)*.15;
    float edge=1.-smoothstep(.35,1.,length(p)+(n-.5)*.3);
    float density=edge*mix(.25,.85,n);float alpha=density*alphaCloud;
    if(alpha<.005)discard;
    vec3 shade=mix(vec3(.26,.32,.12),vec3(.65,.69,.32),clamp(n*.75+uvCloud.y*.35,0.,1.));
    gl_FragColor=vec4(shade,alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`});this.cloud=new Lr(t,n,us),this.cloud.instanceMatrix.setUsage(wr),this.cloud.frustumCulled=!1,this.root.add(this.cloud),this.particles=Array.from({length:us},(s,r)=>({birth:-1/0,origin:new w,direction:new w,seed:r*2.399963})),this.cursor=0,this.point=new w,this.matrix=new ee,this.scale=new w,this.rotation=new Ke,this.lastTime=0,this.lastAttack=-1}update(e,t){const n=e.animationTime??0,s=Math.max(0,Math.min(.05,n-this.lastTime));this.lastTime=n,this.visual!==e.visual&&(this.visual=e.visual,this.anchor=null,this.particles.forEach(u=>u.birth=-1/0));const r=e.attackSpec?.duration??1.2,o=e.attackTime??0,a=o/r;if(t&&o<this.lastAttack&&(this.emittedUntil=0),t||(this.emittedUntil=0),t&&a>=.22&&a<.72&&s>0){this.anchor??=Nc(e,/teeth/i,[.5,.65,1]),this.anchor?this.anchor.get(this.point):this.point.set(e.x,1.52,e.z);const u=Math.min(5,Math.floor((o-(this.emittedUntil??o-s))/Gh));for(let c=0;c<u;c++){const h=this.particles[this.cursor++%us];h.birth=n-c*Gh,h.origin.copy(this.point),h.direction.set(Math.sin(e.heading),.035,Math.cos(e.heading)),h.origin.addScaledVector(h.direction,.035)}u&&(this.emittedUntil=o)}else t&&(this.emittedUntil=o);this.lastAttack=t?o:-1;let l=0;for(let u=0;u<us;u++){const c=this.particles[u],h=n-c.birth,d=h/nM;if(d>=0&&d<1){l++;const g=1.95*(1-Math.exp(-2.3*h));this.point.copy(c.origin).addScaledVector(c.direction,g);const _=.015+h*.18;this.point.x+=Math.cos(c.seed)*_,this.point.z+=Math.sin(c.seed)*_,this.point.y+=h*.18+Math.sin(c.seed+h*4)*_*.65;const m=.09+Math.pow(d,.7)*.65;this.scale.set(m*(1.05+.16*Math.sin(c.seed)),m,1),this.opacity.setX(u,Wh(0,.07,h)*(1-Wh(.38,.82,h))*.5)}else this.scale.set(0,0,0),this.opacity.setX(u,0);this.matrix.compose(this.point,this.rotation,this.scale),this.cloud.setMatrixAt(u,this.matrix)}this.root.visible=l>0,this.cloud.instanceMatrix.needsUpdate=!0,this.opacity.needsUpdate=!0,this.cloud.material.uniforms.clock.value=n}}function sM(i,e,t=1){const n=i==="high",s=i==="low"||!n&&e<650;return{mode:n?"high":s?"low":"balanced",lowQuality:s,pixelRatio:Math.min(t,n?2:s?1:1.5),samples:n?2:0,shadowSize:n?2048:1024}}const rM=new Ho(-1,1,1,-1,0,1);class oM extends xt{constructor(){super(),this.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ze([0,2,0,0,2,0],2))}}const aM=new oM;class lM{constructor(e){this._mesh=new we(aM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}function cM(i,e){return i.updateMatrixWorld(!0),Math.max(i.near,-e.clone().applyMatrix4(i.matrixWorldInverse).z)}class uM{constructor(e,{lowQuality:t=!1,enabled:n=!0,samples:s=2,grading:r=null}={}){this.renderer=e,this.grading=r,this.enabled=n,this.width=1,this.height=1,this.focus=null,this.maxBlur=t?1.8:2.5,this.band=1.2;const o=e.extensions?.has("EXT_color_buffer_float")?Ds:kn;this.target=new Ai(1,1,{type:o,depthBuffer:!0,stencilBuffer:!1}),this.target.depthTexture=new xc(1,1,Ti),this.target.samples=t?0:Math.min(s,e.capabilities.maxSamples),this.material=new Bn({depthTest:!1,depthWrite:!1,uniforms:{...r?.uniforms??{gradeOn:{value:0},gradeA:{value:new Ze(0,1,1,1)},gradeB:{value:new Ze},gradeC:{value:new w},gradeShadow:{value:new w},gradeHighlight:{value:new w}},dofOn:{value:n?1:0},colorTexture:{value:this.target.texture},depthTexture:{value:this.target.depthTexture},pixel:{value:new pe},near:{value:.1},far:{value:100},focus:{value:6},band:{value:this.band},radius:{value:this.maxBlur}},defines:{DOF_SAMPLES:t?8:12},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
   #include <common>
   #include <packing>
   ${vy}
   uniform float dofOn;
   varying vec2 vUv;
   uniform sampler2D colorTexture,depthTexture;
   uniform vec2 pixel;
   uniform float near,far,focus,band,radius;
   float depthAt(vec2 uv){return -perspectiveDepthToViewZ(texture2D(depthTexture,uv).x,near,far);}
   void main(){
    float depth=dofOn>.5?depthAt(vUv):focus;
    float coc=dofOn*smoothstep(band,band+5.,abs(depth-focus));
    vec3 color=texture2D(colorTexture,vUv).rgb;
    if(coc>.001){
     vec3 sum=color;float weight=1.;
     for(int i=0;i<DOF_SAMPLES;i++){
      float f=float(i)+.5,angle=f*2.39996323;
      vec2 uv=clamp(vUv+vec2(cos(angle),sin(angle))*sqrt(f/float(DOF_SAMPLES))*radius*coc*pixel,vec2(0.),vec2(1.));
      float sampleDepth=depthAt(uv);
      // Do not smear a sharp foreground silhouette into the blurred background.
      float w=smoothstep(depth-1.2,depth-.1,sampleDepth);
      sum+=texture2D(colorTexture,uv).rgb*w;weight+=w;
     }
     color=sum/weight;
    }
    gl_FragColor=vec4(color,1.);
    #include <tonemapping_fragment>
    gl_FragColor.rgb=applyGrade(gl_FragColor.rgb,vUv);
    #include <colorspace_fragment>
   }`}),this.quad=new lM(this.material)}resize(e,t){if(this.width=e,this.height=t,!this.enabled&&!this.grading?.active){(this.target.width!==1||this.target.height!==1)&&this.target.setSize(1,1);return}const n=this.renderer.getPixelRatio(),s=Math.max(1,Math.floor(e*n)),r=Math.max(1,Math.floor(t*n));this.target.setSize(s,r),this.material.uniforms.pixel.value.set(1/s,1/r),this.material.uniforms.radius.value=this.maxBlur*n}render(e,t,n,s){const r=cM(t,n);if(this.focus=this.focus===null?r:nt.lerp(this.focus,r,1-Math.exp(-Math.max(0,s)*8)),!this.enabled&&!this.grading?.active){this.renderer.render(e,t);return}const o=this.renderer.getPixelRatio();(this.target.width!==Math.max(1,Math.floor(this.width*o))||this.target.height!==Math.max(1,Math.floor(this.height*o)))&&this.resize(this.width,this.height);const a=this.material.uniforms;a.dofOn.value=this.enabled?1:0,a.near.value=t.near,a.far.value=t.far,a.focus.value=this.focus,this.renderer.setRenderTarget(this.target),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.quad.render(this.renderer)}renderCustom(e){if(!this.grading?.active){e();return}this.resize(this.width,this.height),this.renderer.setRenderTarget(this.target);try{e()}finally{this.renderer.setRenderTarget(null)}this.material.uniforms.dofOn.value=0,this.quad.render(this.renderer)}dispose(){this.target.dispose(),this.material.dispose(),this.quad.dispose()}}function hM(i){i.updateMatrixWorld(!0);let e=null;if(i.traverse(g=>{if(e||!g.isMesh||g.material.name!=="Pavement tiles")return;const _=g.geometry,m=_.attributes.position,p=_.attributes.uv,x=_.index;if(p)for(let y=0;y<(x?.count??m.count);y+=3){const v=[0,1,2].map(A=>x?x.getX(y+A):y+A),b=v.map(A=>new w().fromBufferAttribute(m,A).applyMatrix4(g.matrixWorld));if(!(b.some(A=>A.z<2.5)||Math.max(...b.map(A=>A.y))-Math.min(...b.map(A=>A.y))>.001||b[1].clone().sub(b[0]).cross(b[2].clone().sub(b[0])).y<=0)){e={points:b,uv:v.map(A=>new pe().fromBufferAttribute(p,A)),material:g.material};break}}}),!e)throw Error("Authored front paving surface not found");const t=new gn().setFromObject(i),n=t.max.z;if(n>=13)return;const[s,r,o]=e.points,a=r.clone().sub(s),l=o.clone().sub(s),u=a.x*l.z-a.z*l.x,c=[[0,s.y-.002,n-.01],[26,s.y-.002,n-.01],[0,s.y-.002,14],[26,s.y-.002,14]],h=[];for(const[g,,_]of c){const m=((g-s.x)*l.z-(_-s.z)*l.x)/u,p=(a.x*(_-s.z)-a.z*(g-s.x))/u;h.push(e.uv[0].x+m*(e.uv[1].x-e.uv[0].x)+p*(e.uv[2].x-e.uv[0].x),e.uv[0].y+m*(e.uv[1].y-e.uv[0].y)+p*(e.uv[2].y-e.uv[0].y))}const d=new xt;d.setAttribute("position",new ze(c.flat(),3)),d.setAttribute("uv",new ze(h,2)),d.setIndex([0,2,1,1,2,3]),d.computeVertexNormals();const f=new we(d,e.material);f.name="Camera_front_paving",i.add(f)}function dM(i,e,t,n=[]){const s=new Set;for(const f of[i,...n])f.traverse(g=>{if(g.isMesh)for(const _ of Array.isArray(g.material)?g.material:[g.material])s.add(_)});const r=Math.min(4,e.capabilities.getMaxAnisotropy());for(const f of s)for(const g of["map","normalMap","roughnessMap","metalnessMap","aoMap"])f[g]&&(f[g].anisotropy=r,f[g].needsUpdate=!0);const o=new dc,a=new wc(10,24,12),l=new Float32Array(a.attributes.position.count*3),u=new Ft({side:tn,vertexColors:!0});a.setAttribute("color",new Vt(l,3)),o.add(new we(a,u));const c=new Fl(e);let h=null,d="";t.onChange=f=>{const g=f.skyColor+f.groundColor;if(g!==d){const _=new De(f.skyColor),m=new De(f.groundColor),p=new De;for(let y=0;y<a.attributes.position.count;y++){const v=a.attributes.position.getY(y)/10,b=nt.smoothstep(v,-.2,.3);p.copy(m).lerp(_,b),p.toArray(l,y*3)}a.attributes.color.needsUpdate=!0;const x=h;h=c.fromScene(o,.05);for(const y of s)y.envMap=h.texture,y.needsUpdate=!0;x?.dispose(),d=g}for(const _ of s)_.envMapIntensity=f.ambientIntensity/2.6},t.onChange(t.value)}const Xh="bomzh:lighting:v1",dr={exposure:1.08,sunIntensity:3.2,sunColor:"#f2e4cd",azimuth:-48,elevation:52,ambientIntensity:1.5,skyColor:"#c5ccc8",groundColor:"#505347",fogColor:"#85867c",fogStart:24,fogDepth:38,shadows:!0},fM={exposure:[.2,2.5],sunIntensity:[0,6],azimuth:[-180,180],elevation:[5,85],ambientIntensity:[0,5],fogStart:[5,60],fogDepth:[5,80]};function Ba(i,e=dr){const t={...e};if(!i||typeof i!="object")return t;for(const[n,[s,r]]of Object.entries(fM))Number.isFinite(i[n])&&(t[n]=Math.max(s,Math.min(r,i[n])));for(const n of["sunColor","skyColor","groundColor","fogColor"])typeof i[n]=="string"&&/^#[0-9a-f]{6}$/i.test(i[n])&&(t[n]=i[n]);return typeof i.shadows=="boolean"&&(t.shadows=i.shadows),t}const pM={courtyard:{...dr},sunset:{...dr,exposure:1.1,sunIntensity:3.2,sunColor:"#ffbd7a",azimuth:-105,elevation:18,ambientIntensity:1.5,skyColor:"#b5bed9",groundColor:"#665650",fogColor:"#b09583",fogStart:20},night:{...dr,exposure:.85,sunIntensity:1.1,sunColor:"#b9d0ff",azimuth:35,elevation:38,ambientIntensity:.75,skyColor:"#687caa",groundColor:"#252e40",fogColor:"#263443",fogStart:16,fogDepth:30}};class mM{constructor({scene:e,renderer:t,sun:n,ambient:s,lowQuality:r=!1,storage:o}){Object.assign(this,{scene:e,renderer:t,sun:n,ambient:s,storage:o}),this.defaults={...dr,shadows:!r},this.value={...this.defaults},this.targetX=0;try{this.storage=o??globalThis.localStorage;const a=JSON.parse(this.storage.getItem(Xh));a?.version===1&&(this.value=Ba(a.settings,this.defaults))}catch{}this.apply()}set(e){this.value=Ba({...this.value,...e},this.defaults),this.apply()}reset(){this.value={...this.defaults},this.apply()}apply(){const e=this.value;this.renderer.toneMappingExposure=e.exposure,this.sun.intensity=e.sunIntensity,this.sun.color.set(e.sunColor),this.ambient.intensity=e.ambientIntensity,this.ambient.color.set(e.skyColor),this.ambient.groundColor.set(e.groundColor),this.scene.background.set(e.fogColor),this.scene.fog.color.set(e.fogColor),this.scene.fog.near=e.fogStart,this.scene.fog.far=e.fogStart+e.fogDepth,this.renderer.shadowMap.enabled=e.shadows,this.renderer.shadowMap.needsUpdate=!0,this.follow(this.targetX),this.onChange?.(e)}follow(e){this.targetX=e;const t=this.value.azimuth*Math.PI/180,n=this.value.elevation*Math.PI/180,s=Math.sqrt(296);this.sun.position.set(e+s*Math.cos(n)*Math.sin(t),s*Math.sin(n),s*Math.cos(n)*Math.cos(t)),this.sun.target.position.set(e,0,0)}export(){return{version:1,settings:{...this.value}}}save(){try{return this.storage.setItem(Xh,JSON.stringify(this.export())),!0}catch{return!1}}import(e){if(e?.version!==1||!e.settings||typeof e.settings!="object"||Array.isArray(e.settings))throw Error("Нужен файл настроек освещения этой игры.");this.value=Ba(e.settings,this.defaults),this.apply()}}function gM(i,{open:e,close:t},n=null){const s=document.getElementById("lighting-panel"),r=document.getElementById("lighting-fields"),o=document.getElementById("lighting-status"),a=[["exposure","Экспозиция",.2,2.5,.01],["sunIntensity","Яркость солнца",0,6,.1],["azimuth","Направление солнца",-180,180,1],["elevation","Высота солнца",5,85,1],["sunColor","Цвет солнца"],["ambientIntensity","Свет в тенях",0,5,.1],["skyColor","Цвет неба"],["groundColor","Оттенок снизу"],["fogColor","Цвет тумана и фона"],["fogStart","Начало тумана",5,60,1],["fogDepth","Дальность видимости",5,80,1]];for(const[g,_,m,p,x]of a){const y=document.createElement("label");y.className="lighting-field";const v=document.createElement("span");v.textContent=_;const b=document.createElement("output"),M=document.createElement("input");M.id="light-"+g,M.dataset.key=g,M.type=m===void 0?"color":"range",m!==void 0&&(M.min=m,M.max=p,M.step=x),y.append(v,b,M),r.append(y),M.addEventListener("input",()=>{i.set({[g]:M.type==="color"?M.value:Number(M.value)}),d(),o.textContent="Предпросмотр. Сохрани понравившийся вариант."})}let l=()=>{};if(n){const g=document.getElementById("grading-fields"),_={brightness:"Яркость",contrast:"Контраст",saturation:"Насыщенность",gamma:"Гамма / средние тона",temperature:"Температура: холоднее / теплее",tint:"Оттенок: зелёный / пурпурный",shadows:"Поднять / затемнить тени",highlights:"Яркость светлых участков",vignette:"Виньетка",splitStrength:"Сила окраски теней и света",shadowColor:"Цвет теней",highlightColor:"Цвет света"};for(const p of Object.keys(_)){const x=document.createElement("label");x.className="lighting-field";const y=document.createElement("span");y.textContent=_[p];const v=document.createElement("output"),b=document.createElement("input");b.id="grade-"+p,b.dataset.key=p;const M=Dc[p];b.type=M?"range":"color",M&&([b.min,b.max,b.step]=M),x.append(y,v,b),g.append(x),b.oninput=()=>{n.set({[p]:M?Number(b.value):b.value}),l(),o.textContent="Цвет изменён. Сохрани понравившийся вариант."}}const m=document.getElementById("grade-enabled");l=()=>{for(const p of g.querySelectorAll("input"))p.value=n.value[p.dataset.key],p.previousElementSibling.value=p.type==="color"?p.value:Number(p.value).toFixed(2);m.checked=n.value.enabled},m.onchange=()=>{n.set({enabled:m.checked}),o.textContent=m.checked?"Цветокоррекция включена.":"Показана исходная картинка; значения ползунков остались прежними."},document.getElementById("grading-reset").onclick=()=>{n.reset(),l(),o.textContent="Исходный цвет. Нажми «Сохранить», чтобы закрепить."},document.getElementById("grading-preset").onchange=p=>{p.target.value&&(n.set(_y[p.target.value]),l(),p.target.value="",o.textContent="Цветовой пресет применён.")}}const u=new URLSearchParams(location.search).get("editor")==="compositing";document.getElementById("grading-section").open=u,document.getElementById("light-section").open=!u;const c=document.getElementById("lighting-collapse");c.onclick=()=>{const g=s.classList.toggle("compact");document.getElementById("lighting-body").hidden=g,c.textContent=g?"Развернуть":"Свернуть",c.setAttribute("aria-expanded",String(!g))};const h=document.getElementById("light-shadows");h.onchange=()=>{i.set({shadows:h.checked}),o.textContent="Предпросмотр. Сохрани понравившийся вариант."};function d(){for(const g of r.querySelectorAll("input"))g.value=i.value[g.dataset.key],g.previousElementSibling.value=g.type==="color"?g.value:Number(g.value).toFixed(g.step==="0.01"?2:g.step==="0.1"?1:0);h.checked=i.value.shadows,l()}document.getElementById("lighting-open").onclick=()=>{e()!==!1&&(s.hidden=!1,d(),o.textContent="Игра на паузе. Изменения видны сразу.",document.getElementById("lighting-close").focus())};function f(){s.hidden=!0,t()}return document.getElementById("lighting-close").onclick=f,s.addEventListener("keydown",g=>{if(g.key==="Tab"){const _=[...s.querySelectorAll("button,input,select")].filter(x=>!x.disabled&&x.getClientRects().length),m=_[0],p=_.at(-1);g.shiftKey&&document.activeElement===m?(g.preventDefault(),p.focus()):!g.shiftKey&&document.activeElement===p&&(g.preventDefault(),m.focus())}g.key==="Escape"&&(g.stopPropagation(),f())}),document.getElementById("lighting-save").onclick=()=>{const g=i.save(),_=!n||n.save();o.textContent=g&&_?"Сохранено: свет и цвет на этом устройстве.":"Не удалось сохранить на устройстве. Скачай настройки файлом."},document.getElementById("lighting-reset").onclick=()=>{i.reset(),n?.reset(),d(),o.textContent="Вернул исходный свет. Нажми «Сохранить», чтобы закрепить."},document.getElementById("lighting-preset").onchange=g=>{g.target.value&&(i.set(pM[g.target.value]),d(),g.target.value="",o.textContent="Пресет применён. Можно настроить дальше.")},document.getElementById("lighting-export").onclick=()=>{const g=URL.createObjectURL(new Blob([JSON.stringify({...i.export(),...n?{compositing:n.export()}:{}},null,2)],{type:"application/json"})),_=document.createElement("a");_.href=g,_.download="dvor-light-and-color.json",_.click(),setTimeout(()=>URL.revokeObjectURL(g),1e3),o.textContent="Файл настроек можно прислать мне для переноса в игру."},document.getElementById("lighting-import").onchange=async g=>{const _=g.target.files[0];if(_){try{if(_.size>1e5)throw Error("Файл слишком большой.");const m=JSON.parse(await _.text()),p=i.export(),x=n?.export();try{i.import(m),m.compositing&&n&&n.import(m.compositing)}catch(y){throw i.import(p),x&&n.import(x),y}d(),o.textContent="Настройки загружены. Нажми «Сохранить», чтобы закрепить."}catch(m){o.textContent=m.message}g.target.value=""}},{hide:f,isOpen:()=>!s.hidden}}class _M extends Os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new FM(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=ur.extractUrlBase(e);o=ur.resolveURL(u,this.path)}else o=ur.extractUrlBase(e);this.manager.itemStart(e);const a=function(u){s?s(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ld(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{r.parse(u,o,function(c){t(c),r.manager.itemEnd(e)},a)}catch(c){a(c)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ef){try{o[$e.KHR_BINARY_GLTF]=new OM(e)}catch(h){s&&s(h);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new $M(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const h=this.pluginCallbacks[c](u);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const h=r.extensionsUsed[c],d=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:o[h]=new yM;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[h]=new kM(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[h]=new BM;break;case $e.KHR_MESH_QUANTIZATION:o[h]=new zM;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function xM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class vM{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const c=new De(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],rn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new No(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Ud(c),u.distance=h;break;case"spot":u=new ng(c),u.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),Vn(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(u),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class yM{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){const s=[];e.color=new De(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],rn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,st))}return Promise.all(s)}}class MM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class bM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(a,a)}return Promise.all(r)}}class SM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class wM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class EM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],rn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,st)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class TM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class AM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],rn),Promise.all(r)}}class RM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class CM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],rn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,st)),Promise.all(r)}}class PM{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class IM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class LM{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class DM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return n.loadTextureImage(e,o.source,l)}}class UM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return n.loadTextureImage(e,o.source,l)}}class NM{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,u=s.byteLength||0,c=s.count,h=s.byteStride,d=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(c,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(c*h);return o.decodeGltfBuffer(new Uint8Array(f),c,h,d,s.mode,s.filter),f})})}else return null}}class FM{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const u of s.primitives)if(u.mode!==yn.TRIANGLES&&u.mode!==yn.TRIANGLE_STRIP&&u.mode!==yn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(c=>(l[u]=c,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const c=u.pop(),h=c.isGroup?c.children:[c],d=u[0].count,f=[];for(const g of h){const _=new ee,m=new w,p=new Ke,x=new w(1,1,1),y=new Lr(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,_.compose(m,p,x));for(const v in l)if(v==="_COLOR_0"){const b=l[v];y.instanceColor=new Rs(b.array,b.itemSize,b.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);St.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return c.isGroup?(c.clear(),c.add(...f),c):f[0]}))}}const ef="glTF",Qs=12,qh={JSON:1313821514,BIN:5130562};class OM{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ef)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Qs,r=new DataView(e,Qs);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===qh.JSON){const u=new Uint8Array(e,Qs+o,a);this.content=n.decode(u)}else if(l===qh.BIN){const u=Qs+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const c in o){const h=Xl[c]||c.toLowerCase();a[h]=o[c]}for(const c in e.attributes){const h=Xl[c]||c.toLowerCase();if(o[c]!==void 0){const d=n.accessors[e.attributes[c]],f=ys[d.componentType];u[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(c){return new Promise(function(h,d){s.decodeDracoFile(c,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,u,rn,d)})})}}class BM{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class zM{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class tf extends Dr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,c=s-t,h=(n-t)/c,d=h*h,f=d*h,g=e*u,_=g-u,m=-2*f+3*d,p=f-d,x=1-m,y=p-d+h;for(let v=0;v!==a;v++){const b=o[_+v+a],M=o[_+v+l]*c,A=o[g+v+a],L=o[g+v]*c;r[v]=x*b+y*M+m*A+p*L}return r}}const HM=new Ke;class VM extends tf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return HM.fromArray(r).normalize().toArray(r),r}}const yn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jh={9728:nn,9729:pn,9984:rd,9985:_o,9986:tr,9987:ai},Yh={33071:Mi,33648:Po,10497:En},za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},GM={CUBICSPLINE:void 0,LINEAR:Sr,STEP:br},Ha={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function WM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Mt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),i.DefaultMaterial}function Oi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function XM(i,e,t){let n=!1,s=!1,r=!1;for(let u=0,c=e.length;u<c;u++){const h=e[u];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let u=0,c=e.length;u<c;u++){const h=e[u];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const c=u[0],h=u[1],d=u[2];return n&&(i.morphAttributes.position=c),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function qM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jM(i){let e;const t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Va(t.attributes):e=i.indices+":"+Va(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Va(i.targets[n]);return e}function Va(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ql(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function YM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const KM=new ee;class $M{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new eg(this.options.manager):this.textureLoader=new rg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ld(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Oi(r,a,s),Vn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,c]of o.children.entries())r(c,a.children[u])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(ur.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=za[s.type],a=ys[s.componentType],l=s.normalized===!0,u=new a(s.count*o);return Promise.resolve(new Vt(u,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=za[s.type],u=ys[s.componentType],c=u.BYTES_PER_ELEMENT,h=c*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(x);y||(_=new u(a,p*f,s.count*f/c),y=new fm(_,f/c),t.cache.add(x,y)),m=new fc(y,l,d%f/c,g)}else a===null?_=new u(s.count*l):_=new u(a,d,s.count*l),m=new Vt(_,l,g);if(s.sparse!==void 0){const p=za.SCALAR,x=ys[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,b=new x(o[1],y,s.sparse.count*p),M=new u(o[2],v,s.sparse.count*l);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,L=b.length;A<L;A++){const E=b[A];if(m.setX(E,M[A*l]),l>=2&&m.setY(E,M[A*l+1]),l>=3&&m.setZ(E,M[A*l+2]),l>=4&&m.setW(E,M[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,n).then(function(c){c.flipY=!1,c.name=o.name||a.name||"",c.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(c.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return c.magFilter=jh[d.magFilter]||pn,c.minFilter=jh[d.minFilter]||ai,c.wrapS=Yh[d.wrapS]||En,c.wrapT=Yh[d.wrapT]||En,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==nn&&c.minFilter!==pn,s.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){u=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ot(_);m.needsUpdate=!0,d(m)}),t.load(ur.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return u===!0&&a.revokeObjectURL(l),Vn(h,o),h.userData.mimeType=o.mimeType||YM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=c,c}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _c,Xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Td,Xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Mt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},u=[];if(l[$e.KHR_MATERIALS_UNLIT]){const h=s[$e.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),u.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],rn),a.opacity=d[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",h.baseColorTexture,st)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Lt);const c=r.alphaMode||Ha.OPAQUE;if(c===Ha.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,c===Ha.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ft&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ft&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ft){const h=r.emissiveFactor;a.emissive=new De().setRGB(h[0],h[1],h[2],rn)}return r.emissiveTexture!==void 0&&o!==Ft&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,st)),Promise.all(u).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Vn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Oi(s,h,r),h})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Kh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],c=jM(u),h=s[c];if(h)o.push(h.promise);else{let d;u.extensions&&u.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(u):d=Kh(new xt,u,t),s[c]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const c=o[l].material===void 0?WM(this.cache):this.getDependency("material",o[l].material);a.push(c)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),c=l[l.length-1],h=[];for(let f=0,g=c.length;f<g;f++){const _=c[f],m=o[f];let p;const x=u[f];if(m.mode===yn.TRIANGLES||m.mode===yn.TRIANGLE_STRIP||m.mode===yn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new mm(_,x):new we(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===yn.TRIANGLE_STRIP?p.geometry=Lh(p.geometry,fd):m.mode===yn.TRIANGLE_FAN&&(p.geometry=Lh(p.geometry,Ll));else if(m.mode===yn.LINES)p=new Mm(_,x);else if(m.mode===yn.LINE_STRIP)p=new gc(_,x);else if(m.mode===yn.LINE_LOOP)p=new bm(_,x);else if(m.mode===yn.POINTS)p=new Ad(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&qM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Vn(p,r),m.extensions&&Oi(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Oi(s,h[0],r),h[0];const d=new _t;r.extensions&&Oi(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(nt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ho(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let u=0,c=o.length;u<c;u++){const h=o[u];if(h){a.push(h);const d=new ee;r!==null&&d.fromArray(r.array,u*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new pc(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],u=[],c=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),u.push(g),c.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(c)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let y=0,v=d.length;y<v;y++){const b=d[y],M=f[y],A=g[y],L=_[y],E=m[y];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const C=n._createAnimationTracks(b,M,A,L,E);if(C)for(let T=0;T<C.length;T++)p.push(C[T])}const x=new jm(r,void 0,p);return Vn(x,s),x})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=s.weights.length;l<u;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let u=0,c=a.length;u<c;u++)o.push(n.getDependency("node",a[u]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(u){const c=u[0],h=u[1],d=u[2];d!==null&&c.traverse(function(f){f.isSkinnedMesh&&f.bind(d,KM)});for(let f=0,g=h.length;f<g;f++)c.add(h[f]);return c})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let c;if(r.isBone===!0?c=new wd:u.length>1?c=new _t:u.length===1?c=u[0]:c=new St,c!==u[0])for(let h=0,d=u.length;h<d;h++)c.add(u[h]);if(r.name&&(c.userData.name=r.name,c.name=o),Vn(c,r),r.extensions&&Oi(n,c,r),r.matrix!==void 0){const h=new ee;h.fromArray(r.matrix),c.applyMatrix4(h)}else r.translation!==void 0&&c.position.fromArray(r.translation),r.rotation!==void 0&&c.quaternion.fromArray(r.rotation),r.scale!==void 0&&c.scale.fromArray(r.scale);if(!s.associations.has(c))s.associations.set(c,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(c);s.associations.set(c,{...h})}return s.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new _t;n.name&&(r.name=s.createUniqueName(n.name)),Vn(r,n),n.extensions&&Oi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let c=0,h=l.length;c<h;c++)r.add(l[c]);const u=c=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Xn||d instanceof Ot)&&h.set(d,f);return c.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=u(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];vi[r.path]===vi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let u;switch(vi[r.path]){case vi.weights:u=Cs;break;case vi.rotation:u=Ps;break;case vi.translation:case vi.scale:u=Is;break;default:n.itemSize===1?u=Cs:u=Is;break}const c=s.interpolation!==void 0?GM[s.interpolation]:Sr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new u(l[d]+"."+vi[r.path],t.array,h,c);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ql(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ps?VM:tf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function JM(i,e,t){const n=e.attributes,s=new gn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(s.set(new w(l[0],l[1],l[2]),new w(u[0],u[1],u[2])),a.normalized){const c=ql(ys[a.componentType]);s.min.multiplyScalar(c),s.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new w,l=new w;for(let u=0,c=r.length;u<c;u++){const h=r[u];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=ql(ys[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Yn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Kh(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Xl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return et.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Vn(i,e),JM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?XM(i,e.targets,t):i})}function ZM(i){const e=new Map,t=new Map,n=i.clone();return nf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function nf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)nf(i.children[n],e.children[n],t)}function sf(i,e){const t=e*.2,n=e*.8;return Math.max(0,Math.min(1,(i-t)/.22,(n-i)/.18))}function rf(i,e){const t=sf(i,e);return t*t*(3-2*t)}const Mn={jab:{duration:.65,cooldown:.65,hitAt:.7,damage:14,range:1.35,label:"Кулак"},kick:{duration:.7,cooldown:.8,hitAt:9/17,damage:25,range:1.9,label:"Пинок"},burp:{duration:1.2,cooldown:2.5,hitAt:.38,damage:24,range:2.3,label:"Отрыжка"},spray:{duration:1.4,cooldown:2.4,hitAt:.28,activeUntil:.8,damage:34,range:3.2,label:"Струя"}};function QM(i,e,t){if(e.down>0)return!1;const n=e.x-i.x,s=e.z-i.z,r=i.heading??i.facing*Math.PI/2,o=n*Math.sin(r)+s*Math.cos(r),a=Math.abs(n*Math.cos(r)-s*Math.sin(r));return t==="burp"?o>.05&&o<Mn.burp.range&&a<.45+o*.3:t==="spray"?o>.15&&o<Mn.spray.range*(Number.isFinite(i.attackTime)?rf(i.attackTime,i.attackSpec?.duration??Mn.spray.duration):1)&&a<.38+o*.16:Math.hypot(n,s)<(i.attackSpec?.range??Mn[t].range)&&o>-.15}function $h(i){if(!Number.isSafeInteger(i)||i<0)throw new RangeError("Invalid stage");const e=i*26+1,t=i+1,n=i===0?1:Math.min(4,2+Math.floor(i/4)),s=i<3?1:Math.min(3,1+Math.floor(i/4)),r=Array.from({length:s},(o,a)=>Array.from({length:n},(l,u)=>({type:i===0?"fighter":i>=2&&u===0&&(i%3===2||t%5===0)?"bruiser":(i+a+u)%2?"runner":"fighter",side:i<2?1:u%2?-1:1,z:[-.9,.8,0,1.4][(i+a+u)%4],delay:u*.4})));return{id:`street-${t}`,index:i,number:t,title:`Участок ${t}`,center:e,halfWidth:10,trigger:e-3,left:e-10,right:e+10,waves:r,scaling:{health:1+Math.min(1.5,i*.065),damage:1+Math.min(1,i*.035),speed:1+Math.min(.35,i*.012),windup:1-Math.min(.22,i*.008)}}}class eb{constructor(){this.index=0,this.active=!1,this.wave=0,this.phase="explore",this.delay=0,this.goTime=0,this.current=$h(0)}get arena(){return this.active?this.current:null}get bounds(){return this.active?[this.current.left,this.current.right]:[this.current.center-36,this.current.right+20]}update(e,t,n){if(e<=0)return null;if(this.goTime=Math.max(0,this.goTime-e),!this.active)return t>=this.current.trigger?(this.active=!0,this.wave=0,this.phase="incoming",this.delay=1.25,this.goTime=0,{type:"warning",arena:this.current}):null;const s=this.current;if(this.phase==="incoming"){if(this.delay=Math.max(0,this.delay-e),this.delay===0)return this.phase="fight",{type:"spawn",arena:s,wave:this.wave,enemies:s.waves[this.wave]}}else if(!n.some(r=>r.encounter===s.id&&r.health>0))return this.wave+1<s.waves.length?(this.wave++,this.phase="incoming",this.delay=1.25,{type:"warning",arena:s}):(this.index++,this.active=!1,this.phase="explore",this.goTime=5,this.current=$h(this.index),{type:"clear",arena:s});return null}}class tb{constructor(e,{reducedMotion:t=!1}={}){this.camera=e,this.focus=new w(-7.3,1,0),this.lead=.7,this.distance=6.2,this.shake=0,this.shakeClock=0,this.shakeOverride=null,this.savedBase=null,this.framingCamera=e.clone(),this.reducedMotion=t,this.position=new w,this.target=new w}cinematic(e,t,n,s,r,o){this.restoreBase();const a=r<650,l=r/o,u=new w((e.x+(t.root?.position.x??t.x))/2,1.05,(e.z+t.z)/2),c=Math.max(a?6.5:4.8,1.35/(Math.tan(nt.degToRad(45/2))*l)),h=(a?.55:0)+(this.reducedMotion?0:.18*Math.sin(Math.min(1,n/2.8)*Math.PI)),d=u.clone().add(new w(Math.sin(h)*c,c*.14,Math.cos(h)*c)),f=1-Math.exp(-s*5);this.focus.lerp(u,f),this.camera.position.lerp(d,f),this.camera.lookAt(this.focus),this.camera.fov=nt.lerp(this.camera.fov,45,f),this.camera.updateProjectionMatrix(),this.applyShake(s)}isShakeEnabled(){return this.shakeOverride??!this.reducedMotion}setShakeEnabled(e){this.shakeOverride=!!e,e||(this.shake=0)}restoreBase(){this.savedBase&&(this.camera.position.copy(this.savedBase.position),this.camera.quaternion.copy(this.savedBase.quaternion))}impact(e=.18){this.isShakeEnabled()&&Number.isFinite(e)&&e>0&&(this.shake=Math.min(.3,this.shake+e))}applyShake(e){const t=this.camera;if(this.savedBase??={position:new w,quaternion:new Ke},this.savedBase.position.copy(t.position),this.savedBase.quaternion.copy(t.quaternion),this.framingCamera.copy(t,!1),this.framingCamera.updateMatrixWorld(!0),this.shakeClock+=Math.max(0,e),this.shake=Math.max(0,this.shake-Math.max(0,e)*1.25),!this.isShakeEnabled()||this.shake===0)return;const n=(this.shake/.3)**2,s=this.shakeClock,r=new w(.09*n*(Math.sin(s*64+1.1)+.4*Math.sin(s*101))/1.4,.065*n*Math.cos(s*79+.4),.025*n*Math.sin(s*53));r.applyQuaternion(this.savedBase.quaternion),t.position.add(r),t.quaternion.multiply(new Ke().setFromEuler(new on(.008*n*Math.sin(s*71),.006*n*Math.cos(s*59),.018*n*Math.sin(s*67+.8))))}update({player:e,enemies:t=[],arena:n=null,time:s=0,dt:r=.016,width:o=1e3,height:a=700}){this.restoreBase();const l=o<650,u=o/a,c=1-Math.exp(-r*3.7);this.lead=nt.lerp(this.lead,e.facing*(e.moving?.7:.25),c);const h=n?l?7:5.8:l?7.6:6.2;this.distance=nt.lerp(this.distance,h,1-Math.exp(-r*2.8));let d=l?53:40,f=e.x+this.lead;if(n){d=Math.min(d,nt.radToDeg(2*Math.atan((n.halfWidth-2)/(this.distance*1.25*u))));const _=this.distance*1.25*Math.tan(nt.degToRad(d/2))*u;f=l?e.x+this.lead*.45:n.center,f=nt.clamp(f,n.left+_+1,n.right-_-1)}this.target.set(f,1,e.z*.6),this.focus.lerp(this.target,c),this.position.set(this.focus.x+1.2,this.focus.y+this.distance*.13,this.focus.z+this.distance),this.camera.position.lerp(this.position,1-Math.exp(-r*7)),this.camera.lookAt(this.focus);const g=nt.lerp(this.camera.fov,d,c);Math.abs(this.camera.fov-g)>.001&&(this.camera.fov=g,this.camera.updateProjectionMatrix()),this.applyShake(r)}}const nb={runner:{label:"Задира",health:60,speed:2.35,damage:9,windup:.42,recovery:1.15,range:1.45,color:"#d59861"},fighter:{label:"Боец",health:80,speed:1.7,damage:14,windup:.65,recovery:1.35,range:1.65,color:"#d68664"},bruiser:{label:"Громила",health:110,speed:1.05,damage:24,windup:1,recovery:2,range:2,color:"#c16c84"}},jl={jab:0,kick:14,spray:32,burp:24,dodge:16};function of(i,e){const t=jl[e];return t===void 0||i.stamina<t?!1:(i.stamina-=t,t>0&&(i.regenDelay=.45),!0)}function ib(i,e){if(e<=0)return;const t=i.regenDelay;i.regenDelay=Math.max(0,t-e),i.stamina=Math.min(100,i.stamina+Math.max(0,e-t)*28)}function sb(i,e){const t=e.x-i.x,n=e.z-i.z,s=Math.hypot(t,n);return e.invulnerable>0||s>=i.spec.range?!1:i.type==="bruiser"||s<.01||(t*i.aimX+n*i.aimZ)/s>.25}function fr(i,e,t=0){return Math.hypot(i,e)>.001?Math.atan2(i,e):t}function Ga(i,e,t,n=14){const s=Math.atan2(Math.sin(e-i),Math.cos(e-i));return i+s*(1-Math.exp(-n*t))}const rb=2.8,Jh=1.3;function Yl(i,e){return Math.min(100,Math.max(0,i+e))}function ob(i,e){return e.filter(t=>t.health>0&&!t.entering&&!(t.down>0)&&Math.hypot(t.x-i.x,t.z-i.z)<=2.8).sort((t,n)=>Math.hypot(t.x-i.x,t.z-i.z)-Math.hypot(n.x-i.x,n.z-i.z))[0]??null}const er=i=>(i=Math.min(1,Math.max(0,i)),i*i*(3-2*i));function ab(i){const e=i>=Jh;return{punch:i<.65?.14*er(i/.65):i<1.3?.14+.56*er((i-.65)/.65):i<1.65?.7:.7+.3*er((i-1.65)/.8),contact:e,approach:er(i/.55),fall:er((i-Jh)/.85),done:i>=rb}}function lb(i,e,t){let s=e.x>=i.x?1:-1;return(e.x-s*.65<t[0]+.1||e.x-s*.65>t[1]-.1)&&(s=-s),{side:s,endX:Math.max(t[0]+.1,Math.min(t[1]-.1,e.x-s*.65))}}class cb{constructor(e){this.root=new _t,e.add(this.root),this.root.visible=!1,this.growth=0,this.curve=new Mc(new w,new w(0,.4,1.35),new w(0,-.8,3.05)),this.geometry=new Ec(this.curve,30,.018,5,!1),this.geometry.attributes.position.setUsage(wr),this.jet=new we(this.geometry,new Ft({color:"#e7c648",transparent:!0,opacity:.75,depthWrite:!1})),this.jet.frustumCulled=!1,this.root.add(this.jet),this.positions=new Float32Array(96);const t=new xt;t.setAttribute("position",new Vt(this.positions,3).setUsage(wr)),this.drops=new Ad(t,new _c({color:"#f4d85d",size:.04,transparent:!0,opacity:.7,depthWrite:!1})),this.drops.frustumCulled=!1,this.root.add(this.drops),this.splash=new we(new hi(.08,.23,20),new Ft({color:"#cdb745",transparent:!0,opacity:.3,side:Lt,depthWrite:!1})),this.splash.rotation.x=-Math.PI/2,this.root.add(this.splash),this.point=new w,this.tangent=new w,this.normal=new w}update(e,t,n){const s=e.attackSpec?.duration??1.4,r=t?sf(e.attackTime,s):0;if(this.growth=r,this.root.visible=r>0,!this.root.visible)return;this.anchor??=Nc(e,/shtani/i,[.5,.82,1]),this.anchor?this.anchor.get(this.root.position):this.root.position.set(e.x,.85,e.z),this.root.rotation.y=e.heading,this.root.position.x+=Math.sin(e.heading)*.012,this.root.position.z+=Math.cos(e.heading)*.012;const o=this.root.position.y;this.curve.v2.y=.025-o;const a=this.point,l=this.tangent,u=this.normal,c=this.geometry.attributes.position,h=rf(e.attackTime,s);for(let d=0;d<=30;d++){const f=d/30*h;this.curve.getPoint(f,a),this.curve.getTangent(f,l),u.set(0,-l.z,l.y);for(let g=0;g<=5;g++){const _=g/5*Math.PI*2,m=.018*Math.min(1,r*3);c.setXYZ(d*6+g,a.x+Math.cos(_)*m,a.y+u.y*Math.sin(_)*m,a.z+u.z*Math.sin(_)*m)}}c.needsUpdate=!0,this.jet.material.opacity=.75*Math.min(1,r*4);for(let d=0;d<32;d++){const f=(d/32+n*1.8)%1*h;this.curve.getPoint(f,a),a.x+=Math.sin(d*11+n*14)*.035*f,a.y+=Math.cos(d*7+n*12)*.025*f,a.toArray(this.positions,d*3)}this.drops.geometry.attributes.position.needsUpdate=!0,this.drops.material.opacity=.7*r,this.splash.visible=h>.94,this.splash.position.set(0,.026-o,3.05),this.splash.scale.setScalar(r*(1+.1*Math.sin(n*21))),this.splash.material.opacity=.3*r}}function ub(){let i=8141;const e=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),t=()=>{const m=document.createElement("canvas");return m.width=m.height=512,m},n=t(),s=t(),r=t(),o=t(),a=t(),l=n.getContext("2d"),u=s.getContext("2d");l.fillStyle="#625e54",l.fillRect(0,0,512,512),u.fillStyle="#555",u.fillRect(0,0,512,512);const c=["#876655","#785a4e","#936f5b","#755449","#826357"];for(let m=0;m<16;m++)for(let p=-1;p<9;p++){const x=p*64+m%2*32,y=m*32;l.fillStyle=c[Math.floor(e()*c.length)],l.fillRect(x+2,y+2,60,28),l.fillStyle="#c5aa812b",l.fillRect(x+3,y+3,58,2),u.fillStyle="#bbb",u.fillRect(x+2,y+2,60,28)}function h(m,p){const x=m.getContext("2d"),y=x.getImageData(0,0,512,512);for(let v=0;v<y.data.length;v+=4){const b=(e()-.5)*p;for(let M=0;M<3;M++)y.data[v+M]+=b}x.putImageData(y,0,0)}h(n,25);const d=r.getContext("2d");d.fillStyle="#65665f",d.fillRect(0,0,512,512),h(r,24);for(let m=0;m<35;m++){let p=e()*512,x=e()*512;d.strokeStyle=m%2?"#383d3699":"#92918355",d.lineWidth=1+e(),d.beginPath(),d.moveTo(p,x);for(let y=0;y<8;y++)p+=(e()-.5)*45,x+=e()*25,d.lineTo(p,x);d.stroke()}for(let m=0;m<18;m++)d.fillStyle="#333a3020",d.beginPath(),d.ellipse(e()*512,e()*512,20+e()*65,10+e()*25,e()*3,0,Math.PI*2),d.fill();const f=o.getContext("2d");f.fillStyle="#929185",f.fillRect(0,0,512,512),h(o,35),f.strokeStyle="#4b514746",f.lineWidth=3;for(let m=0;m<=512;m+=128)f.strokeRect(m,0,128,512),f.strokeRect(0,m,512,128);const g=a.getContext("2d");g.fillStyle="#707d69",g.fillRect(0,0,512,512);for(let m=0;m<130;m++)g.fillStyle=m%2?"#654735":"#8f6848",g.beginPath(),g.ellipse(e()*512,e()*512,e()*18,e()*38,e()*4,0,Math.PI*2),g.fill();h(a,20);const _=(m,p=!0)=>{const x=new sn(m);return x.wrapS=x.wrapT=En,x.colorSpace=p?st:oi,x.anisotropy=4,x};return{brick:_(n),brickBump:_(s,!1),asphalt:_(r),concrete:_(o),rust:_(a)}}class hb{constructor(e,{textured:t=!0,editable:n=!1}={}){if(this.editable=n,this.scene=e,this.chunks=new Map,this.unit=new Kt(1,1,1),this.plane=new an(1,1),this.body=new bc([[0,0],[.062,0],[.072,.02],[.072,.28],[.06,.31],[.03,.34],[.027,.45],[.031,.46],[0,.46]].map(([s,r])=>new pe(s,r)),10),this.label=new jn(.073,.073,.12,10,1,!0),this.ring=new Wi(.17,.015,5,20),this.materials=new Map,this.geometries=new Map,this.textures=t?ub():{},this.chunkIndex=null,this.labelMaterial=new Mt({color:"#cdbf94",roughness:.94}),this.labelMaterial.name="Bottle_label",typeof document<"u"){const s=document.createElement("canvas");s.width=128,s.height=64;const r=s.getContext("2d");r.fillStyle="#cdbf94",r.fillRect(0,0,128,64),r.fillStyle="#753c31",r.fillRect(0,23,128,18),r.fillStyle="#e6d5b0",r.font="bold 10px Arial",r.textAlign="center",r.fillText("КВАС",32,36),r.fillText("КВАС",96,36),this.labelMaterial.color.set("#ffffff"),this.labelMaterial.map=new sn(s),this.labelMaterial.map.colorSpace=st}}material(e,t="plain"){const n=t+e;if(!this.materials.has(n)){const s=this.textures,r=new Mt({color:e,roughness:t==="metal"?.76:.96});t==="brick"&&(r.map=s.brick,r.bumpMap=s.brickBump,r.bumpScale=.028),["asphalt","concrete","rust"].includes(t)&&(r.map=s[t],r.bumpMap=s[t],r.bumpScale=t==="asphalt"?.025:.012),this.materials.set(n,r)}return this.materials.get(n)}metricBox(e,t,n,s){const r=[e,t,n,s].join(":");if(!this.geometries.has(r)){const o=new Kt(e,t,n),a=o.attributes.position,l=o.attributes.normal,u=o.attributes.uv;for(let c=0;c<a.count;c++)Math.abs(l.getY(c))>.5?u.setXY(c,a.getX(c)/s,a.getZ(c)/s):u.setXY(c,(Math.abs(l.getX(c))>.5?a.getZ(c):a.getX(c))/s,a.getY(c)/s);this.geometries.set(r,o)}return this.geometries.get(r)}setEnvironment(e){for(const t of this.chunks.values()){this.scene.remove(t.group);for(const n of t.local)n.dispose()}this.chunks.clear(),this.template=e,this.chunkIndex=null,e.traverse(t=>{t.isMesh&&(t.castShadow=!t.userData.noShadow,t.receiveShadow=!0)})}addBottles(e,t){const n=[];for(let s=0;s<(t%4===0?2:1);s++){const r=new _t,o=new we(this.body,this.material("#756033")),a=new we(this.label,this.labelMaterial),l=new we(this.ring,this.material("#e7c25c"));if(a.position.y=.18,l.rotation.x=-Math.PI/2,l.position.y=.018,r.add(o,a,l),this.editable)for(const h of[o,a,l])h.userData.module={kind:"pickup",id:String(s)};const u=s?21:t===0?2:5+(t*7%13+13)%13,c=Math.sin(t*3+s*2.1)*1.5;r.position.set(u,0,c),e.add(r),n.push({mesh:r,x:t*26+u,z:c,taken:!1})}return n}makeChunk(e){if(this.template){const m=this.templateForChunk?.(e)??this.template,p=new _t;p.position.x=e*26;const x=m.clone(!0),y=[];x.traverse(b=>{b.updateMatrix(),b.matrixAutoUpdate=!1,b.isInstancedMesh&&y.push(b)}),p.add(x);const v=this.addBottles(p,e);return this.scene.add(p),{group:p,bottles:v,local:y}}const t=new _t,n=[],s=[],r=[];t.position.x=e*26;let o={kind:"road",id:"road"};const a=(m,p)=>o={kind:m,id:String(p)},l=(m,p,x,y,v,b,M,A="plain")=>{const L=["brick","asphalt","concrete","rust"].includes(A),E=L?this.metricBox(m,p,x,A==="asphalt"?4:2):this.unit,C=new we(E,this.material(y,A));return L||C.scale.set(m,p,x),C.position.set(v,b,M),this.editable&&(C.userData.module=o),r.push(C),C};l(26,.2,18,"#c3c3bd",13,-.1,0,"asphalt"),l(26,.05,1.7,"#b5b5a7",13,-.03,-2.85,"concrete"),l(26,.18,.25,"#868a7c",13,-.02,-1.98,"concrete"),l(26,.05,1.6,"#a6a99b",13,-.035,3.3,"concrete"),l(26,.18,.25,"#858b7c",13,-.02,2.5,"concrete");const u=["#c4b8ab","#c1b1a3","#b2ada2","#c1b3a7"];for(let m=0;m<4;m++){const p=3.25+m*6.5,x=6.8+(Math.abs(e)+m)%3*.5,y=u[((e+m)%4+4)%4];a("building",m),l(6.5,x,3,y,p,x/2,-5.6,"brick"),l(6.5,.18,3.15,"#797b70",p,x,-5.6,"concrete"),l(6.5,.45,.08,"#535c50",p,.22,-4.06);for(let v=0;v<4;v++)for(let b=0;b<3;b++){const M=p-1.8+b*1.8,A=1.25+v*1.65;if(a(v===0&&b===1?"door":"window",m+":"+v+":"+b),v===0&&b===1){l(.95,2,.15,m%2?"#48574e":"#66514a",M,1,-4,"rust"),l(1.12,.12,.22,"#858a7d",M,2,-3.96,"concrete"),l(.055,.06,.05,"#b4aa83",M+.31,1,-3.89);continue}if(l(.93,1.25,.11,"#777e73",M,A,-4.01),l(.75,1.05,.14,"#343e3b",M,A,-3.98),l(.035,1.05,.17,"#616b62",M,A,-3.97),l(.75,.035,.17,"#616b62",M,A,-3.97),l(1,.09,.25,"#8d9183",M,A-.64,-3.94,"concrete"),b===2&&v===1){a("air_conditioner",m),l(.65,.38,.4,"#9a9b8c",M,A-.36,-3.72);for(let L=0;L<4;L++)l(.52,.023,.04,"#525d54",M,A-.48+L*.07,-3.5)}}if(a("fire_escape",m),m%2===0)for(let v=1;v<=3;v++){const b=v*1.65+.25;l(2.5,.09,.7,"#343d35",p,b,-3.65,"metal"),l(2.5,.05,.05,"#323d35",p,b+.7,-3.28,"metal");for(let M=0;M<6;M++)l(.035,.7,.035,"#343d35",p-1.2+M*.48,b+.35,-3.28,"metal");for(const M of[-1.2,1.2])l(.045,.7,.65,"#343d35",p+M,b+.35,-3.65,"metal");if(v<3){for(const M of[-.32,.32])l(.04,1.95,.05,"#343d35",p+.6+M,b+.86,-3.42,"metal").rotation.z=-.38;for(let M=0;M<8;M++)l(.7,.035,.06,"#343d35",p+.3+M*.09,b+.13+M*.21,-3.42,"metal")}if(v===2&&(e+m)%3===0)for(let M=0;M<3;M++)l(.4,.55,.025,M%2?"#9d9e8c":"#c5c0a9",p-.65+M*.45,b+.4,-3.22)}if(a("downpipe",m),l(.07,x,.1,"#48574c",p+2.9,x/2,-3.97,"metal"),a("pallet",m),m===1){for(let v=0;v<4;v++)l(.1,1.1,.08,"#81775c",p-1+v*.25,.57,-3.7).rotation.z=-.12;l(1,.08,.08,"#81775c",p-.6,.35,-3.65)}}for(const m of[4,17])a("streetlight",m),l(.1,4.2,.1,"#657365",m,2.1,-2.5,"metal"),l(1.25,.08,.1,"#657365",m+.55,4.16,-2.5,"metal"),l(.6,.15,.3,"#9a9e8d",m+1.05,4.06,-2.5),l(.26,.22,.26,"#696f5e",m,.11,-2.5);a("bench",0),l(1.7,.12,.6,"#76654c",11,.55,-2.7),l(1.7,.55,.1,"#76654c",11,.86,-3);for(const m of[-.6,.6])l(.08,.55,.4,"#435347",11+m,.27,-2.7,"metal");a("dumpster",0),l(.85,1.05,.7,"#b0b8a0",21,.52,-2.7,"rust"),l(.94,.07,.78,"#5d6c59",21,1.07,-2.7,"metal");for(let m=0;m<15;m++){a("litter",m);const p=(m*7.13+Math.abs(e)*.9)%26,x=m%2?-1.7-m%3*.14:2.15;l(.16+m%3*.04,.009,.11,m%4?"#b3b2a0":"#815243",p,.012,x).rotation.y=m*2.1}const c=document.createElement("canvas");c.width=512,c.height=128;const h=c.getContext("2d");h.fillStyle="#363e34",h.fillRect(0,0,512,128),h.fillStyle="#c8c3a9",h.font="bold 34px Arial",h.textAlign="center",h.fillText(["ДВОР № 7","ПРОХОД","ДВОРОВЫЕ ИСТОРИИ"][(e%3+3)%3],256,76);const d=new sn(c);d.colorSpace=st;const f=new Ft({map:d}),g=new we(this.plane,f);g.scale.set(2.5,.625,1),g.position.set(8,2.8,-3.89),this.editable&&(g.userData.module={kind:"sign",id:"sign"}),t.add(g),s.push(d,f);const _=new Map;for(const m of r){const p=m.geometry.uuid+m.material.uuid;_.has(p)||_.set(p,[]),_.get(p).push(m)}for(const m of _.values()){const p=m[0],x=new Lr(p.geometry,p.material,m.length);this.editable&&(x.userData.modules=m.map(y=>y.userData.module));for(let y=0;y<m.length;y++)m[y].updateMatrix(),x.setMatrixAt(y,m[y].matrix);x.castShadow=!0,x.receiveShadow=!0,x.computeBoundingSphere(),t.add(x),s.push(x)}return n.push(...this.addBottles(t,e)),this.scene.add(t),{group:t,bottles:n,local:s}}update(e){const t=Math.floor(e/26);if(t!==this.chunkIndex){this.chunkIndex=t;for(let n=t-2;n<=t+2;n++)this.chunks.has(n)||this.chunks.set(n,this.makeChunk(n));for(const[n,s]of this.chunks)if(Math.abs(n-t)>2){this.scene.remove(s.group);for(const r of s.local)r.dispose();this.chunks.delete(n)}}}nearestBottle(e,t=.95){let n=null;for(const s of this.chunks.values())for(const r of s.bottles){const o=Math.hypot(r.x-e.x,r.z-e.z);!r.taken&&o<t&&(t=o,n=r)}return n}takeBottle(e,t){return!t||t.taken||!Array.from(this.chunks.values()).some(n=>n.bottles.includes(t))||Math.hypot(t.x-e.x,t.z-e.z)>=.95?!1:(t.taken=!0,t.mesh.visible=!1,!0)}collect(e){let t=0;for(const n of this.chunks.values())for(const s of n.bottles)!s.taken&&Math.hypot(s.x-e.x,s.z-e.z)<.65&&(s.taken=!0,s.mesh.visible=!1,t++);return t}}class db{constructor(e){this.scene=e;const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),s=n.createRadialGradient(64,64,5,64,64,64);s.addColorStop(0,"rgba(0,0,0,.55)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,128,128),this.geometry=new an(1,1),this.material=new Ft({map:new sn(t),transparent:!0,depthWrite:!1})}add(){const e=new we(this.geometry,this.material);return e.rotation.x=-Math.PI/2,this.scene.add(e),e}update(e){const t=e.shadow;t&&(t.visible=e.root.visible,t.position.set(e.root.position.x,.012,e.root.position.z),t.scale.set(.9+Math.max(0,e.root.position.y)*.2,.6,1))}}const af={mode:"free-preview",async request(){return{completed:!0}}};async function fb(i,e,t,n=3e4){let s;try{return(await Promise.race([Promise.resolve().then(()=>i.request({placement:e,runId:t})),new Promise(r=>{s=setTimeout(()=>r({completed:!1}),n)})]))?.completed===!0}catch{return!1}finally{clearTimeout(s)}}const lf="bomzh:endless-record:v1",Fo=i=>Number.isSafeInteger(i)&&i>=0;function cf(i){try{const e=JSON.parse((i??globalThis.localStorage).getItem(lf));return e&&Fo(e.levels)&&Fo(e.score)?e:{levels:0,score:0}}catch{return{levels:0,score:0}}}function pb(i,e){const t=cf(e);if(!Fo(i.levels)||!Fo(i.score)||!(i.levels>t.levels||i.levels===t.levels&&i.score>t.score))return t;const s={levels:i.levels,score:i.score};try{(e??globalThis.localStorage).setItem(lf,JSON.stringify(s))}catch{}return s}function uf(i,e=0){i.updateMatrixWorld(!0);const t=new Cc,n=new yi(new w(0,0,1),-e),s=new w,r=[];for(const o of[-1,1])for(const a of[-1,1])t.setFromCamera(new pe(o,a),i),t.ray.intersectPlane(n,s)&&r.push(s.x);return[Math.min(...r),Math.max(...r)]}function mb(i,e,t){const n=[];for(const s of[-1.4,1.4])for(const r of[0,3.2])for(const o of[-.6,.6])n.push(new w(e+s,r,t+o).project(i).x);return[Math.min(...n),Math.max(...n)]}function gb(i,e,t){let s=uf(i,t)[e<0?0:1]+e*2.5;for(let r=0;r<20;r++){const o=mb(i,s,t);if(e<0?o[1]<-1.15:o[0]>1.15)return{x:s,z:t,side:e,projected:o};s+=e*2}throw new Error("Could not locate an offscreen entrance")}const J=i=>document.getElementById(i),Fc=new URLSearchParams(location.search).get("location");let qn=Fc==="entrance"?"entrance":"street";if(!Fc)try{localStorage.getItem("bomzh:starting-location")==="entrance"&&(qn="entrance")}catch{}let wn=qn,Vi=null,wo=[],Gt=null,jt=null;const _b=Fc==="courtyard",Cr=Iy();zl(Cr,"entrance");const Oc=["lighting","compositing"].includes(new URLSearchParams(location.search).get("editor")),Ms=new xy;J("lighting-open").hidden=!Oc;const bt=new dc;bt.background=new De("#92968d");bt.fog=new hc("#92968d",24,62);const Xi=sM(new URLSearchParams(location.search).get("quality"),innerWidth,devicePixelRatio),Ur=Xi.lowQuality,hf=new tM(Xi.pixelRatio),Tt=new Qv({canvas:J("game"),antialias:!Ur,powerPreference:"high-performance"});Tt.setPixelRatio(Xi.pixelRatio);Tt.shadowMap.enabled=!Ur;Tt.shadowMap.type=ec;Tt.shadowMap.autoUpdate=!0;Tt.shadowMap.needsUpdate=!0;Tt.outputColorSpace=st;Tt.toneMapping=id;Tt.toneMappingExposure=1.08;const Nn=new Yt(40,1,.1,100),Wa=Nn.clone(),Pn=new uM(Tt,{grading:Ms,lowQuality:Ur,samples:Xi.samples,enabled:new URLSearchParams(location.search).get("dof")==="on"}),Zh=new w,mn=new tb(Nn,{reducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches});try{const i=localStorage.getItem("bomzh:camera-shake:v1");(i==="on"||i==="off")&&mn.setShakeEnabled(i==="on")}catch{}J("camera-shake").checked=mn.isShakeEnabled();J("camera-shake").onchange=i=>{mn.setShakeEnabled(i.target.checked);try{localStorage.setItem("bomzh:camera-shake:v1",i.target.checked?"on":"off")}catch{}};const kc=new Dd("#e1e4e2","#696a67",2.6);bt.add(kc);const Tn=new No("#f1e8df",2.2);Tn.position.set(-8,14,6);Tn.castShadow=!0;Tn.shadow.mapSize.set(Xi.shadowSize,Xi.shadowSize);Object.assign(Tn.shadow.camera,{left:-18,right:18,top:14,bottom:-14,far:45});Tn.shadow.bias=-.001;Tn.shadow.normalBias=.025;Tn.shadow.radius=3;bt.add(Tn,Tn.target);const Bs=new mM({scene:bt,renderer:Tt,sun:Tn,ambient:kc,lowQuality:Ur});new URLSearchParams(location.search).get("lighting")==="reference"&&Bs.reset();const xb=new Dy({scene:bt,lighting:Bs,sun:Tn,ambient:kc,renderer:Tt}),vb=i=>new Mt({color:i,roughness:.92}),Kl=new db(bt),Eo=new cb(bt),df=new iM(bt),bs=new Ty(bt),Oo=new $y(bt),yb=new gy(bt,{lowQuality:Ur}),ff=new Ky(bt),en=new Zy(bt),On=new hb(bt,{textured:!1});On.update(-8);const pf=new Uy(bt,On),Ne={health:100,bottles:0,drunkBottles:0,score:0,defeated:0,bruisersDefeated:0,over:!1},P={x:-8,z:.5,facing:1,heading:Math.PI/2,attack:null,attackTime:0,cooldowns:{jab:0,kick:0,spray:0,burp:0},queuedAttack:null,stun:0,combo:0,lastJab:-10,invulnerable:0,stamina:100,regenDelay:0,dodge:0,dodgeCooldown:0,dashX:1,dashZ:0},At=new Oy;At.beginRun(globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`);const pr=new Ny;let Qt=null,mr=null,Ri=!1,mf=!1,Si=!1;const lt=new eb;let gf=null,gt=null,fn=0,Gi=-8,zs=null,ot=!1,Pr=cf();const hs=[],To=[],Pt=[],it=new Set;let _f=0,yt=0,xf=0,ii=null,Ao=!1,It=!1;function Bc(i){if(_b&&i<=0)return{courtyard:!0,variant:Math.max(0,xs.indexOf(new URLSearchParams(location.search).get("yard")))};const e=kl(i,qn);return wn==="street"&&i>=0&&e.location==="entrance"?{...e,courtyard:!0}:e}function zc(i){return wn==="street"&&!!Bc(Math.floor(i/26)).courtyard}function $l(i){if(!zc(i))return-2;const e=(i%26+26)%26;return-2-1.5*Math.max(0,Math.min(1,(e-4.8)/2,(21.2-e)/2))}function go(i,e,t,n=!1){const s=Xd(i,e,t,[P,...Pt],(r,o)=>{if(!i.entering){const[a,l]=lt.bounds;r=nt.clamp(r,a+.3,l-.3)}return[r,nt.clamp(o,$l(r),2)]});return n&&zd(i,s),s}function ko(){const i=wn==="street"&&zc(P.x)?jd[Bc(Math.floor(P.x/26)).variant]:Yd[wn];J("location-name").textContent=i,document.querySelectorAll("[data-start-location]").forEach(e=>{e.classList.toggle("selected",e.dataset.startLocation===qn),e.setAttribute("aria-pressed",String(e.dataset.startLocation===qn)),e.disabled=yt>0})}function vf(i){wn=i;for(const e of Pt)e.health<=0&&(e.corpseAge=4,e.root.visible=!1,e.warning.visible=!1);Ly(On,i==="entrance"?Cr:Vi,P.x),Oo.setVisible(i==="street"),ko()}function Mb(i){i!==wn&&(P.heading=Math.PI,P.facing=1,Gt={to:i,elapsed:0,applied:!1},it.clear(),J("location-transition").hidden=!1,J("transition-title").textContent=Yd[i],J("transition-subtitle").textContent=i==="entrance"?"С улицы — в подъезд":"Снова на район")}function bb(i){if(!Gt)return;const e=Gt;e.elapsed+=i;const t=Math.min(1,e.elapsed/.22,(.75-e.elapsed)/.28);J("location-transition").style.opacity=Math.max(0,t),!e.applied&&e.elapsed>=.25&&(e.applied=!0,jt&&(P.x=Math.floor(jt.x/26)*26+(e.to==="entrance"?15.15:23.2),P.z=-1.45,P.heading=Math.PI/2,P.facing=1,Gi=Math.max(Gi,P.x-.25)),vf(e.to),jt=null,bs.set(null)),e.elapsed>=.75&&(Gt=null,J("location-transition").hidden=!0,it.clear())}for(const i of document.querySelectorAll("[data-start-location]"))i.onclick=()=>{if(!(!It||yt>0)){qn=i.dataset.startLocation;try{localStorage.setItem("bomzh:starting-location",qn)}catch{}vf(qn)}};function qt(i){J("toast").textContent=i,xf=yt+2}function In(i=400){if(!Ao)return;ii??=new AudioContext,ii.resume();const e=ii.createOscillator(),t=ii.createGain();e.type="triangle",e.frequency.setValueAtTime(i,ii.currentTime),t.gain.setValueAtTime(.05,ii.currentTime),t.gain.exponentialRampToValueAtTime(.001,ii.currentTime+.12),e.connect(t),t.connect(ii.destination),e.start(),e.stop(ii.currentTime+.13)}J("sound").onclick=()=>{Ao=!Ao,J("sound").textContent="Звук: "+(Ao?"вкл.":"выкл."),In()};function bn(){Pr=pb({levels:lt.index,score:Ne.score}),J("health").textContent=Math.ceil(Ne.health),J("health-bar").value=Ne.health,J("level").textContent=lt.index+1,J("score").textContent=Ne.score,J("best").textContent=Pr.levels,Hc()}function Hc(){J("wallet").textContent=At.profile.coins,J("shop-open").disabled=!It||!!gt,J("shop-coins").textContent=At.profile.coins,J("storage-hint").hidden=At.persistent,Ne.over&&Vc()}function Vc(){const i=At.run;J("run-coins").textContent=`Монеты за забег: ${i.earned}${i.doubled?" + "+i.earned+" бонус":""} · В кошельке: ${At.profile.coins}`,J("revive").hidden=i.revived||i.closed,J("revive").disabled=Si,J("double-coins").hidden=i.doubled,J("double-coins").disabled=Si||i.earned===0,J("reward-note").textContent=i.doubled?"Монеты удвоены. Можно начать новый забег.":"Второй шанс: 60 здоровья и 3 секунды защиты. Бонусы бесплатные в тестовой версии. Удвоение завершает забег.",J("restart").disabled=Si,J("ending-shop").disabled=Si}function Sb(){Ne.over=!0,it.clear(),bn(),J("ending").hidden=!1,J("ending-title").textContent="Забег окончен",J("ending-text").textContent=`Пройдено участков: ${lt.index}. Очки: ${Ne.score}. Побеждено: ${Ne.defeated}. Рекорд: ${Pr.levels} участков.`,J("reward-status").textContent="",Vc()}function yf(){const i=J("shop-items");i.replaceChildren();for(const e of Rr){const t=At.profile.owned.includes(e.id),n=At.profile.equipped===e.id,s=document.createElement("article");s.className="shop-item"+(n?" selected":""),s.innerHTML=`<span class="shop-icon" aria-hidden="true">${e.icon}</span><div><h3>${e.name}</h3><p>${e.description}</p></div>`;const r=document.createElement("button");r.dataset.cosmetic=e.id,r.textContent=n?"Надето":t?"Надеть":`${e.price} 🪙 · Купить`,r.disabled=n||!t&&At.profile.coins<e.price,r.onclick=()=>{(t?At.equip(e.id):At.buy(e.id).ok)&&(mr?.set(At.profile.equipped),J("shop-status").textContent=t?"Образ надет.":"Куплено и надето!",Hc(),yf())},s.append(r),i.append(s)}}function Mf(){!It||gt||Si||Ri||Jl.isOpen()||(mf=ot,Ri=!0,ot=!0,it.clear(),J("pause-menu").hidden=!0,J("shop").hidden=!1,J("shop-status").textContent="",Hc(),yf(),J("shop-close").focus())}function bf(){Ri=!1,ot=mf,J("shop").hidden=!0,J("pause-menu").hidden=!ot,Ne.over||J("shop-open").focus()}J("shop-open").onclick=Mf;J("ending-shop").onclick=Mf;J("shop-close").onclick=bf;async function Sf(i){if(!Ne.over||Si||Ri)return;const e=At.run;if(i==="revive"&&(e.revived||e.closed)||i==="double"&&(e.doubled||e.earned===0))return;if(Si=!0,Vc(),J("reward-status").textContent="Получаем бонус…",await fb(af,i,e.id)&&Ne.over&&At.claim(i,e.id))if(i==="revive"){Ne.over=!1,Ne.health=60,P.stamina=100,P.stun=0,P.hurt=0,P.attack=null,P.queuedAttack=null,P.dodge=0,P.combo=0,P.invulnerable=3,it.clear(),_r=0;for(const n of Pt)n.windup=0,n.strike=0,n.cooldown=Math.max(1.5,n.cooldown),n.stun=Math.max(1,n.stun),n.warning.visible=!1;J("ending").hidden=!0,qt("Второй шанс! 3 секунды защиты")}else J("reward-status").textContent="Монеты удвоены!";else J("reward-status").textContent="Бонус не получен. Можно попробовать ещё раз.";Si=!1,bn()}J("revive").onclick=()=>Sf("revive");J("double-coins").onclick=()=>Sf("double");J("restart").onclick=()=>location.reload();function Wo(){if(zs){Nr();return}if(!(Qt?.visible||Gt)){if(Jl.isOpen()){Jl.hide();return}!It||Ne.over||Ri||(ot=!ot,it.clear(),J("pause-menu").hidden=!ot,ot&&J("resume").focus())}}const Jl=gM(Bs,{open:()=>{if(!Oc||!ot||Ri)return!1;it.clear(),J("pause-menu").hidden=!0},close:()=>{J("pause-menu").hidden=!1,J("lighting-open").focus()}},Ms);J("back-to-menu").onclick=()=>{J("pause-menu").hidden=!0,Qt?.show()};J("ending-menu").onclick=()=>Qt?.show();J("pause").onclick=Wo;J("resume").onclick=Wo;function gr(i){if(i!=="kick"&&!(!It||Ne.over||ot||Gt||gt||P.stun>0||P.dodge>0||P.pickup)){if(P.attack){P.attackTime/(P.attackSpec??Mn[P.attack]).duration>.15&&(P.queuedAttack={kind:i,until:yt+(P.attackSpec??Mn[P.attack]).duration-P.attackTime+.2});return}if(!(P.cooldowns[i]>0)){if(!of(P,i)){qt("Передохни или продолжай кулаками — они не тратят силы");return}if(i==="jab"){const e=(en.equipped?Vd(P.userActions).length:Ls(P.userActions).length)||3;P.combo=yt-P.lastJab<(P.attackSpec?.duration??.65)+.65?P.combo%e+1:1,P.lastJab=yt}else P.combo=0;if(P.attackSpec=i==="jab"?{...Mn.jab,...Gd(P.userActions,P.combo-1)}:P.userActions?.clips[i]?{...Mn[i],duration:P.userActions.clips[i].duration,clip:i}:Mn[i],i==="jab"&&en.equipped){const e=oy(P.userActions,P.combo-1);e||(P.combo=1),P.attackSpec={...Jy(en.equipped.type,Mn.jab),...e}}P.attackSerial=(P.attackSerial??0)+1,P.attack=i,P.attackTime=0,P.cooldowns[i]=P.attackSpec.cooldown,P.hit=!1,P.sprayHits=new Set,In(i==="burp"?90:i==="kick"?180:300)}}}function wf(){if(!It||Ne.over||ot||Gt||gt||P.dodge>0||P.dodgeCooldown>0||P.pickup||!of(P,"dodge"))return;let i=Number(it.has("right"))-Number(it.has("left")),e=Number(it.has("down"))-Number(it.has("up"));const t=Math.hypot(i,e);t?(i/=t,e/=t):(i=Math.sin(P.heading),e=Math.cos(P.heading));const n=eM(P.userActions);P.dashX=i,P.dashZ=e,P.heading=fr(i,e),Math.abs(i)>.01&&(P.facing=Math.sign(i)),P.dodgeDuration=n.duration,P.dodgeSpeed=n.speed,P.dodge=n.duration,P.dodgeCooldown=n.cooldown,P.invulnerable=Math.max(P.invulnerable,n.invulnerability),P.hurt=0,P.attack=null,P.queuedAttack=null,P.stun=0,P.combo=0,mn.impact(.08),In(520)}function Qh(i){Ne.score+=i.type==="bruiser"?75:25,Ne.defeated++,At.earn(i.type==="bruiser"?8:3),i.type==="bruiser"&&Ne.bruisersDefeated++}function Ef(){if(!It||Ne.over||ot||Gt||gt||P.stun>0||P.dodge>0||P.attack||P.pickup)return;if(fn<100){qt("Суперсила копится от попаданий");return}const i=ob(P,Pt);if(!i){qt("Подойди к противнику ближе");return}fn=0,P.attack=null,P.queuedAttack=null,it.clear();const{side:e,endX:t}=lb(P,i,[Math.max(Gi,lt.bounds[0]),lt.bounds[1]]);gt={target:i,elapsed:0,hit:!1,startX:P.x,startZ:P.z,endX:t,side:e},P.facing=e,P.heading=e*Math.PI/2;for(const n of Pt)n!==i&&(n.root.visible=!1),n.warning.visible=!1,n.bar.visible=!1,n.badge.visible=!1;document.body.classList.add("finishing"),J("cinema").querySelector("span").textContent="РЕШАЮЩИЙ УДАР",J("cinema").hidden=!1}function Gc(){const i=On.nearestBottle(P),e=en.nearby;return i&&(!e||Math.hypot(i.x-P.x,i.z-P.z)<=Math.hypot(e.x-P.x,e.z-P.z))?{kind:"bottle",item:i}:e?{kind:"weapon",item:e}:null}function Tf(){if(!It||ot||Gt||Ne.over||gt||P.attack||P.pickup||P.dodge>0||P.stun>0)return;if(jt&&bs.near(P)){Mb(jt.to);return}const i=Gc();if(!i)return;const e=i.item;if(i.kind==="bottle"){zs=e,ot=!0,it.clear(),J("bottle-choice").hidden=!1,J("bottle-drink").focus();return}if(Kd(P,"weapon_pickup",e)){const n=e.x-P.x,s=e.z-P.z;P.heading=fr(n,s),Math.abs(n)>.01&&(P.facing=Math.sign(n)),it.clear();return}const t=en.pickup(e);t&&(P.combo=0,P.lastJab=-10,qt(`${t} в руках · J — удар`),In(480))}function Nr(){zs=null,ot=!1,it.clear(),J("bottle-choice").hidden=!0}function Af(){Ne.drunkBottles++,fn=Yl(fn,20),Ne.drunkBottles%5===0&&(Ne.health=Math.min(100,Ne.health+5)),qt("Глоток кваса · +20% суперсилы"),In(650),bn()}function Wc(i){const e=zs;if(!e||(Nr(),!On.takeBottle(P,e)))return;Ne.bottles++,At.earn(3),Ne.score+=10,P.combo=0,P.lastJab=-10,Kd(P,i==="smash"?"bottle_smash":"bottle_pickup",1)||Af(),bn()}J("bottle-drink").onclick=()=>Wc("drink");J("bottle-smash").onclick=()=>Wc("smash");J("bottle-cancel").onclick=Nr;J("bottle-choice").onclick=i=>{i.target===J("bottle-choice")&&Nr()};J("weapon-pickup").onpointerdown=i=>{i.preventDefault(),Tf()};J("super").onpointerdown=i=>{i.preventDefault(),Ef()};J("dodge").onpointerdown=i=>{i.preventDefault(),wf()};for(const i of document.querySelectorAll("[data-attack]"))i.addEventListener("pointerdown",e=>{e.preventDefault(),gr(i.dataset.attack)});const ps=new Of(J("joystick"),()=>It&&!ot&&!Gt&&!Qt?.visible&&!Ne.over),Zl={A:"left",D:"right",W:"up",S:"down",a:"left",ArrowLeft:"left",d:"right",ArrowRight:"right",w:"up",ArrowUp:"up",s:"down",ArrowDown:"down"};window.addEventListener("keydown",i=>{if(zs){if(i.key==="Escape")i.preventDefault(),Nr();else if(!i.repeat&&(i.code==="Digit1"||i.code==="Digit2"))i.preventDefault(),Wc(i.code==="Digit1"?"drink":"smash");else if(i.key==="Tab"){const e=[J("bottle-drink"),J("bottle-smash"),J("bottle-cancel")],t=e.indexOf(document.activeElement);i.preventDefault(),e[(t+(i.shiftKey?2:1)+3)%3].focus()}return}if(i.key==="Escape"&&!i.repeat){Ri?bf():Wo();return}if(!(ot||Gt)&&(i.key==="Shift"&&it.add("slow"),Zl[i.key]&&(i.preventDefault(),it.add(Zl[i.key])),!i.repeat)){const e=i.key.toLowerCase();(e==="e"||i.code==="KeyE")&&(i.preventDefault(),Tf()),e==="f"&&Ef(),e==="j"&&gr("jab"),e==="l"&&gr("spray"),e==="k"&&gr("burp"),i.code==="Space"&&(i.preventDefault(),wf())}});window.addEventListener("keyup",i=>it.delete(i.key==="Shift"?"slow":Zl[i.key]));window.addEventListener("blur",()=>it.clear());document.addEventListener("visibilitychange",()=>{it.clear()});function ed(i,e){const t=new _t,n=ZM(i);n.updateMatrixWorld(!0);const s=new gn().setFromObject(n),r=s.getSize(new w),o=s.getCenter(new w),a=e/r.y;n.scale.setScalar(a),n.position.set(-o.x*a,-s.min.y*a,-o.z*a),t.add(n),bt.add(t);const l=[];n.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0),c.isBone&&l.push({bone:c,rest:c.rotation.clone()})});const u={root:t,visual:n,bones:l,height:e,walkDistance:0,baseVisualY:n.position.y,shadow:Kl.add()};return qy(u),u}const Xa=new _M;try{let r=function(c){const h=ed(c.model==="hero"?i.scene:e.scene,c.height);return Th(h,c.model==="hero"?t:s),h},o=function(c){bt.remove(c.root,c.shadow);const h=new Set;c.visual.traverse(d=>{if(d.isSkinnedMesh&&h.add(d.skeleton),d.isMesh&&d.userData.wardrobeMaterials)for(const f of Array.isArray(d.material)?d.material:[d.material])f.dispose()});for(const d of h)d.dispose()},l=function(){if(P.visual){mr?.set("classic"),o(P);for(const h of[...a,"userActions","userBoneIndices","walkSpeed","walkStride","runSpeed","runStride","closedLoops","referenceFingers","referenceFingersByClip","poseHierarchy","bindByName","lastMotion","transitionFrom","motionId","transitionStart","weaponReferenceRotation"])delete P[h]}const c=r(vs.find(h=>h.id===pr.character));a=Object.keys(c),Object.assign(P,c),en.hand=null,en.palmOffset=null,pr.apply(P),mr=new Qd(P),mr.set(At.profile.equipped),P.root.position.set(P.x,0,P.z),P.root.rotation.y=P.heading,ri(P,yt,!1,null,0)},u=function(c,h,d,f,g){const _=nb[d],m={..._,health:Math.round(_.health*g.health),damage:Math.round(_.damage*g.damage),speed:_.speed*g.speed,windup:_.windup*g.windup},p=ed(e.scene,d==="bruiser"?2.2:d==="runner"?1.8:1.95);Th(p,s),p.root.position.set(c,0,h),p.root.rotation.y=-Math.PI/2;const x=new we(new an(.8,.07),new Ft({color:m.color,side:Lt}));x.position.y=2.4,p.root.add(x);const y=new we(new hi(m.range-.08,m.range,32),new Ft({color:d==="bruiser"?"#ec738d":"#f2bb51",transparent:!0,opacity:.55,side:Lt,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.position.set(c,.015,h),y.visible=!1,bt.add(y);const v=new we(new Sc(d==="bruiser"?.14:.08),vb(m.color));v.position.set(-.7,2.7,0),p.root.add(v),Pt.push({...p,x:c,z:h,type:d,spec:m,encounter:f,entering:!0,corpseAge:0,down:0,stun:0,knockback:0,health:m.health,windup:0,cooldown:1,bar:x,warning:y,badge:v,flash:0,aimX:-1,aimZ:0})};const[i,e,t,n,s]=await Promise.all([Xa.loadAsync("./models/hobo.glb?v=oct29"),Xa.loadAsync("./models/enemy.glb?v=perf1"),fetch("./models/hobo-actions.json?v=run1").then(c=>{if(!c.ok)throw new Error("Actions unavailable");return c.json()}),Xa.loadAsync("./models/street.glb?v=bench1"),fetch("./models/enemy-actions.json?v=run1").then(c=>{if(!c.ok)throw new Error("Enemy actions unavailable");return c.json()})]);n.scene.traverse(c=>{c.isMesh&&(/graffiti/i.test(c.name)||/graffiti/i.test(c.material?.name??""))&&(c.visible=!1)}),hy(n.scene),hM(n.scene),My(n.scene),py(n.scene),zl(n.scene,"street"),Vi=n.scene,wo=xs.map((c,h)=>{const d=Ey(Vi,h);return zl(d,"street"),d}),dM(n.scene,Tt,Bs,wo),On.templateForChunk=c=>{if(wn==="entrance")return Cr;const h=Bc(c);return h.courtyard?wo[h.variant]:Vi},On.setEnvironment(wn==="entrance"?Cr:Vi),On.update(-8),Oo.setVisible(wn==="street"),ko();let a=[];l(),Qt=new jy({renderer:Tt,wallet:At,appearance:pr,makeActor:c=>{const h=r(c);return bt.remove(h.root,h.shadow),h},record:()=>Pr,onOpen:()=>{ko(),ot=!0,it.clear(),J("pause-menu").hidden=!0,J("ending").hidden=!0,J("menu-play").querySelector("span").textContent=Ne.over?"Новый забег":yt>0?"Продолжить":"Начать забег"},onStart:()=>{if(Ne.over){sessionStorage.setItem("bomzh:start-now","1"),location.reload();return}l(),ot=!1,J("pause-menu").hidden=!0,bn()}}),gf=u,It=!0,Cf(),J("loading").style.display="none",bn(),Oc?(mn.update({player:P,enemies:Pt,time:0,dt:3,width:innerWidth,height:innerHeight}),Wo(),J("lighting-open").click()):(mn.update({player:P,enemies:Pt,time:0,dt:3,width:innerWidth,height:innerHeight}),Qt.show(),sessionStorage.getItem("bomzh:start-now")==="1"&&(sessionStorage.removeItem("bomzh:start-now"),J("menu-play").click()))}catch(i){console.error(i),J("load-status").textContent="Не удалось загрузить модели. Проверь соединение и обнови страницу."}let _r=0;const Ro=[];function qa(i,e,t=.18){mn.impact(t);const n=new we(new hi(.1,.22,12),new Ft({color:16769690,transparent:!0,depthWrite:!1,side:Lt}));n.position.set(i,1.1,e),n.quaternion.copy(Nn.quaternion),bt.add(n),Ro.push({mesh:n,age:0}),_r=.055}const wb=new ag;let rr=null;function Rf(){(ot||Gt||Ne.over||gt)&&ps.reset(),_f++,requestAnimationFrame(Rf);const i=wb.getDelta(),e=hf.sample(i,It&&!ot&&!document.hidden);e!==null&&(rr=e),rr!==null&&It&&!ot&&!P.moving&&!P.attack&&!P.pickup&&!gt&&it.size===0&&(Tt.setPixelRatio(rr),Xc(),rr=null);const t=Math.min(i,.05);bb(ot?0:t);const n=_r>0||ot||Gt?0:t;_r=Math.max(0,_r-t),yt+=n;for(let c=Ro.length-1;c>=0;c--){const h=Ro[c];h.age+=t,h.mesh.scale.setScalar(1+h.age*6),h.mesh.material.opacity=1-h.age/.22,h.age>=.22&&(bt.remove(h.mesh),h.mesh.geometry.dispose(),h.mesh.material.dispose(),Ro.splice(c,1))}if(It&&!Ne.over&&!gt&&!Qt?.visible){if(n>0)for(let S=hs.length-1;S>=0;S--){const O=hs[S];if(O.wait-=n,O.wait<=0){const k=gb(Nn,O.foe.side,O.foe.z);gf(k.x,k.z,O.foe.type,O.arena.id,O.arena.scaling),To.push({level:O.arena.number,...k}),To.length>24&&To.shift(),hs.splice(S,1)}}if(P.pickup){const S=P.pickup;S.elapsed+=n;const O=fs(P);if(!S.applied&&O>=.55)if(S.applied=!0,S.kind==="weapon_pickup"){const k=en.pickup(S.payload);k&&(P.combo=0,P.lastJab=-10,qt(`${k} в руках · J — комбо`),In(480))}else S.kind==="bottle_smash"?(en.equip("bottle"),P.combo=0,P.lastJab=-10,mn.impact(.1),In(180),qt("Розочка в руке · J — удар"),bn()):Af();O>=1&&(P.pickup=null)}P.stun=Math.max(0,P.stun-n),ib(P,n),P.dodgeCooldown=Math.max(0,P.dodgeCooldown-n);const c=Math.min(P.dodge,n);P.dodge=Math.max(0,P.dodge-n);const h=P.dodge>0||c>0;for(const S of Object.keys(Mn))P.cooldowns[S]=Math.max(0,P.cooldowns[S]-n);P.invulnerable=Math.max(0,P.invulnerable-n),P.hurt=Math.max(0,(P.hurt??0)-n);let d=Number(it.has("right"))-Number(it.has("left"))+ps.x,f=Number(it.has("down"))-Number(it.has("up"))+ps.y;const g=Math.hypot(d,f);P.moving=g>0,g&&(d/=g,f/=g);const _=it.has("left")||it.has("right")||it.has("up")||it.has("down")?1:Math.min(1,g);P.locomotion=it.has("slow")||ps.active&&_<.65?"walk":"run";const m=P.locomotion==="run"?P.runSpeed??(P.walkSpeed??_h)*1.6:P.walkSpeed??_h,p=P.x,x=P.z;h&&(d=P.dashX,f=P.dashZ);const y=h?c:n,v=P.pickup?0:h?P.dodgeSpeed??8:P.stun>0?.6:P.attack?.35:m*_;let[b,M]=lt.bounds;if(lt.active){const S=uf(mn.framingCamera,P.z);b=Math.max(b,S[0]+.9),M=Math.min(M,S[1]-.9),b>M&&(b=lt.bounds[0],M=lt.bounds[1])}jt&&(M=Math.min(M,jt.x+.8)),b=Math.max(b,Gi),Xd(P,P.x+d*v*y,P.z+f*v*y,Pt,(S,O)=>(S=nt.clamp(S,b,M),[S,nt.clamp(O,$l(S),2.1)])),g&&!P.attack&&!P.pickup&&(P.heading=Ga(P.heading,fr(d,f),n),d&&(P.facing=Math.sign(d)));const A=Math.hypot(P.x-p,P.z-x);P.moving=A>1e-5,!P.attack&&!h&&zd(P,A);let L=0;if(P.attack){const S=P.attackSpec??Mn[P.attack];if(P.attackTime+=n,L=P.attackTime/S.duration,L>=S.hitAt&&(P.attack==="spray"?L<=S.activeUntil:!P.hit)){P.hit=!0;let O=0;for(const k of Pt)if(k.health>0&&!(P.attack==="spray"&&P.sprayHits.has(k))&&QM(P,k,P.attack)){P.attack==="spray"&&P.sprayHits.add(k),fn=Yl(fn,12),k.health-=S.damage+(P.combo===3?12:0);const F=P.combo===3;k.knockback=P.facing*(F?5:P.attack==="kick"?4:1.4),k.flash=.22,qa(k.x,k.z,F?.26:P.attack==="kick"?.24:P.attack==="spray"?.1:.18),(k.type!=="bruiser"||P.attack!=="jab")&&(k.windup=0,k.strike=0,k.cooldown=.4,k.stun=P.attack==="jab"?.22:P.attack==="spray"?.7:.4,F&&(k.down=1.25,k.stun=0)),O++,k.health<=0&&(Qh(k),fn=Yl(fn,18),qt("Противник побеждён"))}O&&(S.weapon&&en.wear()&&qt("Оружие сломалось — продолжай кулаками"),In(110),P.combo===3&&qt("Комбо! Третий удар сильнее"),bn())}if(L>=1&&(P.cooldowns[P.attack]=Math.max(0,P.cooldowns[P.attack]-1e-6),P.attack=null,P.queuedAttack)){const O=P.queuedAttack;P.queuedAttack=null,O.until>=yt&&(gr(O.kind),L=0)}}const E=P.moving&&(!h||g>0);P.root.position.set(P.x,0,P.z),P.root.rotation.y=P.heading+Wl(yt,E,P.attack,L,P.combo).spin,P.weaponType=en.equipped?.type??(P.attack?P.attackSpec?.weapon:null),P.animationTime=yt,ri(P,yt,E,P.pickup?.kind??P.attack,P.pickup?fs(P):L);for(const S of Pt){if(S.health<=0){S.corpseAge+=n,S.root.rotation.z=nt.damp(S.root.rotation.z,-(S.fallSide??1)*Math.PI/2,5,n),S.root.position.y=nt.damp(S.root.position.y,.2,5,n),S.bar.visible=!1,S.badge.visible=!1,S.warning.visible=!1,ri(S,yt,!1,null,0);continue}if(S.entering){const te=P.x-S.x,oe=P.z-S.z,ue=Math.hypot(te,oe),Pe=Math.max(3.8,S.spec.speed*1.65);ue>.1&&go(S,S.x+te/ue*n*Pe,S.z+oe/ue*n*Pe,!0),S.root.position.set(S.x,0,S.z),S.root.rotation.y=Ga(S.root.rotation.y,fr(te,oe),n),ri(S,yt,!0,null,0),ue<3.4&&S.x>lt.bounds[0]+.4&&S.x<lt.bounds[1]-.4&&(S.entering=!1);continue}const[O,k]=lt.bounds;if(go(S,S.x+S.knockback*n,S.z),S.knockback*=Math.exp(-8*n),S.down=Math.max(0,S.down-n),S.stun=Math.max(0,S.stun-n),S.down>0){S.windup=0,S.strike=0,S.warning.visible=!1,S.bar.visible=!1,S.badge.visible=!1,S.root.position.set(S.x,.06,S.z),S.root.rotation.z=nt.damp(S.root.rotation.z,S.down>.4?-1.48:0,12,n),ri(S,yt,!1,null,0);continue}S.root.rotation.z=nt.damp(S.root.rotation.z,0,14,n),S.root.position.y=0,S.bar.visible=!0,S.badge.visible=!0;const F=Math.hypot(P.x-S.x,P.z-S.z);S.cooldown-=n,S.flash=Math.max(0,S.flash-n),S.hurt=S.flash;let j=!1;if(S.stun>0)S.windup=0,S.strike=0;else if(S.strike>0){const te=S.strike;S.strike=Math.max(0,S.strike-n),S.type==="runner"&&go(S,S.x+S.aimX*3*n,S.z+S.aimZ*3*n),te>.225&&S.strike<=.225&&sb(S,P)&&(Ne.health=Math.max(0,Ne.health-S.spec.damage),P.invulnerable=.55,P.hurt=.22,P.stun=.18,P.attack=null,P.pickup=null,P.queuedAttack=null,P.combo=0,P.regenDelay=1,qa(P.x,P.z,S.type==="bruiser"?.3:.22),qt(`${S.spec.label}: −${S.spec.damage} здоровья`),In(90),bn(),Ne.health||Sb())}else if(S.windup>0)S.windup=Math.max(0,S.windup-n),S.windup<=0&&(S.strike=.3,S.cooldown=S.spec.recovery);else if(F<8&&F>S.spec.range*.7){const te=Pt.indexOf(S)%2?1:-1,oe=nt.clamp(P.z+te*.55,$l(S.x)+.1,1.9),ue=P.x-S.x,Pe=oe-S.z,be=Math.hypot(ue,Pe);be>.05&&go(S,S.x+ue/be*n*S.spec.speed,S.z+Pe/be*n*S.spec.speed,!0),j=!0}else F<=S.spec.range&&S.cooldown<=0&&(cy(S),S.windup=S.spec.windup,S.aimX=(P.x-S.x)/Math.max(F,.01),S.aimZ=(P.z-S.z)/Math.max(F,.01));S.warning.visible=S.windup>0||S.strike>0,S.warning.position.set(S.x,.015,S.z),S.warning.material.opacity=S.windup>0?.3+.4*(1-S.windup/S.spec.windup):.7,S.root.position.set(S.x,0,S.z),S.root.rotation.y=Ga(S.root.rotation.y,fr(P.x-S.x,P.z-S.z),n),S.bar.scale.x=Math.max(0,S.health/S.spec.health),S.bar.quaternion.copy(Nn.quaternion),S.bar.quaternion.premultiply(S.root.quaternion.clone().invert()),S.bar.material.color.set(S.windup>0?"#ffdd66":S.spec.color);const G=uy(S);ri(S,yt,j,G.kind,G.progress)}for(let S=Pt.length-1;S>=0;S--)if(Pt[S].health<=0&&Pt[S].corpseAge>3){const O=Pt[S];bt.remove(O.root,O.warning,O.shadow);for(const F of[O.warning,O.bar,O.badge])F.geometry.dispose(),F.material.dispose();const k=new Set;O.root.traverse(F=>{F.isSkinnedMesh&&k.add(F.skeleton)});for(const F of k)F.dispose();Pt.splice(S,1)}en.update(P),Oo.update(P.x,yt);const C=ff.update(P,Ne.health,n>0);C&&(Ne.health+=C,qt(`Аптечка · +${C} здоровья`),In(740),bn()),On.update(P.x),ko(),bs.update(yt);const T=hs.map(S=>({encounter:S.arena.id,health:1})),D=jt?null:lt.update(n,P.x,[...Pt,...T]);if(D?.type==="spawn")for(const S of D.enemies)hs.push({foe:S,arena:D.arena,wait:S.delay});D?.type==="warning"&&qt(`${D.arena.title} · противники приближаются!`),D?.type==="clear"&&(jt=by(D.arena.index,qn),bs.set(jt),Gi=Math.max(Gi,P.x-.25),At.earn(15),Ne.score+=100*D.arena.number,Ne.health=Math.min(100,Ne.health+8),P.stamina=100,qt(`Участок ${D.arena.number} пройден · +8 здоровья`),bn()),J("danger").hidden=!lt.active,J("danger").textContent=lt.active?`${lt.arena.title} · ${lt.phase==="incoming"?"Новая волна · "+Math.ceil(lt.delay):"Осталось: "+Pt.filter(S=>S.encounter===lt.arena.id&&S.health>0).length}`:"",J("go").hidden=lt.goTime<=0||lt.active,J("stamina").value=P.stamina,J("stamina-value").textContent=Math.floor(P.stamina),J("dodge").disabled=!!P.pickup||P.dodgeCooldown>0||P.stamina<jl.dodge,J("objective").textContent=`Бутылки: ${Ne.bottles} · Побеждено: ${Ne.defeated} · ${jt?jt.to==="entrance"?"Войди в подъезд →":"Найди выход во двор →":lt.active?"Победи группу":"Двигайся вправо →"}`;for(const S of document.querySelectorAll("[data-attack]")){const O=S.dataset.attack;S.disabled=!!P.pickup||!P.attack&&P.cooldowns[O]>0||P.dodge>0||P.stun>0||P.stamina<jl[O]}}if(gt){const c=gt,h=c.target;c.elapsed+=ot?0:t*(c.elapsed>=1.3&&c.elapsed<1.5?.3:1);const d=ab(c.elapsed);if(P.x=nt.lerp(c.startX,c.endX,d.approach),P.z=nt.lerp(c.startZ,h.z,d.approach),P.root.position.set(P.x,0,P.z),P.root.rotation.y=P.heading,ri(P,yt,!1,"finisher",Math.min(1,c.elapsed/2.8)),h.root.rotation.y=-c.side*Math.PI/2,h.root.position.set(h.x+c.side*d.fall*.55,Math.sin(d.fall*Math.PI)*.65,h.z),h.root.rotation.z=-c.side*d.fall*1.5,h.flash=d.contact?.18*(1-d.fall):0,ri(h,yt,!1,null,0),d.contact&&!c.hit&&(c.hit=!0,h.fallSide=c.side,h.health=0,J("cinema").querySelector("span").textContent="НОКАУТ",h.corpseAge=0,Qh(h),qa(h.x,h.z,.3),In(75),bn()),mn.cinematic(P,h,c.elapsed,ot?0:t,innerWidth,innerHeight),d.done){h.x=h.root.position.x,h.down=0,h.knockback=0,P.invulnerable=.6,P.attack=null,P.heading=c.side*Math.PI/2,gt=null;for(const f of Pt)f.root.visible=!0;document.body.classList.remove("finishing"),J("cinema").hidden=!0,qt("Решающий удар!")}}J("super-meter").value=fn,J("super-value").textContent=`${Math.floor(fn)}%`;const s=en.equipped,r=s?Hi[s.type]:null;J("weapon-name").textContent=r?.label??"Кулаки",J("weapon-uses").textContent=s?`${s.uses} / ${r.uses} ударов`:"Без оружия",J("weapon-durability").max=r?.uses??1,J("weapon-durability").value=s?.uses??0;const o=jt&&bs.near(P),a=Gc();if(J("weapon-pickup").hidden=!!P.pickup||!a&&!o||Ne.over||!!gt||ot||!!Gt,J("weapon-pickup").textContent=o?jt.to==="entrance"?"E · Войти в подъезд":"E · Выйти во двор":a?.kind==="bottle"?"E · Поднять бутылку":a?`E · Взять: ${Hi[a.item.type].label}`:"",document.querySelector('[data-attack="jab"] b').textContent=r?.label??"Удар",It&&en.pose(P,P.pickup?.kind==="bottle_pickup"||P.pickup?.kind==="bottle_smash"&&fs(P)<.55||P.pickup?.kind==="weapon_pickup"&&fs(P)<.55||Qt?.visible||!!gt||Ne.over||!!P.attack&&P.attack!=="jab"),J("super").disabled=!!P.pickup||fn<100||!!gt||!!P.attack||P.stun>0||P.dodge>0||Ne.over,J("super").classList.toggle("ready",fn>=100),yt>xf&&(J("toast").textContent=""),Eo.update(P,It&&!Ne.over&&!gt&&P.attack==="spray",yt),pf.update(P,It&&!Ne.over&&!gt&&!Qt?.visible),df.update(P,It&&!Ne.over&&!gt&&P.attack==="burp"),J("shop-open").disabled=!It||!!gt,mr?.update(),It){Kl.update(P);for(const c of Pt)Kl.update(c)}const l=It?P.x:-8;if(gt||mn.update({player:It?P:{x:-8,z:0,facing:1},enemies:Pt,arena:lt.arena,time:yt,dt:ot?0:t,width:innerWidth,height:innerHeight}),Bs.follow(l),xb.update(wn,l),yb.update(l,Qt?.visible?t:n,wn==="street"),Qt?.visible){Pn.renderCustom(()=>Qt.render(t,()=>{Oo.update(P.x,yt+Qt.time),Wa.copy(Nn),Wa.position.x+=Math.sin(Qt.time*.15)*.12,Tt.render(bt,Wa)}));return}const u=gt?.target;Zh.set(u?(P.x+u.root.position.x)/2:P.x,1,u?(P.z+u.root.position.z)/2:P.z),Pn.render(bt,Nn,Zh,ot?0:t)}function Xc(){const i=innerWidth,e=innerHeight;Tt.setSize(i,e),Pn.resize(i,e),Nn.aspect=i/e,Nn.fov=i<650?53:40,Nn.updateProjectionMatrix()}window.addEventListener("resize",Xc);Xc();Ms.onChange=()=>Pn.resize(innerWidth,innerHeight);Nn.position.set(-6.55,1.8,6.2);Rf();window.gameDebug=()=>({ready:It,frames:_f,...Ne,paused:ot,bottleChoice:!!zs,location:wn,startingLocation:qn,courtyard:zc(P.x),pendingExit:jt?{...jt,near:bs.near(P)}:null,locationTransition:Gt?{to:Gt.to,elapsed:Gt.elapsed}:null,menu:Qt?.visible??!1,character:pr.character,palette:pr.palette,nearbyPickup:Gc()?.kind??null,weapons:en.debug(),medkits:ff.debug(),graphics:{mode:Xi.mode,pixelRatio:Tt.getPixelRatio(),width:Tt.domElement.width,height:Tt.domElement.height,samples:Pn.enabled||Ms.active?Pn.target.samples:0,triangles:Tt.info.render.triangles,drawCalls:Tt.info.render.calls,frameMs:hf.averageMs,adaptive:!0,pendingPixelRatio:rr,shadows:{enabled:Tt.shadowMap.enabled,filter:Tt.shadowMap.type===ec?"soft":"pcf",everyFrame:Tt.shadowMap.autoUpdate,size:Tn.shadow.mapSize.x}},compositing:{active:Ms.active,targetWidth:Pn.target.width,targetHeight:Pn.target.height,settings:{...Ms.value}},depthOfField:{enabled:Pn.enabled,focus:Pn.focus,maxBlur:Pn.maxBlur},lighting:{...Bs.value},environment:On.template?"authored":"procedural",streetSign:Vi?.getObjectByName("Weathered_street_sign")?.position.toArray()??null,windowDetails:{street:Vi?.getObjectByName("Detailed_aged_windows")?.userData.windowCount??0,courtyard:wo[0]?.userData.windowCount??0,entrance:Cr.userData.windowCount??0},cameraShake:{enabled:mn.isShakeEnabled(),strength:mn.shake},shopOpen:Ri,economy:{coins:At.profile.coins,owned:[...At.profile.owned],equipped:At.profile.equipped,run:{...At.run},persistent:At.persistent,rewardMode:af.mode},sprayVisible:Eo.root.visible,sprayGrowth:Eo.growth,sprayOrigin:Eo.root.position.toArray(),burpVisible:df.root.visible,drinkingBottleVisible:pf.root.visible,superPower:fn,returnWall:Gi,cinematic:gt?{elapsed:gt.elapsed,hit:gt.hit,target:gt.target.type}:null,best:{...Pr},worldChunks:On.chunks.size,authoredActions:Object.keys(P.userActions?.clips??{}),pendingSpawns:hs.length,spawnAudit:To.map(i=>({...i})),player:{radius:hr(P),pickup:P.pickup?{kind:P.pickup.kind,progress:fs(P)}:null,x:P.x,z:P.z,moving:!!P.moving,locomotion:P.locomotion,joystick:{x:ps.x,y:ps.y},motion:P.motionId,attack:P.attack,attackTime:P.attackTime,attackClip:P.attackSpec?.clip,attackSerial:P.attackSerial,stamina:P.stamina,dodge:P.dodge,dodgeDuration:P.dodgeDuration,dodgeClip:P.dodge>0&&P.userActions?.clips.dodge?"dodge":null,dodgeCooldown:P.dodgeCooldown,facing:P.facing,heading:P.heading,walkDistance:P.walkDistance,walkStride:P.walkStride,feetY:P.feetY,groundOffset:P.groundOffset,combo:P.combo,stun:P.stun,invulnerable:P.invulnerable,cooldowns:{...P.cooldowns}},enemies:Pt.map(i=>({authored:!!i.userActions,attackClip:i.attackSpec?.clip,motion:i.motionId,radius:hr(i),x:i.x,z:i.z,health:i.health,type:i.type,feetY:i.feetY,windup:i.windup,strike:i.strike,down:i.down,entering:i.entering,encounter:i.encounter})),encounter:{active:lt.active,phase:lt.phase,wave:lt.wave,index:lt.index,bounds:lt.bounds}});function Cf(){const i=window.Telegram?.WebApp;i&&(i.ready(),i.expand(),i.isVersionAtLeast?.("7.7")&&i.disableVerticalSwipes?.())}window.addEventListener("telegram-ready",()=>{It&&Cf()});
