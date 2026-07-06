import {
  state,
  i18n,
  skills,
  projects
} from '../data/content.js';
import { logoTemplate } from './logoTemplates.js';

const t = () => i18n[state.lang];

const socialLinks = {
  github: 'https://github.com/LukeDreadnoughtus',
  linkedIn: 'https://www.linkedin.com/in/lukas-heller-40b577406/',
  email: 'mailto:luke.heller@dreadnoughtus.de'
};

export const aboutTemplate = () => `
<section id="about-me" class="about-section app-section">
  <div class="container about-section__grid">
    <div id="about-me-img" class="about-image">
      <div class="about-image__grid">
        <img class="about-image__pattern"
          src="assets/img/about-me/Capa_1.svg" alt="">
        <img class="about-image__photo"
          src="assets/img/about-me/profile-img.png"
          alt="Lukas Heller">
      </div>
    </div>
    <article>
      <h4 class="section-eyebrow karla">${t().aboutEyebrow}</h4>
      <div class="glass-card">
        <h3 class="about-card__title fira">${t().aboutTitle}</h3>
        <p class="about-card__intro karla">${t().aboutIntro}</p>
        <ul class="about-facts">
          ${fact('location.svg', t().location)}
          ${fact('cognition.svg', t().mind)}
          ${fact('quality.svg', t().quality)}
        </ul>
      </div>
    </article>
  </div>
</section>`;

const fact = (icon, text) => `
<li class="about-facts__item">
  <img class="about-facts__icon"
    src="assets/img/about-me/${icon}" alt="">
  <p class="karla">${text}</p>
</li>`;

export const skillsTemplate = () => `
<section id="skills" class="skills-section app-section">
  <div class="container">
    <h4 class="section-eyebrow karla">${t().technologies}</h4>
    <div class="skills-section__grid">
      <article class="skills-card glass-card">
        <h3 class="skills-card__title fira">${t().skillSet}</h3>
        <p class="skills-card__text karla">${t().skillsText}</p>
        ${skillQuestionTemplate()}
        <p class="skills-card__contact karla">${t().skillContact}</p>
        <a class="portfolio-btn scroll-btn karla" href="#contact">
          <span class="btn-text">${t().letsTalk}</span>
        </a>
      </article>
      <div class="skills-icons">
        ${skills.map(skillTemplate).join('')}
      </div>
    </div>
  </div>
</section>`;

const skillQuestionTemplate = () => {
  const accent = t().skillQuestionAccent;
  const base = t().skillQuestion.replace(accent, '');
  return `
<p class="skills-card__question fira">
  ${base}<span>${accent}</span>
</p>`;
};

const skillTemplate = ([icon, name]) => `
<div class="skills-icons__item ${futureClass(icon)}">
  <img class="skills-icons__icon"
    src="assets/img/technologies/${icon}.svg" alt="${name}">
  ${futureBubble(icon)}
  <p class="skills-icons__name fira">${name}</p>
</div>`;

const futureClass = icon => icon === 'growth-mindset'
  ? 'skills-icons__item--future'
  : '';

const futureBubble = icon => icon === 'growth-mindset'
  ? `<img class="skills-icons__bubble"
      src="assets/img/technologies/learning-interest.svg"
      alt="Future skills">`
  : '';

export const projectsTemplate = () => `
<section id="projects" class="projects-section app-section">
  <div class="container">
    <div class="projects-section__head">
      <h4 class="section-eyebrow karla">${t().portfolio}</h4>
      <h3 class="projects-section__title fira">
        ${t().featuredProjects}
      </h3>
      <p class="projects-section__copy karla">${t().projectsCopy}</p>
    </div>
    <div class="featured-projects">
      <div class="project-list">
        ${projects.map(projectRow).join('')}
      </div>
      ${projects.map(projectPreview).join('')}
    </div>
  </div>
</section>`;

const projectRow = (project, index) => `
<button class="project-card" data-project="${index}"
  data-preview="${index}">
  <span class="project-card__name fira">${project.title}</span>
  <span class="project-card__techs karla">
    ${project.tech.map(techItem).join('')}
  </span>
  <span class="project-card__arrow">↗</span>
</button>`;

const techItem = (tech, index) => `
${index ? '<i class="project-card__divider"></i>' : ''}
<span>${tech}</span>`;

const projectPreview = (project, index) => `
<div class="project-preview is-hidden"
  data-preview-image="${index}">
  <img class="project-preview__image"
    src="assets/img/featured-projects/${project.preview}"
    alt="${project.title}">
  <img class="project-preview__pattern"
    src="assets/img/featured-projects/Capa_1.svg" alt="">
</div>`;

export const contactTemplate = () => `
<section id="contact" class="contact-section app-section">
  <div class="container contact-section__grid">
    <div class="contact-copy">
      <h4 class="section-eyebrow karla">${t().contactHead}</h4>
      <h3 class="contact-copy__title fira">${t().contactTitle}</h3>
      <h4 class="contact-copy__subtitle fira">${t().contactSub}</h4>
      <p class="contact-copy__text karla">${t().contactText}</p>
      ${needDeveloperTemplate()}
    </div>
    <form class="contact-form" novalidate>
      ${field('name', t().name, t().namePh)}
      ${field('email', t().email, t().emailPh)}
      ${field('message', t().msg, t().msgPh)}
      ${privacyTemplate()}
      <p class="contact-form__status karla"></p>
      <button class="portfolio-btn contact-form__submit karla"
        type="submit">${t().send}</button>
    </form>
  </div>
</section>`;

const needDeveloperTemplate = () => `
<p class="contact-copy__text karla">
  <span>${t().needDev}</span>
  <a class="contact-copy__link"
    href="mailto:luke.heller@dreadnoughtus.de">${t().talk}</a>
</p>`;

const field = (name, label, placeholder) => `
<div class="form-field" data-field="${name}">
  <label class="form-field__label fira" for="${name}">${label}</label>
  <input class="form-field__input karla" id="${name}"
    name="${name}" type="${fieldType(name)}"
    autocomplete="${autoComplete(name)}"
    placeholder="${placeholder}">
  <span class="form-field__error karla"></span>
</div>`;

const fieldType = name => name === 'email' ? 'email' : 'text';

const autoComplete = name => {
  if (name === 'name') return 'name';
  if (name === 'email') return 'email';
  return 'off';
};

const privacyTemplate = () => `
<label class="privacy-field">
  <input class="privacy-field__checkbox" type="checkbox"
    name="privacy">
  <span class="privacy-field__box"></span>
  <span class="karla">${t().privacy}</span>
</label>`;

export const footerTemplate = () => `
<footer class="footer">
  <div class="container">
    <div class="footer__inner">
      <div class="footer__meta">
        ${logoTemplate()}
        <p class="karla">${t().footerRole}</p>
        <p class="karla">${t().footerLocation}</p>
      </div>
      <div class="footer__copyright">
        <span class="fira">©</span>
        <span class="fira">Lukas Heller</span>
      </div>
      <nav>
        <ul class="footer__links">
          ${footerLinksTemplate()}
        </ul>
      </nav>
    </div>
    <div class="footer__copyright-mobile">
      <span class="fira">©</span>
      <span class="fira">Lukas Heller 2026</span>
    </div>
  </div>
</footer>`;

const footerLinksTemplate = () => `
${footerLink(socialLinks.github, t().github, true)}
${footerLink(socialLinks.linkedIn, t().linkedIn, true)}
${footerLink(socialLinks.email, t().emailLink)}
${footerLink('#legal', t().legal)}
${footerLink('#privacy', t().privacyTitle)}`;

const footerLink = (href, label, blank = false) => {
  const target = blank ? ' target="_blank"' : '';
  return `
<li>
  <a class="footer__link karla" href="${href}"${target}>${label}</a>
</li>`;
};
