import{qs,setHtml}from'../utils/dom.js';
import{state,i18n}from'../data/content.js';
import{appTemplate}from'../templates/layoutTemplates.js';
let afterRestore=()=>{};
/**
 * Watches hash changes for legal and privacy pseudo pages.
 * Normal section hashes keep the main landing page visible.
 */
export const initLegalRouting=callback=>{afterRestore=callback;window.onhashchange=routeHash;routeHash();};
/**
 * Swaps main content for legal text when needed.
 * It restores the normal app for all other hash targets.
 */
export const routeHash=()=>{const hash=location.hash;hash==='#legal'?legalPage():hash==='#privacy'?privacyPage():restoreApp();};
const legalPage=()=>setHtml(qs('#app'),page('Legal Notice','Responsible for this portfolio: Lukas Heller. Contact: luke.heller@dreadnoughtus.de.'));
const privacyPage=()=>setHtml(qs('#app'),page(i18n[state.lang].privacyTitle,'This static demo does not store messages. Form data stays in your browser unless you connect a backend.'));
const restoreApp=()=>{if(!qs('#home')){setHtml(qs('#app'),appTemplate());afterRestore();}};
const page=(title,text)=>`<section class="legal-page"><div class="container"><h1>${title}</h1><p>${text}</p><p><a class="btn" href="#home">Back</a></p></div></section>`;
