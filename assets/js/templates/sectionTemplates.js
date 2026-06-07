import {
  state,
  i18n,
  skills,
  projects
} from '../data/content.js';
import { logoTemplate } from './logoTemplates.js';

const t = () => i18n[state.lang];

const socialLinks = {
  github: 'https://github.com/LukeDreadnoughtus',
  linkedIn: 'https://www.linkedin.com/in/lukas-heller-40b577406/',
  email: 'mailto:luke.heller@dreadnoughtus.de'
};

/**
 * Builds the about section.
 * All visible copy is read from the current language object.
 */
export const aboutTemplate = () => `
<section id="about-me" class="about-section app-section">
  <div class="container about-section__grid">
    <div id="about-me-img" class="about-image">
      <div class="about-image__grid">
        <img class="about-image__pattern"
          src="assets/img/about-me/Capa_1.svg" alt="">
        <img class="about-image__photo"
          src="assets/img/about-me/profile-img.png"
          alt="Lukas Heller">
      </div>
    </div>
    <article>
      <h4 class="section-eyebrow karla">${t().aboutEyebrow}</h4>
      <div class="glass-card">
        <h3 class="about-card__title fira">${t().aboutTitle}</h3>
        <p class="about-card__intro karla">${t().aboutIntro}</p>
        <ul class="about-facts">
          ${fact('location.svg', t().location)}
          ${fact('cognition.svg', t().mind)}
          ${fact('quality.svg', t().quality)}
        </ul>
      </div>
    </article>
  </div>
</section>`;

/**
 * Creates one about fact row.
 * AboutTemplate supplies translated text and matching icon names.
 */
const fact = (icon, text) => `
<li class="about-facts__item">
  <img class="about-facts__icon"
    src="assets/img/about-me/${icon}" alt="">
  <p class="karla">${text}</p>
</li>`;
