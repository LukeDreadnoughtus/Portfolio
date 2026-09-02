import { state } from '../data/content.js';
import { qs, qsa, bodyState } from '../utils/dom.js';
import { render } from '../render.js';

const ACTIVE_CLASS = 'active';
const MENU_OPEN_CLASS = 'open';
const BURGER_OPEN_CLASS = 'is-open';

/**
 * Activates language buttons, burger menu and mobile navigation events.
 * It runs after every template render because header markup is replaced.
 */

import { state } from '../data/content.js';
import { qs, qsa, bodyState } from '../utils/dom.js';
import { render } from '../render.js';

const ACTIVE_CLASS = 'active';
const MENU_OPEN_CLASS = 'open';
const BURGER_OPEN_CLASS = 'is-open';

/**
 * Marks the button for the currently selected language as active.
 * The state language is compared with each button data attribute.
 */
const markLanguage = () => {
  const languageButtons = qsa('[data-lang]');

  languageButtons.forEach(button => {
    const isActive = button.dataset.lang === state.lang;
    button.classList.toggle(ACTIVE_CLASS, isActive);
  });
};

/**
 * Connects every language button with the language switch handler.
 * The selected language is read from the button data attribute.
 */
const bindLanguage = () => {
  const languageButtons = qsa('[data-lang]');

  languageButtons.forEach(button => {
    const language = button.dataset.lang;
    button.onclick = () => changeLanguage(language);
  });
};