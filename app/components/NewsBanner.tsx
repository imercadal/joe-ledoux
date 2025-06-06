"use client"

import { useState } from 'react';
import Link from 'next/link';
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function NewsBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-40 isolate flex items-center gap-x-6 overflow-hidden bg-darker px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
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
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-xs text-lightText">
          <strong className="font-semibold">New book coming soon!</strong>
          <i></i>
        </p>
        <Link
          href="/author/67e455e79d343bd2f8bfe258"
          className="flex-none italic rounded-full bg-accent px-3.5 py-1 text-xs font-semibold text-white shadow-xs hover:bg-subMenu focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          &rarr;
          Starting Over <span aria-hidden="true"></span>
        </Link>
      </div>

      {/* Dismiss Button */}
      <div className="flex flex-1 justify-end">
        <button type="button" onClick={() => setIsVisible(false)} className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-lightText" />
        </button>
      </div>
    </div>
  );
}


/*
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function NewsBanner() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-darker px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-xs/6 text-lightText">
          <strong className="font-semibold">New book coming soon!</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          The Neuroscience Behind Doors 
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-accent px-3.5 py-1 text-xs font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Pre-order now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-gray-900" />
        </button>
      </div>
    </div>
  )
}
*/