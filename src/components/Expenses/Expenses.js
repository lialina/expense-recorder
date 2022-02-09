import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");
  const [visibleExpenses, setVisibleExpenses] = useState(props.items);

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
    setVisibleExpenses(
      props.items.filter(
        (expense) => String(expense.date.getFullYear()) === selectedYear
      )
    );
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={filterYearHandler}
        />
        {visibleExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
