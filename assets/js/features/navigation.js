import{state}from'../data/content.js';
import{qs,qsa,bodyState}from'../utils/dom.js';
import{render}from'../render.js';
/**
 * Activates language buttons, burger menu and active-link states.
 * It runs after every template render because header markup is replaced.
 */
export const initNavigation=()=>{markLanguage();bindLanguage();bindBurger();bindBackdrop();bindMobileLinks();};
const markLanguage=()=>qsa('[data-lang]').forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===state.lang));
const bindLanguage=()=>qsa('[data-lang]').forEach(btn=>btn.onclick=()=>changeLanguage(btn.dataset.lang));
const changeLanguage=lang=>{state.lang=lang;render();};
const bindBurger=()=>{const btn=qs('.burger-btn');if(btn)btn.onclick=openMenu;};
const bindBackdrop=()=>{const b=qs('.mobile-backdrop');if(b)b.onclick=event=>event.target===b&&closeMenu();};
const bindMobileLinks=()=>qsa('.mobile-panel a').forEach(link=>link.onclick=closeMenu);
const openMenu=()=>{qs('.mobile-backdrop').classList.add('open');qs('.burger-btn')?.classList.add('is-open');bodyState('menu-open',true);};
const closeMenu=()=>{qs('.mobile-backdrop')?.classList.remove('open');qs('.burger-btn')?.classList.remove('is-open');bodyState('menu-open',false);};
/**
 * Observes portfolio sections and mirrors the active section in nav links.
 * It is initialized once after the first complete render.
 */
export const observeNavigation=()=>setTimeout(createObserver,0);
const createObserver=()=>qsa('main section[id]').forEach(section=>observer().observe(section));
const observer=()=>new IntersectionObserver(onIntersect,{threshold:.45});
const onIntersect=entries=>entries.forEach(entry=>entry.isIntersecting&&activate(entry.target.id));
const activate=id=>qsa('[data-nav]').forEach(link=>link.classList.toggle('active',link.dataset.nav===id));
