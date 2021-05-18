import React from "react";

function BudgetList({ budget }) {
  return (
    <div>
      {budget.map((each) => (
        <p>{each.dollarAmount}</p>
      ))}
    </div>
  );
}

export default BudgetList;
