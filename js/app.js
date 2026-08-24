/**
 * BOULEVARD BARBER SHOP — INTERACTIVE AMBIENT ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
  initSteamCanvas();
  initLiveHours();
  initLightbox();
  initMobileDrawer();
});

// Ambient Steam & Light Particles on Hero
function initSteamCanvas() {
  const canvas = document.getElementById('steam-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  for (let i = 0; i < 35; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.5 + 1,
      speedY: -(Math.random() * 0.4 + 0.15),
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.4 + 0.1
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      if (p.y < 0) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245, 230, 180, ${p.opacity})`;
      ctx.fill();
    });
    requestAnimationFrame(render);
  }
  render();
}

// Live Hours Engine (Mon-Sun 7am-7pm)
function initLiveHours() {
  const pill = document.getElementById('live-status-pill');
  if (!pill) return;

  function update() {
    const timezone = 'America/Los_Angeles';
    const now = new Date();
    const local = new Date(now.toLocaleString("en-US", { timeZone: timezone }));
    const hour = local.getHours();
    const minute = local.getMinutes();
    const dec = hour + minute / 60;

    const isOpen = (dec >= 7.0 && dec < 19.0);

    if (isOpen) {
      pill.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-green-dot mr-2 inline-block shrink-0"></span> <span class="text-emerald-400 font-bold uppercase tracking-wider">OPEN NOW</span> • Closes 7:00 PM • 4 Master Chairs Active`;
    } else {
      pill.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-amber-500 mr-2 inline-block shrink-0"></span> <span class="text-amber-400 font-bold uppercase tracking-wider">CLOSED NOW</span> • Re-opens Tomorrow at 7:00 AM`;
    }
  }
  update();
  setInterval(update, 60000);
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
function initMobileDrawer() {
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
