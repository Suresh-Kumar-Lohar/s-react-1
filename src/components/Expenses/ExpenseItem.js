import React from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const clickHandler = (e) => {
    const parentEle = e.target.parentElement.parentElement
    const ele = e.target.parentElement
    // console.log(ele)
    parentEle.removeChild(ele)
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
        <h2>{props.title}</h2>
        <h2>{props.LocationOfExpenditure}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Delete</button>
    </Card>
  )
}

export default ExpenseItem
