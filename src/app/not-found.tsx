import { LucideArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { SITE_URL } from '@/data/constants';

export default function NotFound() {
  return (
    <div className="layout flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-12">
      <Image
        src="/images/not-found.svg"
        height={550}
        width={550}
        alt="Not found"
      />
      <h6 className="text-xl font-semibold">
        The page you are looking for does not exist. Please check the URL or go
        back to the homepage.
      </h6>
      <Button asChild size="lg">
        <Link href={SITE_URL} className="space-x-6">
          <LucideArrowLeft size={18} />
          <span>Go back to the homepage</span>
        </Link>
      </Button>
    </div>
  );
}
