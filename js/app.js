/**
 * BOULEVARD BARBER SHOP — INTERACTIVE ENGINE
 * Real-time schedule parser, 3D tilt tracking, modal booking & lookbook lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  initShopStatus();
  init3DTilt();
  initServiceFilters();
  initBookingModal();
  initLookbookLightbox();
  initMobileDrawer();
});

// 1. LIVE STATUS ENGINE (Monday - Sunday 7am - 7pm PST)
function initShopStatus() {
  const statusBadge = document.getElementById('shop-status-badge');
  const statusText = document.getElementById('shop-status-text');
  const statusDot = document.getElementById('shop-status-dot');

  function update() {
    const timezone = 'America/Los_Angeles';
    const now = new Date();
    const localString = now.toLocaleString("en-US", { timeZone: timezone });
    const localDate = new Date(localString);
    const hour = localDate.getHours();
    const minute = localDate.getMinutes();
    const timeDec = hour + minute / 60;

    // Daily 7:00 AM to 7:00 PM (7.0 - 19.0)
    const isOpen = (timeDec >= 7.0 && timeDec < 19.0);

    if (isOpen) {
      if (statusDot) statusDot.className = 'w-2 h-2 rounded-full bg-emerald-400 pulse-emerald mr-2 shrink-0';
      if (statusText) statusText.innerHTML = '<span class="text-emerald-400 font-bold">OPEN TODAY</span> (7:00 AM – 7:00 PM) • 4 Master Barbers on Chair • Walk-ins & Bookings Welcome';
    } else {
      if (statusDot) statusDot.className = 'w-2 h-2 rounded-full bg-amber-500 mr-2 shrink-0';
      if (statusText) statusText.innerHTML = '<span class="text-amber-400 font-bold">CLOSED NOW</span> • Re-opens Tomorrow at 7:00 AM • Bookings Open 24/7';
    }
  }
  update();
  setInterval(update, 60000);
}

// 2. 3D TILT INTERACTION
function init3DTilt() {
  const tiltCard = document.getElementById('hero-3d-tilt-card');
  if (!tiltCard) return;

  const container = tiltCard.parentElement;
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / rect.height) * 14;
    const rotateY = (x / rect.width) * 14;
    tiltCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  container.addEventListener('mouseleave', () => {
    tiltCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

// 3. SERVICE CATEGORY FILTER
function initServiceFilters() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const serviceCards = document.querySelectorAll('.service-filter-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat.includes(cat)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 4. BOOKING MODAL & CALENDAR
function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  const openTriggers = document.querySelectorAll('.open-booking-trigger');
  const closeBtn = document.getElementById('close-booking-modal');
  if (!modal) return;

  openTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
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

// 5. LOOKBOOK LIGHTBOX
function initLookbookLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('close-lightbox');
  const items = document.querySelectorAll('.lookbook-item');

  if (!modal || !modalImg) return;

  items.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src') || item.querySelector('img').src;
      const caption = item.getAttribute('data-caption') || 'Boulevard Barber Shop — Signature Grooming';
      modalImg.src = src;
      if (modalCaption) modalCaption.textContent = caption;
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

// 6. MOBILE DRAWER
function initMobileDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  const toggle = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('close-mobile-drawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!drawer || !toggle) return;

  toggle.addEventListener('click', () => {
    drawer.classList.remove('hidden');
    drawer.classList.add('flex');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.add('hidden');
      drawer.classList.remove('flex');
    });
  }

  links.forEach(l => {
    l.addEventListener('click', () => {
      drawer.classList.add('hidden');
      drawer.classList.remove('flex');
    });
  });
}
