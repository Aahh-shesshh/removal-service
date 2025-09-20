import { COMPANY_INFO_EMAIL, COMPANY_PHONE_NUMBER } from './constants';
import { data as SERVICE_DATA } from './services';

export const data = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    navbar: true,
    footer_left: false,
  },
  {
    id: 1.1,
    title: 'About',
    url: '/about-us',
    navbar: true,
    footer_left: true,
  },
  {
    id: 1.2,
    title: 'Services',
    url: '/#services',
    take: 2,
    items: SERVICE_DATA.list?.map((item) => ({
      id: item.id,
      icon: item.icon,
      title: item.title,
      url: `/service/${item.slug}`,
      description: item.overview,
      footer: false,
    })),
    navbar: true,
    footer_left: true,
  },
  {
    id: 1.3,
    title: 'Testimonials',
    url: '/#testimonials',
    navbar: false,
    footer_left: true,
  },
  {
    id: 1.4,
    title: 'Contact',
    url: '/contact-us',
    navbar: true,
    footer_right: true,
  },
  {
    id: 1.5,
    title: COMPANY_PHONE_NUMBER,
    url: `tel:${COMPANY_PHONE_NUMBER}`,
    navbar: false,
    footer_right: true,
  },
  {
    id: 1.6,
    title: COMPANY_INFO_EMAIL,
    url: `mailto:${COMPANY_INFO_EMAIL}`,
    navbar: false,
    footer_right: true,
  },
];
