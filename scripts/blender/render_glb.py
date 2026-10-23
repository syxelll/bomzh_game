import bpy,sys,math,pathlib
from mathutils import Vector
name=sys.argv[sys.argv.index('--')+1]
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
bpy.ops.import_scene.gltf(filepath='/workspace/model-exports/'+name+'/'+name+'.glb')
meshes=[o for o in bpy.context.scene.objects if o.type=='MESH']
bpy.context.view_layer.update()
dg=bpy.context.evaluated_depsgraph_get()
points=[o.matrix_world @ v.co for src in meshes for o in [src.evaluated_get(dg)] for v in o.data.vertices]
lo=Vector([min(p[i] for p in points) for i in range(3)]);hi=Vector([max(p[i] for p in points) for i in range(3)])
center=(lo+hi)/2;h=max(hi-lo)
bpy.ops.object.camera_add(location=center+Vector((h*0.8,-h*1.8,h*0.35)))
cam=bpy.context.object;cam.rotation_euler=(center-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=h*1.35
s=bpy.context.scene;s.camera=cam
for offset,power,size in [((1,-2,3),800,2),((-2,-1,1),500,2),((0,2,2),900,2)]:
 bpy.ops.object.light_add(type='AREA',location=center+Vector(offset)*h)
 lamp=bpy.context.object;lamp.data.energy=power*h*h;lamp.data.shape='DISK';lamp.data.size=size*h;lamp.rotation_euler=(center-lamp.location).to_track_quat('-Z','Y').to_euler()
s.world.color=(0.18,0.18,0.18);s.render.engine='CYCLES';s.cycles.samples=16;s.render.threads_mode='FIXED';s.render.threads=4
s.render.resolution_x=600;s.render.resolution_y=700;s.render.resolution_percentage=100
s.render.filepath='/workspace/model-exports/'+name+'/preview.png';bpy.ops.render.render(write_still=True)
print('BOUNDS',name,list(lo),list(hi))
