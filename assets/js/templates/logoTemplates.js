/**
 * Builds the portfolio logo used in header and footer.
 * The returned markup is independent from language switching.
 */
export const logoTemplate = () => `
<a class="logo" href="#home" aria-label="Go to start">
  <div class="logo__initials fira">
    <div class="logo__initials-letter
      logo__initials-letter-rotate">L</div>
    <div class="logo__initials-letter">H</div>
  </div>
  <div class="logo__fullname fira">
    <div class="logo__fullname-firstname">Lukas</div>
    <div class="logo__fullname-lastname">Heller</div>
  </div>
</a>`;
