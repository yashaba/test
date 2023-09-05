// services/basic.service.ts
import 'reflect-metadata';
import { IExpense } from '../interfaces/expense.interface';
import { Container , Service } from 'typedi';

@Service()

export class ExpensesService {
  constructor() {}
  private data: IExpense[] = [];

  async create(expenseToCreate: IExpense): Promise<IExpense> {
    const id = '2';
    const createdData: IExpense = {  ...expenseToCreate, id };
    this.data.push(createdData);
    return createdData;
  }

  async getAll(): Promise<IExpense[]> {
    return this.data;
  }

  async update(id: string, updatedData: IExpense): Promise<IExpense | undefined> {
    const dataIndex = this.data.findIndex((item) => item.id === id);
    if (dataIndex !== -1) {
      this.data[dataIndex] = { ...this.data[dataIndex], ...updatedData };
      return this.data[dataIndex];
    }
    return undefined;
  }

  async remove(id: string): Promise<IExpense | undefined> {
    const dataIndex = this.data.findIndex((item) => item.id === id);
    if (dataIndex !== -1) {
      const deletedData = this.data.splice(dataIndex, 1);
      return deletedData[0];
    }
    return undefined;
  }
}



