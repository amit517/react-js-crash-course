import React, { useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { LoginContext } from "../Helper/Context";

const Profile = () => {
  //using context..  Global checking

  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return <div>If you are here you are allowed to be here</div>;
};

export default Profile;
