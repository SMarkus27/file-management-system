import {Request, Response} from "express";
import {IFilesService} from "../../domain/interfaces/services/interface";
import {createWriteStream} from "fs";
import {join} from "path";

export class FilesService implements IFilesService{

    async create(request: Request, response: Response): Promise<Response> {
        const data = request.body.data;
        const filename = request.body.fileName
        const saveFileTo = join(__dirname, "../../repositories/files", filename);

        createWriteStream(saveFileTo)
        return response.status(200).json({
            success: true,
            data: data
        })
    }

    async getAll(request: Request, response: Response): Promise<Response>{
        return response.status(200).json({
            success: true,
            data: []
        })

    }

    async getOne(request: Request, response: Response): Promise<Response> {

        return response.status(200).json({
            success: true,
            data: []
        })

    }

    async update(request: Request, response: Response): Promise<Response> {

        return response.status(200).json({
            success: true,
            data: []
        })

    }

    async delete(request: Request, response: Response): Promise<Response> {

        return response.status(200).json({
            success: true,
            data: []
        })

    }
}