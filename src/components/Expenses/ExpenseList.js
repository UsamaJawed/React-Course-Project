import React from "react";

import "./ExpenseList.css";
import ExpenceItem from "./ExpenseItem";

const ExpenseList = (props) => {

    if (props.items.length === 0) {
        return (<h2 className="expenses-list__fallback">No item found.</h2>);
    }

    return (
        <ul className="expenses-list">
            {
                props.items.map((expense) => (
                    <ExpenceItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </ul>
    )
}

export default ExpenseList;