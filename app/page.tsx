"use client"

import { useState, useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (window.imageMapResize) {
      window.imageMapResize('map');
    }
  }, [isDesktop]);

  return (
    <>
      <Script
        src="/imageMapResizer.min.js"
        strategy="afterInteractive"
      />

      {/* Container that wraps the image and any overlay elements */}
      <div className="relative bg-[#012D42] p-0 gap-12 font-[family-name:Cardo, serif] min-h-[calc(100vh-210px)]">
        <div className="relative">
          <picture className="block">
            {/* For medium screens and up */}
            <source media="(min-width: 1024px)" srcSet="000_Doors_Background.webp" />
            {/* For smaller screens */}
            <source media="(max-width: 1023px)" srcSet="000_Doors_Background_small.webp" />
            <img
              src="000_Doors_Background.webp"
              useMap="#image-map"
              className="w-full h-auto lg:object-cover"
              alt="Doors Background"
              onLoad={() => {
                if (window.imageMapResize) {
                  window.imageMapResize('map');
                }
              }}
            />
          </picture>

          {/* Overlay text */}
          <div 
            className="absolute left-1/2 top-8 transform -translate-x-1/2"
          >
            <span className="font-cardo text-white tracking-wide text-sm md:text-md lg:text-lg">
              <i>· Click on a door and explore ·</i>
            </span>
          </div>

          {/* Navigation links positioned on top of the image */}
          <div className="absolute left-[5%] sm:left[21%] md:left-[18%] lg:left-[22%] xl:left-[23%] top-[20%] md:top-[12%] lg:top-[15%] xl:top-[15%]">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition= {{ duration: 0.3 }}
            >
              <Link href="/neuroscientist" className="font-cardo text-white tracking-wide text-xs sm:text-lg">
              NEUROSCIENTIST
              </Link>
            </motion.div>
          </div>
          <div className="absolute left-[42%] sm:left-[44%] lg:left-[46.5%] top-[20%] md:top-[12%] lg:top-[15%]">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition= {{ duration: 0.3 }}
            >
              <Link href="/author" className="font-cardo text-white tracking-wide text-xs sm:text-lg">
                AUTHOR
              </Link>
            </motion.div>
          </div>
          <div className="absolute left-[75%] sm:left-[77%] md:left-[65%] lg:left-[67.5%] top-[20%] md:top-[12%] lg:top-[15%]">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition= {{ duration: 0.3 }}
            >
              <Link href="/musician" className="font-cardo text-white tracking-wide text-xs sm:text-lg">
                MUSICIAN
              </Link>
            </motion.div>
          </div>
          
          {isDesktop ? (
            <map name="image-map">
              <area alt="Go to Neuroscientist's Page" title="Go to Neuroscientist's Page" href="/neuroscientist" coords="444,209,678,720" shape="rect"/>
              <area alt="Go to Author's Page" title="Go to Author's Page" href="/author" coords="845,209,1077,722" shape="rect"/>
              <area alt="Go to Musician's Page" title="Go to Musician's Page" href="/musician" coords="1260,210,1476,726" shape="rect"/>
            </map>
          ) : (
            <map name="image-map">
              <area alt="Go to Neuroscientist's Page" title="Go to Neuroscientist's Page" href="/neuroscientist" coords="74,396,308,915" shape="rect"/>
              <area alt="Go to Author's Page" title="Go to Author's Page" href="/author" coords="468,398,706,914" shape="rect"/>
              <area alt="Go to Musician's Page" title="Go to Musician's Page" href="/musician" coords="886,401,1102,917" shape="rect"/>
            </map>
          )}
        </div>
      </div>
    </>
  );
};