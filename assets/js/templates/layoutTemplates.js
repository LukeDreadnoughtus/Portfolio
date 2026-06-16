import { state, i18n } from '../data/content.js';
import { carouselTemplate } from './carouselTemplates.js';
import { heroTemplate } from './heroTemplates.js';
import { logoTemplate } from './logoTemplates.js';
import {
  aboutTemplate,
  skillsTemplate,
  projectsTemplate,
  contactTemplate,
  footerTemplate
} from './sectionTemplates.js';

const t = () => i18n[state.lang];

/**
 * Builds one header navigation link.
 * Header and mobile menu reuse it after each language render.
 */
const nav = (label, id) => `
<a class="header__nav-link fira" href="#${id}"
  data-nav="${id}">${label}</a>`;

/**
 * Creates the language toggle buttons.
 * Navigation.js reads data-lang and re-renders all templates.
 */
const lang = () => `
<li class="language-toggle">
  <button class="language-toggle__btn fira"
    data-lang="en">EN</button>
  <button class="language-toggle__btn fira"
    data-lang="de">DE</button>
</li>`;

/**
 * Renders the fixed page header.
 * It connects nav labels to the current i18n dictionary.
 */
export const headerTemplate = () => `
<div class="container header__inner">
  <nav class="desktop-nav">
    <ul class="header__nav-list">
      ${lang()}
      <li>${nav(t().nav[0], 'about-me')}</li>
      <li>${nav(t().nav[1], 'skills')}</li>
      <li>${nav(t().nav[2], 'projects')}</li>
    </ul>
  </nav>
  ${logoTemplate()}
  <button class="burger-btn" aria-label="Open menu">
    ${burgerIcon()}
  </button>
</div>
${mobileMenuTemplate()}`;

/**
 * Builds the mobile navigation panel.
 * Header rendering keeps desktop and mobile labels in sync.
 */
const mobileMenuTemplate = () => `
<div class="mobile-backdrop">
  <div class="mobile-panel">
    <nav>
      <ul class="header__nav-list">
        ${lang()}
        <li>${nav(t().nav[0], 'about-me-img')}</li>
        <li>${nav(t().nav[1], 'skills')}</li>
        <li>${nav(t().nav[2], 'projects')}</li>
      </ul>
    </nav>
  </div>
</div>`;

/**
 * Returns the burger svg used by the header button.
 * Keeping it isolated avoids long lines in headerTemplate.
 */
const burgerIcon = () => `
<svg viewBox="0 0 48 48">
  <path d="M8.8 34.5h30.4M8.8 24h30.4M8.8 14.2h30.4"
    stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>`;

/**
 * Collects all landing page sections.
 * Render.js injects this template and initializes feature modules.
 */
export const appTemplate = () => `
${heroTemplate()}
${aboutTemplate()}
${skillsTemplate()}
${projectsTemplate()}
${carouselTemplate()}
${contactTemplate()}
${footerTemplate()}`;
