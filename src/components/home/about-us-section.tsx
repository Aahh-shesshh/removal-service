import { LucideArrowRight, LucideChevronsRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { data } from '@/data/home/section-5';

import TitleContainer from '../title-container';
import { Button } from '../ui/button';

export default function AboutUsSection() {
  return (
    <div className="flex flex-col items-stretch gap-12 md:flex-row">
      <div className="w-full space-y-6">
        <TitleContainer
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
        />
        <div className="flex justify-end">
          <Button asChild variant="link">
            <Link href={data.link.url}>
              <span className="sr-only">
                {data.right.link.label} about us by clicking
              </span>{' '}
              {data.link.label}
              <LucideChevronsRight className="ml-4" size={14} />
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full space-y-8 bg-blue-500/10 p-6 md:p-12">
        <div className="space-y-3">
          <div className="title-container">
            <h2 className="text-2xl font-bold">{data.right.title}</h2>
          </div>
          <p className="text-lg font-light leading-relaxed text-gray-700">
            {data.right.description}
          </p>
        </div>
        <Button variant="success" size="xl" className="w-full" asChild>
          <Link href={data.right.link.url} className="space-x-4 md:space-x-8">
            <span>{data.right.link.label}</span>
            <LucideArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}
