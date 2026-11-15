
export const initSmoothScroll = () => {
  document.addEventListener('click', event => {
    const link = event.target.closest(
      '.hero-section__actions a.scroll-btn'
    );

    if (!link) return;

    const hash = link.getAttribute('href');
    if (!hash?.startsWith('#')) return;

    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    event.preventDefault();

    const startY = window.scrollY;
    const targetY =
      target.getBoundingClientRect().top + startY;

    const distance = targetY - startY;
    const duration = 300;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, targetY);
      history.pushState(null, '', hash);
      return;
    }

    const easeOut = progress =>
      1 - Math.pow(1 - progress, 3);

    const startTime = performance.now();

    const animate = currentTime => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      window.scrollTo(
        0,
        startY + distance * easeOut(progress)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        history.pushState(null, '', hash);
      }
    };

    requestAnimationFrame(animate);
  });
};
