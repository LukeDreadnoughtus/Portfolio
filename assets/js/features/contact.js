import{qs,qsa}from'../utils/dom.js';
/**
 * Activates client-side validation for the contact form.
 * This static version shows a success state instead of sending data.
 */
export const initContact=()=>{const form=qs('.contact-form');if(form)form.onsubmit=submitForm;};
const submitForm=event=>{event.preventDefault();clearMessages();validate(event.target)&&showSuccess(event.target);};
const validate=form=>[requireValue(form.name),validateEmail(form.email),requireValue(form.message),validatePrivacy(form.privacy)].every(Boolean);
const requireValue=field=>field.value.trim().length>1||fail(field,'Please fill out this field.');
const validateEmail=field=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())||fail(field,'Please enter a valid email.');
const validatePrivacy=field=>field.checked||setStatus('Please accept the privacy policy.',false);
const fail=(field,message)=>{field.closest('.form-field').querySelector('.form-field__error').textContent=message;return false;};
const clearMessages=()=>qsa('.form-field__error,.contact-form__status').forEach(item=>item.textContent='');
const showSuccess=form=>{setStatus('Thanks! Your message is ready to be sent.',true);form.reset();};
const setStatus=(message,success)=>{const status=qs('.contact-form__status');status.textContent=message;status.classList.toggle('success',success);return success;};
