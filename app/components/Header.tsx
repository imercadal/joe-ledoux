'use client'

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { NavItem, mainNavItems, isActivePath } from "./header-data";

function DesktopNavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isActivePath(pathname, item.href);
  return (
    <div key={item.label} className="relative group">
      <Link
        href={item.href ?? "#"}
        className={`
          font-medium text-accent underline-offset-8 flex items-center hover:opacity-75
          hover:scale-105 transition-transform duration-200
          hover:relative hover:before:content-[''] hover:before:absolute hover:before:bottom-[-4px] hover:before:left-[25%] hover:before:w-[50%] hover:before:h-px hover:before:border-b hover:before:border-accent
          ${active
            ? "relative opacity-75 before:content-[''] before:absolute before:bottom-[-4px] before:left-[25%] before:w-[50%] before:border-b-[2px] before:border-accent [text-shadow:0_0_8px_rgba(0,200,255,0.6)]"
            : ""
          }
        `}
      >
        {item.label}
      </Link>
    </div>
  );
}

function SubmenuBar({
  activeSubmenu,
  pathname,
  openMediaMenu,
  setOpenMediaMenu,
}: {
  activeSubmenu: NavItem;
  pathname: string;
  openMediaMenu: string | null;
  setOpenMediaMenu: (label: string | null | ((prev: string | null) => string | null)) => void;
}) {
  return (
    <div className="flex sm:flex sticky h-8 top-0 bg-accent py-1 tracking-wide justify-center items-center shadow-lg z-40">
      {activeSubmenu.submenu!.map((sub) => (
        <div key={sub.label} className="relative z-40">
          {sub.mediamenu ? (
            <button
              type="button"
              onClick={() =>
                setOpenMediaMenu((prev) =>
                  prev === sub.label ? null : sub.label
                )
              }
              className={`px-2 sm:px-4 py-2 text-white text-xs sm:text-sm text-center ${
                openMediaMenu === sub.label
                  ? "font-bold text-dark opacity-100"
                  : "opacity-75 hover:text-dark"
              }`}
            >
              <ChevronDownIcon className="inline mr-1" />
              {sub.label}
            </button>
          ) : (
            <Link
              href={sub.href ?? "#"}
              className={`px-1 sm:px-4 text-white text-xs sm:text-sm text-center hover:text-dark ${
                sub.href && pathname === sub.href
                  ? "font-bold opacity-100"
                  : "opacity-75"
              }`}
            >
              {sub.label}
            </Link>
          )}

          {/* Second-Level Media Submenu */}
          {sub.mediamenu && openMediaMenu === sub.label && (
            <div
              className="absolute z-50 left-0 -translate-y-1 top-full flex space-x-2 bg-lightAccent shadow-md px-2"
            >
              {sub.mediamenu.map((media) => (
                <Link
                  key={media.label}
                  href={media.href ?? "#"}
                  className="px-3 py-1 text-xs text-darkest hover:text-dark"
                >
                  {media.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MobileNavPanel({
  activeSubmenu,
  setMobileMenuOpen,
}: {
  activeSubmenu: NavItem | null;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  return (
    <nav className="mt-6">
      {mainNavItems.map((item) => (
        <Disclosure
          as="div"
          key={item.label}
          defaultOpen={activeSubmenu?.label === item.label}
          className="border-b border-gray-200 py-2"
        >
          <DisclosureButton className="flex w-full items-center justify-start text-base font-semibold text-accent hover:opacity-75">
            {item.href && !item.submenu ? (
              <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </DisclosureButton>
          {item.submenu && (
            <DisclosurePanel className="pl-4">
              {item.submenu.map((sub) => (
                <div key={sub.label} className="">
                  {sub.href ? (
                    <Link
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block justify-start flex px-6 py-2 text-sm text-white bg-accent shadow-xl border-b border-gray-200"
                    >
                      {sub.label}
                    </Link>
                  ) : (
                    <span className="block justify-start flex px-6 py-2 text-sm text-white bg-accent border-b border-gray-200">{sub.label}</span>
                  )}
                  {sub.mediamenu && (
                    <div className="pl-8 justify-start items-start flex flex-col bg-accent">
                      {sub.mediamenu.map((media) => (
                        <Link
                          key={media.label}
                          href={media.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-sm text-lightText italic"
                        >
                          <ArrowLongRightIcon className="inline h-3 w-4 text-lightText" />
                          {media.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </DisclosurePanel>
          )}
        </Disclosure>
      ))}
    </nav>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [activeSubmenu, setActiveSubmenu] = useState<NavItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMediaMenu, setOpenMediaMenu] = useState<string | null>(null);

  useEffect(() => {
    setActiveSubmenu(mainNavItems[1]);
  }, []);

  useEffect(() => {
    setOpenMediaMenu(null);
  }, [pathname]);

  useEffect(() => {
    const parentNavItem = mainNavItems.find((item) => {
      if (!item.href || !item.submenu) return false;
      if (item.label.toLowerCase() === "media") {
        return pathname.startsWith("/media");
      }
      return isActivePath(pathname, item.href);
    });
    setActiveSubmenu(parentNavItem || null);
  }, [pathname]);

  return (
    <header className="relative bg-white shadow-md z-50">
      {/* Desktop Navigation */}
      <nav className="mx-auto max-w-5xl flex sm:flex-col items-center justify-between pt-4 pb-1 px-4 lg:px-8">
        <div className="pt-3 pb-3 sm:pb-0">
          <Link href="/" className="font-extrabold text-dark">
            <h1 className="text-3xl">Joseph LeDoux</h1>
          </Link>
        </div>
        {/* Mobile menu button */}
        <div className="sm:hidden">
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-accent"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden sm:flex sm:gap-x-12 my-2 items-center">
          {mainNavItems.map((item) => (
            <DesktopNavLink key={item.label} item={item} pathname={pathname} />
          ))}
        </div>
      </nav>

      {/* Horizontal Submenu Bar */}
      {activeSubmenu?.submenu && (
        <SubmenuBar
          activeSubmenu={activeSubmenu}
          pathname={pathname}
          openMediaMenu={openMediaMenu}
          setOpenMediaMenu={setOpenMediaMenu}
        />
      )}

      {/* Mobile-Only Home Submenu */}
      {pathname === "/" && (
        <div className="flex sm:hidden sticky h-8 top-0 bg-accent py-1 tracking-wide justify-center items-center shadow-lg z-40">
          <Link
            href={mainNavItems[0].href ?? "#"}
            className="px-1 sm:px-4 text-white text-xs sm:text-sm text-center opacity-75 hover:text-dark"
          >
            {mainNavItems[0].label}
          </Link>
        </div>
      )}

      {/* Mobile Navigation */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="sm:hidden z-50">
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-3/4 max-w-lg my-16 bg-white p-6 shadow-lg">
          <div className="flex justify-end">
            <button onClick={() => setMobileMenuOpen(false)} className="p-2" aria-label="Close Menu">
              <XMarkIcon className="h-6 w-6 text-accent" />
            </button>
          </div>
          <MobileNavPanel activeSubmenu={activeSubmenu} setMobileMenuOpen={setMobileMenuOpen} />
        </DialogPanel>
      </Dialog>
    </header>
  );
}
