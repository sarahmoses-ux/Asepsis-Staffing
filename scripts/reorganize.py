from pathlib import Path
import re,json
root=Path.cwd().resolve()
def move(source,dest):
 a=(root/source).resolve(); b=(root/dest).resolve()
 if not a.is_relative_to(root) or not b.is_relative_to(root): raise RuntimeError('Move outside workspace')
 if a.exists():
  b.parent.mkdir(parents=True,exist_ok=True)
  if b.exists(): raise RuntimeError('Destination already exists: '+str(b))
  try:
   a.rename(b)
  except PermissionError:
   if not a.is_dir(): raise
   b.mkdir(exist_ok=True)
   for child in list(a.iterdir()): move(str(child.relative_to(root)),str((b/child.name).relative_to(root)))
   try: a.rmdir()
   except PermissionError: print('An empty folder is held open by Windows:',a.name)
move('Asepsis-Staffing-Design-Handoff','design/handoff')
move('169e0db6-107b-4275-8d69-e5573138d218.tmp','design/original-handoff.zip')
move('test-results','.artifacts/browser')
move('scripts/check.mjs','tests/browser.mjs')
for name in ['Platform','Landing','Brand']:
 for suffix in ['.jsx','View.jsx']: move('src/'+name+suffix,'src/pages/reference/'+name+suffix)
 move('src/'+name.lower()+'.css','src/pages/reference/'+name.lower()+'.css')
move('src/screens','src/pages/staffing')
move('src/Site.jsx','src/app/App.jsx')
move('src/SiteView.jsx','src/app/AppView.jsx')
move('src/site.css','src/styles/base.css')
move('src/responsive.css','src/styles/legacy-responsive.css')
move('src/enhancements.js','src/pages/reference/enhancements.js')
p=Path('src/app/App.jsx'); s=p.read_text(encoding='utf-8')
start=s.index('const V ='); end=s.index('export default class Site')
data=s[start:end]; names=re.findall(r'^const (\w+) =',data,re.M)
Path('src/data').mkdir(exist_ok=True)
Path('src/data/demo.js').write_text('// Sample data supplied with the design handoff. Replace with API data when available.\n'+re.sub(r'^const ', 'export const ',data,flags=re.M),encoding='utf-8')
s="import React from 'react';\nimport AppView from './AppView.jsx';\nimport { "+', '.join(names)+" } from '../data/demo.js';\n\n"+s[end:]
s=s.replace('class Site extends','class App extends').replace('<SiteView ', '<AppView ')
s=s.replace("      dispatch: this.props.dispatchPhone", "      screen: s.screen,\n      goSection: (section) => this.onNavigate({ detail: { screen: 'home', section } }),\n      dispatch: this.props.dispatchPhone")
p.write_text(s,encoding='utf-8')
p=Path('src/main.jsx'); s=p.read_text(encoding='utf-8-sig').replace("import Site from './Site.jsx';", "import App from './app/App.jsx';\nimport './styles/base.css';").replace("'./responsive.css'", "'./styles/legacy-responsive.css'").replace('|| Site','|| App')
for name in ['Platform','Landing','Brand']: s=s.replace("'./"+name+".jsx'","'./pages/reference/"+name+".jsx'")
s=s.replace("import('./enhancements.js');", "if (location.pathname.endsWith('platform.html')) import('./pages/reference/enhancements.js');")
p.write_text(s,encoding='utf-8')
p=Path('package.json'); d=json.loads(p.read_text()); d['scripts']['test']='node tests/browser.mjs'; p.write_text(json.dumps(d,indent=2)+'\n')
p=Path('tests/browser.mjs'); s=p.read_text(encoding='utf-8-sig').replace('test-results','.artifacts/browser'); p.write_text(s,encoding='utf-8')
Path('.gitignore').write_text('node_modules/\ndist/\n.artifacts/\n.npm-cache/\n',encoding='utf-8')
for folder in ['src/components/layout','src/components/ui','src/pages/home']: Path(folder).mkdir(parents=True,exist_ok=True)
print('Organized application, reference designs, data, styles, and tests.')
