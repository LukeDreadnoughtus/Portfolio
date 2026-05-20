import{state,quotes}from'../data/content.js';
import{qs,qsa,setHtml}from'../utils/dom.js';
import{quoteTemplate}from'../templates/layoutTemplates.js';
/**
 * Wires carousel arrows to the shared quote index state.
 * Only the quote card and dots update, not the full page.
 */
export const initCarousel=()=>qsa('[data-quote]').forEach(btn=>btn.onclick=()=>moveQuote(btn.dataset.quote));
const moveQuote=direction=>{state.quoteIndex=getNextIndex(direction);refreshQuote();};
const getNextIndex=direction=>direction==='next'?plusIndex():minusIndex();
const plusIndex=()=>((state.quoteIndex+1)%quotes.length);
const minusIndex=()=>((state.quoteIndex-1+quotes.length)%quotes.length);
const refreshQuote=()=>{setHtml(qs('#quote-card'),quoteTemplate());updateDots();};
const updateDots=()=>qsa('.carousel-dots__dot').forEach((dot,i)=>dot.classList.toggle('active',i===state.quoteIndex));
