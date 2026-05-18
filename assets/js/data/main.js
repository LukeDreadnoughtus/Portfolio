import{render,initAll}from'./render.js';
import{initLegalRouting}from'./features/legal.js';
import{observeNavigation}from'./features/navigation.js';
/**
 * Starts the static portfolio after the DOM is available.
 * It renders templates, activates routing and section observation.
 */
const boot=()=>{render();initLegalRouting(initAll);observeNavigation();};
document.addEventListener('DOMContentLoaded',boot);
