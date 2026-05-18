import{qs,qsa}from'../utils/dom.js';
/**
 * Activates client-side contact validation.
 * The form is demo-only and shows success instead of sending data.
 */
export const initContact=()=>{const form=qs('.contact-form');if(form)form.onsubmit=submitForm;};
/**
 * Validates required fields and blocks invalid submissions.
 * A success message appears when all checks pass.
 */
const submitForm=event=>{event.preventDefault();clearMessages();validateForm(event.target)&&showSuccess(event.target);};
const validateForm=form=>[validateName(form),validateEmail(form),validateMessage(form),validatePrivacy(form)].every(Boolean);
const validateName=form=>requireValue(form.name,'Please enter your name.');
const validateMessage=form=>requireValue(form.message,'Please enter a message.');
const validateEmail=form=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value.trim())||fail(form.email,'Please enter a valid email.');
const validatePrivacy=form=>form.privacy.checked||fail(form.privacy,'Please accept the privacy policy.');
const requireValue=(field,message)=>field.value.trim().length>1||fail(field,message);
const fail=(field,message)=>{field.closest('.field,.privacy').querySelector('.error')?.remove();placeError(field,message);return false;};
const placeError=(field,message)=>{const target=field.closest('.field')?.querySelector('.error')||qs('.success');target.textContent=message;};
const clearMessages=()=>{qsa('.error,.success').forEach(item=>item.textContent='');};
const showSuccess=form=>{qs('.success',form).textContent='Thanks! Your message is ready to be sent.';form.reset();};
