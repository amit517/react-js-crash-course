import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();

  const formHandler = (params) => {
    history.push("/profile");
  };

  return (
    <div>
      <form action="">
        <input type="text" placeholder="User Name" />
        <input type="text" placeholder="Password" />
        <button onClick={formHandler}>Login</button>
      </form>
    </div>
  );
};

export default Login;
