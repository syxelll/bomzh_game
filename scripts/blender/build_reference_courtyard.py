"""Build the reference-inspired courtyard as editable, shared Blender modules."""
import bpy,math,random,argparse,sys
import numpy as np
from mathutils import Vector
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('--source',required=True);p.add_argument('--output',required=True);a=p.parse_args(sys.argv[sys.argv.index('--')+1:]);bpy.ops.wm.open_mainfile(filepath=a.source,use_scripts=False)
rng=np.random.default_rng(2701);random.seed(2701);scene=bpy.context.scene
main=bpy.data.collections['EDIT_26m_MAIN'];library=bpy.data.collections['MODULE_LIBRARY_EDIT_HERE']
# A small set of packed tileable PBR maps, with a deliberately restrained palette.
def image(name,pixels,color=True):
 h,w=pixels.shape[:2];im=bpy.data.images.new(name,width=w,height=h,alpha=True);im.colorspace_settings.name='sRGB' if color else 'Non-Color'
 rgb=np.clip(pixels,0,1)
 out=np.concatenate([rgb,np.ones((h,w,1))],axis=2) if rgb.shape[2]==3 else rgb
 im.pixels.foreach_set(out.astype(np.float32).ravel());im.pack();return im

def field(size,base,noise=5):
 return np.clip(np.array(base)[None,None,:]+rng.normal(0,noise,(size,size,1)),0,255)/255

def normal_image(name,height,strength=.02):
 gy,gx=np.gradient(height);n=np.stack((-gx*strength*height.shape[1],-gy*strength*height.shape[0],np.ones_like(height)),axis=2);n/=np.linalg.norm(n,axis=2,keepdims=True);return image(name,n*.5+.5,False)
S=1024;y,x=np.mgrid[:S,:S]
brick=field(S,[111,85,70],7);heights=np.full((S,S),.6)
for row in range(32):
 for col in range(-1,9):
  xx=col*128+(row%2)*64;yy=row*32;x0=max(0,xx+4);x1=min(S,xx+124);y0=yy+4;y1=min(S,yy+30)
  if x1<=x0:continue
  tint=rng.uniform(.78,1.15);brick[y0:y1,x0:x1]*=tint;brick[y0:y0+2,x0:x1]*=1.12;brick[y1-2:y1,x0:x1]*=.8
  heights[y0:y1,x0:x1]=.85
mortar=(y%32<3)|(((x-(y//32%2)*64)%128)<4);brick[mortar]=np.array([78,75,65])/255+rng.normal(0,.008,(mortar.sum(),1));heights[mortar]=.3
stains=np.repeat(np.repeat(rng.random((16,16)),64,axis=0),64,axis=1)
for axis in [0,1]:stains=sum(np.roll(stains,k,axis=axis) for k in range(-25,26,5))/11
brick*=1-stains[:,:,None]*.17
brick_im=image('COURT_AgedBrick_Color',brick);brick_n=normal_image('COURT_AgedBrick_Normal',heights,.012)
stone=field(S,[135,132,121],7);sh=np.ones((S,S))*.6
stone_joint=(y%192<4)|(((x+(y//192%2)*128)%256)<4);stone[stone_joint]*=.57;sh[stone_joint]=.2
for row in range(6):
 for col in range(5):stone[row*192:min(S,(row+1)*192),col*256:min(S,(col+1)*256)]*=rng.uniform(.94,1.035)
stone*=1-stains[:,:,None]*.1
stone_im=image('COURT_WornLimestone_Color',stone);stone_n=normal_image('COURT_WornLimestone_Normal',sh,.004)
asphalt=field(S,[74,75,74],7);ah=rng.random((S,S))*.025
# Connected cracks with narrower branches and stained repairs.
def stroke(arr,points,color,width=1):
 for (xa,ya),(xb,yb) in zip(points,points[1:]):
  steps=max(abs(int(xb-xa)),abs(int(yb-ya)),1)
  for t in np.linspace(0,1,steps+1):
   xx=int(xa+(xb-xa)*t)%S;yy=int(ya+(yb-ya)*t)%S
   for dy in range(-width,width+1):
    for dx in range(-width,width+1):arr[(yy+dy)%S,(xx+dx)%S]=color
for i in range(10):
 points=[(rng.integers(S),rng.integers(S))]
 for j in range(12):points.append((points[-1][0]+rng.integers(-45,46),points[-1][1]+rng.integers(12,48)))
 stroke(asphalt,points,[.2,.205,.195],1 if i<2 else 0)
 for j in [3,7]:stroke(asphalt,[points[j],(points[j][0]+60,points[j][1]+50),(points[j][0]+85,points[j][1]+95)],[.2,.205,.18],0)
for i in range(30):
 cx,cy=rng.integers(S,size=2);rad=rng.uniform(30,100);mask=np.exp(-((x-cx)**2+(y-cy)**2)/(rad*rad));asphalt*=1-mask[:,:,None]*rng.uniform(.03,.14)
asphalt_im=image('COURT_CrackedAsphalt_Color',asphalt);asphalt_n=normal_image('COURT_Asphalt_Grain_Normal',ah,.008)
paving=field(S,[107,108,101],7);pj=(y%256<3)|(x%256<3);paving[pj]*=.64;ph=rng.random((S,S))*.03;ph[pj]-=.12
paving_im=image('COURT_ConcreteSlabs_Color',paving);paving_n=normal_image('COURT_Slab_Normal',ph,.004)
metal=field(512,[68,79,54],5);my,mx=np.mgrid[:512,:512]
# Organic rust islands and small edge chips instead of regular painted circles.
coarse=rng.random((32,32));rust=np.repeat(np.repeat(coarse,16,axis=0),16,axis=1)
for axis in [0,1]:rust=sum(np.roll(rust,k,axis=axis) for k in range(-10,11))/21
rust=(rust-rust.min())/(rust.max()-rust.min());mask=rust>.79
metal[mask]=np.array([91,67,44])/255+rng.normal(0,.025,(mask.sum(),1));chips=rng.random((512,512))>.998;metal[chips]=[.38,.37,.3]
metal_im=image('COURT_ChippedOlivePaint',metal)
dark_paint=field(512,[47,52,43],6);dark_paint[mask]*=.75;dark_paint[chips]=[.3,.29,.24];dark_paint_im=image('COURT_WornDarkMetal',dark_paint)
wood=field(512,[91,79,61],5);wood*=1-(np.sin(mx*.4+np.sin(my*.01))*np.sin(mx*.1))[:,:,None]*.06
wood_im=image('COURT_DryWood',wood)
# Helpers preserve ordinary image-based materials in GLB.
def color_linear(rgb):return tuple(v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4 for v in rgb)
def material(name,rgb,texture=None,normal=None,rough=.85,metallic=0):
 m=bpy.data.materials.get(name) or bpy.data.materials.new(name);m.use_nodes=True;m.node_tree.nodes.clear();n=m.node_tree.nodes;l=m.node_tree.links;out=n.new('ShaderNodeOutputMaterial');bs=n.new('ShaderNodeBsdfPrincipled');l.new(bs.outputs[0],out.inputs[0]);bs.inputs['Base Color'].default_value=(*color_linear(rgb),1);bs.inputs['Roughness'].default_value=rough;bs.inputs['Metallic'].default_value=metallic;m.diffuse_color=(*color_linear(rgb),1)
 if texture:
  tex=n.new('ShaderNodeTexImage');tex.image=texture;l.new(tex.outputs['Color'],bs.inputs['Base Color'])
 if normal:
  tex=n.new('ShaderNodeTexImage');tex.image=normal;nm=n.new('ShaderNodeNormalMap');l.new(tex.outputs[0],nm.inputs['Color']);l.new(nm.outputs[0],bs.inputs['Normal'])
 return m
brick_m=material('brick#c4b8ab',(.4,.31,.26),brick_im,brick_n);stone_m=material('COURT_Limestone',(.57,.55,.49),stone_im,stone_n);stone_dark=material('COURT_DarkStone',(.36,.36,.31),paving_im,paving_n)
concrete=material('Concrete wall',(.4,.4,.35),paving_im,paving_n);pavement=material('Pavement tiles',(.48,.48,.43),paving_im,paving_n);asphalt_m=material('Stylized Asphalt',(.3,.3,.28),asphalt_im,asphalt_n,rough=.95)
iron=material('Light iron',(.19,.21,.17),rough=.83,metallic=.4);green=material('rust#b0b8a0',(.25,.3,.2),metal_im,rough=.84,metallic=.18);lid=material('metal#5d6c59',(.15,.17,.13),dark_paint_im,rough=.83,metallic=.3)
for name in ['Old wood','Old wood.001']:material(name,(.34,.3,.23),wood_im,rough=.9)
for name in ['rust#66514a','rust#66514a.001']:material(name,(.28,.29,.24),wood_im,rough=.86)
rubber=material('COURT_Rubber',(.065,.07,.06),rough=.98);bag_m=material('COURT_TrashBags',(.1,.12,.085),rough=.63);cream=material('COURT_Curtains',(.43,.42,.35),rough=1);frame_m=material('COURT_WindowStone',(.45,.45,.4),stone_im,stone_n)
for name in ['plain#616b62','plain#9a9b8c']:material(name,(.32,.34,.29),rough=.9)
# Standalone module builder, metric UVs and bottom-centred origin.
class Parts:
 def __init__(self):self.v=[];self.f=[];self.mi=[];self.mats=[];self.special={}
 def add(self,vs,faces,mat,uv=None):
  if mat not in self.mats:self.mats.append(mat)
  offset=len(self.v);self.v.extend(vs)
  for face in faces:self.f.append(tuple(offset+i for i in face));self.mi.append(self.mats.index(mat))
  if uv:
   for i,coords in enumerate(uv):self.special[len(self.f)-len(faces)+i]=coords
 def box(self,loc,size,mat):
  xx,yy,zz=loc;w,d,h=[v/2 for v in size];vs=[(xx+i*w,yy+j*d,zz+k*h) for i,j,k in [(-1,-1,-1),(1,-1,-1),(1,1,-1),(-1,1,-1),(-1,-1,1),(1,-1,1),(1,1,1),(-1,1,1)]]
  self.add(vs,[(0,3,2,1),(4,5,6,7),(0,1,5,4),(1,2,6,5),(2,3,7,6),(3,0,4,7)],mat)
 def cyl(self,loc,radius,height,mat,n=12,r2=None):
  r2=radius if r2 is None else r2;x,y,z=loc;vs=[(x+math.cos(i*math.tau/n)*r,y+math.sin(i*math.tau/n)*r,z+h) for r,h in [(radius,-height/2),(r2,height/2)] for i in range(n)];faces=[tuple(reversed(range(n))),tuple(range(n,n*2))]+[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)];self.add(vs,faces,mat)
 def plane(self,w,h,y,z,mat,repeat=(1,1)):
  self.add([(-w/2,y,z),(w/2,y,z),(w/2,y,z+h),(-w/2,y,z+h)],[(0,1,2,3)],mat,[[(0,0),(repeat[0],0),repeat,(0,repeat[1])]])
 def build(self,name,bevel=0):
  mesh=bpy.data.meshes.new(name+'_Mesh');mesh.from_pydata(self.v,[],self.f);mesh.update()
  for mat in self.mats:mesh.materials.append(mat)
  uv=mesh.uv_layers.new(name='UVMap')
  for face,mi in zip(mesh.polygons,self.mi):
   face.material_index=mi
   for k,li in enumerate(face.loop_indices):
    co=mesh.vertices[mesh.loops[li].vertex_index].co;n=face.normal
    uv.data[li].uv=self.special[face.index][k] if face.index in self.special else (co.x/2,co.y/2) if abs(n.z)>.7 else (co.x/2,co.z/2) if abs(n.y)>.7 else (co.y/2,co.z/2)
  obj=bpy.data.objects.new(name,mesh);library.objects.link(obj);obj.location=(-25+(len([o for o in library.objects if o.type=='MESH'])%10)*6,55,0);obj.asset_mark();obj['instructions']='Edit this source mesh or replace its data; all references update. Origin bottom-centre.'
  if bevel:
   mod=obj.modifiers.new('Small worn edges','BEVEL');mod.width=bevel;mod.segments=1
   mod=obj.modifiers.new('Weighted corner normals','WEIGHTED_NORMAL')
  return obj

def replace(old,new):
 old.data=new.data
 for m in list(old.modifiers):old.modifiers.remove(m)
 for m in new.modifiers:
  mm=old.modifiers.new(m.name,m.type)
  if m.type=='BEVEL':mm.width=m.width;mm.segments=m.segments
 old['style']='Reference courtyard'
 bpy.data.objects.remove(new,do_unlink=True)
 return old
# Three window silhouettes; curtains and dark imperfect panes provide depth.
pane=field(256,[55,61,57],2);py,px=np.mgrid[:256,:256];pane*=1+(.15*np.cos(px*.06)+.12*(1-py/256))[:,:,None];glass=material('COURT_SmokyGlass',(.21,.24,.22),image('COURT_WindowGlass',pane),rough=.48,metallic=.12)
windows=[]
for variant in range(3):
 b=Parts();b.plane(.72,1.04,.055,.14,glass)
 for x0 in [-.42,.42]:b.box((x0,0,.65),(.13,.22,1.3),frame_m)
 b.box((0,0,.08),(1.02,.29,.16),frame_m);b.box((0,0,1.25),(1.0,.25,.14),frame_m)
 b.box((0,-.035,.67),(.035,.09,1.0),iron);b.box((0,-.035,.68),(.73,.09,.035),iron)
 if variant<2:
  for side in [-1,1]:
   vs=[]
   for iz in [0,1]:
    for k in range(6):vs.append((side*(.15+k*.036),.025+math.sin(k*2.5)*.016,.2+iz*(.9 if variant==0 else .54)))
   b.add(vs,[(k,k+1,k+7,k+6) for k in range(5)],cream)
 if variant==2:
  for zz in [.5,.57,.64,.71,.78,.85, .92]:b.box((0,-.02,zz),(.69,.045,.018),cream)
 windows.append(b.build('ASSET_COURT_WINDOW_'+str(variant+1),.006))
old=bpy.data.objects['ASSET_WINDOW_01'];replace(old,windows[0]);windows[0]=old
# Variant selection remains procedural and editable in Geometry Nodes.
ng=bpy.data.node_groups['STREET_Procedural_Windows'];n=ng.nodes;l=ng.links;instance=next(o for o in n if o.bl_idname=='GeometryNodeInstanceOnPoints');oldinfo=next(o for o in n if o.bl_idname=='GeometryNodeObjectInfo');variants=n.new('GeometryNodeGeometryToInstance');l.new(oldinfo.outputs['Geometry'],variants.inputs['Geometry'])
for obj in windows[1:]:
 node=n.new('GeometryNodeObjectInfo');node.transform_space='ORIGINAL';node.inputs['Object'].default_value=obj;l.new(node.outputs['Geometry'],variants.inputs['Geometry'])
l.new(variants.outputs[0],instance.inputs['Instance']);instance.inputs['Pick Instance'].default_value=True;rand=n.new('FunctionNodeRandomValue');rand.data_type='INT';rand.inputs['Min'].default_value=0;rand.inputs['Max'].default_value=2;rand.inputs['Seed'].default_value=23;l.new(rand.outputs['Value'],instance.inputs['Instance Index'])
# Road loses the painted yellow lane markings; the reference is a courtyard.
road_source=bpy.data.objects[bpy.data.objects['ROAD_SIDEWALKS_0_road']['source_asset']]
for face in road_source.data.polygons:
 for li in face.loop_indices:
  co=road_source.data.vertices[road_source.data.loops[li].vertex_index].co;n=face.normal
  if abs(n.z)>.7:road_source.data.uv_layers.active.data[li].uv=(co.x/4,co.y/4)
# A cream-stone building interrupts the brick rhythm.
body=bpy.data.objects['BUILDING_SHELL_0_2'];ngs=bpy.data.node_groups.new('COURT_Stone_Facade','GeometryNodeTree');ngs.interface.new_socket(name='Geometry',in_out='INPUT',socket_type='NodeSocketGeometry');ngs.interface.new_socket(name='Geometry',in_out='OUTPUT',socket_type='NodeSocketGeometry');ni=ngs.nodes.new('NodeGroupInput');no=ngs.nodes.new('NodeGroupOutput');selection=ngs.nodes.new('GeometryNodeMaterialSelection');selection.inputs['Material'].default_value=brick_m;sm=ngs.nodes.new('GeometryNodeSetMaterial');sm.inputs['Material'].default_value=stone_m;ngs.links.new(ni.outputs[0],sm.inputs['Geometry']);ngs.links.new(selection.outputs[0],sm.inputs['Selection']);ngs.links.new(sm.outputs[0],no.inputs[0]);mod=body.modifiers.new('Cream limestone facade','NODES');mod.node_group=ngs
# A baked-in damp foundation gradient adds contact dirt without transparent layers.
gy,gx=np.mgrid[:256,:1024];columns=np.repeat(rng.random(64),16);columns=sum(np.roll(columns,k) for k in range(-8,9))/17
dirt=(1-gy/255)**1.6*(.65+.35*columns[None,:]);foundation=np.array([108,109,102])[None,None,:]/255+rng.normal(0,.018,(256,1024,1));foundation*=1-dirt[:,:,None]*.58
foundation_m=material('COURT_DampFoundation',(.35,.35,.31),image('COURT_Foundation_Streaks',foundation),rough=.98)
# Leave the central 1.16m doorway clear; the old continuous band covered its bottom.
b=Parts()
for side in [-1,1]:
 start=len(b.v);b.plane(2.66,.5,0,0,foundation_m,(1.23,1))
 for k in range(start,len(b.v)):
  xx,yy,zz=b.v[k];b.v[k]=(xx+side*1.91,yy,zz)
foundation_source=b.build('ASSET_COURT_FOUNDATION')
# Placed after the shared source helper is defined below.
# Ornamental cast-iron lamp sources.
b=Parts()
for z,r,h in [(.08,.28,.16),(.23,.22,.2),(.43,.17,.22),(.7,.12,.3),(2.2,.065,2.8),(3.62,.14,.12)]:b.cyl((0,0,z),r,h,iron,12)
for z in [.62,1.0,3.4]:b.cyl((0,0,z),.11,.07,iron,12)
b.box((.43,0,3.72),(.9,.09,.09),iron);b.box((.8,0,3.6),(.38,.3,.14),iron)
replace(bpy.data.objects['ASSET_STREETLIGHT_01'],b.build('NEW_Lamp',.008))
# Main wheeled dumpster, with ribbed lid and chipped olive paint.
b=Parts();b.box((0,0,.65),(1.65,.88,1.0),green);b.box((0,0,1.19),(1.78,1.0,.12),lid)
for xx in np.linspace(-.72,.72,9):b.box((xx,0,1.26),(.035,.94,.035),iron)
for xx in [-.65,.65]:
 for yy in [-.32,.32]:b.cyl((xx,yy,.1),.09,.15,rubber,10)
b.box((0,-.45,1.0),(.24,.015,.08),material('COURT_Label',(.48,.43,.2),rough=.9));replace(bpy.data.objects['ASSET_DUMPSTER_01'],b.build('NEW_Dumpster',.015))
# Reusable new modules are placed through the same replaceable-source modifier.
source_group=bpy.data.node_groups['STREET_Replaceable_Module'];source_socket=next(s for s in source_group.interface.items_tree if s.in_out=='INPUT' and s.name=='Source module')
def place(master,name,location,rotation=(0,0,0),scale=(1,1,1),parent=None):
 o=bpy.data.objects.new(name,bpy.data.meshes.new(name+'_placeholder'));main.objects.link(o);o.location=location;o.rotation_euler=rotation;o.scale=scale;o['source_asset']=master.name;m=o.modifiers.new('Replace source module','NODES');m.node_group=source_group;getattr(m.properties.inputs,source_socket.identifier).value=master
 if parent:
  bpy.context.view_layer.update();matrix=o.matrix_world.copy();o.parent=parent;o.matrix_world=matrix
 return o
# Window ledges and foundation bands group with each house controller.
b=Parts()
for z in [.52,2.12,3.77,5.42,6.84]:
 if z<2.06:
  for side in [-1,1]:b.box((side*1.91,0,z),(2.66,.19,.1),frame_m)
 else:b.box((0,0,z),(6.48,.19,.1),frame_m)
ledges=b.build('ASSET_COURT_FACADE_BANDS',.007)
for i in range(4):place(ledges,'COURT_Cornices_'+str(i),(3.25+i*6.5,3.97,0),parent=bpy.data.objects[f'HOUSE_0_{i}_CONTROLS'])
for i in range(4):place(foundation_source,'COURT_Foundation_'+str(i),(3.25+i*6.5,3.994,0),parent=bpy.data.objects[f'HOUSE_0_{i}_CONTROLS'])
# Alpha-cutout chain link, rather than thousands of individual wire polygons.
fy,fx=np.mgrid[:512,:512];line=np.minimum((fx+fy)%64,64-(fx+fy)%64)<5;line|=np.minimum((fx-fy)%64,64-(fx-fy)%64)<5;rgba=np.zeros((512,512,4),np.float32);rgba[:,:,:3]=np.array([.28,.29,.25]);rgba[:,:,3]=line
chain_im=image('COURT_ChainLink_RGBA',rgba);chain=material('Alpha_ChainLink',(.28,.29,.25),chain_im,rough=.8,metallic=.3);bs=next(n for n in chain.node_tree.nodes if n.type=='BSDF_PRINCIPLED');tex=next(n for n in chain.node_tree.nodes if n.type=='TEX_IMAGE');chain.node_tree.links.new(tex.outputs['Alpha'],bs.inputs['Alpha'])
b=Parts()
for xx in [-1.2,1.2]:b.cyl((xx,0,.8),.035,1.6,iron,8)
for z in [.15,1.45]:b.box((0,0,z),(2.4,.045,.045),iron)
b.plane(2.35,1.27,0,.17,chain,(4,2));fence=b.build('ASSET_COURT_FENCE_PANEL')
repeat=bpy.data.node_groups.new('COURT_Procedural_Fence_Row','GeometryNodeTree');repeat.is_modifier=True;repeat.interface.new_socket(name='Geometry',in_out='OUTPUT',socket_type='NodeSocketGeometry')
rs=repeat.interface.new_socket(name='Fence module',in_out='INPUT',socket_type='NodeSocketObject');rs.default_value=fence;rc=repeat.interface.new_socket(name='Panels',in_out='INPUT',socket_type='NodeSocketInt');rc.default_value=2;rc.min_value=1;rc.max_value=8;ri=repeat.nodes.new('NodeGroupInput');ro=repeat.nodes.new('NodeGroupOutput');line_node=repeat.nodes.new('GeometryNodeMeshLine');line_node.mode='OFFSET';line_node.inputs['Offset'].default_value=(2.4,0,0);repeat.links.new(ri.outputs['Panels'],line_node.inputs['Count']);info=repeat.nodes.new('GeometryNodeObjectInfo');info.transform_space='ORIGINAL';repeat.links.new(ri.outputs['Fence module'],info.inputs['Object']);ins=repeat.nodes.new('GeometryNodeInstanceOnPoints');repeat.links.new(line_node.outputs[0],ins.inputs['Points']);repeat.links.new(info.outputs['Geometry'],ins.inputs['Instance']);real=repeat.nodes.new('GeometryNodeRealizeInstances');repeat.links.new(ins.outputs[0],real.inputs[0]);repeat.links.new(real.outputs[0],ro.inputs[0])
for name,loc,panels in [('Left',(14.0,2.62,0),2),('BehindDumpster',(19.0,3.15,0),2)]:
 o=bpy.data.objects.new('FENCE_ROW_'+name,bpy.data.meshes.new('FenceRow'));main.objects.link(o);o.location=loc;mod=o.modifiers.new('Procedural fence panels','NODES');mod.node_group=repeat;getattr(mod.properties.inputs,rc.identifier).value=panels
# Galvanized litter bin with rim and ribs.
b=Parts();b.cyl((0,0,.35),.23,.64,iron,16,r2=.26);b.cyl((0,0,.69),.27,.065,lid,16)
for angle in np.linspace(0,math.tau,12,endpoint=False):b.box((.24*math.cos(angle),.24*math.sin(angle),.35),(.025,.025,.55),iron)
bin_source=b.build('ASSET_COURT_LITTER_BIN',.005)
for i,x0 in enumerate([5.6,13.5,23.6]):place(bin_source,'COURT_Bin_'+str(i),(x0,2.9,.02))
# Tires and tied garbage bags use low-poly shared meshes.
bpy.ops.mesh.primitive_torus_add(major_segments=20,minor_segments=8,major_radius=.24,minor_radius=.085,location=(0,0,0));tire=bpy.context.object;tire.name='ASSET_COURT_TIRE'
for c in list(tire.users_collection):c.objects.unlink(tire)
library.objects.link(tire);tire.location=(0,70,0);tire.data.materials.append(rubber)
for i,(xx,yy,angle) in enumerate([(14.2,2.55,.15),(14.7,2.6,0),(13.0,2.55,1.05),(22.5,2.9,0)]):place(tire,'COURT_Tire_'+str(i),(xx,yy,.15 if angle else .1),(angle,0,i))
bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=2,radius=1);bag=bpy.context.object;bag.name='ASSET_COURT_BAG'
for v in bag.data.vertices:v.co*=random.uniform(.88,1.08);v.co.x*=.23;v.co.y*=.19;v.co.z=v.co.z*.28+.28
for c in list(bag.users_collection):c.objects.unlink(bag)
library.objects.link(bag);bag.location=(3,70,0);bag.data.materials.append(bag_m)
for i,(xx,yy) in enumerate([(17.4,3.15),(17.7,3.05),(20,3.15),(23.1,3.0),(23.5,2.8)]):place(bag,'COURT_Bag_'+str(i),(xx,yy,0),rotation=(0,0,i*.8))
# Pull the prop cluster into the reference camera composition.
bpy.data.objects['DUMPSTER_0_0'].location.x=18.7
bpy.data.objects['STREETLIGHT_0_17'].location.x=16.0
bpy.data.objects['BENCH_0_0'].location.x=14.8
# Keep the full bench behind the fence, clear of the street and facade.
bpy.data.objects['BENCH_0_0'].location.y=3.4
# Open foreground dumpster, outside the walk lane.
b=Parts();b.box((0,.37,.55),(1.6,.09,1.1),lid);b.box((0,-.37,.55),(1.6,.09,1.1),lid)
for xx in [-.76,.76]:b.box((xx,0,.55),(.09,.74,1.1),lid)
b.box((0,0,.12),(1.52,.7,.13),rubber);b.box((0,.55,1.34),(1.7,.12,.65),lid)
for xx in [-.6,.6]:
 for yy in [-.32,.32]:b.cyl((xx,yy,.08),.08,.15,rubber,8)
open_bin=b.build('ASSET_COURT_OPEN_DUMPSTER',.012);place(open_bin,'COURT_Open_Dumpster',(20.8,-3.1,0))
# Visible contents break up the dark foreground dumpster silhouette.
for i,(dx,dy) in enumerate([(-.45,0),(.12,-.12),(.48,.16)]):place(bag,'COURT_OverflowBag_'+str(i),(20.8+dx,-3.1+dy,.76),rotation=(.1*i,0,i))
paper_m=material('COURT_OldPaper',(.59,.56,.47),rough=1)
b=Parts();b.add([(-.16,-.1,0),(.03,-.1,.035),(.17,-.1,.01),(-.16,.12,.02),(.03,.12,.055),(.17,.12,.03)],[(0,1,4,3),(1,2,5,4)],paper_m);paper=b.build('ASSET_COURT_PAPER')
for i,(dx,dy) in enumerate([(-.5,-.18),(-.2,.03),(.15,.18),(.4,-.18)]):place(paper,'COURT_OverflowPaper_'+str(i),(20.8+dx,-3.1+dy,1.17),rotation=(.1*i,.1,i))
for i,(xx,yy) in enumerate([(13.2,2.3),(15.7,2.25),(18,2.3),(21.2,-2.6),(20.2,-2.65)]):place(paper,'COURT_Paper_'+str(i),(xx,yy,.018),rotation=(0,0,i*.7))
# Sparse dark graffiti masks on the foundation, away from the character silhouette.
rgba=np.zeros((512,512,4),np.float32);mask=np.zeros((1024,1024,3))
for i in range(6):
 pts=[]
 for t in np.linspace(0,math.tau,40):pts.append((120+i*115+math.sin(t)*45,500+math.cos(t)*110+math.sin(t*2)*40))
 stroke(mask,pts,[1,1,1],3)
alpha=mask[::2,::2,0];rgba[:,:,:3]=(.13,.15,.11);rgba[:,:,3]=alpha;tag_im=image('COURT_FadedGraffiti_RGBA',rgba);tag=material('Alpha_Graffiti',(.13,.15,.11),tag_im,rough=1);bs=next(n for n in tag.node_tree.nodes if n.type=='BSDF_PRINCIPLED');tex=next(n for n in tag.node_tree.nodes if n.type=='TEX_IMAGE');tag.node_tree.links.new(tex.outputs['Alpha'],bs.inputs['Alpha']);b=Parts();b.plane(1.3,.65,0,0,tag);tag_obj=b.build('ASSET_COURT_GRAFFITI')
for i,x0 in enumerate([1.2,7.1,15.7,22.2]):place(tag_obj,'COURT_Graffiti_'+str(i),(x0,3.98,.12))
material('plain#638b4c',(.43,.35,.18),rough=.6)
guide=bpy.data.objects.get('HERO_HEIGHT_1_85m_REFERENCE')
if guide:guide.location.x=18
# Keep the foreground dressing on the edge of the shot, outside combat readability.
for o in list(main.objects):
 if o.name.startswith(('COURT_Open_Dumpster','COURT_OverflowBag','COURT_OverflowPaper')):
  o.location.x=21.6+(o.location.x-20.8)*.85;o.location.y=-2.8+(o.location.y+3.1)*.85;o.location.z*=.85;o.scale*=.85
# Preview uses the same lower camera and a directional, warm overcast light.
cam=scene.camera;cam.location=(19.45,-6.5,1.85);cam.rotation_euler=(Vector((18.25,0,1))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.lens=24/(2*math.tan(math.radians(40)/2))
for o in bpy.data.objects:
 if o.type=='LIGHT':o.data.energy=3.2;o.data.color=(1,.92,.8);o.rotation_euler=Vector((8,6,-12)).to_track_quat('-Z','Y').to_euler()
scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs['Strength'].default_value=.35;scene.view_settings.view_transform='AgX';scene.render.engine='CYCLES';scene.cycles.samples=24
notes=bpy.data.texts.new('СТИЛЬ_И_МОДУЛИ');notes.write('ДВОР ПО РЕФЕРЕНСУ — отдельная версия исходника.\nEDIT_26m_MAIN: секция 26 м, игровая полоса Blender Y=-2.1..2.0 свободна.\nMODULE_LIBRARY_EDIT_HERE: общие образцы. Меняй ASSET_WINDOW_01 и ASSET_COURT_WINDOW_2/3 — все фасады обновляются. В Geometry Nodes три варианта окон распределяются детерминированно.\nHOUSE_0_*_CONTROLS: floors, columns, window_spacing, floor_spacing. FENCE_ROW_*: число секций Panels и источник Fence module в модификаторе.\nУ новых COURT_* объектов есть Source module для быстрой замены. Для замены меша образца выдели ASSET первым, новый меш последним (активным), Ctrl+L → Link Object Data. Сохраняй origin снизу по центру.\nКирпич, камень, асфальт, окрашенный металл и сетка — упакованные процедурно созданные PBR-карты. Финальное освещение в игре отличается от Blender: настраивай через ?editor=lighting.\nОригинальный файл пользователя не перезаписывается. В игру экспортируется только рабочая секция, без библиотеки и ориентиров.\n')
# Neighbours are instances of the edited section, so checking the seams stays live.
for index in [-1,1]:
 c=bpy.data.collections['REFERENCE_NEIGHBOR_'+str(index)]
 for o in list(c.all_objects):bpy.data.objects.remove(o,do_unlink=True)
 preview=bpy.data.objects.new('LIVE_NEIGHBOUR_'+str(index),None);c.objects.link(preview);preview.instance_type='COLLECTION';preview.instance_collection=main;preview.location=(index*26,0,0);preview.hide_select=True
# Remove unused downloaded images from this standalone, packed template.
for block_type in [bpy.data.materials,bpy.data.images,bpy.data.meshes]:
 for block in block_type:block.use_fake_user=False
bpy.data.orphans_purge(do_recursive=True)
bpy.context.view_layer.update();bpy.ops.object.select_all(action='DESELECT');hero=bpy.data.objects.get('HOUSE_0_2_CONTROLS');hero.select_set(True);bpy.context.view_layer.objects.active=hero
for screen in bpy.data.screens:
 for area in screen.areas:
  if area.type=='VIEW_3D':area.spaces.active.region_3d.view_location=(15,2,2);area.spaces.active.region_3d.view_distance=22
bpy.context.preferences.filepaths.save_version=0;Path(a.output).parent.mkdir(parents=True,exist_ok=True);bpy.ops.wm.save_as_mainfile(filepath=a.output,compress=True)
print('COURTYARD_SAVED',a.output,'objects',len(bpy.data.objects),'images',len(bpy.data.images))
