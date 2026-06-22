import { qs } from '../utils/dom.js';
import { state, i18n } from '../data/content.js';

const t = () => i18n[state.lang];
const fieldNames = ['name', 'email', 'message'];

/**
 * Activates real-time validation for the contact form.
 * The submit handler reuses the same field validators.
 */
export const initContact = () => {
  const form = qs('.contact-form');
  if (!form) return;
  bindFormEvents(form);
  form.onsubmit = submitForm;
};

/**
 * Connects input, blur and checkbox changes to validation.
 * This mirrors the instant feedback from the Angular form.
 */
const bindFormEvents = form => {
  fieldNames.forEach(name => bindTextField(form[name]));
  form.privacy.addEventListener('change', () => {
    validatePrivacy(form.privacy, true);
  });
};

/**
 * Adds live validation to one text field.
 * Input and blur both update the inline error message.
 */
const bindTextField = field => {
  field.addEventListener('input', () => validateField(field, true));
  field.addEventListener('blur', () => validateField(field, true));
};

/**
 * Handles submit and validates every field at once.
 * Success is shown only when all live checks are valid.
 */
const submitForm = event => {
  event.preventDefault();
  const form = event.target;
  const valid = validateForm(form);
  if (valid) showSuccess(form);
};

/**
 * Runs every validator and returns the combined result.
 * The same helper powers submit and visible field state.
 */
const validateForm = form => {
  const fieldsValid = fieldNames.every(name => {
    return validateField(form[name], true);
  });
  const privacyValid = validatePrivacy(form.privacy, true);
  return fieldsValid && privacyValid;
};

/**
 * Selects the right validation rule for a field.
 * Name, email and message keep their own error wording.
 */
const validateField = (field, touched) => {
  if (field.name === 'email') {
    return validateEmail(field, touched);
  }
  return validateText(field, touched);
};

/**
 * Checks name and message for real user input.
 * Empty values produce the matching translated message.
 */
const validateText = (field, touched) => {
  const valid = field.value.trim().length > 0;
  const message = textError(field.name);
  setFieldState(field, valid, touched, message);
  return valid;
};

/**
 * Checks the email value like the Angular reference.
 * It reports missing @, domain and ending issues live.
 */
const validateEmail = (field, touched) => {
  const error = getEmailError(field.value);
  const valid = !error;
  setFieldState(field, valid, touched, error);
  return valid;
};

/**
 * Validates the privacy checkbox in real time.
 * The global status area shows the translated privacy error.
 */
const validatePrivacy = (field, touched) => {
  const valid = field.checked;
  const message = valid || !touched ? '' : t().privacyError;
  setStatus(message, false);
  return valid;
};

/**
 * Writes field classes and inline error text.
 * Validators use it to keep styling and messages aligned.
 */
const setFieldState = (field, valid, touched, message) => {
  const wrapper = field.closest('.form-field');
  const error = wrapper.querySelector('.form-field__error');
  wrapper.classList.toggle('is-invalid', touched && !valid);
  wrapper.classList.toggle('is-valid', touched && valid);
  error.textContent = touched && !valid ? message : '';
};

/**
 * Returns the translated required message per field.
 * Name and message match the reference form wording.
 */
const textError = name => {
  if (name === 'name') return t().nameRequired;
  if (name === 'message') return t().messageRequired;
  return t().requiredError;
};

/**
 * Creates a detailed email error message.
 * It follows the same order as the Angular validator.
 */
const getEmailError = value => {
  const email = value.trim();
  if (!email) return t().emailRequired;
  if (!email.includes('@')) return t().emailMissingAt;
  return getEmailDomainError(email);
};

/**
 * Checks local part, domain and top-level ending.
 * GetEmailError calls it after an @ sign exists.
 */
const getEmailDomainError = email => {
  const parts = email.split('@');
  if (!parts[0]) return t().emailMissingLocal;
  if (parts.length !== 2 || !parts[1]) return t().emailInvalid;
  return getEmailEndingError(parts[1]);
};

/**
 * Checks dot structure and top-level domain length.
 * Domain validation is split out to keep functions small.
 */
const getEmailEndingError = domain => {
  const chunks = domain.split('.');
  const ending = chunks.at(-1) || '';
  if (!domain.includes('.')) return t().emailMissingDot;
  if (chunks.some(part => !part)) return t().emailInvalid;
  if (ending.length < 2) return t().emailMissingEnding;
  return '';
};

