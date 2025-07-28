import { Book } from '../book-data';
import BookContentTabs from './BookContentTabs';
import Link from 'next/link';
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export const dynamic = 'force-dynamic';

interface BookDetailsPageProps {
  params: { _id: string };
}

export default async function BookDetails({ params }: BookDetailsPageProps) {

    const { _id } = params;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const apiUrl = new URL(`/api/books/${_id}`, baseUrl).toString();

    const response = await fetch(apiUrl);

    if(!response.ok) {
        const errorText = await response.text();
        console.error("Fetch failed:", errorText);

        return (
            <main className="bg-dark h-screen">
                <div className="relative mb-8 h-40 font-bold bg-cover bg-center bg-[url('/317_Deep_History_banner.webp')] flex flex-col justify-center items-center gap-1">
                    <h3 className="font-bold">BOOK DETAILS</h3>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3 className="text-lightText mb-2">Document not found. Please try again later.</h3>
                    <button className='rounded-xl bg-accent px-4 py-2 m-4'>
                        <Link href="/author" className='font-bold text-lightText'>
                            <ArrowLongRightIcon className="inline text-xs text-lightText h-3 w-4"/>
                            Back to BOOKS
                        </Link>
                    </button>
                </div>
            </main>
        );
    }

    const book: Book = await response.json();
    
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

    return(
        <div className='bg-dark'>

            {/*Banner */}
            <div 
                className="relative h-40 z-10 font-bold bg-cover bg-center flex flex-col justify-center items-center gap-2"
                style={{ backgroundImage: `url(/${book.bannerUrl})` }}
            >
                <h3 className="m-0 text-xl px-6 md:px-0 text-center">
                    <i>{book.title.toUpperCase()}</i>
                </h3>
                <h3 className="m-0 px-16 md:px-0 text-base text-center">
                    <i>{book.subhead}</i>
                </h3>
            </div>

            {/*Core */}
            <div className='px-6 flex flex-col'>
                <BookContentTabs book={book} />
            </div>

        </div>
    )
};

/*
import { Book } from '../book-data';
import BookContentTabs from './BookContentTabs';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function BookDetails({
params,
}: {
    params: { _id: string };
}) {
    const { _id } = params;
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

    return(
        <div className='bg-dark'>

            {/*Banner *
            <div 
                className="relative h-40 z-10 font-bold bg-cover bg-center flex flex-col justify-center items-center gap-2"
                style={{ backgroundImage: `url(/${book.bannerUrl})` }}
            >
                <h3 className="m-0 text-xl px-6 md:px-0 text-center">
                    <i>{book.title.toUpperCase()}</i>
                </h3>
                <h3 className="m-0 px-16 md:px-0 text-base text-center">
                    <i>{book.subhead}</i>
                </h3>
            </div>

            {/*Core *
            <div className='px-6 flex flex-col'>
                <BookContentTabs book={book} />
            </div>

        </div>
    )
};
*/