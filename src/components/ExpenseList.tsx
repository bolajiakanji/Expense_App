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
interface TotalExpenseType {
    totalExpense: (Expenses: Expense[]) => number
}


const ExpenseList = ({ expenses, onDelete}: ExpenseProp) => {
 const totalExpeense = (expenses: Expense[]):number => {
   return expenses.reduce((acc, expense) => {
        return acc + expense.amount

    }, 0)
 } 
    
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
            <tr>
                <td>Total</td>
                <td>{totalExpeense(expenses)}</td>
            </tr>

</tbody>
        </table>
    </div>
  )
}

export default ExpenseList