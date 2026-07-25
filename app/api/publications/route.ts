import { connectToDb } from '../db';

export async function GET() {
    const { db } = await connectToDb();
    const publications = await db.collection('publications').find({}).sort({ date: -1 }).toArray();

    return new Response(JSON.stringify(publications), {
        status: 200,
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}
