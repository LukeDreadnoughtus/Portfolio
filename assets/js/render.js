import {
  qs,
  setHtml
} from './utils/dom.js';
import {
  headerTemplate,
  appTemplate
} from './templates/layoutTemplates.js';
import {
  initNavigation
} from './features/navigation.js';
import {
  routeHash
} from './features/legal.js';
import {
  initCursor
} from './features/cursor.js';

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
  initCursor();
};
