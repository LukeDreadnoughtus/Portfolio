import { qs, setHtml } from '../utils/dom.js';
import { state, i18n } from '../data/content.js';
import { appTemplate } from '../templates/layoutTemplates.js';

let afterRestore = () => {};
const t = () => i18n[state.lang];

export const initLegalRouting = callback => {
  afterRestore = callback;
  window.onhashchange = routeHash;
  routeHash();
};

export const routeHash = () => {
  location.hash === '#legal'
    ? legalPage()
    : location.hash === '#privacy'
      ? legalPage()
      : restoreApp();
};

const legalPage = () => setHtml(
  qs('#app'),
  page(t().legal, t().legalText)
);

const privacyPage = () => setHtml(
  qs('#app'),
  page(t().privacyTitle, t().privacyText)
);

const restoreApp = () => {
  if (!qs('#home')) {
    setHtml(qs('#app'), appTemplate());
    afterRestore();
  }
};

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
