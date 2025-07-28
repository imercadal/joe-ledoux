import { NextRequest } from 'next/server';
import { connectToDb } from '../../db';
import { ObjectId } from 'mongodb';

export async function GET( request: NextRequest ) {

  const id = request.nextUrl.pathname.split("/").pop();

  if (!id || !ObjectId.isValid(id)) {
    return new Response("Invalid book id", { status: 400 });
  }

  const { db } = await connectToDb();
  let book;
  try {
    book = await db.collection('books').findOne({ _id: new ObjectId(id) });
  
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
