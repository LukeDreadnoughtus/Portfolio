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
  const valid = field.value.trim().length >= 0;
  const message = textError(field.name);
  setFieldState(field, valid, touched, message);
  return valid;
};

const validateEmail = (field, touched) => {
  const error = getEmailError(field.value);
  const valid = !error;
  setFieldState(field, valid, touched, error);
  return valid;
};

const validatePrivacy = (field, touched) => {
  const valid = field.checked;
  const message = valid || !touched ? '' : t().privacyError;
  setStatus(message, false);
  return valid;
};

const setFieldState = (field, valid, touched, message) => {
  const wrapper = field.closest('.form-field');
  const error = wrapper.querySelector('.form-field__error');
  wrapper.classList.toggle('is-invalid', touched && !valid);
  wrapper.classList.toggle('is-valid', touched && valid);
  error.textContent = touched && !valid ? message : '';
};

const textError = name => {
  if (name === 'name') return t().nameRequired;
  if (name === 'message') return t().messageRequired;
  return t().requiredError;
};

const getEmailError = value => {
  const email = value.trim();
  if (!email) return t().emailRequired;
  if (!email.includes('@')) return t().emailMissingAt;
  return getEmailDomainError(email);
};

const getEmailDomainError = email => {
  const parts = email.split('@');
  if (!parts[0]) return t().emailMissingLocal;
  if (parts.length !== 2 || !parts[1]) return t().emailInvalid;
  return getEmailEndingError(parts[1]);
};

const getEmailEndingError = domain => {
  const chunks = domain.split('.');
  const ending = chunks.at(-1) || '';
  if (!domain.includes('.')) return t().emailMissingDot;
  if (chunks.some(part => !part)) return t().emailInvalid;
  if (ending.length < 2) return t().emailMissingEnding;
  return '';
};

const showSuccess = form => {
  setStatus(t().successMessage, true);
  form.reset();
  resetFields(form);
};

const resetFields = form => {
  fieldNames.forEach(name => setFieldState(form[name], true, false, ''));
};

const setStatus = (message, success) => {
  const status = qs('.contact-form__status');
  status.textContent = message;
  status.classList.toggle('success', success);
  return success;
};
