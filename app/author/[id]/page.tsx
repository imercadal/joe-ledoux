//import Image from 'next/image';
import Link from 'next/link'; 

export default async function BookDetails({ params }: { params: {id: string} }) {
    const response = await fetch('http://localhost:3000/api/books/' + params.id);
    const book = await response.json();
    
    if (!book) {
        return (
            <main>
                <h3>Book not found</h3>
                <Link href='/author'>Back to BOOKS</Link>
            </main>
        );
    }

    return(
        <main> 
                    <h3>{book.title}{book.year}</h3>
                    <h1>{book.subhead}</h1>
                    <p>{book.synopsis}</p>
                    <a href={book.strand} target="_blank" rel="noopener noreferrer">Buy here</a>
                    <Link href='/author'>Back to BOOKS</Link>
        </main>
    )
}
//<Image src={'/' + book!.imageUrl} alt={`${book.title} Cover`}  width={150} height={300}/>
       
