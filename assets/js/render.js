import{qs,setHtml}from'./utils/dom.js';
import{headerTemplate,appTemplate}from'./templates/layoutTemplates.js';
import{initNavigation}from'./features/navigation.js';
import{initProjects}from'./features/projects.js';
import{initCarousel}from'./features/carousel.js';
import{initContact}from'./features/contact.js';
import{routeHash}from'./features/legal.js';
import{initCursor}from'./features/cursor.js';
/**
 * Renders header and landing content from isolated template files.
 * After each render, feature modules are reconnected to the new markup.
 */
export const render=()=>{setHtml(qs('#site-header'),headerTemplate());setHtml(qs('#app'),appTemplate());initAll();routeHash();};
/**
 * Collects every feature initializer used after template replacement.
 * Language changes and legal-page restores reuse the same function.
 */
export const initAll=()=>{initNavigation();initProjects();initCarousel();initContact();initCursor();};
