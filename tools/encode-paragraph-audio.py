"""Encode paragraph clips from a 44.1kHz mono signed-16-bit PCM decode of story.mp3.
Requires lameenc; usage: python tools/encode-paragraph-audio.py source.pcm.
No new speech generation. Keep original full narration unchanged.
"""
import sys, json, hashlib
from pathlib import Path
import lameenc
root=Path(__file__).resolve().parent.parent/'production/01-die-nachricht-um-0317/audio'
pcm=Path(sys.argv[1]).read_bytes()
ranges=json.loads((root/'paragraphs.json').read_text(encoding='utf-8'))
out=root/'paragraphs'; out.mkdir(exist_ok=True)
clips=[]
for r in ranges['ranges']:
 start=round(r['start']*44100); end=min(len(pcm)//2,round(r['end']*44100))
 enc=lameenc.Encoder(); enc.set_bit_rate(128); enc.set_in_sample_rate(44100); enc.set_out_sample_rate(44100); enc.set_channels(1); enc.set_quality(2)
 data=enc.encode(pcm[start*2:end*2])+enc.flush()
 filename=r['id']+'.mp3'; (out/filename).write_bytes(data)
 clips.append({'id':r['id'],'filename':filename,'source_start':r['start'],'source_end':r['end'],'duration_seconds':(end-start)/44100,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
manifest={'source':'story.mp3','source_sha256':hashlib.sha256((root/'story.mp3').read_bytes()).hexdigest(),'method':'Decoded existing narration once; extracted exact paragraph PCM ranges and encoded standalone 44100 Hz mono 128 kbps MP3 clips for native players. No new TTS.','voice_id':ranges['voice_id'],'model_id':ranges['model_id'],'clips':clips}
(root/'paragraph-clips.json').write_text(json.dumps(manifest,indent=2)+'\n',encoding='utf-8',newline='\n')
print({'clips':len(clips),'bytes':sum(c['bytes'] for c in clips)})
