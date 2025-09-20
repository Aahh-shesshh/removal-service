import React from 'react';

import { data } from '@/data/home/section-4';
import { cn } from '@/lib/utils';

import TitleContainer from '../title-container';
import FeatureCard from './feature-card';

export default function WhyUsSection() {
  return (
    <div className="space-y-16">
      <TitleContainer
        className="w-full md:w-3/5"
        title={data.title}
        subtitle={data.subtitle}
      />
      <div
        className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8')}
      >
        {data.list.map((review, i) => (
          <FeatureCard
            key={i}
            description={review.description}
            icon={review.icon}
            title={review.title}
          />
        ))}
      </div>
    </div>
  );
}
