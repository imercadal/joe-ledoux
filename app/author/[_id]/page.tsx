import { Book, Store } from '../book-data';
import BookContentTabs from './BookContentTabs';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function BookDetails({
params,
}: {
    params: Promise<{ _id: string }>;
}) {
    const { _id } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const apiUrl = new URL('/api/books', baseUrl).toString();
    const response = await fetch(`${apiUrl}/${_id}`);
      const book: Book = await response.json();
      console.log(_id);
    
    if (!book) {
        return (
            <main className='bg-dark'>
                    <div className="relative mb-8 h-40 font-bold bg-cover bg-center bg-[url('/317_Deep_History_banner.webp')] flex flex-col justify-center items-center gap-1">
                    <h3 className="font-bold">BOOK DETAILS</h3>
                </div>
                <h3 className='text-lightText'>Book not found</h3>
                <Link href='/author'>Back to BOOKS</Link>
            </main>
        );
    }
  
    const storeLogos: { [key: string]: string } = {
        "Amazon": "/910_Amazon.png",
        "Audible": "/930_Audible.png",
        "Barnes & Noble": "/940_Barnes.png",
        "Strand": "/990_Strand.png"
    };

    return(
        <main className='bg-dark'>

        {/*Banner */}
        <div 
            className="relative h-40 z-10 font-bold bg-cover bg-center flex flex-col justify-center items-center gap-1"
            style={{ backgroundImage: `url(/${book.bannerUrl})` }}
        >
            <h3 className="m-0 text-xl">
                <i>{book.title.toUpperCase()}</i>
            </h3>
            <h3 className="m-0 text-base">
                <i>{book.subhead}</i>
            </h3>
        </div>

        {/*Core */}
        <div className='flex flex-col lg:flex-row justify-center mx-auto lg:max-w-5xl pb-16 gap-6'>
            <BookContentTabs book={book} />
            {/*Side bar with links */}
            {book.stores && book.stores.length > 0 && (
            <div className="w-[12.5%] pt-16 sticky flex flex-col items-start">
                <h6 className="text-accent text-sm font-bold mb-4">Get the book</h6>

                {(book.stores ?? []).map((store: Store, index: number) => (
                    <a 
                    key={index} 
                    href={store.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mb-3 flex items-center hover:opacity-75"
                    >
                    <Image 
                        src={storeLogos[store.name] || '/logos/default.png'} 
                        alt={`${store.name} logo`} 
                        width={25} 
                        height={25} 
                    />
                    <p className='text-xs text-lightText ml-2'>{store.name}</p>
                    </a>
                ))}
            </div>
            )}
            
        </div>

        </main>
    )
};