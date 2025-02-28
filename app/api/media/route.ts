import { connectToDb } from '../db';

export async function GET(request: Request){
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    const { db } = await connectToDb();

    const query = type ? { type } : {};

    const media = await db.collection('media').find(query).toArray();

    return new Response(JSON.stringify(media), {
        status: 200,
        headers: {
            'Content-Type' : 'application/json'
        }
    })

}