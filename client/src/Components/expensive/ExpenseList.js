import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    Api.expenses.index().then((response) => setExpenses(response.data));
  }, []);

  return (
    <main className="container">
      <div>Expenses List</div>
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
