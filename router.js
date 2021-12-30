import Router from 'express';
import GreetServise from './GreetServise.js';
import GreetController from './GreetController.js';

const router = new Router()

router.post('/greets', GreetController.create)
router.get('/greets', GreetController.getAll)
router.get('/greets/:id', GreetController.getOne)
router.put('/greets', GreetController.update)
router.delete('/greets/:id', GreetController.delete)

export default router;