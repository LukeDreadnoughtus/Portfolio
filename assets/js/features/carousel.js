import{state,quotes}from'../data/content.js';
import{qs,qsa,setHtml}from'../utils/dom.js';
import{carouselTemplate}from'../templates/carouselTemplates.js';

const animationTime=700;

/**
 * Wires carousel controls and starts the automatic testimonial rotation.
 * The section keeps all quote cards in the DOM like the Angular template.
 */
export const initCarousel=()=>{
  qsa('[data-quote]').forEach(connectButton);
  restartAutoSlide();
};

const connectButton=button=>{
  button.onclick=()=>scrollCarousel(button.dataset.quote);
};

/**
 * Moves the quote cards left or right and blocks double clicks.
 * After the CSS animation, the data order is rotated and re-rendered.
 */
const scrollCarousel=direction=>{
  if(state.quoteMoving)return;
  animateCards(direction);
  window.setTimeout(()=>finishMove(direction),animationTime);
};

const animateCards=direction=>{
  state.quoteMoving=true;
  qsa('.quote-card').forEach(addMoveClass(direction));
};

const addMoveClass=direction=>card=>{
  card.classList.add(moveClass(direction));
};

const finishMove=direction=>{
  rotateQuotes(direction);
  updateActiveIndex(direction);
  renderCarousel();
  state.quoteMoving=false;
};

const rotateQuotes=direction=>{
  direction==='left' ? rotateRight() : rotateLeft();
};

const rotateLeft=()=>{
  quotes.push(quotes.shift());
};

const rotateRight=()=>{
  quotes.unshift(quotes.pop());
};

const updateActiveIndex=direction=>{
  const offset=direction==='left' ? -1 : 1;
  state.quoteIndex=nextIndex(offset);
};

const nextIndex=offset=>{
  return (state.quoteIndex+offset+quotes.length)%quotes.length;
};

const moveClass=direction=>{
  return direction==='left' ? 'move-right' : 'move-left';
};

const renderCarousel=()=>{
  const section=qs('.references-section');
  setHtml(section,innerSectionTemplate());
  initCarousel();
};

const innerSectionTemplate=()=>{
  const html=carouselTemplate();
  const parser=new DOMParser();
  return parser.parseFromString(html,'text/html').body.firstChild.innerHTML;
};

const restartAutoSlide=()=>{
  clearAutoSlide();
  state.quoteTimer=window.setInterval(autoSlide,8000);
};

const clearAutoSlide=()=>{
  if(state.quoteTimer)window.clearInterval(state.quoteTimer);
};

const autoSlide=()=>{
  if(!state.quoteMoving)scrollCarousel('right');
};
