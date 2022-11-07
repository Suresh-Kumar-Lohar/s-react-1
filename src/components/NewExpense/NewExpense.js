import React, { useState } from 'react'
import Card from '../UI/Card'
import './NewExpense.css'

const NewExpense = () => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const clickHandler = (e) => {
    e.preventDefault()
    console.log(title, amount, date)
  }

  return (
    <Card className='center'>
      <form>
        <div>
          <label>Title</label>
          <input
            type='text'
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type='number'
            min='1'
            onChange={(e) => {
              setAmount(e.target.value)
            }}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type='date'
            onChange={(e) => {
              setDate(e.target.value)
            }}
          />
        </div>
        <button onClick={clickHandler}>Submit</button>
      </form>
    </Card>
  )
}

export default NewExpense
