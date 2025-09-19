// main.js — GreenWave Carwash
// Lightweight JS for accessibility and form validation

document.addEventListener('DOMContentLoaded', function () {
  // NAV TOGGLE (mobile)
  const toggle = document.getElementById('nav-toggle');
  const siteRoot = document.documentElement;
  if (toggle) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      siteRoot.classList.toggle('nav-open');
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.site-nav a').forEach(link => {
    link.addEventListener('click', () => {
      siteRoot.classList.remove('nav-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // SIMPLE FORM VALIDATION (contact/booking form)
  const form = document.getElementById('booking-form') || document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect fields
    const name = form.querySelector('[name="name"]')?.value.trim();
    const email = form.querySelector('[name="email"]')?.value.trim();
    const service = form.querySelector('[name="service"]')?.value || '';
    const message = form.querySelector('[name="message"]')?.value.trim();

    // Basic validation
    if (!name || !email || !service) {
      status.textContent = 'Please fill in your name, email, and choose a service.';
      status.style.color = '#b91c1c';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      status.textContent = 'Please enter a valid email address.';
      status.style.color = '#b91c1c';
      return;
    }

    status.textContent = 'Sending...';
    status.style.color = '';

    // Demo: simulate a network request; replace below with actual submission (fetch / Netlify form / Formspree)
    setTimeout(() => {
      status.textContent = 'Request received! We will contact you shortly.';
      status.style.color = '#065f46';
      form.reset();
    }, 800);
  });

  // Accessibility: smooth scroll for same-page anchor links (if any)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      if (href.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
