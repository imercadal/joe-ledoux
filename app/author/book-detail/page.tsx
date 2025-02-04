import Link from 'next/link';
import Image from 'next/image';
import { Book } from '../book-data';

export default function BookDetails({ book }: { book: Book}) {
    return(
        <main> 
                <Link href={`/author/${book.id}`}>
                    <h3>{book.title} ({book.year})</h3>
                    <p>{book.synopsis}</p>
                    <button>See more</button>
                    <Image src={'/' + book.imageUrl} alt={`${book.title} Cover`}  width={150} height={300}/>
                </Link>
        </main>
    )
}

/*export default function BookDetailsPage(){
    return(
        <h1>Book Details Page</h1>
    )
}*/