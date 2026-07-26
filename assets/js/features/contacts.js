import { qs } from '../utils/dom.js';
import { state, i18n } from '../data/content.js';

const t = () => i18n[state.lang];
const fieldNames = ['name', 'email', 'message'];

const bindFormEvents = form => {
  fieldNames.forEach(name => bindTextField(form[name]));
  form.privacy.addEventListener('change', () => {
    validatePrivacy(form.privacy, true);
  });
};