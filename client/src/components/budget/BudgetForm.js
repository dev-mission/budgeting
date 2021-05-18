import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import Api from "../../Api";

const BudgetForm = () => {
  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState({});
  const [budget, setBudget] = useState({
    dollarAmount: 0.0,
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
  });

  const history = useHistory();
  const { id } = useParams();

  useEffect(function () {
    Api.users.me().then((response) => setUser(response.data));
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    const newBudget = { ...budget };
    if (value === "") {
      newBudget[name] = value;
    } else {
      newBudget[name] = parseFloat(value);
    }
    setBudget(newBudget);
  };
  console.log(budget);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await Api.budget.update(id, budget);
      } else {
        await Api.budget.create(budget);
        history.push("/overview");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <h1>Budget</h1>
          <div>
            <label htmlFor="dollarAmount">
              How much are you willing to spend each month?
            </label>
            <input
              type="number"
              id="dollarAmount"
              name="dollarAmount"
              value={budget.dollarAmount}
              onChange={onChange}
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BudgetForm;
