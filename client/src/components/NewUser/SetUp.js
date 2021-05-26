import {Route, Switch, useRouteMatch} from "react-router-dom";
import NewBudget from './NewBudget';
import NewCategories from "./NewCategories";
import NewSavingGoal from './NewSavingGoal';
// import Register from '../../Register';
import NewFinish from './NewFinish';
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

            <Route path={`${path}/categories`}>
                <NewCategories />
            </Route>

            <Route path={`${path}/done`}>
                <NewFinish />
            </Route>
        </Switch>
    );
}
export default SetUp;