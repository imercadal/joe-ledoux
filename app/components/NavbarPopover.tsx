"use client";

import { 
    Popover,
    PopoverButton,
    PopoverPanel,
} from "@headlessui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface NavItem {
  label: string;
  href?: string;
  submenu?: NavItem[];
}

interface NavbarPopoverProps {
  title: string;
  items: NavItem[];
}

export default function NavbarPopover({ title, items }: NavbarPopoverProps) {
  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center text-sm font-semibold text-accent underline-offset-8 hover:underline hover:opacity-75">
        {title}
      </PopoverButton>
      <PopoverPanel
        transition
        className="absolute left-0 z-10 mt-0 -translate-y-2 flex w-full max-w-min px-1 transition
                   data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out
                   data-leave:duration-150 data-leave:ease-in shadow-xl"
      >
        <div className="w-44 shrink bg-accent p-1 text-sm font-semibold shadow-xl">
          {items.map((item) =>
            item.submenu ? (
              <div key={item.label}>
                <Popover className="relative">
                  <PopoverButton className="text-lightText block p-1 hover:text-dark">
                    <span className="flex justify-between items-center">
                      {item.label}
                      <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  </PopoverButton>
                  <PopoverPanel className="absolute bg-accent left-full top-0 ml-2 w-20 p-1 shadow-lg">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href || "#"}
                        className="text-lightText block p-1 hover:text-dark"
                      >
                        <p>{sub.label}</p>
                      </Link>
                    ))}
                  </PopoverPanel>
                </Popover>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="text-lightText block p-1 hover:text-dark"
              >
                <p className="text-left">{item.label}</p>
              </Link>
            )
          )}
        </div>
      </PopoverPanel>
    </Popover>
  );
}
