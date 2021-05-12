import React, { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";

function ExpenseContainer() {
  const [category, setCategory] = useState("shopping");
  const [expenseForm, setExpenseForm] = useState({
    CategoryId: 0,
    description: "",
    timePurchase: "",
    amount: 0,
  });

  return (
    <main>
      <header>
        <h1>Expensive</h1>
        <h2>FLEXIBLE COST</h2>
      </header>
      <section>
        <ExpenseForm
          category={category}
          setCategory={setCategory}
          expenseForm={expenseForm}
          setExpenseForm={setExpenseForm}
        />
      </section>
    </main>
  );
}

export default ExpenseContainer;
