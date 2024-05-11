import { Router } from "express";
import { FilesController } from "../../controllers/files/controller";

const filesController = new FilesController();

export const filesRouter = Router();

filesRouter
  .route("/files")
  .get(filesController.getOneFile)
  .post(filesController.createFile);

filesRouter
  .route("/files/:id")
  .get(filesController.getFiles)
  .put(filesController.updateFile)
  .delete(filesController.deleteFile);
