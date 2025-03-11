import { NextRequest } from 'next/server';
import { connectToDb } from '../../db';
import { ObjectId } from 'mongodb';

type Params = {
    id: string;
}

export async function GET(_request: NextRequest, { params } : {params: Params }) {
    const { db } = await connectToDb();
    let book;
    try {
        book = await db.collection('books').findOne({ _id: new ObjectId(params.id) });
      } catch (error) {
        return new Response('Invalid book id', { status: 400 });
      }

    if (!book) {
        return new Response('Book not found', {
            status: 404,
        })
    }

    return new Response(JSON.stringify(book), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
