import { Route, Switch, useRouteMatch } from "react-router-dom";
import ResourceForm from "./ResourceForm";
import ResourcesList from "./ResourcesList";

const Resources = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <ResourcesList />
      </Route>
      <Route path={`${path}/new`}>
        <ResourceForm />
      </Route>
      <Route exact path={`${path}/:id/edit`}>
        <ResourcesList />
      </Route>
    </Switch>
  );
};

export default Resources;
