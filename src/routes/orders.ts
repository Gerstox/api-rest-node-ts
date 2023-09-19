import { Router } from "express";
import { getItems } from "../controllers/order.controller";
import { checkSession } from "../middlewares/session.middleware";

const router = Router();

router.get('/', checkSession, getItems);

export { router };
