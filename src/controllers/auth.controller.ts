import { Request, Response } from "express";
import { httpHandle } from "../utils/error.handle";
import { loginUser, registerUser } from "../services/auth.service";

const login = async (req: Request, res: Response) => {
  try {
    const data = await loginUser(req.body);
    if (data === 'INVALID_DATA') {
      res.status(403);
      res.send(data)
    } else {
      res.send(data);
    }
  } catch (error) {
    httpHandle(res, 'ERROR_LOGIN', error);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const data = await registerUser(req.body);
    res.send(data);
  } catch (error) {
    httpHandle(res, 'ERROR_REGISTER', error);
  }
};

export {
  login,
  register
}
