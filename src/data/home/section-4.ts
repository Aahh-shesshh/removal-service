import { BadgePercent, GraduationCap, Leaf } from 'lucide-react';

import { COMPANY_NAME } from '../constants';

export const data = {
  subtitle: `Why ${COMPANY_NAME}?`,
  title: `3 reasons why people use ${COMPANY_NAME}`,
  list: [
    {
      id: 1,
      icon: BadgePercent,
      title: 'Comprehensive Service Offerings',
      description:
        'Multi Removal & Cleaning Services provides a wide range of services, including house removals, office relocations, end of lease cleaning, carpet cleaning, and specialized tasks like piano removals, all under one roof for customer convenience.',
    },
    {
      id: 2,
      icon: GraduationCap,
      title: 'Experienced and Skilled Professionals',
      description:
        "The company's team comprises experienced and highly trained professionals who are experts in their respective fields, ensuring that every job is executed with precision, efficiency, and attention to detail, giving customers peace of mind.",
    },
    {
      id: 3,
      icon: Leaf,
      title: 'Eco-Friendly and Responsible Approach',
      description:
        'Multi Removal & Cleaning Services prioritizes the use of eco-friendly cleaning products and practices, controlled water and energy consumption, and demonstrates a commitment to sustainability, allowing customers to choose a service provider that values environmental responsibility',
    },
  ],
};
