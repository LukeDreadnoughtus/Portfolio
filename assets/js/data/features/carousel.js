import{state,quotes}from'../data/content.js';
import{qs,qsa,setHtml}from'../utils/dom.js';
import{quoteTemplate}from'../templates/layoutTemplates.js';
/**
 * Connects carousel arrow buttons to the shared quote state.
 * The quote card is swapped without re-rendering the full page.
 */
export const initCarousel=()=>qsa('[data-quote]').forEach(bindQuoteButton);
const bindQuoteButton=button=>button.onclick=()=>moveQuote(button.dataset.quote);
/**
 * Calculates the next quote index and refreshes visible quote parts.
 * Dots are updated from the same state to stay in sync.
 */
const moveQuote=direction=>{state.quoteIndex=nextIndex(direction);refreshQuote();};
const nextIndex=direction=>direction==='next'?plusIndex():minusIndex();
const plusIndex=()=>((state.quoteIndex+1)%quotes.length);
const minusIndex=()=>((state.quoteIndex-1+quotes.length)%quotes.length);
const refreshQuote=()=>{setHtml(qs('#quote-card'),quoteTemplate());updateDots();};
const updateDots=()=>qsa('.dot').forEach((dot,i)=>dot.classList.toggle('active',i===state.quoteIndex));
