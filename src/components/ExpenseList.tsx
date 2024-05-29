import React, { useState } from 'react'
import categories from './categories'

interface Expense {
    id: number;
    description: string;
    amount: number;
    category: "Groceries" | "Entertainment" | "Utilities";
}

const ExpenseList = () => {
    const [expenses, setExpenses] = useState<Expense[]>([
        { id: 1, description: "tomatoes", amount: 10, category: "Utilities"}

    ])
    
    
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
                    <td><button className='btn btn-danger text-white'>Button</button></td>
                </tr>
                
            )}
</tbody>
        </table>
    </div>
  )
}

export default ExpenseList