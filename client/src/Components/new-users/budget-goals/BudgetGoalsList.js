import React, { useState, useEffect } from "react";
import Api from "../../../Api";
const BudgetGoalsList = (props) => {
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    Api.budget.get().then((response) => {
      setBudget(response.data);
      console.log(response);
    });
  }, []);

  return (
    <>
      <div>{budget}</div>
    </>
  );
};

export default BudgetGoalsList;
