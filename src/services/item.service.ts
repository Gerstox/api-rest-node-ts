import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item.model";

const addCar = async (item: Car) => {
  const newItem = await ItemModel.create(item);
  return newItem;
};

const getCars = async () => {
  const cars = await ItemModel.find({});
  return cars;
};

const getCar = async (id: string) => {
  const car = await ItemModel.findOne({_id: id});
  return car;
};

const updateCar = async (id: string, data: Car) => {
  const updatedCar = await ItemModel.findOneAndUpdate(
    {_id: id},
    data,
    {
      new: true
    }
  );
  return updatedCar;
};

const deleteCar = async (id: string) => {
  const car = await ItemModel.findByIdAndRemove({_id: id});
  return car;
};


export {
  addCar,
  getCars,
  getCar,
  updateCar,
  deleteCar
};
