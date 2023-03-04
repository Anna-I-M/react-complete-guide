import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAddingExpense, setAddingExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddingExpense(false);
  };

  const addingHandler = () => {
    setAddingExpense(true);
  };

  const cancelHandler = () => {
    setAddingExpense(false);
  };

  return (
    <div className="new-expense">
        {!isAddingExpense && <button onClick={addingHandler}>Add New Expense</button>}
        {isAddingExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />}
    </div>
  );
};

export default NewExpense;
