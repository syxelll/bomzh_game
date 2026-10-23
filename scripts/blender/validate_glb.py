import json,struct,pathlib
for name in ['hobo','enemy']:
 p=pathlib.Path('/workspace/model-exports')/name/(name+'.glb')
 data=p.read_bytes();magic,version,length=struct.unpack_from('<III',data)
 assert magic==0x46546c67 and version==2 and length==len(data)
 size,kind=struct.unpack_from('<II',data,12);assert kind==0x4e4f534a
 g=json.loads(data[20:20+size])
 assert g.get('meshes') and g.get('skins') and g.get('images')
 assert all('uri' not in i and 'bufferView' in i for i in g['images'])
 assert all('baseColorTexture' in m['pbrMetallicRoughness'] and 'normalTexture' in m and 'metallicRoughnessTexture' in m['pbrMetallicRoughness'] for m in g['materials'])
 assert not any(n.get('name','').startswith('cs_') for n in g['nodes'])
 print(name, 'OK',len(data),'bytes',len(g['meshes']),'meshes',len(g['skins']),'skins',len(g['images']),'embedded images')
