import { NextRequest } from 'next/server';
import { connectToDb } from '../../db';
import { ObjectId } from 'mongodb';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Await and destructure the params
  const { id } = await params;

  const { db } = await connectToDb();
  let book;
  try {
    book = await db.collection('books').findOne({ _id: new ObjectId(id) });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(`Invalid book id: ${message}`, { status: 400 });
  }

  if (!book) {
    return new Response("Book not found", { status: 404 });
  }

  return new Response(JSON.stringify(book), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
