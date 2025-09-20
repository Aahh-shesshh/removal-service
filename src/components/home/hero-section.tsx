import { LucideArrowRight, LucideCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { data } from '@/data/home/section-1';

import { Button } from '../ui/button';

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse items-stretch justify-between md:flex-row">
      <div className="space-y-8 py-4 md:w-[55%] md:p-4">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {data.title}
          </h1>
          <p className="text-lg text-gray-700">{data.description}</p>
        </div>
        <div>
          <Link href="/book-quote/select-service">
            <Button size="xl" variant="success" type="submit">
              Request a Service <LucideArrowRight className="ml-3" size={22} />
            </Button>
          </Link>
        </div>

        <ul className="space-y-2 text-lg text-gray-700">
          {data.list?.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <LucideCheck className="mt-0.5 text-blue-600" />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-2/5">
        <Image
          src={data.image}
          alt="logo"
          width={470}
          height={470}
          className="h-[470px] w-full object-cover"
          loading="eager"
          quality={80}
        />
      </div>
    </div>
  );
}
