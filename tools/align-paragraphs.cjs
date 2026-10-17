// Reuse the existing Lola recording; no additional speech generation.
const fs=require('node:fs');const path=require('node:path');const crypto=require('node:crypto');
const root=path.resolve(__dirname,'../production/01-die-nachricht-um-0317');
const read=f=>JSON.parse(fs.readFileSync(path.join(root,f),'utf8'));
const story=read('manuscript.json'),transcripts=read('audio/transcriptions.json'),manifest=read('audio/manifest.json');
const norm=s=>s.normalize('NFC').toLocaleLowerCase('de').replace(/[^\p{L}\p{N}]/gu,'');
const tokens=s=>s.split(/\s+/u).map(norm).filter(Boolean);
const ranges=[];
for(let i=0;i<story.chapters.length;i++){
 const chapter=story.chapters[i],t=transcripts.find(t=>t.chapter===i+1),part=manifest.parts[i];
 const words=t.words.filter(w=>norm(w.text));const expected=tokens(t.text);
 for(let k=0;k<words.length;k++)if(norm(words[k].text)!==expected[k])throw Error(`Transcript token mismatch ${i+1}:${k}`);
 const parts=[...(i===0?[{text:story.title},{id:'intro',text:story.introduction.de}]:[]),{text:`Kapitel ${i+1}. ${chapter.title}`},...chapter.paragraphs.map((p,j)=>({id:`ch${String(i+1).padStart(2,'0')}-p${String(j+1).padStart(2,'0')}`,text:p.de,paragraph:j+1}))];
 if(parts.flatMap(p=>tokens(p.text)).join(' ')!==expected.join(' '))throw Error('Narration/source mismatch');
 let cursor=0;const chapterDuration=part.mp3_frames*1152/44100;
 for(const p of parts){
  const count=tokens(p.text).length,first=words[cursor],last=words[cursor+count-1],next=words[cursor+count];
  if(p.id){
   if(!first)throw Error('Missing paragraph start');
   const localStart=Math.max(0,first.start-.06);
   const end=last?(next?Math.min(chapterDuration,(last.end+next.start)/2):chapterDuration):chapterDuration;
   if(end<=localStart)throw Error('Invalid paragraph range');
   ranges.push({id:p.id,chapter:i+1,paragraph:p.paragraph||0,start:Number((part.start_seconds+localStart).toFixed(3)),end:Number((part.start_seconds+end).toFixed(3)),word_count:count,start_word:first.text,end_word:last?.text||tokens(p.text).at(-1),end_basis:last?'word_boundary':'chapter_end_for_capped_transcript_tail'});
  }
  cursor+=count;
 }
}
if(ranges.length!==46)throw Error('46 story paragraph ranges required');
const output={voice_name:manifest.voice_name,voice_id:manifest.voice_id,model_id:manifest.model_id,output_format:manifest.output_format,source_audio:'story.mp3',audio_sha256:manifest.sha256,manuscript_sha256:crypto.createHash('sha256').update(fs.readFileSync(path.join(root,'manuscript.json'))).digest('hex'),method:'Matched every paragraph to existing transcription word timestamps and assembly chapter offsets. Chapter-one capped timing tail uses the known chapter end. Original recording unchanged.',listening_review:false,ranges};
fs.writeFileSync(path.join(root,'audio/paragraphs.json'),JSON.stringify(output,null,2)+'\n');console.log({paragraph_ranges:ranges.length,source_audio_unchanged:true,first:ranges[0],last:ranges.at(-1)});
