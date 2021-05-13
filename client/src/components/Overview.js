import React, { useState, useEffect } from "react";
import Api from "../Api";

function Overview() {
  const [budget, setBudget] = useState([]);

  useEffect(() => {
    Api.budget.index().then((res) => setBudget(res.data));
  }, []);

  return (
    <main className="container">
      {budget.map((each) => (
        <p>{each.dollarAmount}</p>
      ))}
    </main>
  );
}

export default Overview;
