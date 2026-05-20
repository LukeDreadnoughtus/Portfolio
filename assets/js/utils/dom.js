/**
 * Returns the first matching element inside an optional parent.
 * Feature modules use it to keep DOM access compact and consistent.
 */
export const qs=(selector,parent=document)=>parent.querySelector(selector);
/**
 * Returns all matching elements as an array instead of a NodeList.
 * This helper keeps loops small across navigation, projects and carousel.
 */
export const qsa=(selector,parent=document)=>[...parent.querySelectorAll(selector)];
/**
 * Replaces a target element with trusted template HTML.
 * Templates live in separate files so behavior modules stay short.
 */
export const setHtml=(element,html)=>{if(element)element.innerHTML=html;};
/**
 * Toggles document body classes used for overlays and scroll locks.
 * Navigation and dialogs share this helper for consistent page state.
 */
export const bodyState=(name,active)=>document.body.classList.toggle(name,active);
