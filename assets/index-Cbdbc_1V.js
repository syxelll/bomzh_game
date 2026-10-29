(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Wl="180",gf=0,Vc=1,_f=2,Vh=1,Xl=2,ii=3,ci=0,Qt=1,Pt=2,wi=0,hs=1,xo=2,Gc=3,Wc=4,xf=5,Bi=100,vf=101,yf=102,Mf=103,bf=104,Sf=200,wf=201,Ef=202,Tf=203,Ha=204,Va=205,Af=206,Rf=207,Cf=208,Pf=209,If=210,Lf=211,Df=212,Uf=213,Nf=214,Ga=0,Wa=1,Xa=2,vs=3,qa=4,Ya=5,ja=6,Ka=7,Gh=0,Ff=1,Of=2,Ei=0,kf=1,Bf=2,zf=3,Wh=4,Hf=5,Vf=6,Gf=7,Xc="attached",Wf="detached",Xh=300,ys=301,Ms=302,$a=303,Ja=304,Io=306,Fn=1e3,Mi=1001,vo=1002,en=1003,qh=1004,Ys=1005,fn=1006,so=1007,oi=1008,On=1009,Yh=1010,jh=1011,ur=1012,ql=1013,Ti=1014,Ln=1015,As=1016,Yl=1017,jl=1018,hr=1020,Kh=35902,$h=35899,Jh=1021,Zh=1022,Mn=1023,dr=1026,fr=1027,Kl=1028,$l=1029,Qh=1030,Jl=1031,Zl=1033,ro=33776,oo=33777,ao=33778,lo=33779,Za=35840,Qa=35841,el=35842,tl=35843,nl=36196,il=37492,sl=37496,rl=37808,ol=37809,al=37810,ll=37811,cl=37812,ul=37813,hl=37814,dl=37815,fl=37816,pl=37817,ml=37818,gl=37819,_l=37820,xl=37821,vl=36492,yl=36494,Ml=36495,bl=36283,Sl=36284,wl=36285,El=36286,pr=2300,mr=2301,zo=2302,qc=2400,Yc=2401,jc=2402,Xf=2500,qf=0,ed=1,Tl=2,Yf=3200,jf=3201,td=0,Kf=1,ri="",st="srgb",tn="srgb-linear",yo="linear",ct="srgb",Xi=7680,Kc=519,$f=512,Jf=513,Zf=514,nd=515,Qf=516,ep=517,tp=518,np=519,Al=35044,Mo=35048,$c="300 es",Gn=2e3,bo=2001;class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jc=1234567;const Zs=Math.PI/180,bs=180/Math.PI;function Un(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Ql(i,e){return(i%e+e)%e}function ip(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function sp(i,e,t){return i!==e?(t-i)/(e-i):0}function Qs(i,e,t){return(1-t)*i+t*e}function rp(i,e,t,n){return Qs(i,e,1-Math.exp(-t*n))}function op(i,e=1){return e-Math.abs(Ql(i,e*2)-e)}function ap(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function lp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function cp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function up(i,e){return i+Math.random()*(e-i)}function hp(i){return i*(.5-Math.random())}function dp(i){i!==void 0&&(Jc=i);let e=Jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fp(i){return i*Zs}function pp(i){return i*bs}function mp(i){return(i&i-1)===0&&i!==0}function gp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _p(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const nt={DEG2RAD:Zs,RAD2DEG:bs,generateUUID:Un,clamp:qe,euclideanModulo:Ql,mapLinear:ip,inverseLerp:sp,lerp:Qs,damp:rp,pingpong:op,smoothstep:ap,smootherstep:lp,randInt:cp,randFloat:up,randFloatSpread:hp,seededRandom:dp,degToRad:fp,radToDeg:pp,isPowerOfTwo:mp,ceilPowerOfTwo:gp,floorPowerOfTwo:_p,setQuaternionFromProperEuler:xp,normalize:rt,denormalize:Pn};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,x=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const w=Math.sqrt(b),S=Math.atan2(w,p*x);m=Math.sin(m*S)/w,a=Math.sin(a*S)/w}const v=a*x;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new A,Zc=new Ke;class Ve{constructor(e,t,n,s,r,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],b=s[4],v=s[7],w=s[2],S=s[5],R=s[8];return r[0]=o*_+a*x+l*w,r[3]=o*m+a*b+l*S,r[6]=o*p+a*v+l*R,r[1]=c*_+u*x+h*w,r[4]=c*m+u*b+h*S,r[7]=c*p+u*v+h*R,r[2]=d*_+f*x+g*w,r[5]=d*m+f*b+g*S,r[8]=d*p+f*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new Ve;function id(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vp(){const i=gr("canvas");return i.style.display="block",i}const Qc={};function _r(i){i in Qc||(Qc[i]=!0,console.warn(i))}function yp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const eu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mp(){const i={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tn]:{primaries:e,whitePoint:n,transfer:yo,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:st},outputColorSpaceConfig:{drawingBufferColorSpace:st}},[st]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:st}}}),i}const et=Mp();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class bp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qi===void 0&&(qi=gr("canvas")),qi.width=e.width,qi.height=e.height;const s=qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sp=0;class ec{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Go(s[o].image)):r.push(Go(s[o]))}else r=Go(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wp=0;const Wo=new A;class Ft extends Rs{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=Mi,s=Mi,r=fn,o=oi,a=Mn,l=On,c=Ft.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Un(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wo).x}get height(){return this.source.getSize(Wo).y}get depth(){return this.source.getSize(Wo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fn:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fn:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Xh;Ft.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,s=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(f+1)/2,w=(p+1)/2,S=(u+d)/4,R=(h+_)/4,I=(g+m)/4;return b>v&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=R/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=I/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=I/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ep extends Rs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ft(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ec(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Ep{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sd extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tp extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),Cr.subVectors(this.max,Ns),Yi.subVectors(e.a,Ns),ji.subVectors(e.b,Ns),Ki.subVectors(e.c,Ns),fi.subVectors(ji,Yi),pi.subVectors(Ki,ji),Ii.subVectors(Yi,Ki);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ii.z,Ii.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ii.z,0,-Ii.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ii.y,Ii.x,0];return!Xo(t,Yi,ji,Ki,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Yi,ji,Ki,Cr))?!1:(Pr.crossVectors(fi,pi),t=[Pr.x,Pr.y,Pr.z],Xo(t,Yi,ji,Ki,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $n=[new A,new A,new A,new A,new A,new A,new A,new A],En=new A,Rr=new mn,Yi=new A,ji=new A,Ki=new A,fi=new A,pi=new A,Ii=new A,Ns=new A,Cr=new A,Pr=new A,Li=new A;function Xo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Li.fromArray(i,r);const a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),u=n.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ap=new mn,Fs=new A,qo=new A;class Yn{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ap.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(qo)),this.expandByPoint(Fs.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Jn=new A,Yo=new A,Ir=new A,mi=new A,jo=new A,Lr=new A,Ko=new A;class Sr{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yo.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Yo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ir),a=mi.dot(this.direction),l=-mi.dot(Ir),c=mi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Yo).addScaledVector(Ir,d),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,s,r){jo.subVectors(t,e),Lr.subVectors(n,e),Ko.crossVectors(jo,Lr);let o=this.direction.dot(Ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(Lr.crossVectors(mi,Lr));if(l<0)return null;const c=a*this.direction.dot(jo.cross(mi));if(c<0||l+c>o)return null;const u=-a*mi.dot(Ko);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rp,e,Cp)}lookAt(e,t,n){const s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),gi.crossVectors(n,hn),gi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),gi.crossVectors(n,hn)),gi.normalize(),Dr.crossVectors(hn,gi),s[0]=gi.x,s[4]=Dr.x,s[8]=hn.x,s[1]=gi.y,s[5]=Dr.y,s[9]=hn.y,s[2]=gi.z,s[6]=Dr.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],b=n[7],v=n[11],w=n[15],S=s[0],R=s[4],I=s[8],T=s[12],M=s[1],y=s[5],L=s[9],N=s[13],F=s[2],k=s[6],H=s[10],K=s[14],G=s[3],ee=s[7],oe=s[11],me=s[15];return r[0]=o*S+a*M+l*F+c*G,r[4]=o*R+a*y+l*k+c*ee,r[8]=o*I+a*L+l*H+c*oe,r[12]=o*T+a*N+l*K+c*me,r[1]=u*S+h*M+d*F+f*G,r[5]=u*R+h*y+d*k+f*ee,r[9]=u*I+h*L+d*H+f*oe,r[13]=u*T+h*N+d*K+f*me,r[2]=g*S+_*M+m*F+p*G,r[6]=g*R+_*y+m*k+p*ee,r[10]=g*I+_*L+m*H+p*oe,r[14]=g*T+_*N+m*K+p*me,r[3]=x*S+b*M+v*F+w*G,r[7]=x*R+b*y+v*k+w*ee,r[11]=x*I+b*L+v*H+w*oe,r[15]=x*T+b*N+v*K+w*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,b=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,v=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,w=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,S=t*x+n*b+s*v+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/S;return e[0]=x*R,e[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*R,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*R,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*R,e[4]=b*R,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=v*R,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*R,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*R,e[12]=w*R,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*R,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,x=l*c,b=l*u,v=l*h,w=n.x,S=n.y,R=n.z;return s[0]=(1-(_+p))*w,s[1]=(f+v)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(d+p))*S,s[6]=(m+x)*S,s[7]=0,s[8]=(g+b)*R,s[9]=(m-x)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);const c=1/r,u=1/o,h=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,t.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Gn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Gn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===bo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Gn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Gn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===bo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new A,Tn=new ne,Rp=new A(0,0,0),Cp=new A(1,1,1),gi=new A,Dr=new A,hn=new A,nu=new ne,iu=new Ke;class nn{constructor(e=0,t=0,n=0,s=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pp=0;const su=new A,Ji=new Ke,Zn=new ne,Ur=new A,Os=new A,Ip=new A,Lp=new Ke,ru=new A(1,0,0),ou=new A(0,1,0),au=new A(0,0,1),lu={type:"added"},Dp={type:"removed"},Zi={type:"childadded",child:null},$o={type:"childremoved",child:null};class vt extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new A,t=new nn,n=new Ke,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Ve}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(au,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ur.copy(e):Ur.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Os,Ur,this.up):Zn.lookAt(Ur,Os,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Zn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lu),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dp),$o.child=e,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lu),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,Ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}vt.DEFAULT_UP=new A(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new A,Qn=new A,Jo=new A,ei=new A,Qi=new A,es=new A,cu=new A,Zo=new A,Qo=new A,ea=new A,ta=new Ze,na=new Ze,ia=new Ze;class In{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),An.subVectors(e,t),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){An.subVectors(s,t),Qn.subVectors(n,t),Jo.subVectors(e,t);const o=An.dot(An),a=An.dot(Qn),l=An.dot(Jo),c=Qn.dot(Qn),u=Qn.dot(Jo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,n),ia.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ta,r.x),o.addScaledVector(na,r.y),o.addScaledVector(ia,r.z),o}static isFrontFacing(e,t,n,s){return An.subVectors(n,t),Qn.subVectors(e,t),An.cross(Qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),An.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return In.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Qi.subVectors(s,n),es.subVectors(r,n),Zo.subVectors(e,n);const l=Qi.dot(Zo),c=es.dot(Zo);if(l<=0&&c<=0)return t.copy(n);Qo.subVectors(e,s);const u=Qi.dot(Qo),h=es.dot(Qo);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Qi,o);ea.subVectors(e,r);const f=Qi.dot(ea),g=es.dot(ea);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(es,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return cu.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(cu,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Qi,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Ql(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=sa(o,r,e+1/3),this.g=sa(o,r,e),this.b=sa(o,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=st){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){const n=rd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return et.workingToColorSpace(Wt.copy(this),e),Math.round(qe(Wt.r*255,0,255))*65536+Math.round(qe(Wt.g*255,0,255))*256+Math.round(qe(Wt.b*255,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=st){et.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,s=Wt.b;return e!==st?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Nr);const n=Qs(_i.h,Nr.h,t),s=Qs(_i.s,Nr.s,t),r=Qs(_i.l,Nr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ie;Ie.NAMES=rd;let Up=0;class Wn extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=hs,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Va,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nt extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new A,Fr=new pe;let Np=0;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Np++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Al,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Al&&(e.usage=this.usage),e}}class od extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ad extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ze extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Fp=0;const xn=new ne,ra=new vt,ts=new A,dn=new mn,ks=new mn,Ht=new A;class yt extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(id(e)?ad:od)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ze(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(dn.min,ks.min),dn.expandByPoint(Ht),Ht.addVectors(dn.max,ks.max),dn.expandByPoint(Ht)):(dn.expandByPoint(ks.min),dn.expandByPoint(ks.max))}dn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),Ht.add(ts)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new A,l[I]=new A;const c=new A,u=new A,h=new A,d=new pe,f=new pe,g=new pe,_=new A,m=new A;function p(I,T,M){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const y=1/(f.x*g.y-g.x*f.y);isFinite(y)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(y),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(y),a[I].add(_),a[T].add(_),a[M].add(_),l[I].add(m),l[T].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let I=0,T=x.length;I<T;++I){const M=x[I],y=M.start,L=M.count;for(let N=y,F=y+L;N<F;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const b=new A,v=new A,w=new A,S=new A;function R(I){w.fromBufferAttribute(s,I),S.copy(w);const T=a[I];b.copy(T),b.sub(w.multiplyScalar(w.dot(T))).normalize(),v.crossVectors(S,T);const y=v.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,y)}for(let I=0,T=x.length;I<T;++I){const M=x[I],y=M.start,L=M.count;for(let N=y,F=y+L;N<F;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,u=new A,h=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Ot(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uu=new ne,Di=new Sr,Or=new Yn,hu=new A,kr=new A,Br=new A,zr=new A,oa=new A,Hr=new A,du=new A,Vr=new A;class Ce extends vt{constructor(e=new yt,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(oa.fromBufferAttribute(h,e),o?Hr.addScaledVector(oa,u):Hr.addScaledVector(oa.sub(t),u))}t.add(Hr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(Or.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Or,hu)===null||Di.origin.distanceToSquared(hu)>(e.far-e.near)**2))&&(uu.copy(r).invert(),Di.copy(e.ray).applyMatrix4(uu),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,w=b;v<w;v+=3){const S=a.getX(v),R=a.getX(v+1),I=a.getX(v+2);s=Gr(this,p,e,n,c,u,h,S,R,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);s=Gr(this,o,e,n,c,u,h,x,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,w=b;v<w;v+=3){const S=v,R=v+1,I=v+2;s=Gr(this,p,e,n,c,u,h,S,R,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,b=m+1,v=m+2;s=Gr(this,o,e,n,c,u,h,x,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Op(i,e,t,n,s,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ci,a),l===null)return null;Vr.copy(a),Vr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:i}}function Gr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,kr),i.getVertexPosition(l,Br),i.getVertexPosition(c,zr);const u=Op(i,e,t,n,kr,Br,zr,du);if(u){const h=new A;In.getBarycoord(du,kr,Br,zr,h),s&&(u.uv=In.getInterpolatedAttribute(s,a,l,c,h,new pe)),r&&(u.uv1=In.getInterpolatedAttribute(r,a,l,c,h,new pe)),o&&(u.normal=In.getInterpolatedAttribute(o,a,l,c,h,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new A,materialIndex:0};In.getNormal(kr,Br,zr,d.normal),u.face=d,u.barycoord=h}return u}class sn extends yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(h,2));function g(_,m,p,x,b,v,w,S,R,I,T){const M=v/R,y=w/I,L=v/2,N=w/2,F=S/2,k=R+1,H=I+1;let K=0,G=0;const ee=new A;for(let oe=0;oe<H;oe++){const me=oe*y-N;for(let ge=0;ge<k;ge++){const $e=ge*M-L;ee[_]=$e*x,ee[m]=me*b,ee[p]=F,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=S>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(ge/R),h.push(1-oe/I),K+=1}}for(let oe=0;oe<I;oe++)for(let me=0;me<R;me++){const ge=d+me+k*oe,$e=d+me+k*(oe+1),Ye=d+(me+1)+k*(oe+1),Qe=d+(me+1)+k*oe;l.push(ge,$e,Qe),l.push($e,Ye,Qe),G+=6}a.addGroup(f,G,T),f+=G,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=Ss(i[t]);for(const s in n)e[s]=n[s]}return e}function kp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ld(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Bp={clone:Ss,merge:Jt};var zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cd extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new A,fu=new pe,pu=new pe;class Yt extends cd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,fu,pu),t.subVectors(pu,fu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class Vp extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(ns,is,e,t);s.layers=this.layers,this.add(s);const r=new Yt(ns,is,e,t);r.layers=this.layers,this.add(r);const o=new Yt(ns,is,e,t);o.layers=this.layers,this.add(o);const a=new Yt(ns,is,e,t);a.layers=this.layers,this.add(a);const l=new Yt(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new Yt(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ud extends Ft{constructor(e=[],t=ys,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gp extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ud(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sn(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:wi});r.uniforms.tEquirect.value=t;const o=new Ce(s,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=fn),new Vp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class It extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wp={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class nc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new nc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ic extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Al,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new A;class sc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const mu=new A,gu=new Ze,_u=new Ze,qp=new A,xu=new ne,Wr=new A,la=new Yn,vu=new ne,ca=new Sr;class Yp extends Ce{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xc,this.bindMatrix=new ne,this.bindMatrixInverse=new ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wr),this.boundingBox.expandByPoint(Wr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wr),this.boundingSphere.expandByPoint(Wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(s),e.ray.intersectsSphere(la)!==!1&&(vu.copy(s).invert(),ca.copy(e.ray).applyMatrix4(vu),!(this.boundingBox!==null&&ca.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ca)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Xc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;gu.fromBufferAttribute(s.attributes.skinIndex,e),_u.fromBufferAttribute(s.attributes.skinWeight,e),mu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=_u.getComponent(r);if(o!==0){const a=gu.getComponent(r);xu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(qp.copy(mu).applyMatrix4(xu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class hd extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rc extends Ft{constructor(e=null,t=1,n=1,s,r,o,a,l,c=en,u=en,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yu=new ne,jp=new ne;class oc{constructor(e=[],t=[]){this.uuid=Un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:jp;yu.multiplyMatrices(a,t[r]),yu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new oc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new rc(t,e,e,Mn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new hd),this.bones.push(o),this.boneInverses.push(new ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class So extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ss=new ne,Mu=new ne,Xr=[],bu=new mn,Kp=new ne,Bs=new Ce,zs=new Yn;class Lo extends Ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new So(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ss),bu.copy(e.boundingBox).applyMatrix4(ss),this.boundingBox.union(bu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ss),zs.copy(e.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),e.ray.intersectsSphere(zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),Mu.multiplyMatrices(n,ss),Bs.matrixWorld=Mu,Bs.raycast(e,Xr);for(let o=0,a=Xr.length;o<a;o++){const l=Xr[o];l.instanceId=r,l.object=this,t.push(l)}Xr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new So(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rc(new Float32Array(s*this.count),s,this.count,Kl,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ua=new A,$p=new A,Jp=new Ve;class yi{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ua.subVectors(n,t).cross($p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ua),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jp.getNormalMatrix(e),s=this.coplanarPoint(ua).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Yn,Zp=new pe(.5,.5),qr=new A;class ac{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],x=r[12],b=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-o,f-u,p-g,w-x).normalize(),s[1].setComponents(c+o,f+u,p+g,w+x).normalize(),s[2].setComponents(c+a,f+h,p+_,w+b).normalize(),s[3].setComponents(c-a,f-h,p-_,w-b).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,w-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,w-v).normalize(),t===Gn)s[5].setComponents(c+l,f+d,p+m,w+v).normalize();else if(t===bo)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){Ui.center.set(0,0,0);const t=Zp.distanceTo(e.center);return Ui.radius=.7071067811865476+t,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(qr.x=s.normal.x>0?e.max.x:e.min.x,qr.y=s.normal.y>0?e.max.y:e.min.y,qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dd extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wo=new A,Eo=new A,Su=new ne,Hs=new Sr,Yr=new Yn,ha=new A,wu=new A;class lc extends vt{constructor(e=new yt,t=new dd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)wo.fromBufferAttribute(t,s-1),Eo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=wo.distanceTo(Eo);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;Su.copy(s).invert(),Hs.copy(e.ray).applyMatrix4(Su);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),x=u.getX(_+1),b=jr(this,e,Hs,l,p,x,_);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=jr(this,e,Hs,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=jr(this,e,Hs,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=jr(this,e,Hs,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(wo.fromBufferAttribute(a,s),Eo.fromBufferAttribute(a,r),t.distanceSqToSegment(wo,Eo,ha,wu)>n)return;ha.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ha);if(!(c<e.near||c>e.far))return{distance:c,point:wu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Eu=new A,Tu=new A;class Qp extends lc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Eu.fromBufferAttribute(t,s),Tu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Eu.distanceTo(Tu);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class em extends lc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Do extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Au=new ne,Rl=new Sr,Kr=new Yn,$r=new A;class cc extends vt{constructor(e=new yt,t=new Do){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;Au.copy(s).invert(),Rl.copy(e.ray).applyMatrix4(Au);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);$r.fromBufferAttribute(h,m),Ru($r,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)$r.fromBufferAttribute(h,g),Ru($r,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ru(i,e,t,n,s,r,o){const a=Rl.distanceSqToPoint(i);if(a<t){const l=new A;Rl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ln extends Ft{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uc extends Ft{constructor(e,t,n=Ti,s,r,o,a=en,l=en,c,u=dr,h=1){if(u!==dr&&u!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ec(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fd extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xr extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new A,u=new pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(a,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ui extends yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ze(h,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(f,2));function x(){const v=new A,w=new A;let S=0;const R=(t-e)/n;for(let I=0;I<=r;I++){const T=[],M=I/r,y=M*(t-e)+e;for(let L=0;L<=s;L++){const N=L/s,F=N*l+a,k=Math.sin(F),H=Math.cos(F);w.x=y*k,w.y=-M*n+m,w.z=y*H,h.push(w.x,w.y,w.z),v.set(k,R,H).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-M),T.push(g++)}_.push(T)}for(let I=0;I<s;I++)for(let T=0;T<r;T++){const M=_[T][I],y=_[T+1][I],L=_[T+1][I+1],N=_[T][I+1];(e>0||T!==0)&&(u.push(M,y,N),S+=3),(t>0||T!==r-1)&&(u.push(y,L,N),S+=3)}c.addGroup(p,S,0),p+=S}function b(v){const w=g,S=new pe,R=new A;let I=0;const T=v===!0?e:t,M=v===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const y=g;for(let L=0;L<=s;L++){const F=L/s*l+a,k=Math.cos(F),H=Math.sin(F);R.x=T*H,R.y=m*M,R.z=T*k,h.push(R.x,R.y,R.z),d.push(0,M,0),S.x=k*.5+.5,S.y=H*.5*M+.5,f.push(S.x,S.y),g++}for(let L=0;L<s;L++){const N=w+L,F=y+L;v===!0?u.push(F,F+1,N):u.push(F+1,F,N),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hc extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(r.slice(),3)),this.setAttribute("uv",new ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const b=new A,v=new A,w=new A;for(let S=0;S<t.length;S+=3)f(t[S+0],b),f(t[S+1],v),f(t[S+2],w),l(b,v,w,x)}function l(x,b,v,w){const S=w+1,R=[];for(let I=0;I<=S;I++){R[I]=[];const T=x.clone().lerp(v,I/S),M=b.clone().lerp(v,I/S),y=S-I;for(let L=0;L<=y;L++)L===0&&I===S?R[I][L]=T:R[I][L]=T.clone().lerp(M,L/y)}for(let I=0;I<S;I++)for(let T=0;T<2*(S-I)-1;T++){const M=Math.floor(T/2);T%2===0?(d(R[I][M+1]),d(R[I+1][M]),d(R[I][M])):(d(R[I][M+1]),d(R[I+1][M+1]),d(R[I+1][M]))}}function c(x){const b=new A;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(x),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function u(){const x=new A;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];const v=m(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;o.push(v,1-w)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){const b=o[x+0],v=o[x+2],w=o[x+4],S=Math.max(b,v,w),R=Math.min(b,v,w);S>.9&&R<.1&&(b<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),w<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,b){const v=x*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function g(){const x=new A,b=new A,v=new A,w=new A,S=new pe,R=new pe,I=new pe;for(let T=0,M=0;T<r.length;T+=9,M+=6){x.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),S.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),w.copy(x).add(b).add(v).divideScalar(3);const y=m(w);_(S,M+0,x,y),_(R,M+2,b,y),_(I,M+4,v,y)}}function _(x,b,v,w){w<0&&x.x===1&&(o[b]=x.x-1),v.x===0&&v.z===0&&(o[b]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.vertices,e.indices,e.radius,e.details)}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new pe:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new A,s=[],r=[],o=[],a=new A,l=new ne;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pd extends di{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new pe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class tm extends pd{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function dc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Jr=new A,da=new dc,fa=new dc,pa=new dc;class nm extends di{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Jr.subVectors(s[0],s[1]).add(s[0]),c=Jr);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),da.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),fa.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),pa.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(da.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),fa.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),pa.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(da.calc(l),fa.calc(l),pa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cu(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function im(i,e){const t=1-i;return t*t*e}function sm(i,e){return 2*(1-i)*i*e}function rm(i,e){return i*i*e}function er(i,e,t,n){return im(i,e)+sm(i,t)+rm(i,n)}function om(i,e){const t=1-i;return t*t*t*e}function am(i,e){const t=1-i;return 3*t*t*i*e}function lm(i,e){return 3*(1-i)*i*i*e}function cm(i,e){return i*i*i*e}function tr(i,e,t,n,s){return om(i,e)+am(i,t)+lm(i,n)+cm(i,s)}class um extends di{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(e,s.x,r.x,o.x,a.x),tr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hm extends di{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(e,s.x,r.x,o.x,a.x),tr(e,s.y,r.y,o.y,a.y),tr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dm extends di{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fm extends di{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pm extends di{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(er(e,s.x,r.x,o.x),er(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fc extends di{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(er(e,s.x,r.x,o.x),er(e,s.y,r.y,o.y),er(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mm extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Cu(a,l.x,c.x,u.x,h.x),Cu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new pe().fromArray(s))}return this}}var gm=Object.freeze({__proto__:null,ArcCurve:tm,CatmullRomCurve3:nm,CubicBezierCurve:um,CubicBezierCurve3:hm,EllipseCurve:pd,LineCurve:dm,LineCurve3:fm,QuadraticBezierCurve:pm,QuadraticBezierCurve3:fc,SplineCurve:mm});class pc extends yt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=qe(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new A,d=new pe,f=new A,g=new A,_=new A;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let x=0;x<=t;x++){const b=n+x*u*s,v=Math.sin(b),w=Math.cos(b);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*v,h.y=e[S].y,h.z=e[S].x*w,o.push(h.x,h.y,h.z),d.x=x/t,d.y=S/(e.length-1),a.push(d.x,d.y);const R=l[3*S+0]*v,I=l[3*S+1],T=l[3*S+0]*w;c.push(R,I,T)}}for(let x=0;x<t;x++)for(let b=0;b<e.length-1;b++){const v=b+x*e.length,w=v,S=v+e.length,R=v+e.length+1,I=v+1;r.push(w,S,I),r.push(R,I,S)}this.setIndex(r),this.setAttribute("position",new ze(o,3)),this.setAttribute("uv",new ze(a,2)),this.setAttribute("normal",new ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.points,e.segments,e.phiStart,e.phiLength)}}class mc extends hc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mc(e.radius,e.detail)}}class pn extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*d-o;for(let b=0;b<c;b++){const v=b*h-r;g.push(v,-x,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const b=x+c*p,v=x+c*(p+1),w=x+1+c*(p+1),S=x+1+c*p;f.push(b,v,S),f.push(v,w,S)}this.setIndex(f),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.widthSegments,e.heightSegments)}}class hi extends yt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,f=new A,g=new pe;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,b=x,v=x+n+1,w=x+n+2,S=x+1;a.push(b,v,S),a.push(v,w,S)}}this.setIndex(a),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gc extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new A,d=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],b=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const S=w/t;h.x=-e*Math.cos(s+S*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+S*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(S+v,1-b),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const b=u[p][x+1],v=u[p][x],w=u[p+1][x],S=u[p+1][x+1];(p!==0||o>0)&&f.push(b,v,S),(p!==n-1||l<Math.PI)&&f.push(v,w,S)}this.setIndex(f),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vi extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new A,h=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _c extends yt{constructor(e=new fc(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,l=new A,c=new pe;let u=new A;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ze(h,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(f,2));function _(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),x(),p()}function m(b){u=e.getPointAt(b/t,u);const v=o.normals[b],w=o.binormals[b];for(let S=0;S<=s;S++){const R=S/s*Math.PI*2,I=Math.sin(R),T=-Math.cos(R);l.x=T*v.x+I*w.x,l.y=T*v.y+I*w.y,l.z=T*v.z+I*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let b=1;b<=t;b++)for(let v=1;v<=s;v++){const w=(s+1)*(b-1)+(v-1),S=(s+1)*b+(v-1),R=(s+1)*b+v,I=(s+1)*(b-1)+v;g.push(w,S,I),g.push(S,R,I)}}function x(){for(let b=0;b<=t;b++)for(let v=0;v<=s;v++)c.x=b/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new _c(new gm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class At extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=td,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jn extends At{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class _m extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xm extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Zr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function vm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ym(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Pu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function md(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class wr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Mm extends wr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qc,endingEnd:qc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yc:r=e,a=2*t-n;break;case jc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yc:o=e,l=2*n-t;break;case jc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+x*o[c+w]+b*o[l+w]+v*o[h+w];return r}}class bm extends wr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class Sm extends wr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class kn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zr(t,this.TimeBufferType),this.values=Zr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zr(e.times,Array),values:Zr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pr:t=this.InterpolantFactoryMethodDiscrete;break;case mr:t=this.InterpolantFactoryMethodLinear;break;case zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return mr;case this.InterpolantFactoryMethodSmooth:return zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&vm(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=mr;class Cs extends kn{constructor(e,t,n){super(e,t,n)}}Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=pr;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class gd extends kn{constructor(e,t,n,s){super(e,t,n,s)}}gd.prototype.ValueTypeName="color";class ws extends kn{constructor(e,t,n,s){super(e,t,n,s)}}ws.prototype.ValueTypeName="number";class wm extends wr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ke.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Es extends kn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new wm(this.times,this.values,this.getValueSize(),e)}}Es.prototype.ValueTypeName="quaternion";Es.prototype.InterpolantFactoryMethodSmooth=void 0;class Ps extends kn{constructor(e,t,n){super(e,t,n)}}Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=pr;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends kn{constructor(e,t,n,s){super(e,t,n,s)}}Ts.prototype.ValueTypeName="vector";class Em{constructor(e="",t=-1,n=[],s=Xf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Un(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Am(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(kn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=ym(l);l=Pu(l,1,u),c=Pu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ws(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];md(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const b=d[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}s.push(new ws(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Ts,f+".position",d,"pos",s),n(Es,f+".quaternion",d,"rot",s),n(Ts,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Tm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ws;case"vector":case"vector2":case"vector3":case"vector4":return Ts;case"color":return gd;case"quaternion":return Es;case"bool":case"boolean":return Cs;case"string":return Ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Am(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Tm(i.type);if(i.times===void 0){const t=[],n=[];md(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ai={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Rm{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Cm=new Rm;class Is{constructor(e){this.manager=e!==void 0?e:Cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Is.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class Pm extends Error{constructor(e,t){super(e),this.response=t}}class _d extends Is{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ai.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:n,onError:s});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ti[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:b,value:v})=>{if(b)p.close();else{_+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let S=0,R=u.length;S<R;S++){const I=u[S];I.onProgress&&I.onProgress(w)}p.enqueue(v),x()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Pm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ai.add(`file:${e}`,c);const u=ti[e];delete ti[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ti[e];if(u===void 0)throw this.manager.itemError(e),c;delete ti[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const rs=new WeakMap;class Im extends Is{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ai.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=rs.get(o);h===void 0&&(h=[],rs.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=gr("img");function l(){u(),t&&t(this);const h=rs.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}rs.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),ai.remove(`image:${e}`);const d=rs.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}rs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ai.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Lm extends Is{constructor(e){super(e)}load(e,t,n,s){const r=new Ft,o=new Im(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Uo extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xd extends Uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ma=new ne,Iu=new A,Lu=new A;class xc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Iu),Lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lu),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dm extends xc{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=bs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Um extends Uo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Du=new ne,Vs=new A,ga=new A;class Nm extends xc{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vs),ga.copy(n.position),ga.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ga),n.updateMatrixWorld(),s.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du,n.coordinateSystem,n.reversedDepth)}}class vd extends Uo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class No extends cd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fm extends xc{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class To extends Uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Fm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const _a=new WeakMap;class Om extends Is{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ai.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(_a.has(o)===!0)s&&s(_a.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ai.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),_a.set(l,c),ai.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ai.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class km extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const vc="\\[\\]\\.:\\/",zm=new RegExp("["+vc+"]","g"),yc="[^"+vc+"]",Hm="[^"+vc.replace("\\.","")+"]",Vm=/((?:WC+[\/:])*)/.source.replace("WC",yc),Gm=/(WCOD+)?/.source.replace("WCOD",Hm),Wm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),Xm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),qm=new RegExp("^"+Vm+Gm+Wm+Xm+"$"),Ym=["material","materials","bones","map"];class jm{constructor(e,t,n){const s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zm,"")}static parseTrackName(e){const t=qm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Ym.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=jm;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Uu=new ne;class yd{constructor(e,t,n=0,s=1/0){this.ray=new Sr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uu),this}intersectObject(e,t=!0,n=[]){return Cl(e,this,n,t),n.sort(Nu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Cl(e[s],this,n,t);return n.sort(Nu),n}}function Nu(i,e){return i.distance-e.distance}function Cl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Cl(r[o],e,t,!0)}}function Fu(i,e,t,n){const s=Km(n);switch(t){case Jh:return i*e;case Kl:return i*e/s.components*s.byteLength;case $l:return i*e/s.components*s.byteLength;case Qh:return i*e*2/s.components*s.byteLength;case Jl:return i*e*2/s.components*s.byteLength;case Zh:return i*e*3/s.components*s.byteLength;case Mn:return i*e*4/s.components*s.byteLength;case Zl:return i*e*4/s.components*s.byteLength;case ro:case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ao:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:case tl:return Math.max(i,16)*Math.max(e,8)/4;case Za:case el:return Math.max(i,8)*Math.max(e,8)/2;case nl:case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vl:case yl:case Ml:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bl:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wl:case El:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Km(i){switch(i){case On:case Yh:return{byteLength:1,components:1};case ur:case jh:case As:return{byteLength:2,components:1};case Yl:case jl:return{byteLength:2,components:4};case Ti:case ql:case Ln:return{byteLength:4,components:1};case Kh:case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);function Md(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $m(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
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
#endif`,Qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ig=`#ifdef USE_AOMAP
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
#endif`,sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rg=`#ifdef USE_BATCHING
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
#endif`,og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ug=`#ifdef USE_IRIDESCENCE
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
#endif`,hg=`#ifdef USE_BUMPMAP
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yg=`#define PI 3.141592653589793
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
} // validated`,Mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bg=`vec3 transformedNormal = objectNormal;
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
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kg=`#ifdef USE_GRADIENTMAP
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
}`,Bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
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
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jg=`PhysicalMaterial material;
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
#endif`,Kg=`struct PhysicalMaterial {
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
}`,$g=`
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v0=`#ifdef USE_NORMALMAP
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
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N0=`float getShadowMask() {
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
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,k0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J0=`uniform sampler2D t2D;
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`#include <common>
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
}`,i_=`#if DEPTH_PACKING == 3200
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
}`,s_=`#define DISTANCE
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
}`,r_=`#define DISTANCE
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`uniform float scale;
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
}`,c_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,h_=`uniform vec3 diffuse;
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
}`,d_=`#define LAMBERT
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
}`,f_=`#define LAMBERT
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
}`,p_=`#define MATCAP
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
}`,m_=`#define MATCAP
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
}`,g_=`#define NORMAL
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
}`,__=`#define NORMAL
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
}`,x_=`#define PHONG
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
}`,v_=`#define PHONG
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
}`,y_=`#define STANDARD
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
}`,M_=`#define STANDARD
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
}`,b_=`#define TOON
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
}`,S_=`#define TOON
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
}`,w_=`uniform float size;
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
}`,E_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
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
}`,A_=`uniform vec3 color;
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
}`,R_=`uniform float rotation;
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
}`,C_=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Jm,alphahash_pars_fragment:Zm,alphamap_fragment:Qm,alphamap_pars_fragment:eg,alphatest_fragment:tg,alphatest_pars_fragment:ng,aomap_fragment:ig,aomap_pars_fragment:sg,batching_pars_vertex:rg,batching_vertex:og,begin_vertex:ag,beginnormal_vertex:lg,bsdfs:cg,iridescence_fragment:ug,bumpmap_pars_fragment:hg,clipping_planes_fragment:dg,clipping_planes_pars_fragment:fg,clipping_planes_pars_vertex:pg,clipping_planes_vertex:mg,color_fragment:gg,color_pars_fragment:_g,color_pars_vertex:xg,color_vertex:vg,common:yg,cube_uv_reflection_fragment:Mg,defaultnormal_vertex:bg,displacementmap_pars_vertex:Sg,displacementmap_vertex:wg,emissivemap_fragment:Eg,emissivemap_pars_fragment:Tg,colorspace_fragment:Ag,colorspace_pars_fragment:Rg,envmap_fragment:Cg,envmap_common_pars_fragment:Pg,envmap_pars_fragment:Ig,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Gg,envmap_vertex:Dg,fog_vertex:Ug,fog_pars_vertex:Ng,fog_fragment:Fg,fog_pars_fragment:Og,gradientmap_pars_fragment:kg,lightmap_pars_fragment:Bg,lights_lambert_fragment:zg,lights_lambert_pars_fragment:Hg,lights_pars_begin:Vg,lights_toon_fragment:Wg,lights_toon_pars_fragment:Xg,lights_phong_fragment:qg,lights_phong_pars_fragment:Yg,lights_physical_fragment:jg,lights_physical_pars_fragment:Kg,lights_fragment_begin:$g,lights_fragment_maps:Jg,lights_fragment_end:Zg,logdepthbuf_fragment:Qg,logdepthbuf_pars_fragment:e0,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:o0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:l0,morphinstance_vertex:c0,morphcolor_vertex:u0,morphnormal_vertex:h0,morphtarget_pars_vertex:d0,morphtarget_vertex:f0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:_0,normal_vertex:x0,normalmap_pars_fragment:v0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:b0,iridescence_pars_fragment:S0,opaque_fragment:w0,packing:E0,premultiplied_alpha_fragment:T0,project_vertex:A0,dithering_fragment:R0,dithering_pars_fragment:C0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:I0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:D0,shadowmap_vertex:U0,shadowmask_pars_fragment:N0,skinbase_vertex:F0,skinning_pars_vertex:O0,skinning_vertex:k0,skinnormal_vertex:B0,specularmap_fragment:z0,specularmap_pars_fragment:H0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:q0,uv_pars_vertex:Y0,uv_vertex:j0,worldpos_vertex:K0,background_vert:$0,background_frag:J0,backgroundCube_vert:Z0,backgroundCube_frag:Q0,cube_vert:e_,cube_frag:t_,depth_vert:n_,depth_frag:i_,distanceRGBA_vert:s_,distanceRGBA_frag:r_,equirect_vert:o_,equirect_frag:a_,linedashed_vert:l_,linedashed_frag:c_,meshbasic_vert:u_,meshbasic_frag:h_,meshlambert_vert:d_,meshlambert_frag:f_,meshmatcap_vert:p_,meshmatcap_frag:m_,meshnormal_vert:g_,meshnormal_frag:__,meshphong_vert:x_,meshphong_frag:v_,meshphysical_vert:y_,meshphysical_frag:M_,meshtoon_vert:b_,meshtoon_frag:S_,points_vert:w_,points_frag:E_,shadow_vert:T_,shadow_frag:A_,sprite_vert:R_,sprite_frag:C_},ue={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Hn={basic:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Jt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Jt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Jt([ue.points,ue.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Jt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Jt([ue.common,ue.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Jt([ue.sprite,ue.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Jt([ue.common,ue.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Jt([ue.lights,ue.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Hn.physical={uniforms:Jt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Qr={r:0,b:0,g:0},Ni=new nn,P_=new ne;function I_(i,e,t,n,s,r,o){const a=new Ie(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function _(b){let v=!1;const w=g(b);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===Io)?(u===void 0&&(u=new Ce(new sn(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Ss(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ni.copy(v.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(P_.makeRotationFromEuler(Ni)),u.material.toneMapped=et.getTransfer(w.colorSpace)!==ct,(h!==w||d!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ce(new pn(2,2),new qn({name:"BackgroundMaterial",uniforms:Ss(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=et.getTransfer(w.colorSpace)!==ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(Qr,ld(i)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,v,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m,dispose:x}}function L_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,y,L,N,F){let k=!1;const H=h(N,L,y);r!==H&&(r=H,c(r.object)),k=f(M,N,L,F),k&&g(M,N,L,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(M,y,L,N),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,y,L){const N=L.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let k=F[y.id];k===void 0&&(k={},F[y.id]=k);let H=k[N];return H===void 0&&(H=d(l()),k[N]=H),H}function d(M){const y=[],L=[],N=[];for(let F=0;F<t;F++)y[F]=0,L[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:L,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,y,L,N){const F=r.attributes,k=y.attributes;let H=0;const K=L.getAttributes();for(const G in K)if(K[G].location>=0){const oe=F[G];let me=k[G];if(me===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),oe===void 0||oe.attribute!==me||me&&oe.data!==me.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function g(M,y,L,N){const F={},k=y.attributes;let H=0;const K=L.getAttributes();for(const G in K)if(K[G].location>=0){let oe=k[G];oe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor));const me={};me.attribute=oe,oe&&oe.data&&(me.data=oe.data),F[G]=me,H++}r.attributes=F,r.attributesNum=H,r.index=N}function _(){const M=r.newAttributes;for(let y=0,L=M.length;y<L;y++)M[y]=0}function m(M){p(M,0)}function p(M,y){const L=r.newAttributes,N=r.enabledAttributes,F=r.attributeDivisors;L[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),F[M]!==y&&(i.vertexAttribDivisor(M,y),F[M]=y)}function x(){const M=r.newAttributes,y=r.enabledAttributes;for(let L=0,N=y.length;L<N;L++)y[L]!==M[L]&&(i.disableVertexAttribArray(L),y[L]=0)}function b(M,y,L,N,F,k,H){H===!0?i.vertexAttribIPointer(M,y,L,F,k):i.vertexAttribPointer(M,y,L,N,F,k)}function v(M,y,L,N){_();const F=N.attributes,k=L.getAttributes(),H=y.defaultAttributeValues;for(const K in k){const G=k[K];if(G.location>=0){let ee=F[K];if(ee===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const oe=ee.normalized,me=ee.itemSize,ge=e.get(ee);if(ge===void 0)continue;const $e=ge.buffer,Ye=ge.type,Qe=ge.bytesPerElement,q=Ye===i.INT||Ye===i.UNSIGNED_INT||ee.gpuType===ql;if(ee.isInterleavedBufferAttribute){const J=ee.data,xe=J.stride,Ue=ee.offset;if(J.isInstancedInterleavedBuffer){for(let ce=0;ce<G.locationSize;ce++)p(G.location+ce,J.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ce=0;ce<G.locationSize;ce++)m(G.location+ce);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let ce=0;ce<G.locationSize;ce++)b(G.location+ce,me/G.locationSize,Ye,oe,xe*Qe,(Ue+me/G.locationSize*ce)*Qe,q)}else{if(ee.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)p(G.location+J,ee.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let J=0;J<G.locationSize;J++)m(G.location+J);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let J=0;J<G.locationSize;J++)b(G.location+J,me/G.locationSize,Ye,oe,me*Qe,me/G.locationSize*J*Qe,q)}}else if(H!==void 0){const oe=H[K];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(G.location,oe);break;case 3:i.vertexAttrib3fv(G.location,oe);break;case 4:i.vertexAttrib4fv(G.location,oe);break;default:i.vertexAttrib1fv(G.location,oe)}}}}x()}function w(){I();for(const M in n){const y=n[M];for(const L in y){const N=y[L];for(const F in N)u(N[F].object),delete N[F];delete y[L]}delete n[M]}}function S(M){if(n[M.id]===void 0)return;const y=n[M.id];for(const L in y){const N=y[L];for(const F in N)u(N[F].object),delete N[F];delete y[L]}delete n[M.id]}function R(M){for(const y in n){const L=n[y];if(L[M.id]===void 0)continue;const N=L[M.id];for(const F in N)u(N[F].object),delete N[F];delete L[M.id]}}function I(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function D_(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function U_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===As&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==On&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ln&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:w,maxSamples:S}}function N_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new yi,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,b=x*4;let v=p.clippingState||null;l.value=v,v=u(g,d,b,f);for(let w=0;w!==b;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=f;b!==_;++b,v+=4)o.copy(h[b]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function F_(i){let e=new WeakMap;function t(o,a){return a===$a?o.mapping=ys:a===Ja&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$a||a===Ja)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Gp(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const cs=4,Ou=[.125,.215,.35,.446,.526,.582],zi=20,xa=new No,ku=new Ie;let va=null,ya=0,Ma=0,ba=!1;const ki=(1+Math.sqrt(5))/2,os=1/ki,Bu=[new A(-ki,os,0),new A(ki,os,0),new A(-os,0,ki),new A(os,0,ki),new A(0,ki,-os),new A(0,ki,os),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],O_=new A;class Pl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=O_}=r;va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(va,ya,Ma),this._renderer.xr.enabled=ba,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:As,format:Mn,colorSpace:tn,depthBuffer:!1},s=zu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k_(r)),this._blurMaterial=B_(r,e,t)}return s}_compileMaterial(e){const t=new Ce(this._lodPlanes[0],e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,n,s,r){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ku),h.toneMapping=Ei,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new Nt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),m=new Ce(new sn,_);let p=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,p=!0):(_.color.copy(ku),p=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;eo(s,v*w,b>2?w:0,w,w),h.setRenderTarget(s),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ys||e.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;eo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bu[(s-r-1)%Bu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ce(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let x=0;for(let R=0;R<zi;++R){const I=R/_,T=Math.exp(-I*I/2);p.push(T),R===0?x+=T:R<m&&(x+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const v=this._sizeLods[s],w=3*v*(s>b-cs?s-b+cs:0),S=4*(this._cubeSize-v);eo(t,w,S,3*v,2*v),l.setRenderTarget(t),l.render(h,xa)}}function k_(i){const e=[],t=[],n=[];let s=i;const r=i-cs+1+Ou.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-cs?l=Ou[o-i+cs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),b=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let S=0;S<f;S++){const R=S%3*2/3-1,I=S>2?0:-1,T=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];x.set(T,_*g*S),b.set(d,m*g*S);const M=[S,S,S,S,S,S];v.set(M,p*g*S)}const w=new yt;w.setAttribute("position",new Ot(x,_)),w.setAttribute("uv",new Ot(b,m)),w.setAttribute("faceIndex",new Ot(v,p)),e.push(w),s>cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zu(i,e,t){const n=new Ai(i,e,t);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function eo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function B_(i,e,t){const n=new Float32Array(zi),s=new A(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Hu(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Vu(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function z_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$a||l===Ja,u=l===ys||l===Ms;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Pl(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Pl(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function H_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&_r("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function V_(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let b=0,v=x.length;b<v;b+=3){const w=x[b+0],S=x[b+1],R=x[b+2];d.push(w,S,S,R,R,w)}}else if(g!==void 0){const x=g.array;_=g.version;for(let b=0,v=x.length/3-1;b<v;b+=3){const w=b+0,S=b+1,R=b+2;d.push(w,S,S,R,R,w)}}else return;const m=new(id(d)?ad:od)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function G_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function W_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function X_(i,e,t){const n=new WeakMap,s=new Ze;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let T=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let v=a.attributes.position.count*b,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const S=new Float32Array(v*w*4*h),R=new sd(S,v,w,h);R.type=Ln,R.needsUpdate=!0;const I=b*4;for(let M=0;M<h;M++){const y=m[M],L=p[M],N=x[M],F=v*w*4*M;for(let k=0;k<y.count;k++){const H=k*I;f===!0&&(s.fromBufferAttribute(y,k),S[F+H+0]=s.x,S[F+H+1]=s.y,S[F+H+2]=s.z,S[F+H+3]=0),g===!0&&(s.fromBufferAttribute(L,k),S[F+H+4]=s.x,S[F+H+5]=s.y,S[F+H+6]=s.z,S[F+H+7]=0),_===!0&&(s.fromBufferAttribute(N,k),S[F+H+8]=s.x,S[F+H+9]=s.y,S[F+H+10]=s.z,S[F+H+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new pe(v,w)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function q_(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const bd=new Ft,Gu=new uc(1,1),Sd=new sd,wd=new Tp,Ed=new ud,Wu=[],Xu=[],qu=new Float32Array(16),Yu=new Float32Array(9),ju=new Float32Array(4);function Ls(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Wu[s];if(r===void 0&&(r=new Float32Array(s),Wu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fo(i,e){let t=Xu[e];t===void 0&&(t=new Int32Array(e),Xu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Y_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function j_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function K_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function $_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function J_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),Bt(t,n)}}function Z_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;Yu.set(n),i.uniformMatrix3fv(this.addr,!1,Yu),Bt(t,n)}}function Q_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;qu.set(n),i.uniformMatrix4fv(this.addr,!1,qu),Bt(t,n)}}function ex(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function sx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function lx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gu.compareFunction=nd,r=Gu):r=bd,t.setTexture2D(e||r,s)}function cx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wd,s)}function ux(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ed,s)}function hx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sd,s)}function dx(i){switch(i){case 5126:return Y_;case 35664:return j_;case 35665:return K_;case 35666:return $_;case 35674:return J_;case 35675:return Z_;case 35676:return Q_;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return hx}}function fx(i,e){i.uniform1fv(this.addr,e)}function px(i,e){const t=Ls(e,this.size,2);i.uniform2fv(this.addr,t)}function mx(i,e){const t=Ls(e,this.size,3);i.uniform3fv(this.addr,t)}function gx(i,e){const t=Ls(e,this.size,4);i.uniform4fv(this.addr,t)}function _x(i,e){const t=Ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xx(i,e){const t=Ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vx(i,e){const t=Ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yx(i,e){i.uniform1iv(this.addr,e)}function Mx(i,e){i.uniform2iv(this.addr,e)}function bx(i,e){i.uniform3iv(this.addr,e)}function Sx(i,e){i.uniform4iv(this.addr,e)}function wx(i,e){i.uniform1uiv(this.addr,e)}function Ex(i,e){i.uniform2uiv(this.addr,e)}function Tx(i,e){i.uniform3uiv(this.addr,e)}function Ax(i,e){i.uniform4uiv(this.addr,e)}function Rx(i,e,t){const n=this.cache,s=e.length,r=Fo(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||bd,r[o])}function Cx(i,e,t){const n=this.cache,s=e.length,r=Fo(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wd,r[o])}function Px(i,e,t){const n=this.cache,s=e.length,r=Fo(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ed,r[o])}function Ix(i,e,t){const n=this.cache,s=e.length,r=Fo(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sd,r[o])}function Lx(i){switch(i){case 5126:return fx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return _x;case 35675:return xx;case 35676:return vx;case 5124:case 35670:return yx;case 35667:case 35671:return Mx;case 35668:case 35672:return bx;case 35669:case 35673:return Sx;case 5125:return wx;case 36294:return Ex;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Ix}}class Dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dx(t.type)}}class Ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lx(t.type)}}class Nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Ku(i,e){i.seq.push(e),i.map[e.id]=e}function Fx(i,e,t){const n=i.name,s=n.length;for(Sa.lastIndex=0;;){const r=Sa.exec(n),o=Sa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ku(t,c===void 0?new Dx(a,i,e):new Ux(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Nx(a),Ku(t,h)),t=h}}}class co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Fx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function $u(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ox=37297;let kx=0;function Bx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ju=new Ve;function zx(i){et._getMatrix(Ju,et.workingColorSpace,i);const e=`mat3( ${Ju.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case yo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Bx(i.getShaderSource(e),a)}else return r}function Hx(i,e){const t=zx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Vx(i,e){let t;switch(e){case kf:t="Linear";break;case Bf:t="Reinhard";break;case zf:t="Cineon";break;case Wh:t="ACESFilmic";break;case Vf:t="AgX";break;case Gf:t="Neutral";break;case Hf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const to=new A;function Gx(){et.getLuminanceCoefficients(to);const i=to.x.toFixed(4),e=to.y.toFixed(4),t=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Xx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function js(i){return i!==""}function Qu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(i){return i.replace(Yx,Kx)}const jx=new Map;function Kx(i,e){let t=Xe[e];if(t===void 0){const n=jx.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Il(t)}const $x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(i){return i.replace($x,Jx)}function Jx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Zx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Qx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case Ms:e="ENVMAP_TYPE_CUBE";break;case Io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ev(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ms&&(e="ENVMAP_MODE_REFRACTION"),e}function tv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gh:e="ENVMAP_BLENDING_MULTIPLY";break;case Ff:e="ENVMAP_BLENDING_MIX";break;case Of:e="ENVMAP_BLENDING_ADD";break}return e}function nv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Zx(t),c=Qx(t),u=ev(t),h=tv(t),d=nv(t),f=Wx(t),g=Xx(r),_=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Ei?Vx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Hx("linearToOutputTexel",t.outputColorSpace),Gx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),o=Il(o),o=Qu(o,t),o=eh(o,t),a=Il(a),a=Qu(a,t),a=eh(a,t),o=th(o),a=th(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=x+m+o,v=x+p+a,w=$u(s,s.VERTEX_SHADER,b),S=$u(s,s.FRAGMENT_SHADER,v);s.attachShader(_,w),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(y){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(w)||"",F=s.getShaderInfoLog(S)||"",k=L.trim(),H=N.trim(),K=F.trim();let G=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,S);else{const oe=Zu(s,w,"vertex"),me=Zu(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+k+`
`+oe+`
`+me)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||K==="")&&(ee=!1);ee&&(y.diagnostics={runnable:G,programLog:k,vertexShader:{log:H,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(w),s.deleteShader(S),I=new co(s,_),T=qx(s,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Ox)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=S,this}let sv=0;class rv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ov(e),t.set(e,n)),n}}class ov{constructor(e){this.id=sv++,this.code=e,this.usedTimes=0}}function av(i,e,t,n,s,r,o){const a=new tc,l=new rv,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,y,L,N){const F=L.fog,k=N.geometry,H=T.isMeshStandardMaterial?L.environment:null,K=(T.isMeshStandardMaterial?t:e).get(T.envMap||H),G=K&&K.mapping===Io?K.image.height:null,ee=g[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,me=oe!==void 0?oe.length:0;let ge=0;k.morphAttributes.position!==void 0&&(ge=1),k.morphAttributes.normal!==void 0&&(ge=2),k.morphAttributes.color!==void 0&&(ge=3);let $e,Ye,Qe,q;if(ee){const it=Hn[ee];$e=it.vertexShader,Ye=it.fragmentShader}else $e=T.vertexShader,Ye=T.fragmentShader,l.update(T),Qe=l.getVertexShaderID(T),q=l.getFragmentShaderID(T);const J=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,ce=N.isBatchedMesh===!0,Ne=!!T.map,Vt=!!T.matcap,U=!!K,Mt=!!T.aoMap,He=!!T.lightMap,Fe=!!T.bumpMap,be=!!T.normalMap,bt=!!T.displacementMap,Se=!!T.emissiveMap,We=!!T.metalnessMap,zt=!!T.roughnessMap,Lt=T.anisotropy>0,D=T.clearcoat>0,E=T.dispersion>0,V=T.iridescence>0,j=T.sheen>0,Z=T.transmission>0,Y=Lt&&!!T.anisotropyMap,Ae=D&&!!T.clearcoatMap,ae=D&&!!T.clearcoatNormalMap,we=D&&!!T.clearcoatRoughnessMap,Ee=V&&!!T.iridescenceMap,se=V&&!!T.iridescenceThicknessMap,fe=j&&!!T.sheenColorMap,De=j&&!!T.sheenRoughnessMap,Te=!!T.specularMap,he=!!T.specularColorMap,Ge=!!T.specularIntensityMap,O=Z&&!!T.transmissionMap,re=Z&&!!T.thicknessMap,le=!!T.gradientMap,ve=!!T.alphaMap,te=T.alphaTest>0,$=!!T.alphaHash,Me=!!T.extensions;let Be=Ei;T.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Be=i.toneMapping);const ft={shaderID:ee,shaderType:T.type,shaderName:T.name,vertexShader:$e,fragmentShader:Ye,defines:T.defines,customVertexShaderID:Qe,customFragmentShaderID:q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:ce,batchingColor:ce&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:tn,alphaToCoverage:!!T.alphaToCoverage,map:Ne,matcap:Vt,envMap:U,envMapMode:U&&K.mapping,envMapCubeUVHeight:G,aoMap:Mt,lightMap:He,bumpMap:Fe,normalMap:be,displacementMap:d&&bt,emissiveMap:Se,normalMapObjectSpace:be&&T.normalMapType===Kf,normalMapTangentSpace:be&&T.normalMapType===td,metalnessMap:We,roughnessMap:zt,anisotropy:Lt,anisotropyMap:Y,clearcoat:D,clearcoatMap:Ae,clearcoatNormalMap:ae,clearcoatRoughnessMap:we,dispersion:E,iridescence:V,iridescenceMap:Ee,iridescenceThicknessMap:se,sheen:j,sheenColorMap:fe,sheenRoughnessMap:De,specularMap:Te,specularColorMap:he,specularIntensityMap:Ge,transmission:Z,transmissionMap:O,thicknessMap:re,gradientMap:le,opaque:T.transparent===!1&&T.blending===hs&&T.alphaToCoverage===!1,alphaMap:ve,alphaTest:te,alphaHash:$,combine:T.combine,mapUv:Ne&&_(T.map.channel),aoMapUv:Mt&&_(T.aoMap.channel),lightMapUv:He&&_(T.lightMap.channel),bumpMapUv:Fe&&_(T.bumpMap.channel),normalMapUv:be&&_(T.normalMap.channel),displacementMapUv:bt&&_(T.displacementMap.channel),emissiveMapUv:Se&&_(T.emissiveMap.channel),metalnessMapUv:We&&_(T.metalnessMap.channel),roughnessMapUv:zt&&_(T.roughnessMap.channel),anisotropyMapUv:Y&&_(T.anisotropyMap.channel),clearcoatMapUv:Ae&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(T.sheenRoughnessMap.channel),specularMapUv:Te&&_(T.specularMap.channel),specularColorMapUv:he&&_(T.specularColorMap.channel),specularIntensityMapUv:Ge&&_(T.specularIntensityMap.channel),transmissionMapUv:O&&_(T.transmissionMap.channel),thicknessMapUv:re&&_(T.thicknessMap.channel),alphaMapUv:ve&&_(T.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(be||Lt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(Ne||ve),fog:!!F,useFog:T.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&y.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ne&&T.map.isVideoTexture===!0&&et.getTransfer(T.map.colorSpace)===ct,decodeVideoTextureEmissive:Se&&T.emissiveMap.isVideoTexture===!0&&et.getTransfer(T.emissiveMap.colorSpace)===ct,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Pt,flipSided:T.side===Qt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Me&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&T.extensions.multiDraw===!0||ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const y in T.defines)M.push(y),M.push(T.defines[y]);return T.isRawShaderMaterial===!1&&(x(M,T),b(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function x(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function b(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){const M=g[T.type];let y;if(M){const L=Hn[M];y=Bp.clone(L.uniforms)}else y=T.uniforms;return y}function w(T,M){let y;for(let L=0,N=u.length;L<N;L++){const F=u[L];if(F.cacheKey===M){y=F,++y.usedTimes;break}}return y===void 0&&(y=new iv(i,M,T,r),u.push(y)),y}function S(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function R(T){l.remove(T)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:S,releaseShaderCache:R,programs:u,dispose:I}}function lv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function cv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ih(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||cv),n.length>1&&n.sort(d||ih),s.length>1&&s.sort(d||ih)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function uv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new sh,i.set(n,[o])):s>=r.length?(o=new sh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function hv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ie};break;case"SpotLight":t={position:new A,direction:new A,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function dv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fv=0;function pv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mv(i){const e=new hv,t=dv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const s=new A,r=new ne,o=new ne;function a(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,b=0,v=0,w=0,S=0,R=0;c.sort(pv);for(let T=0,M=c.length;T<M;T++){const y=c[T],L=y.color,N=y.intensity,F=y.distance,k=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=L.r*N,h+=L.g*N,d+=L.b*N;else if(y.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(y.sh.coefficients[H],N);R++}else if(y.isDirectionalLight){const H=e.get(y);if(H.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const K=y.shadow,G=t.get(y);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=y.shadow.matrix,x++}n.directional[f]=H,f++}else if(y.isSpotLight){const H=e.get(y);H.position.setFromMatrixPosition(y.matrixWorld),H.color.copy(L).multiplyScalar(N),H.distance=F,H.coneCos=Math.cos(y.angle),H.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),H.decay=y.decay,n.spot[_]=H;const K=y.shadow;if(y.map&&(n.spotLightMap[w]=y.map,w++,K.updateMatrices(y),y.castShadow&&S++),n.spotLightMatrix[_]=K.matrix,y.castShadow){const G=t.get(y);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=k,v++}_++}else if(y.isRectAreaLight){const H=e.get(y);H.color.copy(L).multiplyScalar(N),H.halfWidth.set(y.width*.5,0,0),H.halfHeight.set(0,y.height*.5,0),n.rectArea[m]=H,m++}else if(y.isPointLight){const H=e.get(y);if(H.color.copy(y.color).multiplyScalar(y.intensity),H.distance=y.distance,H.decay=y.decay,y.castShadow){const K=y.shadow,G=t.get(y);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=y.shadow.matrix,b++}n.point[g]=H,g++}else if(y.isHemisphereLight){const H=e.get(y);H.skyColor.copy(y.color).multiplyScalar(N),H.groundColor.copy(y.groundColor).multiplyScalar(N),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==b||I.numSpotShadows!==v||I.numSpotMaps!==w||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+w-S,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=b,I.numSpotShadows=v,I.numSpotMaps=w,I.numLightProbes=R,n.version=fv++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const b=c[p];if(b.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(b.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function rh(i){const e=new mv(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function gv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new rh(i),e.set(s,[a])):r>=o.length?(a=new rh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const _v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
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
}`;function vv(i,e,t){let n=new ac;const s=new pe,r=new pe,o=new Ze,a=new _m({depthPacking:jf}),l=new xm,c={},u=t.maxTextureSize,h={[ci]:Qt,[Qt]:ci,[Pt]:Pt},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:_v,fragmentShader:xv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new yt;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ce(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let p=this.type;this.render=function(S,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),L=i.state;L.setBlending(wi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=p!==ii&&this.type===ii,F=p===ii&&this.type!==ii;for(let k=0,H=S.length;k<H;k++){const K=S[k],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ee=G.getFrameExtents();if(s.multiply(ee),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,G.mapSize.y=r.y)),G.map===null||N===!0||F===!0){const me=this.type!==ii?{minFilter:en,magFilter:en}:{};G.map!==null&&G.map.dispose(),G.map=new Ai(s.x,s.y,me),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const oe=G.getViewportCount();for(let me=0;me<oe;me++){const ge=G.getViewport(me);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),L.viewport(o),G.updateMatrices(K,me),n=G.getFrustum(),v(R,I,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===ii&&x(G,I),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,M,y)};function x(S,R){const I=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ai(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,I,f,_,null)}function b(S,R,I,T){let M=null;const y=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(y!==void 0)M=y;else if(M=I.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=M.uuid,N=R.uuid;let F=c[L];F===void 0&&(F={},c[L]=F);let k=F[N];k===void 0&&(k=M.clone(),F[N]=k,R.addEventListener("dispose",w)),M=k}if(M.visible=R.visible,M.wireframe=R.wireframe,T===ii?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=i.properties.get(M);L.light=I}return M}function v(S,R,I,T,M){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===ii)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);const N=e.update(S),F=S.material;if(Array.isArray(F)){const k=N.groups;for(let H=0,K=k.length;H<K;H++){const G=k[H],ee=F[G.materialIndex];if(ee&&ee.visible){const oe=b(S,ee,T,M);S.onBeforeShadow(i,S,R,I,N,oe,G),i.renderBufferDirect(I,null,N,oe,S,G),S.onAfterShadow(i,S,R,I,N,oe,G)}}}else if(F.visible){const k=b(S,F,T,M);S.onBeforeShadow(i,S,R,I,N,k,null),i.renderBufferDirect(I,null,N,k,S,null),S.onAfterShadow(i,S,R,I,N,k,null)}}const L=S.children;for(let N=0,F=L.length;N<F;N++)v(L[N],R,I,T,M)}function w(S){S.target.removeEventListener("dispose",w);for(const I in c){const T=c[I],M=S.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const yv={[Ga]:Wa,[Xa]:ja,[qa]:Ka,[vs]:Ya,[Wa]:Ga,[ja]:Xa,[Ka]:qa,[Ya]:vs};function Mv(i,e){function t(){let O=!1;const re=new Ze;let le=null;const ve=new Ze(0,0,0,0);return{setMask:function(te){le!==te&&!O&&(i.colorMask(te,te,te,te),le=te)},setLocked:function(te){O=te},setClear:function(te,$,Me,Be,ft){ft===!0&&(te*=Be,$*=Be,Me*=Be),re.set(te,$,Me,Be),ve.equals(re)===!1&&(i.clearColor(te,$,Me,Be),ve.copy(re))},reset:function(){O=!1,le=null,ve.set(-1,0,0,0)}}}function n(){let O=!1,re=!1,le=null,ve=null,te=null;return{setReversed:function($){if(re!==$){const Me=e.get("EXT_clip_control");$?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),re=$;const Be=te;te=null,this.setClear(Be)}},getReversed:function(){return re},setTest:function($){$?J(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function($){le!==$&&!O&&(i.depthMask($),le=$)},setFunc:function($){if(re&&($=yv[$]),ve!==$){switch($){case Ga:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case Xa:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case qa:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case ja:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=$}},setLocked:function($){O=$},setClear:function($){te!==$&&(re&&($=1-$),i.clearDepth($),te=$)},reset:function(){O=!1,le=null,ve=null,te=null,re=!1}}}function s(){let O=!1,re=null,le=null,ve=null,te=null,$=null,Me=null,Be=null,ft=null;return{setTest:function(it){O||(it?J(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(it){re!==it&&!O&&(i.stencilMask(it),re=it)},setFunc:function(it,Kn,Bn){(le!==it||ve!==Kn||te!==Bn)&&(i.stencilFunc(it,Kn,Bn),le=it,ve=Kn,te=Bn)},setOp:function(it,Kn,Bn){($!==it||Me!==Kn||Be!==Bn)&&(i.stencilOp(it,Kn,Bn),$=it,Me=Kn,Be=Bn)},setLocked:function(it){O=it},setClear:function(it){ft!==it&&(i.clearStencil(it),ft=it)},reset:function(){O=!1,re=null,le=null,ve=null,te=null,$=null,Me=null,Be=null,ft=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,b=null,v=null,w=null,S=null,R=new Ie(0,0,0),I=0,T=!1,M=null,y=null,L=null,N=null,F=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=K>=2);let ee=null,oe={};const me=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),$e=new Ze().fromArray(me),Ye=new Ze().fromArray(ge);function Qe(O,re,le,ve){const te=new Uint8Array(4),$=i.createTexture();i.bindTexture(O,$),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<le;Me++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(re+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return $}const q={};q[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(vs),Fe(!1),be(Vc),J(i.CULL_FACE),Mt(wi);function J(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function xe(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Ue(O,re){return h[O]!==re?(i.bindFramebuffer(O,re),h[O]=re,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=re),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=re),!0):!1}function ce(O,re){let le=f,ve=!1;if(O){le=d.get(re),le===void 0&&(le=[],d.set(re,le));const te=O.textures;if(le.length!==te.length||le[0]!==i.COLOR_ATTACHMENT0){for(let $=0,Me=te.length;$<Me;$++)le[$]=i.COLOR_ATTACHMENT0+$;le.length=te.length,ve=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,ve=!0);ve&&i.drawBuffers(le)}function Ne(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const Vt={[Bi]:i.FUNC_ADD,[vf]:i.FUNC_SUBTRACT,[yf]:i.FUNC_REVERSE_SUBTRACT};Vt[Mf]=i.MIN,Vt[bf]=i.MAX;const U={[Sf]:i.ZERO,[wf]:i.ONE,[Ef]:i.SRC_COLOR,[Ha]:i.SRC_ALPHA,[If]:i.SRC_ALPHA_SATURATE,[Cf]:i.DST_COLOR,[Af]:i.DST_ALPHA,[Tf]:i.ONE_MINUS_SRC_COLOR,[Va]:i.ONE_MINUS_SRC_ALPHA,[Pf]:i.ONE_MINUS_DST_COLOR,[Rf]:i.ONE_MINUS_DST_ALPHA,[Lf]:i.CONSTANT_COLOR,[Df]:i.ONE_MINUS_CONSTANT_COLOR,[Uf]:i.CONSTANT_ALPHA,[Nf]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(O,re,le,ve,te,$,Me,Be,ft,it){if(O===wi){_===!0&&(xe(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),O!==xf){if(O!==m||it!==T){if((p!==Bi||v!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,v=Bi),it)switch(O){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFunc(i.ONE,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,b=null,w=null,S=null,R.set(0,0,0),I=0,m=O,T=it}return}te=te||re,$=$||le,Me=Me||ve,(re!==p||te!==v)&&(i.blendEquationSeparate(Vt[re],Vt[te]),p=re,v=te),(le!==x||ve!==b||$!==w||Me!==S)&&(i.blendFuncSeparate(U[le],U[ve],U[$],U[Me]),x=le,b=ve,w=$,S=Me),(Be.equals(R)===!1||ft!==I)&&(i.blendColor(Be.r,Be.g,Be.b,ft),R.copy(Be),I=ft),m=O,T=!1}function He(O,re){O.side===Pt?xe(i.CULL_FACE):J(i.CULL_FACE);let le=O.side===Qt;re&&(le=!le),Fe(le),O.blending===hs&&O.transparent===!1?Mt(wi):Mt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const ve=O.stencilWrite;a.setTest(ve),ve&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Se(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(O){M!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),M=O)}function be(O){O!==gf?(J(i.CULL_FACE),O!==y&&(O===Vc?i.cullFace(i.BACK):O===_f?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),y=O}function bt(O){O!==L&&(H&&i.lineWidth(O),L=O)}function Se(O,re,le){O?(J(i.POLYGON_OFFSET_FILL),(N!==re||F!==le)&&(i.polygonOffset(re,le),N=re,F=le)):xe(i.POLYGON_OFFSET_FILL)}function We(O){O?J(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function zt(O){O===void 0&&(O=i.TEXTURE0+k-1),ee!==O&&(i.activeTexture(O),ee=O)}function Lt(O,re,le){le===void 0&&(ee===null?le=i.TEXTURE0+k-1:le=ee);let ve=oe[le];ve===void 0&&(ve={type:void 0,texture:void 0},oe[le]=ve),(ve.type!==O||ve.texture!==re)&&(ee!==le&&(i.activeTexture(le),ee=le),i.bindTexture(O,re||q[O]),ve.type=O,ve.texture=re)}function D(){const O=oe[ee];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(O){$e.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),$e.copy(O))}function De(O){Ye.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Ye.copy(O))}function Te(O,re){let le=c.get(re);le===void 0&&(le=new WeakMap,c.set(re,le));let ve=le.get(O);ve===void 0&&(ve=i.getUniformBlockIndex(re,O.name),le.set(O,ve))}function he(O,re){const ve=c.get(re).get(O);l.get(re)!==ve&&(i.uniformBlockBinding(re,ve,O.__bindingPointIndex),l.set(re,ve))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ee=null,oe={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,b=null,v=null,w=null,S=null,R=new Ie(0,0,0),I=0,T=!1,M=null,y=null,L=null,N=null,F=null,$e.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:xe,bindFramebuffer:Ue,drawBuffers:ce,useProgram:Ne,setBlending:Mt,setMaterial:He,setFlipSided:Fe,setCullFace:be,setLineWidth:bt,setPolygonOffset:Se,setScissorTest:We,activeTexture:zt,bindTexture:Lt,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:V,texImage2D:Ee,texImage3D:se,updateUBOMapping:Te,uniformBlockBinding:he,texStorage2D:ae,texStorage3D:we,texSubImage2D:j,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ae,scissor:fe,viewport:De,reset:Ge}}function bv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,E){return f?new OffscreenCanvas(D,E):gr("canvas")}function _(D,E,V){let j=1;const Z=Lt(D);if((Z.width>V||Z.height>V)&&(j=V/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Y=Math.floor(j*Z.width),Ae=Math.floor(j*Z.height);h===void 0&&(h=g(Y,Ae));const ae=E?g(Y,Ae):h;return ae.width=Y,ae.height=Ae,ae.getContext("2d").drawImage(D,0,0,Y,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+Ae+")."),ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(D,E,V,j,Z=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Y=E;if(E===i.RED&&(V===i.FLOAT&&(Y=i.R32F),V===i.HALF_FLOAT&&(Y=i.R16F),V===i.UNSIGNED_BYTE&&(Y=i.R8)),E===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.R8UI),V===i.UNSIGNED_SHORT&&(Y=i.R16UI),V===i.UNSIGNED_INT&&(Y=i.R32UI),V===i.BYTE&&(Y=i.R8I),V===i.SHORT&&(Y=i.R16I),V===i.INT&&(Y=i.R32I)),E===i.RG&&(V===i.FLOAT&&(Y=i.RG32F),V===i.HALF_FLOAT&&(Y=i.RG16F),V===i.UNSIGNED_BYTE&&(Y=i.RG8)),E===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RG8UI),V===i.UNSIGNED_SHORT&&(Y=i.RG16UI),V===i.UNSIGNED_INT&&(Y=i.RG32UI),V===i.BYTE&&(Y=i.RG8I),V===i.SHORT&&(Y=i.RG16I),V===i.INT&&(Y=i.RG32I)),E===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),V===i.UNSIGNED_INT&&(Y=i.RGB32UI),V===i.BYTE&&(Y=i.RGB8I),V===i.SHORT&&(Y=i.RGB16I),V===i.INT&&(Y=i.RGB32I)),E===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),V===i.UNSIGNED_INT&&(Y=i.RGBA32UI),V===i.BYTE&&(Y=i.RGBA8I),V===i.SHORT&&(Y=i.RGBA16I),V===i.INT&&(Y=i.RGBA32I)),E===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),E===i.RGBA){const Ae=Z?yo:et.getTransfer(j);V===i.FLOAT&&(Y=i.RGBA32F),V===i.HALF_FLOAT&&(Y=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Y=Ae===ct?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(D,E){let V;return D?E===null||E===Ti||E===hr?V=i.DEPTH24_STENCIL8:E===Ln?V=i.DEPTH32F_STENCIL8:E===ur&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ti||E===hr?V=i.DEPTH_COMPONENT24:E===Ln?V=i.DEPTH_COMPONENT32F:E===ur&&(V=i.DEPTH_COMPONENT16),V}function w(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==en&&D.minFilter!==fn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function S(D){const E=D.target;E.removeEventListener("dispose",S),I(E),E.isVideoTexture&&u.delete(E)}function R(D){const E=D.target;E.removeEventListener("dispose",R),M(E)}function I(D){const E=n.get(D);if(E.__webglInit===void 0)return;const V=D.source,j=d.get(V);if(j){const Z=j[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(D),Object.keys(j).length===0&&d.delete(V)}n.remove(D)}function T(D){const E=n.get(D);i.deleteTexture(E.__webglTexture);const V=D.source,j=d.get(V);delete j[E.__cacheKey],o.memory.textures--}function M(D){const E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let Z=0;Z<E.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(E.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)i.deleteFramebuffer(E.__webglFramebuffer[j]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=D.textures;for(let j=0,Z=V.length;j<Z;j++){const Y=n.get(V[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(V[j])}n.remove(D)}let y=0;function L(){y=0}function N(){const D=y;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),y+=1,D}function F(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function k(D,E){const V=n.get(D);if(D.isVideoTexture&&We(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&V.__version!==D.version){const j=D.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,D,E);return}}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+E)}function H(D,E){const V=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){q(V,D,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+E)}function K(D,E){const V=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){q(V,D,E);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+E)}function G(D,E){const V=n.get(D);if(D.version>0&&V.__version!==D.version){J(V,D,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+E)}const ee={[Fn]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[vo]:i.MIRRORED_REPEAT},oe={[en]:i.NEAREST,[qh]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[so]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},me={[$f]:i.NEVER,[np]:i.ALWAYS,[Jf]:i.LESS,[nd]:i.LEQUAL,[Zf]:i.EQUAL,[tp]:i.GEQUAL,[Qf]:i.GREATER,[ep]:i.NOTEQUAL};function ge(D,E){if(E.type===Ln&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===fn||E.magFilter===so||E.magFilter===Ys||E.magFilter===oi||E.minFilter===fn||E.minFilter===so||E.minFilter===Ys||E.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ee[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ee[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ee[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,oe[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,oe[E.minFilter]),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===en||E.minFilter!==Ys&&E.minFilter!==oi||E.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function $e(D,E){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",S));const j=E.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const Y=F(E);if(Y!==D.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Z[Y].usedTimes++;const Ae=Z[D.__cacheKey];Ae!==void 0&&(Z[D.__cacheKey].usedTimes--,Ae.usedTimes===0&&T(E)),D.__cacheKey=Y,D.__webglTexture=Z[Y].texture}return V}function Ye(D,E,V){return Math.floor(Math.floor(D/V)/E)}function Qe(D,E,V,j){const Y=D.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,V,j,E.data);else{Y.sort((se,fe)=>se.start-fe.start);let Ae=0;for(let se=1;se<Y.length;se++){const fe=Y[Ae],De=Y[se],Te=fe.start+fe.count,he=Ye(De.start,E.width,4),Ge=Ye(fe.start,E.width,4);De.start<=Te+1&&he===Ge&&Ye(De.start+De.count-1,E.width,4)===he?fe.count=Math.max(fe.count,De.start+De.count-fe.start):(++Ae,Y[Ae]=De)}Y.length=Ae+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),Ee=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let se=0,fe=Y.length;se<fe;se++){const De=Y[se],Te=Math.floor(De.start/4),he=Math.ceil(De.count/4),Ge=Te%E.width,O=Math.floor(Te/E.width),re=he,le=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,Ge,O,re,le,V,j,E.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function q(D,E,V){let j=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=i.TEXTURE_3D);const Z=$e(D,E),Y=E.source;t.bindTexture(j,D.__webglTexture,i.TEXTURE0+V);const Ae=n.get(Y);if(Y.version!==Ae.__version||Z===!0){t.activeTexture(i.TEXTURE0+V);const ae=et.getPrimaries(et.workingColorSpace),we=E.colorSpace===ri?null:et.getPrimaries(E.colorSpace),Ee=E.colorSpace===ri||ae===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let se=_(E.image,!1,s.maxTextureSize);se=zt(E,se);const fe=r.convert(E.format,E.colorSpace),De=r.convert(E.type);let Te=b(E.internalFormat,fe,De,E.colorSpace,E.isVideoTexture);ge(j,E);let he;const Ge=E.mipmaps,O=E.isVideoTexture!==!0,re=Ae.__version===void 0||Z===!0,le=Y.dataReady,ve=w(E,se);if(E.isDepthTexture)Te=v(E.format===fr,E.type),re&&(O?t.texStorage2D(i.TEXTURE_2D,1,Te,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Te,se.width,se.height,0,fe,De,null));else if(E.isDataTexture)if(Ge.length>0){O&&re&&t.texStorage2D(i.TEXTURE_2D,ve,Te,Ge[0].width,Ge[0].height);for(let te=0,$=Ge.length;te<$;te++)he=Ge[te],O?le&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,fe,De,he.data):t.texImage2D(i.TEXTURE_2D,te,Te,he.width,he.height,0,fe,De,he.data);E.generateMipmaps=!1}else O?(re&&t.texStorage2D(i.TEXTURE_2D,ve,Te,se.width,se.height),le&&Qe(E,se,fe,De)):t.texImage2D(i.TEXTURE_2D,0,Te,se.width,se.height,0,fe,De,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){O&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Te,Ge[0].width,Ge[0].height,se.depth);for(let te=0,$=Ge.length;te<$;te++)if(he=Ge[te],E.format!==Mn)if(fe!==null)if(O){if(le)if(E.layerUpdates.size>0){const Me=Fu(he.width,he.height,E.format,E.type);for(const Be of E.layerUpdates){const ft=he.data.subarray(Be*Me/he.data.BYTES_PER_ELEMENT,(Be+1)*Me/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Be,he.width,he.height,1,fe,ft)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,se.depth,fe,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Te,he.width,he.height,se.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,se.depth,fe,De,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Te,he.width,he.height,se.depth,0,fe,De,he.data)}else{O&&re&&t.texStorage2D(i.TEXTURE_2D,ve,Te,Ge[0].width,Ge[0].height);for(let te=0,$=Ge.length;te<$;te++)he=Ge[te],E.format!==Mn?fe!==null?O?le&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Te,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?le&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,fe,De,he.data):t.texImage2D(i.TEXTURE_2D,te,Te,he.width,he.height,0,fe,De,he.data)}else if(E.isDataArrayTexture)if(O){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Te,se.width,se.height,se.depth),le)if(E.layerUpdates.size>0){const te=Fu(se.width,se.height,E.format,E.type);for(const $ of E.layerUpdates){const Me=se.data.subarray($*te/se.data.BYTES_PER_ELEMENT,($+1)*te/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,se.width,se.height,1,fe,De,Me)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,De,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,fe,De,se.data);else if(E.isData3DTexture)O?(re&&t.texStorage3D(i.TEXTURE_3D,ve,Te,se.width,se.height,se.depth),le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,De,se.data)):t.texImage3D(i.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,fe,De,se.data);else if(E.isFramebufferTexture){if(re)if(O)t.texStorage2D(i.TEXTURE_2D,ve,Te,se.width,se.height);else{let te=se.width,$=se.height;for(let Me=0;Me<ve;Me++)t.texImage2D(i.TEXTURE_2D,Me,Te,te,$,0,fe,De,null),te>>=1,$>>=1}}else if(Ge.length>0){if(O&&re){const te=Lt(Ge[0]);t.texStorage2D(i.TEXTURE_2D,ve,Te,te.width,te.height)}for(let te=0,$=Ge.length;te<$;te++)he=Ge[te],O?le&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,fe,De,he):t.texImage2D(i.TEXTURE_2D,te,Te,fe,De,he);E.generateMipmaps=!1}else if(O){if(re){const te=Lt(se);t.texStorage2D(i.TEXTURE_2D,ve,Te,te.width,te.height)}le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,De,se)}else t.texImage2D(i.TEXTURE_2D,0,Te,fe,De,se);m(E)&&p(j),Ae.__version=Y.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function J(D,E,V){if(E.image.length!==6)return;const j=$e(D,E),Z=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+V);const Y=n.get(Z);if(Z.version!==Y.__version||j===!0){t.activeTexture(i.TEXTURE0+V);const Ae=et.getPrimaries(et.workingColorSpace),ae=E.colorSpace===ri?null:et.getPrimaries(E.colorSpace),we=E.colorSpace===ri||Ae===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let $=0;$<6;$++)!Ee&&!se?fe[$]=_(E.image[$],!0,s.maxCubemapSize):fe[$]=se?E.image[$].image:E.image[$],fe[$]=zt(E,fe[$]);const De=fe[0],Te=r.convert(E.format,E.colorSpace),he=r.convert(E.type),Ge=b(E.internalFormat,Te,he,E.colorSpace),O=E.isVideoTexture!==!0,re=Y.__version===void 0||j===!0,le=Z.dataReady;let ve=w(E,De);ge(i.TEXTURE_CUBE_MAP,E);let te;if(Ee){O&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Ge,De.width,De.height);for(let $=0;$<6;$++){te=fe[$].mipmaps;for(let Me=0;Me<te.length;Me++){const Be=te[Me];E.format!==Mn?Te!==null?O?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,Be.width,Be.height,Te,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,Ge,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,Be.width,Be.height,Te,he,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,Ge,Be.width,Be.height,0,Te,he,Be.data)}}}else{if(te=E.mipmaps,O&&re){te.length>0&&ve++;const $=Lt(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(se){O?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,fe[$].width,fe[$].height,Te,he,fe[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,fe[$].width,fe[$].height,0,Te,he,fe[$].data);for(let Me=0;Me<te.length;Me++){const ft=te[Me].image[$].image;O?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,ft.width,ft.height,Te,he,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,Ge,ft.width,ft.height,0,Te,he,ft.data)}}else{O?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Te,he,fe[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,Te,he,fe[$]);for(let Me=0;Me<te.length;Me++){const Be=te[Me];O?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,Te,he,Be.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,Ge,Te,he,Be.image[$])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function xe(D,E,V,j,Z,Y){const Ae=r.convert(V.format,V.colorSpace),ae=r.convert(V.type),we=b(V.internalFormat,Ae,ae,V.colorSpace),Ee=n.get(E),se=n.get(V);if(se.__renderTarget=E,!Ee.__hasExternalTextures){const fe=Math.max(1,E.width>>Y),De=Math.max(1,E.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,we,fe,De,E.depth,0,Ae,ae,null):t.texImage2D(Z,Y,we,fe,De,0,Ae,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,se.__webglTexture,0,bt(E)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,se.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(D,E,V){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer){const j=E.depthTexture,Z=j&&j.isDepthTexture?j.type:null,Y=v(E.stencilBuffer,Z),Ae=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=bt(E);Se(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Y,E.width,E.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Y,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Y,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,D)}else{const j=E.textures;for(let Z=0;Z<j.length;Z++){const Y=j[Z],Ae=r.convert(Y.format,Y.colorSpace),ae=r.convert(Y.type),we=b(Y.internalFormat,Ae,ae,Y.colorSpace),Ee=bt(E);V&&Se(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,we,E.width,E.height):Se(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,we,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,we,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(E.depthTexture);j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const Z=j.__webglTexture,Y=bt(E);if(E.depthTexture.format===dr)Se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(E.depthTexture.format===fr)Se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ne(D){const E=n.get(D),V=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const j=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=j}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const j=D.texture.mipmaps;j&&j.length>0?ce(E.__webglFramebuffer[0],D):ce(E.__webglFramebuffer,D)}else if(V){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=i.createRenderbuffer(),Ue(E.__webglDepthbuffer[j],D,!1);else{const Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else{const j=D.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ue(E.__webglDepthbuffer,D,!1);else{const Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(D,E,V){const j=n.get(D);E!==void 0&&xe(j.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ne(D)}function U(D){const E=D.texture,V=n.get(D),j=n.get(E);D.addEventListener("dispose",R);const Z=D.textures,Y=D.isWebGLCubeRenderTarget===!0,Ae=Z.length>1;if(Ae||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=E.version,o.memory.textures++),Y){V.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[ae]=[];for(let we=0;we<E.mipmaps.length;we++)V.__webglFramebuffer[ae][we]=i.createFramebuffer()}else V.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)V.__webglFramebuffer[ae]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let ae=0,we=Z.length;ae<we;ae++){const Ee=n.get(Z[ae]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Se(D)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const we=Z[ae];V.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ae]);const Ee=r.convert(we.format,we.colorSpace),se=r.convert(we.type),fe=b(we.internalFormat,Ee,se,we.colorSpace,D.isXRRenderTarget===!0),De=bt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,fe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,V.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(V.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ge(i.TEXTURE_CUBE_MAP,E);for(let ae=0;ae<6;ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)xe(V.__webglFramebuffer[ae][we],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we);else xe(V.__webglFramebuffer[ae],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ae=0,we=Z.length;ae<we;ae++){const Ee=Z[ae],se=n.get(Ee);let fe=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),ge(fe,Ee),xe(V.__webglFramebuffer,D,Ee,i.COLOR_ATTACHMENT0+ae,fe,0),m(Ee)&&p(fe)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ae=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),ge(ae,E),E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)xe(V.__webglFramebuffer[we],D,E,i.COLOR_ATTACHMENT0,ae,we);else xe(V.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,ae,0);m(E)&&p(ae),t.unbindTexture()}D.depthBuffer&&Ne(D)}function Mt(D){const E=D.textures;for(let V=0,j=E.length;V<j;V++){const Z=E[V];if(m(Z)){const Y=x(D),Ae=n.get(Z).__webglTexture;t.bindTexture(Y,Ae),p(Y),t.unbindTexture()}}}const He=[],Fe=[];function be(D){if(D.samples>0){if(Se(D)===!1){const E=D.textures,V=D.width,j=D.height;let Z=i.COLOR_BUFFER_BIT;const Y=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(D),ae=E.length>1;if(ae)for(let Ee=0;Ee<E.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const we=D.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const se=n.get(E[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,V,j,0,0,V,j,Z,i.NEAREST),l===!0&&(He.length=0,Fe.length=0,He.push(i.COLOR_ATTACHMENT0+Ee),D.depthBuffer&&D.resolveDepthBuffer===!1&&(He.push(Y),Fe.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Ee=0;Ee<E.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const se=n.get(E[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const E=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function bt(D){return Math.min(s.maxSamples,D.samples)}function Se(D){const E=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function We(D){const E=o.render.frame;u.get(D)!==E&&(u.set(D,E),D.update())}function zt(D,E){const V=D.colorSpace,j=D.format,Z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==tn&&V!==ri&&(et.getTransfer(V)===ct?(j!==Mn||Z!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Lt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=Vt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Se}function Sv(i,e){function t(n,s=ri){let r;const o=et.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===Yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$h)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yh)return i.BYTE;if(n===jh)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===ql)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===As)return i.HALF_FLOAT;if(n===Jh)return i.ALPHA;if(n===Zh)return i.RGB;if(n===Mn)return i.RGBA;if(n===dr)return i.DEPTH_COMPONENT;if(n===fr)return i.DEPTH_STENCIL;if(n===Kl)return i.RED;if(n===$l)return i.RED_INTEGER;if(n===Qh)return i.RG;if(n===Jl)return i.RG_INTEGER;if(n===Zl)return i.RGBA_INTEGER;if(n===ro||n===oo||n===ao||n===lo)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===Qa||n===el||n===tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nl||n===il)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ll)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ml)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vl||n===yl||n===Ml)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vl)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bl||n===Sl||n===wl||n===El)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ev=`
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

}`;class Tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new fd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qn({vertexShader:wv,fragmentShader:Ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ce(new pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Av extends Rs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Tv,p={},x=t.getContextAttributes();let b=null,v=null;const w=[],S=[],R=new pe;let I=null;const T=new Yt;T.viewport=new Ze;const M=new Yt;M.viewport=new Ze;const y=[T,M],L=new km;let N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=w[q];return J===void 0&&(J=new aa,w[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=w[q];return J===void 0&&(J=new aa,w[q]=J),J.getGripSpace()},this.getHand=function(q){let J=w[q];return J===void 0&&(J=new aa,w[q]=J),J.getHandSpace()};function k(q){const J=S.indexOf(q.inputSource);if(J===-1)return;const xe=w[J];xe!==void 0&&(xe.update(q.inputSource,q.frame,c||o),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",K);for(let q=0;q<w.length;q++){const J=S[q];J!==null&&(S[q]=null,w[q].disconnect(J))}N=null,F=null,m.reset();for(const q in p)delete p[q];e.setRenderTarget(b),f=null,d=null,h=null,s=null,v=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",K),x.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ue=null,ce=null;x.depth&&(ce=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=x.stencil?fr:dr,Ue=x.stencil?hr:Ti);const Ne={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ai(d.textureWidth,d.textureHeight,{format:Mn,type:On,depthTexture:new uc(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ai(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(q){for(let J=0;J<q.removed.length;J++){const xe=q.removed[J],Ue=S.indexOf(xe);Ue>=0&&(S[Ue]=null,w[Ue].disconnect(xe))}for(let J=0;J<q.added.length;J++){const xe=q.added[J];let Ue=S.indexOf(xe);if(Ue===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=S.length){S.push(xe),Ue=Ne;break}else if(S[Ne]===null){S[Ne]=xe,Ue=Ne;break}if(Ue===-1)break}const ce=w[Ue];ce&&ce.connect(xe)}}const G=new A,ee=new A;function oe(q,J,xe){G.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);const Ue=G.distanceTo(ee),ce=J.projectionMatrix.elements,Ne=xe.projectionMatrix.elements,Vt=ce[14]/(ce[10]-1),U=ce[14]/(ce[10]+1),Mt=(ce[9]+1)/ce[5],He=(ce[9]-1)/ce[5],Fe=(ce[8]-1)/ce[0],be=(Ne[8]+1)/Ne[0],bt=Vt*Fe,Se=Vt*be,We=Ue/(-Fe+be),zt=We*-Fe;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(zt),q.translateZ(We),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ce[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Lt=Vt+We,D=U+We,E=bt-zt,V=Se+(Ue-zt),j=Mt*U/D*Lt,Z=He*U/D*Lt;q.projectionMatrix.makePerspective(E,V,j,Z,Lt,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function me(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let J=q.near,xe=q.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),L.near=M.near=T.near=J,L.far=M.far=T.far=xe,(N!==L.near||F!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,F=L.far),L.layers.mask=q.layers.mask|6,T.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;const Ue=q.parent,ce=L.cameras;me(L,Ue);for(let Ne=0;Ne<ce.length;Ne++)me(ce[Ne],Ue);ce.length===2?oe(L,T,M):L.projectionMatrix.copy(T.projectionMatrix),ge(q,L,Ue)};function ge(q,J,xe){xe===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=bs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(q){return p[q]};let $e=null;function Ye(q,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ue=!1;xe.length!==L.cameras.length&&(L.cameras.length=0,Ue=!0);for(let U=0;U<xe.length;U++){const Mt=xe[U];let He=null;if(f!==null)He=f.getViewport(Mt);else{const be=h.getViewSubImage(d,Mt);He=be.viewport,U===0&&(e.setRenderTargetTextures(v,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(v))}let Fe=y[U];Fe===void 0&&(Fe=new Yt,Fe.layers.enable(U),Fe.viewport=new Ze,y[U]=Fe),Fe.matrix.fromArray(Mt.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Mt.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(He.x,He.y,He.width,He.height),U===0&&(L.matrix.copy(Fe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ue===!0&&L.cameras.push(Fe)}const ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const U=h.getDepthInformation(xe[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(ce&&ce.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let U=0;U<xe.length;U++){const Mt=xe[U].camera;if(Mt){let He=p[Mt];He||(He=new fd,p[Mt]=He);const Fe=h.getCameraImage(Mt);He.sourceTexture=Fe}}}}for(let xe=0;xe<w.length;xe++){const Ue=S[xe],ce=w[xe];Ue!==null&&ce!==void 0&&ce.update(Ue,J,c||o)}$e&&$e(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Qe=new Md;Qe.setAnimationLoop(Ye),this.setAnimationLoop=function(q){$e=q},this.dispose=function(){}}}const Fi=new nn,Rv=new ne;function Cv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ld(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),b=x.envMap,v=x.envMapRotation;b&&(m.envMap.value=b,Fi.copy(v),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(Fi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const v=b.program;n.uniformBlockBinding(x,v)}function c(x,b){let v=s[x.id];v===void 0&&(g(x),v=u(x),s[x.id]=v,x.addEventListener("dispose",m));const w=b.program;n.updateUBOMapping(x,w);const S=e.render.frame;r[x.id]!==S&&(d(x),r[x.id]=S)}function u(x){const b=h();x.__bindingPointIndex=b;const v=i.createBuffer(),w=x.__size,S=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const b=s[x.id],v=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,R=v.length;S<R;S++){const I=Array.isArray(v[S])?v[S]:[v[S]];for(let T=0,M=I.length;T<M;T++){const y=I[T];if(f(y,S,T,w)===!0){const L=y.__offset,N=Array.isArray(y.value)?y.value:[y.value];let F=0;for(let k=0;k<N.length;k++){const H=N[k],K=_(H);typeof H=="number"||typeof H=="boolean"?(y.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,L+F,y.__data)):H.isMatrix3?(y.__data[0]=H.elements[0],y.__data[1]=H.elements[1],y.__data[2]=H.elements[2],y.__data[3]=0,y.__data[4]=H.elements[3],y.__data[5]=H.elements[4],y.__data[6]=H.elements[5],y.__data[7]=0,y.__data[8]=H.elements[6],y.__data[9]=H.elements[7],y.__data[10]=H.elements[8],y.__data[11]=0):(H.toArray(y.__data,F),F+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,b,v,w){const S=x.value,R=b+"_"+v;if(w[R]===void 0)return typeof S=="number"||typeof S=="boolean"?w[R]=S:w[R]=S.clone(),!0;{const I=w[R];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return w[R]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function g(x){const b=x.uniforms;let v=0;const w=16;for(let R=0,I=b.length;R<I;R++){const T=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,y=T.length;M<y;M++){const L=T[M],N=Array.isArray(L.value)?L.value:[L.value];for(let F=0,k=N.length;F<k;F++){const H=N[F],K=_(H),G=v%w,ee=G%K.boundary,oe=G+ee;v+=ee,oe!==0&&w-oe<K.storage&&(v+=w-oe),L.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=K.storage}}}const S=v%w;return S>0&&(v+=w-S),x.__size=v,x.__cache={},this}function _(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){const b=x.target;b.removeEventListener("dispose",m);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Iv{constructor(e={}){const{canvas:t=vp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=st;let S=0,R=0,I=null,T=-1,M=null;const y=new Ze,L=new Ze;let N=null;const F=new Ie(0);let k=0,H=t.width,K=t.height,G=1,ee=null,oe=null;const me=new Ze(0,0,H,K),ge=new Ze(0,0,H,K);let $e=!1;const Ye=new ac;let Qe=!1,q=!1;const J=new ne,xe=new A,Ue=new Ze,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function Vt(){return I===null?G:1}let U=n;function Mt(P,B){return t.getContext(P,B)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wl}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",te,!1),U===null){const B="webgl2";if(U=Mt(B,P),U===null)throw Mt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let He,Fe,be,bt,Se,We,zt,Lt,D,E,V,j,Z,Y,Ae,ae,we,Ee,se,fe,De,Te,he,Ge;function O(){He=new H_(U),He.init(),Te=new Sv(U,He),Fe=new U_(U,He,e,Te),be=new Mv(U,He),Fe.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),bt=new W_(U),Se=new lv,We=new bv(U,He,be,Se,Fe,Te,bt),zt=new F_(v),Lt=new z_(v),D=new $m(U),he=new L_(U,D),E=new V_(U,D,bt,he),V=new q_(U,E,D,bt),se=new X_(U,Fe,We),ae=new N_(Se),j=new av(v,zt,Lt,He,Fe,he,ae),Z=new Cv(v,Se),Y=new uv,Ae=new gv(He),Ee=new I_(v,zt,Lt,be,V,f,l),we=new vv(v,V,Fe),Ge=new Pv(U,bt,Fe,be),fe=new D_(U,He,bt),De=new G_(U,He,bt),bt.programs=j.programs,v.capabilities=Fe,v.extensions=He,v.properties=Se,v.renderLists=Y,v.shadowMap=we,v.state=be,v.info=bt}O();const re=new Av(v,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const P=He.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=He.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(P){P!==void 0&&(G=P,this.setSize(H,K,!1))},this.getSize=function(P){return P.set(H,K)},this.setSize=function(P,B,W=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=P,K=B,t.width=Math.floor(P*G),t.height=Math.floor(B*G),W===!0&&(t.style.width=P+"px",t.style.height=B+"px"),this.setViewport(0,0,P,B)},this.getDrawingBufferSize=function(P){return P.set(H*G,K*G).floor()},this.setDrawingBufferSize=function(P,B,W){H=P,K=B,G=W,t.width=Math.floor(P*W),t.height=Math.floor(B*W),this.setViewport(0,0,P,B)},this.getCurrentViewport=function(P){return P.copy(y)},this.getViewport=function(P){return P.copy(me)},this.setViewport=function(P,B,W,X){P.isVector4?me.set(P.x,P.y,P.z,P.w):me.set(P,B,W,X),be.viewport(y.copy(me).multiplyScalar(G).round())},this.getScissor=function(P){return P.copy(ge)},this.setScissor=function(P,B,W,X){P.isVector4?ge.set(P.x,P.y,P.z,P.w):ge.set(P,B,W,X),be.scissor(L.copy(ge).multiplyScalar(G).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(P){be.setScissorTest($e=P)},this.setOpaqueSort=function(P){ee=P},this.setTransparentSort=function(P){oe=P},this.getClearColor=function(P){return P.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(P=!0,B=!0,W=!0){let X=0;if(P){let z=!1;if(I!==null){const ie=I.texture.format;z=ie===Zl||ie===Jl||ie===$l}if(z){const ie=I.texture.type,de=ie===On||ie===Ti||ie===ur||ie===hr||ie===Yl||ie===jl,ye=Ee.getClearColor(),_e=Ee.getClearAlpha(),Le=ye.r,Oe=ye.g,Re=ye.b;de?(g[0]=Le,g[1]=Oe,g[2]=Re,g[3]=_e,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Le,_[1]=Oe,_[2]=Re,_[3]=_e,U.clearBufferiv(U.COLOR,0,_))}else X|=U.COLOR_BUFFER_BIT}B&&(X|=U.DEPTH_BUFFER_BIT),W&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Ee.dispose(),Y.dispose(),Ae.dispose(),Se.dispose(),zt.dispose(),Lt.dispose(),V.dispose(),he.dispose(),Ge.dispose(),j.dispose(),re.dispose(),re.removeEventListener("sessionstart",Bn),re.removeEventListener("sessionend",Fc),Ci.stop()};function le(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const P=bt.autoReset,B=we.enabled,W=we.autoUpdate,X=we.needsUpdate,z=we.type;O(),bt.autoReset=P,we.enabled=B,we.autoUpdate=W,we.needsUpdate=X,we.type=z}function te(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function $(P){const B=P.target;B.removeEventListener("dispose",$),Me(B)}function Me(P){Be(P),Se.remove(P)}function Be(P){const B=Se.get(P).programs;B!==void 0&&(B.forEach(function(W){j.releaseProgram(W)}),P.isShaderMaterial&&j.releaseShaderCache(P))}this.renderBufferDirect=function(P,B,W,X,z,ie){B===null&&(B=ce);const de=z.isMesh&&z.matrixWorld.determinant()<0,ye=uf(P,B,W,X,z);be.setMaterial(X,de);let _e=W.index,Le=1;if(X.wireframe===!0){if(_e=E.getWireframeAttribute(W),_e===void 0)return;Le=2}const Oe=W.drawRange,Re=W.attributes.position;let Je=Oe.start*Le,at=(Oe.start+Oe.count)*Le;ie!==null&&(Je=Math.max(Je,ie.start*Le),at=Math.min(at,(ie.start+ie.count)*Le)),_e!==null?(Je=Math.max(Je,0),at=Math.min(at,_e.count)):Re!=null&&(Je=Math.max(Je,0),at=Math.min(at,Re.count));const Rt=at-Je;if(Rt<0||Rt===1/0)return;he.setup(z,X,ye,W,_e);let pt,ht=fe;if(_e!==null&&(pt=D.get(_e),ht=De,ht.setIndex(pt)),z.isMesh)X.wireframe===!0?(be.setLineWidth(X.wireframeLinewidth*Vt()),ht.setMode(U.LINES)):ht.setMode(U.TRIANGLES);else if(z.isLine){let Pe=X.linewidth;Pe===void 0&&(Pe=1),be.setLineWidth(Pe*Vt()),z.isLineSegments?ht.setMode(U.LINES):z.isLineLoop?ht.setMode(U.LINE_LOOP):ht.setMode(U.LINE_STRIP)}else z.isPoints?ht.setMode(U.POINTS):z.isSprite&&ht.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)_r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))ht.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Pe=z._multiDrawStarts,Et=z._multiDrawCounts,tt=z._multiDrawCount,cn=_e?D.get(_e).bytesPerElement:1,Wi=Se.get(X).currentProgram.getUniforms();for(let un=0;un<tt;un++)Wi.setValue(U,"_gl_DrawID",un),ht.render(Pe[un]/cn,Et[un])}else if(z.isInstancedMesh)ht.renderInstances(Je,Rt,z.count);else if(W.isInstancedBufferGeometry){const Pe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Et=Math.min(W.instanceCount,Pe);ht.renderInstances(Je,Rt,Et)}else ht.render(Je,Rt)};function ft(P,B,W){P.transparent===!0&&P.side===Pt&&P.forceSinglePass===!1?(P.side=Qt,P.needsUpdate=!0,Ar(P,B,W),P.side=ci,P.needsUpdate=!0,Ar(P,B,W),P.side=Pt):Ar(P,B,W)}this.compile=function(P,B,W=null){W===null&&(W=P),p=Ae.get(W),p.init(B),b.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),P!==W&&P.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return P.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ie=z.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const ye=ie[de];ft(ye,W,z),X.add(ye)}else ft(ie,W,z),X.add(ie)}),p=b.pop(),X},this.compileAsync=function(P,B,W=null){const X=this.compile(P,B,W);return new Promise(z=>{function ie(){if(X.forEach(function(de){Se.get(de).currentProgram.isReady()&&X.delete(de)}),X.size===0){z(P);return}setTimeout(ie,10)}He.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let it=null;function Kn(P){it&&it(P)}function Bn(){Ci.stop()}function Fc(){Ci.start()}const Ci=new Md;Ci.setAnimationLoop(Kn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(P){it=P,re.setAnimationLoop(P),P===null?Ci.stop():Ci.start()},re.addEventListener("sessionstart",Bn),re.addEventListener("sessionend",Fc),this.render=function(P,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(B),B=re.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,B,I),p=Ae.get(P,b.length),p.init(B),b.push(p),J.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ye.setFromProjectionMatrix(J,Gn,B.reversedDepth),q=this.localClippingEnabled,Qe=ae.init(this.clippingPlanes,q),m=Y.get(P,x.length),m.init(),x.push(m),re.enabled===!0&&re.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&ko(ie,B,-1/0,v.sortObjects)}ko(P,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ee,oe),Ne=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ne&&Ee.addToRenderList(m,P),this.info.render.frame++,Qe===!0&&ae.beginShadows();const W=p.state.shadowsArray;we.render(W,P,B),Qe===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const ie=B.cameras;if(z.length>0)for(let de=0,ye=ie.length;de<ye;de++){const _e=ie[de];kc(X,z,P,_e)}Ne&&Ee.render(P);for(let de=0,ye=ie.length;de<ye;de++){const _e=ie[de];Oc(m,P,_e,_e.viewport)}}else z.length>0&&kc(X,z,P,B),Ne&&Ee.render(P),Oc(m,P,B);I!==null&&R===0&&(We.updateMultisampleRenderTarget(I),We.updateRenderTargetMipmap(I)),P.isScene===!0&&P.onAfterRender(v,P,B),he.resetDefaultState(),T=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],Qe===!0&&ae.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ko(P,B,W,X){if(P.visible===!1)return;if(P.layers.test(B.layers)){if(P.isGroup)W=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(B);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ye.intersectsSprite(P)){X&&Ue.setFromMatrixPosition(P.matrixWorld).applyMatrix4(J);const de=V.update(P),ye=P.material;ye.visible&&m.push(P,de,ye,W,Ue.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ye.intersectsObject(P))){const de=V.update(P),ye=P.material;if(X&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ue.copy(P.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ue.copy(de.boundingSphere.center)),Ue.applyMatrix4(P.matrixWorld).applyMatrix4(J)),Array.isArray(ye)){const _e=de.groups;for(let Le=0,Oe=_e.length;Le<Oe;Le++){const Re=_e[Le],Je=ye[Re.materialIndex];Je&&Je.visible&&m.push(P,de,Je,W,Ue.z,Re)}}else ye.visible&&m.push(P,de,ye,W,Ue.z,null)}}const ie=P.children;for(let de=0,ye=ie.length;de<ye;de++)ko(ie[de],B,W,X)}function Oc(P,B,W,X){const z=P.opaque,ie=P.transmissive,de=P.transparent;p.setupLightsView(W),Qe===!0&&ae.setGlobalState(v.clippingPlanes,W),X&&be.viewport(y.copy(X)),z.length>0&&Tr(z,B,W),ie.length>0&&Tr(ie,B,W),de.length>0&&Tr(de,B,W),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function kc(P,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Ai(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?As:On,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ie=p.state.transmissionRenderTarget[X.id],de=X.viewport||y;ie.setSize(de.z*v.transmissionResolutionScale,de.w*v.transmissionResolutionScale);const ye=v.getRenderTarget(),_e=v.getActiveCubeFace(),Le=v.getActiveMipmapLevel();v.setRenderTarget(ie),v.getClearColor(F),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),Ne&&Ee.render(W);const Oe=v.toneMapping;v.toneMapping=Ei;const Re=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Qe===!0&&ae.setGlobalState(v.clippingPlanes,X),Tr(P,W,X),We.updateMultisampleRenderTarget(ie),We.updateRenderTargetMipmap(ie),He.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let at=0,Rt=B.length;at<Rt;at++){const pt=B[at],ht=pt.object,Pe=pt.geometry,Et=pt.material,tt=pt.group;if(Et.side===Pt&&ht.layers.test(X.layers)){const cn=Et.side;Et.side=Qt,Et.needsUpdate=!0,Bc(ht,W,X,Pe,Et,tt),Et.side=cn,Et.needsUpdate=!0,Je=!0}}Je===!0&&(We.updateMultisampleRenderTarget(ie),We.updateRenderTargetMipmap(ie))}v.setRenderTarget(ye,_e,Le),v.setClearColor(F,k),Re!==void 0&&(X.viewport=Re),v.toneMapping=Oe}function Tr(P,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ie=P.length;z<ie;z++){const de=P[z],ye=de.object,_e=de.geometry,Le=de.group;let Oe=de.material;Oe.allowOverride===!0&&X!==null&&(Oe=X),ye.layers.test(W.layers)&&Bc(ye,B,W,_e,Oe,Le)}}function Bc(P,B,W,X,z,ie){P.onBeforeRender(v,B,W,X,z,ie),P.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),z.onBeforeRender(v,B,W,X,P,ie),z.transparent===!0&&z.side===Pt&&z.forceSinglePass===!1?(z.side=Qt,z.needsUpdate=!0,v.renderBufferDirect(W,B,X,z,P,ie),z.side=ci,z.needsUpdate=!0,v.renderBufferDirect(W,B,X,z,P,ie),z.side=Pt):v.renderBufferDirect(W,B,X,z,P,ie),P.onAfterRender(v,B,W,X,z,ie)}function Ar(P,B,W){B.isScene!==!0&&(B=ce);const X=Se.get(P),z=p.state.lights,ie=p.state.shadowsArray,de=z.state.version,ye=j.getParameters(P,z.state,ie,B,W),_e=j.getProgramCacheKey(ye);let Le=X.programs;X.environment=P.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(P.isMeshStandardMaterial?Lt:zt).get(P.envMap||X.environment),X.envMapRotation=X.environment!==null&&P.envMap===null?B.environmentRotation:P.envMapRotation,Le===void 0&&(P.addEventListener("dispose",$),Le=new Map,X.programs=Le);let Oe=Le.get(_e);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===de)return Hc(P,ye),Oe}else ye.uniforms=j.getUniforms(P),P.onBeforeCompile(ye,v),Oe=j.acquireProgram(ye,_e),Le.set(_e,Oe),X.uniforms=ye.uniforms;const Re=X.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Re.clippingPlanes=ae.uniform),Hc(P,ye),X.needsLights=df(P),X.lightsStateVersion=de,X.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMap.value=z.state.directionalShadowMap,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotShadowMap.value=z.state.spotShadowMap,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMap.value=z.state.pointShadowMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function zc(P){if(P.uniformsList===null){const B=P.currentProgram.getUniforms();P.uniformsList=co.seqWithValue(B.seq,P.uniforms)}return P.uniformsList}function Hc(P,B){const W=Se.get(P);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function uf(P,B,W,X,z){B.isScene!==!0&&(B=ce),We.resetTextureUnits();const ie=B.fog,de=X.isMeshStandardMaterial?B.environment:null,ye=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:tn,_e=(X.isMeshStandardMaterial?Lt:zt).get(X.envMap||de),Le=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Re=!!W.morphAttributes.position,Je=!!W.morphAttributes.normal,at=!!W.morphAttributes.color;let Rt=Ei;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Rt=v.toneMapping);const pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ht=pt!==void 0?pt.length:0,Pe=Se.get(X),Et=p.state.lights;if(Qe===!0&&(q===!0||P!==M)){const Kt=P===M&&X.id===T;ae.setState(X,P,Kt)}let tt=!1;X.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Et.state.version||Pe.outputColorSpace!==ye||z.isBatchedMesh&&Pe.batching===!1||!z.isBatchedMesh&&Pe.batching===!0||z.isBatchedMesh&&Pe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Pe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Pe.instancing===!1||!z.isInstancedMesh&&Pe.instancing===!0||z.isSkinnedMesh&&Pe.skinning===!1||!z.isSkinnedMesh&&Pe.skinning===!0||z.isInstancedMesh&&Pe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pe.instancingMorph===!1&&z.morphTexture!==null||Pe.envMap!==_e||X.fog===!0&&Pe.fog!==ie||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ae.numPlanes||Pe.numIntersection!==ae.numIntersection)||Pe.vertexAlphas!==Le||Pe.vertexTangents!==Oe||Pe.morphTargets!==Re||Pe.morphNormals!==Je||Pe.morphColors!==at||Pe.toneMapping!==Rt||Pe.morphTargetsCount!==ht)&&(tt=!0):(tt=!0,Pe.__version=X.version);let cn=Pe.currentProgram;tt===!0&&(cn=Ar(X,B,z));let Wi=!1,un=!1,Us=!1;const Tt=cn.getUniforms(),gn=Pe.uniforms;if(be.useProgram(cn.program)&&(Wi=!0,un=!0,Us=!0),X.id!==T&&(T=X.id,un=!0),Wi||M!==P){be.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Tt.setValue(U,"projectionMatrix",P.projectionMatrix),Tt.setValue(U,"viewMatrix",P.matrixWorldInverse);const rn=Tt.map.cameraPosition;rn!==void 0&&rn.setValue(U,xe.setFromMatrixPosition(P.matrixWorld)),Fe.logarithmicDepthBuffer&&Tt.setValue(U,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Tt.setValue(U,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,un=!0,Us=!0)}if(z.isSkinnedMesh){Tt.setOptional(U,z,"bindMatrix"),Tt.setOptional(U,z,"bindMatrixInverse");const Kt=z.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Tt.setValue(U,"boneTexture",Kt.boneTexture,We))}z.isBatchedMesh&&(Tt.setOptional(U,z,"batchingTexture"),Tt.setValue(U,"batchingTexture",z._matricesTexture,We),Tt.setOptional(U,z,"batchingIdTexture"),Tt.setValue(U,"batchingIdTexture",z._indirectTexture,We),Tt.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&Tt.setValue(U,"batchingColorTexture",z._colorsTexture,We));const _n=W.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&se.update(z,W,cn),(un||Pe.receiveShadow!==z.receiveShadow)&&(Pe.receiveShadow=z.receiveShadow,Tt.setValue(U,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(gn.envMap.value=_e,gn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(gn.envMapIntensity.value=B.environmentIntensity),un&&(Tt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&hf(gn,Us),ie&&X.fog===!0&&Z.refreshFogUniforms(gn,ie),Z.refreshMaterialUniforms(gn,X,G,K,p.state.transmissionRenderTarget[P.id]),co.upload(U,zc(Pe),gn,We)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(co.upload(U,zc(Pe),gn,We),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Tt.setValue(U,"center",z.center),Tt.setValue(U,"modelViewMatrix",z.modelViewMatrix),Tt.setValue(U,"normalMatrix",z.normalMatrix),Tt.setValue(U,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Kt=X.uniformsGroups;for(let rn=0,Bo=Kt.length;rn<Bo;rn++){const Pi=Kt[rn];Ge.update(Pi,cn),Ge.bind(Pi,cn)}}return cn}function hf(P,B){P.ambientLightColor.needsUpdate=B,P.lightProbe.needsUpdate=B,P.directionalLights.needsUpdate=B,P.directionalLightShadows.needsUpdate=B,P.pointLights.needsUpdate=B,P.pointLightShadows.needsUpdate=B,P.spotLights.needsUpdate=B,P.spotLightShadows.needsUpdate=B,P.rectAreaLights.needsUpdate=B,P.hemisphereLights.needsUpdate=B}function df(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(P,B,W){const X=Se.get(P);X.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Se.get(P.texture).__webglTexture=B,Se.get(P.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,B){const W=Se.get(P);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const ff=U.createFramebuffer();this.setRenderTarget=function(P,B=0,W=0){I=P,S=B,R=W;let X=!0,z=null,ie=!1,de=!1;if(P){const _e=Se.get(P);if(_e.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(_e.__webglFramebuffer===void 0)We.setupRenderTarget(P);else if(_e.__hasExternalTextures)We.rebindTextures(P,Se.get(P.texture).__webglTexture,Se.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Re=P.depthTexture;if(_e.__boundDepthTexture!==Re){if(Re!==null&&Se.has(Re)&&(P.width!==Re.image.width||P.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(P)}}const Le=P.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(de=!0);const Oe=Se.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?z=Oe[B][W]:z=Oe[B],ie=!0):P.samples>0&&We.useMultisampledRTT(P)===!1?z=Se.get(P).__webglMultisampledFramebuffer:Array.isArray(Oe)?z=Oe[W]:z=Oe,y.copy(P.viewport),L.copy(P.scissor),N=P.scissorTest}else y.copy(me).multiplyScalar(G).floor(),L.copy(ge).multiplyScalar(G).floor(),N=$e;if(W!==0&&(z=ff),be.bindFramebuffer(U.FRAMEBUFFER,z)&&X&&be.drawBuffers(P,z),be.viewport(y),be.scissor(L),be.setScissorTest(N),ie){const _e=Se.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,_e.__webglTexture,W)}else if(de){const _e=B;for(let Le=0;Le<P.textures.length;Le++){const Oe=Se.get(P.textures[Le]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Le,Oe.__webglTexture,W,_e)}}else if(P!==null&&W!==0){const _e=Se.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,W)}T=-1},this.readRenderTargetPixels=function(P,B,W,X,z,ie,de,ye=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Se.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){be.bindFramebuffer(U.FRAMEBUFFER,_e);try{const Le=P.textures[ye],Oe=Le.format,Re=Le.type;if(!Fe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=P.width-X&&W>=0&&W<=P.height-z&&(P.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ye),U.readPixels(B,W,X,z,Te.convert(Oe),Te.convert(Re),ie))}finally{const Le=I!==null?Se.get(I).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(P,B,W,X,z,ie,de,ye=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Se.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e)if(B>=0&&B<=P.width-X&&W>=0&&W<=P.height-z){be.bindFramebuffer(U.FRAMEBUFFER,_e);const Le=P.textures[ye],Oe=Le.format,Re=Le.type;if(!Fe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.bufferData(U.PIXEL_PACK_BUFFER,ie.byteLength,U.STREAM_READ),P.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ye),U.readPixels(B,W,X,z,Te.convert(Oe),Te.convert(Re),0);const at=I!==null?Se.get(I).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,at);const Rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await yp(U,Rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ie),U.deleteBuffer(Je),U.deleteSync(Rt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,B=null,W=0){const X=Math.pow(2,-W),z=Math.floor(P.image.width*X),ie=Math.floor(P.image.height*X),de=B!==null?B.x:0,ye=B!==null?B.y:0;We.setTexture2D(P,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,de,ye,z,ie),be.unbindTexture()};const pf=U.createFramebuffer(),mf=U.createFramebuffer();this.copyTextureToTexture=function(P,B,W=null,X=null,z=0,ie=null){ie===null&&(z!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=z,z=0):ie=0);let de,ye,_e,Le,Oe,Re,Je,at,Rt;const pt=P.isCompressedTexture?P.mipmaps[ie]:P.image;if(W!==null)de=W.max.x-W.min.x,ye=W.max.y-W.min.y,_e=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,Oe=W.min.y,Re=W.isBox3?W.min.z:0;else{const _n=Math.pow(2,-z);de=Math.floor(pt.width*_n),ye=Math.floor(pt.height*_n),P.isDataArrayTexture?_e=pt.depth:P.isData3DTexture?_e=Math.floor(pt.depth*_n):_e=1,Le=0,Oe=0,Re=0}X!==null?(Je=X.x,at=X.y,Rt=X.z):(Je=0,at=0,Rt=0);const ht=Te.convert(B.format),Pe=Te.convert(B.type);let Et;B.isData3DTexture?(We.setTexture3D(B,0),Et=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(We.setTexture2DArray(B,0),Et=U.TEXTURE_2D_ARRAY):(We.setTexture2D(B,0),Et=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const tt=U.getParameter(U.UNPACK_ROW_LENGTH),cn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Wi=U.getParameter(U.UNPACK_SKIP_PIXELS),un=U.getParameter(U.UNPACK_SKIP_ROWS),Us=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,pt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Le),U.pixelStorei(U.UNPACK_SKIP_ROWS,Oe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Re);const Tt=P.isDataArrayTexture||P.isData3DTexture,gn=B.isDataArrayTexture||B.isData3DTexture;if(P.isDepthTexture){const _n=Se.get(P),Kt=Se.get(B),rn=Se.get(_n.__renderTarget),Bo=Se.get(Kt.__renderTarget);be.bindFramebuffer(U.READ_FRAMEBUFFER,rn.__webglFramebuffer),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,Bo.__webglFramebuffer);for(let Pi=0;Pi<_e;Pi++)Tt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.get(P).__webglTexture,z,Re+Pi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.get(B).__webglTexture,ie,Rt+Pi)),U.blitFramebuffer(Le,Oe,de,ye,Je,at,de,ye,U.DEPTH_BUFFER_BIT,U.NEAREST);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||P.isRenderTargetTexture||Se.has(P)){const _n=Se.get(P),Kt=Se.get(B);be.bindFramebuffer(U.READ_FRAMEBUFFER,pf),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,mf);for(let rn=0;rn<_e;rn++)Tt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_n.__webglTexture,z,Re+rn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_n.__webglTexture,z),gn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Kt.__webglTexture,ie,Rt+rn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Kt.__webglTexture,ie),z!==0?U.blitFramebuffer(Le,Oe,de,ye,Je,at,de,ye,U.COLOR_BUFFER_BIT,U.NEAREST):gn?U.copyTexSubImage3D(Et,ie,Je,at,Rt+rn,Le,Oe,de,ye):U.copyTexSubImage2D(Et,ie,Je,at,Le,Oe,de,ye);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else gn?P.isDataTexture||P.isData3DTexture?U.texSubImage3D(Et,ie,Je,at,Rt,de,ye,_e,ht,Pe,pt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,ie,Je,at,Rt,de,ye,_e,ht,pt.data):U.texSubImage3D(Et,ie,Je,at,Rt,de,ye,_e,ht,Pe,pt):P.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ie,Je,at,de,ye,ht,Pe,pt.data):P.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ie,Je,at,pt.width,pt.height,ht,pt.data):U.texSubImage2D(U.TEXTURE_2D,ie,Je,at,de,ye,ht,Pe,pt);U.pixelStorei(U.UNPACK_ROW_LENGTH,tt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,cn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Wi),U.pixelStorei(U.UNPACK_SKIP_ROWS,un),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Us),ie===0&&B.generateMipmaps&&U.generateMipmap(Et),be.unbindTexture()},this.initRenderTarget=function(P){Se.get(P).__webglFramebuffer===void 0&&We.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?We.setTextureCube(P,0):P.isData3DTexture?We.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?We.setTexture2DArray(P,0):We.setTexture2D(P,0),be.unbindTexture()},this.resetState=function(){S=0,R=0,I=null,be.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function Lv(){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=768,i.height=384;const e=i.getContext("2d");for(let n=0;n<3;n++){if(e.save(),e.translate(n*256,0),e.fillStyle=["#d0c4a6","#b8ad91","#ddd2b5"][n],e.fillRect(0,0,256,384),e.strokeStyle="#80765b",e.lineWidth=1,e.strokeRect(9,9,238,366),e.fillStyle="#4e4c3f",e.textAlign="center",e.font="bold 24px serif",e.fillText(["РАЙОН","ОБЪЯВЛЕНИЯ","ВЕСТИ ДВОРА"][n],128,40,232),e.font="12px serif",e.fillText("ГОРОДСКАЯ ГАЗЕТА",128,58),e.fillRect(14,66,228,3),n===1){e.font="bold 30px sans-serif",e.fillText("КУПЛЮ",128,118),e.fillText("МЕТАЛЛ",128,153);for(let s=0;s<8;s++)e.fillRect(20+s*29,300,1,70),e.fillRect(24+s*29,315,18,3)}else e.fillStyle="#75745f",e.fillRect(15,80,105,78),e.fillStyle="#a39b81",e.beginPath(),e.moveTo(20,145),e.lineTo(54,98),e.lineTo(81,131),e.lineTo(112,105),e.lineTo(112,150),e.fill();e.fillStyle="#68634f";for(let s=0;s<3;s++)for(let r=0;r<24;r++){const o=n===1?175+r*5:178+r*7;if(o>288&&n===1)break;e.fillRect(15+s*78,o,47+(r*17+s*13)%23,1.5)}e.strokeStyle="#f1e5c380",e.lineWidth=2,e.beginPath(),e.moveTo(125,0),e.lineTo(130,384),e.stroke(),e.restore()}const t=new ln(i);return t.colorSpace=st,t}class Dv{constructor(e,{lowQuality:t=!1}={}){const n=t?4:6,s=new pn(1,1.4,3,5),r=new Float32Array(n);for(let a=0;a<n;a++)r[a]=a%3;s.setAttribute("paperStyle",new So(r,1)),this.clock={value:0};const o=new At({name:"Windblown newspapers",map:Lv(),roughness:1,side:Pt});o.onBeforeCompile=a=>{a.uniforms.paperTime=this.clock,a.vertexShader=`uniform float paperTime; attribute float paperStyle;
`+a.vertexShader,a.vertexShader=a.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv.x=(vMapUv.x+paperStyle)/3.0;
#endif`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.z += sin(position.y*5.0 + paperTime*5.0 + paperStyle*2.0)*0.085 + abs(position.x)*0.12;`)},this.mesh=new Lo(s,o,n),this.mesh.name="Windblown leaflets and newspapers",this.mesh.instanceMatrix.setUsage(Mo),this.mesh.frustumCulled=!1,this.mesh.userData.noShadow=!0,this.mesh.visible=!1,e.add(this.mesh),this.items=Array.from({length:n},(a,l)=>({x:(l/n-.5)*48,speed:1.2+l*7%11/10,z:3.5+l%3*.22,phase:l*2.399,size:.14+l*3%5*.015})),this.dummy=new vt,this.center=null}update(e,t,n=!0){if(!n){this.mesh.visible=!1,this.center=null;return}if(this.center===null)for(let o=0;o<this.items.length;o++)this.items[o].x=e+(o/this.items.length-.5)*48;this.center=e,this.mesh.visible=!0,this.clock.value+=Math.max(0,Math.min(t,.05));const r=this.clock.value;for(let o=0;o<this.items.length;o++){const a=this.items[o];a.x+=Math.max(0,Math.min(t,.05))*a.speed*(1+.35*Math.sin(r*.8));let l=a.x-e;(l>24||l<-24)&&(l=((l+24)%48+48)%48-24,a.x=e+l);const c=a.phase,u=nt.smoothstep(24-Math.abs(l),0,5),h=.5+o%4*.29;this.dummy.position.set(a.x,h+.16*Math.sin(r*1.7+c)+Math.max(0,Math.sin(r*.65+c))*.65,a.z+Math.sin(r*.7+c)*.12),this.dummy.rotation.set(-.7+Math.sin(r*1.8+c)*.8,r*.8+c,Math.sin(r*1.2+c)*.65),this.dummy.scale.setScalar(a.size*u),this.dummy.updateMatrix(),this.mesh.setMatrixAt(o,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}}const oh="bomzh:compositing:v1",bi={enabled:!0,brightness:0,contrast:1,saturation:1,gamma:1,temperature:0,tint:0,shadows:0,highlights:0,vignette:0,splitStrength:0,shadowColor:"#53677f",highlightColor:"#d9b87a"},bc={brightness:[-.5,.5,.01],contrast:[.5,1.8,.01],saturation:[0,2,.01],gamma:[.5,1.5,.01],temperature:[-1,1,.01],tint:[-1,1,.01],shadows:[-.4,.4,.01],highlights:[-.4,.4,.01],vignette:[0,.6,.01],splitStrength:[0,.5,.01]},Uv={neutral:{...bi},warm:{...bi,contrast:1.08,saturation:.88,temperature:.18,shadows:.04,splitStrength:.09,vignette:.12},cold:{...bi,contrast:1.12,saturation:.75,temperature:-.2,tint:.025,vignette:.13},faded:{...bi,contrast:.88,saturation:.8,shadows:.07,temperature:.06}};function wa(i){const e={...bi};for(const[t,[n,s]]of Object.entries(bc))Number.isFinite(i?.[t])&&(e[t]=nt.clamp(i[t],n,s));for(const t of["shadowColor","highlightColor"])/^#[0-9a-f]{6}$/i.test(i?.[t]??"")&&(e[t]=i[t]);return typeof i?.enabled=="boolean"&&(e.enabled=i.enabled),e}class Nv{constructor(e){this.value={...bi};try{this.storage=e??globalThis.localStorage;const t=JSON.parse(this.storage.getItem(oh));t?.version===1&&(this.value=wa(t.settings))}catch{}this.uniforms={gradeOn:{value:0},gradeA:{value:new Ze},gradeB:{value:new Ze},gradeC:{value:new A},gradeShadow:{value:new A},gradeHighlight:{value:new A}},this.apply()}get active(){const e=this.value;return e.enabled&&Object.keys(bc).some(t=>Math.abs(e[t]-bi[t])>1e-6)}apply(){const e=this.value,t=this.uniforms;t.gradeOn.value=this.active?1:0,t.gradeA.value.set(e.brightness,e.contrast,e.saturation,e.gamma),t.gradeB.value.set(e.temperature,e.tint,e.shadows,e.highlights),t.gradeC.value.set(e.vignette,e.splitStrength,0);for(const[n,s]of[["shadowColor","gradeShadow"],["highlightColor","gradeHighlight"]]){const r=new Ie(e[n]);r.convertLinearToSRGB(),t[s].value.set(r.r,r.g,r.b)}this.onChange?.()}set(e){this.value=wa({...this.value,...e}),this.apply()}reset(){this.value={...bi},this.apply()}save(){try{return this.storage.setItem(oh,JSON.stringify(this.export())),!0}catch{return!1}}export(){return{version:1,settings:{...this.value}}}import(e){if(e?.version!==1||!e.settings||typeof e.settings!="object"||Array.isArray(e.settings))throw Error("Нужен файл настроек композитинга.");this.value=wa(e.settings),this.apply()}}const Fv=`
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
`;function Sc(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new yt;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=ah(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const g=ah(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function ah(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Ot(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function lh(i,e){if(e===qf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Tl||e===ed){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Tl)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}let no;function Ov(){if(no)return no;let i=null,e=null,t=null;if(typeof document<"u"){let n=4189;const s=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296),r=document.createElement("canvas");r.width=256,r.height=512;const o=r.getContext("2d");o.fillStyle="#b0ae96",o.fillRect(0,0,256,512);for(let f=0;f<1700;f++){const g=s()*256,_=s()*512;o.fillStyle=f%3?"#6a645341":"#e4ddbf52",o.fillRect(g,_,.5+s()*3,2+s()*22)}for(let f=0;f<220;f++){const g=s()*256,_=s()*512;o.fillStyle="#565243",o.beginPath(),o.moveTo(g,_),o.lineTo(g+s()*12,_+s()*4),o.lineTo(g+s()*7,_+3+s()*18),o.lineTo(g-3,_+s()*12),o.fill(),o.strokeStyle="#d9d2b0",o.lineWidth=.7,o.stroke()}i=new ln(r),i.colorSpace=st;const a=document.createElement("canvas"),l=typeof location<"u"&&new URLSearchParams(location.search).get("quality")==="high",c=l?2:1;a.width=1024*c,a.height=512*c;const u=a.getContext("2d");u.scale(c,c);for(let f=0;f<8;f++){u.save(),u.translate(f%4*256,Math.floor(f/4)*256),u.beginPath(),u.rect(0,0,256,256),u.clip();const g=u.createLinearGradient(0,0,0,256);if(g.addColorStop(0,"#161e1e"),g.addColorStop(.65,["#30382e","#393a30","#303d3d","#3a3530"][f%4]),g.addColorStop(1,"#192420"),u.fillStyle=g,u.fillRect(0,0,256,256),f%4===2){for(let p=30;p<190;p+=12)u.fillStyle=p%24?"#7d8170":"#a4a28a",u.fillRect(4,p,248,7);u.strokeStyle="#4a534a",u.lineWidth=2,u.beginPath(),u.moveTo(54,15),u.lineTo(54,205),u.moveTo(205,15),u.lineTo(205,205),u.stroke()}else for(const p of[0,1]){const x=f%3===0?82:45+f*3;u.save(),p&&(u.translate(256,0),u.scale(-1,1)),u.fillStyle=["#9b9c86","#a4987c","#898f83"][f%3],u.beginPath(),u.moveTo(0,0),u.lineTo(x,0),u.bezierCurveTo(x-8,80,x-25,150,x+5,246),u.lineTo(0,256),u.closePath(),u.fill();for(let b=6;b<x-5;b+=9){const v=u.createLinearGradient(b,0,b+8,0);v.addColorStop(0,"#18211d7a"),v.addColorStop(.6,"#dfdac23b"),v.addColorStop(1,"#4850442b"),u.fillStyle=v,u.fillRect(b,0,7,256)}u.restore()}const _=u.createLinearGradient(0,0,180,256);_.addColorStop(0,"#9caeb64a"),_.addColorStop(.5,"#8daba916"),_.addColorStop(1,"#111b211b"),u.fillStyle=_,u.fillRect(0,0,256,256),u.fillStyle="#a7b5ab12",u.beginPath(),u.moveTo(5,12),u.lineTo(230,12),u.lineTo(145,100),u.lineTo(5,152),u.fill();for(let p=0;p<80;p++){const x=s()*256,b=s()*140,v=20+s()*120,w=u.createLinearGradient(0,b,0,b+v);w.addColorStop(0,"#5f614c65"),w.addColorStop(1,"#666d5500"),u.fillStyle=w,u.fillRect(x,b,.5+s()*2,v)}for(let p=0;p<1500;p++)u.fillStyle=p%3?"#c0b8951f":"#1a242025",u.fillRect(s()*256,s()*256,.5+s()*1.5,.5+s()*2);const m=u.createRadialGradient(128,118,55,128,128,180);if(m.addColorStop(0,"#17201b00"),m.addColorStop(.65,"#20281f2b"),m.addColorStop(1,"#111a16d9"),u.fillStyle=m,u.fillRect(0,0,256,256),u.strokeStyle="#333d2a",u.lineWidth=9,u.strokeRect(4,4,248,248),f===3||f===7){u.strokeStyle="#bbc4b37a",u.lineWidth=.9;const p=f===3?175:65,x=f===3?83:170;for(const[b,v]of[[-45,-80],[75,-35],[-90,55],[25,90]])u.beginPath(),u.moveTo(p,x),u.lineTo(p+b*.35+8,x+v*.4),u.lineTo(p+b,Math.max(0,Math.min(256,x+v))),u.stroke()}u.restore()}e=new ln(a),e.colorSpace=st;const h=document.createElement("canvas");h.width=h.height=256;const d=h.getContext("2d");for(let f=0;f<70;f++){const g=10+s()*236,_=5+s()*25,m=45+s()*200,p=d.createLinearGradient(0,_,0,_+m);p.addColorStop(0,"#3e41298c"),p.addColorStop(.4,"#43432d48"),p.addColorStop(1,"#39442f00"),d.fillStyle=p,d.fillRect(g,_,1+s()*5,m)}t=new ln(h),t.colorSpace=st}return no={paint:new At({name:"Aged window chipped wood",color:"#c8c6ac",map:i,roughness:.94}),pane:new At({name:"Aged window dusty glass and curtains",color:e?"#ffffff":"#485448",map:e,roughness:.76,metalness:.04}),recess:new At({name:"Aged window recess and fittings",color:"#353b32",roughness:.9}),drips:new At({name:"Aged window sill runoff",map:t,transparent:!0,opacity:.8,depthWrite:!1,roughness:1,alphaTest:.015,polygonOffset:!0,polygonOffsetFactor:-3})},no}function wc(){const i=Ov(),e=new Map,t=new Map,n={count:0,parts:0,styles:new Set},s=(r,o,a)=>{e.has(o)||e.set(o,[]),e.get(o).push(r.clone().applyMatrix4(a)),n.parts++};return{stats:n,add(r,o,a,l=1.3,c=1.5,u=0,h=0){h=(h%8+8)%8,n.count++,n.styles.add(h);const d=new ne().compose(new A(r,o,a),new Ke().setFromAxisAngle(new A(0,1,0),u),new A(1,1,1)),f=(b,v,w,S,R,I,T)=>{const M=[b,v,w].join(":");t.has(M)||t.set(M,new sn(b,v,w)),s(t.get(M),S,d.clone().multiply(new ne().makeTranslation(R,I,T)))},g=l-.19,_=c-.2;f(l-.04,c-.04,.025,i.recess,0,0,.01);const m=new pn(g,_),p=m.attributes.uv;for(let b=0;b<p.count;b++)p.setXY(b,(h%4+(.025+p.getX(b)*.95))/4,(1-Math.floor(h/4)+(.025+p.getY(b)*.95))/2);s(m,i.pane,d.clone().multiply(new ne().makeTranslation(0,0,.031))),m.dispose();for(const b of[-l/2+.045,l/2-.045])f(.09,c,.14,i.paint,b,0,.085);for(const b of[-c/2+.045,c/2-.045])f(l-.1,.09,.14,i.paint,0,b,.085);for(const b of[-g/2+.025,g/2-.025])f(.04,_,.085,i.paint,b,0,.085);for(const b of[-_/2+.025,_/2-.025])f(g,.04,.085,i.paint,0,b,.085);const x=h%3===1?.18*c:.1*c;f(g,.055,.12,i.paint,0,x,.11),f(.047,_,.12,i.paint,h%3===0?-.07:0,0,.11),f(.03,.105,.035,i.recess,(h%3===0?-.07:0)+.012,-.17*c,.18);for(const b of[-.28*c,.3*c])f(.033,.075,.045,i.recess,-l/2+.12,b,.17);if(f(l+.2,.1,.38,i.paint,0,-c/2-.04,.12),f(l+.1,.035,.28,i.recess,0,-c/2-.105,.095),i.drips.map){const b=new pn(l+.12,.55);s(b,i.drips,d.clone().multiply(new ne().makeTranslation(0,-c/2-.34,.004))),b.dispose()}},finish(){const r=new It;r.name="Detailed_aged_windows";for(const[o,a]of e){const l=Sc(a);for(const u of a)u.dispose();const c=new Ce(l,o);c.name=o.name,c.castShadow=o!==i.drips,c.receiveShadow=!0,o===i.drips&&(c.userData.noShadow=!0),r.add(c)}for(const o of t.values())o.dispose();return r.userData.windowCount=n.count,r.userData.windowStyles=n.styles.size,r}}}function kv(i){const e=i.getObjectByName("Detailed_aged_windows");if(e)return e;i.updateMatrixWorld(!0);const t=wc(),n=new Set,s=[];if(i.traverse(o=>{if(!o.isMesh||Array.isArray(o.material))return;const a=o.material.name;if(/COURT_Curtains/i.test(a)){s.push(o);return}if(!/COURT_SmokyGlass/i.test(a))return;const l=o.geometry,c=l.attributes.position,u=l.index;for(let h=0;h<(u?.count??c.count);h+=3){const d=[0,1,2].map(x=>new A().fromBufferAttribute(c,u?u.getX(h+x):h+x).applyMatrix4(o.matrixWorld)),f=d[1].clone().sub(d[0]).cross(d[2].clone().sub(d[0])).normalize();if(Math.abs(f.z)<.98)continue;const g=new mn().setFromPoints(d),_=g.getSize(new A),m=g.getCenter(new A);if(_.x<.3||_.x>1.5||_.y<.5||_.y>2||_.z>.03)continue;const p=[m.x,m.y,m.z,_.x,_.y].map(x=>x.toFixed(2)).join(":");n.has(p)||(n.add(p),t.add(m.x,m.y,m.z+.02,_.x+.16,_.y+.16,0,n.size%8))}s.push(o)}),!t.stats.count)return null;for(const o of s)o.visible=!1;const r=t.finish();return r.applyMatrix4(i.matrixWorld.clone().invert()),i.add(r),r}const Ks=5,Td=3,fs=["laundry","basketball","service","garages","market","garden","workshop","sport"],Ad=["Двор с бельём","Баскетбольная площадка","Хозяйственный двор","Гаражный двор","Старый рынок","Зелёный двор","Ремонтный двор","Спортивный двор"],io=Ks+Td;function Ll(i,e="street"){const t=i+(e==="entrance"?Ks:0),n=(t%io+io)%io,s=n<Ks?"street":"entrance",r=s==="street"?n:n-Ks,o=Math.max(0,[1,3,4].indexOf(r)),a=Math.floor(t/io)*3+o,l=(a*5%fs.length+fs.length)%fs.length;return{location:s,section:r,courtyard:s==="street"&&[1,3,4].includes(r),variant:l,last:r===(s==="street"?Ks:Td)-1}}function Bv(i,e="street"){const t=Ll(i,e),n=Ll(i+1,e);return t.location!==n.location?{to:n.location,x:i*26+(t.location==="street"?23.2:15.15),z:-1.45,doorZ:-3.18}:null}let Gs;function Rd(){if(Gs)return Gs;let i=93051;const e=()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296;function t(n,s,r,o=0){let a=null,l=null,c=null;if(typeof document<"u"){const u=document.createElement("canvas");u.width=u.height=512;const h=u.getContext("2d");if(h.fillStyle=r,h.fillRect(0,0,512,512),n==="wood"){for(let _=0;_<1500;_++){const m=e()*512;h.strokeStyle=_%4?"#30291c30":"#d5c29345",h.lineWidth=.4+e()*2,h.beginPath(),h.moveTo(0,m),h.bezierCurveTo(150,m-8+e()*16,330,m-12+e()*24,512,m),h.stroke()}for(let _=0;_<22;_++){const m=e()*512,p=e()*512;h.strokeStyle="#201f19a0",h.lineWidth=.6,h.beginPath(),h.moveTo(m,p),h.lineTo(m+30,p+1),h.lineTo(m+60+e()*100,p-2),h.stroke()}for(let _=0;_<9;_++){const m=e()*512,p=e()*512;h.strokeStyle="#352f2360";for(let x=0;x<4;x++)h.beginPath(),h.ellipse(m,p,8+x*5,1+x*1.5,.05,0,Math.PI*2),h.stroke()}}if(n==="metal"){for(let _=0;_<180;_++){const m=e()*512,p=e()*512,x=1+e()*9;h.fillStyle=_%3?"#625940":"#7c6b4d",h.beginPath();for(let b=0;b<9;b++){const v=b*Math.PI*2/9,w=x*(.5+e()*.5),S=m+Math.cos(v)*w,R=p+Math.sin(v)*w;b?h.lineTo(S,R):h.moveTo(S,R)}h.closePath(),h.fill(),h.strokeStyle="#b4ae8240",h.lineWidth=1,h.stroke()}for(let _=0;_<95;_++){const m=e()*512,p=e()*512;h.strokeStyle="#b4b19d60",h.lineWidth=.5,h.beginPath(),h.moveTo(m,p),h.lineTo(m+e()*32,p+e()*4),h.stroke()}}if(n==="fabric"){for(let _=0;_<512;_+=4)h.fillStyle=_%8?"#d3c5a925":"#3a3f3630",h.fillRect(_,0,1,512),h.fillRect(0,_,512,1);for(let _=0;_<8;_++)h.fillStyle="#656b5b40",h.fillRect(_*64,0,12,512)}if(n==="soil")for(let _=0;_<1200;_++)h.fillStyle=["#2d2d21","#706b49","#4e4a32"][_%3],h.beginPath(),h.ellipse(e()*512,e()*512,1+e()*4,1+e()*3,e()*3,0,7),h.fill();if(n==="stone")for(let _=0;_<150;_++){const m=e()*512,p=e()*512;h.strokeStyle="#5b5c4740",h.lineWidth=.5,h.beginPath(),h.moveTo(m,p),h.lineTo(m+8,p+12),h.lineTo(m+3,p+27),h.stroke()}for(let _=0;_<12e3;_++)h.fillStyle=_%2?"#ede4bf10":"#1d241c18",h.fillRect(e()*512,e()*512,1+e()*2,1+e()*2);const d=h.createLinearGradient(0,280,0,512);d.addColorStop(0,"#272c2000"),d.addColorStop(1,"#252b2465"),h.fillStyle=d,h.fillRect(0,0,512,512),a=new ln(u),a.colorSpace=st,a.wrapS=a.wrapT=Fn;const f=document.createElement("canvas");f.width=f.height=256;const g=f.getContext("2d");g.fillStyle="#bdbdbd",g.fillRect(0,0,256,256);for(let _=0;_<2500;_++)g.fillStyle=_%2?"#b2b2b2":"#dedede",g.fillRect(e()*256,e()*256,n==="wood"?8+e()*25:1,n==="wood"?.5:1.5);l=new ln(f),l.wrapS=l.wrapT=Fn,c=l}return new At({name:s,color:a?"#ffffff":r,map:a,bumpMap:l,bumpScale:n==="wood"?.014:.007,roughnessMap:c,roughness:1,metalness:o})}return Gs={wood:t("wood","Courtyard old wood","#75664b"),metal:t("metal","Prop chipped painted metal","#4d5c4b",.2),trim:t("stone","Prop worn concrete and fittings","#a6a28a"),soil:t("soil","Prop soil and dirt","#4a4932"),fabric:t("fabric","Prop faded cloth","#9b9c85")},Gs.fabric.side=Pt,Gs}let Dl;function zv(){if(Dl)return;let i=null;if(typeof document<"u"){const e=document.createElement("canvas");e.width=128,e.height=256;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,"#93978b"),n.addColorStop(.48,"#ececdb"),n.addColorStop(.52,"#c8cbb9"),n.addColorStop(1,"#818a77"),t.fillStyle=n,t.fillRect(0,0,128,256),t.strokeStyle="#e0e2c28c",t.lineWidth=1.5;for(let s=25;s<256;s+=27)for(const r of[-1,1])t.beginPath(),t.moveTo(64,s),t.quadraticCurveTo(64+r*20,s-15,64+r*60,s-37),t.stroke();t.strokeStyle="#e9e5bb",t.lineWidth=2,t.beginPath(),t.moveTo(64,256),t.lineTo(64,0),t.stroke(),i=new ln(e),i.colorSpace=st}Dl=new At({name:"Vegetation leaves",map:i,vertexColors:!0,side:Pt,roughness:.94})}function Hv(i=1){zv();const e=new It;e.name="Detailed_vegetation";const t=[],n=[],s=[],r=[];let o=0,a=(i+1)*73856093;const l=()=>(a=Math.imul(a,1664525)+1013904223>>>0)/4294967296;function c(h,d,f){for(let g=0;g<15;g++){const _=l()*Math.PI*2,m=.12+l()*.22,p=.005+l()*.006,x=.025+l()*.09,b=h+(l()-.5)*.2,v=f+(l()-.5)*.2,w=t.length/3,S=new Ie().setHSL(l()<.2?.12:.23+l()*.035,.25+l()*.18,.14+l()*.12);for(let R=0;R<3;R++){const I=R/2,T=p*(1-I);for(const M of[-1,1]){t.push(b+Math.cos(_)*x*I*I+Math.cos(_+Math.PI/2)*T*M,d+m*I,v+Math.sin(_)*x*I*I+Math.sin(_+Math.PI/2)*T*M);const y=S.clone().multiplyScalar(.65+I*.45);n.push(y.r,y.g,y.b),s.push(M<0?0:1,I)}}r.push(w,w+2,w+1,w+1,w+2,w+3,w+2,w+4,w+3),o++}}function u(){const h=new yt;h.setAttribute("position",new ze(t,3)),h.setAttribute("color",new ze(n,3)),h.setAttribute("uv",new ze(s,2)),h.setIndex(r),h.computeVertexNormals();const d=new Ce(h,Dl);return d.name="Tapered grass blades",d.castShadow=d.receiveShadow=!0,e.add(d),e.userData.leafCount=o,e}return{grass:c,finish:u}}function Vv(i,e=0){const t=new It;t.name=`Courtyard_${e}`,t.userData.courtyard=!0,t.userData.locationName=Ad[e],t.userData.theme=fs[e];const n=new Map;i.traverse(M=>{if(M.isMesh)for(const y of Array.isArray(M.material)?M.material:[M.material])n.set(y.name,y)});const s=(M,y,L)=>{const N=[...n.values()].find(k=>M.test(k.name)),F=N?N.clone():new At({color:L,roughness:.95});F.name=y;for(const k of["map","normalMap","roughnessMap","metalnessMap"])F[k]&&(F[k]=F[k].clone(),F[k].wrapS=F[k].wrapT=Fn,F[k].needsUpdate=!0);return F},r=s(/brick/,"Courtyard brick","#896e55"),o=s(/Limestone/,"Courtyard limestone","#a49d84"),a=s(/Asphalt/,"Courtyard asphalt","#64675c"),l=s(/DampFoundation/,"Courtyard damp foundation","#555e4b"),{wood:c,metal:u,trim:h,soil:d,fabric:f}=Rd(),g=Hv(e),_=wc(),m=new Map,p=new Map;function x(M,y,L,N,F,k,H,K,G=0){const ee=[c,u,h,d,f].includes(F),oe=/Clothes line posts|Exercise|Rear downpipe|Bench fasteners/.test(M),me=M==="Hanging laundry",ge=[y,L,N,ee,oe,me].join(":");if(!p.has(ge)){let q;if(me){q=new pn(y,L,4,5);const ce=q.attributes.position;for(let Ne=0;Ne<ce.count;Ne++)ce.setZ(Ne,Math.sin(ce.getX(Ne)*25)*.025+Math.pow((L/2-ce.getY(Ne))/L,2)*.055),ce.getY(Ne)<-L*.4&&ce.setY(Ne,ce.getY(Ne)+Math.sin(ce.getX(Ne)*14)*.025);q.computeVertexNormals()}else if(oe){const ce=Math.max(y,L,N),Ne=Math.min(y,L,N)/2;q=new ui(Ne,Ne,ce,8),y===ce?q.rotateZ(Math.PI/2):N===ce&&q.rotateX(Math.PI/2)}else q=new sn(y,L,N);const J=q.attributes.position,xe=q.attributes.normal,Ue=q.attributes.uv;if(!ee)for(let ce=0;ce<J.count;ce++)Ue.setXY(ce,(Math.abs(xe.getX(ce))>.5?J.getZ(ce):J.getX(ce))/2,(Math.abs(xe.getY(ce))>.5?J.getZ(ce):J.getY(ce))/2);p.set(ge,q)}const $e=p.get(ge),Ye=new Ce($e,F);Ye.name=M,Ye.position.set(k,H,K),Ye.rotation.y=G,Ye.updateMatrix();const Qe=ge+F.uuid;return m.has(Qe)||m.set(Qe,{geometry:$e,material:F,items:[]}),m.get(Qe).items.push(Ye),Ye}x("Yard level ground",26,.16,25,a,13,-.08,1.5),x("Rear apartment building",17,7.2,.7,[1,4,5,7].includes(e)?o:r,13,3.6,-9.5),x("Rear foundation",17,.55,.78,l,13,.275,-9.43);for(const M of[2.25,23.75])x("Street-facing wing",4.5,7.8,6.1,[2,3,6].includes(e)?o:r,M,3.9,-6.5),x("Wing foundation",4.55,.55,6.15,l,M,.275,-6.48);for(let M=0;M<3;M++)for(const[y,L]of[6.4,9.7,12.8,16.2,19.5].entries())_.add(y===3?17:L,1.65+M*1.9,-9.145,1.3,1.5,0,M*5+y+e*3);for(const M of[0,1])for(let y=0;y<3;y++)for(const[L,N]of[1.25,3.25].entries())M===1&&y===0&&N===3.25||_.add(M?26-N:N,1.6+y*2,-3.445,1.2,1.4,0,M*5+y*2+L+e);x("Wing entrance door",1.42,2.4,.16,u,23.2,1.2,-3.28),x("Wing entrance canopy",1.9,.1,.8,u,23.2,2.65,-2.95);for(const M of[-1,1])for(let y=0;y<3;y++)for(const[L,N]of[-5.2,-7.6].entries())_.add(M<0?4.505:21.495,1.6+y*1.9,N,1.2,1.4,M<0?Math.PI/2:-Math.PI/2,y*3+L+e+(M>0?4:0));x("Low rear path",17,.06,e===1?.55:1.3,o,13,.02,e===1?-8.7:-7.5),x("Rear porch door",1.3,2.35,.18,u,15.15,1.175,-8.94),x("Porch canopy",2.1,.12,1.1,u,15.15,2.65,-8.5);function b(M,y,L=1.3,N=2.35){for(const F of[-L/2-.055,L/2+.055])x("Door casing",.1,N+.12,.18,h,M+F,N/2,y+.06);x("Door lintel",L+.22,.1,.2,h,M,N+.06,y+.06),x("Door threshold",L+.25,.08,.35,o,M,.04,y+.12);for(const F of[.55,1.65]){x("Recessed door panel",L-.2,.78,.025,u,M,F,y+.105);for(const k of[-L/2+.09,L/2-.09])x("Door raised edging",.025,.8,.035,h,M+k,F,y+.125)}x("Door lock plate",.11,.28,.04,h,M+L*.3,1.05,y+.14),x("Door handle",.15,.035,.09,u,M+L*.27,1.1,y+.2);for(const F of[.35,1.95])x("Door hinge",.055,.16,.08,u,M-L/2+.04,F,y+.16)}b(15.15,-8.94),b(23.2,-3.28,1.42,2.4);const v=(M,y)=>{for(let L=0;L<4;L++)x("Separate bench seat plank",2,.075,.115,c,M,.48+(L===2?.006:0),y-.2+L*.135);for(let L=0;L<3;L++)x("Separate bench back plank",2,.105,.07,c,M,.68+L*.14,y-.28);for(const L of[-.72,.72]){x("Bench legs",.075,.48,.075,u,M+L,.24,y-.18),x("Bench front legs",.075,.48,.075,u,M+L,.24,y+.18),x("Bench foot",.18,.06,.55,u,M+L,.04,y),x("Seat mounting rail",.09,.08,.55,u,M+L,.4,y),x("Back mounting rail",.07,.65,.06,u,M+L,.67,y-.32);for(const N of[.68,.82,.96])x("Bench fasteners",.035,.035,.025,h,M+L,N,y-.235)}};e!==1&&v(7.6,-5.2),e===0&&v(18.1,-6.3);function w(M,y,L,N,F){for(let k=0;k<Math.ceil(N/.22);k++)for(let H=0;H<Math.ceil(L/.22);H++)g.grass(M-L/2+.1+H*.22,F,y-N/2+.1+k*.22)}for(const M of[5.6,20.4]){for(const y of[-.65,.65])x("Planter long kerb",1.6,.28,.1,o,M,.14,-5.9+y);for(const y of[-.75,.75])x("Planter end kerb",.1,.28,1.2,o,M+y,.14,-5.9);x("Planter soil",1.4,.07,1.2,d,M,.24,-5.9),w(M,-5.9,1.3,1.1,.28)}function S(M,y,L,N=.7,F=.4,k=.65){for(const H of[-k/2,k/2])for(let K=0;K<3;K++)x("Crate side slat",N,F/3-.02,.045,c,M,y+K*F/3+F/6,L+H);for(const H of[-N/2,N/2])for(let K=0;K<3;K++)x("Crate end slat",.045,F/3-.02,k,c,M+H,y+K*F/3+F/6,L);for(const H of[-N/2+.04,N/2-.04])for(const K of[-k/2+.04,k/2-.04])x("Crate corner support",.06,F,.06,c,M+H,y+F/2,L+K);for(let H=0;H<4;H++)x("Crate floor plank",N/4-.015,.035,k,c,M-N/2+(H+.5)*N/4,y+.025,L)}if(e===0){for(const M of[10.8,13.1])x("Clothes line posts",.06,3,.06,u,M,1.5,-6.3);x("Clothes line",2.3,.022,.022,u,11.95,2.8,-6.3);for(let M=0;M<3;M++)x("Hanging laundry",.5,.75,.025,f,11.25+M*.65,2.4,-6.3)}if(e===1){let N=function(k,H,K,G,ee,oe,me){const ge=new Ce(H,K);ge.name=k,ge.position.set(G,ee,oe),me&&ge.rotation.set(...me),ge.updateMatrix(),m.set(k,{geometry:H,material:K,items:[ge]})},F=function(k,H,K,G,ee=u){const oe=new A(...H),me=new A(...K),ge=me.clone().sub(oe),$e=new ui(G,G,ge.length(),5);$e.applyQuaternion(new Ke().setFromUnitVectors(new A(0,1,0),ge.normalize()));const Ye=oe.add(me).multiplyScalar(.5);N(k,$e,ee,Ye.x,Ye.y,Ye.z)};t.userData.basketballCourt=!0;const M=h,y=d,L=c;x("Worn court surface",12.2,.018,4.9,y,13,.012,-5.95);for(const k of[-8.25,-3.65])x("Court sideline "+k,11.6,.006,.035,M,13,.025,k);for(const k of[7.2,18.8,13])x("Court line "+k,.035,.006,4.6,M,k,.025,-5.95);N("Centre circle",new hi(.74,.775,40),M,13,.029,-5.95,[-Math.PI/2,0,0]);for(const k of[-1,1]){const H=13+k*5.8,K=H-k*2.15;for(const ge of[-6.95,-4.95])x("Key edge "+k+ge,2.15,.006,.035,M,(H+K)/2,.027,ge);x("Free throw line "+k,.035,.006,2,M,K,.027,-5.95),N("Free throw arc "+k,new hi(.98,1.015,28,1,k<0?-Math.PI/2:Math.PI/2,Math.PI),M,K,.03,-5.95,[-Math.PI/2,0,0]);const G=H+k*.22,ee=H-k*.18,oe=H-k*.6;F("Basket post "+k,[G,0,-5.95],[G,3.65,-5.95],.065),F("Basket support "+k,[G,3.45,-5.95],[ee,3.45,-5.95],.045),x("Aged backboard "+k,.085,1.05,1.6,h,ee,3.22,-5.95);const me=ee-k*.05;for(const ge of[-6.26,-5.64])x("Target vertical "+k+ge,.016,.42,.025,u,me,3.1,ge);for(const ge of[2.9,3.3])x("Target horizontal "+k+ge,.016,.025,.64,u,me,ge,-5.95);N("Basket rim "+k,new Vi(.24,.018,5,24),L,oe,2.89,-5.95,[Math.PI/2,0,0]);for(let ge=0;ge<10;ge++){const $e=ge*Math.PI/5,Ye=$e+Math.PI/5;F("Net "+k+":"+ge,[oe+Math.cos($e)*.23,2.88,-5.95+Math.sin($e)*.23],[oe+Math.cos(Ye)*.13,2.52,-5.95+Math.sin(Ye)*.13],.007,M)}}for(let k=0;k<=6;k++){const H=6.7+k*2.1;F("Fence post "+k,[H,0,-8.65],[H,2.25,-8.65],.026)}for(const k of[.2,1.1,2.15])F("Fence rail "+k,[6.7,k,-8.65],[19.3,k,-8.65],.014);for(let k=0;k<63;k++){const H=6.7+k*.2;F("Fence wire "+k,[H,.2,-8.65],[H,2.15,-8.65],.004)}v(19.4,-7.5)}if(e===2){x("Service dumpster",1.6,.95,1.1,u,11.6,.65,-5.8);for(const M of[-.83,.83])x("Dumpster rim",.06,.1,1.16,u,11.6+M,1.16,-5.8);for(const M of[-.58,.58])x("Dumpster rim",1.7,.1,.06,u,11.6,1.16,-5.8+M);for(const M of[-.4,0,.4])x("Dumpster reinforcement ribs",.045,.74,.04,u,11.6+M,.65,-5.23);for(const M of[-.65,.65])for(const y of[-.4,.4])x("Dumpster casters",.13,.2,.16,u,11.6+M,.1,-5.8+y);x("Dumpster lid",1.72,.07,1.22,u,11.6,1.27,-5.8),x("Dumpster handle",.35,.05,.1,h,11.6,1.28,-5.13);for(let M=0;M<4;M++){for(let y=0;y<5;y++)x("Pallet top boards",.22,.04,.9,c,17.5+y*.25,.16+M*.15,-5.4);for(const y of[-.33,0,.33])x("Pallet stringers",1.25,.09,.09,c,18,.1+M*.15,-5.4+y)}}if(e===3){for(let M=0;M<3;M++){const y=9+M*4;x("Garage block",3.7,2.7,2.4,M%2?r:o,y,1.35,-7.1),x("Garage roof",3.95,.16,2.65,u,y,2.78,-7.1),x("Rolling garage door",3.05,2.25,.08,u,y,1.15,-5.85);for(const L of[-1.62,1.62])x("Garage door jamb",.12,2.5,.14,h,y+L,1.25,-5.77);x("Garage door handle",.26,.04,.08,h,y,.95,-5.72);for(let L=0;L<12;L++)x("Garage shutter ribs",3.05,.022,.035,u,y,.15+L*.18,-5.79)}for(let M=0;M<3;M++)S(18.8,M*.4,-5.2,.6)}if(e===4)for(let M=0;M<3;M++){const y=9.3+M*3.7;for(const L of[-1.3,1.3])x("Market stall posts",.07,2.4,.07,u,y+L,1.2,-6.5);for(let L=0;L<5;L++)x("Market counter planks",2.85,.08,.205,c,y,.9,-6.65+L*.23);x("Market awning",3.1,.12,1.9,M%2?u:h,y,2.45,-6.4);for(let L=0;L<3;L++)S(y-.85+L*.85,.99,-6.2,.7,.3,.7)}if(e===5){for(const M of[9.7,16.8]){for(const y of[-.95,.95])for(let L=0;L<3;L++)x("Grass bed side boards",3,.09,.08,c,M,.06+L*.11,-6.4+y);for(const y of[-1.46,1.46])for(let L=0;L<3;L++)x("Grass bed end boards",.08,.09,1.8,c,M+y,.06+L*.11,-6.4);x("Grass bed soil",2.8,.08,1.8,d,M,.24,-6.4),w(M,-6.4,2.65,1.65,.29)}for(let M=0;M<7;M++)x("Garden stepping stones",.65,.04,.65,o,13,.02,-4.2-M*.55);v(13,-8.15)}if(e===6){x("Workshop shed",7,2.9,2.4,r,13,1.45,-7.45),x("Workshop roof",7.4,.18,2.8,u,13,2.98,-7.45),x("Workshop double doors",3.4,2.35,.1,c,13,1.175,-6.18);for(const M of[12.25,13.75])x("Workshop door handles",.06,.32,.06,u,M,1.1,-6.1);for(let M=0;M<4;M++)x("Workbench top planks",2.6,.09,.19,c,18,.95,-6+M*.21);for(const M of[17,19])x("Workbench legs",.09,.9,.65,u,M,.45,-5.7);for(let M=0;M<5;M++)x("Stored metal beams",2.7,.08,.1,u,8,.15+M*.13,-5.9+M*.12)}if(e===7){for(const M of[9.5,12.8,16.1]){for(const y of[-1.2,1.2])x("Exercise bar supports",.09,2.5,.09,u,M+y,1.25,-6.7);x("Exercise overhead bar",2.5,.08,.08,u,M,2.5,-6.7)}for(let M=0;M<8;M++)x("Wall ladder rungs",2.4,.045,.055,c,12.8,.3+M*.29,-6.7);for(const M of[10,16]){x("Training bench",1.8,.12,.55,c,M,.5,-4.8);for(const y of[-.65,.65])x("Training bench feet",.08,.5,.45,u,M+y,.25,-4.8)}}for(let M=0;M<3;M++)x("Rear downpipe",.09,6.8,.1,u,5.2+M*7.5,3.4,-9.06);const R=new Map;let I=0;for(const{geometry:M,material:y,items:L}of m.values()){R.has(y)||R.set(y,[]);for(const N of L)R.get(y).push(M.clone().applyMatrix4(N.matrix)),I++}for(const[M,y]of R){if(y.some(F=>!!F.index)!==y.every(F=>!!F.index)){for(let F=0;F<y.length;F++)if(y[F].index){const k=y[F];y[F]=k.toNonIndexed(),k.dispose()}}const L=Sc(y);for(const F of y)F.dispose();const N=new Ce(L,M);N.castShadow=!0,N.receiveShadow=!0,N.name=M.name,t.add(N)}const T=_.finish();return t.add(...T.children.slice()),t.userData.windowCount=_.stats.count,t.userData.windowStyles=_.stats.styles.size,t.userData.staticBoxes=I+_.stats.parts,t.add(g.finish()),t}class Gv{constructor(e){this.root=new It,this.root.visible=!1,e.add(this.root);const{metal:t,trim:n}=Rd(),s=(r,o,a,l,c,u,h)=>{const d=new Ce(new sn(r,o,a),l);d.position.set(c,u,h),d.castShadow=!0,this.root.add(d)};s(1.45,2.45,.2,t,0,1.225,-3.14);for(const r of[-.78,.78])s(.12,2.6,.27,n,r,1.3,-3.09);s(1.68,.12,.27,n,0,2.6,-3.09),s(.18,.04,.08,n,.43,1.05,-2.99);for(const r of[.55,1.7]){s(1.16,.75,.035,t,0,r,-3.015);for(const o of[-.6,.6])s(.025,.77,.04,n,o,r,-2.985)}s(.1,.24,.04,n,.45,1.05,-2.97);for(const r of[.35,2.1])s(.06,.15,.07,t,-.68,r,-2.98);this.sign=new Ce(new pn(1.65,.37),new Nt({color:"#d8dbb9"})),this.sign.position.set(0,2.92,-3),this.root.add(this.sign),this.maps={};for(const[r,o]of[["entrance","ПОДЪЕЗД"],["street","ВЫХОД ВО ДВОР"]])if(typeof document<"u"){const a=document.createElement("canvas");a.width=512,a.height=128;const l=a.getContext("2d");l.fillStyle=r==="street"?"#3c5b45":"#313e36",l.fillRect(0,0,512,128),l.strokeStyle="#d7ceb0",l.lineWidth=6,l.strokeRect(6,6,500,116),l.fillStyle="#e9e2c8",l.font="bold 46px Arial",l.textAlign="center",l.fillText(o,256,82,470),this.maps[r]=new ln(a),this.maps[r].colorSpace=st}this.marker=new Ce(new hi(.38,.44,32),new Nt({color:"#e2c36a",transparent:!0,opacity:.75,depthWrite:!1,side:Pt})),this.marker.rotation.x=-Math.PI/2,this.marker.position.set(0,.018,-1.45),this.root.add(this.marker)}set(e){this.exit=e,this.root.visible=!!e,e&&(this.root.position.x=e.x,this.sign.material.map=this.maps[e.to]??null,this.sign.material.needsUpdate=!0)}near(e){return!!this.exit&&Math.hypot(e.x-this.exit.x,e.z-this.exit.z)<1.4}update(e){this.marker.material.opacity=.55+Math.sin(e*3)*.18}}class Wv extends yt{constructor(e=new Ce,t=new A,n=new nn,s=new A(1,1,1)){super();const r=[],o=[],a=[],l=new A,c=new Ve().getNormalMatrix(e.matrixWorld),u=new ne;u.makeRotationFromEuler(n),u.setPosition(t);const h=new ne;h.copy(u).invert(),d(),this.setAttribute("position",new ze(r,3)),this.setAttribute("uv",new ze(a,2)),o.length>0&&this.setAttribute("normal",new ze(o,3));function d(){let m=[];const p=new A,x=new A,b=e.geometry,v=b.attributes.position,w=b.attributes.normal;if(b.index!==null){const S=b.index;for(let R=0;R<S.count;R++)p.fromBufferAttribute(v,S.getX(R)),w?(x.fromBufferAttribute(w,S.getX(R)),f(m,p,x)):f(m,p)}else{if(v===void 0)return;for(let S=0;S<v.count;S++)p.fromBufferAttribute(v,S),w?(x.fromBufferAttribute(w,S),f(m,p,x)):f(m,p)}m=g(m,l.set(1,0,0)),m=g(m,l.set(-1,0,0)),m=g(m,l.set(0,1,0)),m=g(m,l.set(0,-1,0)),m=g(m,l.set(0,0,1)),m=g(m,l.set(0,0,-1));for(let S=0;S<m.length;S++){const R=m[S];a.push(.5+R.position.x/s.x,.5+R.position.y/s.y),R.position.applyMatrix4(u),r.push(R.position.x,R.position.y,R.position.z),R.normal!==null&&o.push(R.normal.x,R.normal.y,R.normal.z)}}function f(m,p,x=null){p.applyMatrix4(e.matrixWorld),p.applyMatrix4(h),x?(x.applyNormalMatrix(c),m.push(new Ea(p.clone(),x.clone()))):m.push(new Ea(p.clone()))}function g(m,p){const x=[],b=.5*Math.abs(s.dot(p));for(let v=0;v<m.length;v+=3){let w=0,S,R,I,T;const M=m[v+0].position.dot(p)-b,y=m[v+1].position.dot(p)-b,L=m[v+2].position.dot(p)-b,N=M>0,F=y>0,k=L>0;switch(w=(N?1:0)+(F?1:0)+(k?1:0),w){case 0:{x.push(m[v]),x.push(m[v+1]),x.push(m[v+2]);break}case 1:{if(N&&(S=m[v+1],R=m[v+2],I=_(m[v],S,p,b),T=_(m[v],R,p,b)),F){S=m[v],R=m[v+2],I=_(m[v+1],S,p,b),T=_(m[v+1],R,p,b),x.push(I),x.push(R.clone()),x.push(S.clone()),x.push(R.clone()),x.push(I.clone()),x.push(T);break}k&&(S=m[v],R=m[v+1],I=_(m[v+2],S,p,b),T=_(m[v+2],R,p,b)),x.push(S.clone()),x.push(R.clone()),x.push(I),x.push(T),x.push(I.clone()),x.push(R.clone());break}case 2:{N||(S=m[v].clone(),R=_(S,m[v+1],p,b),I=_(S,m[v+2],p,b),x.push(S),x.push(R),x.push(I)),F||(S=m[v+1].clone(),R=_(S,m[v+2],p,b),I=_(S,m[v],p,b),x.push(S),x.push(R),x.push(I)),k||(S=m[v+2].clone(),R=_(S,m[v],p,b),I=_(S,m[v+1],p,b),x.push(S),x.push(R),x.push(I));break}}}return x}function _(m,p,x,b){const v=m.position.dot(x)-b,w=p.position.dot(x)-b,S=v/(v-w),R=new A(m.position.x+S*(p.position.x-m.position.x),m.position.y+S*(p.position.y-m.position.y),m.position.z+S*(p.position.z-m.position.z));let I=null;return m.normal!==null&&p.normal!==null&&(I=new A(m.normal.x+S*(p.normal.x-m.normal.x),m.normal.y+S*(p.normal.y-m.normal.y),m.normal.z+S*(p.normal.z-m.normal.z))),new Ea(R,I)}}}class Ea{constructor(e,t=null){this.position=e,this.normal=t}clone(){const e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}}let Ws;function Xv(){if(Ws)return Ws;if(typeof document>"u")return null;const i=document.createElement("canvas"),e=typeof location<"u"&&new URLSearchParams(location.search).get("quality")==="high"?2048:1024;i.width=e,i.height=e/2;const t=i.getContext("2d"),n=e/1024;t.scale(n,n);let s=7149;const r=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296);for(let a=0;a<8;a++){t.save(),t.translate(a%4*256,Math.floor(a/4)*256),t.beginPath(),t.rect(5,5,246,246),t.clip();const l=a>=4;for(let u=0;u<170;u++){const h=10+r()*236,d=15+r()*228,f=6+r()*(l?34:20),g=t.createRadialGradient(h,d,0,h,d,f);g.addColorStop(0,l?"#29322482":"#3c302578"),g.addColorStop(1,"#31352100"),t.fillStyle=g,t.fillRect(h-f,d-f,f*2,f*2)}if(l)for(let u=0;u<650;u++)t.fillStyle=u%3?"#4e5c3458":"#282e2558",t.beginPath(),t.ellipse(14+r()*228,14+r()*228,.5+r()*6,.5+r()*4,r()*3,0,Math.PI*2),t.fill();else for(let u=0;u<85;u++){const h=12+r()*232,d=18+r()*70,f=25+r()*180,g=t.createLinearGradient(0,d,0,d+f);g.addColorStop(0,"#4c3723ad"),g.addColorStop(.45,"#4d422c60"),g.addColorStop(1,"#41452900"),t.fillStyle=g,t.fillRect(h,d,.8+r()*4,f)}for(let u=0;u<1600;u++)t.fillStyle=u%4?"#2c302a38":"#99815a50",t.fillRect(8+r()*240,8+r()*240,.3+r()*1.3,.3+r()*1.8);for(let u=0;u<14;u++){const h=15+r()*220,d=20+r()*215;t.strokeStyle="#292b2560",t.lineWidth=.4+r()*.8,t.beginPath(),t.moveTo(h,d),t.lineTo(h+r()*8,d+10),t.lineTo(h-5,d+17),t.lineTo(h+4,d+26),t.stroke()}t.globalCompositeOperation="destination-out";for(let u=0;u<140;u++)t.fillStyle=`rgba(0,0,0,${.12+r()*.6})`,t.fillRect(8+r()*240,8+r()*240,1+r()*4,.5+r()*2);t.globalCompositeOperation="destination-in";const c=t.createRadialGradient(128,128,55,128,128,127);c.addColorStop(0,"#ffffffff"),c.addColorStop(1,"#ffffff00"),t.fillStyle=c,t.fillRect(0,0,256,256),t.restore()}const o=new ln(i);return o.colorSpace=st,o.anisotropy=4,o.name="Shared detailed grime atlas",Ws=new At({map:o,transparent:!0,alphaTest:.02,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Ws.name="Dirt damp and runoff",Ws}const qv=/brick|limestone|concrete wall|dampfoundation|entrance aged plaster|entrance chipped green|old wood|entrance doors|courtyard brick|courtyard limestone|courtyard damp foundation|courtyard old wood/i;function Ul(i,e,t=Xv()){if(!t||i.getObjectByName("Surface_wear"))return null;i.updateMatrixWorld(!0);const n=[],s=[];i.traverse(h=>{!h.isMesh||Array.isArray(h.material)||(qv.test(h.material.name)&&n.push(h),/asphalt|pavement tiles|entrance terrazzo/i.test(h.material.name)&&s.push(h))});const r=new yd,o=[];let a=0;const l=(h,d,f,g,_,m=0,p=!1)=>{r.set(p?new A(h,2,d):new A(h,d,3),p?new A(0,-1,0):new A(0,0,-1));const x=r.intersectObjects(p?s:n,!1).find(I=>{const T=I.face.normal.clone().transformDirection(I.object.matrixWorld);return p?T.y>.7:T.z>.7});if(!x)return;const b=x.object,v=new Ce(b.geometry,b.material);if(v.matrixWorld.copy(b.matrixWorld),b.isInstancedMesh){const I=new ne;b.getMatrixAt(x.instanceId,I),v.matrixWorld.multiply(I)}const w=new Wv(v,x.point,new nn(p?-Math.PI/2:0,0,m),new A(f,g,.045));if(!w.attributes.position.count){w.dispose();return}const S=w.attributes.uv,R=_-8;for(let I=0;I<S.count;I++)S.setXY(I,(R%4+(6+S.getX(I)*244)/256)/4,(1-Math.floor(R/4)+(6+S.getY(I)*244)/256)/2);o.push(w),a++};if(e==="entrance")for(const h of[0,13]){for(const d of[.9,3.65,5.6,7.05,12.35])l(h+d,.35,1.55,.7,14);for(const d of[2.15,5.1])l(h+d,2.45,1.8,1.25,8);l(h+.55,1.6,.8,2.6,11),l(h+3.25,.8,1.05,1.5,8),l(h+6.6,2.65,1.45,1,9),l(h+2.15,.45,.85,.8,10),l(h+12.1,1.7,.8,2.5,9)}else for(let h=0;h<14;h++)l(.7+h*1.85,.3,2,.65,12+h%4),l(1+h*1.85,1.6,.85,2.15,8+h%4),l(1.6+h*1.8,2.8,1.45,1.4,9);for(let h=0;h<18;h++)l(1+h*1.4,h%2?2.8:-2.55,1.2+h%3*.4,1.6+h%2*.6,8+h%4,h*.4,!0);if(!o.length)return null;const c=Sc(o);for(const h of o)h.dispose();c.applyMatrix4(i.matrixWorld.clone().invert());const u=new Ce(c,t);return u.name="Surface_wear",u.userData.noShadow=!0,u.userData.patches=a,u.receiveShadow=!0,u.castShadow=!1,i.add(u),u}const Cd={street:"Улица",entrance:"Подъезд"};function Yv(){if(typeof document>"u")return{};let i=93;const e=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),t=n=>{const s=document.createElement("canvas");s.width=s.height=512;const r=s.getContext("2d");r.fillStyle=n==="floor"?"#89857a":"#c1b9a2",r.fillRect(0,0,512,512);for(let a=0;a<3500;a++)r.fillStyle=e()>.5?"#292f2112":"#fff5d318",r.fillRect(e()*512,e()*512,e()*8+1,e()*9+1);if(n==="floor")for(let a=0;a<512;a+=64)for(let l=0;l<512;l+=64)r.fillStyle=(l+a)%128?"#383c3325":"#d4c7ac20",r.fillRect(l+1,a+1,62,62),r.strokeStyle="#33382e80",r.strokeRect(l,a,64,64);else{for(let a=0;a<90;a++){const l=e()*512,c=e()*512;r.fillStyle="#7c786734",r.beginPath(),r.ellipse(l,c,e()*20+2,e()*13+2,e()*3,0,Math.PI*2),r.fill()}r.strokeStyle="#4c52434a";for(let a=0;a<12;a++){let l=e()*512,c=e()*512;r.beginPath(),r.moveTo(l,c);for(let u=0;u<5;u++)l+=(e()-.5)*26,c+=e()*25,r.lineTo(l,c);r.stroke()}}const o=new ln(s);return o.wrapS=o.wrapT=Fn,o.colorSpace=st,o};return{wall:t("wall"),floor:t("floor")}}function jv(){const i=new It;i.name="Entrance_26m";const e=wc(),t=Yv(),n=new sn(1,1,1),s=new ui(.022,.022,1,6),r=new Map,o=(b,v,w=null,S={})=>{const R=new At({color:v,map:w,roughness:.94,...S});return R.name=b,R};t.floor&&t.floor.repeat.set(6.5,5.75),t.wall&&t.wall.repeat.set(3,1.5);const a=o("Entrance aged plaster","#d9cead",t.wall),l=o("Entrance chipped green paint","#748774",t.wall),c=o("Entrance terrazzo","#b3b0a0",t.floor),u=o("Entrance concrete stairs","#8e9182",t.wall),h=o("Entrance painted steel","#4b5c57",null,{metalness:.3}),d=o("Entrance recess","#282e29"),f=o("Entrance doors","#695c44",t.wall),g=o("Entrance paper","#e4d9ba");o("Entrance window glass","#455c66",null,{emissive:"#526f7c",emissiveIntensity:.45});const _=o("Entrance warm lamps","#e4cd8a",null,{emissive:"#ffbf60",emissiveIntensity:2});function m(b,v,w,S,R=null,I=!0){const T=new Ce(b,v);T.position.fromArray(w),T.scale.fromArray(S),R&&T.rotation.set(...R),T.updateMatrix();const M=b.uuid+v.uuid+I;return r.has(M)||r.set(M,{geometry:b,mat:v,shadow:I,meshes:[]}),r.get(M).meshes.push(T),T}const p=(b,v,w,S,R,I,T,M,y=null,L=!0)=>{const N=m(n,R,[I,T,M],[v,w,S],y,L);return N.name=b,N};p("Continuous level floor",26,.16,23,c,13,-.08,2.5,null,!1);for(let b=0;b<2;b++){const v=b*13;for(const[w,S]of[[3.95,7.9],[12.35,1.3]])p("Plaster upper wall",S,3.1,.24,a,v+w,2.85,-3.6),p("Green lower wall",S,1.3,.25,l,v+w,.65,-3.59),p("Skirting",S,.14,.29,h,v+w,.07,-3.55),p("Paint border",S,.045,.28,h,v+w,1.3,-3.55);for(const w of[7.88,11.72])p("Stairwell side plaster",.2,3.2,3.15,a,v+w,2.9,-5.05),p("Stairwell side green paint",.22,1.3,3.15,l,v+w,.65,-5.05);p("Stairwell ceiling",4,.16,3.25,a,v+9.8,4.5,-5.05,null,!1),p("Stairwell back wall",3.8,4.5,.2,a,v+9.8,2.25,-6.5),p("Stairwell landing",3.8,.16,1,u,v+9.8,1.68,-6.05);for(let w=0;w<12;w++){const S=(w+1)*.14,R=-3.7-w*.2;p("Stair tread",2.15,S,.22,u,v+9.8,S/2,R);for(const I of[-1,1]){const T=v+9.8+I*1.12;p("Stair baluster",.035,.85,.035,h,T,S+.425,R)}}for(const w of[-1,1]){const S=new A(v+9.8+w*1.12,.96,-3.7),R=new A(S.x,2.5,-5.9),I=S.distanceTo(R),T=m(s,h,S.clone().add(R).multiplyScalar(.5).toArray(),[1,I,1]);T.quaternion.setFromUnitVectors(new A(0,1,0),R.sub(S).normalize()),T.updateMatrix()}p("Landing rail",3.5,.06,.06,h,v+9.8,2.5,-6.05);for(let w=0;w<9;w++)p("Landing rail post",.035,.75,.035,h,v+8.2+w*.4,2.13,-6.05);p("Door recess",1.42,2.48,.16,d,v+2.15,1.24,-3.4),p("Apartment door",1.16,2.3,.12,f,v+2.15,1.15,-3.29);for(const w of[-.63,.63])p("Door trim",.09,2.4,.2,h,v+2.15+w,1.2,-3.23);p("Door lintel",1.36,.1,.2,h,v+2.15,2.43,-3.23),p("Door handle",.13,.035,.07,h,v+2.55,1.03,-3.18),p("Peephole",.035,.035,.03,h,v+2.15,1.68,-3.19);for(let w=0;w<2;w++)for(let S=0;S<4;S++){const R=v+4.3+S*.39,I=1.15+w*.42;p("Mailbox frame",.38,.4,.21,d,R,I,-3.35),p("Mailbox door",.34,.35,.025,S%3?h:l,R,I,-3.23),p("Mailbox letter slot",.23,.025,.015,d,R,I+.1,-3.207),p("Mailbox label",.1,.04,.018,g,R,I-.07,-3.2)}p("Noticeboard frame",1.3,1.45,.12,f,v+6.9,1.8,-3.35),p("Noticeboard backing",1.17,1.3,.03,d,v+6.9,1.8,-3.27);for(let w=0;w<6;w++){const S=v+6.6+w%2*.48,R=2.13-Math.floor(w/2)*.37;p("Paper notices",.36,.3,.015,g,S,R,-3.24,[0,0,(w%3-1)*.06]);for(let I=0;I<3;I++)p("Notice ink",.24,.012,.018,h,S,R+.06-I*.045,-3.23)}for(const[w,S]of[2.15,5.1].entries())e.add(v+S,3.28,-3.475,1.7,1.12,0,b*3+w+1);p("Ceiling edge",13,.24,.38,u,v+6.5,4.35,-3.5,null,!1),p("Ceiling soffit",13,.13,4.8,a,v+6.5,4.5,-1.1,null,!1),p("Lamp bracket",.32,.1,.35,h,v+4,3.92,-3.21),p("Warm bulkhead lamp",.21,.26,.12,_,v+4,3.73,-3.15,null,!1);for(let w=0;w<2;w++)p("Old heating pipe",.055,3.8,.055,h,v+.45+w*.13,1.9,-3.28);for(let w=0;w<7;w++)p("Radiator section",.08,.6,.18,g,v+6.15+w*.11,.46,-3.25);for(let w=0;w<7;w++)p("Scattered paper",.16,.007,.12,g,v+1+w*1.7,.009,w%2?2.5:-2.65,[0,w*.8,0],!1)}for(const{geometry:b,mat:v,shadow:w,meshes:S}of r.values()){const R=new Lo(b,v,S.length);for(let I=0;I<S.length;I++)R.setMatrixAt(I,S[I].matrix);R.castShadow=w,R.receiveShadow=!0,R.computeBoundingSphere(),R.name=v.name,i.add(R)}const x=e.finish();return i.add(...x.children.slice()),i.userData.windowCount=e.stats.count,i}function Kv(i,e,t){const n=new Map([...i.chunks].map(([s,r])=>[s,r.bottles.map(o=>o.taken)]));i.setEnvironment(e),i.update(t);for(const[s,r]of i.chunks){const o=n.get(s);o&&r.bottles.forEach((a,l)=>{o[l]&&(a.taken=!0,a.mesh.visible=!1)})}}class $v{constructor({scene:e,lighting:t,sun:n,ambient:s,renderer:r}){Object.assign(this,{scene:e,lighting:t,sun:n,ambient:s,renderer:r}),this.indoor=!1,this.lights=[0,1].map(()=>{const o=new vd("#ffca83",18,14,2);return o.visible=!1,e.add(o),o})}update(e,t){if(!(e==="entrance")){this.indoor&&this.lighting.apply();for(const o of this.lights)o.visible=!1;this.indoor=!1;return}this.indoor=!0;const s=this.lighting.value;this.sun.intensity=s.sunIntensity*.28,this.sun.color.set("#e8d4a8"),this.sun.position.set(t-4,3.8,3.5),this.sun.target.position.set(t,0,-2),this.ambient.intensity=Math.max(.45,s.ambientIntensity*.65),this.ambient.color.set("#b8b6a1"),this.ambient.groundColor.set("#444c3c"),this.renderer.toneMappingExposure=s.exposure*1.06,this.scene.background.set("#565b50"),this.scene.fog.color.set("#565b50"),this.scene.fog.near=16,this.scene.fog.far=42;const r=Math.floor((t-4)/13)*13+4;this.lights.forEach((o,a)=>{o.visible=!0,o.position.set(r+a*13,3.6,-2.65)})}}function Ec(i,e,t){let n;if(i.visual.traverse(m=>{!n&&m.isSkinnedMesh&&e.test(m.name)&&(n=m)}),!n)return null;const s=n.geometry.attributes.position,r=new ne().copy(i.visual.matrixWorld).invert().multiply(n.matrixWorld),o=new mn,a=new A;for(let m=0;m<s.count;m++)o.expandByPoint(a.fromBufferAttribute(s,m).applyMatrix4(r));const l=o.getSize(new A),c=o.min.clone().add(l.clone().multiply(new A(...t)));let u=0,h=1/0;for(let m=0;m<s.count;m++){a.fromBufferAttribute(s,m).applyMatrix4(r).sub(c);const p=a.x*a.x*3+a.y*a.y*2+a.z*a.z;p<h&&(h=p,u=m)}const d=new A().fromBufferAttribute(s,u).applyMatrix4(n.bindMatrix),f=[];for(let m=0;m<4;m++){const p=n.geometry.attributes.skinWeight.getComponent(u,m),x=n.geometry.attributes.skinIndex.getComponent(u,m);p&&f.push({bone:n.skeleton.bones[x],inverse:n.skeleton.boneInverses[x],weight:p})}const g=new A,_=new ne;return{get(m){m.set(0,0,0);for(const p of f)_.multiplyMatrices(i.posedWorld.get(p.bone)??p.bone.matrixWorld,p.inverse),m.addScaledVector(g.copy(d).applyMatrix4(_),p.weight);return m.applyMatrix4(n.bindMatrixInverse).applyMatrix4(n.matrixWorld)}}}const ch=(i,e,t)=>(t=nt.clamp((t-i)/(e-i),0,1),t*t*(3-2*t));function uh(i,e,t=null){const n=i.userActions?.clips[e];return!n||i.pickup?!1:(i.pickup={kind:e,elapsed:0,duration:n.duration,payload:t,applied:!1},!0)}function ir(i){return i.pickup?Math.min(1,i.pickup.elapsed/i.pickup.duration):0}class Jv{constructor(e,t){this.root=new It;const n=new Ce(t.body,t.material("#756033")),s=new Ce(t.label,t.labelMaterial);n.position.y=-.25,s.position.y=.18-.25,this.root.add(n,s),this.body=n,this.label=s,this.root.scale.setScalar(.65),this.root.visible=!1,e.add(this.root),this.reference=new Ke,this.rotation=new Ke}update(e,t){const n=ir(e);if(this.root.visible=t&&e.pickup?.kind==="bottle_pickup"&&n>.22&&n<.95,!this.root.visible){this.serial=null;return}const s=e.bind.find(h=>h.name==="hand.r"),r=s&&e.posedWorld.get(s.bone);if(!r){this.root.visible=!1;return}r.decompose(this.root.position,this.rotation,new A);const o=new A;let a=0;for(const h of["c_middle2.r","c_ring2.r","c_thumb2.r"]){const d=e.bind.find(g=>g.name===h),f=d&&e.posedWorld.get(d.bone);f&&(o.add(new A().setFromMatrixPosition(f)),a++)}a&&this.root.position.copy(o.divideScalar(a)),this.serial!==e.pickup&&(this.serial=e.pickup,this.reference.copy(this.rotation).invert()),this.anchorActor!==e.visual&&(this.anchorActor=e.visual,this.mouth=Ec(e,/teeth/i,[.5,.55,1]));const l=new A(0,1,0).applyQuaternion(this.rotation.clone().multiply(this.reference)),c=ch(.35,.49,n)*(1-ch(.8,.94,n));let u=.25;if(this.mouth&&c>0){const h=this.mouth.get(new A),d=h.sub(this.root.position),f=d.length();if(f>.015){const g=new Ke().setFromUnitVectors(l,d.normalize());l.applyQuaternion(new Ke().slerp(g,c)),u=nt.lerp(.25,nt.clamp(.46-f/.65,.17,.32),c)}}this.body.position.y=-u,this.label.position.y=.18-u,this.root.quaternion.setFromUnitVectors(new A(0,1,0),l.normalize())}}const ps=[{id:"hobo",name:"Свой парень",tag:"Легенда района",description:"Знакомый герой в потёртых джинсах.",model:"hero",height:1.85},{id:"fighter",name:"Патрульный",tag:"По другую сторону",description:"Форма и другой силуэт. Здоровье и урон одинаковы у всех.",model:"enemy",height:1.9}],uo=[{id:"original",name:"Оригинал",shirt:"#ffffff",pants:"#ffffff",hat:"#ffffff"},{id:"olive",name:"Хаки",shirt:"#a9b689",pants:"#9aa38d",hat:"#818e6d"},{id:"rust",name:"Ржавчина",shirt:"#c28360",pants:"#ac9d90",hat:"#ba8a61"},{id:"night",name:"Ночной",shirt:"#748fa7",pants:"#7f8c9d",hat:"#8295ab"}],hh="bomzh:appearance:v1";class Zv{constructor(e){try{this.storage=e??globalThis.localStorage;const t=JSON.parse(this.storage.getItem(hh));this.character=ps.some(n=>n.id===t?.character)?t.character:"hobo",this.palette=uo.some(n=>n.id===t?.palette)?t.palette:"original"}catch{this.character="hobo",this.palette="original"}}set(e,t){if(!ps.some(n=>n.id===e)||!uo.some(n=>n.id===t))return!1;this.character=e,this.palette=t;try{this.storage.setItem(hh,JSON.stringify({character:e,palette:t}))}catch{}return!0}apply(e){const t=uo.find(n=>n.id===this.palette);e.visual.traverse(n=>{if(!n.isMesh)return;if(!n.userData.wardrobeMaterials){n.material=Array.isArray(n.material)?n.material.map(o=>o.clone()):n.material.clone(),n.userData.wardrobeMaterials=!0;const r=Array.isArray(n.material)?n.material:[n.material];n.userData.originalColors=r.map(o=>o.color?.clone())}(Array.isArray(n.material)?n.material:[n.material]).forEach((r,o)=>{if(!r.color)return;r.color.copy(n.userData.originalColors[o]);const a=n.name+" "+r.name,l=/shtani|pants|jeans/i.test(a)?t.pants:/hat|shap|cap/i.test(a)?t.hat:/shirt|maika|mayka|tank|uniform/i.test(a)?t.shirt:null;l&&r.color.multiply({isColor:!0,r:parseInt(l.slice(1,3),16)/255,g:parseInt(l.slice(3,5),16)/255,b:parseInt(l.slice(5,7),16)/255})})})}}const vr=Object.freeze([{id:"classic",name:"Свой парень",price:0,icon:"🧢",description:"Оригинальный образ."},{id:"shades",name:"Тёмные очки",price:60,icon:"🕶️",description:"Круглые очки для серьёзных разборок."},{id:"gold",name:"Король двора",price:180,icon:"👑",description:"Золотые очки и красный шарф."}]),Pd="bomzh:wallet:v1",$s=i=>Number.isSafeInteger(i)&&i>=0,dh=()=>({version:1,coins:0,owned:["classic"],equipped:"classic"});function Qv(i){try{const e=JSON.parse(i.getItem(Pd));if(e?.version!==1||!$s(e.coins)||!Array.isArray(e.owned))return dh();const t=[...new Set(["classic",...e.owned.filter(n=>vr.some(s=>s.id===n))])];return{version:1,coins:e.coins,owned:t,equipped:t.includes(e.equipped)?e.equipped:"classic"}}catch{return dh()}}class ey{constructor(e){try{this.storage=e??globalThis.localStorage}catch{}this.profile=Qv(this.storage),this.persistent=!0,this.run=null}save(){try{this.storage.setItem(Pd,JSON.stringify(this.profile)),this.persistent=!0}catch{this.persistent=!1}}beginRun(e){return this.run={id:e,earned:0,revived:!1,doubled:!1,closed:!1},this.run}earn(e){return!this.run||this.run.closed||!$s(e)||!$s(this.profile.coins+e)||!$s(this.run.earned+e)?!1:(this.profile.coins+=e,this.run.earned+=e,this.save(),!0)}buy(e){const t=vr.find(n=>n.id===e);return!t||this.profile.owned.includes(e)?{ok:!1,reason:"owned"}:this.profile.coins<t.price?{ok:!1,reason:"funds"}:(this.profile.coins-=t.price,this.profile.owned.push(e),this.profile.equipped=e,this.save(),{ok:!0})}equip(e){return this.profile.owned.includes(e)?(this.profile.equipped=e,this.save(),!0):!1}claim(e,t){const n=this.run;return!n||n.id!==t||n.closed?!1:e==="revive"?n.revived?!1:(n.revived=!0,!0):e==="double"?n.doubled||n.earned===0||!$s(this.profile.coins+n.earned)?!1:(this.profile.coins+=n.earned,n.doubled=!0,n.closed=!0,this.save(),!0):!1}}const ty=i=>(i=nt.clamp(i,0,1),i*i*(3-2*i)),as=[[0,[-.27,1.06,.18],[-.12,.96,.27]],[.3,[-.5,1.72,-.28],[-.15,.66,-.74]],[.4,[-.55,1.65,.35],[-.15,.95,.25]],[.52,[-.22,1.18,.77],[.04,-.42,.91]],[.7,[-.22,.98,.62],[.08,-.7,.7]],[1,[-.27,1.06,.18],[-.12,.96,.27]]];function fh(i=0,e=!1){if(!e)return{wrist:new A(...as[0][1]),direction:new A(...as[0][2]).normalize()};const t=nt.clamp(i,0,1);let n=1;for(;n<as.length-1&&t>as[n][0];)n++;const s=as[n-1],r=as[n],o=ty((t-s[0])/(r[0]-s[0]));return{wrist:new A(...s[1]).lerp(new A(...r[1]),o),direction:new A(0,1,0).applyQuaternion(new Ke().setFromUnitVectors(new A(0,1,0),new A(...s[2]).normalize()).slerp(new Ke().setFromUnitVectors(new A(0,1,0),new A(...r[2]).normalize()),o))}}function Nl(i,e){return new ne().makeTranslation(...i.toArray()).multiply(new ne().makeRotationFromQuaternion(e)).multiply(new ne().makeTranslation(...i.clone().negate().toArray()))}function ph(i,e,t,n){const s=R=>i.bind.find(I=>I.name===R+e),r=s("arm_stretch"),o=s("forearm_stretch"),a=s("hand");if(!r||!o||!a)return;const l=R=>new A().setFromMatrixPosition(i.posedWorld.get(R.bone)),c=l(r),u=l(o),h=l(a),d=c.distanceTo(u),f=u.distanceTo(h),g=t.clone().sub(c),_=nt.clamp(g.length(),Math.abs(d-f)+.001,d+f-.002);g.normalize();const m=(d*d-f*f+_*_)/(2*_),p=Math.sqrt(Math.max(0,d*d-m*m)),x=n.clone().sub(c).addScaledVector(g,-n.clone().sub(c).dot(g)).normalize(),b=c.clone().addScaledVector(g,m).addScaledVector(x,p),v=Nl(c,new Ke().setFromUnitVectors(u.clone().sub(c).normalize(),b.clone().sub(c).normalize())),w=h.clone().applyMatrix4(v),S=Nl(b,new Ke().setFromUnitVectors(w.sub(b).normalize(),c.clone().addScaledVector(g,_).sub(b).normalize()));for(const R of i.bind){if(!R.name.endsWith(e))continue;const I=i.posedWorld.get(R.bone);I&&(/^(?:arm_stretch|c_arm_twist_offset)/.test(R.name)?I.premultiply(v):/^(?:forearm|hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/.test(R.name)&&I.premultiply(v).premultiply(S))}}function mh(i,e,t){const n=fh(e,t),s=a=>i.root.localToWorld(a.clone());ph(i,".r",s(n.wrist),s(new A(-.65,1.12,.12))),ph(i,".l",s(new A(.24,1.14,.25)),s(new A(.6,.97,-.05)));const r=i.bind.find(a=>a.name==="hand.r"),o=r&&i.posedWorld.get(r.bone);if(o){if(!i.weaponReferenceRotation){const d=i.userActions,f=d?.bones.indexOf("hand.r"),g=d?new ne().fromArray(d.clips.idle.frames[0],f*16).multiply(r.matrix):r.matrix.clone();i.weaponReferenceRotation=new Ke,g.decompose(new A,i.weaponReferenceRotation,new A)}const a=new Ke;o.decompose(new A,a,new A);const l=fh().direction,c=new Ke().setFromUnitVectors(l,n.direction),u=i.root.getWorldQuaternion(new Ke).multiply(c).multiply(i.weaponReferenceRotation),h=Nl(new A().setFromMatrixPosition(o),u.multiply(a.invert()));for(const d of i.bind)d.name.endsWith(".r")&&/^(?:hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/.test(d.name)&&i.posedWorld.get(d.bone)?.premultiply(h)}i.weaponDirection=n.direction}const ny=1.15,iy=1.8;function Ta(i,e){Number.isFinite(e)&&e>0&&(i.walkDistance=(i.walkDistance??0)+e)}function sy(i,e,t){return(i/e%1+1)%1*Math.max(0,t-1)}const gh=new A,_h=new A,xh=new A,vh=new A,yh=new Ke,Mh=new Ke;function Tc(i,e,t,n){return n<=0?i.copy(e):n>=1?i.copy(t):(e.decompose(gh,yh,xh),t.decompose(_h,Mh,vh),i.compose(gh.lerp(_h,n),yh.slerp(Mh,n).normalize(),xh.lerp(vh,n)))}const Id=/^(?:hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/;function ry(i){const e=i.endsWith(".l")?".l":i.endsWith(".r")?".r":"",t=e?i.slice(0,-2):i;return t==="shoulder"?"spine_03.x":t==="arm_stretch"?"shoulder"+e:t==="c_arm_twist_offset"||t==="forearm_stretch"?"arm_stretch"+e:t==="forearm_twist"||t==="hand"?"forearm_stretch"+e:t==="thigh_stretch"?"root.x":t==="thigh_twist"||t==="leg_stretch"?"thigh_stretch"+e:t==="leg_twist"||t==="foot"?"leg_stretch"+e:t==="toes_01"?"foot"+e:{"root.x":null,"spine_01.x":"root.x","spine_02.x":"spine_01.x","spine_03.x":"spine_02.x","neck.x":"spine_03.x","c_head.x":"neck.x","head.x":"c_head.x","jawbone.x":"head.x"}[i]}function oy(i){const e=new Map(i.bind.map(l=>[l.name,l])),t=new Set(i.userActions.bones),n=new Map;for(const l of i.bind)t.has(l.name)&&n.set(l.name,{...l,inverse:l.matrix.clone().invert()});for(const l of n.values()){let c=ry(l.name);if(c===void 0){let u=l.bone.parent;for(;u;){const h=u.userData.name??u.name;if(n.has(h)){c=h;break}u=u.parent}}c===void 0&&Id.test(l.name)&&(c="hand"+(l.name.endsWith(".l")?".l":".r")),l.parent=n.get(c)??null}const s=[],r=new Set,o=new Set;function a(l){if(!o.has(l)){if(r.has(l))throw Error("Animation hierarchy cycle");r.add(l),l.parent&&a(l.parent),r.delete(l),o.add(l),s.push(l)}}for(const l of n.values())a(l);for(const l of s){const c=new A,u=new Ke,h=new A;l.matrix.decompose(c,u,h),l.bindRotation=u.normalize(),l.bindFrame=new ne().compose(c,l.bindRotation,new A(1,1,1))}for(const l of s)l.localBind=l.parent?l.parent.bindFrame.clone().invert().multiply(l.matrix):l.matrix.clone(),l.localInverse=l.localBind.clone().invert();i.poseHierarchy=s,i.bindByName=e}function ay(i,e){for(const t of[".l",".r"]){const n=i.bindByName.get("hand"+t),s=n&&e.get(n.bone);if(!s)continue;const r=s.clone().multiply(n.matrix.clone().invert()),o=new A,a=new Ke,l=new A;if(r.decompose(o,a,l),l.toArray().some(d=>d<=1e-8)||Math.max(...l.toArray().map(d=>Math.abs(d-1)))<1e-4)continue;const c=new A().setFromMatrixPosition(s),u=new ne().makeRotationFromQuaternion(a.normalize()),h=new ne().makeTranslation(...c.toArray()).multiply(u).multiply(new ne().makeScale(1/l.x,1/l.y,1/l.z)).multiply(u.clone().invert()).multiply(new ne().makeTranslation(-c.x,-c.y,-c.z));for(const d of i.bind)d.name.endsWith(t)&&Id.test(d.name)&&e.has(d.bone)&&e.get(d.bone).premultiply(h)}}function Aa(i,e){const t=new A().setFromMatrixPosition(e),n=new Ke,s=new A;return e.clone().multiply(i.inverse).decompose(new A,n,s),new ne().compose(t,n.normalize().multiply(i.bindRotation),new A(1,1,1))}function ly(i,e,t,n){const s=new Map(t);for(const r of i.poseHierarchy){const o=e.get(r.bone),a=t.get(r.bone);if(!o||!a)continue;const l=r.parent?Aa(r.parent,e.get(r.parent.bone)):null,c=r.parent?Aa(r.parent,t.get(r.parent.bone)):null,u=l?l.clone().invert().multiply(o):o.clone(),h=c?c.clone().invert().multiply(a):a.clone();u.multiply(r.localInverse),h.multiply(r.localInverse);const d=Tc(new ne,u,h,n).multiply(r.localBind),f=r.parent?Aa(r.parent,s.get(r.parent.bone)):null;s.set(r.bone,f?f.clone().multiply(d):d)}return s}function bh(i,e,t){if(!i.userActions)return;i.poseHierarchy||oy(i);const n=i.visual.matrixWorld.clone().invert(),s=new Map;for(const[c,u]of i.posedWorld)s.set(c,n.clone().multiply(u));ay(i,s),i.motionId!==t&&(i.transitionFrom=i.lastMotion,i.transitionStart=e,i.motionId=t);const r=t==="jab:return"?.14:t==="dodge"||t.includes("_combo:")?.06:.12,o=Math.min(1,Math.max(0,(e-i.transitionStart)/r)),a=o*o*(3-2*o),l=i.transitionFrom&&a<1?ly(i,i.transitionFrom,s,a):s;for(const[c,u]of l)i.posedWorld.get(c).copy(i.visual.matrixWorld).multiply(u);i.lastMotion=l,a===1&&(i.transitionFrom=null)}function Sh(i){for(const e of i.rigid){const t=i.bindByName?.get(e.parentBoneName)??i.bind.find(r=>r.name===e.parentBoneName),n=t&&i.posedWorld.get(t.bone),s=n?n.clone().multiply(t.matrix.clone().invert()).multiply(e.matrix):i.visual.matrixWorld.clone().multiply(e.matrix);e.mesh.matrix.copy(e.mesh.parent.matrixWorld).invert().multiply(s),e.mesh.updateWorldMatrix(!1,!1)}}function cy(i){if(i?.version!==1||!Array.isArray(i.bones)||!i.bones.length||!Number.isFinite(i.fps)||i.fps<=0)throw new Error("Invalid action data");if(!i.clips?.idle||!(i.clips.jab_01||yr(i).length))throw new Error("Missing authored idle or attack");for(const e of Object.keys(i.clips??{})){const t=i.clips?.[e]?.frames;if(!t?.length||t.some(n=>n.length!==i.bones.length*16||!n.every(Number.isFinite)))throw new Error(`Invalid clip ${e}`)}return i}function yr(i){return Object.keys(i?.clips??{}).filter(e=>e.endsWith("_combo")&&!e.startsWith("weapon_")).sort((e,t)=>e.localeCompare(t,void 0,{numeric:!0}))}function Ld(i){return Object.keys(i?.clips??{}).filter(e=>e.startsWith("weapon_")&&e.endsWith("_combo")).sort()}function uy(i,e){const t=Ld(i)[e],n=i?.clips[t];return n?{clip:t,duration:n.duration,cooldown:n.duration,hitAt:n.markers?.hit!==void 0?n.markers.hit/Math.max(1,n.frames.length-1):.52}:null}function hy(i,e){const t=yr(i)[e],n=i?.clips[t];if(!n)return null;const s=Math.max(.3,n.duration);return{...t.startsWith("kick")?{range:1.9,damage:18}:{},clip:t,duration:s,cooldown:s,hitAt:n.markers?.hit!==void 0?n.markers.hit/(n.frames.length-1):.9}}function dy(i,e){i.userActions=cy(e),i.userBoneIndices=new Map(e.bones.map((t,n)=>[t,n*16])),i.walkStride=fy(i),i.walkSpeed=e.clips.walk?i.walkStride/e.clips.walk.duration*ny:void 0,i.closedLoops=new Set(["idle","walk","weapon_idle"].filter(t=>{const n=e.clips[t]?.frames;return n?.length&&n[0].every((s,r)=>Math.abs(s-n.at(-1)[r])<1e-5)}))}function fy(i){const e=i.userActions,t=e.clips.walk;let n=0;if(t)for(const o of["foot.l","foot.r"]){const a=i.userBoneIndices.get(o),l=i.bind.find(h=>h.name===o);if(a===void 0||!l)continue;let c=1/0,u=-1/0;for(const h of t.frames){const d=new A().setFromMatrixPosition(new ne().fromArray(h,a).multiply(l.matrix));c=Math.min(c,d.z),u=Math.max(u,d.z)}n=Math.max(n,u-c)}const s=i.height??1.85,r=n*2*i.visual.scale.z;return r>.1?Math.max(s*.35,Math.min(s*.95,r)):s*.65}const Ra=new ne,wh=new ne,Eh=new ne,Th=new ne;function py(i,e,t,n,s=0){return wh.fromArray(e,s),Eh.fromArray(t,s),Tc(i,wh,Eh,n)}function Ah(i,e,t,n,s,r){const o=i.userActions.clips[e].frames,a=e==="idle"||e==="walk"||e==="weapon_idle",l=o.length-1,c=e==="walk"&&Number.isFinite(i.walkDistance)?sy(i.walkDistance,i.walkStride,o.length):a?n*i.userActions.fps%Math.max(1,l):Math.max(0,Math.min(1,t))*l,u=Math.floor(c),h=Math.min(l,u+1);py(r,o[u],o[h],c-u,s);const d=i.closedLoops.has(e)?0:Math.min(8,l*.2);if(a&&d>0&&c>l-d){const f=(c-(l-d))/d;Th.fromArray(o[0],s),Tc(r,r,Th,f*f*(3-2*f))}return r}function my(i,e,t,n,s){if(!i.userActions||i.hurt>0||i.dodge>0&&!i.userActions.clips.dodge)return!1;const r=i.dodge>0,o=i.weaponType&&i.userActions.clips.weapon_idle,a=r?"dodge":n==="jab"?i.attackSpec?.clip??yr(i.userActions)[Math.max(0,(i.combo??1)-1)%Math.max(1,yr(i.userActions).length)]??"jab_01":i.userActions.clips[n]?n:n==="spray"?"spray":n==="burp"?"burp":n?null:t?"walk":o?"weapon_idle":"idle";if(!a||!i.userActions.clips[a])return!1;i.visual.position.y=i.baseVisualY,i.root.updateMatrixWorld(!0);const l=n==="jab"&&!a.endsWith("_combo")&&s>.76,c=l?"idle":a,u=r?Math.max(0,Math.min(1,1-i.dodge/(i.dodgeDuration??.24))):n==="jab"&&!a.endsWith("_combo")?Math.min(1,s/.7):s;function h(d,f){const g=i.userBoneIndices.get(d);return g===void 0?f.identity():Ah(i,c,u,l?0:e,g,f)}for(const d of i.bind){h(d.name,Ra);let f=i.posedWorld.get(d.bone);if(f||(f=new ne,i.posedWorld.set(d.bone,f)),o&&a==="walk"&&(d.group==="arm"||d.group==="forearm")){const g=i.userBoneIndices.get(d.name);g!==void 0&&Ah(i,"weapon_idle",0,e,g,Ra)}f.copy(i.visual.matrixWorld).multiply(Ra).multiply(d.matrix)}return a.startsWith("weapon_")&&a.endsWith("_combo")&&Ao(i,"weapon_idle"),(a.endsWith("_combo")&&!a.startsWith("weapon_")||a==="spray"||a==="burp"||a==="dodge")&&Ao(i),a==="walk"&&o?"weapon_walk":l?"jab:return":n==="jab"?a+":"+(i.attackSerial??0):a}function Ao(i,e="idle"){if(i.userActions){if(i.referenceFingersByClip??={},!i.referenceFingersByClip[e]){i.referenceFingersByClip[e]=[];const t=(i.userActions.clips[e]??i.userActions.clips.idle).frames[0],n=new Map(i.bind.map(s=>[s.name,s]));for(const s of i.bind){if(!/^(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie)/.test(s.name))continue;const r=s.name.endsWith(".l")?".l":".r",o=n.get("hand"+r),a=i.userBoneIndices.get("hand"+r),l=i.userBoneIndices.get(s.name);if(!o||a===void 0||l===void 0)continue;const c=new ne().fromArray(t,a).multiply(o.matrix),u=new ne().fromArray(t,l).multiply(s.matrix);i.referenceFingersByClip[e].push({bone:s.bone,hand:o.bone,relative:c.invert().multiply(u)})}}i.referenceFingers=i.referenceFingersByClip[e];for(const t of i.referenceFingers){const n=i.posedWorld.get(t.hand);n&&i.posedWorld.get(t.bone).copy(n).multiply(t.relative)}}}function gy(i){const e=new Map((i.bind??[]).map(t=>[t.name,t.bone]));i.ikLegs=new Map;for(const t of["l","r"]){const n=e.get("thigh_stretch."+t),s=e.get("leg_stretch."+t),r=e.get("foot."+t);if(!n||!s||!r)continue;const o={upper:[],lower:[],foot:[]};for(const a of i.bind)a.name.endsWith("."+t)&&(/^(?:c_)?thigh(?:_|\.)/.test(a.name)?o.upper.push(a.bone):/^(?:c_)?leg(?:_|\.)/.test(a.name)?o.lower.push(a.bone):/^(?:c_)?(?:foot|toe)/.test(a.name)&&o.foot.push(a.bone));i.ikLegs.set(t,{hip:n,knee:s,ankle:r,groups:o})}}function Rh(i,e,t,n){const s=new Ke().setFromUnitVectors(e.clone().sub(i).normalize(),n.clone().sub(t).normalize());return new ne().makeTranslation(t.x,t.y,t.z).multiply(new ne().makeRotationFromQuaternion(s)).multiply(new ne().makeTranslation(-i.x,-i.y,-i.z))}function _y(i,e,t){const n=i.ikLegs.get(e),s=i.posedWorld;if(!n||Math.abs(t)<1e-7)return!1;const r=new A().setFromMatrixPosition(s.get(n.hip)),o=new A().setFromMatrixPosition(s.get(n.knee)),a=new A().setFromMatrixPosition(s.get(n.ankle)),l=a.clone();l.y+=t;const c=r.distanceTo(o),u=o.distanceTo(a),h=c+u-1e-5;if(c<1e-5||u<1e-5)return!1;const d=l.y-r.y;if(Math.abs(d)>h)return!1;const f=new pe(l.x-r.x,l.z-r.z),g=Math.sqrt(Math.max(0,h*h-d*d));f.length()>g&&(f.setLength(g),l.x=r.x+f.x,l.z=r.z+f.y);const _=l.clone().sub(r),m=_.length();_.normalize();const p=new A(0,0,1).applyQuaternion(i.root.quaternion);if(p.addScaledVector(_,-p.dot(_)),p.lengthSq()<1e-8)return!1;p.normalize();const x=(c*c-u*u+m*m)/(2*m),b=Math.sqrt(Math.max(0,c*c-x*x)),v=r.clone().addScaledVector(_,x).addScaledVector(p,b),w={upper:Rh(r,o,r,v),lower:Rh(o,a,v,l),foot:new ne().makeTranslation(l.x-a.x,l.y-a.y,l.z-a.z)};for(const S of["upper","lower","foot"])for(const R of n.groups[S])s.has(R)&&s.get(R).premultiply(w[S]);return!0}function xy(i){const e=[];i.visual.traverse(n=>{n.isSkinnedMesh&&/shoe|boot/i.test(n.name)&&e.push(n)});let t=1/0;i.groundSamples=[],i.groundJoints=new Map,i.groundPrefixes=new Map;for(const n of e){const s=n.geometry.attributes.position,r=[];let o=1/0;for(let u=0;u<s.count;u++){const h=new A().fromBufferAttribute(s,u).applyMatrix4(n.matrixWorld);o=Math.min(o,h.y),r.push(h)}t=Math.min(t,o);const a=r.map((u,h)=>({p:u,i:h})).filter(u=>u.p.y<=o+.025),l=new Set;for(const[u,h]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]){let d=a[0],f=-1/0;for(const g of a){const _=g.p.x*u+g.p.z*h;_>f&&(f=_,d=g)}d&&l.add(d.i)}let c=0;for(let u=1;u<r.length;u++)r[u].y<r[c].y&&(c=u);l.add(c),i.groundPrefixes.set(n,new ne);for(const u of l){const h=[];for(let f=0;f<4;f++){const g=n.geometry.attributes.skinIndex.getComponent(u,f),_=n.geometry.attributes.skinWeight.getComponent(u,f);if(!_)continue;const m=n.skeleton.bones[g];let p=i.groundJoints.get(m);p||(p={bone:m,inverse:n.skeleton.boneInverses[g],matrix:new ne},i.groundJoints.set(m,p)),h.push({joint:p,weight:_})}const d={l:0,r:0};for(const f of h){const g=f.joint.bone.userData.name??f.joint.bone.name;g.endsWith(".l")&&(d.l+=f.weight),g.endsWith(".r")&&(d.r+=f.weight)}i.groundSamples.push({mesh:n,side:d.l>d.r?"l":"r",position:new A().fromBufferAttribute(s,u).applyMatrix4(n.bindMatrix),joints:h})}}i.groundScratch={p:new A,v:new A},i.stableGroundOffset=Number.isFinite(t)?-t-.035:0,gy(i)}function Dd(i){if(!i.groundSamples?.length)return{l:1/0,r:1/0};for(const[s,r]of i.groundPrefixes)r.multiplyMatrices(s.matrixWorld,s.bindMatrixInverse);for(const s of i.groundJoints.values())s.matrix.multiplyMatrices(i.posedWorld.get(s.bone)??s.bone.matrixWorld,s.inverse);const{p:e,v:t}=i.groundScratch,n={l:1/0,r:1/0};for(const s of i.groundSamples){t.set(0,0,0);for(const{joint:r,weight:o}of s.joints)t.addScaledVector(e.copy(s.position).applyMatrix4(r.matrix),o);t.applyMatrix4(i.groundPrefixes.get(s.mesh)),n[s.side]=Math.min(n[s.side],t.y)}return n}function Ca(i){const e=Dd(i),t=Math.min(e.l,e.r);return Number.isFinite(t)?t:null}function Pa(i,e){for(const t of i.posedWorld.values())t.elements[13]+=e}function Ch(i,e=0,{kind:t=null,time:n=0}={}){const s=Ca(i);if(s===null||i.health<=0||i.down>0||Math.abs(i.root.rotation.z)>.3){i.feetY=null;return}if(!t&&i.userActions){const o=e-s,a=Math.max(0,Math.min(.05,n-(i.groundTime??n))),l=i.groundOffset??o,c=Math.max(-.072*a,Math.min(.072*a,(o-l)*(1-Math.exp(-12*a)))),u=i.transitionFrom&&n-(i.transitionStart??-1/0)<.14?o:l+c;Pa(i,u),i.groundOffset=u,i.groundTime=n,i.groundMode="authored",i.feetY=Ca(i);return}if(!t&&i.ikLegs?.size===2){const o=i.stableGroundOffset+e;i.groundMode!=="stable"&&(i.groundMode="stable",i.groundBlendStart=n,i.groundBlendFrom=i.groundOffset??o);const a=Math.min(1,Math.max(0,(n-i.groundBlendStart)/.16)),l=a*a*(3-2*a),c=i.groundBlendFrom+(o-i.groundBlendFrom)*l;Pa(i,c),i.groundOffset=c;for(let u=0;u<3;u++){const h=Dd(i),d=Math.min(h.l,h.r);for(const f of["l","r"]){const g=h[f];if(!Number.isFinite(g))continue;const _=Math.min(1,Math.max(0,(g-d)/.05)),m=g<e?1:1-_*_*(3-2*_);_y(i,f,(e-g)*m)}}i.feetY=Ca(i);return}i.groundTime=n,i.groundMode="pose";const r=e-s;Pa(i,r),i.groundOffset=r,i.feetY=e}const Ph=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)),Ih=(i,e,t)=>i+(e-i)*t,Fl={left:[-.5,-1.15,-.06,.08],right:[-.65,-1.05,.06,.08],lean:0,twist:0,drop:0,spin:0};function vy(i,e,t){const n={};for(const s of["left","right"])n[s]=i[s].map((r,o)=>Ih(r,e[s][o],Ph(t)));for(const s of["lean","twist","drop","spin"])n[s]=Ih(i[s]??0,e[s]??0,Ph(t));return n}const lt=(i={})=>({...Fl,...i});function Ol(i,e,t,n=0,s=1){if(!t){const c=lt({left:[...Fl.left],right:[...Fl.right]});if(e)for(const[u,h]of["left","right"].entries()){const d=Math.sin(i*9+u*Math.PI);c[h][0]+=.25*d,c[h][1]+=.15*Math.max(0,-d),c[h][2]=.42*d,c[h][3]=.55*Math.max(0,d)}return c.drop=e?-.008*Math.abs(Math.sin(i*9)):-.005*(1+Math.sin(i*2)),c}const r=s%2===0?"right":"left";let o;t==="finisher"?o=[[0,lt()],[.22,lt({right:[-.15,-.7,.18,.3],left:[-.6,-1.3,-.18,.25],twist:-.3,drop:-.08})],[.37,lt({right:[.15,-1.5,.2,.45],left:[-.8,-1.4,-.25,.3],twist:-.55,lean:.18,drop:-.16})],[1.3/2.8,lt({right:[-1.8,-.15,.15,.12],left:[-.65,-1.2,-.2,.2],twist:.55,lean:-.12,drop:.06})],[.58,lt({right:[-1.75,-.2,.15,.12],twist:.4,lean:-.1,drop:.04})],[.86,lt()],[1,lt()]]:t==="burp"?o=[[0,lt()],[.24,lt({lean:-.18,drop:-.025})],[.4,lt({lean:.38,twist:.1,left:[-.1,-.8,-.06,.08],right:[-.1,-.8,.06,.08]})],[.68,lt({lean:.18})],[1,lt()]]:t==="jab"?o=[[0,lt()],[.25,lt({[r]:[-.15,-1.9,0,.12],twist:-.25,drop:-.025})],[.43,lt({[r]:[-1.65,-.08,-.1,.1],twist:.3,lean:.12})],[.58,lt({[r]:[-1.55,-.12,-.1,.1],twist:.23,lean:.1})],[1,lt()]]:t==="kick"?o=[[0,lt()],[.28,lt({left:[-.9,-1.3,-1,.95],right:[-.2,-1.4,.12,.08],lean:-.12,drop:-.04})],[.48,lt({left:[-.2,-1.25,-1.6,.05],right:[-.85,-1.2,.1,.08],lean:-.25})],[.62,lt({left:[-.2,-1.25,-1.5,.08],lean:-.2})],[.8,lt({left:[-.6,-1.3,-.85,.85],lean:-.1})],[1,lt()]]:o=[[0,lt()],[.2,lt({left:[.15,-1.35,-.12,.18],right:[.15,-1.35,.12,.18],lean:-.12,drop:-.04})],[.8,lt({left:[.15,-1.35,-.12,.18],right:[.15,-1.35,.12,.18],lean:-.12,drop:-.04})],[1,lt()]];const a=Math.max(0,Math.min(1,n));let l=1;for(;l<o.length-1&&a>o[l][0];)l++;return vy(o[l-1][1],o[l][1],(a-o[l-1][0])/(o[l][0]-o[l-1][0]))}const yy=/forearm|hand|thumb|index|middle|ring|pinky|pinkie/i,My=/arm|shoulder|hand|thumb|index|middle|ring|pinky|pinkie/i,by=/thigh|leg|foot|toe/i,Sy=/leg|foot|toe/i;function Ia(i,e=0,t=0,n=0){return new ne().makeTranslation(i.x,i.y,i.z).multiply(new ne().makeRotationFromEuler(new nn(e,t,n))).multiply(new ne().makeTranslation(-i.x,-i.y,-i.z))}function wy(i){i.root.updateMatrixWorld(!0);const e=i.visual.matrixWorld.clone().invert();i.bind=i.bones.map(({bone:s})=>{const r=s.userData.name??s.name;return{bone:s,name:r,matrix:new ne().multiplyMatrices(e,s.matrixWorld),side:r.endsWith(".l")?"left":"right",group:My.test(r)?yy.test(r)?"forearm":"arm":by.test(r)?Sy.test(r)?"shin":"leg":"body"}});const t=(s,r)=>{const o=i.bind.find(a=>a.name===s);return o?new A().setFromMatrixPosition(o.matrix):r};i.pivots={hips:t("root.x",new A(0,.5,0))};for(const[s,r]of[["left",".l"],["right",".r"]])i.pivots[s]={shoulder:t("arm"+r,new A),elbow:t("forearm"+r,new A),hip:t("thigh"+r,new A),knee:t("leg"+r,new A),wrist:t("hand"+r,new A)};for(const s of i.bind){const r=s.name.match(/(thumb|index|middle|ring|pinky)([123])(?:_base|_rot)?\.([lr])/);if(s.curledMatrix=s.matrix.clone(),!r)continue;const o=new ne;for(let a=1;a<=Number(r[2]);a++){const l=i.bind.find(f=>f.name===`c_${r[1]}${a}.${r[3]}`);if(!l)continue;const c=new A,u=new Ke,h=new A;l.matrix.decompose(c,u,h);const d=new ne().compose(c,u,new A(1,1,1));o.multiply(d).multiply(new ne().makeRotationX(r[1]==="thumb"?.45:1.15)).multiply(d.clone().invert())}s.curledMatrix.premultiply(o)}i.rigid=[],i.visual.traverse(s=>{if(s.isMesh&&!s.isSkinnedMesh){let r=s.parent;for(;r&&!r.isBone;)r=r.parent;i.rigid.push({mesh:s,parentBoneName:r?r.userData.name??r.name:null,matrix:new ne().multiplyMatrices(e,s.matrixWorld)}),s.matrixAutoUpdate=!1}}),i.posedWorld=new Map;const n=new Set;i.visual.traverse(s=>{s.isSkinnedMesh&&n.add(s.skeleton)});for(const s of n){const r=new ne;s.update=function(){for(let o=0;o<this.bones.length;o++){const a=i.posedWorld.get(this.bones[o])??this.bones[o].matrixWorld;r.multiplyMatrices(a,this.boneInverses[o]).toArray(this.boneMatrices,o*16)}this.boneTexture&&(this.boneTexture.needsUpdate=!0)}}i.animationScratch={desired:new ne},xy(i)}function si(i,e,t,n,s){const r=i.weaponType&&!i.userActions?.clips.weapon_idle&&(!n||n==="jab")&&!(i.dodge>0)&&!(i.hurt>0),o=my(i,e,t,r&&n==="jab"?null:n,s);if(o)return r&&(mh(i,s,n==="jab"),Ao(i)),bh(i,e,r?n==="jab"?"weapon-strike:"+i.attackSerial:"weapon-"+o:o),Ch(i,0,{kind:o==="dodge"?"dodge":n,time:e}),Sh(i),Ol(e,t,n,s,i.combo??1);const a=t&&Number.isFinite(i.walkDistance)?i.walkDistance/(i.walkStride??(i.height??1.85)*.65)*(2*Math.PI/9):e,l=Ol(a,t,n,s,i.combo??1);i.dodge>0&&(l.drop-=.12,l.lean+=.25),i.visual.position.y=i.baseVisualY+l.drop,i.root.updateMatrixWorld(!0);const c=Math.max(i.flash??0,i.hurt??0),u=Ia(i.pivots.hips,l.lean-c*1.7,l.twist),h={body:u};for(const f of["left","right"]){const g=l[f],_=i.pivots[f],m=f==="left"?1:-1,p=new A(m*.16,-Math.cos(g[0]),-Math.sin(g[0])).normalize(),x=new A(m*.12,-Math.cos(g[0]+g[1]),-Math.sin(g[0]+g[1])).normalize(),b=new Ke().setFromUnitVectors(_.elbow.clone().sub(_.shoulder).normalize(),p),v=new Ke().setFromUnitVectors(_.wrist.clone().sub(_.elbow).normalize(),x.applyQuaternion(b.clone().invert())),w=(S,R)=>new ne().makeTranslation(S.x,S.y,S.z).multiply(new ne().makeRotationFromQuaternion(R)).multiply(new ne().makeTranslation(-S.x,-S.y,-S.z));h["arm"+f]=u.clone().multiply(w(_.shoulder,b)),h["forearm"+f]=h["arm"+f].clone().multiply(w(_.elbow,v)),h["leg"+f]=Ia(_.hip,g[2]),h["shin"+f]=h["leg"+f].clone().multiply(Ia(_.knee,g[3]))}const{desired:d}=i.animationScratch;for(const f of i.bind){d.copy(i.visual.matrixWorld).multiply(h[f.group==="body"?"body":f.group+f.side]).multiply(f.curledMatrix);let g=i.posedWorld.get(f.bone);g||(g=new ne,i.posedWorld.set(f.bone,g)),g.copy(d)}if(r){mh(i,s,n==="jab");const f=n==="jab"?"weapon-strike:"+i.attackSerial:"weapon-carry";i.motionId!==f&&(i.motionId=f,i.transitionStart=e)}return Ao(i),bh(i,e,n??(t?"walk":"fallback-idle")),Ch(i,0,{kind:n,time:e}),Sh(i),l}class Ud{constructor(e){this.actor=e,this.root=new It,e.root.add(this.root),this.skin=null,this.head=e.bind.find(t=>t.name==="head.x")??e.bind.find(t=>t.name==="head")}set(e){if(e===this.skin)return;this.skin=e;for(const s of[...this.root.children])this.root.remove(s),s.geometry.dispose(),s.material.dispose();if(e==="classic")return;const t=(s,r,o,a,l)=>{const c=new Ce(s,new At({color:r,roughness:.55}));return c.position.set(o,a,l),this.root.add(c),c};this.actor.root.updateMatrixWorld(!0);const n=this.head?new A().setFromMatrixPosition(this.actor.visual.matrixWorld.clone().multiply(this.head.matrix)).applyMatrix4(this.actor.root.matrixWorld.clone().invert()):new A(0,1.55,0);for(const s of[-.1,.1])t(new Vi(.087,.018,6,16),e==="gold"?"#edbc40":"#242928",n.x+s,n.y+.08,n.z+.17),t(new xr(.07,16),"#243d3c",n.x+s,n.y+.08,n.z+.171);t(new sn(.07,.025,.025),e==="gold"?"#edbc40":"#242928",n.x,n.y+.08,n.z+.17),e==="gold"&&(t(new Vi(.14,.045,6,20),"#bb3e32",n.x,n.y-.17,n.z).rotation.x=Math.PI/2,t(new sn(.095,.3,.035),"#bb3e32",n.x-.1,n.y-.32,n.z+.12))}update(){if(!this.head||!this.root.children.length)return;const e=this.actor,t=e.posedWorld.get(this.head.bone);if(!t)return;const n=e.visual.matrixWorld.clone().multiply(this.head.matrix);this.root.matrixAutoUpdate=!1,this.root.matrix.copy(e.root.matrixWorld).invert().multiply(t).multiply(n.invert()).multiply(e.root.matrixWorld),this.root.updateWorldMatrix(!1,!0)}}class Ey{constructor({renderer:e,wallet:t,appearance:n,makeActor:s,onStart:r,onOpen:o,record:a}){Object.assign(this,{renderer:e,wallet:t,appearance:n,makeActor:s,onStart:r,onOpen:o,record:a}),this.root=document.getElementById("main-menu"),this.visible=!1,this.tab="home",this.previewSkin=t.profile.equipped,this.scene=new ic,this.scene.background=null,this.scene.add(new xd(15985104,2634795,2.5));const l=new To(16769978,3);l.position.set(-3,5,4),this.scene.add(l);const c=new To(10205376,2);c.position.set(3,3,-2),this.scene.add(c),this.camera=new Yt(33,1,.1,30),this.camera.position.set(3,1.7,5.2),this.camera.lookAt(0,1,0),this.time=0;const u=new Ce(new ui(1.05,1.15,.08,40),new At({color:3620659,roughness:1}));u.position.y=-.06,this.scene.add(u),this.root.querySelectorAll("[data-menu-tab]").forEach(h=>h.onclick=()=>{this.tab=h.dataset.menuTab,this.renderUI()}),document.getElementById("menu-play").onclick=()=>{this.hide(),r()},document.getElementById("menu-turn").oninput=h=>{this.rotation=Number(h.target.value)},this.changeActor()}changeActor(){if(this.actor){this.cosmetics.set("classic"),this.scene.remove(this.actor.root);const t=new Set;this.actor.visual.traverse(n=>{if(n.isSkinnedMesh&&t.add(n.skeleton),n.isMesh&&n.userData.wardrobeMaterials)for(const s of Array.isArray(n.material)?n.material:[n.material])s.dispose()});for(const n of t)n.dispose()}const e=ps.find(t=>t.id===this.appearance.character);this.actor=this.makeActor(e),this.scene.add(this.actor.root),this.appearance.apply(this.actor),this.cosmetics=new Ud(this.actor),this.cosmetics.set(this.previewSkin),this.rotation=.1,document.getElementById("menu-turn").value=.1}show(){this.visible=!0,this.root.hidden=!1,document.body.classList.add("in-main-menu"),this.previewSkin=this.wallet.profile.equipped,this.cosmetics.set(this.previewSkin),this.onOpen(),this.renderUI(),document.getElementById("menu-play").focus()}hide(){this.visible=!1,this.root.hidden=!0,document.body.classList.remove("in-main-menu")}renderUI(){const e=o=>document.getElementById(o);e("menu-coins").textContent=this.wallet.profile.coins,e("menu-record").textContent=this.record().levels,e("menu-character-title").textContent=ps.find(o=>o.id===this.appearance.character).name,this.root.querySelectorAll("[data-menu-tab]").forEach(o=>{o.classList.toggle("active",o.dataset.menuTab===this.tab),o.setAttribute("aria-selected",String(o.dataset.menuTab===this.tab))}),this.root.classList.toggle("menu-is-home",this.tab==="home"),this.root.querySelectorAll("[data-menu-page]").forEach(o=>o.hidden=o.dataset.menuPage!==this.tab);const t=e("character-options");t.replaceChildren();for(const o of ps){const a=document.createElement("button");a.className="character-option"+(o.id===this.appearance.character?" selected":""),a.innerHTML=`<span>${o.tag}</span><strong>${o.name}</strong><small>${o.description}</small><em>${o.id===this.appearance.character?"ВЫБРАН":"ВЫБРАТЬ"}</em>`,a.onclick=()=>{this.appearance.set(o.id,this.appearance.palette),this.changeActor(),this.renderUI()},t.append(a)}const n=e("wardrobe-colors");n.replaceChildren();for(const o of uo){const a=document.createElement("button");a.textContent=o.name,a.className=o.id===this.appearance.palette?"selected":"",a.style.setProperty("--swatch",o.shirt),a.onclick=()=>{this.appearance.set(this.appearance.character,o.id),this.appearance.apply(this.actor),this.renderUI()},n.append(a)}const s=e("wardrobe-accessories");s.replaceChildren();for(const o of vr.filter(a=>this.wallet.profile.owned.includes(a.id))){const a=document.createElement("button");a.textContent=o.icon+" "+o.name,a.className=this.wallet.profile.equipped===o.id?"selected":"",a.onclick=()=>{this.wallet.equip(o.id),this.previewSkin=o.id,this.cosmetics.set(o.id),this.renderUI()},s.append(a)}const r=e("menu-shop-items");r.replaceChildren();for(const o of vr){const a=document.createElement("article");a.className="menu-shop-item";const l=this.wallet.profile.owned.includes(o.id),c=this.wallet.profile.equipped===o.id;a.innerHTML=`<span class="shop-icon">${o.icon}</span><div><strong>${o.name}</strong><p>${o.description}</p></div>`;const u=document.createElement("button");u.textContent="Примерить",u.onclick=()=>{this.previewSkin=o.id,this.cosmetics.set(o.id),e("menu-status").textContent=l?"Образ на примерке. Нажми «Надеть», чтобы сохранить.":"Примерка — покупка ещё не совершена."};const h=document.createElement("button");h.textContent=c?"Надето":l?"Надеть":`${o.price} · Купить`,h.disabled=c||!l&&this.wallet.profile.coins<o.price,h.onclick=()=>{(l?this.wallet.equip(o.id):this.wallet.buy(o.id).ok)&&(this.previewSkin=o.id,this.cosmetics.set(o.id),e("menu-status").textContent=l?"Образ сохранён.":"Куплено и надето.",this.renderUI())},a.append(u,h),r.append(a)}}render(e,t){if(this.time+=e,this.tab==="home"){t();return}if(!this.actor)return;this.actor.root.rotation.y=this.rotation??.1,si(this.actor,this.time,!1,null,0),this.cosmetics.update();const n=document.getElementById("menu-stage").getBoundingClientRect(),s=innerWidth,r=innerHeight;this.camera.aspect=Math.max(.1,n.width/n.height),this.camera.updateProjectionMatrix();const o=this.renderer;t();const a=o.autoClear;o.autoClear=!1,o.clearDepth(),o.setScissor(n.left,r-n.bottom,n.width,n.height),o.setViewport(n.left,r-n.bottom,n.width,n.height),o.setScissorTest(!0),o.render(this.scene,this.camera),o.setScissorTest(!1),o.setViewport(0,0,s,r),o.autoClear=a}}const Ty=30;class Ay{constructor(e){this.scene=e,this.chunks=new Map,this.box=new sn(.36,.24,.22),this.stripe=new sn(.06,.14,.012),this.caseMaterial=new At({color:14144441,roughness:.85}),this.red=new At({color:11353904,roughness:.75}),this.ring=new hi(.24,.28,24),this.highlight=new Nt({color:10275475,transparent:!0,opacity:.7,depthWrite:!1,side:Pt})}make(e){const t=new It,n=new Ce(this.box,this.caseMaterial);n.position.y=.15,n.castShadow=!0,t.add(n);for(const o of[0,Math.PI/2]){const a=new Ce(this.stripe,this.red);a.position.set(0,.15,.117),a.rotation.z=o,t.add(a)}const s=new Ce(this.ring,this.highlight);s.rotation.x=-Math.PI/2,s.position.y=.018,t.add(s);const r={x:e*26+12,z:Math.sin(e*1.8)*1.25,mesh:t,taken:!1};return t.position.set(r.x,0,r.z),this.scene.add(t),r}update(e,t,n=!0){const s=Math.floor(e.x/26);for(let r=s-1;r<=s+2;r++)this.chunks.has(r)||this.chunks.set(r,this.make(r));for(const[r,o]of this.chunks)Math.abs(r-s)>2&&(this.scene.remove(o.mesh),this.chunks.delete(r));if(!n||t>=100)return 0;for(const r of this.chunks.values())if(!r.taken&&Math.hypot(e.x-r.x,e.z-r.z)<.65)return r.taken=!0,r.mesh.visible=!1,Math.min(Ty,100-t);return 0}debug(){return[...this.chunks.values()].filter(e=>!e.taken).map(({x:e,z:t})=>({x:e,z:t}))}}class Ry{constructor(e){this.scene=e,this.visible=!0,this.chunks=new Map,this.body=new ui(.29,.27,.72,12,1,!0),this.band=new Vi(.286,.018,4,12),this.floor=new xr(.27,12),this.steel=new At({color:7622715,roughness:.95,metalness:.35,side:Pt}),this.rim=new At({color:3423025,roughness:.8,metalness:.6}),this.coals=new Nt({color:15426587,side:Pt}),this.flameGeometry=new pn(.68,1.05),this.fire=new qn({transparent:!0,depthWrite:!1,side:Pt,blending:xo,uniforms:{time:{value:0}},vertexShader:"varying vec2 vUv; varying float seed; void main(){vUv=uv;seed=modelMatrix[3].x;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;varying float seed;uniform float time;void main(){float y=vUv.y;float wave=sin(y*13.-time*7.+seed)*.08*y+sin(y*23.+time*4.)*.035;float width=(1.-y)*.44;float edge=1.-smoothstep(width*.3,width,abs(vUv.x-.5+wave));float lick=.65+.35*sin(y*19.-time*9.+seed);float alpha=edge*(1.-smoothstep(.25,1.,y))*smoothstep(0.,.07,y)*lick;vec3 color=mix(vec3(1.,.16,.015),vec3(1.,.85,.24),pow(1.-y,2.));gl_FragColor=vec4(color,alpha*.85);}"}),this.glow=new Nt({color:15628837,transparent:!0,opacity:.13,depthWrite:!1,blending:xo}),this.glowGeometry=new xr(.9,20)}make(e){const t=new It;t.visible=this.visible,t.position.set(e*26+22.5,0,-2.95);const n=new Ce(this.body,this.steel);n.position.y=.38,n.castShadow=!0,t.add(n);for(const o of[.08,.3,.57,.74]){const a=new Ce(this.band,this.rim);a.rotation.x=Math.PI/2,a.position.y=o,t.add(a)}const s=new Ce(this.floor,this.coals);s.rotation.x=-Math.PI/2,s.position.y=.68,t.add(s);for(const o of[0,Math.PI/2]){const a=new Ce(this.flameGeometry,this.fire);a.position.y=1.18,a.rotation.y=o,t.add(a)}const r=new Ce(this.glowGeometry,this.glow);return r.rotation.x=-Math.PI/2,r.position.y=.015,t.add(r),this.scene.add(t),t}setVisible(e){this.visible=e;for(const t of this.chunks.values())t.visible=e}update(e,t){this.fire.uniforms.time.value=t;const n=Math.floor(e/26);for(let s=n-1;s<=n+2;s++)this.chunks.has(s)||this.chunks.set(s,this.make(s));for(const[s,r]of this.chunks)Math.abs(s-n)>2&&(this.scene.remove(r),this.chunks.delete(s))}}const ms={crowbar:{label:"Лом",damage:30,range:2.05,uses:12,color:6847099,length:.85},stick:{label:"Палка",damage:23,range:2.4,uses:8,color:8938046,length:1.12},rebar:{label:"Арматура",damage:36,range:2.2,uses:10,color:8935484,length:1.02}};function Cy(i,e){const t=ms[i];return t?{...e,duration:.84,cooldown:.84,hitAt:.52,damage:t.damage,range:t.range,weapon:i}:e}class Py{constructor(e){this.scene=e,this.chunks=new Map,this.equipped=null,this.held=null,this.nearby=null,this.point=new A,this.quaternion=new Ke,this.scale=new A,this.grip=new Ke().setFromEuler(new nn(0,0,-Math.PI/2)),this.materials=new Map,this.geometries=new Map}model(e){const t=ms[e],n=new It;let s=this.materials.get(e);s||(s=new At({color:t.color,roughness:.85,metalness:e==="stick"?0:.65}),this.materials.set(e,s));const r=(o,a,l=0,c=0,u=0)=>{const h=`${o}:${a}`;this.geometries.has(h)||this.geometries.set(h,new ui(a,a,o,8));const d=new Ce(this.geometries.get(h),s);d.position.set(l,c,0),d.rotation.z=u,d.castShadow=!0,n.add(d)};if(r(t.length,e==="stick"?.035:.018,0,t.length/2-.12),e==="crowbar"&&(r(.18,.018,.07,t.length-.12,-1.05),r(.1,.023,-.025,-.13,.55)),e==="rebar")for(let o=0;o<10;o++)r(.065,.009,0,o*.085,-.75);return n}update(e){const t=Math.floor(e.x/26);for(let s=t-1;s<=t+2;s++)if(!this.chunks.has(s)){const r=[];for(let o=0;o<2;o++){const a=["crowbar","stick","rebar"][((s*2+o)%3+3)%3],l=s*26+(o?20:5),c=o?-.65:.5,u=this.model(a);u.position.set(l,.055,c),u.rotation.set(0,.45,Math.PI/2),this.scene.add(u),r.push({type:a,x:l,z:c,mesh:u,taken:!1})}this.chunks.set(s,r)}for(const[s,r]of this.chunks)if(Math.abs(s-t)>2){for(const o of r)this.scene.remove(o.mesh);this.chunks.delete(s)}this.nearby=null;let n=.95;for(const s of this.chunks.values())for(const r of s){if(r.taken)continue;const o=Math.hypot(e.x-r.x,e.z-r.z);o<n&&(n=o,this.nearby=r)}}pickup(e=this.nearby){return!e||e.taken?null:(e.taken=!0,e.mesh.visible=!1,this.held&&this.scene.remove(this.held),this.equipped={type:e.type,uses:ms[e.type].uses},this.held=this.model(e.type),this.scene.add(this.held),this.nearby=null,ms[e.type].label)}wear(){return!this.equipped||--this.equipped.uses>0?!1:(this.equipped=null,this.held&&this.scene.remove(this.held),this.held=null,!0)}pose(e,t=!1){if(!this.held||(this.held.visible=!t,t))return;this.hand??=e.bind.find(a=>a.name==="hand.r")?.bone;const n=e.posedWorld.get(this.hand);if(!n){this.held.visible=!1;return}if(!this.palmOffset){const a=e.bind.find(g=>g.bone===this.hand),l=e.userActions,c=l?.clips.idle.frames[0],u=g=>l?new ne().fromArray(c,l.bones.indexOf(g.name)*16).multiply(g.matrix):g.matrix.clone(),h=u(a),d=new A;let f=0;for(const g of["c_middle2.r","c_ring2.r","c_thumb2.r"]){const _=e.bind.find(m=>m.name===g);_&&(!l||l.bones.includes(g))&&(d.add(new A().setFromMatrixPosition(u(_))),f++)}this.palmOffset=(f?d.divideScalar(f):new A().setFromMatrixPosition(h)).applyMatrix4(h.clone().invert())}if(n.decompose(this.point,this.quaternion,this.scale),this.held.position.copy(this.palmOffset).applyMatrix4(n),e.userActions?.weaponGrip&&e.weaponType){const a=new A(...e.userActions.weaponGrip.axis).normalize();this.held.quaternion.copy(this.quaternion).multiply(new Ke().setFromUnitVectors(new A(0,1,0),a));return}const s=e.weaponDirection??new A(-.12,.96,.27),r=new Ke().setFromUnitVectors(new A(0,1,0),s.clone().transformDirection(e.root.matrixWorld));this.orientationSerial!==e.motionId&&(this.fromOrientation=this.held.quaternion.clone(),this.orientationSerial=e.motionId);const o=nt.clamp((e.animationTime-(e.transitionStart??-1))/.12,0,1);this.held.quaternion.copy(this.fromOrientation??r).slerp(r,o*o*(3-2*o))}debug(){return{equipped:this.equipped?{...this.equipped}:null,nearby:this.nearby?.type??null,items:[...this.chunks.values()].flat().filter(e=>!e.taken).map(({type:e,x:t,z:n})=>({type:e,x:t,z:n}))}}}const Iy=1.92;function Ly(i){const e=Math.max(.16,i?.clips?.dodge?.duration??.24);return{duration:e,speed:Iy/e,cooldown:Math.max(.85,e+.12),invulnerability:.3}}class Dy{constructor(e,t=Math.min(1,e)){this.max=e,this.min=t,this.ratio=e,this.sum=0,this.count=0,this.warmup=1,this.averageMs=0}sample(e,t=!0){if(!t||!Number.isFinite(e)||e<=0||e>2)return null;if(this.warmup>0)return this.warmup-=e,null;if(this.sum+=e,this.count++,this.sum<1||this.count<12)return null;this.averageMs=this.sum/this.count*1e3,this.sum=0,this.count=0;let n=this.ratio;return this.averageMs>29?n=Math.max(this.min,this.ratio-.2):this.averageMs<18&&(n=Math.min(this.max,this.ratio+.1)),n=Math.round(n*100)/100,n===this.ratio?null:(this.ratio=n,this.warmup=this.averageMs>29?.6:2,n)}}class Uy{constructor(e){const n=new Uint8Array(4096);for(let o=0;o<32;o++)for(let a=0;a<32;a++){const l=(o*32+a)*4,c=Math.hypot((a+.5-32/2)/(32/2),(o+.5-32/2)/(32/2));n[l]=n[l+1]=n[l+2]=255,n[l+3]=Math.max(0,1-c)**2*180}const s=new rc(n,32,32);s.needsUpdate=!0,this.positions=new Float32Array(72);const r=new yt;r.setAttribute("position",new Ot(this.positions,3).setUsage(Mo)),this.root=new cc(r,new Do({color:"#a6b958",map:s,size:.45,transparent:!0,opacity:0,depthWrite:!1})),this.root.frustumCulled=!1,this.root.visible=!1,e.add(this.root),this.point=new A}update(e,t){const n=e.attackTime/(e.attackSpec?.duration??1.2),s=t?Math.max(0,Math.min(1,(n-.22)/.12,(.85-n)/.2)):0;if(this.root.visible=s>0,!!this.root.visible){this.anchor??=Ec(e,/teeth/i,[.5,.65,1]),this.anchor?this.anchor.get(this.root.position):this.root.position.set(e.x,1.52,e.z),this.root.rotation.y=e.heading;for(let r=0;r<24;r++){const o=(r/24+n*1.5)%1*s;this.positions[r*3]=Math.sin(r*7.3)*(.04+o*.38),this.positions[r*3+1]=Math.cos(r*3.1)*o*.23+o*.16,this.positions[r*3+2]=.06+o*2.2}this.root.geometry.attributes.position.needsUpdate=!0,this.root.material.opacity=.55*s}}}function Ny(i,e,t=1){const n=i==="high",s=i==="low"||!n&&e<650;return{mode:n?"high":s?"low":"balanced",lowQuality:s,pixelRatio:Math.min(t,n?2:s?1:1.5),samples:n?2:0,shadowSize:n?2048:1024}}const Fy=new No(-1,1,1,-1,0,1);class Oy extends yt{constructor(){super(),this.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ze([0,2,0,0,2,0],2))}}const ky=new Oy;class By{constructor(e){this._mesh=new Ce(ky,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}function zy(i,e){return i.updateMatrixWorld(!0),Math.max(i.near,-e.clone().applyMatrix4(i.matrixWorldInverse).z)}class Hy{constructor(e,{lowQuality:t=!1,enabled:n=!0,samples:s=2,grading:r=null}={}){this.renderer=e,this.grading=r,this.enabled=n,this.width=1,this.height=1,this.focus=null,this.maxBlur=t?1.8:2.5,this.band=1.2;const o=e.extensions?.has("EXT_color_buffer_float")?As:On;this.target=new Ai(1,1,{type:o,depthBuffer:!0,stencilBuffer:!1}),this.target.depthTexture=new uc(1,1,Ti),this.target.samples=t?0:Math.min(s,e.capabilities.maxSamples),this.material=new qn({depthTest:!1,depthWrite:!1,uniforms:{...r?.uniforms??{gradeOn:{value:0},gradeA:{value:new Ze(0,1,1,1)},gradeB:{value:new Ze},gradeC:{value:new A},gradeShadow:{value:new A},gradeHighlight:{value:new A}},dofOn:{value:n?1:0},colorTexture:{value:this.target.texture},depthTexture:{value:this.target.depthTexture},pixel:{value:new pe},near:{value:.1},far:{value:100},focus:{value:6},band:{value:this.band},radius:{value:this.maxBlur}},defines:{DOF_SAMPLES:t?8:12},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
   #include <common>
   #include <packing>
   ${Fv}
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
   }`}),this.quad=new By(this.material)}resize(e,t){if(this.width=e,this.height=t,!this.enabled&&!this.grading?.active){(this.target.width!==1||this.target.height!==1)&&this.target.setSize(1,1);return}const n=this.renderer.getPixelRatio(),s=Math.max(1,Math.floor(e*n)),r=Math.max(1,Math.floor(t*n));this.target.setSize(s,r),this.material.uniforms.pixel.value.set(1/s,1/r),this.material.uniforms.radius.value=this.maxBlur*n}render(e,t,n,s){const r=zy(t,n);if(this.focus=this.focus===null?r:nt.lerp(this.focus,r,1-Math.exp(-Math.max(0,s)*8)),!this.enabled&&!this.grading?.active){this.renderer.render(e,t);return}const o=this.renderer.getPixelRatio();(this.target.width!==Math.max(1,Math.floor(this.width*o))||this.target.height!==Math.max(1,Math.floor(this.height*o)))&&this.resize(this.width,this.height);const a=this.material.uniforms;a.dofOn.value=this.enabled?1:0,a.near.value=t.near,a.far.value=t.far,a.focus.value=this.focus,this.renderer.setRenderTarget(this.target),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.quad.render(this.renderer)}renderCustom(e){if(!this.grading?.active){e();return}this.resize(this.width,this.height),this.renderer.setRenderTarget(this.target);try{e()}finally{this.renderer.setRenderTarget(null)}this.material.uniforms.dofOn.value=0,this.quad.render(this.renderer)}dispose(){this.target.dispose(),this.material.dispose(),this.quad.dispose()}}function Vy(i){i.updateMatrixWorld(!0);let e=null;if(i.traverse(g=>{if(e||!g.isMesh||g.material.name!=="Pavement tiles")return;const _=g.geometry,m=_.attributes.position,p=_.attributes.uv,x=_.index;if(p)for(let b=0;b<(x?.count??m.count);b+=3){const v=[0,1,2].map(R=>x?x.getX(b+R):b+R),w=v.map(R=>new A().fromBufferAttribute(m,R).applyMatrix4(g.matrixWorld));if(!(w.some(R=>R.z<2.5)||Math.max(...w.map(R=>R.y))-Math.min(...w.map(R=>R.y))>.001||w[1].clone().sub(w[0]).cross(w[2].clone().sub(w[0])).y<=0)){e={points:w,uv:v.map(R=>new pe().fromBufferAttribute(p,R)),material:g.material};break}}}),!e)throw Error("Authored front paving surface not found");const t=new mn().setFromObject(i),n=t.max.z;if(n>=13)return;const[s,r,o]=e.points,a=r.clone().sub(s),l=o.clone().sub(s),c=a.x*l.z-a.z*l.x,u=[[0,s.y-.002,n-.01],[26,s.y-.002,n-.01],[0,s.y-.002,14],[26,s.y-.002,14]],h=[];for(const[g,,_]of u){const m=((g-s.x)*l.z-(_-s.z)*l.x)/c,p=(a.x*(_-s.z)-a.z*(g-s.x))/c;h.push(e.uv[0].x+m*(e.uv[1].x-e.uv[0].x)+p*(e.uv[2].x-e.uv[0].x),e.uv[0].y+m*(e.uv[1].y-e.uv[0].y)+p*(e.uv[2].y-e.uv[0].y))}const d=new yt;d.setAttribute("position",new ze(u.flat(),3)),d.setAttribute("uv",new ze(h,2)),d.setIndex([0,2,1,1,2,3]),d.computeVertexNormals();const f=new Ce(d,e.material);f.name="Camera_front_paving",i.add(f)}function Gy(i,e,t,n=[]){const s=new Set;for(const f of[i,...n])f.traverse(g=>{if(g.isMesh)for(const _ of Array.isArray(g.material)?g.material:[g.material])s.add(_)});const r=Math.min(4,e.capabilities.getMaxAnisotropy());for(const f of s)for(const g of["map","normalMap","roughnessMap","metalnessMap","aoMap"])f[g]&&(f[g].anisotropy=r,f[g].needsUpdate=!0);const o=new ic,a=new gc(10,24,12),l=new Float32Array(a.attributes.position.count*3),c=new Nt({side:Qt,vertexColors:!0});a.setAttribute("color",new Ot(l,3)),o.add(new Ce(a,c));const u=new Pl(e);let h=null,d="";t.onChange=f=>{const g=f.skyColor+f.groundColor;if(g!==d){const _=new Ie(f.skyColor),m=new Ie(f.groundColor),p=new Ie;for(let b=0;b<a.attributes.position.count;b++){const v=a.attributes.position.getY(b)/10,w=nt.smoothstep(v,-.2,.3);p.copy(m).lerp(_,w),p.toArray(l,b*3)}a.attributes.color.needsUpdate=!0;const x=h;h=u.fromScene(o,.05);for(const b of s)b.envMap=h.texture,b.needsUpdate=!0;x?.dispose(),d=g}for(const _ of s)_.envMapIntensity=f.ambientIntensity/2.6},t.onChange(t.value)}const Lh="bomzh:lighting:v1",sr={exposure:1.08,sunIntensity:3.2,sunColor:"#f2e4cd",azimuth:-48,elevation:52,ambientIntensity:1.5,skyColor:"#c5ccc8",groundColor:"#505347",fogColor:"#85867c",fogStart:24,fogDepth:38,shadows:!0},Wy={exposure:[.2,2.5],sunIntensity:[0,6],azimuth:[-180,180],elevation:[5,85],ambientIntensity:[0,5],fogStart:[5,60],fogDepth:[5,80]};function La(i,e=sr){const t={...e};if(!i||typeof i!="object")return t;for(const[n,[s,r]]of Object.entries(Wy))Number.isFinite(i[n])&&(t[n]=Math.max(s,Math.min(r,i[n])));for(const n of["sunColor","skyColor","groundColor","fogColor"])typeof i[n]=="string"&&/^#[0-9a-f]{6}$/i.test(i[n])&&(t[n]=i[n]);return typeof i.shadows=="boolean"&&(t.shadows=i.shadows),t}const Xy={courtyard:{...sr},sunset:{...sr,exposure:1.1,sunIntensity:3.2,sunColor:"#ffbd7a",azimuth:-105,elevation:18,ambientIntensity:1.5,skyColor:"#b5bed9",groundColor:"#665650",fogColor:"#b09583",fogStart:20},night:{...sr,exposure:.85,sunIntensity:1.1,sunColor:"#b9d0ff",azimuth:35,elevation:38,ambientIntensity:.75,skyColor:"#687caa",groundColor:"#252e40",fogColor:"#263443",fogStart:16,fogDepth:30}};class qy{constructor({scene:e,renderer:t,sun:n,ambient:s,lowQuality:r=!1,storage:o}){Object.assign(this,{scene:e,renderer:t,sun:n,ambient:s,storage:o}),this.defaults={...sr,shadows:!r},this.value={...this.defaults},this.targetX=0;try{this.storage=o??globalThis.localStorage;const a=JSON.parse(this.storage.getItem(Lh));a?.version===1&&(this.value=La(a.settings,this.defaults))}catch{}this.apply()}set(e){this.value=La({...this.value,...e},this.defaults),this.apply()}reset(){this.value={...this.defaults},this.apply()}apply(){const e=this.value;this.renderer.toneMappingExposure=e.exposure,this.sun.intensity=e.sunIntensity,this.sun.color.set(e.sunColor),this.ambient.intensity=e.ambientIntensity,this.ambient.color.set(e.skyColor),this.ambient.groundColor.set(e.groundColor),this.scene.background.set(e.fogColor),this.scene.fog.color.set(e.fogColor),this.scene.fog.near=e.fogStart,this.scene.fog.far=e.fogStart+e.fogDepth,this.renderer.shadowMap.enabled=e.shadows,this.renderer.shadowMap.needsUpdate=!0,this.follow(this.targetX),this.onChange?.(e)}follow(e){this.targetX=e;const t=this.value.azimuth*Math.PI/180,n=this.value.elevation*Math.PI/180,s=Math.sqrt(296);this.sun.position.set(e+s*Math.cos(n)*Math.sin(t),s*Math.sin(n),s*Math.cos(n)*Math.cos(t)),this.sun.target.position.set(e,0,0)}export(){return{version:1,settings:{...this.value}}}save(){try{return this.storage.setItem(Lh,JSON.stringify(this.export())),!0}catch{return!1}}import(e){if(e?.version!==1||!e.settings||typeof e.settings!="object"||Array.isArray(e.settings))throw Error("Нужен файл настроек освещения этой игры.");this.value=La(e.settings,this.defaults),this.apply()}}function Yy(i,{open:e,close:t},n=null){const s=document.getElementById("lighting-panel"),r=document.getElementById("lighting-fields"),o=document.getElementById("lighting-status"),a=[["exposure","Экспозиция",.2,2.5,.01],["sunIntensity","Яркость солнца",0,6,.1],["azimuth","Направление солнца",-180,180,1],["elevation","Высота солнца",5,85,1],["sunColor","Цвет солнца"],["ambientIntensity","Свет в тенях",0,5,.1],["skyColor","Цвет неба"],["groundColor","Оттенок снизу"],["fogColor","Цвет тумана и фона"],["fogStart","Начало тумана",5,60,1],["fogDepth","Дальность видимости",5,80,1]];for(const[g,_,m,p,x]of a){const b=document.createElement("label");b.className="lighting-field";const v=document.createElement("span");v.textContent=_;const w=document.createElement("output"),S=document.createElement("input");S.id="light-"+g,S.dataset.key=g,S.type=m===void 0?"color":"range",m!==void 0&&(S.min=m,S.max=p,S.step=x),b.append(v,w,S),r.append(b),S.addEventListener("input",()=>{i.set({[g]:S.type==="color"?S.value:Number(S.value)}),d(),o.textContent="Предпросмотр. Сохрани понравившийся вариант."})}let l=()=>{};if(n){const g=document.getElementById("grading-fields"),_={brightness:"Яркость",contrast:"Контраст",saturation:"Насыщенность",gamma:"Гамма / средние тона",temperature:"Температура: холоднее / теплее",tint:"Оттенок: зелёный / пурпурный",shadows:"Поднять / затемнить тени",highlights:"Яркость светлых участков",vignette:"Виньетка",splitStrength:"Сила окраски теней и света",shadowColor:"Цвет теней",highlightColor:"Цвет света"};for(const p of Object.keys(_)){const x=document.createElement("label");x.className="lighting-field";const b=document.createElement("span");b.textContent=_[p];const v=document.createElement("output"),w=document.createElement("input");w.id="grade-"+p,w.dataset.key=p;const S=bc[p];w.type=S?"range":"color",S&&([w.min,w.max,w.step]=S),x.append(b,v,w),g.append(x),w.oninput=()=>{n.set({[p]:S?Number(w.value):w.value}),l(),o.textContent="Цвет изменён. Сохрани понравившийся вариант."}}const m=document.getElementById("grade-enabled");l=()=>{for(const p of g.querySelectorAll("input"))p.value=n.value[p.dataset.key],p.previousElementSibling.value=p.type==="color"?p.value:Number(p.value).toFixed(2);m.checked=n.value.enabled},m.onchange=()=>{n.set({enabled:m.checked}),o.textContent=m.checked?"Цветокоррекция включена.":"Показана исходная картинка; значения ползунков остались прежними."},document.getElementById("grading-reset").onclick=()=>{n.reset(),l(),o.textContent="Исходный цвет. Нажми «Сохранить», чтобы закрепить."},document.getElementById("grading-preset").onchange=p=>{p.target.value&&(n.set(Uv[p.target.value]),l(),p.target.value="",o.textContent="Цветовой пресет применён.")}}const c=new URLSearchParams(location.search).get("editor")==="compositing";document.getElementById("grading-section").open=c,document.getElementById("light-section").open=!c;const u=document.getElementById("lighting-collapse");u.onclick=()=>{const g=s.classList.toggle("compact");document.getElementById("lighting-body").hidden=g,u.textContent=g?"Развернуть":"Свернуть",u.setAttribute("aria-expanded",String(!g))};const h=document.getElementById("light-shadows");h.onchange=()=>{i.set({shadows:h.checked}),o.textContent="Предпросмотр. Сохрани понравившийся вариант."};function d(){for(const g of r.querySelectorAll("input"))g.value=i.value[g.dataset.key],g.previousElementSibling.value=g.type==="color"?g.value:Number(g.value).toFixed(g.step==="0.01"?2:g.step==="0.1"?1:0);h.checked=i.value.shadows,l()}document.getElementById("lighting-open").onclick=()=>{e()!==!1&&(s.hidden=!1,d(),o.textContent="Игра на паузе. Изменения видны сразу.",document.getElementById("lighting-close").focus())};function f(){s.hidden=!0,t()}return document.getElementById("lighting-close").onclick=f,s.addEventListener("keydown",g=>{if(g.key==="Tab"){const _=[...s.querySelectorAll("button,input,select")].filter(x=>!x.disabled&&x.getClientRects().length),m=_[0],p=_.at(-1);g.shiftKey&&document.activeElement===m?(g.preventDefault(),p.focus()):!g.shiftKey&&document.activeElement===p&&(g.preventDefault(),m.focus())}g.key==="Escape"&&(g.stopPropagation(),f())}),document.getElementById("lighting-save").onclick=()=>{const g=i.save(),_=!n||n.save();o.textContent=g&&_?"Сохранено: свет и цвет на этом устройстве.":"Не удалось сохранить на устройстве. Скачай настройки файлом."},document.getElementById("lighting-reset").onclick=()=>{i.reset(),n?.reset(),d(),o.textContent="Вернул исходный свет. Нажми «Сохранить», чтобы закрепить."},document.getElementById("lighting-preset").onchange=g=>{g.target.value&&(i.set(Xy[g.target.value]),d(),g.target.value="",o.textContent="Пресет применён. Можно настроить дальше.")},document.getElementById("lighting-export").onclick=()=>{const g=URL.createObjectURL(new Blob([JSON.stringify({...i.export(),...n?{compositing:n.export()}:{}},null,2)],{type:"application/json"})),_=document.createElement("a");_.href=g,_.download="dvor-light-and-color.json",_.click(),setTimeout(()=>URL.revokeObjectURL(g),1e3),o.textContent="Файл настроек можно прислать мне для переноса в игру."},document.getElementById("lighting-import").onchange=async g=>{const _=g.target.files[0];if(_){try{if(_.size>1e5)throw Error("Файл слишком большой.");const m=JSON.parse(await _.text()),p=i.export(),x=n?.export();try{i.import(m),m.compositing&&n&&n.import(m.compositing)}catch(b){throw i.import(p),x&&n.import(x),b}d(),o.textContent="Настройки загружены. Нажми «Сохранить», чтобы закрепить."}catch(m){o.textContent=m.message}g.target.value=""}},{hide:f,isOpen:()=>!s.hidden}}class jy extends Is{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qy(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new fM(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=nr.extractUrlBase(e);o=nr.resolveURL(c,this.path)}else o=nr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new _d(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Nd){try{o[je.KHR_BINARY_GLTF]=new pM(e)}catch(h){s&&s(h);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new AM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:o[h]=new Jy;break;case je.KHR_DRACO_MESH_COMPRESSION:o[h]=new mM(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[h]=new gM;break;case je.KHR_MESH_QUANTIZATION:o[h]=new _M;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Ky(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $y{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ie(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],tn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new To(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new vd(u),c.distance=h;break;case"spot":c=new Um(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),zn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Jy{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Nt}extendParams(e,t,n){const s=[];e.color=new Ie(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,st))}return Promise.all(s)}}class Zy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Qy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(a,a)}return Promise.all(r)}}class eM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class tM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class nM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,st)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class iM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class sM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],tn),Promise.all(r)}}class rM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class oM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],tn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,st)),Promise.all(r)}}class aM{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class lM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class cM{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class uM{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class hM{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class dM{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class fM{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==vn.TRIANGLES&&c.mode!==vn.TRIANGLE_STRIP&&c.mode!==vn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new ne,m=new A,p=new Ke,x=new A(1,1,1),b=new Lo(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),b.setMatrixAt(v,_.compose(m,p,x));for(const v in l)if(v==="_COLOR_0"){const w=l[v];b.instanceColor=new So(w.array,w.itemSize,w.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);vt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Nd="glTF",Xs=12,Dh={JSON:1313821514,BIN:5130562};class pM{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Xs,r=new DataView(e,Xs);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Dh.JSON){const c=new Uint8Array(e,Xs+o,a);this.content=n.decode(c)}else if(l===Dh.BIN){const c=Xs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=kl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=kl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=gs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,tn,d)})})}}class gM{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _M{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Fd extends wr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,x=1-m,b=p-d+h;for(let v=0;v!==a;v++){const w=o[_+v+a],S=o[_+v+l]*u,R=o[g+v+a],I=o[g+v]*u;r[v]=x*w+b*S+m*R+p*I}return r}}const xM=new Ke;class vM extends Fd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return xM.fromArray(r).normalize().toArray(r),r}}const vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Uh={9728:en,9729:fn,9984:qh,9985:so,9986:Ys,9987:oi},Nh={33071:Mi,33648:vo,10497:Fn},Da={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yM={CUBICSPLINE:void 0,LINEAR:mr,STEP:pr},Ua={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new At({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),i.DefaultMaterial}function Oi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function SM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wM(i){let e;const t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Na(t.attributes):e=i.indices+":"+Na(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Na(i.targets[n]);return e}function Na(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Bl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function EM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const TM=new ne;class AM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ky,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Lm(this.options.manager):this.textureLoader=new Om(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _d(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Oi(r,a,s),zn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(nr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Da[s.type],a=gs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ot(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Da[s.type],c=gs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(x);b||(_=new c(a,p*f,s.count*f/u),b=new Xp(_,f/u),t.cache.add(x,b)),m=new sc(b,l,d%f/u,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),m=new Ot(_,l,g);if(s.sparse!==void 0){const p=Da.SCALAR,x=gs[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,w=new x(o[1],b,s.sparse.count*p),S=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new Ot(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,I=w.length;R<I;R++){const T=w[R];if(m.setX(T,S[R*l]),l>=2&&m.setY(T,S[R*l+1]),l>=3&&m.setZ(T,S[R*l+2]),l>=4&&m.setW(T,S[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Uh[d.magFilter]||fn,u.minFilter=Uh[d.minFilter]||oi,u.wrapS=Nh[d.wrapS]||Fn,u.wrapT=Nh[d.wrapT]||Fn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==en&&u.minFilter!==fn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ft(_);m.needsUpdate=!0,d(m)}),t.load(nr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),zn(h,o),h.userData.mimeType=o.mimeType||EM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Do,Wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new dd,Wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return At}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const h=s[je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],tn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,st)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pt);const u=r.alphaMode||Ua.OPAQUE;if(u===Ua.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ua.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Nt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Nt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Nt){const h=r.emissiveFactor;a.emissive=new Ie().setRGB(h[0],h[1],h[2],tn)}return r.emissiveTexture!==void 0&&o!==Nt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,st)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),zn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Oi(s,h,r),h})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Fh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=wM(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Fh(new yt,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?MM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const x=c[f];if(m.mode===vn.TRIANGLES||m.mode===vn.TRIANGLE_STRIP||m.mode===vn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Yp(_,x):new Ce(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===vn.TRIANGLE_STRIP?p.geometry=lh(p.geometry,ed):m.mode===vn.TRIANGLE_FAN&&(p.geometry=lh(p.geometry,Tl));else if(m.mode===vn.LINES)p=new Qp(_,x);else if(m.mode===vn.LINE_STRIP)p=new lc(_,x);else if(m.mode===vn.LINE_LOOP)p=new em(_,x);else if(m.mode===vn.POINTS)p=new cc(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&SM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),zn(p,r),m.extensions&&Oi(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Oi(s,h[0],r),h[0];const d=new It;r.extensions&&Oi(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(nt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new No(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new ne;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new oc(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let b=0,v=d.length;b<v;b++){const w=d[b],S=f[b],R=g[b],I=_[b],T=m[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const M=n._createAnimationTracks(w,S,R,I,T);if(M)for(let y=0;y<M.length;y++)p.push(M[y])}const x=new Em(r,void 0,p);return zn(x,s),x})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,TM)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new hd:c.length>1?u=new It:c.length===1?u=c[0]:u=new vt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),zn(u,r),r.extensions&&Oi(n,u,r),r.matrix!==void 0){const h=new ne;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new It;n.name&&(r.name=s.createUniqueName(n.name)),zn(r,n),n.extensions&&Oi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Wn||d instanceof Ft)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];vi[r.path]===vi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(vi[r.path]){case vi.weights:c=ws;break;case vi.rotation:c=Es;break;case vi.translation:case vi.scale:c=Ts;break;default:n.itemSize===1?c=ws:c=Ts;break}const u=s.interpolation!==void 0?yM[s.interpolation]:mr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+vi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Bl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Es?vM:Fd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function RM(i,e,t){const n=e.attributes,s=new mn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){const u=Bl(gs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new A,l=new A;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Bl(gs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Yn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Fh(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=kl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return et.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),zn(i,e),RM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?bM(i,e.targets,t):i})}function CM(i){const e=new Map,t=new Map,n=i.clone();return Od(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Od(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Od(i.children[n],e.children[n],t)}function kd(i,e){const t=e*.2,n=e*.8;return Math.max(0,Math.min(1,(i-t)/.22,(n-i)/.18))}function Bd(i,e){const t=kd(i,e);return t*t*(3-2*t)}const yn={jab:{duration:.65,cooldown:.65,hitAt:.7,damage:14,range:1.35,label:"Кулак"},kick:{duration:.7,cooldown:.8,hitAt:9/17,damage:25,range:1.9,label:"Пинок"},burp:{duration:1.2,cooldown:2.5,hitAt:.38,damage:24,range:2.3,label:"Отрыжка"},spray:{duration:1.4,cooldown:2.4,hitAt:.28,activeUntil:.8,damage:34,range:3.2,label:"Струя"}};function PM(i,e,t){if(e.down>0)return!1;const n=e.x-i.x,s=e.z-i.z,r=i.heading??i.facing*Math.PI/2,o=n*Math.sin(r)+s*Math.cos(r),a=Math.abs(n*Math.cos(r)-s*Math.sin(r));return t==="burp"?o>.05&&o<yn.burp.range&&a<.45+o*.3:t==="spray"?o>.15&&o<yn.spray.range*(Number.isFinite(i.attackTime)?Bd(i.attackTime,i.attackSpec?.duration??yn.spray.duration):1)&&a<.38+o*.16:Math.hypot(n,s)<(i.attackSpec?.range??yn[t].range)&&o>-.15}function Oh(i){if(!Number.isSafeInteger(i)||i<0)throw new RangeError("Invalid stage");const e=i*26+1,t=i+1,n=i===0?1:Math.min(4,2+Math.floor(i/4)),s=i<3?1:Math.min(3,1+Math.floor(i/4)),r=Array.from({length:s},(o,a)=>Array.from({length:n},(l,c)=>({type:i===0?"fighter":i>=2&&c===0&&(i%3===2||t%5===0)?"bruiser":(i+a+c)%2?"runner":"fighter",side:i<2?1:c%2?-1:1,z:[-.9,.8,0,1.4][(i+a+c)%4],delay:c*.4})));return{id:`street-${t}`,index:i,number:t,title:`Участок ${t}`,center:e,halfWidth:10,trigger:e-3,left:e-10,right:e+10,waves:r,scaling:{health:1+Math.min(1.5,i*.065),damage:1+Math.min(1,i*.035),speed:1+Math.min(.35,i*.012),windup:1-Math.min(.22,i*.008)}}}class IM{constructor(){this.index=0,this.active=!1,this.wave=0,this.phase="explore",this.delay=0,this.goTime=0,this.current=Oh(0)}get arena(){return this.active?this.current:null}get bounds(){return this.active?[this.current.left,this.current.right]:[this.current.center-36,this.current.right+20]}update(e,t,n){if(e<=0)return null;if(this.goTime=Math.max(0,this.goTime-e),!this.active)return t>=this.current.trigger?(this.active=!0,this.wave=0,this.phase="incoming",this.delay=1.25,this.goTime=0,{type:"warning",arena:this.current}):null;const s=this.current;if(this.phase==="incoming"){if(this.delay=Math.max(0,this.delay-e),this.delay===0)return this.phase="fight",{type:"spawn",arena:s,wave:this.wave,enemies:s.waves[this.wave]}}else if(!n.some(r=>r.encounter===s.id&&r.health>0))return this.wave+1<s.waves.length?(this.wave++,this.phase="incoming",this.delay=1.25,{type:"warning",arena:s}):(this.index++,this.active=!1,this.phase="explore",this.goTime=5,this.current=Oh(this.index),{type:"clear",arena:s});return null}}class LM{constructor(e,{reducedMotion:t=!1}={}){this.camera=e,this.focus=new A(-7.3,1,0),this.lead=.7,this.distance=6.2,this.shake=0,this.shakeClock=0,this.shakeOverride=null,this.savedBase=null,this.framingCamera=e.clone(),this.reducedMotion=t,this.position=new A,this.target=new A}cinematic(e,t,n,s,r,o){this.restoreBase();const a=r<650,l=r/o,c=new A((e.x+(t.root?.position.x??t.x))/2,1.05,(e.z+t.z)/2),u=Math.max(a?6.5:4.8,1.35/(Math.tan(nt.degToRad(45/2))*l)),h=(a?.55:0)+(this.reducedMotion?0:.18*Math.sin(Math.min(1,n/2.8)*Math.PI)),d=c.clone().add(new A(Math.sin(h)*u,u*.14,Math.cos(h)*u)),f=1-Math.exp(-s*5);this.focus.lerp(c,f),this.camera.position.lerp(d,f),this.camera.lookAt(this.focus),this.camera.fov=nt.lerp(this.camera.fov,45,f),this.camera.updateProjectionMatrix(),this.applyShake(s)}isShakeEnabled(){return this.shakeOverride??!this.reducedMotion}setShakeEnabled(e){this.shakeOverride=!!e,e||(this.shake=0)}restoreBase(){this.savedBase&&(this.camera.position.copy(this.savedBase.position),this.camera.quaternion.copy(this.savedBase.quaternion))}impact(e=.18){this.isShakeEnabled()&&Number.isFinite(e)&&e>0&&(this.shake=Math.min(.3,this.shake+e))}applyShake(e){const t=this.camera;if(this.savedBase??={position:new A,quaternion:new Ke},this.savedBase.position.copy(t.position),this.savedBase.quaternion.copy(t.quaternion),this.framingCamera.copy(t,!1),this.framingCamera.updateMatrixWorld(!0),this.shakeClock+=Math.max(0,e),this.shake=Math.max(0,this.shake-Math.max(0,e)*1.25),!this.isShakeEnabled()||this.shake===0)return;const n=(this.shake/.3)**2,s=this.shakeClock,r=new A(.09*n*(Math.sin(s*64+1.1)+.4*Math.sin(s*101))/1.4,.065*n*Math.cos(s*79+.4),.025*n*Math.sin(s*53));r.applyQuaternion(this.savedBase.quaternion),t.position.add(r),t.quaternion.multiply(new Ke().setFromEuler(new nn(.008*n*Math.sin(s*71),.006*n*Math.cos(s*59),.018*n*Math.sin(s*67+.8))))}update({player:e,enemies:t=[],arena:n=null,time:s=0,dt:r=.016,width:o=1e3,height:a=700}){this.restoreBase();const l=o<650,c=o/a,u=1-Math.exp(-r*3.7);this.lead=nt.lerp(this.lead,e.facing*(e.moving?.7:.25),u);const h=n?l?7:5.8:l?7.6:6.2;this.distance=nt.lerp(this.distance,h,1-Math.exp(-r*2.8));let d=l?53:40,f=e.x+this.lead;if(n){d=Math.min(d,nt.radToDeg(2*Math.atan((n.halfWidth-2)/(this.distance*1.25*c))));const _=this.distance*1.25*Math.tan(nt.degToRad(d/2))*c;f=l?e.x+this.lead*.45:n.center,f=nt.clamp(f,n.left+_+1,n.right-_-1)}this.target.set(f,1,e.z*.6),this.focus.lerp(this.target,u),this.position.set(this.focus.x+1.2,this.focus.y+this.distance*.13,this.focus.z+this.distance),this.camera.position.lerp(this.position,1-Math.exp(-r*7)),this.camera.lookAt(this.focus);const g=nt.lerp(this.camera.fov,d,u);Math.abs(this.camera.fov-g)>.001&&(this.camera.fov=g,this.camera.updateProjectionMatrix()),this.applyShake(r)}}const DM={runner:{label:"Задира",health:60,speed:2.35,damage:9,windup:.42,recovery:1.15,range:1.45,color:"#d59861"},fighter:{label:"Боец",health:80,speed:1.7,damage:14,windup:.65,recovery:1.35,range:1.65,color:"#d68664"},bruiser:{label:"Громила",health:110,speed:1.05,damage:24,windup:1,recovery:2,range:2,color:"#c16c84"}},zl={jab:0,kick:14,spray:32,burp:24,dodge:16};function zd(i,e){const t=zl[e];return t===void 0||i.stamina<t?!1:(i.stamina-=t,t>0&&(i.regenDelay=.45),!0)}function UM(i,e){if(e<=0)return;const t=i.regenDelay;i.regenDelay=Math.max(0,t-e),i.stamina=Math.min(100,i.stamina+Math.max(0,e-t)*28)}function NM(i,e){const t=e.x-i.x,n=e.z-i.z,s=Math.hypot(t,n);return e.invulnerable>0||s>=i.spec.range?!1:i.type==="bruiser"||s<.01||(t*i.aimX+n*i.aimZ)/s>.25}function rr(i,e,t=0){return Math.hypot(i,e)>.001?Math.atan2(i,e):t}function Fa(i,e,t,n=14){const s=Math.atan2(Math.sin(e-i),Math.cos(e-i));return i+s*(1-Math.exp(-n*t))}const FM=2.8,kh=1.3;function ho(i,e){return Math.min(100,Math.max(0,i+e))}function OM(i,e){return e.filter(t=>t.health>0&&!t.entering&&!(t.down>0)&&Math.hypot(t.x-i.x,t.z-i.z)<=2.8).sort((t,n)=>Math.hypot(t.x-i.x,t.z-i.z)-Math.hypot(n.x-i.x,n.z-i.z))[0]??null}const qs=i=>(i=Math.min(1,Math.max(0,i)),i*i*(3-2*i));function kM(i){const e=i>=kh;return{punch:i<.65?.14*qs(i/.65):i<1.3?.14+.56*qs((i-.65)/.65):i<1.65?.7:.7+.3*qs((i-1.65)/.8),contact:e,approach:qs(i/.55),fall:qs((i-kh)/.85),done:i>=FM}}function BM(i,e,t){let s=e.x>=i.x?1:-1;return(e.x-s*.65<t[0]+.1||e.x-s*.65>t[1]-.1)&&(s=-s),{side:s,endX:Math.max(t[0]+.1,Math.min(t[1]-.1,e.x-s*.65))}}class zM{constructor(e){this.root=new It,e.add(this.root),this.root.visible=!1,this.growth=0,this.curve=new fc(new A,new A(0,.4,1.35),new A(0,-.8,3.05)),this.geometry=new _c(this.curve,30,.018,5,!1),this.geometry.attributes.position.setUsage(Mo),this.jet=new Ce(this.geometry,new Nt({color:"#e7c648",transparent:!0,opacity:.75,depthWrite:!1})),this.jet.frustumCulled=!1,this.root.add(this.jet),this.positions=new Float32Array(96);const t=new yt;t.setAttribute("position",new Ot(this.positions,3).setUsage(Mo)),this.drops=new cc(t,new Do({color:"#f4d85d",size:.04,transparent:!0,opacity:.7,depthWrite:!1})),this.drops.frustumCulled=!1,this.root.add(this.drops),this.splash=new Ce(new hi(.08,.23,20),new Nt({color:"#cdb745",transparent:!0,opacity:.3,side:Pt,depthWrite:!1})),this.splash.rotation.x=-Math.PI/2,this.root.add(this.splash),this.point=new A,this.tangent=new A,this.normal=new A}update(e,t,n){const s=e.attackSpec?.duration??1.4,r=t?kd(e.attackTime,s):0;if(this.growth=r,this.root.visible=r>0,!this.root.visible)return;this.anchor??=Ec(e,/shtani/i,[.5,.82,1]),this.anchor?this.anchor.get(this.root.position):this.root.position.set(e.x,.85,e.z),this.root.rotation.y=e.heading,this.root.position.x+=Math.sin(e.heading)*.012,this.root.position.z+=Math.cos(e.heading)*.012;const o=this.root.position.y;this.curve.v2.y=.025-o;const a=this.point,l=this.tangent,c=this.normal,u=this.geometry.attributes.position,h=Bd(e.attackTime,s);for(let d=0;d<=30;d++){const f=d/30*h;this.curve.getPoint(f,a),this.curve.getTangent(f,l),c.set(0,-l.z,l.y);for(let g=0;g<=5;g++){const _=g/5*Math.PI*2,m=.018*Math.min(1,r*3);u.setXYZ(d*6+g,a.x+Math.cos(_)*m,a.y+c.y*Math.sin(_)*m,a.z+c.z*Math.sin(_)*m)}}u.needsUpdate=!0,this.jet.material.opacity=.75*Math.min(1,r*4);for(let d=0;d<32;d++){const f=(d/32+n*1.8)%1*h;this.curve.getPoint(f,a),a.x+=Math.sin(d*11+n*14)*.035*f,a.y+=Math.cos(d*7+n*12)*.025*f,a.toArray(this.positions,d*3)}this.drops.geometry.attributes.position.needsUpdate=!0,this.drops.material.opacity=.7*r,this.splash.visible=h>.94,this.splash.position.set(0,.026-o,3.05),this.splash.scale.setScalar(r*(1+.1*Math.sin(n*21))),this.splash.material.opacity=.3*r}}function HM(){let i=8141;const e=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),t=()=>{const m=document.createElement("canvas");return m.width=m.height=512,m},n=t(),s=t(),r=t(),o=t(),a=t(),l=n.getContext("2d"),c=s.getContext("2d");l.fillStyle="#625e54",l.fillRect(0,0,512,512),c.fillStyle="#555",c.fillRect(0,0,512,512);const u=["#876655","#785a4e","#936f5b","#755449","#826357"];for(let m=0;m<16;m++)for(let p=-1;p<9;p++){const x=p*64+m%2*32,b=m*32;l.fillStyle=u[Math.floor(e()*u.length)],l.fillRect(x+2,b+2,60,28),l.fillStyle="#c5aa812b",l.fillRect(x+3,b+3,58,2),c.fillStyle="#bbb",c.fillRect(x+2,b+2,60,28)}function h(m,p){const x=m.getContext("2d"),b=x.getImageData(0,0,512,512);for(let v=0;v<b.data.length;v+=4){const w=(e()-.5)*p;for(let S=0;S<3;S++)b.data[v+S]+=w}x.putImageData(b,0,0)}h(n,25);const d=r.getContext("2d");d.fillStyle="#65665f",d.fillRect(0,0,512,512),h(r,24);for(let m=0;m<35;m++){let p=e()*512,x=e()*512;d.strokeStyle=m%2?"#383d3699":"#92918355",d.lineWidth=1+e(),d.beginPath(),d.moveTo(p,x);for(let b=0;b<8;b++)p+=(e()-.5)*45,x+=e()*25,d.lineTo(p,x);d.stroke()}for(let m=0;m<18;m++)d.fillStyle="#333a3020",d.beginPath(),d.ellipse(e()*512,e()*512,20+e()*65,10+e()*25,e()*3,0,Math.PI*2),d.fill();const f=o.getContext("2d");f.fillStyle="#929185",f.fillRect(0,0,512,512),h(o,35),f.strokeStyle="#4b514746",f.lineWidth=3;for(let m=0;m<=512;m+=128)f.strokeRect(m,0,128,512),f.strokeRect(0,m,512,128);const g=a.getContext("2d");g.fillStyle="#707d69",g.fillRect(0,0,512,512);for(let m=0;m<130;m++)g.fillStyle=m%2?"#654735":"#8f6848",g.beginPath(),g.ellipse(e()*512,e()*512,e()*18,e()*38,e()*4,0,Math.PI*2),g.fill();h(a,20);const _=(m,p=!0)=>{const x=new ln(m);return x.wrapS=x.wrapT=Fn,x.colorSpace=p?st:ri,x.anisotropy=4,x};return{brick:_(n),brickBump:_(s,!1),asphalt:_(r),concrete:_(o),rust:_(a)}}class VM{constructor(e,{textured:t=!0,editable:n=!1}={}){if(this.editable=n,this.scene=e,this.chunks=new Map,this.unit=new sn(1,1,1),this.plane=new pn(1,1),this.body=new pc([[0,0],[.062,0],[.072,.02],[.072,.28],[.06,.31],[.03,.34],[.027,.45],[.031,.46],[0,.46]].map(([s,r])=>new pe(s,r)),10),this.label=new ui(.073,.073,.12,10,1,!0),this.ring=new Vi(.17,.015,5,20),this.materials=new Map,this.geometries=new Map,this.textures=t?HM():{},this.chunkIndex=null,this.labelMaterial=new At({color:"#cdbf94",roughness:.94}),this.labelMaterial.name="Bottle_label",typeof document<"u"){const s=document.createElement("canvas");s.width=128,s.height=64;const r=s.getContext("2d");r.fillStyle="#cdbf94",r.fillRect(0,0,128,64),r.fillStyle="#753c31",r.fillRect(0,23,128,18),r.fillStyle="#e6d5b0",r.font="bold 10px Arial",r.textAlign="center",r.fillText("КВАС",32,36),r.fillText("КВАС",96,36),this.labelMaterial.color.set("#ffffff"),this.labelMaterial.map=new ln(s),this.labelMaterial.map.colorSpace=st}}material(e,t="plain"){const n=t+e;if(!this.materials.has(n)){const s=this.textures,r=new At({color:e,roughness:t==="metal"?.76:.96});t==="brick"&&(r.map=s.brick,r.bumpMap=s.brickBump,r.bumpScale=.028),["asphalt","concrete","rust"].includes(t)&&(r.map=s[t],r.bumpMap=s[t],r.bumpScale=t==="asphalt"?.025:.012),this.materials.set(n,r)}return this.materials.get(n)}metricBox(e,t,n,s){const r=[e,t,n,s].join(":");if(!this.geometries.has(r)){const o=new sn(e,t,n),a=o.attributes.position,l=o.attributes.normal,c=o.attributes.uv;for(let u=0;u<a.count;u++)Math.abs(l.getY(u))>.5?c.setXY(u,a.getX(u)/s,a.getZ(u)/s):c.setXY(u,(Math.abs(l.getX(u))>.5?a.getZ(u):a.getX(u))/s,a.getY(u)/s);this.geometries.set(r,o)}return this.geometries.get(r)}setEnvironment(e){for(const t of this.chunks.values()){this.scene.remove(t.group);for(const n of t.local)n.dispose()}this.chunks.clear(),this.template=e,this.chunkIndex=null,e.traverse(t=>{t.isMesh&&(t.castShadow=!t.userData.noShadow,t.receiveShadow=!0)})}addBottles(e,t){const n=[];for(let s=0;s<5;s++){const r=new It,o=new Ce(this.body,this.material("#756033")),a=new Ce(this.label,this.labelMaterial),l=new Ce(this.ring,this.material("#e7c25c"));if(a.position.y=.18,l.rotation.x=-Math.PI/2,l.position.y=.018,r.add(o,a,l),this.editable)for(const h of[o,a,l])h.userData.module={kind:"pickup",id:String(s)};const c=2+s*4.7,u=Math.sin(t*3+s*2.1)*1.5;r.position.set(c,0,u),e.add(r),n.push({mesh:r,x:t*26+c,z:u,taken:!1})}return n}makeChunk(e){if(this.template){const m=this.templateForChunk?.(e)??this.template,p=new It;p.position.x=e*26;const x=m.clone(!0),b=[];x.traverse(w=>{w.updateMatrix(),w.matrixAutoUpdate=!1,w.isInstancedMesh&&b.push(w)}),p.add(x);const v=this.addBottles(p,e);return this.scene.add(p),{group:p,bottles:v,local:b}}const t=new It,n=[],s=[],r=[];t.position.x=e*26;let o={kind:"road",id:"road"};const a=(m,p)=>o={kind:m,id:String(p)},l=(m,p,x,b,v,w,S,R="plain")=>{const I=["brick","asphalt","concrete","rust"].includes(R),T=I?this.metricBox(m,p,x,R==="asphalt"?4:2):this.unit,M=new Ce(T,this.material(b,R));return I||M.scale.set(m,p,x),M.position.set(v,w,S),this.editable&&(M.userData.module=o),r.push(M),M};l(26,.2,18,"#c3c3bd",13,-.1,0,"asphalt"),l(26,.05,1.7,"#b5b5a7",13,-.03,-2.85,"concrete"),l(26,.18,.25,"#868a7c",13,-.02,-1.98,"concrete"),l(26,.05,1.6,"#a6a99b",13,-.035,3.3,"concrete"),l(26,.18,.25,"#858b7c",13,-.02,2.5,"concrete");const c=["#c4b8ab","#c1b1a3","#b2ada2","#c1b3a7"];for(let m=0;m<4;m++){const p=3.25+m*6.5,x=6.8+(Math.abs(e)+m)%3*.5,b=c[((e+m)%4+4)%4];a("building",m),l(6.5,x,3,b,p,x/2,-5.6,"brick"),l(6.5,.18,3.15,"#797b70",p,x,-5.6,"concrete"),l(6.5,.45,.08,"#535c50",p,.22,-4.06);for(let v=0;v<4;v++)for(let w=0;w<3;w++){const S=p-1.8+w*1.8,R=1.25+v*1.65;if(a(v===0&&w===1?"door":"window",m+":"+v+":"+w),v===0&&w===1){l(.95,2,.15,m%2?"#48574e":"#66514a",S,1,-4,"rust"),l(1.12,.12,.22,"#858a7d",S,2,-3.96,"concrete"),l(.055,.06,.05,"#b4aa83",S+.31,1,-3.89);continue}if(l(.93,1.25,.11,"#777e73",S,R,-4.01),l(.75,1.05,.14,"#343e3b",S,R,-3.98),l(.035,1.05,.17,"#616b62",S,R,-3.97),l(.75,.035,.17,"#616b62",S,R,-3.97),l(1,.09,.25,"#8d9183",S,R-.64,-3.94,"concrete"),w===2&&v===1){a("air_conditioner",m),l(.65,.38,.4,"#9a9b8c",S,R-.36,-3.72);for(let I=0;I<4;I++)l(.52,.023,.04,"#525d54",S,R-.48+I*.07,-3.5)}}if(a("fire_escape",m),m%2===0)for(let v=1;v<=3;v++){const w=v*1.65+.25;l(2.5,.09,.7,"#343d35",p,w,-3.65,"metal"),l(2.5,.05,.05,"#323d35",p,w+.7,-3.28,"metal");for(let S=0;S<6;S++)l(.035,.7,.035,"#343d35",p-1.2+S*.48,w+.35,-3.28,"metal");for(const S of[-1.2,1.2])l(.045,.7,.65,"#343d35",p+S,w+.35,-3.65,"metal");if(v<3){for(const S of[-.32,.32])l(.04,1.95,.05,"#343d35",p+.6+S,w+.86,-3.42,"metal").rotation.z=-.38;for(let S=0;S<8;S++)l(.7,.035,.06,"#343d35",p+.3+S*.09,w+.13+S*.21,-3.42,"metal")}if(v===2&&(e+m)%3===0)for(let S=0;S<3;S++)l(.4,.55,.025,S%2?"#9d9e8c":"#c5c0a9",p-.65+S*.45,w+.4,-3.22)}if(a("downpipe",m),l(.07,x,.1,"#48574c",p+2.9,x/2,-3.97,"metal"),a("pallet",m),m===1){for(let v=0;v<4;v++)l(.1,1.1,.08,"#81775c",p-1+v*.25,.57,-3.7).rotation.z=-.12;l(1,.08,.08,"#81775c",p-.6,.35,-3.65)}}for(const m of[4,17])a("streetlight",m),l(.1,4.2,.1,"#657365",m,2.1,-2.5,"metal"),l(1.25,.08,.1,"#657365",m+.55,4.16,-2.5,"metal"),l(.6,.15,.3,"#9a9e8d",m+1.05,4.06,-2.5),l(.26,.22,.26,"#696f5e",m,.11,-2.5);a("bench",0),l(1.7,.12,.6,"#76654c",11,.55,-2.7),l(1.7,.55,.1,"#76654c",11,.86,-3);for(const m of[-.6,.6])l(.08,.55,.4,"#435347",11+m,.27,-2.7,"metal");a("dumpster",0),l(.85,1.05,.7,"#b0b8a0",21,.52,-2.7,"rust"),l(.94,.07,.78,"#5d6c59",21,1.07,-2.7,"metal");for(let m=0;m<15;m++){a("litter",m);const p=(m*7.13+Math.abs(e)*.9)%26,x=m%2?-1.7-m%3*.14:2.15;l(.16+m%3*.04,.009,.11,m%4?"#b3b2a0":"#815243",p,.012,x).rotation.y=m*2.1}const u=document.createElement("canvas");u.width=512,u.height=128;const h=u.getContext("2d");h.fillStyle="#363e34",h.fillRect(0,0,512,128),h.fillStyle="#c8c3a9",h.font="bold 34px Arial",h.textAlign="center",h.fillText(["ДВОР № 7","ПРОХОД","ДВОРОВЫЕ ИСТОРИИ"][(e%3+3)%3],256,76);const d=new ln(u);d.colorSpace=st;const f=new Nt({map:d}),g=new Ce(this.plane,f);g.scale.set(2.5,.625,1),g.position.set(8,2.8,-3.89),this.editable&&(g.userData.module={kind:"sign",id:"sign"}),t.add(g),s.push(d,f);const _=new Map;for(const m of r){const p=m.geometry.uuid+m.material.uuid;_.has(p)||_.set(p,[]),_.get(p).push(m)}for(const m of _.values()){const p=m[0],x=new Lo(p.geometry,p.material,m.length);this.editable&&(x.userData.modules=m.map(b=>b.userData.module));for(let b=0;b<m.length;b++)m[b].updateMatrix(),x.setMatrixAt(b,m[b].matrix);x.castShadow=!0,x.receiveShadow=!0,x.computeBoundingSphere(),t.add(x),s.push(x)}return n.push(...this.addBottles(t,e)),this.scene.add(t),{group:t,bottles:n,local:s}}update(e){const t=Math.floor(e/26);if(t!==this.chunkIndex){this.chunkIndex=t;for(let n=t-2;n<=t+2;n++)this.chunks.has(n)||this.chunks.set(n,this.makeChunk(n));for(const[n,s]of this.chunks)if(Math.abs(n-t)>2){this.scene.remove(s.group);for(const r of s.local)r.dispose();this.chunks.delete(n)}}}nearestBottle(e,t=.95){let n=null;for(const s of this.chunks.values())for(const r of s.bottles){const o=Math.hypot(r.x-e.x,r.z-e.z);!r.taken&&o<t&&(t=o,n=r)}return n}takeBottle(e,t){return!t||t.taken||!Array.from(this.chunks.values()).some(n=>n.bottles.includes(t))||Math.hypot(t.x-e.x,t.z-e.z)>=.95?!1:(t.taken=!0,t.mesh.visible=!1,!0)}collect(e){let t=0;for(const n of this.chunks.values())for(const s of n.bottles)!s.taken&&Math.hypot(s.x-e.x,s.z-e.z)<.65&&(s.taken=!0,s.mesh.visible=!1,t++);return t}}class GM{constructor(e){this.scene=e;const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),s=n.createRadialGradient(64,64,5,64,64,64);s.addColorStop(0,"rgba(0,0,0,.55)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,128,128),this.geometry=new pn(1,1),this.material=new Nt({map:new ln(t),transparent:!0,depthWrite:!1})}add(){const e=new Ce(this.geometry,this.material);return e.rotation.x=-Math.PI/2,this.scene.add(e),e}update(e){const t=e.shadow;t&&(t.visible=e.root.visible,t.position.set(e.root.position.x,.012,e.root.position.z),t.scale.set(.9+Math.max(0,e.root.position.y)*.2,.6,1))}}const Hd={mode:"free-preview",async request(){return{completed:!0}}};async function WM(i,e,t,n=3e4){let s;try{return(await Promise.race([Promise.resolve().then(()=>i.request({placement:e,runId:t})),new Promise(r=>{s=setTimeout(()=>r({completed:!1}),n)})]))?.completed===!0}catch{return!1}finally{clearTimeout(s)}}const Vd="bomzh:endless-record:v1",Ro=i=>Number.isSafeInteger(i)&&i>=0;function Gd(i){try{const e=JSON.parse((i??globalThis.localStorage).getItem(Vd));return e&&Ro(e.levels)&&Ro(e.score)?e:{levels:0,score:0}}catch{return{levels:0,score:0}}}function XM(i,e){const t=Gd(e);if(!Ro(i.levels)||!Ro(i.score)||!(i.levels>t.levels||i.levels===t.levels&&i.score>t.score))return t;const s={levels:i.levels,score:i.score};try{(e??globalThis.localStorage).setItem(Vd,JSON.stringify(s))}catch{}return s}function Wd(i,e=0){i.updateMatrixWorld(!0);const t=new yd,n=new yi(new A(0,0,1),-e),s=new A,r=[];for(const o of[-1,1])for(const a of[-1,1])t.setFromCamera(new pe(o,a),i),t.ray.intersectPlane(n,s)&&r.push(s.x);return[Math.min(...r),Math.max(...r)]}function qM(i,e,t){const n=[];for(const s of[-1.4,1.4])for(const r of[0,3.2])for(const o of[-.6,.6])n.push(new A(e+s,r,t+o).project(i).x);return[Math.min(...n),Math.max(...n)]}function YM(i,e,t){let s=Wd(i,t)[e<0?0:1]+e*2.5;for(let r=0;r<20;r++){const o=qM(i,s,t);if(e<0?o[1]<-1.15:o[0]>1.15)return{x:s,z:t,side:e,projected:o};s+=e*2}throw new Error("Could not locate an offscreen entrance")}const Q=i=>document.getElementById(i),Ac=new URLSearchParams(location.search).get("location");let Xn=Ac==="entrance"?"entrance":"street";if(!Ac)try{localStorage.getItem("bomzh:starting-location")==="entrance"&&(Xn="entrance")}catch{}let bn=Xn,us=null,fo=[],jt=null,qt=null;const jM=Ac==="courtyard",Mr=jv();Ul(Mr,"entrance");const Rc=["lighting","compositing"].includes(new URLSearchParams(location.search).get("editor")),_s=new Nv;Q("lighting-open").hidden=!Rc;const xt=new ic;xt.background=new Ie("#92968d");xt.fog=new nc("#92968d",24,62);const Gi=Ny(new URLSearchParams(location.search).get("quality"),innerWidth,devicePixelRatio),Er=Gi.lowQuality,Xd=new Dy(Gi.pixelRatio),St=new Iv({canvas:Q("game"),antialias:!Er,powerPreference:"high-performance"});St.setPixelRatio(Gi.pixelRatio);St.shadowMap.enabled=!Er;St.shadowMap.type=Xl;St.shadowMap.autoUpdate=!0;St.shadowMap.needsUpdate=!0;St.outputColorSpace=st;St.toneMapping=Wh;St.toneMappingExposure=1.08;const Dn=new Yt(40,1,.1,100),Oa=Dn.clone(),Rn=new Hy(St,{grading:_s,lowQuality:Er,samples:Gi.samples,enabled:new URLSearchParams(location.search).get("dof")==="on"}),Bh=new A,Sn=new LM(Dn,{reducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches});try{const i=localStorage.getItem("bomzh:camera-shake:v1");(i==="on"||i==="off")&&Sn.setShakeEnabled(i==="on")}catch{}Q("camera-shake").checked=Sn.isShakeEnabled();Q("camera-shake").onchange=i=>{Sn.setShakeEnabled(i.target.checked);try{localStorage.setItem("bomzh:camera-shake:v1",i.target.checked?"on":"off")}catch{}};const Cc=new xd("#e1e4e2","#696a67",2.6);xt.add(Cc);const wn=new To("#f1e8df",2.2);wn.position.set(-8,14,6);wn.castShadow=!0;wn.shadow.mapSize.set(Gi.shadowSize,Gi.shadowSize);Object.assign(wn.shadow.camera,{left:-18,right:18,top:14,bottom:-14,far:45});wn.shadow.bias=-.001;wn.shadow.normalBias=.025;wn.shadow.radius=3;xt.add(wn,wn.target);const Ds=new qy({scene:xt,renderer:St,sun:wn,ambient:Cc,lowQuality:Er});new URLSearchParams(location.search).get("lighting")==="reference"&&Ds.reset();const KM=new $v({scene:xt,lighting:Ds,sun:wn,ambient:Cc,renderer:St}),$M=i=>new At({color:i,roughness:.92}),Hl=new GM(xt),po=new zM(xt),qd=new Uy(xt),xs=new Gv(xt),Co=new Ry(xt),JM=new Dv(xt,{lowQuality:Er}),Yd=new Ay(xt),an=new Py(xt),Nn=new VM(xt,{textured:!1});Nn.update(-8);const jd=new Jv(xt,Nn),ke={health:100,bottles:0,score:0,defeated:0,bruisersDefeated:0,over:!1},C={x:-8,z:.5,facing:1,heading:Math.PI/2,attack:null,attackTime:0,cooldowns:{jab:0,kick:0,spray:0,burp:0},queuedAttack:null,stun:0,combo:0,lastJab:-10,invulnerable:0,stamina:100,regenDelay:0,dodge:0,dodgeCooldown:0,dashX:1,dashZ:0},wt=new ey;wt.beginRun(globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`);const or=new Zv;let on=null,ar=null,Ri=!1,Kd=!1,Si=!1;const ut=new IM;let $d=null,gt=null,Zt=0,Hi=-8,dt=!1,br=Gd();const ls=[],mo=[],Dt=[],_t=new Set;let Jd=0,mt=0,Zd=0,ni=null,go=!1,Ct=!1;function Pc(i){if(jM&&i<=0)return{courtyard:!0,variant:Math.max(0,fs.indexOf(new URLSearchParams(location.search).get("yard")))};const e=Ll(i,Xn);return bn==="street"&&i>=0&&e.location==="entrance"?{...e,courtyard:!0}:e}function Ic(i){return bn==="street"&&!!Pc(Math.floor(i/26)).courtyard}function ka(i){if(!Ic(i))return-2;const e=(i%26+26)%26;return-2-1.5*Math.max(0,Math.min(1,(e-4.8)/2,(21.2-e)/2))}function Po(){const i=bn==="street"&&Ic(C.x)?Ad[Pc(Math.floor(C.x/26)).variant]:Cd[bn];Q("location-name").textContent=i,document.querySelectorAll("[data-start-location]").forEach(e=>{e.classList.toggle("selected",e.dataset.startLocation===Xn),e.setAttribute("aria-pressed",String(e.dataset.startLocation===Xn)),e.disabled=mt>0})}function Qd(i){bn=i;for(const e of Dt)e.health<=0&&(e.corpseAge=4,e.root.visible=!1,e.warning.visible=!1);Kv(Nn,i==="entrance"?Mr:us,C.x),Co.setVisible(i==="street"),Po()}function ZM(i){i!==bn&&(C.heading=Math.PI,C.facing=1,jt={to:i,elapsed:0,applied:!1},_t.clear(),Q("location-transition").hidden=!1,Q("transition-title").textContent=Cd[i],Q("transition-subtitle").textContent=i==="entrance"?"С улицы — в подъезд":"Снова на район")}function QM(i){if(!jt)return;const e=jt;e.elapsed+=i;const t=Math.min(1,e.elapsed/.22,(.75-e.elapsed)/.28);Q("location-transition").style.opacity=Math.max(0,t),!e.applied&&e.elapsed>=.25&&(e.applied=!0,qt&&(C.x=Math.floor(qt.x/26)*26+(e.to==="entrance"?15.15:23.2),C.z=-1.45,C.heading=Math.PI/2,C.facing=1,Hi=Math.max(Hi,C.x-.25)),Qd(e.to),qt=null,xs.set(null)),e.elapsed>=.75&&(jt=null,Q("location-transition").hidden=!0,_t.clear())}for(const i of document.querySelectorAll("[data-start-location]"))i.onclick=()=>{if(!(!Ct||mt>0)){Xn=i.dataset.startLocation;try{localStorage.setItem("bomzh:starting-location",Xn)}catch{}Qd(Xn)}};function Xt(i){Q("toast").textContent=i,Zd=mt+2}function Cn(i=400){if(!go)return;ni??=new AudioContext,ni.resume();const e=ni.createOscillator(),t=ni.createGain();e.type="triangle",e.frequency.setValueAtTime(i,ni.currentTime),t.gain.setValueAtTime(.05,ni.currentTime),t.gain.exponentialRampToValueAtTime(.001,ni.currentTime+.12),e.connect(t),t.connect(ni.destination),e.start(),e.stop(ni.currentTime+.13)}Q("sound").onclick=()=>{go=!go,Q("sound").textContent="Звук: "+(go?"вкл.":"выкл."),Cn()};function Vn(){br=XM({levels:ut.index,score:ke.score}),Q("health").textContent=Math.ceil(ke.health),Q("health-bar").value=ke.health,Q("level").textContent=ut.index+1,Q("score").textContent=ke.score,Q("best").textContent=br.levels,Lc()}function Lc(){Q("wallet").textContent=wt.profile.coins,Q("shop-open").disabled=!Ct||!!gt,Q("shop-coins").textContent=wt.profile.coins,Q("storage-hint").hidden=wt.persistent,ke.over&&Dc()}function Dc(){const i=wt.run;Q("run-coins").textContent=`Монеты за забег: ${i.earned}${i.doubled?" + "+i.earned+" бонус":""} · В кошельке: ${wt.profile.coins}`,Q("revive").hidden=i.revived||i.closed,Q("revive").disabled=Si,Q("double-coins").hidden=i.doubled,Q("double-coins").disabled=Si||i.earned===0,Q("reward-note").textContent=i.doubled?"Монеты удвоены. Можно начать новый забег.":"Второй шанс: 60 здоровья и 3 секунды защиты. Бонусы бесплатные в тестовой версии. Удвоение завершает забег.",Q("restart").disabled=Si,Q("ending-shop").disabled=Si}function eb(){ke.over=!0,_t.clear(),Vn(),Q("ending").hidden=!1,Q("ending-title").textContent="Забег окончен",Q("ending-text").textContent=`Пройдено участков: ${ut.index}. Очки: ${ke.score}. Побеждено: ${ke.defeated}. Рекорд: ${br.levels} участков.`,Q("reward-status").textContent="",Dc()}function ef(){const i=Q("shop-items");i.replaceChildren();for(const e of vr){const t=wt.profile.owned.includes(e.id),n=wt.profile.equipped===e.id,s=document.createElement("article");s.className="shop-item"+(n?" selected":""),s.innerHTML=`<span class="shop-icon" aria-hidden="true">${e.icon}</span><div><h3>${e.name}</h3><p>${e.description}</p></div>`;const r=document.createElement("button");r.dataset.cosmetic=e.id,r.textContent=n?"Надето":t?"Надеть":`${e.price} 🪙 · Купить`,r.disabled=n||!t&&wt.profile.coins<e.price,r.onclick=()=>{(t?wt.equip(e.id):wt.buy(e.id).ok)&&(ar?.set(wt.profile.equipped),Q("shop-status").textContent=t?"Образ надет.":"Куплено и надето!",Lc(),ef())},s.append(r),i.append(s)}}function tf(){!Ct||gt||Si||Ri||Vl.isOpen()||(Kd=dt,Ri=!0,dt=!0,_t.clear(),Q("pause-menu").hidden=!0,Q("shop").hidden=!1,Q("shop-status").textContent="",Lc(),ef(),Q("shop-close").focus())}function nf(){Ri=!1,dt=Kd,Q("shop").hidden=!0,Q("pause-menu").hidden=!dt,ke.over||Q("shop-open").focus()}Q("shop-open").onclick=tf;Q("ending-shop").onclick=tf;Q("shop-close").onclick=nf;async function sf(i){if(!ke.over||Si||Ri)return;const e=wt.run;if(i==="revive"&&(e.revived||e.closed)||i==="double"&&(e.doubled||e.earned===0))return;if(Si=!0,Dc(),Q("reward-status").textContent="Получаем бонус…",await WM(Hd,i,e.id)&&ke.over&&wt.claim(i,e.id))if(i==="revive"){ke.over=!1,ke.health=60,C.stamina=100,C.stun=0,C.hurt=0,C.attack=null,C.queuedAttack=null,C.dodge=0,C.combo=0,C.invulnerable=3,_t.clear(),cr=0;for(const n of Dt)n.windup=0,n.strike=0,n.cooldown=Math.max(1.5,n.cooldown),n.stun=Math.max(1,n.stun),n.warning.visible=!1;Q("ending").hidden=!0,Xt("Второй шанс! 3 секунды защиты")}else Q("reward-status").textContent="Монеты удвоены!";else Q("reward-status").textContent="Бонус не получен. Можно попробовать ещё раз.";Si=!1,Vn()}Q("revive").onclick=()=>sf("revive");Q("double-coins").onclick=()=>sf("double");Q("restart").onclick=()=>location.reload();function Oo(){if(!(on?.visible||jt)){if(Vl.isOpen()){Vl.hide();return}!Ct||ke.over||Ri||(dt=!dt,_t.clear(),Q("pause-menu").hidden=!dt,dt&&Q("resume").focus())}}const Vl=Yy(Ds,{open:()=>{if(!Rc||!dt||Ri)return!1;_t.clear(),Q("pause-menu").hidden=!0},close:()=>{Q("pause-menu").hidden=!1,Q("lighting-open").focus()}},_s);Q("back-to-menu").onclick=()=>{Q("pause-menu").hidden=!0,on?.show()};Q("ending-menu").onclick=()=>on?.show();Q("pause").onclick=Oo;Q("resume").onclick=Oo;function lr(i){if(i!=="kick"&&!(!Ct||ke.over||dt||jt||gt||C.stun>0||C.dodge>0||C.pickup)){if(C.attack){C.attackTime/(C.attackSpec??yn[C.attack]).duration>.15&&(C.queuedAttack={kind:i,until:mt+(C.attackSpec??yn[C.attack]).duration-C.attackTime+.2});return}if(!(C.cooldowns[i]>0)){if(!zd(C,i)){Xt("Передохни или продолжай кулаками — они не тратят силы");return}if(i==="jab"){const e=(an.equipped?Ld(C.userActions).length:yr(C.userActions).length)||3;C.combo=mt-C.lastJab<(C.attackSpec?.duration??.65)+.65?C.combo%e+1:1,C.lastJab=mt}else C.combo=0;if(C.attackSpec=i==="jab"?{...yn.jab,...hy(C.userActions,C.combo-1)}:C.userActions?.clips[i]?{...yn[i],duration:C.userActions.clips[i].duration,clip:i}:yn[i],i==="jab"&&an.equipped){const e=uy(C.userActions,C.combo-1);e||(C.combo=1),C.attackSpec={...Cy(an.equipped.type,yn.jab),...e}}C.attackSerial=(C.attackSerial??0)+1,C.attack=i,C.attackTime=0,C.cooldowns[i]=C.attackSpec.cooldown,C.hit=!1,C.sprayHits=new Set,Cn(i==="burp"?90:i==="kick"?180:300)}}}function rf(){if(!Ct||ke.over||dt||jt||gt||C.dodge>0||C.dodgeCooldown>0||C.pickup||!zd(C,"dodge"))return;let i=Number(_t.has("right"))-Number(_t.has("left")),e=Number(_t.has("down"))-Number(_t.has("up"));const t=Math.hypot(i,e);t?(i/=t,e/=t):(i=Math.sin(C.heading),e=Math.cos(C.heading));const n=Ly(C.userActions);C.dashX=i,C.dashZ=e,C.heading=rr(i,e),Math.abs(i)>.01&&(C.facing=Math.sign(i)),C.dodgeDuration=n.duration,C.dodgeSpeed=n.speed,C.dodge=n.duration,C.dodgeCooldown=n.cooldown,C.invulnerable=Math.max(C.invulnerable,n.invulnerability),C.hurt=0,C.attack=null,C.queuedAttack=null,C.stun=0,C.combo=0,Sn.impact(.08),Cn(520)}function zh(i){ke.score+=i.type==="bruiser"?75:25,ke.defeated++,wt.earn(i.type==="bruiser"?8:3),i.type==="bruiser"&&ke.bruisersDefeated++}function of(){if(!Ct||ke.over||dt||jt||gt||C.stun>0||C.dodge>0||C.attack||C.pickup)return;if(Zt<100){Xt("Суперсила копится от попаданий");return}const i=OM(C,Dt);if(!i){Xt("Подойди к противнику ближе");return}Zt=0,C.attack=null,C.queuedAttack=null,_t.clear();const{side:e,endX:t}=BM(C,i,[Math.max(Hi,ut.bounds[0]),ut.bounds[1]]);gt={target:i,elapsed:0,hit:!1,startX:C.x,startZ:C.z,endX:t,side:e},C.facing=e,C.heading=e*Math.PI/2;for(const n of Dt)n!==i&&(n.root.visible=!1),n.warning.visible=!1,n.bar.visible=!1,n.badge.visible=!1;document.body.classList.add("finishing"),Q("cinema").querySelector("span").textContent="РЕШАЮЩИЙ УДАР",Q("cinema").hidden=!1}function Uc(){const i=Nn.nearestBottle(C),e=an.nearby;return i&&(!e||Math.hypot(i.x-C.x,i.z-C.z)<=Math.hypot(e.x-C.x,e.z-C.z))?{kind:"bottle",item:i}:e?{kind:"weapon",item:e}:null}function af(){if(!Ct||dt||jt||ke.over||gt||C.attack||C.pickup||C.dodge>0||C.stun>0)return;if(qt&&xs.near(C)){ZM(qt.to);return}const i=Uc();if(!i)return;const e=i.item;if(i.kind==="bottle"){if(!Nn.takeBottle(C,e))return;const n=ke.bottles;ke.bottles++,wt.earn(3),ke.score+=10,Math.floor(ke.bottles/5)>Math.floor(n/5)&&(ke.health=Math.min(100,ke.health+5)),uh(C,"bottle_pickup",1)||(Zt=ho(Zt,20)),Cn(650),Xt("Бутылка · +10 очков · +3 монеты"),Vn();return}if(uh(C,"weapon_pickup",e)){const n=e.x-C.x,s=e.z-C.z;C.heading=rr(n,s),Math.abs(n)>.01&&(C.facing=Math.sign(n)),_t.clear();return}const t=an.pickup(e);t&&(C.combo=0,C.lastJab=-10,Xt(`${t} в руках · J — удар`),Cn(480))}Q("weapon-pickup").onpointerdown=i=>{i.preventDefault(),af()};Q("super").onpointerdown=i=>{i.preventDefault(),of()};Q("dodge").onpointerdown=i=>{i.preventDefault(),rf()};for(const i of document.querySelectorAll("[data-attack]"))i.addEventListener("pointerdown",e=>{e.preventDefault(),lr(i.dataset.attack)});for(const i of document.querySelectorAll("[data-move]")){const e=i.dataset.move;i.addEventListener("pointerdown",t=>{t.preventDefault(),!(dt||jt)&&(i.setPointerCapture(t.pointerId),_t.add(e))});for(const t of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(t,()=>_t.delete(e))}const Gl={a:"left",ArrowLeft:"left",d:"right",ArrowRight:"right",w:"up",ArrowUp:"up",s:"down",ArrowDown:"down"};window.addEventListener("keydown",i=>{if(i.key==="Escape"&&!i.repeat){Ri?nf():Oo();return}if(!(dt||jt)&&(Gl[i.key]&&(i.preventDefault(),_t.add(Gl[i.key])),!i.repeat)){const e=i.key.toLowerCase();(e==="e"||i.code==="KeyE")&&(i.preventDefault(),af()),e==="f"&&of(),e==="j"&&lr("jab"),e==="l"&&lr("spray"),e==="k"&&lr("burp"),i.code==="Space"&&(i.preventDefault(),rf())}});window.addEventListener("keyup",i=>_t.delete(Gl[i.key]));window.addEventListener("blur",()=>_t.clear());document.addEventListener("visibilitychange",()=>{_t.clear()});function Hh(i,e){const t=new It,n=CM(i);n.updateMatrixWorld(!0);const s=new mn().setFromObject(n),r=s.getSize(new A),o=s.getCenter(new A),a=e/r.y;n.scale.setScalar(a),n.position.set(-o.x*a,-s.min.y*a,-o.z*a),t.add(n),xt.add(t);const l=[];n.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0),u.isBone&&l.push({bone:u,rest:u.rotation.clone()})});const c={root:t,visual:n,bones:l,height:e,walkDistance:0,baseVisualY:n.position.y,shadow:Hl.add()};return wy(c),c}const Ba=new jy;try{let s=function(c){const u=Hh(c.model==="hero"?i.scene:e.scene,c.height);return c.model==="hero"&&dy(u,t),u},r=function(c){xt.remove(c.root,c.shadow);const u=new Set;c.visual.traverse(h=>{if(h.isSkinnedMesh&&u.add(h.skeleton),h.isMesh&&h.userData.wardrobeMaterials)for(const d of Array.isArray(h.material)?h.material:[h.material])d.dispose()});for(const h of u)h.dispose()},a=function(){if(C.visual){ar?.set("classic"),r(C);for(const u of[...o,"userActions","userBoneIndices","walkSpeed","walkStride","closedLoops","referenceFingers","referenceFingersByClip","poseHierarchy","bindByName","lastMotion","transitionFrom","motionId","transitionStart","weaponReferenceRotation"])delete C[u]}const c=s(ps.find(u=>u.id===or.character));o=Object.keys(c),Object.assign(C,c),an.hand=null,an.palmOffset=null,or.apply(C),ar=new Ud(C),ar.set(wt.profile.equipped),C.root.position.set(C.x,0,C.z),C.root.rotation.y=C.heading,si(C,mt,!1,null,0)},l=function(c,u,h,d,f){const g=DM[h],_={...g,health:Math.round(g.health*f.health),damage:Math.round(g.damage*f.damage),speed:g.speed*f.speed,windup:g.windup*f.windup},m=Hh(e.scene,h==="bruiser"?2.2:h==="runner"?1.8:1.95);m.root.position.set(c,0,u),m.root.rotation.y=-Math.PI/2;const p=new Ce(new pn(.8,.07),new Nt({color:_.color,side:Pt}));p.position.y=2.4,m.root.add(p);const x=new Ce(new hi(_.range-.08,_.range,32),new Nt({color:h==="bruiser"?"#ec738d":"#f2bb51",transparent:!0,opacity:.55,side:Pt,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.position.set(c,.015,u),x.visible=!1,xt.add(x);const b=new Ce(new mc(h==="bruiser"?.14:.08),$M(_.color));b.position.set(-.7,2.7,0),m.root.add(b),Dt.push({...m,x:c,z:u,type:h,spec:_,encounter:d,entering:!0,corpseAge:0,down:0,stun:0,knockback:0,health:_.health,windup:0,cooldown:1,bar:p,warning:x,badge:b,flash:0,aimX:-1,aimZ:0})};const[i,e,t,n]=await Promise.all([Ba.loadAsync("./models/hobo.glb?v=oct29"),Ba.loadAsync("./models/enemy.glb?v=perf1"),fetch("./models/hobo-actions.json?v=oct29").then(c=>{if(!c.ok)throw new Error("Actions unavailable");return c.json()}),Ba.loadAsync("./models/street.glb?v=bench1")]);n.scene.traverse(c=>{c.isMesh&&(/graffiti/i.test(c.name)||/graffiti/i.test(c.material?.name??""))&&(c.visible=!1)}),Vy(n.scene),kv(n.scene),Ul(n.scene,"street"),us=n.scene,fo=fs.map((c,u)=>{const h=Vv(us,u);return Ul(h,"street"),h}),Gy(n.scene,St,Ds,fo),Nn.templateForChunk=c=>{if(bn==="entrance")return Mr;const u=Pc(c);return u.courtyard?fo[u.variant]:us},Nn.setEnvironment(bn==="entrance"?Mr:us),Nn.update(-8),Co.setVisible(bn==="street"),Po();let o=[];a(),on=new Ey({renderer:St,wallet:wt,appearance:or,makeActor:c=>{const u=s(c);return xt.remove(u.root,u.shadow),u},record:()=>br,onOpen:()=>{Po(),dt=!0,_t.clear(),Q("pause-menu").hidden=!0,Q("ending").hidden=!0,Q("menu-play").querySelector("span").textContent=ke.over?"Новый забег":mt>0?"Продолжить":"Начать забег"},onStart:()=>{if(ke.over){sessionStorage.setItem("bomzh:start-now","1"),location.reload();return}a(),dt=!1,Q("pause-menu").hidden=!0,Vn()}}),$d=l,Ct=!0,cf(),Q("loading").style.display="none",Vn(),Rc?(Sn.update({player:C,enemies:Dt,time:0,dt:3,width:innerWidth,height:innerHeight}),Oo(),Q("lighting-open").click()):(Sn.update({player:C,enemies:Dt,time:0,dt:3,width:innerWidth,height:innerHeight}),on.show(),sessionStorage.getItem("bomzh:start-now")==="1"&&(sessionStorage.removeItem("bomzh:start-now"),Q("menu-play").click()))}catch(i){console.error(i),Q("load-status").textContent="Не удалось загрузить модели. Проверь соединение и обнови страницу."}let cr=0;const _o=[];function za(i,e,t=.18){Sn.impact(t);const n=new Ce(new hi(.1,.22,12),new Nt({color:16769690,transparent:!0,depthWrite:!1,side:Pt}));n.position.set(i,1.1,e),n.quaternion.copy(Dn.quaternion),xt.add(n),_o.push({mesh:n,age:0}),cr=.055}const tb=new Bm;let Js=null;function lf(){Jd++,requestAnimationFrame(lf);const i=tb.getDelta(),e=Xd.sample(i,Ct&&!dt&&!document.hidden);e!==null&&(Js=e),Js!==null&&Ct&&!dt&&!C.moving&&!C.attack&&!C.pickup&&!gt&&_t.size===0&&(St.setPixelRatio(Js),Nc(),Js=null);const t=Math.min(i,.05);QM(dt?0:t);const n=cr>0||dt||jt?0:t;cr=Math.max(0,cr-t),mt+=n;for(let u=_o.length-1;u>=0;u--){const h=_o[u];h.age+=t,h.mesh.scale.setScalar(1+h.age*6),h.mesh.material.opacity=1-h.age/.22,h.age>=.22&&(xt.remove(h.mesh),h.mesh.geometry.dispose(),h.mesh.material.dispose(),_o.splice(u,1))}if(Ct&&!ke.over&&!gt&&!on?.visible){if(n>0)for(let y=ls.length-1;y>=0;y--){const L=ls[y];if(L.wait-=n,L.wait<=0){const N=YM(Dn,L.foe.side,L.foe.z);$d(N.x,N.z,L.foe.type,L.arena.id,L.arena.scaling),mo.push({level:L.arena.number,...N}),mo.length>24&&mo.shift(),ls.splice(y,1)}}if(C.pickup){const y=C.pickup;y.elapsed+=n;const L=ir(C);if(!y.applied&&L>=.55)if(y.applied=!0,y.kind==="weapon_pickup"){const N=an.pickup(y.payload);N&&(C.combo=0,C.lastJab=-10,Xt(`${N} в руках · J — комбо`),Cn(480))}else Zt=ho(Zt,20*y.payload),Xt("Глоток кваса · +суперсила"),Cn(650);L>=1&&(C.pickup=null)}C.stun=Math.max(0,C.stun-n),UM(C,n),C.dodgeCooldown=Math.max(0,C.dodgeCooldown-n);const u=Math.min(C.dodge,n);C.dodge=Math.max(0,C.dodge-n);const h=C.dodge>0||u>0;for(const y of Object.keys(yn))C.cooldowns[y]=Math.max(0,C.cooldowns[y]-n);C.invulnerable=Math.max(0,C.invulnerable-n),C.hurt=Math.max(0,(C.hurt??0)-n);let d=Number(_t.has("right"))-Number(_t.has("left")),f=Number(_t.has("down"))-Number(_t.has("up"));const g=Math.hypot(d,f);C.moving=g>0,g&&(d/=g,f/=g);const _=C.x,m=C.z;h&&(d=C.dashX,f=C.dashZ);const p=h?u:n,x=C.pickup?0:h?C.dodgeSpeed??8:C.stun>0?.6:C.attack?.35:C.walkSpeed??iy;let[b,v]=ut.bounds;if(ut.active){const y=Wd(Sn.framingCamera,C.z);b=Math.max(b,y[0]+.9),v=Math.min(v,y[1]-.9),b>v&&(b=ut.bounds[0],v=ut.bounds[1])}qt&&(v=Math.min(v,qt.x+.8)),b=Math.max(b,Hi),C.x=nt.clamp(C.x+d*x*p,b,v),C.z=nt.clamp(C.z+f*x*p,ka(C.x),2.1),g&&!C.attack&&!C.pickup&&(C.heading=Fa(C.heading,rr(d,f),n),d&&(C.facing=Math.sign(d)));const w=Math.hypot(C.x-_,C.z-m);C.moving=w>1e-5,!C.attack&&!h&&Ta(C,w);let S=0;if(C.attack){const y=C.attackSpec??yn[C.attack];if(C.attackTime+=n,S=C.attackTime/y.duration,S>=y.hitAt&&(C.attack==="spray"?S<=y.activeUntil:!C.hit)){C.hit=!0;let L=0;for(const N of Dt)if(N.health>0&&!(C.attack==="spray"&&C.sprayHits.has(N))&&PM(C,N,C.attack)){C.attack==="spray"&&C.sprayHits.add(N),Zt=ho(Zt,12),N.health-=y.damage+(C.combo===3?12:0);const F=C.combo===3;N.knockback=C.facing*(F?5:C.attack==="kick"?4:1.4),N.flash=.22,za(N.x,N.z,F?.26:C.attack==="kick"?.24:C.attack==="spray"?.1:.18),(N.type!=="bruiser"||C.attack!=="jab")&&(N.windup=0,N.strike=0,N.cooldown=.4,N.stun=C.attack==="jab"?.22:C.attack==="spray"?.7:.4,F&&(N.down=1.25,N.stun=0)),L++,N.health<=0&&(zh(N),Zt=ho(Zt,18),Xt("Противник побеждён"))}L&&(y.weapon&&an.wear()&&Xt("Оружие сломалось — продолжай кулаками"),Cn(110),C.combo===3&&Xt("Комбо! Третий удар сильнее"),Vn())}if(S>=1&&(C.cooldowns[C.attack]=Math.max(0,C.cooldowns[C.attack]-1e-6),C.attack=null,C.queuedAttack)){const L=C.queuedAttack;C.queuedAttack=null,L.until>=mt&&(lr(L.kind),S=0)}}const R=C.moving&&(!h||g>0);C.root.position.set(C.x,0,C.z),C.root.rotation.y=C.heading+Ol(mt,R,C.attack,S,C.combo).spin,C.weaponType=an.equipped?.type??(C.attack?C.attackSpec?.weapon:null),C.animationTime=mt,si(C,mt,R,C.pickup?.kind??C.attack,C.pickup?ir(C):S);for(const y of Dt){if(y.health<=0){y.corpseAge+=n,y.root.rotation.z=nt.damp(y.root.rotation.z,-(y.fallSide??1)*Math.PI/2,5,n),y.root.position.y=nt.damp(y.root.position.y,.2,5,n),y.bar.visible=!1,y.badge.visible=!1,y.warning.visible=!1,si(y,mt,!1,null,0);continue}if(y.entering){const H=C.x-y.x,K=C.z-y.z,G=Math.hypot(H,K),ee=Math.max(3.8,y.spec.speed*1.65);G>.1&&(y.x+=H/G*n*ee,y.z+=K/G*n*ee,Ta(y,ee*n)),y.root.position.set(y.x,0,y.z),y.root.rotation.y=Fa(y.root.rotation.y,rr(H,K),n),si(y,mt,!0,null,0),G<3.4&&y.x>ut.bounds[0]+.4&&y.x<ut.bounds[1]-.4&&(y.entering=!1);continue}const[L,N]=ut.bounds;if(y.x=nt.clamp(y.x+y.knockback*n,L+.3,N-.3),y.knockback*=Math.exp(-8*n),y.down=Math.max(0,y.down-n),y.stun=Math.max(0,y.stun-n),y.down>0){y.windup=0,y.strike=0,y.warning.visible=!1,y.bar.visible=!1,y.badge.visible=!1,y.root.position.set(y.x,.06,y.z),y.root.rotation.z=nt.damp(y.root.rotation.z,y.down>.4?-1.48:0,12,n),si(y,mt,!1,null,0);continue}y.root.rotation.z=nt.damp(y.root.rotation.z,0,14,n),y.root.position.y=0,y.bar.visible=!0,y.badge.visible=!0;const F=Math.hypot(C.x-y.x,C.z-y.z);y.cooldown-=n,y.flash=Math.max(0,y.flash-n);let k=!1;if(y.stun>0)y.windup=0,y.strike=0;else if(y.strike>0){const H=y.strike;y.strike=Math.max(0,y.strike-n),y.type==="runner"&&(y.x=nt.clamp(y.x+y.aimX*3*n,L+.3,N-.3),y.z=nt.clamp(y.z+y.aimZ*3*n,ka(y.x),2)),H>.225&&y.strike<=.225&&NM(y,C)&&(ke.health=Math.max(0,ke.health-y.spec.damage),C.invulnerable=.55,C.hurt=.22,C.stun=.18,C.attack=null,C.pickup=null,C.queuedAttack=null,C.combo=0,C.regenDelay=1,za(C.x,C.z,y.type==="bruiser"?.3:.22),Xt(`${y.spec.label}: −${y.spec.damage} здоровья`),Cn(90),Vn(),ke.health||eb())}else if(y.windup>0)y.windup=Math.max(0,y.windup-n),y.windup<=0&&(y.strike=.3,y.cooldown=y.spec.recovery);else if(F<8&&F>y.spec.range*.7){const H=Dt.indexOf(y)%2?1:-1,K=nt.clamp(C.z+H*.55,ka(y.x)+.1,1.9),G=C.x-y.x,ee=K-y.z,oe=Math.hypot(G,ee);oe>.05&&(y.x+=G/oe*n*y.spec.speed,y.z+=ee/oe*n*y.spec.speed,Ta(y,y.spec.speed*n)),k=!0}else F<=y.spec.range&&y.cooldown<=0&&(y.windup=y.spec.windup,y.aimX=(C.x-y.x)/Math.max(F,.01),y.aimZ=(C.z-y.z)/Math.max(F,.01));y.warning.visible=y.windup>0||y.strike>0,y.warning.position.set(y.x,.015,y.z),y.warning.material.opacity=y.windup>0?.3+.4*(1-y.windup/y.spec.windup):.7,y.root.position.set(y.x,0,y.z),y.root.rotation.y=Fa(y.root.rotation.y,rr(C.x-y.x,C.z-y.z),n),y.bar.scale.x=Math.max(0,y.health/y.spec.health),y.bar.quaternion.copy(Dn.quaternion),y.bar.quaternion.premultiply(y.root.quaternion.clone().invert()),y.bar.material.color.set(y.windup>0?"#ffdd66":y.spec.color),si(y,mt,k,y.windup>0||y.strike>0?"jab":null,y.strike>0?.25+.75*(1-y.strike/.3):y.windup>0?.25*(1-y.windup/y.spec.windup):0)}for(let y=Dt.length-1;y>=0;y--)if(Dt[y].health<=0&&Dt[y].corpseAge>3){const L=Dt[y];xt.remove(L.root,L.warning,L.shadow);for(const F of[L.warning,L.bar,L.badge])F.geometry.dispose(),F.material.dispose();const N=new Set;L.root.traverse(F=>{F.isSkinnedMesh&&N.add(F.skeleton)});for(const F of N)F.dispose();Dt.splice(y,1)}an.update(C),Co.update(C.x,mt);const I=Yd.update(C,ke.health,n>0);I&&(ke.health+=I,Xt(`Аптечка · +${I} здоровья`),Cn(740),Vn()),Nn.update(C.x),Po(),xs.update(mt);const T=ls.map(y=>({encounter:y.arena.id,health:1})),M=qt?null:ut.update(n,C.x,[...Dt,...T]);if(M?.type==="spawn")for(const y of M.enemies)ls.push({foe:y,arena:M.arena,wait:y.delay});M?.type==="warning"&&Xt(`${M.arena.title} · противники приближаются!`),M?.type==="clear"&&(qt=Bv(M.arena.index,Xn),xs.set(qt),Hi=Math.max(Hi,C.x-.25),wt.earn(15),ke.score+=100*M.arena.number,ke.health=Math.min(100,ke.health+8),C.stamina=100,Xt(`Участок ${M.arena.number} пройден · +8 здоровья`),Vn()),Q("danger").hidden=!ut.active,Q("danger").textContent=ut.active?`${ut.arena.title} · ${ut.phase==="incoming"?"Новая волна · "+Math.ceil(ut.delay):"Осталось: "+Dt.filter(y=>y.encounter===ut.arena.id&&y.health>0).length}`:"",Q("go").hidden=ut.goTime<=0||ut.active,Q("stamina").value=C.stamina,Q("stamina-value").textContent=Math.floor(C.stamina),Q("dodge").disabled=!!C.pickup||C.dodgeCooldown>0||C.stamina<zl.dodge,Q("objective").textContent=`Бутылки: ${ke.bottles} · Побеждено: ${ke.defeated} · ${qt?qt.to==="entrance"?"Войди в подъезд →":"Найди выход во двор →":ut.active?"Победи группу":"Двигайся вправо →"}`;for(const y of document.querySelectorAll("[data-attack]")){const L=y.dataset.attack;y.disabled=!!C.pickup||!C.attack&&C.cooldowns[L]>0||C.dodge>0||C.stun>0||C.stamina<zl[L]}}if(gt){const u=gt,h=u.target;u.elapsed+=dt?0:t*(u.elapsed>=1.3&&u.elapsed<1.5?.3:1);const d=kM(u.elapsed);if(C.x=nt.lerp(u.startX,u.endX,d.approach),C.z=nt.lerp(u.startZ,h.z,d.approach),C.root.position.set(C.x,0,C.z),C.root.rotation.y=C.heading,si(C,mt,!1,"finisher",Math.min(1,u.elapsed/2.8)),h.root.rotation.y=-u.side*Math.PI/2,h.root.position.set(h.x+u.side*d.fall*.55,Math.sin(d.fall*Math.PI)*.65,h.z),h.root.rotation.z=-u.side*d.fall*1.5,h.flash=d.contact?.18*(1-d.fall):0,si(h,mt,!1,null,0),d.contact&&!u.hit&&(u.hit=!0,h.fallSide=u.side,h.health=0,Q("cinema").querySelector("span").textContent="НОКАУТ",h.corpseAge=0,zh(h),za(h.x,h.z,.3),Cn(75),Vn()),Sn.cinematic(C,h,u.elapsed,dt?0:t,innerWidth,innerHeight),d.done){h.x=h.root.position.x,h.down=0,h.knockback=0,C.invulnerable=.6,C.attack=null,C.heading=u.side*Math.PI/2,gt=null;for(const f of Dt)f.root.visible=!0;document.body.classList.remove("finishing"),Q("cinema").hidden=!0,Xt("Решающий удар!")}}Q("super-meter").value=Zt,Q("super-value").textContent=`${Math.floor(Zt)}%`;const s=an.equipped,r=s?ms[s.type]:null;Q("weapon-name").textContent=r?.label??"Кулаки",Q("weapon-uses").textContent=s?`${s.uses} / ${r.uses} ударов`:"Без оружия",Q("weapon-durability").max=r?.uses??1,Q("weapon-durability").value=s?.uses??0;const o=qt&&xs.near(C),a=Uc();if(Q("weapon-pickup").hidden=!!C.pickup||!a&&!o||ke.over||!!gt||dt||!!jt,Q("weapon-pickup").textContent=o?qt.to==="entrance"?"E · Войти в подъезд":"E · Выйти во двор":a?.kind==="bottle"?"E · Поднять бутылку":a?`E · Взять: ${ms[a.item.type].label}`:"",document.querySelector('[data-attack="jab"] b').textContent=r?.label??"Удар",Ct&&an.pose(C,C.pickup?.kind==="bottle_pickup"||C.pickup?.kind==="weapon_pickup"&&ir(C)<.55||on?.visible||!!gt||ke.over||!!C.attack&&C.attack!=="jab"),Q("super").disabled=!!C.pickup||Zt<100||!!gt||!!C.attack||C.stun>0||C.dodge>0||ke.over,Q("super").classList.toggle("ready",Zt>=100),mt>Zd&&(Q("toast").textContent=""),po.update(C,Ct&&!ke.over&&!gt&&C.attack==="spray",mt),jd.update(C,Ct&&!ke.over&&!gt&&!on?.visible),qd.update(C,Ct&&!ke.over&&!gt&&C.attack==="burp"),Q("shop-open").disabled=!Ct||!!gt,ar?.update(),Ct){Hl.update(C);for(const u of Dt)Hl.update(u)}const l=Ct?C.x:-8;if(gt||Sn.update({player:Ct?C:{x:-8,z:0,facing:1},enemies:Dt,arena:ut.arena,time:mt,dt:dt?0:t,width:innerWidth,height:innerHeight}),Ds.follow(l),KM.update(bn,l),JM.update(l,on?.visible?t:n,bn==="street"),on?.visible){Rn.renderCustom(()=>on.render(t,()=>{Co.update(C.x,mt+on.time),Oa.copy(Dn),Oa.position.x+=Math.sin(on.time*.15)*.12,St.render(xt,Oa)}));return}const c=gt?.target;Bh.set(c?(C.x+c.root.position.x)/2:C.x,1,c?(C.z+c.root.position.z)/2:C.z),Rn.render(xt,Dn,Bh,dt?0:t)}function Nc(){const i=innerWidth,e=innerHeight;St.setSize(i,e),Rn.resize(i,e),Dn.aspect=i/e,Dn.fov=i<650?53:40,Dn.updateProjectionMatrix()}window.addEventListener("resize",Nc);Nc();_s.onChange=()=>Rn.resize(innerWidth,innerHeight);Dn.position.set(-6.55,1.8,6.2);lf();window.gameDebug=()=>({ready:Ct,frames:Jd,...ke,paused:dt,location:bn,startingLocation:Xn,courtyard:Ic(C.x),pendingExit:qt?{...qt,near:xs.near(C)}:null,locationTransition:jt?{to:jt.to,elapsed:jt.elapsed}:null,menu:on?.visible??!1,character:or.character,palette:or.palette,nearbyPickup:Uc()?.kind??null,weapons:an.debug(),medkits:Yd.debug(),graphics:{mode:Gi.mode,pixelRatio:St.getPixelRatio(),width:St.domElement.width,height:St.domElement.height,samples:Rn.enabled||_s.active?Rn.target.samples:0,triangles:St.info.render.triangles,drawCalls:St.info.render.calls,frameMs:Xd.averageMs,adaptive:!0,pendingPixelRatio:Js,shadows:{enabled:St.shadowMap.enabled,filter:St.shadowMap.type===Xl?"soft":"pcf",everyFrame:St.shadowMap.autoUpdate,size:wn.shadow.mapSize.x}},compositing:{active:_s.active,targetWidth:Rn.target.width,targetHeight:Rn.target.height,settings:{..._s.value}},depthOfField:{enabled:Rn.enabled,focus:Rn.focus,maxBlur:Rn.maxBlur},lighting:{...Ds.value},environment:Nn.template?"authored":"procedural",windowDetails:{street:us?.getObjectByName("Detailed_aged_windows")?.userData.windowCount??0,courtyard:fo[0]?.userData.windowCount??0,entrance:Mr.userData.windowCount??0},cameraShake:{enabled:Sn.isShakeEnabled(),strength:Sn.shake},shopOpen:Ri,economy:{coins:wt.profile.coins,owned:[...wt.profile.owned],equipped:wt.profile.equipped,run:{...wt.run},persistent:wt.persistent,rewardMode:Hd.mode},sprayVisible:po.root.visible,sprayGrowth:po.growth,sprayOrigin:po.root.position.toArray(),burpVisible:qd.root.visible,drinkingBottleVisible:jd.root.visible,superPower:Zt,returnWall:Hi,cinematic:gt?{elapsed:gt.elapsed,hit:gt.hit,target:gt.target.type}:null,best:{...br},worldChunks:Nn.chunks.size,authoredActions:Object.keys(C.userActions?.clips??{}),pendingSpawns:ls.length,spawnAudit:mo.map(i=>({...i})),player:{pickup:C.pickup?{kind:C.pickup.kind,progress:ir(C)}:null,x:C.x,z:C.z,moving:!!C.moving,motion:C.motionId,attack:C.attack,attackTime:C.attackTime,attackClip:C.attackSpec?.clip,attackSerial:C.attackSerial,stamina:C.stamina,dodge:C.dodge,dodgeDuration:C.dodgeDuration,dodgeClip:C.dodge>0&&C.userActions?.clips.dodge?"dodge":null,dodgeCooldown:C.dodgeCooldown,facing:C.facing,heading:C.heading,walkDistance:C.walkDistance,walkStride:C.walkStride,feetY:C.feetY,groundOffset:C.groundOffset,combo:C.combo,stun:C.stun,invulnerable:C.invulnerable,cooldowns:{...C.cooldowns}},enemies:Dt.map(i=>({x:i.x,z:i.z,health:i.health,type:i.type,feetY:i.feetY,windup:i.windup,down:i.down,entering:i.entering,encounter:i.encounter})),encounter:{active:ut.active,phase:ut.phase,wave:ut.wave,index:ut.index,bounds:ut.bounds}});function cf(){const i=window.Telegram?.WebApp;i&&(i.ready(),i.expand(),i.isVersionAtLeast?.("7.7")&&i.disableVerticalSwipes?.())}window.addEventListener("telegram-ready",()=>{Ct&&cf()});
