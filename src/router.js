import Router from 'express';
import ClientController from './ClientService/ClientController.js';
import GreetController from './GreetService/GreetController.js';

const router = new Router()

router.post('/greets', GreetController.create)
router.get('/greets', GreetController.getAll)
router.get('/greets/:id', GreetController.getOne)
router.put('/greets', GreetController.update)
router.delete('/greets/:id', GreetController.delete)

router.post('/clients', ClientController.create)
router.get('/clients', ClientController.getAll)
router.get('/clients/:id', ClientController.getOne)
router.put('/clients', ClientController.update)
router.delete('/clients/:id', ClientController.delete)

export default router;