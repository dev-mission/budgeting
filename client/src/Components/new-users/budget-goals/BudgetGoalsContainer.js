import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BudgetGoalsList from "./BudgetGoalsList";
import BudgetGoalsForm from "./BudgetGoalsForm";

const BudgetContainer = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <BudgetGoalsList />
      </Route>
      <Route path={`${path}/new`}>
        <BudgetGoalsForm />
      </Route>
    </Switch>
  );
};

export default BudgetContainer;
