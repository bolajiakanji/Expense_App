

interface Expense {
    id: number;
    description: string;
    amount: number;
    category: "Groceries" | "Entertainment" | "Utilities";
}
 
interface ExpenseProp {
    expenses: Expense[],
    onDelete: (id:number) => void
    onSelectCategory: (e: string) => void
}



const ExpenseList = ({ expenses, onDelete, onSelectCategory}: ExpenseProp) => {
 const totalExpeense = (expenses: Expense[]):number => {
   return expenses.reduce((acc, expense) => {
        return acc + expense.amount

    }, 0)
 } 
    
  return (
    <div>
        <select name="" id="" onChange={(e) => onSelectCategory(e.target.value)}>
            <option value="">All category</option>
            <option value="Utilities">Utilities</option>
            <option value="Groceries">Groceries</option>
            <option value="Entertainment">Entertainment</option>
        </select>
        <table className='table table-bordered text-center'>
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
                    <td><button className='btn btn-outline-danger' onClick={() => onDelete(expense.id)} >Delete</button></td>
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