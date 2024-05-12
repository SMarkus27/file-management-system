import { Request, Response } from "express";

export interface IFilesController {
  createFile(request: Request, response: Response): Promise<Response>;
  getFiles(request: Request, response: Response): Promise<Response>;
  getOneFile(request: Request, response: Response): Promise<Response>;
  updateFile(request: Request, response: Response): Promise<Response>;
  deleteFile(request: Request, response: Response): Promise<Response>;
}
