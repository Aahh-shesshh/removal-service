import React from 'react';

import { cn } from '@/lib/utils';

type TProps = {
  subtitle: string;
  title: string;
  description: string;
  className: string;
};

export default function TitleContainer({
  subtitle,
  title,
  className,
  description,
}: Partial<TProps>) {
  return (
    <div className={cn('space-y-3', className)}>
      {title || subtitle ? (
        <div className="title-container">
          {subtitle ? <p className="h4">{subtitle}</p> : null}
          {title ? <p className="h2">{title}</p> : null}
        </div>
      ) : null}
      {description ? (
        <p
          className="text-lg font-light leading-relaxed text-gray-700"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      ) : null}
    </div>
  );
}
