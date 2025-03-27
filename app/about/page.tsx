
"use client";

import { useState, useEffect } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function AboutPage() {
    const images = [
        "/101_About_BG_01.webp",
        "/102_About_BG_02.webp",
        "/103_About_BG_03.webp",
        "104_About_BG_04.webp"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState<number | null>(null);

    const [fadeOut, setFadeOut] = useState(false);
    const fadeDuration = 3000;


    useEffect(() => {
        const interval = setInterval(() => {
          setPrevIndex(currentIndex);
          setFadeOut(false);
          setTimeout(() => {
            setFadeOut(true);
          }, 50);

          setCurrentIndex((currentIndex + 1) % images.length);
        }, 5000);
    
        return () => clearInterval(interval);
      }, [currentIndex, images.length]);
    

    return (
            <main className="bg-darker relative">
              {/* Background for devices sm and up */}
              <div className="hidden sm:block absolute inset-0">
                {/* If there's a previous image, render it and animate fade out */}
                {prevIndex !== null && (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity"
                    style={{
                      backgroundImage: `url(${images[prevIndex]})`,
                      opacity: fadeOut ? 0 : 1,
                      transitionDuration: `${fadeDuration}ms`
                    }}
                  />
                )}
                {/* Current image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-opacity"
                  style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                    opacity: 1,
                    transitionDuration: `${fadeDuration}ms`
                  }}
                />
              </div>
        
              {/* Block image for small devices */}
              <div className="sm:hidden relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center transition-opacity"
                  style={{ transitionDuration: `${fadeDuration}ms` }}
                  src={images[currentIndex]}
                  alt="Description of image"
                />
              </div>
        
              {/* Content */}
              <div className="relative z-10">
                <div className="relative max-w-xl xl:max-w-3xl sm:w-1/2 sm:w-3/5 py-10 md:py-16 lg:py-24 flex justify-start text-lightText">
                  <div className="px-8 sm:pl-16 md:pl-24 xl:pl-56 flex flex-col justify-start">
                    <p>
                      Joseph LeDoux is a University Professor and Professor of Neural Science and Psychology at New York University, an elected member of the National Academy of Sciences and the American Academy of Arts and Sciences, has received a numerous awards for his work, and is the author of several books, including The Emotional Brain, Synaptic Self, Anxious, The Deep History of Ourselves, and The Four Realms of Existence. His work and writings have focused on the topics of emotion, memory, and consciousness, and their interaction in the brain. LeDoux is also the lead singer and songwriter in the rock band, the Amygdaloids. His music has been the subject of a play, Map of Your Mind, and was featured in Werner Herzog’s 2024 film, Theatre of Thought. A documentary on Amazon, Neuroscience and Emotions, explores his Life, work and music.
                    </p>
                    <p className="mt-6">
                      <strong>Contact:</strong>
                    </p>
                    <p>Email - ledoux@cns.nyu.edu</p>
                    <p>Bluesky - @theamygdaloid.bsky.social</p>
                    <p>LinkedIn - @joseph-ledoux</p>
                    <p className="flex items-center md:mt-8 mt-3 hover:opacity-75">
                      <ArrowLongRightIcon className="inline h-5 w-5 text-lightText" />
                      <a
                        href="LeDoux_CV.pdf"
                        download="Joe_LeDoux_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline"
                      >
                        <strong>View full resume</strong>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </main>
    );
}
    
/*


"use client";

import { useState, useEffect } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function AboutPage() {
    const images = [
        "/101_About_BG_01.webp",
        "/102_About_BG_02.webp",
        "/103_About_BG_03.webp",
        "104_About_BG_04.webp"
    ];

    const [image, setImage] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <main className="bg-darker z-20">

            {/* Background image for md and up *
            <div
                className="hidden sm:block absolute inset-0 translate-y-24 bg-cover bg-center"
                style={{ backgroundImage: `url(${images[image]})` }}
            />

            {/* Block image for small devices *
            <div  className="sm:hidden relative h-64 overflow-hidden">
                <img
                    className="w-full h-full object-cover object-center "
                    src={images[image]}
                    alt="Description of image"
                />
            </div>

            <div className="relative">
                <div className="relative max-w-xl xl:max-w-3xl sm:w-1/2 sm:w-3/5 py-10 md:py-16 flex justify-start text-lightText">
                    <div className="px-8 sm:pl-16 md:pl-24 xl:pl-56 flex flex-col justify-start">
                        <p>Joseph LeDoux is a University Professor and Professor of Neural Science and Psychology at New York University, an elected member of the National Academy of Sciences and the American Academy of Arts and Sciences, has received a numerous awards for his work, and is the author of several books, including The Emotional Brain, Synaptic Self, Anxious, The Deep History of Ourselves, and The Four Realms of Existence. His work and writings have focused on the topics of emotion, memory, and consciousness, and their interaction in the brain. LeDoux is also the lead singer and songwriter in the rock band, the Amygdaloids. His music has been the subject of a play, Map of Your Mind, and was featured in Werner Herzog’s 2024 film, Theatre of Thought. A documentary on Amazon, Neuroscience and Emotions, explores his Life, work and music.  
                        </p>
                        <p className="mt-6"><strong>Contact:</strong></p>
                        <p>Email - ledoux@cns.nyu.edu</p>
                        <p>Bluesky - @theamygdaloid.bsky.social</p>
                        <p>LinkedIn - @joseph-ledoux</p>
                        <p className="flex items-center md:mt-8 mt-3 hover:opacity-75">
                            <ArrowLongRightIcon className="inline h-5 w-5 text-lightText" />
                            <a
                                href="LeDoux_CV.pdf"
                                download="Joe_LeDoux_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline"
                            >
                                <strong>View full resume</strong>
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}

*/