import{qs,setHtml}from'../utils/dom.js';
import{state,i18n}from'../data/content.js';
import{appTemplate}from'../templates/layoutTemplates.js';
let afterRestore=()=>{};
/**
 * Installs hash routing for legal and privacy pseudo pages.
 * Regular section hashes keep the portfolio landing page active.
 */
export const initLegalRouting=callback=>{afterRestore=callback;window.onhashchange=routeHash;routeHash();};
/**
 * Switches only the main area for legal content and restores it later.
 * This keeps the project a pure static HTML/CSS/JS page.
 */
export const routeHash=()=>{location.hash==='#legal'?legalPage():location.hash==='#privacy'?privacyPage():restoreApp();};
const legalPage=()=>setHtml(qs('#app'),page(i18n[state.lang].legal,'Responsible for this portfolio: Lukas Heller. Contact: luke.heller@dreadnoughtus.de.'));
const privacyPage=()=>setHtml(qs('#app'),page(i18n[state.lang].privacyTitle,'This static demo does not store submitted messages. Form input stays in the browser unless you connect a backend.'));
const restoreApp=()=>{if(!qs('#home')){setHtml(qs('#app'),appTemplate());afterRestore();}};
const page=(title,text)=>`<section class="legal-page"><div class="container"><h1 class="legal-page__title fira">${title}</h1><p class="legal-page__copy karla">${text}</p><p><a class="portfolio-btn karla" href="#home">Back</a></p></div></section>`;
