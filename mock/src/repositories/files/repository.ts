import { MongoDBInfrastructure } from "../../infrastructures/mongodb/infrastructure";
import { ObjectId } from "mongodb";

export class FilesRepository {
  private readonly mongoClient: MongoDBInfrastructure;
  constructor() {
    this.mongoClient = new MongoDBInfrastructure();
  }
  async create(data) {
    const client = await this.mongoClient.getClient();
    return await client.insertMany(data);
  }
  async getFiles() {
    const client = await this.mongoClient.getClient();
    return client.find();
  }
  async getFile(fileId) {
    const client = await this.mongoClient.getClient();
    const objectId = new ObjectId(fileId);
    return await client.findOne({ _id: objectId });
  }
  async update(fileId, newData) {
    const client = await this.mongoClient.getClient();
    const objectId = new ObjectId(fileId);
    return await client.updateOne({ _id: objectId }, { $set: newData });
  }
  async delete(fileId) {
    const client = await this.mongoClient.getClient();
    const objectId = new ObjectId(fileId);
    return await client.deleteOne({ _id: objectId });
  }
}
