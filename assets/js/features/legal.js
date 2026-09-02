import { qs, setHtml } from '../utils/dom.js';
import { state, i18n } from '../data/content.js';
import { appTemplate } from '../templates/layoutTemplates.js';

let afterRestore = () => {};
const t = () => i18n[state.lang];

/**
 * Installs hash routing for legal and privacy pseudo pages.
 * Regular section hashes keep the portfolio landing page active.
 */
export const initLegalRouting = callback => {
  afterRestore = callback;
  window.onhashchange = routeHash;
  routeHash();
};

/**
 * Switches the main area between legal, privacy and portfolio content.
 * The current URL hash decides which page should be rendered.
 */
export const routeHash = () => {
  const hash = location.hash;

  if (hash === '#legal') {
    legalPage();
    return;
  }

  if (hash === '#privacy') {
    privacyPage();
    return;
  }

  restoreApp();
};

/**
 * Renders the translated legal notice page.
 * Footer links reach this page through the hash router.
 */
const legalPage = () => {
  const app = qs('#app');
  const content = page(t().legal, t().legalText);
  setHtml(app, content);
};

/**
 * Renders the translated privacy policy page.
 * It shares the generic legal page layout helper.
 */
const privacyPage = () => {
  const app = qs('#app');
  const content = page(t().privacyTitle, t().privacyText);
  setHtml(app, content);
};

/**
 * Restores the portfolio landing page when leaving legal hashes.
 * Feature modules are reconnected through the stored callback.
 */
const restoreApp = () => {
  const home = qs('#home');
  if (home) return;

  const app = qs('#app');
  setHtml(app, appTemplate());
  afterRestore();
};

/**
 * Builds the shared static layout for legal information pages.
 * Legal notice and privacy policy only provide different text values.
 */
const page = (title, text) => `
<section class="legal-page">
  <div class="container">
    <h1 class="legal-page__title fira">${title}</h1>
    <p class="legal-page__copy karla">${text}</p> 
    <p>
      <a class="portfolio-btn karla" href="#home">${t().back}</a>
    </p>
  </div>
</section>`;
