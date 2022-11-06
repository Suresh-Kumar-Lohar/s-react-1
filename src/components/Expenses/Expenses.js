import React from 'react'
import Card from '../UI/Card'

import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      {props.expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
          LocationOfExpenditure={item.LocationOfExpenditure}
        />
      ))}
    </Card>
  )
}

export default Expenses
