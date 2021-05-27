import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Api from "../../Api";
import "../../shared/style/SetUp.css";
import { UserArrow } from "../../shared/logo/Avatars";
function NewBudget() {
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
        history.push("/setup/goal");
      }
    } catch (error) {
      console.log(error);
    }
  };
    return (
        <div>
            <div className="setup">
                <div className="steps">
                    <ul>
                        <li>Step 0 Create Account</li>
                        <li><b>Step 1 Determine Spending Budget</b></li>
                        <li>Step 2 SetUp Saving Goals</li>
                        <li>Step 3 Add Expense Categories</li>
                    </ul>
                </div>
                <div className="form">
                    <form onSubmit={onSubmit}>
                        <div>
                            <h1 className="budgetAmount">
                                How much are you willing to spend each month?
                            </h1>
                            <p>Knowing how much you can spend each month will allow us to help you budget for each month while helping you reach your savings goals.
                                Don’t worry, we won’t share this information with anyone. </p>
                            <b>Monthly Spending Budget: $</b>
                            <input
                                type="number"
                                id="dollarAmount"
                                name="dollarAmount"
                                value={budget.dollarAmount}
                                onChange={onChange}
                            />
                            <button className="arrow" type="submit"><UserArrow /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default NewBudget;