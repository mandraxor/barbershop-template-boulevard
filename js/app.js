/**
 * BOULEVARD BARBER SHOP — RADICAL ATELIER ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveHours();
  init3DParallax();
  initLightbox();
  initMobileMenu();
});

// Live Schedule Engine (Mon-Sun 7am-7pm)
function initLiveHours() {
  const badge = document.getElementById('live-status-pill');
  if (!badge) return;

  function check() {
    const timezone = 'America/Los_Angeles';
    const now = new Date();
    const local = new Date(now.toLocaleString("en-US", { timeZone: timezone }));
    const hour = local.getHours();
    const minute = local.getMinutes();
    const dec = hour + minute / 60;

    const isOpen = (dec >= 7.0 && dec < 19.0);

    if (isOpen) {
      badge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-green mr-2 inline-block"></span> <span class="text-emerald-400 font-bold uppercase tracking-wider">OPEN NOW</span> • Closes 7:00 PM • Walk-ins & Bookings Welcome`;
    } else {
      badge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-amber-500 mr-2 inline-block"></span> <span class="text-amber-400 font-bold uppercase tracking-wider">CLOSED NOW</span> • Re-opens Tomorrow at 7:00 AM`;
    }
  }
  check();
  setInterval(check, 60000);
}

// 3D Parallax Tilt for Hero
function init3DParallax() {
  const card = document.getElementById('hero-tilt-frame');
  if (!card) return;

  window.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;
    card.style.transform = `rotateY(${-x}deg) rotateX(${y}deg) scale(1.01)`;
  });
}

// Lightbox
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const close = document.getElementById('close-lightbox');
  const items = document.querySelectorAll('.gallery-zoom-item');

  if (!modal || !img) return;

  items.forEach(item => {
    item.addEventListener('click', () => {
      img.src = item.getAttribute('data-img');
      if (caption) caption.textContent = item.getAttribute('data-title') || 'Boulevard Barber Shop';
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    });
  });

  if (close) {
    close.addEventListener('click', () => {
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

// Mobile Menu
function initMobileMenu() {
  const menu = document.getElementById('mobile-drawer');
  const btn = document.getElementById('mobile-toggle');
  const close = document.getElementById('close-drawer');
  const links = document.querySelectorAll('.drawer-link');

  if (!menu || !btn) return;

  btn.addEventListener('click', () => {
    menu.classList.remove('hidden');
    menu.classList.add('flex');
  });

  if (close) {
    close.addEventListener('click', () => {
      menu.classList.add('hidden');
      menu.classList.remove('flex');
    });
  }

  links.forEach(l => {
    l.addEventListener('click', () => {
      menu.classList.add('hidden');
      menu.classList.remove('flex');
    });
  });
}
