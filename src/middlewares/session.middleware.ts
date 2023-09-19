import { NextFunction, Response } from 'express';
import { verifyToken } from '../utils/jwt.handle';
import { RequestExt } from '../interfaces/request-ext.interface';

const checkSession = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || '';
    const jwt = jwtByUser.split(' ').pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };
    if (!isUser) {
      res.status(401);
      res.send('INVALID_JWT');
    } else {
      req.user = isUser;
      next();
    }
  } catch (error) {
    console.log({error});
    res.status(400);
    res.send('INVALID_SESSION');
  }
};

export { checkSession };
