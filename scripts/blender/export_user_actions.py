import bpy,json,struct,pathlib,math,hashlib
from mathutils import Matrix
root=pathlib.Path('/workspace/bomzh_game')
blob=(root/'public/models/hobo.glb').read_bytes();n=struct.unpack_from('<I',blob,12)[0];g=json.loads(blob[20:20+n]);base=28+n;weighted=set()
for mesh in g['meshes']:
 for primitive in mesh['primitives']:
  attrs=primitive['attributes']
  if 'JOINTS_0' not in attrs:continue
  joints=g['accessors'][attrs['JOINTS_0']];weights=g['accessors'][attrs['WEIGHTS_0']];jv=g['bufferViews'][joints['bufferView']];wv=g['bufferViews'][weights['bufferView']];fmt={5121:'B',5123:'H'}[joints['componentType']];step=struct.calcsize(fmt)*4
  for i in range(joints['count']):
   js=struct.unpack_from('<'+fmt*4,blob,base+jv.get('byteOffset',0)+joints.get('byteOffset',0)+i*jv.get('byteStride',step))
   ws=struct.unpack_from('<ffff',blob,base+wv.get('byteOffset',0)+weights.get('byteOffset',0)+i*wv.get('byteStride',16))
   for j,w in zip(js,ws):
    if w>0:weighted.add(g['nodes'][g['skins'][0]['joints'][j]]['name'])
# Rigid bone attachments such as hats must follow their animated parent too.
parents={c:i for i,node in enumerate(g['nodes']) for c in node.get('children',[])}
for i,node in enumerate(g['nodes']):
 if 'mesh' in node and 'skin' not in node:
  parent=parents.get(i)
  if parent is not None:weighted.add(g['nodes'][parent].get('name',''))
bpy.ops.wm.open_mainfile(filepath='/workspace/model-sources/hobo.blend',use_scripts=False)
rig=bpy.data.objects['rig'];bpy.context.view_layer.update()
baseline={p.name:(rig.matrix_world@p.matrix).copy() for p in rig.pose.bones}
bases={p.name:p.matrix_basis.copy() for p in rig.pose.bones}
properties={p.name:{k:v for k,v in p.items() if isinstance(v,(int,float,bool))} for p in rig.pose.bones}
C=Matrix.Rotation(-math.pi/2,4,'X');invC=C.inverted()
bpy.ops.wm.open_mainfile(filepath='/workspace/model-sources/hobo-poses-original.blend',use_scripts=False)
rig=bpy.data.objects['rig'];rig.animation_data_create()
for obj in bpy.data.objects:
 if obj.type=='MESH':obj.hide_viewport=True
if rig.animation_data:
 for track in rig.animation_data.nla_tracks:track.mute=True
names=sorted(n for n in weighted if n in baseline and n in rig.pose.bones)
result={'version':1,'fps':bpy.context.scene.render.fps/bpy.context.scene.render.fps_base,'bones':names,'clips':{}}
for action in list(bpy.data.actions):
 if action.name not in {'idle','jab_01','kick'}:continue
 rig.animation_data.action=None
 for bone in rig.pose.bones:
  if bone.name in bases:bone.matrix_basis=bases[bone.name]
  for key,value in properties.get(bone.name,{}).items():bone[key]=value
 rig.animation_data.action=action
 if action.slots:rig.animation_data.action_slot=action.slots[0]
 start,end=map(round,action.frame_range);frames=[];measure=[]
 for frame in range(start,end+1):
  bpy.context.scene.frame_set(frame);bpy.context.view_layer.update();evaluated=rig.evaluated_get(bpy.context.evaluated_depsgraph_get());values=[]
  for name in names:
   delta=C@evaluated.matrix_world@evaluated.pose.bones[name].matrix@baseline[name].inverted()@invC
   values.extend(round(delta[row][col],6) for col in range(4) for row in range(4))
  frames.append(values)
  measure.append({'frame':frame,**{name:[round(v,4) for v in (C@evaluated.matrix_world@evaluated.pose.bones[name].matrix).translation] for name in ['hand.l','hand.r','foot.l','foot.r','root.x'] if name in evaluated.pose.bones}})
 result['clips'][action.name]={'start':start,'end':end,'frames':frames,'duration':(end-start)/result['fps']}
 print('ACTION_MEASURE',action.name,json.dumps(measure),flush=True)
(root/'public/models/hobo-actions.json').write_text(json.dumps(result,separators=(',',':')))
print('EXPORTED',len(names),'bones',list(result['clips']), 'fps',result['fps'],flush=True)
