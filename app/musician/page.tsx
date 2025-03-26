'use client'

import { useState } from 'react';
import AlbumList from './AlbumList';
import { albums } from './album-data';
import ShowList from './ShowList';
import { shows } from './show-data';
import ImageGallery from '../components/ImageGallery';
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import Link from 'next/link';
import Image from 'next/image';

export default function MusicianPage(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const imageNames = ["MusicPhoto_1", "MusicPhoto_2", "MusicPhoto_3", "MusicPhoto_4", "MusicPhoto_5", "MusicPhoto_6", "MusicPhoto_7", "MusicPhoto_8", "MusicPhoto_9"];

    return(
        <main className='bg-lightText pb-8'>
            <div className={`relative inset-0 md:left-0 -left-40 bg-cover bg-center bg-[url('/410_Music_Amygdaloids.webp')]`}></div>
            <div
                style={{ backgroundImage: `url('/410_Music_Amygdaloids.webp')` }}
                className="w-full flex bg-cover bg-[21%] md:bg-center -left-40"
            >
            <div className='relative w-2/5'></div>
            <div 
                className="relative md:w-4/5 items-center bg-lightAccent bg-opacity-100 lg:px-24 md:pw-20 px-10 md:py-12 py-10 flex justify-start text-lightText"
                style={{
                    background: "linear-gradient(to right, rgba(216,245,250,0) 0%, rgba(216,245,250,0.7) 40%,rgba(216,245,250,0.8) 100%)"
                }}           
            >
                <div className='px-2 md:px-4 md:pl-44 py-8 md:py-16 pt-24' id="description">
                    <h3 className='text-darker mb-5 font-bold italic'>THE AMYGDALOIDS</h3>
                    <p className='text-darker leading-6 mb-2'>The Amygdaloids are a New York City band formed in 2006 by scientists Joseph LeDoux and Tyler Volk. They created their own genre, Heavy MeNtal (love songs about mind and brain and mental disorders) and released five albums between 2007 and 2015. The band has played with Rosanne Cash, Lenny Kaye, and other rock stars. LeDoux's music has become so entwined with his work that he is often asked to bring the band when he lectures in the US and even abroad. LeDoux’s songs have been the basis of a musical called <i>Map of Your Mind</i>, and appear in Werner Herzog’s 2024 documentary, <i>Theatre of Thought</i>. His life, work and music are the subject of a documentary on Amazon called “Neuroscience and Emotions”.</p>
                    <ArrowLongRightIcon className="inline h-5 w-5 text-accent" />
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-accent text-xs font-bold inline focus:outline-none"
                    >
                        Read more about the Amygdaloids' history
                    </button>
                    <ul className='flex mt-3 md:mt-6 py-2 gap-4'>
                        <li>
                            <a href="https://open.spotify.com/intl-es/artist/22czMwJZGJJ36Cwas7RB3E?si=r4CERr8ORYKS80keAJE4CQ" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                                <Image
                                    src="/icons/Spotify.png"
                                    alt="The Amygdaloids on Spotify"
                                    width={25}
                                    height={25}
                                />
                            </a>                     
                        </li>
                        <li>
                            <a href="https://music.apple.com/gb/artist/the-amygdaloids/265644607" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                                <Image
                                    src="/icons/AppleMusic.png"
                                    alt="The Amygdaloids on Apple Music"
                                    width={25}
                                    height={25}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@theamygdaloids" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                                <Image
                                    src="/icons/YouTube.png"
                                    alt="The Amygdaloids on Youtube"
                                    width={25}
                                    height={25}
                                />
                            </a>
                        </li>
                    </ul>

                {/* Modal */}
                {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                {/* Dark background overlay */}
                <div
                    className="fixed inset-0 bg-dark opacity-75"
                    onClick={() => setIsModalOpen(false)}
                ></div>

                {/* Modal content */}
                <div className="bg-darker text-white p-6 rounded shadow-lg z-50 max-w-2xl mx-auto relative">
                    <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-2 right-2 text-white focus:outline-none"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>


                    </button>
                    
                    <div className="mt-4 text-center p-4">
                        <h3 className="text-2xl mb-4">THE AMYGDALOIDS</h3>
                        <p className="leading-relaxed text-lightText">
                            The Amygdaloids are a New York City band formed in 2006, and made up of
                            scientists at New York University: Jospeh LeDoux (guitar, singer, song writer);
                            Tyler Volk (led guitar); Daniela Schiller (drums), and Nina Curly (bass). They
                            created their own genera, <i>Heavy MeNtal</i>, love songs about mind and brain and
                            mental disorders, and released five albums of such songs between 2007 and
                            2015. The bass position has changed over the years in the hands of Gerald
                            McCollum, Amanda Thorpe, and Colin Dempsey. The band has played with
                            such musicians as Rosanne Cash, Lenny Kaye (Patti Smith Group), Eric Ambel
                            (Joan Jett and the Blackhearts), Richard Barone (the Bongos), and others.
                            The band continues to perform, especially LeDoux and Dempsey. And
                            when LeDoux is invited to give lectures on his work he is often asked to also play
                            his music. He and Dempsey have traveled the world spreading their Heavy MeNtal, gospel. The Amygdaloids have been continuously written about extensively and featured on many podcasts. LeDoux’s songs have also been the basis of a musical called Map of Your Mind, and appear in Werner Herzog’s 2024 documentary, <i>Theatre of Thought</i>. Hi blending pop music and neuroscience led to him receive the 2023 Music has Power Award, and his life, work and music are the subject of a documentary on Amazon called “Neuroscience and Emotions”. 

                        </p>
                    </div>
                </div>
                </div>
                )}
                </div>
            </div>
            </div>
            <section id="albums" className='container mt-4 md:mt-8 py-3 max-w-4xl mx-auto'>
                <h2 className="text-2xl font-bold px-4 ">Albums</h2>
                <AlbumList albums={ albums }/>
            </section>

            <section id="shows" className="container px-4 my-4 py-3 md:py-6 mx-auto flex-col justify-center max-w-4xl">
                <h2 className="text-2xl font-bold mb-4">Shows</h2>
                <ShowList shows={ shows }/>
            </section>

            <section id="gallery" className="container px-4 py-6 mx-auto max-w-4xl mb-4">
                <h2 className="text-2xl font-bold mb-4 tracking-wider">Gallery</h2>
                {/* Replace the following with your carousel implementation */}
                <div>
                <ImageGallery images={imageNames} folder="musicianPictures"/>
                </div>
            </section>
            <section className="container px-4 mx-auto max-w-4xl">
                <Link href="#description" className='text-accent font-bold hover:opacity-75'>
                    <ArrowLongRightIcon className='inline h-4 w-5'/>
                    <i>Go to top </i>
                </Link>
            </section>

        </main>
    )
};