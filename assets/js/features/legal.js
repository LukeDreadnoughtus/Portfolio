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
 * Switches only the main area for legal content and restores it later.
 * This keeps the project a pure static HTML/CSS/JS page.
 */
export const routeHash = () => {
  location.hash === '#legal'
    ? legalPage()
    : location.hash === '#privacy'
      ? privacyPage()
      : restoreApp();
};

/**
 * Renders the translated legal notice page.
 * Footer links reach this page through the hash router.
 */
const legalPage = () => setHtml(
  qs('#app'),
  page(t().legal, t().legalText)
);

/**
 * Renders the translated privacy policy page.
 * It shares the generic legal page layout helper.
 */
const privacyPage = () => setHtml(
  qs('#app'),
  page(t().privacyTitle, t().privacyText)
);

/**
 * Restores the portfolio landing page when leaving legal hashes.
 * Feature modules are reconnected through the stored callback.
 */
const restoreApp = () => {
  if (!qs('#home')) {
    setHtml(qs('#app'), appTemplate());
    afterRestore();
  }
};

/**
 * Builds one simple static text page.
 * Both legal and privacy screens use this template.
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
