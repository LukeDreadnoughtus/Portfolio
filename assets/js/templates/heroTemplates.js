import { state, i18n } from '../data/content.js';

const t = () => i18n[state.lang];

const socialLinks = {
  github: 'https://github.com/LukeDreadnoughtus',
  linkedIn: 'https://www.linkedin.com/in/lukas-heller-40b577406/',
  email: 'mailto:luke.heller@dreadnoughtus.de'
};

/**
 * Builds the first viewport section.
 * It combines translated CTA text, bottom links and marquee.
 */
export const heroTemplate = () => `
<section id="home" class="hero-section">
  <div id="cursor"></div>
  <div class="container hero-section__container">
    <div class="hero-section__title-box">
      <h2 class="hero-section__role fira">${t().role}</h2>
      <h1 class="hero-section__name karla">Lukas Heller</h1>
      <div class="hero-section__actions">
        ${heroAction('#projects', t().work)}
        ${heroAction('#contact', t().contact)}
      </div>
    </div>
  </div>
  ${heroBottomTemplate()}
  ${marqueeTemplate()}
</section>`;

/**
 * Creates one hero call-to-action link.
 * HeroTemplate uses it for work and contact buttons.
 */
const heroAction = (href, label) => `
<a class="portfolio-btn scroll-btn karla" href="${href}">
  <span class="btn-text">${label}</span>
</a>`;

/**
 * Builds the bottom hero rails and social links.
 * It mirrors the Angular layout with separate side blocks.
 */
const heroBottomTemplate = () => `
<div class="container hero-bottom">
  <div class="hero-bottom__side">
    <a class="hero-bottom__direction" href="#about-me">
      ${downArrow()}
    </a>
    <div class="hero-bottom__line--nav"></div>
  </div>
  <div class="hero-bottom__side">
    <a class="hero-bottom__email karla"
      href="mailto:luke.heller@dreadnoughtus.de">
      luke.heller@dreadnoughtus.de
    </a>
    <div class="hero-socials">
      ${socialIcon('Github.png', socialLinks.github, t().github)}
      ${socialIcon('Linkedin.png', socialLinks.linkedIn, t().linkedIn)}
      ${socialIcon('mail.png', socialLinks.email, t().emailLink)}
    </div>
    <div class="hero-bottom__line--social"></div>
  </div>
</div>`;

/**
 * Returns the arrow icon for hero scroll navigation.
 * It is separated so the hero-bottom markup stays readable.
 */
const downArrow = () => `
<svg class="hero-bottom__arrow" viewBox="0 -960 960 960"
  width="20" height="20" fill="#fff">
  <path d="M480-96 216-360l51-51 177 177v-630h72v630l177-177 51 51L480-96Z"/>
</svg>`;

/**
 * Creates one social link inside the hero rail.
 * The target value depends on whether it opens an external page.
 */
const socialIcon = (file, href, label) => {
  const target = href.startsWith('http') ? '_blank' : '_self';
  return `
<a class="hero-socials__link" href="${href}" target="${target}">
  <img class="hero-socials__icon"
    src="assets/img/hero-section/${file}" alt="${label}">
</a>`;
};

/**
 * Builds the moving hero marquee from translated labels.
 * Three groups are rendered to keep the visual loop continuous.
 */
const marqueeTemplate = () => `
<div class="marquee">
  ${[1, 2, 3].map(marqueeGroup).join('')}
</div>`;

/**
 * Returns one marquee group.
 * MarqueeTemplate repeats this group for the endless strip.
 */
const marqueeGroup = () => `
<div class="marquee__group">
  ${t().marquee.map(marqueeItem).join('')}
</div>`;

/**
 * Creates one marquee text item and dot separator.
 * It receives translated labels from the current i18n state.
 */
const marqueeItem = text => `
<span class="marquee__text karla">${text}</span>
<span class="marquee__dot"></span>`;
