"""Bake the visible updated hero, preserving source files and the neutral rig baseline."""
import bpy,pathlib
root=pathlib.Path('/workspace/bomzh_game')
bpy.ops.wm.open_mainfile(filepath='/workspace/model-sources/hobo.blend',use_scripts=False)
rig=bpy.data.objects['rig']
bases={p.name:p.matrix_basis.copy() for p in rig.pose.bones}
properties={p.name:{k:v for k,v in p.items() if isinstance(v,(int,float,bool))} for p in rig.pose.bones}
bpy.ops.wm.open_mainfile(filepath='/workspace/model-sources/hobo-updated.blend',use_scripts=False)
rig=bpy.data.objects['rig']
GAME_EXPORT_MESHES={o.name for o in bpy.context.scene.objects if o.type=='MESH' and not o.name.startswith('cs_') and o.visible_get() and not o.hide_render}
print('VISIBLE_EXPORT',sorted(GAME_EXPORT_MESHES),flush=True)
rig.animation_data_clear()
for p in rig.pose.bones:
 if p.name in bases:p.matrix_basis=bases[p.name]
 for k,v in properties.get(p.name,{}).items():p[k]=v
bpy.context.view_layer.update()
for name in GAME_EXPORT_MESHES:
 o=bpy.data.objects[name]
 if len(o.data.vertices)>100000 and not o.data.shape_keys and not any(m.type=='ARMATURE' for m in o.modifiers):
  bpy.context.view_layer.objects.active=o
  mod=o.modifiers.new('Game facial detail LOD','DECIMATE');mod.ratio=.04
  bpy.ops.object.modifier_apply(modifier=mod.name)
  print('FACIAL_LOD',name,len(o.data.vertices),flush=True)
bpy.context.preferences.filepaths.save_version=0
exec(compile((root/'scripts/blender/bake_export.py').read_text(),'bake_export.py','exec'))
