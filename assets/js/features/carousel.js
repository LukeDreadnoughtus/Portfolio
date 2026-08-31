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

/**
 * Connects one carousel control to the matching slide direction.
 * The button data attribute decides whether quotes move left or right.
 */
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

/**
 * Starts the visual movement for all quote cards.
 * It locks the carousel until the CSS animation has finished.
 */
const animateCards=direction=>{
  state.quoteMoving=true;
  qsa('.quote-card').forEach(addMoveClass(direction));
};

/**
 * Creates a callback that adds the correct movement class to a card.
 * AnimateCards reuses it for every visible quote card.
 */
const addMoveClass=direction=>card=>{
  card.classList.add(moveClass(direction));
};

/**
 * Finishes one carousel movement after the animation delay.
 * It rotates the data, updates state, re-renders and unlocks controls.
 */
const finishMove=direction=>{
  rotateQuotes(direction);
  updateActiveIndex(direction);
  renderCarousel();
  state.quoteMoving=false;
};

/**
 * Chooses how the quote array must rotate for the requested direction.
 * Moving left and right require opposite array rotations.
 */
const rotateQuotes=direction=>{
  direction==='left' ? rotateRight() : rotateLeft();
};

/**
 * Moves the first quote to the end of the quote array.
 * This prepares the next card order for a rightward carousel action.
 */
const rotateLeft=()=>{
  quotes.push(quotes.shift());
};

/**
 * Moves the last quote to the beginning of the quote array.
 * This prepares the next card order for a leftward carousel action.
 */
const rotateRight=()=>{
  quotes.unshift(quotes.pop());
};

/**
 * Updates the active quote index after one completed movement.
 * The direction is converted into a positive or negative offset.
 */
const updateActiveIndex=direction=>{
  const offset=direction==='left' ? -1 : 1;
  state.quoteIndex=nextIndex(offset);
};

/**
 * Calculates the next valid quote index with wraparound.
 * Modulo keeps the index inside the available quote range.
 */
const nextIndex=offset=>{
  return (state.quoteIndex+offset+quotes.length)%quotes.length;
};

/**
 * Returns the CSS animation class for the requested control direction.
 * The visual card movement runs opposite to the clicked arrow direction.
 */
const moveClass=direction=>{
  return direction==='left' ? 'move-right' : 'move-left';
};

/**
 * Replaces the carousel section content with the current quote order.
 * Afterwards it reconnects controls and restarts automatic sliding.
 */
const renderCarousel=()=>{
  const section=qs('.references-section');
  setHtml(section,innerSectionTemplate());
  initCarousel();
};

/**
 * Extracts only the inner markup from the full carousel template.
 * DOMParser keeps the existing references section element in place.
 */
const innerSectionTemplate=()=>{
  const html=carouselTemplate();
  const parser=new DOMParser();
  return parser.parseFromString(html,'text/html').body.firstChild.innerHTML;
};

/**
 * Restarts the automatic carousel interval from zero.
 * Existing timers are cleared first so only one interval stays active.
 */
const restartAutoSlide=()=>{
  clearAutoSlide();
  state.quoteTimer=window.setInterval(autoSlide,8000);
};

/**
 * Stops the currently stored automatic carousel interval.
 * It does nothing when no timer has been created yet.
 */
const clearAutoSlide=()=>{
  if(state.quoteTimer)window.clearInterval(state.quoteTimer);
};

/**
 * Advances the carousel automatically when no animation is running.
 * The movement uses the same scroll logic as the manual controls.
 */
const autoSlide=()=>{
  if(!state.quoteMoving)scrollCarousel('right');
};
