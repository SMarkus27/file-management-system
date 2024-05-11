export interface IFilesRepository {
    create(): Promise<any>
    find(): Promise<any>
    findOne(): Promise<any>
    update(): Promise<any>
    delete(): Promise<any>

}