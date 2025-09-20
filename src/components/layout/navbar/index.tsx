'use client';

import { LucideMenu } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { COMPANY_LOGO, SITE_URL } from '@/data/constants';
import { cn } from '@/lib/utils';

import { Menu } from './menu';

const MobileDrawer = dynamic(() => import('./mobile-drawer'), {
  ssr: false,
  loading: () => (
    <Button variant="link" className="block md:hidden">
      <LucideMenu size={20} />
    </Button>
  ),
});

export default function Navbar() {
  return (
    <div className={cn('border-b shadow-sm ')}>
      <nav className="layout flex h-20 items-center justify-between">
        <div className="flex items-center gap-24">
          <Link href={SITE_URL || '/'}>
            <Image
              src={COMPANY_LOGO || ''}
              alt="logo"
              width={180}
              height={180}
            />
          </Link>
          <Menu />
        </div>
        <div className="flex items-center gap-2">
          <Link href="/book-quote">
            <Button variant="success" type="submit">
              Request a quote
            </Button>
          </Link>
          <MobileDrawer />
        </div>
      </nav>
    </div>
  );
}
