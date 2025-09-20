import { type LucideIcon } from 'lucide-react';
import React from 'react';

type TProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({ description, title, ...props }: TProps) {
  return (
    <div className="space-y-6">
      <div className="size-fit rounded-full bg-blue-500/10 p-10">
        <props.icon className="text-blue-600" size={51} />
      </div>
      <div className="space-y-4">
        <p className="text-xl font-bold">{title}</p>
        <p className="w-11/12 font-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
