import AlbumList from './AlbumList';
import { albums } from './album-data';
import ShowList from './ShowList';
import { shows } from './show-data';
import ImageGallery from '../components/ImageGallery';
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import Link from 'next/link';
import Image from 'next/image';

export default function MusicianPage(){
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
                className="relative md:w-4/5 items-center bg-lightAccent bg-opacity-50 lg:px-24 md:pw-20 px-10 md:py-12 py-10 flex justify-start text-lightText"
                style={{
                    background: "linear-gradient(to right, rgba(216,245,250,0) 0%,rgba(216,245,250,0.5) 100%)"
                }}           
            >
                <div className='px-2 md:px-4 md:pl-56 py-8 md:py-16' id="description">
                    <h3 className='text-darker mb-5 font-bold italic'>THE AMYGDALOIDS</h3>
                    <p className='text-darker'>The Amygdaloids are a New York City band made up of scientists who shed their scientific garb at night and take to the stage with songs about love and life peppered with insights drawn from research about mind and brain and mental disorders. NYU neuroscientist Joseph LeDoux, a pioneer in the study of the brain mechanisms of emotion and memory, is the lead singer, songwriter and rhythm guitarist. He is the best-selling author of two books, <i>The Emotional Brain</i> and <i>Synaptic Self</i>. <i>Theory of My Mind</i>, their second CD, was released in 2010 and features Grammy Award winner Rosanne Cash on backing vocals for two songs (<i>Mind Over Matter</i>, and <i>Crime of Passion</i>).  
                    </p>
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
                                        src="/icons/Youtube.png"
                                        alt="The Amygdaloids on Youtube"
                                        width={25}
                                        height={25}
                                    />
                                </a>
                            </li>
                    </ul>

                </div>
            </div>
      </div>
            <section id="albums">
                <AlbumList albums={ albums }/>
            </section>

            <section id="shows" className="container px-4 my-6 md:my-12 py-6 md:py-12 mx-auto flex-col justify-center max-w-4xl">
                <h2 className="text-2xl font-bold mb-4">Shows</h2>
                <ShowList shows={ shows }/>
            </section>

            <section id="gallery" className="container px-4 py-12 mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold mb-4 tracking-wider">Gallery</h2>
                {/* Replace the following with your carousel implementation */}
                <div>
                <ImageGallery images={imageNames} folder="musicianPictures"/>
                </div>
            </section>
            <section className="container px-4 mx-auto max-w-4xl">
                <Link href="#description" className='text-dark font-bold hover:opacity-75'>
                    <ArrowLongRightIcon className='inline h-4 w-5'/>
                    <i>Go to top </i>
                </Link>
            </section>

        </main>
    )
}

/*
    <div
        className={`absolute inset-0 bg-cover bg-center h-4/5`}
        style={{ backgroundImage: `url(/410_Music_Amygdaloids.webp)` }}
    />
 */

