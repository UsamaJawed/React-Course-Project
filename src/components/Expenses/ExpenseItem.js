import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenceDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenceItem = (props) => {
  const [title, setTitle] = useState(props.title);
  //useState gives us an array, we use array deconstruction to get two elements from it
  //The first element is a pointer at that value managed by useState ie, props.title
  //The second element is a function which will be used to change the value

  //Why is const used here? Because we never assigned a value, it is managed by React.

  console.log("Expense Item has been evaluated by React");

  const clickHandler = () => {
    setTitle("Updated !!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenceItem;
