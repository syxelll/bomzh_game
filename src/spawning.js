import * as THREE from 'three';
export function laneBounds(camera,z=0){
 camera.updateMatrixWorld(true);const ray=new THREE.Raycaster(),plane=new THREE.Plane(new THREE.Vector3(0,0,1),-z),point=new THREE.Vector3(),xs=[];
 for(const x of [-1,1])for(const y of [-1,1]){ray.setFromCamera(new THREE.Vector2(x,y),camera);if(ray.ray.intersectPlane(plane,point))xs.push(point.x);}
 return [Math.min(...xs),Math.max(...xs)];
}
export function projectedBody(camera,x,z){const values=[];for(const dx of [-1.4,1.4])for(const y of [0,3.2])for(const dz of [-.6,.6])values.push(new THREE.Vector3(x+dx,y,z+dz).project(camera).x);return [Math.min(...values),Math.max(...values)];}
export function offscreenSpawn(camera,side,z){
 const bounds=laneBounds(camera,z);let x=bounds[side<0?0:1]+side*2.5;
 for(let i=0;i<20;i++){const projected=projectedBody(camera,x,z);if(side<0?projected[1]<-1.15:projected[0]>1.15)return {x,z,side,projected};x+=side*2;}
 throw new Error('Could not locate an offscreen entrance');
}
