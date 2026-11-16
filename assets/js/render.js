
import {
  qs,
  setHtml
} from './utils/dom.js';

import { 
  initCarousel 
} from './features/carousel.js';

import {
  headerTemplate,
  appTemplate
} from './templates/layoutTemplates.js';

import {
  initNavigation
} from './features/navigation.js';

import {
  initProjects
} from './features/projects.js';

import {
  routeHash
} from './features/legal.js';

import {
  initCursor
} from './features/cursor.js';

import {
  initContact
} from './features/contact.js';

export const render = () => {
  setHtml(
    qs('#site-header'),
    headerTemplate()
  );
  setHtml(
    qs('#app'),
    appTemplate()
  );
  initAll();
  routeHash();
};

export const initAll = () => {
  initNavigation();
  initProjects();
  initCursor();
  initContact();
  initCarousel();
};
