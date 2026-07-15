import {
  state,
  i18n,
  quotes
} from '../data/content.js';

const t = () => i18n[state.lang];

const local = value => value?.[state.lang] ?? value;

export const carouselTemplate = () => `
<section class="references-section app-section">
  <div class="container references-section__container">
    <h3 class="references-section__heading fira">${t().quoteTitle}</h3>
    <div class="carousel__wrapper">
      <div class="quotes" aria-hidden="true">
        <img src="assets/img/carousel/quotes.svg" alt="">
      </div>
      <div id="quote-card" class="carousel__cards">
        ${quotes.map(quoteCardTemplate).join('')}
      </div>
    </div>
    ${navigationTemplate()}
  </div>
</section>`;


export const quoteCardTemplate = quote => `
<article class="quote-card">
  <div class="quote-card__scroll">
    <p class="quote-card__text karla">${local(quote.text)}</p>
    <div class="testimonial">
      <hr class="testimonial__divider">
      <p class="testimonial__name karla">${quote.name}</p>
    </div>
  </div>
</article>`;

export const navigationTemplate = () => `
<div class="navigations">
  ${arrowButtonTemplate('left')}
  <div class="pagination">${quotes.map(dotTemplate).join('')}</div>
  ${arrowButtonTemplate('right')}
</div>`;

const dotTemplate = (_, index) => `
<div class="pagination__bullet ${activeDot(index)}"></div>`;

const activeDot = index => index === state.quoteIndex
  ? 'pagination__bullet-active'
  : '';

  const arrowButtonTemplate = direction => `
<button class="navigations_buttons" data-quote="${direction}"
  aria-label="${direction}">
  ${arrowSvgTemplate(direction)}
</button>`;

const arrowSvgTemplate = direction => direction === 'left'
  ? leftArrowTemplate()
  : rightArrowTemplate();

  const leftArrowTemplate = () => `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
  viewBox="0 0 40 40" fill="none">
  <mask id="mask-left" maskUnits="userSpaceOnUse" x="4" y="4"
    width="32" height="32" style="mask-type:alpha">
    <rect x="4" y="4" width="32" height="32" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask-left)">
    <path class="navigations_buttons-color" d="${leftArrowPath()}"/>
  </g>
</svg>`;

const rightArrowTemplate = () => `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
  viewBox="0 0 40 40" fill="none">
  <mask id="mask-right" maskUnits="userSpaceOnUse" x="4" y="4"
    width="32" height="32" style="mask-type:alpha">
    <rect x="4" y="4" width="32" height="32" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask-right)">
    <path class="navigations_buttons-color" d="${rightArrowPath()}"/>
  </g>
</svg>`;