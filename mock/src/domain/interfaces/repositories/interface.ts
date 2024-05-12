export interface IFilesRepository {
  create(data): Promise<any>;
  find(): Promise<any>;
  findOne(): Promise<any>;
  update(): Promise<any>;
  delete(): Promise<any>;
}
