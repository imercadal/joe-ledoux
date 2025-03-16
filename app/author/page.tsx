import BookList from "./BookList";

export default async function AuthorPage(){
    try{
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const apiUrl = new URL('/api/books', baseUrl).toString();
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch books: ${response.statusText}`);
        }
        const books = await response.json();
        
        return(
            <main className="bg-lightText">
                <div className="relative mb-8 h-40 bg-cover bg-center bg-[url('/310_Author_Books.webp')] flex items-center justify-center">
                    <h3 className="font-bold">BOOKS</h3>
                </div>
                <BookList books={ books }/>
            </main>
    )
    } catch (error) {
        console.error("Error fetching books:", error);
        return (
            <main className="bg-lightText"   >
                <div className="relative mb-8 h-40 bg-cover bg-center bg-[url('/310_Author_Books.webp')] flex items-center justify-center">
                    <h3 className="font-bold">BOOKS</h3>
                </div>
                <div className="p-32 min-h-3/4 flex justify-center">
                    <p className="text-dark text-3xl">Failed to load books. Please try again later.</p>
                </div>
            </main>
        );
    }
}