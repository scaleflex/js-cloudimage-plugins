/* ==========================================================================
   Cloudimage Plugins Hub — App
   ========================================================================== */

/* --------------------------------------------------------------------------
   Plugin Data Model
   -------------------------------------------------------------------------- */
const PLUGINS = [
  {
    id: 'js-cloudimage-3d-view',
    name: '3D View',
    version: '1.0.0',
    tagline: 'Interactive 3D product visualization',
    description:
      'Display 3D models with smooth rotation, zoom, autoplay, and fullscreen support. Touch-friendly with drag controls and inertia.',
    icon: 'icon-3d',
    accentColor: '#e05cff',
    features: [
      '3D Models',
      'Touch & Drag',
      'Zoom',
      'Autoplay',
      'Fullscreen',
      'Responsive',
      'Lazy Loading',
      'Accessibility',
    ],
    links: {
      demo: 'https://scaleflex.github.io/js-cloudimage-3d-view/',
      repo: 'https://github.com/scaleflex/js-cloudimage-3d-view',
    },
  },
  {
    id: 'js-cloudimage-360-view',
    name: '360 View',
    version: '4.3.5',
    tagline: 'Interactive 360-degree product views',
    description:
      'Smooth rotation with touch/drag inertia, pinch-to-zoom, autoplay, fullscreen, hotspots, and keyboard navigation.',
    icon: 'icon-360',
    accentColor: '#2c99ff',
    features: [
      '360° Rotation',
      'Touch & Drag',
      'Pinch-to-Zoom',
      'Autoplay',
      'Zoom & Magnifier',
      'Fullscreen',
      'Hotspots',
      'Lazy Loading',
    ],
    links: {
      demo: 'https://scaleflex.github.io/js-cloudimage-360-view/',
      repo: 'https://github.com/scaleflex/js-cloudimage-360-view',
    },
  },
  {
    id: 'js-cloudimage-hotspot',
    name: 'Image Hotspot',
    version: '1.0.0',
    tagline: 'Clickable hotspots on any image',
    description:
      'Add interactive hotspot markers with tooltips, custom icons, responsive positioning, and animated indicators.',
    icon: 'icon-hotspot',
    accentColor: '#00d4aa',
    features: [
      'Custom Markers',
      'Rich Tooltips',
      'Responsive',
      'Click & Hover',
      'Custom Icons',
      'Animations',
      'Lazy Loading',
      'Accessibility',
    ],
    links: {
      demo: 'https://scaleflex.github.io/js-cloudimage-hotspot/',
      repo: 'https://github.com/scaleflex/js-cloudimage-hotspot',
    },
  },
  {
    id: 'js-cloudimage-before-after',
    name: 'Before / After',
    version: '1.0.0',
    tagline: 'Side-by-side image comparison slider',
    description:
      'A smooth comparison slider with touch support, vertical and horizontal modes, and customizable handle.',
    icon: 'icon-compare',
    accentColor: '#6879EB',
    features: [
      'Drag Slider',
      'Touch Support',
      'Horizontal & Vertical',
      'Custom Handle',
      'Responsive',
      'Lazy Loading',
      'Keyboard Nav',
      'Accessibility',
    ],
    links: {
      demo: 'https://scaleflex.github.io/js-cloudimage-before-after/',
      repo: 'https://github.com/scaleflex/js-cloudimage-before-after',
    },
  },
];

/* --------------------------------------------------------------------------
   Plugin Illustrations (inline SVGs from demo pages)
   -------------------------------------------------------------------------- */
function getPluginIllustration(pluginId) {
  const illustrations = {
    'js-cloudimage-3d-view': `
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3D product visualization illustration">
        <!-- 3D cube wireframe -->
        <polygon points="100,20 160,55 160,105 100,140 40,105 40,55" stroke="url(#grad-3d)" stroke-width="2" opacity="0.3" fill="none"/>
        <line x1="100" y1="20" x2="100" y2="80" stroke="url(#grad-3d)" stroke-width="1.5" opacity="0.2"/>
        <line x1="160" y1="55" x2="100" y2="80" stroke="url(#grad-3d)" stroke-width="1.5" opacity="0.2"/>
        <line x1="40" y1="55" x2="100" y2="80" stroke="url(#grad-3d)" stroke-width="1.5" opacity="0.2"/>
        <!-- Front faces with fill -->
        <polygon points="100,80 160,55 160,105 100,140" fill="url(#grad-3d)" opacity="0.08"/>
        <polygon points="100,80 40,55 40,105 100,140" fill="url(#grad-3d)" opacity="0.05"/>
        <polygon points="100,20 160,55 100,80 40,55" fill="url(#grad-3d)" opacity="0.03"/>
        <!-- Rotation arc -->
        <path d="M65 130 A50 20 0 0 0 135 130" stroke="url(#grad-3d)" stroke-width="1.5" opacity="0.4" fill="none" stroke-dasharray="4 3"/>
        <path d="M130 126 L135 130 L128 133" stroke="url(#grad-3d)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
        <!-- Vertex dots -->
        <circle cx="100" cy="20" r="3" fill="url(#grad-3d)" opacity="0.6"/>
        <circle cx="160" cy="55" r="3" fill="url(#grad-3d)" opacity="0.6"/>
        <circle cx="40" cy="55" r="3" fill="url(#grad-3d)" opacity="0.6"/>
        <circle cx="100" cy="80" r="3" fill="url(#grad-3d)" opacity="0.8"/>
        <circle cx="160" cy="105" r="3" fill="url(#grad-3d)" opacity="0.6"/>
        <circle cx="40" cy="105" r="3" fill="url(#grad-3d)" opacity="0.6"/>
        <circle cx="100" cy="140" r="3" fill="url(#grad-3d)" opacity="0.6"/>
        <!-- Subtle pulse on center vertex -->
        <circle cx="100" cy="80" r="3" stroke="url(#grad-3d)" stroke-width="1" opacity="0.2">
          <animate attributeName="r" values="3;8;3" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite"/>
        </circle>
        <defs><linearGradient id="grad-3d" x1="0" y1="0" x2="200" y2="160"><stop stop-color="#e05cff"/><stop offset="1" stop-color="#2c99ff"/></linearGradient></defs>
      </svg>`,

    'js-cloudimage-360-view': `
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="360 degree rotation illustration">
        <circle cx="100" cy="80" r="70" stroke="url(#grad-360)" stroke-width="2" opacity="0.3"/>
        <circle cx="100" cy="80" r="50" stroke="url(#grad-360)" stroke-width="1.5" opacity="0.2"/>
        <ellipse cx="100" cy="80" rx="70" ry="25" stroke="url(#grad-360)" stroke-width="2" opacity="0.5"/>
        <path d="M100 10 L100 150" stroke="url(#grad-360)" stroke-width="1" opacity="0.15"/>
        <circle cx="100" cy="80" r="5" fill="url(#grad-360)"/>
        <path d="M120 74 L133 80 L120 86" stroke="url(#grad-360)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
        <path d="M80 74 L67 80 L80 86" stroke="url(#grad-360)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
        <defs><linearGradient id="grad-360" x1="0" y1="0" x2="200" y2="160"><stop stop-color="#2c99ff"/><stop offset="1" stop-color="#00d4aa"/></linearGradient></defs>
      </svg>`,

    'js-cloudimage-hotspot': `
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image hotspot illustration">
        <rect x="10" y="10" width="180" height="140" rx="8" stroke="url(#grad-hotspot)" stroke-width="2" opacity="0.3"/>
        <rect x="18" y="18" width="164" height="124" rx="4" stroke="url(#grad-hotspot)" stroke-width="1" opacity="0.12"/>
        <path d="M18 120 L55 85 L80 105 L115 65 L150 95 L182 75 L182 142 L18 142 Z" fill="url(#grad-hotspot)" opacity="0.06"/>
        <circle cx="50" cy="55" r="14" stroke="url(#grad-hotspot)" stroke-width="1" opacity="0.15">
          <animate attributeName="r" values="14;18;14" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.15;0.05;0.15" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="50" cy="55" r="8" fill="url(#grad-hotspot)" opacity="0.6"/>
        <circle cx="50" cy="55" r="3" fill="#fff" opacity="0.9"/>
        <circle cx="120" cy="45" r="14" stroke="url(#grad-hotspot)" stroke-width="1" opacity="0.15">
          <animate attributeName="r" values="14;18;14" dur="3s" begin="0.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.15;0.05;0.15" dur="3s" begin="0.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="120" cy="45" r="8" fill="url(#grad-hotspot)" opacity="0.6"/>
        <circle cx="120" cy="45" r="3" fill="#fff" opacity="0.9"/>
        <circle cx="150" cy="85" r="14" stroke="url(#grad-hotspot)" stroke-width="1" opacity="0.15">
          <animate attributeName="r" values="14;18;14" dur="3s" begin="1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.15;0.05;0.15" dur="3s" begin="1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="150" cy="85" r="8" fill="url(#grad-hotspot)" opacity="0.6"/>
        <circle cx="150" cy="85" r="3" fill="#fff" opacity="0.9"/>
        <circle cx="75" cy="100" r="14" stroke="url(#grad-hotspot)" stroke-width="1" opacity="0.15">
          <animate attributeName="r" values="14;18;14" dur="3s" begin="1.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.15;0.05;0.15" dur="3s" begin="1.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="75" cy="100" r="8" fill="url(#grad-hotspot)" opacity="0.6"/>
        <circle cx="75" cy="100" r="3" fill="#fff" opacity="0.9"/>
        <rect x="132" y="18" width="50" height="20" rx="4" fill="url(#grad-hotspot)" opacity="0.1" stroke="url(#grad-hotspot)" stroke-width="1" stroke-opacity="0.25"/>
        <line x1="140" y1="26" x2="170" y2="26" stroke="url(#grad-hotspot)" stroke-width="2" opacity="0.25" stroke-linecap="round"/>
        <line x1="140" y1="32" x2="160" y2="32" stroke="url(#grad-hotspot)" stroke-width="1.5" opacity="0.15" stroke-linecap="round"/>
        <line x1="50" y1="55" x2="75" y2="100" stroke="url(#grad-hotspot)" stroke-width="1" opacity="0.1" stroke-dasharray="3 3"/>
        <line x1="120" y1="45" x2="150" y2="85" stroke="url(#grad-hotspot)" stroke-width="1" opacity="0.1" stroke-dasharray="3 3"/>
        <defs><linearGradient id="grad-hotspot" x1="0" y1="0" x2="200" y2="160"><stop stop-color="#2c99ff"/><stop offset="1" stop-color="#00d4aa"/></linearGradient></defs>
      </svg>`,

    'js-cloudimage-before-after': `
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Before and after comparison illustration">
        <rect x="10" y="10" width="180" height="140" rx="8" stroke="url(#grad-ba)" stroke-width="2" opacity="0.3"/>
        <rect x="18" y="18" width="164" height="124" rx="4" stroke="url(#grad-ba)" stroke-width="1" opacity="0.12"/>
        <!-- Left side (before) — mountains landscape -->
        <clipPath id="clip-left"><rect x="18" y="18" width="82" height="124" rx="4"/></clipPath>
        <g clip-path="url(#clip-left)">
          <rect x="18" y="18" width="82" height="124" fill="url(#grad-ba)" opacity="0.04"/>
          <path d="M18 115 L45 85 L65 100 L100 70 L100 142 L18 142 Z" fill="url(#grad-ba)" opacity="0.1"/>
          <circle cx="45" cy="45" r="10" fill="url(#grad-ba)" opacity="0.08"/>
        </g>
        <!-- Right side (after) — same landscape, enhanced -->
        <clipPath id="clip-right"><rect x="100" y="18" width="82" height="124" rx="4"/></clipPath>
        <g clip-path="url(#clip-right)">
          <rect x="100" y="18" width="82" height="124" fill="url(#grad-ba)" opacity="0.08"/>
          <path d="M100 115 L125 85 L145 100 L182 70 L182 142 L100 142 Z" fill="url(#grad-ba)" opacity="0.18"/>
          <circle cx="130" cy="45" r="10" fill="url(#grad-ba)" opacity="0.15"/>
        </g>
        <!-- "Before" / "After" labels -->
        <text x="55" y="35" text-anchor="middle" fill="url(#grad-ba)" font-size="8" font-weight="600" opacity="0.3" font-family="Inter, sans-serif">BEFORE</text>
        <text x="145" y="35" text-anchor="middle" fill="url(#grad-ba)" font-size="8" font-weight="600" opacity="0.3" font-family="Inter, sans-serif">AFTER</text>
        <!-- Center divider -->
        <line x1="100" y1="22" x2="100" y2="138" stroke="url(#grad-ba)" stroke-width="2" opacity="0.5"/>
        <!-- Slider handle -->
        <circle cx="100" cy="80" r="12" fill="url(#grad-ba)" opacity="0.15" stroke="url(#grad-ba)" stroke-width="1.5" stroke-opacity="0.4"/>
        <circle cx="100" cy="80" r="8" fill="url(#grad-ba)" opacity="0.5"/>
        <path d="M95 77 L91 80 L95 83" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
        <path d="M105 77 L109 80 L105 83" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
        <!-- Subtle pulse on handle -->
        <circle cx="100" cy="80" r="12" stroke="url(#grad-ba)" stroke-width="1" opacity="0.15">
          <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.15;0.03;0.15" dur="3s" repeatCount="indefinite"/>
        </circle>
        <defs><linearGradient id="grad-ba" x1="0" y1="0" x2="200" y2="160"><stop stop-color="#2c99ff"/><stop offset="1" stop-color="#00d4aa"/></linearGradient></defs>
      </svg>`,
  };

  return illustrations[pluginId] || '';
}

/* --------------------------------------------------------------------------
   Card Rendering
   -------------------------------------------------------------------------- */
function createPluginCard(plugin) {
  const card = document.createElement('article');
  card.className = 'plugin-card fade-in-up';
  card.style.setProperty('--plugin-accent', plugin.accentColor);

  const featuresHTML = plugin.features
    .map((f) => `<span class="plugin-card__feature">${f}</span>`)
    .join('');

  card.innerHTML = `
    <div class="plugin-card__preview">
      ${getPluginIllustration(plugin.id)}
    </div>
    <div class="plugin-card__body">
      <div class="plugin-card__header">
        <div class="plugin-card__icon">
          <svg><use href="#${plugin.icon}"></use></svg>
        </div>
        <div class="plugin-card__title-group">
          <h3 class="plugin-card__name">${plugin.name}</h3>
          <span class="plugin-card__version">${plugin.id}</span>
        </div>
      </div>
      <p class="plugin-card__tagline">${plugin.tagline}</p>
      <p class="plugin-card__desc">${plugin.description}</p>
      <div class="plugin-card__features">${featuresHTML}</div>
      <div class="plugin-card__links">
        <a href="${plugin.links.demo}" target="_blank" rel="noopener noreferrer"
           class="plugin-card__link plugin-card__link--demo"
           aria-label="Live demo of ${plugin.name}">
          <svg><use href="#icon-external-link"></use></svg>
          Live Demo
        </a>
        <a href="${plugin.links.repo}" target="_blank" rel="noopener noreferrer"
           class="plugin-card__link plugin-card__link--outline"
           aria-label="GitHub repository for ${plugin.name}">
          <svg><use href="#icon-github"></use></svg>
          GitHub
        </a>
      </div>
    </div>
  `;

  return card;
}

function renderPlugins() {
  const grid = document.getElementById('plugins-grid');
  if (!grid) return;

  PLUGINS.forEach((plugin) => {
    grid.appendChild(createPluginCard(plugin));
  });
}

/* --------------------------------------------------------------------------
   Navigation Scroll Effect
   -------------------------------------------------------------------------- */
function initNavScroll() {
  const nav = document.querySelector('.nav');
  const hero = document.querySelector('.hero');
  if (!nav || !hero) return;

  const sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  hero.prepend(sentinel);

  const observer = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle('nav--scrolled', !entry.isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(sentinel);
}

/* --------------------------------------------------------------------------
   Scroll Reveal Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.fade-in-up').forEach((el) => {
      el.classList.add('fade-in-up--visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in-up').forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
    observer.observe(el);
  });
}

/* --------------------------------------------------------------------------
   Smooth Scroll for Anchor Links
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* --------------------------------------------------------------------------
   Init
   -------------------------------------------------------------------------- */
function init() {
  renderPlugins();
  initNavScroll();
  initSmoothScroll();

  // Delay scroll animations slightly so cards are in the DOM
  requestAnimationFrame(() => {
    initScrollAnimations();
  });
}

document.addEventListener('DOMContentLoaded', init);
