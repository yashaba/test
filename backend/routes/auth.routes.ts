import 'reflect-metadata';
import { Router } from 'express';
import { ExpensesController } from '../controllers/expenses.controller';
import {AuthController} from '../middleware/auth.middleware';
import {Container} from 'typedi'


const router = Router();
const authController = Container.get(AuthController)


router.post('/login', authenticateToken, expensesController.create);

router.delete('/register',authenticateToken, expensesController.remove);




export default router;
