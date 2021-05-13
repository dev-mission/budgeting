import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Api from "../../Api";

function ExpenseForm() {
  const history = useHistory();
  const { id } = useParams();

  const [category, setCategory] = useState("shopping");
  const [expenseForm, setExpenseForm] = useState({
    description: "",
    timePurchase: "",
    amount: 0,
  });

  useEffect(function() {
    if (id) {
      Api.expenses.get(id).then((response) => setExpenseForm(response.data));
    }
  }, [id]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleExpenseFormChange = (e) => {
    const newExpense = { ...expenseForm };
    newExpense[e.target.name] = e.target.value;
    setExpenseForm(newExpense);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await Api.expenses.update(id, expenseForm);
      } else {
        await Api.expenses.create(expenseForm);
      }
      history.push("/expenses");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="amount">Amount Spend</label>
      <input
        id="amount"
        name="amount"
        type="number"
        placeholder="$0.00"
        value={expenseForm.amount}
        onChange={handleExpenseFormChange}
      />
      <label htmlFor="timePurchase">Date</label>
      <input
        id="timePurchase"
        name="timePurchase"
        type="date"
        value={expenseForm.timePurchase}
        onChange={handleExpenseFormChange}
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        type="text"
        value={expenseForm.description}
        onChange={handleExpenseFormChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default ExpenseForm;
