(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Hl="180",df=0,Bc=1,ff=2,Bh=1,Vl=2,ni=3,li=0,Qt=1,Nt=2,bi=0,us=1,mo=2,zc=3,Hc=4,pf=5,Oi=100,mf=101,gf=102,_f=103,xf=104,vf=200,yf=201,Mf=202,bf=203,Oa=204,ka=205,Sf=206,wf=207,Ef=208,Tf=209,Af=210,Rf=211,Cf=212,Pf=213,If=214,Ba=0,za=1,Ha=2,_s=3,Va=4,Ga=5,Wa=6,Xa=7,zh=0,Lf=1,Df=2,Si=0,Uf=1,Nf=2,Ff=3,Hh=4,Of=5,kf=6,Bf=7,Vc="attached",zf="detached",Vh=300,xs=301,vs=302,qa=303,Ya=304,To=306,ci=1e3,vi=1001,go=1002,en=1003,Gh=1004,Xs=1005,dn=1006,to=1007,ri=1008,Un=1009,Wh=1010,Xh=1011,lr=1012,Gl=1013,wi=1014,Cn=1015,Ts=1016,Wl=1017,Xl=1018,cr=1020,qh=35902,Yh=35899,jh=1021,Kh=1022,vn=1023,ur=1026,hr=1027,ql=1028,Yl=1029,$h=1030,jl=1031,Kl=1033,no=33776,io=33777,so=33778,ro=33779,ja=35840,Ka=35841,$a=35842,Ja=35843,Za=36196,Qa=37492,el=37496,tl=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,ll=37815,cl=37816,ul=37817,hl=37818,dl=37819,fl=37820,pl=37821,ml=36492,gl=36494,_l=36495,xl=36283,vl=36284,yl=36285,Ml=36286,dr=2300,fr=2301,Fo=2302,Gc=2400,Wc=2401,Xc=2402,Hf=2500,Vf=0,Jh=1,bl=2,Gf=3200,Wf=3201,Zh=0,Xf=1,si="",ht="srgb",tn="srgb-linear",_o="linear",at="srgb",Wi=7680,qc=519,qf=512,Yf=513,jf=514,Qh=515,Kf=516,$f=517,Jf=518,Zf=519,Sl=35044,wl=35048,Yc="300 es",Hn=2e3,xo=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const $s=Math.PI/180,ys=180/Math.PI;function In(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function $l(i,e){return(i%e+e)%e}function Qf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ep(i,e,t){return i!==e?(t-i)/(e-i):0}function Js(i,e,t){return(1-t)*i+t*e}function tp(i,e,t,n){return Js(i,e,1-Math.exp(-t*n))}function np(i,e=1){return e-Math.abs($l(i,e*2)-e)}function ip(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function op(i,e){return i+Math.random()*(e-i)}function ap(i){return i*(.5-Math.random())}function lp(i){i!==void 0&&(jc=i);let e=jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cp(i){return i*$s}function up(i){return i*ys}function hp(i){return(i&i-1)===0&&i!==0}function dp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const et={DEG2RAD:$s,RAD2DEG:ys,generateUUID:In,clamp:Ge,euclideanModulo:$l,mapLinear:Qf,inverseLerp:ep,lerp:Js,damp:tp,pingpong:np,smoothstep:ip,smootherstep:sp,randInt:rp,randFloat:op,randFloatSpread:ap,seededRandom:lp,degToRad:cp,radToDeg:up,isPowerOfTwo:hp,ceilPowerOfTwo:dp,floorPowerOfTwo:fp,setQuaternionFromProperEuler:pp,normalize:it,denormalize:An};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),v=Math.atan2(S,p*M);m=Math.sin(m*v)/S,a=Math.sin(a*v)/S}const x=a*M;if(l=l*m+d*x,c=c*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oo.copy(this).projectOnVector(e),this.sub(Oo)}reflect(e){return this.sub(Oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oo=new R,Kc=new Ke;class Be{constructor(e,t,n,s,r,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],y=s[4],x=s[7],S=s[2],v=s[5],w=s[8];return r[0]=o*_+a*M+l*S,r[3]=o*m+a*y+l*v,r[6]=o*p+a*x+l*w,r[1]=c*_+u*M+h*S,r[4]=c*m+u*y+h*v,r[7]=c*p+u*x+h*w,r[2]=d*_+f*M+g*S,r[5]=d*m+f*y+g*v,r[8]=d*p+f*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ko.makeScale(e,t)),this}rotate(e){return this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new Be;function ed(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mp(){const i=pr("canvas");return i.style.display="block",i}const $c={};function mr(i){i in $c||($c[i]=!0,console.warn(i))}function gp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Jc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _p(){const i={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?_o:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tn]:{primaries:e,whitePoint:n,transfer:_o,toXYZ:Jc,fromXYZ:Zc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Jc,fromXYZ:Zc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}}),i}const Ze=_p();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xi;class xp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=pr("canvas")),Xi.width=e.width,Xi.height=e.height;const s=Xi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vp=0;class Jl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=In(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bo(s[o].image)):r.push(Bo(s[o]))}else r=Bo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yp=0;const zo=new R;class Ft extends As{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=vi,s=vi,r=dn,o=ri,a=vn,l=Un,c=Ft.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=In(),this.name="",this.source=new Jl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zo).x}get height(){return this.source.getSize(zo).y}get depth(){return this.source.getSize(zo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ci:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ci:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Vh;Ft.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,s=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,S=(p+1)/2,v=(u+d)/4,w=(h+_)/4,I=(g+m)/4;return y>x&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=v/n,r=w/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=v/s,r=I/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=I/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mp extends As{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ft(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Jl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends Mp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class td extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bp extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Tr.subVectors(this.max,Us),qi.subVectors(e.a,Us),Yi.subVectors(e.b,Us),ji.subVectors(e.c,Us),hi.subVectors(Yi,qi),di.subVectors(ji,Yi),Ci.subVectors(qi,ji);let t=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Ci.z,Ci.y,hi.z,0,-hi.x,di.z,0,-di.x,Ci.z,0,-Ci.x,-hi.y,hi.x,0,-di.y,di.x,0,-Ci.y,Ci.x,0];return!Ho(t,qi,Yi,ji,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Ho(t,qi,Yi,ji,Tr))?!1:(Ar.crossVectors(hi,di),t=[Ar.x,Ar.y,Ar.z],Ho(t,qi,Yi,ji,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new R,new R,new R,new R,new R,new R,new R,new R],bn=new R,Er=new fn,qi=new R,Yi=new R,ji=new R,hi=new R,di=new R,Ci=new R,Us=new R,Tr=new R,Ar=new R,Pi=new R;function Ho(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);const a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sp=new fn,Ns=new R,Vo=new R;class qn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(Vo)),this.expandByPoint(Ns.copy(e.center).sub(Vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $n=new R,Go=new R,Rr=new R,fi=new R,Wo=new R,Cr=new R,Xo=new R;class Mr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Go.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(Go);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Rr),a=fi.dot(this.direction),l=-fi.dot(Rr),c=fi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Go).addScaledVector(Rr,d),f}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,s,r){Wo.subVectors(t,e),Cr.subVectors(n,e),Xo.crossVectors(Wo,Cr);let o=this.direction.dot(Xo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);const l=a*this.direction.dot(Cr.crossVectors(fi,Cr));if(l<0)return null;const c=a*this.direction.dot(Wo.cross(fi));if(c<0||l+c>o)return null;const u=-a*fi.dot(Xo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wp,e,Ep)}lookAt(e,t,n){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),pi.crossVectors(n,cn),pi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),pi.crossVectors(n,cn)),pi.normalize(),Pr.crossVectors(cn,pi),s[0]=pi.x,s[4]=Pr.x,s[8]=cn.x,s[1]=pi.y,s[5]=Pr.y,s[9]=cn.y,s[2]=pi.z,s[6]=Pr.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],y=n[7],x=n[11],S=n[15],v=s[0],w=s[4],I=s[8],E=s[12],T=s[1],b=s[5],U=s[9],O=s[13],z=s[2],X=s[6],W=s[10],J=s[14],V=s[3],re=s[7],le=s[11],be=s[15];return r[0]=o*v+a*T+l*z+c*V,r[4]=o*w+a*b+l*X+c*re,r[8]=o*I+a*U+l*W+c*le,r[12]=o*E+a*O+l*J+c*be,r[1]=u*v+h*T+d*z+f*V,r[5]=u*w+h*b+d*X+f*re,r[9]=u*I+h*U+d*W+f*le,r[13]=u*E+h*O+d*J+f*be,r[2]=g*v+_*T+m*z+p*V,r[6]=g*w+_*b+m*X+p*re,r[10]=g*I+_*U+m*W+p*le,r[14]=g*E+_*O+m*J+p*be,r[3]=M*v+y*T+x*z+S*V,r[7]=M*w+y*b+x*X+S*re,r[11]=M*I+y*U+x*W+S*le,r[15]=M*E+y*O+x*J+S*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,y=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,x=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,S=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,v=t*M+n*y+s*x+r*S;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/v;return e[0]=M*w,e[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*w,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*w,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*w,e[4]=y*w,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*w,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*w,e[8]=x*w,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*w,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*w,e[12]=S*w,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*w,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*w,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,M=l*c,y=l*u,x=l*h,S=n.x,v=n.y,w=n.z;return s[0]=(1-(_+p))*S,s[1]=(f+x)*S,s[2]=(g-y)*S,s[3]=0,s[4]=(f-x)*v,s[5]=(1-(d+p))*v,s[6]=(m+M)*v,s[7]=0,s[8]=(g+y)*w,s[9]=(m-M)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ki.set(s[0],s[1],s[2]).length();const o=Ki.set(s[4],s[5],s[6]).length(),a=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);const c=1/r,u=1/o,h=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Hn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Hn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===xo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Hn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Hn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===xo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new R,Sn=new te,wp=new R(0,0,0),Ep=new R(1,1,1),pi=new R,Pr=new R,cn=new R,Qc=new te,eu=new Ke;class nn{constructor(e=0,t=0,n=0,s=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eu.setFromEuler(this),this.setFromQuaternion(eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class Zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tp=0;const tu=new R,$i=new Ke,Jn=new te,Ir=new R,Fs=new R,Ap=new R,Rp=new Ke,nu=new R(1,0,0),iu=new R(0,1,0),su=new R(0,0,1),ru={type:"added"},Cp={type:"removed"},Ji={type:"childadded",child:null},qo={type:"childremoved",child:null};class wt extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new R,t=new nn,n=new Ke,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Be}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(nu,e)}rotateY(e){return this.rotateOnAxis(iu,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return tu.copy(e).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nu,e)}translateY(e){return this.translateOnAxis(iu,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Fs,Ir,this.up):Jn.lookAt(Ir,Fs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Jn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ru),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cp),qo.child=e,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ru),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,Ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new R(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new R,Zn=new R,Yo=new R,Qn=new R,Zi=new R,Qi=new R,ou=new R,jo=new R,Ko=new R,$o=new R,Jo=new $e,Zo=new $e,Qo=new $e;class Rn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){wn.subVectors(s,t),Zn.subVectors(n,t),Yo.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(Zn),l=wn.dot(Yo),c=Zn.dot(Zn),u=Zn.dot(Yo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Jo.setScalar(0),Zo.setScalar(0),Qo.setScalar(0),Jo.fromBufferAttribute(e,t),Zo.fromBufferAttribute(e,n),Qo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jo,r.x),o.addScaledVector(Zo,r.y),o.addScaledVector(Qo,r.z),o}static isFrontFacing(e,t,n,s){return wn.subVectors(n,t),Zn.subVectors(e,t),wn.cross(Zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),wn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Zi.subVectors(s,n),Qi.subVectors(r,n),jo.subVectors(e,n);const l=Zi.dot(jo),c=Qi.dot(jo);if(l<=0&&c<=0)return t.copy(n);Ko.subVectors(e,s);const u=Zi.dot(Ko),h=Qi.dot(Ko);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Zi,o);$o.subVectors(e,r);const f=Zi.dot($o),g=Qi.dot($o);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Qi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return ou.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(ou,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Zi,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function ea(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=$l(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ea(o,r,e+1/3),this.g=ea(o,r,e),this.b=ea(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){const n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return Ze.workingToColorSpace(Wt.copy(this),e),Math.round(Ge(Wt.r*255,0,255))*65536+Math.round(Ge(Wt.g*255,0,255))*256+Math.round(Ge(Wt.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=ht){Ze.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,s=Wt.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(Lr);const n=Js(mi.h,Lr.h,t),s=Js(mi.s,Lr.s,t),r=Js(mi.l,Lr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Pe;Pe.NAMES=nd;let Pp=0;class Vn extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=In(),this.name="",this.type="Material",this.blending=us,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=ka,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ut extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new R,Dr=new fe;let Ip=0;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ip++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sl,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}}class id extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sd extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class We extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lp=0;const gn=new te,ta=new wt,es=new R,un=new fn,Os=new fn,Ht=new R;class Et extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ed(e)?sd:id)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new We(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(un.min,Os.min),un.expandByPoint(Ht),Ht.addVectors(un.max,Os.max),un.expandByPoint(Ht)):(un.expandByPoint(Os.min),un.expandByPoint(Os.max))}un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),Ht.add(es)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new R,l[I]=new R;const c=new R,u=new R,h=new R,d=new fe,f=new fe,g=new fe,_=new R,m=new R;function p(I,E,T){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,T),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,T),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(b),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(b),a[I].add(_),a[E].add(_),a[T].add(_),l[I].add(m),l[E].add(m),l[T].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,E=M.length;I<E;++I){const T=M[I],b=T.start,U=T.count;for(let O=b,z=b+U;O<z;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new R,x=new R,S=new R,v=new R;function w(I){S.fromBufferAttribute(s,I),v.copy(S);const E=a[I];y.copy(E),y.sub(S.multiplyScalar(S.dot(E))).normalize(),x.crossVectors(v,E);const b=x.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,b)}for(let I=0,E=M.length;I<E;++I){const T=M[I],b=T.start,U=T.count;for(let O=b,z=b+U;O<z;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Ot(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const au=new te,Ii=new Mr,Ur=new qn,lu=new R,Nr=new R,Fr=new R,Or=new R,na=new R,kr=new R,cu=new R,Br=new R;class Re extends wt{constructor(e=new Et,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(na.fromBufferAttribute(h,e),o?kr.addScaledVector(na,u):kr.addScaledVector(na.sub(t),u))}t.add(kr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(Ur.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Ur,lu)===null||Ii.origin.distanceToSquared(lu)>(e.far-e.near)**2))&&(au.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(au),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=y;x<S;x+=3){const v=a.getX(x),w=a.getX(x+1),I=a.getX(x+2);s=zr(this,p,e,n,c,u,h,v,w,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=zr(this,o,e,n,c,u,h,M,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=y;x<S;x+=3){const v=x,w=x+1,I=x+2;s=zr(this,p,e,n,c,u,h,v,w,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,y=m+1,x=m+2;s=zr(this,o,e,n,c,u,h,M,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Dp(i,e,t,n,s,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===li,a),l===null)return null;Br.copy(a),Br.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:i}}function zr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Nr),i.getVertexPosition(l,Fr),i.getVertexPosition(c,Or);const u=Dp(i,e,t,n,Nr,Fr,Or,cu);if(u){const h=new R;Rn.getBarycoord(cu,Nr,Fr,Or,h),s&&(u.uv=Rn.getInterpolatedAttribute(s,a,l,c,h,new fe)),r&&(u.uv1=Rn.getInterpolatedAttribute(r,a,l,c,h,new fe)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,l,c,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new R,materialIndex:0};Rn.getNormal(Nr,Fr,Or,d.normal),u.face=d,u.barycoord=h}return u}class sn extends Et{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(h,2));function g(_,m,p,M,y,x,S,v,w,I,E){const T=x/w,b=S/I,U=x/2,O=S/2,z=v/2,X=w+1,W=I+1;let J=0,V=0;const re=new R;for(let le=0;le<W;le++){const be=le*b-O;for(let Xe=0;Xe<X;Xe++){const Ye=Xe*T-U;re[_]=Ye*M,re[m]=be*y,re[p]=z,c.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=v>0?1:-1,u.push(re.x,re.y,re.z),h.push(Xe/w),h.push(1-le/I),J+=1}}for(let le=0;le<I;le++)for(let be=0;be<w;be++){const Xe=d+be+X*le,Ye=d+be+X*(le+1),xt=d+(be+1)+X*(le+1),tt=d+(be+1)+X*le;l.push(Xe,Ye,tt),l.push(Ye,xt,tt),V+=6}a.addGroup(f,V,E),f+=V,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=Ms(i[t]);for(const s in n)e[s]=n[s]}return e}function Up(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Np={clone:Ms,merge:Jt};var Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=Up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class od extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new R,uu=new fe,hu=new fe;class Yt extends od{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,uu,hu),t.subVectors(hu,uu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class kp extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(ts,ns,e,t);s.layers=this.layers,this.add(s);const r=new Yt(ts,ns,e,t);r.layers=this.layers,this.add(r);const o=new Yt(ts,ns,e,t);o.layers=this.layers,this.add(o);const a=new Yt(ts,ns,e,t);a.layers=this.layers,this.add(a);const l=new Yt(ts,ns,e,t);l.layers=this.layers,this.add(l);const c=new Yt(ts,ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ad extends Ft{constructor(e=[],t=xs,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bp extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ad(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sn(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:bi});r.uniforms.tEquirect.value=t;const o=new Re(s,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=dn),new kp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Lt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zp={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ql{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new Ql(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ec extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Hp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sl,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new R;class tc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const du=new R,fu=new $e,pu=new $e,Vp=new R,mu=new te,Hr=new R,sa=new qn,gu=new te,ra=new Mr;class Gp extends Re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vc,this.bindMatrix=new te,this.bindMatrixInverse=new te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hr),this.boundingBox.expandByPoint(Hr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hr),this.boundingSphere.expandByPoint(Hr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(s),e.ray.intersectsSphere(sa)!==!1&&(gu.copy(s).invert(),ra.copy(e.ray).applyMatrix4(gu),!(this.boundingBox!==null&&ra.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ra)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;fu.fromBufferAttribute(s.attributes.skinIndex,e),pu.fromBufferAttribute(s.attributes.skinWeight,e),du.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=pu.getComponent(r);if(o!==0){const a=fu.getComponent(r);mu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Vp.copy(du).applyMatrix4(mu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ld extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nc extends Ft{constructor(e=null,t=1,n=1,s,r,o,a,l,c=en,u=en,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _u=new te,Wp=new te;class ic{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new te)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new te;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Wp;_u.multiplyMatrices(a,t[r]),_u.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ic(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new nc(t,e,e,vn,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ld),this.bones.push(o),this.boneInverses.push(new te().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class El extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const is=new te,xu=new te,Vr=[],vu=new fn,Xp=new te,ks=new Re,Bs=new qn;class sc extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),vu.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(vu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),Bs.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),e.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,is),xu.multiplyMatrices(n,is),ks.matrixWorld=xu,ks.raycast(e,Vr);for(let o=0,a=Vr.length;o<a;o++){const l=Vr[o];l.instanceId=r,l.object=this,t.push(l)}Vr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new nc(new Float32Array(s*this.count),s,this.count,ql,Cn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const oa=new R,qp=new R,Yp=new Be;class xi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=oa.subVectors(n,t).cross(qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yp.getNormalMatrix(e),s=this.coplanarPoint(oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new qn,jp=new fe(.5,.5),Gr=new R;class rc{constructor(e=new xi,t=new xi,n=new xi,s=new xi,r=new xi,o=new xi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],y=r[13],x=r[14],S=r[15];if(s[0].setComponents(c-o,f-u,p-g,S-M).normalize(),s[1].setComponents(c+o,f+u,p+g,S+M).normalize(),s[2].setComponents(c+a,f+h,p+_,S+y).normalize(),s[3].setComponents(c-a,f-h,p-_,S-y).normalize(),n)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,f-d,p-m,S-x).normalize();else if(s[4].setComponents(c-l,f-d,p-m,S-x).normalize(),t===Hn)s[5].setComponents(c+l,f+d,p+m,S+x).normalize();else if(t===xo)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);const t=jp.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Gr.x=s.normal.x>0?e.max.x:e.min.x,Gr.y=s.normal.y>0?e.max.y:e.min.y,Gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cd extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vo=new R,yo=new R,yu=new te,zs=new Mr,Wr=new qn,aa=new R,Mu=new R;class oc extends wt{constructor(e=new Et,t=new cd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)vo.fromBufferAttribute(t,s-1),yo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=vo.distanceTo(yo);e.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;yu.copy(s).invert(),zs.copy(e.ray).applyMatrix4(yu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),M=u.getX(_+1),y=Xr(this,e,zs,l,p,M,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Xr(this,e,zs,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Xr(this,e,zs,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Xr(this,e,zs,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(vo.fromBufferAttribute(a,s),yo.fromBufferAttribute(a,r),t.distanceSqToSegment(vo,yo,aa,Mu)>n)return;aa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(aa);if(!(c<e.near||c>e.far))return{distance:c,point:Mu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const bu=new R,Su=new R;class Kp extends oc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bu.fromBufferAttribute(t,s),Su.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bu.distanceTo(Su);e.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $p extends oc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ao extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wu=new te,Tl=new Mr,qr=new qn,Yr=new R;class ac extends wt{constructor(e=new Et,t=new Ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;wu.copy(s).invert(),Tl.copy(e.ray).applyMatrix4(wu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Yr.fromBufferAttribute(h,m),Eu(Yr,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Yr.fromBufferAttribute(h,g),Eu(Yr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Eu(i,e,t,n,s,r,o){const a=Tl.distanceSqToPoint(i);if(a<t){const l=new R;Tl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Gn extends Ft{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lc extends Ft{constructor(e,t,n=wi,s,r,o,a=en,l=en,c,u=ur,h=1){if(u!==ur&&u!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ud extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gr extends Et{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new R,u=new fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(a,3)),this.setAttribute("uv",new We(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hi extends Et{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function M(){const x=new R,S=new R;let v=0;const w=(t-e)/n;for(let I=0;I<=r;I++){const E=[],T=I/r,b=T*(t-e)+e;for(let U=0;U<=s;U++){const O=U/s,z=O*l+a,X=Math.sin(z),W=Math.cos(z);S.x=b*X,S.y=-T*n+m,S.z=b*W,h.push(S.x,S.y,S.z),x.set(X,w,W).normalize(),d.push(x.x,x.y,x.z),f.push(O,1-T),E.push(g++)}_.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){const T=_[E][I],b=_[E+1][I],U=_[E+1][I+1],O=_[E][I+1];(e>0||E!==0)&&(u.push(T,b,O),v+=3),(t>0||E!==r-1)&&(u.push(b,U,O),v+=3)}c.addGroup(p,v,0),p+=v}function y(x){const S=g,v=new fe,w=new R;let I=0;const E=x===!0?e:t,T=x===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),g++;const b=g;for(let U=0;U<=s;U++){const z=U/s*l+a,X=Math.cos(z),W=Math.sin(z);w.x=E*W,w.y=m*T,w.z=E*X,h.push(w.x,w.y,w.z),d.push(0,T,0),v.x=X*.5+.5,v.y=W*.5*T+.5,f.push(v.x,v.y),g++}for(let U=0;U<s;U++){const O=S+U,z=b+U;x===!0?u.push(z,z+1,O):u.push(z+1,z,O),I+=3}c.addGroup(p,I,x===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ro extends Et{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(r.slice(),3)),this.setAttribute("uv",new We(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new R,x=new R,S=new R;for(let v=0;v<t.length;v+=3)f(t[v+0],y),f(t[v+1],x),f(t[v+2],S),l(y,x,S,M)}function l(M,y,x,S){const v=S+1,w=[];for(let I=0;I<=v;I++){w[I]=[];const E=M.clone().lerp(x,I/v),T=y.clone().lerp(x,I/v),b=v-I;for(let U=0;U<=b;U++)U===0&&I===v?w[I][U]=E:w[I][U]=E.clone().lerp(T,U/b)}for(let I=0;I<v;I++)for(let E=0;E<2*(v-I)-1;E++){const T=Math.floor(E/2);E%2===0?(d(w[I][T+1]),d(w[I+1][T]),d(w[I][T])):(d(w[I][T+1]),d(w[I+1][T+1]),d(w[I+1][T]))}}function c(M){const y=new R;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(M),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const M=new R;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const x=m(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;o.push(x,1-S)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const y=o[M+0],x=o[M+2],S=o[M+4],v=Math.max(y,x,S),w=Math.min(y,x,S);v>.9&&w<.1&&(y<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){const x=M*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const M=new R,y=new R,x=new R,S=new R,v=new fe,w=new fe,I=new fe;for(let E=0,T=0;E<r.length;E+=9,T+=6){M.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),v.set(o[T+0],o[T+1]),w.set(o[T+2],o[T+3]),I.set(o[T+4],o[T+5]),S.copy(M).add(y).add(x).divideScalar(3);const b=m(S);_(v,T+0,M,b),_(w,T+2,y,b),_(I,T+4,x,b)}}function _(M,y,x,S){S<0&&M.x===1&&(o[y]=M.x-1),x.x===0&&x.z===0&&(o[y]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.vertices,e.indices,e.radius,e.details)}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new fe:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,s=[],r=[],o=[],a=new R,l=new te;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ge(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ge(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hd extends ui{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new fe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Jp extends hd{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const jr=new R,la=new cc,ca=new cc,ua=new cc;class Zp extends ui{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(jr.subVectors(s[0],s[1]).add(s[0]),c=jr);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=jr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),la.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),ca.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),ua.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(la.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ca.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ua.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(la.calc(l),ca.calc(l),ua.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Tu(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Qp(i,e){const t=1-i;return t*t*e}function em(i,e){return 2*(1-i)*i*e}function tm(i,e){return i*i*e}function Zs(i,e,t,n){return Qp(i,e)+em(i,t)+tm(i,n)}function nm(i,e){const t=1-i;return t*t*t*e}function im(i,e){const t=1-i;return 3*t*t*i*e}function sm(i,e){return 3*(1-i)*i*i*e}function rm(i,e){return i*i*i*e}function Qs(i,e,t,n,s){return nm(i,e)+im(i,t)+sm(i,n)+rm(i,s)}class om extends ui{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(e,s.x,r.x,o.x,a.x),Qs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class am extends ui{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(e,s.x,r.x,o.x,a.x),Qs(e,s.y,r.y,o.y,a.y),Qs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lm extends ui{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cm extends ui{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class um extends ui{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Zs(e,s.x,r.x,o.x),Zs(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uc extends ui{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Zs(e,s.x,r.x,o.x),Zs(e,s.y,r.y,o.y),Zs(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hm extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Tu(a,l.x,c.x,u.x,h.x),Tu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new fe().fromArray(s))}return this}}var dm=Object.freeze({__proto__:null,ArcCurve:Jp,CatmullRomCurve3:Zp,CubicBezierCurve:om,CubicBezierCurve3:am,EllipseCurve:hd,LineCurve:lm,LineCurve3:cm,QuadraticBezierCurve:um,QuadraticBezierCurve3:uc,SplineCurve:hm});class hc extends Ro{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hc(e.radius,e.detail)}}class dc extends Et{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ge(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new R,d=new fe,f=new R,g=new R,_=new R;let m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=t;M++){const y=n+M*u*s,x=Math.sin(y),S=Math.cos(y);for(let v=0;v<=e.length-1;v++){h.x=e[v].x*x,h.y=e[v].y,h.z=e[v].x*S,o.push(h.x,h.y,h.z),d.x=M/t,d.y=v/(e.length-1),a.push(d.x,d.y);const w=l[3*v+0]*x,I=l[3*v+1],E=l[3*v+0]*S;c.push(w,I,E)}}for(let M=0;M<t;M++)for(let y=0;y<e.length-1;y++){const x=y+M*e.length,S=x,v=x+e.length,w=x+e.length+1,I=x+1;r.push(S,v,I),r.push(w,I,v)}this.setIndex(r),this.setAttribute("position",new We(o,3)),this.setAttribute("uv",new We(a,2)),this.setAttribute("normal",new We(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.points,e.segments,e.phiStart,e.phiLength)}}class fc extends Ro{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fc(e.radius,e.detail)}}class Nn extends Et{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let y=0;y<c;y++){const x=y*h-r;g.push(x,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const y=M+c*p,x=M+c*(p+1),S=M+1+c*(p+1),v=M+1+c*p;f.push(y,x,v),f.push(x,S,v)}this.setIndex(f),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vi extends Et{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,f=new R,g=new fe;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,y=M,x=M+n+1,S=M+n+2,v=M+1;a.push(y,x,v),a.push(x,S,v)}}this.setIndex(a),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class pc extends Et{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new R,d=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],y=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){const v=S/t;h.x=-e*Math.cos(s+v*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+v*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(v+x,1-y),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const y=u[p][M+1],x=u[p][M],S=u[p+1][M],v=u[p+1][M+1];(p!==0||o>0)&&f.push(y,x,v),(p!==n-1||l<Math.PI)&&f.push(x,S,v)}this.setIndex(f),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bs extends Et{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new R,h=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class mc extends Et{constructor(e=new uc(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new fe;let u=new R;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),M(),p()}function m(y){u=e.getPointAt(y/t,u);const x=o.normals[y],S=o.binormals[y];for(let v=0;v<=s;v++){const w=v/s*Math.PI*2,I=Math.sin(w),E=-Math.cos(w);l.x=E*x.x+I*S.x,l.y=E*x.y+I*S.y,l.z=E*x.z+I*S.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=s;x++){const S=(s+1)*(y-1)+(x-1),v=(s+1)*y+(x-1),w=(s+1)*y+x,I=(s+1)*(y-1)+x;g.push(S,v,I),g.push(v,w,I)}}function M(){for(let y=0;y<=t;y++)for(let x=0;x<=s;x++)c.x=y/t,c.y=x/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new mc(new dm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ft extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yn extends ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fm extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pm extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Kr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function mm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function gm(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Au(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function dd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class br{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _m extends br{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gc,endingEnd:Gc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wc:r=e,a=2*t-n;break;case Xc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wc:o=e,l=2*n-t;break;case Xc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let S=0;S!==a;++S)r[S]=p*o[u+S]+M*o[c+S]+y*o[l+S]+x*o[h+S];return r}}class xm extends br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class vm extends br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kr(t,this.TimeBufferType),this.values=Kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Kr(e.times,Array),values:Kr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _m(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case fr:t=this.InterpolantFactoryMethodLinear;break;case Fo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return Fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&mm(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=fr;class Rs extends Fn{constructor(e,t,n){super(e,t,n)}}Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=dr;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class fd extends Fn{constructor(e,t,n,s){super(e,t,n,s)}}fd.prototype.ValueTypeName="color";class Ss extends Fn{constructor(e,t,n,s){super(e,t,n,s)}}Ss.prototype.ValueTypeName="number";class ym extends br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ke.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ws extends Fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ym(this.times,this.values,this.getValueSize(),e)}}ws.prototype.ValueTypeName="quaternion";ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Fn{constructor(e,t,n){super(e,t,n)}}Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=dr;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends Fn{constructor(e,t,n,s){super(e,t,n,s)}}Es.prototype.ValueTypeName="vector";class Mm{constructor(e="",t=-1,n=[],s=Hf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=In(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Sm(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Fn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=gm(l);l=Au(l,1,u),c=Au(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ss(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];dd(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new Ss(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Es,f+".position",d,"pos",s),n(ws,f+".quaternion",d,"rot",s),n(Es,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function bm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ss;case"vector":case"vector2":case"vector3":case"vector4":return Es;case"color":return fd;case"quaternion":return ws;case"bool":case"boolean":return Rs;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Sm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=bm(i.type);if(i.times===void 0){const t=[],n=[];dd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const oi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class wm{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Em=new wm;class Ps{constructor(e){this.manager=e!==void 0?e:Em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ps.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class Tm extends Error{constructor(e,t){super(e),this.response=t}}class pd extends Ps{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=oi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:n,onError:s});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ei[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let v=0,w=u.length;v<w;v++){const I=u[v];I.onProgress&&I.onProgress(S)}p.enqueue(x),M()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Tm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{oi.add(`file:${e}`,c);const u=ei[e];delete ei[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ei[e];if(u===void 0)throw this.manager.itemError(e),c;delete ei[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ss=new WeakMap;class Am extends Ps{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=oi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=ss.get(o);h===void 0&&(h=[],ss.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=pr("img");function l(){u(),t&&t(this);const h=ss.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}ss.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),oi.remove(`image:${e}`);const d=ss.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}ss.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),oi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Rm extends Ps{constructor(e){super(e)}load(e,t,n,s){const r=new Ft,o=new Am(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Co extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class md extends Co{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ha=new te,Ru=new R,Cu=new R;class gc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ru),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cm extends gc{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ys*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Pm extends Co{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Cm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pu=new te,Hs=new R,da=new R;class Im extends gc{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hs),da.copy(n.position),da.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(da),n.updateMatrixWorld(),s.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu,n.coordinateSystem,n.reversedDepth)}}class gd extends Co{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Im}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Po extends od{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lm extends gc{constructor(){super(new Po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mo extends Co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Lm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class er{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const fa=new WeakMap;class Dm extends Ps{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=oi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(fa.has(o)===!0)s&&s(fa.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return oi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),fa.set(l,c),oi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});oi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Um extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const _c="\\[\\]\\.:\\/",Fm=new RegExp("["+_c+"]","g"),xc="[^"+_c+"]",Om="[^"+_c.replace("\\.","")+"]",km=/((?:WC+[\/:])*)/.source.replace("WC",xc),Bm=/(WCOD+)?/.source.replace("WCOD",Om),zm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc),Hm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc),Vm=new RegExp("^"+km+Bm+zm+Hm+"$"),Gm=["material","materials","bones","map"];class Wm{constructor(e,t,n){const s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fm,"")}static parseTrackName(e){const t=Vm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Gm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=Wm;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Iu=new te;class _d{constructor(e,t,n=0,s=1/0){this.ray=new Mr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Iu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Iu),this}intersectObject(e,t=!0,n=[]){return Al(e,this,n,t),n.sort(Lu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Al(e[s],this,n,t);return n.sort(Lu),n}}function Lu(i,e){return i.distance-e.distance}function Al(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Al(r[o],e,t,!0)}}function Du(i,e,t,n){const s=Xm(n);switch(t){case jh:return i*e;case ql:return i*e/s.components*s.byteLength;case Yl:return i*e/s.components*s.byteLength;case $h:return i*e*2/s.components*s.byteLength;case jl:return i*e*2/s.components*s.byteLength;case Kh:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case Kl:return i*e*4/s.components*s.byteLength;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case so:case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:case Ja:return Math.max(i,16)*Math.max(e,8)/4;case ja:case $a:return Math.max(i,8)*Math.max(e,8)/2;case Za:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ml:case gl:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xl:case vl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yl:case Ml:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xm(i){switch(i){case Un:case Wh:return{byteLength:1,components:1};case lr:case Xh:case Ts:return{byteLength:2,components:1};case Wl:case Xl:return{byteLength:2,components:4};case wi:case Gl:case Cn:return{byteLength:4,components:1};case qh:case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);function xd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qm(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jm=`#ifdef USE_ALPHAHASH
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
#endif`,Km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qm=`#ifdef USE_AOMAP
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
#endif`,eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tg=`#ifdef USE_BATCHING
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
#endif`,ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ig=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,og=`#ifdef USE_IRIDESCENCE
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
#endif`,ag=`#ifdef USE_BUMPMAP
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gg=`#define PI 3.141592653589793
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
} // validated`,_g=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xg=`vec3 transformedNormal = objectNormal;
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
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ug=`#ifdef USE_GRADIENTMAP
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
}`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kg=`uniform bool receiveShadow;
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
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wg=`PhysicalMaterial material;
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
#endif`,Xg=`struct PhysicalMaterial {
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
}`,qg=`
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
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n0=`#if defined( USE_POINTS_UV )
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
#endif`,i0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`#ifdef USE_MORPHTARGETS
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
#endif`,c0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m0=`#ifdef USE_NORMALMAP
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
#endif`,g0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I0=`float getShadowMask() {
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
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,U0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,F0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y0=`uniform sampler2D t2D;
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
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
}`,Q0=`#if DEPTH_PACKING == 3200
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
}`,e_=`#define DISTANCE
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
}`,t_=`#define DISTANCE
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`uniform float scale;
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
}`,r_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,a_=`uniform vec3 diffuse;
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
}`,l_=`#define LAMBERT
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
}`,c_=`#define LAMBERT
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
}`,u_=`#define MATCAP
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
}`,h_=`#define MATCAP
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
}`,d_=`#define NORMAL
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
}`,f_=`#define NORMAL
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
}`,p_=`#define PHONG
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
}`,m_=`#define PHONG
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
}`,g_=`#define STANDARD
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
}`,__=`#define STANDARD
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
}`,x_=`#define TOON
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
}`,v_=`#define TOON
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
}`,y_=`uniform float size;
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
}`,M_=`uniform vec3 diffuse;
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
}`,b_=`#include <common>
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
}`,S_=`uniform vec3 color;
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
}`,w_=`uniform float rotation;
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
}`,E_=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Ym,alphahash_pars_fragment:jm,alphamap_fragment:Km,alphamap_pars_fragment:$m,alphatest_fragment:Jm,alphatest_pars_fragment:Zm,aomap_fragment:Qm,aomap_pars_fragment:eg,batching_pars_vertex:tg,batching_vertex:ng,begin_vertex:ig,beginnormal_vertex:sg,bsdfs:rg,iridescence_fragment:og,bumpmap_pars_fragment:ag,clipping_planes_fragment:lg,clipping_planes_pars_fragment:cg,clipping_planes_pars_vertex:ug,clipping_planes_vertex:hg,color_fragment:dg,color_pars_fragment:fg,color_pars_vertex:pg,color_vertex:mg,common:gg,cube_uv_reflection_fragment:_g,defaultnormal_vertex:xg,displacementmap_pars_vertex:vg,displacementmap_vertex:yg,emissivemap_fragment:Mg,emissivemap_pars_fragment:bg,colorspace_fragment:Sg,colorspace_pars_fragment:wg,envmap_fragment:Eg,envmap_common_pars_fragment:Tg,envmap_pars_fragment:Ag,envmap_pars_vertex:Rg,envmap_physical_pars_fragment:Bg,envmap_vertex:Cg,fog_vertex:Pg,fog_pars_vertex:Ig,fog_fragment:Lg,fog_pars_fragment:Dg,gradientmap_pars_fragment:Ug,lightmap_pars_fragment:Ng,lights_lambert_fragment:Fg,lights_lambert_pars_fragment:Og,lights_pars_begin:kg,lights_toon_fragment:zg,lights_toon_pars_fragment:Hg,lights_phong_fragment:Vg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Wg,lights_physical_pars_fragment:Xg,lights_fragment_begin:qg,lights_fragment_maps:Yg,lights_fragment_end:jg,logdepthbuf_fragment:Kg,logdepthbuf_pars_fragment:$g,logdepthbuf_pars_vertex:Jg,logdepthbuf_vertex:Zg,map_fragment:Qg,map_pars_fragment:e0,map_particle_fragment:t0,map_particle_pars_fragment:n0,metalnessmap_fragment:i0,metalnessmap_pars_fragment:s0,morphinstance_vertex:r0,morphcolor_vertex:o0,morphnormal_vertex:a0,morphtarget_pars_vertex:l0,morphtarget_vertex:c0,normal_fragment_begin:u0,normal_fragment_maps:h0,normal_pars_fragment:d0,normal_pars_vertex:f0,normal_vertex:p0,normalmap_pars_fragment:m0,clearcoat_normal_fragment_begin:g0,clearcoat_normal_fragment_maps:_0,clearcoat_pars_fragment:x0,iridescence_pars_fragment:v0,opaque_fragment:y0,packing:M0,premultiplied_alpha_fragment:b0,project_vertex:S0,dithering_fragment:w0,dithering_pars_fragment:E0,roughnessmap_fragment:T0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:R0,shadowmap_pars_vertex:C0,shadowmap_vertex:P0,shadowmask_pars_fragment:I0,skinbase_vertex:L0,skinning_pars_vertex:D0,skinning_vertex:U0,skinnormal_vertex:N0,specularmap_fragment:F0,specularmap_pars_fragment:O0,tonemapping_fragment:k0,tonemapping_pars_fragment:B0,transmission_fragment:z0,transmission_pars_fragment:H0,uv_pars_fragment:V0,uv_pars_vertex:G0,uv_vertex:W0,worldpos_vertex:X0,background_vert:q0,background_frag:Y0,backgroundCube_vert:j0,backgroundCube_frag:K0,cube_vert:$0,cube_frag:J0,depth_vert:Z0,depth_frag:Q0,distanceRGBA_vert:e_,distanceRGBA_frag:t_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:s_,linedashed_frag:r_,meshbasic_vert:o_,meshbasic_frag:a_,meshlambert_vert:l_,meshlambert_frag:c_,meshmatcap_vert:u_,meshmatcap_frag:h_,meshnormal_vert:d_,meshnormal_frag:f_,meshphong_vert:p_,meshphong_frag:m_,meshphysical_vert:g_,meshphysical_frag:__,meshtoon_vert:x_,meshtoon_frag:v_,points_vert:y_,points_frag:M_,shadow_vert:b_,shadow_frag:S_,sprite_vert:w_,sprite_frag:E_},ce={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Bn={basic:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Jt([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Jt([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Jt([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Jt([ce.common,ce.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Jt([ce.lights,ce.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Bn.physical={uniforms:Jt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const $r={r:0,b:0,g:0},Di=new nn,T_=new te;function A_(i,e,t,n,s,r,o){const a=new Pe(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const S=g(y);S===null?p(a,l):S&&S.isColor&&(p(S,1),x=!0);const v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===To)?(u===void 0&&(u=new Re(new sn(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Ms(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(v,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Di.copy(x.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(T_.makeRotationFromEuler(Di)),u.material.toneMapped=Ze.getTransfer(S.colorSpace)!==at,(h!==S||d!==S.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Re(new Nn(2,2),new Xn({name:"BackgroundMaterial",uniforms:Ms(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB($r,rd(i)),n.buffers.color.setClear($r.r,$r.g,$r.b,x,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:M}}function R_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(T,b,U,O,z){let X=!1;const W=h(O,U,b);r!==W&&(r=W,c(r.object)),X=f(T,O,U,z),X&&g(T,O,U,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(T,b,U,O),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function h(T,b,U){const O=U.wireframe===!0;let z=n[T.id];z===void 0&&(z={},n[T.id]=z);let X=z[b.id];X===void 0&&(X={},z[b.id]=X);let W=X[O];return W===void 0&&(W=d(l()),X[O]=W),W}function d(T){const b=[],U=[],O=[];for(let z=0;z<t;z++)b[z]=0,U[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:U,attributeDivisors:O,object:T,attributes:{},index:null}}function f(T,b,U,O){const z=r.attributes,X=b.attributes;let W=0;const J=U.getAttributes();for(const V in J)if(J[V].location>=0){const le=z[V];let be=X[V];if(be===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(be=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(be=T.instanceColor)),le===void 0||le.attribute!==be||be&&le.data!==be.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function g(T,b,U,O){const z={},X=b.attributes;let W=0;const J=U.getAttributes();for(const V in J)if(J[V].location>=0){let le=X[V];le===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(le=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(le=T.instanceColor));const be={};be.attribute=le,le&&le.data&&(be.data=le.data),z[V]=be,W++}r.attributes=z,r.attributesNum=W,r.index=O}function _(){const T=r.newAttributes;for(let b=0,U=T.length;b<U;b++)T[b]=0}function m(T){p(T,0)}function p(T,b){const U=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;U[T]=1,O[T]===0&&(i.enableVertexAttribArray(T),O[T]=1),z[T]!==b&&(i.vertexAttribDivisor(T,b),z[T]=b)}function M(){const T=r.newAttributes,b=r.enabledAttributes;for(let U=0,O=b.length;U<O;U++)b[U]!==T[U]&&(i.disableVertexAttribArray(U),b[U]=0)}function y(T,b,U,O,z,X,W){W===!0?i.vertexAttribIPointer(T,b,U,z,X):i.vertexAttribPointer(T,b,U,O,z,X)}function x(T,b,U,O){_();const z=O.attributes,X=U.getAttributes(),W=b.defaultAttributeValues;for(const J in X){const V=X[J];if(V.location>=0){let re=z[J];if(re===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(re=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(re=T.instanceColor)),re!==void 0){const le=re.normalized,be=re.itemSize,Xe=e.get(re);if(Xe===void 0)continue;const Ye=Xe.buffer,xt=Xe.type,tt=Xe.bytesPerElement,j=xt===i.INT||xt===i.UNSIGNED_INT||re.gpuType===Gl;if(re.isInterleavedBufferAttribute){const Z=re.data,ge=Z.stride,Fe=re.offset;if(Z.isInstancedInterleavedBuffer){for(let Te=0;Te<V.locationSize;Te++)p(V.location+Te,Z.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Te=0;Te<V.locationSize;Te++)m(V.location+Te);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Te=0;Te<V.locationSize;Te++)y(V.location+Te,be/V.locationSize,xt,le,ge*tt,(Fe+be/V.locationSize*Te)*tt,j)}else{if(re.isInstancedBufferAttribute){for(let Z=0;Z<V.locationSize;Z++)p(V.location+Z,re.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Z=0;Z<V.locationSize;Z++)m(V.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Z=0;Z<V.locationSize;Z++)y(V.location+Z,be/V.locationSize,xt,le,be*tt,be/V.locationSize*Z*tt,j)}}else if(W!==void 0){const le=W[J];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(V.location,le);break;case 3:i.vertexAttrib3fv(V.location,le);break;case 4:i.vertexAttrib4fv(V.location,le);break;default:i.vertexAttrib1fv(V.location,le)}}}}M()}function S(){I();for(const T in n){const b=n[T];for(const U in b){const O=b[U];for(const z in O)u(O[z].object),delete O[z];delete b[U]}delete n[T]}}function v(T){if(n[T.id]===void 0)return;const b=n[T.id];for(const U in b){const O=b[U];for(const z in O)u(O[z].object),delete O[z];delete b[U]}delete n[T.id]}function w(T){for(const b in n){const U=n[b];if(U[T.id]===void 0)continue;const O=U[T.id];for(const z in O)u(O[z].object),delete O[z];delete U[T.id]}}function I(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:v,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function C_(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function P_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==vn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const I=w===Ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Un&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Cn&&!I)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,v=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:S,maxSamples:v}}function I_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new xi,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,y=M*4;let x=p.clippingState||null;l.value=x,x=u(g,d,y,f);for(let S=0;S!==y;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function L_(i){let e=new WeakMap;function t(o,a){return a===qa?o.mapping=xs:a===Ya&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===qa||a===Ya)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bp(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ls=4,Uu=[.125,.215,.35,.446,.526,.582],ki=20,pa=new Po,Nu=new Pe;let ma=null,ga=0,_a=0,xa=!1;const Fi=(1+Math.sqrt(5))/2,rs=1/Fi,Fu=[new R(-Fi,rs,0),new R(Fi,rs,0),new R(-rs,0,Fi),new R(rs,0,Fi),new R(0,Fi,-rs),new R(0,Fi,rs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],D_=new R;class Rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=D_}=r;ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=xa,e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Ts,format:vn,colorSpace:tn,depthBuffer:!1},s=Ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U_(r)),this._blurMaterial=N_(r,e,t)}return s}_compileMaterial(e){const t=new Re(this._lodPlanes[0],e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,n,s,r){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Nu),h.toneMapping=Si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new Ut({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),m=new Re(new sn,_);let p=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,p=!0):(_.color.copy(Nu),p=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const S=this._cubeSize;Jr(s,x*S,y>2?S:0,S,S),h.setRenderTarget(s),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===xs||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Jr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fu[(s-r-1)%Fu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Re(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ki-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let M=0;for(let w=0;w<ki;++w){const I=w/_,E=Math.exp(-I*I/2);p.push(E),w===0?M+=E:w<m&&(M+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[s],S=3*x*(s>y-ls?s-y+ls:0),v=4*(this._cubeSize-x);Jr(t,S,v,3*x,2*x),l.setRenderTarget(t),l.render(h,pa)}}function U_(i){const e=[],t=[],n=[];let s=i;const r=i-ls+1+Uu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ls?l=Uu[o-i+ls-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let v=0;v<f;v++){const w=v%3*2/3-1,I=v>2?0:-1,E=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];M.set(E,_*g*v),y.set(d,m*g*v);const T=[v,v,v,v,v,v];x.set(T,p*g*v)}const S=new Et;S.setAttribute("position",new Ot(M,_)),S.setAttribute("uv",new Ot(y,m)),S.setAttribute("faceIndex",new Ot(x,p)),e.push(S),s>ls&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ou(i,e,t){const n=new Ei(i,e,t);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function N_(i,e,t){const n=new Float32Array(ki),s=new R(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function ku(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Bu(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}function F_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===qa||l===Ya,u=l===xs||l===vs;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Rl(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Rl(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function O_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function k_(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let y=0,x=M.length;y<x;y+=3){const S=M[y+0],v=M[y+1],w=M[y+2];d.push(S,v,v,w,w,S)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,x=M.length/3-1;y<x;y+=3){const S=y+0,v=y+1,w=y+2;d.push(S,v,v,w,w,S)}}else return;const m=new(ed(d)?sd:id)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function B_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function z_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function H_(i,e,t){const n=new WeakMap,s=new $e;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const v=new Float32Array(x*S*4*h),w=new td(v,x,S,h);w.type=Cn,w.needsUpdate=!0;const I=y*4;for(let T=0;T<h;T++){const b=m[T],U=p[T],O=M[T],z=x*S*4*T;for(let X=0;X<b.count;X++){const W=X*I;f===!0&&(s.fromBufferAttribute(b,X),v[z+W+0]=s.x,v[z+W+1]=s.y,v[z+W+2]=s.z,v[z+W+3]=0),g===!0&&(s.fromBufferAttribute(U,X),v[z+W+4]=s.x,v[z+W+5]=s.y,v[z+W+6]=s.z,v[z+W+7]=0),_===!0&&(s.fromBufferAttribute(O,X),v[z+W+8]=s.x,v[z+W+9]=s.y,v[z+W+10]=s.z,v[z+W+11]=O.itemSize===4?s.w:1)}}d={count:h,texture:w,size:new fe(x,S)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function V_(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const vd=new Ft,zu=new lc(1,1),yd=new td,Md=new bp,bd=new ad,Hu=[],Vu=[],Gu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function Is(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Hu[s];if(r===void 0&&(r=new Float32Array(s),Hu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Io(i,e){let t=Vu[e];t===void 0&&(t=new Int32Array(e),Vu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function G_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function W_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function X_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function Y_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;Xu.set(n),i.uniformMatrix2fv(this.addr,!1,Xu),Bt(t,n)}}function j_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;Wu.set(n),i.uniformMatrix3fv(this.addr,!1,Wu),Bt(t,n)}}function K_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;Gu.set(n),i.uniformMatrix4fv(this.addr,!1,Gu),Bt(t,n)}}function $_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function Z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function Q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function ex(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function sx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zu.compareFunction=Qh,r=zu):r=vd,t.setTexture2D(e||r,s)}function rx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Md,s)}function ox(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bd,s)}function ax(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yd,s)}function lx(i){switch(i){case 5126:return G_;case 35664:return W_;case 35665:return X_;case 35666:return q_;case 35674:return Y_;case 35675:return j_;case 35676:return K_;case 5124:case 35670:return $_;case 35667:case 35671:return J_;case 35668:case 35672:return Z_;case 35669:case 35673:return Q_;case 5125:return ex;case 36294:return tx;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}function cx(i,e){i.uniform1fv(this.addr,e)}function ux(i,e){const t=Is(e,this.size,2);i.uniform2fv(this.addr,t)}function hx(i,e){const t=Is(e,this.size,3);i.uniform3fv(this.addr,t)}function dx(i,e){const t=Is(e,this.size,4);i.uniform4fv(this.addr,t)}function fx(i,e){const t=Is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function px(i,e){const t=Is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mx(i,e){const t=Is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gx(i,e){i.uniform1iv(this.addr,e)}function _x(i,e){i.uniform2iv(this.addr,e)}function xx(i,e){i.uniform3iv(this.addr,e)}function vx(i,e){i.uniform4iv(this.addr,e)}function yx(i,e){i.uniform1uiv(this.addr,e)}function Mx(i,e){i.uniform2uiv(this.addr,e)}function bx(i,e){i.uniform3uiv(this.addr,e)}function Sx(i,e){i.uniform4uiv(this.addr,e)}function wx(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||vd,r[o])}function Ex(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Md,r[o])}function Tx(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||bd,r[o])}function Ax(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yd,r[o])}function Rx(i){switch(i){case 5126:return cx;case 35664:return ux;case 35665:return hx;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return _x;case 35668:case 35672:return xx;case 35669:case 35673:return vx;case 5125:return yx;case 36294:return Mx;case 36295:return bx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Ax}}class Cx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lx(t.type)}}class Px{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rx(t.type)}}class Ix{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function qu(i,e){i.seq.push(e),i.map[e.id]=e}function Lx(i,e,t){const n=i.name,s=n.length;for(va.lastIndex=0;;){const r=va.exec(n),o=va.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qu(t,c===void 0?new Cx(a,i,e):new Px(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ix(a),qu(t,h)),t=h}}}class oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Lx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Yu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Dx=37297;let Ux=0;function Nx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ju=new Be;function Fx(i){Ze._getMatrix(ju,Ze.workingColorSpace,i);const e=`mat3( ${ju.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case _o:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ku(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Nx(i.getShaderSource(e),a)}else return r}function Ox(i,e){const t=Fx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kx(i,e){let t;switch(e){case Uf:t="Linear";break;case Nf:t="Reinhard";break;case Ff:t="Cineon";break;case Hh:t="ACESFilmic";break;case kf:t="AgX";break;case Bf:t="Neutral";break;case Of:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zr=new R;function Bx(){Ze.getLuminanceCoefficients(Zr);const i=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function Hx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function qs(i){return i!==""}function $u(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ju(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(i){return i.replace(Gx,Xx)}const Wx=new Map;function Xx(i,e){let t=Ve[e];if(t===void 0){const n=Wx.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cl(t)}const qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(i){return i.replace(qx,Yx)}function Yx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function jx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Kx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case vs:e="ENVMAP_TYPE_CUBE";break;case To:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $x(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===vs&&(e="ENVMAP_MODE_REFRACTION"),e}function Jx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zh:e="ENVMAP_BLENDING_MULTIPLY";break;case Lf:e="ENVMAP_BLENDING_MIX";break;case Df:e="ENVMAP_BLENDING_ADD";break}return e}function Zx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Qx(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=jx(t),c=Kx(t),u=$x(t),h=Jx(t),d=Zx(t),f=zx(t),g=Hx(r),_=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),p.length>0&&(p+=`
`)):(m=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),p=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Si?kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Ox("linearToOutputTexel",t.outputColorSpace),Bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),o=Cl(o),o=$u(o,t),o=Ju(o,t),a=Cl(a),a=$u(a,t),a=Ju(a,t),o=Zu(o),a=Zu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,x=M+p+a,S=Yu(s,s.VERTEX_SHADER,y),v=Yu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,S),s.attachShader(_,v),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(b){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(S)||"",z=s.getShaderInfoLog(v)||"",X=U.trim(),W=O.trim(),J=z.trim();let V=!0,re=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,v);else{const le=Ku(s,S,"vertex"),be=Ku(s,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+X+`
`+le+`
`+be)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||J==="")&&(re=!1);re&&(b.diagnostics={runnable:V,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(S),s.deleteShader(v),I=new oo(s,_),E=Vx(s,_)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,Dx)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ux++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=v,this}let ev=0;class tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nv(e),t.set(e,n)),n}}class nv{constructor(e){this.id=ev++,this.code=e,this.usedTimes=0}}function iv(i,e,t,n,s,r,o){const a=new Zl,l=new tv,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,T,b,U,O){const z=U.fog,X=O.geometry,W=E.isMeshStandardMaterial?U.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),V=J&&J.mapping===To?J.image.height:null,re=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const le=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,be=le!==void 0?le.length:0;let Xe=0;X.morphAttributes.position!==void 0&&(Xe=1),X.morphAttributes.normal!==void 0&&(Xe=2),X.morphAttributes.color!==void 0&&(Xe=3);let Ye,xt,tt,j;if(re){const nt=Bn[re];Ye=nt.vertexShader,xt=nt.fragmentShader}else Ye=E.vertexShader,xt=E.fragmentShader,l.update(E),tt=l.getVertexShaderID(E),j=l.getFragmentShaderID(E);const Z=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,Te=O.isBatchedMesh===!0,Je=!!E.map,Vt=!!E.matcap,D=!!J,vt=!!E.aoMap,ke=!!E.lightMap,De=!!E.bumpMap,ve=!!E.normalMap,yt=!!E.displacementMap,ye=!!E.emissiveMap,He=!!E.metalnessMap,zt=!!E.roughnessMap,Pt=E.anisotropy>0,L=E.clearcoat>0,A=E.dispersion>0,B=E.iridescence>0,Y=E.sheen>0,$=E.transmission>0,q=Pt&&!!E.anisotropyMap,Ee=L&&!!E.clearcoatMap,oe=L&&!!E.clearcoatNormalMap,Me=L&&!!E.clearcoatRoughnessMap,Se=B&&!!E.iridescenceMap,ie=B&&!!E.iridescenceThicknessMap,de=Y&&!!E.sheenColorMap,Le=Y&&!!E.sheenRoughnessMap,we=!!E.specularMap,ue=!!E.specularColorMap,ze=!!E.specularIntensityMap,N=$&&!!E.transmissionMap,se=$&&!!E.thicknessMap,ae=!!E.gradientMap,me=!!E.alphaMap,ee=E.alphaTest>0,K=!!E.alphaHash,xe=!!E.extensions;let Oe=Si;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const dt={shaderID:re,shaderType:E.type,shaderName:E.name,vertexShader:Ye,fragmentShader:xt,defines:E.defines,customVertexShaderID:tt,customFragmentShaderID:j,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Te,batchingColor:Te&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:tn,alphaToCoverage:!!E.alphaToCoverage,map:Je,matcap:Vt,envMap:D,envMapMode:D&&J.mapping,envMapCubeUVHeight:V,aoMap:vt,lightMap:ke,bumpMap:De,normalMap:ve,displacementMap:d&&yt,emissiveMap:ye,normalMapObjectSpace:ve&&E.normalMapType===Xf,normalMapTangentSpace:ve&&E.normalMapType===Zh,metalnessMap:He,roughnessMap:zt,anisotropy:Pt,anisotropyMap:q,clearcoat:L,clearcoatMap:Ee,clearcoatNormalMap:oe,clearcoatRoughnessMap:Me,dispersion:A,iridescence:B,iridescenceMap:Se,iridescenceThicknessMap:ie,sheen:Y,sheenColorMap:de,sheenRoughnessMap:Le,specularMap:we,specularColorMap:ue,specularIntensityMap:ze,transmission:$,transmissionMap:N,thicknessMap:se,gradientMap:ae,opaque:E.transparent===!1&&E.blending===us&&E.alphaToCoverage===!1,alphaMap:me,alphaTest:ee,alphaHash:K,combine:E.combine,mapUv:Je&&_(E.map.channel),aoMapUv:vt&&_(E.aoMap.channel),lightMapUv:ke&&_(E.lightMap.channel),bumpMapUv:De&&_(E.bumpMap.channel),normalMapUv:ve&&_(E.normalMap.channel),displacementMapUv:yt&&_(E.displacementMap.channel),emissiveMapUv:ye&&_(E.emissiveMap.channel),metalnessMapUv:He&&_(E.metalnessMap.channel),roughnessMapUv:zt&&_(E.roughnessMap.channel),anisotropyMapUv:q&&_(E.anisotropyMap.channel),clearcoatMapUv:Ee&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(E.sheenRoughnessMap.channel),specularMapUv:we&&_(E.specularMap.channel),specularColorMapUv:ue&&_(E.specularColorMap.channel),specularIntensityMapUv:ze&&_(E.specularIntensityMap.channel),transmissionMapUv:N&&_(E.transmissionMap.channel),thicknessMapUv:se&&_(E.thicknessMap.channel),alphaMapUv:me&&_(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ve||Pt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Je||me),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Xe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Je&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===at,decodeVideoTextureEmissive:ye&&E.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(E.emissiveMap.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Nt,flipSided:E.side===Qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:xe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&E.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const b in E.defines)T.push(b),T.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(M(T,E),y(T,E),T.push(i.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function M(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function y(E,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const T=g[E.type];let b;if(T){const U=Bn[T];b=Np.clone(U.uniforms)}else b=E.uniforms;return b}function S(E,T){let b;for(let U=0,O=u.length;U<O;U++){const z=u[U];if(z.cacheKey===T){b=z,++b.usedTimes;break}}return b===void 0&&(b=new Qx(i,T,E,r),u.push(b)),b}function v(E){if(--E.usedTimes===0){const T=u.indexOf(E);u[T]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:v,releaseShaderCache:w,programs:u,dispose:I}}function sv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function rv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function eh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function th(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||rv),n.length>1&&n.sort(d||eh),s.length>1&&s.sort(d||eh)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function ov(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new th,i.set(n,[o])):s>=r.length?(o=new th,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function av(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Pe};break;case"SpotLight":t={position:new R,direction:new R,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function lv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let cv=0;function uv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hv(i){const e=new av,t=lv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new te,o=new te;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,y=0,x=0,S=0,v=0,w=0;c.sort(uv);for(let E=0,T=c.length;E<T;E++){const b=c[E],U=b.color,O=b.intensity,z=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=U.r*O,h+=U.g*O,d+=U.b*O;else if(b.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(b.sh.coefficients[W],O);w++}else if(b.isDirectionalLight){const W=e.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const J=b.shadow,V=t.get(b);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=b.shadow.matrix,M++}n.directional[f]=W,f++}else if(b.isSpotLight){const W=e.get(b);W.position.setFromMatrixPosition(b.matrixWorld),W.color.copy(U).multiplyScalar(O),W.distance=z,W.coneCos=Math.cos(b.angle),W.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),W.decay=b.decay,n.spot[_]=W;const J=b.shadow;if(b.map&&(n.spotLightMap[S]=b.map,S++,J.updateMatrices(b),b.castShadow&&v++),n.spotLightMatrix[_]=J.matrix,b.castShadow){const V=t.get(b);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,x++}_++}else if(b.isRectAreaLight){const W=e.get(b);W.color.copy(U).multiplyScalar(O),W.halfWidth.set(b.width*.5,0,0),W.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=W,m++}else if(b.isPointLight){const W=e.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),W.distance=b.distance,W.decay=b.decay,b.castShadow){const J=b.shadow,V=t.get(b);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=b.shadow.matrix,y++}n.point[g]=W,g++}else if(b.isHemisphereLight){const W=e.get(b);W.skyColor.copy(b.color).multiplyScalar(O),W.groundColor.copy(b.groundColor).multiplyScalar(O),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==S||I.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+S-v,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=w,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=S,I.numLightProbes=w,n.version=cv++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function nh(i){const e=new hv(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function dv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new nh(i),e.set(s,[a])):r>=o.length?(a=new nh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
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
}`;function mv(i,e,t){let n=new rc;const s=new fe,r=new fe,o=new $e,a=new fm({depthPacking:Wf}),l=new pm,c={},u=t.maxTextureSize,h={[li]:Qt,[Qt]:li,[Nt]:Nt},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:fv,fragmentShader:pv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Re(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let p=this.type;this.render=function(v,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const E=i.getRenderTarget(),T=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),U=i.state;U.setBlending(bi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==ni&&this.type===ni,z=p===ni&&this.type!==ni;for(let X=0,W=v.length;X<W;X++){const J=v[X],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const re=V.getFrameExtents();if(s.multiply(re),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,V.mapSize.y=r.y)),V.map===null||O===!0||z===!0){const be=this.type!==ni?{minFilter:en,magFilter:en}:{};V.map!==null&&V.map.dispose(),V.map=new Ei(s.x,s.y,be),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const le=V.getViewportCount();for(let be=0;be<le;be++){const Xe=V.getViewport(be);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),U.viewport(o),V.updateMatrices(J,be),n=V.getFrustum(),x(w,I,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===ni&&M(V,I),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,T,b)};function M(v,w){const I=e.update(_);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Ei(s.x,s.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(w,null,I,d,_,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(w,null,I,f,_,null)}function y(v,w,I,E){let T=null;const b=I.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(b!==void 0)T=b;else if(T=I.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const U=T.uuid,O=w.uuid;let z=c[U];z===void 0&&(z={},c[U]=z);let X=z[O];X===void 0&&(X=T.clone(),z[O]=X,w.addEventListener("dispose",S)),T=X}if(T.visible=w.visible,T.wireframe=w.wireframe,E===ni?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:h[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const U=i.properties.get(T);U.light=I}return T}function x(v,w,I,E,T){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&T===ni)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,v.matrixWorld);const O=e.update(v),z=v.material;if(Array.isArray(z)){const X=O.groups;for(let W=0,J=X.length;W<J;W++){const V=X[W],re=z[V.materialIndex];if(re&&re.visible){const le=y(v,re,E,T);v.onBeforeShadow(i,v,w,I,O,le,V),i.renderBufferDirect(I,null,O,le,v,V),v.onAfterShadow(i,v,w,I,O,le,V)}}}else if(z.visible){const X=y(v,z,E,T);v.onBeforeShadow(i,v,w,I,O,X,null),i.renderBufferDirect(I,null,O,X,v,null),v.onAfterShadow(i,v,w,I,O,X,null)}}const U=v.children;for(let O=0,z=U.length;O<z;O++)x(U[O],w,I,E,T)}function S(v){v.target.removeEventListener("dispose",S);for(const I in c){const E=c[I],T=v.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}const gv={[Ba]:za,[Ha]:Wa,[Va]:Xa,[_s]:Ga,[za]:Ba,[Wa]:Ha,[Xa]:Va,[Ga]:_s};function _v(i,e){function t(){let N=!1;const se=new $e;let ae=null;const me=new $e(0,0,0,0);return{setMask:function(ee){ae!==ee&&!N&&(i.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){N=ee},setClear:function(ee,K,xe,Oe,dt){dt===!0&&(ee*=Oe,K*=Oe,xe*=Oe),se.set(ee,K,xe,Oe),me.equals(se)===!1&&(i.clearColor(ee,K,xe,Oe),me.copy(se))},reset:function(){N=!1,ae=null,me.set(-1,0,0,0)}}}function n(){let N=!1,se=!1,ae=null,me=null,ee=null;return{setReversed:function(K){if(se!==K){const xe=e.get("EXT_clip_control");K?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),se=K;const Oe=ee;ee=null,this.setClear(Oe)}},getReversed:function(){return se},setTest:function(K){K?Z(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(K){ae!==K&&!N&&(i.depthMask(K),ae=K)},setFunc:function(K){if(se&&(K=gv[K]),me!==K){switch(K){case Ba:i.depthFunc(i.NEVER);break;case za:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=K}},setLocked:function(K){N=K},setClear:function(K){ee!==K&&(se&&(K=1-K),i.clearDepth(K),ee=K)},reset:function(){N=!1,ae=null,me=null,ee=null,se=!1}}}function s(){let N=!1,se=null,ae=null,me=null,ee=null,K=null,xe=null,Oe=null,dt=null;return{setTest:function(nt){N||(nt?Z(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(nt){se!==nt&&!N&&(i.stencilMask(nt),se=nt)},setFunc:function(nt,jn,On){(ae!==nt||me!==jn||ee!==On)&&(i.stencilFunc(nt,jn,On),ae=nt,me=jn,ee=On)},setOp:function(nt,jn,On){(K!==nt||xe!==jn||Oe!==On)&&(i.stencilOp(nt,jn,On),K=nt,xe=jn,Oe=On)},setLocked:function(nt){N=nt},setClear:function(nt){dt!==nt&&(i.clearStencil(nt),dt=nt)},reset:function(){N=!1,se=null,ae=null,me=null,ee=null,K=null,xe=null,Oe=null,dt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,y=null,x=null,S=null,v=null,w=new Pe(0,0,0),I=0,E=!1,T=null,b=null,U=null,O=null,z=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=J>=2);let re=null,le={};const be=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),Ye=new $e().fromArray(be),xt=new $e().fromArray(Xe);function tt(N,se,ae,me){const ee=new Uint8Array(4),K=i.createTexture();i.bindTexture(N,K),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<ae;xe++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(se+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return K}const j={};j[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(_s),De(!1),ve(Bc),Z(i.CULL_FACE),vt(bi);function Z(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function ge(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Fe(N,se){return h[N]!==se?(i.bindFramebuffer(N,se),h[N]=se,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=se),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Te(N,se){let ae=f,me=!1;if(N){ae=d.get(se),ae===void 0&&(ae=[],d.set(se,ae));const ee=N.textures;if(ae.length!==ee.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let K=0,xe=ee.length;K<xe;K++)ae[K]=i.COLOR_ATTACHMENT0+K;ae.length=ee.length,me=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,me=!0);me&&i.drawBuffers(ae)}function Je(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Vt={[Oi]:i.FUNC_ADD,[mf]:i.FUNC_SUBTRACT,[gf]:i.FUNC_REVERSE_SUBTRACT};Vt[_f]=i.MIN,Vt[xf]=i.MAX;const D={[vf]:i.ZERO,[yf]:i.ONE,[Mf]:i.SRC_COLOR,[Oa]:i.SRC_ALPHA,[Af]:i.SRC_ALPHA_SATURATE,[Ef]:i.DST_COLOR,[Sf]:i.DST_ALPHA,[bf]:i.ONE_MINUS_SRC_COLOR,[ka]:i.ONE_MINUS_SRC_ALPHA,[Tf]:i.ONE_MINUS_DST_COLOR,[wf]:i.ONE_MINUS_DST_ALPHA,[Rf]:i.CONSTANT_COLOR,[Cf]:i.ONE_MINUS_CONSTANT_COLOR,[Pf]:i.CONSTANT_ALPHA,[If]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(N,se,ae,me,ee,K,xe,Oe,dt,nt){if(N===bi){_===!0&&(ge(i.BLEND),_=!1);return}if(_===!1&&(Z(i.BLEND),_=!0),N!==pf){if(N!==m||nt!==E){if((p!==Oi||x!==Oi)&&(i.blendEquation(i.FUNC_ADD),p=Oi,x=Oi),nt)switch(N){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFunc(i.ONE,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,y=null,S=null,v=null,w.set(0,0,0),I=0,m=N,E=nt}return}ee=ee||se,K=K||ae,xe=xe||me,(se!==p||ee!==x)&&(i.blendEquationSeparate(Vt[se],Vt[ee]),p=se,x=ee),(ae!==M||me!==y||K!==S||xe!==v)&&(i.blendFuncSeparate(D[ae],D[me],D[K],D[xe]),M=ae,y=me,S=K,v=xe),(Oe.equals(w)===!1||dt!==I)&&(i.blendColor(Oe.r,Oe.g,Oe.b,dt),w.copy(Oe),I=dt),m=N,E=!1}function ke(N,se){N.side===Nt?ge(i.CULL_FACE):Z(i.CULL_FACE);let ae=N.side===Qt;se&&(ae=!ae),De(ae),N.blending===us&&N.transparent===!1?vt(bi):vt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const me=N.stencilWrite;a.setTest(me),me&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ye(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(N){T!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),T=N)}function ve(N){N!==df?(Z(i.CULL_FACE),N!==b&&(N===Bc?i.cullFace(i.BACK):N===ff?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),b=N}function yt(N){N!==U&&(W&&i.lineWidth(N),U=N)}function ye(N,se,ae){N?(Z(i.POLYGON_OFFSET_FILL),(O!==se||z!==ae)&&(i.polygonOffset(se,ae),O=se,z=ae)):ge(i.POLYGON_OFFSET_FILL)}function He(N){N?Z(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function zt(N){N===void 0&&(N=i.TEXTURE0+X-1),re!==N&&(i.activeTexture(N),re=N)}function Pt(N,se,ae){ae===void 0&&(re===null?ae=i.TEXTURE0+X-1:ae=re);let me=le[ae];me===void 0&&(me={type:void 0,texture:void 0},le[ae]=me),(me.type!==N||me.texture!==se)&&(re!==ae&&(i.activeTexture(ae),re=ae),i.bindTexture(N,se||j[N]),me.type=N,me.texture=se)}function L(){const N=le[re];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function A(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(N){Ye.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ye.copy(N))}function Le(N){xt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),xt.copy(N))}function we(N,se){let ae=c.get(se);ae===void 0&&(ae=new WeakMap,c.set(se,ae));let me=ae.get(N);me===void 0&&(me=i.getUniformBlockIndex(se,N.name),ae.set(N,me))}function ue(N,se){const me=c.get(se).get(N);l.get(se)!==me&&(i.uniformBlockBinding(se,me,N.__bindingPointIndex),l.set(se,me))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,le={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,y=null,x=null,S=null,v=null,w=new Pe(0,0,0),I=0,E=!1,T=null,b=null,U=null,O=null,z=null,Ye.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ge,bindFramebuffer:Fe,drawBuffers:Te,useProgram:Je,setBlending:vt,setMaterial:ke,setFlipSided:De,setCullFace:ve,setLineWidth:yt,setPolygonOffset:ye,setScissorTest:He,activeTexture:zt,bindTexture:Pt,unbindTexture:L,compressedTexImage2D:A,compressedTexImage3D:B,texImage2D:Se,texImage3D:ie,updateUBOMapping:we,uniformBlockBinding:ue,texStorage2D:oe,texStorage3D:Me,texSubImage2D:Y,texSubImage3D:$,compressedTexSubImage2D:q,compressedTexSubImage3D:Ee,scissor:de,viewport:Le,reset:ze}}function xv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,A){return f?new OffscreenCanvas(L,A):pr("canvas")}function _(L,A,B){let Y=1;const $=Pt(L);if(($.width>B||$.height>B)&&(Y=B/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const q=Math.floor(Y*$.width),Ee=Math.floor(Y*$.height);h===void 0&&(h=g(q,Ee));const oe=A?g(q,Ee):h;return oe.width=q,oe.height=Ee,oe.getContext("2d").drawImage(L,0,0,q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+Ee+")."),oe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,A,B,Y,$=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let q=A;if(A===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),A===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),A===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),A===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),A===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),A===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),A===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),A===i.RGBA){const Ee=$?_o:Ze.getTransfer(Y);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=Ee===at?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(L,A){let B;return L?A===null||A===wi||A===cr?B=i.DEPTH24_STENCIL8:A===Cn?B=i.DEPTH32F_STENCIL8:A===lr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===wi||A===cr?B=i.DEPTH_COMPONENT24:A===Cn?B=i.DEPTH_COMPONENT32F:A===lr&&(B=i.DEPTH_COMPONENT16),B}function S(L,A){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==en&&L.minFilter!==dn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function v(L){const A=L.target;A.removeEventListener("dispose",v),I(A),A.isVideoTexture&&u.delete(A)}function w(L){const A=L.target;A.removeEventListener("dispose",w),T(A)}function I(L){const A=n.get(L);if(A.__webglInit===void 0)return;const B=L.source,Y=d.get(B);if(Y){const $=Y[A.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(L),Object.keys(Y).length===0&&d.delete(B)}n.remove(L)}function E(L){const A=n.get(L);i.deleteTexture(A.__webglTexture);const B=L.source,Y=d.get(B);delete Y[A.__cacheKey],o.memory.textures--}function T(L){const A=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(A.__webglFramebuffer[Y]))for(let $=0;$<A.__webglFramebuffer[Y].length;$++)i.deleteFramebuffer(A.__webglFramebuffer[Y][$]);else i.deleteFramebuffer(A.__webglFramebuffer[Y]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Y])}else{if(Array.isArray(A.__webglFramebuffer))for(let Y=0;Y<A.__webglFramebuffer.length;Y++)i.deleteFramebuffer(A.__webglFramebuffer[Y]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Y=0;Y<A.__webglColorRenderbuffer.length;Y++)A.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Y]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const B=L.textures;for(let Y=0,$=B.length;Y<$;Y++){const q=n.get(B[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(B[Y])}n.remove(L)}let b=0;function U(){b=0}function O(){const L=b;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),b+=1,L}function z(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function X(L,A){const B=n.get(L);if(L.isVideoTexture&&He(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&B.__version!==L.version){const Y=L.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,L,A);return}}else L.isExternalTexture&&(B.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+A)}function W(L,A){const B=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){j(B,L,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+A)}function J(L,A){const B=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){j(B,L,A);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+A)}function V(L,A){const B=n.get(L);if(L.version>0&&B.__version!==L.version){Z(B,L,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+A)}const re={[ci]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},le={[en]:i.NEAREST,[Gh]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[to]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},be={[qf]:i.NEVER,[Zf]:i.ALWAYS,[Yf]:i.LESS,[Qh]:i.LEQUAL,[jf]:i.EQUAL,[Jf]:i.GEQUAL,[Kf]:i.GREATER,[$f]:i.NOTEQUAL};function Xe(L,A){if(A.type===Cn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===dn||A.magFilter===to||A.magFilter===Xs||A.magFilter===ri||A.minFilter===dn||A.minFilter===to||A.minFilter===Xs||A.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,re[A.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,re[A.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,re[A.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,le[A.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,le[A.minFilter]),A.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,be[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===en||A.minFilter!==Xs&&A.minFilter!==ri||A.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ye(L,A){let B=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",v));const Y=A.source;let $=d.get(Y);$===void 0&&($={},d.set(Y,$));const q=z(A);if(q!==L.__cacheKey){$[q]===void 0&&($[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),$[q].usedTimes++;const Ee=$[L.__cacheKey];Ee!==void 0&&($[L.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(A)),L.__cacheKey=q,L.__webglTexture=$[q].texture}return B}function xt(L,A,B){return Math.floor(Math.floor(L/B)/A)}function tt(L,A,B,Y){const q=L.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,B,Y,A.data);else{q.sort((ie,de)=>ie.start-de.start);let Ee=0;for(let ie=1;ie<q.length;ie++){const de=q[Ee],Le=q[ie],we=de.start+de.count,ue=xt(Le.start,A.width,4),ze=xt(de.start,A.width,4);Le.start<=we+1&&ue===ze&&xt(Le.start+Le.count-1,A.width,4)===ue?de.count=Math.max(de.count,Le.start+Le.count-de.start):(++Ee,q[Ee]=Le)}q.length=Ee+1;const oe=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let ie=0,de=q.length;ie<de;ie++){const Le=q[ie],we=Math.floor(Le.start/4),ue=Math.ceil(Le.count/4),ze=we%A.width,N=Math.floor(we/A.width),se=ue,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,ze,N,se,ae,B,Y,A.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function j(L,A,B){let Y=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Y=i.TEXTURE_3D);const $=Ye(L,A),q=A.source;t.bindTexture(Y,L.__webglTexture,i.TEXTURE0+B);const Ee=n.get(q);if(q.version!==Ee.__version||$===!0){t.activeTexture(i.TEXTURE0+B);const oe=Ze.getPrimaries(Ze.workingColorSpace),Me=A.colorSpace===si?null:Ze.getPrimaries(A.colorSpace),Se=A.colorSpace===si||oe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ie=_(A.image,!1,s.maxTextureSize);ie=zt(A,ie);const de=r.convert(A.format,A.colorSpace),Le=r.convert(A.type);let we=y(A.internalFormat,de,Le,A.colorSpace,A.isVideoTexture);Xe(Y,A);let ue;const ze=A.mipmaps,N=A.isVideoTexture!==!0,se=Ee.__version===void 0||$===!0,ae=q.dataReady,me=S(A,ie);if(A.isDepthTexture)we=x(A.format===hr,A.type),se&&(N?t.texStorage2D(i.TEXTURE_2D,1,we,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,we,ie.width,ie.height,0,de,Le,null));else if(A.isDataTexture)if(ze.length>0){N&&se&&t.texStorage2D(i.TEXTURE_2D,me,we,ze[0].width,ze[0].height);for(let ee=0,K=ze.length;ee<K;ee++)ue=ze[ee],N?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,de,Le,ue.data):t.texImage2D(i.TEXTURE_2D,ee,we,ue.width,ue.height,0,de,Le,ue.data);A.generateMipmaps=!1}else N?(se&&t.texStorage2D(i.TEXTURE_2D,me,we,ie.width,ie.height),ae&&tt(A,ie,de,Le)):t.texImage2D(i.TEXTURE_2D,0,we,ie.width,ie.height,0,de,Le,ie.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){N&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,we,ze[0].width,ze[0].height,ie.depth);for(let ee=0,K=ze.length;ee<K;ee++)if(ue=ze[ee],A.format!==vn)if(de!==null)if(N){if(ae)if(A.layerUpdates.size>0){const xe=Du(ue.width,ue.height,A.format,A.type);for(const Oe of A.layerUpdates){const dt=ue.data.subarray(Oe*xe/ue.data.BYTES_PER_ELEMENT,(Oe+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Oe,ue.width,ue.height,1,de,dt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ie.depth,de,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,we,ue.width,ue.height,ie.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ie.depth,de,Le,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,we,ue.width,ue.height,ie.depth,0,de,Le,ue.data)}else{N&&se&&t.texStorage2D(i.TEXTURE_2D,me,we,ze[0].width,ze[0].height);for(let ee=0,K=ze.length;ee<K;ee++)ue=ze[ee],A.format!==vn?de!==null?N?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,de,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,we,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,de,Le,ue.data):t.texImage2D(i.TEXTURE_2D,ee,we,ue.width,ue.height,0,de,Le,ue.data)}else if(A.isDataArrayTexture)if(N){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,we,ie.width,ie.height,ie.depth),ae)if(A.layerUpdates.size>0){const ee=Du(ie.width,ie.height,A.format,A.type);for(const K of A.layerUpdates){const xe=ie.data.subarray(K*ee/ie.data.BYTES_PER_ELEMENT,(K+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,de,Le,xe)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,Le,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ie.width,ie.height,ie.depth,0,de,Le,ie.data);else if(A.isData3DTexture)N?(se&&t.texStorage3D(i.TEXTURE_3D,me,we,ie.width,ie.height,ie.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,Le,ie.data)):t.texImage3D(i.TEXTURE_3D,0,we,ie.width,ie.height,ie.depth,0,de,Le,ie.data);else if(A.isFramebufferTexture){if(se)if(N)t.texStorage2D(i.TEXTURE_2D,me,we,ie.width,ie.height);else{let ee=ie.width,K=ie.height;for(let xe=0;xe<me;xe++)t.texImage2D(i.TEXTURE_2D,xe,we,ee,K,0,de,Le,null),ee>>=1,K>>=1}}else if(ze.length>0){if(N&&se){const ee=Pt(ze[0]);t.texStorage2D(i.TEXTURE_2D,me,we,ee.width,ee.height)}for(let ee=0,K=ze.length;ee<K;ee++)ue=ze[ee],N?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,de,Le,ue):t.texImage2D(i.TEXTURE_2D,ee,we,de,Le,ue);A.generateMipmaps=!1}else if(N){if(se){const ee=Pt(ie);t.texStorage2D(i.TEXTURE_2D,me,we,ee.width,ee.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Le,ie)}else t.texImage2D(i.TEXTURE_2D,0,we,de,Le,ie);m(A)&&p(Y),Ee.__version=q.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Z(L,A,B){if(A.image.length!==6)return;const Y=Ye(L,A),$=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+B);const q=n.get($);if($.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+B);const Ee=Ze.getPrimaries(Ze.workingColorSpace),oe=A.colorSpace===si?null:Ze.getPrimaries(A.colorSpace),Me=A.colorSpace===si||Ee===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Se=A.isCompressedTexture||A.image[0].isCompressedTexture,ie=A.image[0]&&A.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!Se&&!ie?de[K]=_(A.image[K],!0,s.maxCubemapSize):de[K]=ie?A.image[K].image:A.image[K],de[K]=zt(A,de[K]);const Le=de[0],we=r.convert(A.format,A.colorSpace),ue=r.convert(A.type),ze=y(A.internalFormat,we,ue,A.colorSpace),N=A.isVideoTexture!==!0,se=q.__version===void 0||Y===!0,ae=$.dataReady;let me=S(A,Le);Xe(i.TEXTURE_CUBE_MAP,A);let ee;if(Se){N&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ze,Le.width,Le.height);for(let K=0;K<6;K++){ee=de[K].mipmaps;for(let xe=0;xe<ee.length;xe++){const Oe=ee[xe];A.format!==vn?we!==null?N?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,0,0,Oe.width,Oe.height,we,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,ze,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,0,0,Oe.width,Oe.height,we,ue,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,ze,Oe.width,Oe.height,0,we,ue,Oe.data)}}}else{if(ee=A.mipmaps,N&&se){ee.length>0&&me++;const K=Pt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ze,K.width,K.height)}for(let K=0;K<6;K++)if(ie){N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,we,ue,de[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,de[K].width,de[K].height,0,we,ue,de[K].data);for(let xe=0;xe<ee.length;xe++){const dt=ee[xe].image[K].image;N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,0,0,dt.width,dt.height,we,ue,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,ze,dt.width,dt.height,0,we,ue,dt.data)}}else{N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,we,ue,de[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,we,ue,de[K]);for(let xe=0;xe<ee.length;xe++){const Oe=ee[xe];N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,0,0,we,ue,Oe.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,ze,we,ue,Oe.image[K])}}}m(A)&&p(i.TEXTURE_CUBE_MAP),q.__version=$.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ge(L,A,B,Y,$,q){const Ee=r.convert(B.format,B.colorSpace),oe=r.convert(B.type),Me=y(B.internalFormat,Ee,oe,B.colorSpace),Se=n.get(A),ie=n.get(B);if(ie.__renderTarget=A,!Se.__hasExternalTextures){const de=Math.max(1,A.width>>q),Le=Math.max(1,A.height>>q);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,q,Me,de,Le,A.depth,0,Ee,oe,null):t.texImage2D($,q,Me,de,Le,0,Ee,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),ye(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,$,ie.__webglTexture,0,yt(A)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,$,ie.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(L,A,B){if(i.bindRenderbuffer(i.RENDERBUFFER,L),A.depthBuffer){const Y=A.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,q=x(A.stencilBuffer,$),Ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=yt(A);ye(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,q,A.width,A.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,q,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,L)}else{const Y=A.textures;for(let $=0;$<Y.length;$++){const q=Y[$],Ee=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),Me=y(q.internalFormat,Ee,oe,q.colorSpace),Se=yt(A);B&&ye(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Me,A.width,A.height):ye(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,Me,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Me,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(A.depthTexture);Y.__renderTarget=A,(!Y.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),X(A.depthTexture,0);const $=Y.__webglTexture,q=yt(A);if(A.depthTexture.format===ur)ye(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(A.depthTexture.format===hr)ye(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Je(L){const A=n.get(L),B=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const Y=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Y){const $=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),A.__depthDisposeCallback=$}A.__boundDepthTexture=Y}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Y=L.texture.mipmaps;Y&&Y.length>0?Te(A.__webglFramebuffer[0],L):Te(A.__webglFramebuffer,L)}else if(B){A.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Y]),A.__webglDepthbuffer[Y]===void 0)A.__webglDepthbuffer[Y]=i.createRenderbuffer(),Fe(A.__webglDepthbuffer[Y],L,!1);else{const $=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=A.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,q)}}else{const Y=L.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Fe(A.__webglDepthbuffer,L,!1);else{const $=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(L,A,B){const Y=n.get(L);A!==void 0&&ge(Y.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Je(L)}function D(L){const A=L.texture,B=n.get(L),Y=n.get(A);L.addEventListener("dispose",w);const $=L.textures,q=L.isWebGLCubeRenderTarget===!0,Ee=$.length>1;if(Ee||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=A.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let Me=0;Me<A.mipmaps.length;Me++)B.__webglFramebuffer[oe][Me]=i.createFramebuffer()}else B.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<A.mipmaps.length;oe++)B.__webglFramebuffer[oe]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let oe=0,Me=$.length;oe<Me;oe++){const Se=n.get($[oe]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&ye(L)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){const Me=$[oe];B.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);const Se=r.convert(Me.format,Me.colorSpace),ie=r.convert(Me.type),de=y(Me.internalFormat,Se,ie,Me.colorSpace,L.isXRRenderTarget===!0),Le=yt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,de,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(B.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,A);for(let oe=0;oe<6;oe++)if(A.mipmaps&&A.mipmaps.length>0)for(let Me=0;Me<A.mipmaps.length;Me++)ge(B.__webglFramebuffer[oe][Me],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me);else ge(B.__webglFramebuffer[oe],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(A)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let oe=0,Me=$.length;oe<Me;oe++){const Se=$[oe],ie=n.get(Se);let de=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(de=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ie.__webglTexture),Xe(de,Se),ge(B.__webglFramebuffer,L,Se,i.COLOR_ATTACHMENT0+oe,de,0),m(Se)&&p(de)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(oe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),Xe(oe,A),A.mipmaps&&A.mipmaps.length>0)for(let Me=0;Me<A.mipmaps.length;Me++)ge(B.__webglFramebuffer[Me],L,A,i.COLOR_ATTACHMENT0,oe,Me);else ge(B.__webglFramebuffer,L,A,i.COLOR_ATTACHMENT0,oe,0);m(A)&&p(oe),t.unbindTexture()}L.depthBuffer&&Je(L)}function vt(L){const A=L.textures;for(let B=0,Y=A.length;B<Y;B++){const $=A[B];if(m($)){const q=M(L),Ee=n.get($).__webglTexture;t.bindTexture(q,Ee),p(q),t.unbindTexture()}}}const ke=[],De=[];function ve(L){if(L.samples>0){if(ye(L)===!1){const A=L.textures,B=L.width,Y=L.height;let $=i.COLOR_BUFFER_BIT;const q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(L),oe=A.length>1;if(oe)for(let Se=0;Se<A.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Me=L.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Se=0;Se<A.length;Se++){if(L.resolveDepthBuffer&&(L.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);const ie=n.get(A[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,$,i.NEAREST),l===!0&&(ke.length=0,De.length=0,ke.push(i.COLOR_ATTACHMENT0+Se),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ke.push(q),De.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,De)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Se=0;Se<A.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);const ie=n.get(A[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const A=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function yt(L){return Math.min(s.maxSamples,L.samples)}function ye(L){const A=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function He(L){const A=o.render.frame;u.get(L)!==A&&(u.set(L,A),L.update())}function zt(L,A){const B=L.colorSpace,Y=L.format,$=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||B!==tn&&B!==si&&(Ze.getTransfer(B)===at?(Y!==vn||$!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),A}function Pt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Vt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ye}function vv(i,e){function t(n,s=si){let r;const o=Ze.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===Wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wh)return i.BYTE;if(n===Xh)return i.SHORT;if(n===lr)return i.UNSIGNED_SHORT;if(n===Gl)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===jh)return i.ALPHA;if(n===Kh)return i.RGB;if(n===vn)return i.RGBA;if(n===ur)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===ql)return i.RED;if(n===Yl)return i.RED_INTEGER;if(n===$h)return i.RG;if(n===jl)return i.RG_INTEGER;if(n===Kl)return i.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===Ka||n===$a||n===Ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Qa||n===el)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Qa)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===dl||n===fl||n===pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===gl||n===_l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ml)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===vl||n===yl||n===Ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mv=`
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

}`;class bv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ud(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xn({vertexShader:yv,fragmentShader:Mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new Nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sv extends As{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new bv,p={},M=t.getContextAttributes();let y=null,x=null;const S=[],v=[],w=new fe;let I=null;const E=new Yt;E.viewport=new $e;const T=new Yt;T.viewport=new $e;const b=[E,T],U=new Um;let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=S[j];return Z===void 0&&(Z=new ia,S[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=S[j];return Z===void 0&&(Z=new ia,S[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=S[j];return Z===void 0&&(Z=new ia,S[j]=Z),Z.getHandSpace()};function X(j){const Z=v.indexOf(j.inputSource);if(Z===-1)return;const ge=S[Z];ge!==void 0&&(ge.update(j.inputSource,j.frame,c||o),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",J);for(let j=0;j<S.length;j++){const Z=v[j];Z!==null&&(v[j]=null,S[j].disconnect(Z))}O=null,z=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(y),f=null,d=null,h=null,s=null,x=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",J),M.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Fe=null,Te=null;M.depth&&(Te=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=M.stencil?hr:ur,Fe=M.stencil?cr:wi);const Je={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ei(d.textureWidth,d.textureHeight,{format:vn,type:Un,depthTexture:new lc(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ei(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(j){for(let Z=0;Z<j.removed.length;Z++){const ge=j.removed[Z],Fe=v.indexOf(ge);Fe>=0&&(v[Fe]=null,S[Fe].disconnect(ge))}for(let Z=0;Z<j.added.length;Z++){const ge=j.added[Z];let Fe=v.indexOf(ge);if(Fe===-1){for(let Je=0;Je<S.length;Je++)if(Je>=v.length){v.push(ge),Fe=Je;break}else if(v[Je]===null){v[Je]=ge,Fe=Je;break}if(Fe===-1)break}const Te=S[Fe];Te&&Te.connect(ge)}}const V=new R,re=new R;function le(j,Z,ge){V.setFromMatrixPosition(Z.matrixWorld),re.setFromMatrixPosition(ge.matrixWorld);const Fe=V.distanceTo(re),Te=Z.projectionMatrix.elements,Je=ge.projectionMatrix.elements,Vt=Te[14]/(Te[10]-1),D=Te[14]/(Te[10]+1),vt=(Te[9]+1)/Te[5],ke=(Te[9]-1)/Te[5],De=(Te[8]-1)/Te[0],ve=(Je[8]+1)/Je[0],yt=Vt*De,ye=Vt*ve,He=Fe/(-De+ve),zt=He*-De;if(Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(zt),j.translateZ(He),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Pt=Vt+He,L=D+He,A=yt-zt,B=ye+(Fe-zt),Y=vt*D/L*Pt,$=ke*D/L*Pt;j.projectionMatrix.makePerspective(A,B,Y,$,Pt,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function be(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Z=j.near,ge=j.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),U.near=T.near=E.near=Z,U.far=T.far=E.far=ge,(O!==U.near||z!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,z=U.far),U.layers.mask=j.layers.mask|6,E.layers.mask=U.layers.mask&3,T.layers.mask=U.layers.mask&5;const Fe=j.parent,Te=U.cameras;be(U,Fe);for(let Je=0;Je<Te.length;Je++)be(Te[Je],Fe);Te.length===2?le(U,E,T):U.projectionMatrix.copy(E.projectionMatrix),Xe(j,U,Fe)};function Xe(j,Z,ge){ge===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ys*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(j){return p[j]};let Ye=null;function xt(j,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Fe=!1;ge.length!==U.cameras.length&&(U.cameras.length=0,Fe=!0);for(let D=0;D<ge.length;D++){const vt=ge[D];let ke=null;if(f!==null)ke=f.getViewport(vt);else{const ve=h.getViewSubImage(d,vt);ke=ve.viewport,D===0&&(e.setRenderTargetTextures(x,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(x))}let De=b[D];De===void 0&&(De=new Yt,De.layers.enable(D),De.viewport=new $e,b[D]=De),De.matrix.fromArray(vt.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(vt.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(ke.x,ke.y,ke.width,ke.height),D===0&&(U.matrix.copy(De.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Fe===!0&&U.cameras.push(De)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const D=h.getDepthInformation(ge[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let D=0;D<ge.length;D++){const vt=ge[D].camera;if(vt){let ke=p[vt];ke||(ke=new ud,p[vt]=ke);const De=h.getCameraImage(vt);ke.sourceTexture=De}}}}for(let ge=0;ge<S.length;ge++){const Fe=v[ge],Te=S[ge];Fe!==null&&Te!==void 0&&Te.update(Fe,Z,c||o)}Ye&&Ye(j,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const tt=new xd;tt.setAnimationLoop(xt),this.setAnimationLoop=function(j){Ye=j},this.dispose=function(){}}}const Ui=new nn,wv=new te;function Ev(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,x=M.envMapRotation;y&&(m.envMap.value=y,Ui.copy(x),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(wv.makeRotationFromEuler(Ui)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const x=y.program;n.uniformBlockBinding(M,x)}function c(M,y){let x=s[M.id];x===void 0&&(g(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",m));const S=y.program;n.updateUBOMapping(M,S);const v=e.render.frame;r[M.id]!==v&&(d(M),r[M.id]=v)}function u(M){const y=h();M.__bindingPointIndex=y;const x=i.createBuffer(),S=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,S,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=s[M.id],x=M.uniforms,S=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let v=0,w=x.length;v<w;v++){const I=Array.isArray(x[v])?x[v]:[x[v]];for(let E=0,T=I.length;E<T;E++){const b=I[E];if(f(b,v,E,S)===!0){const U=b.__offset,O=Array.isArray(b.value)?b.value:[b.value];let z=0;for(let X=0;X<O.length;X++){const W=O[X],J=_(W);typeof W=="number"||typeof W=="boolean"?(b.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,U+z,b.__data)):W.isMatrix3?(b.__data[0]=W.elements[0],b.__data[1]=W.elements[1],b.__data[2]=W.elements[2],b.__data[3]=0,b.__data[4]=W.elements[3],b.__data[5]=W.elements[4],b.__data[6]=W.elements[5],b.__data[7]=0,b.__data[8]=W.elements[6],b.__data[9]=W.elements[7],b.__data[10]=W.elements[8],b.__data[11]=0):(W.toArray(b.__data,z),z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,y,x,S){const v=M.value,w=y+"_"+x;if(S[w]===void 0)return typeof v=="number"||typeof v=="boolean"?S[w]=v:S[w]=v.clone(),!0;{const I=S[w];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return S[w]=v,!0}else if(I.equals(v)===!1)return I.copy(v),!0}return!1}function g(M){const y=M.uniforms;let x=0;const S=16;for(let w=0,I=y.length;w<I;w++){const E=Array.isArray(y[w])?y[w]:[y[w]];for(let T=0,b=E.length;T<b;T++){const U=E[T],O=Array.isArray(U.value)?U.value:[U.value];for(let z=0,X=O.length;z<X;z++){const W=O[z],J=_(W),V=x%S,re=V%J.boundary,le=V+re;x+=re,le!==0&&S-le<J.storage&&(x+=S-le),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=J.storage}}}const v=x%S;return v>0&&(x+=S-v),M.__size=x,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Av{constructor(e={}){const{canvas:t=mp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=ht;let v=0,w=0,I=null,E=-1,T=null;const b=new $e,U=new $e;let O=null;const z=new Pe(0);let X=0,W=t.width,J=t.height,V=1,re=null,le=null;const be=new $e(0,0,W,J),Xe=new $e(0,0,W,J);let Ye=!1;const xt=new rc;let tt=!1,j=!1;const Z=new te,ge=new R,Fe=new $e,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Vt(){return I===null?V:1}let D=n;function vt(P,F){return t.getContext(P,F)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hl}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",ee,!1),D===null){const F="webgl2";if(D=vt(F,P),D===null)throw vt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ke,De,ve,yt,ye,He,zt,Pt,L,A,B,Y,$,q,Ee,oe,Me,Se,ie,de,Le,we,ue,ze;function N(){ke=new O_(D),ke.init(),we=new vv(D,ke),De=new P_(D,ke,e,we),ve=new _v(D,ke),De.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),yt=new z_(D),ye=new sv,He=new xv(D,ke,ve,ye,De,we,yt),zt=new L_(x),Pt=new F_(x),L=new qm(D),ue=new R_(D,L),A=new k_(D,L,yt,ue),B=new V_(D,A,L,yt),ie=new H_(D,De,He),oe=new I_(ye),Y=new iv(x,zt,Pt,ke,De,ue,oe),$=new Ev(x,ye),q=new ov,Ee=new dv(ke),Se=new A_(x,zt,Pt,ve,B,f,l),Me=new mv(x,B,De),ze=new Tv(D,yt,De,ve),de=new C_(D,ke,yt),Le=new B_(D,ke,yt),yt.programs=Y.programs,x.capabilities=De,x.extensions=ke,x.properties=ye,x.renderLists=q,x.shadowMap=Me,x.state=ve,x.info=yt}N();const se=new Sv(x,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const P=ke.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ke.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(W,J,!1))},this.getSize=function(P){return P.set(W,J)},this.setSize=function(P,F,H=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=P,J=F,t.width=Math.floor(P*V),t.height=Math.floor(F*V),H===!0&&(t.style.width=P+"px",t.style.height=F+"px"),this.setViewport(0,0,P,F)},this.getDrawingBufferSize=function(P){return P.set(W*V,J*V).floor()},this.setDrawingBufferSize=function(P,F,H){W=P,J=F,V=H,t.width=Math.floor(P*H),t.height=Math.floor(F*H),this.setViewport(0,0,P,F)},this.getCurrentViewport=function(P){return P.copy(b)},this.getViewport=function(P){return P.copy(be)},this.setViewport=function(P,F,H,G){P.isVector4?be.set(P.x,P.y,P.z,P.w):be.set(P,F,H,G),ve.viewport(b.copy(be).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(Xe)},this.setScissor=function(P,F,H,G){P.isVector4?Xe.set(P.x,P.y,P.z,P.w):Xe.set(P,F,H,G),ve.scissor(U.copy(Xe).multiplyScalar(V).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(P){ve.setScissorTest(Ye=P)},this.setOpaqueSort=function(P){re=P},this.setTransparentSort=function(P){le=P},this.getClearColor=function(P){return P.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(P=!0,F=!0,H=!0){let G=0;if(P){let k=!1;if(I!==null){const ne=I.texture.format;k=ne===Kl||ne===jl||ne===Yl}if(k){const ne=I.texture.type,he=ne===Un||ne===wi||ne===lr||ne===cr||ne===Wl||ne===Xl,_e=Se.getClearColor(),pe=Se.getClearAlpha(),Ie=_e.r,Ue=_e.g,Ae=_e.b;he?(g[0]=Ie,g[1]=Ue,g[2]=Ae,g[3]=pe,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ie,_[1]=Ue,_[2]=Ae,_[3]=pe,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Se.dispose(),q.dispose(),Ee.dispose(),ye.dispose(),zt.dispose(),Pt.dispose(),B.dispose(),ue.dispose(),ze.dispose(),Y.dispose(),se.dispose(),se.removeEventListener("sessionstart",On),se.removeEventListener("sessionend",Dc),Ai.stop()};function ae(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=yt.autoReset,F=Me.enabled,H=Me.autoUpdate,G=Me.needsUpdate,k=Me.type;N(),yt.autoReset=P,Me.enabled=F,Me.autoUpdate=H,Me.needsUpdate=G,Me.type=k}function ee(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function K(P){const F=P.target;F.removeEventListener("dispose",K),xe(F)}function xe(P){Oe(P),ye.remove(P)}function Oe(P){const F=ye.get(P).programs;F!==void 0&&(F.forEach(function(H){Y.releaseProgram(H)}),P.isShaderMaterial&&Y.releaseShaderCache(P))}this.renderBufferDirect=function(P,F,H,G,k,ne){F===null&&(F=Te);const he=k.isMesh&&k.matrixWorld.determinant()<0,_e=of(P,F,H,G,k);ve.setMaterial(G,he);let pe=H.index,Ie=1;if(G.wireframe===!0){if(pe=A.getWireframeAttribute(H),pe===void 0)return;Ie=2}const Ue=H.drawRange,Ae=H.attributes.position;let je=Ue.start*Ie,rt=(Ue.start+Ue.count)*Ie;ne!==null&&(je=Math.max(je,ne.start*Ie),rt=Math.min(rt,(ne.start+ne.count)*Ie)),pe!==null?(je=Math.max(je,0),rt=Math.min(rt,pe.count)):Ae!=null&&(je=Math.max(je,0),rt=Math.min(rt,Ae.count));const Rt=rt-je;if(Rt<0||Rt===1/0)return;ue.setup(k,G,_e,H,pe);let pt,ct=de;if(pe!==null&&(pt=L.get(pe),ct=Le,ct.setIndex(pt)),k.isMesh)G.wireframe===!0?(ve.setLineWidth(G.wireframeLinewidth*Vt()),ct.setMode(D.LINES)):ct.setMode(D.TRIANGLES);else if(k.isLine){let Ce=G.linewidth;Ce===void 0&&(Ce=1),ve.setLineWidth(Ce*Vt()),k.isLineSegments?ct.setMode(D.LINES):k.isLineLoop?ct.setMode(D.LINE_LOOP):ct.setMode(D.LINE_STRIP)}else k.isPoints?ct.setMode(D.POINTS):k.isSprite&&ct.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))ct.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ce=k._multiDrawStarts,Tt=k._multiDrawCounts,Qe=k._multiDrawCount,an=pe?L.get(pe).bytesPerElement:1,Gi=ye.get(G).currentProgram.getUniforms();for(let ln=0;ln<Qe;ln++)Gi.setValue(D,"_gl_DrawID",ln),ct.render(Ce[ln]/an,Tt[ln])}else if(k.isInstancedMesh)ct.renderInstances(je,Rt,k.count);else if(H.isInstancedBufferGeometry){const Ce=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Tt=Math.min(H.instanceCount,Ce);ct.renderInstances(je,Rt,Tt)}else ct.render(je,Rt)};function dt(P,F,H){P.transparent===!0&&P.side===Nt&&P.forceSinglePass===!1?(P.side=Qt,P.needsUpdate=!0,wr(P,F,H),P.side=li,P.needsUpdate=!0,wr(P,F,H),P.side=Nt):wr(P,F,H)}this.compile=function(P,F,H=null){H===null&&(H=P),p=Ee.get(H),p.init(F),y.push(p),H.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),P!==H&&P.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const G=new Set;return P.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ne=k.material;if(ne)if(Array.isArray(ne))for(let he=0;he<ne.length;he++){const _e=ne[he];dt(_e,H,k),G.add(_e)}else dt(ne,H,k),G.add(ne)}),p=y.pop(),G},this.compileAsync=function(P,F,H=null){const G=this.compile(P,F,H);return new Promise(k=>{function ne(){if(G.forEach(function(he){ye.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){k(P);return}setTimeout(ne,10)}ke.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let nt=null;function jn(P){nt&&nt(P)}function On(){Ai.stop()}function Dc(){Ai.start()}const Ai=new xd;Ai.setAnimationLoop(jn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(P){nt=P,se.setAnimationLoop(P),P===null?Ai.stop():Ai.start()},se.addEventListener("sessionstart",On),se.addEventListener("sessionend",Dc),this.render=function(P,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(F),F=se.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,F,I),p=Ee.get(P,y.length),p.init(F),y.push(p),Z.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),xt.setFromProjectionMatrix(Z,Hn,F.reversedDepth),j=this.localClippingEnabled,tt=oe.init(this.clippingPlanes,j),m=q.get(P,M.length),m.init(),M.push(m),se.enabled===!0&&se.isPresenting===!0){const ne=x.xr.getDepthSensingMesh();ne!==null&&Uo(ne,F,-1/0,x.sortObjects)}Uo(P,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(re,le),Je=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Je&&Se.addToRenderList(m,P),this.info.render.frame++,tt===!0&&oe.beginShadows();const H=p.state.shadowsArray;Me.render(H,P,F),tt===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,k=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ne=F.cameras;if(k.length>0)for(let he=0,_e=ne.length;he<_e;he++){const pe=ne[he];Nc(G,k,P,pe)}Je&&Se.render(P);for(let he=0,_e=ne.length;he<_e;he++){const pe=ne[he];Uc(m,P,pe,pe.viewport)}}else k.length>0&&Nc(G,k,P,F),Je&&Se.render(P),Uc(m,P,F);I!==null&&w===0&&(He.updateMultisampleRenderTarget(I),He.updateRenderTargetMipmap(I)),P.isScene===!0&&P.onAfterRender(x,P,F),ue.resetDefaultState(),E=-1,T=null,y.pop(),y.length>0?(p=y[y.length-1],tt===!0&&oe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Uo(P,F,H,G){if(P.visible===!1)return;if(P.layers.test(F.layers)){if(P.isGroup)H=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(F);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||xt.intersectsSprite(P)){G&&Fe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Z);const he=B.update(P),_e=P.material;_e.visible&&m.push(P,he,_e,H,Fe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||xt.intersectsObject(P))){const he=B.update(P),_e=P.material;if(G&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Fe.copy(P.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Fe.copy(he.boundingSphere.center)),Fe.applyMatrix4(P.matrixWorld).applyMatrix4(Z)),Array.isArray(_e)){const pe=he.groups;for(let Ie=0,Ue=pe.length;Ie<Ue;Ie++){const Ae=pe[Ie],je=_e[Ae.materialIndex];je&&je.visible&&m.push(P,he,je,H,Fe.z,Ae)}}else _e.visible&&m.push(P,he,_e,H,Fe.z,null)}}const ne=P.children;for(let he=0,_e=ne.length;he<_e;he++)Uo(ne[he],F,H,G)}function Uc(P,F,H,G){const k=P.opaque,ne=P.transmissive,he=P.transparent;p.setupLightsView(H),tt===!0&&oe.setGlobalState(x.clippingPlanes,H),G&&ve.viewport(b.copy(G)),k.length>0&&Sr(k,F,H),ne.length>0&&Sr(ne,F,H),he.length>0&&Sr(he,F,H),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Nc(P,F,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Ei(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Ts:Un,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ne=p.state.transmissionRenderTarget[G.id],he=G.viewport||b;ne.setSize(he.z*x.transmissionResolutionScale,he.w*x.transmissionResolutionScale);const _e=x.getRenderTarget(),pe=x.getActiveCubeFace(),Ie=x.getActiveMipmapLevel();x.setRenderTarget(ne),x.getClearColor(z),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Je&&Se.render(H);const Ue=x.toneMapping;x.toneMapping=Si;const Ae=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),tt===!0&&oe.setGlobalState(x.clippingPlanes,G),Sr(P,H,G),He.updateMultisampleRenderTarget(ne),He.updateRenderTargetMipmap(ne),ke.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let rt=0,Rt=F.length;rt<Rt;rt++){const pt=F[rt],ct=pt.object,Ce=pt.geometry,Tt=pt.material,Qe=pt.group;if(Tt.side===Nt&&ct.layers.test(G.layers)){const an=Tt.side;Tt.side=Qt,Tt.needsUpdate=!0,Fc(ct,H,G,Ce,Tt,Qe),Tt.side=an,Tt.needsUpdate=!0,je=!0}}je===!0&&(He.updateMultisampleRenderTarget(ne),He.updateRenderTargetMipmap(ne))}x.setRenderTarget(_e,pe,Ie),x.setClearColor(z,X),Ae!==void 0&&(G.viewport=Ae),x.toneMapping=Ue}function Sr(P,F,H){const G=F.isScene===!0?F.overrideMaterial:null;for(let k=0,ne=P.length;k<ne;k++){const he=P[k],_e=he.object,pe=he.geometry,Ie=he.group;let Ue=he.material;Ue.allowOverride===!0&&G!==null&&(Ue=G),_e.layers.test(H.layers)&&Fc(_e,F,H,pe,Ue,Ie)}}function Fc(P,F,H,G,k,ne){P.onBeforeRender(x,F,H,G,k,ne),P.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),k.onBeforeRender(x,F,H,G,P,ne),k.transparent===!0&&k.side===Nt&&k.forceSinglePass===!1?(k.side=Qt,k.needsUpdate=!0,x.renderBufferDirect(H,F,G,k,P,ne),k.side=li,k.needsUpdate=!0,x.renderBufferDirect(H,F,G,k,P,ne),k.side=Nt):x.renderBufferDirect(H,F,G,k,P,ne),P.onAfterRender(x,F,H,G,k,ne)}function wr(P,F,H){F.isScene!==!0&&(F=Te);const G=ye.get(P),k=p.state.lights,ne=p.state.shadowsArray,he=k.state.version,_e=Y.getParameters(P,k.state,ne,F,H),pe=Y.getProgramCacheKey(_e);let Ie=G.programs;G.environment=P.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(P.isMeshStandardMaterial?Pt:zt).get(P.envMap||G.environment),G.envMapRotation=G.environment!==null&&P.envMap===null?F.environmentRotation:P.envMapRotation,Ie===void 0&&(P.addEventListener("dispose",K),Ie=new Map,G.programs=Ie);let Ue=Ie.get(pe);if(Ue!==void 0){if(G.currentProgram===Ue&&G.lightsStateVersion===he)return kc(P,_e),Ue}else _e.uniforms=Y.getUniforms(P),P.onBeforeCompile(_e,x),Ue=Y.acquireProgram(_e,pe),Ie.set(pe,Ue),G.uniforms=_e.uniforms;const Ae=G.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ae.clippingPlanes=oe.uniform),kc(P,_e),G.needsLights=lf(P),G.lightsStateVersion=he,G.needsLights&&(Ae.ambientLightColor.value=k.state.ambient,Ae.lightProbe.value=k.state.probe,Ae.directionalLights.value=k.state.directional,Ae.directionalLightShadows.value=k.state.directionalShadow,Ae.spotLights.value=k.state.spot,Ae.spotLightShadows.value=k.state.spotShadow,Ae.rectAreaLights.value=k.state.rectArea,Ae.ltc_1.value=k.state.rectAreaLTC1,Ae.ltc_2.value=k.state.rectAreaLTC2,Ae.pointLights.value=k.state.point,Ae.pointLightShadows.value=k.state.pointShadow,Ae.hemisphereLights.value=k.state.hemi,Ae.directionalShadowMap.value=k.state.directionalShadowMap,Ae.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ae.spotShadowMap.value=k.state.spotShadowMap,Ae.spotLightMatrix.value=k.state.spotLightMatrix,Ae.spotLightMap.value=k.state.spotLightMap,Ae.pointShadowMap.value=k.state.pointShadowMap,Ae.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Ue,G.uniformsList=null,Ue}function Oc(P){if(P.uniformsList===null){const F=P.currentProgram.getUniforms();P.uniformsList=oo.seqWithValue(F.seq,P.uniforms)}return P.uniformsList}function kc(P,F){const H=ye.get(P);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function of(P,F,H,G,k){F.isScene!==!0&&(F=Te),He.resetTextureUnits();const ne=F.fog,he=G.isMeshStandardMaterial?F.environment:null,_e=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:tn,pe=(G.isMeshStandardMaterial?Pt:zt).get(G.envMap||he),Ie=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!H.morphAttributes.position,je=!!H.morphAttributes.normal,rt=!!H.morphAttributes.color;let Rt=Si;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Rt=x.toneMapping);const pt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ct=pt!==void 0?pt.length:0,Ce=ye.get(G),Tt=p.state.lights;if(tt===!0&&(j===!0||P!==T)){const Kt=P===T&&G.id===E;oe.setState(G,P,Kt)}let Qe=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Tt.state.version||Ce.outputColorSpace!==_e||k.isBatchedMesh&&Ce.batching===!1||!k.isBatchedMesh&&Ce.batching===!0||k.isBatchedMesh&&Ce.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ce.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ce.instancing===!1||!k.isInstancedMesh&&Ce.instancing===!0||k.isSkinnedMesh&&Ce.skinning===!1||!k.isSkinnedMesh&&Ce.skinning===!0||k.isInstancedMesh&&Ce.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ce.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ce.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ce.instancingMorph===!1&&k.morphTexture!==null||Ce.envMap!==pe||G.fog===!0&&Ce.fog!==ne||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==oe.numPlanes||Ce.numIntersection!==oe.numIntersection)||Ce.vertexAlphas!==Ie||Ce.vertexTangents!==Ue||Ce.morphTargets!==Ae||Ce.morphNormals!==je||Ce.morphColors!==rt||Ce.toneMapping!==Rt||Ce.morphTargetsCount!==ct)&&(Qe=!0):(Qe=!0,Ce.__version=G.version);let an=Ce.currentProgram;Qe===!0&&(an=wr(G,F,k));let Gi=!1,ln=!1,Ds=!1;const At=an.getUniforms(),pn=Ce.uniforms;if(ve.useProgram(an.program)&&(Gi=!0,ln=!0,Ds=!0),G.id!==E&&(E=G.id,ln=!0),Gi||T!==P){ve.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),At.setValue(D,"projectionMatrix",P.projectionMatrix),At.setValue(D,"viewMatrix",P.matrixWorldInverse);const rn=At.map.cameraPosition;rn!==void 0&&rn.setValue(D,ge.setFromMatrixPosition(P.matrixWorld)),De.logarithmicDepthBuffer&&At.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&At.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),T!==P&&(T=P,ln=!0,Ds=!0)}if(k.isSkinnedMesh){At.setOptional(D,k,"bindMatrix"),At.setOptional(D,k,"bindMatrixInverse");const Kt=k.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),At.setValue(D,"boneTexture",Kt.boneTexture,He))}k.isBatchedMesh&&(At.setOptional(D,k,"batchingTexture"),At.setValue(D,"batchingTexture",k._matricesTexture,He),At.setOptional(D,k,"batchingIdTexture"),At.setValue(D,"batchingIdTexture",k._indirectTexture,He),At.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&At.setValue(D,"batchingColorTexture",k._colorsTexture,He));const mn=H.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&ie.update(k,H,an),(ln||Ce.receiveShadow!==k.receiveShadow)&&(Ce.receiveShadow=k.receiveShadow,At.setValue(D,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(pn.envMap.value=pe,pn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(pn.envMapIntensity.value=F.environmentIntensity),ln&&(At.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&af(pn,Ds),ne&&G.fog===!0&&$.refreshFogUniforms(pn,ne),$.refreshMaterialUniforms(pn,G,V,J,p.state.transmissionRenderTarget[P.id]),oo.upload(D,Oc(Ce),pn,He)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(oo.upload(D,Oc(Ce),pn,He),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&At.setValue(D,"center",k.center),At.setValue(D,"modelViewMatrix",k.modelViewMatrix),At.setValue(D,"normalMatrix",k.normalMatrix),At.setValue(D,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Kt=G.uniformsGroups;for(let rn=0,No=Kt.length;rn<No;rn++){const Ri=Kt[rn];ze.update(Ri,an),ze.bind(Ri,an)}}return an}function af(P,F){P.ambientLightColor.needsUpdate=F,P.lightProbe.needsUpdate=F,P.directionalLights.needsUpdate=F,P.directionalLightShadows.needsUpdate=F,P.pointLights.needsUpdate=F,P.pointLightShadows.needsUpdate=F,P.spotLights.needsUpdate=F,P.spotLightShadows.needsUpdate=F,P.rectAreaLights.needsUpdate=F,P.hemisphereLights.needsUpdate=F}function lf(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(P,F,H){const G=ye.get(P);G.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ye.get(P.texture).__webglTexture=F,ye.get(P.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,F){const H=ye.get(P);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const cf=D.createFramebuffer();this.setRenderTarget=function(P,F=0,H=0){I=P,v=F,w=H;let G=!0,k=null,ne=!1,he=!1;if(P){const pe=ye.get(P);if(pe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(pe.__webglFramebuffer===void 0)He.setupRenderTarget(P);else if(pe.__hasExternalTextures)He.rebindTextures(P,ye.get(P.texture).__webglTexture,ye.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ae=P.depthTexture;if(pe.__boundDepthTexture!==Ae){if(Ae!==null&&ye.has(Ae)&&(P.width!==Ae.image.width||P.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(P)}}const Ie=P.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(he=!0);const Ue=ye.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?k=Ue[F][H]:k=Ue[F],ne=!0):P.samples>0&&He.useMultisampledRTT(P)===!1?k=ye.get(P).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[H]:k=Ue,b.copy(P.viewport),U.copy(P.scissor),O=P.scissorTest}else b.copy(be).multiplyScalar(V).floor(),U.copy(Xe).multiplyScalar(V).floor(),O=Ye;if(H!==0&&(k=cf),ve.bindFramebuffer(D.FRAMEBUFFER,k)&&G&&ve.drawBuffers(P,k),ve.viewport(b),ve.scissor(U),ve.setScissorTest(O),ne){const pe=ye.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,H)}else if(he){const pe=F;for(let Ie=0;Ie<P.textures.length;Ie++){const Ue=ye.get(P.textures[Ie]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ie,Ue.__webglTexture,H,pe)}}else if(P!==null&&H!==0){const pe=ye.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,H)}E=-1},this.readRenderTargetPixels=function(P,F,H,G,k,ne,he,_e=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=ye.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){ve.bindFramebuffer(D.FRAMEBUFFER,pe);try{const Ie=P.textures[_e],Ue=Ie.format,Ae=Ie.type;if(!De.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=P.width-G&&H>=0&&H<=P.height-k&&(P.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),D.readPixels(F,H,G,k,we.convert(Ue),we.convert(Ae),ne))}finally{const Ie=I!==null?ye.get(I).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(P,F,H,G,k,ne,he,_e=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=ye.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe)if(F>=0&&F<=P.width-G&&H>=0&&H<=P.height-k){ve.bindFramebuffer(D.FRAMEBUFFER,pe);const Ie=P.textures[_e],Ue=Ie.format,Ae=Ie.type;if(!De.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,ne.byteLength,D.STREAM_READ),P.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),D.readPixels(F,H,G,k,we.convert(Ue),we.convert(Ae),0);const rt=I!==null?ye.get(I).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,rt);const Rt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await gp(D,Rt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ne),D.deleteBuffer(je),D.deleteSync(Rt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,F=null,H=0){const G=Math.pow(2,-H),k=Math.floor(P.image.width*G),ne=Math.floor(P.image.height*G),he=F!==null?F.x:0,_e=F!==null?F.y:0;He.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,he,_e,k,ne),ve.unbindTexture()};const uf=D.createFramebuffer(),hf=D.createFramebuffer();this.copyTextureToTexture=function(P,F,H=null,G=null,k=0,ne=null){ne===null&&(k!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=k,k=0):ne=0);let he,_e,pe,Ie,Ue,Ae,je,rt,Rt;const pt=P.isCompressedTexture?P.mipmaps[ne]:P.image;if(H!==null)he=H.max.x-H.min.x,_e=H.max.y-H.min.y,pe=H.isBox3?H.max.z-H.min.z:1,Ie=H.min.x,Ue=H.min.y,Ae=H.isBox3?H.min.z:0;else{const mn=Math.pow(2,-k);he=Math.floor(pt.width*mn),_e=Math.floor(pt.height*mn),P.isDataArrayTexture?pe=pt.depth:P.isData3DTexture?pe=Math.floor(pt.depth*mn):pe=1,Ie=0,Ue=0,Ae=0}G!==null?(je=G.x,rt=G.y,Rt=G.z):(je=0,rt=0,Rt=0);const ct=we.convert(F.format),Ce=we.convert(F.type);let Tt;F.isData3DTexture?(He.setTexture3D(F,0),Tt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(He.setTexture2DArray(F,0),Tt=D.TEXTURE_2D_ARRAY):(He.setTexture2D(F,0),Tt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Qe=D.getParameter(D.UNPACK_ROW_LENGTH),an=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Gi=D.getParameter(D.UNPACK_SKIP_PIXELS),ln=D.getParameter(D.UNPACK_SKIP_ROWS),Ds=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ie),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ae);const At=P.isDataArrayTexture||P.isData3DTexture,pn=F.isDataArrayTexture||F.isData3DTexture;if(P.isDepthTexture){const mn=ye.get(P),Kt=ye.get(F),rn=ye.get(mn.__renderTarget),No=ye.get(Kt.__renderTarget);ve.bindFramebuffer(D.READ_FRAMEBUFFER,rn.__webglFramebuffer),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,No.__webglFramebuffer);for(let Ri=0;Ri<pe;Ri++)At&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(P).__webglTexture,k,Ae+Ri),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(F).__webglTexture,ne,Rt+Ri)),D.blitFramebuffer(Ie,Ue,he,_e,je,rt,he,_e,D.DEPTH_BUFFER_BIT,D.NEAREST);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||P.isRenderTargetTexture||ye.has(P)){const mn=ye.get(P),Kt=ye.get(F);ve.bindFramebuffer(D.READ_FRAMEBUFFER,uf),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,hf);for(let rn=0;rn<pe;rn++)At?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,mn.__webglTexture,k,Ae+rn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mn.__webglTexture,k),pn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Kt.__webglTexture,ne,Rt+rn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Kt.__webglTexture,ne),k!==0?D.blitFramebuffer(Ie,Ue,he,_e,je,rt,he,_e,D.COLOR_BUFFER_BIT,D.NEAREST):pn?D.copyTexSubImage3D(Tt,ne,je,rt,Rt+rn,Ie,Ue,he,_e):D.copyTexSubImage2D(Tt,ne,je,rt,Ie,Ue,he,_e);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pn?P.isDataTexture||P.isData3DTexture?D.texSubImage3D(Tt,ne,je,rt,Rt,he,_e,pe,ct,Ce,pt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,ne,je,rt,Rt,he,_e,pe,ct,pt.data):D.texSubImage3D(Tt,ne,je,rt,Rt,he,_e,pe,ct,Ce,pt):P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ne,je,rt,he,_e,ct,Ce,pt.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ne,je,rt,pt.width,pt.height,ct,pt.data):D.texSubImage2D(D.TEXTURE_2D,ne,je,rt,he,_e,ct,Ce,pt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,an),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Gi),D.pixelStorei(D.UNPACK_SKIP_ROWS,ln),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ds),ne===0&&F.generateMipmaps&&D.generateMipmap(Tt),ve.unbindTexture()},this.initRenderTarget=function(P){ye.get(P).__webglFramebuffer===void 0&&He.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?He.setTextureCube(P,0):P.isData3DTexture?He.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?He.setTexture2DArray(P,0):He.setTexture2D(P,0),ve.unbindTexture()},this.resetState=function(){v=0,w=0,I=null,ve.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const ih="bomzh:compositing:v1",yi={enabled:!0,brightness:0,contrast:1,saturation:1,gamma:1,temperature:0,tint:0,shadows:0,highlights:0,vignette:0,splitStrength:0,shadowColor:"#53677f",highlightColor:"#d9b87a"},yc={brightness:[-.5,.5,.01],contrast:[.5,1.8,.01],saturation:[0,2,.01],gamma:[.5,1.5,.01],temperature:[-1,1,.01],tint:[-1,1,.01],shadows:[-.4,.4,.01],highlights:[-.4,.4,.01],vignette:[0,.6,.01],splitStrength:[0,.5,.01]},Rv={neutral:{...yi},warm:{...yi,contrast:1.08,saturation:.88,temperature:.18,shadows:.04,splitStrength:.09,vignette:.12},cold:{...yi,contrast:1.12,saturation:.75,temperature:-.2,tint:.025,vignette:.13},faded:{...yi,contrast:.88,saturation:.8,shadows:.07,temperature:.06}};function ya(i){const e={...yi};for(const[t,[n,s]]of Object.entries(yc))Number.isFinite(i?.[t])&&(e[t]=et.clamp(i[t],n,s));for(const t of["shadowColor","highlightColor"])/^#[0-9a-f]{6}$/i.test(i?.[t]??"")&&(e[t]=i[t]);return typeof i?.enabled=="boolean"&&(e.enabled=i.enabled),e}class Cv{constructor(e){this.value={...yi};try{this.storage=e??globalThis.localStorage;const t=JSON.parse(this.storage.getItem(ih));t?.version===1&&(this.value=ya(t.settings))}catch{}this.uniforms={gradeOn:{value:0},gradeA:{value:new $e},gradeB:{value:new $e},gradeC:{value:new R},gradeShadow:{value:new R},gradeHighlight:{value:new R}},this.apply()}get active(){const e=this.value;return e.enabled&&Object.keys(yc).some(t=>Math.abs(e[t]-yi[t])>1e-6)}apply(){const e=this.value,t=this.uniforms;t.gradeOn.value=this.active?1:0,t.gradeA.value.set(e.brightness,e.contrast,e.saturation,e.gamma),t.gradeB.value.set(e.temperature,e.tint,e.shadows,e.highlights),t.gradeC.value.set(e.vignette,e.splitStrength,0);for(const[n,s]of[["shadowColor","gradeShadow"],["highlightColor","gradeHighlight"]]){const r=new Pe(e[n]);r.convertLinearToSRGB(),t[s].value.set(r.r,r.g,r.b)}this.onChange?.()}set(e){this.value=ya({...this.value,...e}),this.apply()}reset(){this.value={...yi},this.apply()}save(){try{return this.storage.setItem(ih,JSON.stringify(this.export())),!0}catch{return!1}}export(){return{version:1,settings:{...this.value}}}import(e){if(e?.version!==1||!e.settings||typeof e.settings!="object"||Array.isArray(e.settings))throw Error("Нужен файл настроек композитинга.");this.value=ya(e.settings),this.apply()}}const Pv=`
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
`;function Mc(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Et;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=sh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const g=sh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function sh(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Ot(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function rh(i,e){if(e===Vf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===bl||e===Jh){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===bl)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}let Qr;function Iv(){if(Qr)return Qr;let i=null,e=null,t=null;if(typeof document<"u"){let n=4189;const s=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296),r=document.createElement("canvas");r.width=256,r.height=512;const o=r.getContext("2d");o.fillStyle="#b0ae96",o.fillRect(0,0,256,512);for(let f=0;f<1700;f++){const g=s()*256,_=s()*512;o.fillStyle=f%3?"#6a645341":"#e4ddbf52",o.fillRect(g,_,.5+s()*3,2+s()*22)}for(let f=0;f<220;f++){const g=s()*256,_=s()*512;o.fillStyle="#565243",o.beginPath(),o.moveTo(g,_),o.lineTo(g+s()*12,_+s()*4),o.lineTo(g+s()*7,_+3+s()*18),o.lineTo(g-3,_+s()*12),o.fill(),o.strokeStyle="#d9d2b0",o.lineWidth=.7,o.stroke()}i=new Gn(r),i.colorSpace=ht;const a=document.createElement("canvas"),l=typeof location<"u"&&new URLSearchParams(location.search).get("quality")==="high",c=l?2:1;a.width=1024*c,a.height=512*c;const u=a.getContext("2d");u.scale(c,c);for(let f=0;f<8;f++){u.save(),u.translate(f%4*256,Math.floor(f/4)*256),u.beginPath(),u.rect(0,0,256,256),u.clip();const g=u.createLinearGradient(0,0,0,256);if(g.addColorStop(0,"#161e1e"),g.addColorStop(.65,["#30382e","#393a30","#303d3d","#3a3530"][f%4]),g.addColorStop(1,"#192420"),u.fillStyle=g,u.fillRect(0,0,256,256),f%4===2){for(let p=30;p<190;p+=12)u.fillStyle=p%24?"#7d8170":"#a4a28a",u.fillRect(4,p,248,7);u.strokeStyle="#4a534a",u.lineWidth=2,u.beginPath(),u.moveTo(54,15),u.lineTo(54,205),u.moveTo(205,15),u.lineTo(205,205),u.stroke()}else for(const p of[0,1]){const M=f%3===0?82:45+f*3;u.save(),p&&(u.translate(256,0),u.scale(-1,1)),u.fillStyle=["#9b9c86","#a4987c","#898f83"][f%3],u.beginPath(),u.moveTo(0,0),u.lineTo(M,0),u.bezierCurveTo(M-8,80,M-25,150,M+5,246),u.lineTo(0,256),u.closePath(),u.fill();for(let y=6;y<M-5;y+=9){const x=u.createLinearGradient(y,0,y+8,0);x.addColorStop(0,"#18211d7a"),x.addColorStop(.6,"#dfdac23b"),x.addColorStop(1,"#4850442b"),u.fillStyle=x,u.fillRect(y,0,7,256)}u.restore()}const _=u.createLinearGradient(0,0,180,256);_.addColorStop(0,"#9caeb64a"),_.addColorStop(.5,"#8daba916"),_.addColorStop(1,"#111b211b"),u.fillStyle=_,u.fillRect(0,0,256,256),u.fillStyle="#a7b5ab12",u.beginPath(),u.moveTo(5,12),u.lineTo(230,12),u.lineTo(145,100),u.lineTo(5,152),u.fill();for(let p=0;p<80;p++){const M=s()*256,y=s()*140,x=20+s()*120,S=u.createLinearGradient(0,y,0,y+x);S.addColorStop(0,"#5f614c65"),S.addColorStop(1,"#666d5500"),u.fillStyle=S,u.fillRect(M,y,.5+s()*2,x)}for(let p=0;p<1500;p++)u.fillStyle=p%3?"#c0b8951f":"#1a242025",u.fillRect(s()*256,s()*256,.5+s()*1.5,.5+s()*2);const m=u.createRadialGradient(128,118,55,128,128,180);if(m.addColorStop(0,"#17201b00"),m.addColorStop(.65,"#20281f2b"),m.addColorStop(1,"#111a16d9"),u.fillStyle=m,u.fillRect(0,0,256,256),u.strokeStyle="#333d2a",u.lineWidth=9,u.strokeRect(4,4,248,248),f===3||f===7){u.strokeStyle="#bbc4b37a",u.lineWidth=.9;const p=f===3?175:65,M=f===3?83:170;for(const[y,x]of[[-45,-80],[75,-35],[-90,55],[25,90]])u.beginPath(),u.moveTo(p,M),u.lineTo(p+y*.35+8,M+x*.4),u.lineTo(p+y,Math.max(0,Math.min(256,M+x))),u.stroke()}u.restore()}e=new Gn(a),e.colorSpace=ht;const h=document.createElement("canvas");h.width=h.height=256;const d=h.getContext("2d");for(let f=0;f<70;f++){const g=10+s()*236,_=5+s()*25,m=45+s()*200,p=d.createLinearGradient(0,_,0,_+m);p.addColorStop(0,"#3e41298c"),p.addColorStop(.4,"#43432d48"),p.addColorStop(1,"#39442f00"),d.fillStyle=p,d.fillRect(g,_,1+s()*5,m)}t=new Gn(h),t.colorSpace=ht}return Qr={paint:new ft({name:"Aged window chipped wood",color:"#c8c6ac",map:i,roughness:.94}),pane:new ft({name:"Aged window dusty glass and curtains",color:e?"#ffffff":"#485448",map:e,roughness:.76,metalness:.04}),recess:new ft({name:"Aged window recess and fittings",color:"#353b32",roughness:.9}),drips:new ft({name:"Aged window sill runoff",map:t,transparent:!0,opacity:.8,depthWrite:!1,roughness:1,alphaTest:.015,polygonOffset:!0,polygonOffsetFactor:-3})},Qr}function bc(){const i=Iv(),e=new Map,t=new Map,n={count:0,parts:0,styles:new Set},s=(r,o,a)=>{e.has(o)||e.set(o,[]),e.get(o).push(r.clone().applyMatrix4(a)),n.parts++};return{stats:n,add(r,o,a,l=1.3,c=1.5,u=0,h=0){h=(h%8+8)%8,n.count++,n.styles.add(h);const d=new te().compose(new R(r,o,a),new Ke().setFromAxisAngle(new R(0,1,0),u),new R(1,1,1)),f=(y,x,S,v,w,I,E)=>{const T=[y,x,S].join(":");t.has(T)||t.set(T,new sn(y,x,S)),s(t.get(T),v,d.clone().multiply(new te().makeTranslation(w,I,E)))},g=l-.19,_=c-.2;f(l-.04,c-.04,.025,i.recess,0,0,.01);const m=new Nn(g,_),p=m.attributes.uv;for(let y=0;y<p.count;y++)p.setXY(y,(h%4+(.025+p.getX(y)*.95))/4,(1-Math.floor(h/4)+(.025+p.getY(y)*.95))/2);s(m,i.pane,d.clone().multiply(new te().makeTranslation(0,0,.031))),m.dispose();for(const y of[-l/2+.045,l/2-.045])f(.09,c,.14,i.paint,y,0,.085);for(const y of[-c/2+.045,c/2-.045])f(l-.1,.09,.14,i.paint,0,y,.085);for(const y of[-g/2+.025,g/2-.025])f(.04,_,.085,i.paint,y,0,.085);for(const y of[-_/2+.025,_/2-.025])f(g,.04,.085,i.paint,0,y,.085);const M=h%3===1?.18*c:.1*c;f(g,.055,.12,i.paint,0,M,.11),f(.047,_,.12,i.paint,h%3===0?-.07:0,0,.11),f(.03,.105,.035,i.recess,(h%3===0?-.07:0)+.012,-.17*c,.18);for(const y of[-.28*c,.3*c])f(.033,.075,.045,i.recess,-l/2+.12,y,.17);if(f(l+.2,.1,.38,i.paint,0,-c/2-.04,.12),f(l+.1,.035,.28,i.recess,0,-c/2-.105,.095),i.drips.map){const y=new Nn(l+.12,.55);s(y,i.drips,d.clone().multiply(new te().makeTranslation(0,-c/2-.34,.004))),y.dispose()}},finish(){const r=new Lt;r.name="Detailed_aged_windows";for(const[o,a]of e){const l=Mc(a);for(const u of a)u.dispose();const c=new Re(l,o);c.name=o.name,c.castShadow=o!==i.drips,c.receiveShadow=!0,o===i.drips&&(c.userData.noShadow=!0),r.add(c)}for(const o of t.values())o.dispose();return r.userData.windowCount=n.count,r.userData.windowStyles=n.styles.size,r}}}function Lv(i){const e=i.getObjectByName("Detailed_aged_windows");if(e)return e;i.updateMatrixWorld(!0);const t=bc(),n=new Set,s=[];if(i.traverse(o=>{if(!o.isMesh||Array.isArray(o.material))return;const a=o.material.name;if(/COURT_Curtains/i.test(a)){s.push(o);return}if(!/COURT_SmokyGlass/i.test(a))return;const l=o.geometry,c=l.attributes.position,u=l.index;for(let h=0;h<(u?.count??c.count);h+=3){const d=[0,1,2].map(M=>new R().fromBufferAttribute(c,u?u.getX(h+M):h+M).applyMatrix4(o.matrixWorld)),f=d[1].clone().sub(d[0]).cross(d[2].clone().sub(d[0])).normalize();if(Math.abs(f.z)<.98)continue;const g=new fn().setFromPoints(d),_=g.getSize(new R),m=g.getCenter(new R);if(_.x<.3||_.x>1.5||_.y<.5||_.y>2||_.z>.03)continue;const p=[m.x,m.y,m.z,_.x,_.y].map(M=>M.toFixed(2)).join(":");n.has(p)||(n.add(p),t.add(m.x,m.y,m.z+.02,_.x+.16,_.y+.16,0,n.size%8))}s.push(o)}),!t.stats.count)return null;for(const o of s)o.visible=!1;const r=t.finish();return r.applyMatrix4(i.matrixWorld.clone().invert()),i.add(r),r}const Ys=5,Sd=3,eo=Ys+Sd;function Pl(i,e="street"){const t=((i+(e==="entrance"?Ys:0))%eo+eo)%eo,n=t<Ys?"street":"entrance",s=n==="street"?t:t-Ys;return{location:n,section:s,courtyard:n==="street"&&[1,3,4].includes(s),variant:((Math.floor(i/eo)+s)%3+3)%3,last:s===(n==="street"?Ys:Sd)-1}}function Dv(i,e="street"){const t=Pl(i,e),n=Pl(i+1,e);return t.location!==n.location?{to:n.location,x:i*26+(t.location==="street"?23.2:15.15),z:-1.45,doorZ:-3.18}:null}function Uv(i,e=0){const t=new Lt;t.name=`Courtyard_${e}`,t.userData.courtyard=!0;const n=new Map;i.traverse(v=>{if(v.isMesh)for(const w of Array.isArray(v.material)?v.material:[v.material])n.set(w.name,w)});const s=(v,w,I)=>{const E=[...n.values()].find(b=>v.test(b.name)),T=E?E.clone():new ft({color:I,roughness:.95});T.name=w;for(const b of["map","normalMap","roughnessMap","metalnessMap"])T[b]&&(T[b]=T[b].clone(),T[b].wrapS=T[b].wrapT=ci,T[b].needsUpdate=!0);return T},r=s(/brick/,"Courtyard brick","#896e55"),o=s(/Limestone/,"Courtyard limestone","#a49d84"),a=s(/Asphalt/,"Courtyard asphalt","#64675c"),l=s(/DampFoundation/,"Courtyard damp foundation","#555e4b"),c=s(/Old wood/,"Courtyard old wood","#78644b"),u=new ft({color:"#485b4b",roughness:.86,metalness:.4}),h=new ft({color:"#a5a38d",roughness:1}),d=new ft({color:"#515541",roughness:1}),f=new ft({color:e===1?"#777146":"#536647",roughness:1}),g=bc(),_=new Map,m=new Map;function p(v,w,I,E,T,b,U,O,z=0){const X=[w,I,E].join(":");if(!m.has(X)){const re=new sn(w,I,E),le=re.attributes.position,be=re.attributes.normal,Xe=re.attributes.uv;for(let Ye=0;Ye<le.count;Ye++)Xe.setXY(Ye,(Math.abs(be.getX(Ye))>.5?le.getZ(Ye):le.getX(Ye))/2,(Math.abs(be.getY(Ye))>.5?le.getZ(Ye):le.getY(Ye))/2);m.set(X,re)}const W=m.get(X),J=new Re(W,T);J.name=v,J.position.set(b,U,O),J.rotation.y=z,J.updateMatrix();const V=X+T.uuid;return _.has(V)||_.set(V,{geometry:W,material:T,items:[]}),_.get(V).items.push(J),J}p("Yard level ground",26,.16,25,a,13,-.08,1.5),p("Rear apartment building",17,7.2,.7,e===1?o:r,13,3.6,-9.5),p("Rear foundation",17,.55,.78,l,13,.275,-9.43);for(const v of[2.25,23.75])p("Street-facing wing",4.5,7.8,6.1,e===2?o:r,v,3.9,-6.5),p("Wing foundation",4.55,.55,6.15,l,v,.275,-6.48);for(let v=0;v<3;v++)for(const[w,I]of[6.4,9.7,12.8,16.2,19.5].entries())g.add(I,1.65+v*1.9,-9.145,1.3,1.5,0,v*5+w+e*3);for(const v of[0,1])for(let w=0;w<3;w++)for(const[I,E]of[1.25,3.25].entries())v===1&&w===0&&E===3.25||g.add(v?26-E:E,1.6+w*2,-3.445,1.2,1.4,0,v*5+w*2+I+e);p("Wing entrance door",1.42,2.4,.16,u,23.2,1.2,-3.28),p("Wing entrance canopy",1.9,.1,.8,u,23.2,2.65,-2.95);for(const v of[-1,1])for(let w=0;w<3;w++)for(const[I,E]of[-5.2,-7.6].entries())g.add(v<0?4.505:21.495,1.6+w*1.9,E,1.2,1.4,v<0?Math.PI/2:-Math.PI/2,w*3+I+e+(v>0?4:0));p("Low rear path",17,.06,1.3,o,13,.02,-7.5),p("Rear porch door",1.3,2.35,.18,u,15.15,1.175,-8.94),p("Porch canopy",2.1,.12,1.1,u,15.15,2.65,-8.5);const M=(v,w)=>{p("Yard bench seat",2,.1,.55,c,v,.48,w),p("Yard bench back",2,.45,.1,c,v,.8,w-.24);for(const I of[-.72,.72])p("Bench supports",.08,.48,.4,u,v+I,.24,w)};M(7.6,-5.2),e!==2&&M(18.1,-6.3);for(const v of[5.6,20.4]){p("Planter kerb",1.6,.28,1.4,o,v,.14,-5.9),p("Planter soil",1.4,.07,1.2,d,v,.3,-5.9);const w=new hc(.55,1),I=[];for(let E=0;E<3;E++){const T=new Re(w,f);T.position.set(v+(E-1)*.33,.65+E%2*.18,-5.9),T.scale.set(.8,.8+E%2*.2,.8),T.updateMatrix(),I.push(T)}_.set("Shrub_"+v,{geometry:w,material:f,items:I})}if(e===0){for(const v of[10.8,13.1])p("Clothes line posts",.06,3,.06,u,v,1.5,-6.3);p("Clothes line",2.3,.022,.022,u,11.95,2.8,-6.3);for(let v=0;v<3;v++)p("Hanging laundry",.5,.75,.025,v%2?h:c,11.25+v*.65,2.4,-6.3)}if(e===1){for(const v of[10.2,12.8])p("Playground bar posts",.07,2.6,.07,u,v,1.3,-5.4);p("Playground bar",2.67,.07,.07,u,11.5,2.58,-5.4),p("Abandoned sandbox",3,.22,2,c,11.5,.11,-6.7),p("Sandbox fill",2.8,.04,1.8,d,11.5,.23,-6.7)}if(e===2){p("Service dumpster",1.6,1.15,1.1,u,11.6,.575,-5.8),p("Dumpster lid",1.7,.1,1.2,u,11.6,1.2,-5.8);for(let v=0;v<4;v++)p("Stacked pallets",1.25,.12,.9,c,18,.08+v*.14,-5.4)}for(let v=0;v<3;v++)p("Rear downpipe",.09,6.8,.1,u,5.2+v*7.5,3.4,-9.06);const y=new Map;let x=0;for(const{geometry:v,material:w,items:I}of _.values()){y.has(w)||y.set(w,[]);for(const E of I)y.get(w).push(v.clone().applyMatrix4(E.matrix)),x++}for(const[v,w]of y){const I=Mc(w);for(const T of w)T.dispose();const E=new Re(I,v);E.castShadow=!0,E.receiveShadow=!0,E.name=v.name,t.add(E)}const S=g.finish();return t.add(...S.children.slice()),t.userData.windowCount=g.stats.count,t.userData.windowStyles=g.stats.styles.size,t.userData.staticBoxes=x+g.stats.parts,t}class Nv{constructor(e){this.root=new Lt,this.root.visible=!1,e.add(this.root);const t=new ft({color:"#41554b",roughness:.9}),n=new ft({color:"#8a8c74",roughness:1}),s=(r,o,a,l,c,u,h)=>{const d=new Re(new sn(r,o,a),l);d.position.set(c,u,h),d.castShadow=!0,this.root.add(d)};s(1.45,2.45,.2,t,0,1.225,-3.14);for(const r of[-.78,.78])s(.12,2.6,.27,n,r,1.3,-3.09);s(1.68,.12,.27,n,0,2.6,-3.09),s(.18,.04,.08,n,.43,1.05,-2.99),this.sign=new Re(new Nn(1.65,.37),new Ut({color:"#d8dbb9"})),this.sign.position.set(0,2.92,-3),this.root.add(this.sign),this.maps={};for(const[r,o]of[["entrance","ПОДЪЕЗД"],["street","ВЫХОД ВО ДВОР"]])if(typeof document<"u"){const a=document.createElement("canvas");a.width=512,a.height=128;const l=a.getContext("2d");l.fillStyle=r==="street"?"#3c5b45":"#313e36",l.fillRect(0,0,512,128),l.strokeStyle="#d7ceb0",l.lineWidth=6,l.strokeRect(6,6,500,116),l.fillStyle="#e9e2c8",l.font="bold 46px Arial",l.textAlign="center",l.fillText(o,256,82,470),this.maps[r]=new Gn(a),this.maps[r].colorSpace=ht}this.marker=new Re(new Vi(.38,.44,32),new Ut({color:"#e2c36a",transparent:!0,opacity:.75,depthWrite:!1,side:Nt})),this.marker.rotation.x=-Math.PI/2,this.marker.position.set(0,.018,-1.45),this.root.add(this.marker)}set(e){this.exit=e,this.root.visible=!!e,e&&(this.root.position.x=e.x,this.sign.material.map=this.maps[e.to]??null,this.sign.material.needsUpdate=!0)}near(e){return!!this.exit&&Math.hypot(e.x-this.exit.x,e.z-this.exit.z)<1.4}update(e){this.marker.material.opacity=.55+Math.sin(e*3)*.18}}class Fv extends Et{constructor(e=new Re,t=new R,n=new nn,s=new R(1,1,1)){super();const r=[],o=[],a=[],l=new R,c=new Be().getNormalMatrix(e.matrixWorld),u=new te;u.makeRotationFromEuler(n),u.setPosition(t);const h=new te;h.copy(u).invert(),d(),this.setAttribute("position",new We(r,3)),this.setAttribute("uv",new We(a,2)),o.length>0&&this.setAttribute("normal",new We(o,3));function d(){let m=[];const p=new R,M=new R,y=e.geometry,x=y.attributes.position,S=y.attributes.normal;if(y.index!==null){const v=y.index;for(let w=0;w<v.count;w++)p.fromBufferAttribute(x,v.getX(w)),S?(M.fromBufferAttribute(S,v.getX(w)),f(m,p,M)):f(m,p)}else{if(x===void 0)return;for(let v=0;v<x.count;v++)p.fromBufferAttribute(x,v),S?(M.fromBufferAttribute(S,v),f(m,p,M)):f(m,p)}m=g(m,l.set(1,0,0)),m=g(m,l.set(-1,0,0)),m=g(m,l.set(0,1,0)),m=g(m,l.set(0,-1,0)),m=g(m,l.set(0,0,1)),m=g(m,l.set(0,0,-1));for(let v=0;v<m.length;v++){const w=m[v];a.push(.5+w.position.x/s.x,.5+w.position.y/s.y),w.position.applyMatrix4(u),r.push(w.position.x,w.position.y,w.position.z),w.normal!==null&&o.push(w.normal.x,w.normal.y,w.normal.z)}}function f(m,p,M=null){p.applyMatrix4(e.matrixWorld),p.applyMatrix4(h),M?(M.applyNormalMatrix(c),m.push(new Ma(p.clone(),M.clone()))):m.push(new Ma(p.clone()))}function g(m,p){const M=[],y=.5*Math.abs(s.dot(p));for(let x=0;x<m.length;x+=3){let S=0,v,w,I,E;const T=m[x+0].position.dot(p)-y,b=m[x+1].position.dot(p)-y,U=m[x+2].position.dot(p)-y,O=T>0,z=b>0,X=U>0;switch(S=(O?1:0)+(z?1:0)+(X?1:0),S){case 0:{M.push(m[x]),M.push(m[x+1]),M.push(m[x+2]);break}case 1:{if(O&&(v=m[x+1],w=m[x+2],I=_(m[x],v,p,y),E=_(m[x],w,p,y)),z){v=m[x],w=m[x+2],I=_(m[x+1],v,p,y),E=_(m[x+1],w,p,y),M.push(I),M.push(w.clone()),M.push(v.clone()),M.push(w.clone()),M.push(I.clone()),M.push(E);break}X&&(v=m[x],w=m[x+1],I=_(m[x+2],v,p,y),E=_(m[x+2],w,p,y)),M.push(v.clone()),M.push(w.clone()),M.push(I),M.push(E),M.push(I.clone()),M.push(w.clone());break}case 2:{O||(v=m[x].clone(),w=_(v,m[x+1],p,y),I=_(v,m[x+2],p,y),M.push(v),M.push(w),M.push(I)),z||(v=m[x+1].clone(),w=_(v,m[x+2],p,y),I=_(v,m[x],p,y),M.push(v),M.push(w),M.push(I)),X||(v=m[x+2].clone(),w=_(v,m[x],p,y),I=_(v,m[x+1],p,y),M.push(v),M.push(w),M.push(I));break}}}return M}function _(m,p,M,y){const x=m.position.dot(M)-y,S=p.position.dot(M)-y,v=x/(x-S),w=new R(m.position.x+v*(p.position.x-m.position.x),m.position.y+v*(p.position.y-m.position.y),m.position.z+v*(p.position.z-m.position.z));let I=null;return m.normal!==null&&p.normal!==null&&(I=new R(m.normal.x+v*(p.normal.x-m.normal.x),m.normal.y+v*(p.normal.y-m.normal.y),m.normal.z+v*(p.normal.z-m.normal.z))),new Ma(w,I)}}}class Ma{constructor(e,t=null){this.position=e,this.normal=t}clone(){const e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}}let Vs;function Ov(){if(Vs)return Vs;if(typeof document>"u")return null;const i=document.createElement("canvas"),e=typeof location<"u"&&new URLSearchParams(location.search).get("quality")==="high"?2048:1024;i.width=e,i.height=e/2;const t=i.getContext("2d"),n=e/1024;t.scale(n,n);let s=7149;const r=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296);for(let a=0;a<8;a++){t.save(),t.translate(a%4*256,Math.floor(a/4)*256),t.beginPath(),t.rect(5,5,246,246),t.clip();const l=a>=4;for(let u=0;u<170;u++){const h=10+r()*236,d=15+r()*228,f=6+r()*(l?34:20),g=t.createRadialGradient(h,d,0,h,d,f);g.addColorStop(0,l?"#29322482":"#3c302578"),g.addColorStop(1,"#31352100"),t.fillStyle=g,t.fillRect(h-f,d-f,f*2,f*2)}if(l)for(let u=0;u<650;u++)t.fillStyle=u%3?"#4e5c3458":"#282e2558",t.beginPath(),t.ellipse(14+r()*228,14+r()*228,.5+r()*6,.5+r()*4,r()*3,0,Math.PI*2),t.fill();else for(let u=0;u<85;u++){const h=12+r()*232,d=18+r()*70,f=25+r()*180,g=t.createLinearGradient(0,d,0,d+f);g.addColorStop(0,"#4c3723ad"),g.addColorStop(.45,"#4d422c60"),g.addColorStop(1,"#41452900"),t.fillStyle=g,t.fillRect(h,d,.8+r()*4,f)}for(let u=0;u<1600;u++)t.fillStyle=u%4?"#2c302a38":"#99815a50",t.fillRect(8+r()*240,8+r()*240,.3+r()*1.3,.3+r()*1.8);for(let u=0;u<14;u++){const h=15+r()*220,d=20+r()*215;t.strokeStyle="#292b2560",t.lineWidth=.4+r()*.8,t.beginPath(),t.moveTo(h,d),t.lineTo(h+r()*8,d+10),t.lineTo(h-5,d+17),t.lineTo(h+4,d+26),t.stroke()}t.globalCompositeOperation="destination-out";for(let u=0;u<140;u++)t.fillStyle=`rgba(0,0,0,${.12+r()*.6})`,t.fillRect(8+r()*240,8+r()*240,1+r()*4,.5+r()*2);t.globalCompositeOperation="destination-in";const c=t.createRadialGradient(128,128,55,128,128,127);c.addColorStop(0,"#ffffffff"),c.addColorStop(1,"#ffffff00"),t.fillStyle=c,t.fillRect(0,0,256,256),t.restore()}const o=new Gn(i);return o.colorSpace=ht,o.anisotropy=4,o.name="Shared detailed grime atlas",Vs=new ft({map:o,transparent:!0,alphaTest:.02,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Vs.name="Dirt damp and runoff",Vs}const kv=/brick|limestone|concrete wall|dampfoundation|entrance aged plaster|entrance chipped green|old wood|entrance doors|courtyard brick|courtyard limestone|courtyard damp foundation|courtyard old wood/i;function Il(i,e,t=Ov()){if(!t||i.getObjectByName("Surface_wear"))return null;i.updateMatrixWorld(!0);const n=[],s=[];i.traverse(h=>{!h.isMesh||Array.isArray(h.material)||(kv.test(h.material.name)&&n.push(h),/asphalt|pavement tiles|entrance terrazzo/i.test(h.material.name)&&s.push(h))});const r=new _d,o=[];let a=0;const l=(h,d,f,g,_,m=0,p=!1)=>{r.set(p?new R(h,2,d):new R(h,d,3),p?new R(0,-1,0):new R(0,0,-1));const M=r.intersectObjects(p?s:n,!1).find(I=>{const E=I.face.normal.clone().transformDirection(I.object.matrixWorld);return p?E.y>.7:E.z>.7});if(!M)return;const y=M.object,x=new Re(y.geometry,y.material);if(x.matrixWorld.copy(y.matrixWorld),y.isInstancedMesh){const I=new te;y.getMatrixAt(M.instanceId,I),x.matrixWorld.multiply(I)}const S=new Fv(x,M.point,new nn(p?-Math.PI/2:0,0,m),new R(f,g,.045));if(!S.attributes.position.count){S.dispose();return}const v=S.attributes.uv,w=_-8;for(let I=0;I<v.count;I++)v.setXY(I,(w%4+(6+v.getX(I)*244)/256)/4,(1-Math.floor(w/4)+(6+v.getY(I)*244)/256)/2);o.push(S),a++};if(e==="entrance")for(const h of[0,13]){for(const d of[.9,3.65,5.6,7.05,12.35])l(h+d,.35,1.55,.7,14);for(const d of[2.15,5.1])l(h+d,2.45,1.8,1.25,8);l(h+.55,1.6,.8,2.6,11),l(h+3.25,.8,1.05,1.5,8),l(h+6.6,2.65,1.45,1,9),l(h+2.15,.45,.85,.8,10),l(h+12.1,1.7,.8,2.5,9)}else for(let h=0;h<14;h++)l(.7+h*1.85,.3,2,.65,12+h%4),l(1+h*1.85,1.6,.85,2.15,8+h%4),l(1.6+h*1.8,2.8,1.45,1.4,9);for(let h=0;h<18;h++)l(1+h*1.4,h%2?2.8:-2.55,1.2+h%3*.4,1.6+h%2*.6,8+h%4,h*.4,!0);if(!o.length)return null;const c=Mc(o);for(const h of o)h.dispose();c.applyMatrix4(i.matrixWorld.clone().invert());const u=new Re(c,t);return u.name="Surface_wear",u.userData.noShadow=!0,u.userData.patches=a,u.receiveShadow=!0,u.castShadow=!1,i.add(u),u}const wd={street:"Улица",entrance:"Подъезд"};function Bv(){if(typeof document>"u")return{};let i=93;const e=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),t=n=>{const s=document.createElement("canvas");s.width=s.height=512;const r=s.getContext("2d");r.fillStyle=n==="floor"?"#89857a":"#c1b9a2",r.fillRect(0,0,512,512);for(let a=0;a<3500;a++)r.fillStyle=e()>.5?"#292f2112":"#fff5d318",r.fillRect(e()*512,e()*512,e()*8+1,e()*9+1);if(n==="floor")for(let a=0;a<512;a+=64)for(let l=0;l<512;l+=64)r.fillStyle=(l+a)%128?"#383c3325":"#d4c7ac20",r.fillRect(l+1,a+1,62,62),r.strokeStyle="#33382e80",r.strokeRect(l,a,64,64);else{for(let a=0;a<90;a++){const l=e()*512,c=e()*512;r.fillStyle="#7c786734",r.beginPath(),r.ellipse(l,c,e()*20+2,e()*13+2,e()*3,0,Math.PI*2),r.fill()}r.strokeStyle="#4c52434a";for(let a=0;a<12;a++){let l=e()*512,c=e()*512;r.beginPath(),r.moveTo(l,c);for(let u=0;u<5;u++)l+=(e()-.5)*26,c+=e()*25,r.lineTo(l,c);r.stroke()}}const o=new Gn(s);return o.wrapS=o.wrapT=ci,o.colorSpace=ht,o};return{wall:t("wall"),floor:t("floor")}}function zv(){const i=new Lt;i.name="Entrance_26m";const e=bc(),t=Bv(),n=new sn(1,1,1),s=new Hi(.022,.022,1,6),r=new Map,o=(y,x,S=null,v={})=>{const w=new ft({color:x,map:S,roughness:.94,...v});return w.name=y,w};t.floor&&t.floor.repeat.set(6.5,5.75),t.wall&&t.wall.repeat.set(3,1.5);const a=o("Entrance aged plaster","#d9cead",t.wall),l=o("Entrance chipped green paint","#748774",t.wall),c=o("Entrance terrazzo","#b3b0a0",t.floor),u=o("Entrance concrete stairs","#8e9182",t.wall),h=o("Entrance painted steel","#4b5c57",null,{metalness:.3}),d=o("Entrance recess","#282e29"),f=o("Entrance doors","#695c44",t.wall),g=o("Entrance paper","#e4d9ba");o("Entrance window glass","#455c66",null,{emissive:"#526f7c",emissiveIntensity:.45});const _=o("Entrance warm lamps","#e4cd8a",null,{emissive:"#ffbf60",emissiveIntensity:2});function m(y,x,S,v,w=null,I=!0){const E=new Re(y,x);E.position.fromArray(S),E.scale.fromArray(v),w&&E.rotation.set(...w),E.updateMatrix();const T=y.uuid+x.uuid+I;return r.has(T)||r.set(T,{geometry:y,mat:x,shadow:I,meshes:[]}),r.get(T).meshes.push(E),E}const p=(y,x,S,v,w,I,E,T,b=null,U=!0)=>{const O=m(n,w,[I,E,T],[x,S,v],b,U);return O.name=y,O};p("Continuous level floor",26,.16,23,c,13,-.08,2.5,null,!1);for(let y=0;y<2;y++){const x=y*13;for(const[S,v]of[[3.95,7.9],[12.35,1.3]])p("Plaster upper wall",v,3.1,.24,a,x+S,2.85,-3.6),p("Green lower wall",v,1.3,.25,l,x+S,.65,-3.59),p("Skirting",v,.14,.29,h,x+S,.07,-3.55),p("Paint border",v,.045,.28,h,x+S,1.3,-3.55);for(const S of[7.88,11.72])p("Stairwell side plaster",.2,3.2,3.15,a,x+S,2.9,-5.05),p("Stairwell side green paint",.22,1.3,3.15,l,x+S,.65,-5.05);p("Stairwell ceiling",4,.16,3.25,a,x+9.8,4.5,-5.05,null,!1),p("Stairwell back wall",3.8,4.5,.2,a,x+9.8,2.25,-6.5),p("Stairwell landing",3.8,.16,1,u,x+9.8,1.68,-6.05);for(let S=0;S<12;S++){const v=(S+1)*.14,w=-3.7-S*.2;p("Stair tread",2.15,v,.22,u,x+9.8,v/2,w);for(const I of[-1,1]){const E=x+9.8+I*1.12;p("Stair baluster",.035,.85,.035,h,E,v+.425,w)}}for(const S of[-1,1]){const v=new R(x+9.8+S*1.12,.96,-3.7),w=new R(v.x,2.5,-5.9),I=v.distanceTo(w),E=m(s,h,v.clone().add(w).multiplyScalar(.5).toArray(),[1,I,1]);E.quaternion.setFromUnitVectors(new R(0,1,0),w.sub(v).normalize()),E.updateMatrix()}p("Landing rail",3.5,.06,.06,h,x+9.8,2.5,-6.05);for(let S=0;S<9;S++)p("Landing rail post",.035,.75,.035,h,x+8.2+S*.4,2.13,-6.05);p("Door recess",1.42,2.48,.16,d,x+2.15,1.24,-3.4),p("Apartment door",1.16,2.3,.12,f,x+2.15,1.15,-3.29);for(const S of[-.63,.63])p("Door trim",.09,2.4,.2,h,x+2.15+S,1.2,-3.23);p("Door lintel",1.36,.1,.2,h,x+2.15,2.43,-3.23),p("Door handle",.13,.035,.07,h,x+2.55,1.03,-3.18),p("Peephole",.035,.035,.03,h,x+2.15,1.68,-3.19);for(let S=0;S<2;S++)for(let v=0;v<4;v++){const w=x+4.3+v*.39,I=1.15+S*.42;p("Mailbox frame",.38,.4,.21,d,w,I,-3.35),p("Mailbox door",.34,.35,.025,v%3?h:l,w,I,-3.23),p("Mailbox letter slot",.23,.025,.015,d,w,I+.1,-3.207),p("Mailbox label",.1,.04,.018,g,w,I-.07,-3.2)}p("Noticeboard frame",1.3,1.45,.12,f,x+6.9,1.8,-3.35),p("Noticeboard backing",1.17,1.3,.03,d,x+6.9,1.8,-3.27);for(let S=0;S<6;S++){const v=x+6.6+S%2*.48,w=2.13-Math.floor(S/2)*.37;p("Paper notices",.36,.3,.015,g,v,w,-3.24,[0,0,(S%3-1)*.06]);for(let I=0;I<3;I++)p("Notice ink",.24,.012,.018,h,v,w+.06-I*.045,-3.23)}for(const[S,v]of[2.15,5.1].entries())e.add(x+v,3.28,-3.475,1.7,1.12,0,y*3+S+1);p("Ceiling edge",13,.24,.38,u,x+6.5,4.35,-3.5,null,!1),p("Ceiling soffit",13,.13,4.8,a,x+6.5,4.5,-1.1,null,!1),p("Lamp bracket",.32,.1,.35,h,x+4,3.92,-3.21),p("Warm bulkhead lamp",.21,.26,.12,_,x+4,3.73,-3.15,null,!1);for(let S=0;S<2;S++)p("Old heating pipe",.055,3.8,.055,h,x+.45+S*.13,1.9,-3.28);for(let S=0;S<7;S++)p("Radiator section",.08,.6,.18,g,x+6.15+S*.11,.46,-3.25);for(let S=0;S<7;S++)p("Scattered paper",.16,.007,.12,g,x+1+S*1.7,.009,S%2?2.5:-2.65,[0,S*.8,0],!1)}for(const{geometry:y,mat:x,shadow:S,meshes:v}of r.values()){const w=new sc(y,x,v.length);for(let I=0;I<v.length;I++)w.setMatrixAt(I,v[I].matrix);w.castShadow=S,w.receiveShadow=!0,w.computeBoundingSphere(),w.name=x.name,i.add(w)}const M=e.finish();return i.add(...M.children.slice()),i.userData.windowCount=e.stats.count,i}function Hv(i,e,t){const n=new Map([...i.chunks].map(([s,r])=>[s,r.bottles.map(o=>o.taken)]));i.setEnvironment(e),i.update(t);for(const[s,r]of i.chunks){const o=n.get(s);o&&r.bottles.forEach((a,l)=>{o[l]&&(a.taken=!0,a.mesh.visible=!1)})}}class Vv{constructor({scene:e,lighting:t,sun:n,ambient:s,renderer:r}){Object.assign(this,{scene:e,lighting:t,sun:n,ambient:s,renderer:r}),this.indoor=!1,this.lights=[0,1].map(()=>{const o=new gd("#ffca83",18,14,2);return o.visible=!1,e.add(o),o})}update(e,t){if(!(e==="entrance")){this.indoor&&this.lighting.apply();for(const o of this.lights)o.visible=!1;this.indoor=!1;return}this.indoor=!0;const s=this.lighting.value;this.sun.intensity=s.sunIntensity*.28,this.sun.color.set("#e8d4a8"),this.sun.position.set(t-4,3.8,3.5),this.sun.target.position.set(t,0,-2),this.ambient.intensity=Math.max(.45,s.ambientIntensity*.65),this.ambient.color.set("#b8b6a1"),this.ambient.groundColor.set("#444c3c"),this.renderer.toneMappingExposure=s.exposure*1.06,this.scene.background.set("#565b50"),this.scene.fog.color.set("#565b50"),this.scene.fog.near=16,this.scene.fog.far=42;const r=Math.floor((t-4)/13)*13+4;this.lights.forEach((o,a)=>{o.visible=!0,o.position.set(r+a*13,3.6,-2.65)})}}function Sc(i,e,t){let n;if(i.visual.traverse(m=>{!n&&m.isSkinnedMesh&&e.test(m.name)&&(n=m)}),!n)return null;const s=n.geometry.attributes.position,r=new te().copy(i.visual.matrixWorld).invert().multiply(n.matrixWorld),o=new fn,a=new R;for(let m=0;m<s.count;m++)o.expandByPoint(a.fromBufferAttribute(s,m).applyMatrix4(r));const l=o.getSize(new R),c=o.min.clone().add(l.clone().multiply(new R(...t)));let u=0,h=1/0;for(let m=0;m<s.count;m++){a.fromBufferAttribute(s,m).applyMatrix4(r).sub(c);const p=a.x*a.x*3+a.y*a.y*2+a.z*a.z;p<h&&(h=p,u=m)}const d=new R().fromBufferAttribute(s,u).applyMatrix4(n.bindMatrix),f=[];for(let m=0;m<4;m++){const p=n.geometry.attributes.skinWeight.getComponent(u,m),M=n.geometry.attributes.skinIndex.getComponent(u,m);p&&f.push({bone:n.skeleton.bones[M],inverse:n.skeleton.boneInverses[M],weight:p})}const g=new R,_=new te;return{get(m){m.set(0,0,0);for(const p of f)_.multiplyMatrices(i.posedWorld.get(p.bone)??p.bone.matrixWorld,p.inverse),m.addScaledVector(g.copy(d).applyMatrix4(_),p.weight);return m.applyMatrix4(n.bindMatrixInverse).applyMatrix4(n.matrixWorld)}}}const oh=(i,e,t)=>(t=et.clamp((t-i)/(e-i),0,1),t*t*(3-2*t));function ah(i,e,t=null){const n=i.userActions?.clips[e];return!n||i.pickup?!1:(i.pickup={kind:e,elapsed:0,duration:n.duration,payload:t,applied:!1},!0)}function tr(i){return i.pickup?Math.min(1,i.pickup.elapsed/i.pickup.duration):0}class Gv{constructor(e,t){this.root=new Lt;const n=new Re(t.body,t.material("#756033")),s=new Re(t.label,t.labelMaterial);n.position.y=-.25,s.position.y=.18-.25,this.root.add(n,s),this.body=n,this.label=s,this.root.scale.setScalar(.65),this.root.visible=!1,e.add(this.root),this.reference=new Ke,this.rotation=new Ke}update(e,t){const n=tr(e);if(this.root.visible=t&&e.pickup?.kind==="bottle_pickup"&&n>.22&&n<.95,!this.root.visible){this.serial=null;return}const s=e.bind.find(h=>h.name==="hand.r"),r=s&&e.posedWorld.get(s.bone);if(!r){this.root.visible=!1;return}r.decompose(this.root.position,this.rotation,new R);const o=new R;let a=0;for(const h of["c_middle2.r","c_ring2.r","c_thumb2.r"]){const d=e.bind.find(g=>g.name===h),f=d&&e.posedWorld.get(d.bone);f&&(o.add(new R().setFromMatrixPosition(f)),a++)}a&&this.root.position.copy(o.divideScalar(a)),this.serial!==e.pickup&&(this.serial=e.pickup,this.reference.copy(this.rotation).invert()),this.anchorActor!==e.visual&&(this.anchorActor=e.visual,this.mouth=Sc(e,/teeth/i,[.5,.55,1]));const l=new R(0,1,0).applyQuaternion(this.rotation.clone().multiply(this.reference)),c=oh(.35,.49,n)*(1-oh(.8,.94,n));let u=.25;if(this.mouth&&c>0){const h=this.mouth.get(new R),d=h.sub(this.root.position),f=d.length();if(f>.015){const g=new Ke().setFromUnitVectors(l,d.normalize());l.applyQuaternion(new Ke().slerp(g,c)),u=et.lerp(.25,et.clamp(.46-f/.65,.17,.32),c)}}this.body.position.y=-u,this.label.position.y=.18-u,this.root.quaternion.setFromUnitVectors(new R(0,1,0),l.normalize())}}const ds=[{id:"hobo",name:"Свой парень",tag:"Легенда района",description:"Знакомый герой в потёртых джинсах.",model:"hero",height:1.85},{id:"fighter",name:"Патрульный",tag:"По другую сторону",description:"Форма и другой силуэт. Здоровье и урон одинаковы у всех.",model:"enemy",height:1.9}],ao=[{id:"original",name:"Оригинал",shirt:"#ffffff",pants:"#ffffff",hat:"#ffffff"},{id:"olive",name:"Хаки",shirt:"#a9b689",pants:"#9aa38d",hat:"#818e6d"},{id:"rust",name:"Ржавчина",shirt:"#c28360",pants:"#ac9d90",hat:"#ba8a61"},{id:"night",name:"Ночной",shirt:"#748fa7",pants:"#7f8c9d",hat:"#8295ab"}],lh="bomzh:appearance:v1";class Wv{constructor(e){try{this.storage=e??globalThis.localStorage;const t=JSON.parse(this.storage.getItem(lh));this.character=ds.some(n=>n.id===t?.character)?t.character:"hobo",this.palette=ao.some(n=>n.id===t?.palette)?t.palette:"original"}catch{this.character="hobo",this.palette="original"}}set(e,t){if(!ds.some(n=>n.id===e)||!ao.some(n=>n.id===t))return!1;this.character=e,this.palette=t;try{this.storage.setItem(lh,JSON.stringify({character:e,palette:t}))}catch{}return!0}apply(e){const t=ao.find(n=>n.id===this.palette);e.visual.traverse(n=>{if(!n.isMesh)return;if(!n.userData.wardrobeMaterials){n.material=Array.isArray(n.material)?n.material.map(o=>o.clone()):n.material.clone(),n.userData.wardrobeMaterials=!0;const r=Array.isArray(n.material)?n.material:[n.material];n.userData.originalColors=r.map(o=>o.color?.clone())}(Array.isArray(n.material)?n.material:[n.material]).forEach((r,o)=>{if(!r.color)return;r.color.copy(n.userData.originalColors[o]);const a=n.name+" "+r.name,l=/shtani|pants|jeans/i.test(a)?t.pants:/hat|shap|cap/i.test(a)?t.hat:/shirt|maika|mayka|tank|uniform/i.test(a)?t.shirt:null;l&&r.color.multiply({isColor:!0,r:parseInt(l.slice(1,3),16)/255,g:parseInt(l.slice(3,5),16)/255,b:parseInt(l.slice(5,7),16)/255})})})}}const _r=Object.freeze([{id:"classic",name:"Свой парень",price:0,icon:"🧢",description:"Оригинальный образ."},{id:"shades",name:"Тёмные очки",price:60,icon:"🕶️",description:"Круглые очки для серьёзных разборок."},{id:"gold",name:"Король двора",price:180,icon:"👑",description:"Золотые очки и красный шарф."}]),Ed="bomzh:wallet:v1",js=i=>Number.isSafeInteger(i)&&i>=0,ch=()=>({version:1,coins:0,owned:["classic"],equipped:"classic"});function Xv(i){try{const e=JSON.parse(i.getItem(Ed));if(e?.version!==1||!js(e.coins)||!Array.isArray(e.owned))return ch();const t=[...new Set(["classic",...e.owned.filter(n=>_r.some(s=>s.id===n))])];return{version:1,coins:e.coins,owned:t,equipped:t.includes(e.equipped)?e.equipped:"classic"}}catch{return ch()}}class qv{constructor(e){try{this.storage=e??globalThis.localStorage}catch{}this.profile=Xv(this.storage),this.persistent=!0,this.run=null}save(){try{this.storage.setItem(Ed,JSON.stringify(this.profile)),this.persistent=!0}catch{this.persistent=!1}}beginRun(e){return this.run={id:e,earned:0,revived:!1,doubled:!1,closed:!1},this.run}earn(e){return!this.run||this.run.closed||!js(e)||!js(this.profile.coins+e)||!js(this.run.earned+e)?!1:(this.profile.coins+=e,this.run.earned+=e,this.save(),!0)}buy(e){const t=_r.find(n=>n.id===e);return!t||this.profile.owned.includes(e)?{ok:!1,reason:"owned"}:this.profile.coins<t.price?{ok:!1,reason:"funds"}:(this.profile.coins-=t.price,this.profile.owned.push(e),this.profile.equipped=e,this.save(),{ok:!0})}equip(e){return this.profile.owned.includes(e)?(this.profile.equipped=e,this.save(),!0):!1}claim(e,t){const n=this.run;return!n||n.id!==t||n.closed?!1:e==="revive"?n.revived?!1:(n.revived=!0,!0):e==="double"?n.doubled||n.earned===0||!js(this.profile.coins+n.earned)?!1:(this.profile.coins+=n.earned,n.doubled=!0,n.closed=!0,this.save(),!0):!1}}const Yv=i=>(i=et.clamp(i,0,1),i*i*(3-2*i)),os=[[0,[-.27,1.06,.18],[-.12,.96,.27]],[.3,[-.5,1.72,-.28],[-.15,.66,-.74]],[.4,[-.55,1.65,.35],[-.15,.95,.25]],[.52,[-.22,1.18,.77],[.04,-.42,.91]],[.7,[-.22,.98,.62],[.08,-.7,.7]],[1,[-.27,1.06,.18],[-.12,.96,.27]]];function uh(i=0,e=!1){if(!e)return{wrist:new R(...os[0][1]),direction:new R(...os[0][2]).normalize()};const t=et.clamp(i,0,1);let n=1;for(;n<os.length-1&&t>os[n][0];)n++;const s=os[n-1],r=os[n],o=Yv((t-s[0])/(r[0]-s[0]));return{wrist:new R(...s[1]).lerp(new R(...r[1]),o),direction:new R(0,1,0).applyQuaternion(new Ke().setFromUnitVectors(new R(0,1,0),new R(...s[2]).normalize()).slerp(new Ke().setFromUnitVectors(new R(0,1,0),new R(...r[2]).normalize()),o))}}function Ll(i,e){return new te().makeTranslation(...i.toArray()).multiply(new te().makeRotationFromQuaternion(e)).multiply(new te().makeTranslation(...i.clone().negate().toArray()))}function hh(i,e,t,n){const s=w=>i.bind.find(I=>I.name===w+e),r=s("arm_stretch"),o=s("forearm_stretch"),a=s("hand");if(!r||!o||!a)return;const l=w=>new R().setFromMatrixPosition(i.posedWorld.get(w.bone)),c=l(r),u=l(o),h=l(a),d=c.distanceTo(u),f=u.distanceTo(h),g=t.clone().sub(c),_=et.clamp(g.length(),Math.abs(d-f)+.001,d+f-.002);g.normalize();const m=(d*d-f*f+_*_)/(2*_),p=Math.sqrt(Math.max(0,d*d-m*m)),M=n.clone().sub(c).addScaledVector(g,-n.clone().sub(c).dot(g)).normalize(),y=c.clone().addScaledVector(g,m).addScaledVector(M,p),x=Ll(c,new Ke().setFromUnitVectors(u.clone().sub(c).normalize(),y.clone().sub(c).normalize())),S=h.clone().applyMatrix4(x),v=Ll(y,new Ke().setFromUnitVectors(S.sub(y).normalize(),c.clone().addScaledVector(g,_).sub(y).normalize()));for(const w of i.bind){if(!w.name.endsWith(e))continue;const I=i.posedWorld.get(w.bone);I&&(/^(?:arm_stretch|c_arm_twist_offset)/.test(w.name)?I.premultiply(x):/^(?:forearm|hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/.test(w.name)&&I.premultiply(x).premultiply(v))}}function dh(i,e,t){const n=uh(e,t),s=a=>i.root.localToWorld(a.clone());hh(i,".r",s(n.wrist),s(new R(-.65,1.12,.12))),hh(i,".l",s(new R(.24,1.14,.25)),s(new R(.6,.97,-.05)));const r=i.bind.find(a=>a.name==="hand.r"),o=r&&i.posedWorld.get(r.bone);if(o){if(!i.weaponReferenceRotation){const d=i.userActions,f=d?.bones.indexOf("hand.r"),g=d?new te().fromArray(d.clips.idle.frames[0],f*16).multiply(r.matrix):r.matrix.clone();i.weaponReferenceRotation=new Ke,g.decompose(new R,i.weaponReferenceRotation,new R)}const a=new Ke;o.decompose(new R,a,new R);const l=uh().direction,c=new Ke().setFromUnitVectors(l,n.direction),u=i.root.getWorldQuaternion(new Ke).multiply(c).multiply(i.weaponReferenceRotation),h=Ll(new R().setFromMatrixPosition(o),u.multiply(a.invert()));for(const d of i.bind)d.name.endsWith(".r")&&/^(?:hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/.test(d.name)&&i.posedWorld.get(d.bone)?.premultiply(h)}i.weaponDirection=n.direction}const jv=1.15,Kv=1.8;function ba(i,e){Number.isFinite(e)&&e>0&&(i.walkDistance=(i.walkDistance??0)+e)}function $v(i,e,t){return(i/e%1+1)%1*Math.max(0,t-1)}const fh=new R,ph=new R,mh=new R,gh=new R,_h=new Ke,xh=new Ke;function wc(i,e,t,n){return n<=0?i.copy(e):n>=1?i.copy(t):(e.decompose(fh,_h,mh),t.decompose(ph,xh,gh),i.compose(fh.lerp(ph,n),_h.slerp(xh,n).normalize(),mh.lerp(gh,n)))}const Td=/^(?:hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/;function Jv(i){const e=i.endsWith(".l")?".l":i.endsWith(".r")?".r":"",t=e?i.slice(0,-2):i;return t==="shoulder"?"spine_03.x":t==="arm_stretch"?"shoulder"+e:t==="c_arm_twist_offset"||t==="forearm_stretch"?"arm_stretch"+e:t==="forearm_twist"||t==="hand"?"forearm_stretch"+e:t==="thigh_stretch"?"root.x":t==="thigh_twist"||t==="leg_stretch"?"thigh_stretch"+e:t==="leg_twist"||t==="foot"?"leg_stretch"+e:t==="toes_01"?"foot"+e:{"root.x":null,"spine_01.x":"root.x","spine_02.x":"spine_01.x","spine_03.x":"spine_02.x","neck.x":"spine_03.x","c_head.x":"neck.x","head.x":"c_head.x","jawbone.x":"head.x"}[i]}function Zv(i){const e=new Map(i.bind.map(l=>[l.name,l])),t=new Set(i.userActions.bones),n=new Map;for(const l of i.bind)t.has(l.name)&&n.set(l.name,{...l,inverse:l.matrix.clone().invert()});for(const l of n.values()){let c=Jv(l.name);if(c===void 0){let u=l.bone.parent;for(;u;){const h=u.userData.name??u.name;if(n.has(h)){c=h;break}u=u.parent}}c===void 0&&Td.test(l.name)&&(c="hand"+(l.name.endsWith(".l")?".l":".r")),l.parent=n.get(c)??null}const s=[],r=new Set,o=new Set;function a(l){if(!o.has(l)){if(r.has(l))throw Error("Animation hierarchy cycle");r.add(l),l.parent&&a(l.parent),r.delete(l),o.add(l),s.push(l)}}for(const l of n.values())a(l);for(const l of s){const c=new R,u=new Ke,h=new R;l.matrix.decompose(c,u,h),l.bindRotation=u.normalize(),l.bindFrame=new te().compose(c,l.bindRotation,new R(1,1,1))}for(const l of s)l.localBind=l.parent?l.parent.bindFrame.clone().invert().multiply(l.matrix):l.matrix.clone(),l.localInverse=l.localBind.clone().invert();i.poseHierarchy=s,i.bindByName=e}function Qv(i,e){for(const t of[".l",".r"]){const n=i.bindByName.get("hand"+t),s=n&&e.get(n.bone);if(!s)continue;const r=s.clone().multiply(n.matrix.clone().invert()),o=new R,a=new Ke,l=new R;if(r.decompose(o,a,l),l.toArray().some(d=>d<=1e-8)||Math.max(...l.toArray().map(d=>Math.abs(d-1)))<1e-4)continue;const c=new R().setFromMatrixPosition(s),u=new te().makeRotationFromQuaternion(a.normalize()),h=new te().makeTranslation(...c.toArray()).multiply(u).multiply(new te().makeScale(1/l.x,1/l.y,1/l.z)).multiply(u.clone().invert()).multiply(new te().makeTranslation(-c.x,-c.y,-c.z));for(const d of i.bind)d.name.endsWith(t)&&Td.test(d.name)&&e.has(d.bone)&&e.get(d.bone).premultiply(h)}}function Sa(i,e){const t=new R().setFromMatrixPosition(e),n=new Ke,s=new R;return e.clone().multiply(i.inverse).decompose(new R,n,s),new te().compose(t,n.normalize().multiply(i.bindRotation),new R(1,1,1))}function ey(i,e,t,n){const s=new Map(t);for(const r of i.poseHierarchy){const o=e.get(r.bone),a=t.get(r.bone);if(!o||!a)continue;const l=r.parent?Sa(r.parent,e.get(r.parent.bone)):null,c=r.parent?Sa(r.parent,t.get(r.parent.bone)):null,u=l?l.clone().invert().multiply(o):o.clone(),h=c?c.clone().invert().multiply(a):a.clone();u.multiply(r.localInverse),h.multiply(r.localInverse);const d=wc(new te,u,h,n).multiply(r.localBind),f=r.parent?Sa(r.parent,s.get(r.parent.bone)):null;s.set(r.bone,f?f.clone().multiply(d):d)}return s}function vh(i,e,t){if(!i.userActions)return;i.poseHierarchy||Zv(i);const n=i.visual.matrixWorld.clone().invert(),s=new Map;for(const[c,u]of i.posedWorld)s.set(c,n.clone().multiply(u));Qv(i,s),i.motionId!==t&&(i.transitionFrom=i.lastMotion,i.transitionStart=e,i.motionId=t);const r=t==="jab:return"?.14:t==="dodge"||t.includes("_combo:")?.06:.12,o=Math.min(1,Math.max(0,(e-i.transitionStart)/r)),a=o*o*(3-2*o),l=i.transitionFrom&&a<1?ey(i,i.transitionFrom,s,a):s;for(const[c,u]of l)i.posedWorld.get(c).copy(i.visual.matrixWorld).multiply(u);i.lastMotion=l,a===1&&(i.transitionFrom=null)}function yh(i){for(const e of i.rigid){const t=i.bindByName?.get(e.parentBoneName)??i.bind.find(r=>r.name===e.parentBoneName),n=t&&i.posedWorld.get(t.bone),s=n?n.clone().multiply(t.matrix.clone().invert()).multiply(e.matrix):i.visual.matrixWorld.clone().multiply(e.matrix);e.mesh.matrix.copy(e.mesh.parent.matrixWorld).invert().multiply(s),e.mesh.updateWorldMatrix(!1,!1)}}function ty(i){if(i?.version!==1||!Array.isArray(i.bones)||!i.bones.length||!Number.isFinite(i.fps)||i.fps<=0)throw new Error("Invalid action data");if(!i.clips?.idle||!(i.clips.jab_01||xr(i).length))throw new Error("Missing authored idle or attack");for(const e of Object.keys(i.clips??{})){const t=i.clips?.[e]?.frames;if(!t?.length||t.some(n=>n.length!==i.bones.length*16||!n.every(Number.isFinite)))throw new Error(`Invalid clip ${e}`)}return i}function xr(i){return Object.keys(i?.clips??{}).filter(e=>e.endsWith("_combo")&&!e.startsWith("weapon_")).sort((e,t)=>e.localeCompare(t,void 0,{numeric:!0}))}function Ad(i){return Object.keys(i?.clips??{}).filter(e=>e.startsWith("weapon_")&&e.endsWith("_combo")).sort()}function ny(i,e){const t=Ad(i)[e],n=i?.clips[t];return n?{clip:t,duration:n.duration,cooldown:n.duration,hitAt:n.markers?.hit!==void 0?n.markers.hit/Math.max(1,n.frames.length-1):.52}:null}function iy(i,e){const t=xr(i)[e],n=i?.clips[t];if(!n)return null;const s=Math.max(.3,n.duration);return{...t.startsWith("kick")?{range:1.9,damage:18}:{},clip:t,duration:s,cooldown:s,hitAt:n.markers?.hit!==void 0?n.markers.hit/(n.frames.length-1):.9}}function sy(i,e){i.userActions=ty(e),i.userBoneIndices=new Map(e.bones.map((t,n)=>[t,n*16])),i.walkStride=ry(i),i.walkSpeed=e.clips.walk?i.walkStride/e.clips.walk.duration*jv:void 0,i.closedLoops=new Set(["idle","walk","weapon_idle"].filter(t=>{const n=e.clips[t]?.frames;return n?.length&&n[0].every((s,r)=>Math.abs(s-n.at(-1)[r])<1e-5)}))}function ry(i){const e=i.userActions,t=e.clips.walk;let n=0;if(t)for(const o of["foot.l","foot.r"]){const a=i.userBoneIndices.get(o),l=i.bind.find(h=>h.name===o);if(a===void 0||!l)continue;let c=1/0,u=-1/0;for(const h of t.frames){const d=new R().setFromMatrixPosition(new te().fromArray(h,a).multiply(l.matrix));c=Math.min(c,d.z),u=Math.max(u,d.z)}n=Math.max(n,u-c)}const s=i.height??1.85,r=n*2*i.visual.scale.z;return r>.1?Math.max(s*.35,Math.min(s*.95,r)):s*.65}const wa=new te,Mh=new te,bh=new te,Sh=new te;function oy(i,e,t,n,s=0){return Mh.fromArray(e,s),bh.fromArray(t,s),wc(i,Mh,bh,n)}function wh(i,e,t,n,s,r){const o=i.userActions.clips[e].frames,a=e==="idle"||e==="walk"||e==="weapon_idle",l=o.length-1,c=e==="walk"&&Number.isFinite(i.walkDistance)?$v(i.walkDistance,i.walkStride,o.length):a?n*i.userActions.fps%Math.max(1,l):Math.max(0,Math.min(1,t))*l,u=Math.floor(c),h=Math.min(l,u+1);oy(r,o[u],o[h],c-u,s);const d=i.closedLoops.has(e)?0:Math.min(8,l*.2);if(a&&d>0&&c>l-d){const f=(c-(l-d))/d;Sh.fromArray(o[0],s),wc(r,r,Sh,f*f*(3-2*f))}return r}function ay(i,e,t,n,s){if(!i.userActions||i.hurt>0||i.dodge>0&&!i.userActions.clips.dodge)return!1;const r=i.dodge>0,o=i.weaponType&&i.userActions.clips.weapon_idle,a=r?"dodge":n==="jab"?i.attackSpec?.clip??xr(i.userActions)[Math.max(0,(i.combo??1)-1)%Math.max(1,xr(i.userActions).length)]??"jab_01":i.userActions.clips[n]?n:n==="spray"?"spray":n==="burp"?"burp":n?null:t?"walk":o?"weapon_idle":"idle";if(!a||!i.userActions.clips[a])return!1;i.visual.position.y=i.baseVisualY,i.root.updateMatrixWorld(!0);const l=n==="jab"&&!a.endsWith("_combo")&&s>.76,c=l?"idle":a,u=r?Math.max(0,Math.min(1,1-i.dodge/(i.dodgeDuration??.24))):n==="jab"&&!a.endsWith("_combo")?Math.min(1,s/.7):s;function h(d,f){const g=i.userBoneIndices.get(d);return g===void 0?f.identity():wh(i,c,u,l?0:e,g,f)}for(const d of i.bind){h(d.name,wa);let f=i.posedWorld.get(d.bone);if(f||(f=new te,i.posedWorld.set(d.bone,f)),o&&a==="walk"&&(d.group==="arm"||d.group==="forearm")){const g=i.userBoneIndices.get(d.name);g!==void 0&&wh(i,"weapon_idle",0,e,g,wa)}f.copy(i.visual.matrixWorld).multiply(wa).multiply(d.matrix)}return a.startsWith("weapon_")&&a.endsWith("_combo")&&bo(i,"weapon_idle"),(a.endsWith("_combo")&&!a.startsWith("weapon_")||a==="spray"||a==="burp"||a==="dodge")&&bo(i),a==="walk"&&o?"weapon_walk":l?"jab:return":n==="jab"?a+":"+(i.attackSerial??0):a}function bo(i,e="idle"){if(i.userActions){if(i.referenceFingersByClip??={},!i.referenceFingersByClip[e]){i.referenceFingersByClip[e]=[];const t=(i.userActions.clips[e]??i.userActions.clips.idle).frames[0],n=new Map(i.bind.map(s=>[s.name,s]));for(const s of i.bind){if(!/^(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie)/.test(s.name))continue;const r=s.name.endsWith(".l")?".l":".r",o=n.get("hand"+r),a=i.userBoneIndices.get("hand"+r),l=i.userBoneIndices.get(s.name);if(!o||a===void 0||l===void 0)continue;const c=new te().fromArray(t,a).multiply(o.matrix),u=new te().fromArray(t,l).multiply(s.matrix);i.referenceFingersByClip[e].push({bone:s.bone,hand:o.bone,relative:c.invert().multiply(u)})}}i.referenceFingers=i.referenceFingersByClip[e];for(const t of i.referenceFingers){const n=i.posedWorld.get(t.hand);n&&i.posedWorld.get(t.bone).copy(n).multiply(t.relative)}}}function ly(i){const e=new Map((i.bind??[]).map(t=>[t.name,t.bone]));i.ikLegs=new Map;for(const t of["l","r"]){const n=e.get("thigh_stretch."+t),s=e.get("leg_stretch."+t),r=e.get("foot."+t);if(!n||!s||!r)continue;const o={upper:[],lower:[],foot:[]};for(const a of i.bind)a.name.endsWith("."+t)&&(/^(?:c_)?thigh(?:_|\.)/.test(a.name)?o.upper.push(a.bone):/^(?:c_)?leg(?:_|\.)/.test(a.name)?o.lower.push(a.bone):/^(?:c_)?(?:foot|toe)/.test(a.name)&&o.foot.push(a.bone));i.ikLegs.set(t,{hip:n,knee:s,ankle:r,groups:o})}}function Eh(i,e,t,n){const s=new Ke().setFromUnitVectors(e.clone().sub(i).normalize(),n.clone().sub(t).normalize());return new te().makeTranslation(t.x,t.y,t.z).multiply(new te().makeRotationFromQuaternion(s)).multiply(new te().makeTranslation(-i.x,-i.y,-i.z))}function cy(i,e,t){const n=i.ikLegs.get(e),s=i.posedWorld;if(!n||Math.abs(t)<1e-7)return!1;const r=new R().setFromMatrixPosition(s.get(n.hip)),o=new R().setFromMatrixPosition(s.get(n.knee)),a=new R().setFromMatrixPosition(s.get(n.ankle)),l=a.clone();l.y+=t;const c=r.distanceTo(o),u=o.distanceTo(a),h=c+u-1e-5;if(c<1e-5||u<1e-5)return!1;const d=l.y-r.y;if(Math.abs(d)>h)return!1;const f=new fe(l.x-r.x,l.z-r.z),g=Math.sqrt(Math.max(0,h*h-d*d));f.length()>g&&(f.setLength(g),l.x=r.x+f.x,l.z=r.z+f.y);const _=l.clone().sub(r),m=_.length();_.normalize();const p=new R(0,0,1).applyQuaternion(i.root.quaternion);if(p.addScaledVector(_,-p.dot(_)),p.lengthSq()<1e-8)return!1;p.normalize();const M=(c*c-u*u+m*m)/(2*m),y=Math.sqrt(Math.max(0,c*c-M*M)),x=r.clone().addScaledVector(_,M).addScaledVector(p,y),S={upper:Eh(r,o,r,x),lower:Eh(o,a,x,l),foot:new te().makeTranslation(l.x-a.x,l.y-a.y,l.z-a.z)};for(const v of["upper","lower","foot"])for(const w of n.groups[v])s.has(w)&&s.get(w).premultiply(S[v]);return!0}function uy(i){const e=[];i.visual.traverse(n=>{n.isSkinnedMesh&&/shoe|boot/i.test(n.name)&&e.push(n)});let t=1/0;i.groundSamples=[],i.groundJoints=new Map,i.groundPrefixes=new Map;for(const n of e){const s=n.geometry.attributes.position,r=[];let o=1/0;for(let u=0;u<s.count;u++){const h=new R().fromBufferAttribute(s,u).applyMatrix4(n.matrixWorld);o=Math.min(o,h.y),r.push(h)}t=Math.min(t,o);const a=r.map((u,h)=>({p:u,i:h})).filter(u=>u.p.y<=o+.025),l=new Set;for(const[u,h]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]){let d=a[0],f=-1/0;for(const g of a){const _=g.p.x*u+g.p.z*h;_>f&&(f=_,d=g)}d&&l.add(d.i)}let c=0;for(let u=1;u<r.length;u++)r[u].y<r[c].y&&(c=u);l.add(c),i.groundPrefixes.set(n,new te);for(const u of l){const h=[];for(let f=0;f<4;f++){const g=n.geometry.attributes.skinIndex.getComponent(u,f),_=n.geometry.attributes.skinWeight.getComponent(u,f);if(!_)continue;const m=n.skeleton.bones[g];let p=i.groundJoints.get(m);p||(p={bone:m,inverse:n.skeleton.boneInverses[g],matrix:new te},i.groundJoints.set(m,p)),h.push({joint:p,weight:_})}const d={l:0,r:0};for(const f of h){const g=f.joint.bone.userData.name??f.joint.bone.name;g.endsWith(".l")&&(d.l+=f.weight),g.endsWith(".r")&&(d.r+=f.weight)}i.groundSamples.push({mesh:n,side:d.l>d.r?"l":"r",position:new R().fromBufferAttribute(s,u).applyMatrix4(n.bindMatrix),joints:h})}}i.groundScratch={p:new R,v:new R},i.stableGroundOffset=Number.isFinite(t)?-t-.035:0,ly(i)}function Rd(i){if(!i.groundSamples?.length)return{l:1/0,r:1/0};for(const[s,r]of i.groundPrefixes)r.multiplyMatrices(s.matrixWorld,s.bindMatrixInverse);for(const s of i.groundJoints.values())s.matrix.multiplyMatrices(i.posedWorld.get(s.bone)??s.bone.matrixWorld,s.inverse);const{p:e,v:t}=i.groundScratch,n={l:1/0,r:1/0};for(const s of i.groundSamples){t.set(0,0,0);for(const{joint:r,weight:o}of s.joints)t.addScaledVector(e.copy(s.position).applyMatrix4(r.matrix),o);t.applyMatrix4(i.groundPrefixes.get(s.mesh)),n[s.side]=Math.min(n[s.side],t.y)}return n}function Ea(i){const e=Rd(i),t=Math.min(e.l,e.r);return Number.isFinite(t)?t:null}function Ta(i,e){for(const t of i.posedWorld.values())t.elements[13]+=e}function Th(i,e=0,{kind:t=null,time:n=0}={}){const s=Ea(i);if(s===null||i.health<=0||i.down>0||Math.abs(i.root.rotation.z)>.3){i.feetY=null;return}if(!t&&i.userActions){const o=e-s,a=Math.max(0,Math.min(.05,n-(i.groundTime??n))),l=i.groundOffset??o,c=Math.max(-.072*a,Math.min(.072*a,(o-l)*(1-Math.exp(-12*a)))),u=i.transitionFrom&&n-(i.transitionStart??-1/0)<.14?o:l+c;Ta(i,u),i.groundOffset=u,i.groundTime=n,i.groundMode="authored",i.feetY=Ea(i);return}if(!t&&i.ikLegs?.size===2){const o=i.stableGroundOffset+e;i.groundMode!=="stable"&&(i.groundMode="stable",i.groundBlendStart=n,i.groundBlendFrom=i.groundOffset??o);const a=Math.min(1,Math.max(0,(n-i.groundBlendStart)/.16)),l=a*a*(3-2*a),c=i.groundBlendFrom+(o-i.groundBlendFrom)*l;Ta(i,c),i.groundOffset=c;for(let u=0;u<3;u++){const h=Rd(i),d=Math.min(h.l,h.r);for(const f of["l","r"]){const g=h[f];if(!Number.isFinite(g))continue;const _=Math.min(1,Math.max(0,(g-d)/.05)),m=g<e?1:1-_*_*(3-2*_);cy(i,f,(e-g)*m)}}i.feetY=Ea(i);return}i.groundTime=n,i.groundMode="pose";const r=e-s;Ta(i,r),i.groundOffset=r,i.feetY=e}const Ah=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)),Rh=(i,e,t)=>i+(e-i)*t,Dl={left:[-.5,-1.15,-.06,.08],right:[-.65,-1.05,.06,.08],lean:0,twist:0,drop:0,spin:0};function hy(i,e,t){const n={};for(const s of["left","right"])n[s]=i[s].map((r,o)=>Rh(r,e[s][o],Ah(t)));for(const s of["lean","twist","drop","spin"])n[s]=Rh(i[s]??0,e[s]??0,Ah(t));return n}const ot=(i={})=>({...Dl,...i});function Ul(i,e,t,n=0,s=1){if(!t){const c=ot({left:[...Dl.left],right:[...Dl.right]});if(e)for(const[u,h]of["left","right"].entries()){const d=Math.sin(i*9+u*Math.PI);c[h][0]+=.25*d,c[h][1]+=.15*Math.max(0,-d),c[h][2]=.42*d,c[h][3]=.55*Math.max(0,d)}return c.drop=e?-.008*Math.abs(Math.sin(i*9)):-.005*(1+Math.sin(i*2)),c}const r=s%2===0?"right":"left";let o;t==="finisher"?o=[[0,ot()],[.22,ot({right:[-.15,-.7,.18,.3],left:[-.6,-1.3,-.18,.25],twist:-.3,drop:-.08})],[.37,ot({right:[.15,-1.5,.2,.45],left:[-.8,-1.4,-.25,.3],twist:-.55,lean:.18,drop:-.16})],[1.3/2.8,ot({right:[-1.8,-.15,.15,.12],left:[-.65,-1.2,-.2,.2],twist:.55,lean:-.12,drop:.06})],[.58,ot({right:[-1.75,-.2,.15,.12],twist:.4,lean:-.1,drop:.04})],[.86,ot()],[1,ot()]]:t==="burp"?o=[[0,ot()],[.24,ot({lean:-.18,drop:-.025})],[.4,ot({lean:.38,twist:.1,left:[-.1,-.8,-.06,.08],right:[-.1,-.8,.06,.08]})],[.68,ot({lean:.18})],[1,ot()]]:t==="jab"?o=[[0,ot()],[.25,ot({[r]:[-.15,-1.9,0,.12],twist:-.25,drop:-.025})],[.43,ot({[r]:[-1.65,-.08,-.1,.1],twist:.3,lean:.12})],[.58,ot({[r]:[-1.55,-.12,-.1,.1],twist:.23,lean:.1})],[1,ot()]]:t==="kick"?o=[[0,ot()],[.28,ot({left:[-.9,-1.3,-1,.95],right:[-.2,-1.4,.12,.08],lean:-.12,drop:-.04})],[.48,ot({left:[-.2,-1.25,-1.6,.05],right:[-.85,-1.2,.1,.08],lean:-.25})],[.62,ot({left:[-.2,-1.25,-1.5,.08],lean:-.2})],[.8,ot({left:[-.6,-1.3,-.85,.85],lean:-.1})],[1,ot()]]:o=[[0,ot()],[.2,ot({left:[.15,-1.35,-.12,.18],right:[.15,-1.35,.12,.18],lean:-.12,drop:-.04})],[.8,ot({left:[.15,-1.35,-.12,.18],right:[.15,-1.35,.12,.18],lean:-.12,drop:-.04})],[1,ot()]];const a=Math.max(0,Math.min(1,n));let l=1;for(;l<o.length-1&&a>o[l][0];)l++;return hy(o[l-1][1],o[l][1],(a-o[l-1][0])/(o[l][0]-o[l-1][0]))}const dy=/forearm|hand|thumb|index|middle|ring|pinky|pinkie/i,fy=/arm|shoulder|hand|thumb|index|middle|ring|pinky|pinkie/i,py=/thigh|leg|foot|toe/i,my=/leg|foot|toe/i;function Aa(i,e=0,t=0,n=0){return new te().makeTranslation(i.x,i.y,i.z).multiply(new te().makeRotationFromEuler(new nn(e,t,n))).multiply(new te().makeTranslation(-i.x,-i.y,-i.z))}function gy(i){i.root.updateMatrixWorld(!0);const e=i.visual.matrixWorld.clone().invert();i.bind=i.bones.map(({bone:s})=>{const r=s.userData.name??s.name;return{bone:s,name:r,matrix:new te().multiplyMatrices(e,s.matrixWorld),side:r.endsWith(".l")?"left":"right",group:fy.test(r)?dy.test(r)?"forearm":"arm":py.test(r)?my.test(r)?"shin":"leg":"body"}});const t=(s,r)=>{const o=i.bind.find(a=>a.name===s);return o?new R().setFromMatrixPosition(o.matrix):r};i.pivots={hips:t("root.x",new R(0,.5,0))};for(const[s,r]of[["left",".l"],["right",".r"]])i.pivots[s]={shoulder:t("arm"+r,new R),elbow:t("forearm"+r,new R),hip:t("thigh"+r,new R),knee:t("leg"+r,new R),wrist:t("hand"+r,new R)};for(const s of i.bind){const r=s.name.match(/(thumb|index|middle|ring|pinky)([123])(?:_base|_rot)?\.([lr])/);if(s.curledMatrix=s.matrix.clone(),!r)continue;const o=new te;for(let a=1;a<=Number(r[2]);a++){const l=i.bind.find(f=>f.name===`c_${r[1]}${a}.${r[3]}`);if(!l)continue;const c=new R,u=new Ke,h=new R;l.matrix.decompose(c,u,h);const d=new te().compose(c,u,new R(1,1,1));o.multiply(d).multiply(new te().makeRotationX(r[1]==="thumb"?.45:1.15)).multiply(d.clone().invert())}s.curledMatrix.premultiply(o)}i.rigid=[],i.visual.traverse(s=>{if(s.isMesh&&!s.isSkinnedMesh){let r=s.parent;for(;r&&!r.isBone;)r=r.parent;i.rigid.push({mesh:s,parentBoneName:r?r.userData.name??r.name:null,matrix:new te().multiplyMatrices(e,s.matrixWorld)}),s.matrixAutoUpdate=!1}}),i.posedWorld=new Map;const n=new Set;i.visual.traverse(s=>{s.isSkinnedMesh&&n.add(s.skeleton)});for(const s of n){const r=new te;s.update=function(){for(let o=0;o<this.bones.length;o++){const a=i.posedWorld.get(this.bones[o])??this.bones[o].matrixWorld;r.multiplyMatrices(a,this.boneInverses[o]).toArray(this.boneMatrices,o*16)}this.boneTexture&&(this.boneTexture.needsUpdate=!0)}}i.animationScratch={desired:new te},uy(i)}function ii(i,e,t,n,s){const r=i.weaponType&&!i.userActions?.clips.weapon_idle&&(!n||n==="jab")&&!(i.dodge>0)&&!(i.hurt>0),o=ay(i,e,t,r&&n==="jab"?null:n,s);if(o)return r&&(dh(i,s,n==="jab"),bo(i)),vh(i,e,r?n==="jab"?"weapon-strike:"+i.attackSerial:"weapon-"+o:o),Th(i,0,{kind:o==="dodge"?"dodge":n,time:e}),yh(i),Ul(e,t,n,s,i.combo??1);const a=t&&Number.isFinite(i.walkDistance)?i.walkDistance/(i.walkStride??(i.height??1.85)*.65)*(2*Math.PI/9):e,l=Ul(a,t,n,s,i.combo??1);i.dodge>0&&(l.drop-=.12,l.lean+=.25),i.visual.position.y=i.baseVisualY+l.drop,i.root.updateMatrixWorld(!0);const c=Math.max(i.flash??0,i.hurt??0),u=Aa(i.pivots.hips,l.lean-c*1.7,l.twist),h={body:u};for(const f of["left","right"]){const g=l[f],_=i.pivots[f],m=f==="left"?1:-1,p=new R(m*.16,-Math.cos(g[0]),-Math.sin(g[0])).normalize(),M=new R(m*.12,-Math.cos(g[0]+g[1]),-Math.sin(g[0]+g[1])).normalize(),y=new Ke().setFromUnitVectors(_.elbow.clone().sub(_.shoulder).normalize(),p),x=new Ke().setFromUnitVectors(_.wrist.clone().sub(_.elbow).normalize(),M.applyQuaternion(y.clone().invert())),S=(v,w)=>new te().makeTranslation(v.x,v.y,v.z).multiply(new te().makeRotationFromQuaternion(w)).multiply(new te().makeTranslation(-v.x,-v.y,-v.z));h["arm"+f]=u.clone().multiply(S(_.shoulder,y)),h["forearm"+f]=h["arm"+f].clone().multiply(S(_.elbow,x)),h["leg"+f]=Aa(_.hip,g[2]),h["shin"+f]=h["leg"+f].clone().multiply(Aa(_.knee,g[3]))}const{desired:d}=i.animationScratch;for(const f of i.bind){d.copy(i.visual.matrixWorld).multiply(h[f.group==="body"?"body":f.group+f.side]).multiply(f.curledMatrix);let g=i.posedWorld.get(f.bone);g||(g=new te,i.posedWorld.set(f.bone,g)),g.copy(d)}if(r){dh(i,s,n==="jab");const f=n==="jab"?"weapon-strike:"+i.attackSerial:"weapon-carry";i.motionId!==f&&(i.motionId=f,i.transitionStart=e)}return bo(i),vh(i,e,n??(t?"walk":"fallback-idle")),Th(i,0,{kind:n,time:e}),yh(i),l}class Cd{constructor(e){this.actor=e,this.root=new Lt,e.root.add(this.root),this.skin=null,this.head=e.bind.find(t=>t.name==="head.x")??e.bind.find(t=>t.name==="head")}set(e){if(e===this.skin)return;this.skin=e;for(const s of[...this.root.children])this.root.remove(s),s.geometry.dispose(),s.material.dispose();if(e==="classic")return;const t=(s,r,o,a,l)=>{const c=new Re(s,new ft({color:r,roughness:.55}));return c.position.set(o,a,l),this.root.add(c),c};this.actor.root.updateMatrixWorld(!0);const n=this.head?new R().setFromMatrixPosition(this.actor.visual.matrixWorld.clone().multiply(this.head.matrix)).applyMatrix4(this.actor.root.matrixWorld.clone().invert()):new R(0,1.55,0);for(const s of[-.1,.1])t(new bs(.087,.018,6,16),e==="gold"?"#edbc40":"#242928",n.x+s,n.y+.08,n.z+.17),t(new gr(.07,16),"#243d3c",n.x+s,n.y+.08,n.z+.171);t(new sn(.07,.025,.025),e==="gold"?"#edbc40":"#242928",n.x,n.y+.08,n.z+.17),e==="gold"&&(t(new bs(.14,.045,6,20),"#bb3e32",n.x,n.y-.17,n.z).rotation.x=Math.PI/2,t(new sn(.095,.3,.035),"#bb3e32",n.x-.1,n.y-.32,n.z+.12))}update(){if(!this.head||!this.root.children.length)return;const e=this.actor,t=e.posedWorld.get(this.head.bone);if(!t)return;const n=e.visual.matrixWorld.clone().multiply(this.head.matrix);this.root.matrixAutoUpdate=!1,this.root.matrix.copy(e.root.matrixWorld).invert().multiply(t).multiply(n.invert()).multiply(e.root.matrixWorld),this.root.updateWorldMatrix(!1,!0)}}class _y{constructor({renderer:e,wallet:t,appearance:n,makeActor:s,onStart:r,onOpen:o,record:a}){Object.assign(this,{renderer:e,wallet:t,appearance:n,makeActor:s,onStart:r,onOpen:o,record:a}),this.root=document.getElementById("main-menu"),this.visible=!1,this.tab="home",this.previewSkin=t.profile.equipped,this.scene=new ec,this.scene.background=null,this.scene.add(new md(15985104,2634795,2.5));const l=new Mo(16769978,3);l.position.set(-3,5,4),this.scene.add(l);const c=new Mo(10205376,2);c.position.set(3,3,-2),this.scene.add(c),this.camera=new Yt(33,1,.1,30),this.camera.position.set(3,1.7,5.2),this.camera.lookAt(0,1,0),this.time=0;const u=new Re(new Hi(1.05,1.15,.08,40),new ft({color:3620659,roughness:1}));u.position.y=-.06,this.scene.add(u),this.root.querySelectorAll("[data-menu-tab]").forEach(h=>h.onclick=()=>{this.tab=h.dataset.menuTab,this.renderUI()}),document.getElementById("menu-play").onclick=()=>{this.hide(),r()},document.getElementById("menu-turn").oninput=h=>{this.rotation=Number(h.target.value)},this.changeActor()}changeActor(){if(this.actor){this.cosmetics.set("classic"),this.scene.remove(this.actor.root);const t=new Set;this.actor.visual.traverse(n=>{if(n.isSkinnedMesh&&t.add(n.skeleton),n.isMesh&&n.userData.wardrobeMaterials)for(const s of Array.isArray(n.material)?n.material:[n.material])s.dispose()});for(const n of t)n.dispose()}const e=ds.find(t=>t.id===this.appearance.character);this.actor=this.makeActor(e),this.scene.add(this.actor.root),this.appearance.apply(this.actor),this.cosmetics=new Cd(this.actor),this.cosmetics.set(this.previewSkin),this.rotation=.1,document.getElementById("menu-turn").value=.1}show(){this.visible=!0,this.root.hidden=!1,document.body.classList.add("in-main-menu"),this.previewSkin=this.wallet.profile.equipped,this.cosmetics.set(this.previewSkin),this.onOpen(),this.renderUI(),document.getElementById("menu-play").focus()}hide(){this.visible=!1,this.root.hidden=!0,document.body.classList.remove("in-main-menu")}renderUI(){const e=o=>document.getElementById(o);e("menu-coins").textContent=this.wallet.profile.coins,e("menu-record").textContent=this.record().levels,e("menu-character-title").textContent=ds.find(o=>o.id===this.appearance.character).name,this.root.querySelectorAll("[data-menu-tab]").forEach(o=>{o.classList.toggle("active",o.dataset.menuTab===this.tab),o.setAttribute("aria-selected",String(o.dataset.menuTab===this.tab))}),this.root.classList.toggle("menu-is-home",this.tab==="home"),this.root.querySelectorAll("[data-menu-page]").forEach(o=>o.hidden=o.dataset.menuPage!==this.tab);const t=e("character-options");t.replaceChildren();for(const o of ds){const a=document.createElement("button");a.className="character-option"+(o.id===this.appearance.character?" selected":""),a.innerHTML=`<span>${o.tag}</span><strong>${o.name}</strong><small>${o.description}</small><em>${o.id===this.appearance.character?"ВЫБРАН":"ВЫБРАТЬ"}</em>`,a.onclick=()=>{this.appearance.set(o.id,this.appearance.palette),this.changeActor(),this.renderUI()},t.append(a)}const n=e("wardrobe-colors");n.replaceChildren();for(const o of ao){const a=document.createElement("button");a.textContent=o.name,a.className=o.id===this.appearance.palette?"selected":"",a.style.setProperty("--swatch",o.shirt),a.onclick=()=>{this.appearance.set(this.appearance.character,o.id),this.appearance.apply(this.actor),this.renderUI()},n.append(a)}const s=e("wardrobe-accessories");s.replaceChildren();for(const o of _r.filter(a=>this.wallet.profile.owned.includes(a.id))){const a=document.createElement("button");a.textContent=o.icon+" "+o.name,a.className=this.wallet.profile.equipped===o.id?"selected":"",a.onclick=()=>{this.wallet.equip(o.id),this.previewSkin=o.id,this.cosmetics.set(o.id),this.renderUI()},s.append(a)}const r=e("menu-shop-items");r.replaceChildren();for(const o of _r){const a=document.createElement("article");a.className="menu-shop-item";const l=this.wallet.profile.owned.includes(o.id),c=this.wallet.profile.equipped===o.id;a.innerHTML=`<span class="shop-icon">${o.icon}</span><div><strong>${o.name}</strong><p>${o.description}</p></div>`;const u=document.createElement("button");u.textContent="Примерить",u.onclick=()=>{this.previewSkin=o.id,this.cosmetics.set(o.id),e("menu-status").textContent=l?"Образ на примерке. Нажми «Надеть», чтобы сохранить.":"Примерка — покупка ещё не совершена."};const h=document.createElement("button");h.textContent=c?"Надето":l?"Надеть":`${o.price} · Купить`,h.disabled=c||!l&&this.wallet.profile.coins<o.price,h.onclick=()=>{(l?this.wallet.equip(o.id):this.wallet.buy(o.id).ok)&&(this.previewSkin=o.id,this.cosmetics.set(o.id),e("menu-status").textContent=l?"Образ сохранён.":"Куплено и надето.",this.renderUI())},a.append(u,h),r.append(a)}}render(e,t){if(this.time+=e,this.tab==="home"){t();return}if(!this.actor)return;this.actor.root.rotation.y=this.rotation??.1,ii(this.actor,this.time,!1,null,0),this.cosmetics.update();const n=document.getElementById("menu-stage").getBoundingClientRect(),s=innerWidth,r=innerHeight;this.camera.aspect=Math.max(.1,n.width/n.height),this.camera.updateProjectionMatrix();const o=this.renderer;t();const a=o.autoClear;o.autoClear=!1,o.clearDepth(),o.setScissor(n.left,r-n.bottom,n.width,n.height),o.setViewport(n.left,r-n.bottom,n.width,n.height),o.setScissorTest(!0),o.render(this.scene,this.camera),o.setScissorTest(!1),o.setViewport(0,0,s,r),o.autoClear=a}}const xy=30;class vy{constructor(e){this.scene=e,this.chunks=new Map,this.box=new sn(.36,.24,.22),this.stripe=new sn(.06,.14,.012),this.caseMaterial=new ft({color:14144441,roughness:.85}),this.red=new ft({color:11353904,roughness:.75}),this.ring=new Vi(.24,.28,24),this.highlight=new Ut({color:10275475,transparent:!0,opacity:.7,depthWrite:!1,side:Nt})}make(e){const t=new Lt,n=new Re(this.box,this.caseMaterial);n.position.y=.15,n.castShadow=!0,t.add(n);for(const o of[0,Math.PI/2]){const a=new Re(this.stripe,this.red);a.position.set(0,.15,.117),a.rotation.z=o,t.add(a)}const s=new Re(this.ring,this.highlight);s.rotation.x=-Math.PI/2,s.position.y=.018,t.add(s);const r={x:e*26+12,z:Math.sin(e*1.8)*1.25,mesh:t,taken:!1};return t.position.set(r.x,0,r.z),this.scene.add(t),r}update(e,t,n=!0){const s=Math.floor(e.x/26);for(let r=s-1;r<=s+2;r++)this.chunks.has(r)||this.chunks.set(r,this.make(r));for(const[r,o]of this.chunks)Math.abs(r-s)>2&&(this.scene.remove(o.mesh),this.chunks.delete(r));if(!n||t>=100)return 0;for(const r of this.chunks.values())if(!r.taken&&Math.hypot(e.x-r.x,e.z-r.z)<.65)return r.taken=!0,r.mesh.visible=!1,Math.min(xy,100-t);return 0}debug(){return[...this.chunks.values()].filter(e=>!e.taken).map(({x:e,z:t})=>({x:e,z:t}))}}class yy{constructor(e){this.scene=e,this.visible=!0,this.chunks=new Map,this.body=new Hi(.29,.27,.72,12,1,!0),this.band=new bs(.286,.018,4,12),this.floor=new gr(.27,12),this.steel=new ft({color:7622715,roughness:.95,metalness:.35,side:Nt}),this.rim=new ft({color:3423025,roughness:.8,metalness:.6}),this.coals=new Ut({color:15426587,side:Nt}),this.flameGeometry=new Nn(.68,1.05),this.fire=new Xn({transparent:!0,depthWrite:!1,side:Nt,blending:mo,uniforms:{time:{value:0}},vertexShader:"varying vec2 vUv; varying float seed; void main(){vUv=uv;seed=modelMatrix[3].x;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;varying float seed;uniform float time;void main(){float y=vUv.y;float wave=sin(y*13.-time*7.+seed)*.08*y+sin(y*23.+time*4.)*.035;float width=(1.-y)*.44;float edge=1.-smoothstep(width*.3,width,abs(vUv.x-.5+wave));float lick=.65+.35*sin(y*19.-time*9.+seed);float alpha=edge*(1.-smoothstep(.25,1.,y))*smoothstep(0.,.07,y)*lick;vec3 color=mix(vec3(1.,.16,.015),vec3(1.,.85,.24),pow(1.-y,2.));gl_FragColor=vec4(color,alpha*.85);}"}),this.glow=new Ut({color:15628837,transparent:!0,opacity:.13,depthWrite:!1,blending:mo}),this.glowGeometry=new gr(.9,20)}make(e){const t=new Lt;t.visible=this.visible,t.position.set(e*26+22.5,0,-2.95);const n=new Re(this.body,this.steel);n.position.y=.38,n.castShadow=!0,t.add(n);for(const o of[.08,.3,.57,.74]){const a=new Re(this.band,this.rim);a.rotation.x=Math.PI/2,a.position.y=o,t.add(a)}const s=new Re(this.floor,this.coals);s.rotation.x=-Math.PI/2,s.position.y=.68,t.add(s);for(const o of[0,Math.PI/2]){const a=new Re(this.flameGeometry,this.fire);a.position.y=1.18,a.rotation.y=o,t.add(a)}const r=new Re(this.glowGeometry,this.glow);return r.rotation.x=-Math.PI/2,r.position.y=.015,t.add(r),this.scene.add(t),t}setVisible(e){this.visible=e;for(const t of this.chunks.values())t.visible=e}update(e,t){this.fire.uniforms.time.value=t;const n=Math.floor(e/26);for(let s=n-1;s<=n+2;s++)this.chunks.has(s)||this.chunks.set(s,this.make(s));for(const[s,r]of this.chunks)Math.abs(s-n)>2&&(this.scene.remove(r),this.chunks.delete(s))}}const fs={crowbar:{label:"Лом",damage:30,range:2.05,uses:12,color:6847099,length:.85},stick:{label:"Палка",damage:23,range:2.4,uses:8,color:8938046,length:1.12},rebar:{label:"Арматура",damage:36,range:2.2,uses:10,color:8935484,length:1.02}};function My(i,e){const t=fs[i];return t?{...e,duration:.84,cooldown:.84,hitAt:.52,damage:t.damage,range:t.range,weapon:i}:e}class by{constructor(e){this.scene=e,this.chunks=new Map,this.equipped=null,this.held=null,this.nearby=null,this.point=new R,this.quaternion=new Ke,this.scale=new R,this.grip=new Ke().setFromEuler(new nn(0,0,-Math.PI/2)),this.materials=new Map,this.geometries=new Map}model(e){const t=fs[e],n=new Lt;let s=this.materials.get(e);s||(s=new ft({color:t.color,roughness:.85,metalness:e==="stick"?0:.65}),this.materials.set(e,s));const r=(o,a,l=0,c=0,u=0)=>{const h=`${o}:${a}`;this.geometries.has(h)||this.geometries.set(h,new Hi(a,a,o,8));const d=new Re(this.geometries.get(h),s);d.position.set(l,c,0),d.rotation.z=u,d.castShadow=!0,n.add(d)};if(r(t.length,e==="stick"?.035:.018,0,t.length/2-.12),e==="crowbar"&&(r(.18,.018,.07,t.length-.12,-1.05),r(.1,.023,-.025,-.13,.55)),e==="rebar")for(let o=0;o<10;o++)r(.065,.009,0,o*.085,-.75);return n}update(e){const t=Math.floor(e.x/26);for(let s=t-1;s<=t+2;s++)if(!this.chunks.has(s)){const r=[];for(let o=0;o<2;o++){const a=["crowbar","stick","rebar"][((s*2+o)%3+3)%3],l=s*26+(o?20:5),c=o?-.65:.5,u=this.model(a);u.position.set(l,.055,c),u.rotation.set(0,.45,Math.PI/2),this.scene.add(u),r.push({type:a,x:l,z:c,mesh:u,taken:!1})}this.chunks.set(s,r)}for(const[s,r]of this.chunks)if(Math.abs(s-t)>2){for(const o of r)this.scene.remove(o.mesh);this.chunks.delete(s)}this.nearby=null;let n=.95;for(const s of this.chunks.values())for(const r of s){if(r.taken)continue;const o=Math.hypot(e.x-r.x,e.z-r.z);o<n&&(n=o,this.nearby=r)}}pickup(e=this.nearby){return!e||e.taken?null:(e.taken=!0,e.mesh.visible=!1,this.held&&this.scene.remove(this.held),this.equipped={type:e.type,uses:fs[e.type].uses},this.held=this.model(e.type),this.scene.add(this.held),this.nearby=null,fs[e.type].label)}wear(){return!this.equipped||--this.equipped.uses>0?!1:(this.equipped=null,this.held&&this.scene.remove(this.held),this.held=null,!0)}pose(e,t=!1){if(!this.held||(this.held.visible=!t,t))return;this.hand??=e.bind.find(a=>a.name==="hand.r")?.bone;const n=e.posedWorld.get(this.hand);if(!n){this.held.visible=!1;return}if(!this.palmOffset){const a=e.bind.find(g=>g.bone===this.hand),l=e.userActions,c=l?.clips.idle.frames[0],u=g=>l?new te().fromArray(c,l.bones.indexOf(g.name)*16).multiply(g.matrix):g.matrix.clone(),h=u(a),d=new R;let f=0;for(const g of["c_middle2.r","c_ring2.r","c_thumb2.r"]){const _=e.bind.find(m=>m.name===g);_&&(!l||l.bones.includes(g))&&(d.add(new R().setFromMatrixPosition(u(_))),f++)}this.palmOffset=(f?d.divideScalar(f):new R().setFromMatrixPosition(h)).applyMatrix4(h.clone().invert())}if(n.decompose(this.point,this.quaternion,this.scale),this.held.position.copy(this.palmOffset).applyMatrix4(n),e.userActions?.weaponGrip&&e.weaponType){const a=new R(...e.userActions.weaponGrip.axis).normalize();this.held.quaternion.copy(this.quaternion).multiply(new Ke().setFromUnitVectors(new R(0,1,0),a));return}const s=e.weaponDirection??new R(-.12,.96,.27),r=new Ke().setFromUnitVectors(new R(0,1,0),s.clone().transformDirection(e.root.matrixWorld));this.orientationSerial!==e.motionId&&(this.fromOrientation=this.held.quaternion.clone(),this.orientationSerial=e.motionId);const o=et.clamp((e.animationTime-(e.transitionStart??-1))/.12,0,1);this.held.quaternion.copy(this.fromOrientation??r).slerp(r,o*o*(3-2*o))}debug(){return{equipped:this.equipped?{...this.equipped}:null,nearby:this.nearby?.type??null,items:[...this.chunks.values()].flat().filter(e=>!e.taken).map(({type:e,x:t,z:n})=>({type:e,x:t,z:n}))}}}const Sy=1.92;function wy(i){const e=Math.max(.16,i?.clips?.dodge?.duration??.24);return{duration:e,speed:Sy/e,cooldown:Math.max(.85,e+.12),invulnerability:.3}}class Ey{constructor(e,t=Math.min(1,e)){this.max=e,this.min=t,this.ratio=e,this.sum=0,this.count=0,this.warmup=1,this.averageMs=0}sample(e,t=!0){if(!t||!Number.isFinite(e)||e<=0||e>2)return null;if(this.warmup>0)return this.warmup-=e,null;if(this.sum+=e,this.count++,this.sum<1||this.count<12)return null;this.averageMs=this.sum/this.count*1e3,this.sum=0,this.count=0;let n=this.ratio;return this.averageMs>29?n=Math.max(this.min,this.ratio-.2):this.averageMs<18&&(n=Math.min(this.max,this.ratio+.1)),n=Math.round(n*100)/100,n===this.ratio?null:(this.ratio=n,this.warmup=this.averageMs>29?.6:2,n)}}class Ty{constructor(e){const n=new Uint8Array(4096);for(let o=0;o<32;o++)for(let a=0;a<32;a++){const l=(o*32+a)*4,c=Math.hypot((a+.5-32/2)/(32/2),(o+.5-32/2)/(32/2));n[l]=n[l+1]=n[l+2]=255,n[l+3]=Math.max(0,1-c)**2*180}const s=new nc(n,32,32);s.needsUpdate=!0,this.positions=new Float32Array(72);const r=new Et;r.setAttribute("position",new Ot(this.positions,3).setUsage(wl)),this.root=new ac(r,new Ao({color:"#a6b958",map:s,size:.45,transparent:!0,opacity:0,depthWrite:!1})),this.root.frustumCulled=!1,this.root.visible=!1,e.add(this.root),this.point=new R}update(e,t){const n=e.attackTime/(e.attackSpec?.duration??1.2),s=t?Math.max(0,Math.min(1,(n-.22)/.12,(.85-n)/.2)):0;if(this.root.visible=s>0,!!this.root.visible){this.anchor??=Sc(e,/teeth/i,[.5,.65,1]),this.anchor?this.anchor.get(this.root.position):this.root.position.set(e.x,1.52,e.z),this.root.rotation.y=e.heading;for(let r=0;r<24;r++){const o=(r/24+n*1.5)%1*s;this.positions[r*3]=Math.sin(r*7.3)*(.04+o*.38),this.positions[r*3+1]=Math.cos(r*3.1)*o*.23+o*.16,this.positions[r*3+2]=.06+o*2.2}this.root.geometry.attributes.position.needsUpdate=!0,this.root.material.opacity=.55*s}}}function Ay(i,e,t=1){const n=i==="high",s=i==="low"||!n&&e<650;return{mode:n?"high":s?"low":"balanced",lowQuality:s,pixelRatio:Math.min(t,n?2:s?1:1.5),samples:n?2:0,shadowSize:n?2048:1024}}const Ry=new Po(-1,1,1,-1,0,1);class Cy extends Et{constructor(){super(),this.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new We([0,2,0,0,2,0],2))}}const Py=new Cy;class Iy{constructor(e){this._mesh=new Re(Py,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ry)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}function Ly(i,e){return i.updateMatrixWorld(!0),Math.max(i.near,-e.clone().applyMatrix4(i.matrixWorldInverse).z)}class Dy{constructor(e,{lowQuality:t=!1,enabled:n=!0,samples:s=2,grading:r=null}={}){this.renderer=e,this.grading=r,this.enabled=n,this.width=1,this.height=1,this.focus=null,this.maxBlur=t?1.8:2.5,this.band=1.2;const o=e.extensions?.has("EXT_color_buffer_float")?Ts:Un;this.target=new Ei(1,1,{type:o,depthBuffer:!0,stencilBuffer:!1}),this.target.depthTexture=new lc(1,1,wi),this.target.samples=t?0:Math.min(s,e.capabilities.maxSamples),this.material=new Xn({depthTest:!1,depthWrite:!1,uniforms:{...r?.uniforms??{gradeOn:{value:0},gradeA:{value:new $e(0,1,1,1)},gradeB:{value:new $e},gradeC:{value:new R},gradeShadow:{value:new R},gradeHighlight:{value:new R}},dofOn:{value:n?1:0},colorTexture:{value:this.target.texture},depthTexture:{value:this.target.depthTexture},pixel:{value:new fe},near:{value:.1},far:{value:100},focus:{value:6},band:{value:this.band},radius:{value:this.maxBlur}},defines:{DOF_SAMPLES:t?8:12},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
   #include <common>
   #include <packing>
   ${Pv}
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
   }`}),this.quad=new Iy(this.material)}resize(e,t){if(this.width=e,this.height=t,!this.enabled&&!this.grading?.active){(this.target.width!==1||this.target.height!==1)&&this.target.setSize(1,1);return}const n=this.renderer.getPixelRatio(),s=Math.max(1,Math.floor(e*n)),r=Math.max(1,Math.floor(t*n));this.target.setSize(s,r),this.material.uniforms.pixel.value.set(1/s,1/r),this.material.uniforms.radius.value=this.maxBlur*n}render(e,t,n,s){const r=Ly(t,n);if(this.focus=this.focus===null?r:et.lerp(this.focus,r,1-Math.exp(-Math.max(0,s)*8)),!this.enabled&&!this.grading?.active){this.renderer.render(e,t);return}const o=this.renderer.getPixelRatio();(this.target.width!==Math.max(1,Math.floor(this.width*o))||this.target.height!==Math.max(1,Math.floor(this.height*o)))&&this.resize(this.width,this.height);const a=this.material.uniforms;a.dofOn.value=this.enabled?1:0,a.near.value=t.near,a.far.value=t.far,a.focus.value=this.focus,this.renderer.setRenderTarget(this.target),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.quad.render(this.renderer)}renderCustom(e){if(!this.grading?.active){e();return}this.resize(this.width,this.height),this.renderer.setRenderTarget(this.target);try{e()}finally{this.renderer.setRenderTarget(null)}this.material.uniforms.dofOn.value=0,this.quad.render(this.renderer)}dispose(){this.target.dispose(),this.material.dispose(),this.quad.dispose()}}function Uy(i){i.updateMatrixWorld(!0);let e=null;if(i.traverse(g=>{if(e||!g.isMesh||g.material.name!=="Pavement tiles")return;const _=g.geometry,m=_.attributes.position,p=_.attributes.uv,M=_.index;if(p)for(let y=0;y<(M?.count??m.count);y+=3){const x=[0,1,2].map(w=>M?M.getX(y+w):y+w),S=x.map(w=>new R().fromBufferAttribute(m,w).applyMatrix4(g.matrixWorld));if(!(S.some(w=>w.z<2.5)||Math.max(...S.map(w=>w.y))-Math.min(...S.map(w=>w.y))>.001||S[1].clone().sub(S[0]).cross(S[2].clone().sub(S[0])).y<=0)){e={points:S,uv:x.map(w=>new fe().fromBufferAttribute(p,w)),material:g.material};break}}}),!e)throw Error("Authored front paving surface not found");const t=new fn().setFromObject(i),n=t.max.z;if(n>=13)return;const[s,r,o]=e.points,a=r.clone().sub(s),l=o.clone().sub(s),c=a.x*l.z-a.z*l.x,u=[[0,s.y-.002,n-.01],[26,s.y-.002,n-.01],[0,s.y-.002,14],[26,s.y-.002,14]],h=[];for(const[g,,_]of u){const m=((g-s.x)*l.z-(_-s.z)*l.x)/c,p=(a.x*(_-s.z)-a.z*(g-s.x))/c;h.push(e.uv[0].x+m*(e.uv[1].x-e.uv[0].x)+p*(e.uv[2].x-e.uv[0].x),e.uv[0].y+m*(e.uv[1].y-e.uv[0].y)+p*(e.uv[2].y-e.uv[0].y))}const d=new Et;d.setAttribute("position",new We(u.flat(),3)),d.setAttribute("uv",new We(h,2)),d.setIndex([0,2,1,1,2,3]),d.computeVertexNormals();const f=new Re(d,e.material);f.name="Camera_front_paving",i.add(f)}function Ny(i,e,t,n=[]){const s=new Set;for(const f of[i,...n])f.traverse(g=>{if(g.isMesh)for(const _ of Array.isArray(g.material)?g.material:[g.material])s.add(_)});const r=Math.min(4,e.capabilities.getMaxAnisotropy());for(const f of s)for(const g of["map","normalMap","roughnessMap","metalnessMap","aoMap"])f[g]&&(f[g].anisotropy=r,f[g].needsUpdate=!0);const o=new ec,a=new pc(10,24,12),l=new Float32Array(a.attributes.position.count*3),c=new Ut({side:Qt,vertexColors:!0});a.setAttribute("color",new Ot(l,3)),o.add(new Re(a,c));const u=new Rl(e);let h=null,d="";t.onChange=f=>{const g=f.skyColor+f.groundColor;if(g!==d){const _=new Pe(f.skyColor),m=new Pe(f.groundColor),p=new Pe;for(let y=0;y<a.attributes.position.count;y++){const x=a.attributes.position.getY(y)/10,S=et.smoothstep(x,-.2,.3);p.copy(m).lerp(_,S),p.toArray(l,y*3)}a.attributes.color.needsUpdate=!0;const M=h;h=u.fromScene(o,.05);for(const y of s)y.envMap=h.texture,y.needsUpdate=!0;M?.dispose(),d=g}for(const _ of s)_.envMapIntensity=f.ambientIntensity/2.6},t.onChange(t.value)}const Ch="bomzh:lighting:v1",nr={exposure:1.08,sunIntensity:3.2,sunColor:"#f2e4cd",azimuth:-48,elevation:52,ambientIntensity:1.5,skyColor:"#c5ccc8",groundColor:"#505347",fogColor:"#85867c",fogStart:24,fogDepth:38,shadows:!0},Fy={exposure:[.2,2.5],sunIntensity:[0,6],azimuth:[-180,180],elevation:[5,85],ambientIntensity:[0,5],fogStart:[5,60],fogDepth:[5,80]};function Ra(i,e=nr){const t={...e};if(!i||typeof i!="object")return t;for(const[n,[s,r]]of Object.entries(Fy))Number.isFinite(i[n])&&(t[n]=Math.max(s,Math.min(r,i[n])));for(const n of["sunColor","skyColor","groundColor","fogColor"])typeof i[n]=="string"&&/^#[0-9a-f]{6}$/i.test(i[n])&&(t[n]=i[n]);return typeof i.shadows=="boolean"&&(t.shadows=i.shadows),t}const Oy={courtyard:{...nr},sunset:{...nr,exposure:1.1,sunIntensity:3.2,sunColor:"#ffbd7a",azimuth:-105,elevation:18,ambientIntensity:1.5,skyColor:"#b5bed9",groundColor:"#665650",fogColor:"#b09583",fogStart:20},night:{...nr,exposure:.85,sunIntensity:1.1,sunColor:"#b9d0ff",azimuth:35,elevation:38,ambientIntensity:.75,skyColor:"#687caa",groundColor:"#252e40",fogColor:"#263443",fogStart:16,fogDepth:30}};class ky{constructor({scene:e,renderer:t,sun:n,ambient:s,lowQuality:r=!1,storage:o}){Object.assign(this,{scene:e,renderer:t,sun:n,ambient:s,storage:o}),this.defaults={...nr,shadows:!r},this.value={...this.defaults},this.targetX=0;try{this.storage=o??globalThis.localStorage;const a=JSON.parse(this.storage.getItem(Ch));a?.version===1&&(this.value=Ra(a.settings,this.defaults))}catch{}this.apply()}set(e){this.value=Ra({...this.value,...e},this.defaults),this.apply()}reset(){this.value={...this.defaults},this.apply()}apply(){const e=this.value;this.renderer.toneMappingExposure=e.exposure,this.sun.intensity=e.sunIntensity,this.sun.color.set(e.sunColor),this.ambient.intensity=e.ambientIntensity,this.ambient.color.set(e.skyColor),this.ambient.groundColor.set(e.groundColor),this.scene.background.set(e.fogColor),this.scene.fog.color.set(e.fogColor),this.scene.fog.near=e.fogStart,this.scene.fog.far=e.fogStart+e.fogDepth,this.renderer.shadowMap.enabled=e.shadows,this.renderer.shadowMap.needsUpdate=!0,this.follow(this.targetX),this.onChange?.(e)}follow(e){this.targetX=e;const t=this.value.azimuth*Math.PI/180,n=this.value.elevation*Math.PI/180,s=Math.sqrt(296);this.sun.position.set(e+s*Math.cos(n)*Math.sin(t),s*Math.sin(n),s*Math.cos(n)*Math.cos(t)),this.sun.target.position.set(e,0,0)}export(){return{version:1,settings:{...this.value}}}save(){try{return this.storage.setItem(Ch,JSON.stringify(this.export())),!0}catch{return!1}}import(e){if(e?.version!==1||!e.settings||typeof e.settings!="object"||Array.isArray(e.settings))throw Error("Нужен файл настроек освещения этой игры.");this.value=Ra(e.settings,this.defaults),this.apply()}}function By(i,{open:e,close:t},n=null){const s=document.getElementById("lighting-panel"),r=document.getElementById("lighting-fields"),o=document.getElementById("lighting-status"),a=[["exposure","Экспозиция",.2,2.5,.01],["sunIntensity","Яркость солнца",0,6,.1],["azimuth","Направление солнца",-180,180,1],["elevation","Высота солнца",5,85,1],["sunColor","Цвет солнца"],["ambientIntensity","Свет в тенях",0,5,.1],["skyColor","Цвет неба"],["groundColor","Оттенок снизу"],["fogColor","Цвет тумана и фона"],["fogStart","Начало тумана",5,60,1],["fogDepth","Дальность видимости",5,80,1]];for(const[g,_,m,p,M]of a){const y=document.createElement("label");y.className="lighting-field";const x=document.createElement("span");x.textContent=_;const S=document.createElement("output"),v=document.createElement("input");v.id="light-"+g,v.dataset.key=g,v.type=m===void 0?"color":"range",m!==void 0&&(v.min=m,v.max=p,v.step=M),y.append(x,S,v),r.append(y),v.addEventListener("input",()=>{i.set({[g]:v.type==="color"?v.value:Number(v.value)}),d(),o.textContent="Предпросмотр. Сохрани понравившийся вариант."})}let l=()=>{};if(n){const g=document.getElementById("grading-fields"),_={brightness:"Яркость",contrast:"Контраст",saturation:"Насыщенность",gamma:"Гамма / средние тона",temperature:"Температура: холоднее / теплее",tint:"Оттенок: зелёный / пурпурный",shadows:"Поднять / затемнить тени",highlights:"Яркость светлых участков",vignette:"Виньетка",splitStrength:"Сила окраски теней и света",shadowColor:"Цвет теней",highlightColor:"Цвет света"};for(const p of Object.keys(_)){const M=document.createElement("label");M.className="lighting-field";const y=document.createElement("span");y.textContent=_[p];const x=document.createElement("output"),S=document.createElement("input");S.id="grade-"+p,S.dataset.key=p;const v=yc[p];S.type=v?"range":"color",v&&([S.min,S.max,S.step]=v),M.append(y,x,S),g.append(M),S.oninput=()=>{n.set({[p]:v?Number(S.value):S.value}),l(),o.textContent="Цвет изменён. Сохрани понравившийся вариант."}}const m=document.getElementById("grade-enabled");l=()=>{for(const p of g.querySelectorAll("input"))p.value=n.value[p.dataset.key],p.previousElementSibling.value=p.type==="color"?p.value:Number(p.value).toFixed(2);m.checked=n.value.enabled},m.onchange=()=>{n.set({enabled:m.checked}),o.textContent=m.checked?"Цветокоррекция включена.":"Показана исходная картинка; значения ползунков остались прежними."},document.getElementById("grading-reset").onclick=()=>{n.reset(),l(),o.textContent="Исходный цвет. Нажми «Сохранить», чтобы закрепить."},document.getElementById("grading-preset").onchange=p=>{p.target.value&&(n.set(Rv[p.target.value]),l(),p.target.value="",o.textContent="Цветовой пресет применён.")}}const c=new URLSearchParams(location.search).get("editor")==="compositing";document.getElementById("grading-section").open=c,document.getElementById("light-section").open=!c;const u=document.getElementById("lighting-collapse");u.onclick=()=>{const g=s.classList.toggle("compact");document.getElementById("lighting-body").hidden=g,u.textContent=g?"Развернуть":"Свернуть",u.setAttribute("aria-expanded",String(!g))};const h=document.getElementById("light-shadows");h.onchange=()=>{i.set({shadows:h.checked}),o.textContent="Предпросмотр. Сохрани понравившийся вариант."};function d(){for(const g of r.querySelectorAll("input"))g.value=i.value[g.dataset.key],g.previousElementSibling.value=g.type==="color"?g.value:Number(g.value).toFixed(g.step==="0.01"?2:g.step==="0.1"?1:0);h.checked=i.value.shadows,l()}document.getElementById("lighting-open").onclick=()=>{e()!==!1&&(s.hidden=!1,d(),o.textContent="Игра на паузе. Изменения видны сразу.",document.getElementById("lighting-close").focus())};function f(){s.hidden=!0,t()}return document.getElementById("lighting-close").onclick=f,s.addEventListener("keydown",g=>{if(g.key==="Tab"){const _=[...s.querySelectorAll("button,input,select")].filter(M=>!M.disabled&&M.getClientRects().length),m=_[0],p=_.at(-1);g.shiftKey&&document.activeElement===m?(g.preventDefault(),p.focus()):!g.shiftKey&&document.activeElement===p&&(g.preventDefault(),m.focus())}g.key==="Escape"&&(g.stopPropagation(),f())}),document.getElementById("lighting-save").onclick=()=>{const g=i.save(),_=!n||n.save();o.textContent=g&&_?"Сохранено: свет и цвет на этом устройстве.":"Не удалось сохранить на устройстве. Скачай настройки файлом."},document.getElementById("lighting-reset").onclick=()=>{i.reset(),n?.reset(),d(),o.textContent="Вернул исходный свет. Нажми «Сохранить», чтобы закрепить."},document.getElementById("lighting-preset").onchange=g=>{g.target.value&&(i.set(Oy[g.target.value]),d(),g.target.value="",o.textContent="Пресет применён. Можно настроить дальше.")},document.getElementById("lighting-export").onclick=()=>{const g=URL.createObjectURL(new Blob([JSON.stringify({...i.export(),...n?{compositing:n.export()}:{}},null,2)],{type:"application/json"})),_=document.createElement("a");_.href=g,_.download="dvor-light-and-color.json",_.click(),setTimeout(()=>URL.revokeObjectURL(g),1e3),o.textContent="Файл настроек можно прислать мне для переноса в игру."},document.getElementById("lighting-import").onchange=async g=>{const _=g.target.files[0];if(_){try{if(_.size>1e5)throw Error("Файл слишком большой.");const m=JSON.parse(await _.text()),p=i.export(),M=n?.export();try{i.import(m),m.compositing&&n&&n.import(m.compositing)}catch(y){throw i.import(p),M&&n.import(M),y}d(),o.textContent="Настройки загружены. Нажми «Сохранить», чтобы закрепить."}catch(m){o.textContent=m.message}g.target.value=""}},{hide:f,isOpen:()=>!s.hidden}}class zy extends Ps{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Xy(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new Vy(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new rM(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=er.extractUrlBase(e);o=er.resolveURL(c,this.path)}else o=er.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new pd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Pd){try{o[qe.KHR_BINARY_GLTF]=new oM(e)}catch(h){s&&s(h);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new vM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:o[h]=new Gy;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new aM(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[h]=new lM;break;case qe.KHR_MESH_QUANTIZATION:o[h]=new cM;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Hy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Vy{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Pe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],tn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Mo(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new gd(u),c.distance=h;break;case"spot":c=new Pm(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),kn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Gy{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ut}extendParams(e,t,n){const s=[];e.color=new Pe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ht))}return Promise.all(s)}}class Wy{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Xy{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(a,a)}return Promise.all(r)}}class qy{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Yy{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class jy{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ht)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Ky{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class $y{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(a[0],a[1],a[2],tn),Promise.all(r)}}class Jy{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Zy{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(a[0],a[1],a[2],tn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ht)),Promise.all(r)}}class Qy{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class eM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class tM{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class nM{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class iM{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class sM{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class rM{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==_n.TRIANGLES&&c.mode!==_n.TRIANGLE_STRIP&&c.mode!==_n.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new te,m=new R,p=new Ke,M=new R(1,1,1),y=new sc(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,_.compose(m,p,M));for(const x in l)if(x==="_COLOR_0"){const S=l[x];y.instanceColor=new El(S.array,S.itemSize,S.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);wt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Pd="glTF",Gs=12,Ph={JSON:1313821514,BIN:5130562};class oM{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Gs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Gs,r=new DataView(e,Gs);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Ph.JSON){const c=new Uint8Array(e,Gs+o,a);this.content=n.decode(c)}else if(l===Ph.BIN){const c=Gs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class aM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Nl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Nl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=ps[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,tn,d)})})}}class lM{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class cM{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Id extends br{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,M=1-m,y=p-d+h;for(let x=0;x!==a;x++){const S=o[_+x+a],v=o[_+x+l]*u,w=o[g+x+a],I=o[g+x]*u;r[x]=M*S+y*v+m*w+p*I}return r}}const uM=new Ke;class hM extends Id{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return uM.fromArray(r).normalize().toArray(r),r}}const _n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ih={9728:en,9729:dn,9984:Gh,9985:to,9986:Xs,9987:ri},Lh={33071:vi,33648:go,10497:ci},Ca={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_i={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dM={CUBICSPLINE:void 0,LINEAR:fr,STEP:dr},Pa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),i.DefaultMaterial}function Ni(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function kn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function mM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gM(i){let e;const t=i.extensions&&i.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ia(t.attributes):e=i.indices+":"+Ia(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ia(i.targets[n]);return e}function Ia(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Fl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _M(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const xM=new te;class vM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Hy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Rm(this.options.manager):this.textureLoader=new Dm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ni(r,a,s),kn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(er.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ca[s.type],a=ps[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ot(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ca[s.type],c=ps[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(M);y||(_=new c(a,p*f,s.count*f/u),y=new Hp(_,f/u),t.cache.add(M,y)),m=new tc(y,l,d%f/u,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),m=new Ot(_,l,g);if(s.sparse!==void 0){const p=Ca.SCALAR,M=ps[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,S=new M(o[1],y,s.sparse.count*p),v=new c(o[2],x,s.sparse.count*l);a!==null&&(m=new Ot(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,I=S.length;w<I;w++){const E=S[w];if(m.setX(E,v[w*l]),l>=2&&m.setY(E,v[w*l+1]),l>=3&&m.setZ(E,v[w*l+2]),l>=4&&m.setW(E,v[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Ih[d.magFilter]||dn,u.minFilter=Ih[d.minFilter]||ri,u.wrapS=Lh[d.wrapS]||ci,u.wrapT=Lh[d.wrapT]||ci,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==en&&u.minFilter!==dn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ft(_);m.needsUpdate=!0,d(m)}),t.load(er.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),kn(h,o),h.userData.mimeType=o.mimeType||_M(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ao,Vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new cd,Vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ft}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=s[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],tn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,ht)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Nt);const u=r.alphaMode||Pa.OPAQUE;if(u===Pa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Pa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ut&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new fe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ut&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ut){const h=r.emissiveFactor;a.emissive=new Pe().setRGB(h[0],h[1],h[2],tn)}return r.emissiveTexture!==void 0&&o!==Ut&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ht)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),kn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ni(s,h,r),h})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Dh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=gM(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Dh(new Et,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?fM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const M=c[f];if(m.mode===_n.TRIANGLES||m.mode===_n.TRIANGLE_STRIP||m.mode===_n.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Gp(_,M):new Re(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===_n.TRIANGLE_STRIP?p.geometry=rh(p.geometry,Jh):m.mode===_n.TRIANGLE_FAN&&(p.geometry=rh(p.geometry,bl));else if(m.mode===_n.LINES)p=new Kp(_,M);else if(m.mode===_n.LINE_STRIP)p=new oc(_,M);else if(m.mode===_n.LINE_LOOP)p=new $p(_,M);else if(m.mode===_n.POINTS)p=new ac(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&mM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),kn(p,r),m.extensions&&Ni(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ni(s,h[0],r),h[0];const d=new Lt;r.extensions&&Ni(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(et.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Po(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new te;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ic(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let y=0,x=d.length;y<x;y++){const S=d[y],v=f[y],w=g[y],I=_[y],E=m[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const T=n._createAnimationTracks(S,v,w,I,E);if(T)for(let b=0;b<T.length;b++)p.push(T[b])}const M=new Mm(r,void 0,p);return kn(M,s),M})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,xM)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new ld:c.length>1?u=new Lt:c.length===1?u=c[0]:u=new wt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),kn(u,r),r.extensions&&Ni(n,u,r),r.matrix!==void 0){const h=new te;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Lt;n.name&&(r.name=s.createUniqueName(n.name)),kn(r,n),n.extensions&&Ni(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Vn||d instanceof Ft)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];_i[r.path]===_i.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(_i[r.path]){case _i.weights:c=Ss;break;case _i.rotation:c=ws;break;case _i.translation:case _i.scale:c=Es;break;default:n.itemSize===1?c=Ss:c=Es;break}const u=s.interpolation!==void 0?dM[s.interpolation]:fr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+_i[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Fl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ws?hM:Id;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function yM(i,e,t){const n=e.attributes,s=new fn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){const u=Fl(ps[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new R,l=new R;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Fl(ps[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new qn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Dh(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Nl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ze.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),kn(i,e),yM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?pM(i,e.targets,t):i})}function MM(i){const e=new Map,t=new Map,n=i.clone();return Ld(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ld(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Ld(i.children[n],e.children[n],t)}function Dd(i,e){const t=e*.2,n=e*.8;return Math.max(0,Math.min(1,(i-t)/.22,(n-i)/.18))}function Ud(i,e){const t=Dd(i,e);return t*t*(3-2*t)}const xn={jab:{duration:.65,cooldown:.65,hitAt:.7,damage:14,range:1.35,label:"Кулак"},kick:{duration:.7,cooldown:.8,hitAt:9/17,damage:25,range:1.9,label:"Пинок"},burp:{duration:1.2,cooldown:2.5,hitAt:.38,damage:24,range:2.3,label:"Отрыжка"},spray:{duration:1.4,cooldown:2.4,hitAt:.28,activeUntil:.8,damage:34,range:3.2,label:"Струя"}};function bM(i,e,t){if(e.down>0)return!1;const n=e.x-i.x,s=e.z-i.z,r=i.heading??i.facing*Math.PI/2,o=n*Math.sin(r)+s*Math.cos(r),a=Math.abs(n*Math.cos(r)-s*Math.sin(r));return t==="burp"?o>.05&&o<xn.burp.range&&a<.45+o*.3:t==="spray"?o>.15&&o<xn.spray.range*(Number.isFinite(i.attackTime)?Ud(i.attackTime,i.attackSpec?.duration??xn.spray.duration):1)&&a<.38+o*.16:Math.hypot(n,s)<(i.attackSpec?.range??xn[t].range)&&o>-.15}function Uh(i){if(!Number.isSafeInteger(i)||i<0)throw new RangeError("Invalid stage");const e=i*26+1,t=i+1,n=i===0?1:Math.min(4,2+Math.floor(i/4)),s=i<3?1:Math.min(3,1+Math.floor(i/4)),r=Array.from({length:s},(o,a)=>Array.from({length:n},(l,c)=>({type:i===0?"fighter":i>=2&&c===0&&(i%3===2||t%5===0)?"bruiser":(i+a+c)%2?"runner":"fighter",side:i<2?1:c%2?-1:1,z:[-.9,.8,0,1.4][(i+a+c)%4],delay:c*.4})));return{id:`street-${t}`,index:i,number:t,title:`Участок ${t}`,center:e,halfWidth:10,trigger:e-3,left:e-10,right:e+10,waves:r,scaling:{health:1+Math.min(1.5,i*.065),damage:1+Math.min(1,i*.035),speed:1+Math.min(.35,i*.012),windup:1-Math.min(.22,i*.008)}}}class SM{constructor(){this.index=0,this.active=!1,this.wave=0,this.phase="explore",this.delay=0,this.goTime=0,this.current=Uh(0)}get arena(){return this.active?this.current:null}get bounds(){return this.active?[this.current.left,this.current.right]:[this.current.center-36,this.current.right+20]}update(e,t,n){if(e<=0)return null;if(this.goTime=Math.max(0,this.goTime-e),!this.active)return t>=this.current.trigger?(this.active=!0,this.wave=0,this.phase="incoming",this.delay=1.25,this.goTime=0,{type:"warning",arena:this.current}):null;const s=this.current;if(this.phase==="incoming"){if(this.delay=Math.max(0,this.delay-e),this.delay===0)return this.phase="fight",{type:"spawn",arena:s,wave:this.wave,enemies:s.waves[this.wave]}}else if(!n.some(r=>r.encounter===s.id&&r.health>0))return this.wave+1<s.waves.length?(this.wave++,this.phase="incoming",this.delay=1.25,{type:"warning",arena:s}):(this.index++,this.active=!1,this.phase="explore",this.goTime=5,this.current=Uh(this.index),{type:"clear",arena:s});return null}}class wM{constructor(e,{reducedMotion:t=!1}={}){this.camera=e,this.focus=new R(-7.3,1,0),this.lead=.7,this.distance=6.2,this.shake=0,this.shakeClock=0,this.shakeOverride=null,this.savedBase=null,this.framingCamera=e.clone(),this.reducedMotion=t,this.position=new R,this.target=new R}cinematic(e,t,n,s,r,o){this.restoreBase();const a=r<650,l=r/o,c=new R((e.x+(t.root?.position.x??t.x))/2,1.05,(e.z+t.z)/2),u=Math.max(a?6.5:4.8,1.35/(Math.tan(et.degToRad(45/2))*l)),h=(a?.55:0)+(this.reducedMotion?0:.18*Math.sin(Math.min(1,n/2.8)*Math.PI)),d=c.clone().add(new R(Math.sin(h)*u,u*.14,Math.cos(h)*u)),f=1-Math.exp(-s*5);this.focus.lerp(c,f),this.camera.position.lerp(d,f),this.camera.lookAt(this.focus),this.camera.fov=et.lerp(this.camera.fov,45,f),this.camera.updateProjectionMatrix(),this.applyShake(s)}isShakeEnabled(){return this.shakeOverride??!this.reducedMotion}setShakeEnabled(e){this.shakeOverride=!!e,e||(this.shake=0)}restoreBase(){this.savedBase&&(this.camera.position.copy(this.savedBase.position),this.camera.quaternion.copy(this.savedBase.quaternion))}impact(e=.18){this.isShakeEnabled()&&Number.isFinite(e)&&e>0&&(this.shake=Math.min(.3,this.shake+e))}applyShake(e){const t=this.camera;if(this.savedBase??={position:new R,quaternion:new Ke},this.savedBase.position.copy(t.position),this.savedBase.quaternion.copy(t.quaternion),this.framingCamera.copy(t,!1),this.framingCamera.updateMatrixWorld(!0),this.shakeClock+=Math.max(0,e),this.shake=Math.max(0,this.shake-Math.max(0,e)*1.25),!this.isShakeEnabled()||this.shake===0)return;const n=(this.shake/.3)**2,s=this.shakeClock,r=new R(.09*n*(Math.sin(s*64+1.1)+.4*Math.sin(s*101))/1.4,.065*n*Math.cos(s*79+.4),.025*n*Math.sin(s*53));r.applyQuaternion(this.savedBase.quaternion),t.position.add(r),t.quaternion.multiply(new Ke().setFromEuler(new nn(.008*n*Math.sin(s*71),.006*n*Math.cos(s*59),.018*n*Math.sin(s*67+.8))))}update({player:e,enemies:t=[],arena:n=null,time:s=0,dt:r=.016,width:o=1e3,height:a=700}){this.restoreBase();const l=o<650,c=o/a,u=1-Math.exp(-r*3.7);this.lead=et.lerp(this.lead,e.facing*(e.moving?.7:.25),u);const h=n?l?7:5.8:l?7.6:6.2;this.distance=et.lerp(this.distance,h,1-Math.exp(-r*2.8));let d=l?53:40,f=e.x+this.lead;if(n){d=Math.min(d,et.radToDeg(2*Math.atan((n.halfWidth-2)/(this.distance*1.25*c))));const _=this.distance*1.25*Math.tan(et.degToRad(d/2))*c;f=l?e.x+this.lead*.45:n.center,f=et.clamp(f,n.left+_+1,n.right-_-1)}this.target.set(f,1,e.z*.6),this.focus.lerp(this.target,u),this.position.set(this.focus.x+1.2,this.focus.y+this.distance*.13,this.focus.z+this.distance),this.camera.position.lerp(this.position,1-Math.exp(-r*7)),this.camera.lookAt(this.focus);const g=et.lerp(this.camera.fov,d,u);Math.abs(this.camera.fov-g)>.001&&(this.camera.fov=g,this.camera.updateProjectionMatrix()),this.applyShake(r)}}const EM={runner:{label:"Задира",health:60,speed:2.35,damage:9,windup:.42,recovery:1.15,range:1.45,color:"#d59861"},fighter:{label:"Боец",health:80,speed:1.7,damage:14,windup:.65,recovery:1.35,range:1.65,color:"#d68664"},bruiser:{label:"Громила",health:110,speed:1.05,damage:24,windup:1,recovery:2,range:2,color:"#c16c84"}},Ol={jab:0,kick:14,spray:32,burp:24,dodge:16};function Nd(i,e){const t=Ol[e];return t===void 0||i.stamina<t?!1:(i.stamina-=t,t>0&&(i.regenDelay=.45),!0)}function TM(i,e){if(e<=0)return;const t=i.regenDelay;i.regenDelay=Math.max(0,t-e),i.stamina=Math.min(100,i.stamina+Math.max(0,e-t)*28)}function AM(i,e){const t=e.x-i.x,n=e.z-i.z,s=Math.hypot(t,n);return e.invulnerable>0||s>=i.spec.range?!1:i.type==="bruiser"||s<.01||(t*i.aimX+n*i.aimZ)/s>.25}function ir(i,e,t=0){return Math.hypot(i,e)>.001?Math.atan2(i,e):t}function La(i,e,t,n=14){const s=Math.atan2(Math.sin(e-i),Math.cos(e-i));return i+s*(1-Math.exp(-n*t))}const RM=2.8,Nh=1.3;function lo(i,e){return Math.min(100,Math.max(0,i+e))}function CM(i,e){return e.filter(t=>t.health>0&&!t.entering&&!(t.down>0)&&Math.hypot(t.x-i.x,t.z-i.z)<=2.8).sort((t,n)=>Math.hypot(t.x-i.x,t.z-i.z)-Math.hypot(n.x-i.x,n.z-i.z))[0]??null}const Ws=i=>(i=Math.min(1,Math.max(0,i)),i*i*(3-2*i));function PM(i){const e=i>=Nh;return{punch:i<.65?.14*Ws(i/.65):i<1.3?.14+.56*Ws((i-.65)/.65):i<1.65?.7:.7+.3*Ws((i-1.65)/.8),contact:e,approach:Ws(i/.55),fall:Ws((i-Nh)/.85),done:i>=RM}}function IM(i,e,t){let s=e.x>=i.x?1:-1;return(e.x-s*.65<t[0]+.1||e.x-s*.65>t[1]-.1)&&(s=-s),{side:s,endX:Math.max(t[0]+.1,Math.min(t[1]-.1,e.x-s*.65))}}class LM{constructor(e){this.root=new Lt,e.add(this.root),this.root.visible=!1,this.growth=0,this.curve=new uc(new R,new R(0,.4,1.35),new R(0,-.8,3.05)),this.geometry=new mc(this.curve,30,.018,5,!1),this.geometry.attributes.position.setUsage(wl),this.jet=new Re(this.geometry,new Ut({color:"#e7c648",transparent:!0,opacity:.75,depthWrite:!1})),this.jet.frustumCulled=!1,this.root.add(this.jet),this.positions=new Float32Array(96);const t=new Et;t.setAttribute("position",new Ot(this.positions,3).setUsage(wl)),this.drops=new ac(t,new Ao({color:"#f4d85d",size:.04,transparent:!0,opacity:.7,depthWrite:!1})),this.drops.frustumCulled=!1,this.root.add(this.drops),this.splash=new Re(new Vi(.08,.23,20),new Ut({color:"#cdb745",transparent:!0,opacity:.3,side:Nt,depthWrite:!1})),this.splash.rotation.x=-Math.PI/2,this.root.add(this.splash),this.point=new R,this.tangent=new R,this.normal=new R}update(e,t,n){const s=e.attackSpec?.duration??1.4,r=t?Dd(e.attackTime,s):0;if(this.growth=r,this.root.visible=r>0,!this.root.visible)return;this.anchor??=Sc(e,/shtani/i,[.5,.82,1]),this.anchor?this.anchor.get(this.root.position):this.root.position.set(e.x,.85,e.z),this.root.rotation.y=e.heading,this.root.position.x+=Math.sin(e.heading)*.012,this.root.position.z+=Math.cos(e.heading)*.012;const o=this.root.position.y;this.curve.v2.y=.025-o;const a=this.point,l=this.tangent,c=this.normal,u=this.geometry.attributes.position,h=Ud(e.attackTime,s);for(let d=0;d<=30;d++){const f=d/30*h;this.curve.getPoint(f,a),this.curve.getTangent(f,l),c.set(0,-l.z,l.y);for(let g=0;g<=5;g++){const _=g/5*Math.PI*2,m=.018*Math.min(1,r*3);u.setXYZ(d*6+g,a.x+Math.cos(_)*m,a.y+c.y*Math.sin(_)*m,a.z+c.z*Math.sin(_)*m)}}u.needsUpdate=!0,this.jet.material.opacity=.75*Math.min(1,r*4);for(let d=0;d<32;d++){const f=(d/32+n*1.8)%1*h;this.curve.getPoint(f,a),a.x+=Math.sin(d*11+n*14)*.035*f,a.y+=Math.cos(d*7+n*12)*.025*f,a.toArray(this.positions,d*3)}this.drops.geometry.attributes.position.needsUpdate=!0,this.drops.material.opacity=.7*r,this.splash.visible=h>.94,this.splash.position.set(0,.026-o,3.05),this.splash.scale.setScalar(r*(1+.1*Math.sin(n*21))),this.splash.material.opacity=.3*r}}function DM(){let i=8141;const e=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),t=()=>{const m=document.createElement("canvas");return m.width=m.height=512,m},n=t(),s=t(),r=t(),o=t(),a=t(),l=n.getContext("2d"),c=s.getContext("2d");l.fillStyle="#625e54",l.fillRect(0,0,512,512),c.fillStyle="#555",c.fillRect(0,0,512,512);const u=["#876655","#785a4e","#936f5b","#755449","#826357"];for(let m=0;m<16;m++)for(let p=-1;p<9;p++){const M=p*64+m%2*32,y=m*32;l.fillStyle=u[Math.floor(e()*u.length)],l.fillRect(M+2,y+2,60,28),l.fillStyle="#c5aa812b",l.fillRect(M+3,y+3,58,2),c.fillStyle="#bbb",c.fillRect(M+2,y+2,60,28)}function h(m,p){const M=m.getContext("2d"),y=M.getImageData(0,0,512,512);for(let x=0;x<y.data.length;x+=4){const S=(e()-.5)*p;for(let v=0;v<3;v++)y.data[x+v]+=S}M.putImageData(y,0,0)}h(n,25);const d=r.getContext("2d");d.fillStyle="#65665f",d.fillRect(0,0,512,512),h(r,24);for(let m=0;m<35;m++){let p=e()*512,M=e()*512;d.strokeStyle=m%2?"#383d3699":"#92918355",d.lineWidth=1+e(),d.beginPath(),d.moveTo(p,M);for(let y=0;y<8;y++)p+=(e()-.5)*45,M+=e()*25,d.lineTo(p,M);d.stroke()}for(let m=0;m<18;m++)d.fillStyle="#333a3020",d.beginPath(),d.ellipse(e()*512,e()*512,20+e()*65,10+e()*25,e()*3,0,Math.PI*2),d.fill();const f=o.getContext("2d");f.fillStyle="#929185",f.fillRect(0,0,512,512),h(o,35),f.strokeStyle="#4b514746",f.lineWidth=3;for(let m=0;m<=512;m+=128)f.strokeRect(m,0,128,512),f.strokeRect(0,m,512,128);const g=a.getContext("2d");g.fillStyle="#707d69",g.fillRect(0,0,512,512);for(let m=0;m<130;m++)g.fillStyle=m%2?"#654735":"#8f6848",g.beginPath(),g.ellipse(e()*512,e()*512,e()*18,e()*38,e()*4,0,Math.PI*2),g.fill();h(a,20);const _=(m,p=!0)=>{const M=new Gn(m);return M.wrapS=M.wrapT=ci,M.colorSpace=p?ht:si,M.anisotropy=4,M};return{brick:_(n),brickBump:_(s,!1),asphalt:_(r),concrete:_(o),rust:_(a)}}class UM{constructor(e,{textured:t=!0,editable:n=!1}={}){if(this.editable=n,this.scene=e,this.chunks=new Map,this.unit=new sn(1,1,1),this.plane=new Nn(1,1),this.body=new dc([[0,0],[.062,0],[.072,.02],[.072,.28],[.06,.31],[.03,.34],[.027,.45],[.031,.46],[0,.46]].map(([s,r])=>new fe(s,r)),10),this.label=new Hi(.073,.073,.12,10,1,!0),this.ring=new bs(.17,.015,5,20),this.materials=new Map,this.geometries=new Map,this.textures=t?DM():{},this.chunkIndex=null,this.labelMaterial=new ft({color:"#cdbf94",roughness:.94}),this.labelMaterial.name="Bottle_label",typeof document<"u"){const s=document.createElement("canvas");s.width=128,s.height=64;const r=s.getContext("2d");r.fillStyle="#cdbf94",r.fillRect(0,0,128,64),r.fillStyle="#753c31",r.fillRect(0,23,128,18),r.fillStyle="#e6d5b0",r.font="bold 10px Arial",r.textAlign="center",r.fillText("КВАС",32,36),r.fillText("КВАС",96,36),this.labelMaterial.color.set("#ffffff"),this.labelMaterial.map=new Gn(s),this.labelMaterial.map.colorSpace=ht}}material(e,t="plain"){const n=t+e;if(!this.materials.has(n)){const s=this.textures,r=new ft({color:e,roughness:t==="metal"?.76:.96});t==="brick"&&(r.map=s.brick,r.bumpMap=s.brickBump,r.bumpScale=.028),["asphalt","concrete","rust"].includes(t)&&(r.map=s[t],r.bumpMap=s[t],r.bumpScale=t==="asphalt"?.025:.012),this.materials.set(n,r)}return this.materials.get(n)}metricBox(e,t,n,s){const r=[e,t,n,s].join(":");if(!this.geometries.has(r)){const o=new sn(e,t,n),a=o.attributes.position,l=o.attributes.normal,c=o.attributes.uv;for(let u=0;u<a.count;u++)Math.abs(l.getY(u))>.5?c.setXY(u,a.getX(u)/s,a.getZ(u)/s):c.setXY(u,(Math.abs(l.getX(u))>.5?a.getZ(u):a.getX(u))/s,a.getY(u)/s);this.geometries.set(r,o)}return this.geometries.get(r)}setEnvironment(e){for(const t of this.chunks.values()){this.scene.remove(t.group);for(const n of t.local)n.dispose()}this.chunks.clear(),this.template=e,this.chunkIndex=null,e.traverse(t=>{t.isMesh&&(t.castShadow=!t.userData.noShadow,t.receiveShadow=!0)})}addBottles(e,t){const n=[];for(let s=0;s<5;s++){const r=new Lt,o=new Re(this.body,this.material("#756033")),a=new Re(this.label,this.labelMaterial),l=new Re(this.ring,this.material("#e7c25c"));if(a.position.y=.18,l.rotation.x=-Math.PI/2,l.position.y=.018,r.add(o,a,l),this.editable)for(const h of[o,a,l])h.userData.module={kind:"pickup",id:String(s)};const c=2+s*4.7,u=Math.sin(t*3+s*2.1)*1.5;r.position.set(c,0,u),e.add(r),n.push({mesh:r,x:t*26+c,z:u,taken:!1})}return n}makeChunk(e){if(this.template){const m=this.templateForChunk?.(e)??this.template,p=new Lt;p.position.x=e*26;const M=m.clone(!0),y=[];M.traverse(S=>{S.updateMatrix(),S.matrixAutoUpdate=!1,S.isInstancedMesh&&y.push(S)}),p.add(M);const x=this.addBottles(p,e);return this.scene.add(p),{group:p,bottles:x,local:y}}const t=new Lt,n=[],s=[],r=[];t.position.x=e*26;let o={kind:"road",id:"road"};const a=(m,p)=>o={kind:m,id:String(p)},l=(m,p,M,y,x,S,v,w="plain")=>{const I=["brick","asphalt","concrete","rust"].includes(w),E=I?this.metricBox(m,p,M,w==="asphalt"?4:2):this.unit,T=new Re(E,this.material(y,w));return I||T.scale.set(m,p,M),T.position.set(x,S,v),this.editable&&(T.userData.module=o),r.push(T),T};l(26,.2,18,"#c3c3bd",13,-.1,0,"asphalt"),l(26,.05,1.7,"#b5b5a7",13,-.03,-2.85,"concrete"),l(26,.18,.25,"#868a7c",13,-.02,-1.98,"concrete"),l(26,.05,1.6,"#a6a99b",13,-.035,3.3,"concrete"),l(26,.18,.25,"#858b7c",13,-.02,2.5,"concrete");const c=["#c4b8ab","#c1b1a3","#b2ada2","#c1b3a7"];for(let m=0;m<4;m++){const p=3.25+m*6.5,M=6.8+(Math.abs(e)+m)%3*.5,y=c[((e+m)%4+4)%4];a("building",m),l(6.5,M,3,y,p,M/2,-5.6,"brick"),l(6.5,.18,3.15,"#797b70",p,M,-5.6,"concrete"),l(6.5,.45,.08,"#535c50",p,.22,-4.06);for(let x=0;x<4;x++)for(let S=0;S<3;S++){const v=p-1.8+S*1.8,w=1.25+x*1.65;if(a(x===0&&S===1?"door":"window",m+":"+x+":"+S),x===0&&S===1){l(.95,2,.15,m%2?"#48574e":"#66514a",v,1,-4,"rust"),l(1.12,.12,.22,"#858a7d",v,2,-3.96,"concrete"),l(.055,.06,.05,"#b4aa83",v+.31,1,-3.89);continue}if(l(.93,1.25,.11,"#777e73",v,w,-4.01),l(.75,1.05,.14,"#343e3b",v,w,-3.98),l(.035,1.05,.17,"#616b62",v,w,-3.97),l(.75,.035,.17,"#616b62",v,w,-3.97),l(1,.09,.25,"#8d9183",v,w-.64,-3.94,"concrete"),S===2&&x===1){a("air_conditioner",m),l(.65,.38,.4,"#9a9b8c",v,w-.36,-3.72);for(let I=0;I<4;I++)l(.52,.023,.04,"#525d54",v,w-.48+I*.07,-3.5)}}if(a("fire_escape",m),m%2===0)for(let x=1;x<=3;x++){const S=x*1.65+.25;l(2.5,.09,.7,"#343d35",p,S,-3.65,"metal"),l(2.5,.05,.05,"#323d35",p,S+.7,-3.28,"metal");for(let v=0;v<6;v++)l(.035,.7,.035,"#343d35",p-1.2+v*.48,S+.35,-3.28,"metal");for(const v of[-1.2,1.2])l(.045,.7,.65,"#343d35",p+v,S+.35,-3.65,"metal");if(x<3){for(const v of[-.32,.32])l(.04,1.95,.05,"#343d35",p+.6+v,S+.86,-3.42,"metal").rotation.z=-.38;for(let v=0;v<8;v++)l(.7,.035,.06,"#343d35",p+.3+v*.09,S+.13+v*.21,-3.42,"metal")}if(x===2&&(e+m)%3===0)for(let v=0;v<3;v++)l(.4,.55,.025,v%2?"#9d9e8c":"#c5c0a9",p-.65+v*.45,S+.4,-3.22)}if(a("downpipe",m),l(.07,M,.1,"#48574c",p+2.9,M/2,-3.97,"metal"),a("pallet",m),m===1){for(let x=0;x<4;x++)l(.1,1.1,.08,"#81775c",p-1+x*.25,.57,-3.7).rotation.z=-.12;l(1,.08,.08,"#81775c",p-.6,.35,-3.65)}}for(const m of[4,17])a("streetlight",m),l(.1,4.2,.1,"#657365",m,2.1,-2.5,"metal"),l(1.25,.08,.1,"#657365",m+.55,4.16,-2.5,"metal"),l(.6,.15,.3,"#9a9e8d",m+1.05,4.06,-2.5),l(.26,.22,.26,"#696f5e",m,.11,-2.5);a("bench",0),l(1.7,.12,.6,"#76654c",11,.55,-2.7),l(1.7,.55,.1,"#76654c",11,.86,-3);for(const m of[-.6,.6])l(.08,.55,.4,"#435347",11+m,.27,-2.7,"metal");a("dumpster",0),l(.85,1.05,.7,"#b0b8a0",21,.52,-2.7,"rust"),l(.94,.07,.78,"#5d6c59",21,1.07,-2.7,"metal");for(let m=0;m<15;m++){a("litter",m);const p=(m*7.13+Math.abs(e)*.9)%26,M=m%2?-1.7-m%3*.14:2.15;l(.16+m%3*.04,.009,.11,m%4?"#b3b2a0":"#815243",p,.012,M).rotation.y=m*2.1}const u=document.createElement("canvas");u.width=512,u.height=128;const h=u.getContext("2d");h.fillStyle="#363e34",h.fillRect(0,0,512,128),h.fillStyle="#c8c3a9",h.font="bold 34px Arial",h.textAlign="center",h.fillText(["ДВОР № 7","ПРОХОД","ДВОРОВЫЕ ИСТОРИИ"][(e%3+3)%3],256,76);const d=new Gn(u);d.colorSpace=ht;const f=new Ut({map:d}),g=new Re(this.plane,f);g.scale.set(2.5,.625,1),g.position.set(8,2.8,-3.89),this.editable&&(g.userData.module={kind:"sign",id:"sign"}),t.add(g),s.push(d,f);const _=new Map;for(const m of r){const p=m.geometry.uuid+m.material.uuid;_.has(p)||_.set(p,[]),_.get(p).push(m)}for(const m of _.values()){const p=m[0],M=new sc(p.geometry,p.material,m.length);this.editable&&(M.userData.modules=m.map(y=>y.userData.module));for(let y=0;y<m.length;y++)m[y].updateMatrix(),M.setMatrixAt(y,m[y].matrix);M.castShadow=!0,M.receiveShadow=!0,M.computeBoundingSphere(),t.add(M),s.push(M)}return n.push(...this.addBottles(t,e)),this.scene.add(t),{group:t,bottles:n,local:s}}update(e){const t=Math.floor(e/26);if(t!==this.chunkIndex){this.chunkIndex=t;for(let n=t-2;n<=t+2;n++)this.chunks.has(n)||this.chunks.set(n,this.makeChunk(n));for(const[n,s]of this.chunks)if(Math.abs(n-t)>2){this.scene.remove(s.group);for(const r of s.local)r.dispose();this.chunks.delete(n)}}}nearestBottle(e,t=.95){let n=null;for(const s of this.chunks.values())for(const r of s.bottles){const o=Math.hypot(r.x-e.x,r.z-e.z);!r.taken&&o<t&&(t=o,n=r)}return n}takeBottle(e,t){return!t||t.taken||!Array.from(this.chunks.values()).some(n=>n.bottles.includes(t))||Math.hypot(t.x-e.x,t.z-e.z)>=.95?!1:(t.taken=!0,t.mesh.visible=!1,!0)}collect(e){let t=0;for(const n of this.chunks.values())for(const s of n.bottles)!s.taken&&Math.hypot(s.x-e.x,s.z-e.z)<.65&&(s.taken=!0,s.mesh.visible=!1,t++);return t}}class NM{constructor(e){this.scene=e;const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),s=n.createRadialGradient(64,64,5,64,64,64);s.addColorStop(0,"rgba(0,0,0,.55)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,128,128),this.geometry=new Nn(1,1),this.material=new Ut({map:new Gn(t),transparent:!0,depthWrite:!1})}add(){const e=new Re(this.geometry,this.material);return e.rotation.x=-Math.PI/2,this.scene.add(e),e}update(e){const t=e.shadow;t&&(t.visible=e.root.visible,t.position.set(e.root.position.x,.012,e.root.position.z),t.scale.set(.9+Math.max(0,e.root.position.y)*.2,.6,1))}}const Fd={mode:"free-preview",async request(){return{completed:!0}}};async function FM(i,e,t,n=3e4){let s;try{return(await Promise.race([Promise.resolve().then(()=>i.request({placement:e,runId:t})),new Promise(r=>{s=setTimeout(()=>r({completed:!1}),n)})]))?.completed===!0}catch{return!1}finally{clearTimeout(s)}}const Od="bomzh:endless-record:v1",So=i=>Number.isSafeInteger(i)&&i>=0;function kd(i){try{const e=JSON.parse((i??globalThis.localStorage).getItem(Od));return e&&So(e.levels)&&So(e.score)?e:{levels:0,score:0}}catch{return{levels:0,score:0}}}function OM(i,e){const t=kd(e);if(!So(i.levels)||!So(i.score)||!(i.levels>t.levels||i.levels===t.levels&&i.score>t.score))return t;const s={levels:i.levels,score:i.score};try{(e??globalThis.localStorage).setItem(Od,JSON.stringify(s))}catch{}return s}function Bd(i,e=0){i.updateMatrixWorld(!0);const t=new _d,n=new xi(new R(0,0,1),-e),s=new R,r=[];for(const o of[-1,1])for(const a of[-1,1])t.setFromCamera(new fe(o,a),i),t.ray.intersectPlane(n,s)&&r.push(s.x);return[Math.min(...r),Math.max(...r)]}function kM(i,e,t){const n=[];for(const s of[-1.4,1.4])for(const r of[0,3.2])for(const o of[-.6,.6])n.push(new R(e+s,r,t+o).project(i).x);return[Math.min(...n),Math.max(...n)]}function BM(i,e,t){let s=Bd(i,t)[e<0?0:1]+e*2.5;for(let r=0;r<20;r++){const o=kM(i,s,t);if(e<0?o[1]<-1.15:o[0]>1.15)return{x:s,z:t,side:e,projected:o};s+=e*2}throw new Error("Could not locate an offscreen entrance")}const Q=i=>document.getElementById(i),Ec=new URLSearchParams(location.search).get("location");let Wn=Ec==="entrance"?"entrance":"street";if(!Ec)try{localStorage.getItem("bomzh:starting-location")==="entrance"&&(Wn="entrance")}catch{}let Ln=Wn,cs=null,co=[],jt=null,qt=null;const zM=Ec==="courtyard",vr=zv();Il(vr,"entrance");const Tc=["lighting","compositing"].includes(new URLSearchParams(location.search).get("editor")),ms=new Cv;Q("lighting-open").hidden=!Tc;const St=new ec;St.background=new Pe("#92968d");St.fog=new Ql("#92968d",24,62);const zi=Ay(new URLSearchParams(location.search).get("quality"),innerWidth,devicePixelRatio),Lo=zi.lowQuality,zd=new Ey(zi.pixelRatio),Mt=new Av({canvas:Q("game"),antialias:!Lo,powerPreference:"high-performance"});Mt.setPixelRatio(zi.pixelRatio);Mt.shadowMap.enabled=!Lo;Mt.shadowMap.type=Vl;Mt.shadowMap.autoUpdate=!0;Mt.shadowMap.needsUpdate=!0;Mt.outputColorSpace=ht;Mt.toneMapping=Hh;Mt.toneMappingExposure=1.08;const Pn=new Yt(40,1,.1,100),Da=Pn.clone(),En=new Dy(Mt,{grading:ms,lowQuality:Lo,samples:zi.samples,enabled:new URLSearchParams(location.search).get("dof")==="on"}),Fh=new R,yn=new wM(Pn,{reducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches});try{const i=localStorage.getItem("bomzh:camera-shake:v1");(i==="on"||i==="off")&&yn.setShakeEnabled(i==="on")}catch{}Q("camera-shake").checked=yn.isShakeEnabled();Q("camera-shake").onchange=i=>{yn.setShakeEnabled(i.target.checked);try{localStorage.setItem("bomzh:camera-shake:v1",i.target.checked?"on":"off")}catch{}};const Ac=new md("#e1e4e2","#696a67",2.6);St.add(Ac);const Mn=new Mo("#f1e8df",2.2);Mn.position.set(-8,14,6);Mn.castShadow=!0;Mn.shadow.mapSize.set(zi.shadowSize,zi.shadowSize);Object.assign(Mn.shadow.camera,{left:-18,right:18,top:14,bottom:-14,far:45});Mn.shadow.bias=-.001;Mn.shadow.normalBias=.025;Mn.shadow.radius=3;St.add(Mn,Mn.target);const Ls=new ky({scene:St,renderer:Mt,sun:Mn,ambient:Ac,lowQuality:Lo});new URLSearchParams(location.search).get("lighting")==="reference"&&Ls.reset();const HM=new Vv({scene:St,lighting:Ls,sun:Mn,ambient:Ac,renderer:Mt}),VM=i=>new ft({color:i,roughness:.92}),kl=new NM(St),uo=new LM(St),Hd=new Ty(St),gs=new Nv(St),wo=new yy(St),Vd=new vy(St),on=new by(St),Dn=new UM(St,{textured:!1});Dn.update(-8);const Gd=new Gv(St,Dn),Ne={health:100,bottles:0,score:0,defeated:0,bruisersDefeated:0,over:!1},C={x:-8,z:.5,facing:1,heading:Math.PI/2,attack:null,attackTime:0,cooldowns:{jab:0,kick:0,spray:0,burp:0},queuedAttack:null,stun:0,combo:0,lastJab:-10,invulnerable:0,stamina:100,regenDelay:0,dodge:0,dodgeCooldown:0,dashX:1,dashZ:0},bt=new qv;bt.beginRun(globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`);const sr=new Wv;let hn=null,rr=null,Ti=!1,Wd=!1,Mi=!1;const lt=new SM;let Xd=null,gt=null,Zt=0,Bi=-8,ut=!1,yr=kd();const as=[],ho=[],It=[],_t=new Set;let qd=0,mt=0,Yd=0,ti=null,fo=!1,Ct=!1;function jd(i){if(zM&&i<=0)return{courtyard:!0,variant:0};const e=Pl(i,Wn);return Ln==="street"&&i>=0&&e.location==="entrance"?{...e,courtyard:!0}:e}function Rc(i){return Ln==="street"&&!!jd(Math.floor(i/26)).courtyard}function Ua(i){if(!Rc(i))return-2;const e=(i%26+26)%26;return-2-1.5*Math.max(0,Math.min(1,(e-4.8)/2,(21.2-e)/2))}function Eo(){const i=Ln==="street"&&Rc(C.x)?"Двор":wd[Ln];Q("location-name").textContent=i,document.querySelectorAll("[data-start-location]").forEach(e=>{e.classList.toggle("selected",e.dataset.startLocation===Wn),e.setAttribute("aria-pressed",String(e.dataset.startLocation===Wn)),e.disabled=mt>0})}function Kd(i){Ln=i;for(const e of It)e.health<=0&&(e.corpseAge=4,e.root.visible=!1,e.warning.visible=!1);Hv(Dn,i==="entrance"?vr:cs,C.x),wo.setVisible(i==="street"),Eo()}function GM(i){i!==Ln&&(C.heading=Math.PI,C.facing=1,jt={to:i,elapsed:0,applied:!1},_t.clear(),Q("location-transition").hidden=!1,Q("transition-title").textContent=wd[i],Q("transition-subtitle").textContent=i==="entrance"?"С улицы — в подъезд":"Снова на район")}function WM(i){if(!jt)return;const e=jt;e.elapsed+=i;const t=Math.min(1,e.elapsed/.22,(.75-e.elapsed)/.28);Q("location-transition").style.opacity=Math.max(0,t),!e.applied&&e.elapsed>=.25&&(e.applied=!0,qt&&(C.x=Math.floor(qt.x/26)*26+(e.to==="entrance"?15.15:23.2),C.z=-1.45,C.heading=Math.PI/2,C.facing=1,Bi=Math.max(Bi,C.x-.25)),Kd(e.to),qt=null,gs.set(null)),e.elapsed>=.75&&(jt=null,Q("location-transition").hidden=!0,_t.clear())}for(const i of document.querySelectorAll("[data-start-location]"))i.onclick=()=>{if(!(!Ct||mt>0)){Wn=i.dataset.startLocation;try{localStorage.setItem("bomzh:starting-location",Wn)}catch{}Kd(Wn)}};function Xt(i){Q("toast").textContent=i,Yd=mt+2}function Tn(i=400){if(!fo)return;ti??=new AudioContext,ti.resume();const e=ti.createOscillator(),t=ti.createGain();e.type="triangle",e.frequency.setValueAtTime(i,ti.currentTime),t.gain.setValueAtTime(.05,ti.currentTime),t.gain.exponentialRampToValueAtTime(.001,ti.currentTime+.12),e.connect(t),t.connect(ti.destination),e.start(),e.stop(ti.currentTime+.13)}Q("sound").onclick=()=>{fo=!fo,Q("sound").textContent="Звук: "+(fo?"вкл.":"выкл."),Tn()};function zn(){yr=OM({levels:lt.index,score:Ne.score}),Q("health").textContent=Math.ceil(Ne.health),Q("health-bar").value=Ne.health,Q("level").textContent=lt.index+1,Q("score").textContent=Ne.score,Q("best").textContent=yr.levels,Cc()}function Cc(){Q("wallet").textContent=bt.profile.coins,Q("shop-open").disabled=!Ct||!!gt,Q("shop-coins").textContent=bt.profile.coins,Q("storage-hint").hidden=bt.persistent,Ne.over&&Pc()}function Pc(){const i=bt.run;Q("run-coins").textContent=`Монеты за забег: ${i.earned}${i.doubled?" + "+i.earned+" бонус":""} · В кошельке: ${bt.profile.coins}`,Q("revive").hidden=i.revived||i.closed,Q("revive").disabled=Mi,Q("double-coins").hidden=i.doubled,Q("double-coins").disabled=Mi||i.earned===0,Q("reward-note").textContent=i.doubled?"Монеты удвоены. Можно начать новый забег.":"Второй шанс: 60 здоровья и 3 секунды защиты. Бонусы бесплатные в тестовой версии. Удвоение завершает забег.",Q("restart").disabled=Mi,Q("ending-shop").disabled=Mi}function XM(){Ne.over=!0,_t.clear(),zn(),Q("ending").hidden=!1,Q("ending-title").textContent="Забег окончен",Q("ending-text").textContent=`Пройдено участков: ${lt.index}. Очки: ${Ne.score}. Побеждено: ${Ne.defeated}. Рекорд: ${yr.levels} участков.`,Q("reward-status").textContent="",Pc()}function $d(){const i=Q("shop-items");i.replaceChildren();for(const e of _r){const t=bt.profile.owned.includes(e.id),n=bt.profile.equipped===e.id,s=document.createElement("article");s.className="shop-item"+(n?" selected":""),s.innerHTML=`<span class="shop-icon" aria-hidden="true">${e.icon}</span><div><h3>${e.name}</h3><p>${e.description}</p></div>`;const r=document.createElement("button");r.dataset.cosmetic=e.id,r.textContent=n?"Надето":t?"Надеть":`${e.price} 🪙 · Купить`,r.disabled=n||!t&&bt.profile.coins<e.price,r.onclick=()=>{(t?bt.equip(e.id):bt.buy(e.id).ok)&&(rr?.set(bt.profile.equipped),Q("shop-status").textContent=t?"Образ надет.":"Куплено и надето!",Cc(),$d())},s.append(r),i.append(s)}}function Jd(){!Ct||gt||Mi||Ti||Bl.isOpen()||(Wd=ut,Ti=!0,ut=!0,_t.clear(),Q("pause-menu").hidden=!0,Q("shop").hidden=!1,Q("shop-status").textContent="",Cc(),$d(),Q("shop-close").focus())}function Zd(){Ti=!1,ut=Wd,Q("shop").hidden=!0,Q("pause-menu").hidden=!ut,Ne.over||Q("shop-open").focus()}Q("shop-open").onclick=Jd;Q("ending-shop").onclick=Jd;Q("shop-close").onclick=Zd;async function Qd(i){if(!Ne.over||Mi||Ti)return;const e=bt.run;if(i==="revive"&&(e.revived||e.closed)||i==="double"&&(e.doubled||e.earned===0))return;if(Mi=!0,Pc(),Q("reward-status").textContent="Получаем бонус…",await FM(Fd,i,e.id)&&Ne.over&&bt.claim(i,e.id))if(i==="revive"){Ne.over=!1,Ne.health=60,C.stamina=100,C.stun=0,C.hurt=0,C.attack=null,C.queuedAttack=null,C.dodge=0,C.combo=0,C.invulnerable=3,_t.clear(),ar=0;for(const n of It)n.windup=0,n.strike=0,n.cooldown=Math.max(1.5,n.cooldown),n.stun=Math.max(1,n.stun),n.warning.visible=!1;Q("ending").hidden=!0,Xt("Второй шанс! 3 секунды защиты")}else Q("reward-status").textContent="Монеты удвоены!";else Q("reward-status").textContent="Бонус не получен. Можно попробовать ещё раз.";Mi=!1,zn()}Q("revive").onclick=()=>Qd("revive");Q("double-coins").onclick=()=>Qd("double");Q("restart").onclick=()=>location.reload();function Do(){if(!(hn?.visible||jt)){if(Bl.isOpen()){Bl.hide();return}!Ct||Ne.over||Ti||(ut=!ut,_t.clear(),Q("pause-menu").hidden=!ut,ut&&Q("resume").focus())}}const Bl=By(Ls,{open:()=>{if(!Tc||!ut||Ti)return!1;_t.clear(),Q("pause-menu").hidden=!0},close:()=>{Q("pause-menu").hidden=!1,Q("lighting-open").focus()}},ms);Q("back-to-menu").onclick=()=>{Q("pause-menu").hidden=!0,hn?.show()};Q("ending-menu").onclick=()=>hn?.show();Q("pause").onclick=Do;Q("resume").onclick=Do;function or(i){if(i!=="kick"&&!(!Ct||Ne.over||ut||jt||gt||C.stun>0||C.dodge>0||C.pickup)){if(C.attack){C.attackTime/(C.attackSpec??xn[C.attack]).duration>.15&&(C.queuedAttack={kind:i,until:mt+(C.attackSpec??xn[C.attack]).duration-C.attackTime+.2});return}if(!(C.cooldowns[i]>0)){if(!Nd(C,i)){Xt("Передохни или продолжай кулаками — они не тратят силы");return}if(i==="jab"){const e=(on.equipped?Ad(C.userActions).length:xr(C.userActions).length)||3;C.combo=mt-C.lastJab<(C.attackSpec?.duration??.65)+.65?C.combo%e+1:1,C.lastJab=mt}else C.combo=0;if(C.attackSpec=i==="jab"?{...xn.jab,...iy(C.userActions,C.combo-1)}:C.userActions?.clips[i]?{...xn[i],duration:C.userActions.clips[i].duration,clip:i}:xn[i],i==="jab"&&on.equipped){const e=ny(C.userActions,C.combo-1);e||(C.combo=1),C.attackSpec={...My(on.equipped.type,xn.jab),...e}}C.attackSerial=(C.attackSerial??0)+1,C.attack=i,C.attackTime=0,C.cooldowns[i]=C.attackSpec.cooldown,C.hit=!1,C.sprayHits=new Set,Tn(i==="burp"?90:i==="kick"?180:300)}}}function ef(){if(!Ct||Ne.over||ut||jt||gt||C.dodge>0||C.dodgeCooldown>0||C.pickup||!Nd(C,"dodge"))return;let i=Number(_t.has("right"))-Number(_t.has("left")),e=Number(_t.has("down"))-Number(_t.has("up"));const t=Math.hypot(i,e);t?(i/=t,e/=t):(i=Math.sin(C.heading),e=Math.cos(C.heading));const n=wy(C.userActions);C.dashX=i,C.dashZ=e,C.heading=ir(i,e),Math.abs(i)>.01&&(C.facing=Math.sign(i)),C.dodgeDuration=n.duration,C.dodgeSpeed=n.speed,C.dodge=n.duration,C.dodgeCooldown=n.cooldown,C.invulnerable=Math.max(C.invulnerable,n.invulnerability),C.hurt=0,C.attack=null,C.queuedAttack=null,C.stun=0,C.combo=0,yn.impact(.08),Tn(520)}function Oh(i){Ne.score+=i.type==="bruiser"?75:25,Ne.defeated++,bt.earn(i.type==="bruiser"?8:3),i.type==="bruiser"&&Ne.bruisersDefeated++}function tf(){if(!Ct||Ne.over||ut||jt||gt||C.stun>0||C.dodge>0||C.attack||C.pickup)return;if(Zt<100){Xt("Суперсила копится от попаданий");return}const i=CM(C,It);if(!i){Xt("Подойди к противнику ближе");return}Zt=0,C.attack=null,C.queuedAttack=null,_t.clear();const{side:e,endX:t}=IM(C,i,[Math.max(Bi,lt.bounds[0]),lt.bounds[1]]);gt={target:i,elapsed:0,hit:!1,startX:C.x,startZ:C.z,endX:t,side:e},C.facing=e,C.heading=e*Math.PI/2;for(const n of It)n!==i&&(n.root.visible=!1),n.warning.visible=!1,n.bar.visible=!1,n.badge.visible=!1;document.body.classList.add("finishing"),Q("cinema").querySelector("span").textContent="РЕШАЮЩИЙ УДАР",Q("cinema").hidden=!1}function Ic(){const i=Dn.nearestBottle(C),e=on.nearby;return i&&(!e||Math.hypot(i.x-C.x,i.z-C.z)<=Math.hypot(e.x-C.x,e.z-C.z))?{kind:"bottle",item:i}:e?{kind:"weapon",item:e}:null}function nf(){if(!Ct||ut||jt||Ne.over||gt||C.attack||C.pickup||C.dodge>0||C.stun>0)return;if(qt&&gs.near(C)){GM(qt.to);return}const i=Ic();if(!i)return;const e=i.item;if(i.kind==="bottle"){if(!Dn.takeBottle(C,e))return;const n=Ne.bottles;Ne.bottles++,bt.earn(3),Ne.score+=10,Math.floor(Ne.bottles/5)>Math.floor(n/5)&&(Ne.health=Math.min(100,Ne.health+5)),ah(C,"bottle_pickup",1)||(Zt=lo(Zt,20)),Tn(650),Xt("Бутылка · +10 очков · +3 монеты"),zn();return}if(ah(C,"weapon_pickup",e)){const n=e.x-C.x,s=e.z-C.z;C.heading=ir(n,s),Math.abs(n)>.01&&(C.facing=Math.sign(n)),_t.clear();return}const t=on.pickup(e);t&&(C.combo=0,C.lastJab=-10,Xt(`${t} в руках · J — удар`),Tn(480))}Q("weapon-pickup").onpointerdown=i=>{i.preventDefault(),nf()};Q("super").onpointerdown=i=>{i.preventDefault(),tf()};Q("dodge").onpointerdown=i=>{i.preventDefault(),ef()};for(const i of document.querySelectorAll("[data-attack]"))i.addEventListener("pointerdown",e=>{e.preventDefault(),or(i.dataset.attack)});for(const i of document.querySelectorAll("[data-move]")){const e=i.dataset.move;i.addEventListener("pointerdown",t=>{t.preventDefault(),!(ut||jt)&&(i.setPointerCapture(t.pointerId),_t.add(e))});for(const t of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(t,()=>_t.delete(e))}const zl={a:"left",ArrowLeft:"left",d:"right",ArrowRight:"right",w:"up",ArrowUp:"up",s:"down",ArrowDown:"down"};window.addEventListener("keydown",i=>{if(i.key==="Escape"&&!i.repeat){Ti?Zd():Do();return}if(!(ut||jt)&&(zl[i.key]&&(i.preventDefault(),_t.add(zl[i.key])),!i.repeat)){const e=i.key.toLowerCase();(e==="e"||i.code==="KeyE")&&(i.preventDefault(),nf()),e==="f"&&tf(),e==="j"&&or("jab"),e==="l"&&or("spray"),e==="k"&&or("burp"),i.code==="Space"&&(i.preventDefault(),ef())}});window.addEventListener("keyup",i=>_t.delete(zl[i.key]));window.addEventListener("blur",()=>_t.clear());document.addEventListener("visibilitychange",()=>{_t.clear()});function kh(i,e){const t=new Lt,n=MM(i);n.updateMatrixWorld(!0);const s=new fn().setFromObject(n),r=s.getSize(new R),o=s.getCenter(new R),a=e/r.y;n.scale.setScalar(a),n.position.set(-o.x*a,-s.min.y*a,-o.z*a),t.add(n),St.add(t);const l=[];n.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0),u.isBone&&l.push({bone:u,rest:u.rotation.clone()})});const c={root:t,visual:n,bones:l,height:e,walkDistance:0,baseVisualY:n.position.y,shadow:kl.add()};return gy(c),c}const Na=new zy;try{let s=function(c){const u=kh(c.model==="hero"?i.scene:e.scene,c.height);return c.model==="hero"&&sy(u,t),u},r=function(c){St.remove(c.root,c.shadow);const u=new Set;c.visual.traverse(h=>{if(h.isSkinnedMesh&&u.add(h.skeleton),h.isMesh&&h.userData.wardrobeMaterials)for(const d of Array.isArray(h.material)?h.material:[h.material])d.dispose()});for(const h of u)h.dispose()},a=function(){if(C.visual){rr?.set("classic"),r(C);for(const u of[...o,"userActions","userBoneIndices","walkSpeed","walkStride","closedLoops","referenceFingers","referenceFingersByClip","poseHierarchy","bindByName","lastMotion","transitionFrom","motionId","transitionStart","weaponReferenceRotation"])delete C[u]}const c=s(ds.find(u=>u.id===sr.character));o=Object.keys(c),Object.assign(C,c),on.hand=null,on.palmOffset=null,sr.apply(C),rr=new Cd(C),rr.set(bt.profile.equipped),C.root.position.set(C.x,0,C.z),C.root.rotation.y=C.heading,ii(C,mt,!1,null,0)},l=function(c,u,h,d,f){const g=EM[h],_={...g,health:Math.round(g.health*f.health),damage:Math.round(g.damage*f.damage),speed:g.speed*f.speed,windup:g.windup*f.windup},m=kh(e.scene,h==="bruiser"?2.2:h==="runner"?1.8:1.95);m.root.position.set(c,0,u),m.root.rotation.y=-Math.PI/2;const p=new Re(new Nn(.8,.07),new Ut({color:_.color,side:Nt}));p.position.y=2.4,m.root.add(p);const M=new Re(new Vi(_.range-.08,_.range,32),new Ut({color:h==="bruiser"?"#ec738d":"#f2bb51",transparent:!0,opacity:.55,side:Nt,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.set(c,.015,u),M.visible=!1,St.add(M);const y=new Re(new fc(h==="bruiser"?.14:.08),VM(_.color));y.position.set(-.7,2.7,0),m.root.add(y),It.push({...m,x:c,z:u,type:h,spec:_,encounter:d,entering:!0,corpseAge:0,down:0,stun:0,knockback:0,health:_.health,windup:0,cooldown:1,bar:p,warning:M,badge:y,flash:0,aimX:-1,aimZ:0})};const[i,e,t,n]=await Promise.all([Na.loadAsync("./models/hobo.glb?v=oct29"),Na.loadAsync("./models/enemy.glb?v=perf1"),fetch("./models/hobo-actions.json?v=oct29").then(c=>{if(!c.ok)throw new Error("Actions unavailable");return c.json()}),Na.loadAsync("./models/street.glb?v=bench1")]);n.scene.traverse(c=>{c.isMesh&&(/graffiti/i.test(c.name)||/graffiti/i.test(c.material?.name??""))&&(c.visible=!1)}),Uy(n.scene),Lv(n.scene),Il(n.scene,"street"),cs=n.scene,co=[0,1,2].map(c=>{const u=Uv(cs,c);return Il(u,"street"),u}),Ny(n.scene,Mt,Ls,co),Dn.templateForChunk=c=>{if(Ln==="entrance")return vr;const u=jd(c);return u.courtyard?co[u.variant]:cs},Dn.setEnvironment(Ln==="entrance"?vr:cs),Dn.update(-8),wo.setVisible(Ln==="street"),Eo();let o=[];a(),hn=new _y({renderer:Mt,wallet:bt,appearance:sr,makeActor:c=>{const u=s(c);return St.remove(u.root,u.shadow),u},record:()=>yr,onOpen:()=>{Eo(),ut=!0,_t.clear(),Q("pause-menu").hidden=!0,Q("ending").hidden=!0,Q("menu-play").querySelector("span").textContent=Ne.over?"Новый забег":mt>0?"Продолжить":"Начать забег"},onStart:()=>{if(Ne.over){sessionStorage.setItem("bomzh:start-now","1"),location.reload();return}a(),ut=!1,Q("pause-menu").hidden=!0,zn()}}),Xd=l,Ct=!0,rf(),Q("loading").style.display="none",zn(),Tc?(yn.update({player:C,enemies:It,time:0,dt:3,width:innerWidth,height:innerHeight}),Do(),Q("lighting-open").click()):(yn.update({player:C,enemies:It,time:0,dt:3,width:innerWidth,height:innerHeight}),hn.show(),sessionStorage.getItem("bomzh:start-now")==="1"&&(sessionStorage.removeItem("bomzh:start-now"),Q("menu-play").click()))}catch(i){console.error(i),Q("load-status").textContent="Не удалось загрузить модели. Проверь соединение и обнови страницу."}let ar=0;const po=[];function Fa(i,e,t=.18){yn.impact(t);const n=new Re(new Vi(.1,.22,12),new Ut({color:16769690,transparent:!0,depthWrite:!1,side:Nt}));n.position.set(i,1.1,e),n.quaternion.copy(Pn.quaternion),St.add(n),po.push({mesh:n,age:0}),ar=.055}const qM=new Nm;let Ks=null;function sf(){qd++,requestAnimationFrame(sf);const i=qM.getDelta(),e=zd.sample(i,Ct&&!ut&&!document.hidden);e!==null&&(Ks=e),Ks!==null&&Ct&&!ut&&!C.moving&&!C.attack&&!C.pickup&&!gt&&_t.size===0&&(Mt.setPixelRatio(Ks),Lc(),Ks=null);const t=Math.min(i,.05);WM(ut?0:t);const n=ar>0||ut||jt?0:t;ar=Math.max(0,ar-t),mt+=n;for(let u=po.length-1;u>=0;u--){const h=po[u];h.age+=t,h.mesh.scale.setScalar(1+h.age*6),h.mesh.material.opacity=1-h.age/.22,h.age>=.22&&(St.remove(h.mesh),h.mesh.geometry.dispose(),h.mesh.material.dispose(),po.splice(u,1))}if(Ct&&!Ne.over&&!gt&&!hn?.visible){if(n>0)for(let b=as.length-1;b>=0;b--){const U=as[b];if(U.wait-=n,U.wait<=0){const O=BM(Pn,U.foe.side,U.foe.z);Xd(O.x,O.z,U.foe.type,U.arena.id,U.arena.scaling),ho.push({level:U.arena.number,...O}),ho.length>24&&ho.shift(),as.splice(b,1)}}if(C.pickup){const b=C.pickup;b.elapsed+=n;const U=tr(C);if(!b.applied&&U>=.55)if(b.applied=!0,b.kind==="weapon_pickup"){const O=on.pickup(b.payload);O&&(C.combo=0,C.lastJab=-10,Xt(`${O} в руках · J — комбо`),Tn(480))}else Zt=lo(Zt,20*b.payload),Xt("Глоток кваса · +суперсила"),Tn(650);U>=1&&(C.pickup=null)}C.stun=Math.max(0,C.stun-n),TM(C,n),C.dodgeCooldown=Math.max(0,C.dodgeCooldown-n);const u=Math.min(C.dodge,n);C.dodge=Math.max(0,C.dodge-n);const h=C.dodge>0||u>0;for(const b of Object.keys(xn))C.cooldowns[b]=Math.max(0,C.cooldowns[b]-n);C.invulnerable=Math.max(0,C.invulnerable-n),C.hurt=Math.max(0,(C.hurt??0)-n);let d=Number(_t.has("right"))-Number(_t.has("left")),f=Number(_t.has("down"))-Number(_t.has("up"));const g=Math.hypot(d,f);C.moving=g>0,g&&(d/=g,f/=g);const _=C.x,m=C.z;h&&(d=C.dashX,f=C.dashZ);const p=h?u:n,M=C.pickup?0:h?C.dodgeSpeed??8:C.stun>0?.6:C.attack?.35:C.walkSpeed??Kv;let[y,x]=lt.bounds;if(lt.active){const b=Bd(yn.framingCamera,C.z);y=Math.max(y,b[0]+.9),x=Math.min(x,b[1]-.9),y>x&&(y=lt.bounds[0],x=lt.bounds[1])}qt&&(x=Math.min(x,qt.x+.8)),y=Math.max(y,Bi),C.x=et.clamp(C.x+d*M*p,y,x),C.z=et.clamp(C.z+f*M*p,Ua(C.x),2.1),g&&!C.attack&&!C.pickup&&(C.heading=La(C.heading,ir(d,f),n),d&&(C.facing=Math.sign(d)));const S=Math.hypot(C.x-_,C.z-m);C.moving=S>1e-5,!C.attack&&!h&&ba(C,S);let v=0;if(C.attack){const b=C.attackSpec??xn[C.attack];if(C.attackTime+=n,v=C.attackTime/b.duration,v>=b.hitAt&&(C.attack==="spray"?v<=b.activeUntil:!C.hit)){C.hit=!0;let U=0;for(const O of It)if(O.health>0&&!(C.attack==="spray"&&C.sprayHits.has(O))&&bM(C,O,C.attack)){C.attack==="spray"&&C.sprayHits.add(O),Zt=lo(Zt,12),O.health-=b.damage+(C.combo===3?12:0);const z=C.combo===3;O.knockback=C.facing*(z?5:C.attack==="kick"?4:1.4),O.flash=.22,Fa(O.x,O.z,z?.26:C.attack==="kick"?.24:C.attack==="spray"?.1:.18),(O.type!=="bruiser"||C.attack!=="jab")&&(O.windup=0,O.strike=0,O.cooldown=.4,O.stun=C.attack==="jab"?.22:C.attack==="spray"?.7:.4,z&&(O.down=1.25,O.stun=0)),U++,O.health<=0&&(Oh(O),Zt=lo(Zt,18),Xt("Противник побеждён"))}U&&(b.weapon&&on.wear()&&Xt("Оружие сломалось — продолжай кулаками"),Tn(110),C.combo===3&&Xt("Комбо! Третий удар сильнее"),zn())}if(v>=1&&(C.cooldowns[C.attack]=Math.max(0,C.cooldowns[C.attack]-1e-6),C.attack=null,C.queuedAttack)){const U=C.queuedAttack;C.queuedAttack=null,U.until>=mt&&(or(U.kind),v=0)}}const w=C.moving&&(!h||g>0);C.root.position.set(C.x,0,C.z),C.root.rotation.y=C.heading+Ul(mt,w,C.attack,v,C.combo).spin,C.weaponType=on.equipped?.type??(C.attack?C.attackSpec?.weapon:null),C.animationTime=mt,ii(C,mt,w,C.pickup?.kind??C.attack,C.pickup?tr(C):v);for(const b of It){if(b.health<=0){b.corpseAge+=n,b.root.rotation.z=et.damp(b.root.rotation.z,-(b.fallSide??1)*Math.PI/2,5,n),b.root.position.y=et.damp(b.root.position.y,.2,5,n),b.bar.visible=!1,b.badge.visible=!1,b.warning.visible=!1,ii(b,mt,!1,null,0);continue}if(b.entering){const W=C.x-b.x,J=C.z-b.z,V=Math.hypot(W,J),re=Math.max(3.8,b.spec.speed*1.65);V>.1&&(b.x+=W/V*n*re,b.z+=J/V*n*re,ba(b,re*n)),b.root.position.set(b.x,0,b.z),b.root.rotation.y=La(b.root.rotation.y,ir(W,J),n),ii(b,mt,!0,null,0),V<3.4&&b.x>lt.bounds[0]+.4&&b.x<lt.bounds[1]-.4&&(b.entering=!1);continue}const[U,O]=lt.bounds;if(b.x=et.clamp(b.x+b.knockback*n,U+.3,O-.3),b.knockback*=Math.exp(-8*n),b.down=Math.max(0,b.down-n),b.stun=Math.max(0,b.stun-n),b.down>0){b.windup=0,b.strike=0,b.warning.visible=!1,b.bar.visible=!1,b.badge.visible=!1,b.root.position.set(b.x,.06,b.z),b.root.rotation.z=et.damp(b.root.rotation.z,b.down>.4?-1.48:0,12,n),ii(b,mt,!1,null,0);continue}b.root.rotation.z=et.damp(b.root.rotation.z,0,14,n),b.root.position.y=0,b.bar.visible=!0,b.badge.visible=!0;const z=Math.hypot(C.x-b.x,C.z-b.z);b.cooldown-=n,b.flash=Math.max(0,b.flash-n);let X=!1;if(b.stun>0)b.windup=0,b.strike=0;else if(b.strike>0){const W=b.strike;b.strike=Math.max(0,b.strike-n),b.type==="runner"&&(b.x=et.clamp(b.x+b.aimX*3*n,U+.3,O-.3),b.z=et.clamp(b.z+b.aimZ*3*n,Ua(b.x),2)),W>.225&&b.strike<=.225&&AM(b,C)&&(Ne.health=Math.max(0,Ne.health-b.spec.damage),C.invulnerable=.55,C.hurt=.22,C.stun=.18,C.attack=null,C.pickup=null,C.queuedAttack=null,C.combo=0,C.regenDelay=1,Fa(C.x,C.z,b.type==="bruiser"?.3:.22),Xt(`${b.spec.label}: −${b.spec.damage} здоровья`),Tn(90),zn(),Ne.health||XM())}else if(b.windup>0)b.windup=Math.max(0,b.windup-n),b.windup<=0&&(b.strike=.3,b.cooldown=b.spec.recovery);else if(z<8&&z>b.spec.range*.7){const W=It.indexOf(b)%2?1:-1,J=et.clamp(C.z+W*.55,Ua(b.x)+.1,1.9),V=C.x-b.x,re=J-b.z,le=Math.hypot(V,re);le>.05&&(b.x+=V/le*n*b.spec.speed,b.z+=re/le*n*b.spec.speed,ba(b,b.spec.speed*n)),X=!0}else z<=b.spec.range&&b.cooldown<=0&&(b.windup=b.spec.windup,b.aimX=(C.x-b.x)/Math.max(z,.01),b.aimZ=(C.z-b.z)/Math.max(z,.01));b.warning.visible=b.windup>0||b.strike>0,b.warning.position.set(b.x,.015,b.z),b.warning.material.opacity=b.windup>0?.3+.4*(1-b.windup/b.spec.windup):.7,b.root.position.set(b.x,0,b.z),b.root.rotation.y=La(b.root.rotation.y,ir(C.x-b.x,C.z-b.z),n),b.bar.scale.x=Math.max(0,b.health/b.spec.health),b.bar.quaternion.copy(Pn.quaternion),b.bar.quaternion.premultiply(b.root.quaternion.clone().invert()),b.bar.material.color.set(b.windup>0?"#ffdd66":b.spec.color),ii(b,mt,X,b.windup>0||b.strike>0?"jab":null,b.strike>0?.25+.75*(1-b.strike/.3):b.windup>0?.25*(1-b.windup/b.spec.windup):0)}for(let b=It.length-1;b>=0;b--)if(It[b].health<=0&&It[b].corpseAge>3){const U=It[b];St.remove(U.root,U.warning,U.shadow);for(const z of[U.warning,U.bar,U.badge])z.geometry.dispose(),z.material.dispose();const O=new Set;U.root.traverse(z=>{z.isSkinnedMesh&&O.add(z.skeleton)});for(const z of O)z.dispose();It.splice(b,1)}on.update(C),wo.update(C.x,mt);const I=Vd.update(C,Ne.health,n>0);I&&(Ne.health+=I,Xt(`Аптечка · +${I} здоровья`),Tn(740),zn()),Dn.update(C.x),Eo(),gs.update(mt);const E=as.map(b=>({encounter:b.arena.id,health:1})),T=qt?null:lt.update(n,C.x,[...It,...E]);if(T?.type==="spawn")for(const b of T.enemies)as.push({foe:b,arena:T.arena,wait:b.delay});T?.type==="warning"&&Xt(`${T.arena.title} · противники приближаются!`),T?.type==="clear"&&(qt=Dv(T.arena.index,Wn),gs.set(qt),Bi=Math.max(Bi,C.x-.25),bt.earn(15),Ne.score+=100*T.arena.number,Ne.health=Math.min(100,Ne.health+8),C.stamina=100,Xt(`Участок ${T.arena.number} пройден · +8 здоровья`),zn()),Q("danger").hidden=!lt.active,Q("danger").textContent=lt.active?`${lt.arena.title} · ${lt.phase==="incoming"?"Новая волна · "+Math.ceil(lt.delay):"Осталось: "+It.filter(b=>b.encounter===lt.arena.id&&b.health>0).length}`:"",Q("go").hidden=lt.goTime<=0||lt.active,Q("stamina").value=C.stamina,Q("stamina-value").textContent=Math.floor(C.stamina),Q("dodge").disabled=!!C.pickup||C.dodgeCooldown>0||C.stamina<Ol.dodge,Q("objective").textContent=`Бутылки: ${Ne.bottles} · Побеждено: ${Ne.defeated} · ${qt?qt.to==="entrance"?"Войди в подъезд →":"Найди выход во двор →":lt.active?"Победи группу":"Двигайся вправо →"}`;for(const b of document.querySelectorAll("[data-attack]")){const U=b.dataset.attack;b.disabled=!!C.pickup||!C.attack&&C.cooldowns[U]>0||C.dodge>0||C.stun>0||C.stamina<Ol[U]}}if(gt){const u=gt,h=u.target;u.elapsed+=ut?0:t*(u.elapsed>=1.3&&u.elapsed<1.5?.3:1);const d=PM(u.elapsed);if(C.x=et.lerp(u.startX,u.endX,d.approach),C.z=et.lerp(u.startZ,h.z,d.approach),C.root.position.set(C.x,0,C.z),C.root.rotation.y=C.heading,ii(C,mt,!1,"finisher",Math.min(1,u.elapsed/2.8)),h.root.rotation.y=-u.side*Math.PI/2,h.root.position.set(h.x+u.side*d.fall*.55,Math.sin(d.fall*Math.PI)*.65,h.z),h.root.rotation.z=-u.side*d.fall*1.5,h.flash=d.contact?.18*(1-d.fall):0,ii(h,mt,!1,null,0),d.contact&&!u.hit&&(u.hit=!0,h.fallSide=u.side,h.health=0,Q("cinema").querySelector("span").textContent="НОКАУТ",h.corpseAge=0,Oh(h),Fa(h.x,h.z,.3),Tn(75),zn()),yn.cinematic(C,h,u.elapsed,ut?0:t,innerWidth,innerHeight),d.done){h.x=h.root.position.x,h.down=0,h.knockback=0,C.invulnerable=.6,C.attack=null,C.heading=u.side*Math.PI/2,gt=null;for(const f of It)f.root.visible=!0;document.body.classList.remove("finishing"),Q("cinema").hidden=!0,Xt("Решающий удар!")}}Q("super-meter").value=Zt,Q("super-value").textContent=`${Math.floor(Zt)}%`;const s=on.equipped,r=s?fs[s.type]:null;Q("weapon-name").textContent=r?.label??"Кулаки",Q("weapon-uses").textContent=s?`${s.uses} / ${r.uses} ударов`:"Без оружия",Q("weapon-durability").max=r?.uses??1,Q("weapon-durability").value=s?.uses??0;const o=qt&&gs.near(C),a=Ic();if(Q("weapon-pickup").hidden=!!C.pickup||!a&&!o||Ne.over||!!gt||ut||!!jt,Q("weapon-pickup").textContent=o?qt.to==="entrance"?"E · Войти в подъезд":"E · Выйти во двор":a?.kind==="bottle"?"E · Поднять бутылку":a?`E · Взять: ${fs[a.item.type].label}`:"",document.querySelector('[data-attack="jab"] b').textContent=r?.label??"Удар",Ct&&on.pose(C,C.pickup?.kind==="bottle_pickup"||C.pickup?.kind==="weapon_pickup"&&tr(C)<.55||hn?.visible||!!gt||Ne.over||!!C.attack&&C.attack!=="jab"),Q("super").disabled=!!C.pickup||Zt<100||!!gt||!!C.attack||C.stun>0||C.dodge>0||Ne.over,Q("super").classList.toggle("ready",Zt>=100),mt>Yd&&(Q("toast").textContent=""),uo.update(C,Ct&&!Ne.over&&!gt&&C.attack==="spray",mt),Gd.update(C,Ct&&!Ne.over&&!gt&&!hn?.visible),Hd.update(C,Ct&&!Ne.over&&!gt&&C.attack==="burp"),Q("shop-open").disabled=!Ct||!!gt,rr?.update(),Ct){kl.update(C);for(const u of It)kl.update(u)}const l=Ct?C.x:-8;if(gt||yn.update({player:Ct?C:{x:-8,z:0,facing:1},enemies:It,arena:lt.arena,time:mt,dt:ut?0:t,width:innerWidth,height:innerHeight}),Ls.follow(l),HM.update(Ln,l),hn?.visible){En.renderCustom(()=>hn.render(t,()=>{wo.update(C.x,mt+hn.time),Da.copy(Pn),Da.position.x+=Math.sin(hn.time*.15)*.12,Mt.render(St,Da)}));return}const c=gt?.target;Fh.set(c?(C.x+c.root.position.x)/2:C.x,1,c?(C.z+c.root.position.z)/2:C.z),En.render(St,Pn,Fh,ut?0:t)}function Lc(){const i=innerWidth,e=innerHeight;Mt.setSize(i,e),En.resize(i,e),Pn.aspect=i/e,Pn.fov=i<650?53:40,Pn.updateProjectionMatrix()}window.addEventListener("resize",Lc);Lc();ms.onChange=()=>En.resize(innerWidth,innerHeight);Pn.position.set(-6.55,1.8,6.2);sf();window.gameDebug=()=>({ready:Ct,frames:qd,...Ne,paused:ut,location:Ln,startingLocation:Wn,courtyard:Rc(C.x),pendingExit:qt?{...qt,near:gs.near(C)}:null,locationTransition:jt?{to:jt.to,elapsed:jt.elapsed}:null,menu:hn?.visible??!1,character:sr.character,palette:sr.palette,nearbyPickup:Ic()?.kind??null,weapons:on.debug(),medkits:Vd.debug(),graphics:{mode:zi.mode,pixelRatio:Mt.getPixelRatio(),width:Mt.domElement.width,height:Mt.domElement.height,samples:En.enabled||ms.active?En.target.samples:0,triangles:Mt.info.render.triangles,drawCalls:Mt.info.render.calls,frameMs:zd.averageMs,adaptive:!0,pendingPixelRatio:Ks,shadows:{enabled:Mt.shadowMap.enabled,filter:Mt.shadowMap.type===Vl?"soft":"pcf",everyFrame:Mt.shadowMap.autoUpdate,size:Mn.shadow.mapSize.x}},compositing:{active:ms.active,targetWidth:En.target.width,targetHeight:En.target.height,settings:{...ms.value}},depthOfField:{enabled:En.enabled,focus:En.focus,maxBlur:En.maxBlur},lighting:{...Ls.value},environment:Dn.template?"authored":"procedural",windowDetails:{street:cs?.getObjectByName("Detailed_aged_windows")?.userData.windowCount??0,courtyard:co[0]?.userData.windowCount??0,entrance:vr.userData.windowCount??0},cameraShake:{enabled:yn.isShakeEnabled(),strength:yn.shake},shopOpen:Ti,economy:{coins:bt.profile.coins,owned:[...bt.profile.owned],equipped:bt.profile.equipped,run:{...bt.run},persistent:bt.persistent,rewardMode:Fd.mode},sprayVisible:uo.root.visible,sprayGrowth:uo.growth,sprayOrigin:uo.root.position.toArray(),burpVisible:Hd.root.visible,drinkingBottleVisible:Gd.root.visible,superPower:Zt,returnWall:Bi,cinematic:gt?{elapsed:gt.elapsed,hit:gt.hit,target:gt.target.type}:null,best:{...yr},worldChunks:Dn.chunks.size,authoredActions:Object.keys(C.userActions?.clips??{}),pendingSpawns:as.length,spawnAudit:ho.map(i=>({...i})),player:{pickup:C.pickup?{kind:C.pickup.kind,progress:tr(C)}:null,x:C.x,z:C.z,moving:!!C.moving,motion:C.motionId,attack:C.attack,attackTime:C.attackTime,attackClip:C.attackSpec?.clip,attackSerial:C.attackSerial,stamina:C.stamina,dodge:C.dodge,dodgeDuration:C.dodgeDuration,dodgeClip:C.dodge>0&&C.userActions?.clips.dodge?"dodge":null,dodgeCooldown:C.dodgeCooldown,facing:C.facing,heading:C.heading,walkDistance:C.walkDistance,walkStride:C.walkStride,feetY:C.feetY,groundOffset:C.groundOffset,combo:C.combo,stun:C.stun,invulnerable:C.invulnerable,cooldowns:{...C.cooldowns}},enemies:It.map(i=>({x:i.x,z:i.z,health:i.health,type:i.type,feetY:i.feetY,windup:i.windup,down:i.down,entering:i.entering,encounter:i.encounter})),encounter:{active:lt.active,phase:lt.phase,wave:lt.wave,index:lt.index,bounds:lt.bounds}});function rf(){const i=window.Telegram?.WebApp;i&&(i.ready(),i.expand(),i.isVersionAtLeast?.("7.7")&&i.disableVerticalSwipes?.())}window.addEventListener("telegram-ready",()=>{Ct&&rf()});
