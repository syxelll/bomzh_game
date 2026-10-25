"""Verify the delivered reference courtyard without allowing Python autoexec."""
import bpy,argparse,sys
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('--blend',required=True);a=p.parse_args(sys.argv[sys.argv.index('--')+1:]);bpy.ops.wm.open_mainfile(filepath=a.blend,use_scripts=False)
def geo(o):
 e=o.evaluated_get(bpy.context.evaluated_depsgraph_get());m=e.to_mesh();m.calc_loop_triangles();v=[e.matrix_world@p.co for p in m.vertices];t=len(m.loop_triangles);e.to_mesh_clear();return v,t
main=bpy.data.collections['EDIT_26m_MAIN'];total=0
for o in main.all_objects:
 if o.type!='MESH' or o.name.startswith('PICKUP_REFERENCE'):continue
 vs,tris=geo(o);total+=tris
 assert vs,'Empty evaluated mesh: '+o.name
 if o.name.startswith('COURT_Cornices'):
  assert min(v.y for v in vs)>3.7 and min(v.x for v in vs)>=0 and max(v.x for v in vs)<=26
assert 20000<total<40000,total
root=bpy.data.objects['HOUSE_0_2_CONTROLS'];facade=bpy.data.objects['WINDOW_GRID_0_2'];before=geo(facade)[0];root['floors']=5;root.update_tag();bpy.context.view_layer.update();after=geo(facade)[0];assert len(after)>len(before);assert abs(max(v.z for v in after)-max(v.z for v in before)-1.65)<.001;root['floors']=4;root.update_tag();bpy.context.view_layer.update()
fence=bpy.data.objects['FENCE_ROW_Left'];m=fence.modifiers[0];socket=next(s for s in m.node_group.interface.items_tree if s.in_out=='INPUT' and s.name=='Panels');value=getattr(m.properties.inputs,socket.identifier);old=value.value;before=geo(fence)[0];value.value=old+1;fence.update_tag();bpy.context.view_layer.update();after=geo(fence)[0];assert abs(max(v.x for v in after)-max(v.x for v in before)-2.4)<.001;value.value=old;fence.update_tag();bpy.context.view_layer.update()
# All descendants use source objects, so swapping a source mesh remains live.
source=bpy.data.objects['ASSET_COURT_LITTER_BIN'];old=source.data;source.data=old.copy()
for v in source.data.vertices:v.co.x*=1.1
source.update_tag();bpy.context.view_layer.update();inst=bpy.data.objects['COURT_Bin_0'];changed=geo(inst)[0];assert max(v.x for v in changed)-min(v.x for v in changed)>.57
source.data=old;source.update_tag();bpy.context.view_layer.update()
assert all(i.packed_file for i in bpy.data.images if i.source in ['FILE','GENERATED'])
for idx in [-1,1]:assert bpy.data.objects['LIVE_NEIGHBOUR_'+str(idx)].instance_collection==main
print('REFERENCE_COURTYARD_VERIFIED',total,'triangles; live house floors, fence panels, source replacement, neighbours and packed textures; no autoexec.')
