import bpy, pathlib, sys, json
name=pathlib.Path(bpy.data.filepath).stem
out=pathlib.Path('/workspace/model-exports')/name
out.mkdir(parents=True,exist_ok=True)
s=bpy.context.scene
s.render.engine='CYCLES';s.cycles.device='CPU';s.cycles.samples=8
s.render.threads_mode='FIXED';s.render.threads=4
rig=bpy.data.objects.get('rig')
meshes=[o for o in s.objects if o.type=='MESH' and not o.name.startswith('cs_') and (name!='enemy' or o.parent==rig) and (not globals().get('GAME_EXPORT_MESHES') or o.name in GAME_EXPORT_MESHES)]
for o in s.objects:
 if o not in meshes and o!=rig: o.hide_render=True
for o in meshes:
 o.hide_set(False);o.hide_render=False
 # Rig controls and procedural geometry modifiers are not export geometry.
 for mod in list(o.modifiers):
  if mod.type in {'NODES','PARTICLE_SYSTEM'}: o.modifiers.remove(mod)
 bpy.ops.object.select_all(action='DESELECT');o.select_set(True);bpy.context.view_layer.objects.active=o
 o.data=o.data.copy()
 source_uv=o.data.uv_layers.active
 # Keep original UV coordinates explicitly for source image nodes.
 for idx,slot in enumerate(o.material_slots):
  mat=slot.material.copy() if slot.material else bpy.data.materials.new('Teeth')
  mat.use_nodes=True;o.material_slots[idx].material=mat
  # TexCoord.UV also follows the bake target unless pinned explicitly.
  for node in list(mat.node_tree.nodes):
   if node.type=='TEX_COORD':
    for link in list(node.outputs['UV'].links):
     uv=mat.node_tree.nodes.new('ShaderNodeUVMap');uv.uv_map=source_uv.name
     mat.node_tree.links.new(uv.outputs['UV'],link.to_socket)
   if node.type=='NORMAL_MAP' and not node.uv_map:node.uv_map=source_uv.name
   if node.type=='TEX_IMAGE' and not node.inputs['Vector'].is_linked:
    uv=mat.node_tree.nodes.new('ShaderNodeUVMap');uv.uv_map=source_uv.name
    mat.node_tree.links.new(uv.outputs['UV'],node.inputs['Vector'])
 uv=o.data.uv_layers.new(name='GameUV');o.data.uv_layers.active=uv
 bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.uv.smart_project(island_margin=0.025);bpy.ops.object.mode_set(mode='OBJECT')
 # Unconnected procedural coordinates still read the source UV map during bake.
 source_uv.active_render=True
 size=1024 if o.name.split('.')[0] in {'dead','shtani'} else 512
 baked={}
 for kind in ['DIFFUSE','ROUGHNESS','NORMAL']:
  image=bpy.data.images.new(name+'_'+o.name+'_'+kind,width=size,height=size,alpha=False)
  if kind!='DIFFUSE':image.colorspace_settings.name='Non-Color'
  for slot in o.material_slots:
   node=slot.material.node_tree.nodes.new('ShaderNodeTexImage');node.image=image
   slot.material.node_tree.nodes.active=node
  print('BAKING',name,o.name,kind,flush=True)
  bpy.ops.object.bake(type=kind,pass_filter={'COLOR'} if kind=='DIFFUSE' else set(),uv_layer='GameUV',margin=8,use_clear=True)
  image.filepath_raw=str(out/(image.name.replace('/','_')+'.png'));image.file_format='PNG';image.save();baked[kind]=image
 mat=bpy.data.materials.new(name+'_'+o.name+'_Baked');mat.use_nodes=True
 nt=mat.node_tree;bs=nt.nodes.get('Principled BSDF')
 for kind,socket in [('DIFFUSE','Base Color'),('ROUGHNESS','Roughness'),('NORMAL','Normal')]:
  node=nt.nodes.new('ShaderNodeTexImage');node.image=baked[kind]
  if kind=='NORMAL':
   normal=nt.nodes.new('ShaderNodeNormalMap');nt.links.new(node.outputs['Color'],normal.inputs['Color']);nt.links.new(normal.outputs['Normal'],bs.inputs[socket])
  else:nt.links.new(node.outputs['Color'],bs.inputs[socket])
 o.data.materials.clear();o.data.materials.append(mat)
 for poly in o.data.polygons:poly.material_index=0
 for layer in list(o.data.uv_layers):
  if layer.name!='GameUV':o.data.uv_layers.remove(layer)
 o.data.uv_layers.active=o.data.uv_layers['GameUV'];o.data.uv_layers.active.active_render=True
 print('BAKED',o.name,flush=True)
bpy.ops.object.select_all(action='DESELECT')
for o in meshes+[rig]:
 if o:o.hide_set(False);o.select_set(True)
bpy.context.view_layer.objects.active=rig
bpy.ops.wm.save_as_mainfile(filepath=str(out/(name+'_baked.blend')))
bpy.ops.export_scene.gltf(filepath=str(out/(name+'.glb')),export_format='GLB',use_selection=True,export_animations=False,export_def_bones=False)
print('EXPORT_DONE',str(out/(name+'.glb')),flush=True)
