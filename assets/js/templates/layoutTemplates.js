import { state, i18n } from '../data/content.js';
import { carouselTemplate } from './carouselTemplates.js';
import { heroTemplate } from './heroTemplates.js';
import { logoTemplate } from './logoTemplates.js';
import {
  aboutTemplate,
  skillsTemplate,
  footerTemplate
} from './sectionTemplates.js';

const t = () => i18n[state.lang];

const nav = (label, id) => `
<a class="header__nav-link fira" href="#${id}"
  data-nav="${id}">${label}</a>`;

const lang = () => `
<li class="language-toggle">
  <button class="language-toggle__btn fira"
    data-lang="en">EN</button>
  <button class="language-toggle__btn fira"
    data-lang="de">DE</button>
</li>`;

export const headerTemplate = () => `
<div class="container header__inner">
  <nav class="desktop-nav">
    <ul class="header__nav-list">
      ${lang()}
      <li>${nav(t().nav[0], 'about-me')}</li>
      <li>${nav(t().nav[1], 'skills')}</li>
    </ul>
  </nav>
  ${logoTemplate()}
  <button class="burger-btn" aria-label="Open menu">
    ${burgerIcon()}
  </button>
</div>
${mobileMenuTemplate()}`;

const mobileMenuTemplate = () => `
<div class="mobile-backdrop">
  <div class="mobile-panel">
    <nav>
      <ul class="header__nav-list">
        ${lang()}
        <li>${nav(t().nav[0], 'about-me-img')}</li>
        <li>${nav(t().nav[1], 'skills')}</li>
      </ul>
    </nav>
  </div>
</div>`;

const burgerIcon = () => `
<svg viewBox="0 0 48 48">
  <path d="M8.8 34.5h30.4M8.8 24h30.4M8.8 14.2h30.4"
    stroke="white" stroke-width="2"
    stroke-linecap="round"/>
</svg>`;

export const appTemplate = () => `
${heroTemplate()}
${aboutTemplate()}
${skillsTemplate()}
${carouselTemplate()}
${footerTemplate()}`;
