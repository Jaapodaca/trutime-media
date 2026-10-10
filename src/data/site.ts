// All business-specific content lives here. For a client site, edit this file + the @theme block in global.css.
export const site = {
  name: 'TruTime Media',
  tagline: 'Websites that work as hard as you do.',
  description:
    'TruTime Media builds fast, modern websites for small businesses in El Paso, TX, with optional monthly plans for hosting and updates.',
  email: 'trutimealltime@gmail.com',
  city: 'El Paso',
  region: 'TX',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],
  // icon = name of an SVG path in components/Icon.astro
  services: [
    { icon: 'monitor', title: 'Custom websites', text: 'A fast, mobile-first site designed around your business, not a template everyone else uses.' },
    { icon: 'refresh', title: 'Monthly care plan', text: 'Hosting, updates, backups and small edits handled for you every month. You run the business, I run the website.' },
    { icon: 'pin', title: 'Local search ready', text: 'Built so people searching in El Paso can actually find you on Google and Maps.' },
  ],
  steps: [
    { title: 'Talk', text: 'A quick call or message about your business, your customers and what you need.' },
    { title: 'Design', text: 'You get a preview of your site and we tweak it until it feels right.' },
    { title: 'Launch', text: 'Your site goes live on your own domain, fast and secure.' },
    { title: 'Grow', text: 'Optional care plan keeps it updated while you focus on customers.' },
  ],
};
