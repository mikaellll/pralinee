import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink('/'),
    },
    {
      text: 'Boulangerie',
      href: getPermalink('/category/boulangerie'),
    },
    {
      text: 'Viennoiserie',
      href: getPermalink('/category/viennoiserie'),
    },
    {
      text: 'Patisserie',
      href: getPermalink('/category/patisserie'),
    },
    {
      text: 'À propos',
      href: getPermalink('/about'),
    },
  ],
  actions: [],
};

export const headerDataEn = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/en'),
    },
    {
      text: 'Bakery',
      href: getPermalink('/en/category/bakery'),
    },
    {
      text: 'Viennoiserie',
      href: getPermalink('/en/category/viennoiserie'),
    },
    {
      text: 'Pastry',
      href: getPermalink('/en/category/pastry'),
    },
    {
      text: 'About',
      href: getPermalink('/en/about'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Accueil', href: getPermalink('/') },
        { text: 'Boulangerie', href: getPermalink('/category/boulangerie') },
        { text: 'Viennoiserie', href: getPermalink('/category/viennoiserie') },
        { text: 'Patisserie', href: getPermalink('/category/patisserie') },
        { text: 'À propos', href: getPermalink('/about') },
        { text: 'Plan du site', href: '/sitemap-index.xml' },
      ],
    },
    {
      title: 'Légal',
      links: [
        { text: 'Mentions Légales', href: getPermalink('/terms') },
        { text: 'Politique de Confidentialité', href: getPermalink('/privacy') },
        { text: 'Cookies', href: getPermalink('/cookies') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Mentions Légales', href: getPermalink('/terms') },
    { text: 'Politique de Confidentialité', href: getPermalink('/privacy') },
  ],
  socialLinks: [{ ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#', text: '' }],
  footNote: `
    © ${new Date().getFullYear()} Tous droits réservés.
  `,
};

export const footerDataEn = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Home', href: getPermalink('/en') },
        { text: 'Bakery', href: getPermalink('/en/category/bakery') },
        { text: 'Viennoiserie', href: getPermalink('/en/category/viennoiserie') },
        { text: 'Pastry', href: getPermalink('/en/category/pastry') },
        { text: 'About', href: getPermalink('/en/about') },
        { text: 'Sitemap', href: '/sitemap-index.xml' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Legal Mentions', href: getPermalink('/en/terms') },
        { text: 'Privacy Policy', href: getPermalink('/en/privacy') },
        { text: 'Cookies', href: getPermalink('/en/cookies') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Legal Mentions', href: getPermalink('/en/terms') },
    { text: 'Privacy Policy', href: getPermalink('/en/privacy') },
  ],
  socialLinks: [{ ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#', text: '' }],
  footNote: `
    © ${new Date().getFullYear()} All rights reserved.
  `,
};
