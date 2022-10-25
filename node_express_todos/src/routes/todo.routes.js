import { Router } from "express";
import { methods } from '../controllers/todo.controller';

const router = Router();

router.get('/', methods.index);

export default router;