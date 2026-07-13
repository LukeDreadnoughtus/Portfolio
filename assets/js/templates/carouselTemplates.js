import {
  state,
  i18n
} from '../data/content.js';

const t = () => i18n[state.lang];

export const carouselTemplate = () => `
<section class="references-section app-section">
  <div class="container
    references-section__container">
    <h3 class="references-section__heading fira">
      ${t().quoteTitle}
    </h3>
  </div>
</section>`;
