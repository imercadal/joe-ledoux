import { Album } from './album-data';
import Image from 'next/image';


export default function AlbumList({ albums }: {albums: Album[]}){
    return(
                <main className='container py-6 md:py-8 px-4 mx-auto flex flex-row items-start justify-center'> 
                    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 sm:gap-x-6 xl:gap-x-8">
                    {albums.map((album) => (
                        <li key={album.id} className="relative">
                        <a 
                            href={album.links.find((link) => link.platform === "YouTube")?.url || "https://www.youtube.com/@theamygdaloids"}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
                        >
                            <Image
                            alt={`${album.title} Cover`}
                            src={album.coverUrl}
                            width={400}
                            height={400}
                            className="pointer-events-none aspect-10/7 object-cover group-hover:opacity-75 shadow"
                            />
                        </a>
                        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-darker">{`${album.title} (${album.year})`}</p>
                        <div className="flex gap-4 mt-2">
                        {album.links.map((link) => (
                            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                            <Image
                                src={`/icons/${link.platform}.png`}
                                alt={link.platform}
                                width={20}
                                height={20}
                            />
                            </a>
                        ))}
                        </div>
                        </li>
                    ))}
                    </ul>
        
        
                  </main>
    )
}