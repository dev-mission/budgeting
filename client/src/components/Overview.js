import React, { useState, useEffect } from "react";
import Api from "../Api";
import CategoriesList from "./category/CategoriesList";
function Overview() {
  const [budget, setBudget] = useState([]);
  useEffect(() => {
    Api.budget.index().then((res) => setBudget(res.data));
  }, []);
  return (
    <main className="container">
      <section>
        {budget.map((each) => (
          <p>{each.dollarAmount}</p>
        ))}
      </section>
      <section>
        <CategoriesList />
      </section>
    </main>
  );
}
export default Overview;
