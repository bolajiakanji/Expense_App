import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'



function App() {
  

  return (
    <div className='m-5'>
    <div className='mb-3'>
      <ExpenseForm />
    </div>
    <div className='mt-5' >
      <ExpenseList />
    </div>

  
  
    </div>
  )
}

export default App
