import { NextRequest } from 'next/server';
import { connectToDb } from '../../db';
import { ObjectId } from 'mongodb';

type Params = {
    id: string;
}

export async function GET(request: NextRequest, { params } : {params: Params }) {
    const { db } = await connectToDb();
    const book = await db.collection('books').findOne({ _id: new ObjectId(params.id) });

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
