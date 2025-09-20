import React from 'react';

import { data } from '@/data/home/section-3';
import { cn } from '@/lib/utils';

import TitleContainer from '../title-container';
import ReviewCard from './review-card';

export default function ReviewsSection() {
  return (
    <div className="space-y-16" id="testimonials">
      <TitleContainer
        className="w-full md:w-3/5"
        title={data.title}
        description={data.description}
      />
      <div
        className={cn(
          'space-y-8 gap-8 columns-1 sm:columns-2',
          data.reviews.length < 5 && 'md:columns-2',
          data.reviews.length < 3 && 'md:columns-1',
          data.reviews.length >= 5 && 'md:columns-3',
        )}
      >
        {data.reviews.map((review, i) => (
          <ReviewCard
            key={i}
            date={review.date}
            description={review.description}
            name={review.name}
            title={review.title}
          />
        ))}
      </div>
    </div>
  );
}
