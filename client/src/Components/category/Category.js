import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";

function Category() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <CategoryList />
      </Route>
      <Route path={`${path}/new`}>
        <CategoryForm />
      </Route>
      <Route path={`${path}/:id/edit`}>
        <CategoryList />
      </Route>
    </Switch>
  );
}

export default Category;
