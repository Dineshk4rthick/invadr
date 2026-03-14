const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: '0px 0px -32px 0px',
  }
);

revealElements.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
  observer.observe(el);
});
