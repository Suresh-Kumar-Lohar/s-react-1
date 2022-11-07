import React, { useState } from 'react'
import Card from '../UI/Card'
import './NewExpense.css'

const NewExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    // console.log(expenseData)
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <Card className='center'>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={(e) => {
              setEnteredTitle(e.target.value)
            }}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type='number'
            value={enteredAmount}
            min='1'
            onChange={(e) => {
              setEnteredAmount(e.target.value)
            }}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type='date'
            value={enteredDate}
            onChange={(e) => {
              setEnteredDate(e.target.value)
            }}
          />
        </div>
        <button>Submit</button>
      </form>
    </Card>
  )
}

export default NewExpense
