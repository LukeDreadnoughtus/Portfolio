import { qs, qsa } from '../utils/dom.js';
import { state, i18n } from '../data/content.js';

const t = () => i18n[state.lang];

/**
 * Activates client-side validation for the contact form.
 * This static version shows a success state instead of sending data.
 */
export const initContact = () => {
  const form = qs('.contact-form');
  if (form) form.onsubmit = submitForm;
};

/**
 * Handles submit, clears previous messages and validates fields.
 * A valid form receives a translated success message.
 */
const submitForm = event => {
  event.preventDefault();
  clearMessages();
  validate(event.target) && showSuccess(event.target);
};

/**
 * Runs all form checks in one place.
 * Each helper writes translated error text where needed.
 */
const validate = form => [
  requireValue(form.name),
  validateEmail(form.email),
  requireValue(form.message),
  validatePrivacy(form.privacy)
].every(Boolean);

/**
 * Checks whether a field contains enough user input.
 * It is reused for name and message validation.
 */
const requireValue = field => field.value.trim().length > 1
  || fail(field, t().requiredError);

/**
 * Validates the mail field with a simple browser-side pattern.
 * The localized error is shown beside the input.
 */
const validateEmail = field => emailPattern().test(field.value.trim())
  || fail(field, t().emailError);

const emailPattern = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Ensures that the privacy checkbox is accepted.
 * The status area receives the translated privacy message.
 */
const validatePrivacy = field => field.checked
  || setStatus(t().privacyError, false);

/**
 * Writes an inline error message for one input field.
 * Validation helpers return false through this function.
 */
const fail = (field, message) => {
  const parent = field.closest('.form-field');
  parent.querySelector('.form-field__error').textContent = message;
  return false;
};

/**
 * Removes all old validation and status text.
 * SubmitForm calls it before running the current validation pass.
 */
const clearMessages = () => qsa(
  '.form-field__error,.contact-form__status'
).forEach(item => item.textContent = '');

/**
 * Shows the localized success message and resets fields.
 * It only runs after all validation helpers returned true.
 */
const showSuccess = form => {
  setStatus(t().successMessage, true);
  form.reset();
};

/**
 * Updates the global form status text.
 * Validation and success states share this small helper.
 */
const setStatus = (message, success) => {
  const status = qs('.contact-form__status');
  status.textContent = message;
  status.classList.toggle('success', success);
  return success;
};
