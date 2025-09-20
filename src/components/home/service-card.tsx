import { LucideChevronsRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '../ui/button';

type TProps = {
  icon: string;
  title: string;
  overview?: string;
  number: number;
  slug: string;
};

export default function ServiceCard({
  overview,
  title,
  icon,
  number,
  slug,
}: TProps) {
  return (
    <div className="shadow-block relative inline-block w-full break-inside-avoid space-y-4 border p-4 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:bg-blue-500/5 md:p-8">
      <p className="absolute -top-2 right-8 bg-white font-secondary text-2xl font-black leading-4 text-gray-400">
        # {number}
      </p>
      <div className="flex size-[100px] items-center justify-center rounded-full bg-blue-500/10">
        <Image src={icon} alt={title} width={150} height={150} />
      </div>
      <p className="text-2xl font-extrabold">{title}</p>
      {overview && (
        <p className="line-clamp-4 font-light leading-relaxed">{overview}</p>
      )}
      <div className="flex justify-end">
        <Button asChild variant="link">
          <Link href={`/service/${slug}`} className="space-x-3">
            <span className="sr-only">
              Learn more about {title} by clicking{' '}
            </span>
            <span>Learn more</span>
            <LucideChevronsRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
