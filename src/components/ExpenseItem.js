import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date()
  const expenseTitle = 'Car Insuranse'
  const expenseAmount = 295.36
  const LocationOfExpenditure = 'Vehicle'
  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <h2>{LocationOfExpenditure}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
