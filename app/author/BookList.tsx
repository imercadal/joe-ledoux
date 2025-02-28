import { Book } from './book-data';
import Link from 'next/link';
import Image from 'next/image'
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function BookList({ books }: { books: Book[]}) {

    return(
        <main className='container grid grid-cols-2 mx-auto max-w-5xl gap-8 items-start justify-center'> 
            {books.map(book => (
                <div key={book._id} className='flex'>
                    <Link href={`/author/${book._id}`} className='flex'>
                    <div className='w-2/5'>
                        <Image className='shadow-lg' src={`/${book.imageUrl}`} alt="Book Cover" width={150} height={300}/>
                    </div>
                    <div className='pl-5 w-3/5'>

                        <h2 className='pb-3 font-bold'>{book.title} {book.year}</h2>
                        <p>{book.synopsis}</p>

                        <button className='text-accent font-bold'>
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
