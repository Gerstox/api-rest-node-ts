import { Request, Response } from "express";
import { httpHandle } from "../utils/error.handle";
import { addCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service";

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const car = await getCar(id);
    const data = car ? car : 'NOT_FOUND';
    res.send(data);
  } catch (error) {
    httpHandle(res, 'ERROR_GET_ITEM', error);
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const cars = await getCars();
    res.send(cars);
  } catch (error) {
    httpHandle(res, 'ERROR_GET_ITEMS', error);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedCar = await updateCar(id, req.body);
    res.send(updatedCar);
  } catch (error) {
    httpHandle(res, 'ERROR_UPDATE_ITEM', error);
  }
};

const createItem = async (req: Request, res: Response) => {
  try {
    const newItem = await addCar(req.body);
    res.send(newItem);
  } catch (error) {
    httpHandle(res, 'ERROR_CREATE_ITEM', error);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedCar = await deleteCar(id);
    res.send(updatedCar);
  } catch (error) {
    httpHandle(res, 'ERROR_DELETE_ITEM', error);
  }
};

export {
  getItem,
  getItems,
  updateItem,
  createItem,
  deleteItem
}
