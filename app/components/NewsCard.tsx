'use client';

import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  href: string;
  imgSrc?: string;
  title: string;
  tag: string;
  date: Date;
  external?: boolean;
}

export default function NewsCard({ href, imgSrc, title, tag, date, external = false }: NewsCardProps) {
  const Wrapper = external ? 'a' : Link;

  return (
    <Wrapper
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="block"
    >
      <div className="max-w-4xl mx-auto mb-12 px-6 md:px-4 sm:px-0">
        <div className="sm:flex border-b border-gray-300">
          {imgSrc && 
          <div className="sm:py-4 sm:pr-6">
            <Image
              src={imgSrc}
              alt={title}
              width={800}
              height={500}
              className="w-full max-h-64 sm:w-80 h-auto object-contain rounded-md"
            />
          </div>
          }
          <div className="w-full flex flex-col mt-4 sm:pb-1 sm:justify-end">
            <div className='flex'>
              <p className="text-xs text-accent font-azeret">{tag.toUpperCase()} —
              </p>
              <p className="ml-3 text-xs text-accent font-azeret">
                {date.toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
              </p>
            </div>
            <div className="w-full flex items-end justify-between">
              <h2 className="mb-2 mt-2 text-lg font-bold">{title}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-accent size-8 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
