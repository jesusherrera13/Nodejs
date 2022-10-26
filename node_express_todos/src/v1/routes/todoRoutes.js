import { Router } from "express";
import v1TodoController from '../../controllers/todoController';

const router = Router();

router.get('/', v1TodoController.index);
router.post('/', v1TodoController.store);
router.get('/:id', v1TodoController.show);
router.put('/:id', v1TodoController.update);
router.patch('/:id', v1TodoController.update);
router.delete('/:id', v1TodoController.destroy);

export default router;