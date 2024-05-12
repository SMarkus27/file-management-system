import {MongoClient} from "mongodb";

export class MongoDBInfrastructure {

    async getClient() {
        const url = 'mongodb://localhost:27017';
        const client = new MongoClient(url);
        const dbName = 'myProject';
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('documents');
        return collection;
    }
}