import Link from 'next/link';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Navbar() {
    return (
        <nav className="items-center">
            <div className='p-4'>
                <Link href='/'><h1>JOSEPH LEDOUX</h1></Link>
            </div>
            <div className='flex justify-center gap-16 items-baseline'>
                <Link href="/about" className="hover:opacity-75"><h2>about</h2></Link>
{/* neuroscientist popover*/}
                <Popover className="relative">
                    <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-dark hover:opacity-75">
                        <span><h2>neuroscientist</h2></span>
                    </PopoverButton>

                    <PopoverPanel
                        transition
                        className="absolute left-0 z-10 mt-0 -translate-y-3 flex w-screen max-w-min px-1 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"    
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

{/* author popover*/}
                <Popover className="relative">
                    <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-dark hover:opacity-75">
                        <span><h2>author</h2></span>
                    </PopoverButton>

                    <PopoverPanel
                        transition
                        className="absolute left-0 z-10 mt-0 -translate-y-3 flex w-screen max-w-min px-1 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"    
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
                                
{/* musician popover*/}
                <Popover className="relative">
                    <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-dark hover:opacity-75">
                        <span><h2>musician</h2></span>
                    </PopoverButton>

                    <PopoverPanel
                        transition
                        className="absolute left-0 z-10 mt-0 -translate-y-3 flex w-screen max-w-min px-1 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"    
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
{/* media popover*/}
                <Popover className="relative">
                    <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-dark hover:opacity-75">
                        <span><h2>media</h2></span>
                    </PopoverButton>

                    <PopoverPanel
                        transition
                        className="absolute left-0 z-10 mt-0 -translate-y-3 flex w-screen max-w-min px-1 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"    
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

/*
<nav className="items-center">
            <div className='p-4'>
                <Link href='/'><h1>JOSEPH LEDOUX</h1></Link>
            </div>
            <div className='flex justify-center gap-16 items-baseline'>
                <Link href="/about"><h2>about</h2></Link>
                <Link href="/neuroscientist"><h2>neuroscientist</h2></Link>
                <Popover className="relative">
                    <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-dark">
                        <span><h2>author</h2></span>
                    </PopoverButton>

                    <PopoverPanel
                        transition
                        className="absolute left-0 z-10 mt-0 -translate-y-3 flex w-screen max-w-min px-1 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"    
                    >
                        <div className="w-36 shrink bg-accent p-1 text-sm/6 font-semibold ring-1 shadow-lg ring-gray-900/5">
                            {pages.map((item) => (
                                <div>
                                    <PopoverButton as={Link} key={item.name} href={item.href} className="text-lightText block p-1 hover:text-dark">
                                        <p className='text-left'>{item.name}</p>
                                    </PopoverButton>

                                    {item.media && (
                                        <Popover className="relative">
                                            <PopoverButton className="text-lightText block p-1 hover:text-dark">
                                                <ChevronDownIcon aria-hidden="true" className="size-5" />
                                            </PopoverButton>
                    
                                            <PopoverPanel className="absolute left-full top-0 ml-2 w-24 bg-subMenu p-1 shadow-lg ring-1 ring-gray-900/5">
                                                {subpages.map((subpage) => (
                                                <PopoverButton as={Link} key={subpage.name} href={subpage.href} className="text-lightText block p-1 hover:text-dark">
                                                    <p className="text-left">{subpage.name}</p>
                                                </PopoverButton>
                                                ))}
                                            </PopoverPanel>
                                        </Popover>
                                    )}
                                </div>
                            ))}
                        </div> 

                    </PopoverPanel>
                </Popover>
                <Link href="/musician"><h2>musician</h2></Link>
                <Link href="/media"><h2>media</h2></Link>
            </div>
        </nav>
*/