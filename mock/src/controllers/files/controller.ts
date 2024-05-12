import { FilesService } from "../../services/files/service";
import { Request, Response } from "express";
import { IFilesController } from "../../domain/interfaces/controllers/interface";

const fileService = new FilesService();

export class FilesController implements IFilesController {
  async createFile(request: Request, response: Response): Promise<Response> {
    return await fileService.create(request, response);
  }
  async getFiles(request: Request, response: Response): Promise<Response> {
    return await fileService.getAll(request, response);
  }
  async getOneFile(request: Request, response: Response): Promise<Response> {
    return await fileService.getOne(request, response);
  }
  async updateFile(request: Request, response: Response): Promise<Response> {
    return await fileService.update(request, response);
  }
  async deleteFile(request: Request, response: Response): Promise<Response> {
    return await fileService.delete(request, response);
  }
}
