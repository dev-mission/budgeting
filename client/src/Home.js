import React, { useState, useEffect } from "react";
import Api from "./Api";

function Home() {
  const [budget, setBudget] = useState([]);

  useEffect(() => {
    Api.budget.index().then((res) => setBudget(res.data));
  }, []);

  return (
    <main className="container">
      <h1>{budget.map((b) => b.dollarAmount)}</h1>
    </main>
  );
}

export default Home;
