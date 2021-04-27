import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Api from "../../../Api";

const BudgetGoals = () => {
  const [budget, setBudget] = useState("");
  const [goalForm, setGoalForm] = useState({
    goalName: "",
    goalCost: "",
    goalDate: "",
  });
  const [hasSubmit, setHasSubmit] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "budget":
        setBudget(value);
        break;
      case "goalName":
        setGoalForm({ ...goalForm, [name]: value });
        break;
      case "goalCost":
        setGoalForm({ ...goalForm, [name]: value });
        break;
      case "goalDate":
        setGoalForm({ ...goalForm, [name]: value });
        break;
      default:
        return 0;
    }
  };

  const handleAdd = (e) => {
    setGoalForm({ goalName: "", goalCost: "", goalDate: "" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setHasSubmit(true);
    try {
      if (id) {
        await Api.budget.update(id, budget);
      } else {
        await Api.budget.add(budget);
      }
      history.push("/budgetgoals");
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
            <label htmlFor="budget">
              How much are you willing to spend each month?
            </label>
            <input
              type="number"
              id="budget"
              name="budget"
              value={budget}
              onChange={onChange}
            />
          </div>
        </div>
        <div>
          <h1>Saving Goals (Recommend)</h1>
          <div>
            <label htmlFor="goalName">What are you saving for?</label>
            <input
              type="text"
              name="goalName"
              id="goalName"
              value={goalForm.goalName}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="goalCost">How much does it cost?</label>
            <input
              type="number"
              name="goalCost"
              id="goalCost"
              value={goalForm.goalCost}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="goalDate">When do you want to buy it?</label>
            <input
              type="date"
              name="goalDate"
              id="goalDate"
              value={goalForm.goalDate}
              onChange={onChange}
            />
          </div>
          <div>
            <button type="add" onClick={handleAdd}>
              +
            </button>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      {hasSubmit ? <p>{budget}</p> : <> </>}
    </div>
  );
};

export default BudgetGoals;
