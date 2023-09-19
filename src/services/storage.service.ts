import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.model";

const registerUpload = async (storage: Storage) => {
  const newStorage = await StorageModel.create(storage);
  return newStorage;
}

export {
  registerUpload
};
