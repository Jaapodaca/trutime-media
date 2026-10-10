// Site-wide GSAP animations. Loaded once from Base.astro.
// Markup opts in with attributes, so client sites reuse this file untouched:
//   data-hero          → children animate in on page load (data-line children slide up from a mask)
//   data-reveal        → fades/slides in when scrolled into view
//   data-progress      → scaleX scrubbed by scroll position (e.g. a timeline line)
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// matchMedia only runs the setup when the query matches, and auto-reverts everything if it stops
// matching (e.g. the user turns on "reduce motion" while the page is open).
gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
  const hero = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
  hero
    .fromTo('[data-hero] [data-line]', { yPercent: 110, autoAlpha: 1 }, { yPercent: 0, stagger: 0.12, duration: 1.1 })
    .fromTo('[data-hero] > :not(h1)', { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1 }, '-=0.7');
  gsap.set('[data-hero] h1', { autoAlpha: 1 });

  // batch = one ScrollTrigger for many elements; cards entering together get a nice stagger.
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (els) =>
      gsap.fromTo(els, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.12, duration: 0.9, ease: 'power3.out' }),
  });

  gsap.utils.toArray<HTMLElement>('[data-progress]').forEach((el) => {
    gsap.fromTo(el, { scaleX: 0 }, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { trigger: el.parentElement, start: 'top 75%', end: 'bottom 50%', scrub: true },
    });
  });
});
