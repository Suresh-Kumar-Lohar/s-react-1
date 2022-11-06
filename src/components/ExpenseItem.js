import './ExpenseItem.css'

const ExpenseItem = (props) => {
  //   const expenseDate = new Date()
  //   const LocationOfExpenditure = 'Vehicle'
  return (
    <div className='expense-item'>
      <div>{props.date.toISOString}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h2>{props.LocationOfExpenditure}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
