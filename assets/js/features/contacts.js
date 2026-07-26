import { qs } from '../utils/dom.js';
import { state, i18n } from '../data/content.js';

const t = () => i18n[state.lang];
const fieldNames = ['name', 'email', 'message'];

export const initContact = () => {
  const form = qs('.contact-form');
  if (!form) return;
  bindFormEvents(form);
  form.onsubmit = submitForm;
};

const bindFormEvents = form => {
  fieldNames.forEach(name => bindTextField(form[name]));
  form.privacy.addEventListener('change', () => {
    validatePrivacy(form.privacy, true);
  });
};

const bindTextField = field => {
  field.addEventListener('input', () => validateField(field, true));
  field.addEventListener('blur', () => validateField(field, true));
};