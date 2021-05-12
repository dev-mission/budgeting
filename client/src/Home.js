import React, { useState, useEffect } from "react";
import Api from "./Api";
import BudgetList from "./components/budget/BudgetList";
function Home() {
  const [budget, setBudget] = useState([]);

  useEffect(() => {
    Api.budget.index().then((res) => setBudget(res.data));
  }, []);

  return (
    <main className="container">
      <header>
        <h2>
          <BudgetList budget={budget} />
        </h2>
      </header>
    </main>
  );
}

export default Home;
