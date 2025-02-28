import { useState } from 'react';

import { Store } from '../book-data'; 
import BookReviews from '../BookReviews';

import Image from 'next/image';
import Link from 'next/link';


export default async function BookDetails({ params }: { params: {_id: string} }) {
    const response = await fetch('http://localhost:3000/api/books/' + params._id);
    const book = await response.json();
    
    if (!book) {
        return (
            <main className='bg-dark'>
                <div className="relative mb-8 h-40 bg-cover bg-center bg-[url('/317_Deep_History_banner.webp')] flex items-center justify-center">
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
        <div className="relative mb-8 h-40 font-bold bg-cover bg-center bg-[url('/317_Deep_History_banner.webp')] flex flex-col justify-center items-center gap-1">
            <h3 className="m-0 text-xl">
                <i>{book.title.toUpperCase()}</i>
            </h3>
            <h3 className="m-0 text-base">
                <i>{book.subhead}</i>
            </h3>
        </div>

        {/*Core */}
            <div className='flex justify-center mx-auto max-width-5xl pb-16 gap-8'>

        {/*Content */}
                <div className='w-3/5 ml-24 md:flex'>
                    <div className='w-2/5'>
                        <Image src={`/${book.imageUrl}`} alt={`${book.title} cover`} height={1000} width={663} className='object-contain'/>
                    </div>
                    <div className='w-3/5 ml-8 mr-2'>
                        <p className='text-lightText'>{book.synopsis}</p>
                        <div className='pt-4 flex justify-end'>
                            <BookReviews reviews={book.reviews} />
                        </div>

                        <div className="isolate mt-6 w-full flex shadow-xs text-lightText self-center">
                            <button
                                type="button"
                                className="px-6 relative inline-flex items-center bg-accent px-3 py-2 text-sm font-semibold ring-1 ring-darker ring-inset hover:bg-darker focus:z-10"
                            >
                                Citations
                            </button>
                            <button
                                type="button"
                                className="px-6 relative -ml-px inline-flex items-center bg-accent px-3 py-2 text-sm font-semibold ring-1 ring-darker ring-inset hover:bg-darker focus:z-10"
                            >
                                Advanced Praise
                            </button>
                            <button
                                type="button"
                                className="px-6 relative -ml-px inline-flex items-center bg-accent px-3 py-2 text-sm font-semibold ring-1 ring-darker ring-inset hover:bg-darker focus:z-10"
                            >
                                Back to Books
                            </button>
                        </div>
                    </div>
                    

                </div>

        {/*Side bar with links */}
                <div className="w-1/8 sticky flex flex-col items-start">
                    <h6 className="text-accent text-sm font-bold mb-4">Get the book</h6>
                    {book.stores.map((store: Store, index: number) => (
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
            </div>
        </main>
    )
}      

/*
                        <div className='text-accent italic font-bold pt-6 flex gap-4'>
                            <h4 className='hover:opacity-75'><Link href='/author'>Citations</Link></h4>
                            <h4 className='hover:opacity-75'><Link href='/author'>Back to Books</Link></h4>
                        </div>
                         */