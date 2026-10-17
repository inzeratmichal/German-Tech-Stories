// Publish only after the existing release checks succeed; preserve other books.
const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');
execFileSync(process.execPath,[path.join(__dirname,'build.cjs'),'--release'],{stdio:'inherit'});
for(const name of fs.readdirSync(path.join(root,'dist'))){
  fs.cpSync(path.join(root,'dist',name),path.join(root,name),{recursive:true});
}
console.log('Complete reviewed reader copied to existing GitHub Pages root. Commit and verify deployment.');
