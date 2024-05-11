import {FilesRepository} from "../../repositories/files/repository";
import {Request, Response} from "express";
import {IFilesService} from "../../domain/interfaces/services/interface";

export class FilesService implements IFilesService{
    private readonly filesRepository: FilesRepository
    constructor() {
        this.filesRepository = new FilesRepository()
    }

    async create(request: Request, response: Response): Promise<Response> {
        const result = await this.filesRepository.create()
        return response.status(200).json({
            success: true,
            data: result
        })
    }

    async getAll(request: Request, response: Response): Promise<Response>{
        const result = await this.filesRepository.find()

        return response.status(200).json({
            success: true,
            data: result
        })

    }

    async getOne(request: Request, response: Response): Promise<Response> {
        const result = await this.filesRepository.findOne()

        return response.status(200).json({
            success: true,
            data: result
        })

    }

    async update(request: Request, response: Response): Promise<Response> {
        const result = await this.filesRepository.update()

        return response.status(200).json({
            success: true,
            data: result
        })

    }

    async delete(request: Request, response: Response): Promise<Response> {
        const result = await this.filesRepository.delete()

        return response.status(200).json({
            success: true,
            data: result
        })

    }
}