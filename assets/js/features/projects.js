import { state, projects } from '../data/content.js';
import { qs, qsa, setHtml, bodyState } from '../utils/dom.js';
import { projectDialogTemplate } from '../templates/dialogTemplates.js';

const HIDDEN_CLASS = 'is-hidden';
const OPEN_CLASS = 'open';

/**
 * Connects project rows with hover previews and dialog opening.
 * Preview images start hidden until a project row is hovered.
 */
export const initProjects = () => {
  bindRows();
  hidePreviews();
};

/**
 * Finds all project rows and gives each one its own event handlers.
 * Row-specific behavior stays inside the bindRow helper.
 */
const bindRows = () => {
  const projectRows = qsa('[data-project]');
  projectRows.forEach(row => bindRow(row));
};
