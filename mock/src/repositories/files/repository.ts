import {IFilesRepository} from "../../domain/interfaces/repositories/interface";

export class FilesRepository implements IFilesRepository {

    async create() {
        return "hello create"
    }

    async find() {
        return "hello find"

    }

    async findOne() {
        return "hello findOne"

    }

    async update() {
        return "hello update"

    }

    async delete() {
        return "hello delete"

    }
}