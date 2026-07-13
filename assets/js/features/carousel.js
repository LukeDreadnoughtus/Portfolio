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

