import { NextRequest } from 'next/server';
import { getBook } from '../get-book';

// Accepts a book slug (canonical) or, for old links, a MongoDB ObjectId.
export async function GET( request: NextRequest ) {

  const id = request.nextUrl.pathname.split("/").pop();

  if (!id) {
    return new Response("Invalid book id", { status: 400 });
  }

  try {
    const book = await getBook(id);

    if (!book) {
      return new Response("Book not found", { status: 404 });
    }

    return new Response(JSON.stringify(book), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(`Database error: ${message}`, { status: 500 });
  }
}
