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
