'use client';

import { LucideChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from './ui/button';

export default function Breadcrumb() {
  const routes = usePathname().split('/');

  return (
    <div className="layout flex flex-col py-4 sm:flex-row sm:items-center">
      {routes?.map((route, i) => {
        const Component = i === routes.length - 1 ? 'span' : Link;
        return (
          <div key={i} className="flex items-center">
            <Button asChild variant="link">
              <Component
                href={routes.slice(0, i + 1).join('/') || '/'}
                className="capitalize"
              >
                {route.replace('-', ' ') || 'Home'}
              </Component>
            </Button>
            {i < routes.length - 1 && <LucideChevronRight size={21} />}
          </div>
        );
      })}
    </div>
  );
}
