"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';

const doors = [
  {
    href: '/neuroscientist',
    label: 'NEUROSCIENTIST',
    labelClasses: 'left-[5%] sm:left-[21%] md:left-[18%] lg:left-[22%] xl:left-[23%] top-[20%] md:top-[12%] lg:top-[15%]',
    overlayClasses: 'left-[7.4%] top-[31.7%] w-[18.3%] h-[32.3%] sm:left-[6.2%] sm:top-[26.7%] sm:w-[19.6%] sm:h-[35.0%] lg:left-[23.1%] lg:top-[20.8%] lg:w-[12.2%] lg:h-[50.7%]',
  },
  {
    href: '/author',
    label: 'AUTHOR',
    labelClasses: 'left-[42%] sm:left-[44%] lg:left-[46.5%] top-[20%] md:top-[12%] lg:top-[15%]',
    overlayClasses: 'left-[39.2%] top-[31.6%] w-[20.0%] h-[32.0%] sm:left-[39.3%] sm:top-[26.9%] sm:w-[20.0%] sm:h-[34.8%] lg:left-[44.0%] lg:top-[20.8%] lg:w-[12.1%] lg:h-[50.9%]',
  },
  {
    href: '/musician',
    label: 'MUSICIAN',
    labelClasses: 'left-[75%] sm:left-[77%] md:left-[65%] lg:left-[67.5%] top-[20%] md:top-[12%] lg:top-[15%]',
    overlayClasses: 'left-[74.3%] top-[31.8%] w-[18.2%] h-[32.5%] sm:left-[74.3%] sm:top-[27.1%] sm:w-[18.1%] sm:h-[34.8%] lg:left-[65.6%] lg:top-[20.9%] lg:w-[11.25%] lg:h-[51.2%]',
  },
];

export default function HomeDoors() {
  return (
    <div className="relative bg-[#012D42] font-[family-name:Cardo,serif] flex-1">
      <div className="relative">
        <picture className="block">
          <source media="(min-width: 1025px)" srcSet="000_Doors_Background.webp" />
          <source media="(min-width: 641px) and (max-width: 1024px)" srcSet="000_Doors_Background_tablet.webp" />
          <source media="(max-width: 640px)" srcSet="000_Doors_small_2048x2732.webp" /> 
          <img
            src="000_Doors_Background.webp"
            className="w-full h-auto"
            alt="Doors Background"
          />
        </picture>

        <div className="absolute left-1/2 top-8 -translate-x-1/2">
          <span className="font-cardo text-white tracking-wide text-sm md:text-md lg:text-lg">
            <i>· Click on a door and explore ·</i>
          </span>
        </div>

        {doors.map(door => (
          <div key={door.href}>
            {/* Title label above the door panel */}
            <div className={`absolute pointer-events-none ${door.labelClasses}`}>
              <span className="font-cardo text-white tracking-wide text-xs sm:text-lg">
                {door.label}
              </span>
            </div>

            {/* Transparent overlay covering the door panel — works on touch and mouse */}
            <motion.div
              className={`absolute ${door.overlayClasses}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={door.href} className="block w-full h-full" aria-label={`Go to ${door.label}`} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
