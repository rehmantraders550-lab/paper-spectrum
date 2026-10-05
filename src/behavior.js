(() => {
  const root = document.documentElement;
  root.classList.add('ps-motion-ready');

  const revealNodes = [...document.querySelectorAll('[data-ps-reveal]')];

  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealNodes.forEach((node) => node.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, io) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    }, {
      threshold: 0.16,
      rootMargin: '0px 0px -6% 0px'
    });

    revealNodes.forEach((node) => observer.observe(node));
  }

  document.querySelectorAll('[data-ps-disclosure]').forEach((trigger) => {
    const targetId = trigger.getAttribute('aria-controls');
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (!target) return;

    const setOpen = (open) => {
      trigger.setAttribute('aria-expanded', String(open));
      target.hidden = !open;
    };

    trigger.addEventListener('click', () => {
      setOpen(trigger.getAttribute('aria-expanded') !== 'true');
    });

    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setOpen(false);
    });
  });

  const newsletterForm = document.querySelector('[data-ps-newsletter]');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = newsletterForm.querySelector('.ps-newsletter__status');
      const input = newsletterForm.querySelector('.ps-newsletter__input');
      if (input && input.value && input.checkValidity()) {
        if (status) status.textContent = 'Registered into the seasonal index.';
        input.value = '';
      } else if (input) {
        if (status) status.textContent = 'Please provide a valid dispatch address.';
      }
    });
  }
})();
