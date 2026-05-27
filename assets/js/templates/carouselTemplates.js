import{state,quotes}from'../data/content.js';

const title='What my colleagues say about me';

/**
 * Builds the complete testimonial section used by the main layout.
 * The carousel module updates this markup after every slide movement.
 */
export const carouselTemplate=()=>`
<section class="references-section app-section">
  <div class="container references-section__container">
    <h3 class="references-section__heading fira">${title}</h3>
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

/**
 * Creates a single testimonial card from one data object.
 * It is intentionally separated because the carousel renders all cards.
 */
export const quoteCardTemplate=quote=>`
<article class="quote-card">
  <p class="quote-card__text karla">${quote.text}</p>
  <div class="testimonial">
    <hr class="testimonial__divider">
    <p class="testimonial__name karla">${quote.name}</p>
  </div>
</article>`;

