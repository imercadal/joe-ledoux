//import Image from 'next/image';
import Link from 'next/link'; 

export default async function BookDetails({ params }: { params: {id: string} }) {
    const response = await fetch('http://localhost:3000/api/books/' + params.id);
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

    return(
        <main className='bg-dark'>
                <div className="relative grid place-items-center text-y-0 mb-8 h-40 font-bold bg-cover bg-center bg-[url('/317_Deep_History_banner.webp')]">
                    <div className='flex justify-center items-end'>
                        <h3 className='m-0 text-sm'><i>{book.subhead}</i></h3>
                    </div>
                    <div>
                        <h3 className='m-0 flex justify-center items-end'><i>{book.title.toUpperCase()}</i></h3>
                    </div>
                        
                </div> 
                <p className='text-lightText'>{book.synopsis}</p>
                <a href={book.strand} target="_blank" rel="noopener noreferrer">Buy here</a>
                <Link href='/author'>Back to BOOKS</Link>
        </main>
    )
}
//<Image src={'/' + book!.imageUrl} alt={`${book.title} Cover`}  width={150} height={300}/>
       
