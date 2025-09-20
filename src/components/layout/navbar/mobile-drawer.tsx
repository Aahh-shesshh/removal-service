import { LucideMenu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { COMPANY_LOGO } from '@/data/constants';
import { data } from '@/data/navigation';

import FooterBottom from '../footer/footer-bottom';

export default function MobileDrawer() {
  const items = data.filter((item) => item.navbar);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className="block md:hidden">
          <LucideMenu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div className="space-y-16">
          <SheetHeader>
            <Image
              src={COMPANY_LOGO}
              alt="Logo"
              width={200}
              height={60}
              className="h-[60px] w-[200px] object-contain"
            />
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {items?.map((item, i) => (
              <SheetClose key={i} asChild>
                <Button variant="link" asChild className="justify-start px-0">
                  <Link href={item.url}>{item.title}</Link>
                </Button>
              </SheetClose>
            ))}
          </div>
        </div>
        <SheetFooter className="space-y-4">
          <FooterBottom />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
