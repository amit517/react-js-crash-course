import React from "react";
import { useHistory, Redirect } from "react-router-dom";

const Profile = ({ authorized }) => {
  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return <div>If you are here you are allowed to be here</div>;
};

export default Profile;
