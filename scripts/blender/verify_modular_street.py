"""Check layout parity, editable controls and source mesh replacement without autoexec."""
import bpy,json,sys,argparse,collections
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('--input',default='/tmp/street-meshes.json');p.add_argument('--blend',default=str(Path(__file__).resolve().parents[2]/'location-editing/street-modular.blend'));p.add_argument('--render',default='');a=p.parse_args(sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else [])
bpy.ops.wm.open_mainfile(filepath=a.blend,use_scripts=False);data=json.load(open(a.input))
def vertices(o):
 evaluated=o.evaluated_get(bpy.context.evaluated_depsgraph_get());mesh=evaluated.to_mesh();result=[tuple(evaluated.matrix_world@v.co) for v in mesh.vertices];evaluated.to_mesh_clear();return result

def quantize(v):return tuple(round(x,3) for x in v)
for chunk in data['chunks']:
 idx=chunk['index'];c=bpy.data.collections['EDIT_26m_MAIN' if idx==0 else 'REFERENCE_NEIGHBOR_'+str(idx)]
 expected=[v for part in chunk['meshes'] for v in part['vertices']];actual=[v for o in c.all_objects if o.type=='MESH' for v in vertices(o)]
 assert len(actual)==len(expected),(idx,len(actual),len(expected))
 from mathutils.kdtree import KDTree
 for points,queries in [(expected,actual),(actual,expected)]:
  tree=KDTree(len(points))
  for n,v in enumerate(points):tree.insert(v,n)
  tree.balance();error=max(tree.find(v)[2] for v in queries)
  assert error<.0001,(idx,error)

root=bpy.data.objects['HOUSE_0_0_CONTROLS'];facade=bpy.data.objects['WINDOW_GRID_0_0'];source=bpy.data.objects[facade['source_asset']];count=len(source.data.vertices)
assert len(vertices(facade))==11*count
shell=bpy.data.objects['BUILDING_SHELL_0_0'];prior_height=max(v[2] for v in vertices(shell));root['floors']=5;root.update_tag();bpy.context.view_layer.update();assert len(vertices(facade))==14*count
assert abs(max(v[2] for v in vertices(shell))-prior_height-1.65)<1e-4
root['floors']=4;root.update_tag();bpy.context.view_layer.update()
# Swap a source mesh as Ctrl+L > Link Object Data would do. Copies must follow.
bench=bpy.data.objects['BENCH_0_0'];master=bpy.data.objects[bench['source_asset']];old=master.data
before=max(v[0] for v in vertices(bench))-min(v[0] for v in vertices(bench));replacement=old.copy()
for v in replacement.vertices:v.co.x*=1.25
master.data=replacement;master.update_tag();bpy.context.view_layer.update();after=max(v[0] for v in vertices(bench))-min(v[0] for v in vertices(bench));assert abs(after/before-1.25)<1e-4
master.data=old;master.update_tag();bpy.context.view_layer.update()
images=[i for i in bpy.data.images if i.source=='FILE'];assert all(i.packed_file for i in images)
print('VERIFIED: all 3 sections match original geometry; floors regenerate windows and shell; replacing source mesh updates copies; textures packed; no autoexec needed.')
if a.render:
 s=bpy.context.scene;s.render.resolution_x=1000;s.render.resolution_y=650;s.cycles.samples=8;s.render.filepath=a.render;bpy.ops.render.render(write_still=True)
