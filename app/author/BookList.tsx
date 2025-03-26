import { Book } from './book-data';
import Link from 'next/link';
import Image from 'next/image'
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function BookList({ books }: { books: Book[]}) {

    return(
        <main className='container px-3 md:px-0 grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-4xl pb-6 gap-12 items-start justify-center'> 
            {[...books]
            .sort((a, b) => b.year - a.year)
            .map((book) => (
                <div key={book._id} className='flex'>
                    <Link href={`/author/${book._id}`} className='flex'>
                    <div className='w-2/5'>
                        <Image 
                            className='shadow-2xl' 
                            src={`/${book.imageUrl}`} 
                            alt="Book Cover" 
                            layout="responsive"
                            width={150} 
                            height={300}
                        />
                    </div>
                    <div className='pl-6 w-3/5 hover:opacity-75'>

                        <h2 className='pb-3 text-sm font-bold'>{book.title} ({book.year})</h2>
                        <p className='text-xs'>{book.synopsis}</p>

                        <button className='text-accent text-xs font-bold -translate-y-2 -translate-x-3'>
                            <ArrowLongRightIcon className="inline h-5 w-5 text-accent" />
                            See more
                        </button>
                    </div>
                    </Link>
                </div>
            ))}
        </main>
    )
}
