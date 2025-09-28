"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { data } from "@/data/navigation";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700 border border-transparent hover:border-green-200 hover:shadow-sm",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none text-gray-900">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600 mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Menu() {
  const items = data.filter((item) => item.navbar);

  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList className="space-x-2">
        {items?.map((item, i) => {
          if (!item?.items) {
            return (
              <NavigationMenuItem key={i}>
                <Link href={item.url} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-gray-700 font-medium hover:text-green-700 hover:bg-green-50 transition-all duration-200 rounded-lg px-4 py-2 border border-transparent hover:border-green-200"
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={i}>
              <NavigationMenuTrigger className="text-gray-700 font-medium hover:text-green-700 hover:bg-green-50 transition-all duration-200 rounded-lg px-4 py-2 border border-transparent hover:border-green-200 data-[state=open]:bg-green-50 data-[state=open]:text-green-700">
                {item.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border border-gray-200 shadow-xl rounded-xl bg-white/95 backdrop-blur-sm">
                <ul className="grid gap-3 p-6 md:w-[600px] md:grid-cols-2 lg:w-[850px] lg:grid-cols-[.75fr_1fr_1fr] xl:w-[980px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex size-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-green-50/80 to-green-100/80 p-6 no-underline outline-none focus:shadow-lg hover:shadow-lg transition-all duration-300 border border-green-200/50 hover:border-green-300"
                        href={item.items.at(0)?.url || "/"}
                      >
                        <div className="mb-2 mt-4 text-xl font-bold text-green-800">
                          {item.items.at(0)?.title}
                        </div>
                        <p className="line-clamp-3 text-sm leading-tight text-green-700">
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
