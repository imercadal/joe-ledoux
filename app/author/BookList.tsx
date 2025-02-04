import { Book } from './book-data';
import Link from 'next/link';
import Image from 'next/image'

export default function BookList({ books }: { books: Book[]}) {
    return(
        <main> 
            {books.map(book => (
                <div key={book.id}>
                    <Link href={`/author/${book.id}`}>
                        <h3>{book.title} ({book.year})</h3>
                        <p>{book.synopsis}</p>
                        <button>See more</button>
                        <Image src={'/' + book.imageUrl} alt="Book Cover" width={150} height={300}/>
                    </Link>
                </div>
            ))}
        </main>
    )
}