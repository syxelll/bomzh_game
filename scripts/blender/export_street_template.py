"""Recreate the game's actual mesh layout and pack canvas textures into a .blend."""
import bpy,json,math,sys,argparse,base64,tempfile
from pathlib import Path
from mathutils import Vector
parser=argparse.ArgumentParser()
parser.add_argument('--input',default='/tmp/street-meshes.json')
parser.add_argument('--output',default=str(Path(__file__).resolve().parents[2]/'location-editing/street-template.blend'))
args=parser.parse_args(sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else [])
data=json.load(open(args.input));assert data['version']==2
bpy.ops.wm.read_factory_settings(use_empty=True)
scene=bpy.context.scene;scene.unit_settings.system='METRIC';scene.unit_settings.scale_length=1

def linear(color):
 values=[int(color[i:i+2],16)/255 for i in (1,3,5)]
 return tuple(v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4 for v in values)+(1,)
def collection(name,parent=None):
 c=bpy.data.collections.new(name);(parent.children if parent else scene.collection.children).link(c);return c
def move(o,c):
 for old in list(o.users_collection):old.objects.unlink(o)
 c.objects.link(o)
images={}
with tempfile.TemporaryDirectory() as directory:
 for index,t in enumerate(data['textures']):
  path=Path(directory)/f'texture_{index}.png';path.write_bytes(base64.b64decode(t['data'].split(',',1)[1]))
  image=bpy.data.images.load(str(path),check_existing=False);image.name=t['name'];image.pack();image.filepath='//textures/'+path.name;images[index]=image
 materials=[]
 for item in data['materials']:
  m=bpy.data.materials.new(item['name']);m.diffuse_color=linear(item['color']);m.use_nodes=True;nodes=m.node_tree.nodes;links=m.node_tree.links;bsdf=nodes.get('Principled BSDF');bsdf.inputs['Base Color'].default_value=linear(item['color']);bsdf.inputs['Roughness'].default_value=item['roughness']
  def image_node(idx):
   n=nodes.new('ShaderNodeTexImage');n.image=images[idx];n.extension='REPEAT' if data['textures'][idx]['repeat'] else 'EXTEND';return n
  if item['map'] is not None:
   tex=image_node(item['map']);mix=nodes.new('ShaderNodeMixRGB');mix.blend_type='MULTIPLY';mix.inputs[0].default_value=1;mix.inputs[2].default_value=linear(item['color']);links.new(tex.outputs['Color'],mix.inputs[1]);links.new(mix.outputs[0],bsdf.inputs['Base Color'])
   if item['unlit']:
    emission=nodes.new('ShaderNodeEmission');links.new(mix.outputs[0],emission.inputs['Color']);links.new(emission.outputs[0],nodes.get('Material Output').inputs['Surface'])
  if item['bumpMap'] is not None:
   tex=image_node(item['bumpMap']);# Separate image settings for height data.
   tex.image=images[item['bumpMap']].copy();tex.image.name+=' Height';tex.image.colorspace_settings.name='Non-Color';tex.image.pack()
   bump=nodes.new('ShaderNodeBump');bump.inputs['Distance'].default_value=item['bumpScale'];links.new(tex.outputs['Color'],bump.inputs['Height']);links.new(bump.outputs['Normal'],bsdf.inputs['Normal'])
  materials.append(m)
 for chunk in data['chunks']:
  idx=chunk['index'];c=collection('EDIT_26m_MAIN' if idx==0 else 'REFERENCE_NEIGHBOR_'+str(idx));c.hide_select=idx!=0
  categories={name:collection(name,c) for name in ['Buildings_and_details','Road_and_sidewalks','Street_props','Pickup_references']}
  for n,item in enumerate(chunk['meshes']):
   vs=item['vertices'];center=Vector(tuple((min(v[a] for v in vs)+max(v[a] for v in vs))/2 for a in range(3)));material=data['materials'][item['material']]
   kind='Pickup_references' if item['pickup'] else 'Road_and_sidewalks' if material['name'].startswith('asphalt') or center.z<.12 else 'Buildings_and_details' if center.y>3.1 else 'Street_props'
   mesh=bpy.data.meshes.new('StreetMesh');mesh.from_pydata([Vector(v)-center for v in vs],[],item['faces']);mesh.update()
   if item['uv']:
    layer=mesh.uv_layers.new(name='UVMap')
    for loop in mesh.loops:layer.data[loop.index].uv=item['uv'][loop.vertex_index]
   o=bpy.data.objects.new(material['name']+f'_{idx}_{n:03}',mesh);o.location=center;categories[kind].objects.link(o);o.data.materials.append(materials[item['material']]);o.hide_select=idx!=0
   o['source']='src/world.js';o['section_index']=idx
 c=collection('GUIDES_DO_NOT_EXPORT');c.hide_render=True
 for name,loc,scale in [('SECTION_START',(0,0,.02),(.02,9,.02)),('SECTION_END',(26,0,.02),(.02,9,.02)),('PLAY_AREA',(13,-.05,.01),(13,2.05,.01)),('HERO_HEIGHT_1_85m_REFERENCE',(8,0,.925),(.3,.225,.925))]:
  bpy.ops.mesh.primitive_cube_add(size=2,location=loc);o=bpy.context.object;o.name=name;o.scale=scale;o.display_type='WIRE';o.hide_render=True;move(o,c)
 for name,loc in [('SECTION_ORIGIN',(0,0,0)),('NEXT_SECTION_ORIGIN',(26,0,0))]:
  o=bpy.data.objects.new(name,None);o.location=loc;o.empty_display_type='ARROWS';c.objects.link(o)
 c=collection('PREVIEW_CAMERA_AND_LIGHTS')
 bpy.ops.object.camera_add(location=(13.25,-7.7,3.31));cam=bpy.context.object;cam.name='Game_camera_reference';cam.rotation_euler=(Vector((13.25,0,1))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='PERSP';cam.data.sensor_fit='VERTICAL';cam.data.sensor_height=24;cam.data.lens=24/(2*math.tan(math.radians(42)/2));scene.camera=cam;move(cam,c)
 light=data['lighting'];a=math.radians(light['azimuth']);e=math.radians(light['elevation']);r=math.sqrt(296);offset=Vector((r*math.cos(e)*math.sin(a),-r*math.cos(e)*math.cos(a),r*math.sin(e)))
 bpy.ops.object.light_add(type='SUN',location=Vector((13,0,0))+offset);sun=bpy.context.object;sun.name='Sun_preview';sun.rotation_euler=(-offset).to_track_quat('-Z','Y').to_euler();sun.data.energy=light['sunIntensity'];sun.data.color=linear(light['sunColor'])[:3];sun.data.angle=math.radians(6);move(sun,c)
 world=bpy.data.worlds.new('Overcast_preview');world.use_nodes=True;world.node_tree.nodes['Background'].inputs['Color'].default_value=linear(light['skyColor']);world.node_tree.nodes['Background'].inputs['Strength'].default_value=.65;scene.world=world
 scene.render.engine='CYCLES';scene.cycles.samples=24;scene.render.resolution_x=1365;scene.render.resolution_y=768;scene.render.resolution_percentage=100
 notes=bpy.data.texts.new('READ_ME');notes.write('Current game street exported from src/world.js, including packed brick/asphalt/concrete/rust textures and original UVs. Main section: EDIT_26m_MAIN, X=0..26m. Neighbours are locked references. Units: metres. Blender X=game X, Blender Y=-game Z, Blender Z=game Y. Walk lane Y=-2.1..2.0. Object origins are centred for editing. Pickup_references are layout references, not gameplay items. Guides and preview camera/lights are not game assets. Blender lighting is an approximation; set final game light in ?editor=lighting. No gameplay changes are applied automatically. See location-editing/README.md.\n')
 for screen in bpy.data.screens:
  for area in screen.areas:
   if area.type=='VIEW_3D':
    area.spaces.active.region_3d.view_distance=32;area.spaces.active.region_3d.view_location=(13,0,1);area.spaces.active.shading.type='MATERIAL'
 bpy.ops.object.select_all(action='DESELECT');bpy.context.preferences.filepaths.save_version=0
 bpy.ops.wm.save_as_mainfile(filepath=args.output,compress=True)
 print('Street template saved',len(bpy.data.objects),'objects;',len(bpy.data.images),'packed image datablocks')
