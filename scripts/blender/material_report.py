import bpy
for o in bpy.context.scene.objects:
 if o.type=='MESH' and not o.name.startswith('cs_'):
  print('MESH',o.name,'verts',len(o.data.vertices),'uv',len(o.data.uv_layers),'hidden',o.hide_render,'materials',[s.material.name if s.material else None for s in o.material_slots])
for m in bpy.data.materials:
 print('MAT',m.name,[(n.name,n.type) for n in m.node_tree.nodes] if m.use_nodes else 'no nodes')
