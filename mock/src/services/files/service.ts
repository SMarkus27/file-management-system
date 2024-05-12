import { Request, Response } from "express";
import { IFilesService } from "../../domain/interfaces/services/interface";
import { createWriteStream } from "fs";
import { join } from "path";
import {MongoDBInfrastructure} from "../../infrastructures/mongodb/infrastructure";
import {FilesRepository} from "../../repositories/files/repository";

export class FilesService implements IFilesService {
  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body.data;
    const fileRepository = new FilesRepository()
    await fileRepository.create(data)
    return response.status(200).json({
      success: true,
      data: data,
    });
  }

  async getAll(request: Request, response: Response): Promise<Response> {
    const fileRepository = new FilesRepository()
    const result = await fileRepository.getFiles();
    const loro = await result.toArray()
    return response.status(200).json({
      success: true,
      data: loro,
    });
  }

  async getOne(request: Request, response: Response): Promise<Response> {
    const fileId = request.params.id;
    const fileRepository = new FilesRepository()
    const result = await fileRepository.getFile(fileId);
    if (!result) {
      return response.status(404).json({
        success: false,
        message: "Data not found",
        data: [],
      });
    }
    return response.status(200).json({
      success: true,
      data: result,
    });
  }

  async update(request: Request, response: Response): Promise<Response> {
    const fileId = request.params.id;
    const newData = request.body
    const fileRepository = new FilesRepository()
    const result = await fileRepository.getFile(fileId);

    if (!result) {
      return response.status(404).json({
        success: false,
        message: "Data not found",
        data: [],
      });
    }

    const updateResult = await fileRepository.update(fileId, newData);

    if (updateResult.modifiedCount === 0) {
      return response.status(200).json({
        success: false,
        message: "Nothing to update!!!",
        data: [],
      });
    }

    return response.status(200).json({
      success: true,
      data: "Data updated with success!!!",
    });
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const fileId = request.params.id;
    const fileRepository = new FilesRepository()
    await fileRepository.delete(fileId);

    const result = await fileRepository.getFile(fileId);

    if (!result) {
      return response.status(404).json({
        success: false,
        message: "Data not found",
        data: [],
      });
    }

    return response.status(200).json({
      success: true,
      data: "Data deleted with success!!!",
    });
  }
}
