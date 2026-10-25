"""Freeze the user's editable section and export only its game scenery."""
import bpy,sys,argparse,math,json
from pathlib import Path
import numpy as np
p=argparse.ArgumentParser();p.add_argument('--source',required=True);p.add_argument('--output',required=True);a=p.parse_args(sys.argv[sys.argv.index('--')+1:])
bpy.ops.wm.open_mainfile(filepath=a.source,use_scripts=False)
source=bpy.data.collections.get('EDIT_26m_MAIN');assert source,'Missing EDIT_26m_MAIN section'
deps=bpy.context.evaluated_depsgraph_get();copies=[];materials=set()
for obj in list(source.all_objects):
 if obj.type!='MESH' or obj.name.startswith('PICKUP_REFERENCE') or obj.get('module_kind')=='pickup':continue
 evaluated=obj.evaluated_get(deps);mesh=bpy.data.meshes.new_from_object(evaluated,preserve_all_data_layers=True,depsgraph=deps)
 if not mesh.polygons:bpy.data.meshes.remove(mesh);continue
 copy=bpy.data.objects.new(obj.name+'_GAME',mesh);copy.matrix_world=obj.matrix_world.copy();copies.append(copy);materials.update(m for m in mesh.materials if m)
# Normalize simple color transforms that the glTF exporter otherwise omits.
def texture_image(name,values,size):
 img=bpy.data.images.new(name,width=size[0],height=size[1],alpha=True);img.colorspace_settings.name='Non-Color';img.pixels.foreach_set(values.astype(np.float32).ravel());img.pack();return img
for mat in materials:
 if not mat.use_nodes:continue
 nodes=mat.node_tree.nodes;links=mat.node_tree.links
 for node in list(nodes):
  if node.type=='HUE_SAT' and not any(node.inputs[k].is_linked for k in ['Hue','Saturation','Value','Factor']) and all(abs(node.inputs[k].default_value-v)<1e-5 for k,v in [('Hue',.5),('Saturation',1),('Value',1),('Factor',1)]) and node.inputs['Color'].is_linked:
   socket=node.inputs['Color'].links[0].from_socket
   for link in list(node.outputs[0].links):links.new(socket,link.to_socket)
  if node.type not in ['GAMMA','INVERT'] or not node.inputs['Color'].is_linked:continue
  upstream=node.inputs['Color'].links[0].from_node
  if upstream.type!='TEX_IMAGE' or not upstream.image:raise RuntimeError('Unsupported roughness graph: '+mat.name)
  image=upstream.image;values=np.array(image.pixels[:],dtype=np.float32).reshape((-1,4))
  if node.type=='GAMMA':values[:,:3]=np.maximum(values[:,:3],0)**node.inputs['Gamma'].default_value
  else:values[:,:3]=values[:,:3]*(1-node.inputs['Factor'].default_value)+(1-values[:,:3])*node.inputs['Factor'].default_value
  img=texture_image(mat.name+'_roughness_resolved',values,image.size);tex=nodes.new('ShaderNodeTexImage');tex.image=img;tex.extension=upstream.extension
  for link in upstream.inputs['Vector'].links:links.new(link.from_socket,tex.inputs['Vector'])
  for link in list(node.outputs[0].links):links.new(tex.outputs['Color'],link.to_socket)
 # Convert the brick height tile to tangent normals (the brick UV tile spans 2m).
 for node in list(nodes):
  if node.type!='BUMP' or not node.inputs['Height'].is_linked:continue
  upstream=node.inputs['Height'].links[0].from_node
  if upstream.type!='TEX_IMAGE' or not upstream.image:raise RuntimeError('Unsupported bump graph: '+mat.name)
  image=upstream.image;w,h=image.size;pixels=np.array(image.pixels[:],dtype=np.float32).reshape((h,w,4));height=pixels[:,:,:3].mean(axis=2);strength=node.inputs['Distance'].default_value*node.inputs['Strength'].default_value/2
  gx=(np.roll(height,-1,axis=1)-np.roll(height,1,axis=1))*w*.5;gy=(np.roll(height,-1,axis=0)-np.roll(height,1,axis=0))*h*.5
  normal=np.stack((-gx*strength,-gy*strength,np.ones_like(height)),axis=-1);normal/=np.linalg.norm(normal,axis=-1,keepdims=True);values=np.concatenate((normal*.5+.5,np.ones((h,w,1))),axis=-1)
  tex=nodes.new('ShaderNodeTexImage');tex.image=texture_image(mat.name+'_tangent_normal',values,(w,h));nm=nodes.new('ShaderNodeNormalMap');links.new(tex.outputs['Color'],nm.inputs['Color'])
  for link in upstream.inputs['Vector'].links:links.new(link.from_socket,tex.inputs['Vector'])
  for link in list(node.outputs[0].links):links.new(nm.outputs['Normal'],link.to_socket)
# The clean export scene contains no library, cameras, guides or neighbouring chunks.
scene=bpy.data.scenes.new('GAME_STREET_EXPORT');bpy.context.window.scene=scene
for obj in copies:scene.collection.objects.link(obj);obj.select_set(True)
bpy.context.view_layer.objects.active=copies[0];bpy.context.view_layer.update()
triangles=sum(len(o.data.polygons) if all(len(p.vertices)==3 for p in o.data.polygons) else sum(len(p.vertices)-2 for p in o.data.polygons) for o in copies)
Path(a.output).parent.mkdir(parents=True,exist_ok=True)
bpy.ops.export_scene.gltf(filepath=a.output,export_format='GLB',use_selection=True,export_apply=True,export_yup=True,export_animations=False,export_cameras=False,export_lights=False,export_image_format='AUTO',export_extras=False)
print('EXPORTED_STREET',json.dumps({'objects':len(copies),'triangles':triangles,'materials':len(materials),'output':a.output}))
