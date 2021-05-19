import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../../Api";

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    Api.expenses.index().then((response) => setExpenses(response.data));
  }, []);

  const onDelete = (expense) => {
    if (window.confirm(`Are you sure you want to delete ${expense.name}?`)) {
      // delete button from the API
      Api.expenses.delete(expense.id).then(() => {
        // We are fukterunf gthe section list, keeping every section that does not match the one we're deleting
        const newExpenses = expenses.filter((s) => s.id !== expense.id);
        setExpenses(newExpenses);
      });
    }
  };

  return (
    <main className="container">
      <div>Expenses List</div>
      <Link className="btn btn-primary" to="/expenses/new">New</Link>
      <ul>
        {expenses.map((s) => (
          <li>
            <p>
              <Link to={`/expenses/${s.id}/edit`}>
                {s.amount}, {s.description}, {s.timePurchase}
              </Link>
            </p>
            <p>
              <button
                onClick={() => onDelete(s)}
                type="button"
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ExpenseList;
