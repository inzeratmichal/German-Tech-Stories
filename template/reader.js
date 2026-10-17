(() => {
  const menu = document.querySelector('.menu');
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.open = false; }));
  document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && menu?.open){ menu.open = false; menu.querySelector('summary').focus(); }
  });
  document.addEventListener('click', event => { if(menu?.open && !menu.contains(event.target)) menu.open = false; });
  const players = [...document.querySelectorAll('audio')];
  const speed = document.getElementById('audio-speed');
  let sharedVolume = 1;
  let sharedMuted = false;
  players.forEach(player => {
    player.addEventListener('play', () => {
      players.forEach(other => { if(other !== player) other.pause(); });
      player.playbackRate = Number(speed?.value || 1);
    });
    player.addEventListener('volumechange', () => {
      if(player.volume === sharedVolume && player.muted === sharedMuted) return;
      sharedVolume = player.volume; sharedMuted = player.muted;
      players.forEach(other => {
        if(other.volume !== sharedVolume) other.volume = sharedVolume;
        if(other.muted !== sharedMuted) other.muted = sharedMuted;
      });
    });
    const stop = player.closest('.paragraph-audio')?.querySelector('.audio-stop');
    if(stop){
      stop.hidden = false;
      stop.addEventListener('click', () => { player.pause(); player.currentTime = 0; });
    }
  });
  speed?.addEventListener('change', event => {
    players.forEach(player => { player.playbackRate = Number(event.target.value); });
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
