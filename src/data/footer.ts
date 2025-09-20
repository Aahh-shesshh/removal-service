import { COMPANY_LOGO_WHITE, COMPANY_NAME } from './constants';
import { data as NAVBAR_DATA } from './navigation';

export const data = {
  logo: COMPANY_LOGO_WHITE,
  motto: 'We are the best in the business',
  menu: [
    {
      id: 1,
      title: `More on ${COMPANY_NAME}`,
      items: NAVBAR_DATA.filter((item) => item.footer_left),
    },
    {
      id: 2,
      title: 'Need Help?',
      items: NAVBAR_DATA.filter((item) => item.footer_right),
    },
  ],

  disclaimer_menu: [
    {
      id: 1,
      title: 'Terms of Service',
      url: '/terms-of-service',
    },
    {
      id: 2,
      title: 'Privacy Policy',
      url: '/privacy-policy',
    },
    {
      id: 3,
      title: 'Sitemap',
      url: '/sitemap.xml',
    },
  ],
};
