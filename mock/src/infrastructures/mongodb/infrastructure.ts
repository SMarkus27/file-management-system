import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

export class MongoDBInfrastructure {
  async getClient() {
    const url = process.env.MONGODB_STRING_CONNECTION;
    const client = new MongoClient(url);
    const dbName = process.env.MONGODB_DATABASE;
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(process.env.MONGODB_COLLECTION);
    return collection;
  }
}
