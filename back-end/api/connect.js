// Javascript Assincrono
// await & async

import { MongoClient } from "mongodb";

const URI = "mongodb+srv://williamrutynamacedo:william22032006@cluster0.3mibq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection('songs').find({}).toArray();

// console.log(songCollection);

