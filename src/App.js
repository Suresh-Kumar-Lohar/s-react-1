import { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
const data = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    LocationOfExpenditure: 'Home-item',
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
    LocationOfExpenditure: 'Home-item',
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    LocationOfExpenditure: 'Vehicle-item',
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    LocationOfExpenditure: 'Study-item',
  },
]
const App = () => {
  const [expenses, setExpenses] = useState(data)

  const addExpenseHandler = (enteredExpenseData) => {
    const expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    setExpenses((prev) => {
      return [expense, ...prev]
    })
  }
  return (
    <div>
      <NewExpense onSaveExpenseData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
