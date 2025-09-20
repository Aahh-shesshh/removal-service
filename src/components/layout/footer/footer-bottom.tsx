import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { COMPANY_NAME } from '@/data/constants';
import { data } from '@/data/footer';

export default function FooterBottom() {
  return (
    <div className="layout flex flex-col items-center gap-4 md:flex-row md:gap-32">
      <p className="font-medium">
        &copy; {new Date().getFullYear()} {COMPANY_NAME}
      </p>
      <ul className="flex items-center gap-4">
        {data.disclaimer_menu.map((item, i) => (
          <li key={i} className="inline-block">
            <Button variant="link" asChild className="px-0">
              <Link href={item.url}>{item.title}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
