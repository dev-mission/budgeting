import {Route, Switch, useRouteMatch} from "react-router-dom";
import NewBudget from './NewBudget';
import NewSavingGoal from './NewSavingGoal';

function SetUp () {
    const {path} = useRouteMatch()
    return (
        <Switch>
            <Route exact path={path}>
                <NewBudget />
            </Route>

            <Route path={`${path}/goal`}>
                <NewSavingGoal />
            </Route>
        </Switch>
    );
}
export default SetUp;