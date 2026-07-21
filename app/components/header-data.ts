export interface NavItem {
  label: string;
  href?: string;
  submenu?: { label: string; href?: string; mediamenu?: { label: string; href: string }[] }[];
}

export const mainNavItems: NavItem[] = [
  { label: "bio, cv, contact", href: "/about" },
  {
    label: "neuroscientist",
    href: "/neuroscientist",
    submenu: [
      { label: "neuroscientist", href: "/neuroscientist" },
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
      { label: "lectures", href: "/author/lectures" },
      { label: "interviews", href: "/media/interviews"},
      { label: "writeups", href: "/media/read" },
    ],
  },
  {
    label: "musician",
    href: "/musician",
    submenu: [
      { label: "about", href: "/musician" },
      { label: "albums", href: "/musician#albums" },
      { label: "gigs", href: "/musician#gigs" },
      { label: "gallery", href: "/musician#gallery" },
      { label: "performances", href: "/media/performances"},
      { label: "writeups", href: "/media/read" },
    ],
  }
];

export function isActivePath(pathname: string, href?: string): boolean {
  if (!href) return false;
  return pathname === href || pathname.startsWith(href + "/");
}
