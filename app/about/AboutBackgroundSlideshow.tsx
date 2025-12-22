"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  images: string[];
  fadeDuration?: number;
  intervalMs?: number;
  alt?: string;
};

export default function AboutBackgroundSlideshow({
  images,
  fadeDuration = 2,
  intervalMs = 5000,
  alt = "Background image",
}: Props) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (safeImages.length <= 1) return;

    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % safeImages.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [safeImages.length, intervalMs]);

  if (safeImages.length === 0) return null;

  const current = safeImages[currentIndex];

  return (
    <>
      {/* Background for devices sm and up */}
      <div className="hidden sm:block absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeDuration }}
          />
        </AnimatePresence>
      </div>

      {/* Block image for small devices */}
      <div className="sm:hidden relative h-64 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            className="w-full h-full object-cover object-center"
            src={current}
            alt={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeDuration }}
          />
        </AnimatePresence>
      </div>
    </>
  );
}