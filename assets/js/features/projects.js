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

/**
 * Connects click and hover behavior for one project row.
 * Data attributes provide the project index and preview reference.
 */
const bindRow = row => {
  const projectIndex = Number(row.dataset.project);

  row.onclick = () => openProject(projectIndex);
  row.onmouseenter = () => showPreview(row);
  row.onmouseleave = hidePreviews;
};

/**
 * Shows the preview image that belongs to the hovered project row.
 * Existing previews are hidden first so only one image is visible.
 */
const showPreview = row => {
  const previewId = row.dataset.preview;
  const previewImage = qs(`[data-preview-image="${previewId}"]`);

  hidePreviews();
  previewImage?.classList.remove(HIDDEN_CLASS);
};

/**
 * Hides every project preview image.
 * It is used during initialization and when hover ends.
 */
const hidePreviews = () => {
  const previewImages = qsa('[data-preview-image]');
  previewImages.forEach(image => image.classList.add(HIDDEN_CLASS));
};

/**
 * Opens the selected project and stores its index globally.
 * The stored index is later reused by the next-project button.
 */
const openProject = index => {
  state.projectIndex = index;
  renderProjectDialog(index);
  showDialog();
  bindDialog();
};

/**
 * Renders the selected project content into the dialog container.
 * Keeping rendering separate makes openProject easier to read.
 */
const renderProjectDialog = index => {
  const dialog = qs('#project-dialog');
  const dialogContent = projectDialogTemplate(index);
  setHtml(dialog, dialogContent);
};

/**
 * Makes the project dialog visible and locks the page behind it.
 * The aria state is updated together with the visual state.
 */
const showDialog = () => {
  const dialog = qs('#project-dialog');

  dialog.classList.add(OPEN_CLASS);
  dialog.setAttribute('aria-hidden', 'false');
  bodyState('dialog-open', true);
};,

/**
 * Connects close, next-project and backdrop events in the dialog.
 * It runs after each dialog render because its inner markup changes.
 */
const bindDialog = () => {
  const closeButton = qs('.project-dialog__close');
  const nextButton = qs('.next-project');
  const dialog = qs('#project-dialog');

  closeButton.onclick = closeDialog;
  nextButton.onclick = nextProject;
  dialog.onclick = closeBackdrop;
};

/**
 * Closes the dialog only when the outer backdrop was clicked.
 * Clicks on project content inside the dialog stay untouched.
 */
const closeBackdrop = event => {
  const clickedBackdrop = event.target.id === 'project-dialog';
  if (clickedBackdrop) closeDialog();
};

/**
 * Calculates the next project index and opens that project.
 * Modulo wraps the last project back to the first one.
 */
const nextProject = () => {
  const nextIndex = (state.projectIndex + 1) % projects.length;
  openProject(nextIndex);
};