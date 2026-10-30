(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const nc="180",Vf=0,tu=1,Gf=2,rd=1,ic=2,si=3,ui=0,sn=1,Lt=2,wi=0,gs=1,Po=2,nu=3,iu=4,Wf=5,zi=100,Xf=101,qf=102,jf=103,Yf=104,Kf=200,$f=201,Jf=202,Zf=203,Ka=204,$a=205,Qf=206,ep=207,tp=208,np=209,ip=210,sp=211,rp=212,op=213,ap=214,Ja=0,Za=1,Qa=2,ws=3,el=4,tl=5,nl=6,il=7,od=0,lp=1,cp=2,Ei=0,up=1,hp=2,dp=3,ad=4,fp=5,pp=6,mp=7,su="attached",gp="detached",ld=300,Es=301,Ts=302,sl=303,rl=304,zo=306,gn=1e3,Mi=1001,Io=1002,rn=1003,cd=1004,nr=1005,pn=1006,xo=1007,ai=1008,Bn=1009,ud=1010,hd=1011,vr=1012,sc=1013,Ti=1014,Nn=1015,Us=1016,rc=1017,oc=1018,yr=1020,dd=35902,fd=35899,pd=1021,md=1022,wn=1023,Mr=1026,br=1027,ac=1028,lc=1029,gd=1030,cc=1031,uc=1033,vo=33776,yo=33777,Mo=33778,bo=33779,ol=35840,al=35841,ll=35842,cl=35843,ul=36196,hl=37492,dl=37496,fl=37808,pl=37809,ml=37810,gl=37811,_l=37812,xl=37813,vl=37814,yl=37815,Ml=37816,bl=37817,Sl=37818,wl=37819,El=37820,Tl=37821,Al=36492,Rl=36494,Cl=36495,Pl=36283,Il=36284,Ll=36285,Dl=36286,Sr=2300,wr=2301,Yo=2302,ru=2400,ou=2401,au=2402,_p=2500,xp=0,_d=1,Ul=2,vp=3200,yp=3201,xd=0,Mp=1,oi="",tt="srgb",on="srgb-linear",Lo="linear",ft="srgb",Yi=7680,lu=519,bp=512,Sp=513,wp=514,vd=515,Ep=516,Tp=517,Ap=518,Rp=519,Nl=35044,Er=35048,cu="300 es",Xn=2e3,Do=2001;class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uu=1234567;const ar=Math.PI/180,As=180/Math.PI;function On(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function hc(i,e){return(i%e+e)%e}function Cp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Pp(i,e,t){return i!==e?(t-i)/(e-i):0}function lr(i,e,t){return(1-t)*i+t*e}function Ip(i,e,t,n){return lr(i,e,1-Math.exp(-t*n))}function Lp(i,e=1){return e-Math.abs(hc(i,e*2)-e)}function Dp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Up(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Np(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fp(i,e){return i+Math.random()*(e-i)}function Op(i){return i*(.5-Math.random())}function kp(i){i!==void 0&&(uu=i);let e=uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bp(i){return i*ar}function zp(i){return i*As}function Hp(i){return(i&i-1)===0&&i!==0}function Vp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const it={DEG2RAD:ar,RAD2DEG:As,generateUUID:On,clamp:Ye,euclideanModulo:hc,mapLinear:Cp,inverseLerp:Pp,lerp:lr,damp:Ip,pingpong:Lp,smoothstep:Dp,smootherstep:Up,randInt:Np,randFloat:Fp,randFloatSpread:Op,seededRandom:kp,degToRad:Bp,radToDeg:zp,isPowerOfTwo:Hp,ceilPowerOfTwo:Vp,floorPowerOfTwo:Gp,setQuaternionFromProperEuler:Wp,normalize:ct,denormalize:Dn};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const b=Math.sqrt(y),M=Math.atan2(b,p*x);m=Math.sin(m*M)/b,a=Math.sin(a*M)/b}const v=a*x;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ko.copy(this).projectOnVector(e),this.sub(Ko)}reflect(e){return this.sub(Ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new w,hu=new Ke;class Ge{constructor(e,t,n,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],y=s[4],v=s[7],b=s[2],M=s[5],T=s[8];return r[0]=o*_+a*x+l*b,r[3]=o*m+a*y+l*M,r[6]=o*p+a*v+l*T,r[1]=c*_+u*x+h*b,r[4]=c*m+u*y+h*M,r[7]=c*p+u*v+h*T,r[2]=d*_+f*x+g*b,r[5]=d*m+f*y+g*M,r[8]=d*p+f*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($o.makeScale(e,t)),this}rotate(e){return this.premultiply($o.makeRotation(-e)),this}translate(e,t){return this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new Ge;function yd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xp(){const i=Tr("canvas");return i.style.display="block",i}const du={};function Ar(i){i in du||(du[i]=!0,console.warn(i))}function qp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const fu=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jp(){const i={enabled:!0,workingColorSpace:on,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Lo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ar("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ar("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[on]:{primaries:e,whitePoint:n,transfer:Lo,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tt},outputColorSpaceConfig:{drawingBufferColorSpace:tt}},[tt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tt}}}),i}const et=jp();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ki;class Yp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=Tr("canvas")),Ki.width=e.width,Ki.height=e.height;const s=Ki.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kp=0;class dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jo(s[o].image)):r.push(Jo(s[o]))}else r=Jo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $p=0;const Zo=new w;class Ot extends Ns{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Mi,s=Mi,r=pn,o=ai,a=wn,l=Bn,c=Ot.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=On(),this.name="",this.source=new dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zo).x}get height(){return this.source.getSize(Zo).y}get depth(){return this.source.getSize(Zo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gn:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gn:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=ld;Ot.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,s=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,b=(p+1)/2,M=(u+d)/4,T=(h+_)/4,L=(g+m)/4;return y>v&&y>b?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=M/n,r=T/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=L/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=T/r,s=L/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jp extends Ns{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ot(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new dc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Jp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Md extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zp extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),zr.subVectors(this.max,Gs),$i.subVectors(e.a,Gs),Ji.subVectors(e.b,Gs),Zi.subVectors(e.c,Gs),fi.subVectors(Ji,$i),pi.subVectors(Zi,Ji),Li.subVectors($i,Zi);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Li.z,Li.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Li.z,0,-Li.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Li.y,Li.x,0];return!Qo(t,$i,Ji,Zi,zr)||(t=[1,0,0,0,1,0,0,0,1],!Qo(t,$i,Ji,Zi,zr))?!1:(Hr.crossVectors(fi,pi),t=[Hr.x,Hr.y,Hr.z],Qo(t,$i,Ji,Zi,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new w,new w,new w,new w,new w,new w,new w,new w],Rn=new w,Br=new _n,$i=new w,Ji=new w,Zi=new w,fi=new w,pi=new w,Li=new w,Gs=new w,zr=new w,Hr=new w,Di=new w;function Qo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Di.fromArray(i,r);const a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),u=n.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Qp=new _n,Ws=new w,ea=new w;class Yn{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(ea)),this.expandByPoint(Ws.copy(e.center).sub(ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zn=new w,ta=new w,Vr=new w,mi=new w,na=new w,Gr=new w,ia=new w;class Ir{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ta.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(ta);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Vr),a=mi.dot(this.direction),l=-mi.dot(Vr),c=mi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ta).addScaledVector(Vr,d),f}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,s,r){na.subVectors(t,e),Gr.subVectors(n,e),ia.crossVectors(na,Gr);let o=this.direction.dot(ia),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(Gr.crossVectors(mi,Gr));if(l<0)return null;const c=a*this.direction.dot(na.cross(mi));if(c<0||l+c>o)return null;const u=-a*mi.dot(ia);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(em,e,tm)}lookAt(e,t,n){const s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),gi.crossVectors(n,hn),gi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),gi.crossVectors(n,hn)),gi.normalize(),Wr.crossVectors(hn,gi),s[0]=gi.x,s[4]=Wr.x,s[8]=hn.x,s[1]=gi.y,s[5]=Wr.y,s[9]=hn.y,s[2]=gi.z,s[6]=Wr.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],b=n[15],M=s[0],T=s[4],L=s[8],E=s[12],C=s[1],A=s[5],D=s[9],S=s[13],O=s[2],k=s[6],F=s[10],j=s[14],G=s[3],te=s[7],oe=s[11],ue=s[15];return r[0]=o*M+a*C+l*O+c*G,r[4]=o*T+a*A+l*k+c*te,r[8]=o*L+a*D+l*F+c*oe,r[12]=o*E+a*S+l*j+c*ue,r[1]=u*M+h*C+d*O+f*G,r[5]=u*T+h*A+d*k+f*te,r[9]=u*L+h*D+d*F+f*oe,r[13]=u*E+h*S+d*j+f*ue,r[2]=g*M+_*C+m*O+p*G,r[6]=g*T+_*A+m*k+p*te,r[10]=g*L+_*D+m*F+p*oe,r[14]=g*E+_*S+m*j+p*ue,r[3]=x*M+y*C+v*O+b*G,r[7]=x*T+y*A+v*k+b*te,r[11]=x*L+y*D+v*F+b*oe,r[15]=x*E+y*S+v*j+b*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,y=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,v=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,b=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,M=t*x+n*y+s*v+r*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=x*T,e[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*T,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*T,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*T,e[4]=y*T,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*T,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*T,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*T,e[8]=v*T,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*T,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*T,e[12]=b*T,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*T,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,x=l*c,y=l*u,v=l*h,b=n.x,M=n.y,T=n.z;return s[0]=(1-(_+p))*b,s[1]=(f+v)*b,s[2]=(g-y)*b,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(d+p))*M,s[6]=(m+x)*M,s[7]=0,s[8]=(g+y)*T,s[9]=(m-x)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);const c=1/r,u=1/o,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,t.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Xn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Xn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Do)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Xn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Xn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Do)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new w,Cn=new ee,em=new w(0,0,0),tm=new w(1,1,1),gi=new w,Wr=new w,hn=new w,mu=new ee,gu=new Ke;class an{constructor(e=0,t=0,n=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nm=0;const _u=new w,es=new Ke,Qn=new ee,Xr=new w,Xs=new w,im=new w,sm=new Ke,xu=new w(1,0,0),vu=new w(0,1,0),yu=new w(0,0,1),Mu={type:"added"},rm={type:"removed"},ts={type:"childadded",child:null},sa={type:"childremoved",child:null};class St extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new w,t=new an,n=new Ke,s=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Ge}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(vu,e)}rotateZ(e){return this.rotateOnAxis(yu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(vu,e)}translateZ(e){return this.translateOnAxis(yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xr.copy(e):Xr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Xs,Xr,this.up):Qn.lookAt(Xr,Xs,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Qn),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mu),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rm),sa.child=e,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mu),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}St.DEFAULT_UP=new w(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new w,ei=new w,ra=new w,ti=new w,ns=new w,is=new w,bu=new w,oa=new w,aa=new w,la=new w,ca=new Ze,ua=new Ze,ha=new Ze;class Un{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),ei.subVectors(n,t),ra.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(ei),l=Pn.dot(ra),c=ei.dot(ei),u=ei.dot(ra),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ca.setScalar(0),ua.setScalar(0),ha.setScalar(0),ca.fromBufferAttribute(e,t),ua.fromBufferAttribute(e,n),ha.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ca,r.x),o.addScaledVector(ua,r.y),o.addScaledVector(ha,r.z),o}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),ei.subVectors(e,t),Pn.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ns.subVectors(s,n),is.subVectors(r,n),oa.subVectors(e,n);const l=ns.dot(oa),c=is.dot(oa);if(l<=0&&c<=0)return t.copy(n);aa.subVectors(e,s);const u=ns.dot(aa),h=is.dot(aa);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ns,o);la.subVectors(e,r);const f=ns.dot(la),g=is.dot(la);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(is,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return bu.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(bu,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},qr={h:0,s:0,l:0};function da(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=hc(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=da(o,r,e+1/3),this.g=da(o,r,e),this.b=da(o,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){const n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return et.workingToColorSpace(jt.copy(this),e),Math.round(Ye(jt.r*255,0,255))*65536+Math.round(Ye(jt.g*255,0,255))*256+Math.round(Ye(jt.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(jt.copy(this),t);const n=jt.r,s=jt.g,r=jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=tt){et.workingToColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,s=jt.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(qr);const n=lr(_i.h,qr.h,t),s=lr(_i.s,qr.s,t),r=lr(_i.l,qr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new De;De.NAMES=bd;let om=0;class qn extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=On(),this.name="",this.type="Material",this.blending=gs,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=$a,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ft extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new w,jr=new pe;let am=0;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:am++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}}class Sd extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wd extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ze extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lm=0;const yn=new ee,fa=new St,ss=new w,dn=new _n,qs=new _n,Ht=new w;class yt extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yd(e)?wd:Sd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ze(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(dn.min,qs.min),dn.expandByPoint(Ht),Ht.addVectors(dn.max,qs.max),dn.expandByPoint(Ht)):(dn.expandByPoint(qs.min),dn.expandByPoint(qs.max))}dn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(e,c),Ht.add(ss)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new w,l[L]=new w;const c=new w,u=new w,h=new w,d=new pe,f=new pe,g=new pe,_=new w,m=new w;function p(L,E,C){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,C),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,C),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(A),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(A),a[L].add(_),a[E].add(_),a[C].add(_),l[L].add(m),l[E].add(m),l[C].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,E=x.length;L<E;++L){const C=x[L],A=C.start,D=C.count;for(let S=A,O=A+D;S<O;S+=3)p(e.getX(S+0),e.getX(S+1),e.getX(S+2))}const y=new w,v=new w,b=new w,M=new w;function T(L){b.fromBufferAttribute(s,L),M.copy(b);const E=a[L];y.copy(E),y.sub(b.multiplyScalar(b.dot(E))).normalize(),v.crossVectors(M,E);const A=v.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,A)}for(let L=0,E=x.length;L<E;++L){const C=x[L],A=C.start,D=C.count;for(let S=A,O=A+D;S<O;S+=3)T(e.getX(S+0)),T(e.getX(S+1)),T(e.getX(S+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new w,r=new w,o=new w,a=new w,l=new w,c=new w,u=new w,h=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Vt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Su=new ee,Ui=new Ir,Yr=new Yn,wu=new w,Kr=new w,$r=new w,Jr=new w,pa=new w,Zr=new w,Eu=new w,Qr=new w;class be extends St{constructor(e=new yt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(pa.fromBufferAttribute(h,e),o?Zr.addScaledVector(pa,u):Zr.addScaledVector(pa.sub(t),u))}t.add(Zr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(Yr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Yr,wu)===null||Ui.origin.distanceToSquared(wu)>(e.far-e.near)**2))&&(Su.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(Su),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,b=y;v<b;v+=3){const M=a.getX(v),T=a.getX(v+1),L=a.getX(v+2);s=eo(this,p,e,n,c,u,h,M,T,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=eo(this,o,e,n,c,u,h,x,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,b=y;v<b;v+=3){const M=v,T=v+1,L=v+2;s=eo(this,p,e,n,c,u,h,M,T,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,v=m+2;s=eo(this,o,e,n,c,u,h,x,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function cm(i,e,t,n,s,r,o,a){let l;if(e.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ui,a),l===null)return null;Qr.copy(a),Qr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Qr);return c<t.near||c>t.far?null:{distance:c,point:Qr.clone(),object:i}}function eo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Kr),i.getVertexPosition(l,$r),i.getVertexPosition(c,Jr);const u=cm(i,e,t,n,Kr,$r,Jr,Eu);if(u){const h=new w;Un.getBarycoord(Eu,Kr,$r,Jr,h),s&&(u.uv=Un.getInterpolatedAttribute(s,a,l,c,h,new pe)),r&&(u.uv1=Un.getInterpolatedAttribute(r,a,l,c,h,new pe)),o&&(u.normal=Un.getInterpolatedAttribute(o,a,l,c,h,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new w,materialIndex:0};Un.getNormal(Kr,$r,Jr,d.normal),u.face=d,u.barycoord=h}return u}class Xt extends yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(h,2));function g(_,m,p,x,y,v,b,M,T,L,E){const C=v/T,A=b/L,D=v/2,S=b/2,O=M/2,k=T+1,F=L+1;let j=0,G=0;const te=new w;for(let oe=0;oe<F;oe++){const ue=oe*A-S;for(let Pe=0;Pe<k;Pe++){const Se=Pe*C-D;te[_]=Se*x,te[m]=ue*y,te[p]=O,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=M>0?1:-1,u.push(te.x,te.y,te.z),h.push(Pe/T),h.push(1-oe/L),j+=1}}for(let oe=0;oe<L;oe++)for(let ue=0;ue<T;ue++){const Pe=d+ue+k*oe,Se=d+ue+k*(oe+1),Qe=d+(ue+1)+k*(oe+1),He=d+(ue+1)+k*oe;l.push(Pe,Se,He),l.push(Se,Qe,He),G+=6}a.addGroup(f,G,E),f+=G,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=Rs(i[t]);for(const s in n)e[s]=n[s]}return e}function um(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ed(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const hm={clone:Rs,merge:en};var dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dm,this.fragmentShader=fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=um(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Td extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new w,Tu=new pe,Au=new pe;class $t extends Td{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Tu,Au),t.subVectors(Au,Tu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,os=1;class pm extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $t(rs,os,e,t);s.layers=this.layers,this.add(s);const r=new $t(rs,os,e,t);r.layers=this.layers,this.add(r);const o=new $t(rs,os,e,t);o.layers=this.layers,this.add(o);const a=new $t(rs,os,e,t);a.layers=this.layers,this.add(a);const l=new $t(rs,os,e,t);l.layers=this.layers,this.add(l);const c=new $t(rs,os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ad extends Ot{constructor(e=[],t=Es,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mm extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ad(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xt(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:wi});r.uniforms.tEquirect.value=t;const o=new be(s,r),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=pn),new pm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class gt extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gm={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new pc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mc extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _m{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nl,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new w;class gc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ru=new w,Cu=new Ze,Pu=new Ze,xm=new w,Iu=new ee,to=new w,ga=new Yn,Lu=new ee,_a=new Ir;class vm extends be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=su,this.bindMatrix=new ee,this.bindMatrixInverse=new ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,to),this.boundingBox.expandByPoint(to)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,to),this.boundingSphere.expandByPoint(to)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ga.copy(this.boundingSphere),ga.applyMatrix4(s),e.ray.intersectsSphere(ga)!==!1&&(Lu.copy(s).invert(),_a.copy(e.ray).applyMatrix4(Lu),!(this.boundingBox!==null&&_a.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_a)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===su?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Cu.fromBufferAttribute(s.attributes.skinIndex,e),Pu.fromBufferAttribute(s.attributes.skinWeight,e),Ru.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Pu.getComponent(r);if(o!==0){const a=Cu.getComponent(r);Iu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(xm.copy(Ru).applyMatrix4(Iu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rd extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cd extends Ot{constructor(e=null,t=1,n=1,s,r,o,a,l,c=rn,u=rn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Du=new ee,ym=new ee;class _c{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ee;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:ym;Du.multiplyMatrices(a,t[r]),Du.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new _c(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Cd(t,e,e,wn,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Rd),this.bones.push(o),this.boneInverses.push(new ee().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Cs extends Vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const as=new ee,Uu=new ee,no=[],Nu=new _n,Mm=new ee,js=new be,Ys=new Yn;class Lr extends be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),Nu.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(Nu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),Ys.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),e.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),Uu.multiplyMatrices(n,as),js.matrixWorld=Uu,js.raycast(e,no);for(let o=0,a=no.length;o<a;o++){const l=no[o];l.instanceId=r,l.object=this,t.push(l)}no.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cd(new Float32Array(s*this.count),s,this.count,ac,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xa=new w,bm=new w,Sm=new Ge;class yi{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=xa.subVectors(n,t).cross(bm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sm.getNormalMatrix(e),s=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Yn,wm=new pe(.5,.5),io=new w;class xc{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],x=r[12],y=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-o,f-u,p-g,b-x).normalize(),s[1].setComponents(c+o,f+u,p+g,b+x).normalize(),s[2].setComponents(c+a,f+h,p+_,b+y).normalize(),s[3].setComponents(c-a,f-h,p-_,b-y).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,b-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,b-v).normalize(),t===Xn)s[5].setComponents(c+l,f+d,p+m,b+v).normalize();else if(t===Do)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);const t=wm.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(io.x=s.normal.x>0?e.max.x:e.min.x,io.y=s.normal.y>0?e.max.y:e.min.y,io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pd extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uo=new w,No=new w,Fu=new ee,Ks=new Ir,so=new Yn,va=new w,Ou=new w;class vc extends St{constructor(e=new yt,t=new Pd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Uo.fromBufferAttribute(t,s-1),No.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Uo.distanceTo(No);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;Fu.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(Fu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),x=u.getX(_+1),y=ro(this,e,Ks,l,p,x,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=ro(this,e,Ks,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=ro(this,e,Ks,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ro(this,e,Ks,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ro(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Uo.fromBufferAttribute(a,s),No.fromBufferAttribute(a,r),t.distanceSqToSegment(Uo,No,va,Ou)>n)return;va.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(va);if(!(c<e.near||c>e.far))return{distance:c,point:Ou.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const ku=new w,Bu=new w;class Em extends vc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ku.fromBufferAttribute(t,s),Bu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ku.distanceTo(Bu);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tm extends vc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yc extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zu=new ee,Fl=new Ir,oo=new Yn,ao=new w;class Id extends St{constructor(e=new yt,t=new yc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;zu.copy(s).invert(),Fl.copy(e.ray).applyMatrix4(zu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);ao.fromBufferAttribute(h,m),Hu(ao,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)ao.fromBufferAttribute(h,g),Hu(ao,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hu(i,e,t,n,s,r,o){const a=Fl.distanceSqToPoint(i);if(a<t){const l=new w;Fl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Gt extends Ot{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mc extends Ot{constructor(e,t,n=Ti,s,r,o,a=rn,l=rn,c,u=Mr,h=1){if(u!==Mr&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ld extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rr extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new w,u=new pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(a,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Tn extends yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ze(h,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(f,2));function x(){const v=new w,b=new w;let M=0;const T=(t-e)/n;for(let L=0;L<=r;L++){const E=[],C=L/r,A=C*(t-e)+e;for(let D=0;D<=s;D++){const S=D/s,O=S*l+a,k=Math.sin(O),F=Math.cos(O);b.x=A*k,b.y=-C*n+m,b.z=A*F,h.push(b.x,b.y,b.z),v.set(k,T,F).normalize(),d.push(v.x,v.y,v.z),f.push(S,1-C),E.push(g++)}_.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){const C=_[E][L],A=_[E+1][L],D=_[E+1][L+1],S=_[E][L+1];(e>0||E!==0)&&(u.push(C,A,S),M+=3),(t>0||E!==r-1)&&(u.push(A,D,S),M+=3)}c.addGroup(p,M,0),p+=M}function y(v){const b=g,M=new pe,T=new w;let L=0;const E=v===!0?e:t,C=v===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;const A=g;for(let D=0;D<=s;D++){const O=D/s*l+a,k=Math.cos(O),F=Math.sin(O);T.x=E*F,T.y=m*C,T.z=E*k,h.push(T.x,T.y,T.z),d.push(0,C,0),M.x=k*.5+.5,M.y=F*.5*C+.5,f.push(M.x,M.y),g++}for(let D=0;D<s;D++){const S=b+D,O=A+D;v===!0?u.push(O,O+1,S):u.push(O+1,O,S),L+=3}c.addGroup(p,L,v===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bc extends Tn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new bc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sc extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(r.slice(),3)),this.setAttribute("uv",new ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new w,v=new w,b=new w;for(let M=0;M<t.length;M+=3)f(t[M+0],y),f(t[M+1],v),f(t[M+2],b),l(y,v,b,x)}function l(x,y,v,b){const M=b+1,T=[];for(let L=0;L<=M;L++){T[L]=[];const E=x.clone().lerp(v,L/M),C=y.clone().lerp(v,L/M),A=M-L;for(let D=0;D<=A;D++)D===0&&L===M?T[L][D]=E:T[L][D]=E.clone().lerp(C,D/A)}for(let L=0;L<M;L++)for(let E=0;E<2*(M-L)-1;E++){const C=Math.floor(E/2);E%2===0?(d(T[L][C+1]),d(T[L+1][C]),d(T[L][C])):(d(T[L][C+1]),d(T[L+1][C+1]),d(T[L+1][C]))}}function c(x){const y=new w;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){const x=new w;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=m(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;o.push(v,1-b)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],b=o[x+4],M=Math.max(y,v,b),T=Math.min(y,v,b);M>.9&&T<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){const v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const x=new w,y=new w,v=new w,b=new w,M=new pe,T=new pe,L=new pe;for(let E=0,C=0;E<r.length;E+=9,C+=6){x.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),M.set(o[C+0],o[C+1]),T.set(o[C+2],o[C+3]),L.set(o[C+4],o[C+5]),b.copy(x).add(y).add(v).divideScalar(3);const A=m(b);_(M,C+0,x,A),_(T,C+2,y,A),_(L,C+4,v,A)}}function _(x,y,v,b){b<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.vertices,e.indices,e.radius,e.details)}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new pe:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new w,s=[],r=[],o=[],a=new w,l=new ee;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ye(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ye(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dd extends di{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new pe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Am extends Dd{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const lo=new w,ya=new wc,Ma=new wc,ba=new wc;class Rm extends di{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new w){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(lo.subVectors(s[0],s[1]).add(s[0]),c=lo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(lo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=lo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ya.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),Ma.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),ba.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ma.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ba.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ya.calc(l),Ma.calc(l),ba.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vu(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Cm(i,e){const t=1-i;return t*t*e}function Pm(i,e){return 2*(1-i)*i*e}function Im(i,e){return i*i*e}function cr(i,e,t,n){return Cm(i,e)+Pm(i,t)+Im(i,n)}function Lm(i,e){const t=1-i;return t*t*t*e}function Dm(i,e){const t=1-i;return 3*t*t*i*e}function Um(i,e){return 3*(1-i)*i*i*e}function Nm(i,e){return i*i*i*e}function ur(i,e,t,n,s){return Lm(i,e)+Dm(i,t)+Um(i,n)+Nm(i,s)}class Fm extends di{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(e,s.x,r.x,o.x,a.x),ur(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Om extends di{constructor(e=new w,t=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new w){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(e,s.x,r.x,o.x,a.x),ur(e,s.y,r.y,o.y,a.y),ur(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class km extends di{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bm extends di{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zm extends di{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(cr(e,s.x,r.x,o.x),cr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ec extends di{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(cr(e,s.x,r.x,o.x),cr(e,s.y,r.y,o.y),cr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hm extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Vu(a,l.x,c.x,u.x,h.x),Vu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new pe().fromArray(s))}return this}}var Vm=Object.freeze({__proto__:null,ArcCurve:Am,CatmullRomCurve3:Rm,CubicBezierCurve:Fm,CubicBezierCurve3:Om,EllipseCurve:Dd,LineCurve:km,LineCurve3:Bm,QuadraticBezierCurve:zm,QuadraticBezierCurve3:Ec,SplineCurve:Hm});class Tc extends yt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ye(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new w,d=new pe,f=new w,g=new w,_=new w;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let x=0;x<=t;x++){const y=n+x*u*s,v=Math.sin(y),b=Math.cos(y);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*v,h.y=e[M].y,h.z=e[M].x*b,o.push(h.x,h.y,h.z),d.x=x/t,d.y=M/(e.length-1),a.push(d.x,d.y);const T=l[3*M+0]*v,L=l[3*M+1],E=l[3*M+0]*b;c.push(T,L,E)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){const v=y+x*e.length,b=v,M=v+e.length,T=v+e.length+1,L=v+1;r.push(b,M,L),r.push(T,L,M)}this.setIndex(r),this.setAttribute("position",new ze(o,3)),this.setAttribute("uv",new ze(a,2)),this.setAttribute("normal",new ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.points,e.segments,e.phiStart,e.phiLength)}}class Ac extends Sc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ac(e.radius,e.detail)}}class Jt extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*d-o;for(let y=0;y<c;y++){const v=y*h-r;g.push(v,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,v=x+c*(p+1),b=x+1+c*(p+1),M=x+1+c*p;f.push(y,v,M),f.push(v,b,M)}this.setIndex(f),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.width,e.height,e.widthSegments,e.heightSegments)}}class hi extends yt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,f=new w,g=new pe;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,y=x,v=x+n+1,b=x+n+2,M=x+1;a.push(y,v,M),a.push(v,b,M)}}this.setIndex(a),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Rc extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new w,d=new w,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const M=b/t;h.x=-e*Math.cos(s+M*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+M*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(M+v,1-y),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=u[p][x+1],v=u[p][x],b=u[p+1][x],M=u[p+1][x+1];(p!==0||o>0)&&f.push(y,v,M),(p!==n-1||l<Math.PI)&&f.push(v,b,M)}this.setIndex(f),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ri extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new w,h=new w,d=new w;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Cc extends yt{constructor(e=new Ec(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,l=new w,c=new pe;let u=new w;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ze(h,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(f,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),x(),p()}function m(y){u=e.getPointAt(y/t,u);const v=o.normals[y],b=o.binormals[y];for(let M=0;M<=s;M++){const T=M/s*Math.PI*2,L=Math.sin(T),E=-Math.cos(T);l.x=E*v.x+L*b.x,l.y=E*v.y+L*b.y,l.z=E*v.z+L*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){const b=(s+1)*(y-1)+(v-1),M=(s+1)*y+(v-1),T=(s+1)*y+v,L=(s+1)*(y-1)+v;g.push(b,M,L),g.push(M,T,L)}}function x(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)c.x=y/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Cc(new Vm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class pt extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kn extends pt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gm extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wm extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function co(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Xm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qm(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Gu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Ud(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Dr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class jm extends Dr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ou:r=e,a=2*t-n;break;case au:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ou:o=e,l=2*n-t;break;case au:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+x*o[c+b]+y*o[l+b]+v*o[h+b];return r}}class Ym extends Dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class Km extends Dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=co(t,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:co(e.times,Array),values:co(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Km(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ym(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sr:t=this.InterpolantFactoryMethodDiscrete;break;case wr:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return wr;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Xm(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=wr;class Fs extends Hn{constructor(e,t,n){super(e,t,n)}}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Sr;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Nd extends Hn{constructor(e,t,n,s){super(e,t,n,s)}}Nd.prototype.ValueTypeName="color";class Ps extends Hn{constructor(e,t,n,s){super(e,t,n,s)}}Ps.prototype.ValueTypeName="number";class $m extends Dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ke.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Is extends Hn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new $m(this.times,this.values,this.getValueSize(),e)}}Is.prototype.ValueTypeName="quaternion";Is.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Hn{constructor(e,t,n){super(e,t,n)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Sr;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends Hn{constructor(e,t,n,s){super(e,t,n,s)}}Ls.prototype.ValueTypeName="vector";class Jm{constructor(e="",t=-1,n=[],s=_p){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=On(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Qm(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Hn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=qm(l);l=Gu(l,1,u),c=Gu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ps(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];Ud(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new Ps(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Ls,f+".position",d,"pos",s),n(Is,f+".quaternion",d,"rot",s),n(Ls,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Zm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Ls;case"color":return Nd;case"quaternion":return Is;case"bool":case"boolean":return Fs;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Qm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Zm(i.type);if(i.times===void 0){const t=[],n=[];Ud(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const li={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class eg{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const tg=new eg;class ks{constructor(e){this.manager=e!==void 0?e:tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class ng extends Error{constructor(e,t){super(e),this.response=t}}class Fd extends ks{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=li.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:s});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ni[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let M=0,T=u.length;M<T;M++){const L=u[M];L.onProgress&&L.onProgress(b)}p.enqueue(v),x()}},y=>{p.error(y)})}}});return new Response(m)}else throw new ng(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{li.add(`file:${e}`,c);const u=ni[e];delete ni[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete ni[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ls=new WeakMap;class ig extends ks{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=li.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=ls.get(o);h===void 0&&(h=[],ls.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=Tr("img");function l(){u(),t&&t(this);const h=ls.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}ls.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),li.remove(`image:${e}`);const d=ls.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),li.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class sg extends ks{constructor(e){super(e)}load(e,t,n,s){const r=new Ot,o=new ig(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ho extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Od extends Ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Sa=new ee,Wu=new w,Xu=new w;class Pc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xc,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),Xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xu),t.updateMatrixWorld(),Sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rg extends Pc{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=As*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class og extends Ho{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const qu=new ee,$s=new w,wa=new w;class ag extends Pc{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$s.setFromMatrixPosition(e.matrixWorld),n.position.copy($s),wa.copy(n.position),wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wa),n.updateMatrixWorld(),s.makeTranslation(-$s.x,-$s.y,-$s.z),qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu,n.coordinateSystem,n.reversedDepth)}}class kd extends Ho{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ag}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vo extends Td{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lg extends Pc{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fo extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new lg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ea=new WeakMap;class cg extends ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=li.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Ea.has(o)===!0)s&&s(Ea.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return li.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ea.set(l,c),li.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});li.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ug extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ic="\\[\\]\\.:\\/",dg=new RegExp("["+Ic+"]","g"),Lc="[^"+Ic+"]",fg="[^"+Ic.replace("\\.","")+"]",pg=/((?:WC+[\/:])*)/.source.replace("WC",Lc),mg=/(WCOD+)?/.source.replace("WCOD",fg),gg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lc),_g=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lc),xg=new RegExp("^"+pg+mg+gg+_g+"$"),vg=["material","materials","bones","map"];class yg{constructor(e,t,n){const s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dg,"")}static parseTrackName(e){const t=xg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);vg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=yg;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ju=new ee;class Dc{constructor(e,t,n=0,s=1/0){this.ray=new Ir(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new fc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ju),this}intersectObject(e,t=!0,n=[]){return Ol(e,this,n,t),n.sort(Yu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ol(e[s],this,n,t);return n.sort(Yu),n}}function Yu(i,e){return i.distance-e.distance}function Ol(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ol(r[o],e,t,!0)}}function Ku(i,e,t,n){const s=Mg(n);switch(t){case pd:return i*e;case ac:return i*e/s.components*s.byteLength;case lc:return i*e/s.components*s.byteLength;case gd:return i*e*2/s.components*s.byteLength;case cc:return i*e*2/s.components*s.byteLength;case md:return i*e*3/s.components*s.byteLength;case wn:return i*e*4/s.components*s.byteLength;case uc:return i*e*4/s.components*s.byteLength;case vo:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mo:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case al:case cl:return Math.max(i,16)*Math.max(e,8)/4;case ol:case ll:return Math.max(i,8)*Math.max(e,8)/2;case ul:case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Al:case Rl:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Pl:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ll:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mg(i){switch(i){case Bn:case ud:return{byteLength:1,components:1};case vr:case hd:case Us:return{byteLength:2,components:1};case rc:case oc:return{byteLength:2,components:4};case Ti:case sc:case Nn:return{byteLength:4,components:1};case dd:case fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);function Bd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function bg(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wg=`#ifdef USE_ALPHAHASH
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
#endif`,Eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cg=`#ifdef USE_AOMAP
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
#endif`,Pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ig=`#ifdef USE_BATCHING
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
#endif`,Lg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ng=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fg=`#ifdef USE_IRIDESCENCE
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
#endif`,Og=`#ifdef USE_BUMPMAP
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qg=`#define PI 3.141592653589793
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
} // validated`,jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yg=`vec3 transformedNormal = objectNormal;
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
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",e0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u0=`#ifdef USE_GRADIENTMAP
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
}`,h0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p0=`uniform bool receiveShadow;
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
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y0=`PhysicalMaterial material;
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
#endif`,M0=`struct PhysicalMaterial {
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
}`,b0=`
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
#endif`,S0=`#if defined( RE_IndirectDiffuse )
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,L0=`#if defined( USE_POINTS_UV )
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
#endif`,D0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`#ifdef USE_MORPHTARGETS
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
#endif`,B0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X0=`#ifdef USE_NORMALMAP
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
#endif`,q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a_=`float getShadowMask() {
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
}`,l_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c_=`#ifdef USE_SKINNING
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
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,d_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g_=`#ifdef USE_TRANSMISSION
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
#endif`,__=`#ifdef USE_TRANSMISSION
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
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S_=`uniform sampler2D t2D;
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
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`#include <common>
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
}`,C_=`#if DEPTH_PACKING == 3200
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
}`,P_=`#define DISTANCE
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
}`,I_=`#define DISTANCE
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`uniform float scale;
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
}`,N_=`uniform vec3 diffuse;
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
}`,F_=`#include <common>
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
}`,O_=`uniform vec3 diffuse;
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
}`,k_=`#define LAMBERT
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
}`,B_=`#define LAMBERT
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
}`,z_=`#define MATCAP
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
}`,H_=`#define MATCAP
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
}`,V_=`#define NORMAL
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
}`,G_=`#define NORMAL
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
}`,W_=`#define PHONG
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
}`,X_=`#define PHONG
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
}`,q_=`#define STANDARD
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
}`,j_=`#define STANDARD
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
}`,Y_=`#define TOON
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
}`,K_=`#define TOON
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
}`,$_=`uniform float size;
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
}`,J_=`uniform vec3 diffuse;
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
}`,Z_=`#include <common>
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
}`,Q_=`uniform vec3 color;
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
}`,ex=`uniform float rotation;
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
}`,tx=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Sg,alphahash_pars_fragment:wg,alphamap_fragment:Eg,alphamap_pars_fragment:Tg,alphatest_fragment:Ag,alphatest_pars_fragment:Rg,aomap_fragment:Cg,aomap_pars_fragment:Pg,batching_pars_vertex:Ig,batching_vertex:Lg,begin_vertex:Dg,beginnormal_vertex:Ug,bsdfs:Ng,iridescence_fragment:Fg,bumpmap_pars_fragment:Og,clipping_planes_fragment:kg,clipping_planes_pars_fragment:Bg,clipping_planes_pars_vertex:zg,clipping_planes_vertex:Hg,color_fragment:Vg,color_pars_fragment:Gg,color_pars_vertex:Wg,color_vertex:Xg,common:qg,cube_uv_reflection_fragment:jg,defaultnormal_vertex:Yg,displacementmap_pars_vertex:Kg,displacementmap_vertex:$g,emissivemap_fragment:Jg,emissivemap_pars_fragment:Zg,colorspace_fragment:Qg,colorspace_pars_fragment:e0,envmap_fragment:t0,envmap_common_pars_fragment:n0,envmap_pars_fragment:i0,envmap_pars_vertex:s0,envmap_physical_pars_fragment:m0,envmap_vertex:r0,fog_vertex:o0,fog_pars_vertex:a0,fog_fragment:l0,fog_pars_fragment:c0,gradientmap_pars_fragment:u0,lightmap_pars_fragment:h0,lights_lambert_fragment:d0,lights_lambert_pars_fragment:f0,lights_pars_begin:p0,lights_toon_fragment:g0,lights_toon_pars_fragment:_0,lights_phong_fragment:x0,lights_phong_pars_fragment:v0,lights_physical_fragment:y0,lights_physical_pars_fragment:M0,lights_fragment_begin:b0,lights_fragment_maps:S0,lights_fragment_end:w0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:T0,logdepthbuf_pars_vertex:A0,logdepthbuf_vertex:R0,map_fragment:C0,map_pars_fragment:P0,map_particle_fragment:I0,map_particle_pars_fragment:L0,metalnessmap_fragment:D0,metalnessmap_pars_fragment:U0,morphinstance_vertex:N0,morphcolor_vertex:F0,morphnormal_vertex:O0,morphtarget_pars_vertex:k0,morphtarget_vertex:B0,normal_fragment_begin:z0,normal_fragment_maps:H0,normal_pars_fragment:V0,normal_pars_vertex:G0,normal_vertex:W0,normalmap_pars_fragment:X0,clearcoat_normal_fragment_begin:q0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:Y0,iridescence_pars_fragment:K0,opaque_fragment:$0,packing:J0,premultiplied_alpha_fragment:Z0,project_vertex:Q0,dithering_fragment:e_,dithering_pars_fragment:t_,roughnessmap_fragment:n_,roughnessmap_pars_fragment:i_,shadowmap_pars_fragment:s_,shadowmap_pars_vertex:r_,shadowmap_vertex:o_,shadowmask_pars_fragment:a_,skinbase_vertex:l_,skinning_pars_vertex:c_,skinning_vertex:u_,skinnormal_vertex:h_,specularmap_fragment:d_,specularmap_pars_fragment:f_,tonemapping_fragment:p_,tonemapping_pars_fragment:m_,transmission_fragment:g_,transmission_pars_fragment:__,uv_pars_fragment:x_,uv_pars_vertex:v_,uv_vertex:y_,worldpos_vertex:M_,background_vert:b_,background_frag:S_,backgroundCube_vert:w_,backgroundCube_frag:E_,cube_vert:T_,cube_frag:A_,depth_vert:R_,depth_frag:C_,distanceRGBA_vert:P_,distanceRGBA_frag:I_,equirect_vert:L_,equirect_frag:D_,linedashed_vert:U_,linedashed_frag:N_,meshbasic_vert:F_,meshbasic_frag:O_,meshlambert_vert:k_,meshlambert_frag:B_,meshmatcap_vert:z_,meshmatcap_frag:H_,meshnormal_vert:V_,meshnormal_frag:G_,meshphong_vert:W_,meshphong_frag:X_,meshphysical_vert:q_,meshphysical_frag:j_,meshtoon_vert:Y_,meshtoon_frag:K_,points_vert:$_,points_frag:J_,shadow_vert:Z_,shadow_frag:Q_,sprite_vert:ex,sprite_frag:tx},ce={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Wn={basic:{uniforms:en([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:en([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new De(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:en([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:en([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:en([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new De(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:en([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:en([ce.points,ce.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:en([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:en([ce.common,ce.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:en([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:en([ce.sprite,ce.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:en([ce.common,ce.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:en([ce.lights,ce.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Wn.physical={uniforms:en([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const uo={r:0,b:0,g:0},Fi=new an,nx=new ee;function ix(i,e,t,n,s,r,o){const a=new De(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const b=g(y);b===null?p(a,l):b&&b.isColor&&(p(b,1),v=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===zo)?(u===void 0&&(u=new be(new Xt(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Rs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Fi.copy(v.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nx.makeRotationFromEuler(Fi)),u.material.toneMapped=et.getTransfer(b.colorSpace)!==ft,(h!==b||d!==b.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new be(new Jt(2,2),new zn({name:"BackgroundMaterial",uniforms:Rs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=et.getTransfer(b.colorSpace)!==ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(uo,Ed(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,v,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:x}}function sx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(C,A,D,S,O){let k=!1;const F=h(S,D,A);r!==F&&(r=F,c(r.object)),k=f(C,S,D,O),k&&g(C,S,D,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(C,A,D,S),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function h(C,A,D){const S=D.wireframe===!0;let O=n[C.id];O===void 0&&(O={},n[C.id]=O);let k=O[A.id];k===void 0&&(k={},O[A.id]=k);let F=k[S];return F===void 0&&(F=d(l()),k[S]=F),F}function d(C){const A=[],D=[],S=[];for(let O=0;O<t;O++)A[O]=0,D[O]=0,S[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:S,object:C,attributes:{},index:null}}function f(C,A,D,S){const O=r.attributes,k=A.attributes;let F=0;const j=D.getAttributes();for(const G in j)if(j[G].location>=0){const oe=O[G];let ue=k[G];if(ue===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),oe===void 0||oe.attribute!==ue||ue&&oe.data!==ue.data)return!0;F++}return r.attributesNum!==F||r.index!==S}function g(C,A,D,S){const O={},k=A.attributes;let F=0;const j=D.getAttributes();for(const G in j)if(j[G].location>=0){let oe=k[G];oe===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const ue={};ue.attribute=oe,oe&&oe.data&&(ue.data=oe.data),O[G]=ue,F++}r.attributes=O,r.attributesNum=F,r.index=S}function _(){const C=r.newAttributes;for(let A=0,D=C.length;A<D;A++)C[A]=0}function m(C){p(C,0)}function p(C,A){const D=r.newAttributes,S=r.enabledAttributes,O=r.attributeDivisors;D[C]=1,S[C]===0&&(i.enableVertexAttribArray(C),S[C]=1),O[C]!==A&&(i.vertexAttribDivisor(C,A),O[C]=A)}function x(){const C=r.newAttributes,A=r.enabledAttributes;for(let D=0,S=A.length;D<S;D++)A[D]!==C[D]&&(i.disableVertexAttribArray(D),A[D]=0)}function y(C,A,D,S,O,k,F){F===!0?i.vertexAttribIPointer(C,A,D,O,k):i.vertexAttribPointer(C,A,D,S,O,k)}function v(C,A,D,S){_();const O=S.attributes,k=D.getAttributes(),F=A.defaultAttributeValues;for(const j in k){const G=k[j];if(G.location>=0){let te=O[j];if(te===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),te!==void 0){const oe=te.normalized,ue=te.itemSize,Pe=e.get(te);if(Pe===void 0)continue;const Se=Pe.buffer,Qe=Pe.type,He=Pe.bytesPerElement,K=Qe===i.INT||Qe===i.UNSIGNED_INT||te.gpuType===sc;if(te.isInterleavedBufferAttribute){const $=te.data,me=$.stride,Fe=te.offset;if($.isInstancedInterleavedBuffer){for(let Ee=0;Ee<G.locationSize;Ee++)p(G.location+Ee,$.meshPerAttribute);C.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)m(G.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Ee=0;Ee<G.locationSize;Ee++)y(G.location+Ee,ue/G.locationSize,Qe,oe,me*He,(Fe+ue/G.locationSize*Ee)*He,K)}else{if(te.isInstancedBufferAttribute){for(let $=0;$<G.locationSize;$++)p(G.location+$,te.meshPerAttribute);C.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let $=0;$<G.locationSize;$++)m(G.location+$);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let $=0;$<G.locationSize;$++)y(G.location+$,ue/G.locationSize,Qe,oe,ue*He,ue/G.locationSize*$*He,K)}}else if(F!==void 0){const oe=F[j];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(G.location,oe);break;case 3:i.vertexAttrib3fv(G.location,oe);break;case 4:i.vertexAttrib4fv(G.location,oe);break;default:i.vertexAttrib1fv(G.location,oe)}}}}x()}function b(){L();for(const C in n){const A=n[C];for(const D in A){const S=A[D];for(const O in S)u(S[O].object),delete S[O];delete A[D]}delete n[C]}}function M(C){if(n[C.id]===void 0)return;const A=n[C.id];for(const D in A){const S=A[D];for(const O in S)u(S[O].object),delete S[O];delete A[D]}delete n[C.id]}function T(C){for(const A in n){const D=n[A];if(D[C.id]===void 0)continue;const S=D[C.id];for(const O in S)u(S[O].object),delete S[O];delete D[C.id]}}function L(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function rx(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ox(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==wn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===Us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Bn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Nn&&!L)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:b,maxSamples:M}}function ax(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new yi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=u(g,d,y,f);for(let b=0;b!==y;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function lx(i){let e=new WeakMap;function t(o,a){return a===sl?o.mapping=Es:a===rl&&(o.mapping=Ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===sl||a===rl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mm(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const fs=4,$u=[.125,.215,.35,.446,.526,.582],Hi=20,Ta=new Vo,Ju=new De;let Aa=null,Ra=0,Ca=0,Pa=!1;const Bi=(1+Math.sqrt(5))/2,cs=1/Bi,Zu=[new w(-Bi,cs,0),new w(Bi,cs,0),new w(-cs,0,Bi),new w(cs,0,Bi),new w(0,Bi,-cs),new w(0,Bi,cs),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],cx=new w;class kl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=cx}=r;Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa,Ra,Ca),this._renderer.xr.enabled=Pa,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Us,format:wn,colorSpace:on,depthBuffer:!1},s=Qu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ux(r)),this._blurMaterial=hx(r,e,t)}return s}_compileMaterial(e){const t=new be(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,s,r){const l=new $t(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ju),h.toneMapping=Ei,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new Ft({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),m=new be(new Xt,_);let p=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,p=!0):(_.color.copy(Ju),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const b=this._cubeSize;ho(s,v*b,y>2?b:0,b,b),h.setRenderTarget(s),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Es||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ho(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zu[(s-r-1)%Zu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new be(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const p=[];let x=0;for(let T=0;T<Hi;++T){const L=T/_,E=Math.exp(-L*L/2);p.push(E),T===0?x+=E:T<m&&(x+=2*E)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[s],b=3*v*(s>y-fs?s-y+fs:0),M=4*(this._cubeSize-v);ho(t,b,M,3*v,2*v),l.setRenderTarget(t),l.render(h,Ta)}}function ux(i){const e=[],t=[],n=[];let s=i;const r=i-fs+1+$u.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-fs?l=$u[o-i+fs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let M=0;M<f;M++){const T=M%3*2/3-1,L=M>2?0:-1,E=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];x.set(E,_*g*M),y.set(d,m*g*M);const C=[M,M,M,M,M,M];v.set(C,p*g*M)}const b=new yt;b.setAttribute("position",new Vt(x,_)),b.setAttribute("uv",new Vt(y,m)),b.setAttribute("faceIndex",new Vt(v,p)),e.push(b),s>fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qu(i,e,t){const n=new Ai(i,e,t);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function hx(i,e,t){const n=new Float32Array(Hi),s=new w(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function eh(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function th(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function dx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===sl||l===rl,u=l===Es||l===Ts;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new kl(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new kl(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function px(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const b=x[y+0],M=x[y+1],T=x[y+2];d.push(b,M,M,T,T,b)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const b=y+0,M=y+1,T=y+2;d.push(b,M,M,T,T,b)}}else return;const m=new(yd(d)?wd:Sd)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function mx(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function gx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _x(i,e,t){const n=new WeakMap,s=new Ze;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const M=new Float32Array(v*b*4*h),T=new Md(M,v,b,h);T.type=Nn,T.needsUpdate=!0;const L=y*4;for(let C=0;C<h;C++){const A=m[C],D=p[C],S=x[C],O=v*b*4*C;for(let k=0;k<A.count;k++){const F=k*L;f===!0&&(s.fromBufferAttribute(A,k),M[O+F+0]=s.x,M[O+F+1]=s.y,M[O+F+2]=s.z,M[O+F+3]=0),g===!0&&(s.fromBufferAttribute(D,k),M[O+F+4]=s.x,M[O+F+5]=s.y,M[O+F+6]=s.z,M[O+F+7]=0),_===!0&&(s.fromBufferAttribute(S,k),M[O+F+8]=s.x,M[O+F+9]=s.y,M[O+F+10]=s.z,M[O+F+11]=S.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new pe(v,b)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function xx(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const zd=new Ot,nh=new Mc(1,1),Hd=new Md,Vd=new Zp,Gd=new Ad,ih=[],sh=[],rh=new Float32Array(16),oh=new Float32Array(9),ah=new Float32Array(4);function Bs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Go(i,e){let t=sh[e];t===void 0&&(t=new Int32Array(e),sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function Mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function Sx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;ah.set(n),i.uniformMatrix2fv(this.addr,!1,ah),Bt(t,n)}}function wx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;oh.set(n),i.uniformMatrix3fv(this.addr,!1,oh),Bt(t,n)}}function Ex(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;rh.set(n),i.uniformMatrix4fv(this.addr,!1,rh),Bt(t,n)}}function Tx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function Rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function Cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function Px(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function Lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function Dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function Ux(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nh.compareFunction=vd,r=nh):r=zd,t.setTexture2D(e||r,s)}function Nx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vd,s)}function Fx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gd,s)}function Ox(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hd,s)}function kx(i){switch(i){case 5126:return vx;case 35664:return yx;case 35665:return Mx;case 35666:return bx;case 35674:return Sx;case 35675:return wx;case 35676:return Ex;case 5124:case 35670:return Tx;case 35667:case 35671:return Ax;case 35668:case 35672:return Rx;case 35669:case 35673:return Cx;case 5125:return Px;case 36294:return Ix;case 36295:return Lx;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Ox}}function Bx(i,e){i.uniform1fv(this.addr,e)}function zx(i,e){const t=Bs(e,this.size,2);i.uniform2fv(this.addr,t)}function Hx(i,e){const t=Bs(e,this.size,3);i.uniform3fv(this.addr,t)}function Vx(i,e){const t=Bs(e,this.size,4);i.uniform4fv(this.addr,t)}function Gx(i,e){const t=Bs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wx(i,e){const t=Bs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xx(i,e){const t=Bs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qx(i,e){i.uniform1iv(this.addr,e)}function jx(i,e){i.uniform2iv(this.addr,e)}function Yx(i,e){i.uniform3iv(this.addr,e)}function Kx(i,e){i.uniform4iv(this.addr,e)}function $x(i,e){i.uniform1uiv(this.addr,e)}function Jx(i,e){i.uniform2uiv(this.addr,e)}function Zx(i,e){i.uniform3uiv(this.addr,e)}function Qx(i,e){i.uniform4uiv(this.addr,e)}function ev(i,e,t){const n=this.cache,s=e.length,r=Go(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||zd,r[o])}function tv(i,e,t){const n=this.cache,s=e.length,r=Go(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vd,r[o])}function nv(i,e,t){const n=this.cache,s=e.length,r=Go(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Gd,r[o])}function iv(i,e,t){const n=this.cache,s=e.length,r=Go(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hd,r[o])}function sv(i){switch(i){case 5126:return Bx;case 35664:return zx;case 35665:return Hx;case 35666:return Vx;case 35674:return Gx;case 35675:return Wx;case 35676:return Xx;case 5124:case 35670:return qx;case 35667:case 35671:return jx;case 35668:case 35672:return Yx;case 35669:case 35673:return Kx;case 5125:return $x;case 36294:return Jx;case 36295:return Zx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}class rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kx(t.type)}}class ov{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sv(t.type)}}class av{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function lh(i,e){i.seq.push(e),i.map[e.id]=e}function lv(i,e,t){const n=i.name,s=n.length;for(Ia.lastIndex=0;;){const r=Ia.exec(n),o=Ia.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){lh(t,c===void 0?new rv(a,i,e):new ov(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new av(a),lh(t,h)),t=h}}}class So{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);lv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function ch(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const cv=37297;let uv=0;function hv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const uh=new Ge;function dv(i){et._getMatrix(uh,et.workingColorSpace,i);const e=`mat3( ${uh.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Lo:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+hv(i.getShaderSource(e),a)}else return r}function fv(i,e){const t=dv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pv(i,e){let t;switch(e){case up:t="Linear";break;case hp:t="Reinhard";break;case dp:t="Cineon";break;case ad:t="ACESFilmic";break;case pp:t="AgX";break;case mp:t="Neutral";break;case fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new w;function mv(){et.getLuminanceCoefficients(fo);const i=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function _v(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ir(i){return i!==""}function dh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(i){return i.replace(vv,Mv)}const yv=new Map;function Mv(i,e){let t=je[e];if(t===void 0){const n=yv.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bl(t)}const bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(i){return i.replace(bv,Sv)}function Sv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function wv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ic?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Ev(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tv(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ts&&(e="ENVMAP_MODE_REFRACTION"),e}function Av(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case od:e="ENVMAP_BLENDING_MULTIPLY";break;case lp:e="ENVMAP_BLENDING_MIX";break;case cp:e="ENVMAP_BLENDING_ADD";break}return e}function Rv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=wv(t),c=Ev(t),u=Tv(t),h=Av(t),d=Rv(t),f=gv(t),g=_v(r),_=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ir).join(`
`),p.length>0&&(p+=`
`)):(m=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),p=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?je.tonemapping_pars_fragment:"",t.toneMapping!==Ei?pv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,fv("linearToOutputTexel",t.outputColorSpace),mv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),o=Bl(o),o=dh(o,t),o=fh(o,t),a=Bl(a),a=dh(a,t),a=fh(a,t),o=ph(o),a=ph(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,v=x+p+a,b=ch(s,s.VERTEX_SHADER,y),M=ch(s,s.FRAGMENT_SHADER,v);s.attachShader(_,b),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(A){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",S=s.getShaderInfoLog(b)||"",O=s.getShaderInfoLog(M)||"",k=D.trim(),F=S.trim(),j=O.trim();let G=!0,te=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,M);else{const oe=hh(s,b,"vertex"),ue=hh(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+oe+`
`+ue)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||j==="")&&(te=!1);te&&(A.diagnostics={runnable:G,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(b),s.deleteShader(M),L=new So(s,_),E=xv(s,_)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,cv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=M,this}let Pv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lv(e),t.set(e,n)),n}}class Lv{constructor(e){this.id=Pv++,this.code=e,this.usedTimes=0}}function Dv(i,e,t,n,s,r,o){const a=new fc,l=new Iv,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,C,A,D,S){const O=D.fog,k=S.geometry,F=E.isMeshStandardMaterial?D.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||F),G=j&&j.mapping===zo?j.image.height:null,te=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ue=oe!==void 0?oe.length:0;let Pe=0;k.morphAttributes.position!==void 0&&(Pe=1),k.morphAttributes.normal!==void 0&&(Pe=2),k.morphAttributes.color!==void 0&&(Pe=3);let Se,Qe,He,K;if(te){const rt=Wn[te];Se=rt.vertexShader,Qe=rt.fragmentShader}else Se=E.vertexShader,Qe=E.fragmentShader,l.update(E),He=l.getVertexShaderID(E),K=l.getFragmentShaderID(E);const $=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Fe=S.isInstancedMesh===!0,Ee=S.isBatchedMesh===!0,Te=!!E.map,at=!!E.matcap,N=!!j,wt=!!E.aoMap,We=!!E.lightMap,ke=!!E.bumpMap,ye=!!E.normalMap,Et=!!E.displacementMap,Me=!!E.emissiveMap,qe=!!E.metalnessMap,zt=!!E.roughnessMap,Ut=E.anisotropy>0,U=E.clearcoat>0,R=E.dispersion>0,V=E.iridescence>0,Y=E.sheen>0,Q=E.transmission>0,q=Ut&&!!E.anisotropyMap,Ce=U&&!!E.clearcoatMap,ae=U&&!!E.clearcoatNormalMap,we=U&&!!E.clearcoatRoughnessMap,Ae=V&&!!E.iridescenceMap,se=V&&!!E.iridescenceThicknessMap,fe=Y&&!!E.sheenColorMap,Oe=Y&&!!E.sheenRoughnessMap,Re=!!E.specularMap,he=!!E.specularColorMap,Xe=!!E.specularIntensityMap,B=Q&&!!E.transmissionMap,re=Q&&!!E.thicknessMap,le=!!E.gradientMap,_e=!!E.alphaMap,ne=E.alphaTest>0,Z=!!E.alphaHash,ve=!!E.extensions;let Ve=Ei;E.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ve=i.toneMapping);const _t={shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:Se,fragmentShader:Qe,defines:E.defines,customVertexShaderID:He,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&S._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&S.instanceColor!==null,instancingMorph:Fe&&S.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:on,alphaToCoverage:!!E.alphaToCoverage,map:Te,matcap:at,envMap:N,envMapMode:N&&j.mapping,envMapCubeUVHeight:G,aoMap:wt,lightMap:We,bumpMap:ke,normalMap:ye,displacementMap:d&&Et,emissiveMap:Me,normalMapObjectSpace:ye&&E.normalMapType===Mp,normalMapTangentSpace:ye&&E.normalMapType===xd,metalnessMap:qe,roughnessMap:zt,anisotropy:Ut,anisotropyMap:q,clearcoat:U,clearcoatMap:Ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:we,dispersion:R,iridescence:V,iridescenceMap:Ae,iridescenceThicknessMap:se,sheen:Y,sheenColorMap:fe,sheenRoughnessMap:Oe,specularMap:Re,specularColorMap:he,specularIntensityMap:Xe,transmission:Q,transmissionMap:B,thicknessMap:re,gradientMap:le,opaque:E.transparent===!1&&E.blending===gs&&E.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:Z,combine:E.combine,mapUv:Te&&_(E.map.channel),aoMapUv:wt&&_(E.aoMap.channel),lightMapUv:We&&_(E.lightMap.channel),bumpMapUv:ke&&_(E.bumpMap.channel),normalMapUv:ye&&_(E.normalMap.channel),displacementMapUv:Et&&_(E.displacementMap.channel),emissiveMapUv:Me&&_(E.emissiveMap.channel),metalnessMapUv:qe&&_(E.metalnessMap.channel),roughnessMapUv:zt&&_(E.roughnessMap.channel),anisotropyMapUv:q&&_(E.anisotropyMap.channel),clearcoatMapUv:Ce&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(E.sheenRoughnessMap.channel),specularMapUv:Re&&_(E.specularMap.channel),specularColorMapUv:he&&_(E.specularColorMap.channel),specularIntensityMapUv:Xe&&_(E.specularIntensityMap.channel),transmissionMapUv:B&&_(E.transmissionMap.channel),thicknessMapUv:re&&_(E.thicknessMap.channel),alphaMapUv:_e&&_(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ye||Ut),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!k.attributes.uv&&(Te||_e),fog:!!O,useFog:E.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:S.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Pe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Te&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===ft,decodeVideoTextureEmissive:Me&&E.emissiveMap.isVideoTexture===!0&&et.getTransfer(E.emissiveMap.colorSpace)===ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Lt,flipSided:E.side===sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ve&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&E.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function p(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const A in E.defines)C.push(A),C.push(E.defines[A]);return E.isRawShaderMaterial===!1&&(x(C,E),y(C,E),C.push(i.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function x(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function y(E,C){a.disableAll(),C.supportsVertexTextures&&a.enable(0),C.instancing&&a.enable(1),C.instancingColor&&a.enable(2),C.instancingMorph&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),C.dispersion&&a.enable(20),C.batchingColor&&a.enable(21),C.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const C=g[E.type];let A;if(C){const D=Wn[C];A=hm.clone(D.uniforms)}else A=E.uniforms;return A}function b(E,C){let A;for(let D=0,S=u.length;D<S;D++){const O=u[D];if(O.cacheKey===C){A=O,++A.usedTimes;break}}return A===void 0&&(A=new Cv(i,C,E,r),u.push(A)),A}function M(E){if(--E.usedTimes===0){const C=u.indexOf(E);u[C]=u[u.length-1],u.pop(),E.destroy()}}function T(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:L}}function Uv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Nv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _h(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Nv),n.length>1&&n.sort(d||gh),s.length>1&&s.sort(d||gh)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Fv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new _h,i.set(n,[o])):s>=r.length?(o=new _h,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ov(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new De};break;case"SpotLight":t={position:new w,direction:new w,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function kv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Bv=0;function zv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hv(i){const e=new Ov,t=kv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const s=new w,r=new ee,o=new ee;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,y=0,v=0,b=0,M=0,T=0;c.sort(zv);for(let E=0,C=c.length;E<C;E++){const A=c[E],D=A.color,S=A.intensity,O=A.distance,k=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=D.r*S,h+=D.g*S,d+=D.b*S;else if(A.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(A.sh.coefficients[F],S);T++}else if(A.isDirectionalLight){const F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const j=A.shadow,G=t.get(A);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=A.shadow.matrix,x++}n.directional[f]=F,f++}else if(A.isSpotLight){const F=e.get(A);F.position.setFromMatrixPosition(A.matrixWorld),F.color.copy(D).multiplyScalar(S),F.distance=O,F.coneCos=Math.cos(A.angle),F.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),F.decay=A.decay,n.spot[_]=F;const j=A.shadow;if(A.map&&(n.spotLightMap[b]=A.map,b++,j.updateMatrices(A),A.castShadow&&M++),n.spotLightMatrix[_]=j.matrix,A.castShadow){const G=t.get(A);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=k,v++}_++}else if(A.isRectAreaLight){const F=e.get(A);F.color.copy(D).multiplyScalar(S),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=F,m++}else if(A.isPointLight){const F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),F.distance=A.distance,F.decay=A.decay,A.castShadow){const j=A.shadow,G=t.get(A);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=A.shadow.matrix,y++}n.point[g]=F,g++}else if(A.isHemisphereLight){const F=e.get(A);F.skyColor.copy(A.color).multiplyScalar(S),F.groundColor.copy(A.groundColor).multiplyScalar(S),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==x||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==b||L.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+b-M,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=x,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=b,L.numLightProbes=T,n.version=Bv++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function xh(i){const e=new Hv(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Vv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new xh(i),e.set(s,[a])):r>=o.length?(a=new xh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wv=`uniform sampler2D shadow_pass;
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
}`;function Xv(i,e,t){let n=new xc;const s=new pe,r=new pe,o=new Ze,a=new Gm({depthPacking:yp}),l=new Wm,c={},u=t.maxTextureSize,h={[ui]:sn,[sn]:ui,[Lt]:Lt},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Gv,fragmentShader:Wv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new yt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rd;let p=this.type;this.render=function(M,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const E=i.getRenderTarget(),C=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),D=i.state;D.setBlending(wi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const S=p!==si&&this.type===si,O=p===si&&this.type!==si;for(let k=0,F=M.length;k<F;k++){const j=M[k],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const te=G.getFrameExtents();if(s.multiply(te),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,G.mapSize.y=r.y)),G.map===null||S===!0||O===!0){const ue=this.type!==si?{minFilter:rn,magFilter:rn}:{};G.map!==null&&G.map.dispose(),G.map=new Ai(s.x,s.y,ue),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const oe=G.getViewportCount();for(let ue=0;ue<oe;ue++){const Pe=G.getViewport(ue);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),D.viewport(o),G.updateMatrices(j,ue),n=G.getFrustum(),v(T,L,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===si&&x(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,C,A)};function x(M,T){const L=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ai(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,L,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,L,f,_,null)}function y(M,T,L,E){let C=null;const A=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)C=A;else if(C=L.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const D=C.uuid,S=T.uuid;let O=c[D];O===void 0&&(O={},c[D]=O);let k=O[S];k===void 0&&(k=C.clone(),O[S]=k,T.addEventListener("dispose",b)),C=k}if(C.visible=T.visible,C.wireframe=T.wireframe,E===si?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:h[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,L.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const D=i.properties.get(C);D.light=L}return C}function v(M,T,L,E,C){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===si)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const S=e.update(M),O=M.material;if(Array.isArray(O)){const k=S.groups;for(let F=0,j=k.length;F<j;F++){const G=k[F],te=O[G.materialIndex];if(te&&te.visible){const oe=y(M,te,E,C);M.onBeforeShadow(i,M,T,L,S,oe,G),i.renderBufferDirect(L,null,S,oe,M,G),M.onAfterShadow(i,M,T,L,S,oe,G)}}}else if(O.visible){const k=y(M,O,E,C);M.onBeforeShadow(i,M,T,L,S,k,null),i.renderBufferDirect(L,null,S,k,M,null),M.onAfterShadow(i,M,T,L,S,k,null)}}const D=M.children;for(let S=0,O=D.length;S<O;S++)v(D[S],T,L,E,C)}function b(M){M.target.removeEventListener("dispose",b);for(const L in c){const E=c[L],C=M.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}const qv={[Ja]:Za,[Qa]:nl,[el]:il,[ws]:tl,[Za]:Ja,[nl]:Qa,[il]:el,[tl]:ws};function jv(i,e){function t(){let B=!1;const re=new Ze;let le=null;const _e=new Ze(0,0,0,0);return{setMask:function(ne){le!==ne&&!B&&(i.colorMask(ne,ne,ne,ne),le=ne)},setLocked:function(ne){B=ne},setClear:function(ne,Z,ve,Ve,_t){_t===!0&&(ne*=Ve,Z*=Ve,ve*=Ve),re.set(ne,Z,ve,Ve),_e.equals(re)===!1&&(i.clearColor(ne,Z,ve,Ve),_e.copy(re))},reset:function(){B=!1,le=null,_e.set(-1,0,0,0)}}}function n(){let B=!1,re=!1,le=null,_e=null,ne=null;return{setReversed:function(Z){if(re!==Z){const ve=e.get("EXT_clip_control");Z?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),re=Z;const Ve=ne;ne=null,this.setClear(Ve)}},getReversed:function(){return re},setTest:function(Z){Z?$(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(Z){le!==Z&&!B&&(i.depthMask(Z),le=Z)},setFunc:function(Z){if(re&&(Z=qv[Z]),_e!==Z){switch(Z){case Ja:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case tl:i.depthFunc(i.GEQUAL);break;case nl:i.depthFunc(i.GREATER);break;case il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Z}},setLocked:function(Z){B=Z},setClear:function(Z){ne!==Z&&(re&&(Z=1-Z),i.clearDepth(Z),ne=Z)},reset:function(){B=!1,le=null,_e=null,ne=null,re=!1}}}function s(){let B=!1,re=null,le=null,_e=null,ne=null,Z=null,ve=null,Ve=null,_t=null;return{setTest:function(rt){B||(rt?$(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(rt){re!==rt&&!B&&(i.stencilMask(rt),re=rt)},setFunc:function(rt,$n,Vn){(le!==rt||_e!==$n||ne!==Vn)&&(i.stencilFunc(rt,$n,Vn),le=rt,_e=$n,ne=Vn)},setOp:function(rt,$n,Vn){(Z!==rt||ve!==$n||Ve!==Vn)&&(i.stencilOp(rt,$n,Vn),Z=rt,ve=$n,Ve=Vn)},setLocked:function(rt){B=rt},setClear:function(rt){_t!==rt&&(i.clearStencil(rt),_t=rt)},reset:function(){B=!1,re=null,le=null,_e=null,ne=null,Z=null,ve=null,Ve=null,_t=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,b=null,M=null,T=new De(0,0,0),L=0,E=!1,C=null,A=null,D=null,S=null,O=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=j>=2);let te=null,oe={};const ue=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),Se=new Ze().fromArray(ue),Qe=new Ze().fromArray(Pe);function He(B,re,le,_e){const ne=new Uint8Array(4),Z=i.createTexture();i.bindTexture(B,Z),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<le;ve++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(re+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Z}const K={};K[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(ws),ke(!1),ye(tu),$(i.CULL_FACE),wt(wi);function $(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function me(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Fe(B,re){return h[B]!==re?(i.bindFramebuffer(B,re),h[B]=re,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=re),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Ee(B,re){let le=f,_e=!1;if(B){le=d.get(re),le===void 0&&(le=[],d.set(re,le));const ne=B.textures;if(le.length!==ne.length||le[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ve=ne.length;Z<ve;Z++)le[Z]=i.COLOR_ATTACHMENT0+Z;le.length=ne.length,_e=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,_e=!0);_e&&i.drawBuffers(le)}function Te(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const at={[zi]:i.FUNC_ADD,[Xf]:i.FUNC_SUBTRACT,[qf]:i.FUNC_REVERSE_SUBTRACT};at[jf]=i.MIN,at[Yf]=i.MAX;const N={[Kf]:i.ZERO,[$f]:i.ONE,[Jf]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[ip]:i.SRC_ALPHA_SATURATE,[tp]:i.DST_COLOR,[Qf]:i.DST_ALPHA,[Zf]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[np]:i.ONE_MINUS_DST_COLOR,[ep]:i.ONE_MINUS_DST_ALPHA,[sp]:i.CONSTANT_COLOR,[rp]:i.ONE_MINUS_CONSTANT_COLOR,[op]:i.CONSTANT_ALPHA,[ap]:i.ONE_MINUS_CONSTANT_ALPHA};function wt(B,re,le,_e,ne,Z,ve,Ve,_t,rt){if(B===wi){_===!0&&(me(i.BLEND),_=!1);return}if(_===!1&&($(i.BLEND),_=!0),B!==Wf){if(B!==m||rt!==E){if((p!==zi||v!==zi)&&(i.blendEquation(i.FUNC_ADD),p=zi,v=zi),rt)switch(B){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Po:i.blendFunc(i.ONE,i.ONE);break;case nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case iu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,y=null,b=null,M=null,T.set(0,0,0),L=0,m=B,E=rt}return}ne=ne||re,Z=Z||le,ve=ve||_e,(re!==p||ne!==v)&&(i.blendEquationSeparate(at[re],at[ne]),p=re,v=ne),(le!==x||_e!==y||Z!==b||ve!==M)&&(i.blendFuncSeparate(N[le],N[_e],N[Z],N[ve]),x=le,y=_e,b=Z,M=ve),(Ve.equals(T)===!1||_t!==L)&&(i.blendColor(Ve.r,Ve.g,Ve.b,_t),T.copy(Ve),L=_t),m=B,E=!1}function We(B,re){B.side===Lt?me(i.CULL_FACE):$(i.CULL_FACE);let le=B.side===sn;re&&(le=!le),ke(le),B.blending===gs&&B.transparent===!1?wt(wi):wt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const _e=B.stencilWrite;a.setTest(_e),_e&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Me(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(B){C!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),C=B)}function ye(B){B!==Vf?($(i.CULL_FACE),B!==A&&(B===tu?i.cullFace(i.BACK):B===Gf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),A=B}function Et(B){B!==D&&(F&&i.lineWidth(B),D=B)}function Me(B,re,le){B?($(i.POLYGON_OFFSET_FILL),(S!==re||O!==le)&&(i.polygonOffset(re,le),S=re,O=le)):me(i.POLYGON_OFFSET_FILL)}function qe(B){B?$(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function zt(B){B===void 0&&(B=i.TEXTURE0+k-1),te!==B&&(i.activeTexture(B),te=B)}function Ut(B,re,le){le===void 0&&(te===null?le=i.TEXTURE0+k-1:le=te);let _e=oe[le];_e===void 0&&(_e={type:void 0,texture:void 0},oe[le]=_e),(_e.type!==B||_e.texture!==re)&&(te!==le&&(i.activeTexture(le),te=le),i.bindTexture(B,re||K[B]),_e.type=B,_e.texture=re)}function U(){const B=oe[te];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function R(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(B){Se.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Se.copy(B))}function Oe(B){Qe.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Qe.copy(B))}function Re(B,re){let le=c.get(re);le===void 0&&(le=new WeakMap,c.set(re,le));let _e=le.get(B);_e===void 0&&(_e=i.getUniformBlockIndex(re,B.name),le.set(B,_e))}function he(B,re){const _e=c.get(re).get(B);l.get(re)!==_e&&(i.uniformBlockBinding(re,_e,B.__bindingPointIndex),l.set(re,_e))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},te=null,oe={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,b=null,M=null,T=new De(0,0,0),L=0,E=!1,C=null,A=null,D=null,S=null,O=null,Se.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:me,bindFramebuffer:Fe,drawBuffers:Ee,useProgram:Te,setBlending:wt,setMaterial:We,setFlipSided:ke,setCullFace:ye,setLineWidth:Et,setPolygonOffset:Me,setScissorTest:qe,activeTexture:zt,bindTexture:Ut,unbindTexture:U,compressedTexImage2D:R,compressedTexImage3D:V,texImage2D:Ae,texImage3D:se,updateUBOMapping:Re,uniformBlockBinding:he,texStorage2D:ae,texStorage3D:we,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Ce,scissor:fe,viewport:Oe,reset:Xe}}function Yv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,R){return f?new OffscreenCanvas(U,R):Tr("canvas")}function _(U,R,V){let Y=1;const Q=Ut(U);if((Q.width>V||Q.height>V)&&(Y=V/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const q=Math.floor(Y*Q.width),Ce=Math.floor(Y*Q.height);h===void 0&&(h=g(q,Ce));const ae=R?g(q,Ce):h;return ae.width=q,ae.height=Ce,ae.getContext("2d").drawImage(U,0,0,q,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Ce+")."),ae}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function x(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(U,R,V,Y,Q=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let q=R;if(R===i.RED&&(V===i.FLOAT&&(q=i.R32F),V===i.HALF_FLOAT&&(q=i.R16F),V===i.UNSIGNED_BYTE&&(q=i.R8)),R===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(q=i.R8UI),V===i.UNSIGNED_SHORT&&(q=i.R16UI),V===i.UNSIGNED_INT&&(q=i.R32UI),V===i.BYTE&&(q=i.R8I),V===i.SHORT&&(q=i.R16I),V===i.INT&&(q=i.R32I)),R===i.RG&&(V===i.FLOAT&&(q=i.RG32F),V===i.HALF_FLOAT&&(q=i.RG16F),V===i.UNSIGNED_BYTE&&(q=i.RG8)),R===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(q=i.RG8UI),V===i.UNSIGNED_SHORT&&(q=i.RG16UI),V===i.UNSIGNED_INT&&(q=i.RG32UI),V===i.BYTE&&(q=i.RG8I),V===i.SHORT&&(q=i.RG16I),V===i.INT&&(q=i.RG32I)),R===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(q=i.RGB8UI),V===i.UNSIGNED_SHORT&&(q=i.RGB16UI),V===i.UNSIGNED_INT&&(q=i.RGB32UI),V===i.BYTE&&(q=i.RGB8I),V===i.SHORT&&(q=i.RGB16I),V===i.INT&&(q=i.RGB32I)),R===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),V===i.UNSIGNED_INT&&(q=i.RGBA32UI),V===i.BYTE&&(q=i.RGBA8I),V===i.SHORT&&(q=i.RGBA16I),V===i.INT&&(q=i.RGBA32I)),R===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),R===i.RGBA){const Ce=Q?Lo:et.getTransfer(Y);V===i.FLOAT&&(q=i.RGBA32F),V===i.HALF_FLOAT&&(q=i.RGBA16F),V===i.UNSIGNED_BYTE&&(q=Ce===ft?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(U,R){let V;return U?R===null||R===Ti||R===yr?V=i.DEPTH24_STENCIL8:R===Nn?V=i.DEPTH32F_STENCIL8:R===vr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Ti||R===yr?V=i.DEPTH_COMPONENT24:R===Nn?V=i.DEPTH_COMPONENT32F:R===vr&&(V=i.DEPTH_COMPONENT16),V}function b(U,R){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==rn&&U.minFilter!==pn?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function M(U){const R=U.target;R.removeEventListener("dispose",M),L(R),R.isVideoTexture&&u.delete(R)}function T(U){const R=U.target;R.removeEventListener("dispose",T),C(R)}function L(U){const R=n.get(U);if(R.__webglInit===void 0)return;const V=U.source,Y=d.get(V);if(Y){const Q=Y[R.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(U),Object.keys(Y).length===0&&d.delete(V)}n.remove(U)}function E(U){const R=n.get(U);i.deleteTexture(R.__webglTexture);const V=U.source,Y=d.get(V);delete Y[R.__cacheKey],o.memory.textures--}function C(U){const R=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(R.__webglFramebuffer[Y]))for(let Q=0;Q<R.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(R.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(R.__webglFramebuffer[Y]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[Y])}else{if(Array.isArray(R.__webglFramebuffer))for(let Y=0;Y<R.__webglFramebuffer.length;Y++)i.deleteFramebuffer(R.__webglFramebuffer[Y]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Y=0;Y<R.__webglColorRenderbuffer.length;Y++)R.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[Y]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const V=U.textures;for(let Y=0,Q=V.length;Y<Q;Y++){const q=n.get(V[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(V[Y])}n.remove(U)}let A=0;function D(){A=0}function S(){const U=A;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),A+=1,U}function O(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function k(U,R){const V=n.get(U);if(U.isVideoTexture&&qe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&V.__version!==U.version){const Y=U.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,U,R);return}}else U.isExternalTexture&&(V.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+R)}function F(U,R){const V=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&V.__version!==U.version){K(V,U,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+R)}function j(U,R){const V=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&V.__version!==U.version){K(V,U,R);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+R)}function G(U,R){const V=n.get(U);if(U.version>0&&V.__version!==U.version){$(V,U,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+R)}const te={[gn]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},oe={[rn]:i.NEAREST,[cd]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},ue={[bp]:i.NEVER,[Rp]:i.ALWAYS,[Sp]:i.LESS,[vd]:i.LEQUAL,[wp]:i.EQUAL,[Ap]:i.GEQUAL,[Ep]:i.GREATER,[Tp]:i.NOTEQUAL};function Pe(U,R){if(R.type===Nn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===pn||R.magFilter===xo||R.magFilter===nr||R.magFilter===ai||R.minFilter===pn||R.minFilter===xo||R.minFilter===nr||R.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,te[R.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,te[R.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,te[R.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,oe[R.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,oe[R.minFilter]),R.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ue[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===rn||R.minFilter!==nr&&R.minFilter!==ai||R.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Se(U,R){let V=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",M));const Y=R.source;let Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));const q=O(R);if(q!==U.__cacheKey){Q[q]===void 0&&(Q[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[q].usedTimes++;const Ce=Q[U.__cacheKey];Ce!==void 0&&(Q[U.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(R)),U.__cacheKey=q,U.__webglTexture=Q[q].texture}return V}function Qe(U,R,V){return Math.floor(Math.floor(U/V)/R)}function He(U,R,V,Y){const q=U.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,V,Y,R.data);else{q.sort((se,fe)=>se.start-fe.start);let Ce=0;for(let se=1;se<q.length;se++){const fe=q[Ce],Oe=q[se],Re=fe.start+fe.count,he=Qe(Oe.start,R.width,4),Xe=Qe(fe.start,R.width,4);Oe.start<=Re+1&&he===Xe&&Qe(Oe.start+Oe.count-1,R.width,4)===he?fe.count=Math.max(fe.count,Oe.start+Oe.count-fe.start):(++Ce,q[Ce]=Oe)}q.length=Ce+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let se=0,fe=q.length;se<fe;se++){const Oe=q[se],Re=Math.floor(Oe.start/4),he=Math.ceil(Oe.count/4),Xe=Re%R.width,B=Math.floor(Re/R.width),re=he,le=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Xe,B,re,le,V,Y,R.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function K(U,R,V){let Y=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Y=i.TEXTURE_3D);const Q=Se(U,R),q=R.source;t.bindTexture(Y,U.__webglTexture,i.TEXTURE0+V);const Ce=n.get(q);if(q.version!==Ce.__version||Q===!0){t.activeTexture(i.TEXTURE0+V);const ae=et.getPrimaries(et.workingColorSpace),we=R.colorSpace===oi?null:et.getPrimaries(R.colorSpace),Ae=R.colorSpace===oi||ae===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let se=_(R.image,!1,s.maxTextureSize);se=zt(R,se);const fe=r.convert(R.format,R.colorSpace),Oe=r.convert(R.type);let Re=y(R.internalFormat,fe,Oe,R.colorSpace,R.isVideoTexture);Pe(Y,R);let he;const Xe=R.mipmaps,B=R.isVideoTexture!==!0,re=Ce.__version===void 0||Q===!0,le=q.dataReady,_e=b(R,se);if(R.isDepthTexture)Re=v(R.format===br,R.type),re&&(B?t.texStorage2D(i.TEXTURE_2D,1,Re,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Re,se.width,se.height,0,fe,Oe,null));else if(R.isDataTexture)if(Xe.length>0){B&&re&&t.texStorage2D(i.TEXTURE_2D,_e,Re,Xe[0].width,Xe[0].height);for(let ne=0,Z=Xe.length;ne<Z;ne++)he=Xe[ne],B?le&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,fe,Oe,he.data):t.texImage2D(i.TEXTURE_2D,ne,Re,he.width,he.height,0,fe,Oe,he.data);R.generateMipmaps=!1}else B?(re&&t.texStorage2D(i.TEXTURE_2D,_e,Re,se.width,se.height),le&&He(R,se,fe,Oe)):t.texImage2D(i.TEXTURE_2D,0,Re,se.width,se.height,0,fe,Oe,se.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){B&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Re,Xe[0].width,Xe[0].height,se.depth);for(let ne=0,Z=Xe.length;ne<Z;ne++)if(he=Xe[ne],R.format!==wn)if(fe!==null)if(B){if(le)if(R.layerUpdates.size>0){const ve=Ku(he.width,he.height,R.format,R.type);for(const Ve of R.layerUpdates){const _t=he.data.subarray(Ve*ve/he.data.BYTES_PER_ELEMENT,(Ve+1)*ve/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Ve,he.width,he.height,1,fe,_t)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,se.depth,fe,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Re,he.width,he.height,se.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,se.depth,fe,Oe,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Re,he.width,he.height,se.depth,0,fe,Oe,he.data)}else{B&&re&&t.texStorage2D(i.TEXTURE_2D,_e,Re,Xe[0].width,Xe[0].height);for(let ne=0,Z=Xe.length;ne<Z;ne++)he=Xe[ne],R.format!==wn?fe!==null?B?le&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Re,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?le&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,fe,Oe,he.data):t.texImage2D(i.TEXTURE_2D,ne,Re,he.width,he.height,0,fe,Oe,he.data)}else if(R.isDataArrayTexture)if(B){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Re,se.width,se.height,se.depth),le)if(R.layerUpdates.size>0){const ne=Ku(se.width,se.height,R.format,R.type);for(const Z of R.layerUpdates){const ve=se.data.subarray(Z*ne/se.data.BYTES_PER_ELEMENT,(Z+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,fe,Oe,ve)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,Oe,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,fe,Oe,se.data);else if(R.isData3DTexture)B?(re&&t.texStorage3D(i.TEXTURE_3D,_e,Re,se.width,se.height,se.depth),le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,Oe,se.data)):t.texImage3D(i.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,fe,Oe,se.data);else if(R.isFramebufferTexture){if(re)if(B)t.texStorage2D(i.TEXTURE_2D,_e,Re,se.width,se.height);else{let ne=se.width,Z=se.height;for(let ve=0;ve<_e;ve++)t.texImage2D(i.TEXTURE_2D,ve,Re,ne,Z,0,fe,Oe,null),ne>>=1,Z>>=1}}else if(Xe.length>0){if(B&&re){const ne=Ut(Xe[0]);t.texStorage2D(i.TEXTURE_2D,_e,Re,ne.width,ne.height)}for(let ne=0,Z=Xe.length;ne<Z;ne++)he=Xe[ne],B?le&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe,Oe,he):t.texImage2D(i.TEXTURE_2D,ne,Re,fe,Oe,he);R.generateMipmaps=!1}else if(B){if(re){const ne=Ut(se);t.texStorage2D(i.TEXTURE_2D,_e,Re,ne.width,ne.height)}le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Oe,se)}else t.texImage2D(i.TEXTURE_2D,0,Re,fe,Oe,se);m(R)&&p(Y),Ce.__version=q.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function $(U,R,V){if(R.image.length!==6)return;const Y=Se(U,R),Q=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+V);const q=n.get(Q);if(Q.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+V);const Ce=et.getPrimaries(et.workingColorSpace),ae=R.colorSpace===oi?null:et.getPrimaries(R.colorSpace),we=R.colorSpace===oi||Ce===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ae=R.isCompressedTexture||R.image[0].isCompressedTexture,se=R.image[0]&&R.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!Ae&&!se?fe[Z]=_(R.image[Z],!0,s.maxCubemapSize):fe[Z]=se?R.image[Z].image:R.image[Z],fe[Z]=zt(R,fe[Z]);const Oe=fe[0],Re=r.convert(R.format,R.colorSpace),he=r.convert(R.type),Xe=y(R.internalFormat,Re,he,R.colorSpace),B=R.isVideoTexture!==!0,re=q.__version===void 0||Y===!0,le=Q.dataReady;let _e=b(R,Oe);Pe(i.TEXTURE_CUBE_MAP,R);let ne;if(Ae){B&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,Oe.width,Oe.height);for(let Z=0;Z<6;Z++){ne=fe[Z].mipmaps;for(let ve=0;ve<ne.length;ve++){const Ve=ne[ve];R.format!==wn?Re!==null?B?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,Ve.width,Ve.height,Re,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Xe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,Ve.width,Ve.height,Re,he,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Xe,Ve.width,Ve.height,0,Re,he,Ve.data)}}}else{if(ne=R.mipmaps,B&&re){ne.length>0&&_e++;const Z=Ut(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){B?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,Re,he,fe[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,fe[Z].width,fe[Z].height,0,Re,he,fe[Z].data);for(let ve=0;ve<ne.length;ve++){const _t=ne[ve].image[Z].image;B?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,_t.width,_t.height,Re,he,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Xe,_t.width,_t.height,0,Re,he,_t.data)}}else{B?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,he,fe[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,Re,he,fe[Z]);for(let ve=0;ve<ne.length;ve++){const Ve=ne[ve];B?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,Re,he,Ve.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Xe,Re,he,Ve.image[Z])}}}m(R)&&p(i.TEXTURE_CUBE_MAP),q.__version=Q.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function me(U,R,V,Y,Q,q){const Ce=r.convert(V.format,V.colorSpace),ae=r.convert(V.type),we=y(V.internalFormat,Ce,ae,V.colorSpace),Ae=n.get(R),se=n.get(V);if(se.__renderTarget=R,!Ae.__hasExternalTextures){const fe=Math.max(1,R.width>>q),Oe=Math.max(1,R.height>>q);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,we,fe,Oe,R.depth,0,Ce,ae,null):t.texImage2D(Q,q,we,fe,Oe,0,Ce,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Me(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,se.__webglTexture,0,Et(R)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,se.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(U,R,V){if(i.bindRenderbuffer(i.RENDERBUFFER,U),R.depthBuffer){const Y=R.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=v(R.stencilBuffer,Q),Ce=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=Et(R);Me(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,q,R.width,R.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,q,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,q,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,U)}else{const Y=R.textures;for(let Q=0;Q<Y.length;Q++){const q=Y[Q],Ce=r.convert(q.format,q.colorSpace),ae=r.convert(q.type),we=y(q.internalFormat,Ce,ae,q.colorSpace),Ae=Et(R);V&&Me(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,we,R.width,R.height):Me(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,we,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,we,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(R.depthTexture);Y.__renderTarget=R,(!Y.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),k(R.depthTexture,0);const Q=Y.__webglTexture,q=Et(R);if(R.depthTexture.format===Mr)Me(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(R.depthTexture.format===br)Me(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Te(U){const R=n.get(U),V=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const Y=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Y){const Q=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),R.__depthDisposeCallback=Q}R.__boundDepthTexture=Y}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Y=U.texture.mipmaps;Y&&Y.length>0?Ee(R.__webglFramebuffer[0],U):Ee(R.__webglFramebuffer,U)}else if(V){R.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[Y]),R.__webglDepthbuffer[Y]===void 0)R.__webglDepthbuffer[Y]=i.createRenderbuffer(),Fe(R.__webglDepthbuffer[Y],U,!1);else{const Q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=R.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}else{const Y=U.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Fe(R.__webglDepthbuffer,U,!1);else{const Q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(U,R,V){const Y=n.get(U);R!==void 0&&me(Y.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Te(U)}function N(U){const R=U.texture,V=n.get(U),Y=n.get(R);U.addEventListener("dispose",T);const Q=U.textures,q=U.isWebGLCubeRenderTarget===!0,Ce=Q.length>1;if(Ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=R.version,o.memory.textures++),q){V.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(R.mipmaps&&R.mipmaps.length>0){V.__webglFramebuffer[ae]=[];for(let we=0;we<R.mipmaps.length;we++)V.__webglFramebuffer[ae][we]=i.createFramebuffer()}else V.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){V.__webglFramebuffer=[];for(let ae=0;ae<R.mipmaps.length;ae++)V.__webglFramebuffer[ae]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let ae=0,we=Q.length;ae<we;ae++){const Ae=n.get(Q[ae]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&Me(U)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){const we=Q[ae];V.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ae]);const Ae=r.convert(we.format,we.colorSpace),se=r.convert(we.type),fe=y(we.internalFormat,Ae,se,we.colorSpace,U.isXRRenderTarget===!0),Oe=Et(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,fe,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,V.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(V.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,R);for(let ae=0;ae<6;ae++)if(R.mipmaps&&R.mipmaps.length>0)for(let we=0;we<R.mipmaps.length;we++)me(V.__webglFramebuffer[ae][we],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we);else me(V.__webglFramebuffer[ae],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(R)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ae=0,we=Q.length;ae<we;ae++){const Ae=Q[ae],se=n.get(Ae);let fe=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(fe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),Pe(fe,Ae),me(V.__webglFramebuffer,U,Ae,i.COLOR_ATTACHMENT0+ae,fe,0),m(Ae)&&p(fe)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ae=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,Y.__webglTexture),Pe(ae,R),R.mipmaps&&R.mipmaps.length>0)for(let we=0;we<R.mipmaps.length;we++)me(V.__webglFramebuffer[we],U,R,i.COLOR_ATTACHMENT0,ae,we);else me(V.__webglFramebuffer,U,R,i.COLOR_ATTACHMENT0,ae,0);m(R)&&p(ae),t.unbindTexture()}U.depthBuffer&&Te(U)}function wt(U){const R=U.textures;for(let V=0,Y=R.length;V<Y;V++){const Q=R[V];if(m(Q)){const q=x(U),Ce=n.get(Q).__webglTexture;t.bindTexture(q,Ce),p(q),t.unbindTexture()}}}const We=[],ke=[];function ye(U){if(U.samples>0){if(Me(U)===!1){const R=U.textures,V=U.width,Y=U.height;let Q=i.COLOR_BUFFER_BIT;const q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(U),ae=R.length>1;if(ae)for(let Ae=0;Ae<R.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const we=U.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ae=0;Ae<R.length;Ae++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const se=n.get(R[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,Q,i.NEAREST),l===!0&&(We.length=0,ke.length=0,We.push(i.COLOR_ATTACHMENT0+Ae),U.depthBuffer&&U.resolveDepthBuffer===!1&&(We.push(q),ke.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Ae=0;Ae<R.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const se=n.get(R[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const R=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Et(U){return Math.min(s.maxSamples,U.samples)}function Me(U){const R=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function qe(U){const R=o.render.frame;u.get(U)!==R&&(u.set(U,R),U.update())}function zt(U,R){const V=U.colorSpace,Y=U.format,Q=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||V!==on&&V!==oi&&(et.getTransfer(V)===ft?(Y!==wn||Q!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),R}function Ut(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=S,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=at,this.setupRenderTarget=N,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Me}function Kv(i,e){function t(n,s=oi){let r;const o=et.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ud)return i.BYTE;if(n===hd)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===sc)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Us)return i.HALF_FLOAT;if(n===pd)return i.ALPHA;if(n===md)return i.RGB;if(n===wn)return i.RGBA;if(n===Mr)return i.DEPTH_COMPONENT;if(n===br)return i.DEPTH_STENCIL;if(n===ac)return i.RED;if(n===lc)return i.RED_INTEGER;if(n===gd)return i.RG;if(n===cc)return i.RG_INTEGER;if(n===uc)return i.RGBA_INTEGER;if(n===vo||n===yo||n===Mo||n===bo)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===al||n===ll||n===cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ul||n===hl||n===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ul||n===hl)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===bl||n===Sl||n===wl||n===El||n===Tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Al||n===Rl||n===Cl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Al)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Il||n===Ll||n===Dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const $v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jv=`
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

}`;class Zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ld(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zn({vertexShader:$v,fragmentShader:Jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new Jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qv extends Ns{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Zv,p={},x=t.getContextAttributes();let y=null,v=null;const b=[],M=[],T=new pe;let L=null;const E=new $t;E.viewport=new Ze;const C=new $t;C.viewport=new Ze;const A=[E,C],D=new ug;let S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=b[K];return $===void 0&&($=new ma,b[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=b[K];return $===void 0&&($=new ma,b[K]=$),$.getGripSpace()},this.getHand=function(K){let $=b[K];return $===void 0&&($=new ma,b[K]=$),$.getHandSpace()};function k(K){const $=M.indexOf(K.inputSource);if($===-1)return;const me=b[$];me!==void 0&&(me.update(K.inputSource,K.frame,c||o),me.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",j);for(let K=0;K<b.length;K++){const $=M[K];$!==null&&(M[K]=null,b[K].disconnect($))}S=null,O=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(y),f=null,d=null,h=null,s=null,v=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",F),s.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Fe=null,Ee=null;x.depth&&(Ee=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=x.stencil?br:Mr,Fe=x.stencil?yr:Ti);const Te={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Te),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ai(d.textureWidth,d.textureHeight,{format:wn,type:Bn,depthTexture:new Mc(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ai(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(K){for(let $=0;$<K.removed.length;$++){const me=K.removed[$],Fe=M.indexOf(me);Fe>=0&&(M[Fe]=null,b[Fe].disconnect(me))}for(let $=0;$<K.added.length;$++){const me=K.added[$];let Fe=M.indexOf(me);if(Fe===-1){for(let Te=0;Te<b.length;Te++)if(Te>=M.length){M.push(me),Fe=Te;break}else if(M[Te]===null){M[Te]=me,Fe=Te;break}if(Fe===-1)break}const Ee=b[Fe];Ee&&Ee.connect(me)}}const G=new w,te=new w;function oe(K,$,me){G.setFromMatrixPosition($.matrixWorld),te.setFromMatrixPosition(me.matrixWorld);const Fe=G.distanceTo(te),Ee=$.projectionMatrix.elements,Te=me.projectionMatrix.elements,at=Ee[14]/(Ee[10]-1),N=Ee[14]/(Ee[10]+1),wt=(Ee[9]+1)/Ee[5],We=(Ee[9]-1)/Ee[5],ke=(Ee[8]-1)/Ee[0],ye=(Te[8]+1)/Te[0],Et=at*ke,Me=at*ye,qe=Fe/(-ke+ye),zt=qe*-ke;if($.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(zt),K.translateZ(qe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ee[10]===-1)K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Ut=at+qe,U=N+qe,R=Et-zt,V=Me+(Fe-zt),Y=wt*N/U*Ut,Q=We*N/U*Ut;K.projectionMatrix.makePerspective(R,V,Y,Q,Ut,U),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ue(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let $=K.near,me=K.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(me=m.depthFar)),D.near=C.near=E.near=$,D.far=C.far=E.far=me,(S!==D.near||O!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),S=D.near,O=D.far),D.layers.mask=K.layers.mask|6,E.layers.mask=D.layers.mask&3,C.layers.mask=D.layers.mask&5;const Fe=K.parent,Ee=D.cameras;ue(D,Fe);for(let Te=0;Te<Ee.length;Te++)ue(Ee[Te],Fe);Ee.length===2?oe(D,E,C):D.projectionMatrix.copy(E.projectionMatrix),Pe(K,D,Fe)};function Pe(K,$,me){me===null?K.matrix.copy($.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply($.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=As*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(K){return p[K]};let Se=null;function Qe(K,$){if(u=$.getViewerPose(c||o),g=$,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Fe=!1;me.length!==D.cameras.length&&(D.cameras.length=0,Fe=!0);for(let N=0;N<me.length;N++){const wt=me[N];let We=null;if(f!==null)We=f.getViewport(wt);else{const ye=h.getViewSubImage(d,wt);We=ye.viewport,N===0&&(e.setRenderTargetTextures(v,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(v))}let ke=A[N];ke===void 0&&(ke=new $t,ke.layers.enable(N),ke.viewport=new Ze,A[N]=ke),ke.matrix.fromArray(wt.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(wt.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(We.x,We.y,We.width,We.height),N===0&&(D.matrix.copy(ke.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Fe===!0&&D.cameras.push(ke)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const N=h.getDepthInformation(me[0]);N&&N.isValid&&N.texture&&m.init(N,s.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let N=0;N<me.length;N++){const wt=me[N].camera;if(wt){let We=p[wt];We||(We=new Ld,p[wt]=We);const ke=h.getCameraImage(wt);We.sourceTexture=ke}}}}for(let me=0;me<b.length;me++){const Fe=M[me],Ee=b[me];Fe!==null&&Ee!==void 0&&Ee.update(Fe,$,c||o)}Se&&Se(K,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const He=new Bd;He.setAnimationLoop(Qe),this.setAnimationLoop=function(K){Se=K},this.dispose=function(){}}}const Oi=new an,ey=new ee;function ty(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ed(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,Oi.copy(v),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(ey.makeRotationFromEuler(Oi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ny(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=s[x.id];v===void 0&&(g(x),v=u(x),s[x.id]=v,x.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(x,b);const M=e.render.frame;r[x.id]!==M&&(d(x),r[x.id]=M)}function u(x){const y=h();x.__bindingPointIndex=y;const v=i.createBuffer(),b=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],v=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,T=v.length;M<T;M++){const L=Array.isArray(v[M])?v[M]:[v[M]];for(let E=0,C=L.length;E<C;E++){const A=L[E];if(f(A,M,E,b)===!0){const D=A.__offset,S=Array.isArray(A.value)?A.value:[A.value];let O=0;for(let k=0;k<S.length;k++){const F=S[k],j=_(F);typeof F=="number"||typeof F=="boolean"?(A.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,D+O,A.__data)):F.isMatrix3?(A.__data[0]=F.elements[0],A.__data[1]=F.elements[1],A.__data[2]=F.elements[2],A.__data[3]=0,A.__data[4]=F.elements[3],A.__data[5]=F.elements[4],A.__data[6]=F.elements[5],A.__data[7]=0,A.__data[8]=F.elements[6],A.__data[9]=F.elements[7],A.__data[10]=F.elements[8],A.__data[11]=0):(F.toArray(A.__data,O),O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,v,b){const M=x.value,T=y+"_"+v;if(b[T]===void 0)return typeof M=="number"||typeof M=="boolean"?b[T]=M:b[T]=M.clone(),!0;{const L=b[T];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return b[T]=M,!0}else if(L.equals(M)===!1)return L.copy(M),!0}return!1}function g(x){const y=x.uniforms;let v=0;const b=16;for(let T=0,L=y.length;T<L;T++){const E=Array.isArray(y[T])?y[T]:[y[T]];for(let C=0,A=E.length;C<A;C++){const D=E[C],S=Array.isArray(D.value)?D.value:[D.value];for(let O=0,k=S.length;O<k;O++){const F=S[O],j=_(F),G=v%b,te=G%j.boundary,oe=G+te;v+=te,oe!==0&&b-oe<j.storage&&(v+=b-oe),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=j.storage}}}const M=v%b;return M>0&&(v+=b-M),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class iy{constructor(e={}){const{canvas:t=Xp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=tt;let M=0,T=0,L=null,E=-1,C=null;const A=new Ze,D=new Ze;let S=null;const O=new De(0);let k=0,F=t.width,j=t.height,G=1,te=null,oe=null;const ue=new Ze(0,0,F,j),Pe=new Ze(0,0,F,j);let Se=!1;const Qe=new xc;let He=!1,K=!1;const $=new ee,me=new w,Fe=new Ze,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function at(){return L===null?G:1}let N=n;function wt(I,z){return t.getContext(I,z)}try{const I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nc}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ne,!1),N===null){const z="webgl2";if(N=wt(z,I),N===null)throw wt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let We,ke,ye,Et,Me,qe,zt,Ut,U,R,V,Y,Q,q,Ce,ae,we,Ae,se,fe,Oe,Re,he,Xe;function B(){We=new fx(N),We.init(),Re=new Kv(N,We),ke=new ox(N,We,e,Re),ye=new jv(N,We),ke.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),Et=new gx(N),Me=new Uv,qe=new Yv(N,We,ye,Me,ke,Re,Et),zt=new lx(v),Ut=new dx(v),U=new bg(N),he=new sx(N,U),R=new px(N,U,Et,he),V=new xx(N,R,U,Et),se=new _x(N,ke,qe),ae=new ax(Me),Y=new Dv(v,zt,Ut,We,ke,he,ae),Q=new ty(v,Me),q=new Fv,Ce=new Vv(We),Ae=new ix(v,zt,Ut,ye,V,f,l),we=new Xv(v,V,ke),Xe=new ny(N,Et,ke,ye),fe=new rx(N,We,Et),Oe=new mx(N,We,Et),Et.programs=Y.programs,v.capabilities=ke,v.extensions=We,v.properties=Me,v.renderLists=q,v.shadowMap=we,v.state=ye,v.info=Et}B();const re=new Qv(v,N);this.xr=re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const I=We.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=We.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(I){I!==void 0&&(G=I,this.setSize(F,j,!1))},this.getSize=function(I){return I.set(F,j)},this.setSize=function(I,z,W=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=I,j=z,t.width=Math.floor(I*G),t.height=Math.floor(z*G),W===!0&&(t.style.width=I+"px",t.style.height=z+"px"),this.setViewport(0,0,I,z)},this.getDrawingBufferSize=function(I){return I.set(F*G,j*G).floor()},this.setDrawingBufferSize=function(I,z,W){F=I,j=z,G=W,t.width=Math.floor(I*W),t.height=Math.floor(z*W),this.setViewport(0,0,I,z)},this.getCurrentViewport=function(I){return I.copy(A)},this.getViewport=function(I){return I.copy(ue)},this.setViewport=function(I,z,W,X){I.isVector4?ue.set(I.x,I.y,I.z,I.w):ue.set(I,z,W,X),ye.viewport(A.copy(ue).multiplyScalar(G).round())},this.getScissor=function(I){return I.copy(Pe)},this.setScissor=function(I,z,W,X){I.isVector4?Pe.set(I.x,I.y,I.z,I.w):Pe.set(I,z,W,X),ye.scissor(D.copy(Pe).multiplyScalar(G).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(I){ye.setScissorTest(Se=I)},this.setOpaqueSort=function(I){te=I},this.setTransparentSort=function(I){oe=I},this.getClearColor=function(I){return I.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(I=!0,z=!0,W=!0){let X=0;if(I){let H=!1;if(L!==null){const ie=L.texture.format;H=ie===uc||ie===cc||ie===lc}if(H){const ie=L.texture.type,de=ie===Bn||ie===Ti||ie===vr||ie===yr||ie===rc||ie===oc,xe=Ae.getClearColor(),ge=Ae.getClearAlpha(),Ue=xe.r,Be=xe.g,Ie=xe.b;de?(g[0]=Ue,g[1]=Be,g[2]=Ie,g[3]=ge,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Ue,_[1]=Be,_[2]=Ie,_[3]=ge,N.clearBufferiv(N.COLOR,0,_))}else X|=N.COLOR_BUFFER_BIT}z&&(X|=N.DEPTH_BUFFER_BIT),W&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Ae.dispose(),q.dispose(),Ce.dispose(),Me.dispose(),zt.dispose(),Ut.dispose(),V.dispose(),he.dispose(),Xe.dispose(),Y.dispose(),re.dispose(),re.removeEventListener("sessionstart",Vn),re.removeEventListener("sessionend",Kc),Pi.stop()};function le(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const I=Et.autoReset,z=we.enabled,W=we.autoUpdate,X=we.needsUpdate,H=we.type;B(),Et.autoReset=I,we.enabled=z,we.autoUpdate=W,we.needsUpdate=X,we.type=H}function ne(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Z(I){const z=I.target;z.removeEventListener("dispose",Z),ve(z)}function ve(I){Ve(I),Me.remove(I)}function Ve(I){const z=Me.get(I).programs;z!==void 0&&(z.forEach(function(W){Y.releaseProgram(W)}),I.isShaderMaterial&&Y.releaseShaderCache(I))}this.renderBufferDirect=function(I,z,W,X,H,ie){z===null&&(z=Ee);const de=H.isMesh&&H.matrixWorld.determinant()<0,xe=Ff(I,z,W,X,H);ye.setMaterial(X,de);let ge=W.index,Ue=1;if(X.wireframe===!0){if(ge=R.getWireframeAttribute(W),ge===void 0)return;Ue=2}const Be=W.drawRange,Ie=W.attributes.position;let Je=Be.start*Ue,ht=(Be.start+Be.count)*Ue;ie!==null&&(Je=Math.max(Je,ie.start*Ue),ht=Math.min(ht,(ie.start+ie.count)*Ue)),ge!==null?(Je=Math.max(Je,0),ht=Math.min(ht,ge.count)):Ie!=null&&(Je=Math.max(Je,0),ht=Math.min(ht,Ie.count));const Dt=ht-Je;if(Dt<0||Dt===1/0)return;he.setup(H,X,xe,W,ge);let Mt,mt=fe;if(ge!==null&&(Mt=U.get(ge),mt=Oe,mt.setIndex(Mt)),H.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*at()),mt.setMode(N.LINES)):mt.setMode(N.TRIANGLES);else if(H.isLine){let Le=X.linewidth;Le===void 0&&(Le=1),ye.setLineWidth(Le*at()),H.isLineSegments?mt.setMode(N.LINES):H.isLineLoop?mt.setMode(N.LINE_LOOP):mt.setMode(N.LINE_STRIP)}else H.isPoints?mt.setMode(N.POINTS):H.isSprite&&mt.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))mt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Le=H._multiDrawStarts,Rt=H._multiDrawCounts,nt=H._multiDrawCount,cn=ge?U.get(ge).bytesPerElement:1,ji=Me.get(X).currentProgram.getUniforms();for(let un=0;un<nt;un++)ji.setValue(N,"_gl_DrawID",un),mt.render(Le[un]/cn,Rt[un])}else if(H.isInstancedMesh)mt.renderInstances(Je,Dt,H.count);else if(W.isInstancedBufferGeometry){const Le=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Rt=Math.min(W.instanceCount,Le);mt.renderInstances(Je,Dt,Rt)}else mt.render(Je,Dt)};function _t(I,z,W){I.transparent===!0&&I.side===Lt&&I.forceSinglePass===!1?(I.side=sn,I.needsUpdate=!0,kr(I,z,W),I.side=ui,I.needsUpdate=!0,kr(I,z,W),I.side=Lt):kr(I,z,W)}this.compile=function(I,z,W=null){W===null&&(W=I),p=Ce.get(W),p.init(z),y.push(p),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),I!==W&&I.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const X=new Set;return I.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ie=H.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const xe=ie[de];_t(xe,W,H),X.add(xe)}else _t(ie,W,H),X.add(ie)}),p=y.pop(),X},this.compileAsync=function(I,z,W=null){const X=this.compile(I,z,W);return new Promise(H=>{function ie(){if(X.forEach(function(de){Me.get(de).currentProgram.isReady()&&X.delete(de)}),X.size===0){H(I);return}setTimeout(ie,10)}We.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let rt=null;function $n(I){rt&&rt(I)}function Vn(){Pi.stop()}function Kc(){Pi.start()}const Pi=new Bd;Pi.setAnimationLoop($n),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(I){rt=I,re.setAnimationLoop(I),I===null?Pi.stop():Pi.start()},re.addEventListener("sessionstart",Vn),re.addEventListener("sessionend",Kc),this.render=function(I,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(z),z=re.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,z,L),p=Ce.get(I,y.length),p.init(z),y.push(p),$.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Qe.setFromProjectionMatrix($,Xn,z.reversedDepth),K=this.localClippingEnabled,He=ae.init(this.clippingPlanes,K),m=q.get(I,x.length),m.init(),x.push(m),re.enabled===!0&&re.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&qo(ie,z,-1/0,v.sortObjects)}qo(I,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(te,oe),Te=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Te&&Ae.addToRenderList(m,I),this.info.render.frame++,He===!0&&ae.beginShadows();const W=p.state.shadowsArray;we.render(W,I,z),He===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ie=z.cameras;if(H.length>0)for(let de=0,xe=ie.length;de<xe;de++){const ge=ie[de];Jc(X,H,I,ge)}Te&&Ae.render(I);for(let de=0,xe=ie.length;de<xe;de++){const ge=ie[de];$c(m,I,ge,ge.viewport)}}else H.length>0&&Jc(X,H,I,z),Te&&Ae.render(I),$c(m,I,z);L!==null&&T===0&&(qe.updateMultisampleRenderTarget(L),qe.updateRenderTargetMipmap(L)),I.isScene===!0&&I.onAfterRender(v,I,z),he.resetDefaultState(),E=-1,C=null,y.pop(),y.length>0?(p=y[y.length-1],He===!0&&ae.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function qo(I,z,W,X){if(I.visible===!1)return;if(I.layers.test(z.layers)){if(I.isGroup)W=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(z);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Qe.intersectsSprite(I)){X&&Fe.setFromMatrixPosition(I.matrixWorld).applyMatrix4($);const de=V.update(I),xe=I.material;xe.visible&&m.push(I,de,xe,W,Fe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Qe.intersectsObject(I))){const de=V.update(I),xe=I.material;if(X&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Fe.copy(I.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Fe.copy(de.boundingSphere.center)),Fe.applyMatrix4(I.matrixWorld).applyMatrix4($)),Array.isArray(xe)){const ge=de.groups;for(let Ue=0,Be=ge.length;Ue<Be;Ue++){const Ie=ge[Ue],Je=xe[Ie.materialIndex];Je&&Je.visible&&m.push(I,de,Je,W,Fe.z,Ie)}}else xe.visible&&m.push(I,de,xe,W,Fe.z,null)}}const ie=I.children;for(let de=0,xe=ie.length;de<xe;de++)qo(ie[de],z,W,X)}function $c(I,z,W,X){const H=I.opaque,ie=I.transmissive,de=I.transparent;p.setupLightsView(W),He===!0&&ae.setGlobalState(v.clippingPlanes,W),X&&ye.viewport(A.copy(X)),H.length>0&&Or(H,z,W),ie.length>0&&Or(ie,z,W),de.length>0&&Or(de,z,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Jc(I,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Ai(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Us:Bn,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ie=p.state.transmissionRenderTarget[X.id],de=X.viewport||A;ie.setSize(de.z*v.transmissionResolutionScale,de.w*v.transmissionResolutionScale);const xe=v.getRenderTarget(),ge=v.getActiveCubeFace(),Ue=v.getActiveMipmapLevel();v.setRenderTarget(ie),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),Te&&Ae.render(W);const Be=v.toneMapping;v.toneMapping=Ei;const Ie=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),He===!0&&ae.setGlobalState(v.clippingPlanes,X),Or(I,W,X),qe.updateMultisampleRenderTarget(ie),qe.updateRenderTargetMipmap(ie),We.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ht=0,Dt=z.length;ht<Dt;ht++){const Mt=z[ht],mt=Mt.object,Le=Mt.geometry,Rt=Mt.material,nt=Mt.group;if(Rt.side===Lt&&mt.layers.test(X.layers)){const cn=Rt.side;Rt.side=sn,Rt.needsUpdate=!0,Zc(mt,W,X,Le,Rt,nt),Rt.side=cn,Rt.needsUpdate=!0,Je=!0}}Je===!0&&(qe.updateMultisampleRenderTarget(ie),qe.updateRenderTargetMipmap(ie))}v.setRenderTarget(xe,ge,Ue),v.setClearColor(O,k),Ie!==void 0&&(X.viewport=Ie),v.toneMapping=Be}function Or(I,z,W){const X=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ie=I.length;H<ie;H++){const de=I[H],xe=de.object,ge=de.geometry,Ue=de.group;let Be=de.material;Be.allowOverride===!0&&X!==null&&(Be=X),xe.layers.test(W.layers)&&Zc(xe,z,W,ge,Be,Ue)}}function Zc(I,z,W,X,H,ie){I.onBeforeRender(v,z,W,X,H,ie),I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),H.onBeforeRender(v,z,W,X,I,ie),H.transparent===!0&&H.side===Lt&&H.forceSinglePass===!1?(H.side=sn,H.needsUpdate=!0,v.renderBufferDirect(W,z,X,H,I,ie),H.side=ui,H.needsUpdate=!0,v.renderBufferDirect(W,z,X,H,I,ie),H.side=Lt):v.renderBufferDirect(W,z,X,H,I,ie),I.onAfterRender(v,z,W,X,H,ie)}function kr(I,z,W){z.isScene!==!0&&(z=Ee);const X=Me.get(I),H=p.state.lights,ie=p.state.shadowsArray,de=H.state.version,xe=Y.getParameters(I,H.state,ie,z,W),ge=Y.getProgramCacheKey(xe);let Ue=X.programs;X.environment=I.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(I.isMeshStandardMaterial?Ut:zt).get(I.envMap||X.environment),X.envMapRotation=X.environment!==null&&I.envMap===null?z.environmentRotation:I.envMapRotation,Ue===void 0&&(I.addEventListener("dispose",Z),Ue=new Map,X.programs=Ue);let Be=Ue.get(ge);if(Be!==void 0){if(X.currentProgram===Be&&X.lightsStateVersion===de)return eu(I,xe),Be}else xe.uniforms=Y.getUniforms(I),I.onBeforeCompile(xe,v),Be=Y.acquireProgram(xe,ge),Ue.set(ge,Be),X.uniforms=xe.uniforms;const Ie=X.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ie.clippingPlanes=ae.uniform),eu(I,xe),X.needsLights=kf(I),X.lightsStateVersion=de,X.needsLights&&(Ie.ambientLightColor.value=H.state.ambient,Ie.lightProbe.value=H.state.probe,Ie.directionalLights.value=H.state.directional,Ie.directionalLightShadows.value=H.state.directionalShadow,Ie.spotLights.value=H.state.spot,Ie.spotLightShadows.value=H.state.spotShadow,Ie.rectAreaLights.value=H.state.rectArea,Ie.ltc_1.value=H.state.rectAreaLTC1,Ie.ltc_2.value=H.state.rectAreaLTC2,Ie.pointLights.value=H.state.point,Ie.pointLightShadows.value=H.state.pointShadow,Ie.hemisphereLights.value=H.state.hemi,Ie.directionalShadowMap.value=H.state.directionalShadowMap,Ie.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ie.spotShadowMap.value=H.state.spotShadowMap,Ie.spotLightMatrix.value=H.state.spotLightMatrix,Ie.spotLightMap.value=H.state.spotLightMap,Ie.pointShadowMap.value=H.state.pointShadowMap,Ie.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Be,X.uniformsList=null,Be}function Qc(I){if(I.uniformsList===null){const z=I.currentProgram.getUniforms();I.uniformsList=So.seqWithValue(z.seq,I.uniforms)}return I.uniformsList}function eu(I,z){const W=Me.get(I);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Ff(I,z,W,X,H){z.isScene!==!0&&(z=Ee),qe.resetTextureUnits();const ie=z.fog,de=X.isMeshStandardMaterial?z.environment:null,xe=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:on,ge=(X.isMeshStandardMaterial?Ut:zt).get(X.envMap||de),Ue=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ie=!!W.morphAttributes.position,Je=!!W.morphAttributes.normal,ht=!!W.morphAttributes.color;let Dt=Ei;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const Mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,mt=Mt!==void 0?Mt.length:0,Le=Me.get(X),Rt=p.state.lights;if(He===!0&&(K===!0||I!==C)){const Zt=I===C&&X.id===E;ae.setState(X,I,Zt)}let nt=!1;X.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Rt.state.version||Le.outputColorSpace!==xe||H.isBatchedMesh&&Le.batching===!1||!H.isBatchedMesh&&Le.batching===!0||H.isBatchedMesh&&Le.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Le.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Le.instancing===!1||!H.isInstancedMesh&&Le.instancing===!0||H.isSkinnedMesh&&Le.skinning===!1||!H.isSkinnedMesh&&Le.skinning===!0||H.isInstancedMesh&&Le.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Le.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Le.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Le.instancingMorph===!1&&H.morphTexture!==null||Le.envMap!==ge||X.fog===!0&&Le.fog!==ie||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ae.numPlanes||Le.numIntersection!==ae.numIntersection)||Le.vertexAlphas!==Ue||Le.vertexTangents!==Be||Le.morphTargets!==Ie||Le.morphNormals!==Je||Le.morphColors!==ht||Le.toneMapping!==Dt||Le.morphTargetsCount!==mt)&&(nt=!0):(nt=!0,Le.__version=X.version);let cn=Le.currentProgram;nt===!0&&(cn=kr(X,z,H));let ji=!1,un=!1,Vs=!1;const Ct=cn.getUniforms(),xn=Le.uniforms;if(ye.useProgram(cn.program)&&(ji=!0,un=!0,Vs=!0),X.id!==E&&(E=X.id,un=!0),ji||C!==I){ye.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ct.setValue(N,"projectionMatrix",I.projectionMatrix),Ct.setValue(N,"viewMatrix",I.matrixWorldInverse);const ln=Ct.map.cameraPosition;ln!==void 0&&ln.setValue(N,me.setFromMatrixPosition(I.matrixWorld)),ke.logarithmicDepthBuffer&&Ct.setValue(N,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ct.setValue(N,"isOrthographic",I.isOrthographicCamera===!0),C!==I&&(C=I,un=!0,Vs=!0)}if(H.isSkinnedMesh){Ct.setOptional(N,H,"bindMatrix"),Ct.setOptional(N,H,"bindMatrixInverse");const Zt=H.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Ct.setValue(N,"boneTexture",Zt.boneTexture,qe))}H.isBatchedMesh&&(Ct.setOptional(N,H,"batchingTexture"),Ct.setValue(N,"batchingTexture",H._matricesTexture,qe),Ct.setOptional(N,H,"batchingIdTexture"),Ct.setValue(N,"batchingIdTexture",H._indirectTexture,qe),Ct.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&Ct.setValue(N,"batchingColorTexture",H._colorsTexture,qe));const vn=W.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&se.update(H,W,cn),(un||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,Ct.setValue(N,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(xn.envMap.value=ge,xn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(xn.envMapIntensity.value=z.environmentIntensity),un&&(Ct.setValue(N,"toneMappingExposure",v.toneMappingExposure),Le.needsLights&&Of(xn,Vs),ie&&X.fog===!0&&Q.refreshFogUniforms(xn,ie),Q.refreshMaterialUniforms(xn,X,G,j,p.state.transmissionRenderTarget[I.id]),So.upload(N,Qc(Le),xn,qe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(So.upload(N,Qc(Le),xn,qe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ct.setValue(N,"center",H.center),Ct.setValue(N,"modelViewMatrix",H.modelViewMatrix),Ct.setValue(N,"normalMatrix",H.normalMatrix),Ct.setValue(N,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Zt=X.uniformsGroups;for(let ln=0,jo=Zt.length;ln<jo;ln++){const Ii=Zt[ln];Xe.update(Ii,cn),Xe.bind(Ii,cn)}}return cn}function Of(I,z){I.ambientLightColor.needsUpdate=z,I.lightProbe.needsUpdate=z,I.directionalLights.needsUpdate=z,I.directionalLightShadows.needsUpdate=z,I.pointLights.needsUpdate=z,I.pointLightShadows.needsUpdate=z,I.spotLights.needsUpdate=z,I.spotLightShadows.needsUpdate=z,I.rectAreaLights.needsUpdate=z,I.hemisphereLights.needsUpdate=z}function kf(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,z,W){const X=Me.get(I);X.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Me.get(I.texture).__webglTexture=z,Me.get(I.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,z){const W=Me.get(I);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const Bf=N.createFramebuffer();this.setRenderTarget=function(I,z=0,W=0){L=I,M=z,T=W;let X=!0,H=null,ie=!1,de=!1;if(I){const ge=Me.get(I);if(ge.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(ge.__webglFramebuffer===void 0)qe.setupRenderTarget(I);else if(ge.__hasExternalTextures)qe.rebindTextures(I,Me.get(I.texture).__webglTexture,Me.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ie=I.depthTexture;if(ge.__boundDepthTexture!==Ie){if(Ie!==null&&Me.has(Ie)&&(I.width!==Ie.image.width||I.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(I)}}const Ue=I.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(de=!0);const Be=Me.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Be[z])?H=Be[z][W]:H=Be[z],ie=!0):I.samples>0&&qe.useMultisampledRTT(I)===!1?H=Me.get(I).__webglMultisampledFramebuffer:Array.isArray(Be)?H=Be[W]:H=Be,A.copy(I.viewport),D.copy(I.scissor),S=I.scissorTest}else A.copy(ue).multiplyScalar(G).floor(),D.copy(Pe).multiplyScalar(G).floor(),S=Se;if(W!==0&&(H=Bf),ye.bindFramebuffer(N.FRAMEBUFFER,H)&&X&&ye.drawBuffers(I,H),ye.viewport(A),ye.scissor(D),ye.setScissorTest(S),ie){const ge=Me.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,ge.__webglTexture,W)}else if(de){const ge=z;for(let Ue=0;Ue<I.textures.length;Ue++){const Be=Me.get(I.textures[Ue]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ue,Be.__webglTexture,W,ge)}}else if(I!==null&&W!==0){const ge=Me.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,W)}E=-1},this.readRenderTargetPixels=function(I,z,W,X,H,ie,de,xe=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Me.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){ye.bindFramebuffer(N.FRAMEBUFFER,ge);try{const Ue=I.textures[xe],Be=Ue.format,Ie=Ue.type;if(!ke.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=I.width-X&&W>=0&&W<=I.height-H&&(I.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe),N.readPixels(z,W,X,H,Re.convert(Be),Re.convert(Ie),ie))}finally{const Ue=L!==null?Me.get(L).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(I,z,W,X,H,ie,de,xe=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Me.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge)if(z>=0&&z<=I.width-X&&W>=0&&W<=I.height-H){ye.bindFramebuffer(N.FRAMEBUFFER,ge);const Ue=I.textures[xe],Be=Ue.format,Ie=Ue.type;if(!ke.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Je),N.bufferData(N.PIXEL_PACK_BUFFER,ie.byteLength,N.STREAM_READ),I.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe),N.readPixels(z,W,X,H,Re.convert(Be),Re.convert(Ie),0);const ht=L!==null?Me.get(L).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,ht);const Dt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await qp(N,Dt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Je),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ie),N.deleteBuffer(Je),N.deleteSync(Dt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,z=null,W=0){const X=Math.pow(2,-W),H=Math.floor(I.image.width*X),ie=Math.floor(I.image.height*X),de=z!==null?z.x:0,xe=z!==null?z.y:0;qe.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,de,xe,H,ie),ye.unbindTexture()};const zf=N.createFramebuffer(),Hf=N.createFramebuffer();this.copyTextureToTexture=function(I,z,W=null,X=null,H=0,ie=null){ie===null&&(H!==0?(Ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=H,H=0):ie=0);let de,xe,ge,Ue,Be,Ie,Je,ht,Dt;const Mt=I.isCompressedTexture?I.mipmaps[ie]:I.image;if(W!==null)de=W.max.x-W.min.x,xe=W.max.y-W.min.y,ge=W.isBox3?W.max.z-W.min.z:1,Ue=W.min.x,Be=W.min.y,Ie=W.isBox3?W.min.z:0;else{const vn=Math.pow(2,-H);de=Math.floor(Mt.width*vn),xe=Math.floor(Mt.height*vn),I.isDataArrayTexture?ge=Mt.depth:I.isData3DTexture?ge=Math.floor(Mt.depth*vn):ge=1,Ue=0,Be=0,Ie=0}X!==null?(Je=X.x,ht=X.y,Dt=X.z):(Je=0,ht=0,Dt=0);const mt=Re.convert(z.format),Le=Re.convert(z.type);let Rt;z.isData3DTexture?(qe.setTexture3D(z,0),Rt=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(qe.setTexture2DArray(z,0),Rt=N.TEXTURE_2D_ARRAY):(qe.setTexture2D(z,0),Rt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const nt=N.getParameter(N.UNPACK_ROW_LENGTH),cn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ji=N.getParameter(N.UNPACK_SKIP_PIXELS),un=N.getParameter(N.UNPACK_SKIP_ROWS),Vs=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ue),N.pixelStorei(N.UNPACK_SKIP_ROWS,Be),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ie);const Ct=I.isDataArrayTexture||I.isData3DTexture,xn=z.isDataArrayTexture||z.isData3DTexture;if(I.isDepthTexture){const vn=Me.get(I),Zt=Me.get(z),ln=Me.get(vn.__renderTarget),jo=Me.get(Zt.__renderTarget);ye.bindFramebuffer(N.READ_FRAMEBUFFER,ln.__webglFramebuffer),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,jo.__webglFramebuffer);for(let Ii=0;Ii<ge;Ii++)Ct&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(I).__webglTexture,H,Ie+Ii),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(z).__webglTexture,ie,Dt+Ii)),N.blitFramebuffer(Ue,Be,de,xe,Je,ht,de,xe,N.DEPTH_BUFFER_BIT,N.NEAREST);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||I.isRenderTargetTexture||Me.has(I)){const vn=Me.get(I),Zt=Me.get(z);ye.bindFramebuffer(N.READ_FRAMEBUFFER,zf),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,Hf);for(let ln=0;ln<ge;ln++)Ct?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vn.__webglTexture,H,Ie+ln):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,vn.__webglTexture,H),xn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Zt.__webglTexture,ie,Dt+ln):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Zt.__webglTexture,ie),H!==0?N.blitFramebuffer(Ue,Be,de,xe,Je,ht,de,xe,N.COLOR_BUFFER_BIT,N.NEAREST):xn?N.copyTexSubImage3D(Rt,ie,Je,ht,Dt+ln,Ue,Be,de,xe):N.copyTexSubImage2D(Rt,ie,Je,ht,Ue,Be,de,xe);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else xn?I.isDataTexture||I.isData3DTexture?N.texSubImage3D(Rt,ie,Je,ht,Dt,de,xe,ge,mt,Le,Mt.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(Rt,ie,Je,ht,Dt,de,xe,ge,mt,Mt.data):N.texSubImage3D(Rt,ie,Je,ht,Dt,de,xe,ge,mt,Le,Mt):I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ie,Je,ht,de,xe,mt,Le,Mt.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ie,Je,ht,Mt.width,Mt.height,mt,Mt.data):N.texSubImage2D(N.TEXTURE_2D,ie,Je,ht,de,xe,mt,Le,Mt);N.pixelStorei(N.UNPACK_ROW_LENGTH,nt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,cn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ji),N.pixelStorei(N.UNPACK_SKIP_ROWS,un),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Vs),ie===0&&z.generateMipmaps&&N.generateMipmap(Rt),ye.unbindTexture()},this.initRenderTarget=function(I){Me.get(I).__webglFramebuffer===void 0&&qe.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?qe.setTextureCube(I,0):I.isData3DTexture?qe.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?qe.setTexture2DArray(I,0):qe.setTexture2D(I,0),ye.unbindTexture()},this.resetState=function(){M=0,T=0,L=null,ye.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function Ur(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new yt;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=vh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const g=vh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function vh(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Vt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function yh(i,e){if(e===xp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ul||e===_d){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Ul)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}let Js;function Wo(){if(Js)return Js;let i=93051;const e=()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296;function t(n,s,r,o=0){let a=null,l=null,c=null;if(typeof document<"u"){const u=document.createElement("canvas");u.width=u.height=512;const h=u.getContext("2d");if(h.fillStyle=r,h.fillRect(0,0,512,512),n==="wood"){for(let _=0;_<1500;_++){const m=e()*512;h.strokeStyle=_%4?"#30291c30":"#d5c29345",h.lineWidth=.4+e()*2,h.beginPath(),h.moveTo(0,m),h.bezierCurveTo(150,m-8+e()*16,330,m-12+e()*24,512,m),h.stroke()}for(let _=0;_<22;_++){const m=e()*512,p=e()*512;h.strokeStyle="#201f19a0",h.lineWidth=.6,h.beginPath(),h.moveTo(m,p),h.lineTo(m+30,p+1),h.lineTo(m+60+e()*100,p-2),h.stroke()}for(let _=0;_<9;_++){const m=e()*512,p=e()*512;h.strokeStyle="#352f2360";for(let x=0;x<4;x++)h.beginPath(),h.ellipse(m,p,8+x*5,1+x*1.5,.05,0,Math.PI*2),h.stroke()}}if(n==="metal"){for(let _=0;_<180;_++){const m=e()*512,p=e()*512,x=1+e()*9;h.fillStyle=_%3?"#625940":"#7c6b4d",h.beginPath();for(let y=0;y<9;y++){const v=y*Math.PI*2/9,b=x*(.5+e()*.5),M=m+Math.cos(v)*b,T=p+Math.sin(v)*b;y?h.lineTo(M,T):h.moveTo(M,T)}h.closePath(),h.fill(),h.strokeStyle="#b4ae8240",h.lineWidth=1,h.stroke()}for(let _=0;_<95;_++){const m=e()*512,p=e()*512;h.strokeStyle="#b4b19d60",h.lineWidth=.5,h.beginPath(),h.moveTo(m,p),h.lineTo(m+e()*32,p+e()*4),h.stroke()}}if(n==="fabric"){for(let _=0;_<512;_+=4)h.fillStyle=_%8?"#d3c5a925":"#3a3f3630",h.fillRect(_,0,1,512),h.fillRect(0,_,512,1);for(let _=0;_<8;_++)h.fillStyle="#656b5b40",h.fillRect(_*64,0,12,512)}if(n==="soil")for(let _=0;_<1200;_++)h.fillStyle=["#2d2d21","#706b49","#4e4a32"][_%3],h.beginPath(),h.ellipse(e()*512,e()*512,1+e()*4,1+e()*3,e()*3,0,7),h.fill();if(n==="stone")for(let _=0;_<150;_++){const m=e()*512,p=e()*512;h.strokeStyle="#5b5c4740",h.lineWidth=.5,h.beginPath(),h.moveTo(m,p),h.lineTo(m+8,p+12),h.lineTo(m+3,p+27),h.stroke()}for(let _=0;_<12e3;_++)h.fillStyle=_%2?"#ede4bf10":"#1d241c18",h.fillRect(e()*512,e()*512,1+e()*2,1+e()*2);const d=h.createLinearGradient(0,280,0,512);d.addColorStop(0,"#272c2000"),d.addColorStop(1,"#252b2465"),h.fillStyle=d,h.fillRect(0,0,512,512),a=new Gt(u),a.colorSpace=tt,a.wrapS=a.wrapT=gn;const f=document.createElement("canvas");f.width=f.height=256;const g=f.getContext("2d");g.fillStyle="#bdbdbd",g.fillRect(0,0,256,256);for(let _=0;_<2500;_++)g.fillStyle=_%2?"#b2b2b2":"#dedede",g.fillRect(e()*256,e()*256,n==="wood"?8+e()*25:1,n==="wood"?.5:1.5);l=new Gt(f),l.wrapS=l.wrapT=gn,c=l}return new pt({name:s,color:a?"#ffffff":r,map:a,bumpMap:l,bumpScale:n==="wood"?.014:.007,roughnessMap:c,roughness:1,metalness:o})}return Js={wood:t("wood","Courtyard old wood","#75664b"),metal:t("metal","Prop chipped painted metal","#4d5c4b",.2),trim:t("stone","Prop worn concrete and fittings","#a6a28a"),soil:t("soil","Prop soil and dirt","#4a4932"),fabric:t("fabric","Prop faded cloth","#9b9c85")},Js.fabric.side=Lt,Js}let La;function Wd(){if(La)return La;const{metal:i,wood:e,trim:t,soil:n}=Wo(),s=i.clone();s.name="Worn blue courtyard paint",s.color.set("#68878d");const r=i.clone();r.name="Worn green courtyard paint",r.color.set("#82936a");const o=new pt({name:"Old tyre rubber",color:"#292b26",roughness:1});let a=null,l=null;if(typeof document<"u"){const h=document.createElement("canvas");h.width=1024,h.height=1024;const d=h.getContext("2d"),f=[["УЛИЦА","ДВОРОВАЯ, 7"],["ПОДЪЕЗД 1","КВ. 1–20"],["ОБЪЯВЛЕНИЯ","УК «НАШ ДОМ»"],["УВАЖАЕМЫЕ ЖИЛЬЦЫ","СОБЛЮДАЙТЕ ЧИСТОТУ"],["САНТЕХНИК","РЕМОНТ · ВЫЗОВ МАСТЕРА"],["ГАРАЖ № 12","ПОСТОРОННИМ НЕ ВХОДИТЬ"],["1 ЭТАЖ","КВАРТИРЫ 1–8"],["ДВЕРЬ ЗАКРЫВАЙТЕ","БЕРЕГИТЕ ТЕПЛО"]];for(let x=0;x<8;x++){const y=x%2*512,v=Math.floor(x/2)*256;if(d.save(),d.translate(y,v),d.fillStyle=x===0?"#254c79":x===1?"#244a3a":"#d4cbb1",d.fillRect(0,0,512,256),d.strokeStyle=x<2?"#c7d2c3":"#777567",d.lineWidth=6,d.strokeRect(12,12,488,232),d.fillStyle=x<2?"#e2e0cf":"#343b35",d.textAlign="center",d.font="bold 28px Arial",d.fillText(f[x][0],256,90),d.font=`bold ${x===0?44:26}px Arial`,d.fillText(f[x][1],256,145),x>1){d.font="18px Arial",d.fillText(x===4?"С 9:00 ДО 18:00 · БЕЗ ВЫХОДНЫХ":"ИНФОРМАЦИЯ ДЛЯ ЖИТЕЛЕЙ",256,190);for(let b=0;b<9;b++)d.fillStyle="#424b3925",d.fillRect(38+b*49,220,1,26)}for(let b=0;b<100;b++){const M=b*71.37%512,T=b*43.19%256;d.fillStyle=b%2?"#3e422f35":"#e8dfbe45",d.fillRect(M,T,b%7+1,b%3+1)}for(const b of[24,488])for(const M of[24,232])d.fillStyle="#46493d",d.beginPath(),d.arc(b,M,4,0,7),d.fill();d.restore()}a=new Gt(h),a.colorSpace=tt;const g=document.createElement("canvas");g.width=g.height=512;const _=g.getContext("2d");_.fillStyle="#aaa89a",_.fillRect(0,0,512,512);let m=711;const p=()=>(m=Math.imul(m,1664525)+1013904223>>>0)/4294967296;for(let x=0;x<15e3;x++)_.fillStyle=x%2?"#e8e4cb22":"#3d423321",_.fillRect(p()*512,p()*512,p()*3+1,p()*3+1);_.fillStyle="#5a5f52",_.fillRect(0,0,5,512),_.fillRect(0,0,512,5),_.fillStyle="#ddd8bc90",_.fillRect(6,6,2,506),_.fillRect(6,6,506,2);for(let x=0;x<65;x++){const y=p()*512,v=15+p()*230,b=_.createLinearGradient(0,5,0,v);b.addColorStop(0,"#3a44313d"),b.addColorStop(1,"#3a443100"),_.fillStyle=b,_.fillRect(y,5,1+p()*6,v)}for(let x=0;x<16;x++){const y=p()*512,v=p()*512;_.strokeStyle="#424b383d",_.lineWidth=.8,_.beginPath(),_.moveTo(y,v),_.lineTo(y+9,v+13),_.lineTo(y+3,v+28),_.stroke()}l=new Gt(g),l.colorSpace=tt,l.wrapS=l.wrapT=gn}const c=new pt({name:"Russian weathered concrete panels",map:l,color:l?"#ffffff":"#aaa89a",roughness:1,bumpMap:l,bumpScale:.012}),u=new pt({name:"Russian enamel plaques and paper notices",map:a,color:a?"#ffffff":"#c4ceb9",roughness:.95});return La={metal:i,wood:e,trim:t,soil:n,blue:s,green:r,rubber:o,panels:c,signs:u}}function sy(i){if(i.userData.russianFacades)return;i.userData.russianFacades=!0,i.updateMatrixWorld(!0);const{panels:e}=Wd();i.traverse(t=>{if(t.isMesh){if((/AIR_CONDITIONER_/.test(t.name)||/FIRE_ESCAPE_/.test(t.name))&&(t.visible=!1),t.parent&&/AIR_CONDITIONER_|FIRE_ESCAPE_/.test(t.parent.name)&&(t.visible=!1),(/FENCE_ROW_/.test(t.name)||/FENCE_ROW_/.test(t.parent?.name??""))&&(t.visible=!1),!Array.isArray(t.material)&&t.material.name==="Light iron"){const n=t.geometry,s=n.attributes.position,r=n.index,o=[],a=new w;for(let l=0;l<(r?.count??s.count);l+=3){const c=[0,1,2].map(u=>r?r.getX(l+u):l+u);c.every(u=>a.fromBufferAttribute(s,u).applyMatrix4(t.matrixWorld).y<=1.3)&&o.push(...c)}t.geometry=n.clone(),t.geometry.setIndex(o),t.geometry.computeBoundingBox(),t.geometry.computeBoundingSphere()}if(!Array.isArray(t.material)&&/COURT_Limestone/.test(t.material.name)){t.material=e,t.geometry=t.geometry.clone();const n=t.geometry.attributes.position,s=t.geometry.attributes.uv,r=t.geometry.attributes.normal,o=new w;for(let a=0;a<n.count;a++)o.fromBufferAttribute(n,a).applyMatrix4(t.matrixWorld),s.setXY(a,(Math.abs(r.getZ(a))>.5?o.x:o.z)/3.25,o.y/2.05);s.needsUpdate=!0}}})}function zl(i,e="street",t=0){if(i.getObjectByName("Russian_neighborhood_details"))return;const n=new gt;n.name="Russian_neighborhood_details";const s=Wd(),r=new Map,o={intercoms:0,notices:0,playground:0},a=(d,f,g,_,m,p=null)=>{p&&d.rotateZ(p),d.translate(g,_,m),r.has(f)||r.set(f,[]),r.get(f).push(d)},l=(d,f,g,_,m,p,x)=>a(new Xt(d,f,g),_,m,p,x),c=(d,f,g,_,m,p)=>{const x=new Jt(m,p),y=x.attributes.uv;for(let v=0;v<y.count;v++)y.setXY(v,(d%2+(.02+y.getX(v)*.96))/2,(3-Math.floor(d/2)+(.02+y.getY(v)*.96))/4);a(x,s.signs,f,g,_)},u=(d,f,g,_)=>{const m=new w(...d),p=new w(...f),x=p.clone().sub(m),y=new Tn(g,g,x.length(),8);y.applyQuaternion(new Ke().setFromUnitVectors(new w(0,1,0),x.normalize()));const v=m.add(p).multiplyScalar(.5);a(y,_,v.x,v.y,v.z)},h=(d,f,g=.95,_=2)=>{l(g-.03,_-.04,.045,s.green,d,_/2,f);for(const p of[-g/2,g/2])l(.035,_+.04,.09,s.metal,d+p,_/2,f+.02);l(g,.035,.09,s.metal,d,_,f+.02),c(1,d-.05,_-.24,f+.029,g*.65,.21);const m=d+g*.32;l(.13,.28,.045,s.metal,m,1.22,f+.05),l(.085,.035,.012,s.rubber,m,1.3,f+.08);for(let p=0;p<4;p++)for(let x=0;x<3;x++)l(.016,.012,.012,s.trim,m-.028+x*.028,1.24-p*.03,f+.08);for(const p of[-.13,.13])u([d+p,.8,f+.08],[d+p,1.1,f+.08],.012,s.metal);l(.34,.025,.04,s.metal,d,.95,f+.08),l(g*.85,.25,.016,s.metal,d,.19,f+.03),c(7,d,1.52,f+.03,g*.68,.19),o.intercoms++};if(e==="street"){for(const f of[3.25,9.75,16.25,22.75])h(f,-3.96);const d=i.getObjectByName("Weathered_street_sign");if(d){const f=d.children.find(g=>g.isMesh&&g.geometry.type==="PlaneGeometry");if(f){const g=f.geometry,_=g.attributes.uv;for(let m=0;m<_.count;m++)_.setXY(m,(.02+_.getX(m)*.96)/2,(3+.02+_.getY(m)*.96)/4);f.material=s.signs}}}else if(e==="courtyard"){h(15.15,-8.815,1.18,2.27),h(23.2,-3.155,1.3,2.3),c(0,23.2,2.5,-3.14,1.1,.32);const d=t%2?19.2:6.1,f=-4.35;for(const g of[-.54,.54])u([d+g,0,f],[d+g,2.05,f],.025,s.metal);l(1.25,1.25,.11,s.blue,d,1.45,f),l(1.1,1.1,.025,s.wood,d,1.45,f+.065),c(2,d,1.91,f+.085,1.02,.22);for(let g=0;g<4;g++)c(g%2?4:3,d-.27+g%2*.54,1.55-Math.floor(g/2)*.4,f+.087,.46,.34);o.notices=4;for(const g of[5.6,20.4]){for(const _ of[-.82,.82])u([g+_,0,-5.12],[g+_,.52,-5.12],.025,s.green);for(const _ of[.17,.43])u([g-.82,_,-5.12],[g+.82,_,-5.12],.02,s.green)}if(t===0){l(2.1,.12,1.7,s.soil,17.6,.06,-4.9);for(const x of[-.88,.88])l(2.25,.22,.12,s.blue,17.6,.14,-4.9+x);for(const x of[-1.06,1.06])l(.12,.22,1.7,s.green,17.6+x,.14,-4.9);u([17.6,0,-4.9],[17.6,2.1,-4.9],.065,s.wood);const m=new bc(1.12,.48,24);a(m,s.green,17.6,2.15,-4.9);const p=new Ri(1.1,.035,5,24);p.rotateX(Math.PI/2),a(p,s.blue,17.6,1.92,-4.9),o.playground++}if(t===3)for(const g of[9,13,17]){l(.045,2.15,.035,s.trim,g,1.12,-5.785);for(const _ of[-1.3,1.3])for(const m of[.55,1.75])l(.17,.055,.06,s.rubber,g+_,m,-5.76);c(5,g,1.67,-5.755,.9,.4)}}else for(const d of[0,13]){c(6,d+2.15,2.15,-3.205,.48,.16),c(2,d+6.9,2.37,-3.16,1.02,.22);for(let f=0;f<6;f++)c(f%2?4:3,d+6.6+f%2*.48,2.13-Math.floor(f/2)*.37,-3.205,.35,.29);c(7,d+.95,1.8,-3.44,.55,.27),o.notices+=6}for(const[d,f]of r){const g=Ur(f);f.forEach(m=>m.dispose());const _=new be(g,d);_.name=d.name,_.castShadow=d!==s.signs,_.receiveShadow=!0,n.add(_)}return n.userData={...o,style:"Russian residential neighborhood"},i.add(n),n}function ry(i,e,t){const n=Math.hypot(i,e),s=Math.min(1,n/t);if(s<.12)return{x:0,y:0};const r=(s-.12)/.88;return{x:i/n*r,y:e/n*r}}class oy{constructor(e,t=()=>!0){this.x=0,this.y=0,this.active=!1,this.pointer=null,this.element=e,this.knob=e.querySelector("#joystick-knob");const n=()=>{this.x=this.y=0,this.active=!1,this.pointer=null,this.knob.style.transform="translate(-50%,-50%)",e.classList.remove("active")};this.reset=n;const s=r=>{if(r.pointerId!==this.pointer)return;if(!t()){n();return}const o=e.getBoundingClientRect(),a=o.width*.35,l=r.clientX-o.left-o.width/2,c=r.clientY-o.top-o.height/2;Object.assign(this,ry(l,c,a));const u=Math.min(1,a/(Math.hypot(l,c)||1));this.knob.style.transform=`translate(calc(-50% + ${l*u}px),calc(-50% + ${c*u}px))`};e.addEventListener("pointerdown",r=>{r.preventDefault(),!(!t()||this.pointer!==null)&&(this.pointer=r.pointerId,this.active=!0,e.setPointerCapture(r.pointerId),e.classList.add("active"),s(r))}),e.addEventListener("pointermove",s);for(const r of["pointerup","pointercancel","lostpointercapture"])e.addEventListener(r,o=>{o.pointerId===this.pointer&&n()});window.addEventListener("blur",n),document.addEventListener("visibilitychange",n),this.observer=new MutationObserver(()=>{t()||n()}),this.observer.observe(document.body,{attributes:!0,attributeFilter:["class"]})}}const Mh=1.15,bh=1.8;function Xd(i,e){Number.isFinite(e)&&e>0&&(i.walkDistance=(i.walkDistance??0)+e)}function ay(i,e,t){return(i/e%1+1)%1*Math.max(0,t-1)}const Sh=new w,wh=new w,Eh=new w,Th=new w,Ah=new Ke,Rh=new Ke;function Nc(i,e,t,n){return n<=0?i.copy(e):n>=1?i.copy(t):(e.decompose(Sh,Ah,Eh),t.decompose(wh,Rh,Th),i.compose(Sh.lerp(wh,n),Ah.slerp(Rh,n).normalize(),Eh.lerp(Th,n)))}const qd=/^(?:hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/;function ly(i){const e=i.endsWith(".l")?".l":i.endsWith(".r")?".r":"",t=e?i.slice(0,-2):i;return t==="shoulder"?"spine_03.x":t==="arm_stretch"?"shoulder"+e:t==="c_arm_twist_offset"||t==="forearm_stretch"?"arm_stretch"+e:t==="forearm_twist"||t==="hand"?"forearm_stretch"+e:t==="thigh_stretch"?"root.x":t==="thigh_twist"||t==="leg_stretch"?"thigh_stretch"+e:t==="leg_twist"||t==="foot"?"leg_stretch"+e:t==="toes_01"?"foot"+e:{"root.x":null,"spine_01.x":"root.x","spine_02.x":"spine_01.x","spine_03.x":"spine_02.x","neck.x":"spine_03.x","c_head.x":"neck.x","head.x":"c_head.x","jawbone.x":"head.x"}[i]}function cy(i){const e=new Map(i.bind.map(l=>[l.name,l])),t=new Set(i.userActions.bones),n=new Map;for(const l of i.bind)t.has(l.name)&&n.set(l.name,{...l,inverse:l.matrix.clone().invert()});for(const l of n.values()){let c=ly(l.name);if(c===void 0){let u=l.bone.parent;for(;u;){const h=u.userData.name??u.name;if(n.has(h)){c=h;break}u=u.parent}}c===void 0&&qd.test(l.name)&&(c="hand"+(l.name.endsWith(".l")?".l":".r")),l.parent=n.get(c)??null}const s=[],r=new Set,o=new Set;function a(l){if(!o.has(l)){if(r.has(l))throw Error("Animation hierarchy cycle");r.add(l),l.parent&&a(l.parent),r.delete(l),o.add(l),s.push(l)}}for(const l of n.values())a(l);for(const l of s){const c=new w,u=new Ke,h=new w;l.matrix.decompose(c,u,h),l.bindRotation=u.normalize(),l.bindFrame=new ee().compose(c,l.bindRotation,new w(1,1,1))}for(const l of s)l.localBind=l.parent?l.parent.bindFrame.clone().invert().multiply(l.matrix):l.matrix.clone(),l.localInverse=l.localBind.clone().invert();i.poseHierarchy=s,i.bindByName=e}function uy(i,e){for(const t of[".l",".r"]){const n=i.bindByName.get("hand"+t),s=n&&e.get(n.bone);if(!s)continue;const r=s.clone().multiply(n.matrix.clone().invert()),o=new w,a=new Ke,l=new w;if(r.decompose(o,a,l),l.toArray().some(d=>d<=1e-8)||Math.max(...l.toArray().map(d=>Math.abs(d-1)))<1e-4)continue;const c=new w().setFromMatrixPosition(s),u=new ee().makeRotationFromQuaternion(a.normalize()),h=new ee().makeTranslation(...c.toArray()).multiply(u).multiply(new ee().makeScale(1/l.x,1/l.y,1/l.z)).multiply(u.clone().invert()).multiply(new ee().makeTranslation(-c.x,-c.y,-c.z));for(const d of i.bind)d.name.endsWith(t)&&qd.test(d.name)&&e.has(d.bone)&&e.get(d.bone).premultiply(h)}}function Da(i,e){const t=new w().setFromMatrixPosition(e),n=new Ke,s=new w;return e.clone().multiply(i.inverse).decompose(new w,n,s),new ee().compose(t,n.normalize().multiply(i.bindRotation),new w(1,1,1))}function hy(i,e,t,n){const s=new Map(t);for(const r of i.poseHierarchy){const o=e.get(r.bone),a=t.get(r.bone);if(!o||!a)continue;const l=r.parent?Da(r.parent,e.get(r.parent.bone)):null,c=r.parent?Da(r.parent,t.get(r.parent.bone)):null,u=l?l.clone().invert().multiply(o):o.clone(),h=c?c.clone().invert().multiply(a):a.clone();u.multiply(r.localInverse),h.multiply(r.localInverse);const d=Nc(new ee,u,h,n).multiply(r.localBind),f=r.parent?Da(r.parent,s.get(r.parent.bone)):null;s.set(r.bone,f?f.clone().multiply(d):d)}return s}function Ch(i,e,t){if(!i.userActions)return;i.poseHierarchy||cy(i);const n=i.visual.matrixWorld.clone().invert(),s=new Map;for(const[c,u]of i.posedWorld)s.set(c,n.clone().multiply(u));uy(i,s),i.motionId!==t&&(i.transitionFrom=i.lastMotion,i.transitionStart=e,i.motionId=t);const r=t==="jab:return"?.14:t==="dodge"||t.includes("_combo:")?.06:.12,o=Math.min(1,Math.max(0,(e-i.transitionStart)/r)),a=o*o*(3-2*o),l=i.transitionFrom&&a<1?hy(i,i.transitionFrom,s,a):s;for(const[c,u]of l)i.posedWorld.get(c).copy(i.visual.matrixWorld).multiply(u);i.lastMotion=l,a===1&&(i.transitionFrom=null)}function Ph(i){for(const e of i.rigid){const t=i.bindByName?.get(e.parentBoneName)??i.bind.find(r=>r.name===e.parentBoneName),n=t&&i.posedWorld.get(t.bone),s=n?n.clone().multiply(t.matrix.clone().invert()).multiply(e.matrix):i.visual.matrixWorld.clone().multiply(e.matrix);e.mesh.matrix.copy(e.mesh.parent.matrixWorld).invert().multiply(s),e.mesh.updateWorldMatrix(!1,!1)}}function dy(i){if(i?.version!==1||!Array.isArray(i.bones)||!i.bones.length||!Number.isFinite(i.fps)||i.fps<=0)throw new Error("Invalid action data");if(!i.clips?.idle||!(i.clips.jab_01||Ds(i).length))throw new Error("Missing authored idle or attack");for(const e of Object.keys(i.clips??{})){const t=i.clips?.[e]?.frames;if(!t?.length||t.some(n=>n.length!==i.bones.length*16||!n.every(Number.isFinite)))throw new Error(`Invalid clip ${e}`)}return i}function Ds(i){return Object.keys(i?.clips??{}).filter(e=>e.endsWith("_combo")&&!e.startsWith("weapon_")).sort((e,t)=>e.localeCompare(t,void 0,{numeric:!0}))}function jd(i){return Object.keys(i?.clips??{}).filter(e=>e.startsWith("weapon_")&&e.endsWith("_combo")).sort()}function fy(i,e){const t=jd(i)[e],n=i?.clips[t];return n?{clip:t,duration:n.duration,cooldown:n.duration,hitAt:n.markers?.hit!==void 0?n.markers.hit/Math.max(1,n.frames.length-1):.52}:null}function Yd(i,e){const t=Ds(i)[e],n=i?.clips[t];if(!n)return null;const s=Math.max(.3,n.duration);return{...t.startsWith("kick")?{range:1.9,damage:18}:{},clip:t,duration:s,cooldown:s,hitAt:n.markers?.hit!==void 0?n.markers.hit/(n.frames.length-1):.9}}function Ih(i,e){i.userActions=dy(e),i.userBoneIndices=new Map(e.bones.map((t,n)=>[t,n*16])),i.walkStride=Lh(i),i.runStride=Lh(i,"run"),i.runSpeed=e.clips.run?i.runStride/e.clips.run.duration*Mh:void 0,i.walkSpeed=e.clips.walk?i.walkStride/e.clips.walk.duration*Mh:void 0,i.closedLoops=new Set(["idle","walk","run","weapon_idle"].filter(t=>{const n=e.clips[t]?.frames;return n?.length&&n[0].every((s,r)=>Math.abs(s-n.at(-1)[r])<1e-5)}))}function Lh(i,e="walk"){const t=i.userActions,n=t.clips[e];let s=0;if(n)for(const a of["foot.l","foot.r"]){const l=i.userBoneIndices.get(a),c=i.bind.find(d=>d.name===a);if(l===void 0||!c)continue;let u=1/0,h=-1/0;for(const d of n.frames){const f=new w().setFromMatrixPosition(new ee().fromArray(d,l).multiply(c.matrix));u=Math.min(u,f.z),h=Math.max(h,f.z)}s=Math.max(s,h-u)}const r=i.height??1.85,o=s*2*i.visual.scale.z;return o>.1?Math.max(r*.35,Math.min(r*.95,o)):r*.65}const po=new ee,Dh=new ee,Uh=new ee,Nh=new ee;function py(i,e,t,n,s=0){return Dh.fromArray(e,s),Uh.fromArray(t,s),Nc(i,Dh,Uh,n)}function Ua(i,e,t,n,s,r){const o=i.userActions.clips[e].frames,a=e==="idle"||e==="walk"||e==="run"||e==="weapon_idle",l=o.length-1,c=(e==="walk"||e==="run")&&Number.isFinite(i.walkDistance)?ay(i.walkDistance,e==="run"?i.runStride:i.walkStride,o.length):a?n*i.userActions.fps%Math.max(1,l):Math.max(0,Math.min(1,t))*l,u=Math.floor(c),h=Math.min(l,u+1);py(r,o[u],o[h],c-u,s);const d=i.closedLoops.has(e)?0:Math.min(8,l*.2);if(a&&d>0&&c>l-d){const f=(c-(l-d))/d;Nh.fromArray(o[0],s),Nc(r,r,Nh,f*f*(3-2*f))}return r}function my(i,e,t,n,s){if(!i.userActions||i.hurt>0||i.dodge>0&&!i.userActions.clips.dodge)return!1;const r=i.dodge>0,o=i.weaponType&&i.userActions.clips.weapon_idle,a=r?"dodge":n==="jab"?i.attackSpec?.clip??Ds(i.userActions)[Math.max(0,(i.combo??1)-1)%Math.max(1,Ds(i.userActions).length)]??"jab_01":i.userActions.clips[n]?n:n==="spray"?"spray":n==="burp"?"burp":n?null:t?i.locomotion==="run"&&i.userActions.clips.run?"run":"walk":o?"weapon_idle":"idle";if(!a||!i.userActions.clips[a])return!1;i.visual.position.y=i.baseVisualY,i.root.updateMatrixWorld(!0);const l=n==="jab"&&!a.endsWith("_combo")&&s>.76,c=l?"idle":a,u=r?Math.max(0,Math.min(1,1-i.dodge/(i.dodgeDuration??.24))):n==="jab"&&!a.endsWith("_combo")?Math.min(1,s/.7):s;function h(g,_){const m=i.userBoneIndices.get(g);return m===void 0?_.identity():Ua(i,c,u,l?0:e,m,_)}const d=o&&(a==="walk"||a==="run");let f;if(d){const g=i.bind.find(_=>_.name==="root.x");if(g){const _=h(g.name,new ee).multiply(g.matrix),m=Ua(i,"weapon_idle",0,e,i.userBoneIndices.get(g.name),new ee).multiply(g.matrix);f=_.multiply(m.invert())}}for(const g of i.bind){h(g.name,po);let _=i.posedWorld.get(g.bone);if(_||(_=new ee,i.posedWorld.set(g.bone,_)),d&&f&&g.name!=="root.x"&&!/^(?:thigh|leg|foot|toes)/.test(g.name)){const p=i.userBoneIndices.get(g.name);p!==void 0&&(Ua(i,"weapon_idle",0,e,p,po),po.premultiply(f))}_.copy(i.visual.matrixWorld).multiply(po).multiply(g.matrix)}return d&&xs(i,"weapon_idle"),a.startsWith("weapon_")&&a.endsWith("_combo")&&xs(i,"weapon_idle"),(a.endsWith("_combo")&&!a.startsWith("weapon_")||a==="spray"||a==="burp"||a==="dodge")&&xs(i),d?"weapon_"+a:l?"jab:return":n==="jab"?a+":"+(i.attackSerial??0):a}function xs(i,e="idle"){if(i.userActions){if(i.referenceFingersByClip??={},!i.referenceFingersByClip[e]){i.referenceFingersByClip[e]=[];const t=(i.userActions.clips[e]??i.userActions.clips.idle).frames[0],n=new Map(i.bind.map(s=>[s.name,s]));for(const s of i.bind){if(!/^(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie)/.test(s.name))continue;const r=s.name.endsWith(".l")?".l":".r",o=n.get("hand"+r),a=i.userBoneIndices.get("hand"+r),l=i.userBoneIndices.get(s.name);if(!o||a===void 0||l===void 0)continue;const c=new ee().fromArray(t,a).multiply(o.matrix),u=new ee().fromArray(t,l).multiply(s.matrix);i.referenceFingersByClip[e].push({bone:s.bone,hand:o.bone,relative:c.invert().multiply(u)})}}i.referenceFingers=i.referenceFingersByClip[e];for(const t of i.referenceFingers){const n=i.posedWorld.get(t.hand);n&&i.posedWorld.get(t.bone).copy(n).multiply(t.relative)}}}function gy(i){const e=Ds(i.userActions);let t=(i.attackSerial??0)%Math.min(2,e.length||2);i.type==="runner"&&(t=(t+1)%Math.min(2,e.length||2)),i.type==="bruiser"&&e.length>2&&(t=2),i.attackSerial=(i.attackSerial??0)+1,i.combo=t+1,i.attackSpec=Yd(i.userActions,t)??null}function _y(i){const e=i.attackSpec?.hitAt??.9;if(i.windup>0)return{kind:"jab",progress:Math.max(0,Math.min(1,1-i.windup/i.spec.windup))*e*.85};if(i.strike>0){const t=Math.max(0,Math.min(1,1-i.strike/.3));return{kind:"jab",progress:t<=.25?e*(.85+.15*t/.25):e+(1-e)*(t-.25)/.75}}return{kind:null,progress:0}}function Kd(i,e){const t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv,r=new w;if(s){for(let o=0;o<t.count;o++)n&&Math.abs(n.getY(o))<.8||(r.fromBufferAttribute(t,o).applyMatrix4(e),s.setXY(o,r.x/2,r.z/2));s.needsUpdate=!0}}function xy(i){i.updateMatrixWorld(!0),i.traverse(e=>{if(!(!e.isMesh||!/asphalt/i.test(e.material?.name??""))){Kd(e.geometry,e.matrixWorld);for(const t of["map","normalMap","roughnessMap","metalnessMap"]){const n=e.material[t];n&&(n.wrapS=n.wrapT=gn,n.repeat.set(1,1),n.offset.set(0,0),n.rotation=0,n.needsUpdate=!0)}}})}function vy(i){i.updateMatrixWorld(!0);const e=new Map;function t(s,r){const o=[];for(let a=0;a<s.length;a++){const l=s[a],c=s[(a+1)%s.length],u=r(l.p),h=r(c.p);if(u>=-1e-6&&o.push(l),u>=0!=h>=0){const d=u/(u-h);o.push({p:l.p.clone().lerp(c.p,d),n:l.n.clone().lerp(c.n,d).normalize(),uv:l.uv.clone().lerp(c.uv,d)})}}return o}i.traverse(s=>{if(!s.isMesh||s.material?.name!=="Pavement tiles")return;const r=s.geometry,o=r.attributes.position,a=r.attributes.normal,l=r.attributes.uv,c=r.index;if(!l)return;const u=new Ge().getNormalMatrix(s.matrixWorld);e.has(s.material)||e.set(s.material,{p:[],n:[],uv:[]});const h=e.get(s.material);for(let d=0;d<(c?.count??o.count);d+=3){const f=[0,1,2].map(g=>{const _=c?c.getX(d+g):d+g;return{p:new w().fromBufferAttribute(o,_).applyMatrix4(s.matrixWorld),n:new w().fromBufferAttribute(a,_).applyMatrix3(u).normalize(),uv:new pe().fromBufferAttribute(l,_)}});for(const g of["front","left","right"]){let _=t(f,m=>g==="front"?m.z-2.35:-1.8-m.z);g!=="front"&&(_=t(_,m=>g==="left"?4.4+(m.z+3.6)*.9-m.x:m.x-(26-4.4-(m.z+3.6)*.9)));for(let m=1;m<_.length-1;m++)for(const p of[_[0],_[m],_[m+1]])h.p.push(...p.p.toArray()),h.n.push(...p.n.toArray()),h.uv.push(...p.uv.toArray())}}});const n=new gt;n.name="Continuous_courtyard_paving";for(const[s,r]of e){if(!r.p.length)continue;const o=new yt;o.setAttribute("position",new ze(r.p,3)),o.setAttribute("normal",new ze(r.n,3)),o.setAttribute("uv",new ze(r.uv,2));const a=new be(o,s);a.receiveShadow=a.castShadow=!0,n.add(a)}return n}function yy(){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=768,i.height=256;const e=i.getContext("2d");e.fillStyle="#394a40",e.fillRect(0,0,768,256),e.strokeStyle="#b7b59b",e.lineWidth=5,e.strokeRect(14,14,740,228),e.strokeStyle="#7d8975",e.lineWidth=2,e.strokeRect(23,23,722,210),e.fillStyle="#d4d0b6",e.textAlign="center",e.font="bold 58px serif",e.fillText("ДВОР № 7",384,112),e.font="24px serif",e.fillText("ЖИЛОЙ КВАРТАЛ · ПРОХОД ВО ДВОР",384,164);let t=781;const n=()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296;for(let r=0;r<450;r++){const o=n()*768,a=n()*256,l=o<32||o>736||a<27||a>229;e.fillStyle=l?"#796043":"#263a3335",e.fillRect(o,a,1+n()*(l?9:2),1+n()*(l?5:1.5))}for(let r=0;r<35;r++){e.strokeStyle="#c3c3a533",e.lineWidth=.7;const o=n()*768,a=n()*256;e.beginPath(),e.moveTo(o,a),e.lineTo(o+n()*45,a+n()*6),e.stroke()}const s=new Gt(i);return s.colorSpace=tt,s}function My(i){if(i.getObjectByName("Weathered_street_sign"))return i.getObjectByName("Weathered_street_sign");i.traverse(_=>{/^SIGN_/i.test(_.name)&&(_.visible=!1)}),i.updateMatrixWorld(!0);const e=[];i.traverse(_=>{_.isMesh&&_.visible&&!Array.isArray(_.material)&&_.geometry.attributes.position&&e.push(_)});const t=new Dc,n=1.4,s=.46;let r=null;for(const _ of[.72,1.15,3.4,5.3,2.78,4.52]){for(const m of[8,11,14,17,20,5,2,23,...Array.from({length:49},(p,x)=>1+x*.5)]){let p=null,x=!0;for(const y of[-n/2,0,n/2])for(const v of[-s/2,0,s/2]){t.set(new w(m+y,_+v,2),new w(0,0,-1));const b=t.intersectObjects(e,!1)[0];if(!b||!/brick|limestone|concrete wall|dampfoundation|plain#9a9b8c|plain#9d9e8c/i.test(b.object.material.name)||b.face.normal.clone().transformDirection(b.object.matrixWorld).z<.95){x=!1;break}if(p!==null&&Math.abs(b.point.z-p)>.025){x=!1;break}p=b.point.z}if(x&&p!==null){r=new w(m,_,p+.055);break}}if(r)break}if(!r)return null;const o=new gt;o.name="Weathered_street_sign",o.position.copy(r);const{metal:a,trim:l}=Wo(),c=[],u=new be(new Xt(n,s,.045),a);u.castShadow=u.receiveShadow=!0,o.add(u);const h=yy(),d=new be(new Jt(n-.065,s-.055),new pt({name:"Weathered enamel courtyard plaque",map:h,color:h?"#ffffff":"#4b5b48",roughness:.88}));d.position.z=.026,d.receiveShadow=!0,o.add(d);for(const _ of[-n/2+.045,n/2-.045])for(const m of[-s/2+.045,s/2-.045]){const p=new Tn(.014,.014,.016,8);p.rotateX(Math.PI/2),p.translate(_,m,.035),c.push(p)}const f=Ur(c);c.forEach(_=>_.dispose());const g=new be(f,l);return o.add(g),i.add(o),i.updateMatrixWorld(!0),o}function dr(i){return i.collisionRadius??(i.type==="bruiser"?.46:i.type==="runner"?.34:.38)}const Zs=1e-5;function $d(i,e,t,n,s=(r,o)=>[r,o]){const r=i.x,o=i.z;if(Math.hypot(e-r,t-o)<1e-10)return 0;const a=n.filter(_=>_!==i&&!(_.health<=0)&&_.collidable!==!1),l=dr(i);let c=r,u=o;for(let _=0;_<8;_++){let m=!1;for(const p of a){let x=c-p.x,y=u-p.z,v=Math.hypot(x,y);const b=l+dr(p)+Zs;if(v>=b-Zs*.1)continue;v<Zs&&(x=r-e,y=o-t,v=Math.hypot(x,y)||1,!x&&!y&&(x=1));const M=b-Math.hypot(c-p.x,u-p.z);[c,u]=s(c+x/v*M,u+y/v*M),m=!0}if(!m)break}let[h,d]=s(e,t),f=h-c,g=d-u;for(let _=0;_<6&&f*f+g*g>1e-14;_++){let m=1,p=null;const x=f*f+g*g;for(const L of a){const E=c-L.x,C=u-L.z,A=l+dr(L),D=E*f+C*g,S=E*E+C*C-A*A;if(D>=0)continue;const O=D*D-x*S;if(O<0)continue;const k=(-D-Math.sqrt(O))/x;k>=-Zs&&k<m&&(m=Math.max(0,k),p=L)}if(!p){[c,u]=s(c+f,u+g);break}const y=Math.max(0,m-Zs/Math.sqrt(x));[c,u]=s(c+f*y,u+g*y),f*=1-m,g*=1-m;const v=c-p.x,b=u-p.z,M=Math.hypot(v,b)||1,T=(f*v+g*b)/M;T<0&&(f-=T*v/M,g-=T*b/M),[h,d]=s(c+f,u+g),f=h-c,g=d-u}return i.x=c,i.z=u,Math.hypot(c-r,u-o)}function by(){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=768,i.height=384;const e=i.getContext("2d");for(let n=0;n<3;n++){if(e.save(),e.translate(n*256,0),e.fillStyle=["#d0c4a6","#b8ad91","#ddd2b5"][n],e.fillRect(0,0,256,384),e.strokeStyle="#80765b",e.lineWidth=1,e.strokeRect(9,9,238,366),e.fillStyle="#4e4c3f",e.textAlign="center",e.font="bold 24px serif",e.fillText(["РАЙОН","ОБЪЯВЛЕНИЯ","ВЕСТИ ДВОРА"][n],128,40,232),e.font="12px serif",e.fillText("ГОРОДСКАЯ ГАЗЕТА",128,58),e.fillRect(14,66,228,3),n===1){e.font="bold 30px sans-serif",e.fillText("КУПЛЮ",128,118),e.fillText("МЕТАЛЛ",128,153);for(let s=0;s<8;s++)e.fillRect(20+s*29,300,1,70),e.fillRect(24+s*29,315,18,3)}else e.fillStyle="#75745f",e.fillRect(15,80,105,78),e.fillStyle="#a39b81",e.beginPath(),e.moveTo(20,145),e.lineTo(54,98),e.lineTo(81,131),e.lineTo(112,105),e.lineTo(112,150),e.fill();e.fillStyle="#68634f";for(let s=0;s<3;s++)for(let r=0;r<24;r++){const o=n===1?175+r*5:178+r*7;if(o>288&&n===1)break;e.fillRect(15+s*78,o,47+(r*17+s*13)%23,1.5)}e.strokeStyle="#f1e5c380",e.lineWidth=2,e.beginPath(),e.moveTo(125,0),e.lineTo(130,384),e.stroke(),e.restore()}const t=new Gt(i);return t.colorSpace=tt,t}class Sy{constructor(e,{lowQuality:t=!1}={}){const n=t?4:6,s=new Jt(1,1.4,3,5),r=new Float32Array(n);for(let a=0;a<n;a++)r[a]=a%3;s.setAttribute("paperStyle",new Cs(r,1)),this.clock={value:0};const o=new pt({name:"Windblown newspapers",map:by(),roughness:1,side:Lt});o.onBeforeCompile=a=>{a.uniforms.paperTime=this.clock,a.vertexShader=`uniform float paperTime; attribute float paperStyle;
`+a.vertexShader,a.vertexShader=a.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv.x=(vMapUv.x+paperStyle)/3.0;
#endif`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.z += sin(position.y*5.0 + paperTime*5.0 + paperStyle*2.0)*0.085 + abs(position.x)*0.12;`)},this.mesh=new Lr(s,o,n),this.mesh.name="Windblown leaflets and newspapers",this.mesh.instanceMatrix.setUsage(Er),this.mesh.frustumCulled=!1,this.mesh.userData.noShadow=!0,this.mesh.visible=!1,e.add(this.mesh),this.items=Array.from({length:n},(a,l)=>({x:(l/n-.5)*48,speed:1.2+l*7%11/10,z:3.5+l%3*.22,phase:l*2.399,size:.14+l*3%5*.015})),this.dummy=new St,this.center=null}update(e,t,n=!0){if(!n){this.mesh.visible=!1,this.center=null;return}if(this.center===null)for(let o=0;o<this.items.length;o++)this.items[o].x=e+(o/this.items.length-.5)*48;this.center=e,this.mesh.visible=!0,this.clock.value+=Math.max(0,Math.min(t,.05));const r=this.clock.value;for(let o=0;o<this.items.length;o++){const a=this.items[o];a.x+=Math.max(0,Math.min(t,.05))*a.speed*(1+.35*Math.sin(r*.8));let l=a.x-e;(l>24||l<-24)&&(l=((l+24)%48+48)%48-24,a.x=e+l);const c=a.phase,u=it.smoothstep(24-Math.abs(l),0,5),h=.5+o%4*.29;this.dummy.position.set(a.x,h+.16*Math.sin(r*1.7+c)+Math.max(0,Math.sin(r*.65+c))*.65,a.z+Math.sin(r*.7+c)*.12),this.dummy.rotation.set(-.7+Math.sin(r*1.8+c)*.8,r*.8+c,Math.sin(r*1.2+c)*.65),this.dummy.scale.setScalar(a.size*u),this.dummy.updateMatrix(),this.mesh.setMatrixAt(o,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}}const Fh="bomzh:compositing:v1",bi={enabled:!0,brightness:0,contrast:1,saturation:1,gamma:1,temperature:0,tint:0,shadows:0,highlights:0,vignette:0,splitStrength:0,shadowColor:"#53677f",highlightColor:"#d9b87a"},Fc={brightness:[-.5,.5,.01],contrast:[.5,1.8,.01],saturation:[0,2,.01],gamma:[.5,1.5,.01],temperature:[-1,1,.01],tint:[-1,1,.01],shadows:[-.4,.4,.01],highlights:[-.4,.4,.01],vignette:[0,.6,.01],splitStrength:[0,.5,.01]},wy={neutral:{...bi},warm:{...bi,contrast:1.08,saturation:.88,temperature:.18,shadows:.04,splitStrength:.09,vignette:.12},cold:{...bi,contrast:1.12,saturation:.75,temperature:-.2,tint:.025,vignette:.13},faded:{...bi,contrast:.88,saturation:.8,shadows:.07,temperature:.06}};function Na(i){const e={...bi};for(const[t,[n,s]]of Object.entries(Fc))Number.isFinite(i?.[t])&&(e[t]=it.clamp(i[t],n,s));for(const t of["shadowColor","highlightColor"])/^#[0-9a-f]{6}$/i.test(i?.[t]??"")&&(e[t]=i[t]);return typeof i?.enabled=="boolean"&&(e.enabled=i.enabled),e}class Ey{constructor(e){this.value={...bi};try{this.storage=e??globalThis.localStorage;const t=JSON.parse(this.storage.getItem(Fh));t?.version===1&&(this.value=Na(t.settings))}catch{}this.uniforms={gradeOn:{value:0},gradeA:{value:new Ze},gradeB:{value:new Ze},gradeC:{value:new w},gradeShadow:{value:new w},gradeHighlight:{value:new w}},this.apply()}get active(){const e=this.value;return e.enabled&&Object.keys(Fc).some(t=>Math.abs(e[t]-bi[t])>1e-6)}apply(){const e=this.value,t=this.uniforms;t.gradeOn.value=this.active?1:0,t.gradeA.value.set(e.brightness,e.contrast,e.saturation,e.gamma),t.gradeB.value.set(e.temperature,e.tint,e.shadows,e.highlights),t.gradeC.value.set(e.vignette,e.splitStrength,0);for(const[n,s]of[["shadowColor","gradeShadow"],["highlightColor","gradeHighlight"]]){const r=new De(e[n]);r.convertLinearToSRGB(),t[s].value.set(r.r,r.g,r.b)}this.onChange?.()}set(e){this.value=Na({...this.value,...e}),this.apply()}reset(){this.value={...bi},this.apply()}save(){try{return this.storage.setItem(Fh,JSON.stringify(this.export())),!0}catch{return!1}}export(){return{version:1,settings:{...this.value}}}import(e){if(e?.version!==1||!e.settings||typeof e.settings!="object"||Array.isArray(e.settings))throw Error("Нужен файл настроек композитинга.");this.value=Na(e.settings),this.apply()}}const Ty=`
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
`;let mo;function Ay(){if(mo)return mo;let i=null,e=null,t=null;if(typeof document<"u"){let n=4189;const s=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296),r=document.createElement("canvas");r.width=256,r.height=512;const o=r.getContext("2d");o.fillStyle="#b0ae96",o.fillRect(0,0,256,512);for(let f=0;f<1700;f++){const g=s()*256,_=s()*512;o.fillStyle=f%3?"#6a645341":"#e4ddbf52",o.fillRect(g,_,.5+s()*3,2+s()*22)}for(let f=0;f<220;f++){const g=s()*256,_=s()*512;o.fillStyle="#565243",o.beginPath(),o.moveTo(g,_),o.lineTo(g+s()*12,_+s()*4),o.lineTo(g+s()*7,_+3+s()*18),o.lineTo(g-3,_+s()*12),o.fill(),o.strokeStyle="#d9d2b0",o.lineWidth=.7,o.stroke()}i=new Gt(r),i.colorSpace=tt;const a=document.createElement("canvas"),l=typeof location<"u"&&new URLSearchParams(location.search).get("quality")==="high",c=l?2:1;a.width=1024*c,a.height=512*c;const u=a.getContext("2d");u.scale(c,c);for(let f=0;f<8;f++){u.save(),u.translate(f%4*256,Math.floor(f/4)*256),u.beginPath(),u.rect(0,0,256,256),u.clip();const g=u.createLinearGradient(0,0,0,256);if(g.addColorStop(0,"#161e1e"),g.addColorStop(.65,["#30382e","#393a30","#303d3d","#3a3530"][f%4]),g.addColorStop(1,"#192420"),u.fillStyle=g,u.fillRect(0,0,256,256),f%4===2){for(let p=30;p<190;p+=12)u.fillStyle=p%24?"#7d8170":"#a4a28a",u.fillRect(4,p,248,7);u.strokeStyle="#4a534a",u.lineWidth=2,u.beginPath(),u.moveTo(54,15),u.lineTo(54,205),u.moveTo(205,15),u.lineTo(205,205),u.stroke()}else for(const p of[0,1]){const x=f%3===0?82:45+f*3;u.save(),p&&(u.translate(256,0),u.scale(-1,1)),u.fillStyle=["#9b9c86","#a4987c","#898f83"][f%3],u.beginPath(),u.moveTo(0,0),u.lineTo(x,0),u.bezierCurveTo(x-8,80,x-25,150,x+5,246),u.lineTo(0,256),u.closePath(),u.fill();for(let y=6;y<x-5;y+=9){const v=u.createLinearGradient(y,0,y+8,0);v.addColorStop(0,"#18211d7a"),v.addColorStop(.6,"#dfdac23b"),v.addColorStop(1,"#4850442b"),u.fillStyle=v,u.fillRect(y,0,7,256)}u.restore()}const _=u.createLinearGradient(0,0,180,256);_.addColorStop(0,"#9caeb64a"),_.addColorStop(.5,"#8daba916"),_.addColorStop(1,"#111b211b"),u.fillStyle=_,u.fillRect(0,0,256,256),u.fillStyle="#a7b5ab12",u.beginPath(),u.moveTo(5,12),u.lineTo(230,12),u.lineTo(145,100),u.lineTo(5,152),u.fill();for(let p=0;p<80;p++){const x=s()*256,y=s()*140,v=20+s()*120,b=u.createLinearGradient(0,y,0,y+v);b.addColorStop(0,"#5f614c65"),b.addColorStop(1,"#666d5500"),u.fillStyle=b,u.fillRect(x,y,.5+s()*2,v)}for(let p=0;p<1500;p++)u.fillStyle=p%3?"#c0b8951f":"#1a242025",u.fillRect(s()*256,s()*256,.5+s()*1.5,.5+s()*2);const m=u.createRadialGradient(128,118,55,128,128,180);if(m.addColorStop(0,"#17201b00"),m.addColorStop(.65,"#20281f2b"),m.addColorStop(1,"#111a16d9"),u.fillStyle=m,u.fillRect(0,0,256,256),u.strokeStyle="#333d2a",u.lineWidth=9,u.strokeRect(4,4,248,248),f===3||f===7){u.strokeStyle="#bbc4b37a",u.lineWidth=.9;const p=f===3?175:65,x=f===3?83:170;for(const[y,v]of[[-45,-80],[75,-35],[-90,55],[25,90]])u.beginPath(),u.moveTo(p,x),u.lineTo(p+y*.35+8,x+v*.4),u.lineTo(p+y,Math.max(0,Math.min(256,x+v))),u.stroke()}u.restore()}e=new Gt(a),e.colorSpace=tt;const h=document.createElement("canvas");h.width=h.height=256;const d=h.getContext("2d");for(let f=0;f<70;f++){const g=10+s()*236,_=5+s()*25,m=45+s()*200,p=d.createLinearGradient(0,_,0,_+m);p.addColorStop(0,"#3e41298c"),p.addColorStop(.4,"#43432d48"),p.addColorStop(1,"#39442f00"),d.fillStyle=p,d.fillRect(g,_,1+s()*5,m)}t=new Gt(h),t.colorSpace=tt}return mo={paint:new pt({name:"Aged window chipped wood",color:"#c8c6ac",map:i,roughness:.94}),pane:new pt({name:"Aged window dusty glass and curtains",color:e?"#ffffff":"#485448",map:e,roughness:.76,metalness:.04}),recess:new pt({name:"Aged window recess and fittings",color:"#353b32",roughness:.9}),drips:new pt({name:"Aged window sill runoff",map:t,transparent:!0,opacity:.8,depthWrite:!1,roughness:1,alphaTest:.015,polygonOffset:!0,polygonOffsetFactor:-3})},mo}function Oc(){const i=Ay(),e=new Map,t=new Map,n={count:0,parts:0,styles:new Set},s=(r,o,a)=>{e.has(o)||e.set(o,[]),e.get(o).push(r.clone().applyMatrix4(a)),n.parts++};return{stats:n,add(r,o,a,l=1.3,c=1.5,u=0,h=0){h=(h%8+8)%8,n.count++,n.styles.add(h);const d=new ee().compose(new w(r,o,a),new Ke().setFromAxisAngle(new w(0,1,0),u),new w(1,1,1)),f=(y,v,b,M,T,L,E)=>{const C=[y,v,b].join(":");t.has(C)||t.set(C,new Xt(y,v,b)),s(t.get(C),M,d.clone().multiply(new ee().makeTranslation(T,L,E)))},g=l-.19,_=c-.2;f(l-.04,c-.04,.025,i.recess,0,0,.01);const m=new Jt(g,_),p=m.attributes.uv;for(let y=0;y<p.count;y++)p.setXY(y,(h%4+(.025+p.getX(y)*.95))/4,(1-Math.floor(h/4)+(.025+p.getY(y)*.95))/2);s(m,i.pane,d.clone().multiply(new ee().makeTranslation(0,0,.031))),m.dispose();for(const y of[-l/2+.045,l/2-.045])f(.09,c,.14,i.paint,y,0,.085);for(const y of[-c/2+.045,c/2-.045])f(l-.1,.09,.14,i.paint,0,y,.085);for(const y of[-g/2+.025,g/2-.025])f(.04,_,.085,i.paint,y,0,.085);for(const y of[-_/2+.025,_/2-.025])f(g,.04,.085,i.paint,0,y,.085);const x=h%3===1?.18*c:.1*c;f(g,.055,.12,i.paint,0,x,.11),f(.047,_,.12,i.paint,h%3===0?-.07:0,0,.11),f(.03,.105,.035,i.recess,(h%3===0?-.07:0)+.012,-.17*c,.18);for(const y of[-.28*c,.3*c])f(.033,.075,.045,i.recess,-l/2+.12,y,.17);if(f(l+.2,.1,.38,i.paint,0,-c/2-.04,.12),f(l+.1,.035,.28,i.recess,0,-c/2-.105,.095),i.drips.map){const y=new Jt(l+.12,.55);s(y,i.drips,d.clone().multiply(new ee().makeTranslation(0,-c/2-.34,.004))),y.dispose()}},finish(){const r=new gt;r.name="Detailed_aged_windows";for(const[o,a]of e){const l=Ur(a);for(const u of a)u.dispose();const c=new be(l,o);c.name=o.name,c.castShadow=o!==i.drips,c.receiveShadow=!0,o===i.drips&&(c.userData.noShadow=!0),r.add(c)}for(const o of t.values())o.dispose();return r.userData.windowCount=n.count,r.userData.windowStyles=n.styles.size,r}}}function Ry(i){const e=i.getObjectByName("Detailed_aged_windows");if(e)return e;i.updateMatrixWorld(!0);const t=Oc(),n=new Set,s=[];if(i.traverse(o=>{if(!o.isMesh||Array.isArray(o.material))return;const a=o.material.name;if(/COURT_Curtains/i.test(a)){s.push(o);return}if(!/COURT_SmokyGlass/i.test(a))return;const l=o.geometry,c=l.attributes.position,u=l.index;for(let h=0;h<(u?.count??c.count);h+=3){const d=[0,1,2].map(x=>new w().fromBufferAttribute(c,u?u.getX(h+x):h+x).applyMatrix4(o.matrixWorld)),f=d[1].clone().sub(d[0]).cross(d[2].clone().sub(d[0])).normalize();if(Math.abs(f.z)<.98)continue;const g=new _n().setFromPoints(d),_=g.getSize(new w),m=g.getCenter(new w);if(_.x<.3||_.x>1.5||_.y<.5||_.y>2||_.z>.03)continue;const p=[m.x,m.y,m.z,_.x,_.y].map(x=>x.toFixed(2)).join(":");n.has(p)||(n.add(p),t.add(m.x,m.y,m.z+.02,_.x+.16,_.y+.16,0,n.size%8))}s.push(o)}),!t.stats.count)return null;for(const o of s)o.visible=!1;const r=t.finish();return r.applyMatrix4(i.matrixWorld.clone().invert()),i.add(r),r}const sr=5,Jd=3,vs=["laundry","basketball","service","garages","market","garden","workshop","sport"],Zd=["Двор с бельём","Баскетбольная площадка","Хозяйственный двор","Гаражный двор","Старый рынок","Зелёный двор","Ремонтный двор","Спортивный двор"],go=sr+Jd;function Hl(i,e="street"){const t=i+(e==="entrance"?sr:0),n=(t%go+go)%go,s=n<sr?"street":"entrance",r=s==="street"?n:n-sr,o=Math.max(0,[1,3,4].indexOf(r)),a=Math.floor(t/go)*3+o,l=(a*5%vs.length+vs.length)%vs.length;return{location:s,section:r,courtyard:s==="street"&&[1,3,4].includes(r),variant:l,last:r===(s==="street"?sr:Jd)-1}}function Cy(i,e="street"){const t=Hl(i,e),n=Hl(i+1,e);return t.location!==n.location?{to:n.location,x:i*26+(t.location==="street"?23.2:15.15),z:-1.45,doorZ:-3.18}:null}let Vl;function Py(){if(Vl)return;let i=null;if(typeof document<"u"){const e=document.createElement("canvas");e.width=128,e.height=256;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,"#93978b"),n.addColorStop(.48,"#ececdb"),n.addColorStop(.52,"#c8cbb9"),n.addColorStop(1,"#818a77"),t.fillStyle=n,t.fillRect(0,0,128,256),t.strokeStyle="#e0e2c28c",t.lineWidth=1.5;for(let s=25;s<256;s+=27)for(const r of[-1,1])t.beginPath(),t.moveTo(64,s),t.quadraticCurveTo(64+r*20,s-15,64+r*60,s-37),t.stroke();t.strokeStyle="#e9e5bb",t.lineWidth=2,t.beginPath(),t.moveTo(64,256),t.lineTo(64,0),t.stroke(),i=new Gt(e),i.colorSpace=tt}Vl=new pt({name:"Vegetation leaves",map:i,vertexColors:!0,side:Lt,roughness:.94})}function Iy(i=1){Py();const e=new gt;e.name="Detailed_vegetation";const t=[],n=[],s=[],r=[];let o=0,a=(i+1)*73856093;const l=()=>(a=Math.imul(a,1664525)+1013904223>>>0)/4294967296;function c(h,d,f){for(let g=0;g<15;g++){const _=l()*Math.PI*2,m=.12+l()*.22,p=.005+l()*.006,x=.025+l()*.09,y=h+(l()-.5)*.2,v=f+(l()-.5)*.2,b=t.length/3,M=new De().setHSL(l()<.2?.12:.23+l()*.035,.25+l()*.18,.14+l()*.12);for(let T=0;T<3;T++){const L=T/2,E=p*(1-L);for(const C of[-1,1]){t.push(y+Math.cos(_)*x*L*L+Math.cos(_+Math.PI/2)*E*C,d+m*L,v+Math.sin(_)*x*L*L+Math.sin(_+Math.PI/2)*E*C);const A=M.clone().multiplyScalar(.65+L*.45);n.push(A.r,A.g,A.b),s.push(C<0?0:1,L)}}r.push(b,b+2,b+1,b+1,b+2,b+3,b+2,b+4,b+3),o++}}function u(){const h=new yt;h.setAttribute("position",new ze(t,3)),h.setAttribute("color",new ze(n,3)),h.setAttribute("uv",new ze(s,2)),h.setIndex(r),h.computeVertexNormals();const d=new be(h,Vl);return d.name="Tapered grass blades",d.castShadow=d.receiveShadow=!0,e.add(d),e.userData.leafCount=o,e}return{grass:c,finish:u}}function Ly(i,e=0){const t=new gt;t.name=`Courtyard_${e}`,t.userData.courtyard=!0,t.userData.locationName=Zd[e],t.userData.theme=vs[e];const n=new Map;i.traverse(A=>{if(A.isMesh)for(const D of Array.isArray(A.material)?A.material:[A.material])n.set(D.name,D)});const s=(A,D,S)=>{const O=[...n.values()].find(F=>A.test(F.name)),k=O?O.clone():new pt({color:S,roughness:.95});k.name=D;for(const F of["map","normalMap","roughnessMap","metalnessMap"])k[F]&&(k[F]=k[F].clone(),k[F].wrapS=k[F].wrapT=gn,k[F].needsUpdate=!0);return k},r=s(/brick/,"Courtyard brick","#896e55"),o=s(/Russian weathered concrete panels|Limestone/,"Courtyard limestone","#a49d84"),a=s(/Asphalt/,"Courtyard asphalt","#64675c"),l=s(/DampFoundation/,"Courtyard damp foundation","#555e4b"),{wood:c,metal:u,trim:h,soil:d,fabric:f}=Wo(),g=Iy(e),_=Oc(),m=new Map,p=new Map;function x(A,D,S,O,k,F,j,G,te=0){const oe=[c,u,h,d,f].includes(k),ue=/Clothes line posts|Exercise|Rear downpipe|Bench fasteners/.test(A),Pe=A==="Hanging laundry",Se=[D,S,O,oe,ue,Pe].join(":");if(!p.has(Se)){let $;if(Pe){$=new Jt(D,S,4,5);const Te=$.attributes.position;for(let at=0;at<Te.count;at++)Te.setZ(at,Math.sin(Te.getX(at)*25)*.025+Math.pow((S/2-Te.getY(at))/S,2)*.055),Te.getY(at)<-S*.4&&Te.setY(at,Te.getY(at)+Math.sin(Te.getX(at)*14)*.025);$.computeVertexNormals()}else if(ue){const Te=Math.max(D,S,O),at=Math.min(D,S,O)/2;$=new Tn(at,at,Te,8),D===Te?$.rotateZ(Math.PI/2):O===Te&&$.rotateX(Math.PI/2)}else $=new Xt(D,S,O);const me=$.attributes.position,Fe=$.attributes.normal,Ee=$.attributes.uv;if(!oe)for(let Te=0;Te<me.count;Te++)Ee.setXY(Te,(Math.abs(Fe.getX(Te))>.5?me.getZ(Te):me.getX(Te))/2,(Math.abs(Fe.getY(Te))>.5?me.getZ(Te):me.getY(Te))/2);p.set(Se,$)}const Qe=p.get(Se),He=new be(Qe,k);He.name=A,He.position.set(F,j,G),He.rotation.y=te,He.updateMatrix();const K=Se+k.uuid;return m.has(K)||m.set(K,{geometry:Qe,material:k,items:[]}),m.get(K).items.push(He),He}x("Subgrade under paving",26,.16,25,a,13,-.2,1.5);for(const[A,D,S,O,k]of[["Continuous road",26,4.54,13,.25],["Recessed yard ground",17,9,13,-6.52]]){const F=x(A,D,.16,S,a,O,-.08,k);Kd(F.geometry,F.matrix)}x("Rear apartment building",17,7.2,.7,[1,4,5,7].includes(e)?o:r,13,3.6,-9.5),x("Rear foundation",17,.55,.78,l,13,.275,-9.43);for(const A of[2.25,23.75])x("Street-facing wing",4.5,7.8,6.1,[2,3,6].includes(e)?o:r,A,3.9,-6.5),x("Wing foundation",4.55,.55,6.15,l,A,.275,-6.48);for(let A=0;A<3;A++)for(const[D,S]of[6.4,9.7,12.8,16.2,19.5].entries())_.add(D===3?17:S,1.65+A*1.9,-9.145,1.3,1.5,0,A*5+D+e*3);for(const A of[0,1])for(let D=0;D<3;D++)for(const[S,O]of[1.25,3.25].entries())A===1&&D===0&&O===3.25||_.add(A?26-O:O,1.6+D*2,-3.445,1.2,1.4,0,A*5+D*2+S+e);x("Wing entrance door",1.42,2.4,.16,u,23.2,1.2,-3.28),x("Wing entrance canopy",1.9,.1,.8,u,23.2,2.65,-2.95);for(const A of[-1,1])for(let D=0;D<3;D++)for(const[S,O]of[-5.2,-7.6].entries())_.add(A<0?4.505:21.495,1.6+D*1.9,O,1.2,1.4,A<0?Math.PI/2:-Math.PI/2,D*3+S+e+(A>0?4:0));x("Low rear path",17,.06,e===1?.55:1.3,o,13,.02,e===1?-8.7:-7.5),x("Rear porch door",1.3,2.35,.18,u,15.15,1.175,-8.94),x("Porch canopy",2.1,.12,1.1,u,15.15,2.65,-8.5);function y(A,D,S=1.3,O=2.35){for(const k of[-S/2-.055,S/2+.055])x("Door casing",.1,O+.12,.18,h,A+k,O/2,D+.06);x("Door lintel",S+.22,.1,.2,h,A,O+.06,D+.06),x("Door threshold",S+.25,.08,.35,o,A,.04,D+.12);for(const k of[.55,1.65]){x("Recessed door panel",S-.2,.78,.025,u,A,k,D+.105);for(const F of[-S/2+.09,S/2-.09])x("Door raised edging",.025,.8,.035,h,A+F,k,D+.125)}x("Door lock plate",.11,.28,.04,h,A+S*.3,1.05,D+.14),x("Door handle",.15,.035,.09,u,A+S*.27,1.1,D+.2);for(const k of[.35,1.95])x("Door hinge",.055,.16,.08,u,A-S/2+.04,k,D+.16)}y(15.15,-8.94),y(23.2,-3.28,1.42,2.4);const v=(A,D)=>{for(let S=0;S<4;S++)x("Separate bench seat plank",2,.075,.115,c,A,.48+(S===2?.006:0),D-.2+S*.135);for(let S=0;S<3;S++)x("Separate bench back plank",2,.105,.07,c,A,.68+S*.14,D-.28);for(const S of[-.72,.72]){x("Bench legs",.075,.48,.075,u,A+S,.24,D-.18),x("Bench front legs",.075,.48,.075,u,A+S,.24,D+.18),x("Bench foot",.18,.06,.55,u,A+S,.04,D),x("Seat mounting rail",.09,.08,.55,u,A+S,.4,D),x("Back mounting rail",.07,.65,.06,u,A+S,.67,D-.32);for(const O of[.68,.82,.96])x("Bench fasteners",.035,.035,.025,h,A+S,O,D-.235)}};e!==1&&v(7.6,-5.2),e===0&&v(18.1,-6.3);function b(A,D,S,O,k){for(let F=0;F<Math.ceil(O/.22);F++)for(let j=0;j<Math.ceil(S/.22);j++)g.grass(A-S/2+.1+j*.22,k,D-O/2+.1+F*.22)}for(const A of[5.6,20.4]){for(const D of[-.65,.65])x("Planter long kerb",1.6,.28,.1,o,A,.14,-5.9+D);for(const D of[-.75,.75])x("Planter end kerb",.1,.28,1.2,o,A+D,.14,-5.9);x("Planter soil",1.4,.07,1.2,d,A,.24,-5.9),b(A,-5.9,1.3,1.1,.28)}function M(A,D,S,O=.7,k=.4,F=.65){for(const j of[-F/2,F/2])for(let G=0;G<3;G++)x("Crate side slat",O,k/3-.02,.045,c,A,D+G*k/3+k/6,S+j);for(const j of[-O/2,O/2])for(let G=0;G<3;G++)x("Crate end slat",.045,k/3-.02,F,c,A+j,D+G*k/3+k/6,S);for(const j of[-O/2+.04,O/2-.04])for(const G of[-F/2+.04,F/2-.04])x("Crate corner support",.06,k,.06,c,A+j,D+k/2,S+G);for(let j=0;j<4;j++)x("Crate floor plank",O/4-.015,.035,F,c,A-O/2+(j+.5)*O/4,D+.025,S)}if(e===0){for(const A of[10.8,13.1])x("Clothes line posts",.06,3,.06,u,A,1.5,-6.3);x("Clothes line",2.3,.022,.022,u,11.95,2.8,-6.3);for(let A=0;A<3;A++)x("Hanging laundry",.5,.75,.025,f,11.25+A*.65,2.4,-6.3)}if(e===1){let O=function(F,j,G,te,oe,ue,Pe){const Se=new be(j,G);Se.name=F,Se.position.set(te,oe,ue),Pe&&Se.rotation.set(...Pe),Se.updateMatrix(),m.set(F,{geometry:j,material:G,items:[Se]})},k=function(F,j,G,te,oe=u){const ue=new w(...j),Pe=new w(...G),Se=Pe.clone().sub(ue),Qe=new Tn(te,te,Se.length(),5);Qe.applyQuaternion(new Ke().setFromUnitVectors(new w(0,1,0),Se.normalize()));const He=ue.add(Pe).multiplyScalar(.5);O(F,Qe,oe,He.x,He.y,He.z)};t.userData.basketballCourt=!0;const A=h,D=d,S=c;x("Worn court surface",12.2,.018,4.9,D,13,.012,-5.95);for(const F of[-8.25,-3.65])x("Court sideline "+F,11.6,.006,.035,A,13,.025,F);for(const F of[7.2,18.8,13])x("Court line "+F,.035,.006,4.6,A,F,.025,-5.95);O("Centre circle",new hi(.74,.775,40),A,13,.029,-5.95,[-Math.PI/2,0,0]);for(const F of[-1,1]){const j=13+F*5.8,G=j-F*2.15;for(const Se of[-6.95,-4.95])x("Key edge "+F+Se,2.15,.006,.035,A,(j+G)/2,.027,Se);x("Free throw line "+F,.035,.006,2,A,G,.027,-5.95),O("Free throw arc "+F,new hi(.98,1.015,28,1,F<0?-Math.PI/2:Math.PI/2,Math.PI),A,G,.03,-5.95,[-Math.PI/2,0,0]);const te=j+F*.22,oe=j-F*.18,ue=j-F*.6;k("Basket post "+F,[te,0,-5.95],[te,3.65,-5.95],.065),k("Basket support "+F,[te,3.45,-5.95],[oe,3.45,-5.95],.045),x("Aged backboard "+F,.085,1.05,1.6,h,oe,3.22,-5.95);const Pe=oe-F*.05;for(const Se of[-6.26,-5.64])x("Target vertical "+F+Se,.016,.42,.025,u,Pe,3.1,Se);for(const Se of[2.9,3.3])x("Target horizontal "+F+Se,.016,.025,.64,u,Pe,Se,-5.95);O("Basket rim "+F,new Ri(.24,.018,5,24),S,ue,2.89,-5.95,[Math.PI/2,0,0]);for(let Se=0;Se<10;Se++){const Qe=Se*Math.PI/5,He=Qe+Math.PI/5;k("Net "+F+":"+Se,[ue+Math.cos(Qe)*.23,2.88,-5.95+Math.sin(Qe)*.23],[ue+Math.cos(He)*.13,2.52,-5.95+Math.sin(He)*.13],.007,A)}}for(let F=0;F<=6;F++){const j=6.7+F*2.1;k("Fence post "+F,[j,0,-8.65],[j,2.25,-8.65],.026)}for(const F of[.2,1.1,2.15])k("Fence rail "+F,[6.7,F,-8.65],[19.3,F,-8.65],.014);for(let F=0;F<63;F++){const j=6.7+F*.2;k("Fence wire "+F,[j,.2,-8.65],[j,2.15,-8.65],.004)}v(19.4,-7.5)}if(e===2){x("Service dumpster",1.6,.95,1.1,u,11.6,.65,-5.8);for(const A of[-.83,.83])x("Dumpster rim",.06,.1,1.16,u,11.6+A,1.16,-5.8);for(const A of[-.58,.58])x("Dumpster rim",1.7,.1,.06,u,11.6,1.16,-5.8+A);for(const A of[-.4,0,.4])x("Dumpster reinforcement ribs",.045,.74,.04,u,11.6+A,.65,-5.23);for(const A of[-.65,.65])for(const D of[-.4,.4])x("Dumpster casters",.13,.2,.16,u,11.6+A,.1,-5.8+D);x("Dumpster lid",1.72,.07,1.22,u,11.6,1.27,-5.8),x("Dumpster handle",.35,.05,.1,h,11.6,1.28,-5.13);for(let A=0;A<4;A++){for(let D=0;D<5;D++)x("Pallet top boards",.22,.04,.9,c,17.5+D*.25,.16+A*.15,-5.4);for(const D of[-.33,0,.33])x("Pallet stringers",1.25,.09,.09,c,18,.1+A*.15,-5.4+D)}}if(e===3){for(let A=0;A<3;A++){const D=9+A*4;x("Garage block",3.7,2.7,2.4,A%2?r:o,D,1.35,-7.1),x("Garage roof",3.95,.16,2.65,u,D,2.78,-7.1),x("Steel double garage doors",3.05,2.25,.08,u,D,1.15,-5.85);for(const S of[-1.62,1.62])x("Garage door jamb",.12,2.5,.14,h,D+S,1.25,-5.77);x("Garage door handle",.26,.04,.08,h,D,.95,-5.72);for(const S of[-.77,.77])for(const O of[.3,2])x("Garage door reinforcement",1.4,.045,.035,u,D+S,O,-5.79)}for(let A=0;A<3;A++)M(18.8,A*.4,-5.2,.6)}if(e===4)for(let A=0;A<3;A++){const D=9.3+A*3.7;for(const S of[-1.3,1.3])x("Market stall posts",.07,2.4,.07,u,D+S,1.2,-6.5);for(let S=0;S<5;S++)x("Market counter planks",2.85,.08,.205,c,D,.9,-6.65+S*.23);x("Market awning",3.1,.12,1.9,A%2?u:h,D,2.45,-6.4);for(let S=0;S<3;S++)M(D-.85+S*.85,.99,-6.2,.7,.3,.7)}if(e===5){for(const A of[9.7,16.8]){for(const D of[-.95,.95])for(let S=0;S<3;S++)x("Grass bed side boards",3,.09,.08,c,A,.06+S*.11,-6.4+D);for(const D of[-1.46,1.46])for(let S=0;S<3;S++)x("Grass bed end boards",.08,.09,1.8,c,A+D,.06+S*.11,-6.4);x("Grass bed soil",2.8,.08,1.8,d,A,.24,-6.4),b(A,-6.4,2.65,1.65,.29)}for(let A=0;A<7;A++)x("Garden stepping stones",.65,.04,.65,o,13,.02,-4.2-A*.55);v(13,-8.15)}if(e===6){x("Workshop shed",7,2.9,2.4,r,13,1.45,-7.45),x("Workshop roof",7.4,.18,2.8,u,13,2.98,-7.45),x("Workshop double doors",3.4,2.35,.1,c,13,1.175,-6.18);for(const A of[12.25,13.75])x("Workshop door handles",.06,.32,.06,u,A,1.1,-6.1);for(let A=0;A<4;A++)x("Workbench top planks",2.6,.09,.19,c,18,.95,-6+A*.21);for(const A of[17,19])x("Workbench legs",.09,.9,.65,u,A,.45,-5.7);for(let A=0;A<5;A++)x("Stored metal beams",2.7,.08,.1,u,8,.15+A*.13,-5.9+A*.12)}if(e===7){for(const A of[9.5,12.8,16.1]){for(const D of[-1.2,1.2])x("Exercise bar supports",.09,2.5,.09,u,A+D,1.25,-6.7);x("Exercise overhead bar",2.5,.08,.08,u,A,2.5,-6.7)}for(let A=0;A<8;A++)x("Wall ladder rungs",2.4,.045,.055,c,12.8,.3+A*.29,-6.7);for(const A of[10,16]){x("Training bench",1.8,.12,.55,c,A,.5,-4.8);for(const D of[-.65,.65])x("Training bench feet",.08,.5,.45,u,A+D,.25,-4.8)}}for(let A=0;A<3;A++)x("Rear downpipe",.09,6.8,.1,u,5.2+A*7.5,3.4,-9.06);const T=new Map;let L=0;for(const{geometry:A,material:D,items:S}of m.values()){T.has(D)||T.set(D,[]);for(const O of S)T.get(D).push(A.clone().applyMatrix4(O.matrix)),L++}for(const[A,D]of T){if(D.some(k=>!!k.index)!==D.every(k=>!!k.index)){for(let k=0;k<D.length;k++)if(D[k].index){const F=D[k];D[k]=F.toNonIndexed(),F.dispose()}}const S=Ur(D);for(const k of D)k.dispose();const O=new be(S,A);O.castShadow=!0,O.receiveShadow=!0,O.name=A.name,t.add(O)}const E=_.finish();t.add(...E.children.slice()),t.userData.windowCount=_.stats.count,t.userData.windowStyles=_.stats.styles.size,t.userData.staticBoxes=L+_.stats.parts,t.add(g.finish());const C=vy(i);return t.add(...C.children.slice()),t}class Dy{constructor(e){this.root=new gt,this.root.visible=!1,e.add(this.root);const{metal:t,trim:n}=Wo(),s=(r,o,a,l,c,u,h)=>{const d=new be(new Xt(r,o,a),l);d.position.set(c,u,h),d.castShadow=!0,this.root.add(d)};s(1.45,2.45,.2,t,0,1.225,-3.14);for(const r of[-.78,.78])s(.12,2.6,.27,n,r,1.3,-3.09);s(1.68,.12,.27,n,0,2.6,-3.09),s(.18,.04,.08,n,.43,1.05,-2.99);for(const r of[.55,1.7]){s(1.16,.75,.035,t,0,r,-3.015);for(const o of[-.6,.6])s(.025,.77,.04,n,o,r,-2.985)}s(.1,.24,.04,n,.45,1.05,-2.97);for(const r of[.35,2.1])s(.06,.15,.07,t,-.68,r,-2.98);this.sign=new be(new Jt(1.65,.37),new Ft({color:"#d8dbb9"})),this.sign.position.set(0,2.92,-3),this.root.add(this.sign),this.maps={};for(const[r,o]of[["entrance","ПОДЪЕЗД"],["street","ВЫХОД ВО ДВОР"]])if(typeof document<"u"){const a=document.createElement("canvas");a.width=512,a.height=128;const l=a.getContext("2d");l.fillStyle=r==="street"?"#3c5b45":"#313e36",l.fillRect(0,0,512,128),l.strokeStyle="#d7ceb0",l.lineWidth=6,l.strokeRect(6,6,500,116),l.fillStyle="#e9e2c8",l.font="bold 46px Arial",l.textAlign="center",l.fillText(o,256,82,470),this.maps[r]=new Gt(a),this.maps[r].colorSpace=tt}this.marker=new be(new hi(.38,.44,32),new Ft({color:"#e2c36a",transparent:!0,opacity:.75,depthWrite:!1,side:Lt})),this.marker.rotation.x=-Math.PI/2,this.marker.position.set(0,.018,-1.45),this.root.add(this.marker)}set(e){this.exit=e,this.root.visible=!!e,e&&(this.root.position.x=e.x,this.sign.material.map=this.maps[e.to]??null,this.sign.material.needsUpdate=!0)}near(e){return!!this.exit&&Math.hypot(e.x-this.exit.x,e.z-this.exit.z)<1.4}update(e){this.marker.material.opacity=.55+Math.sin(e*3)*.18}}class Uy extends yt{constructor(e=new be,t=new w,n=new an,s=new w(1,1,1)){super();const r=[],o=[],a=[],l=new w,c=new Ge().getNormalMatrix(e.matrixWorld),u=new ee;u.makeRotationFromEuler(n),u.setPosition(t);const h=new ee;h.copy(u).invert(),d(),this.setAttribute("position",new ze(r,3)),this.setAttribute("uv",new ze(a,2)),o.length>0&&this.setAttribute("normal",new ze(o,3));function d(){let m=[];const p=new w,x=new w,y=e.geometry,v=y.attributes.position,b=y.attributes.normal;if(y.index!==null){const M=y.index;for(let T=0;T<M.count;T++)p.fromBufferAttribute(v,M.getX(T)),b?(x.fromBufferAttribute(b,M.getX(T)),f(m,p,x)):f(m,p)}else{if(v===void 0)return;for(let M=0;M<v.count;M++)p.fromBufferAttribute(v,M),b?(x.fromBufferAttribute(b,M),f(m,p,x)):f(m,p)}m=g(m,l.set(1,0,0)),m=g(m,l.set(-1,0,0)),m=g(m,l.set(0,1,0)),m=g(m,l.set(0,-1,0)),m=g(m,l.set(0,0,1)),m=g(m,l.set(0,0,-1));for(let M=0;M<m.length;M++){const T=m[M];a.push(.5+T.position.x/s.x,.5+T.position.y/s.y),T.position.applyMatrix4(u),r.push(T.position.x,T.position.y,T.position.z),T.normal!==null&&o.push(T.normal.x,T.normal.y,T.normal.z)}}function f(m,p,x=null){p.applyMatrix4(e.matrixWorld),p.applyMatrix4(h),x?(x.applyNormalMatrix(c),m.push(new Fa(p.clone(),x.clone()))):m.push(new Fa(p.clone()))}function g(m,p){const x=[],y=.5*Math.abs(s.dot(p));for(let v=0;v<m.length;v+=3){let b=0,M,T,L,E;const C=m[v+0].position.dot(p)-y,A=m[v+1].position.dot(p)-y,D=m[v+2].position.dot(p)-y,S=C>0,O=A>0,k=D>0;switch(b=(S?1:0)+(O?1:0)+(k?1:0),b){case 0:{x.push(m[v]),x.push(m[v+1]),x.push(m[v+2]);break}case 1:{if(S&&(M=m[v+1],T=m[v+2],L=_(m[v],M,p,y),E=_(m[v],T,p,y)),O){M=m[v],T=m[v+2],L=_(m[v+1],M,p,y),E=_(m[v+1],T,p,y),x.push(L),x.push(T.clone()),x.push(M.clone()),x.push(T.clone()),x.push(L.clone()),x.push(E);break}k&&(M=m[v],T=m[v+1],L=_(m[v+2],M,p,y),E=_(m[v+2],T,p,y)),x.push(M.clone()),x.push(T.clone()),x.push(L),x.push(E),x.push(L.clone()),x.push(T.clone());break}case 2:{S||(M=m[v].clone(),T=_(M,m[v+1],p,y),L=_(M,m[v+2],p,y),x.push(M),x.push(T),x.push(L)),O||(M=m[v+1].clone(),T=_(M,m[v+2],p,y),L=_(M,m[v],p,y),x.push(M),x.push(T),x.push(L)),k||(M=m[v+2].clone(),T=_(M,m[v],p,y),L=_(M,m[v+1],p,y),x.push(M),x.push(T),x.push(L));break}}}return x}function _(m,p,x,y){const v=m.position.dot(x)-y,b=p.position.dot(x)-y,M=v/(v-b),T=new w(m.position.x+M*(p.position.x-m.position.x),m.position.y+M*(p.position.y-m.position.y),m.position.z+M*(p.position.z-m.position.z));let L=null;return m.normal!==null&&p.normal!==null&&(L=new w(m.normal.x+M*(p.normal.x-m.normal.x),m.normal.y+M*(p.normal.y-m.normal.y),m.normal.z+M*(p.normal.z-m.normal.z))),new Fa(T,L)}}}class Fa{constructor(e,t=null){this.position=e,this.normal=t}clone(){const e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}}let Qs;function Ny(){if(Qs)return Qs;if(typeof document>"u")return null;const i=document.createElement("canvas"),e=typeof location<"u"&&new URLSearchParams(location.search).get("quality")==="high"?2048:1024;i.width=e,i.height=e/2;const t=i.getContext("2d"),n=e/1024;t.scale(n,n);let s=7149;const r=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296);for(let a=0;a<8;a++){t.save(),t.translate(a%4*256,Math.floor(a/4)*256),t.beginPath(),t.rect(5,5,246,246),t.clip();const l=a>=4;for(let u=0;u<170;u++){const h=10+r()*236,d=15+r()*228,f=6+r()*(l?34:20),g=t.createRadialGradient(h,d,0,h,d,f);g.addColorStop(0,l?"#29322482":"#3c302578"),g.addColorStop(1,"#31352100"),t.fillStyle=g,t.fillRect(h-f,d-f,f*2,f*2)}if(l)for(let u=0;u<650;u++)t.fillStyle=u%3?"#4e5c3458":"#282e2558",t.beginPath(),t.ellipse(14+r()*228,14+r()*228,.5+r()*6,.5+r()*4,r()*3,0,Math.PI*2),t.fill();else for(let u=0;u<85;u++){const h=12+r()*232,d=18+r()*70,f=25+r()*180,g=t.createLinearGradient(0,d,0,d+f);g.addColorStop(0,"#4c3723ad"),g.addColorStop(.45,"#4d422c60"),g.addColorStop(1,"#41452900"),t.fillStyle=g,t.fillRect(h,d,.8+r()*4,f)}for(let u=0;u<1600;u++)t.fillStyle=u%4?"#2c302a38":"#99815a50",t.fillRect(8+r()*240,8+r()*240,.3+r()*1.3,.3+r()*1.8);for(let u=0;u<14;u++){const h=15+r()*220,d=20+r()*215;t.strokeStyle="#292b2560",t.lineWidth=.4+r()*.8,t.beginPath(),t.moveTo(h,d),t.lineTo(h+r()*8,d+10),t.lineTo(h-5,d+17),t.lineTo(h+4,d+26),t.stroke()}t.globalCompositeOperation="destination-out";for(let u=0;u<140;u++)t.fillStyle=`rgba(0,0,0,${.12+r()*.6})`,t.fillRect(8+r()*240,8+r()*240,1+r()*4,.5+r()*2);t.globalCompositeOperation="destination-in";const c=t.createRadialGradient(128,128,55,128,128,127);c.addColorStop(0,"#ffffffff"),c.addColorStop(1,"#ffffff00"),t.fillStyle=c,t.fillRect(0,0,256,256),t.restore()}const o=new Gt(i);return o.colorSpace=tt,o.anisotropy=4,o.name="Shared detailed grime atlas",Qs=new pt({map:o,transparent:!0,alphaTest:.02,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Qs.name="Dirt damp and runoff",Qs}const Fy=/Russian weathered concrete panels|brick|limestone|concrete wall|dampfoundation|entrance aged plaster|entrance chipped green|old wood|entrance doors|courtyard brick|courtyard limestone|courtyard damp foundation|courtyard old wood/i;function Gl(i,e,t=Ny()){if(!t||i.getObjectByName("Surface_wear"))return null;i.updateMatrixWorld(!0);const n=[],s=[];i.traverse(h=>{!h.isMesh||Array.isArray(h.material)||(Fy.test(h.material.name)&&n.push(h),/asphalt|pavement tiles|entrance terrazzo/i.test(h.material.name)&&s.push(h))});const r=new Dc,o=[];let a=0;const l=(h,d,f,g,_,m=0,p=!1)=>{r.set(p?new w(h,2,d):new w(h,d,3),p?new w(0,-1,0):new w(0,0,-1));const x=r.intersectObjects(p?s:n,!1).find(L=>{const E=L.face.normal.clone().transformDirection(L.object.matrixWorld);return p?E.y>.7:E.z>.7});if(!x)return;const y=x.object,v=new be(y.geometry,y.material);if(v.matrixWorld.copy(y.matrixWorld),y.isInstancedMesh){const L=new ee;y.getMatrixAt(x.instanceId,L),v.matrixWorld.multiply(L)}const b=new Uy(v,x.point,new an(p?-Math.PI/2:0,0,m),new w(f,g,.045));if(!b.attributes.position.count){b.dispose();return}const M=b.attributes.uv,T=_-8;for(let L=0;L<M.count;L++)M.setXY(L,(T%4+(6+M.getX(L)*244)/256)/4,(1-Math.floor(T/4)+(6+M.getY(L)*244)/256)/2);o.push(b),a++};if(e==="entrance")for(const h of[0,13]){for(const d of[.9,3.65,5.6,7.05,12.35])l(h+d,.35,1.55,.7,14);for(const d of[2.15,5.1])l(h+d,2.45,1.8,1.25,8);l(h+.55,1.6,.8,2.6,11),l(h+3.25,.8,1.05,1.5,8),l(h+6.6,2.65,1.45,1,9),l(h+2.15,.45,.85,.8,10),l(h+12.1,1.7,.8,2.5,9)}else for(let h=0;h<14;h++)l(.7+h*1.85,.3,2,.65,12+h%4),l(1+h*1.85,1.6,.85,2.15,8+h%4),l(1.6+h*1.8,2.8,1.45,1.4,9);for(let h=0;h<18;h++)l(1+h*1.4,h%2?2.8:-2.55,1.2+h%3*.4,1.6+h%2*.6,8+h%4,h*.4,!0);if(!o.length)return null;const c=Ur(o);for(const h of o)h.dispose();c.applyMatrix4(i.matrixWorld.clone().invert());const u=new be(c,t);return u.name="Surface_wear",u.userData.noShadow=!0,u.userData.patches=a,u.receiveShadow=!0,u.castShadow=!1,i.add(u),u}const Qd={street:"Улица",entrance:"Подъезд"};function Oy(){if(typeof document>"u")return{};let i=93;const e=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),t=n=>{const s=document.createElement("canvas");s.width=s.height=512;const r=s.getContext("2d");r.fillStyle=n==="floor"?"#89857a":"#c1b9a2",r.fillRect(0,0,512,512);for(let a=0;a<3500;a++)r.fillStyle=e()>.5?"#292f2112":"#fff5d318",r.fillRect(e()*512,e()*512,e()*8+1,e()*9+1);if(n==="floor")for(let a=0;a<512;a+=64)for(let l=0;l<512;l+=64)r.fillStyle=(l+a)%128?"#383c3325":"#d4c7ac20",r.fillRect(l+1,a+1,62,62),r.strokeStyle="#33382e80",r.strokeRect(l,a,64,64);else{for(let a=0;a<90;a++){const l=e()*512,c=e()*512;r.fillStyle="#7c786734",r.beginPath(),r.ellipse(l,c,e()*20+2,e()*13+2,e()*3,0,Math.PI*2),r.fill()}r.strokeStyle="#4c52434a";for(let a=0;a<12;a++){let l=e()*512,c=e()*512;r.beginPath(),r.moveTo(l,c);for(let u=0;u<5;u++)l+=(e()-.5)*26,c+=e()*25,r.lineTo(l,c);r.stroke()}}const o=new Gt(s);return o.wrapS=o.wrapT=gn,o.colorSpace=tt,o};return{wall:t("wall"),floor:t("floor")}}function ky(){const i=new gt;i.name="Entrance_26m";const e=Oc(),t=Oy(),n=new Xt(1,1,1),s=new Tn(.022,.022,1,6),r=new Map,o=(y,v,b=null,M={})=>{const T=new pt({color:v,map:b,roughness:.94,...M});return T.name=y,T};t.floor&&t.floor.repeat.set(6.5,5.75),t.wall&&t.wall.repeat.set(3,1.5);const a=o("Entrance aged plaster","#d9cead",t.wall),l=o("Entrance chipped green paint","#748774",t.wall),c=o("Entrance terrazzo","#b3b0a0",t.floor),u=o("Entrance concrete stairs","#8e9182",t.wall),h=o("Entrance painted steel","#4b5c57",null,{metalness:.3}),d=o("Entrance recess","#282e29"),f=o("Entrance doors","#695c44",t.wall),g=o("Entrance paper","#e4d9ba");o("Entrance window glass","#455c66",null,{emissive:"#526f7c",emissiveIntensity:.45});const _=o("Entrance warm lamps","#e4cd8a",null,{emissive:"#ffbf60",emissiveIntensity:2});function m(y,v,b,M,T=null,L=!0){const E=new be(y,v);E.position.fromArray(b),E.scale.fromArray(M),T&&E.rotation.set(...T),E.updateMatrix();const C=y.uuid+v.uuid+L;return r.has(C)||r.set(C,{geometry:y,mat:v,shadow:L,meshes:[]}),r.get(C).meshes.push(E),E}const p=(y,v,b,M,T,L,E,C,A=null,D=!0)=>{const S=m(n,T,[L,E,C],[v,b,M],A,D);return S.name=y,S};p("Continuous level floor",26,.16,23,c,13,-.08,2.5,null,!1);for(let y=0;y<2;y++){const v=y*13;for(const[b,M]of[[3.95,7.9],[12.35,1.3]])p("Plaster upper wall",M,3.1,.24,a,v+b,2.85,-3.6),p("Green lower wall",M,1.3,.25,l,v+b,.65,-3.59),p("Skirting",M,.14,.29,h,v+b,.07,-3.55),p("Paint border",M,.045,.28,h,v+b,1.3,-3.55);for(const b of[7.88,11.72])p("Stairwell side plaster",.2,3.2,3.15,a,v+b,2.9,-5.05),p("Stairwell side green paint",.22,1.3,3.15,l,v+b,.65,-5.05);p("Stairwell ceiling",4,.16,3.25,a,v+9.8,4.5,-5.05,null,!1),p("Stairwell back wall",3.8,4.5,.2,a,v+9.8,2.25,-6.5),p("Stairwell landing",3.8,.16,1,u,v+9.8,1.68,-6.05);for(let b=0;b<12;b++){const M=(b+1)*.14,T=-3.7-b*.2;p("Stair tread",2.15,M,.22,u,v+9.8,M/2,T);for(const L of[-1,1]){const E=v+9.8+L*1.12;p("Stair baluster",.035,.85,.035,h,E,M+.425,T)}}for(const b of[-1,1]){const M=new w(v+9.8+b*1.12,.96,-3.7),T=new w(M.x,2.5,-5.9),L=M.distanceTo(T),E=m(s,h,M.clone().add(T).multiplyScalar(.5).toArray(),[1,L,1]);E.quaternion.setFromUnitVectors(new w(0,1,0),T.sub(M).normalize()),E.updateMatrix()}p("Landing rail",3.5,.06,.06,h,v+9.8,2.5,-6.05);for(let b=0;b<9;b++)p("Landing rail post",.035,.75,.035,h,v+8.2+b*.4,2.13,-6.05);p("Door recess",1.42,2.48,.16,d,v+2.15,1.24,-3.4),p("Apartment door",1.16,2.3,.12,f,v+2.15,1.15,-3.29);for(const b of[-.63,.63])p("Door trim",.09,2.4,.2,h,v+2.15+b,1.2,-3.23);p("Door lintel",1.36,.1,.2,h,v+2.15,2.43,-3.23),p("Door handle",.13,.035,.07,h,v+2.55,1.03,-3.18),p("Peephole",.035,.035,.03,h,v+2.15,1.68,-3.19);for(let b=0;b<2;b++)for(let M=0;M<4;M++){const T=v+4.3+M*.39,L=1.15+b*.42;p("Mailbox frame",.38,.4,.21,d,T,L,-3.35),p("Mailbox door",.34,.35,.025,M%3?h:l,T,L,-3.23),p("Mailbox letter slot",.23,.025,.015,d,T,L+.1,-3.207),p("Mailbox label",.1,.04,.018,g,T,L-.07,-3.2)}p("Noticeboard frame",1.3,1.45,.12,f,v+6.9,1.8,-3.35),p("Noticeboard backing",1.17,1.3,.03,d,v+6.9,1.8,-3.27);for(let b=0;b<6;b++){const M=v+6.6+b%2*.48,T=2.13-Math.floor(b/2)*.37;p("Paper notices",.36,.3,.015,g,M,T,-3.24,[0,0,(b%3-1)*.06]);for(let L=0;L<3;L++)p("Notice ink",.24,.012,.018,h,M,T+.06-L*.045,-3.23)}for(const[b,M]of[2.15,5.1].entries())e.add(v+M,3.28,-3.475,1.7,1.12,0,y*3+b+1);p("Ceiling edge",13,.24,.38,u,v+6.5,4.35,-3.5,null,!1),p("Ceiling soffit",13,.13,4.8,a,v+6.5,4.5,-1.1,null,!1),p("Lamp bracket",.32,.1,.35,h,v+4,3.92,-3.21),p("Warm bulkhead lamp",.21,.26,.12,_,v+4,3.73,-3.15,null,!1);for(let b=0;b<2;b++)p("Old heating pipe",.055,3.8,.055,h,v+.45+b*.13,1.9,-3.28);for(let b=0;b<7;b++)p("Radiator section",.08,.6,.18,g,v+6.15+b*.11,.46,-3.25);for(let b=0;b<7;b++)p("Scattered paper",.16,.007,.12,g,v+1+b*1.7,.009,b%2?2.5:-2.65,[0,b*.8,0],!1)}for(const{geometry:y,mat:v,shadow:b,meshes:M}of r.values()){const T=new Lr(y,v,M.length);for(let L=0;L<M.length;L++)T.setMatrixAt(L,M[L].matrix);T.castShadow=b,T.receiveShadow=!0,T.computeBoundingSphere(),T.name=v.name,i.add(T)}const x=e.finish();return i.add(...x.children.slice()),i.userData.windowCount=e.stats.count,i}function By(i,e,t){const n=new Map([...i.chunks].map(([s,r])=>[s,r.bottles.map(o=>o.taken)]));i.setEnvironment(e),i.update(t);for(const[s,r]of i.chunks){const o=n.get(s);o&&r.bottles.forEach((a,l)=>{o[l]&&(a.taken=!0,a.mesh.visible=!1)})}}const Oh=(i,e)=>(i%e+e)%e;function zy(i,e){const t=6.7+Oh(e*1.37,2.8),n=Oh(i+e*1.91,t);return(n<.055?.12:n<.1?.78:n<.17?.2:n<.22?.62:1)*(.98+.02*Math.sin(i*47+e*3))}function Hy(i){const e={value:0};return i.traverse(t=>{if(!t.isMesh||t.material?.name!=="Entrance warm lamps")return;const n=t.material.clone();n.onBeforeCompile=s=>{s.uniforms.entranceLampTime=e,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying float entranceLampIndex;`).replace("#include <project_vertex>",`#include <project_vertex>
   vec4 lampCenter=vec4(0.,0.,0.,1.);
   #ifdef USE_INSTANCING
    lampCenter=instanceMatrix*lampCenter;
   #endif
   entranceLampIndex=floor((modelMatrix*lampCenter).x/13.);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
   uniform float entranceLampTime;varying float entranceLampIndex;
   float oldLampFlicker(float t,float index){float phase=mod(t+index*1.91,6.7+mod(index*1.37,2.8));
    float dip=phase<.055?.12:phase<.10?.78:phase<.17?.2:phase<.22?.62:1.;
    return dip*(.98+.02*sin(t*47.+index*3.));}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance*=oldLampFlicker(entranceLampTime,entranceLampIndex);`)},n.customProgramCacheKey=()=>"entrance-lamp-flicker-v1",t.material=n}),e}class Vy{constructor({scene:e,lighting:t,sun:n,ambient:s,renderer:r,lampClock:o={value:0}}){Object.assign(this,{scene:e,lighting:t,sun:n,ambient:s,renderer:r,lampClock:o}),this.indoor=!1,this.lights=[0,1].map(()=>{const a=new kd("#ffca83",18,14,2);return a.visible=!1,e.add(a),a})}update(e,t,n=0){if(this.lampClock.value=n,!(e==="entrance")){this.indoor&&this.lighting.apply();for(const a of this.lights)a.visible=!1;this.indoor=!1;return}this.indoor=!0;const r=this.lighting.value;this.sun.intensity=r.sunIntensity*.28,this.sun.color.set("#e8d4a8"),this.sun.position.set(t-4,3.8,3.5),this.sun.target.position.set(t,0,-2),this.ambient.intensity=Math.max(.45,r.ambientIntensity*.65),this.ambient.color.set("#b8b6a1"),this.ambient.groundColor.set("#444c3c"),this.renderer.toneMappingExposure=r.exposure*1.06,this.scene.background.set("#565b50"),this.scene.fog.color.set("#565b50"),this.scene.fog.near=16,this.scene.fog.far=42;const o=Math.floor((t-4)/13)*13+4;this.lights.forEach((a,l)=>{a.visible=!0,a.position.set(o+l*13,3.6,-2.65),a.intensity=18*zy(n,Math.floor((o+l*13)/13))})}}function kc(i,e,t){let n;if(i.visual.traverse(m=>{!n&&m.isSkinnedMesh&&e.test(m.name)&&(n=m)}),!n)return null;const s=n.geometry.attributes.position,r=new ee().copy(i.visual.matrixWorld).invert().multiply(n.matrixWorld),o=new _n,a=new w;for(let m=0;m<s.count;m++)o.expandByPoint(a.fromBufferAttribute(s,m).applyMatrix4(r));const l=o.getSize(new w),c=o.min.clone().add(l.clone().multiply(new w(...t)));let u=0,h=1/0;for(let m=0;m<s.count;m++){a.fromBufferAttribute(s,m).applyMatrix4(r).sub(c);const p=a.x*a.x*3+a.y*a.y*2+a.z*a.z;p<h&&(h=p,u=m)}const d=new w().fromBufferAttribute(s,u).applyMatrix4(n.bindMatrix),f=[];for(let m=0;m<4;m++){const p=n.geometry.attributes.skinWeight.getComponent(u,m),x=n.geometry.attributes.skinIndex.getComponent(u,m);p&&f.push({bone:n.skeleton.bones[x],inverse:n.skeleton.boneInverses[x],weight:p})}const g=new w,_=new ee;return{get(m){m.set(0,0,0);for(const p of f)_.multiplyMatrices(i.posedWorld.get(p.bone)??p.bone.matrixWorld,p.inverse),m.addScaledVector(g.copy(d).applyMatrix4(_),p.weight);return m.applyMatrix4(n.bindMatrixInverse).applyMatrix4(n.matrixWorld)}}}const Oa=(i,e,t)=>(t=it.clamp((t-i)/(e-i),0,1),t*t*(3-2*t));function ef(i,e,t=null){const n=e==="bottle_smash"?{duration:1.25}:i.userActions?.clips[e];return!n||i.pickup?!1:(i.pickup={kind:e,elapsed:0,duration:n.duration,payload:t,applied:!1},!0)}function ps(i){return i.pickup?Math.min(1,i.pickup.elapsed/i.pickup.duration):0}class Gy{constructor(e,t){this.root=new gt;const n=new be(t.body,t.material("#756033")),s=new be(t.label,t.labelMaterial);n.position.y=-.25,s.position.y=.18-.25,this.root.add(n,s),this.body=n,this.label=s,this.root.scale.setScalar(.65),this.root.visible=!1,e.add(this.root),this.reference=new Ke,this.rotation=new Ke}update(e,t){const n=ps(e),s=e.pickup?.kind==="bottle_smash";if(this.root.visible=t&&(s||e.pickup?.kind==="bottle_pickup")&&n>(s?.08:.22)&&n<(s?.55:.95),!this.root.visible){this.serial=null;return}const r=e.bind.find(d=>d.name==="hand.r"),o=r&&e.posedWorld.get(r.bone);if(!o){this.root.visible=!1;return}o.decompose(this.root.position,this.rotation,new w);const a=new w;let l=0;for(const d of["c_middle2.r","c_ring2.r","c_thumb2.r"]){const f=e.bind.find(_=>_.name===d),g=f&&e.posedWorld.get(f.bone);g&&(a.add(new w().setFromMatrixPosition(g)),l++)}l&&this.root.position.copy(a.divideScalar(l)),this.serial!==e.pickup&&(this.serial=e.pickup,this.reference.copy(this.rotation).invert()),this.anchorActor!==e.visual&&(this.anchorActor=e.visual,this.mouth=kc(e,/teeth/i,[.5,.55,1]));const c=new w(0,1,0).applyQuaternion(this.rotation.clone().multiply(this.reference)),u=s?Oa(.16,.44,n):Oa(.35,.49,n)*(1-Oa(.8,.94,n));let h=s?.38:.25;if(this.mouth&&u>0){const d=this.mouth.get(new w);s&&(d.y+=.14);const f=s?this.root.position.clone().sub(d):d.sub(this.root.position),g=f.length();if(g>.015){const _=new Ke().setFromUnitVectors(c,f.normalize());c.applyQuaternion(new Ke().slerp(_,u)),s||(h=it.lerp(.25,it.clamp(.46-g/.65,.17,.32),u))}}this.body.position.y=-h,this.label.position.y=.18-h,this.root.quaternion.setFromUnitVectors(new w(0,1,0),c.normalize())}}const ys=[{id:"hobo",name:"Свой парень",tag:"Легенда района",description:"Знакомый герой в потёртых джинсах.",model:"hero",height:1.85},{id:"fighter",name:"Патрульный",tag:"По другую сторону",description:"Форма и другой силуэт. Здоровье и урон одинаковы у всех.",model:"enemy",height:1.9}],wo=[{id:"original",name:"Оригинал",shirt:"#ffffff",pants:"#ffffff",hat:"#ffffff"},{id:"olive",name:"Хаки",shirt:"#a9b689",pants:"#9aa38d",hat:"#818e6d"},{id:"rust",name:"Ржавчина",shirt:"#c28360",pants:"#ac9d90",hat:"#ba8a61"},{id:"night",name:"Ночной",shirt:"#748fa7",pants:"#7f8c9d",hat:"#8295ab"}],kh="bomzh:appearance:v1";class Wy{constructor(e){try{this.storage=e??globalThis.localStorage;const t=JSON.parse(this.storage.getItem(kh));this.character=ys.some(n=>n.id===t?.character)?t.character:"hobo",this.palette=wo.some(n=>n.id===t?.palette)?t.palette:"original"}catch{this.character="hobo",this.palette="original"}}set(e,t){if(!ys.some(n=>n.id===e)||!wo.some(n=>n.id===t))return!1;this.character=e,this.palette=t;try{this.storage.setItem(kh,JSON.stringify({character:e,palette:t}))}catch{}return!0}apply(e){const t=wo.find(n=>n.id===this.palette);e.visual.traverse(n=>{if(!n.isMesh)return;if(!n.userData.wardrobeMaterials){n.material=Array.isArray(n.material)?n.material.map(o=>o.clone()):n.material.clone(),n.userData.wardrobeMaterials=!0;const r=Array.isArray(n.material)?n.material:[n.material];n.userData.originalColors=r.map(o=>o.color?.clone())}(Array.isArray(n.material)?n.material:[n.material]).forEach((r,o)=>{if(!r.color)return;r.color.copy(n.userData.originalColors[o]);const a=n.name+" "+r.name,l=/shtani|pants|jeans/i.test(a)?t.pants:/hat|shap|cap/i.test(a)?t.hat:/shirt|maika|mayka|tank|uniform/i.test(a)?t.shirt:null;l&&r.color.multiply({isColor:!0,r:parseInt(l.slice(1,3),16)/255,g:parseInt(l.slice(3,5),16)/255,b:parseInt(l.slice(5,7),16)/255})})})}}const Cr=Object.freeze([{id:"classic",name:"Свой парень",price:0,icon:"🧢",description:"Оригинальный образ."},{id:"shades",name:"Тёмные очки",price:60,icon:"🕶️",description:"Круглые очки для серьёзных разборок."},{id:"gold",name:"Король двора",price:180,icon:"👑",description:"Золотые очки и красный шарф."}]),tf="bomzh:wallet:v1",rr=i=>Number.isSafeInteger(i)&&i>=0,Bh=()=>({version:1,coins:0,owned:["classic"],equipped:"classic"});function Xy(i){try{const e=JSON.parse(i.getItem(tf));if(e?.version!==1||!rr(e.coins)||!Array.isArray(e.owned))return Bh();const t=[...new Set(["classic",...e.owned.filter(n=>Cr.some(s=>s.id===n))])];return{version:1,coins:e.coins,owned:t,equipped:t.includes(e.equipped)?e.equipped:"classic"}}catch{return Bh()}}class qy{constructor(e){try{this.storage=e??globalThis.localStorage}catch{}this.profile=Xy(this.storage),this.persistent=!0,this.run=null}save(){try{this.storage.setItem(tf,JSON.stringify(this.profile)),this.persistent=!0}catch{this.persistent=!1}}beginRun(e){return this.run={id:e,earned:0,revived:!1,doubled:!1,closed:!1},this.run}earn(e){return!this.run||this.run.closed||!rr(e)||!rr(this.profile.coins+e)||!rr(this.run.earned+e)?!1:(this.profile.coins+=e,this.run.earned+=e,this.save(),!0)}buy(e){const t=Cr.find(n=>n.id===e);return!t||this.profile.owned.includes(e)?{ok:!1,reason:"owned"}:this.profile.coins<t.price?{ok:!1,reason:"funds"}:(this.profile.coins-=t.price,this.profile.owned.push(e),this.profile.equipped=e,this.save(),{ok:!0})}equip(e){return this.profile.owned.includes(e)?(this.profile.equipped=e,this.save(),!0):!1}claim(e,t){const n=this.run;return!n||n.id!==t||n.closed?!1:e==="revive"?n.revived?!1:(n.revived=!0,!0):e==="double"?n.doubled||n.earned===0||!rr(this.profile.coins+n.earned)?!1:(this.profile.coins+=n.earned,n.doubled=!0,n.closed=!0,this.save(),!0):!1}}const nf=i=>(i=it.clamp(i,0,1),i*i*(3-2*i)),us=[[0,[-.27,1.06,.18],[-.12,.96,.27]],[.3,[-.5,1.72,-.28],[-.15,.66,-.74]],[.4,[-.55,1.65,.35],[-.15,.95,.25]],[.52,[-.22,1.18,.77],[.04,-.42,.91]],[.7,[-.22,.98,.62],[.08,-.7,.7]],[1,[-.27,1.06,.18],[-.12,.96,.27]]];function zh(i=0,e=!1){if(!e)return{wrist:new w(...us[0][1]),direction:new w(...us[0][2]).normalize()};const t=it.clamp(i,0,1);let n=1;for(;n<us.length-1&&t>us[n][0];)n++;const s=us[n-1],r=us[n],o=nf((t-s[0])/(r[0]-s[0]));return{wrist:new w(...s[1]).lerp(new w(...r[1]),o),direction:new w(0,1,0).applyQuaternion(new Ke().setFromUnitVectors(new w(0,1,0),new w(...s[2]).normalize()).slerp(new Ke().setFromUnitVectors(new w(0,1,0),new w(...r[2]).normalize()),o))}}function Wl(i,e){return new ee().makeTranslation(...i.toArray()).multiply(new ee().makeRotationFromQuaternion(e)).multiply(new ee().makeTranslation(...i.clone().negate().toArray()))}function Xl(i,e,t,n){const s=T=>i.bind.find(L=>L.name===T+e),r=s("arm_stretch"),o=s("forearm_stretch"),a=s("hand");if(!r||!o||!a)return;const l=T=>new w().setFromMatrixPosition(i.posedWorld.get(T.bone)),c=l(r),u=l(o),h=l(a),d=c.distanceTo(u),f=u.distanceTo(h),g=t.clone().sub(c),_=it.clamp(g.length(),Math.abs(d-f)+.001,d+f-.002);g.normalize();const m=(d*d-f*f+_*_)/(2*_),p=Math.sqrt(Math.max(0,d*d-m*m)),x=n.clone().sub(c).addScaledVector(g,-n.clone().sub(c).dot(g)).normalize(),y=c.clone().addScaledVector(g,m).addScaledVector(x,p),v=Wl(c,new Ke().setFromUnitVectors(u.clone().sub(c).normalize(),y.clone().sub(c).normalize())),b=h.clone().applyMatrix4(v),M=Wl(y,new Ke().setFromUnitVectors(b.sub(y).normalize(),c.clone().addScaledVector(g,_).sub(y).normalize()));for(const T of i.bind){if(!T.name.endsWith(e))continue;const L=i.posedWorld.get(T.bone);L&&(/^(?:arm_stretch|c_arm_twist_offset)/.test(T.name)?L.premultiply(v):/^(?:forearm|hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/.test(T.name)&&L.premultiply(v).premultiply(M))}}function Hh(i,e,t){const n=zh(e,t),s=a=>i.root.localToWorld(a.clone());Xl(i,".r",s(n.wrist),s(new w(-.65,1.12,.12))),Xl(i,".l",s(new w(.24,1.14,.25)),s(new w(.6,.97,-.05)));const r=i.bind.find(a=>a.name==="hand.r"),o=r&&i.posedWorld.get(r.bone);if(o){if(!i.weaponReferenceRotation){const d=i.userActions,f=d?.bones.indexOf("hand.r"),g=d?new ee().fromArray(d.clips.idle.frames[0],f*16).multiply(r.matrix):r.matrix.clone();i.weaponReferenceRotation=new Ke,g.decompose(new w,i.weaponReferenceRotation,new w)}const a=new Ke;o.decompose(new w,a,new w);const l=zh().direction,c=new Ke().setFromUnitVectors(l,n.direction),u=i.root.getWorldQuaternion(new Ke).multiply(c).multiply(i.weaponReferenceRotation),h=Wl(new w().setFromMatrixPosition(o),u.multiply(a.invert()));for(const d of i.bind)d.name.endsWith(".r")&&/^(?:hand|(?:c_)?(?:thumb|index|middle|ring|pinky|pinkie))/.test(d.name)&&i.posedWorld.get(d.bone)?.premultiply(h)}i.weaponDirection=n.direction}function Vh(i,e){const t=[[0,[-.27,1.06,.18]],[.28,[-.58,1.82,.08]],[.54,[-.29,1.8,.13]],[.66,[-.48,1.82,.15]],[1,[-.27,1.06,.18]]];let n=1;for(;n<t.length-1&&e>t[n][0];)n++;const s=t[n-1],r=t[n],o=nf((e-s[0])/(r[0]-s[0])),a=new w(...s[1]).lerp(new w(...r[1]),o);a.multiplyScalar((i.height??1.85)/1.85),Xl(i,".r",i.root.localToWorld(a),i.root.localToWorld(new w(-.75,1.35,.05)))}function jy(i){const e=new Map((i.bind??[]).map(t=>[t.name,t.bone]));i.ikLegs=new Map;for(const t of["l","r"]){const n=e.get("thigh_stretch."+t),s=e.get("leg_stretch."+t),r=e.get("foot."+t);if(!n||!s||!r)continue;const o={upper:[],lower:[],foot:[]};for(const a of i.bind)a.name.endsWith("."+t)&&(/^(?:c_)?thigh(?:_|\.)/.test(a.name)?o.upper.push(a.bone):/^(?:c_)?leg(?:_|\.)/.test(a.name)?o.lower.push(a.bone):/^(?:c_)?(?:foot|toe)/.test(a.name)&&o.foot.push(a.bone));i.ikLegs.set(t,{hip:n,knee:s,ankle:r,groups:o})}}function Gh(i,e,t,n){const s=new Ke().setFromUnitVectors(e.clone().sub(i).normalize(),n.clone().sub(t).normalize());return new ee().makeTranslation(t.x,t.y,t.z).multiply(new ee().makeRotationFromQuaternion(s)).multiply(new ee().makeTranslation(-i.x,-i.y,-i.z))}function Yy(i,e,t){const n=i.ikLegs.get(e),s=i.posedWorld;if(!n||Math.abs(t)<1e-7)return!1;const r=new w().setFromMatrixPosition(s.get(n.hip)),o=new w().setFromMatrixPosition(s.get(n.knee)),a=new w().setFromMatrixPosition(s.get(n.ankle)),l=a.clone();l.y+=t;const c=r.distanceTo(o),u=o.distanceTo(a),h=c+u-1e-5;if(c<1e-5||u<1e-5)return!1;const d=l.y-r.y;if(Math.abs(d)>h)return!1;const f=new pe(l.x-r.x,l.z-r.z),g=Math.sqrt(Math.max(0,h*h-d*d));f.length()>g&&(f.setLength(g),l.x=r.x+f.x,l.z=r.z+f.y);const _=l.clone().sub(r),m=_.length();_.normalize();const p=new w(0,0,1).applyQuaternion(i.root.quaternion);if(p.addScaledVector(_,-p.dot(_)),p.lengthSq()<1e-8)return!1;p.normalize();const x=(c*c-u*u+m*m)/(2*m),y=Math.sqrt(Math.max(0,c*c-x*x)),v=r.clone().addScaledVector(_,x).addScaledVector(p,y),b={upper:Gh(r,o,r,v),lower:Gh(o,a,v,l),foot:new ee().makeTranslation(l.x-a.x,l.y-a.y,l.z-a.z)};for(const M of["upper","lower","foot"])for(const T of n.groups[M])s.has(T)&&s.get(T).premultiply(b[M]);return!0}function Ky(i){const e=[];i.visual.traverse(n=>{n.isSkinnedMesh&&/shoe|boot/i.test(n.name)&&e.push(n)});let t=1/0;i.groundSamples=[],i.groundJoints=new Map,i.groundPrefixes=new Map;for(const n of e){const s=n.geometry.attributes.position,r=[];let o=1/0;for(let u=0;u<s.count;u++){const h=new w().fromBufferAttribute(s,u).applyMatrix4(n.matrixWorld);o=Math.min(o,h.y),r.push(h)}t=Math.min(t,o);const a=r.map((u,h)=>({p:u,i:h})).filter(u=>u.p.y<=o+.025),l=new Set;for(const[u,h]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]){let d=a[0],f=-1/0;for(const g of a){const _=g.p.x*u+g.p.z*h;_>f&&(f=_,d=g)}d&&l.add(d.i)}let c=0;for(let u=1;u<r.length;u++)r[u].y<r[c].y&&(c=u);l.add(c),i.groundPrefixes.set(n,new ee);for(const u of l){const h=[];for(let f=0;f<4;f++){const g=n.geometry.attributes.skinIndex.getComponent(u,f),_=n.geometry.attributes.skinWeight.getComponent(u,f);if(!_)continue;const m=n.skeleton.bones[g];let p=i.groundJoints.get(m);p||(p={bone:m,inverse:n.skeleton.boneInverses[g],matrix:new ee},i.groundJoints.set(m,p)),h.push({joint:p,weight:_})}const d={l:0,r:0};for(const f of h){const g=f.joint.bone.userData.name??f.joint.bone.name;g.endsWith(".l")&&(d.l+=f.weight),g.endsWith(".r")&&(d.r+=f.weight)}i.groundSamples.push({mesh:n,side:d.l>d.r?"l":"r",position:new w().fromBufferAttribute(s,u).applyMatrix4(n.bindMatrix),joints:h})}}i.groundScratch={p:new w,v:new w},i.stableGroundOffset=Number.isFinite(t)?-t-.035:0,jy(i)}function sf(i){if(!i.groundSamples?.length)return{l:1/0,r:1/0};for(const[s,r]of i.groundPrefixes)r.multiplyMatrices(s.matrixWorld,s.bindMatrixInverse);for(const s of i.groundJoints.values())s.matrix.multiplyMatrices(i.posedWorld.get(s.bone)??s.bone.matrixWorld,s.inverse);const{p:e,v:t}=i.groundScratch,n={l:1/0,r:1/0};for(const s of i.groundSamples){t.set(0,0,0);for(const{joint:r,weight:o}of s.joints)t.addScaledVector(e.copy(s.position).applyMatrix4(r.matrix),o);t.applyMatrix4(i.groundPrefixes.get(s.mesh)),n[s.side]=Math.min(n[s.side],t.y)}return n}function ka(i){const e=sf(i),t=Math.min(e.l,e.r);return Number.isFinite(t)?t:null}function Ba(i,e){for(const t of i.posedWorld.values())t.elements[13]+=e}function Wh(i,e=0,{kind:t=null,time:n=0}={}){const s=ka(i);if(s===null||i.health<=0||i.down>0||Math.abs(i.root.rotation.z)>.3){i.feetY=null;return}if(!t&&i.userActions){const o=e-s,a=Math.max(0,Math.min(.05,n-(i.groundTime??n))),l=i.groundOffset??o,c=Math.max(-.072*a,Math.min(.072*a,(o-l)*(1-Math.exp(-12*a)))),u=i.transitionFrom&&n-(i.transitionStart??-1/0)<.14?o:l+c;Ba(i,u),i.groundOffset=u,i.groundTime=n,i.groundMode="authored",i.feetY=ka(i);return}if(!t&&i.ikLegs?.size===2){const o=i.stableGroundOffset+e;i.groundMode!=="stable"&&(i.groundMode="stable",i.groundBlendStart=n,i.groundBlendFrom=i.groundOffset??o);const a=Math.min(1,Math.max(0,(n-i.groundBlendStart)/.16)),l=a*a*(3-2*a),c=i.groundBlendFrom+(o-i.groundBlendFrom)*l;Ba(i,c),i.groundOffset=c;for(let u=0;u<3;u++){const h=sf(i),d=Math.min(h.l,h.r);for(const f of["l","r"]){const g=h[f];if(!Number.isFinite(g))continue;const _=Math.min(1,Math.max(0,(g-d)/.05)),m=g<e?1:1-_*_*(3-2*_);Yy(i,f,(e-g)*m)}}i.feetY=ka(i);return}i.groundTime=n,i.groundMode="pose";const r=e-s;Ba(i,r),i.groundOffset=r,i.feetY=e}const Xh=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)),qh=(i,e,t)=>i+(e-i)*t,ql={left:[-.5,-1.15,-.06,.08],right:[-.65,-1.05,.06,.08],lean:0,twist:0,drop:0,spin:0};function $y(i,e,t){const n={};for(const s of["left","right"])n[s]=i[s].map((r,o)=>qh(r,e[s][o],Xh(t)));for(const s of["lean","twist","drop","spin"])n[s]=qh(i[s]??0,e[s]??0,Xh(t));return n}const dt=(i={})=>({...ql,...i});function jl(i,e,t,n=0,s=1){if(!t){const c=dt({left:[...ql.left],right:[...ql.right]});if(e)for(const[u,h]of["left","right"].entries()){const d=Math.sin(i*9+u*Math.PI);c[h][0]+=.25*d,c[h][1]+=.15*Math.max(0,-d),c[h][2]=.42*d,c[h][3]=.55*Math.max(0,d)}return c.drop=e?-.008*Math.abs(Math.sin(i*9)):-.005*(1+Math.sin(i*2)),c}const r=s%2===0?"right":"left";let o;t==="finisher"?o=[[0,dt()],[.22,dt({right:[-.15,-.7,.18,.3],left:[-.6,-1.3,-.18,.25],twist:-.3,drop:-.08})],[.37,dt({right:[.15,-1.5,.2,.45],left:[-.8,-1.4,-.25,.3],twist:-.55,lean:.18,drop:-.16})],[1.3/2.8,dt({right:[-1.8,-.15,.15,.12],left:[-.65,-1.2,-.2,.2],twist:.55,lean:-.12,drop:.06})],[.58,dt({right:[-1.75,-.2,.15,.12],twist:.4,lean:-.1,drop:.04})],[.86,dt()],[1,dt()]]:t==="burp"?o=[[0,dt()],[.24,dt({lean:-.18,drop:-.025})],[.4,dt({lean:.38,twist:.1,left:[-.1,-.8,-.06,.08],right:[-.1,-.8,.06,.08]})],[.68,dt({lean:.18})],[1,dt()]]:t==="jab"?o=[[0,dt()],[.25,dt({[r]:[-.15,-1.9,0,.12],twist:-.25,drop:-.025})],[.43,dt({[r]:[-1.65,-.08,-.1,.1],twist:.3,lean:.12})],[.58,dt({[r]:[-1.55,-.12,-.1,.1],twist:.23,lean:.1})],[1,dt()]]:t==="kick"?o=[[0,dt()],[.28,dt({left:[-.9,-1.3,-1,.95],right:[-.2,-1.4,.12,.08],lean:-.12,drop:-.04})],[.48,dt({left:[-.2,-1.25,-1.6,.05],right:[-.85,-1.2,.1,.08],lean:-.25})],[.62,dt({left:[-.2,-1.25,-1.5,.08],lean:-.2})],[.8,dt({left:[-.6,-1.3,-.85,.85],lean:-.1})],[1,dt()]]:o=[[0,dt()],[.2,dt({left:[.15,-1.35,-.12,.18],right:[.15,-1.35,.12,.18],lean:-.12,drop:-.04})],[.8,dt({left:[.15,-1.35,-.12,.18],right:[.15,-1.35,.12,.18],lean:-.12,drop:-.04})],[1,dt()]];const a=Math.max(0,Math.min(1,n));let l=1;for(;l<o.length-1&&a>o[l][0];)l++;return $y(o[l-1][1],o[l][1],(a-o[l-1][0])/(o[l][0]-o[l-1][0]))}const Jy=/forearm|hand|thumb|index|middle|ring|pinky|pinkie/i,Zy=/arm|shoulder|hand|thumb|index|middle|ring|pinky|pinkie/i,Qy=/thigh|leg|foot|toe/i,eM=/leg|foot|toe/i;function za(i,e=0,t=0,n=0){return new ee().makeTranslation(i.x,i.y,i.z).multiply(new ee().makeRotationFromEuler(new an(e,t,n))).multiply(new ee().makeTranslation(-i.x,-i.y,-i.z))}function tM(i){i.root.updateMatrixWorld(!0);const e=i.visual.matrixWorld.clone().invert();i.bind=i.bones.map(({bone:s})=>{const r=s.userData.name??s.name;return{bone:s,name:r,matrix:new ee().multiplyMatrices(e,s.matrixWorld),side:r.endsWith(".l")?"left":"right",group:Zy.test(r)?Jy.test(r)?"forearm":"arm":Qy.test(r)?eM.test(r)?"shin":"leg":"body"}});const t=(s,r)=>{const o=i.bind.find(a=>a.name===s);return o?new w().setFromMatrixPosition(o.matrix):r};i.pivots={hips:t("root.x",new w(0,.5,0))};for(const[s,r]of[["left",".l"],["right",".r"]])i.pivots[s]={shoulder:t("arm"+r,new w),elbow:t("forearm"+r,new w),hip:t("thigh"+r,new w),knee:t("leg"+r,new w),wrist:t("hand"+r,new w)};for(const s of i.bind){const r=s.name.match(/(thumb|index|middle|ring|pinky)([123])(?:_base|_rot)?\.([lr])/);if(s.curledMatrix=s.matrix.clone(),!r)continue;const o=new ee;for(let a=1;a<=Number(r[2]);a++){const l=i.bind.find(f=>f.name===`c_${r[1]}${a}.${r[3]}`);if(!l)continue;const c=new w,u=new Ke,h=new w;l.matrix.decompose(c,u,h);const d=new ee().compose(c,u,new w(1,1,1));o.multiply(d).multiply(new ee().makeRotationX(r[1]==="thumb"?.45:1.15)).multiply(d.clone().invert())}s.curledMatrix.premultiply(o)}i.rigid=[],i.visual.traverse(s=>{if(s.isMesh&&!s.isSkinnedMesh){let r=s.parent;for(;r&&!r.isBone;)r=r.parent;i.rigid.push({mesh:s,parentBoneName:r?r.userData.name??r.name:null,matrix:new ee().multiplyMatrices(e,s.matrixWorld)}),s.matrixAutoUpdate=!1}}),i.posedWorld=new Map;const n=new Set;i.visual.traverse(s=>{s.isSkinnedMesh&&n.add(s.skeleton)});for(const s of n){const r=new ee;s.update=function(){for(let o=0;o<this.bones.length;o++){const a=i.posedWorld.get(this.bones[o])??this.bones[o].matrixWorld;r.multiplyMatrices(a,this.boneInverses[o]).toArray(this.boneMatrices,o*16)}this.boneTexture&&(this.boneTexture.needsUpdate=!0)}}i.animationScratch={desired:new ee},Ky(i)}function ri(i,e,t,n,s){const r=i.weaponType&&!i.userActions?.clips.weapon_idle&&(!n||n==="jab")&&!(i.dodge>0)&&!(i.hurt>0),o=my(i,e,t,n==="bottle_smash"||r&&n==="jab"?null:n,s);if(o)return n==="bottle_smash"&&(Vh(i,s),xs(i,"weapon_idle")),r&&(Hh(i,s,n==="jab"),xs(i)),Ch(i,e,n==="bottle_smash"?"bottle-smash":r?n==="jab"?"weapon-strike:"+i.attackSerial:"weapon-"+o:o),Wh(i,0,{kind:o==="dodge"?"dodge":n,time:e}),Ph(i),jl(e,t,n,s,i.combo??1);const a=t&&Number.isFinite(i.walkDistance)?i.walkDistance/(i.walkStride??(i.height??1.85)*.65)*(2*Math.PI/9):e,l=jl(a,t,n,s,i.combo??1);i.dodge>0&&(l.drop-=.12,l.lean+=.25),i.visual.position.y=i.baseVisualY+l.drop,i.root.updateMatrixWorld(!0);const c=Math.max(i.flash??0,i.hurt??0),u=za(i.pivots.hips,l.lean-c*1.7,l.twist),h={body:u};for(const f of["left","right"]){const g=l[f],_=i.pivots[f],m=f==="left"?1:-1,p=new w(m*.16,-Math.cos(g[0]),-Math.sin(g[0])).normalize(),x=new w(m*.12,-Math.cos(g[0]+g[1]),-Math.sin(g[0]+g[1])).normalize(),y=new Ke().setFromUnitVectors(_.elbow.clone().sub(_.shoulder).normalize(),p),v=new Ke().setFromUnitVectors(_.wrist.clone().sub(_.elbow).normalize(),x.applyQuaternion(y.clone().invert())),b=(M,T)=>new ee().makeTranslation(M.x,M.y,M.z).multiply(new ee().makeRotationFromQuaternion(T)).multiply(new ee().makeTranslation(-M.x,-M.y,-M.z));h["arm"+f]=u.clone().multiply(b(_.shoulder,y)),h["forearm"+f]=h["arm"+f].clone().multiply(b(_.elbow,v)),h["leg"+f]=za(_.hip,g[2]),h["shin"+f]=h["leg"+f].clone().multiply(za(_.knee,g[3]))}const{desired:d}=i.animationScratch;for(const f of i.bind){d.copy(i.visual.matrixWorld).multiply(h[f.group==="body"?"body":f.group+f.side]).multiply(f.curledMatrix);let g=i.posedWorld.get(f.bone);g||(g=new ee,i.posedWorld.set(f.bone,g)),g.copy(d)}if(r){Hh(i,s,n==="jab");const f=n==="jab"?"weapon-strike:"+i.attackSerial:"weapon-carry";i.motionId!==f&&(i.motionId=f,i.transitionStart=e)}return n==="bottle_smash"&&Vh(i,s),xs(i),Ch(i,e,n??(t?"walk":"fallback-idle")),Wh(i,0,{kind:n,time:e}),Ph(i),l}class rf{constructor(e){this.actor=e,this.root=new gt,e.root.add(this.root),this.skin=null,this.head=e.bind.find(t=>t.name==="head.x")??e.bind.find(t=>t.name==="head")}set(e){if(e===this.skin)return;this.skin=e;for(const s of[...this.root.children])this.root.remove(s),s.geometry.dispose(),s.material.dispose();if(e==="classic")return;const t=(s,r,o,a,l)=>{const c=new be(s,new pt({color:r,roughness:.55}));return c.position.set(o,a,l),this.root.add(c),c};this.actor.root.updateMatrixWorld(!0);const n=this.head?new w().setFromMatrixPosition(this.actor.visual.matrixWorld.clone().multiply(this.head.matrix)).applyMatrix4(this.actor.root.matrixWorld.clone().invert()):new w(0,1.55,0);for(const s of[-.1,.1])t(new Ri(.087,.018,6,16),e==="gold"?"#edbc40":"#242928",n.x+s,n.y+.08,n.z+.17),t(new Rr(.07,16),"#243d3c",n.x+s,n.y+.08,n.z+.171);t(new Xt(.07,.025,.025),e==="gold"?"#edbc40":"#242928",n.x,n.y+.08,n.z+.17),e==="gold"&&(t(new Ri(.14,.045,6,20),"#bb3e32",n.x,n.y-.17,n.z).rotation.x=Math.PI/2,t(new Xt(.095,.3,.035),"#bb3e32",n.x-.1,n.y-.32,n.z+.12))}update(){if(!this.head||!this.root.children.length)return;const e=this.actor,t=e.posedWorld.get(this.head.bone);if(!t)return;const n=e.visual.matrixWorld.clone().multiply(this.head.matrix);this.root.matrixAutoUpdate=!1,this.root.matrix.copy(e.root.matrixWorld).invert().multiply(t).multiply(n.invert()).multiply(e.root.matrixWorld),this.root.updateWorldMatrix(!1,!0)}}class nM{constructor({renderer:e,wallet:t,appearance:n,makeActor:s,onStart:r,onOpen:o,record:a}){Object.assign(this,{renderer:e,wallet:t,appearance:n,makeActor:s,onStart:r,onOpen:o,record:a}),this.root=document.getElementById("main-menu"),this.visible=!1,this.tab="home",this.previewSkin=t.profile.equipped,this.scene=new mc,this.scene.background=null,this.scene.add(new Od(15985104,2634795,2.5));const l=new Fo(16769978,3);l.position.set(-3,5,4),this.scene.add(l);const c=new Fo(10205376,2);c.position.set(3,3,-2),this.scene.add(c),this.camera=new $t(33,1,.1,30),this.camera.position.set(3,1.7,5.2),this.camera.lookAt(0,1,0),this.time=0;const u=new be(new Tn(1.05,1.15,.08,40),new pt({color:3620659,roughness:1}));u.position.y=-.06,this.scene.add(u),this.root.querySelectorAll("[data-menu-tab]").forEach(h=>h.onclick=()=>{this.tab=h.dataset.menuTab,this.renderUI()}),document.getElementById("menu-play").onclick=()=>{this.hide(),r()},document.getElementById("menu-turn").oninput=h=>{this.rotation=Number(h.target.value)},this.changeActor()}changeActor(){if(this.actor){this.cosmetics.set("classic"),this.scene.remove(this.actor.root);const t=new Set;this.actor.visual.traverse(n=>{if(n.isSkinnedMesh&&t.add(n.skeleton),n.isMesh&&n.userData.wardrobeMaterials)for(const s of Array.isArray(n.material)?n.material:[n.material])s.dispose()});for(const n of t)n.dispose()}const e=ys.find(t=>t.id===this.appearance.character);this.actor=this.makeActor(e),this.scene.add(this.actor.root),this.appearance.apply(this.actor),this.cosmetics=new rf(this.actor),this.cosmetics.set(this.previewSkin),this.rotation=.1,document.getElementById("menu-turn").value=.1}show(){this.visible=!0,this.root.hidden=!1,document.body.classList.add("in-main-menu"),this.previewSkin=this.wallet.profile.equipped,this.cosmetics.set(this.previewSkin),this.onOpen(),this.renderUI(),document.getElementById("menu-play").focus()}hide(){this.visible=!1,this.root.hidden=!0,document.body.classList.remove("in-main-menu")}renderUI(){const e=o=>document.getElementById(o);e("menu-coins").textContent=this.wallet.profile.coins,e("menu-record").textContent=this.record().levels,e("menu-character-title").textContent=ys.find(o=>o.id===this.appearance.character).name,this.root.querySelectorAll("[data-menu-tab]").forEach(o=>{o.classList.toggle("active",o.dataset.menuTab===this.tab),o.setAttribute("aria-selected",String(o.dataset.menuTab===this.tab))}),this.root.classList.toggle("menu-is-home",this.tab==="home"),this.root.querySelectorAll("[data-menu-page]").forEach(o=>o.hidden=o.dataset.menuPage!==this.tab);const t=e("character-options");t.replaceChildren();for(const o of ys){const a=document.createElement("button");a.className="character-option"+(o.id===this.appearance.character?" selected":""),a.innerHTML=`<span>${o.tag}</span><strong>${o.name}</strong><small>${o.description}</small><em>${o.id===this.appearance.character?"ВЫБРАН":"ВЫБРАТЬ"}</em>`,a.onclick=()=>{this.appearance.set(o.id,this.appearance.palette),this.changeActor(),this.renderUI()},t.append(a)}const n=e("wardrobe-colors");n.replaceChildren();for(const o of wo){const a=document.createElement("button");a.textContent=o.name,a.className=o.id===this.appearance.palette?"selected":"",a.style.setProperty("--swatch",o.shirt),a.onclick=()=>{this.appearance.set(this.appearance.character,o.id),this.appearance.apply(this.actor),this.renderUI()},n.append(a)}const s=e("wardrobe-accessories");s.replaceChildren();for(const o of Cr.filter(a=>this.wallet.profile.owned.includes(a.id))){const a=document.createElement("button");a.textContent=o.icon+" "+o.name,a.className=this.wallet.profile.equipped===o.id?"selected":"",a.onclick=()=>{this.wallet.equip(o.id),this.previewSkin=o.id,this.cosmetics.set(o.id),this.renderUI()},s.append(a)}const r=e("menu-shop-items");r.replaceChildren();for(const o of Cr){const a=document.createElement("article");a.className="menu-shop-item";const l=this.wallet.profile.owned.includes(o.id),c=this.wallet.profile.equipped===o.id;a.innerHTML=`<span class="shop-icon">${o.icon}</span><div><strong>${o.name}</strong><p>${o.description}</p></div>`;const u=document.createElement("button");u.textContent="Примерить",u.onclick=()=>{this.previewSkin=o.id,this.cosmetics.set(o.id),e("menu-status").textContent=l?"Образ на примерке. Нажми «Надеть», чтобы сохранить.":"Примерка — покупка ещё не совершена."};const h=document.createElement("button");h.textContent=c?"Надето":l?"Надеть":`${o.price} · Купить`,h.disabled=c||!l&&this.wallet.profile.coins<o.price,h.onclick=()=>{(l?this.wallet.equip(o.id):this.wallet.buy(o.id).ok)&&(this.previewSkin=o.id,this.cosmetics.set(o.id),e("menu-status").textContent=l?"Образ сохранён.":"Куплено и надето.",this.renderUI())},a.append(u,h),r.append(a)}}render(e,t){if(this.time+=e,this.tab==="home"){t();return}if(!this.actor)return;this.actor.root.rotation.y=this.rotation??.1,ri(this.actor,this.time,!1,null,0),this.cosmetics.update();const n=document.getElementById("menu-stage").getBoundingClientRect(),s=innerWidth,r=innerHeight;this.camera.aspect=Math.max(.1,n.width/n.height),this.camera.updateProjectionMatrix();const o=this.renderer;t();const a=o.autoClear;o.autoClear=!1,o.clearDepth(),o.setScissor(n.left,r-n.bottom,n.width,n.height),o.setViewport(n.left,r-n.bottom,n.width,n.height),o.setScissorTest(!0),o.render(this.scene,this.camera),o.setScissorTest(!1),o.setViewport(0,0,s,r),o.autoClear=a}}const iM=30;class sM{constructor(e){this.scene=e,this.chunks=new Map,this.box=new Xt(.36,.24,.22),this.stripe=new Xt(.06,.14,.012),this.caseMaterial=new pt({color:14144441,roughness:.85}),this.red=new pt({color:11353904,roughness:.75}),this.ring=new hi(.24,.28,24),this.highlight=new Ft({color:10275475,transparent:!0,opacity:.7,depthWrite:!1,side:Lt})}make(e){const t=new gt,n=new be(this.box,this.caseMaterial);n.position.y=.15,n.castShadow=!0,t.add(n);for(const o of[0,Math.PI/2]){const a=new be(this.stripe,this.red);a.position.set(0,.15,.117),a.rotation.z=o,t.add(a)}const s=new be(this.ring,this.highlight);s.rotation.x=-Math.PI/2,s.position.y=.018,t.add(s);const r={x:e*26+12,z:Math.sin(e*1.8)*1.25,mesh:t,taken:!1};return t.position.set(r.x,0,r.z),this.scene.add(t),r}update(e,t,n=!0){const s=Math.floor(e.x/26);for(let r=s-1;r<=s+2;r++)this.chunks.has(r)||this.chunks.set(r,this.make(r));for(const[r,o]of this.chunks)Math.abs(r-s)>2&&(this.scene.remove(o.mesh),this.chunks.delete(r));if(!n||t>=100)return 0;for(const r of this.chunks.values())if(!r.taken&&Math.hypot(e.x-r.x,e.z-r.z)<.65)return r.taken=!0,r.mesh.visible=!1,Math.min(iM,100-t);return 0}debug(){return[...this.chunks.values()].filter(e=>!e.taken).map(({x:e,z:t})=>({x:e,z:t}))}}class rM{constructor(e){this.scene=e,this.visible=!0,this.chunks=new Map,this.body=new Tn(.29,.27,.72,12,1,!0),this.band=new Ri(.286,.018,4,12),this.floor=new Rr(.27,12),this.steel=new pt({color:7622715,roughness:.95,metalness:.35,side:Lt}),this.rim=new pt({color:3423025,roughness:.8,metalness:.6}),this.coals=new Ft({color:15426587,side:Lt}),this.flameGeometry=new Jt(.68,1.05),this.fire=new zn({transparent:!0,depthWrite:!1,side:Lt,blending:Po,uniforms:{time:{value:0}},vertexShader:"varying vec2 vUv; varying float seed; void main(){vUv=uv;seed=modelMatrix[3].x;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;varying float seed;uniform float time;void main(){float y=vUv.y;float wave=sin(y*13.-time*7.+seed)*.08*y+sin(y*23.+time*4.)*.035;float width=(1.-y)*.44;float edge=1.-smoothstep(width*.3,width,abs(vUv.x-.5+wave));float lick=.65+.35*sin(y*19.-time*9.+seed);float alpha=edge*(1.-smoothstep(.25,1.,y))*smoothstep(0.,.07,y)*lick;vec3 color=mix(vec3(1.,.16,.015),vec3(1.,.85,.24),pow(1.-y,2.));gl_FragColor=vec4(color,alpha*.85);}"}),this.glow=new Ft({color:15628837,transparent:!0,opacity:.13,depthWrite:!1,blending:Po}),this.glowGeometry=new Rr(.9,20)}make(e){const t=new gt;t.visible=this.visible,t.position.set(e*26+22.5,0,-2.95);const n=new be(this.body,this.steel);n.position.y=.38,n.castShadow=!0,t.add(n);for(const o of[.08,.3,.57,.74]){const a=new be(this.band,this.rim);a.rotation.x=Math.PI/2,a.position.y=o,t.add(a)}const s=new be(this.floor,this.coals);s.rotation.x=-Math.PI/2,s.position.y=.68,t.add(s);for(const o of[0,Math.PI/2]){const a=new be(this.flameGeometry,this.fire);a.position.y=1.18,a.rotation.y=o,t.add(a)}const r=new be(this.glowGeometry,this.glow);return r.rotation.x=-Math.PI/2,r.position.y=.015,t.add(r),this.scene.add(t),t}setVisible(e){this.visible=e;for(const t of this.chunks.values())t.visible=e}update(e,t){this.fire.uniforms.time.value=t;const n=Math.floor(e/26);for(let s=n-1;s<=n+2;s++)this.chunks.has(s)||this.chunks.set(s,this.make(s));for(const[s,r]of this.chunks)Math.abs(s-n)>2&&(this.scene.remove(r),this.chunks.delete(s))}}const Vi={bottle:{label:"Розочка",damage:28,range:1.35,uses:6,color:6649418,length:.38},crowbar:{label:"Лом",damage:30,range:2.05,uses:12,color:6847099,length:.85},stick:{label:"Палка",damage:23,range:2.4,uses:8,color:8938046,length:1.12},rebar:{label:"Арматура",damage:36,range:2.2,uses:10,color:8935484,length:1.02}};function oM(i,e){const t=Vi[i];return t?{...e,duration:.84,cooldown:.84,hitAt:.52,damage:t.damage,range:t.range,weapon:i}:e}class aM{constructor(e){this.scene=e,this.chunks=new Map,this.equipped=null,this.held=null,this.nearby=null,this.point=new w,this.quaternion=new Ke,this.scale=new w,this.grip=new Ke().setFromEuler(new an(0,0,-Math.PI/2)),this.materials=new Map,this.geometries=new Map}model(e){if(e==="bottle")return this.brokenBottle();const t=Vi[e],n=new gt;let s=this.materials.get(e);s||(s=new pt({color:t.color,roughness:.85,metalness:e==="stick"?0:.65}),this.materials.set(e,s));const r=(o,a,l=0,c=0,u=0)=>{const h=`${o}:${a}`;this.geometries.has(h)||this.geometries.set(h,new Tn(a,a,o,8));const d=new be(this.geometries.get(h),s);d.position.set(l,c,0),d.rotation.z=u,d.castShadow=!0,n.add(d)};if(r(t.length,e==="stick"?.035:.018,0,t.length/2-.12),e==="crowbar"&&(r(.18,.018,.07,t.length-.12,-1.05),r(.1,.023,-.025,-.13,.55)),e==="rebar")for(let o=0;o<10;o++)r(.065,.009,0,o*.085,-.75);return n}update(e){const t=Math.floor(e.x/26);for(let s=t-1;s<=t+2;s++)if(!this.chunks.has(s)){const r=[];for(let o=0;o<2;o++){const a=["crowbar","stick","rebar"][((s*2+o)%3+3)%3],l=s*26+(o?20:5),c=o?-.65:.5,u=this.model(a);u.position.set(l,.055,c),u.rotation.set(0,.45,Math.PI/2),this.scene.add(u),r.push({type:a,x:l,z:c,mesh:u,taken:!1})}this.chunks.set(s,r)}for(const[s,r]of this.chunks)if(Math.abs(s-t)>2){for(const o of r)this.scene.remove(o.mesh);this.chunks.delete(s)}this.nearby=null;let n=.95;for(const s of this.chunks.values())for(const r of s){if(r.taken)continue;const o=Math.hypot(e.x-r.x,e.z-r.z);o<n&&(n=o,this.nearby=r)}}brokenBottle(){const e=new gt;if(this.materials.has("bottle")||this.materials.set("bottle",new pt({color:6649418,roughness:.3,side:Lt})),!this.geometries.has("broken-bottle")){const n=[],s=[],o=[[-.12,.028],[.03,.028],[.1,.068],[.22,.075]];for(let l=0;l<4;l++)for(let c=0;c<12;c++){const u=c/12*Math.PI*2;n.push(Math.cos(u)*o[l][1],o[l][0]+(l===3?(c%2?.09:.015)+c%3*.013:0),Math.sin(u)*o[l][1])}for(let l=0;l<3;l++)for(let c=0;c<12;c++){const u=l*12+c,h=l*12+(c+1)%12;s.push(u,h,u+12,h,h+12,u+12)}const a=new yt;a.setAttribute("position",new ze(n,3)),a.setIndex(s),a.computeVertexNormals(),this.geometries.set("broken-bottle",a)}const t=new be(this.geometries.get("broken-bottle"),this.materials.get("bottle"));return t.castShadow=!0,e.add(t),e}equip(e){return Vi[e]?(this.held&&this.scene.remove(this.held),this.equipped={type:e,uses:Vi[e].uses},this.held=this.model(e),this.scene.add(this.held),this.nearby=null,Vi[e].label):null}pickup(e=this.nearby){return!e||e.taken?null:(e.taken=!0,e.mesh.visible=!1,this.equip(e.type))}wear(){return!this.equipped||--this.equipped.uses>0?!1:(this.equipped=null,this.held&&this.scene.remove(this.held),this.held=null,!0)}pose(e,t=!1){if(!this.held||(this.held.visible=!t,t))return;this.hand??=e.bind.find(a=>a.name==="hand.r")?.bone;const n=e.posedWorld.get(this.hand);if(!n){this.held.visible=!1;return}if(!this.palmOffset){const a=e.bind.find(g=>g.bone===this.hand),l=e.userActions,c=l?.clips.idle.frames[0],u=g=>l?new ee().fromArray(c,l.bones.indexOf(g.name)*16).multiply(g.matrix):g.matrix.clone(),h=u(a),d=new w;let f=0;for(const g of["c_middle2.r","c_ring2.r","c_thumb2.r"]){const _=e.bind.find(m=>m.name===g);_&&(!l||l.bones.includes(g))&&(d.add(new w().setFromMatrixPosition(u(_))),f++)}this.palmOffset=(f?d.divideScalar(f):new w().setFromMatrixPosition(h)).applyMatrix4(h.clone().invert())}if(n.decompose(this.point,this.quaternion,this.scale),this.held.position.copy(this.palmOffset).applyMatrix4(n),e.userActions?.weaponGrip&&e.weaponType){const a=new w(...e.userActions.weaponGrip.axis).normalize();this.held.quaternion.copy(this.quaternion).multiply(new Ke().setFromUnitVectors(new w(0,1,0),a));return}const s=e.weaponDirection??new w(-.12,.96,.27),r=new Ke().setFromUnitVectors(new w(0,1,0),s.clone().transformDirection(e.root.matrixWorld));this.orientationSerial!==e.motionId&&(this.fromOrientation=this.held.quaternion.clone(),this.orientationSerial=e.motionId);const o=it.clamp((e.animationTime-(e.transitionStart??-1))/.12,0,1);this.held.quaternion.copy(this.fromOrientation??r).slerp(r,o*o*(3-2*o))}debug(){return{equipped:this.equipped?{...this.equipped}:null,nearby:this.nearby?.type??null,items:[...this.chunks.values()].flat().filter(e=>!e.taken).map(({type:e,x:t,z:n})=>({type:e,x:t,z:n}))}}}const lM=1.92;function cM(i){const e=Math.max(.16,i?.clips?.dodge?.duration??.24);return{duration:e,speed:lM/e,cooldown:Math.max(.85,e+.12),invulnerability:.3}}class uM{constructor(e,t=Math.min(1,e)){this.max=e,this.min=t,this.ratio=e,this.sum=0,this.count=0,this.warmup=1,this.averageMs=0}sample(e,t=!0){if(!t||!Number.isFinite(e)||e<=0||e>2)return null;if(this.warmup>0)return this.warmup-=e,null;if(this.sum+=e,this.count++,this.sum<1||this.count<12)return null;this.averageMs=this.sum/this.count*1e3,this.sum=0,this.count=0;let n=this.ratio;return this.averageMs>29?n=Math.max(this.min,this.ratio-.2):this.averageMs<18&&(n=Math.min(this.max,this.ratio+.1)),n=Math.round(n*100)/100,n===this.ratio?null:(this.ratio=n,this.warmup=this.averageMs>29?.6:2,n)}}const hs=48,hM=.82,jh=.012,Yh=(i,e,t)=>it.smoothstep(t,i,e);class dM{constructor(e){this.root=new gt,this.root.visible=!1,e.add(this.root);const t=new Jt(1,1);this.opacity=new Cs(new Float32Array(hs),1).setUsage(Er),t.setAttribute("puffOpacity",this.opacity),t.setAttribute("puffSeed",new Cs(Float32Array.from({length:hs},(s,r)=>r*13.731),1));const n=new zn({transparent:!0,depthWrite:!1,uniforms:{clock:{value:0}},vertexShader:`
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
    float edge=1.-smoothstep(.68,.94,length(p)+(n-.5)*.48);
    float density=edge*mix(.68,1.,smoothstep(.22,.72,n));float alpha=density*alphaCloud;
    if(alpha<.005)discard;
    vec3 shade=mix(vec3(.035,.23,.008),vec3(.28,.72,.035),smoothstep(.3,.8,n*.6+uvCloud.y*.4));
    gl_FragColor=vec4(shade,alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`});this.cloud=new Lr(t,n,hs),this.cloud.instanceMatrix.setUsage(Er),this.cloud.frustumCulled=!1,this.root.add(this.cloud),this.particles=Array.from({length:hs},(s,r)=>({birth:-1/0,origin:new w,direction:new w,seed:r*2.399963})),this.cursor=0,this.point=new w,this.matrix=new ee,this.scale=new w,this.rotation=new Ke,this.lastTime=0,this.lastAttack=-1}update(e,t){const n=e.animationTime??0,s=Math.max(0,Math.min(.05,n-this.lastTime));this.lastTime=n,this.visual!==e.visual&&(this.visual=e.visual,this.anchor=null,this.particles.forEach(c=>c.birth=-1/0));const r=e.attackSpec?.duration??1.2,o=e.attackTime??0,a=o/r;if(t&&o<this.lastAttack&&(this.emittedUntil=0),t||(this.emittedUntil=0),t&&a>=.22&&a<.72&&s>0){this.anchor??=kc(e,/teeth/i,[.5,.65,1]),this.anchor?this.anchor.get(this.point):this.point.set(e.x,1.52,e.z);const c=Math.min(5,Math.floor((o-(this.emittedUntil??o-s))/jh));for(let u=0;u<c;u++){const h=this.particles[this.cursor++%hs];h.birth=n-u*jh,h.origin.copy(this.point),h.direction.set(Math.sin(e.heading),.035,Math.cos(e.heading)),h.origin.addScaledVector(h.direction,.035)}c&&(this.emittedUntil=o)}else t&&(this.emittedUntil=o);this.lastAttack=t?o:-1;let l=0;for(let c=0;c<hs;c++){const u=this.particles[c],h=n-u.birth,d=h/hM;if(d>=0&&d<1){l++;const g=2.05*(1-Math.exp(-3.1*h));this.point.copy(u.origin).addScaledVector(u.direction,g);const _=.012+h*.22;this.point.x+=Math.cos(u.seed)*_,this.point.z+=Math.sin(u.seed)*_,this.point.y+=h*.18+Math.sin(u.seed+h*4)*_*.65;const m=.88+.12*Math.sin(u.seed),p=(.1+Math.pow(d,.65)*.78)*m;this.scale.set(p*(1.05+.16*Math.sin(u.seed)),p,1),this.opacity.setX(c,Yh(0,.035,h)*(1-Yh(.43,.82,h))*.82)}else this.scale.set(0,0,0),this.opacity.setX(c,0);this.matrix.compose(this.point,this.rotation,this.scale),this.cloud.setMatrixAt(c,this.matrix)}this.root.visible=l>0,this.cloud.instanceMatrix.needsUpdate=!0,this.opacity.needsUpdate=!0,this.cloud.material.uniforms.clock.value=n}}function fM(i,e,t=1){const n=i==="high",s=i==="low"||!n&&e<650;return{mode:n?"high":s?"low":"balanced",lowQuality:s,pixelRatio:Math.min(t,n?2:s?1:1.5),samples:n?2:0,shadowSize:n?2048:1024}}const pM=new Vo(-1,1,1,-1,0,1);class mM extends yt{constructor(){super(),this.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ze([0,2,0,0,2,0],2))}}const gM=new mM;class _M{constructor(e){this._mesh=new be(gM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}function xM(i,e){return i.updateMatrixWorld(!0),Math.max(i.near,-e.clone().applyMatrix4(i.matrixWorldInverse).z)}class vM{constructor(e,{lowQuality:t=!1,enabled:n=!0,samples:s=2,grading:r=null}={}){this.renderer=e,this.grading=r,this.enabled=n,this.width=1,this.height=1,this.focus=null,this.maxBlur=t?1.8:2.5,this.band=1.2;const o=e.extensions?.has("EXT_color_buffer_float")?Us:Bn;this.target=new Ai(1,1,{type:o,depthBuffer:!0,stencilBuffer:!1}),this.target.depthTexture=new Mc(1,1,Ti),this.target.samples=t?0:Math.min(s,e.capabilities.maxSamples),this.material=new zn({depthTest:!1,depthWrite:!1,uniforms:{...r?.uniforms??{gradeOn:{value:0},gradeA:{value:new Ze(0,1,1,1)},gradeB:{value:new Ze},gradeC:{value:new w},gradeShadow:{value:new w},gradeHighlight:{value:new w}},dofOn:{value:n?1:0},colorTexture:{value:this.target.texture},depthTexture:{value:this.target.depthTexture},pixel:{value:new pe},near:{value:.1},far:{value:100},focus:{value:6},band:{value:this.band},radius:{value:this.maxBlur}},defines:{DOF_SAMPLES:t?8:12},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
   #include <common>
   #include <packing>
   ${Ty}
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
   }`}),this.quad=new _M(this.material)}resize(e,t){if(this.width=e,this.height=t,!this.enabled&&!this.grading?.active){(this.target.width!==1||this.target.height!==1)&&this.target.setSize(1,1);return}const n=this.renderer.getPixelRatio(),s=Math.max(1,Math.floor(e*n)),r=Math.max(1,Math.floor(t*n));this.target.setSize(s,r),this.material.uniforms.pixel.value.set(1/s,1/r),this.material.uniforms.radius.value=this.maxBlur*n}render(e,t,n,s){const r=xM(t,n);if(this.focus=this.focus===null?r:it.lerp(this.focus,r,1-Math.exp(-Math.max(0,s)*8)),!this.enabled&&!this.grading?.active){this.renderer.render(e,t);return}const o=this.renderer.getPixelRatio();(this.target.width!==Math.max(1,Math.floor(this.width*o))||this.target.height!==Math.max(1,Math.floor(this.height*o)))&&this.resize(this.width,this.height);const a=this.material.uniforms;a.dofOn.value=this.enabled?1:0,a.near.value=t.near,a.far.value=t.far,a.focus.value=this.focus,this.renderer.setRenderTarget(this.target),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.quad.render(this.renderer)}renderCustom(e){if(!this.grading?.active){e();return}this.resize(this.width,this.height),this.renderer.setRenderTarget(this.target);try{e()}finally{this.renderer.setRenderTarget(null)}this.material.uniforms.dofOn.value=0,this.quad.render(this.renderer)}dispose(){this.target.dispose(),this.material.dispose(),this.quad.dispose()}}function yM(i){i.updateMatrixWorld(!0);let e=null;if(i.traverse(g=>{if(e||!g.isMesh||g.material.name!=="Pavement tiles")return;const _=g.geometry,m=_.attributes.position,p=_.attributes.uv,x=_.index;if(p)for(let y=0;y<(x?.count??m.count);y+=3){const v=[0,1,2].map(T=>x?x.getX(y+T):y+T),b=v.map(T=>new w().fromBufferAttribute(m,T).applyMatrix4(g.matrixWorld));if(!(b.some(T=>T.z<2.5)||Math.max(...b.map(T=>T.y))-Math.min(...b.map(T=>T.y))>.001||b[1].clone().sub(b[0]).cross(b[2].clone().sub(b[0])).y<=0)){e={points:b,uv:v.map(T=>new pe().fromBufferAttribute(p,T)),material:g.material};break}}}),!e)throw Error("Authored front paving surface not found");const t=new _n().setFromObject(i),n=t.max.z;if(n>=13)return;const[s,r,o]=e.points,a=r.clone().sub(s),l=o.clone().sub(s),c=a.x*l.z-a.z*l.x,u=[[0,s.y-.002,n-.01],[26,s.y-.002,n-.01],[0,s.y-.002,14],[26,s.y-.002,14]],h=[];for(const[g,,_]of u){const m=((g-s.x)*l.z-(_-s.z)*l.x)/c,p=(a.x*(_-s.z)-a.z*(g-s.x))/c;h.push(e.uv[0].x+m*(e.uv[1].x-e.uv[0].x)+p*(e.uv[2].x-e.uv[0].x),e.uv[0].y+m*(e.uv[1].y-e.uv[0].y)+p*(e.uv[2].y-e.uv[0].y))}const d=new yt;d.setAttribute("position",new ze(u.flat(),3)),d.setAttribute("uv",new ze(h,2)),d.setIndex([0,2,1,1,2,3]),d.computeVertexNormals();const f=new be(d,e.material);f.name="Camera_front_paving",i.add(f)}function MM(i,e,t,n=[]){const s=new Set;for(const f of[i,...n])f.traverse(g=>{if(g.isMesh)for(const _ of Array.isArray(g.material)?g.material:[g.material])s.add(_)});const r=Math.min(4,e.capabilities.getMaxAnisotropy());for(const f of s)for(const g of["map","normalMap","roughnessMap","metalnessMap","aoMap"])f[g]&&(f[g].anisotropy=r,f[g].needsUpdate=!0);const o=new mc,a=new Rc(10,24,12),l=new Float32Array(a.attributes.position.count*3),c=new Ft({side:sn,vertexColors:!0});a.setAttribute("color",new Vt(l,3)),o.add(new be(a,c));const u=new kl(e);let h=null,d="";t.onChange=f=>{const g=f.skyColor+f.groundColor;if(g!==d){const _=new De(f.skyColor),m=new De(f.groundColor),p=new De;for(let y=0;y<a.attributes.position.count;y++){const v=a.attributes.position.getY(y)/10,b=it.smoothstep(v,-.2,.3);p.copy(m).lerp(_,b),p.toArray(l,y*3)}a.attributes.color.needsUpdate=!0;const x=h;h=u.fromScene(o,.05);for(const y of s)y.envMap=h.texture,y.needsUpdate=!0;x?.dispose(),d=g}for(const _ of s)_.envMapIntensity=f.ambientIntensity/2.6},t.onChange(t.value)}const Kh="bomzh:lighting:v1",fr={exposure:1.08,sunIntensity:3.2,sunColor:"#f2e4cd",azimuth:-48,elevation:52,ambientIntensity:1.5,skyColor:"#c5ccc8",groundColor:"#505347",fogColor:"#85867c",fogStart:24,fogDepth:38,shadows:!0},bM={exposure:[.2,2.5],sunIntensity:[0,6],azimuth:[-180,180],elevation:[5,85],ambientIntensity:[0,5],fogStart:[5,60],fogDepth:[5,80]};function Ha(i,e=fr){const t={...e};if(!i||typeof i!="object")return t;for(const[n,[s,r]]of Object.entries(bM))Number.isFinite(i[n])&&(t[n]=Math.max(s,Math.min(r,i[n])));for(const n of["sunColor","skyColor","groundColor","fogColor"])typeof i[n]=="string"&&/^#[0-9a-f]{6}$/i.test(i[n])&&(t[n]=i[n]);return typeof i.shadows=="boolean"&&(t.shadows=i.shadows),t}const SM={courtyard:{...fr},sunset:{...fr,exposure:1.1,sunIntensity:3.2,sunColor:"#ffbd7a",azimuth:-105,elevation:18,ambientIntensity:1.5,skyColor:"#b5bed9",groundColor:"#665650",fogColor:"#b09583",fogStart:20},night:{...fr,exposure:.85,sunIntensity:1.1,sunColor:"#b9d0ff",azimuth:35,elevation:38,ambientIntensity:.75,skyColor:"#687caa",groundColor:"#252e40",fogColor:"#263443",fogStart:16,fogDepth:30}};class wM{constructor({scene:e,renderer:t,sun:n,ambient:s,lowQuality:r=!1,storage:o}){Object.assign(this,{scene:e,renderer:t,sun:n,ambient:s,storage:o}),this.defaults={...fr,shadows:!r},this.value={...this.defaults},this.targetX=0;try{this.storage=o??globalThis.localStorage;const a=JSON.parse(this.storage.getItem(Kh));a?.version===1&&(this.value=Ha(a.settings,this.defaults))}catch{}this.apply()}set(e){this.value=Ha({...this.value,...e},this.defaults),this.apply()}reset(){this.value={...this.defaults},this.apply()}apply(){const e=this.value;this.renderer.toneMappingExposure=e.exposure,this.sun.intensity=e.sunIntensity,this.sun.color.set(e.sunColor),this.ambient.intensity=e.ambientIntensity,this.ambient.color.set(e.skyColor),this.ambient.groundColor.set(e.groundColor),this.scene.background.set(e.fogColor),this.scene.fog.color.set(e.fogColor),this.scene.fog.near=e.fogStart,this.scene.fog.far=e.fogStart+e.fogDepth,this.renderer.shadowMap.enabled=e.shadows,this.renderer.shadowMap.needsUpdate=!0,this.follow(this.targetX),this.onChange?.(e)}follow(e){this.targetX=e;const t=this.value.azimuth*Math.PI/180,n=this.value.elevation*Math.PI/180,s=Math.sqrt(296);this.sun.position.set(e+s*Math.cos(n)*Math.sin(t),s*Math.sin(n),s*Math.cos(n)*Math.cos(t)),this.sun.target.position.set(e,0,0)}export(){return{version:1,settings:{...this.value}}}save(){try{return this.storage.setItem(Kh,JSON.stringify(this.export())),!0}catch{return!1}}import(e){if(e?.version!==1||!e.settings||typeof e.settings!="object"||Array.isArray(e.settings))throw Error("Нужен файл настроек освещения этой игры.");this.value=Ha(e.settings,this.defaults),this.apply()}}function EM(i,{open:e,close:t},n=null){const s=document.getElementById("lighting-panel"),r=document.getElementById("lighting-fields"),o=document.getElementById("lighting-status"),a=[["exposure","Экспозиция",.2,2.5,.01],["sunIntensity","Яркость солнца",0,6,.1],["azimuth","Направление солнца",-180,180,1],["elevation","Высота солнца",5,85,1],["sunColor","Цвет солнца"],["ambientIntensity","Свет в тенях",0,5,.1],["skyColor","Цвет неба"],["groundColor","Оттенок снизу"],["fogColor","Цвет тумана и фона"],["fogStart","Начало тумана",5,60,1],["fogDepth","Дальность видимости",5,80,1]];for(const[g,_,m,p,x]of a){const y=document.createElement("label");y.className="lighting-field";const v=document.createElement("span");v.textContent=_;const b=document.createElement("output"),M=document.createElement("input");M.id="light-"+g,M.dataset.key=g,M.type=m===void 0?"color":"range",m!==void 0&&(M.min=m,M.max=p,M.step=x),y.append(v,b,M),r.append(y),M.addEventListener("input",()=>{i.set({[g]:M.type==="color"?M.value:Number(M.value)}),d(),o.textContent="Предпросмотр. Сохрани понравившийся вариант."})}let l=()=>{};if(n){const g=document.getElementById("grading-fields"),_={brightness:"Яркость",contrast:"Контраст",saturation:"Насыщенность",gamma:"Гамма / средние тона",temperature:"Температура: холоднее / теплее",tint:"Оттенок: зелёный / пурпурный",shadows:"Поднять / затемнить тени",highlights:"Яркость светлых участков",vignette:"Виньетка",splitStrength:"Сила окраски теней и света",shadowColor:"Цвет теней",highlightColor:"Цвет света"};for(const p of Object.keys(_)){const x=document.createElement("label");x.className="lighting-field";const y=document.createElement("span");y.textContent=_[p];const v=document.createElement("output"),b=document.createElement("input");b.id="grade-"+p,b.dataset.key=p;const M=Fc[p];b.type=M?"range":"color",M&&([b.min,b.max,b.step]=M),x.append(y,v,b),g.append(x),b.oninput=()=>{n.set({[p]:M?Number(b.value):b.value}),l(),o.textContent="Цвет изменён. Сохрани понравившийся вариант."}}const m=document.getElementById("grade-enabled");l=()=>{for(const p of g.querySelectorAll("input"))p.value=n.value[p.dataset.key],p.previousElementSibling.value=p.type==="color"?p.value:Number(p.value).toFixed(2);m.checked=n.value.enabled},m.onchange=()=>{n.set({enabled:m.checked}),o.textContent=m.checked?"Цветокоррекция включена.":"Показана исходная картинка; значения ползунков остались прежними."},document.getElementById("grading-reset").onclick=()=>{n.reset(),l(),o.textContent="Исходный цвет. Нажми «Сохранить», чтобы закрепить."},document.getElementById("grading-preset").onchange=p=>{p.target.value&&(n.set(wy[p.target.value]),l(),p.target.value="",o.textContent="Цветовой пресет применён.")}}const c=new URLSearchParams(location.search).get("editor")==="compositing";document.getElementById("grading-section").open=c,document.getElementById("light-section").open=!c;const u=document.getElementById("lighting-collapse");u.onclick=()=>{const g=s.classList.toggle("compact");document.getElementById("lighting-body").hidden=g,u.textContent=g?"Развернуть":"Свернуть",u.setAttribute("aria-expanded",String(!g))};const h=document.getElementById("light-shadows");h.onchange=()=>{i.set({shadows:h.checked}),o.textContent="Предпросмотр. Сохрани понравившийся вариант."};function d(){for(const g of r.querySelectorAll("input"))g.value=i.value[g.dataset.key],g.previousElementSibling.value=g.type==="color"?g.value:Number(g.value).toFixed(g.step==="0.01"?2:g.step==="0.1"?1:0);h.checked=i.value.shadows,l()}document.getElementById("lighting-open").onclick=()=>{e()!==!1&&(s.hidden=!1,d(),o.textContent="Игра на паузе. Изменения видны сразу.",document.getElementById("lighting-close").focus())};function f(){s.hidden=!0,t()}return document.getElementById("lighting-close").onclick=f,s.addEventListener("keydown",g=>{if(g.key==="Tab"){const _=[...s.querySelectorAll("button,input,select")].filter(x=>!x.disabled&&x.getClientRects().length),m=_[0],p=_.at(-1);g.shiftKey&&document.activeElement===m?(g.preventDefault(),p.focus()):!g.shiftKey&&document.activeElement===p&&(g.preventDefault(),m.focus())}g.key==="Escape"&&(g.stopPropagation(),f())}),document.getElementById("lighting-save").onclick=()=>{const g=i.save(),_=!n||n.save();o.textContent=g&&_?"Сохранено: свет и цвет на этом устройстве.":"Не удалось сохранить на устройстве. Скачай настройки файлом."},document.getElementById("lighting-reset").onclick=()=>{i.reset(),n?.reset(),d(),o.textContent="Вернул исходный свет. Нажми «Сохранить», чтобы закрепить."},document.getElementById("lighting-preset").onchange=g=>{g.target.value&&(i.set(SM[g.target.value]),d(),g.target.value="",o.textContent="Пресет применён. Можно настроить дальше.")},document.getElementById("lighting-export").onclick=()=>{const g=URL.createObjectURL(new Blob([JSON.stringify({...i.export(),...n?{compositing:n.export()}:{}},null,2)],{type:"application/json"})),_=document.createElement("a");_.href=g,_.download="dvor-light-and-color.json",_.click(),setTimeout(()=>URL.revokeObjectURL(g),1e3),o.textContent="Файл настроек можно прислать мне для переноса в игру."},document.getElementById("lighting-import").onchange=async g=>{const _=g.target.files[0];if(_){try{if(_.size>1e5)throw Error("Файл слишком большой.");const m=JSON.parse(await _.text()),p=i.export(),x=n?.export();try{i.import(m),m.compositing&&n&&n.import(m.compositing)}catch(y){throw i.import(p),x&&n.import(x),y}d(),o.textContent="Настройки загружены. Нажми «Сохранить», чтобы закрепить."}catch(m){o.textContent=m.message}g.target.value=""}},{hide:f,isOpen:()=>!s.hidden}}class TM extends ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new IM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new HM(t)}),this.register(function(t){return new VM(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new FM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new zM(t)}),this.register(function(t){return new BM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new XM(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=hr.extractUrlBase(e);o=hr.resolveURL(c,this.path)}else o=hr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Fd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===of){try{o[$e.KHR_BINARY_GLTF]=new qM(e)}catch(h){s&&s(h);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new rb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:o[h]=new CM;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[h]=new jM(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[h]=new YM;break;case $e.KHR_MESH_QUANTIZATION:o[h]=new KM;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function AM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class RM{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new De(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],on);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Fo(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new kd(u),c.distance=h;break;case"spot":c=new og(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Gn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class CM{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){const s=[];e.color=new De(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],on),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(s)}}class PM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class IM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(a,a)}return Promise.all(r)}}class LM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class DM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class UM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],on)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,tt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class NM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class FM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],on),Promise.all(r)}}class OM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class kM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],on),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,tt)),Promise.all(r)}}class BM{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class zM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class HM{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class VM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class GM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class WM{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class XM{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Mn.TRIANGLES&&c.mode!==Mn.TRIANGLE_STRIP&&c.mode!==Mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new ee,m=new w,p=new Ke,x=new w(1,1,1),y=new Lr(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,_.compose(m,p,x));for(const v in l)if(v==="_COLOR_0"){const b=l[v];y.instanceColor=new Cs(b.array,b.itemSize,b.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);St.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const of="glTF",er=12,$h={JSON:1313821514,BIN:5130562};class qM{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==of)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-er,r=new DataView(e,er);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===$h.JSON){const c=new Uint8Array(e,er+o,a);this.content=n.decode(c)}else if(l===$h.BIN){const c=er+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Yl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Yl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Ms[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,on,d)})})}}class YM{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class KM{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class af extends Dr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,x=1-m,y=p-d+h;for(let v=0;v!==a;v++){const b=o[_+v+a],M=o[_+v+l]*u,T=o[g+v+a],L=o[g+v]*u;r[v]=x*b+y*M+m*T+p*L}return r}}const $M=new Ke;class JM extends af{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return $M.fromArray(r).normalize().toArray(r),r}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jh={9728:rn,9729:pn,9984:cd,9985:xo,9986:nr,9987:ai},Zh={33071:Mi,33648:Io,10497:gn},Va={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ZM={CUBICSPLINE:void 0,LINEAR:wr,STEP:Sr},Ga={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function QM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new pt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),i.DefaultMaterial}function ki(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function eb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function tb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nb(i){let e;const t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wa(t.attributes):e=i.indices+":"+Wa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Wa(i.targets[n]);return e}function Wa(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Kl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ib(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const sb=new ee;class rb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new AM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new sg(this.options.manager):this.textureLoader=new cg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ki(r,a,s),Gn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(hr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Va[s.type],a=Ms[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Vt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Va[s.type],c=Ms[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(x);y||(_=new c(a,p*f,s.count*f/u),y=new _m(_,f/u),t.cache.add(x,y)),m=new gc(y,l,d%f/u,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),m=new Vt(_,l,g);if(s.sparse!==void 0){const p=Va.SCALAR,x=Ms[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,b=new x(o[1],y,s.sparse.count*p),M=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,L=b.length;T<L;T++){const E=b[T];if(m.setX(E,M[T*l]),l>=2&&m.setY(E,M[T*l+1]),l>=3&&m.setZ(E,M[T*l+2]),l>=4&&m.setW(E,M[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Jh[d.magFilter]||pn,u.minFilter=Jh[d.minFilter]||ai,u.wrapS=Zh[d.wrapS]||gn,u.wrapT=Zh[d.wrapT]||gn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==rn&&u.minFilter!==pn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ot(_);m.needsUpdate=!0,d(m)}),t.load(hr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Gn(h,o),h.userData.mimeType=o.mimeType||ib(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new yc,qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Pd,qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return pt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const h=s[$e.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],on),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,tt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Lt);const u=r.alphaMode||Ga.OPAQUE;if(u===Ga.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ga.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ft&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ft&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ft){const h=r.emissiveFactor;a.emissive=new De().setRGB(h[0],h[1],h[2],on)}return r.emissiveTexture!==void 0&&o!==Ft&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,tt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Gn(h,r),t.associations.set(h,{materials:e}),r.extensions&&ki(s,h,r),h})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Qh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=nb(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Qh(new yt,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?QM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const x=c[f];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new vm(_,x):new be(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=yh(p.geometry,_d):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=yh(p.geometry,Ul));else if(m.mode===Mn.LINES)p=new Em(_,x);else if(m.mode===Mn.LINE_STRIP)p=new vc(_,x);else if(m.mode===Mn.LINE_LOOP)p=new Tm(_,x);else if(m.mode===Mn.POINTS)p=new Id(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&tb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Gn(p,r),m.extensions&&ki(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ki(s,h[0],r),h[0];const d=new gt;r.extensions&&ki(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(it.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Vo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new ee;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new _c(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let y=0,v=d.length;y<v;y++){const b=d[y],M=f[y],T=g[y],L=_[y],E=m[y];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const C=n._createAnimationTracks(b,M,T,L,E);if(C)for(let A=0;A<C.length;A++)p.push(C[A])}const x=new Jm(r,void 0,p);return Gn(x,s),x})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,sb)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Rd:c.length>1?u=new gt:c.length===1?u=c[0]:u=new St,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Gn(u,r),r.extensions&&ki(n,u,r),r.matrix!==void 0){const h=new ee;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new gt;n.name&&(r.name=s.createUniqueName(n.name)),Gn(r,n),n.extensions&&ki(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof qn||d instanceof Ot)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];vi[r.path]===vi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(vi[r.path]){case vi.weights:c=Ps;break;case vi.rotation:c=Is;break;case vi.translation:case vi.scale:c=Ls;break;default:n.itemSize===1?c=Ps:c=Ls;break}const u=s.interpolation!==void 0?ZM[s.interpolation]:wr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+vi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Kl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Is?JM:af;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ob(i,e,t){const n=e.attributes,s=new _n;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),a.normalized){const u=Kl(Ms[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new w,l=new w;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Kl(Ms[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Yn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Qh(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Yl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return et.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Gn(i,e),ob(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?eb(i,e.targets,t):i})}function ab(i){const e=new Map,t=new Map,n=i.clone();return lf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function lf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)lf(i.children[n],e.children[n],t)}function cf(i,e){const t=e*.2,n=e*.8;return Math.max(0,Math.min(1,(i-t)/.22,(n-i)/.18))}function uf(i,e){const t=cf(i,e);return t*t*(3-2*t)}const bn={jab:{duration:.65,cooldown:.65,hitAt:.7,damage:14,range:1.35,label:"Кулак"},kick:{duration:.7,cooldown:.8,hitAt:9/17,damage:25,range:1.9,label:"Пинок"},burp:{duration:1.2,cooldown:2.5,hitAt:.38,damage:24,range:2.3,label:"Отрыжка"},spray:{duration:1.4,cooldown:2.4,hitAt:.28,activeUntil:.8,damage:34,range:3.2,label:"Струя"}};function lb(i,e,t){if(e.down>0)return!1;const n=e.x-i.x,s=e.z-i.z,r=i.heading??i.facing*Math.PI/2,o=n*Math.sin(r)+s*Math.cos(r),a=Math.abs(n*Math.cos(r)-s*Math.sin(r));return t==="burp"?o>.05&&o<bn.burp.range&&a<.45+o*.3:t==="spray"?o>.15&&o<bn.spray.range*(Number.isFinite(i.attackTime)?uf(i.attackTime,i.attackSpec?.duration??bn.spray.duration):1)&&a<.38+o*.16:Math.hypot(n,s)<(i.attackSpec?.range??bn[t].range)&&o>-.15}function ed(i){if(!Number.isSafeInteger(i)||i<0)throw new RangeError("Invalid stage");const e=i*26+1,t=i+1,n=i===0?1:Math.min(4,2+Math.floor(i/4)),s=i<3?1:Math.min(3,1+Math.floor(i/4)),r=Array.from({length:s},(o,a)=>Array.from({length:n},(l,c)=>({type:i===0?"fighter":i>=2&&c===0&&(i%3===2||t%5===0)?"bruiser":(i+a+c)%2?"runner":"fighter",side:i<2?1:c%2?-1:1,z:[-.9,.8,0,1.4][(i+a+c)%4],delay:c*.4})));return{id:`street-${t}`,index:i,number:t,title:`Участок ${t}`,center:e,halfWidth:10,trigger:e-3,left:e-10,right:e+10,waves:r,scaling:{health:1+Math.min(1.5,i*.065),damage:1+Math.min(1,i*.035),speed:1+Math.min(.35,i*.012),windup:1-Math.min(.22,i*.008)}}}class cb{constructor(){this.index=0,this.active=!1,this.wave=0,this.phase="explore",this.delay=0,this.goTime=0,this.current=ed(0)}get arena(){return this.active?this.current:null}get bounds(){return this.active?[this.current.left,this.current.right]:[this.current.center-36,this.current.right+20]}update(e,t,n){if(e<=0)return null;if(this.goTime=Math.max(0,this.goTime-e),!this.active)return t>=this.current.trigger?(this.active=!0,this.wave=0,this.phase="incoming",this.delay=1.25,this.goTime=0,{type:"warning",arena:this.current}):null;const s=this.current;if(this.phase==="incoming"){if(this.delay=Math.max(0,this.delay-e),this.delay===0)return this.phase="fight",{type:"spawn",arena:s,wave:this.wave,enemies:s.waves[this.wave]}}else if(!n.some(r=>r.encounter===s.id&&r.health>0))return this.wave+1<s.waves.length?(this.wave++,this.phase="incoming",this.delay=1.25,{type:"warning",arena:s}):(this.index++,this.active=!1,this.phase="explore",this.goTime=5,this.current=ed(this.index),{type:"clear",arena:s});return null}}class ub{constructor(e,{reducedMotion:t=!1}={}){this.camera=e,this.focus=new w(-7.3,1,0),this.lead=.7,this.distance=6.2,this.shake=0,this.shakeClock=0,this.shakeOverride=null,this.savedBase=null,this.framingCamera=e.clone(),this.reducedMotion=t,this.position=new w,this.target=new w}cinematic(e,t,n,s,r,o){this.restoreBase();const a=r<650,l=r/o,c=new w((e.x+(t.root?.position.x??t.x))/2,1.05,(e.z+t.z)/2),u=Math.max(a?6.5:4.8,1.35/(Math.tan(it.degToRad(45/2))*l)),h=(a?.55:0)+(this.reducedMotion?0:.18*Math.sin(Math.min(1,n/2.8)*Math.PI)),d=c.clone().add(new w(Math.sin(h)*u,u*.14,Math.cos(h)*u)),f=1-Math.exp(-s*5);this.focus.lerp(c,f),this.camera.position.lerp(d,f),this.camera.lookAt(this.focus),this.camera.fov=it.lerp(this.camera.fov,45,f),this.camera.updateProjectionMatrix(),this.applyShake(s)}isShakeEnabled(){return this.shakeOverride??!this.reducedMotion}setShakeEnabled(e){this.shakeOverride=!!e,e||(this.shake=0)}restoreBase(){this.savedBase&&(this.camera.position.copy(this.savedBase.position),this.camera.quaternion.copy(this.savedBase.quaternion))}impact(e=.18){this.isShakeEnabled()&&Number.isFinite(e)&&e>0&&(this.shake=Math.min(.3,this.shake+e))}applyShake(e){const t=this.camera;if(this.savedBase??={position:new w,quaternion:new Ke},this.savedBase.position.copy(t.position),this.savedBase.quaternion.copy(t.quaternion),this.framingCamera.copy(t,!1),this.framingCamera.updateMatrixWorld(!0),this.shakeClock+=Math.max(0,e),this.shake=Math.max(0,this.shake-Math.max(0,e)*1.25),!this.isShakeEnabled()||this.shake===0)return;const n=(this.shake/.3)**2,s=this.shakeClock,r=new w(.09*n*(Math.sin(s*64+1.1)+.4*Math.sin(s*101))/1.4,.065*n*Math.cos(s*79+.4),.025*n*Math.sin(s*53));r.applyQuaternion(this.savedBase.quaternion),t.position.add(r),t.quaternion.multiply(new Ke().setFromEuler(new an(.008*n*Math.sin(s*71),.006*n*Math.cos(s*59),.018*n*Math.sin(s*67+.8))))}update({player:e,enemies:t=[],arena:n=null,time:s=0,dt:r=.016,width:o=1e3,height:a=700}){this.restoreBase();const l=o<650,c=o/a,u=1-Math.exp(-r*3.7);this.lead=it.lerp(this.lead,e.facing*(e.moving?.7:.25),u);const h=n?l?7:5.8:l?7.6:6.2;this.distance=it.lerp(this.distance,h,1-Math.exp(-r*2.8));let d=l?53:40,f=e.x+this.lead;if(n){d=Math.min(d,it.radToDeg(2*Math.atan((n.halfWidth-2)/(this.distance*1.25*c))));const _=this.distance*1.25*Math.tan(it.degToRad(d/2))*c;f=l?e.x+this.lead*.45:n.center,f=it.clamp(f,n.left+_+1,n.right-_-1)}this.target.set(f,1,e.z*.6),this.focus.lerp(this.target,u),this.position.set(this.focus.x+1.2,this.focus.y+this.distance*.13,this.focus.z+this.distance),this.camera.position.lerp(this.position,1-Math.exp(-r*7)),this.camera.lookAt(this.focus);const g=it.lerp(this.camera.fov,d,u);Math.abs(this.camera.fov-g)>.001&&(this.camera.fov=g,this.camera.updateProjectionMatrix()),this.applyShake(r)}}const hb={runner:{label:"Задира",health:60,speed:2.35,damage:9,windup:.42,recovery:1.15,range:1.45,color:"#d59861"},fighter:{label:"Боец",health:80,speed:1.7,damage:14,windup:.65,recovery:1.35,range:1.65,color:"#d68664"},bruiser:{label:"Громила",health:110,speed:1.05,damage:24,windup:1,recovery:2,range:2,color:"#c16c84"}},$l={jab:0,kick:14,spray:32,burp:24,dodge:16};function hf(i,e){const t=$l[e];return t===void 0||i.stamina<t?!1:(i.stamina-=t,t>0&&(i.regenDelay=.45),!0)}function db(i,e){if(e<=0)return;const t=i.regenDelay;i.regenDelay=Math.max(0,t-e),i.stamina=Math.min(100,i.stamina+Math.max(0,e-t)*28)}function fb(i,e){const t=e.x-i.x,n=e.z-i.z,s=Math.hypot(t,n);return e.invulnerable>0||s>=i.spec.range?!1:i.type==="bruiser"||s<.01||(t*i.aimX+n*i.aimZ)/s>.25}function pr(i,e,t=0){return Math.hypot(i,e)>.001?Math.atan2(i,e):t}function Xa(i,e,t,n=14){const s=Math.atan2(Math.sin(e-i),Math.cos(e-i));return i+s*(1-Math.exp(-n*t))}const pb=2.8,td=1.3;function Jl(i,e){return Math.min(100,Math.max(0,i+e))}function mb(i,e){return e.filter(t=>t.health>0&&!t.entering&&!(t.down>0)&&Math.hypot(t.x-i.x,t.z-i.z)<=2.8).sort((t,n)=>Math.hypot(t.x-i.x,t.z-i.z)-Math.hypot(n.x-i.x,n.z-i.z))[0]??null}const tr=i=>(i=Math.min(1,Math.max(0,i)),i*i*(3-2*i));function gb(i){const e=i>=td;return{punch:i<.65?.14*tr(i/.65):i<1.3?.14+.56*tr((i-.65)/.65):i<1.65?.7:.7+.3*tr((i-1.65)/.8),contact:e,approach:tr(i/.55),fall:tr((i-td)/.85),done:i>=pb}}function _b(i,e,t){let s=e.x>=i.x?1:-1;return(e.x-s*.65<t[0]+.1||e.x-s*.65>t[1]-.1)&&(s=-s),{side:s,endX:Math.max(t[0]+.1,Math.min(t[1]-.1,e.x-s*.65))}}class xb{constructor(e){this.root=new gt,e.add(this.root),this.root.visible=!1,this.growth=0,this.curve=new Ec(new w,new w(0,.4,1.35),new w(0,-.8,3.05)),this.geometry=new Cc(this.curve,30,.018,5,!1),this.geometry.attributes.position.setUsage(Er),this.jet=new be(this.geometry,new Ft({color:"#e7c648",transparent:!0,opacity:.75,depthWrite:!1})),this.jet.frustumCulled=!1,this.root.add(this.jet),this.positions=new Float32Array(96);const t=new yt;t.setAttribute("position",new Vt(this.positions,3).setUsage(Er)),this.drops=new Id(t,new yc({color:"#f4d85d",size:.04,transparent:!0,opacity:.7,depthWrite:!1})),this.drops.frustumCulled=!1,this.root.add(this.drops),this.splash=new be(new hi(.08,.23,20),new Ft({color:"#cdb745",transparent:!0,opacity:.3,side:Lt,depthWrite:!1})),this.splash.rotation.x=-Math.PI/2,this.root.add(this.splash),this.point=new w,this.tangent=new w,this.normal=new w}update(e,t,n){const s=e.attackSpec?.duration??1.4,r=t?cf(e.attackTime,s):0;if(this.growth=r,this.root.visible=r>0,!this.root.visible)return;this.anchor??=kc(e,/shtani/i,[.5,.82,1]),this.anchor?this.anchor.get(this.root.position):this.root.position.set(e.x,.85,e.z),this.root.rotation.y=e.heading,this.root.position.x+=Math.sin(e.heading)*.012,this.root.position.z+=Math.cos(e.heading)*.012;const o=this.root.position.y;this.curve.v2.y=.025-o;const a=this.point,l=this.tangent,c=this.normal,u=this.geometry.attributes.position,h=uf(e.attackTime,s);for(let d=0;d<=30;d++){const f=d/30*h;this.curve.getPoint(f,a),this.curve.getTangent(f,l),c.set(0,-l.z,l.y);for(let g=0;g<=5;g++){const _=g/5*Math.PI*2,m=.018*Math.min(1,r*3);u.setXYZ(d*6+g,a.x+Math.cos(_)*m,a.y+c.y*Math.sin(_)*m,a.z+c.z*Math.sin(_)*m)}}u.needsUpdate=!0,this.jet.material.opacity=.75*Math.min(1,r*4);for(let d=0;d<32;d++){const f=(d/32+n*1.8)%1*h;this.curve.getPoint(f,a),a.x+=Math.sin(d*11+n*14)*.035*f,a.y+=Math.cos(d*7+n*12)*.025*f,a.toArray(this.positions,d*3)}this.drops.geometry.attributes.position.needsUpdate=!0,this.drops.material.opacity=.7*r,this.splash.visible=h>.94,this.splash.position.set(0,.026-o,3.05),this.splash.scale.setScalar(r*(1+.1*Math.sin(n*21))),this.splash.material.opacity=.3*r}}function vb(){let i=8141;const e=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),t=()=>{const m=document.createElement("canvas");return m.width=m.height=512,m},n=t(),s=t(),r=t(),o=t(),a=t(),l=n.getContext("2d"),c=s.getContext("2d");l.fillStyle="#625e54",l.fillRect(0,0,512,512),c.fillStyle="#555",c.fillRect(0,0,512,512);const u=["#876655","#785a4e","#936f5b","#755449","#826357"];for(let m=0;m<16;m++)for(let p=-1;p<9;p++){const x=p*64+m%2*32,y=m*32;l.fillStyle=u[Math.floor(e()*u.length)],l.fillRect(x+2,y+2,60,28),l.fillStyle="#c5aa812b",l.fillRect(x+3,y+3,58,2),c.fillStyle="#bbb",c.fillRect(x+2,y+2,60,28)}function h(m,p){const x=m.getContext("2d"),y=x.getImageData(0,0,512,512);for(let v=0;v<y.data.length;v+=4){const b=(e()-.5)*p;for(let M=0;M<3;M++)y.data[v+M]+=b}x.putImageData(y,0,0)}h(n,25);const d=r.getContext("2d");d.fillStyle="#65665f",d.fillRect(0,0,512,512),h(r,24);for(let m=0;m<35;m++){let p=e()*512,x=e()*512;d.strokeStyle=m%2?"#383d3699":"#92918355",d.lineWidth=1+e(),d.beginPath(),d.moveTo(p,x);for(let y=0;y<8;y++)p+=(e()-.5)*45,x+=e()*25,d.lineTo(p,x);d.stroke()}for(let m=0;m<18;m++)d.fillStyle="#333a3020",d.beginPath(),d.ellipse(e()*512,e()*512,20+e()*65,10+e()*25,e()*3,0,Math.PI*2),d.fill();const f=o.getContext("2d");f.fillStyle="#929185",f.fillRect(0,0,512,512),h(o,35),f.strokeStyle="#4b514746",f.lineWidth=3;for(let m=0;m<=512;m+=128)f.strokeRect(m,0,128,512),f.strokeRect(0,m,512,128);const g=a.getContext("2d");g.fillStyle="#707d69",g.fillRect(0,0,512,512);for(let m=0;m<130;m++)g.fillStyle=m%2?"#654735":"#8f6848",g.beginPath(),g.ellipse(e()*512,e()*512,e()*18,e()*38,e()*4,0,Math.PI*2),g.fill();h(a,20);const _=(m,p=!0)=>{const x=new Gt(m);return x.wrapS=x.wrapT=gn,x.colorSpace=p?tt:oi,x.anisotropy=4,x};return{brick:_(n),brickBump:_(s,!1),asphalt:_(r),concrete:_(o),rust:_(a)}}class yb{constructor(e,{textured:t=!0,editable:n=!1}={}){if(this.editable=n,this.scene=e,this.chunks=new Map,this.unit=new Xt(1,1,1),this.plane=new Jt(1,1),this.body=new Tc([[0,0],[.062,0],[.072,.02],[.072,.28],[.06,.31],[.03,.34],[.027,.45],[.031,.46],[0,.46]].map(([s,r])=>new pe(s,r)),10),this.label=new Tn(.073,.073,.12,10,1,!0),this.ring=new Ri(.17,.015,5,20),this.materials=new Map,this.geometries=new Map,this.textures=t?vb():{},this.chunkIndex=null,this.labelMaterial=new pt({color:"#cdbf94",roughness:.94}),this.labelMaterial.name="Bottle_label",typeof document<"u"){const s=document.createElement("canvas");s.width=128,s.height=64;const r=s.getContext("2d");r.fillStyle="#cdbf94",r.fillRect(0,0,128,64),r.fillStyle="#753c31",r.fillRect(0,23,128,18),r.fillStyle="#e6d5b0",r.font="bold 10px Arial",r.textAlign="center",r.fillText("КВАС",32,36),r.fillText("КВАС",96,36),this.labelMaterial.color.set("#ffffff"),this.labelMaterial.map=new Gt(s),this.labelMaterial.map.colorSpace=tt}}material(e,t="plain"){const n=t+e;if(!this.materials.has(n)){const s=this.textures,r=new pt({color:e,roughness:t==="metal"?.76:.96});t==="brick"&&(r.map=s.brick,r.bumpMap=s.brickBump,r.bumpScale=.028),["asphalt","concrete","rust"].includes(t)&&(r.map=s[t],r.bumpMap=s[t],r.bumpScale=t==="asphalt"?.025:.012),this.materials.set(n,r)}return this.materials.get(n)}metricBox(e,t,n,s){const r=[e,t,n,s].join(":");if(!this.geometries.has(r)){const o=new Xt(e,t,n),a=o.attributes.position,l=o.attributes.normal,c=o.attributes.uv;for(let u=0;u<a.count;u++)Math.abs(l.getY(u))>.5?c.setXY(u,a.getX(u)/s,a.getZ(u)/s):c.setXY(u,(Math.abs(l.getX(u))>.5?a.getZ(u):a.getX(u))/s,a.getY(u)/s);this.geometries.set(r,o)}return this.geometries.get(r)}setEnvironment(e){for(const t of this.chunks.values()){this.scene.remove(t.group);for(const n of t.local)n.dispose()}this.chunks.clear(),this.template=e,this.chunkIndex=null,e.traverse(t=>{t.isMesh&&(t.castShadow=!t.userData.noShadow,t.receiveShadow=!0)})}addBottles(e,t){const n=[];for(let s=0;s<(t%4===0?2:1);s++){const r=new gt,o=new be(this.body,this.material("#756033")),a=new be(this.label,this.labelMaterial),l=new be(this.ring,this.material("#e7c25c"));if(a.position.y=.18,l.rotation.x=-Math.PI/2,l.position.y=.018,r.add(o,a,l),this.editable)for(const h of[o,a,l])h.userData.module={kind:"pickup",id:String(s)};const c=s?21:t===0?2:5+(t*7%13+13)%13,u=Math.sin(t*3+s*2.1)*1.5;r.position.set(c,0,u),e.add(r),n.push({mesh:r,x:t*26+c,z:u,taken:!1})}return n}makeChunk(e){if(this.template){const m=this.templateForChunk?.(e)??this.template,p=new gt;p.position.x=e*26;const x=m.clone(!0),y=[];x.traverse(b=>{b.updateMatrix(),b.matrixAutoUpdate=!1,b.isInstancedMesh&&y.push(b)}),p.add(x);const v=this.addBottles(p,e);return this.scene.add(p),{group:p,bottles:v,local:y}}const t=new gt,n=[],s=[],r=[];t.position.x=e*26;let o={kind:"road",id:"road"};const a=(m,p)=>o={kind:m,id:String(p)},l=(m,p,x,y,v,b,M,T="plain")=>{const L=["brick","asphalt","concrete","rust"].includes(T),E=L?this.metricBox(m,p,x,T==="asphalt"?4:2):this.unit,C=new be(E,this.material(y,T));return L||C.scale.set(m,p,x),C.position.set(v,b,M),this.editable&&(C.userData.module=o),r.push(C),C};l(26,.2,18,"#c3c3bd",13,-.1,0,"asphalt"),l(26,.05,1.7,"#b5b5a7",13,-.03,-2.85,"concrete"),l(26,.18,.25,"#868a7c",13,-.02,-1.98,"concrete"),l(26,.05,1.6,"#a6a99b",13,-.035,3.3,"concrete"),l(26,.18,.25,"#858b7c",13,-.02,2.5,"concrete");const c=["#c4b8ab","#c1b1a3","#b2ada2","#c1b3a7"];for(let m=0;m<4;m++){const p=3.25+m*6.5,x=6.8+(Math.abs(e)+m)%3*.5,y=c[((e+m)%4+4)%4];a("building",m),l(6.5,x,3,y,p,x/2,-5.6,"brick"),l(6.5,.18,3.15,"#797b70",p,x,-5.6,"concrete"),l(6.5,.45,.08,"#535c50",p,.22,-4.06);for(let v=0;v<4;v++)for(let b=0;b<3;b++){const M=p-1.8+b*1.8,T=1.25+v*1.65;if(a(v===0&&b===1?"door":"window",m+":"+v+":"+b),v===0&&b===1){l(.95,2,.15,m%2?"#48574e":"#66514a",M,1,-4,"rust"),l(1.12,.12,.22,"#858a7d",M,2,-3.96,"concrete"),l(.055,.06,.05,"#b4aa83",M+.31,1,-3.89);continue}if(l(.93,1.25,.11,"#777e73",M,T,-4.01),l(.75,1.05,.14,"#343e3b",M,T,-3.98),l(.035,1.05,.17,"#616b62",M,T,-3.97),l(.75,.035,.17,"#616b62",M,T,-3.97),l(1,.09,.25,"#8d9183",M,T-.64,-3.94,"concrete"),b===2&&v===1){a("air_conditioner",m),l(.65,.38,.4,"#9a9b8c",M,T-.36,-3.72);for(let L=0;L<4;L++)l(.52,.023,.04,"#525d54",M,T-.48+L*.07,-3.5)}}if(a("fire_escape",m),m%2===0)for(let v=1;v<=3;v++){const b=v*1.65+.25;l(2.5,.09,.7,"#343d35",p,b,-3.65,"metal"),l(2.5,.05,.05,"#323d35",p,b+.7,-3.28,"metal");for(let M=0;M<6;M++)l(.035,.7,.035,"#343d35",p-1.2+M*.48,b+.35,-3.28,"metal");for(const M of[-1.2,1.2])l(.045,.7,.65,"#343d35",p+M,b+.35,-3.65,"metal");if(v<3){for(const M of[-.32,.32])l(.04,1.95,.05,"#343d35",p+.6+M,b+.86,-3.42,"metal").rotation.z=-.38;for(let M=0;M<8;M++)l(.7,.035,.06,"#343d35",p+.3+M*.09,b+.13+M*.21,-3.42,"metal")}if(v===2&&(e+m)%3===0)for(let M=0;M<3;M++)l(.4,.55,.025,M%2?"#9d9e8c":"#c5c0a9",p-.65+M*.45,b+.4,-3.22)}if(a("downpipe",m),l(.07,x,.1,"#48574c",p+2.9,x/2,-3.97,"metal"),a("pallet",m),m===1){for(let v=0;v<4;v++)l(.1,1.1,.08,"#81775c",p-1+v*.25,.57,-3.7).rotation.z=-.12;l(1,.08,.08,"#81775c",p-.6,.35,-3.65)}}for(const m of[4,17])a("streetlight",m),l(.1,4.2,.1,"#657365",m,2.1,-2.5,"metal"),l(1.25,.08,.1,"#657365",m+.55,4.16,-2.5,"metal"),l(.6,.15,.3,"#9a9e8d",m+1.05,4.06,-2.5),l(.26,.22,.26,"#696f5e",m,.11,-2.5);a("bench",0),l(1.7,.12,.6,"#76654c",11,.55,-2.7),l(1.7,.55,.1,"#76654c",11,.86,-3);for(const m of[-.6,.6])l(.08,.55,.4,"#435347",11+m,.27,-2.7,"metal");a("dumpster",0),l(.85,1.05,.7,"#b0b8a0",21,.52,-2.7,"rust"),l(.94,.07,.78,"#5d6c59",21,1.07,-2.7,"metal");for(let m=0;m<15;m++){a("litter",m);const p=(m*7.13+Math.abs(e)*.9)%26,x=m%2?-1.7-m%3*.14:2.15;l(.16+m%3*.04,.009,.11,m%4?"#b3b2a0":"#815243",p,.012,x).rotation.y=m*2.1}const u=document.createElement("canvas");u.width=512,u.height=128;const h=u.getContext("2d");h.fillStyle="#363e34",h.fillRect(0,0,512,128),h.fillStyle="#c8c3a9",h.font="bold 34px Arial",h.textAlign="center",h.fillText(["ДВОР № 7","ПРОХОД","ДВОРОВЫЕ ИСТОРИИ"][(e%3+3)%3],256,76);const d=new Gt(u);d.colorSpace=tt;const f=new Ft({map:d}),g=new be(this.plane,f);g.scale.set(2.5,.625,1),g.position.set(8,2.8,-3.89),this.editable&&(g.userData.module={kind:"sign",id:"sign"}),t.add(g),s.push(d,f);const _=new Map;for(const m of r){const p=m.geometry.uuid+m.material.uuid;_.has(p)||_.set(p,[]),_.get(p).push(m)}for(const m of _.values()){const p=m[0],x=new Lr(p.geometry,p.material,m.length);this.editable&&(x.userData.modules=m.map(y=>y.userData.module));for(let y=0;y<m.length;y++)m[y].updateMatrix(),x.setMatrixAt(y,m[y].matrix);x.castShadow=!0,x.receiveShadow=!0,x.computeBoundingSphere(),t.add(x),s.push(x)}return n.push(...this.addBottles(t,e)),this.scene.add(t),{group:t,bottles:n,local:s}}update(e){const t=Math.floor(e/26);if(t!==this.chunkIndex){this.chunkIndex=t;for(let n=t-2;n<=t+2;n++)this.chunks.has(n)||this.chunks.set(n,this.makeChunk(n));for(const[n,s]of this.chunks)if(Math.abs(n-t)>2){this.scene.remove(s.group);for(const r of s.local)r.dispose();this.chunks.delete(n)}}}nearestBottle(e,t=.95){let n=null;for(const s of this.chunks.values())for(const r of s.bottles){const o=Math.hypot(r.x-e.x,r.z-e.z);!r.taken&&o<t&&(t=o,n=r)}return n}takeBottle(e,t){return!t||t.taken||!Array.from(this.chunks.values()).some(n=>n.bottles.includes(t))||Math.hypot(t.x-e.x,t.z-e.z)>=.95?!1:(t.taken=!0,t.mesh.visible=!1,!0)}collect(e){let t=0;for(const n of this.chunks.values())for(const s of n.bottles)!s.taken&&Math.hypot(s.x-e.x,s.z-e.z)<.65&&(s.taken=!0,s.mesh.visible=!1,t++);return t}}class Mb{constructor(e){this.scene=e;const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),s=n.createRadialGradient(64,64,5,64,64,64);s.addColorStop(0,"rgba(0,0,0,.55)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,128,128),this.geometry=new Jt(1,1),this.material=new Ft({map:new Gt(t),transparent:!0,depthWrite:!1})}add(){const e=new be(this.geometry,this.material);return e.rotation.x=-Math.PI/2,this.scene.add(e),e}update(e){const t=e.shadow;t&&(t.visible=e.root.visible,t.position.set(e.root.position.x,.012,e.root.position.z),t.scale.set(.9+Math.max(0,e.root.position.y)*.2,.6,1))}}const df={mode:"free-preview",async request(){return{completed:!0}}};async function bb(i,e,t,n=3e4){let s;try{return(await Promise.race([Promise.resolve().then(()=>i.request({placement:e,runId:t})),new Promise(r=>{s=setTimeout(()=>r({completed:!1}),n)})]))?.completed===!0}catch{return!1}finally{clearTimeout(s)}}const ff="bomzh:endless-record:v1",Oo=i=>Number.isSafeInteger(i)&&i>=0;function pf(i){try{const e=JSON.parse((i??globalThis.localStorage).getItem(ff));return e&&Oo(e.levels)&&Oo(e.score)?e:{levels:0,score:0}}catch{return{levels:0,score:0}}}function Sb(i,e){const t=pf(e);if(!Oo(i.levels)||!Oo(i.score)||!(i.levels>t.levels||i.levels===t.levels&&i.score>t.score))return t;const s={levels:i.levels,score:i.score};try{(e??globalThis.localStorage).setItem(ff,JSON.stringify(s))}catch{}return s}function mf(i,e=0){i.updateMatrixWorld(!0);const t=new Dc,n=new yi(new w(0,0,1),-e),s=new w,r=[];for(const o of[-1,1])for(const a of[-1,1])t.setFromCamera(new pe(o,a),i),t.ray.intersectPlane(n,s)&&r.push(s.x);return[Math.min(...r),Math.max(...r)]}function wb(i,e,t){const n=[];for(const s of[-1.4,1.4])for(const r of[0,3.2])for(const o of[-.6,.6])n.push(new w(e+s,r,t+o).project(i).x);return[Math.min(...n),Math.max(...n)]}function Eb(i,e,t){let s=mf(i,t)[e<0?0:1]+e*2.5;for(let r=0;r<20;r++){const o=wb(i,s,t);if(e<0?o[1]<-1.15:o[0]>1.15)return{x:s,z:t,side:e,projected:o};s+=e*2}throw new Error("Could not locate an offscreen entrance")}const J=i=>document.getElementById(i),Bc=new URLSearchParams(location.search).get("location");let jn=Bc==="entrance"?"entrance":"street";if(!Bc)try{localStorage.getItem("bomzh:starting-location")==="entrance"&&(jn="entrance")}catch{}let En=jn,Gi=null,Eo=[],Wt=null,Kt=null;const Tb=Bc==="courtyard",Xi=ky();zl(Xi,"entrance");Gl(Xi,"entrance");const Ab=Hy(Xi),zc=["lighting","compositing"].includes(new URLSearchParams(location.search).get("editor")),bs=new Ey;J("lighting-open").hidden=!zc;const bt=new mc;bt.background=new De("#92968d");bt.fog=new pc("#92968d",24,62);const qi=fM(new URLSearchParams(location.search).get("quality"),innerWidth,devicePixelRatio),Nr=qi.lowQuality,gf=new uM(qi.pixelRatio),Tt=new iy({canvas:J("game"),antialias:!Nr,powerPreference:"high-performance"});Tt.setPixelRatio(qi.pixelRatio);Tt.shadowMap.enabled=!Nr;Tt.shadowMap.type=ic;Tt.shadowMap.autoUpdate=!0;Tt.shadowMap.needsUpdate=!0;Tt.outputColorSpace=tt;Tt.toneMapping=ad;Tt.toneMappingExposure=1.08;const Fn=new $t(40,1,.1,100),qa=Fn.clone(),In=new vM(Tt,{grading:bs,lowQuality:Nr,samples:qi.samples,enabled:new URLSearchParams(location.search).get("dof")==="on"}),nd=new w,mn=new ub(Fn,{reducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches});try{const i=localStorage.getItem("bomzh:camera-shake:v1");(i==="on"||i==="off")&&mn.setShakeEnabled(i==="on")}catch{}J("camera-shake").checked=mn.isShakeEnabled();J("camera-shake").onchange=i=>{mn.setShakeEnabled(i.target.checked);try{localStorage.setItem("bomzh:camera-shake:v1",i.target.checked?"on":"off")}catch{}};const Hc=new Od("#e1e4e2","#696a67",2.6);bt.add(Hc);const An=new Fo("#f1e8df",2.2);An.position.set(-8,14,6);An.castShadow=!0;An.shadow.mapSize.set(qi.shadowSize,qi.shadowSize);Object.assign(An.shadow.camera,{left:-18,right:18,top:14,bottom:-14,far:45});An.shadow.bias=-.001;An.shadow.normalBias=.025;An.shadow.radius=3;bt.add(An,An.target);const zs=new wM({scene:bt,renderer:Tt,sun:An,ambient:Hc,lowQuality:Nr});new URLSearchParams(location.search).get("lighting")==="reference"&&zs.reset();const _f=new Vy({scene:bt,lighting:zs,sun:An,ambient:Hc,renderer:Tt,lampClock:Ab}),Rb=i=>new pt({color:i,roughness:.92}),Zl=new Mb(bt),To=new xb(bt),xf=new dM(bt),Ss=new Dy(bt),ko=new rM(bt),Cb=new Sy(bt,{lowQuality:Nr}),vf=new sM(bt),nn=new aM(bt),kn=new yb(bt,{textured:!1});kn.update(-8);const yf=new Gy(bt,kn),Ne={health:100,bottles:0,drunkBottles:0,score:0,defeated:0,bruisersDefeated:0,over:!1},P={x:-8,z:.5,facing:1,heading:Math.PI/2,attack:null,attackTime:0,cooldowns:{jab:0,kick:0,spray:0,burp:0},queuedAttack:null,stun:0,combo:0,lastJab:-10,invulnerable:0,stamina:100,regenDelay:0,dodge:0,dodgeCooldown:0,dashX:1,dashZ:0},At=new qy;At.beginRun(globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`);const mr=new Wy;let tn=null,gr=null,Ci=!1,Mf=!1,Si=!1;const lt=new cb;let bf=null,vt=null,fn=0,Wi=-8,Hs=null,ot=!1,Pr=pf();const ds=[],Ao=[],Pt=[],st=new Set;let Sf=0,xt=0,wf=0,ii=null,Ro=!1,It=!1;function Vc(i){if(Tb&&i<=0)return{courtyard:!0,variant:Math.max(0,vs.indexOf(new URLSearchParams(location.search).get("yard")))};const e=Hl(i,jn);return En==="street"&&i>=0&&e.location==="entrance"?{...e,courtyard:!0}:e}function Gc(i){return En==="street"&&!!Vc(Math.floor(i/26)).courtyard}function Ql(i){if(!Gc(i))return-2;const e=(i%26+26)%26;return-2-1.5*Math.max(0,Math.min(1,(e-4.8)/2,(21.2-e)/2))}function _o(i,e,t,n=!1){const s=$d(i,e,t,[P,...Pt],(r,o)=>{if(!i.entering){const[a,l]=lt.bounds;r=it.clamp(r,a+.3,l-.3)}return[r,it.clamp(o,Ql(r),2)]});return n&&Xd(i,s),s}function Bo(){const i=En==="street"&&Gc(P.x)?Zd[Vc(Math.floor(P.x/26)).variant]:Qd[En];J("location-name").textContent=i,document.querySelectorAll("[data-start-location]").forEach(e=>{e.classList.toggle("selected",e.dataset.startLocation===jn),e.setAttribute("aria-pressed",String(e.dataset.startLocation===jn)),e.disabled=xt>0})}function Ef(i){En=i;for(const e of Pt)e.health<=0&&(e.corpseAge=4,e.root.visible=!1,e.warning.visible=!1);By(kn,i==="entrance"?Xi:Gi,P.x),ko.setVisible(i==="street"),Bo()}function Pb(i){i!==En&&(P.heading=Math.PI,P.facing=1,Wt={to:i,elapsed:0,applied:!1},st.clear(),J("location-transition").hidden=!1,J("transition-title").textContent=Qd[i],J("transition-subtitle").textContent=i==="entrance"?"С улицы — в подъезд":"Снова на район")}function Ib(i){if(!Wt)return;const e=Wt;e.elapsed+=i;const t=Math.min(1,e.elapsed/.22,(.75-e.elapsed)/.28);J("location-transition").style.opacity=Math.max(0,t),!e.applied&&e.elapsed>=.25&&(e.applied=!0,Kt&&(P.x=Math.floor(Kt.x/26)*26+(e.to==="entrance"?15.15:23.2),P.z=-1.45,P.heading=Math.PI/2,P.facing=1,Wi=Math.max(Wi,P.x-.25)),Ef(e.to),Kt=null,Ss.set(null)),e.elapsed>=.75&&(Wt=null,J("location-transition").hidden=!0,st.clear())}for(const i of document.querySelectorAll("[data-start-location]"))i.onclick=()=>{if(!(!It||xt>0)){jn=i.dataset.startLocation;try{localStorage.setItem("bomzh:starting-location",jn)}catch{}Ef(jn)}};function Yt(i){J("toast").textContent=i,wf=xt+2}function Ln(i=400){if(!Ro)return;ii??=new AudioContext,ii.resume();const e=ii.createOscillator(),t=ii.createGain();e.type="triangle",e.frequency.setValueAtTime(i,ii.currentTime),t.gain.setValueAtTime(.05,ii.currentTime),t.gain.exponentialRampToValueAtTime(.001,ii.currentTime+.12),e.connect(t),t.connect(ii.destination),e.start(),e.stop(ii.currentTime+.13)}J("sound").onclick=()=>{Ro=!Ro,J("sound").textContent="Звук: "+(Ro?"вкл.":"выкл."),Ln()};function Sn(){Pr=Sb({levels:lt.index,score:Ne.score}),J("health").textContent=Math.ceil(Ne.health),J("health-bar").value=Ne.health,J("level").textContent=lt.index+1,J("score").textContent=Ne.score,J("best").textContent=Pr.levels,Wc()}function Wc(){J("wallet").textContent=At.profile.coins,J("shop-open").disabled=!It||!!vt,J("shop-coins").textContent=At.profile.coins,J("storage-hint").hidden=At.persistent,Ne.over&&Xc()}function Xc(){const i=At.run;J("run-coins").textContent=`Монеты за забег: ${i.earned}${i.doubled?" + "+i.earned+" бонус":""} · В кошельке: ${At.profile.coins}`,J("revive").hidden=i.revived||i.closed,J("revive").disabled=Si,J("double-coins").hidden=i.doubled,J("double-coins").disabled=Si||i.earned===0,J("reward-note").textContent=i.doubled?"Монеты удвоены. Можно начать новый забег.":"Второй шанс: 60 здоровья и 3 секунды защиты. Бонусы бесплатные в тестовой версии. Удвоение завершает забег.",J("restart").disabled=Si,J("ending-shop").disabled=Si}function Lb(){Ne.over=!0,st.clear(),Sn(),J("ending").hidden=!1,J("ending-title").textContent="Забег окончен",J("ending-text").textContent=`Пройдено участков: ${lt.index}. Очки: ${Ne.score}. Побеждено: ${Ne.defeated}. Рекорд: ${Pr.levels} участков.`,J("reward-status").textContent="",Xc()}function Tf(){const i=J("shop-items");i.replaceChildren();for(const e of Cr){const t=At.profile.owned.includes(e.id),n=At.profile.equipped===e.id,s=document.createElement("article");s.className="shop-item"+(n?" selected":""),s.innerHTML=`<span class="shop-icon" aria-hidden="true">${e.icon}</span><div><h3>${e.name}</h3><p>${e.description}</p></div>`;const r=document.createElement("button");r.dataset.cosmetic=e.id,r.textContent=n?"Надето":t?"Надеть":`${e.price} 🪙 · Купить`,r.disabled=n||!t&&At.profile.coins<e.price,r.onclick=()=>{(t?At.equip(e.id):At.buy(e.id).ok)&&(gr?.set(At.profile.equipped),J("shop-status").textContent=t?"Образ надет.":"Куплено и надето!",Wc(),Tf())},s.append(r),i.append(s)}}function Af(){!It||vt||Si||Ci||ec.isOpen()||(Mf=ot,Ci=!0,ot=!0,st.clear(),J("pause-menu").hidden=!0,J("shop").hidden=!1,J("shop-status").textContent="",Wc(),Tf(),J("shop-close").focus())}function Rf(){Ci=!1,ot=Mf,J("shop").hidden=!0,J("pause-menu").hidden=!ot,Ne.over||J("shop-open").focus()}J("shop-open").onclick=Af;J("ending-shop").onclick=Af;J("shop-close").onclick=Rf;async function Cf(i){if(!Ne.over||Si||Ci)return;const e=At.run;if(i==="revive"&&(e.revived||e.closed)||i==="double"&&(e.doubled||e.earned===0))return;if(Si=!0,Xc(),J("reward-status").textContent="Получаем бонус…",await bb(df,i,e.id)&&Ne.over&&At.claim(i,e.id))if(i==="revive"){Ne.over=!1,Ne.health=60,P.stamina=100,P.stun=0,P.hurt=0,P.attack=null,P.queuedAttack=null,P.dodge=0,P.combo=0,P.invulnerable=3,st.clear(),xr=0;for(const n of Pt)n.windup=0,n.strike=0,n.cooldown=Math.max(1.5,n.cooldown),n.stun=Math.max(1,n.stun),n.warning.visible=!1;J("ending").hidden=!0,Yt("Второй шанс! 3 секунды защиты")}else J("reward-status").textContent="Монеты удвоены!";else J("reward-status").textContent="Бонус не получен. Можно попробовать ещё раз.";Si=!1,Sn()}J("revive").onclick=()=>Cf("revive");J("double-coins").onclick=()=>Cf("double");J("restart").onclick=()=>location.reload();function Xo(){if(Hs){Fr();return}if(!(tn?.visible||Wt)){if(ec.isOpen()){ec.hide();return}!It||Ne.over||Ci||(ot=!ot,st.clear(),J("pause-menu").hidden=!ot,ot&&J("resume").focus())}}const ec=EM(zs,{open:()=>{if(!zc||!ot||Ci)return!1;st.clear(),J("pause-menu").hidden=!0},close:()=>{J("pause-menu").hidden=!1,J("lighting-open").focus()}},bs);J("back-to-menu").onclick=()=>{J("pause-menu").hidden=!0,tn?.show()};J("ending-menu").onclick=()=>tn?.show();J("pause").onclick=Xo;J("resume").onclick=Xo;function _r(i){if(i!=="kick"&&!(!It||Ne.over||ot||Wt||vt||P.stun>0||P.dodge>0||P.pickup)){if(P.attack){P.attackTime/(P.attackSpec??bn[P.attack]).duration>.15&&(P.queuedAttack={kind:i,until:xt+(P.attackSpec??bn[P.attack]).duration-P.attackTime+.2});return}if(!(P.cooldowns[i]>0)){if(!hf(P,i)){Yt("Передохни или продолжай кулаками — они не тратят силы");return}if(i==="jab"){const e=(nn.equipped?jd(P.userActions).length:Ds(P.userActions).length)||3;P.combo=xt-P.lastJab<(P.attackSpec?.duration??.65)+.65?P.combo%e+1:1,P.lastJab=xt}else P.combo=0;if(P.attackSpec=i==="jab"?{...bn.jab,...Yd(P.userActions,P.combo-1)}:P.userActions?.clips[i]?{...bn[i],duration:P.userActions.clips[i].duration,clip:i}:bn[i],i==="jab"&&nn.equipped){const e=fy(P.userActions,P.combo-1);e||(P.combo=1),P.attackSpec={...oM(nn.equipped.type,bn.jab),...e}}P.attackSerial=(P.attackSerial??0)+1,P.attack=i,P.attackTime=0,P.cooldowns[i]=P.attackSpec.cooldown,P.hit=!1,P.sprayHits=new Set,Ln(i==="burp"?90:i==="kick"?180:300)}}}function Pf(){if(!It||Ne.over||ot||Wt||vt||P.dodge>0||P.dodgeCooldown>0||P.pickup||!hf(P,"dodge"))return;let i=Number(st.has("right"))-Number(st.has("left")),e=Number(st.has("down"))-Number(st.has("up"));const t=Math.hypot(i,e);t?(i/=t,e/=t):(i=Math.sin(P.heading),e=Math.cos(P.heading));const n=cM(P.userActions);P.dashX=i,P.dashZ=e,P.heading=pr(i,e),Math.abs(i)>.01&&(P.facing=Math.sign(i)),P.dodgeDuration=n.duration,P.dodgeSpeed=n.speed,P.dodge=n.duration,P.dodgeCooldown=n.cooldown,P.invulnerable=Math.max(P.invulnerable,n.invulnerability),P.hurt=0,P.attack=null,P.queuedAttack=null,P.stun=0,P.combo=0,mn.impact(.08),Ln(520)}function id(i){Ne.score+=i.type==="bruiser"?75:25,Ne.defeated++,At.earn(i.type==="bruiser"?8:3),i.type==="bruiser"&&Ne.bruisersDefeated++}function If(){if(!It||Ne.over||ot||Wt||vt||P.stun>0||P.dodge>0||P.attack||P.pickup)return;if(fn<100){Yt("Суперсила копится от попаданий");return}const i=mb(P,Pt);if(!i){Yt("Подойди к противнику ближе");return}fn=0,P.attack=null,P.queuedAttack=null,st.clear();const{side:e,endX:t}=_b(P,i,[Math.max(Wi,lt.bounds[0]),lt.bounds[1]]);vt={target:i,elapsed:0,hit:!1,startX:P.x,startZ:P.z,endX:t,side:e},P.facing=e,P.heading=e*Math.PI/2;for(const n of Pt)n!==i&&(n.root.visible=!1),n.warning.visible=!1,n.bar.visible=!1,n.badge.visible=!1;document.body.classList.add("finishing"),J("cinema").querySelector("span").textContent="РЕШАЮЩИЙ УДАР",J("cinema").hidden=!1}function qc(){const i=kn.nearestBottle(P),e=nn.nearby;return i&&(!e||Math.hypot(i.x-P.x,i.z-P.z)<=Math.hypot(e.x-P.x,e.z-P.z))?{kind:"bottle",item:i}:e?{kind:"weapon",item:e}:null}function Lf(){if(!It||ot||Wt||Ne.over||vt||P.attack||P.pickup||P.dodge>0||P.stun>0)return;if(Kt&&Ss.near(P)){Pb(Kt.to);return}const i=qc();if(!i)return;const e=i.item;if(i.kind==="bottle"){Hs=e,ot=!0,st.clear(),J("bottle-choice").hidden=!1,J("bottle-drink").focus();return}if(ef(P,"weapon_pickup",e)){const n=e.x-P.x,s=e.z-P.z;P.heading=pr(n,s),Math.abs(n)>.01&&(P.facing=Math.sign(n)),st.clear();return}const t=nn.pickup(e);t&&(P.combo=0,P.lastJab=-10,Yt(`${t} в руках · J — удар`),Ln(480))}function Fr(){Hs=null,ot=!1,st.clear(),J("bottle-choice").hidden=!0}function Df(){Ne.drunkBottles++,fn=Jl(fn,20),Ne.drunkBottles%5===0&&(Ne.health=Math.min(100,Ne.health+5)),Yt("Глоток кваса · +20% суперсилы"),Ln(650),Sn()}function jc(i){const e=Hs;if(!e||(Fr(),!kn.takeBottle(P,e)))return;Ne.bottles++,At.earn(3),Ne.score+=10,P.combo=0,P.lastJab=-10,ef(P,i==="smash"?"bottle_smash":"bottle_pickup",1)||Df(),Sn()}J("bottle-drink").onclick=()=>jc("drink");J("bottle-smash").onclick=()=>jc("smash");J("bottle-cancel").onclick=Fr;J("bottle-choice").onclick=i=>{i.target===J("bottle-choice")&&Fr()};J("weapon-pickup").onpointerdown=i=>{i.preventDefault(),Lf()};J("super").onpointerdown=i=>{i.preventDefault(),If()};J("dodge").onpointerdown=i=>{i.preventDefault(),Pf()};for(const i of document.querySelectorAll("[data-attack]"))i.addEventListener("pointerdown",e=>{e.preventDefault(),_r(i.dataset.attack)});const ms=new oy(J("joystick"),()=>It&&!ot&&!Wt&&!tn?.visible&&!Ne.over),tc={A:"left",D:"right",W:"up",S:"down",a:"left",ArrowLeft:"left",d:"right",ArrowRight:"right",w:"up",ArrowUp:"up",s:"down",ArrowDown:"down"};window.addEventListener("keydown",i=>{if(Hs){if(i.key==="Escape")i.preventDefault(),Fr();else if(!i.repeat&&(i.code==="Digit1"||i.code==="Digit2"))i.preventDefault(),jc(i.code==="Digit1"?"drink":"smash");else if(i.key==="Tab"){const e=[J("bottle-drink"),J("bottle-smash"),J("bottle-cancel")],t=e.indexOf(document.activeElement);i.preventDefault(),e[(t+(i.shiftKey?2:1)+3)%3].focus()}return}if(i.key==="Escape"&&!i.repeat){Ci?Rf():Xo();return}if(!(ot||Wt)&&(i.key==="Shift"&&st.add("slow"),tc[i.key]&&(i.preventDefault(),st.add(tc[i.key])),!i.repeat)){const e=i.key.toLowerCase();(e==="e"||i.code==="KeyE")&&(i.preventDefault(),Lf()),e==="f"&&If(),e==="j"&&_r("jab"),e==="l"&&_r("spray"),e==="k"&&_r("burp"),i.code==="Space"&&(i.preventDefault(),Pf())}});window.addEventListener("keyup",i=>st.delete(i.key==="Shift"?"slow":tc[i.key]));window.addEventListener("blur",()=>st.clear());document.addEventListener("visibilitychange",()=>{st.clear()});function sd(i,e){const t=new gt,n=ab(i);n.updateMatrixWorld(!0);const s=new _n().setFromObject(n),r=s.getSize(new w),o=s.getCenter(new w),a=e/r.y;n.scale.setScalar(a),n.position.set(-o.x*a,-s.min.y*a,-o.z*a),t.add(n),bt.add(t);const l=[];n.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0),u.isBone&&l.push({bone:u,rest:u.rotation.clone()})});const c={root:t,visual:n,bones:l,height:e,walkDistance:0,baseVisualY:n.position.y,shadow:Zl.add()};return tM(c),c}const ja=new TM;try{let r=function(u){const h=sd(u.model==="hero"?i.scene:e.scene,u.height);return Ih(h,u.model==="hero"?t:s),h},o=function(u){bt.remove(u.root,u.shadow);const h=new Set;u.visual.traverse(d=>{if(d.isSkinnedMesh&&h.add(d.skeleton),d.isMesh&&d.userData.wardrobeMaterials)for(const f of Array.isArray(d.material)?d.material:[d.material])f.dispose()});for(const d of h)d.dispose()},l=function(){if(P.visual){gr?.set("classic"),o(P);for(const h of[...a,"userActions","userBoneIndices","walkSpeed","walkStride","runSpeed","runStride","closedLoops","referenceFingers","referenceFingersByClip","poseHierarchy","bindByName","lastMotion","transitionFrom","motionId","transitionStart","weaponReferenceRotation"])delete P[h]}const u=r(ys.find(h=>h.id===mr.character));a=Object.keys(u),Object.assign(P,u),nn.hand=null,nn.palmOffset=null,mr.apply(P),gr=new rf(P),gr.set(At.profile.equipped),P.root.position.set(P.x,0,P.z),P.root.rotation.y=P.heading,ri(P,xt,!1,null,0)},c=function(u,h,d,f,g){const _=hb[d],m={..._,health:Math.round(_.health*g.health),damage:Math.round(_.damage*g.damage),speed:_.speed*g.speed,windup:_.windup*g.windup},p=sd(e.scene,d==="bruiser"?2.2:d==="runner"?1.8:1.95);Ih(p,s),p.root.position.set(u,0,h),p.root.rotation.y=-Math.PI/2;const x=new be(new Jt(.8,.07),new Ft({color:m.color,side:Lt}));x.position.y=2.4,p.root.add(x);const y=new be(new hi(m.range-.08,m.range,32),new Ft({color:d==="bruiser"?"#ec738d":"#f2bb51",transparent:!0,opacity:.55,side:Lt,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.position.set(u,.015,h),y.visible=!1,bt.add(y);const v=new be(new Ac(d==="bruiser"?.14:.08),Rb(m.color));v.position.set(-.7,2.7,0),p.root.add(v),Pt.push({...p,x:u,z:h,type:d,spec:m,encounter:f,entering:!0,corpseAge:0,down:0,stun:0,knockback:0,health:m.health,windup:0,cooldown:1,bar:x,warning:y,badge:v,flash:0,aimX:-1,aimZ:0})};const[i,e,t,n,s]=await Promise.all([ja.loadAsync("./models/hobo.glb?v=oct29"),ja.loadAsync("./models/enemy.glb?v=perf1"),fetch("./models/hobo-actions.json?v=run1").then(u=>{if(!u.ok)throw new Error("Actions unavailable");return u.json()}),ja.loadAsync("./models/street.glb?v=bench1"),fetch("./models/enemy-actions.json?v=run1").then(u=>{if(!u.ok)throw new Error("Enemy actions unavailable");return u.json()})]);n.scene.traverse(u=>{u.isMesh&&(/graffiti/i.test(u.name)||/graffiti/i.test(u.material?.name??""))&&(u.visible=!1)}),xy(n.scene),yM(n.scene),Ry(n.scene),My(n.scene),sy(n.scene),zl(n.scene,"street"),Gl(n.scene,"street"),Gi=n.scene,Eo=vs.map((u,h)=>{const d=Ly(Gi,h);return zl(d,"courtyard",h),Gl(d,"street"),d}),MM(n.scene,Tt,zs,Eo),kn.templateForChunk=u=>{if(En==="entrance")return Xi;const h=Vc(u);return h.courtyard?Eo[h.variant]:Gi},kn.setEnvironment(En==="entrance"?Xi:Gi),kn.update(-8),ko.setVisible(En==="street"),Bo();let a=[];l(),tn=new nM({renderer:Tt,wallet:At,appearance:mr,makeActor:u=>{const h=r(u);return bt.remove(h.root,h.shadow),h},record:()=>Pr,onOpen:()=>{Bo(),ot=!0,st.clear(),J("pause-menu").hidden=!0,J("ending").hidden=!0,J("menu-play").querySelector("span").textContent=Ne.over?"Новый забег":xt>0?"Продолжить":"Начать забег"},onStart:()=>{if(Ne.over){sessionStorage.setItem("bomzh:start-now","1"),location.reload();return}l(),ot=!1,J("pause-menu").hidden=!0,Sn()}}),bf=c,It=!0,Nf(),J("loading").style.display="none",Sn(),zc?(mn.update({player:P,enemies:Pt,time:0,dt:3,width:innerWidth,height:innerHeight}),Xo(),J("lighting-open").click()):(mn.update({player:P,enemies:Pt,time:0,dt:3,width:innerWidth,height:innerHeight}),tn.show(),sessionStorage.getItem("bomzh:start-now")==="1"&&(sessionStorage.removeItem("bomzh:start-now"),J("menu-play").click()))}catch(i){console.error(i),J("load-status").textContent="Не удалось загрузить модели. Проверь соединение и обнови страницу."}let xr=0;const Co=[];function Ya(i,e,t=.18){mn.impact(t);const n=new be(new hi(.1,.22,12),new Ft({color:16769690,transparent:!0,depthWrite:!1,side:Lt}));n.position.set(i,1.1,e),n.quaternion.copy(Fn.quaternion),bt.add(n),Co.push({mesh:n,age:0}),xr=.055}const Db=new hg;let or=null;function Uf(){(ot||Wt||Ne.over||vt)&&ms.reset(),Sf++,requestAnimationFrame(Uf);const i=Db.getDelta(),e=gf.sample(i,It&&!ot&&!document.hidden);e!==null&&(or=e),or!==null&&It&&!ot&&!P.moving&&!P.attack&&!P.pickup&&!vt&&st.size===0&&(Tt.setPixelRatio(or),Yc(),or=null);const t=Math.min(i,.05);Ib(ot?0:t);const n=xr>0||ot||Wt?0:t;xr=Math.max(0,xr-t),xt+=n;for(let u=Co.length-1;u>=0;u--){const h=Co[u];h.age+=t,h.mesh.scale.setScalar(1+h.age*6),h.mesh.material.opacity=1-h.age/.22,h.age>=.22&&(bt.remove(h.mesh),h.mesh.geometry.dispose(),h.mesh.material.dispose(),Co.splice(u,1))}if(It&&!Ne.over&&!vt&&!tn?.visible){if(n>0)for(let S=ds.length-1;S>=0;S--){const O=ds[S];if(O.wait-=n,O.wait<=0){const k=Eb(Fn,O.foe.side,O.foe.z);bf(k.x,k.z,O.foe.type,O.arena.id,O.arena.scaling),Ao.push({level:O.arena.number,...k}),Ao.length>24&&Ao.shift(),ds.splice(S,1)}}if(P.pickup){const S=P.pickup;S.elapsed+=n;const O=ps(P);if(!S.applied&&O>=.55)if(S.applied=!0,S.kind==="weapon_pickup"){const k=nn.pickup(S.payload);k&&(P.combo=0,P.lastJab=-10,Yt(`${k} в руках · J — комбо`),Ln(480))}else S.kind==="bottle_smash"?(nn.equip("bottle"),P.combo=0,P.lastJab=-10,mn.impact(.1),Ln(180),Yt("Розочка в руке · J — удар"),Sn()):Df();O>=1&&(P.pickup=null)}P.stun=Math.max(0,P.stun-n),db(P,n),P.dodgeCooldown=Math.max(0,P.dodgeCooldown-n);const u=Math.min(P.dodge,n);P.dodge=Math.max(0,P.dodge-n);const h=P.dodge>0||u>0;for(const S of Object.keys(bn))P.cooldowns[S]=Math.max(0,P.cooldowns[S]-n);P.invulnerable=Math.max(0,P.invulnerable-n),P.hurt=Math.max(0,(P.hurt??0)-n);let d=Number(st.has("right"))-Number(st.has("left"))+ms.x,f=Number(st.has("down"))-Number(st.has("up"))+ms.y;const g=Math.hypot(d,f);P.moving=g>0,g&&(d/=g,f/=g);const _=st.has("left")||st.has("right")||st.has("up")||st.has("down")?1:Math.min(1,g);P.locomotion=st.has("slow")||ms.active&&_<.65?"walk":"run";const m=P.locomotion==="run"?P.runSpeed??(P.walkSpeed??bh)*1.6:P.walkSpeed??bh,p=P.x,x=P.z;h&&(d=P.dashX,f=P.dashZ);const y=h?u:n,v=P.pickup?0:h?P.dodgeSpeed??8:P.stun>0?.6:P.attack?.35:m*_;let[b,M]=lt.bounds;if(lt.active){const S=mf(mn.framingCamera,P.z);b=Math.max(b,S[0]+.9),M=Math.min(M,S[1]-.9),b>M&&(b=lt.bounds[0],M=lt.bounds[1])}Kt&&(M=Math.min(M,Kt.x+.8)),b=Math.max(b,Wi),$d(P,P.x+d*v*y,P.z+f*v*y,Pt,(S,O)=>(S=it.clamp(S,b,M),[S,it.clamp(O,Ql(S),2.1)])),g&&!P.attack&&!P.pickup&&(P.heading=Xa(P.heading,pr(d,f),n),d&&(P.facing=Math.sign(d)));const T=Math.hypot(P.x-p,P.z-x);P.moving=T>1e-5,!P.attack&&!h&&Xd(P,T);let L=0;if(P.attack){const S=P.attackSpec??bn[P.attack];if(P.attackTime+=n,L=P.attackTime/S.duration,L>=S.hitAt&&(P.attack==="spray"?L<=S.activeUntil:!P.hit)){P.hit=!0;let O=0;for(const k of Pt)if(k.health>0&&!(P.attack==="spray"&&P.sprayHits.has(k))&&lb(P,k,P.attack)){P.attack==="spray"&&P.sprayHits.add(k),fn=Jl(fn,12),k.health-=S.damage+(P.combo===3?12:0);const F=P.combo===3;k.knockback=P.facing*(F?5:P.attack==="kick"?4:1.4),k.flash=.22,Ya(k.x,k.z,F?.26:P.attack==="kick"?.24:P.attack==="spray"?.1:.18),(k.type!=="bruiser"||P.attack!=="jab")&&(k.windup=0,k.strike=0,k.cooldown=.4,k.stun=P.attack==="jab"?.22:P.attack==="spray"?.7:.4,F&&(k.down=1.25,k.stun=0)),O++,k.health<=0&&(id(k),fn=Jl(fn,18),Yt("Противник побеждён"))}O&&(S.weapon&&nn.wear()&&Yt("Оружие сломалось — продолжай кулаками"),Ln(110),P.combo===3&&Yt("Комбо! Третий удар сильнее"),Sn())}if(L>=1&&(P.cooldowns[P.attack]=Math.max(0,P.cooldowns[P.attack]-1e-6),P.attack=null,P.queuedAttack)){const O=P.queuedAttack;P.queuedAttack=null,O.until>=xt&&(_r(O.kind),L=0)}}const E=P.moving&&(!h||g>0);P.root.position.set(P.x,0,P.z),P.root.rotation.y=P.heading+jl(xt,E,P.attack,L,P.combo).spin,P.weaponType=nn.equipped?.type??(P.attack?P.attackSpec?.weapon:null),P.animationTime=xt,ri(P,xt,E,P.pickup?.kind??P.attack,P.pickup?ps(P):L);for(const S of Pt){if(S.health<=0){S.corpseAge+=n,S.root.rotation.z=it.damp(S.root.rotation.z,-(S.fallSide??1)*Math.PI/2,5,n),S.root.position.y=it.damp(S.root.position.y,.2,5,n),S.bar.visible=!1,S.badge.visible=!1,S.warning.visible=!1,ri(S,xt,!1,null,0);continue}if(S.entering){const te=P.x-S.x,oe=P.z-S.z,ue=Math.hypot(te,oe),Pe=Math.max(3.8,S.spec.speed*1.65);ue>.1&&_o(S,S.x+te/ue*n*Pe,S.z+oe/ue*n*Pe,!0),S.root.position.set(S.x,0,S.z),S.root.rotation.y=Xa(S.root.rotation.y,pr(te,oe),n),ri(S,xt,!0,null,0),ue<3.4&&S.x>lt.bounds[0]+.4&&S.x<lt.bounds[1]-.4&&(S.entering=!1);continue}const[O,k]=lt.bounds;if(_o(S,S.x+S.knockback*n,S.z),S.knockback*=Math.exp(-8*n),S.down=Math.max(0,S.down-n),S.stun=Math.max(0,S.stun-n),S.down>0){S.windup=0,S.strike=0,S.warning.visible=!1,S.bar.visible=!1,S.badge.visible=!1,S.root.position.set(S.x,.06,S.z),S.root.rotation.z=it.damp(S.root.rotation.z,S.down>.4?-1.48:0,12,n),ri(S,xt,!1,null,0);continue}S.root.rotation.z=it.damp(S.root.rotation.z,0,14,n),S.root.position.y=0,S.bar.visible=!0,S.badge.visible=!0;const F=Math.hypot(P.x-S.x,P.z-S.z);S.cooldown-=n,S.flash=Math.max(0,S.flash-n),S.hurt=S.flash;let j=!1;if(S.stun>0)S.windup=0,S.strike=0;else if(S.strike>0){const te=S.strike;S.strike=Math.max(0,S.strike-n),S.type==="runner"&&_o(S,S.x+S.aimX*3*n,S.z+S.aimZ*3*n),te>.225&&S.strike<=.225&&fb(S,P)&&(Ne.health=Math.max(0,Ne.health-S.spec.damage),P.invulnerable=.55,P.hurt=.22,P.stun=.18,P.attack=null,P.pickup=null,P.queuedAttack=null,P.combo=0,P.regenDelay=1,Ya(P.x,P.z,S.type==="bruiser"?.3:.22),Yt(`${S.spec.label}: −${S.spec.damage} здоровья`),Ln(90),Sn(),Ne.health||Lb())}else if(S.windup>0)S.windup=Math.max(0,S.windup-n),S.windup<=0&&(S.strike=.3,S.cooldown=S.spec.recovery);else if(F<8&&F>S.spec.range*.7){const te=Pt.indexOf(S)%2?1:-1,oe=it.clamp(P.z+te*.55,Ql(S.x)+.1,1.9),ue=P.x-S.x,Pe=oe-S.z,Se=Math.hypot(ue,Pe);Se>.05&&_o(S,S.x+ue/Se*n*S.spec.speed,S.z+Pe/Se*n*S.spec.speed,!0),j=!0}else F<=S.spec.range&&S.cooldown<=0&&(gy(S),S.windup=S.spec.windup,S.aimX=(P.x-S.x)/Math.max(F,.01),S.aimZ=(P.z-S.z)/Math.max(F,.01));S.warning.visible=S.windup>0||S.strike>0,S.warning.position.set(S.x,.015,S.z),S.warning.material.opacity=S.windup>0?.3+.4*(1-S.windup/S.spec.windup):.7,S.root.position.set(S.x,0,S.z),S.root.rotation.y=Xa(S.root.rotation.y,pr(P.x-S.x,P.z-S.z),n),S.bar.scale.x=Math.max(0,S.health/S.spec.health),S.bar.quaternion.copy(Fn.quaternion),S.bar.quaternion.premultiply(S.root.quaternion.clone().invert()),S.bar.material.color.set(S.windup>0?"#ffdd66":S.spec.color);const G=_y(S);ri(S,xt,j,G.kind,G.progress)}for(let S=Pt.length-1;S>=0;S--)if(Pt[S].health<=0&&Pt[S].corpseAge>3){const O=Pt[S];bt.remove(O.root,O.warning,O.shadow);for(const F of[O.warning,O.bar,O.badge])F.geometry.dispose(),F.material.dispose();const k=new Set;O.root.traverse(F=>{F.isSkinnedMesh&&k.add(F.skeleton)});for(const F of k)F.dispose();Pt.splice(S,1)}nn.update(P),ko.update(P.x,xt);const C=vf.update(P,Ne.health,n>0);C&&(Ne.health+=C,Yt(`Аптечка · +${C} здоровья`),Ln(740),Sn()),kn.update(P.x),Bo(),Ss.update(xt);const A=ds.map(S=>({encounter:S.arena.id,health:1})),D=Kt?null:lt.update(n,P.x,[...Pt,...A]);if(D?.type==="spawn")for(const S of D.enemies)ds.push({foe:S,arena:D.arena,wait:S.delay});D?.type==="warning"&&Yt(`${D.arena.title} · противники приближаются!`),D?.type==="clear"&&(Kt=Cy(D.arena.index,jn),Ss.set(Kt),Wi=Math.max(Wi,P.x-.25),At.earn(15),Ne.score+=100*D.arena.number,Ne.health=Math.min(100,Ne.health+8),P.stamina=100,Yt(`Участок ${D.arena.number} пройден · +8 здоровья`),Sn()),J("danger").hidden=!lt.active,J("danger").textContent=lt.active?`${lt.arena.title} · ${lt.phase==="incoming"?"Новая волна · "+Math.ceil(lt.delay):"Осталось: "+Pt.filter(S=>S.encounter===lt.arena.id&&S.health>0).length}`:"",J("go").hidden=lt.goTime<=0||lt.active,J("stamina").value=P.stamina,J("stamina-value").textContent=Math.floor(P.stamina),J("dodge").disabled=!!P.pickup||P.dodgeCooldown>0||P.stamina<$l.dodge,J("objective").textContent=`Бутылки: ${Ne.bottles} · Побеждено: ${Ne.defeated} · ${Kt?Kt.to==="entrance"?"Войди в подъезд →":"Найди выход во двор →":lt.active?"Победи группу":"Двигайся вправо →"}`;for(const S of document.querySelectorAll("[data-attack]")){const O=S.dataset.attack;S.disabled=!!P.pickup||!P.attack&&P.cooldowns[O]>0||P.dodge>0||P.stun>0||P.stamina<$l[O]}}if(vt){const u=vt,h=u.target;u.elapsed+=ot?0:t*(u.elapsed>=1.3&&u.elapsed<1.5?.3:1);const d=gb(u.elapsed);if(P.x=it.lerp(u.startX,u.endX,d.approach),P.z=it.lerp(u.startZ,h.z,d.approach),P.root.position.set(P.x,0,P.z),P.root.rotation.y=P.heading,ri(P,xt,!1,"finisher",Math.min(1,u.elapsed/2.8)),h.root.rotation.y=-u.side*Math.PI/2,h.root.position.set(h.x+u.side*d.fall*.55,Math.sin(d.fall*Math.PI)*.65,h.z),h.root.rotation.z=-u.side*d.fall*1.5,h.flash=d.contact?.18*(1-d.fall):0,ri(h,xt,!1,null,0),d.contact&&!u.hit&&(u.hit=!0,h.fallSide=u.side,h.health=0,J("cinema").querySelector("span").textContent="НОКАУТ",h.corpseAge=0,id(h),Ya(h.x,h.z,.3),Ln(75),Sn()),mn.cinematic(P,h,u.elapsed,ot?0:t,innerWidth,innerHeight),d.done){h.x=h.root.position.x,h.down=0,h.knockback=0,P.invulnerable=.6,P.attack=null,P.heading=u.side*Math.PI/2,vt=null;for(const f of Pt)f.root.visible=!0;document.body.classList.remove("finishing"),J("cinema").hidden=!0,Yt("Решающий удар!")}}J("super-meter").value=fn,J("super-value").textContent=`${Math.floor(fn)}%`;const s=nn.equipped,r=s?Vi[s.type]:null;J("weapon-name").textContent=r?.label??"Кулаки",J("weapon-uses").textContent=s?`${s.uses} / ${r.uses} ударов`:"Без оружия",J("weapon-durability").max=r?.uses??1,J("weapon-durability").value=s?.uses??0;const o=Kt&&Ss.near(P),a=qc();if(J("weapon-pickup").hidden=!!P.pickup||!a&&!o||Ne.over||!!vt||ot||!!Wt,J("weapon-pickup").textContent=o?Kt.to==="entrance"?"E · Войти в подъезд":"E · Выйти во двор":a?.kind==="bottle"?"E · Поднять бутылку":a?`E · Взять: ${Vi[a.item.type].label}`:"",document.querySelector('[data-attack="jab"] b').textContent=r?.label??"Удар",It&&nn.pose(P,P.pickup?.kind==="bottle_pickup"||P.pickup?.kind==="bottle_smash"&&ps(P)<.55||P.pickup?.kind==="weapon_pickup"&&ps(P)<.55||tn?.visible||!!vt||Ne.over||!!P.attack&&P.attack!=="jab"),J("super").disabled=!!P.pickup||fn<100||!!vt||!!P.attack||P.stun>0||P.dodge>0||Ne.over,J("super").classList.toggle("ready",fn>=100),xt>wf&&(J("toast").textContent=""),To.update(P,It&&!Ne.over&&!vt&&P.attack==="spray",xt),yf.update(P,It&&!Ne.over&&!vt&&!tn?.visible),xf.update(P,It&&!Ne.over&&!vt&&P.attack==="burp"),J("shop-open").disabled=!It||!!vt,gr?.update(),It){Zl.update(P);for(const u of Pt)Zl.update(u)}const l=It?P.x:-8;if(vt||mn.update({player:It?P:{x:-8,z:0,facing:1},enemies:Pt,arena:lt.arena,time:xt,dt:ot?0:t,width:innerWidth,height:innerHeight}),zs.follow(l),_f.update(En,l,xt),Cb.update(l,tn?.visible?t:n,En==="street"),tn?.visible){In.renderCustom(()=>tn.render(t,()=>{ko.update(P.x,xt+tn.time),qa.copy(Fn),qa.position.x+=Math.sin(tn.time*.15)*.12,Tt.render(bt,qa)}));return}const c=vt?.target;nd.set(c?(P.x+c.root.position.x)/2:P.x,1,c?(P.z+c.root.position.z)/2:P.z),In.render(bt,Fn,nd,ot?0:t)}function Yc(){const i=innerWidth,e=innerHeight;Tt.setSize(i,e),In.resize(i,e),Fn.aspect=i/e,Fn.fov=i<650?53:40,Fn.updateProjectionMatrix()}window.addEventListener("resize",Yc);Yc();bs.onChange=()=>In.resize(innerWidth,innerHeight);Fn.position.set(-6.55,1.8,6.2);Uf();window.gameDebug=()=>({ready:It,frames:Sf,...Ne,paused:ot,bottleChoice:!!Hs,location:En,startingLocation:jn,courtyard:Gc(P.x),pendingExit:Kt?{...Kt,near:Ss.near(P)}:null,locationTransition:Wt?{to:Wt.to,elapsed:Wt.elapsed}:null,menu:tn?.visible??!1,character:mr.character,palette:mr.palette,nearbyPickup:qc()?.kind??null,weapons:nn.debug(),medkits:vf.debug(),graphics:{mode:qi.mode,pixelRatio:Tt.getPixelRatio(),width:Tt.domElement.width,height:Tt.domElement.height,samples:In.enabled||bs.active?In.target.samples:0,triangles:Tt.info.render.triangles,drawCalls:Tt.info.render.calls,frameMs:gf.averageMs,adaptive:!0,pendingPixelRatio:or,shadows:{enabled:Tt.shadowMap.enabled,filter:Tt.shadowMap.type===ic?"soft":"pcf",everyFrame:Tt.shadowMap.autoUpdate,size:An.shadow.mapSize.x}},compositing:{active:bs.active,targetWidth:In.target.width,targetHeight:In.target.height,settings:{...bs.value}},depthOfField:{enabled:In.enabled,focus:In.focus,maxBlur:In.maxBlur},lighting:{...zs.value},environment:kn.template?"authored":"procedural",streetSign:Gi?.getObjectByName("Weathered_street_sign")?.position.toArray()??null,windowDetails:{street:Gi?.getObjectByName("Detailed_aged_windows")?.userData.windowCount??0,courtyard:Eo[0]?.userData.windowCount??0,entrance:Xi.userData.windowCount??0},cameraShake:{enabled:mn.isShakeEnabled(),strength:mn.shake},entranceLamps:_f.lights.map(i=>({visible:i.visible,intensity:i.intensity,x:i.position.x})),shopOpen:Ci,economy:{coins:At.profile.coins,owned:[...At.profile.owned],equipped:At.profile.equipped,run:{...At.run},persistent:At.persistent,rewardMode:df.mode},sprayVisible:To.root.visible,sprayGrowth:To.growth,sprayOrigin:To.root.position.toArray(),burpVisible:xf.root.visible,drinkingBottleVisible:yf.root.visible,superPower:fn,returnWall:Wi,cinematic:vt?{elapsed:vt.elapsed,hit:vt.hit,target:vt.target.type}:null,best:{...Pr},worldChunks:kn.chunks.size,authoredActions:Object.keys(P.userActions?.clips??{}),pendingSpawns:ds.length,spawnAudit:Ao.map(i=>({...i})),player:{radius:dr(P),pickup:P.pickup?{kind:P.pickup.kind,progress:ps(P)}:null,x:P.x,z:P.z,moving:!!P.moving,locomotion:P.locomotion,joystick:{x:ms.x,y:ms.y},motion:P.motionId,attack:P.attack,attackTime:P.attackTime,attackClip:P.attackSpec?.clip,attackSerial:P.attackSerial,stamina:P.stamina,dodge:P.dodge,dodgeDuration:P.dodgeDuration,dodgeClip:P.dodge>0&&P.userActions?.clips.dodge?"dodge":null,dodgeCooldown:P.dodgeCooldown,facing:P.facing,heading:P.heading,walkDistance:P.walkDistance,walkStride:P.walkStride,feetY:P.feetY,groundOffset:P.groundOffset,combo:P.combo,stun:P.stun,invulnerable:P.invulnerable,cooldowns:{...P.cooldowns}},enemies:Pt.map(i=>({authored:!!i.userActions,attackClip:i.attackSpec?.clip,motion:i.motionId,radius:dr(i),x:i.x,z:i.z,health:i.health,type:i.type,feetY:i.feetY,windup:i.windup,strike:i.strike,down:i.down,entering:i.entering,encounter:i.encounter})),encounter:{active:lt.active,phase:lt.phase,wave:lt.wave,index:lt.index,bounds:lt.bounds}});function Nf(){const i=window.Telegram?.WebApp;i&&(i.ready(),i.expand(),i.isVersionAtLeast?.("7.7")&&i.disableVerticalSwipes?.())}window.addEventListener("telegram-ready",()=>{It&&Nf()});
