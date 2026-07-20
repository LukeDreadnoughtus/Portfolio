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

const dialogActions = project => `
<div class="dialog-actions">
  ${dialogLink(project.github, t().dialogGithub)}
  ${dialogLink(project.live, t().dialogLive)}
</div>`;


