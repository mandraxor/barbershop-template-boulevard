/**
 * BOULEVARD BARBER SHOP — EDITORIAL ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveHours();
  initLightbox();
});

function initLiveHours() {
  const badge = document.getElementById('live-status-indicator');
  if (!badge) return;

  function update() {
    const timezone = 'America/Los_Angeles';
    const now = new Date();
    const local = new Date(now.toLocaleString("en-US", { timeZone: timezone }));
    const hour = local.getHours();
    const minute = local.getMinutes();
    const dec = hour + minute / 60;

    const isOpen = (dec >= 7.0 && dec < 19.0);

    if (isOpen) {
      badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-1.5 animate-pulse"></span> OPEN NOW (7:00 AM – 7:00 PM)';
    } else {
      badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-500 inline-block mr-1.5"></span> CLOSED NOW • OPENS 7:00 AM';
    }
  }
  update();
  setInterval(update, 60000);
}

function initLightbox() {
  const modal = document.getElementById('editorial-lightbox');
  const modalImg = document.getElementById('editorial-lightbox-img');
  const closeBtn = document.getElementById('close-editorial-lightbox');
  const items = document.querySelectorAll('.zoomable-img');

  if (!modal || !modalImg) return;

  items.forEach(item => {
    item.addEventListener('click', () => {
      modalImg.src = item.src;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });
}
