"""Build editable module masters, linked copies and procedural window facades."""
import bpy,json,math,hashlib,argparse,sys
from pathlib import Path
from mathutils import Vector
p=argparse.ArgumentParser();p.add_argument('--input',default='/tmp/street-meshes.json');p.add_argument('--base',default=str(Path(__file__).resolve().parents[2]/'location-editing/street-template.blend'));p.add_argument('--output',default=str(Path(__file__).resolve().parents[2]/'location-editing/street-modular.blend'))
a=p.parse_args(sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else [])
d=json.load(open(a.input));bpy.ops.wm.open_mainfile(filepath=a.base,use_scripts=False);scene=bpy.context.scene
for name in ['EDIT_26m_MAIN','REFERENCE_NEIGHBOR_-1','REFERENCE_NEIGHBOR_1']:
 c=bpy.data.collections[name]
 for o in list(c.all_objects):bpy.data.objects.remove(o,do_unlink=True)
 for child in list(c.children):bpy.data.collections.remove(child)
library=bpy.data.collections.new('MODULE_LIBRARY_EDIT_HERE');scene.collection.children.link(library)
materials=[];material_counts={}
for m in d['materials']:
 name=m['name'];count=material_counts.get(name,0);material_counts[name]=count+1;materials.append(bpy.data.materials[name if count==0 else name+f'.{count:03}'])
cache={};placements=[]
labels={'window':'WINDOW','door':'DOOR','building':'BUILDING_SHELL','road':'ROAD_SIDEWALKS','air_conditioner':'AIR_CONDITIONER','fire_escape':'FIRE_ESCAPE','downpipe':'DOWNPIPE','streetlight':'STREETLIGHT','bench':'BENCH','dumpster':'DUMPSTER','pallet':'PALLET','sign':'SIGN','litter':'LITTER','pickup':'PICKUP_REFERENCE'}
for chunk in d['chunks']:
 groups={}
 for part in chunk['meshes']:
  tag=part['module'];groups.setdefault((tag['kind'],tag['id']),[]).append(part)
 for (kind,id),parts in groups.items():
  vertices=[v for part in parts for v in part['vertices']];anchor=Vector(((min(v[0] for v in vertices)+max(v[0] for v in vertices))/2,(min(v[1] for v in vertices)+max(v[1] for v in vertices))/2,min(v[2] for v in vertices)))
  signature=[]
  for part in parts:signature.append({'vertices':[[round(v[j]-anchor[j],4) for j in range(3)] for v in part['vertices']],'faces':part['faces'],'uv':part['uv'],'material':part['material']})
  digest=hashlib.sha256(json.dumps([kind,signature],sort_keys=True).encode()).hexdigest()
  if digest not in cache:
   verts=[];faces=[];uv=[];face_materials=[]
   for part in parts:
    offset=len(verts);verts.extend([Vector(v)-anchor for v in part['vertices']]);faces.extend([[i+offset for i in face] for face in part['faces']]);uv.extend(part['uv'] or [(0,0)]*len(part['vertices']));face_materials.extend([part['material']]*len(part['faces']))
   mesh=bpy.data.meshes.new(labels.get(kind,kind)+'_shared_mesh');mesh.from_pydata(verts,[],faces);mesh.update();used=sorted(set(face_materials))
   for index in used:mesh.materials.append(materials[index])
   for poly,index in zip(mesh.polygons,face_materials):poly.material_index=used.index(index)
   layer=mesh.uv_layers.new(name='UVMap')
   for loop in mesh.loops:layer.data[loop.index].uv=uv[loop.vertex_index]
   count=sum(o['asset_kind']==kind for o in cache.values())+1;master=bpy.data.objects.new('ASSET_'+labels.get(kind,kind)+f'_{count:02}',mesh);library.objects.link(master);n=len(cache);master.location=(-25+(n%10)*7,15+(n//10)*8,0);master['asset_kind']=kind;master['instructions']='Edit mesh here to update every linked copy. Origin: centre in X/Y, bottom in Z. Apply scale to replacements.';master.asset_mark();cache[digest]=master
  placements.append({'chunk':chunk['index'],'kind':kind,'id':id,'anchor':anchor,'master':cache[digest]})
# One node group shared by all facades; the source is a replaceable object socket.
ng=bpy.data.node_groups.new('STREET_Procedural_Windows','GeometryNodeTree');ng.is_modifier=True
ng.interface.new_socket(name='Geometry',in_out='OUTPUT',socket_type='NodeSocketGeometry')
def socket(name,type,default,min=None,max=None):
 s=ng.interface.new_socket(name=name,in_out='INPUT',socket_type=type);s.default_value=default
 if min is not None:s.min_value=min
 if max is not None:s.max_value=max
 return s
source=next(o for o in cache.values() if o['asset_kind']=='window')
inputs={}
for name,type,default,minimum,maximum in [('Window module','NodeSocketObject',source,None,None),('Floors','NodeSocketInt',4,2,12),('Columns','NodeSocketInt',3,2,12),('Window spacing','NodeSocketFloat',1.8,.5,5),('Floor spacing','NodeSocketFloat',1.65,.5,5),('Door gap','NodeSocketBool',True,None,None)]:inputs[name]=socket(name,type,default,minimum,maximum)
n=ng.nodes;l=ng.links;gi=n.new('NodeGroupInput');gi.location=(-800,100);go=n.new('NodeGroupOutput');go.location=(1100,100)
def mathnode(op,a,b=None):
 node=n.new('ShaderNodeMath');node.operation=op
 for idx,value in enumerate([a,b]):
  if value is None:continue
  if isinstance(value,(float,int)):node.inputs[idx].default_value=value
  else:l.new(value,node.inputs[idx])
 return node.outputs[0]
spanx=mathnode('MULTIPLY',mathnode('SUBTRACT',gi.outputs['Columns'],1),gi.outputs['Window spacing']);spanz=mathnode('MULTIPLY',mathnode('SUBTRACT',gi.outputs['Floors'],1),gi.outputs['Floor spacing'])
grid=n.new('GeometryNodeMeshGrid');grid.location=(-400,100);l.new(spanx,grid.inputs['Size X']);l.new(spanz,grid.inputs['Size Y']);l.new(gi.outputs['Columns'],grid.inputs['Vertices X']);l.new(gi.outputs['Floors'],grid.inputs['Vertices Y'])
pos=n.new('GeometryNodeInputPosition');sep=n.new('ShaderNodeSeparateXYZ');l.new(pos.outputs[0],sep.inputs[0])
center=mathnode('LESS_THAN',mathnode('ABSOLUTE',sep.outputs['X']),mathnode('MULTIPLY',gi.outputs['Window spacing'],.25));bottom=mathnode('LESS_THAN',sep.outputs['Y'],mathnode('ADD',mathnode('MULTIPLY',spanz,-.5),.01))
both=n.new('FunctionNodeBooleanMath');both.operation='AND';l.new(center,both.inputs[0]);l.new(bottom,both.inputs[1]);enabled=n.new('FunctionNodeBooleanMath');enabled.operation='AND';l.new(both.outputs[0],enabled.inputs[0]);l.new(gi.outputs['Door gap'],enabled.inputs[1])
delete=n.new('GeometryNodeDeleteGeometry');delete.domain='POINT';delete.mode='ALL';delete.location=(-150,100);l.new(grid.outputs['Mesh'],delete.inputs['Geometry']);l.new(enabled.outputs[0],delete.inputs['Selection'])
transform=n.new('GeometryNodeTransform');transform.location=(50,100);transform.inputs['Rotation'].default_value=(math.pi/2,0,0);l.new(delete.outputs[0],transform.inputs['Geometry']);translate=n.new('ShaderNodeCombineXYZ');l.new(mathnode('MULTIPLY',spanz,.5),translate.inputs['Z']);l.new(translate.outputs[0],transform.inputs['Translation'])
info=n.new('GeometryNodeObjectInfo');info.transform_space='ORIGINAL';info.inputs['As Instance'].default_value=False;info.location=(100,-200);l.new(gi.outputs['Window module'],info.inputs['Object'])
instance=n.new('GeometryNodeInstanceOnPoints');instance.location=(400,100);l.new(transform.outputs[0],instance.inputs['Points']);l.new(info.outputs['Geometry'],instance.inputs['Instance']);realize=n.new('GeometryNodeRealizeInstances');realize.location=(700,100);l.new(instance.outputs[0],realize.inputs[0]);l.new(realize.outputs[0],go.inputs['Geometry'])
# Shared resize group for each house shell. Height is measured from ground level.
resize=bpy.data.node_groups.new('STREET_Shell_Height','GeometryNodeTree');resize.is_modifier=True
resize.interface.new_socket(name='Geometry',in_out='INPUT',socket_type='NodeSocketGeometry');resize.interface.new_socket(name='Geometry',in_out='OUTPUT',socket_type='NodeSocketGeometry');s=resize.interface.new_socket(name='Height scale',in_out='INPUT',socket_type='NodeSocketFloat');s.default_value=1;s.min_value=.1;s.max_value=4
ri=resize.nodes.new('NodeGroupInput');ro=resize.nodes.new('NodeGroupOutput');rt=resize.nodes.new('GeometryNodeTransform');rv=resize.nodes.new('ShaderNodeCombineXYZ');rv.inputs['X'].default_value=1;rv.inputs['Y'].default_value=1;resize.links.new(ri.outputs['Height scale'],rv.inputs['Z']);resize.links.new(rv.outputs[0],rt.inputs['Scale']);resize.links.new(ri.outputs['Geometry'],rt.inputs['Geometry']);resize.links.new(rt.outputs[0],ro.inputs['Geometry'])
# Every placed module refers to its source OBJECT, not just the mesh datablock.
# Replacing ASSET_*.data therefore updates all copies as well as Edit Mode edits.
prefab=bpy.data.node_groups.new('STREET_Replaceable_Module','GeometryNodeTree');prefab.is_modifier=True
ps=prefab.interface.new_socket(name='Source module',in_out='INPUT',socket_type='NodeSocketObject');prefab.interface.new_socket(name='Geometry',in_out='OUTPUT',socket_type='NodeSocketGeometry')
pi=prefab.nodes.new('NodeGroupInput');po=prefab.nodes.new('NodeGroupOutput');pn=prefab.nodes.new('GeometryNodeObjectInfo');pn.transform_space='ORIGINAL';pn.inputs['As Instance'].default_value=False;prefab.links.new(pi.outputs['Source module'],pn.inputs['Object']);prefab.links.new(pn.outputs['Geometry'],po.inputs['Geometry'])
controllers={};facades=[]
for chunk in d['chunks']:
 idx=chunk['index'];c=bpy.data.collections['EDIT_26m_MAIN' if idx==0 else 'REFERENCE_NEIGHBOR_'+str(idx)]
 for i in range(4):
  root=bpy.data.objects.new(f'HOUSE_{idx}_{i}_CONTROLS',None);c.objects.link(root);root.location=(idx*26+3.25+i*6.5,0,0);root.empty_display_type='CUBE';root.empty_display_size=.4
  for key,value,minimum,maximum in [('floors',4,2,12),('columns',3,2,12),('window_spacing',1.8,.5,5),('floor_spacing',1.65,.5,5)]:root[key]=value;root.id_properties_ui(key).update(min=minimum,max=maximum)
  root['instructions']='Change Custom Properties to generate windows and shell height. Move this controller to move the whole house. Keep floor spacing / columns within your facade width.';controllers[idx,i]=root
  facade=bpy.data.objects.new(f'WINDOW_GRID_{idx}_{i}',bpy.data.meshes.new('ProceduralFacade'));c.objects.link(facade);facade.parent=root;facade.location=(0,3.94,.565);modifier=facade.modifiers.new('PROCEDURAL WINDOWS — replace Window module','NODES');modifier.node_group=ng;getattr(modifier.properties.inputs,inputs['Window module'].identifier).value=source
  for field,prop in [('Floors','floors'),('Columns','columns'),('Window spacing','window_spacing'),('Floor spacing','floor_spacing')]:
   fc=getattr(modifier.properties.inputs,inputs[field].identifier).driver_add('value');driver=fc.driver;driver.type='AVERAGE';var=driver.variables.new();var.name='value';var.type='SINGLE_PROP';var.targets[0].id=root;var.targets[0].data_path='["'+prop+'"]'
  facade['source_asset']=source.name;facade['window_module_count']=11;facades.append(facade)
for placement in placements:
 kind=placement['kind'];idx=placement['chunk'];id=placement['id'];master=placement['master']
 if kind=='window':continue
 c=bpy.data.collections['EDIT_26m_MAIN' if idx==0 else 'REFERENCE_NEIGHBOR_'+str(idx)];o=bpy.data.objects.new(f'{labels.get(kind,kind)}_{idx}_{id}',bpy.data.meshes.new('ModulePlaceholder'));c.objects.link(o);o.location=placement['anchor'];o['source_asset']=master.name;o['module_kind']=kind;reference=o.modifiers.new('Replaceable source module','NODES');reference.node_group=prefab;getattr(reference.properties.inputs,ps.identifier).value=master
 if kind in ['building','door','air_conditioner','fire_escape','downpipe','pallet']:
  root=controllers[idx,int(id.split(':')[0])];o.parent=root;o.location-=root.location
 if kind=='building':
  original=max(v.co.z for v in master.data.vertices);mod=o.modifiers.new('Height follows house floors','NODES');mod.node_group=resize
  fc=getattr(mod.properties.inputs,s.identifier).driver_add('value');driver=fc.driver;driver.type='SCRIPTED'
  for prop,varname in [('floors','floors'),('floor_spacing','spacing')]:
   var=driver.variables.new();var.name=varname;var.type='SINGLE_PROP';var.targets[0].id=o.parent;var.targets[0].data_path='["'+prop+'"]'
  driver.expression=f'({original}+(floors-4)*spacing)/{original}'
 o.hide_select=idx!=0
# A separate editable preview of every module sits behind the street.
notes=bpy.data.texts.get('READ_ME');notes.clear();notes.write('MODULAR STREET TEMPLATE\nMODULE_LIBRARY_EDIT_HERE contains shared source objects. Edit ASSET_WINDOW_01 to update all generated windows. Edit or replace other ASSET_* meshes to update all references. Sources are laid out behind the street, at Y >= 15. Use Outliner > select asset > Numpad . to frame it.\nHOUSE_0_0_CONTROLS and the other house empties move an entire house. Their Custom Properties floors, columns, window_spacing and floor_spacing control a Geometry Nodes facade. Shell height follows floors; existing stairs, pipes and doors remain separate replaceable modules. Window grid modifiers also expose Window module for custom objects. Defaults reproduce the current game.\nSource origins are bottom-centre; apply Rotation/Scale on replacements. The new mesh should use the same approximate size. For replacement: select existing ASSET_* first, new mesh last (active), Ctrl+L > Link Object Data. Keep the ASSET object transform.\nMain game section is X=0..26m. Neighbour sections are locked. Exclude MODULE_LIBRARY, guides and preview lights/camera from game export. Pickup_reference modules are layout guides, not gameplay objects. No scripts/add-ons are needed to use this file. Changes are not connected to the game automatically.\n')
ru=bpy.data.texts.new('КАК_РЕДАКТИРОВАТЬ');ru.write('МОДУЛЬНАЯ УЛИЦА\n\n1. Открой MODULE_LIBRARY_EDIT_HERE в Outliner. Выбери ASSET_WINDOW_01, нажми Numpad . — это образец всех окон. Правки в Edit Mode изменяют все окна. Аналогично работают двери, фонари, лавка и остальные ASSET_*.\n2. Для замены готовым мешем: у нового объекта примени Rotation/Scale и поставь Origin снизу по центру. Выдели старый ASSET_* первым, новый объект последним (активным). Ctrl+L → Link Object Data. Старый ASSET_* сохраняет имя и положение, а его копии получают новую геометрию.\n3. Выбери HOUSE_0_0_CONTROLS или другой HOUSE_*_CONTROLS. Object Properties → Custom Properties: floors — этажи, columns — окна в ряд, window_spacing — шаг окон, floor_spacing — шаг этажей. Корпус дома меняет высоту вместе с floors. Лестницы и трубы остаются отдельными модулями, подгоняй их отдельно. Перемещение контроллера перемещает весь дом.\n4. У WINDOW_GRID_* в модификаторе можно выбрать другой объект в Window module. У прочих модулей — Source module.\n5. Рабочая секция EDIT_26m_MAIN: X=0..26 м. Соседи заблокированы для проверки стыков. Библиотека образцов находится за улицей, Y>=15. Не экспортируй её, ориентиры и камеру в игру. Пришли мне изменённый .blend — подготовлю подключение.\n\nВсе текстуры упакованы. Дополнения и запуск Python не нужны. Файл создан в Blender 5.2.3.\n')
# Keep the library visible in viewport, but outside the gameplay camera.
for o in list(library.objects):
 bpy.ops.object.text_add(location=(o.location.x-2,o.location.y-1,0.02));label=bpy.context.object;label.name='LABEL_'+o.name;label.data.body=o.name;label.data.size=.22
 for col in list(label.users_collection):col.objects.unlink(label)
 library.objects.link(label)

# Save a useful starting selection and a generated layout, without external scripts.
bpy.ops.object.select_all(action='DESELECT')
root=controllers[0,0];root.select_set(True);bpy.context.view_layer.objects.active=root
bpy.context.view_layer.update()
for screen in bpy.data.screens:
 for area in screen.areas:
  if area.type=='PROPERTIES':area.spaces.active.context='OBJECT'
  if area.type=='VIEW_3D':
   area.spaces.active.region_3d.view_location=(13,0,1);area.spaces.active.region_3d.view_distance=32
bpy.context.preferences.filepaths.save_version=0
bpy.ops.wm.save_as_mainfile(filepath=a.output,compress=True)
print('MODULAR_SAVED',len(cache),'replaceable source modules;',len(facades),'procedural facades;',len(bpy.data.objects),'objects')
