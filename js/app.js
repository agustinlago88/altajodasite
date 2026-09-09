/**
 * ALTA JODA FEST — Main JavaScript Application
 * Section Switcher (No infinite scroll), i18n, Event Ticketing, Instagram Lightbox, Merch Selectors
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

  const PAST_EVENTS = [
    { city: 'Miami', date: '13 Junio 2026', venue: 'ZeyZey Little River' },
    { city: 'Chicago', date: '21 Marzo 2026', venue: 'Subterranean Wicker Park' },
    { city: 'Miami', date: '20 Diciembre 2025', venue: 'ZeyZey Little River' },
    { city: 'New York', date: '18 Octubre 2025', venue: 'Brooklyn Warehouse' }
  ];

  const VENUES = {
    miami: {
      name: 'Miami',
      venue: 'ZeyZey',
      address: '353 NE 61st St, Miami, FL 33137 · Little River',
      q: 'ZeyZey, 353 NE 61st St, Miami, FL 33137',
      notes: {
        es: [
          'Estacionamiento gratis en el lote público cruzando la 61',
          '21+ con documento válido (ID o pasaporte físico)',
          'Espacio al aire libre con patio y sectores cubiertos',
          'Comida callejera de Tacos María, barra de Fernet y coctelería',
          'Aviso: usamos luces estroboscópicas durante la fiesta',
          'Puertas 21:00 hs · la pista se llena fuerte desde las 23:00'
        ],
        en: [
          'Free parking in public lot across 61st St',
          '21+ with valid photo ID or physical passport',
          'Open-air patio venue with covered dance spots',
          'Street food by Tacos María, Fernet bar & craft cocktails',
          'Heads up: strobe lighting effects used all night',
          'Doors 9 PM · energy peaks right around 11 PM'
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
          'Pista indoor icónica + patio al aire libre',
          'Barra completa y food truck en el patio exterior',
          'Puertas 21:00 hs'
        ],
        en: [
          'Paid parking on Elm St and Deep Ellum district lots',
          '21+ with valid photo ID',
          'Legendary indoor dance floor + open patio',
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
          'Ground level lounge, dance floor upstairs',
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
          'Estacionamiento gratuito en el lote propio sobre Truman Rd',
          '21+ con documento válido',
          'Entrada y sanitarios totalmente accesibles',
          'Barra completa con Fernet Branca oficial y cócteles',
          'Puertas 21:00 hs'
        ],
        en: [
          'Free parking in dedicated lot on Truman Rd',
          '21+ with valid photo ID',
          'Fully accessible entrance & restrooms',
          'Full bar with official Fernet Branca & cocktails',
          'Doors 9 PM'
        ]
      }
    }
  };

  // i18n Translations Dictionary
  const I18N = {
    es: {
      badgeTour: 'La fiesta argentina itinerante de EE.UU.',
      hostBy: 'Con Dustin Luke',
      since: 'since 2022',
      cumbiaPerreo: 'Cumbia, Perreo y Fernet',
      menuBtn: 'Sección:',
      selectSection: '⚡ Seleccionar Sección',
      nextEventBadge: '🔥 Próxima Fiesta Confirmada',
      getTickets: 'Sacá tu entrada',
      seeAllDates: 'Ver todas las fechas ➔',
      doors: 'Puertas',
      fromPrice: 'Desde',
      buyTicket: 'Sacar Entrada',
      addCalendar: 'Agregar al Calendario (.ics)',
      ticketsVia: 'Venta oficial por',
      pastDatesTitle: 'Fechas Anteriores (Historial)',
      soldOut: 'Agotado',
      collabTag: 'Cápsula Exclusiva de Streetwear',
      collabTitle: 'Alta Joda Fest × MADE MOBB',
      collabDesc: 'Unión directa entre la cultura cumbiera argentina y la marca pesada de streetwear de Kansas City MADE MOBB. Diseños en algodón premium con gráfica serigrafiada del carpincho con Fernet y la celeste y blanca.',
      shopCollabBtn: 'Ver colección en MADE MOBB ↗',
      usShipping: '📦 Envíos a todo Estados Unidos y pickup en tienda',
      buyOnMobb: 'Comprar en MADE MOBB ↗',
      selectSize: 'Talle:',
      photosHeroTag: 'En Vivo · Galería de la Fiesta',
      seeIgFeed: 'Abrir feed @altajodafest ↗',
      igSectionTitle: 'Fotos & Reels en Vivo',
      igSectionSub: 'El quilombo, el pogo, los fernetazos y la cumbia en directo desde cada ciudad.',
      igFollowBtn: 'Seguir en Instagram @altajodafest ↗',
      igBio: 'La única fiesta argentina itinerante en EE.UU. 🇦🇷 Cumbia, cuarteto, RKT y Fernet con coca.',
      viewOnIg: 'Ver en Instagram ↗',
      entradasTitle: 'Precios & Tiers de Entradas',
      entradasSub: 'Cuanto antes comprás, más barato pagás. Los lotes se agotan y no se reabren.',
      earlyNow: 'Ahora (Preventa)',
      atDoor: 'En la puerta',
      platformNote: 'La venta corre según la ciudad por Posh, Shotgun o Eventbrite. Si compraste tu entrada y no podés ir, transferila desde la app de la ticketera.',
      locTitle: 'Dónde es · Ubicaciones',
      locSub: 'Elegí tu ciudad para ver la dirección exacta, mapas y recomendaciones para llegar.',
      howToGoogle: 'Cómo llegar · Google Maps',
      howToApple: 'Cómo llegar · Apple Maps',
      faqTitle: 'Preguntas Frecuentes (FAQ)',
      faqSub: 'Todo lo que tenés que saber antes de venir a manijear.',
      contactTitle: 'Contacto & Redes Oficiales',
      contactSub: 'Escribinos para mesas VIP, fechas en tu ciudad o activaciones de marcas.',
      igContactNote: 'Preventas exclusivas, sorteos de Fernet y anuncios en tiempo real.',
      myCityCta: 'Quiero Alta Joda en mi ciudad ✍️',
      sponsorsTitle: 'Marcas & Sponsors',
      sponsorsBody: 'Activaciones con la comunidad argentina y latina más eufórica de Estados Unidos. Pedí nuestro media kit con métricas y alcance por ciudad.',
      sponsorBtn: 'Pedir Media Kit',
      days: 'DÍAS',
      hours: 'HS',
      mins: 'MIN',
      secs: 'SEG',
      nextSec: 'Siguiente Sección',
      backToTop: 'Subir',
      exploreMenu: 'Explorar Menú'
    },
    en: {
      badgeTour: 'The only touring Argentine party in the U.S.',
      hostBy: 'Hosted by Dustin Luke',
      since: 'since 2022',
      cumbiaPerreo: 'Cumbia, Perreo & Fernet',
      menuBtn: 'Section:',
      selectSection: '⚡ Select Section',
      nextEventBadge: '🔥 Next Confirmed Party',
      getTickets: 'Get your tickets',
      seeAllDates: 'See all tour dates ➔',
      doors: 'Doors',
      fromPrice: 'From',
      buyTicket: 'Get Tickets',
      addCalendar: 'Add to Calendar (.ics)',
      ticketsVia: 'Official tickets on',
      pastDatesTitle: 'Past Tour Dates (History)',
      soldOut: 'Sold out',
      collabTag: 'Exclusive Streetwear Capsule',
      collabTitle: 'Alta Joda Fest × MADE MOBB',
      collabDesc: 'A powerhouse streetwear crossover between Argentine cumbia party culture and Kansas City icon MADE MOBB. Heavyweight premium tees featuring the capybara with Fernet and Argentine colors.',
      shopCollabBtn: 'View collection on MADE MOBB ↗',
      usShipping: '📦 Ships nationwide across the U.S. + local KC pickup',
      buyOnMobb: 'Buy on MADE MOBB ↗',
      selectSize: 'Size:',
      photosHeroTag: 'Live · Party Photo Reel',
      seeIgFeed: 'Open feed @altajodafest ↗',
      igSectionTitle: 'Live Photos & Reels',
      igSectionSub: 'The crowd, the dancing, the Fernet and the real Argentine energy in every city.',
      igFollowBtn: 'Follow on Instagram @altajodafest ↗',
      igBio: 'The only touring Argentine fiesta across the USA 🇦🇷 Cumbia, cuarteto, RKT & Fernet.',
      viewOnIg: 'View on Instagram ↗',
      entradasTitle: 'Tickets & Pricing Tiers',
      entradasSub: 'The earlier you purchase, the cheaper it is. Tiers close permanently when sold out.',
      earlyNow: 'Now (Early Bird)',
      atDoor: 'At the door',
      platformNote: 'Official ticketing runs on Posh, Shotgun or Eventbrite depending on venue. Tickets can be transferred in-app if needed.',
      locTitle: 'Where It Happens · Venues',
      locSub: 'Choose your city to view exact venue address, live maps and local venue tips.',
      howToGoogle: 'Directions · Google Maps',
      howToApple: 'Directions · Apple Maps',
      faqTitle: 'Frequently Asked Questions (FAQ)',
      faqSub: 'Everything you need to know before joining the night.',
      contactTitle: 'Contact & Official Links',
      contactSub: 'Reach out for VIP tables, city requests or brand partnerships.',
      igContactNote: 'Early access tickets, Fernet giveaways and real-time updates.',
      myCityCta: 'Bring Alta Joda to my city ✍️',
      sponsorsTitle: 'Brand Partnerships & Sponsors',
      sponsorsBody: 'Experiential activations connecting with the most passionate Argentine and Latin crowd across major U.S. metros. Request our brand media kit.',
      sponsorBtn: 'Request Media Kit',
      days: 'DAYS',
      hours: 'HRS',
      mins: 'MIN',
      secs: 'SEC',
      nextSec: 'Next Section',
      backToTop: 'Back to Top',
      exploreMenu: 'Explore Menu'
    }
  };

  // Section names map
  const SECTION_NAMES = {
    inicio: { es: 'Inicio', en: 'Home', icon: '🏠' },
    fechas: { es: 'Próximas Fechas', en: 'Tour Dates', icon: '📅' },
    remeras: { es: 'Remeras MADE MOBB', en: 'Merch Shirts', icon: '👕' },
    fotos: { es: 'Fotos & Instagram', en: 'Photos & IG', icon: '📸' },
    entradas: { es: 'Precios & Tiers', en: 'Ticket Tiers', icon: '🎟️' },
    locacion: { es: 'Dónde es (Venues)', en: 'Venues & Maps', icon: '📍' },
    faq: { es: 'Preguntas Frecuentes', en: 'FAQ', icon: '❓' },
    contacto: { es: 'Contacto & Redes', en: 'Contact', icon: '📬' }
  };

  // State
  let currentLang = localStorage.getItem('alta_joda_lang') || 'es';
  let currentSection = 'inicio';
  let activeVenueKey = 'miami';

  // --- SECTION NAVIGATION LOGIC (NO INFINITE SCROLL) ---
  function switchSection(targetId, updateHash = true) {
    if (!targetId || !document.getElementById(`section-${targetId}`)) {
      targetId = 'inicio';
    }

    currentSection = targetId;

    // Show target section, hide others
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((sec) => {
      if (sec.id === `section-${targetId}`) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });

    // Update Dropdown current label
    const sectionInfo = SECTION_NAMES[targetId] || { es: targetId, en: targetId, icon: '⚡' };
    const labelSpan = document.getElementById('current-section-label');
    if (labelSpan) {
      labelSpan.textContent = `${sectionInfo.icon} ${sectionInfo[currentLang] || sectionInfo.es}`;
    }

    // Update active dropdown items
    document.querySelectorAll('.dropdown-item').forEach((item) => {
      const sec = item.getAttribute('data-target-section');
      item.classList.toggle('active', sec === targetId);
    });

    // Update active quick nav pills
    document.querySelectorAll('.nav-pill').forEach((pill) => {
      const sec = pill.getAttribute('data-target-section');
      pill.classList.toggle('active', sec === targetId);
    });

    // Close dropdown menu
    closeDropdown();

    // Scroll smoothly to top of page (below header)
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL hash without jumping
    if (updateHash) {
      history.replaceState(null, '', `#${targetId}`);
    }
  }

  function toggleDropdown() {
    const menu = document.getElementById('section-dropdown-menu');
    const btn = document.getElementById('section-menu-btn');
    if (!menu || !btn) return;
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
      closeDropdown();
    } else {
      menu.classList.add('open');
      btn.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
  }

  function closeDropdown() {
    const menu = document.getElementById('section-dropdown-menu');
    const btn = document.getElementById('section-menu-btn');
    if (!menu || !btn) return;
    menu.classList.remove('open');
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  }

  // --- LANGUAGE SWITCHER ---
  function setLanguage(lang) {
    if (lang !== 'es' && lang !== 'en') lang = 'es';
    currentLang = lang;
    localStorage.setItem('alta_joda_lang', lang);

    // Toggle active on lang buttons
    document.querySelectorAll('.lang-btn').forEach((b) => {
      const bLang = b.getAttribute('data-lang');
      b.classList.toggle('active', bLang === lang);
      b.setAttribute('aria-pressed', bLang === lang ? 'true' : 'false');
    });

    // Translate texts
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (I18N[lang] && I18N[lang][key]) {
        el.textContent = I18N[lang][key];
      }
    });

    // Update section label in dropdown button
    const sectionInfo = SECTION_NAMES[currentSection];
    const labelSpan = document.getElementById('current-section-label');
    if (labelSpan && sectionInfo) {
      labelSpan.textContent = `${sectionInfo.icon} ${sectionInfo[lang] || sectionInfo.es}`;
    }

    // Update dropdown item names
    document.querySelectorAll('.dropdown-item').forEach((item) => {
      const secKey = item.getAttribute('data-target-section');
      const info = SECTION_NAMES[secKey];
      if (info) {
        const titleSpan = item.querySelector('.dropdown-item-title');
        if (titleSpan) titleSpan.textContent = info[lang];
      }
    });

    // Update nav pill names
    document.querySelectorAll('.nav-pill').forEach((pill) => {
      const secKey = pill.getAttribute('data-target-section');
      const info = SECTION_NAMES[secKey];
      if (info) pill.textContent = info[lang];
    });

    // Re-render venues notes for active venue
    renderVenueNotes();
  }

  // --- VENUE DETAILS & TABS ---
  function selectVenue(venueKey) {
    if (!VENUES[venueKey]) return;
    activeVenueKey = venueKey;

    // Tabs styling
    document.querySelectorAll('.city-tab-btn').forEach((btn) => {
      const k = btn.getAttribute('data-venue');
      btn.classList.toggle('active', k === venueKey);
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
    const end = new Date(d.getTime() + 6 * 3600 * 1000); // 6 hours party
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
      `DESCRIPTION:La fiesta argentina itinerante en EE.UU. Cumbia, cuarteto, perreo y Fernet. Entradas: ${ev.url}`,
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
    // Upcoming event target: Oct 3, 2026 21:00 EDT
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
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    const modal = document.getElementById('photo-lightbox');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  // --- INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    setLanguage(currentLang);

    // Initial section from Hash or default
    const initialHash = window.location.hash.replace(/^#/, '');
    if (initialHash && document.getElementById(`section-${initialHash}`)) {
      switchSection(initialHash, false);
    } else {
      switchSection('inicio', false);
    }

    // Dropdown button listener
    const menuBtn = document.getElementById('section-menu-btn');
    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown();
      });
    }

    // Click outside to close dropdown
    document.addEventListener('click', (e) => {
      const menu = document.getElementById('section-dropdown-menu');
      const btn = document.getElementById('section-menu-btn');
      if (menu && !menu.contains(e.target) && btn && !btn.contains(e.target)) {
        closeDropdown();
      }
    });

    // Dropdown items click listeners
    document.querySelectorAll('.dropdown-item').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const sec = item.getAttribute('data-target-section');
        switchSection(sec);
      });
    });

    // Nav pill items click listeners
    document.querySelectorAll('.nav-pill').forEach((pill) => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        const sec = pill.getAttribute('data-target-section');
        switchSection(sec);
      });
    });

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach((b) => {
      b.addEventListener('click', () => {
        const lang = b.getAttribute('data-lang');
        setLanguage(lang);
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
        toggleDropdown();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    // Venue city tabs
    document.querySelectorAll('.city-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const vk = btn.getAttribute('data-venue');
        selectVenue(vk);
      });
    });

    // Past dates accordion toggle
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
          // Close other cards for clean accordion feel
          document.querySelectorAll('.faq-item-card').forEach((c) => c.classList.remove('open'));
          if (!isOpen) {
            card.classList.add('open');
          }
        }
      });
    });

    // Size Selector pills in MADE MOBB merch cards
    document.querySelectorAll('.size-pill-btn').forEach((pill) => {
      pill.addEventListener('click', () => {
        const row = pill.closest('.size-pills-row');
        if (row) {
          row.querySelectorAll('.size-pill-btn').forEach((p) => p.classList.remove('selected'));
          pill.classList.add('selected');
        }
      });
    });

    // Calendar (.ICS) click delegation
    document.addEventListener('click', (e) => {
      const icsBtn = e.target.closest('[data-download-ics]');
      if (icsBtn) {
        e.preventDefault();
        const evId = icsBtn.getAttribute('data-download-ics');
        downloadIcs(evId);
      }
    });

    // Lightbox triggers for photos
    document.querySelectorAll('[data-lightbox-src]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const src = el.getAttribute('data-lightbox-src');
        const caption = el.getAttribute('data-lightbox-caption');
        openLightbox(src, caption);
      });
    });

    // Lightbox close
    const closeBtn = document.getElementById('lightbox-close-btn');
    const modal = document.getElementById('photo-lightbox');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeLightbox();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });

    // Start Countdown
    initCountdown();

    // Initial venue notes render
    selectVenue('miami');
  });

  // Expose useful handlers globally
  window.AJApp = {
    switchSection,
    setLanguage,
    selectVenue,
    downloadIcs,
    openLightbox,
    closeLightbox
  };
})();
