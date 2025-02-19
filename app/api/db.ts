// Database connection logic
// username and pw are env variables

import { MongoClient, Db, ServerApiVersion } from 'mongodb';

let cachedClient: MongoClient | null  = null;
let cachedDb: Db | null = null;

export async function connectToDb() { 
  if (cachedClient && cachedDb){
    return { client: cachedClient, db: cachedDb }
  }

  const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.g6kojve.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }

  cachedClient = client;
  cachedDb = client.db('joeledoux')

  return { client, db: client.db('joeledoux') }

}
