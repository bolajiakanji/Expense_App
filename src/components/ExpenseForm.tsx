import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import categories from "./categories";

interface Expense {
  
  description: string;
  amount: number;
  category: "Groceries" | "Entertainment" | "Utilities";
}

const schema = z.object({
  description: z.string({ }).min(4, { message: "Description is required" }).max(50),
  amount: z.number({ invalid_type_error: "Amount is required"}).min(0.01).max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" })
  }),
});

type ExpenseFormData = z.infer<typeof schema>;
interface OnSubmitProp {
  onSubmit: (data:Expense ) => void,

}
const ExpenseForm = ({ onSubmit }: OnSubmitProp) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  

  return (
    <form onSubmit={handleSubmit((data) => {onSubmit(data); reset()})}>
      <div id="description-field" className="mb-3">
        <label htmlFor="description">description</label>
        <input {...register("description")} id="description" type="text" className="form-control" />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}
      </div>
      <div id="amount-field" className="mb-3">
        <label htmlFor="amount">amount</label>
        <input {...register("amount", { valueAsNumber: true })} id="amount" type="number" className="form-control" />
        {errors.amount && <p className="text-danger">{errors.amount.message}</p>}

      </div>
      <div id="category-field" className="mb-3">
        <select {...register("category")} id="category">
          <option value="">Select category </option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className="text-danger">{errors.category.message}</p>}

      </div>
      <button disabled={!errors} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
