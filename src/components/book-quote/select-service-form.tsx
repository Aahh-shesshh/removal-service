'use client';

import { LucideArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';

import { useBookQuoteCtx } from '@/context/book-quote';
import { data } from '@/data/services';
import { cn, genSeq, objectToURLSearchParams } from '@/lib/utils';

import { Button } from '../ui/button';

export default function SelectServiceForm({
  className,
}: {
  className?: string;
}) {
  const code = useSearchParams().get('post-code');

  const { state, setState } = useBookQuoteCtx();

  const handleClick = (service: string, type: string) => {
    setState({
      ...state,
      service,
      type,
    });
  };

  const query = objectToURLSearchParams({
    'post-code': code,
    service: state?.service,
  });

  const isDisabled = useMemo(() => !state?.service, [state]);

  const Component = isDisabled ? 'span' : Link;

  const seq = genSeq(data.list?.length || 0);

  return (
    <div className="space-y-12">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {data.list?.map((item, i) => (
          <li key={i}>
            <Button
              variant="outline"
              size="lg"
              className={cn(
                'w-full justify-start whitespace-normal h-full py-4',
                state?.service === item.slug && 'border-yellow-500',
                seq.bigScreen.includes(i) && 'md:bg-gray-100',
                seq.omits.includes(i) && 'md:bg-white',
                seq.smallScreen.includes(i) && 'bg-gray-100',
                className,
              )}
              onClick={() => handleClick(item.slug, item.type)}
            >
              {item.title}
            </Button>
          </li>
        ))}
      </ul>
      <div>
        <Button
          asChild
          variant="success"
          size="xl"
          className="w-full space-x-6"
          disabled={isDisabled}
        >
          <Component
            href={
              state?.type === 'service'
                ? ` /book-quote/select-pickup-location/?${query}`
                : '/book-quote/additional-information'
            }
            className={cn(isDisabled && 'pointer-events-none opacity-50')}
          >
            <span>
              {state?.type === 'service' ? 'Select pickup location' : 'Next'}
            </span>

            <LucideArrowRight />
          </Component>
        </Button>
      </div>
    </div>
  );
}
