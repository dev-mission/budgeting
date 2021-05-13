import React, { useState, useEffect } from "react";
import Api from "../../Api";

const Overview = () => {
  const [budgetValue, setBudgetValue] = useState(0);
  useEffect(() => {
    Api.budget.index().then((response) => {
      setBudgetValue(response);
    });
  }, [budgetValue]);

  return <div>{budgetValue}</div>;
};

export default Overview;
