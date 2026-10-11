(() => {
  'use strict';
  const english = document.querySelector('#english');
  const contentsButton = document.querySelector('#contents-button');
  const contents = document.querySelector('#contents');
  const answersButton = document.querySelector('#answers-button');
  const dialog = document.querySelector('#image-dialog');
  const audio = document.querySelector('#narration');
  const tracks = [...document.querySelectorAll('.track')];
  const titles = tracks.map(b => b.children[1].textContent);
  let current = 0;
  let lastImageLink;

  english.addEventListener('change', () => document.body.classList.toggle('english', english.checked));
  contentsButton.addEventListener('click', () => {
    contents.hidden = !contents.hidden;
    contentsButton.setAttribute('aria-expanded', String(!contents.hidden));
  });
  contents.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    contents.hidden = true;
    contentsButton.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      contents.hidden = true;
      contentsButton.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('click', event => {
    if (!contents.hidden && !contents.contains(event.target) && !contentsButton.contains(event.target)) {
      contents.hidden = true;
      contentsButton.setAttribute('aria-expanded', 'false');
    }
  });
  answersButton.addEventListener('click', () => {
    const show = answersButton.getAttribute('aria-expanded') !== 'true';
    document.querySelectorAll('.answer').forEach(answer => { answer.hidden = !show; });
    answersButton.setAttribute('aria-expanded', String(show));
    answersButton.innerHTML = show ? 'Antworten ausblenden <span>↑</span>' : 'Antworten anzeigen <span>↓</span>';
  });
  document.querySelectorAll('.zoom').forEach(link => link.addEventListener('click', event => {
    if (typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    lastImageLink = link;
    const image = link.querySelector('img');
    const large = document.querySelector('#large-image');
    large.src = image.src;
    large.alt = image.alt;
    document.querySelector('#image-description').textContent = image.alt;
    dialog.showModal();
  }));
  document.querySelector('#close-image').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => lastImageLink?.focus());

  function selectTrack(index, play = false) {
    if (index < 0 || index >= tracks.length) return;
    current = index;
    const speed = Number(document.querySelector('#speed').value);
    audio.src = `assets/audio/kapitel-${String(index + 1).padStart(2, '0')}.mp3`;
    audio.playbackRate = speed;
    document.querySelector('#track-title').textContent = `${index + 1} · ${titles[index]}`;
    document.querySelector('#audio-status').textContent = '';
    tracks.forEach((button, i) => {
      button.classList.toggle('active', i === index);
      button.setAttribute('aria-pressed', String(i === index));
    });
    if (play) audio.play().catch(() => {
      document.querySelector('#audio-status').textContent = 'Bitte starte die Wiedergabe am Audioplayer.';
    });
  }
  tracks.forEach((button, i) => button.addEventListener('click', () => selectTrack(i, true)));
  document.querySelector('#speed').addEventListener('change', event => { audio.playbackRate = Number(event.target.value); });
  audio.addEventListener('ended', () => {
    if (document.querySelector('#autoplay').checked && current < tracks.length - 1) selectTrack(current + 1, true);
    else if (current === tracks.length - 1) document.querySelector('#audio-status').textContent = 'Ende der Geschichte. Danke fürs Zuhören.';
  });
  audio.addEventListener('error', () => {
    document.querySelector('#audio-status').textContent = 'Die Audiodatei konnte nicht geladen werden. Du kannst sie unter „Audiodateien herunterladen“ öffnen.';
  });
  selectTrack(0);
  function updateProgress() {
    const range = document.documentElement.scrollHeight - innerHeight;
    document.querySelector('#progress').style.width = `${range > 0 ? Math.min(100, scrollY / range * 100) : 0}%`;
  }
  addEventListener('scroll', updateProgress, { passive: true });
  addEventListener('resize', updateProgress);
  updateProgress();
})();
