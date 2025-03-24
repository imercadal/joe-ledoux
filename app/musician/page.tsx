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
                className="relative md:w-4/5 items-center bg-lightAccent bg-opacity-100 lg:px-24 md:pw-20 px-10 md:py-12 py-10 flex justify-start text-lightText"
                style={{
                    background: "linear-gradient(to right, rgba(216,245,250,0) 0%, rgba(216,245,250,0.7) 40%,rgba(216,245,250,0.8) 100%)"
                }}           
            >
                <div className='px-2 md:px-4 md:pl-44 py-8 md:py-16 pt-24' id="description">
                    <h3 className='text-darker mb-5 font-bold italic'>THE AMYGDALOIDS</h3>
                    <p className='text-darker leading-6'>The Amygdaloids are a New York City band formed in 2006, and made up of
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
his music. He and Dempsey have traveled the world spreading their Heavy Meatal, gospel. The Amygdaloids have been continuously written about extensively and featured on many podcasts. LeDoux’s songs have also been the basis of a musical called Map of Your Mind, and appear in Werner Herzog’s 2024 documentary, <i>Theatre of Thought</i>. Hi blending pop music and neuroscience led to him receive the 2023 Music has Power Award, and his life, work and music are the subject of a documentary on Amazon called “Neuroscience and Emotions”.  
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