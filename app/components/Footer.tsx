import Image from 'next/image';
import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

const navigation = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/TheAmygdaloids/',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props} style={{ color: "#0E3A4E" }}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Bluesky',
      href: 'https://bsky.app/profile/theamygdaloid.bsky.social',
      icon: () => (
        <Image 
            src='/Footer_Logos-02.png'
            alt='Bluesky Logo'
            width={20}
            height={20}
        />
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/joseph-ledoux/',
      icon: () => (
        <Image 
            src='/Footer_Logos-03.png'
            alt='LinkedIn Logo'
            width={20}
            height={20}
        />
      ),
    },
    {
      name: 'Email',
      href: 'mailto:ledoux@cns.nyu.edu',
      icon: () => (
        <Image 
            src='/Footer_Logos-04.png'
            alt='Email Logo'
            width={20}
            height={20}
        />
      ),
    },
  ]

export default function Footer() {
    return(
        <footer className="bg-lightText">
            <div className="md:h-16 h-24 mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-around lg:px-20">
                <div className="flex justify-center items-center gap-x-6 md:order-2">
                    {navigation.map((item) => (
                        <a 
                          key={item.name} 
                          href={item.href} 
                          className="dark hover:text-accent"
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                        <span className="sr-only">{item.name}</span>
                        <item.icon aria-hidden="true" className="size-6" />
                        </a>
                    ))}
                </div>
                <p className="mt-2 text-center text-xs/6 text-dark md:order-1 md:mt-0">
                &copy; Copyright ©2025 Joseph E. LeDoux. All rights reserved.
                </p>
            </div>
        </footer>

    )
}