import { connectToDb } from '../db';

export async function GET() {
    const { db } = await connectToDb();
    const books = await db.collection('books').find({}).toArray();

    if (books.length === 0) {
        return new Response("No books found", { status: 404 });
    }

    return new Response(JSON.stringify(books), {
        status: 200,
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}