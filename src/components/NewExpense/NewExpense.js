import React, { useState } from 'react'
import Card from '../UI/Card'
import './NewExpense.css'

const NewExpense = () => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      data: new Date(enteredDate),
    }
    console.log(expenseData)
  }

  return (
    <Card className='center'>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input
            type='text'
            onChange={(e) => {
              setEnteredTitle(e.target.value)
            }}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type='number'
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
