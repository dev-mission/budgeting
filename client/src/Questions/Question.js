import { Route, Switch, useRouteMatch } from "react-router-dom";
import QuestionsForm from "./QuestionForm";
import QuestionList from "./QuestionsList";

const Questions = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <QuestionsList />
      </Route>
      <Route path={`${path}/new`}>
        <QuestionForm />
      </Route>
      <Route exact path={`${path}/:id/edit`}>
        <QuestionList />
      </Route>
    </Switch>
  );
};

export default Question;