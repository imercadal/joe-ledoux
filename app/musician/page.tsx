import AlbumList from './AlbumList';
import { albums } from './album-data';
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import Link from 'next/link';
import Image from 'next/image';

export default function MusicianPage(){
    return(
        <main className='bg-lightText pb-8'>
            <div className={`relative inset-0 md:left-0 -left-40 bg-cover bg-center bg-[url('/410_Music_Amygdaloids.webp')]`}></div>
            <div
                style={{ backgroundImage: `url('/410_Music_Amygdaloids.webp')` }}
                className="w-full flex bg-cover bg-[21%] md:bg-center -left-40"
                >
            <div className='relative w-1/2'></div>
            <div 
                className="relative md:w-1/2 items-center bg-lightAccent bg-opacity-25 lg:px-24 md:pw-20 px-10 md:py-12 py-10 flex justify-start text-lightText"
                style={{
                    background: "linear-gradient(to right, rgba(216,245,250,0) 0%,rgba(216,245,250,0.5) 100%)"
                }}           
            >

                <div className='px-2 md:px-4'>
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
                    <ul className="w-full mt-8 italic text-white flex gap-4 items-between md:my-12 my-3 hover:opacity-75">
                            <li>
                                <Link href="#albums"><strong>ALBUMS</strong></Link>
                            </li>
                            <li>
                                <Link href="#shows"><strong>SHOWS</strong></Link>
                            </li>
                            <li>
                                <Link href="#gallery"><strong>GALLERY</strong></Link>
                            </li>

                               ᐧ   
                    </ul>
                </div>
            </div>
      </div>
            <section id="albums">
                <AlbumList albums={ albums }/>
            </section>

            <section id="shows" className="container px-4 my-6 md:my-12 py-6 md:py-12 mx-auto flex-col justify-center max-w-4xl">
                <h2 className="text-2xl font-bold mb-4">Shows</h2>
                <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3 sm:gap-x-6 xl:gap-x-8">
                    <li className="sm:flex border p-4 rounded shadow">
                        <div>
                            <p>Date of show</p>
                            <p>BAND NAME</p>
                            <h4 className="text-lg font-bold">Show 1</h4>
                            <p className="mt-1">
                            Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
                            quidem ipsam quia iusto.
                            </p>
                        </div>
                    </li>
                    <li className="sm:flex border p-4 rounded shadow">
                        <div>
                            <p>Date of show</p>
                            <p>BAND NAME</p>
                            <h4 className="text-lg font-bold">Show 2</h4>
                            <p className="mt-1">
                            Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
                            quidem ipsam quia iusto.
                            </p>
                        </div>
                    </li>
                    <li className="sm:flex border p-4 rounded shadow">
                        <div>
                            <p>Date of show</p>
                            <p>BAND NAME</p>
                            <h4 className="text-lg font-bold">Show 3</h4>
                            <p className="mt-1">
                            Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
                            quidem ipsam quia iusto.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>

            <section id="gallery" className="container px-4 py-12 mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                {/* Replace the following with your carousel implementation */}
                <div className="border p-4 rounded shadow">
                <p>Gallery Carousel Placeholder</p>
                </div>
            </section>
            <section className="container px-4 mx-auto max-w-4xl">
                <Link href="/media/musician" className='text-dark font-bold hover:opacity-75'>
                    <ArrowLongRightIcon className='inline h-4 w-5'/>
                    <i>Go to MEDIA </i>
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

