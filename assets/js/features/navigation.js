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

/**
 * Stores the new language and rerenders the application.
 * Rendering also reconnects navigation events afterwards.
 */
const changeLanguage = language => {
  state.lang = language;
  render();
};

/**
 * Connects the burger button with the mobile menu opener.
 * Missing header markup is ignored safely.
 */
const bindBurger = () => {
  const burgerButton = qs('.burger-btn');
  if (!burgerButton) return;

  burgerButton.onclick = openMenu;
};


/**
 * Closes the mobile menu when the backdrop itself is clicked.
 * Clicks inside the navigation panel do not trigger this handler.
 */
const bindBackdrop = () => {
  const backdrop = qs('.mobile-backdrop');
  if (!backdrop) return;

  backdrop.onclick = event => {
    const clickedBackdrop = event.target === backdrop;
    if (clickedBackdrop) closeMenu();
  };
};
