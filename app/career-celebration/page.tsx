'use client'

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { articles } from './article-data';

interface Image {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  tagline: string;
}

const images = [
    {
        id: "1",
        src: "/retirementPictures/RetirementParty_1.webp",
        alt: "Photo of the Retirement Party",
        width: 1954, 
        height: 526,
        tagline: "Joe's Career Celebration, group photo."
    },
    {
        id: "3",
        src: "/retirementPictures/RetirementParty_3.webp",
        alt: "Photo of the Retirement Party",
        width: 5712, 
        height: 4284,
        tagline: "Tyler Volk, Amanda Thorpe,  Joe, David Humphrey, (not shown are Colin Dempsey and Daniela Schiller)"
    },
    {
        id: "4",
        src: "/retirementPictures/RetirementParty_4.webp",
        alt: "Photo of the Retirement Party",
        width: 3024, 
        height: 4032,
        tagline: "Joe"
    },
    {
        id: "5",
        src: "/retirementPictures/RetirementParty_5.webp",
        alt: "Photo of the Retirement Party",
        width: 4032, 
        height: 3024,
        tagline: "Amanda Thorpe, Jeff Peretz, Daniela Schiller, Joe (on the screen are Tyler Volk and Daniela Schiller at an early Amygdaloids Gig)"
    },
    {
        id: "6",
        src: "/retirementPictures/RetirementParty_6.webp",
        alt: "Photo of the Retirement Party",
        width: 1536, 
        height: 2048,
        tagline: "Jeff Peretz, Daniela Schiller, Dennis Tirch"
    },
    {
        id: "7",
        src: "/retirementPictures/RetirementParty_7.webp",
        alt: "Photo of the Retirement Party",
        width: 4032, 
        height: 3024,
        tagline: "Amanda Thorpe, Jeff Peretz, Sam Cronin, Joe, Daniela Schiller (on the screen at an early Amygdaloids gig are Joe and  Nina Curley"
    },
    {
        id: "8",
        src: "/retirementPictures/RetirementParty_8.webp",
        alt: "Photo of the Retirement Party",
        width: 3024,
        height: 4032, 
        tagline: "Amanda Thorpe, Jeff Peretz, Joe "
    },
    {
        id: "9",
        src: "/retirementPictures/RetirementParty_9.webp",
        alt: "Photo of the Retirement Party",
        width: 4032, 
        height: 3024,
        tagline: "Joe, Sam Cronin, and Lenny Kaye (on screen Colin Dempsey and Joe)"
    },
    {
        id: "10",
        src: "/retirementPictures/RetirementParty_10.webp",
        alt: "Photo of the Retirement Party",
        width: 3024,
        height: 4032, 
        tagline: "Colin Dempsey and Richard Barone"
    },
    {
        id: "11",
        src: "/retirementPictures/RetirementParty_11.webp",
        alt: "Photo of the Retirement Party",
        width: 2384, 
        height: 1374,
        tagline: "Jeff Peretz, Sam Cronin, Lenny Kaye (on the screen are Daniela Schiller, Joe and Amanda at Head Gear Studio)"
    },
    {
        id: "12",
        src: "/retirementPictures/RetirementParty_12.webp",
        alt: "Photo of the Retirement Party",
        width: 4032, 
        height: 3024,
        tagline: "Jeff Peretz, Joe, Sam Cronin, Lenny Kaye (on the screen are Joe and Gerald McCollam in a double image at Don Hill’s Rock Club in Downtown Manhattan)"
    }
]

export default function RetirementPage() {
    const [selectedPhoto, setSelectedPhoto] = useState<Image | null>(null);
    const [selectedProgramImage, setSelectedProgramImage] = useState<Image | null>(null);


    const nextImage = useCallback(() => {
        if (!selectedPhoto) return;
        const currentIndex = images.indexOf(selectedPhoto);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedPhoto(images[nextIndex]);
    }, [selectedPhoto]);

    const prevImage = useCallback(() => {
        if (!selectedPhoto) return;
        const currentIndex = images.indexOf(selectedPhoto);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedPhoto(images[prevIndex]);
    }, [selectedPhoto]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedPhoto) return;

            if (e.key === 'ArrowRight') {
            nextImage();
            } else if (e.key === 'ArrowLeft') {
            prevImage();
            } else if (e.key === 'Escape') {
            setSelectedPhoto(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedPhoto, nextImage, prevImage]);

    return(
        <div className="bg-lightAccent">
            <header className="bg-dark shadow-sm">
                <div 
                className="relative h-40 z-10 font-bold bg-cover bg-center flex flex-col justify-center items-center md:gap-2"
                style={{ backgroundImage: `url(/220_Neuro_Lectures.webp)` }}
                >
                    <h1 className="text-3xl text-white font-bold px-3 sm:px-0 text-center">Celebrating a Distinguished Scientific Career</h1>
                    <h3 className="text-base sm:text-lg text-lightText px-8 sm:px-0 text-center">Honoring decades of dedication, discovery, and inspiration</h3>
                </div>
            </header>
            <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 space-y-16">
                {/* Intro */}
                <section className="flex flex-col sm:flex-row gap-6 max-w-6xl mx-auto px-4 py-2">
                    {/* Image - takes 2/3 on sm+ screens */}
                    <div className="md:w-2/5 w-full">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <Image
                                src="/605_Festschrift in honor of Joseph E. LeDoux.webp"
                                alt="Festschrift in honor of Joseph E. LeDoux"
                                width={1275}
                                height={1650}
                                className="object-cover w-full rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Text - takes 1/3 on sm+ screens */}
                    <div className="md:w-3/5 w-full flex items-start md:px-12">
                        <p className="text-base sm:text-md text-gray-800 leading-relaxed">
                        On December 6 and 7, 2024, colleagues and friends from around the world gathered in person and remotely at the NYU Clive Davis Institute for Recorded Music to celebrate
                        Joseph LeDoux’s two entwined lives — scientist and musician. The two days were filled
                        with scientific lectures and discussions followed by musical performances from his
                        band, The Amygdaloids, and special guest musicians.
                        </p>
                    </div>
                </section>
                {/* Program */}
                <section>
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Program</h2> 
                <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto">
                    <div
                    className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
                    onClick={() =>
                        setSelectedProgramImage({
                        id: "program-day-1",
                        src: "/610_Program_Day1.webp",
                        alt: "Program Day 1",
                        width: 1275,
                        height: 1650,
                        tagline: "Program - Day 1",
                        })
                    }
                    >
                    <Image
                        src="/610_Program_Day1.webp"
                        alt="Program Day 1"
                        width={1275}
                        height={1650}
                        className="object-cover w-full rounded-lg shadow-2xl"
                    />
                    </div>
                    <div
                    className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
                    onClick={() =>
                        setSelectedProgramImage({
                        id: "program-day-2",
                        src: "/611_Program_Day2.webp",
                        alt: "Program Day 2",
                        width: 1275,
                        height: 1650,
                        tagline: "Program - Day 2",
                        })
                    }
                    >
                    <Image
                        src="/611_Program_Day2.webp"
                        alt="Program Day 2"
                        width={1275}
                        height={1650}
                        className="object-cover w-full rounded-lg shadow-2xl"
                    />
                    </div>
                </div>
                </section>
                { /* VIDEOS */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 text-center">Videos of Lectures and Performances</h2> 
                    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
                        <div className='flex flex-col text-lightText gap-y-2 gap-x-6 lg:gap-x-8 mb-4 items-center'>
                            <div className="my-4 w-full aspect-video overflow-hidden rounded-xl shadow-2xl">
                                <iframe
                                width="100%"
                                height="100%"
                                src='https://www.youtube.com/embed/8qG5GwaHXkA?si=6_VvLPps6v2y3-MG'
                                title="YouTube video player"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                ></iframe>
                            </div>
                            <p className='text-sm text-dark font-bold mb-2'>Joseph LeDoux&apos;s 50 year scientific Career Celebration</p>
                            <p className='text-xs text-dark italic mb-2'>Colleagues from near and far gathered at the NYU Clive Davis Institute of Recorded Music in Brooklyn, NY to  celebrate Joseph LeDoux&apos;s contributions to understanding emotions and consciousness (see the Program below for the list of speakers).</p>
                            <p className="text-xs text-dark mt-1">Dec 6th & 7th, 2024  — 7 hrs 5 min</p>
                        </div> 
                        <div className='flex flex-col text-lightText gap-y-2 gap-x-6 lg:gap-x-8 mb-4 items-center'>
                            <div className="my-4 w-full aspect-video overflow-hidden rounded-xl shadow-2xl">
                                <iframe
                                width="100%"
                                height="100%"
                                src='https://www.youtube.com/embed/6NyTjc6Wnc8?si=wR7Kb-XROWsxSdzU'
                                title="YouTube video player"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                ></iframe>
                            </div>
                            <p className='text-sm text-dark font-bold mb-2'>The Acoustic Amygdaloids wrapped up Day 1 of Joseph LeDoux&apos;s career celebration</p>
                            <p className='text-xs text-dark italic mb-2'>The Amygdaloids played acoustic versions of their Heavy MenTal songs. Included in the band were Joseph LeDoux, Tyler Volk, Daniela Schiller, Colin Dempsey, David Humphrey, and  Mian Hou. For more about The Amygdaloids see  
                                <a href='https://www.youtube.com/@theamygdaloids' rel='noopener noreferrer' target='_blank'> @theamygdaloids</a>
                            </p>
                            <p className="text-xs text-dark mt-1">Friday December 6, 2024 — 35 min</p>
                        </div> 
                        <div className='flex flex-col text-lightText gap-y-2 gap-x-6 lg:gap-x-8 mb-4 items-center'>

                                <div className="my-4 w-full aspect-video overflow-hidden rounded-xl shadow-2xl">
                                    <iframe
                                    width="100%"
                                    height="100%"
                                    src='https://www.youtube.com/embed/8s59f05J2iI?si=7SFqQLO6z_4wLNoL'
                                    title="YouTube video player"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    ></iframe>
                                </div>
                                <p className='text-sm text-dark font-bold mb-2'>Saturday night the Amygdaloids plugged and rocked the Clive Davis &apos;Garage&apos;</p>
                                <p className='text-xs text-dark italic mb-2'>
                                    The core band included Joe, Colin Dempsey, Amanda Thorpe, Daniela Schiller, Jeff Peretz, Sam Cronin, and on one song, Dennis Tirch. Special guests included, Eric &apos;Roscoe&apos; Ambel (Joan Jett and the Blackhearts,  Del Lords), Richard Barone (the Bongos, and Lenny Kaye (Patti Smith Group). Rosanne Cash and John Leventhal joined remotely singing and playing solo on Mind Over Matter, a son on which she sang backup vocals for on the Amygdaloids second album.
                                </p>
                                <p className="text-xs text-dark mt-1">Saturday December 7, 2024 — 58 min</p>
                        </div> 
                    </div>
                </section>

                {/* Photo Gallery */}
                <section>
                <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="h-8 w-8 text-green-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Photos from the celebration</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((photo, index) => (
                    <div 
                        key={index} 
                        className="overflow-hidden bg-darker shadow-lg hover:shadow-xl transition-shadow rounded-xl"
                        onClick={() => setSelectedPhoto(photo)}
                    >
                        <div className="aspect-[4/3] relative">
                            <Image 
                                src={photo.src || "/placeholder.svg"} 
                                alt={photo.alt} 
                                fill 
                                className="object-cover object-top rounded-lg" 
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-xs font-medium text-white text-center">{photo.tagline}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </section>

                {/* Misc Section */}
                <section className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <h2 className="text-3xl font-bold text-darkest mb-4">In Tribute and Thanks</h2>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div className="flex-1 max-w-2xl mx-auto bg-grey-100 bg-opacity-5 rounded-xl shadow-2xl">
                            <div className="p-6">
                                <div className="mb-6">
                                    <Image
                                        src='/601_Thankbox.png'
                                        alt='A Thankbox for Joe'
                                        height={200}
                                        width={300}
                                        className="mx-auto rounded-lg shadow-md"
                                    />
                                </div>
                                <p className="text-md text-gray-700 mb-4 font-bold">Messages of gratitude</p>
                                <p className="text-md text-gray-700 mb-4">
                                    Colleagues, students, and friends have shared their heartfelt messages and memories in a special digital
                                    thankbox created to honor this remarkable career.
                                </p>
                                <button className="bg-accent hover:opacity-75 rounded-md shadow-lg mx-auto">
                                    <a
                                        href="/603_Thankbox_full.pdf"
                                        download="Joes_Thankbox.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline text-lightText text-sm font-bold inline-flex items-center gap-2"
                                    >
                                    Download Thankbox Messages
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 max-w-2xl mx-auto bg-grey-100 bg-opacity-5 rounded-xl shadow-2xl">
                            <div className="p-6">
                                <div className="mb-6">
                                    <Image
                                        src='/602_Cerebral_Cortex_cover.jpeg'
                                        alt='Journal Cover'
                                        height={200}
                                        width={300}
                                        className="mx-auto rounded-lg shadow-md"
                                    />
                                </div>
                                <p className="text-md text-gray-700 mb-4">
                                    <b>THE EMOTIONAL BRAIN:</b> Honoring the legacy of Joseph E. LeDoux.
                                </p>
                                <p className="text-md text-gray-700 mb-4">
                                    A special issue of Cerebral Cortex.
                                </p>
                                <button className="bg-accent hover:opacity-75 rounded-md shadow-lg mx-auto">
                                    <a href="https://academic.oup.com/cercor/issue/35/1" rel="noopener noreferrer" className="text-lightText text-sm font-bold inline-flex items-center gap-2">
                                        Go to the journal
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <h3 className="px-8 text-darkest">
                    Thank you, Joe, for your invaluable contributions to science and for inspiring countless minds along the way.
                </h3>
                {/* List of articles Cerebral Cortex */}
                <section>
                    <h2 className="text-3xl font-bold text-darkest text-center">List of Publications </h2>
                    <h4 className='py-3 mb-6 text-center'>Special Issue of Cerebral Cortex</h4>
                    {articles.map(article => (
                        <div key={article.id} className='mb-8 px-2'>
                            <a 
                                href={article.articleUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <p>{article.authors}.</p>
                                <p><strong>{article.title}</strong></p>
                                <p>{article.journal}, {article.date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.</p>
                            </a>
                        </div>
                        
                    ))}

                </section>
                <section>

                <div className="flex items-center justify-center gap-2 mb-2">
                    <h2 className="text-3xl font-bold text-darkest mb-4">Credits</h2>
                </div>
                    <p><b>Organizers:</b> Elizabeth Phelps, Cate Hartely, Daniela Schiller, Jackie Reitzes, Claudia Farb, Liz Romanski, and Will Change</p>
                    <p className='py-4'><b>Musical Director:</b> Jeff Peretz</p>
                    <p><b>Sponsors:</b> NYU Center for Neural Science, NYU Faculty of Arts and Sciences; NYU Clive Davis Institute for Recorded Music</p>
                </section>

                {/* Modal for program */}
                {selectedProgramImage && (
                <div
                    className="fixed -inset-10 bg-black/80 z-50 overflow-y-auto"
                    onClick={() => setSelectedProgramImage(null)}
                >
                    <div
                    className="min-h-screen flex items-center justify-center p-4"
                    onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 z-50"
                            onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProgramImage(null);
                            }}
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="w-full max-w-4xl">
                            <Image
                            src={selectedProgramImage.src}
                            alt={selectedProgramImage.alt}
                            width={selectedProgramImage.width}
                            height={selectedProgramImage.height}
                            className="w-full h-auto object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                )}

                {/* Modal for selected photo */}
                {selectedPhoto && (
                    <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 rounded-lg"
                    onClick={() => setSelectedPhoto(null)}
                    >
                    <button
                        className="absolute top-2 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
                        onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPhoto(null);
                        }}
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-8"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div
                        className="relative flex justify-center lg:max-w-[70vw] max-h-[80vh] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                        onClick={prevImage}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 opacity-50 p-2 rounded-r focus:outline-none"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        </button>
                        <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 opacity-50 p-2 rounded-l focus:outline-none"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                            />
                        </svg>
                        </button>
                        <Image
                        src={selectedPhoto.src || "/placeholder.svg"}
                        alt={selectedPhoto.alt}
                        width={selectedPhoto.width}
                        height={selectedPhoto.height}
                        className="object-contain rounded-lg max-w-full max-h-full"
                        />
                    </div>
                    </div>
                )}
            </main>
        </div>
    )
} 


/*
                        
<button className="bg-accent hover:opacity-75 rounded-md shadow-lg mx-auto">
    <a href="https://www.thankbox.com/app/thankbox/HJNGhcoD" rel="noopener noreferrer" className="text-lightText text-sm font-bold inline-flex items-center gap-2">
    View Thankbox Messages
    </a>
</button>
 */