
import { render, initAll } from './render.js';
import { initLegalRouting } from './features/legal.js';
import { observeNavigation } from './features/navigation.js';
import { initSmoothScroll } from './features/smoothScroll.js';

const boot = () => {
  render();
  initLegalRouting(initAll);
  observeNavigation();
  initSmoothScroll();
};

document.addEventListener('DOMContentLoaded', boot);
