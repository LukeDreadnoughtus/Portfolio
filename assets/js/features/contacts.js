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

const submitForm = event => {
  event.preventDefault();
  const form = event.target;
  const valid = validateForm(form);
  if (valid) showSuccess(form);
};

const validateForm = form => {
  const fieldsValid = fieldNames.every(name => {
    return validateField(form[name], true);
  });
  const privacyValid = validatePrivacy(form.privacy, true);
  return fieldsValid && privacyValid;
};

const validateField = (field, touched) => {
  if (field.name === 'email') {
    return validateEmail(field, touched);
  }
  return validateText(field, touched);
};


const validateText = (field, touched) => {
  const valid = field.value.trim().length > 0;
  const message = textError(field.name);
  setFieldState(field, valid, touched, message);
  return valid;
};