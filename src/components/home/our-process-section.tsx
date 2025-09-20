import React from 'react';

import { data } from '@/data/home/section-2';

import TitleContainer from '../title-container';

export default function OurProcessSection() {
  return (
    <div className="flex flex-col items-stretch justify-between gap-8 rounded-md bg-blue-500/10 p-6 md:flex-row md:p-12">
      <TitleContainer
        subtitle={data.subtitle}
        title={data.title}
        description={data.description}
        className="md:w-2/5"
      />
      <div className="md:w-1/2">
        <ul className="space-y-4">
          {data.list.map((item, i) => (
            <li key={i} className="relative flex gap-4 md:gap-8">
              <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                {i + 1}
              </div>
              {i + 1 !== data.list.length && (
                <div className="absolute left-4 top-8 h-full w-[2px] bg-blue-600" />
              )}
              <div className="space-y-2">
                <p className="text-xl font-bold">{item.title}</p>
                <p className="font-light text-gray-700">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
