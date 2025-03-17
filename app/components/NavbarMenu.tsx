"use client";

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface NavItem {
  label: string;
  href?: string;
  submenu?: NavItem[];
}

interface NavbarMenuProps {
  title: string;
  items: NavItem[];
}

export default function NavbarMenu({ title, items }: NavbarMenuProps) {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="flex justify-start items-center gap-x-1 text-sm font-semibold text-accent underline-offset-8 hover:underline hover:opacity-75">
        {title}
      </MenuButton>
      <MenuItems className="absolute text-left left-0 z-10 mt-0 -translate-y-2 flex min-w-max px-1 shadow-xl bg-accent">
        <div className="min-w-max shrink p-1 text-sm font-semibold">
          {items.map((item) =>
            item.submenu ? (
              <Menu as="div" key={item.label} className="relative">
                <MenuButton className="text-lightText block p-1 hover:text-dark whitespace-nowrap data-[active]:text-darker">
                  <span className="flex justify-start items-center">
                    {item.label}
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </MenuButton>
                <MenuItems className="absolute bg-accent left-full top-0 ml-2 min-w-max p-1 shadow-lg">
                  {item.submenu.map((sub) => (
                    <MenuItem key={sub.label}>
                        <Link
                          href={sub.href || "#"}
                          className="text-lightText block p-1 hover:text-dark whitespace-nowrap text-left data-[active]:opacity-75"
                        >
                          {sub.label}
                        </Link>
                      
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            ) : (
              <MenuItem key={item.label}>
                  <Link
                    href={item.href || "#"}
                    className="text-lightText block p-1 hover:text-dark whitespace-nowrap data-[active]:opacity-75"
                  >
                    {item.label}
                  </Link>
              </MenuItem>
            )
          )}
        </div>
      </MenuItems>
    </Menu>
  );
}