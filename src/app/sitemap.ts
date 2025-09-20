import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/data/constants';
import { data } from '@/data/services';

export async function generateSitemaps() {
  return [{ id: 1 }];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return (
    data.list?.map((item) => ({
      url: `${SITE_URL}/service/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    })) || []
  );
}
