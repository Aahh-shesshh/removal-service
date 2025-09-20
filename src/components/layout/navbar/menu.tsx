'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { COMPANY_LOGO } from '@/data/constants';
import { data } from '@/data/navigation';
import { cn } from '@/lib/utils';

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export function Menu() {
  const items = data.filter((item) => item.navbar);

  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {items?.map((item, i) => {
          if (!item?.items) {
            return (
              <NavigationMenuItem key={i}>
                <Link href={item.url} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={i}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[560px] md:grid-cols-2 lg:w-[820px] lg:grid-cols-[.75fr_1fr_1fr] xl:w-[960px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href={item.items.at(0)?.url || '/'}
                      >
                        <Image
                          src={item.items.at(0)?.icon || COMPANY_LOGO}
                          alt={item.items.at(0)?.title || item.title}
                          width={180}
                          height={180}
                        />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          {item.items.at(0)?.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-tight text-muted-foreground">
                          {item?.items.at(0)?.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {item.items.slice(1).map((subItem, j) => (
                    <ListItem key={j} href={subItem.url} title={subItem.title}>
                      {subItem.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
