// controllers/basic.controller.ts
import 'reflect-metadata';
import { Request, Response } from 'express';
import { IExpense } from '../interfaces/expense.interface';
import { Container, Service } from 'typedi';
import {ExpensesService} from '../services/expenses.service'

@Service()
 export class ExpensesController {
  // testService = Container.get(ExpensesService)
  constructor() {
    this.expenseService = Container.get(ExpensesService)
    console.log('this.expenseService', this.expenseService);
    
  }

  private expenseService : ExpensesService

  async create(req: Request, res: Response) {
    try {
      const newData: IExpense = req.body;
      const createdData = await this.expenseService.create(newData);
      res.status(201).json(createdData);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  async getAll(req: Request, res: Response) {
   const expenseService = Container.get(ExpensesService)

   const expenses = await expenseService.getAll()
    
    try {
      // const allData = await this.expenseService.getAll();
      // console.log('allData', allData);
      
      res.json(expenses);
    } catch (error) {
    // console.log('expenseService1111', this.expenseService);
    // console.log('error in getAll', error);
      res.status(500).json({ error: error });
    }
  }

  // async getById(req: Request, res: Response) {
  //   try {
  //     const id = req.params.id;
  //     const data = await this.expenseService.getById(id);
  //     if (data) {
  //       res.json(data);
  //     } else {
  //       res.status(404).json({ message: 'Data not found' });
  //     }
  //   } catch (error) {
  //     res.status(500).json({ error: error });
  //   }
  // }

  async update(req: Request, res: Response) {
   const expenseService = Container.get(ExpensesService)

    try {
      const id = req.params.id;
      const updatedData: IExpense = req.body;
      const data = await expenseService.update(id, updatedData);
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  async remove(req: Request, res: Response) {
   const expenseService = Container.get(ExpensesService)

    try {
      const id = req.params.id;
      const deletedData = await expenseService.remove(id);
      if (deletedData) {
        res.json({ message: 'Data deleted successfully' });
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}
