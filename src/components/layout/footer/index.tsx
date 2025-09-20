import { LucideFacebook, LucideInstagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  COMPANY_GOOGLE_MAP_IFRAME,
  FACEBOOK_PAGE_URL,
  INSTAGRAM_PROFILE_URL,
} from '@/data/constants';
import { data } from '@/data/footer';

import FooterBottom from './footer-bottom';

export default function Footer() {
  return (
    <footer className="bg-[#FFC537]">
      <div className="layout flex flex-col items-stretch gap-10 p-10 md:flex-row md:gap-0">
        <div className="w-full space-y-10">
          <div className="space-y-4">
            <Image src={data.logo} alt="logo" width={250} height={250} />
            <p className="text-xl font-medium">{data.motto}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {data.menu?.map((item, i) => (
              <div key={i} className="space-y-5">
                <p className="font-bold">{item.title}</p>
                <ul>
                  {item.items.map((subItem, j) => (
                    <li key={j}>
                      <Button variant="link" asChild className="px-0">
                        <Link href={subItem.url} scroll>
                          {subItem.title}
                        </Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 flex items-center gap-4">
              <Link
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                className="rounded-full bg-black p-2 text-white transition-all duration-300 ease-in-out hover:bg-black/70"
              >
                <LucideFacebook size={22} />
              </Link>
              <Link
                href={INSTAGRAM_PROFILE_URL.replace('/embed', '')}
                target="_blank"
                className="rounded-full bg-black p-2 text-white transition-all duration-300 ease-in-out hover:bg-black/70"
              >
                <LucideInstagram size={22} />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <iframe
            title="company-location"
            src={COMPANY_GOOGLE_MAP_IFRAME}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-yellow-500 py-6">
        <FooterBottom />
      </div>
    </footer>
  );
}
