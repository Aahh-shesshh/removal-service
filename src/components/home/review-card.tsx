import { format } from 'date-fns';
import { LucideMessageCircleHeart } from 'lucide-react';
import React from 'react';

type TProps = {
  title: string;
  description: string;
  name: string;
  date: string;
};

export default function ReviewCard({
  date,
  description,
  name,
  title,
}: Partial<TProps>) {
  return (
    <div className="shadow-block break-inside-avoid space-y-4 border p-3 transition-all duration-500 ease-in-out hover:scale-105 md:p-6">
      <div className="space-y-2">
        <q className="text-lg font-bold">{title}</q>
        <div className="flex items-center gap-2">
          <LucideMessageCircleHeart className="text-blue-500" size={14} />
          <span className="text-sm font-light text-gray-700">
            {name}, {format(new Date(date || Date.now()), 'MMMM dd, yyyy')}
          </span>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
