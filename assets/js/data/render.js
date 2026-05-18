import{qs,setHtml}from'./utils/dom.js';
import{headerTemplate,appTemplate}from'./templates/layoutTemplates.js';
import{initNavigation}from'./features/navigation.js';
import{initProjects}from'./features/projects.js';
import{initCarousel}from'./features/carousel.js';
import{initContact}from'./features/contact.js';
import{routeHash}from'./features/legal.js';
/**
 * Builds the complete interface from templates.
 * Feature modules are re-initialized after each language render.
 */
export const render=()=>{setHtml(qs('#site-header'),headerTemplate());setHtml(qs('#app'),appTemplate());initAll();routeHash();};
/**
 * Collects all feature initializers in one place.
 * This makes re-rendering safe after language changes.
 */
export const initAll=()=>{initNavigation();initProjects();initCarousel();initContact();};
