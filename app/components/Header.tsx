/*
ADDING SCALE CHANGE ON HOVER AND OTHER ANIMATIONS
<motion.svg 
  style={{ opacity: opacity1, y }} 
  onClick={ openModal }
  variants={ buttonVariants }
  initial="initial" 
  whileHover="hover"

  const buttonVariants = {
    initial: {
            scale: 1,
            boxShadow: "none",
    },
    hover: {
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
    }
};
*/
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

interface NavItem {
  label: string;
  href?: string;
  submenu?: { label: string; href?: string; mediamenu?: { label: string; href: string }[] }[];
}

const mainNavItems: NavItem[] = [
  { label: "about", href: "/about" },
  {
    label: "neuroscientist",
    href: "/neuroscientist",
    submenu: [
      { label: "home", href: "/neuroscientist" },
      { label: "publications", href: "/neuroscientist/publications" },
      { label: "lectures", href: "/neuroscientist/lectures" },
      { label: "interviews", href: "/media/interviews"},
      { label: "writeups", href: "/media/read"}
    ],
  },
  {
    label: "author",
    href: "/author",
    submenu: [
      { label: "books", href: "/author" },
      { label: "columns & blog", href: "/author/columns" },
      { label: "interviews", href: "/media/interviews"},
      { label: "writeups", href: "/media/read" },
    ],
  },
  {
    label: "musician",
    href: "/musician",
    submenu: [
      { label: "the amygdaloids", href: "/musician" },
      { label: "albums", href: "/musician#albums" },
      { label: "gigs", href: "/musician#gigs" },
      { label: "gallery", href: "/musician#gallery" },
      { label: "performances", href: "/media/performances"},
      { label: "writeups", href: "/media/read" },
    ],
  }
];

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
      return pathname === item.href || pathname.startsWith(item.href + "/");
    });
    setActiveSubmenu(parentNavItem || null);
  }, [pathname]);

  return (
    <header className="relative bg-white shadow-md z-50">
      {/* Desktop Navigation */}
      <nav className="mx-auto max-w-4xl flex sm:flex-col items-center justify-between pt-4 pb-1 px-4 lg:px-8">
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
            <div key={item.label} className="relative group">
              <Link 
                href={item.href ?? "#"} 
                className={`
                  font-medium text-accent underline-offset-8 flex items-center hover:opacity-75 
                  hover:scale-105 transition-transform duration-200
                  hover:relative hover:before:content-[''] hover:before:absolute hover:before:bottom-[-4px] hover:before:left-[25%] hover:before:w-[50%] hover:before:h-px hover:before:border-b hover:before:border-accent
                  ${ item.href && 
                    (pathname === item.href || pathname.startsWith(item.href + "/"))
                    ? "relative opacity-75 before:content-[''] before:absolute before:bottom-[-4px] before:left-[25%] before:w-[50%] before:border-b-[2px] before:border-accent [text-shadow:0_0_8px_rgba(0,200,255,0.6)]"
                    : ""
                  }
                `}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </nav>

{/* Horizontal Submenu Bar */}
{activeSubmenu?.submenu && (
  <div className="hidden sm:flex sticky h-8 top-0 bg-accent py-1 flex tracking-wide justify-center items-center shadow-lg z-40">
    {activeSubmenu.submenu.map((sub) => (
      <div key={sub.label} className="relative z-40">
        {sub.mediamenu ? (
          <button
            type="button"
            onClick={() =>
              setOpenMediaMenu((prev) =>
                prev === sub.label ? null : sub.label
              )
            }
            className={`px-2 sm:px-4 py-2 text-white text-xs sm:text-sm ${
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
            className={`px-2 sm:px-4 py-2 text-white text-xs sm:text-sm hover:text-dark ${
              sub.href &&
              (pathname === sub.href)
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
)}


      {/* Mobile Navigation */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="sm:hidden z-50">
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-3/4 max-w-lg my-16 bg-white p-6 shadow-lg">
        <div className="flex justify-end">
          <button onClick={() => setMobileMenuOpen(false)} className="p-2" aria-label="Close Menu">
            <XMarkIcon className="h-6 w-6 text-accent" />
          </button>
        </div>
        <nav className="mt-6">
            {mainNavItems.map((item) => (
              <Disclosure as="div" key={item.label} className="border-b border-gray-200 py-2">
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
        </DialogPanel>
      </Dialog>
    </header>
  );
}

/*
'use client'

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItem {
  label: string;
  href?: string;
  submenu?: { label: string; href?: string; mediamenu?: { label: string; href: string }[] }[];
}

const mainNavItems: NavItem[] = [
  { label: "about", href: "/about" },
  {
    label: "neuroscientist",
    href: "/neuroscientist",
    submenu: [
      { label: "publications", href: "/neuroscientist/publications" },
      { label: "lectures", href: "/neuroscientist/lectures" },
      {
        label: "media",
        mediamenu: [
          { label: "watch", href: "/media/watch?tag=neuroscience" },
          { label: "listen", href: "/media/listen?tag=neuroscience" },
          { label: "read", href: "/media/read?tag=neuroscience" },
        ],
      },
    ],
  },
  {
    label: "author",
    href: "/author",
    submenu: [
      { label: "books", href: "/author" },
      { label: "columns & blog", href: "/author/columns" },
      {
        label: "media",
        mediamenu: [
          { label: "watch", href: "/media/watch?tag=books" },
          { label: "listen", href: "/media/listen?tag=books" },
          { label: "read", href: "/media/read?tag=boks" },
        ],
      },
    ],
  },
  {
    label: "musician",
    href: "/musician",
    submenu: [
      { label: "the amygdaloids", href: "/musician" },
      { label: "albums", href: "#albums" },
      { label: "shows", href: "#shows" },
      { label: "other projects", href: "#otherprojects" },
      {
        label: "media",
        mediamenu: [
          { label: "watch", href: "/media/watch?tag=music" },
          { label: "listen", href: "/media/listen?tag=music" },
          { label: "read", href: "/media/read?tag=music" },
        ],
      },
    ],
  },
  {
    label: "media",
    href: "/media/read",
    submenu: [
      { label: "watch", href: "/media/watch" },
      { label: "listen", href: "/media/listen" },
      { label: "read", href: "/media/read" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSubmenu, setActiveSubmenu] = useState<NavItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMediaMenu, setOpenMediaMenu] = useState<string | null>(null);
  const [mobileSubmenuIndex, setMobileSubmenuIndex] = useState(0);

  useEffect(() => {
    setActiveSubmenu(mainNavItems[1]);
  }, []);
  
  useEffect(() => {
    if (activeSubmenu?.submenu) {
      const index = activeSubmenu.submenu.findIndex(
        (sub) =>
          sub.href &&
          (pathname === sub.href || pathname.startsWith(sub.href + "/"))
      );
      setMobileSubmenuIndex(index !== -1 ? index : 0);
    }
  }, [pathname, activeSubmenu]);

  useEffect(() => {
    setOpenMediaMenu(null);
  }, [pathname]);
  
  useEffect(() => {
    const parentNavItem = mainNavItems.find((item) => {
      if (!item.href || !item.submenu) return false;
      if (item.label.toLowerCase() === "media") {
        return pathname.startsWith("/media");
      }
      return pathname === item.href || pathname.startsWith(item.href + "/");
    });
    setActiveSubmenu(parentNavItem || null);
  }, [pathname]);

  const prevMobileSubmenu = () => {
    if (activeSubmenu?.submenu) {
      const newIndex =
        mobileSubmenuIndex === 0
          ? activeSubmenu.submenu.length - 1
          : mobileSubmenuIndex - 1;
      setMobileSubmenuIndex(newIndex);
      const newItem = activeSubmenu.submenu[newIndex];
      if (newItem.href) {
        router.push(newItem.href);
      }
    }
  };

  const nextMobileSubmenu = () => {
    if (activeSubmenu?.submenu) {
      const newIndex =
        mobileSubmenuIndex === activeSubmenu.submenu.length - 1
          ? 0
          : mobileSubmenuIndex + 1;
      setMobileSubmenuIndex(newIndex);
      const newItem = activeSubmenu.submenu[newIndex];
      if (newItem.href) {
        router.push(newItem.href);
      }
    }
  };

  return (
    <header className="relative bg-white shadow-md z-50">
      {/* Desktop Navigation *
      <nav className="mx-auto max-w-4xl flex sm:flex-col items-center justify-between pt-4 pb-1 px-4 lg:px-8">
        <div className="pt-3 pb-3 sm:pb-0">
          <Link href="/" className="font-extrabold text-dark">
            <h1 className="text-3xl">Joseph LeDoux</h1>
          </Link>
        </div>
        {/* Mobile menu button *
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-accent"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Desktop Navigation *
        <div className="hidden sm:flex sm:gap-x-12 my-2 items-center">
          {mainNavItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link 
                href={item.href ?? "#"} 
                className={`
                  font-medium text-accent underline-offset-8 flex items-center hover:opacity-75 
                  hover:relative hover:before:content-[''] hover:before:absolute hover:before:bottom-[-4px] hover:before:left-[25%] hover:before:w-[50%] hover:before:h-px hover:before:border-b hover:before:border-accent
                  ${ item.href && 
                    (pathname === item.href || pathname.startsWith(item.href + "/"))
                    ? "relative before:content-[''] before:absolute before:bottom-[-4px] before:left-[25%] before:w-[50%] before:h-[2px] before:border-b before:border-accent"
                    : ""
                  }
                `}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </nav>
        {/* Mobile Submenu Bar *
        {activeSubmenu?.submenu && (
        <div className="sm:hidden bg-accent py-2 flex items-center justify-between">
          <button onClick={prevMobileSubmenu} className="px-2">
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </button>
          <span className="text-white font-semibold text-sm">
            {activeSubmenu.submenu[mobileSubmenuIndex].label}
          </span>
          <button onClick={nextMobileSubmenu} className="px-2">
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      )}
{/* Horizontal Submenu Bar dor Desktop*
{activeSubmenu?.submenu && (
  <div className="hidden sm:flex sticky h-8 top-0 bg-accent py-1 flex tracking-wide justify-center items-center shadow-lg z-40">
    {activeSubmenu.submenu.map((sub) => (
      <div key={sub.label} className="relative z-40">
        {sub.mediamenu ? (
          <button
            type="button"
            onClick={() =>
              setOpenMediaMenu((prev) =>
                prev === sub.label ? null : sub.label
              )
            }
            className={`px-2 sm:px-4 py-2 text-white text-xs sm:text-sm ${
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
            className={`px-2 sm:px-4 py-2 text-white text-xs sm:text-sm hover:text-dark ${
              sub.href &&
              (pathname === sub.href || pathname.startsWith(sub.href + "/"))
                ? "font-bold opacity-100"
                : "opacity-75"
            }`}
          >
            {sub.label}
          </Link>
        )}

        {/* Second-Level Media Submenu *
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
)}


      {/* Mobile Navigation *
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="sm:hidden z-50">
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-3/4 max-w-lg my-24 bg-white p-6 shadow-lg">
          <nav className="mt-6">
            {mainNavItems.map((item) => (
              <Disclosure as="div" key={item.label} className="border-b border-gray-200 py-2">
                <DisclosureButton className="flex w-full items-center justify-between text-base font-semibold text-accent hover:opacity-75">
                  <Link href={item.href as string} onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>
                </DisclosureButton>
              </Disclosure>
            ))}
          </nav>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
*/