import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const NewRedirectApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/profile"
          component={() => <Profile authorized={true} />}
        />
      </Switch>
    </Router>
  );
};

export default NewRedirectApp;
