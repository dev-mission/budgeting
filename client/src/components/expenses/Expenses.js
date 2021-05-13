import React from "react";

import { Route, Switch, useRouteMatch } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import ExpensesList from "./ExpensesList";

function Expenses() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <ExpensesList />
      </Route>
      <Route path={`${path}/new`}>
        <ExpenseForm />
      </Route>
      <Route path={`${path}/:id/edit`}>
        <ExpenseForm />
      </Route>
    </Switch>
  );
}

export default Expenses;
