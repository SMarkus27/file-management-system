import {Request, Response} from "express";

export interface IFilesService {
    create(request: Request, response: Response): Promise<Response>
    getAll(request: Request, response: Response): Promise<Response>
    getOne(request: Request, response: Response): Promise<Response>
    update(request: Request, response: Response): Promise<Response>
    delete(request: Request, response: Response): Promise<Response>

}