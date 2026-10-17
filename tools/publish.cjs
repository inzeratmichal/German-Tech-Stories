// Publish only after the existing release checks succeed; preserve other books.
const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');
const reviewEdition=process.argv.includes('--review-edition');
execFileSync(process.execPath,[path.join(__dirname,'build.cjs'),reviewEdition?'--review-edition':'--release'],{stdio:'inherit'});
for(const name of fs.readdirSync(path.join(root,'dist'))){
  fs.cpSync(path.join(root,'dist',name),path.join(root,name),{recursive:true});
}
console.log(reviewEdition?'User-requested review edition copied to Pages root; listening review remains outstanding.':'Complete reviewed reader copied to existing GitHub Pages root. Commit and verify deployment.');
