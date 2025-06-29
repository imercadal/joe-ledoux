"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { XMarkIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from 'framer-motion';

export default function NewsBanner() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const shouldBeVisible = pathname !== '/news';

  useEffect(() => {
    if (!shouldBeVisible){
      setIsVisible(false)
    }
  }, [shouldBeVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="news-banner"
          initial={{ y: -100, opacity: 0}}
          animate={{ y: 0, opacity: 1}}
          exit={{ y: -100, opacity: 0}}
          transition={{duration: 0.4}}
          className='relative z-40 isolate flex items-center gap-x-6 overflow-hidden bg-darker px-6 py-2.5 sm:px-3.5 sm:before:flex-1'
        >
      {/* Background Gradient 1 */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-577/310 w-[36.0625rem] bg-gradient-to-r from-[#0d3a4e] to-[#0091bd] opacity-30"
        />
      </div>

      {/* Background Gradient 2 */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-577/310 w-[36.0625rem] bg-gradient-to-r from-[#062637] to-[#0d3a4e] opacity-30"
        />
      </div>

      {/* News Text */}
      <div className="flex flex-wrap items-center justify-around gap-y-2">
        <p className="text-xs text-lightText">
          <Link href='/author/67e455e79d343bd2f8bfe258'>
            <strong className="font-semibold">New book coming soon!</strong>
          </Link>
        </p>
        { pathname === '/career-celebration' ?
        <></>
        : 
        <>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-1 sm:mx-2 inline size-0.5 fill-current text-white">
            <circle r={1} cx={1} cy={1} />
          </svg>
          <p className="text-xs text-lightText mr-4">
            <Link href='/career-celebration'>
              <strong className="font-semibold">Joe&apos;s Career Celebration</strong>
            </Link>
          </p>
        </>
        }
        <Link
          href="/news"
          className="ml-1 sm:ml-4 flex-none italic rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-xs hover:bg-subMenu focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          onClick={() => setIsVisible(false)}
        >
          &rarr;
          Check out all the <strong>NEWS</strong> here <span aria-hidden="true"></span>
        </Link>
      </div>

      {/* Dismiss Button */}
      <div className="flex flex-1 justify-end">
        <button type="button" onClick={() => setIsVisible(false)} className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-lightText" />
        </button>
      </div>

        </motion.div>
      )}


    </AnimatePresence>
  );
}

/**
 "use client"

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function NewsBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  if (pathname === '/news' || !isVisible) return null;

  return (
    <div className="relative z-40 isolate flex items-center gap-x-6 overflow-hidden bg-darker px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      {/* Background Gradient 1 *
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-577/310 w-[36.0625rem] bg-gradient-to-r from-[#0d3a4e] to-[#0091bd] opacity-30"
        />
      </div>

      {/* Background Gradient 2 *
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-577/310 w-[36.0625rem] bg-gradient-to-r from-[#062637] to-[#0d3a4e] opacity-30"
        />
      </div>

      {/* News Text *
      <div className="flex flex-wrap items-center justify-around gap-y-2">
        <p className="text-xs text-lightText">
          <strong className="font-semibold">New book coming soon!</strong>
          <i></i>
        </p>
        <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current text-white">
          <circle r={1} cx={1} cy={1} />
        </svg>
        <p className="text-xs text-lightText mr-4">
          <strong className="font-semibold">Joe's Retirement Party Photos</strong>
          <i></i>
        </p>
        <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current text-darker">
          <circle r={1} cx={1} cy={1} />
        </svg>
        <Link
          href="/news"
          className="ml-4 flex-none italic rounded-full bg-accent px-3.5 py-1 text-xs font-semibold text-white shadow-xs hover:bg-subMenu focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          onClick={() => setIsVisible(false)}
        >
          &rarr;
          Check out all the <strong>NEWS</strong> here <span aria-hidden="true"></span>
        </Link>
      </div>

      {/* Dismiss Button *
      <div className="flex flex-1 justify-end">
        <button type="button" onClick={() => setIsVisible(false)} className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-lightText" />
        </button>
      </div>
    </div>
  );
}
 */