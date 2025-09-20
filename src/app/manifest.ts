import type { MetadataRoute } from 'next';

import { data } from '@/data/about-us';
import { COMPANY_NAME } from '@/data/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_NAME,
    short_name: COMPANY_NAME,
    description: data.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#facc15',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/x-icon',
        purpose: 'any',
      },
      {
        src: '/splash.png',
        sizes: '512x512',
        type: 'image/x-icon',
      },
      {
        src: '/maskable.png',
        sizes: '512x512',
        type: 'image/x-icon',
        purpose: 'maskable',
      },
    ],
  };
}
