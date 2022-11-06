import React from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const date = props.date
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        LocationOfExpenditure={props.LocationOfExpenditure}
      />
    </Card>
  )

  // return React.createElement(
  //   'div',
  //   { className: 'expense-item' },
  //   React.createElement(ExpenseDate, { date: date }),
  //   React.createElement(
  //     'div',
  //     {},
  //     React.createElement('h1', {}, 'Expense 1'),
  //     React.createElement('h1', {}, 'Expense 2')
  //   )
  // )
}

export default ExpenseItem
