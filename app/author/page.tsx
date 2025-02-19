import BookList from "./BookList";


export default async function AuthorPage(){
    try{
        const response = await fetch('http://localhost:3000/api/books', { cache: "no-store" });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch books: ${response.statusText}`);
        }
        const books = await response.json();
        
        return(
            <main className="lg:px-56 md:px-24 ">
                <BookList books={ books }/>
            </main>
    )
    } catch (error) {
        console.error("Error fetching books:", error);
        return (
            <main className="p-32 justify-center"   >
                <p className="text-dark text-4xl">Failed to load books. Please try again later.</p>
            </main>
        );
    }
}