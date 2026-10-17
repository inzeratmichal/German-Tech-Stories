(() => {
  const menu = document.querySelector('.menu');
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.open = false; }));
  document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && menu?.open){ menu.open = false; menu.querySelector('summary').focus(); }
  });
  document.addEventListener('click', event => { if(menu?.open && !menu.contains(event.target)) menu.open = false; });
  const audio = document.getElementById('story-audio');
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
