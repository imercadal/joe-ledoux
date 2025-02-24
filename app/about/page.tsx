/*export default function AboutPage(){
    return(
        <h1>About Page</h1>
    )
}
*/

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
    }, []);

    /* 
        const [nextImage, setNextImage] = useState(1);
    const [fade, setFade] = useState(false);

        useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
          
                setTimeout(() => {
                  setFade(false); 
                }, 200);
                
            }, 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

     useEffect(() => {
    const interval = setInterval(() => {
      setMessage('breathe out');
    }, 5000);
    return () => clearInterval(interval);
  }, []);
    */

    return (
        <>
            <div className="relative h-screen w-full md:p-24">
                <div
                    className={`absolute inset-0 md:left-0 -left-40 bg-cover bg-center`}
                    style={{ backgroundImage: `url(${images[image]})` }}
                />
                

                <div className="relative w-3/4 lg:px-32 md:pw-24 px-10 md:py-12 py-10 flex justify-start text-lightText">
                    <div className="w-9/12">
                        <p>Joseph LeDoux is a Professor of Neural Science at New York University. His work, which has spanned the topics of emotion, memory, and consciousness, and their interaction in the brain. He is an elected member of the National Academy of Sciences and the American Academy of Arts and Sciences. He has received a numerous awards for his work and is the author of several acclaimed books, including <i>The Emotional Brain, Synaptic Self, Anxious, The Deep History of Ourselves</i>, and <i>The Four Realms of Existence</i>.  He is also the lead singer and songwriter in the rock band, The Amygdaloids. His music has been the subject of a play, Map of Your Mind, and was featured in Werner Herzog’s 2024 film, Theatre of Thought.  A documentary on Amazon, Neuroscience and Emotions, explores his Life, work and music.  
                        </p>
                        <p className="mt-6"><strong>Contact:</strong></p>
                        <p>Email - ledoux@cns.nyu.edu</p>
                        <p>Bluesky - @theamygdaloid.bsky.social</p>
                        <p>LinkedIn - @joseph-ledoux</p>
                        <p className="flex items-center md:mt-8 mt-3 hover:opacity-75">
                            <ArrowLongRightIcon className="inline h-5 w-5 text-lightText" />
                            <a
                                href="/LeDoux_CV.pdf"
                                download="Joe_LeDoux_CV.pdf"
                                className="inline"
                            >
                                <strong>View full resume</strong>
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}


/*
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40">
                </div>


            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}
                style={{ backgroundImage: `url(${images[image]})` }}
            />
            */