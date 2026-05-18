import{state}from'../data/content.js';
import{qs,qsa,bodyState}from'../utils/dom.js';
import{render}from'../render.js';
/**
 * Connects language switch, burger menu and anchor closing behavior.
 * It is called after every render because templates are replaced.
 */
export const initNavigation=()=>{setLangButtons();bindLanguage();bindBurger();bindNavClose();markActiveLink();};
/**
 * Adds the active state to EN or DE buttons.
 * Header templates read the same global language state.
 */
const setLangButtons=()=>qsa('[data-lang]').forEach(markLangButton);
const markLangButton=button=>button.classList.toggle('active',button.dataset.lang===state.lang);
/**
 * Re-renders the page when the user changes language.
 * Existing feature modules are reattached through render().
 */
const bindLanguage=()=>qsa('[data-lang]').forEach(button=>button.onclick=()=>changeLang(button));
const changeLang=button=>{state.lang=button.dataset.lang;render();};
/**
 * Controls the mobile overlay and the body scroll lock.
 * CSS handles the slide-in animation based on the open class.
 */
const bindBurger=()=>{const burger=qs('.burger');if(burger)burger.onclick=toggleMenu;};
const toggleMenu=()=>{qs('.mobile-panel').classList.toggle('open');bodyState('menu-open',qs('.mobile-panel').classList.contains('open'));};
/**
 * Closes the mobile menu once an anchor was selected.
 * This keeps scrolling predictable on small screens.
 */
const bindNavClose=()=>qsa('.mobile-panel a').forEach(link=>link.onclick=closeMenu);
const closeMenu=()=>{qs('.mobile-panel').classList.remove('open');bodyState('menu-open',false);};
/**
 * Observes sections and mirrors the active section in nav links.
 * It works for desktop and mobile links at the same time.
 */
export const observeNavigation=()=>{const options={threshold:.45};new IntersectionObserver(onIntersect,options).observe(qs('#about'));qsa('main section[id]').forEach(section=>observer().observe(section));};
const observer=()=>new IntersectionObserver(onIntersect,{threshold:.45});
const onIntersect=entries=>entries.forEach(entry=>entry.isIntersecting&&activate(entry.target.id));
const activate=id=>qsa('[data-nav]').forEach(link=>link.classList.toggle('active',link.dataset.nav===id));
const markActiveLink=()=>activate(location.hash.replace('#','')||'home');
