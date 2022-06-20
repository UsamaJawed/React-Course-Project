import react, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    <Card className="expenses">
      <ExpensesFilter value={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart  expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
