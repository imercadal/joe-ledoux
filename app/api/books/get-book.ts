import { cache } from 'react';
import { ObjectId } from 'mongodb';
import { connectToDb } from '../db';
import { Book } from '../../author/book-data';

// Looks a book up by slug, falling back to _id for legacy ObjectId links.
// Shared by the /api/books/[id] route and the /author/[slug] page so the page
// queries MongoDB directly instead of fetching its own API over HTTP.
// cache() dedupes the call between generateMetadata and the page render.
export const getBook = cache(async (slugOrId: string): Promise<Book | null> => {
  const { db } = await connectToDb();

  let book = await db.collection('books').findOne({ slug: slugOrId });

  if (!book && ObjectId.isValid(slugOrId)) {
    book = await db.collection('books').findOne({ _id: new ObjectId(slugOrId) });
  }

  // Round-trip through JSON so the result is a plain object (ObjectId → string),
  // matching what the API returns and safe to pass to client components
  return book ? JSON.parse(JSON.stringify(book)) : null;
});
