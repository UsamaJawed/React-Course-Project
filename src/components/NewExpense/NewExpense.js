import react from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) =>{
    //We have to create a new object then add an id to it.
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* Expecting data from ExpenseForm component to this parent component */}
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
