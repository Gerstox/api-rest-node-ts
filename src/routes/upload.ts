import { Router } from 'express';
import { getFile } from '../controllers/upload.controller';
import { checkSession } from '../middlewares/session.middleware';
import multerMiddleware from '../middlewares/file.middleware';

const router = Router();

router.post('/', checkSession, multerMiddleware.single('myfile'), getFile);

export { router };
