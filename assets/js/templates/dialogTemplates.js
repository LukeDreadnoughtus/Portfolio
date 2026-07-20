import {
  state,
  i18n,
  projects
} from '../data/content.js';

const local = value => value?.[state.lang] ?? value;

const iconFile = name => name === 'Firebase'
  ? 'Firebase.svg'
  : name === 'CSS'
    ? 'CSS.svg'
    : name === 'HTML'
      ? 'HTML.svg'
      : 'JavaScript.svg';

      const skill = name => `
<span class="used-skills__item karla">
  <img class="used-skills__icon"
    src="assets/img/dialog/${iconFile(name)}"
    alt="${name}">
  ${name}
</span>`;

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