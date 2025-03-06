import { NextRequest } from 'next/server';
import { connectToDb } from '../../db';

type Params = {
    _id: string;
}

export async function GET(request: NextRequest, { params } : {params: Params }) {
    const { db } = await connectToDb();
    const bookId = params._id

    const book = await db.collection('books').findOne({ id: bookId })

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

/*
const { _id } = req.query; // or however you extract the parameter
const book = await Book.findOne({ _id: new ObjectId(_id) });
 */
