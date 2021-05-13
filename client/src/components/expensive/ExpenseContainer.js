import React from "react";

import { Route, Switch, useRouteMatch } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";

function ExpenseContainer() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <ExpenseList />
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

export default ExpenseContainer;
