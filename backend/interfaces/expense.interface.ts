export interface IExpense {
  id: string
  date: Date
  category: category
  total: number
  notes: string[]
  }
  


  enum category {
  TRAVEL = 'travel',
  FOOD = 'food',
  KIDS = 'kids',
  CLOTHING = 'clothing'
  
  }
  