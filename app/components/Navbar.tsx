"use client";

import { useState } from 'react';
import Link from 'next/link';
import NavDropdown from './NavDropdown';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto max-w-4xl flex md:flex-col items-center justify-between p-4 lg:px-8">
        <div className="p-2">
          <Link href="/">
            <h1>JOSEPH LEDOUX</h1>
          </Link>
        </div>
        {/* Mobile menu open button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-accent"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        {/* Desktop navigation */}
        <PopoverGroup className="hidden md:flex md:gap-x-12 items-center">
          <Link
            href="/about"
            className="text-base font-semibold text-accent underline-offset-8 hover:underline hover:opacity-75"
          >
            about
          </Link>
          {/* Neuroscientist */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-base font-semibold text-accent underline-offset-8 hover:underline hover:opacity-75">
              neuroscientist
            </PopoverButton>
            
            <PopoverPanel
              transition
              className="absolute left-0 z-10 mt-0 -translate-y-2 flex w-full max-w-min px-1 transition
                         data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out
                         data-leave:duration-150 data-leave:ease-in"
            >
              <div className="w-36 shrink bg-accent p-1 text-sm font-semibold ring-1 shadow-lg ring-gray-900/5">
                <div>
                  <PopoverButton
                    as={Link}
                    href="/neuroscientist"
                    className="text-lightText block p-1 hover:text-dark"
                  >
                    <p className="text-left">publications</p>
                  </PopoverButton>
                  <PopoverButton
                    as={Link}
                    href="/neuroscientist/lectures"
                    className="text-lightText block p-1 hover:text-dark"
                  >
                    <p className="text-left">lectures</p>
                  </PopoverButton>
                  <PopoverButton
                    as={Link}
                    href="/media"
                    className="text-lightText block hover:text-dark"
                  >
                    <Popover className="relative">
                      <PopoverButton className="text-lightText block p-1 hover:text-dark">
                        <p className="text-left"> media <ChevronDownIcon aria-hidden="true" className="inline h-5 w-5" />
                        </p>
                      </PopoverButton>
                      <PopoverPanel className="absolute left-full top-0 ml-2 w-20 bg-subMenu p-1 shadow-lg ring-1 ring-gray-900/5">
                        <PopoverButton
                          as={Link}
                          href="/media/watch?tag=neuroscience"
                          className="text-lightText block p-1 hover:text-dark"
                        >
                          <p>watch</p>
                        </PopoverButton>
                        <PopoverButton
                          as={Link}
                          href="/media/listen?tag=neuroscience"
                          className="text-lightText block p-1 hover:text-dark"
                        >
                          <p>listen</p>
                        </PopoverButton>
                        <PopoverButton
                          as={Link}
                          href="/media/read?tag=neuroscience"
                          className="text-lightText block p-1 hover:text-dark"
                        >
                          <p>read</p>
                        </PopoverButton>
                      </PopoverPanel>
                    </Popover>
                  </PopoverButton>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
          {/* Author */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-base font-semibold text-accent underline-offset-8 hover:underline hover:opacity-75">
              author
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute w-40 left-0 z-10 mt-0 -translate-y-2 flex w-full px-1 transition
                         data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out
                         data-leave:duration-150 data-leave:ease-in"
            >
              <div className="w-full bg-accent px-1 text-sm font-semibold shadow-lg">
                <div>
                  <PopoverButton
                    as={Link}
                    href="/author"
                    className="text-lightText block p-1 hover:text-dark"
                  >
                    <p className='text-left'>books</p>
                  </PopoverButton>
                  <PopoverButton
                    as={Link}
                    href="/columns"
                    className="text-lightText block p-1 hover:text-dark"
                  >
                    <p className='text-left'>columns &amp; blog</p>
                  </PopoverButton>
                  <PopoverButton
                    as={Link}
                    href="/media"
                    className="text-lightText block hover:text-dark"
                  >
                    <Popover className="relative">
                      <PopoverButton className="text-lightText block p-1 hover:text-dark">
                        <p className='text-left'>media <ChevronDownIcon aria-hidden="true" className="inline h-5 w-5" />
                        </p>
                      </PopoverButton>
                      <PopoverPanel className="absolute left-full top-0 ml-2 w-20 bg-subMenu p-1 shadow-lg ring-1 ring-gray-900/5">
                        <PopoverButton
                          as={Link}
                          href="/media/watch?tag=books"
                          className="text-lightText block p-1 hover:text-dark"
                        >
                          <p>watch</p>
                        </PopoverButton>
                        <PopoverButton
                          as={Link}
                          href="/media/listen?tag=books"
                          className="text-lightText block p-1 hover:text-dark"
                        >
                          <p>listen</p>
                        </PopoverButton>
                        <PopoverButton
                          as={Link}
                          href="/media/read?tag=books"
                          className="text-lightText block p-1 hover:text-dark"
                        >
                          <p>read</p>
                        </PopoverButton>
                      </PopoverPanel>
                    </Popover>
                  </PopoverButton>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
          {/* Musician */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-base font-semibold text-accent underline-offset-8 hover:underline hover:opacity-75">
              musician
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute w-40 left-0 z-10 mt-0 -translate-y-2 flex w-full max-w-min px-1 transition
                         data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out
                         data-leave:duration-150 data-leave:ease-in"
            >
              <div className="w-36 shrink bg-accent p-1 text-sm font-semibold ring-1 shadow-lg ring-gray-900/5">
                <div>
                  <PopoverButton
                    as={Link}
                    href="/musician"
                    className="text-lightText block p-1 hover:text-dark"
                  >
                    <p className='text-left'>the amygdaloids</p>
                  </PopoverButton>
                  <PopoverButton
                    as={Link}
                    href="/musician/soweare"
                    className="text-lightText block p-1 hover:text-dark"
                  >
                    <p className='text-left'>so we are</p>
                  </PopoverButton>
                  <PopoverButton
                    as={Link}
                    href="/musician/soloprojects"
                    className="text-lightText block p-1 hover:text-dark"
                  >
                    <p className='text-left'>solo projects</p>
                  </PopoverButton>
                  <PopoverButton
                    as={Link}
                    href="/media"
                    className="text-lightText block hover:text-dark"
                  >
                    <Popover className="relative">
                      <PopoverButton className="text-lightText block p-1 hover:text-dark">
                        <p>
                          media <ChevronDownIcon aria-hidden="true" className="inline h-5 w-5" />
                        </p>
                      </PopoverButton>
                      <PopoverPanel className="absolute left-full top-0 ml-2 w-20 bg-subMenu p-1 shadow-lg ring-1 ring-gray-900/5">
                        <PopoverButton
                          as={Link}
                          href="/media/watch?tag=music"
                          className="text-lightText block p-1 hover:text-dark"
                        >
                          <p className='text-left'>watch</p>
                        </PopoverButton>
                        <PopoverButton
                          as={Link}
                          href="/media/listen?tag=music"
                          className="text-lightText block p-1 hover:text-dark"
                        >
                          <p className='text-left'>listen</p>
                        </PopoverButton>
                        <PopoverButton
                          as={Link}
                          href="/media/read?tag=music"
                          className="text-lightText block p-1 hover:text-dark"
                        >
                          <p className='text-left'>read</p>
                        </PopoverButton>
                      </PopoverPanel>
                    </Popover>
                  </PopoverButton>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
          {/* Media */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-base font-semibold text-accent underline-offset-8 hover:underline hover:opacity-75">
              media
            </PopoverButton>
            <PopoverPanel
              transition
              className="transition absolute left-0 z-10 mt-0 -translate-y-2 flex w-full transition
                         data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out
                         data-leave:duration-150 data-leave:ease-in"
            >
              <div className="w-full shrink bg-accent p-1 text-sm font-semibold ring-1 shadow-lg ring-gray-900/5">
                <div>
                  <PopoverButton
                    as={Link}
                    href="/media/watch"
                    className="text-lightText block py-1 hover:text-dark"
                  >
                    <p>watch</p>
                  </PopoverButton>
                  <PopoverButton
                    as={Link}
                    href="/media/listen"
                    className="text-lightText block p-1 hover:text-dark"
                  >
                    <p>listen</p>
                  </PopoverButton>
                  <PopoverButton
                    as={Link}
                    href="/media/read"
                    className="text-lightText block p-1 hover:text-dark"
                  >
                    <p>read</p>
                  </PopoverButton>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>

      {/* Mobile Navigation */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1>JOSEPH LEDOUX</h1>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-accent"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-10">
            <nav className="space-y-4 flex-col items-start">
              <Link
                href="/about"
                className="block pl-10  text-center w-full text-base font-semibold text-accent hover:opacity-75"
              >
                about
              </Link>
              {/* Neuroscientist */}
              <Disclosure as="div" className="border-t border-gray-200 pt-4">
                <DisclosureButton className="flex w-full pl-10 items-center justify-start text-base font-semibold text-accent hover:opacity-75">
                  neuroscientist
                  <ChevronDownIcon className="h-5 w-5" />
                </DisclosureButton>
                <DisclosurePanel className="w-1/2 mx-auto mt-2 space-y-2">
                  <Link
                    href="/neuroscientist"
                    className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                  >
                    publications
                  </Link>
                  <Link
                    href="/neuroscientist/lectures"
                    className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                  >
                    lectures
                  </Link>
                  <Disclosure as="div">
                    <DisclosureButton className="flex w-full items-center justify-center text-sm text-accent font-semibold italic p-1 hover:opacity-75">
                      media
                      <ChevronDownIcon className="h-5 w-5" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-1 pl-4 space-y-1">
                      <Link
                        href="/media/watch?tag=neuroscience"
                        className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                      >
                        watch
                      </Link>
                      <Link
                        href="/media/listen?tag=neuroscience"
                        className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                      >
                        listen
                      </Link>
                      <Link
                        href="/media/read?tag=neuroscience"
                        className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                      >
                        read
                      </Link>
                    </DisclosurePanel>
                  </Disclosure>
                </DisclosurePanel>
              </Disclosure>
              {/* Author */}
              <Disclosure as="div" className="border-t border-gray-200 pt-4">
                <DisclosureButton className="flex w-full pl-10 items-center justify-start text-base font-semibold text-accent hover:opacity-75">
                  author
                  <ChevronDownIcon className="h-5 w-5" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                  <Link
                    href="/author"
                    className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                  >
                    books
                  </Link>
                  <Link
                    href="/columns"
                    className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                  >
                    columns &amp; blog
                  </Link>
                  <Disclosure as="div">
                    <DisclosureButton className="flex w-full items-center justify-center text-sm text-accent font-semibold italic p-1 hover:text-dark">
                      media
                      <ChevronDownIcon className="h-5 w-5" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-1 pl-4 space-y-1">
                      <Link
                        href="/media/watch?tag=books"
                        className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                      >
                        watch
                      </Link>
                      <Link
                        href="/media/listen?tag=books"
                        className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                      >
                        listen
                      </Link>
                      <Link
                        href="/media/read?tag=books"
                        className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                      >
                        read
                      </Link>
                    </DisclosurePanel>
                  </Disclosure>
                </DisclosurePanel>
              </Disclosure>
              {/* Musician */}
              <Disclosure as="div" className="border-t border-gray-200 pt-4">
                <DisclosureButton className="flex w-full pl-10 items-center justify-start text-base font-semibold text-accent hover:opacity-75">
                  musician
                  <ChevronDownIcon className="h-5 w-5" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                  <Link
                    href="/musician"
                    className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                  >
                    the amygdaloids
                  </Link>
                  <Link
                    href="/musician/soweare"
                    className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                  >
                    so we are
                  </Link>
                  <Link
                    href="/musician/soloprojects"
                    className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                  >
                    solo projects
                  </Link>
                  <Disclosure as="div">
                    <DisclosureButton className="flex w-full items-center justify-center font-semibold italic text-accent p-1 hover:opacity-75">
                      media
                      <ChevronDownIcon className="h-5 w-5" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-1 pl-4 space-y-1">
                      <Link
                        href="/media/watch?tag=music"
                        className="block text-lightText p-1 hover:text-dark"
                      >
                        watch
                      </Link>
                      <Link
                        href="/media/listen?tag=music"
                        className="block text-lightText p-1 hover:text-dark"
                      >
                        listen
                      </Link>
                      <Link
                        href="/media/read?tag=music"
                        className="block text-lightText p-1 hover:text-dark"
                      >
                        read
                      </Link>
                    </DisclosurePanel>
                  </Disclosure>
                </DisclosurePanel>
              </Disclosure>
              {/* Media */}
              <Disclosure as="div" className="border-t border-gray-200 pt-4">
                <DisclosureButton className="flex w-full pl-10 items-center justify-start text-base font-semibold text-accent hover:opacity-75">
                  media
                  <ChevronDownIcon className="h-5 w-5" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                  <Link
                    href="/media/watch"
                    className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                  >
                    watch
                  </Link>
                  <Link
                    href="/media/listen"
                    className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                  >
                    listen
                  </Link>
                  <Link
                    href="/media/read"
                    className="block text-sm text-accent font-semibold italic p-1 hover:text-dark"
                  >
                    read
                  </Link>
                </DisclosurePanel>
              </Disclosure>
            </nav>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

/*
import Link from 'next/link';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Navbar() {

    
    return (
        <nav aria-label="Global" className="items-center">
            <div className='p-4'>
                <Link href='/'><h1>JOSEPH LEDOUX</h1></Link>
            </div>
            <div className='flex w-full justify-between gap-1 md:gap-16 items-baseline'>
                <Link href="/about" className="hover:opacity-75"><h2>about</h2></Link>
{/* neuroscientist popover
<Popover className="relative">
<PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-dark hover:opacity-75">
    <span><h2>neuroscientist</h2></span>
</PopoverButton>

<PopoverPanel
    transition
    className="absolute left-0 z-10 mt-0 -translate-y-3 flex w-full max-w-min px-1 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"    
>
    <div className="w-36 shrink bg-accent p-1 text-sm/6 font-semibold shadow-lg">
        
            <div>
                <PopoverButton as={Link} href="/neuroscientist" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>publications</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/neuroscientist/lectures" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>lectures</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/media" className="text-lightText block p-1 hover:text-dark">
                    <Popover className="relative">
                        <PopoverButton className="text-lightText block p-1 hover:text-dark">
                            <p className='text-left'>media <ChevronDownIcon aria-hidden="true" className=" inline size-5" /></p>
                            
                        </PopoverButton>

                        <PopoverPanel className="absolute left-full top-0 ml-2 w-20 bg-subMenu p-1 shadow-lg ring-1 ring-gray-900/5">
                            
                            <PopoverButton as={Link} href="/media/watch?tag=neuroscience" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">watch</p>
                            </PopoverButton>
                            <PopoverButton as={Link} href="/media/listen?tag=neuroscience" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">listen</p>
                            </PopoverButton>
                            <PopoverButton as={Link} href="/media/read?tag=neuroscience" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">read</p>
                            </PopoverButton>
                            
                        </PopoverPanel>
                    </Popover>
                </PopoverButton>
                
                
            </div>
        
    </div> 

</PopoverPanel>
</Popover>

{/* author popover*
<Popover className="relative">
<PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-dark hover:opacity-75">
    <span><h2>author</h2></span>
</PopoverButton>

<PopoverPanel
    transition
    className="absolute left-0 z-10 mt-0 -translate-y-3 flex w-full max-w-min px-1 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"    
>
    <div className="w-36 shrink bg-accent p-1 text-sm/6 font-semibold ring-1 shadow-lg ring-gray-900/5">
        
            <div>
                <PopoverButton as={Link} href="/author" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>books</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/columns" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>columns & blog</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/media" className="text-lightText block p-1 hover:text-dark">
                    <Popover className="relative">
                        <PopoverButton className="text-lightText block p-1 hover:text-dark">
                            <p className='text-left'>media <ChevronDownIcon aria-hidden="true" className=" inline size-5" /></p>
                            
                        </PopoverButton>

                        <PopoverPanel className="absolute left-full top-0 ml-2 w-20 bg-subMenu p-1 shadow-lg ring-1 ring-gray-900/5">
                            
                            <PopoverButton as={Link} href="/media/watch?tag=books" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">watch</p>
                            </PopoverButton>
                            <PopoverButton as={Link} href="/media/listen?tag=books" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">listen</p>
                            </PopoverButton>
                            <PopoverButton as={Link} href="/media/read?tag=books" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">read</p>
                            </PopoverButton>
                            
                        </PopoverPanel>
                    </Popover>
                </PopoverButton>
                
                
            </div>
        
    </div> 

</PopoverPanel>
</Popover>
            
{/* musician popover*
<Popover className="relative">
<PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-dark hover:opacity-75">
    <span><h2>musician</h2></span>
</PopoverButton>

<PopoverPanel
    transition
    className="absolute left-0 z-10 mt-0 -translate-y-3 flex w-full max-w-min px-1 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"    
>
    <div className="w-36 shrink bg-accent p-1 text-sm/6 font-semibold ring-1 shadow-lg ring-gray-900/5">
        
            <div>
                <PopoverButton as={Link} href="/musician" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>the amygdaloids</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/musician/soweare" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>so we are</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/musician/soloprojects" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>solo projects</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/media" className="text-lightText block p-1 hover:text-dark">
                    <Popover className="relative">
                        <PopoverButton className="text-lightText block p-1 hover:text-dark">
                            <p className='text-left'>media <ChevronDownIcon aria-hidden="true" className=" inline size-5" /></p>
                            
                        </PopoverButton>

                        <PopoverPanel className="absolute left-full top-0 ml-2 w-20 bg-subMenu p-1 shadow-lg ring-1 ring-gray-900/5">
                            
                            <PopoverButton as={Link} href="/media/watch?tag=music" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">watch</p>
                            </PopoverButton>
                            <PopoverButton as={Link} href="/media/listen?tag=music" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">listen</p>
                            </PopoverButton>
                            <PopoverButton as={Link} href="/media/read?tag=music" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">read</p>
                            </PopoverButton>
                            
                        </PopoverPanel>
                    </Popover>
                </PopoverButton>
                
                
            </div>
        
    </div> 

</PopoverPanel>
</Popover>
{/* media popover*
<Popover className="relative">
<PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-dark hover:opacity-75">
    <span><h2>media</h2></span>
</PopoverButton>

<PopoverPanel
    transition
    className="absolute left-0 z-10 mt-0 -translate-y-3 flex w-full max-w-min px-1 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"    
>
    <div className="w-36 shrink bg-accent p-1 text-sm/6 font-semibold ring-1 shadow-lg ring-gray-900/5">
        
            <div>
                <PopoverButton as={Link} href="/media/watch" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>watch</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/media/listen" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>listen</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/media/read" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>read</p>
                </PopoverButton>
                
            </div>
        
    </div> 

</PopoverPanel>
</Popover>
</div>
</nav>
)
}

<nav aria-label="Global" className="items-center">
            <div className='p-4'>
                <Link href='/'><h1>JOSEPH LEDOUX</h1></Link>
            </div>
            <div className='flex w-full justify-between gap-1 md:gap-16 items-baseline'>
                <Link href="/about" className="hover:opacity-75"><h2>about</h2></Link>

<Popover className="relative">
<PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-dark hover:opacity-75">
    <span><h2>neuroscientist</h2></span>
</PopoverButton>

<PopoverPanel
    transition
    className="absolute left-0 z-10 mt-0 -translate-y-3 flex w-full max-w-min px-1 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"    
>
    <div className="w-36 shrink bg-accent p-1 text-sm/6 font-semibold ring-1 shadow-lg ring-gray-900/5">
        
            <div>
                <PopoverButton as={Link} href="/neuroscientist" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>publications</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/neuroscientist/lectures" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>lectures</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/media" className="text-lightText block p-1 hover:text-dark">
                    <Popover className="relative">
                        <PopoverButton className="text-lightText block p-1 hover:text-dark">
                            <p className='text-left'>media <ChevronDownIcon aria-hidden="true" className=" inline size-5" /></p>
                            
                        </PopoverButton>

                        <PopoverPanel className="absolute left-full top-0 ml-2 w-20 bg-subMenu p-1 shadow-lg ring-1 ring-gray-900/5">
                            
                            <PopoverButton as={Link} href="/media/watch?tag=neuroscience" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">watch</p>
                            </PopoverButton>
                            <PopoverButton as={Link} href="/media/listen?tag=neuroscience" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">listen</p>
                            </PopoverButton>
                            <PopoverButton as={Link} href="/media/read?tag=neuroscience" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">read</p>
                            </PopoverButton>
                            
                        </PopoverPanel>
                    </Popover>
                </PopoverButton>
                
                
            </div>
        
    </div> 

</PopoverPanel>
</Popover>


<Popover className="relative">
<PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-dark hover:opacity-75">
    <span><h2>author</h2></span>
</PopoverButton>

<PopoverPanel
    transition
    className="absolute left-0 z-10 mt-0 -translate-y-3 flex w-full max-w-min px-1 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"    
>
    <div className="w-36 shrink bg-accent p-1 text-sm/6 font-semibold ring-1 shadow-lg ring-gray-900/5">
        
            <div>
                <PopoverButton as={Link} href="/author" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>books</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/columns" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>columns & blog</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/media" className="text-lightText block p-1 hover:text-dark">
                    <Popover className="relative">
                        <PopoverButton className="text-lightText block p-1 hover:text-dark">
                            <p className='text-left'>media <ChevronDownIcon aria-hidden="true" className=" inline size-5" /></p>
                            
                        </PopoverButton>

                        <PopoverPanel className="absolute left-full top-0 ml-2 w-20 bg-subMenu p-1 shadow-lg ring-1 ring-gray-900/5">
                            
                            <PopoverButton as={Link} href="/media/watch?tag=books" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">watch</p>
                            </PopoverButton>
                            <PopoverButton as={Link} href="/media/listen?tag=books" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">listen</p>
                            </PopoverButton>
                            <PopoverButton as={Link} href="/media/read?tag=books" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">read</p>
                            </PopoverButton>
                            
                        </PopoverPanel>
                    </Popover>
                </PopoverButton>
                
                
            </div>
        
    </div> 

</PopoverPanel>
</Popover>
            

<Popover className="relative">
<PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-dark hover:opacity-75">
    <span><h2>musician</h2></span>
</PopoverButton>

<PopoverPanel
    transition
    className="absolute left-0 z-10 mt-0 -translate-y-3 flex w-full max-w-min px-1 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"    
>
    <div className="w-36 shrink bg-accent p-1 text-sm/6 font-semibold ring-1 shadow-lg ring-gray-900/5">
        
            <div>
                <PopoverButton as={Link} href="/musician" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>the amygdaloids</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/musician/soweare" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>so we are</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/musician/soloprojects" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>solo projects</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/media" className="text-lightText block p-1 hover:text-dark">
                    <Popover className="relative">
                        <PopoverButton className="text-lightText block p-1 hover:text-dark">
                            <p className='text-left'>media <ChevronDownIcon aria-hidden="true" className=" inline size-5" /></p>
                            
                        </PopoverButton>

                        <PopoverPanel className="absolute left-full top-0 ml-2 w-20 bg-subMenu p-1 shadow-lg ring-1 ring-gray-900/5">
                            
                            <PopoverButton as={Link} href="/media/watch?tag=music" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">watch</p>
                            </PopoverButton>
                            <PopoverButton as={Link} href="/media/listen?tag=music" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">listen</p>
                            </PopoverButton>
                            <PopoverButton as={Link} href="/media/read?tag=music" className="text-lightText block p-1 hover:text-dark">
                                <p className="text-left">read</p>
                            </PopoverButton>
                            
                        </PopoverPanel>
                    </Popover>
                </PopoverButton>
                
                
            </div>
        
    </div> 

</PopoverPanel>
</Popover>

<Popover className="relative">
<PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-dark hover:opacity-75">
    <span><h2>media</h2></span>
</PopoverButton>

<PopoverPanel
    transition
    className="absolute left-0 z-10 mt-0 -translate-y-3 flex w-full max-w-min px-1 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"    
>
    <div className="w-36 shrink bg-accent p-1 text-sm/6 font-semibold ring-1 shadow-lg ring-gray-900/5">
        
            <div>
                <PopoverButton as={Link} href="/media/watch" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>watch</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/media/listen" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>listen</p>
                </PopoverButton>
                <PopoverButton as={Link} href="/media/read" className="text-lightText block p-1 hover:text-dark">
                    <p className='text-left'>read</p>
                </PopoverButton>
                
            </div>
        
    </div> 

</PopoverPanel>
</Popover>
</div>
</nav>
)
}
*/