(() => {
  const menu = document.querySelector('.menu');
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.open = false; }));
  document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && menu?.open){ menu.open = false; menu.querySelector('summary').focus(); }
  });
  document.addEventListener('click', event => { if(menu?.open && !menu.contains(event.target)) menu.open = false; });
  const audio = document.getElementById('story-audio');
  const paragraphButtons = [...document.querySelectorAll('.paragraph-play')];
  let activeButton = null;
  let rangeEnd = null;
  let stopTimer = null;
  let frame = null;
  const label = button => button.closest('.paragraph').id === 'intro' ? 'Einleitung anhören' : 'Absatz anhören';
  const resetButton = button => {
    if(!button) return;
    button.setAttribute('aria-pressed','false');
    button.querySelector('.paragraph-play-label').textContent = label(button);
    button.querySelector('[aria-hidden]').textContent = '▶';
  };
  const clearTimers = () => { clearTimeout(stopTimer); cancelAnimationFrame(frame); };
  const clearRange = () => {
    clearTimers(); resetButton(activeButton); activeButton=null; rangeEnd=null;
  };
  const finishParagraph = () => {
    if(rangeEnd===null) return;
    audio.pause();
    clearRange();
  };
  const watchRange = () => {
    clearTimers();
    if(rangeEnd===null||audio.paused) return;
    const remaining=(rangeEnd-audio.currentTime)/audio.playbackRate;
    if(remaining<=0){ finishParagraph(); return; }
    stopTimer=setTimeout(finishParagraph,remaining*1000);
    const tick=()=>{
      if(rangeEnd===null||audio.paused) return;
      if(audio.currentTime>=rangeEnd){finishParagraph();return;}
      frame=requestAnimationFrame(tick);
    };
    frame=requestAnimationFrame(tick);
  };
  if(audio){
    paragraphButtons.forEach(button=>{
      button.hidden=false;
      button.addEventListener('click',async()=>{
        if(activeButton===button&&!audio.paused){audio.pause();return;}
        const resume=activeButton===button&&audio.currentTime>=Number(button.dataset.start)&&audio.currentTime<Number(button.dataset.end);
        clearRange(); activeButton=button; rangeEnd=Number(button.dataset.end);
        if(!resume) audio.currentTime=Number(button.dataset.start);
        button.setAttribute('aria-pressed','true');
        button.querySelector('.paragraph-play-label').textContent='Pause';
        button.querySelector('[aria-hidden]').textContent='Ⅱ';
        try{await audio.play();watchRange();}catch{clearRange();}
      });
    });
    audio.addEventListener('pause',()=>{clearTimers();resetButton(activeButton);});
    audio.addEventListener('play',()=>{
      if(activeButton){activeButton.setAttribute('aria-pressed','true');activeButton.querySelector('.paragraph-play-label').textContent='Pause';activeButton.querySelector('[aria-hidden]').textContent='Ⅱ';}
      watchRange();
    });
    audio.addEventListener('ratechange',watchRange);
    audio.addEventListener('seeked',watchRange);
    audio.addEventListener('waiting',clearTimers);
    audio.addEventListener('playing',watchRange);
    audio.addEventListener('timeupdate',()=>{if(rangeEnd!==null&&audio.currentTime>=rangeEnd)finishParagraph();});
    audio.addEventListener('ended',clearRange);
    // Using the complete-story native player exits paragraph-only playback.
    audio.addEventListener('pointerdown',clearRange);
    audio.addEventListener('keydown',clearRange);
  }
  document.getElementById('audio-speed')?.addEventListener('change', event => {
    if(audio) audio.playbackRate = Number(event.target.value);
  });
  const progress = document.getElementById('reading-progress');
  let scheduled = false;
  const update = () => {
    if(progress){
      const range = document.documentElement.scrollHeight - window.innerHeight;
      progress.value = range > 0 ? Math.min(100, Math.max(0, window.scrollY / range * 100)) : 100;
    }
    scheduled = false;
  };
  window.addEventListener('scroll', () => { if(!scheduled){ scheduled=true; requestAnimationFrame(update); } }, {passive:true});
  window.addEventListener('resize', update);
  update();
})();
