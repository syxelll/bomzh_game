"""Author full-body secondary actions on the user's rig, bake its evaluated constraints.
Original .blend and original Actions are never written. Re-run after rig calibration.
"""
import bpy,json,math,pathlib,sys
from mathutils import Matrix,Vector,Quaternion,Euler
R=pathlib.Path('/workspace/bomzh_game');out=pathlib.Path('/workspace/model-exports/animation-polish')
cal=json.loads(pathlib.Path(__file__).with_name('rig-calibration.json').read_text())['hobo'];vs=cal['visual'];V=Matrix([[vs[c*4+r] for c in range(4)]for r in range(4)])
C=Matrix.Rotation(-math.pi/2,4,'X');G=V@C;invG=G.inverted()
bpy.ops.wm.open_mainfile(filepath='/workspace/model-exports/hobo-oct29/hobo-oct29_baked.blend',use_scripts=False)
rig=bpy.data.objects['rig'];bpy.context.view_layer.update();baseline={p.name:(rig.matrix_world@p.matrix).copy()for p in rig.pose.bones}
bpy.ops.wm.open_mainfile(filepath='/workspace/model-sources/hobo-oct30-update.blend',use_scripts=False)
rig=bpy.data.objects['rig'];rig.animation_data_create()
for track in rig.animation_data.nla_tracks:track.mute=True
rig.animation_data.action=bpy.data.actions['idle'];rig.animation_data.action_slot=rig.animation_data.action.slots[0];bpy.context.scene.frame_set(1);bpy.context.view_layer.update()
bases={p.name:p.matrix_basis.copy()for p in rig.pose.bones};props={p.name:{k:v for k,v in p.items()if isinstance(v,(int,float,bool))}for p in rig.pose.bones}
rig.animation_data.action=None
for side in ['.l','.r']:
 for stem in ['c_hand_ik','c_foot_ik','c_arms_pole','c_leg_pole']:
  p=rig.pose.bones[stem+side]
  for c in p.constraints:c.mute=True
 for stem in ['c_hand_ik','c_foot_ik']:
  p=rig.pose.bones[stem+side];p['ik_fk_switch']=0.;p['auto_stretch']=0.;p['stretch_length']=1.
bpy.context.view_layer.update()
ref={p.name:(G@rig.matrix_world@p.matrix).copy()for p in rig.pose.bones}
# A constant sole offset is baked once. It never changes at a supporting-foot switch.
sole=1e9
for obj in bpy.data.objects:
 if obj.type=='MESH'and any(n in obj.name.lower()for n in ['shoe','boot']):
  ev=obj.evaluated_get(bpy.context.evaluated_depsgraph_get());mesh=ev.to_mesh();sole=min(sole,min((G@ev.matrix_world@v.co).y for v in mesh.vertices));ev.to_mesh_clear()
if abs(sole)>1:sole=0
for m in ref.values():m.translation.y-=sole
print('CALIBRATION',sole,{n:list(ref[n].translation)for n in ['root.x','c_root_master.x','hand.r','c_hand_ik.r','foot.l','c_foot_ik.l']},flush=True)
# Store evaluated control bases with the same constant sole correction.
hip0=ref['c_root_master.x'].translation.copy();controls=['c_root_master.x','c_spine_01.x','c_spine_02.x','c_spine_03.x','c_head.x']+[n+s for s in ['.l','.r']for n in ['c_hand_ik','c_foot_ik','c_arms_pole','c_leg_pole']]
finger_controls=[p.name for p in rig.pose.bones if p.name.startswith(('c_index','c_middle','c_ring','c_pinky','c_thumb'))and p.name.endswith(('.l','.r'))]
controls+=finger_controls
for obj in bpy.data.objects:
 if obj.type=='MESH':obj.hide_viewport=True

def key(t,hip=(0,0,0),rot=(0,0,0),spine=(0,0,0),head=(0,0,0),lh=None,rh=None,lf=(0,0,0),rf=(0,0,0),wrist=(0,0,0),tuck=0,hands=(0,0)):
 return {'t':t,'hip':hip,'rot':rot,'spine':spine,'head':head,'lh':lh or tuple(ref['hand.l'].translation),'rh':rh or tuple(ref['hand.r'].translation),'lf':lf,'rf':rf,'wrist':wrist,'tuck':(tuck,),'hands':hands}
# Time-weighted cubic tangents make the movement pass through poses instead of
# stopping at every key. Holds/impact keys use repeated values deliberately.
def sample(keys,t):
 i=0
 while i<len(keys)-2 and t>keys[i+1]['t']:i+=1
 a,b=keys[i:i+2];span=b['t']-a['t'];u=max(0,min(1,(t-a['t'])/span));result={}
 for name in a:
  if name=='t':continue
  values=[]
  for c in range(len(a[name])):
   p,q=a[name][c],b[name][c];before=keys[max(0,i-1)];after=keys[min(len(keys)-1,i+2)]
   ma=0 if i==0 else (q-before[name][c])/(b['t']-before['t']);mb=0 if i+1==len(keys)-1 else (after[name][c]-p)/(after['t']-a['t'])
   if (q-p)==0:ma=mb=0
   values.append((2*u**3-3*u*u+1)*p+(u**3-2*u*u+u)*span*ma+(-2*u**3+3*u*u)*q+(u**3-u*u)*span*mb)
  result[name]=values
 return result

def rotation(degrees):return Euler(tuple(math.radians(v)for v in degrees),'YXZ').to_matrix().to_4x4()
def put(name,world):rig.pose.bones[name].matrix=rig.matrix_world.inverted()@invG@world

bind_game={name:G@matrix for name,matrix in baseline.items()}
hand_delta_offset={}
for side in ['.l','.r']:
 forearm_delta=ref['forearm_stretch'+side].to_quaternion()@bind_game['forearm_stretch'+side].to_quaternion().inverted()
 hand_delta=ref['hand'+side].to_quaternion()@bind_game['hand'+side].to_quaternion().inverted()
 hand_delta_offset[side]=forearm_delta.inverted()@hand_delta

def apply(p,victim=False):
 for bone in rig.pose.bones:
  bone.matrix_basis=bases[bone.name]
  for k,v in props.get(bone.name,{}).items():bone[k]=v
 for side in ['.l','.r']:
  for stem in ['c_hand_ik','c_foot_ik']:
   bone=rig.pose.bones[stem+side];bone['ik_fk_switch']=0.;bone['auto_stretch']=0.;bone['stretch_length']=1.
 # Shape the fingers through their own ARP controls, without moving bases or
 # scaling skin joints. Open hands remain gently curved, with the thumb outside.
 for n in finger_controls:
  bone=rig.pose.bones[n];openness=p['hands'][0 if n.endswith('.l')else 1]
  if '_base' in n:continue
  if 'thumb' in n:
   bone.rotation_euler.x*=1-openness*.65;bone.rotation_euler.z*=1-openness*.55
  else:bone.rotation_euler.x*=1-openness*.82
 bpy.context.view_layer.update()
 Q=rotation(p['rot']);body=Matrix.Translation(hip0+Vector(p['hip']))@Q@Matrix.Translation(-hip0)
 put('c_root_master.x',body@ref['c_root_master.x']);bpy.context.view_layer.update()
 for name,amount in [('c_spine_01.x',.35),('c_spine_02.x',.4),('c_spine_03.x',.25),('c_head.x',1)]:
  bone=rig.pose.bones[name];angles=p['head'] if name=='c_head.x'else[v*amount for v in p['spine']]
  current=G@rig.matrix_world@bone.matrix;pos=current.translation.copy();desired=Matrix.Translation(pos)@rotation(angles)@Matrix.Translation(-pos)@current;put(name,desired);bpy.context.view_layer.update()
 # Hands and feet have explicit support/contact targets. All bending is solved
 # by ARP's native IK and its twist bones, with auto-stretch disabled.
 for side,handKey,footKey in [('.l','lh','lf'),('.r','rh','rf')]:
  hand=Vector(p[handKey]);foot=ref['c_foot_ik'+side].translation+Vector(p[footKey]);armPole=Vector((.72 if side=='.l'else-.72,1.05,-.1));legPole=Vector((.22 if side=='.l'else-.22,.55,.75))
  if victim:
   # Tuck the knees as the opponent is loaded; protect the head on impact.
   foot.y+=p['tuck'][0]*.36;foot.z+=p['tuck'][0]*.32
   hand=body@hand;foot=body@foot;armPole=body@armPole;legPole=body@legPole
   foot.y=max(foot.y,ref['c_foot_ik'+side].translation.y);hand.y=max(hand.y,.10)
  for stem,target in [('c_arms_pole',armPole),('c_leg_pole',legPole)]:
   m=ref[stem+side].copy();m.translation=target;put(stem+side,m)
  m=ref['c_foot_ik'+side].copy();m.translation=foot
  if victim:m=body.to_quaternion().to_matrix().to_4x4()@m;m.translation=foot
  put('c_foot_ik'+side,m)
  m=ref['c_hand_ik'+side].copy();turn=Matrix.Identity(4);m=turn@m
  if victim:m=body.to_quaternion().to_matrix().to_4x4()@m
  m.translation=hand;put('c_hand_ik'+side,m)
 bpy.context.view_layer.update()
 # Correct the fixed controller/deform wrist offset without scaling the arm.
 for side,handKey in [('.l','lh'),('.r','rh')]:
  desired=Vector(p[handKey]);desired=body@desired if victim else desired
  actual=(G@rig.matrix_world@rig.pose.bones['hand'+side].matrix).translation
  m=G@rig.matrix_world@rig.pose.bones['c_hand_ik'+side].matrix;m.translation+=desired-actual;put('c_hand_ik'+side,m)
 bpy.context.view_layer.update()
 # Transport the authored neutral wrist with the forearm's deformation.
 # This keeps its roll near the forearm instead of introducing a 180-degree
 # difference between the two bones which share the forearm skin weights.
 for side in ['.l','.r']:
  world=lambda n:G@rig.matrix_world@rig.pose.bones[n+side].matrix
  forearm_delta=world('forearm_stretch').to_quaternion()@bind_game['forearm_stretch'+side].to_quaternion().inverted()
  hand_q=forearm_delta@hand_delta_offset[side]@bind_game['hand'+side].to_quaternion()
  wrist_turn=rotation([v*.25 for v in p['wrist']]).to_quaternion() if side=='.r'else Quaternion()
  hand_q=hand_q@wrist_turn
  q=hand_q@ref['hand'+side].to_quaternion().inverted()@ref['c_hand_ik'+side].to_quaternion()
  old=world('c_hand_ik');put('c_hand_ik'+side,Matrix.LocRotScale(old.translation,q,old.to_scale()))
 bpy.context.view_layer.update()
 # The palm must follow the forearm instead of keeping a fixed world rotation.
 # A soft angular limit preserves deliberate wrist cocking without back-folding.
 for iteration in range(3):
  changed=False
  for side in ['.l','.r']:
   world=lambda n:G@rig.matrix_world@rig.pose.bones[n+side].matrix
   wrist=world('hand').translation;arm=(wrist-world('forearm_stretch').translation).normalized();palm=(world('middle1').translation-wrist).normalized();angle=palm.angle(arm)
   start=math.radians(32);limit=math.radians(58)
   if angle>start:
    target=start+(limit-start)*math.tanh((angle-start)/(limit-start));axis=palm.cross(arm)
    if axis.length>.00001:
     turn=Quaternion(axis.normalized(),angle-target).to_matrix().to_4x4();control=world('c_hand_ik');pivot=control.translation.copy();control=turn@control;control.translation=pivot;put('c_hand_ik'+side,control);changed=True
  if not changed:break
  bpy.context.view_layer.update()

neutral=key(0)
# Hero: load the legs, bring the opponent to the hip, extend, then turn and drive
# down. Counter-arm, head and feet lead/follow at different times.
grab=[neutral,key(.22,hip=(0,-.06,.09),spine=(-15,0,0),lh=(.2,1.12,.39),rh=(-.19,1.13,.38),lf=(.03,0,.12),hands=(.92,.92)),key(.48,hip=(0,-.18,.17),spine=(-22,-12,0),lh=(.20,1.04,.48),rh=(-.20,1.05,.5),lf=(.03,0,.16),rf=(-.04,0,-.10),hands=(.55,.62)),key(.82,hip=(0,-.03,.12),rot=(0,-16,0),spine=(5,10,0),head=(-6,0,0),lh=(.18,1.48,.31),rh=(-.18,1.5,.34),lf=(.03,0,.16),rf=(-.04,0,-.10),hands=(.55,.62)),key(1.04,hip=(0,.01,.09),rot=(0,6,0),spine=(9,20,0),head=(-7,0,0),lh=(.20,1.58,.30),rh=(-.18,1.61,.34),lf=(.03,0,.16),rf=(-.04,0,-.10),hands=(.55,.62)),key(1.13,hip=(0,-.04,.14),rot=(0,10,0),spine=(-8,10,0),lh=(.22,1.42,.43),rh=(-.18,1.42,.44),lf=(.03,0,.18),rf=(-.04,0,-.08),hands=(1,1)),key(1.32,hip=(0,-.14,.22),rot=(0,12,0),spine=(-34,-12,0),head=(8,0,0),lh=(.23,1.02,.56),rh=(-.14,1.0,.61),lf=(.03,0,.22),rf=(-.04,0,-.10),hands=(1,1)),key(1.43,hip=(0,-.13,.23),spine=(-31,-6,0),head=(8,0,0),lh=(.24,.98,.54),rh=(-.19,.95,.56),lf=(.03,0,.22),hands=(.95,.95)),key(1.73,hip=(0,-.04,.10),spine=(-10,0,0),lh=(.3,1.0,.12),rh=(-.3,1.02,.12),lf=(.02,0,.1),hands=(.65,.7)),key(2.1)]
# Victim is animated around its pelvis; the game moves the pair's anchor in the
# ground plane. Knees tuck, shoulders curl and arms brace before touching ground.
victim=[neutral,key(.25,hip=(0,-.03,0),spine=(-8,0,0),lh=(.25,1.23,.31),rh=(-.25,1.23,.32),hands=(.7,.7)),key(.48,hip=(0,-.14,0),spine=(-14,0,0),lh=(.25,1.32,.28),rh=(-.25,1.34,.29),tuck=.12,hands=(.55,.55)),key(.82,hip=(0,.52,0),rot=(-66,0,-5),spine=(-12,0,0),lh=(.24,1.32,.30),rh=(-.24,1.35,.30),tuck=.8,hands=(.6,.7)),key(1.04,hip=(0,.60,0),rot=(-115,0,3),spine=(-19,0,0),head=(12,0,0),lh=(.28,1.35,.19),rh=(-.28,1.34,.20),tuck=1,hands=(.9,.95)),key(1.34,hip=(0,-.66,0),rot=(-83,0,0),spine=(-10,0,0),head=(15,0,0),lh=(.40,1.1,.06),rh=(-.40,1.1,.06),tuck=.45,hands=(.95,.95)),key(1.43,hip=(0,-.70,0),rot=(-91,0,0),spine=(-4,0,0),head=(8,0,0),lh=(.38,1.05,.10),rh=(-.38,1.06,.1),tuck=.25,hands=(.9,.6)),key(1.65,hip=(0,-.69,0),rot=(-88,0,0),spine=(-8,0,0),head=(12,0,0),lh=(.43,.9,-.15),rh=(-.26,1.08,.10),tuck=0,hands=(.85,.45)),key(2.1,hip=(0,-.69,0),rot=(-88,0,0),spine=(-8,0,0),head=(12,0,0),lh=(.43,.9,-.15),rh=(-.26,1.08,.10),tuck=0,hands=(.85,.45))]
throw=[neutral,key(.16,hip=(-.025,-.025,-.04),rot=(0,-15,0),spine=(3,-15,0),head=(0,17,0),lh=(.25,1.18,.18),rh=(-.33,1.37,-.20),rf=(0,0,-.05),wrist=(-15,-30,0),hands=(.6,.18)),key(.30,hip=(-.025,-.045,-.025),rot=(0,-23,0),spine=(7,-20,0),head=(0,25,0),lh=(.28,1.18,.32),rh=(-.27,1.53,-.21),rf=(0,0,-.08),wrist=(-30,-35,15),hands=(.7,.18)),key(.43,hip=(.015,-.02,.11),rot=(0,20,0),spine=(-14,15,0),head=(0,-12,0),lh=(.36,1.15,.02),rh=(-.08,1.36,.48),lf=(0,0,.18),rf=(0,0,-.08),wrist=(40,40,-12),hands=(.65,.65)),key(.56,hip=(.015,-.04,.16),rot=(0,27,0),spine=(-22,20,0),lh=(.37,1.0,-.04),rh=(.22,1.10,.32),lf=(0,0,.22),rf=(0,0,-.04),wrist=(65,70,0),hands=(.65,1)),key(.78,hip=(0,-.01,.07),spine=(-8,5,0),lh=(.31,.96,.08),rh=(-.10,.96,.18),lf=(0,0,.1),hands=(.35,.65)),key(1.0)]
smash=[neutral,key(.24,hip=(0,-.17,.10),spine=(-33,-5,0),lh=(.32,.8,.10),rh=(-.22,.45,.32),lf=(.03,0,.10),hands=(.45,1)),key(.48,hip=(0,-.22,.11),spine=(-40,-10,0),head=(10,0,0),lh=(.30,.70,.10),rh=(-.18,.22,.34),lf=(.03,0,.1),hands=(.45,.2)),key(.84,hip=(0,-.06,.03),spine=(-12,-6,0),head=(0,0,-3),lh=(.26,1.13,.12),rh=(-.24,1.25,.22),wrist=(-10,0,0),hands=(.6,.2)),key(1.10,hip=(0,-.02,0),spine=(8,-7,0),head=(0,0,7),lh=(.28,1.24,.2),rh=(-.24,1.59,.06),wrist=(-55,-15,0),hands=(.85,.2)),key(1.30,hip=(0,-.035,0),spine=(2,5,0),head=(3,0,9),lh=(.26,1.28,.20),rh=(-.16,1.51,.07),wrist=(-70,-8,0),hands=(.85,.2)),key(1.37,hip=(0,-.06,-.01),spine=(7,7,0),head=(-10,0,-6),lh=(.24,1.27,.18),rh=(-.22,1.56,.14),wrist=(-20,-5,0),hands=(.85,.2)),key(1.57,hip=(0,-.03,0),spine=(0,4,0),head=(-3,0,-2),lh=(.27,1.13,.16),rh=(-.30,1.27,.25),wrist=(-10,0,0),hands=(.6,.2)),key(1.96)]
hurt=[neutral,key(.08,hip=(0,-.03,-.035),rot=(0,-4,0),spine=(15,-8,-3),head=(9,4,0),lh=(.24,1.0,.17),rh=(-.22,1.12,.2)),key(.18,hip=(0,-.065,-.055),spine=(11,-5,-3),head=(2,0,0),lh=(.23,1.12,.2),rh=(-.22,1.18,.2)),key(.34,hip=(0,-.025,-.025),spine=(3,0,0),lh=(.26,1.04,.13),rh=(-.27,1.08,.15)),key(.56)]
# A separate grounded pose and kneeling recovery replace rigid whole-character
# tipping. The left arm braces, one foot plants, then the hips rise.
grounded=[dict(victim[-1],t=0),dict(victim[-1],t=.1)]
getup=[dict(victim[-1],t=0),key(.20,hip=(.04,-.68,.01),rot=(-68,0,31),spine=(-13,0,-12),head=(12,0,0),lh=(.45,.82,-.20),rh=(-.22,1.30,.22),tuck=.65,hands=(1,.6)),key(.46,hip=(.04,-.46,.07),rot=(-24,0,5),spine=(-26,-8,0),head=(12,0,0),lh=(.34,.36,.18),rh=(-.23,1.18,.3),lf=(.08,0,.30),rf=(-.06,0,-.16),tuck=.0,hands=(1,.65)),key(.70,hip=(.02,-.25,.09),spine=(-32,-5,0),head=(10,0,0),lh=(.3,.83,.32),rh=(-.26,1.08,.24),lf=(.05,0,.18),rf=(-.04,0,-.13),hands=(.5,.6)),key(.94,hip=(0,-.07,.04),spine=(-12,0,0),lh=(.3,1.03,.13),rh=(-.3,1.03,.15),lf=(.02,0,.07),hands=(.2,.3)),key(1.18)]
fall=[neutral,key(.13,hip=(0,-.04,0),spine=(17,-4,0),head=(10,0,0),lh=(.3,1.20,.10),rh=(-.3,1.22,.12),hands=(.6,.6)),key(.34,hip=(0,-.20,0),rot=(-35,0,4),spine=(-12,0,0),head=(12,0,0),lh=(.4,1.12,.1),rh=(-.4,1.12,.1),tuck=.5,hands=(.85,.85)),key(.56,hip=(0,-.70,0),rot=(-91,0,0),spine=(-6,0,0),head=(13,0,0),lh=(.4,1.06,.07),rh=(-.4,1.06,.07),tuck=.3,hands=(1,.8)),key(.74,**{k:v for k,v in victim[-1].items()if k not in ['t','tuck']},tuck=0)]
disgust=[neutral,key(.2,hip=(0,-.03,-.025),spine=(8,-9,0),head=(0,15,4),lh=(.23,1.15,.20),rh=(-.12,1.40,.14),hands=(.35,1)),key(.48,hip=(0,-.06,-.045),spine=(13,-14,0),head=(5,23,3),lh=(.22,1.17,.24),rh=(-.11,1.43,.13),hands=(.35,1)),key(1.16,hip=(0,-.035,-.03),spine=(6,-9,0),head=(2,15,0),lh=(.24,1.14,.23),rh=(-.12,1.40,.14),hands=(.35,1)),key(1.52,hip=(0,-.01,0),spine=(2,-3,0),lh=(.26,1.1,.14),rh=(-.20,1.2,.17),hands=(.2,.65)),key(1.8)]
guard=[key(0,hip=(0,-.035,0),spine=(-4,-6,0),head=(0,6,0),lh=(.22,1.17,.20),rh=(-.20,1.25,.18),lf=(.025,0,.04),rf=(-.025,0,-.06)),key(.8,hip=(.015,-.025,.005),spine=(-2,-3,0),head=(0,4,0),lh=(.23,1.18,.21),rh=(-.21,1.26,.19),lf=(.025,0,.04),rf=(-.025,0,-.06)),key(1.6,hip=(-.012,-.04,-.005),spine=(-4,-8,1),head=(1,7,0),lh=(.22,1.16,.19),rh=(-.20,1.24,.18),lf=(.025,0,.04),rf=(-.025,0,-.06)),key(2.4,hip=(0,-.035,0),spine=(-4,-6,0),head=(0,6,0),lh=(.22,1.17,.20),rh=(-.20,1.25,.18),lf=(.025,0,.04),rf=(-.025,0,-.06))]
clips={'enemy_guard':(guard,False,{}),'disgust':(disgust,False,{}),'grab_actor':(grab,False,{'grip':.3,'release':1.13,'hit':1.36}),'grab_victim':(victim,True,{'hit':1.36}),'throw_object':(throw,False,{'release':.43}),'bottle_smash':(smash,False,{'grab':.48,'hit':1.30}),'hurt':(hurt,False,{}),'grounded_back':(grounded,True,{}),'getup_back':(getup,True,{}),'fall_back':(fall,True,{'hit':.56})}
data=json.loads((R/'public/models/hobo-actions.json').read_text());names=data['bones'];fps=30
for name,(keys,is_victim,markers)in clips.items():
 frames=[];duration=keys[-1]['t'];count=round(duration*fps);action=bpy.data.actions.new(name);action.use_fake_user=True
 # Store editable control keys, but evaluate without an active Action so that
 # unkeyed default channels cannot leak from the previous authored move.
 for frame in range(count+1):
  t=duration*frame/count;bpy.context.scene.frame_set(frame+1);apply(sample(keys,t),is_victim)
  evaluated=rig.evaluated_get(bpy.context.evaluated_depsgraph_get());values=[]
  for n in names:
   delta=C@evaluated.matrix_world@evaluated.pose.bones[n].matrix@baseline[n].inverted()@C.inverted()
   values.extend(round(delta[r][c],6)for c in range(4)for r in range(4))
  frames.append(values)
  # Assign only while inserting the sample, not while evaluating the next one.
  rig.animation_data.action=action
  for n in controls:
   bone=rig.pose.bones[n];bone.keyframe_insert('location',frame=frame+1);bone.keyframe_insert('rotation_quaternion'if bone.rotation_mode=='QUATERNION'else 'rotation_euler',frame=frame+1);bone.keyframe_insert('scale',frame=frame+1)
  rig.animation_data.action=None
 data['clips'][name]={'start':1,'end':count+1,'duration':duration,'frames':frames,'markers':{k:round(v/duration*count)for k,v in markers.items()},'grounding':'baked','source':'secondary-actions-v3','loop':name=='enemy_guard'}
 print('BAKED',name,len(frames),flush=True)
data['supplementalAnimations']={'version':3,'source':'scripts/blender/author_secondary_actions.py','rig':'user ARP, native IK, no auto-stretch'}
(R/'public/models/hobo-actions.json').write_text(json.dumps(data,separators=(',',':')))
rig.animation_data.action=bpy.data.actions['grab_actor'];rig.animation_data.action_slot=rig.animation_data.action.slots[0];bpy.context.scene.frame_set(1)
bpy.ops.wm.save_as_mainfile(filepath=str(out/'hobo-secondary-actions.blend'))
print('DONE',flush=True)
