import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import { AuthContextProvider } from "./AuthContext";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Passwords from "./Passwords";
import Register from "./Register";
import WelcomePage from "./Components/new-users/welcome/WelcomePage"; //ADDED
import BudgetGoalsContainer from "./Components/new-users/budget-goals/BudgetGoalsContainer"; //ADDED
import Overview from "./Components/existed-user/overview/";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/passwords">
            <Passwords />
          </Route>
          {process.env.REACT_APP_FEATURE_REGISTRATION === "true" && (
            <Route path="/register">
              <Register />
            </Route>
          )}
          <Route path="/welcome">
            <WelcomePage />
          </Route>
          <Route path="/budgetgoals">
            <BudgetGoalsContainer />
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
