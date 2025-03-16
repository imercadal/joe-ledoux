import BookList from "./BookList";

export default async function AuthorPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const apiUrl = new URL('/api/books', baseUrl).toString();
  
  let response;
  try {
    response = await fetch(apiUrl);
  } catch (err) {
    console.log("Network error:", err);
    throw new Error("Network error while fetching books");
  }
      
  if (!response.ok) {
    console.log("Fetch error:", response.status);
    throw new Error(`Failed to fetch books: ${response.statusText}`);
  }

  let books;
  try {
    books = await response.json();
  } catch (err) {
    const text = await response.text();
    console.log("Response textt:", text)
    console.error("JSON parsing error:", err);
    throw new Error("Error parsing JSON response from books API");
  }
  
  console.log("Base URL:", baseUrl);
        
  return (
    <main className="bg-lightText">
      <div className="relative mb-8 h-40 bg-cover bg-center bg-[url('/310_Author_Books.webp')] flex items-center justify-center">
        <h3 className="font-bold">BOOKS</h3>
      </div>
      <BookList books={books} />
    </main>
  );
}
