import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Api from "../../../Api";

const BudgetGoalsForm = () => {
  const [budget, setBudget] = useState("");
  const [goalObject, setGoalObject] = useState({
    goalName: "",
    goalCost: "",
    goalDate: "",
  });
  const [goalForm, setGoalForm] = useState([]);
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
        setGoalObject({ ...goalObject, [name]: value });
        break;
      case "goalCost":
        setGoalObject({ ...goalObject, [name]: value });
        break;
      case "goalDate":
        setGoalObject({ ...goalObject, [name]: value });
        break;
      default:
        return 0;
    }
  };

  const handleAdd = (e) => {
    setGoalForm([...goalForm, goalObject]);
    setGoalObject({ goalName: "", goalCost: "", goalDate: "" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setHasSubmit(true);
    try {
      await Api.budget.add(budget);
      history.push("/budgetgoals");
      console.log("123");
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
              value={goalObject.goalName}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="goalCost">How much does it cost?</label>
            <input
              type="number"
              name="goalCost"
              id="goalCost"
              value={goalObject.goalCost}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="goalDate">When do you want to buy it?</label>
            <input
              type="date"
              name="goalDate"
              id="goalDate"
              value={goalObject.goalDate}
              onChange={onChange}
            />
          </div>
          <div>
            <button type="add" onClick={handleAdd}>
              + add goal
            </button>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      {hasSubmit ? <p>{budget}</p> : <> </>}
    </div>
  );
};

export default BudgetGoalsForm;
