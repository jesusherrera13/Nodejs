import { Router } from "express";
import { methods } from '../controllers/lenguaje.controller';
const router = Router();

router.get("/", methods.index);
router.post("/", methods.create);
router.get("/:id", methods.show);
router.put("/:id", methods.update);
router.delete("/:id", methods.destroy);

export default router;