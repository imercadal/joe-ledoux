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

  console.log("Active Submenu:", activeSubmenu);
  console.log("Current Pathname:", pathname);

  return (
    <header className="bg-white shadow-md z-50">
      {/* Desktop Navigation */}
      <nav className="mx-auto max-w-4xl flex md:flex-col items-center justify-between pt-4 pb-1 lg:px-8">
        <div className="pt-3">
          <Link href="/" className="text-lg font-extrabold text-dark">
            <h1>Joseph LeDoux</h1>
          </Link>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-accent"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-x-12 my-2 items-center">
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

{/* Horizontal Submenu Bar */}
{activeSubmenu?.submenu && (
  <div className="sticky top-0 bg-accent py-1 flex tracking-wide justify-center items-center shadow-md z-50">
    {activeSubmenu.submenu.map((sub) => (
      <div key={sub.label} className="relative z-50">
        {sub.mediamenu ? (
          // Render as a toggle button if a mediamenu exists.
          <button
            type="button"
            onClick={() =>
              setOpenMediaMenu((prev) =>
                prev === sub.label ? null : sub.label
              )
            }
            className={`px-4 py-2 text-white text-sm ${
              openMediaMenu === sub.label
                ? "font-bold text-dark opacity-100"
                : "opacity-75 hover:text-dark"
            }`}
          >
            <ChevronDownIcon className="inline mr-1" />
            {sub.label}
          </button>
        ) : (
          // Otherwise render a normal Link.
          <Link
            href={sub.href ?? "#"}
            className={`px-4 py-2 text-white text-sm hover:text-dark ${
              sub.href &&
              (pathname === sub.href || pathname.startsWith(sub.href + "/"))
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
            className="absolute z-50 left-0 top-full mt-1 flex space-x-2 bg-lightAccent shadow-md px-2"
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
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full max-w-sm bg-white p-6 shadow-lg">
          <nav className="mt-6">
            {mainNavItems.map((item) => (
              <Disclosure as="div" key={item.label} className="border-b border-gray-200 py-2">
                <DisclosureButton className="flex w-full items-center justify-between text-base font-semibold text-accent hover:opacity-75">
                  {item.label}
                </DisclosureButton>
              </Disclosure>
            ))}
          </nav>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
