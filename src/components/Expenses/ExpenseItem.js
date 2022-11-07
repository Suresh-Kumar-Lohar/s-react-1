import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const [amount, setAmount] = useState(props.amount)

  const clickHandler = (e) => {
    setTitle('Updated')
    console.log(title)
  }
  const amountHandler = () => {
    setAmount(100)
  }

  const date = props.date
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      {/* <ExpenseDetails
        title={props.title}
        amount={props.amount}
        LocationOfExpenditure={props.LocationOfExpenditure}
      /> */}
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <h2>{props.LocationOfExpenditure}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
      <button onClick={amountHandler}>Change amount</button>
    </Card>
  )
}

export default ExpenseItem
