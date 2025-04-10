"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function AboutPage() {
  const images = [
    "/105_About_BG_05.webp",
    "/102_About_BG_02.webp",
    "/103_About_BG_03.webp",
    "/104_About_BG_04.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeDuration = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-darker relative min-h-screen">
      {/* Background for devices sm and up */}
      <div className="hidden sm:block absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
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
            key={currentIndex}
            className="w-full h-full object-cover object-center"
            src={images[currentIndex]}
            alt="Description of image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeDuration }}
          />
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="relative max-w-xl xl:max-w-3xl 2xl:max-w-4xl sm:w-1/2 sm:w-3/5 py-10 md:py-16 lg:py-24 flex justify-start text-lightText">
          <div className="px-8 sm:pl-16 md:pl-24 xl:pl-56 2xl:pl-80 flex flex-col justify-start">
            <p>
            Joseph LeDoux is neuroscientist at New York University and an elected member of the National Academy of Sciences and the American Academy of Arts and Sciences. He has received numerous awards for his work and has written a number of well-received books. His work and writings have focused on the topics of emotion, memory, and consciousness, and their interaction in the brain. He is also the lead singer and songwriter in the rock band, the Amygdaloids. His music has been the subject of a play, <i>Map of Your Mind</i>, and was featured in Werner Herzog’s 2024 film, <i>Theatre of Thought</i>. A documentary on Amazon, <i>Neuroscience and Emotions</i>, explores his Life, work and music.
            </p>
            <p className="mt-6 mb-1">
              <strong>Contact:</strong>
            </p>
            <a
              href="mailto:ledoux@cns.nyu.edu"
            >
              <p>Email - ledoux@cns.nyu.edu</p>
            </a>
            <a
              href="https://bsky.app/profile/theamygdaloid.bsky.social"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>Bluesky - @theamygdaloid.bsky.social</p>
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-ledoux/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>LinkedIn - @joseph-ledoux</p>
            </a> 
            <a
              href="https://www.facebook.com/TheAmygdaloids/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>Facebook - @TheAmygdaloids</p>
            </a> 
            <p className="flex mt-4 items-center hover:opacity-75">
              <ArrowLongRightIcon className="inline h-5 w-5 text-lightText" />
              <a
                href="LeDoux_CV.pdf"
                download="Joe_LeDoux_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline"
              >
                <strong>Download Curriculum Vitae</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};