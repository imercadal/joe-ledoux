import AlbumList from './AlbumList';
import { albums } from './album-data';

export default function MusicianPage(){
    return(
        <main className='bg-lightText pb-8'>
            <div className="relative flex h-screen w-full bg-cover bg-center bg-[url('/410_Music_Amygdaloids.webp')]">


                <div className="relative flex">
                    <div className="bg-red-500"></div>

                </div>
                <div className="bg-lightText"></div>
            </div>
            <AlbumList albums={ albums }/>
        </main>
    )
}

/*
    <div
        className={`absolute inset-0 bg-cover bg-center h-4/5`}
        style={{ backgroundImage: `url(/410_Music_Amygdaloids.webp)` }}
    />
 */