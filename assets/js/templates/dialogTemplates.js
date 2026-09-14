import {
  state,
  i18n,
  projects
} from '../data/content.js';

const t = () => i18n[state.lang];

const local = value => value?.[state.lang] ?? value;

const iconFile = name => name === 'Firebase'
  ? 'Firebase.svg'
  : name === 'CSS'
    ? 'CSS.svg'
    : name === 'HTML'
      ? 'HTML.svg'
      : 'JavaScript.svg';

/**
 * Builds one used-skill badge for the project dialog.
 * ProjectDialogTemplate maps the current project tech list to it.
 */
const skill = name => `
<span class="used-skills__item karla">
  <img class="used-skills__icon"
    src="assets/img/dialog/${iconFile(name)}"
    alt="${name}">
  ${name}
</span>`;

/**
 * Creates the complete project dialog markup.
 * Projects.js injects it and binds close and next-project actions.
 */
export const projectDialogTemplate = index => {
  const project = projects[index];
  return `
<div class="project-dialog__card" role="dialog"
  aria-modal="true">
  ${closeButton()}
  <div class="project-dialog__wrapper">
    <div class="project-dialog__grid">
      ${dialogInfo(project, index)}
      ${dialogImage(project)}
    </div>
    <button class="next-project karla">
      ${t().nextProject}
    </button>
  </div>
</div>`;
};

/**
 * Builds the textual dialog column.
 * It reads translated project subtitle and description values.
 */
const dialogInfo = (project, index) => `
<div class="project-dialog__info">
  <div class="project-dialog__number fira">0${index + 1}</div>
  <h2 class="project-dialog__title fira">${project.title}</h2>
  <h3 class="project-dialog__subtitle fira">
    ${local(project.subtitle)}
  </h3>
  <p class="project-dialog__copy karla">
    ${local(project.desc)}
  </p>
  <div class="used-skills">
    ${project.tech.map(skill).join('')}
  </div>
  ${dialogActions(project)}
</div>`;

/**
 * Builds the external dialog action buttons.
 * Button labels are translated through the shared i18n state.
 */
const dialogActions = project => `
<div class="dialog-actions">
  ${dialogLink(project.github, t().dialogGithub)}
  ${dialogLink(project.live, t().dialogLive)}
</div>`;

/**
 * Creates one project dialog link.
 * DialogActions uses it for GitHub and live test buttons.
 */
const dialogLink = (href, label) => `
<a class="portfolio-btn dialog-actions__link karla"
  href="${href}" target="_blank">
  ${label}
  <img src="assets/img/dialog/arrow_outward.svg" alt="">
</a>`;

/**
 * Returns the project screenshot figure.
 * ProjectDialogTemplate places it beside the translated text column.
 */
const dialogImage = project => `
<figure class="project-dialog__figure">
  <img class="project-dialog__image"
    src="assets/img/dialog/${project.image}"
    alt="${project.title}">
</figure>`;

/**
 * Builds the close button for the dialog.
 * Its aria label switches with the active language.
 */
const closeButton = () => `
<button class="project-dialog__close"
  aria-label="${t().closeDialog}">×</button>`;
