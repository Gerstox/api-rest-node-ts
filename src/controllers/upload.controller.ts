import { Response } from "express";
import { httpHandle } from "../utils/error.handle";
import { registerUpload } from "../services/storage.service";
import { RequestExt } from "../interfaces/request-ext.interface";
import { Storage } from "../interfaces/storage.interface";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file  } = req;
    const storageData: Storage = {
      fileName: `${file?.filename}`,
      path: `${file?.path}`,
      idUser: `${user?.id}`
    }
    const response = await registerUpload(storageData);
      res.send(response);
  } catch (error) {
    httpHandle(res, 'FILE_ERROR');
  }
};

export { getFile };
