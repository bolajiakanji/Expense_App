import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: "Groceries" | "Entertainment" | "Utilities";
}

interface expensenoid {
  description: string;
  amount: number;
  category: "Groceries" | "Entertainment" | "Utilities";
}
function App() {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "tomatoes", amount: 10, category: "Utilities" },
    { id: 2, description: "pepper", amount: 18, category: "Utilities" },
    { id: 3, description: "pepper", amount: 18, category: "Utilities" },
  ]);

  const handleDelete = (data: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== data));
  };

  const handleSubmit = (data: expensenoid) => {
    setExpenses([...expenses, { ...data, id: expenses.length + 1 }]);
  };

  return (
    <div className="m-5">
      <div className="mb-3">
        <ExpenseForm onSubmit={handleSubmit} />
      </div>

      {expenses.length && (
        <div className="mt-5">
          <ExpenseList expenses={expenses} onDelete={handleDelete} />
        </div>
      )}
    </div>
  );
}

export default App;
