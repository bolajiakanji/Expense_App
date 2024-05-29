import React, { useState } from 'react'
import categories from './categories'

interface Expense {
    id: number;
    description: string;
    amount: number;
    category: "Groceries" | "Entertainment" | "Utilities";
}
 
interface ExpenseProp {
    expenses: Expense[],
    onDelete: (id:number) => void
}


const ExpenseList = ({ expenses, onDelete}: ExpenseProp) => {
    
    
  return (
    <div>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
            {expenses.map((expense) => 
                <tr key={expense.id}> 
                    <td>{expense.description}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.category}</td>
                    <td><button className='btn btn-outline-danger' onClick={() => onDelete(expense.id)} >Button</button></td>
                </tr>
                
            )}
</tbody>
        </table>
    </div>
  )
}

export default ExpenseList