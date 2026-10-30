import bpy,json,struct,pathlib,math,hashlib,sys,argparse
parser=argparse.ArgumentParser()
parser.add_argument("--source",default="/workspace/model-sources/hobo-poses-original.blend")
parser.add_argument("--baseline",default="/workspace/model-sources/hobo.blend")
args=parser.parse_args(sys.argv[sys.argv.index("--")+1:] if "--" in sys.argv else [])
from mathutils import Matrix,Vector
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
weighted.add('root.x')
# Rigid bone attachments such as hats must follow their animated parent too.
parents={c:i for i,node in enumerate(g['nodes']) for c in node.get('children',[])}
for i,node in enumerate(g['nodes']):
 if 'mesh' in node and 'skin' not in node:
  parent=parents.get(i)
  if parent is not None:weighted.add(g['nodes'][parent].get('name',''))
bpy.ops.wm.open_mainfile(filepath=args.baseline,use_scripts=False)
rig=bpy.data.objects['rig'];bpy.context.view_layer.update()
baseline={p.name:(rig.matrix_world@p.matrix).copy() for p in rig.pose.bones}
bases={p.name:p.matrix_basis.copy() for p in rig.pose.bones}
properties={p.name:{k:v for k,v in p.items() if isinstance(v,(int,float,bool))} for p in rig.pose.bones}
C=Matrix.Rotation(-math.pi/2,4,'X');invC=C.inverted()
bpy.ops.wm.open_mainfile(filepath=args.source,use_scripts=False)
rig=bpy.data.objects['rig'];rig.animation_data_create()
# Use the authored idle as defaults for channels omitted from the walking action.
idle=bpy.data.actions.get('idle')
if idle:
 rig.animation_data.action=idle
 if idle.slots:rig.animation_data.action_slot=idle.slots[0]
 bpy.context.scene.frame_set(round(idle.frame_range[0]));bpy.context.view_layer.update()
 bases={p.name:p.matrix_basis.copy() for p in rig.pose.bones}
 properties={p.name:{k:v for k,v in p.items() if isinstance(v,(int,float,bool))} for p in rig.pose.bones}

for obj in bpy.data.objects:
 if obj.type=='MESH':obj.hide_viewport=True
if rig.animation_data:
 for track in rig.animation_data.nla_tracks:track.mute=True
names=sorted(n for n in weighted if n in baseline and n in rig.pose.bones)
result={'version':1,'sourceSha256':hashlib.sha256(pathlib.Path(args.source).read_bytes()).hexdigest(),'fps':bpy.context.scene.render.fps/bpy.context.scene.render.fps_base,'bones':names,'clips':{}}
aliases={'AW • rig • Walk.001':'walk','mocha':'spray','rigaet':'burp','rivok':'dodge','scrap_idle':'weapon_idle','scrap_pickup':'weapon_pickup',**{f'scrab_{i:02d}_combo':f'weapon_{i:02d}_combo' for i in range(1,4)}}
for action in list(bpy.data.actions):
 clip_name=aliases.get(action.name,action.name)
 if clip_name not in {'idle','jab_01','kick','walk','spray','burp','dodge','weapon_idle','weapon_pickup','bottle_pickup'} and not clip_name.endswith('_combo'):continue
 rig.animation_data.action=None
 for bone in rig.pose.bones:
  if bone.name in bases:bone.matrix_basis=bases[bone.name]
  for key,value in properties.get(bone.name,{}).items():bone[key]=value
 rig.animation_data.action=action
 if action.slots:rig.animation_data.action_slot=action.slots[0]
 start,end=map(round,action.frame_range);frames=[];measure=[];anchor=None
 for frame in range(start,end+1):
  bpy.context.scene.frame_set(frame);bpy.context.view_layer.update();evaluated=rig.evaluated_get(bpy.context.evaluated_depsgraph_get());values=[]
  root_position=(C@evaluated.matrix_world@evaluated.pose.bones['root.x'].matrix).translation
  if anchor is None:anchor=root_position.copy()
  shift=root_position-anchor
  motion=Matrix.Translation((-shift.x,0,-shift.z)) if clip_name in {'walk','idle','dodge','weapon_idle','weapon_pickup','bottle_pickup'} else Matrix.Identity(4)
  for name in names:
   delta=motion@C@evaluated.matrix_world@evaluated.pose.bones[name].matrix@baseline[name].inverted()@invC
   values.extend(round(delta[row][col],6) for col in range(4) for row in range(4))
  frames.append(values)
  measure.append({'frame':frame,**{name:[round(v,4) for v in (C@evaluated.matrix_world@evaluated.pose.bones[name].matrix).translation] for name in ['hand.l','hand.r','foot.l','foot.r','root.x'] if name in evaluated.pose.bones}})
 markers={m.name:round(m.frame-start) for m in action.pose_markers}
 if clip_name.startswith('jab_') and clip_name.endswith('_combo') and 'hit' not in markers:
  hand=max(['hand.r','hand.l'],key=lambda name:max(f[name][2]-f['root.x'][2] for f in measure)-(measure[0][name][2]-measure[0]['root.x'][2]));contact=max(measure,key=lambda f:f[hand][2]-f['root.x'][2]);markers['hit']=contact['frame']-start
 if clip_name.startswith('weapon_') and clip_name.endswith('_combo') and 'hit' not in markers:
  contact=max(measure,key=lambda f:f['hand.r'][2]-f['root.x'][2]);markers['hit']=contact['frame']-start
 if clip_name=='weapon_idle' and bpy.data.objects.get('scrab'):
  bpy.context.scene.frame_set(start);bpy.context.view_layer.update();deps=bpy.context.evaluated_depsgraph_get();hand=C@rig.evaluated_get(deps).matrix_world@rig.evaluated_get(deps).pose.bones['hand.r'].matrix;item=C@bpy.data.objects['scrab'].evaluated_get(deps).matrix_world
  axis=hand.to_3x3().inverted()@(item.to_3x3()@Vector((0,0,1)));axis.normalize();result['weaponGrip']={'axis':list(axis),'source':'scrab / c_hand_ik.r'}

 # The new kick includes its recovery; contact is at maximum forward foot extension.
 if clip_name.startswith('kick') and 'hit' not in markers:
  contact=max(measure,key=lambda f:max(f['foot.l'][2],f['foot.r'][2]))
  markers['hit']=contact['frame']-start
 result['clips'][clip_name]={'start':start,'end':end,'frames':frames,'duration':(end-start)/result['fps'],'markers':markers}
 print('ACTION_MEASURE',action.name,json.dumps(measure),flush=True)
(root/'public/models/hobo-actions.json').write_text(json.dumps(result,separators=(',',':')))
print('EXPORTED',len(names),'bones',list(result['clips']), 'fps',result['fps'],flush=True)
