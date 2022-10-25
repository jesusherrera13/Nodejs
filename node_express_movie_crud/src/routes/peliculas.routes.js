import { Router } from "express";
import { peliculaController } from "./controllers/pelicula.controller";

const router = Router();

router.get('/', peliculaController.index);

export default router;