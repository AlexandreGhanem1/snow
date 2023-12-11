import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await MongoClient.connect('mongodb+srv://alexghanem1:p63bgbilurK3zhja@cluster0.gvjaym4.mongodb.net/', {});  
    const db = client.db('test');

  const map = await db.collection('maps').find().toArray();

  res.json(map);
}