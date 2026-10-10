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
  // Real, citable stats. Keep the source with each one: never show a number you can't back up.
  stats: [
    { value: 76, suffix: '%', text: 'of people who search for something nearby on their phone visit a business within a day.', source: 'Google', href: 'https://www.thinkwithgoogle.com/_qs/documents/620/mobile-search-trends-consumers-to-stores.pdf' },
    { value: 96, suffix: '%', text: 'of consumers read online reviews of businesses. Only 4% never do.', source: 'BrightLocal, 2025', href: 'https://www.brightlocal.com/research/local-consumer-review-survey-2025/' },
    { value: 46, suffix: '%', text: 'of comments on whether a website was trustworthy mentioned its design, more than any other factor.', source: 'Stanford & Consumer WebWatch', href: 'https://advocacy.consumerreports.org/research/how-do-people-evaluate-a-web-sites-credibility' },
    { value: 53, suffix: '%', text: 'of mobile visitors leave a site that takes longer than 3 seconds to load.', source: 'Google', href: 'https://www.marketingdive.com/news/google-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/426070/' },
  ],
  plans: [
    {
      name: 'Website build',
      tag: 'One-time project',
      text: 'A custom website designed and built for your business, ready to bring in customers from day one.',
      features: [
        'Custom design that matches your brand',
        'Looks great on phones, tablets and desktops',
        'Fast loading and secure (HTTPS)',
        'Contact form that sends straight to your email',
        'Local SEO setup so El Paso customers can find you',
        'Click-to-call, maps and social links',
      ],
    },
    {
      name: 'Monthly care plan',
      tag: 'Optional add-on',
      featured: true,
      text: 'Hosting, updates and peace of mind. You run the business, I keep the website running.',
      features: [
        'Hosting and SSL certificate included',
        'Content updates: hours, menus, photos, prices',
        'Security and software updates',
        'Regular backups',
        'Uptime monitoring',
        'A real person to reach out to when you need a change',
      ],
    },
  ],
  steps: [
    { title: 'Talk', text: 'A quick call or message about your business, your customers and what you need.' },
    { title: 'Design', text: 'You get a preview of your site and we tweak it until it feels right.' },
    { title: 'Launch', text: 'Your site goes live on your own domain, fast and secure.' },
    { title: 'Grow', text: 'Optional care plan keeps it updated while you focus on customers.' },
  ],
};
