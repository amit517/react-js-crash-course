import { React, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

import { LoginContext } from "./Helper/Context";

const NewRedirectApp = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
};

export default NewRedirectApp;
