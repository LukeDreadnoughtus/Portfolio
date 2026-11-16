
import { qs } from '../utils/dom.js';
import { state, i18n } from '../data/content.js';

const t = () => i18n[state.lang];
const fieldNames = ['name', 'email', 'message'];

/**
 * Initializes the contact form and registers its events.
 */
export const initContact = () => {
  const form = qs('.contact-form');

  if (!form) {
    console.error('[Contact] Kontaktformular nicht gefunden!');
    return;
  }

  console.log('[Contact] Kontaktformular gefunden');

  if (form.dataset.initialized === 'true') {
    console.log('[Contact] Formular bereits initialisiert');
    return;
  }

  form.dataset.initialized = 'true';

  bindFormEvents(form);
  form.addEventListener('submit', submitForm);

  console.log('[Contact] Submit-Listener registriert');
};

/**
 * Connects input, blur and checkbox changes to validation.
 */
const bindFormEvents = form => {
  fieldNames.forEach(name => bindTextField(form.elements.namedItem(name)));

  form.elements.namedItem('privacy').addEventListener('change', () => {
    validatePrivacy(form.elements.namedItem('privacy'), true);
  });
};

/**
 * Adds live validation to one text field.
 */
const bindTextField = field => {
  field.addEventListener('input', () => validateField(field, true));
  field.addEventListener('blur', () => validateField(field, true));
};

/**
 * Validates the form and sends the email via EmailJS.
 */
const submitForm = async event => {
  event.preventDefault();

  console.log('[Contact] Formular abgeschickt!');

  const form = event.currentTarget;
  const valid = validateForm(form);

  console.log('[Contact] Formular gültig:', valid);

  if (!valid) {
    console.warn('[Contact] Validierung fehlgeschlagen');
    return;
  }

  const button = form.querySelector('.contact-form__submit');

  if (button?.disabled) {
    console.warn('[Contact] Versand läuft bereits');
    return;
  }

  if (button) button.disabled = true;

  try {
    console.log('[Contact] Starte EmailJS-Versand...');

    if (!window.emailjs?.sendForm) {
      throw new Error('EmailJS wurde nicht geladen!');
    }

    const response = await window.emailjs.sendForm(
      'service_h030brs',
      'template_ieclkyj',
      form,
      {
        publicKey: 'PZ1pNC8OxFxg5fExo'
      }
    );

    console.log('[Contact] EmailJS erfolgreich:', response);

    showSuccess(form);

  } catch (error) {
    console.error('[Contact] EmailJS Fehler:', error);

    const message = state.lang === 'de'
      ? 'Die Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.'
      : 'The message could not be sent. Please try again.';

    setStatus(message, false);

  } finally {
    if (button) button.disabled = false;

    console.log('[Contact] Versandvorgang abgeschlossen');
  }
};

/**
 * Runs every validator and returns the combined result.
 */
const validateForm = form => {
  const results = fieldNames.map(name =>
    validateField(form.elements.namedItem(name), true)
  );

  const privacyValid = validatePrivacy(
    form.elements.namedItem('privacy'),
    true
  );

  return results.every(Boolean) && privacyValid;
};

/**
 * Selects the right validation rule for a field.
 */
const validateField = (field, touched) => {
  if (field.name === 'email') {
    return validateEmail(field, touched);
  }

  return validateText(field, touched);
};

/**
 * Checks name and message for real user input.
 */
const validateText = (field, touched) => {
  const valid = field.value.trim().length > 0;
  const message = textError(field.name);

  setFieldState(field, valid, touched, message);

  return valid;
};

/**
 * Checks the email value.
 */
const validateEmail = (field, touched) => {
  const error = getEmailError(field.value);
  const valid = !error;

  setFieldState(field, valid, touched, error);

  return valid;
};

/**
 * Validates the privacy checkbox.
 */
const validatePrivacy = (field, touched) => {
  const valid = field.checked;
  const message = valid || !touched ? '' : t().privacyError;

  setStatus(message, false);

  return valid;
};

/**
 * Updates the validation state and inline error text.
 */
const setFieldState = (field, valid, touched, message) => {
  const wrapper = field.closest('.form-field');
  const error = wrapper.querySelector('.form-field__error');

  wrapper.classList.toggle('is-invalid', touched && !valid);
  wrapper.classList.toggle('is-valid', touched && valid);

  error.textContent = touched && !valid ? message : '';
};

/**
 * Returns the translated required message.
 */
const textError = name => {
  if (name === 'name') return t().nameRequired;
  if (name === 'message') return t().messageRequired;

  return t().requiredError;
};

/**
 * Creates a detailed email validation error.
 */
const getEmailError = value => {
  const email = value.trim();

  if (!email) return t().emailRequired;
  if (!email.includes('@')) return t().emailMissingAt;

  return getEmailDomainError(email);
};

/**
 * Checks the email local part and domain.
 */
const getEmailDomainError = email => {
  const parts = email.split('@');

  if (!parts[0]) return t().emailMissingLocal;
  if (parts.length !== 2 || !parts[1]) return t().emailInvalid;

  return getEmailEndingError(parts[1]);
};

/**
 * Checks the domain and top-level ending.
 */
const getEmailEndingError = domain => {
  const chunks = domain.split('.');
  const ending = chunks.at(-1) || '';

  if (!domain.includes('.')) return t().emailMissingDot;
  if (chunks.some(part => !part)) return t().emailInvalid;
  if (ending.length < 2) return t().emailMissingEnding;

  return '';
};

/**
 * Shows the success message and resets the form.
 */
const showSuccess = form => {
  console.log('[Contact] Erfolgsmeldung wird angezeigt');

  setStatus(t().successMessage, true);

  form.reset();
  resetFields(form);
};

/**
 * Clears the validation classes after a successful send.
 */
const resetFields = form => {
  fieldNames.forEach(name => {
    setFieldState(form.elements.namedItem(name), true, false, '');
  });
};

/**
 * Updates the global form status message.
 */
const setStatus = (message, success) => {
  const status = qs('.contact-form__status');

  if (!status) {
    console.warn('[Contact] Status-Element nicht gefunden');
    return success;
  }

  status.textContent = message;
  status.classList.toggle('success', success);

  return success;
};
