/**
 * ALTA JODA FEST — Main JavaScript Application
 * Mobile Drawer + Desktop Dropdown + Section Switcher + i18n + Calendar + Lightbox
 */

(function () {
  'use strict';

  // --- DATA DEFINITION ---
  const EVENTS = [
    {
      id: 'miami-oct',
      city: 'Miami',
      state: 'FL',
      venue: 'ZeyZey',
      address: '353 NE 61st St, Miami, FL 33137',
      neighborhood: 'Little River',
      start: '2026-10-03T21:00:00-04:00',
      from: 25,
      platform: 'Posh',
      url: 'https://posh.vip/e/alta-joda-fest-miami',
      chips: ['age21', 'access', 'parkingFree'],
      isNext: true
    },
    {
      id: 'dallas-oct',
      city: 'Dallas',
      state: 'TX',
      venue: "It'll Do Club",
      address: '4322 Elm St, Dallas, TX 75226',
      neighborhood: 'Deep Ellum',
      start: '2026-10-24T21:00:00-05:00',
      from: 22,
      platform: 'Eventbrite',
      url: 'https://www.eventbrite.com/e/alta-joda-fest-dallas',
      chips: ['age21', 'parkingPaid']
    },
    {
      id: 'dc-nov',
      city: 'Washington DC',
      state: 'DC',
      venue: 'Bossa Bistro',
      address: '2463 18th St NW, Washington, DC 20009',
      neighborhood: 'Adams Morgan',
      start: '2026-11-14T22:00:00-05:00',
      from: 28,
      platform: 'Shotgun',
      url: 'https://shotgun.live/alta-joda-fest-dc',
      chips: ['age21', 'access']
    },
    {
      id: 'kc-dec',
      city: 'Kansas City',
      state: 'MO',
      venue: 'The Truman',
      address: '601 E Truman Rd, Kansas City, MO 64106',
      neighborhood: 'Crossroads',
      start: '2026-12-05T21:00:00-06:00',
      from: 20,
      platform: 'Posh',
      url: 'https://posh.vip/e/alta-joda-fest-kc',
      chips: ['age21', 'access', 'parkingFree']
    }
  ];

  const VENUES = {
    miami: {
      name: 'Miami',
      venue: 'ZeyZey',
      address: '353 NE 61st St, Miami, FL 33137 · Little River',
      q: 'ZeyZey, 353 NE 61st St, Miami, FL 33137',
      notes: {
        es: [
          'Estacionamiento en la zona y servicios de ride-sharing (Uber/Lyft)',
          '21+ con documento válido (ID de EE.UU. o pasaporte físico)',
          'Espacio al aire libre con sectores cubiertos',
          'Comida callejera de Tacos María, barra de Fernet y cócteles',
          'Aviso: luces estroboscópicas durante la fiesta',
          'Puertas 21:00 hs · la pista se llena fuerte desde las 23:00'
        ],
        en: [
          'Street parking and ride-sharing (Uber/Lyft) recommended',
          '21+ with valid photo ID or physical passport',
          'Open-air patio venue with covered dance floor areas',
          'Street food by Tacos María, Fernet bar & cocktails',
          'Heads up: strobe lighting effects used through the night',
          'Doors 9 PM · peak energy around 11 PM'
        ]
      }
    },
    dallas: {
      name: 'Dallas',
      venue: "It'll Do Club",
      address: '4322 Elm St, Dallas, TX 75226 · Deep Ellum',
      q: "It'll Do Club, 4322 Elm St, Dallas, TX 75226",
      notes: {
        es: [
          'Estacionamiento pago sobre Elm St y lotes de Deep Ellum',
          '21+ con documento válido',
          'Pista indoor clásica + patio al aire libre',
          'Barra completa y food truck en el patio exterior',
          'Puertas 21:00 hs'
        ],
        en: [
          'Paid parking on Elm St and Deep Ellum district lots',
          '21+ with valid photo ID',
          'Indoor dance hall + outdoor patio',
          'Full bar & patio food truck',
          'Doors 9 PM'
        ]
      }
    },
    dc: {
      name: 'Washington DC',
      venue: 'Bossa Bistro',
      address: '2463 18th St NW, Washington, DC 20009 · Adams Morgan',
      q: 'Bossa Bistro, 2463 18th St NW, Washington, DC 20009',
      notes: {
        es: [
          'Metro Woodley Park o Columbia Heights a 10 min a pie',
          '21+ con documento válido',
          'Planta baja con barra, pista de baile en el piso superior',
          'Cocina latina abierta hasta medianoche',
          'Puertas 22:00 hs'
        ],
        en: [
          'Woodley Park or Columbia Heights metro, 10 min walk',
          '21+ with valid photo ID',
          'Lounge on main floor, dance floor upstairs',
          'Latin kitchen open until midnight',
          'Doors 10 PM'
        ]
      }
    },
    kansas: {
      name: 'Kansas City',
      venue: 'The Truman',
      address: '601 E Truman Rd, Kansas City, MO 64106 · Crossroads',
      q: 'The Truman, 601 E Truman Rd, Kansas City, MO 64106',
      notes: {
        es: [
          'Estacionamiento en el lote propio sobre Truman Rd',
          '21+ con documento válido',
          'Entrada y sanitarios totalmente accesibles',
          'Barra completa con Fernet Branca oficial y cócteles',
          'Puertas 21:00 hs'
        ],
        en: [
          'Free parking in dedicated lot on Truman Rd',
          '21+ with valid photo ID',
          'Accessible entrance & restrooms',
          'Full bar with official Fernet Branca & cocktails',
          'Doors 9 PM'
        ]
      }
    }
  };

  const I18N = {
    es: {
      badgeTour: 'La fiesta argentina itinerante de EE.UU.',
      hostBy: 'Con Dustin Luke',
      since: 'since 2022',
      cumbiaPerreo: 'Cumbia, Perreo y Fernet',
      menuLabel: 'Secciones ▾',
      selectSection: '⚡ Seleccionar Sección',
      nextEventBadge: '🔥 Próxima Fiesta Confirmada',
      getTickets: 'Sacá tu entrada',
      seeAllDates: 'Ver todas las fechas ➔',
      navInicio: 'Inicio',
      navFechas: 'Fechas',
      navRemeras: 'Remeras',
      navFotos: 'Fotos',
      navEntradas: 'Entradas',
      navUbicacion: 'Ubicación',
      navFaq: 'FAQ',
      navContacto: 'Contacto',
      doors: 'Puertas',
      fromPrice: 'Desde',
      buyTicket: 'Sacar Entrada 🎟️',
      addCalendar: '📅 Agregar al Calendario',
      ticketsVia: 'Venta oficial por',
      collabTag: 'Cápsula Oficial · Streetwear',
      collabTitle: 'Alta Joda × MADE MOBB',
      collabDesc: 'Unión directa entre la cultura cumbiera argentina y la marca de streetwear de Kansas City MADE MOBB. Diseños en algodón premium con serigrafía del carpincho con Fernet y la celeste y blanca.',
      shopCollabBtn: 'Ver colección en MADE MOBB ↗',
      usShipping: '📦 Envíos directos a todo Estados Unidos',
      buyOnMobb: 'Comprar en MADE MOBB ↗',
      selectSize: 'Talles disponibles:',
      photosHeroTag: '📸 En Vivo · Galería de la Fiesta',
      seeIgFeed: 'Abrir feed @altajodafest ↗',
      igSectionTitle: 'Fotos & Instagram',
      igSectionSub: 'El quilombo, el pogo, los fernetazos y la cumbia en directo desde cada ciudad.',
      igFollowBtn: 'Seguir en Instagram @altajodafest ↗',
      igBio: 'La única fiesta argentina itinerante en EE.UU. 🇦🇷 Cumbia, cuarteto, RKT y Fernet con coca.',
      viewOnIg: 'Ver en Instagram ↗',
      entradasTitle: 'Precios & Entradas',
      entradasSub: 'Cuanto antes comprás, más barato pagás. Los lotes se agotan y no se reabren.',
      locTitle: 'Dónde es',
      locSub: 'Elegí tu ciudad para ver la dirección exacta, mapas y recomendaciones para llegar.',
      howToGoogle: 'Cómo llegar · Google Maps ↗',
      howToApple: 'Cómo llegar · Apple Maps ↗',
      faqTitle: 'Preguntas Frecuentes',
      faqSub: 'Todo lo que tenés que saber antes de caer a la fiesta.',
      contactTitle: 'Contacto & Redes',
      contactSub: 'Escribinos para mesas VIP, fechas en tu ciudad o activaciones de marcas.',
      days: 'DÍAS',
      hours: 'HS',
      mins: 'MIN',
      secs: 'SEG'
    },
    en: {
      badgeTour: 'The only touring Argentine party in the U.S.',
      hostBy: 'Hosted by Dustin Luke',
      since: 'since 2022',
      cumbiaPerreo: 'Cumbia, Perreo & Fernet',
      menuLabel: 'Sections ▾',
      selectSection: '⚡ Select Section',
      nextEventBadge: '🔥 Next Confirmed Party',
      getTickets: 'Get your tickets',
      seeAllDates: 'See all tour dates ➔',
      navInicio: 'Home',
      navFechas: 'Dates',
      navRemeras: 'Merch',
      navFotos: 'Photos',
      navEntradas: 'Tickets',
      navUbicacion: 'Venues',
      navFaq: 'FAQ',
      navContacto: 'Contact',
      doors: 'Doors',
      fromPrice: 'From',
      buyTicket: 'Get Tickets 🎟️',
      addCalendar: '📅 Add to Calendar',
      ticketsVia: 'Official tickets on',
      collabTag: 'Official Streetwear Capsule',
      collabTitle: 'Alta Joda × MADE MOBB',
      collabDesc: 'A powerhouse streetwear crossover between Argentine cumbia party culture and Kansas City icon MADE MOBB. Heavyweight premium tees featuring the capybara with Fernet and Argentine colors.',
      shopCollabBtn: 'View collection on MADE MOBB ↗',
      usShipping: '📦 Ships nationwide across the U.S.',
      buyOnMobb: 'Buy on MADE MOBB ↗',
      selectSize: 'Available sizes:',
      photosHeroTag: '📸 Live · Party Photo Reel',
      seeIgFeed: 'Open feed @altajodafest ↗',
      igSectionTitle: 'Photos & Instagram',
      igSectionSub: 'The crowd, the dancing, the Fernet and the real Argentine energy in every city.',
      igFollowBtn: 'Follow on Instagram @altajodafest ↗',
      igBio: 'The only touring Argentine fiesta across the USA 🇦🇷 Cumbia, cuarteto, RKT & Fernet.',
      viewOnIg: 'View on Instagram ↗',
      entradasTitle: 'Tickets & Pricing',
      entradasSub: 'The earlier you purchase, the cheaper it is. Tiers close permanently when sold out.',
      locTitle: 'Where It Happens',
      locSub: 'Choose your city to view exact venue address, live maps and local venue tips.',
      howToGoogle: 'Directions · Google Maps ↗',
      howToApple: 'Directions · Apple Maps ↗',
      faqTitle: 'Frequently Asked Questions',
      faqSub: 'Everything you need to know before joining the night.',
      contactTitle: 'Contact & Links',
      contactSub: 'Reach out for VIP tables, city requests or brand partnerships.',
      days: 'DAYS',
      hours: 'HRS',
      mins: 'MIN',
      secs: 'SEC'
    }
  };

  const SECTION_NAMES = {
    inicio: { es: 'Inicio', en: 'Home', icon: '🏠' },
    fechas: { es: 'Fechas', en: 'Dates', icon: '📅' },
    remeras: { es: 'Remeras', en: 'Merch', icon: '👕' },
    fotos: { es: 'Fotos', en: 'Photos', icon: '📸' },
    entradas: { es: 'Entradas', en: 'Tickets', icon: '🎟️' },
    locacion: { es: 'Ubicación', en: 'Venues', icon: '📍' },
    faq: { es: 'FAQ', en: 'FAQ', icon: '❓' },
    contacto: { es: 'Contacto', en: 'Contact', icon: '📬' }
  };

  let currentLang = localStorage.getItem('alta_joda_lang') || 'es';
  let currentSection = 'inicio';
  let activeVenueKey = 'miami';

  // --- SECTION NAVIGATION LOGIC ---
  function switchSection(targetId, updateHash = true) {
    if (!targetId || !document.getElementById(`section-${targetId}`)) {
      targetId = 'inicio';
    }

    currentSection = targetId;

    // Show target section, hide others
    document.querySelectorAll('.content-section').forEach((sec) => {
      sec.classList.toggle('active', sec.id === `section-${targetId}`);
    });

    // Update active nav links (desktop)
    document.querySelectorAll('.nav-link-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-target-section') === targetId);
    });

    // Update active popover items (desktop)
    document.querySelectorAll('.popover-item').forEach((item) => {
      item.classList.toggle('active', item.getAttribute('data-target-section') === targetId);
    });

    // Update active drawer items (mobile)
    document.querySelectorAll('.mobile-drawer-item').forEach((item) => {
      item.classList.toggle('active', item.getAttribute('data-target-section') === targetId);
    });

    // Close popovers and drawers
    closeDesktopPopover();
    closeMobileDrawer();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (updateHash) {
      history.replaceState(null, '', `#${targetId}`);
    }
  }

  // Desktop Popover Control
  function toggleDesktopPopover() {
    const popover = document.getElementById('desktop-dropdown-popover');
    const trigger = document.getElementById('desktop-dropdown-trigger');
    if (!popover || !trigger) return;
    const isOpen = popover.classList.contains('open');
    if (isOpen) {
      closeDesktopPopover();
    } else {
      popover.classList.add('open');
      trigger.classList.add('active');
    }
  }

  function closeDesktopPopover() {
    const popover = document.getElementById('desktop-dropdown-popover');
    const trigger = document.getElementById('desktop-dropdown-trigger');
    if (popover) popover.classList.remove('open');
    if (trigger) trigger.classList.remove('active');
  }

  // Mobile Drawer Control
  function openMobileDrawer() {
    const drawer = document.getElementById('mobile-nav-drawer');
    if (drawer) drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    const drawer = document.getElementById('mobile-nav-drawer');
    if (drawer) drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  // --- LANGUAGE SWITCHER ---
  function setLanguage(lang) {
    if (lang !== 'es' && lang !== 'en') lang = 'es';
    currentLang = lang;
    localStorage.setItem('alta_joda_lang', lang);

    document.querySelectorAll('.lang-btn').forEach((b) => {
      const bLang = b.getAttribute('data-lang');
      b.classList.toggle('active', bLang === lang);
      b.setAttribute('aria-pressed', bLang === lang ? 'true' : 'false');
    });

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (I18N[lang] && I18N[lang][key]) {
        el.textContent = I18N[lang][key];
      }
    });

    // Update nav links text (desktop)
    document.querySelectorAll('.nav-link-btn').forEach((btn) => {
      const secKey = btn.getAttribute('data-target-section');
      const info = SECTION_NAMES[secKey];
      if (info) btn.textContent = info[lang];
    });

    // Update drawer links text (mobile)
    document.querySelectorAll('.mobile-drawer-item').forEach((item) => {
      const secKey = item.getAttribute('data-target-section');
      const info = SECTION_NAMES[secKey];
      if (info) {
        const textSpan = item.querySelector('span:last-child');
        if (textSpan) textSpan.textContent = info[lang];
      }
    });

    renderVenueNotes();
  }

  // --- VENUE DETAILS & TABS ---
  function selectVenue(venueKey) {
    if (!VENUES[venueKey]) return;
    activeVenueKey = venueKey;

    document.querySelectorAll('.city-tab-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-venue') === venueKey);
    });

    const v = VENUES[venueKey];
    const titleEl = document.getElementById('venue-display-title');
    const addrEl = document.getElementById('venue-display-address');
    const mapFrame = document.getElementById('venue-map-iframe');
    const gmapsBtn = document.getElementById('venue-gmaps-link');
    const amapsBtn = document.getElementById('venue-amaps-link');

    if (titleEl) titleEl.textContent = `${v.venue} · ${v.name}`;
    if (addrEl) addrEl.textContent = v.address;
    if (mapFrame) {
      mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(v.q)}&z=15&output=embed`;
      mapFrame.title = `${v.venue} - ${v.name}`;
    }
    if (gmapsBtn) gmapsBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(v.q)}`;
    if (amapsBtn) amapsBtn.href = `https://maps.apple.com/?daddr=${encodeURIComponent(v.q)}`;

    renderVenueNotes();
  }

  function renderVenueNotes() {
    const listEl = document.getElementById('venue-notes-list');
    if (!listEl) return;
    const v = VENUES[activeVenueKey];
    if (!v) return;
    const notes = v.notes[currentLang] || v.notes.es;
    listEl.innerHTML = '';
    notes.forEach((note) => {
      const li = document.createElement('li');
      li.className = 'city-note-item';
      li.innerHTML = `<span class="note-diamond" aria-hidden="true"></span><span>${note}</span>`;
      listEl.appendChild(li);
    });
  }

  // --- CALENDAR (.ICS) GENERATOR ---
  function downloadIcs(eventId) {
    const ev = EVENTS.find((e) => e.id === eventId);
    if (!ev) return;
    const pad = (n) => String(n).padStart(2, '0');
    const d = new Date(ev.start);
    const end = new Date(d.getTime() + 6 * 3600 * 1000);
    const stamp = (x) =>
      `${x.getUTCFullYear()}${pad(x.getUTCMonth() + 1)}${pad(x.getUTCDate())}T${pad(x.getUTCHours())}${pad(x.getUTCMinutes())}00Z`;

    const lines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Alta Joda Fest//ES',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${ev.id}@altajodafest.com`,
      `DTSTART:${stamp(d)}`,
      `DTEND:${stamp(end)}`,
      `SUMMARY:Alta Joda Fest — ${ev.city} (${ev.venue})`,
      `LOCATION:${ev.venue}, ${ev.address}`,
      `DESCRIPTION:La fiesta argentina itinerante en EE.UU. Cumbia, perreo y Fernet. Entradas: ${ev.url}`,
      `URL:${ev.url}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ];

    const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `alta-joda-${ev.id}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // --- COUNTDOWN TIMER ---
  function initCountdown() {
    const targetDate = new Date('2026-10-03T21:00:00-04:00').getTime();

    function update() {
      const now = Date.now();
      let diff = targetDate - now;
      if (diff < 0) diff = 0;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      const dEl = document.getElementById('cd-days');
      const hEl = document.getElementById('cd-hours');
      const mEl = document.getElementById('cd-mins');
      const sEl = document.getElementById('cd-secs');

      if (dEl) dEl.textContent = String(d).padStart(2, '0');
      if (hEl) hEl.textContent = String(h).padStart(2, '0');
      if (mEl) mEl.textContent = String(m).padStart(2, '0');
      if (sEl) sEl.textContent = String(s).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  // --- LIGHTBOX MODAL ---
  function openLightbox(imgSrc, captionText) {
    const modal = document.getElementById('photo-lightbox');
    const imgEl = document.getElementById('lightbox-img');
    const capEl = document.getElementById('lightbox-caption');
    if (!modal || !imgEl) return;
    imgEl.src = imgSrc;
    if (capEl) capEl.textContent = captionText || 'Alta Joda Fest 🇦🇷 @altajodafest';
    modal.classList.add('open');
  }

  function closeLightbox() {
    const modal = document.getElementById('photo-lightbox');
    if (modal) modal.classList.remove('open');
  }

  // --- INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);

    const initialHash = window.location.hash.replace(/^#/, '');
    if (initialHash && document.getElementById(`section-${initialHash}`)) {
      switchSection(initialHash, false);
    } else {
      switchSection('inicio', false);
    }

    // Desktop Dropdown Trigger
    const desktopTrigger = document.getElementById('desktop-dropdown-trigger');
    if (desktopTrigger) {
      desktopTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDesktopPopover();
      });
    }

    // Close popover when clicking outside
    document.addEventListener('click', (e) => {
      const popover = document.getElementById('desktop-dropdown-popover');
      const trigger = document.getElementById('desktop-dropdown-trigger');
      if (popover && !popover.contains(e.target) && trigger && !trigger.contains(e.target)) {
        closeDesktopPopover();
      }
    });

    // Mobile Drawer Toggle
    const mobileMenuBtn = document.getElementById('btn-mobile-menu-toggle');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', openMobileDrawer);
    }

    // Close Drawer Buttons
    const closeDrawerBtn = document.getElementById('btn-close-drawer');
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', closeMobileDrawer);
    }

    const mobileDrawerOverlay = document.getElementById('mobile-nav-drawer');
    if (mobileDrawerOverlay) {
      mobileDrawerOverlay.addEventListener('click', (e) => {
        if (e.target === mobileDrawerOverlay) closeMobileDrawer();
      });
    }

    // Navigation item click bindings
    document.querySelectorAll('[data-target-section]').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const sec = item.getAttribute('data-target-section');
        switchSection(sec);
      });
    });

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach((b) => {
      b.addEventListener('click', () => {
        setLanguage(b.getAttribute('data-lang'));
      });
    });

    // Hash change handler
    window.addEventListener('hashchange', () => {
      const h = window.location.hash.replace(/^#/, '');
      if (h && document.getElementById(`section-${h}`) && h !== currentSection) {
        switchSection(h, false);
      }
    });

    // Next Section Button clicks in section footers
    document.querySelectorAll('.btn-next-section').forEach((btn) => {
      btn.addEventListener('click', () => {
        const next = btn.getAttribute('data-next-section');
        switchSection(next);
      });
    });

    // Open menu again buttons
    document.querySelectorAll('.btn-open-menu-again').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (window.innerWidth < 980) {
          openMobileDrawer();
        } else {
          toggleDesktopPopover();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });

    // City venue tabs
    document.querySelectorAll('.city-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectVenue(btn.getAttribute('data-venue'));
      });
    });

    // Past dates accordion
    const pastBtn = document.getElementById('past-dates-toggle');
    const pastWrap = document.getElementById('past-dates-wrapper');
    if (pastBtn && pastWrap) {
      pastBtn.addEventListener('click', () => {
        pastWrap.classList.toggle('open');
      });
    }

    // FAQ Accordion toggles
    document.querySelectorAll('.faq-question-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.faq-item-card');
        if (card) {
          const isOpen = card.classList.contains('open');
          document.querySelectorAll('.faq-item-card').forEach((c) => c.classList.remove('open'));
          if (!isOpen) card.classList.add('open');
        }
      });
    });

    // Size Selector pills
    document.querySelectorAll('.size-pill-btn').forEach((pill) => {
      pill.addEventListener('click', () => {
        const row = pill.closest('.size-pills-row');
        if (row) {
          row.querySelectorAll('.size-pill-btn').forEach((p) => p.classList.remove('selected'));
          pill.classList.add('selected');
        }
      });
    });

    // Calendar (.ICS) download
    document.addEventListener('click', (e) => {
      const icsBtn = e.target.closest('[data-download-ics]');
      if (icsBtn) {
        e.preventDefault();
        downloadIcs(icsBtn.getAttribute('data-download-ics'));
      }
    });

    // Lightbox
    document.querySelectorAll('[data-lightbox-src]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(el.getAttribute('data-lightbox-src'), el.getAttribute('data-lightbox-caption'));
      });
    });

    const closeLightboxBtn = document.getElementById('lightbox-close-btn');
    if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);

    const lightboxModal = document.getElementById('photo-lightbox');
    if (lightboxModal) {
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) closeLightbox();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
        closeMobileDrawer();
        closeDesktopPopover();
      }
    });

    initCountdown();
    selectVenue('miami');
  });

  window.AJApp = {
    switchSection,
    setLanguage,
    selectVenue,
    downloadIcs,
    openLightbox,
    closeLightbox,
    openMobileDrawer,
    closeMobileDrawer
  };
})();
