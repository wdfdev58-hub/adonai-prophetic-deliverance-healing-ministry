/* Adonai — Void Editorial motion.
   Signature: glowing serif hero with masked line reveals, slowly drifting
   atmospheric imagery, parallax-offset cards, and a pinned scripture moment. */

(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ------------------------------------------------------- Nav + progress */
  const nav = document.getElementById('nav');
  const progress = document.getElementById('progress');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ------------------------------------------------------------------ GSAP */
  if (reduce || !window.gsap) {
    const intro = document.getElementById('intro');
    if (intro) intro.style.display = 'none';
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  const editorial = 'cubic-bezier(.22,1,.36,1)';
  gsap.config({ force3D: true });

  // Intro: the wordmark breathes in, then the curtain lifts into the hero
  const intro = document.getElementById('intro');
  const tl = gsap.timeline({ defaults: { ease: editorial } });
  tl.from('.intro-word', { opacity: 0, letterSpacing: '0.4em', duration: 0.9 })
    .to('#intro', { autoAlpha: 0, duration: 0.7, onComplete: () => intro && (intro.style.display = 'none') }, '+=0.3')
    // Masked serif line reveals
    .from('.hero-title .line', { yPercent: 110, duration: 1.1, stagger: 0.14 }, '-=0.35')
    .from('.float-img', { opacity: 0, y: 40, duration: 1.2, stagger: 0.15 }, '-=0.8')
    .from('#hero .reveal', { y: 30, opacity: 0, duration: 0.8, stagger: 0.12 }, '-=0.9');

  // Floating imagery: slow, endless drift
  gsap.utils.toArray('.float-img').forEach((el, i) => {
    gsap.to(el, {
      y: i % 2 ? 24 : -24,
      rotation: `+=${i % 2 ? 1.5 : -1.5}`,
      duration: 6 + i * 1.4,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  });

  // Hero content: parallax up + fade as you scroll away
  gsap.to('#heroContent', {
    yPercent: -14, opacity: 0.15, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
  });
  gsap.utils.toArray('.float-img').forEach((el, i) => {
    gsap.to(el, {
      yPercent: -30 - i * 10, ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
    });
  });

  // Scroll reveals (skip the hero's, already handled)
  gsap.utils.toArray('.reveal').forEach((el) => {
    if (el.closest('#hero')) return;
    gsap.from(el, {
      y: 30, opacity: 0, duration: 0.8, ease: editorial,
      scrollTrigger: { trigger: el, start: 'top 86%' },
    });
  });

  // Parallax cards: adjacent cards drift in opposite directions on scroll
  gsap.utils.toArray('.parallax-card').forEach((el) => {
    const dir = Number(el.dataset.dir || 1);
    gsap.fromTo(el, { y: dir * 34 }, {
      y: dir * -34, ease: 'none',
      scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  // Pinned scripture: hold the verse, breathe it in
  ScrollTrigger.create({
    trigger: '#scripture',
    start: 'top top',
    end: '+=120%',
    pin: true,
    pinSpacing: true,
  });
  gsap.fromTo('#verse',
    { scale: 0.96, opacity: 0.2 },
    { scale: 1, opacity: 1, ease: 'none',
      scrollTrigger: { trigger: '#scripture', start: 'top 80%', end: 'top top', scrub: true } });
  gsap.to('#verseTag', {
    letterSpacing: '0.7em', ease: 'none',
    scrollTrigger: { trigger: '#scripture', start: 'top bottom', end: 'top top', scrub: true },
  });

  // Giant footer wordmark: slow rise as it enters
  gsap.from('#footWord', {
    yPercent: 30, ease: 'none',
    scrollTrigger: { trigger: 'footer', start: 'top bottom', end: 'bottom bottom', scrub: true },
  });
})();
