import React, { useContext } from "react";
import { LoginContext } from "../Helper/Context";
import { useHistory, Redirect } from "react-router-dom";
const Login = () => {
  // use context
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  // for routs
  let history = useHistory();
  const formHandler = (params) => {
    setLoggedIn(true);
    history.push("/profile");
  };

  return (
    <div>
      {/* So we can use context to check if user is logged in or not */}

      {loggedIn ? (
        // all ready logged in

        <Redirect to="/profile" />
      ) : (
        //not logged in

        <div>
          <form action="">
            <input type="text" placeholder="User Name" />
            <input type="text" placeholder="Password" />
            <button onClick={formHandler}>Login</button>
          </form>
          <h1>You are not logged in</h1>
        </div>
      )}
    </div>
  );
};

export default Login;
