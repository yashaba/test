import 'reflect-metadata';
import { Router } from 'express';
import { ExpensesController } from '../controllers/expenses.controller';
import { authenticateToken } from '../middleware/auth.middleware';
import {Container} from 'typedi'


const router = Router();
const expensesController: ExpensesController = Container.get(ExpensesController)



router.post('/create-expense', authenticateToken, expensesController.create);

router.delete('/delete-expense/:expense-id',authenticateToken, expensesController.remove);

router.get('/expense',authenticateToken, expensesController.getAll);

router.put('/edit-expense/:expense-id', authenticateToken , expensesController.update);



export default router;
