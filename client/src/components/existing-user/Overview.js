import React, { useState, useEffect } from "react";
import Api from "../../Api";

const Overview = () => {
  const [budgetValue, setBudgetValue] = useState(0);
  useEffect(() => {
    Api.budget.index().then((response) => {
      console.log(13, response);
    });
  }, []);

  return <div>{budgetValue}</div>;
};

export default Overview;
