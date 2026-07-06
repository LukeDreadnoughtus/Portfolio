import{render,initAll}from'./render.js';
import{initLegalRouting}from'./features/legal.js';
import{observeNavigation}from'./features/navigation.js';

const boot=()=>{render();initLegalRouting(initAll);observeNavigation();};
document.addEventListener('DOMContentLoaded',boot);
