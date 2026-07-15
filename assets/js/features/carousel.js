import{state,quotes}from'../data/content.js';
import{qs,qsa,setHtml}from'../utils/dom.js';
import{carouselTemplate}from'../templates/carouselTemplates.js';

const animationTime=700;


export const initCarousel=()=>{
  qsa('[data-quote]').forEach(connectButton);
  restartAutoSlide();
};

const connectButton=button=>{
  button.onclick=()=>scrollCarousel(button.dataset.quote);
};



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