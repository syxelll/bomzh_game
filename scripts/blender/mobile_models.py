import bpy,sys,pathlib
name=sys.argv[sys.argv.index('--')+1]
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
bpy.ops.import_scene.gltf(filepath=f'/workspace/model-exports/{name}/{name}.glb')
for o in list(bpy.context.scene.objects):
 if o.type=='MESH' and len(o.data.vertices)>6000 and not o.data.shape_keys:
  bpy.context.view_layer.objects.active=o
  dec=o.modifiers.new('Mobile LOD','DECIMATE');dec.ratio=.3
  bpy.ops.object.modifier_move_to_index(modifier=dec.name,index=0)
  bpy.ops.object.modifier_apply(modifier=dec.name)
  print('SIMPLIFIED',o.name,len(o.data.vertices))
pathlib.Path('/workspace/model-exports/mobile').mkdir(exist_ok=True)
bpy.ops.export_scene.gltf(filepath=f'/workspace/model-exports/mobile/{name}.glb',export_format='GLB',export_animations=False,export_def_bones=False)
