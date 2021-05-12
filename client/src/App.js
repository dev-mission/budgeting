import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import { AuthContextProvider } from "./AuthContext";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Passwords from "./Passwords";
import Register from "./Register";

import BudgetForm from "./components/budget/BudgetForm";
import ExpenseContainer from "./components/expensive/ExpenseContainer";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/overview">
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
          <Route path="/setup-budget">
            <BudgetForm />
          </Route>
          <Route path="/expenses">
            <ExpenseContainer />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
