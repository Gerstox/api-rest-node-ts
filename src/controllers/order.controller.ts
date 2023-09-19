import { Response } from "express";
import { httpHandle } from "../utils/error.handle";
import { RequestExt } from "../interfaces/request-ext.interface";

const getItems = async (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: 'ESTO SOLO LO VEN LAS PERSONAS CON UNA SESION VALIDA /JWT',
      user:req.user
    });
  } catch (error) {
    httpHandle(res, 'ERROR_GET_ORDERS');
  }
};

export {
  getItems
}
