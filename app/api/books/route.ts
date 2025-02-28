import { connectToDb } from '../db';

export async function GET() {
    const { db } = await connectToDb();
    const books = await db.collection('books').find({}).toArray();

    return new Response(JSON.stringify(books), {
        status: 200,
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}

export async function POST(){
    return new Response('Now this is a post from the Books route handler', {
        status: 200
    })
}

export async function PUT(){
    
}