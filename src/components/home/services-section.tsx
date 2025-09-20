import React from 'react';

import { data } from '@/data/services';

import TitleContainer from '../title-container';
import ServiceCard from './service-card';

export default function ServicesSection() {
  return (
    <div className="space-y-16" id="services">
      <TitleContainer
        className="w-full md:w-3/5"
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
      />
      <div className="columns-1 space-y-8 md:columns-2">
        {data.list?.map((review, i) => (
          <ServiceCard
            key={i}
            number={i + 1}
            overview={review?.overview}
            icon={review.icon}
            title={review.title}
            slug={review.slug}
          />
        ))}
      </div>
    </div>
  );
}
