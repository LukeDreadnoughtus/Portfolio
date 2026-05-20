import{render,initAll}from'./render.js';
import{initLegalRouting}from'./features/legal.js';
import{observeNavigation}from'./features/navigation.js';
/**
 * Boots the static portfolio once the DOM is ready.
 * Rendering happens first, then route and scroll observers are attached.
 */
const boot=()=>{render();initLegalRouting(initAll);observeNavigation();};
document.addEventListener('DOMContentLoaded',boot);
