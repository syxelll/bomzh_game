"""Rebake only denim, preserving the exact UV atlas already used by the game mesh."""
import bpy,pathlib
root=pathlib.Path('/workspace');out=root/'model-exports/denim-fixed';out.mkdir(exist_ok=True)
bpy.ops.wm.open_mainfile(filepath=str(root/'model-exports/hobo-updated/hobo-updated_baked.blend'),use_scripts=False)
mesh=bpy.data.objects['shtani'].data
atlas=[tuple(v.uv) for v in mesh.uv_layers['GameUV'].data]
loop_vertices=[l.vertex_index for l in mesh.loops]
bpy.ops.wm.open_mainfile(filepath=str(root/'model-sources/hobo-updated.blend'),use_scripts=False)
o=bpy.data.objects['shtani'];assert [l.vertex_index for l in o.data.loops]==loop_vertices,'Pants topology changed: do not reuse an incompatible UV atlas'
for obj in bpy.context.scene.objects:obj.hide_render=obj!=o
# Bake on the original UV atlas used by the GLB, with explicit source coordinates.
o.hide_set(False);o.hide_viewport=False;o.hide_render=False
o.data=o.data.copy();source=o.data.uv_layers.active.name
uv=o.data.uv_layers.new(name='GameUV')
for v,coord in zip(uv.data,atlas):v.uv=coord
o.data.uv_layers.active=uv
for slot in o.material_slots:
 slot.material=slot.material.copy();nt=slot.material.node_tree
 pin=nt.nodes.new('ShaderNodeUVMap');pin.uv_map=source;pin.label='Original denim UV'
 for node in list(nt.nodes):
  if node.type=='TEX_COORD':
   for link in list(node.outputs['UV'].links):nt.links.new(pin.outputs['UV'],link.to_socket)
  if node.type=='TEX_IMAGE' and not node.inputs['Vector'].is_linked:nt.links.new(pin.outputs['UV'],node.inputs['Vector'])
  if node.type=='NORMAL_MAP' and not node.uv_map:node.uv_map=source
  if node.type=='TEX_IMAGE' and node.image:print('SOURCE_IMAGE',node.image.name,list(node.image.size),flush=True)
s=bpy.context.scene;s.render.engine='CYCLES';s.cycles.device='CPU';s.cycles.samples=8;s.render.threads_mode='FIXED';s.render.threads=4
bpy.ops.object.select_all(action='DESELECT');o.select_set(True);bpy.context.view_layer.objects.active=o
for kind in ['DIFFUSE','ROUGHNESS','NORMAL']:
 image=bpy.data.images.new('denim_'+kind,width=1024,height=1024,alpha=False)
 if kind!='DIFFUSE':image.colorspace_settings.name='Non-Color'
 for slot in o.material_slots:
  node=slot.material.node_tree.nodes.new('ShaderNodeTexImage');node.image=image;slot.material.node_tree.nodes.active=node
 print('BAKING_DENIM',kind,flush=True)
 bpy.ops.object.bake(type=kind,pass_filter={'COLOR'} if kind=='DIFFUSE' else set(),uv_layer='GameUV',margin=12,use_clear=True)
 image.filepath_raw=str(out/(kind+'.png'));image.file_format='PNG';image.save()
print('DENIM_BAKE_COMPLETE',out,flush=True)
