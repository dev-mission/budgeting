import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CategoryForm from "./CategoryForm";
import CategoriesList from "./CategoriesList";

function Categories() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <CategoriesList />
      </Route>
      <Route path={`${path}/new`}>
        <CategoryForm />
      </Route>
      <Route path={`${path}/:id/edit`}>
        <CategoryForm />
      </Route>
    </Switch>
  );
}

export default Categories;
