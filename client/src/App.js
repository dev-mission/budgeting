import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import { AuthContextProvider } from "./AuthContext";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Passwords from "./Passwords";
import Register from "./Register";
import SetUp from "./Components/NewUser/SetUp";
import Overview from "./Components/Overview";
import BudgetForm from "./Components/budget/BudgetForm";
import Expenses from "./Components/expenses/Expenses";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/overview">
            <Overview />
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
          <Route path="/setup">
            <SetUp />
          </Route>
          <Route path="/setup-budget">
            <BudgetForm />
          </Route>
          <Route path="/expenses">
            <Expenses />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
