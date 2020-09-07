import React from "react";
import { withAuthorization } from "../../components/Session";

const AdminPage = props => {
  let user = props.history.location.username;
  let greet =
    typeof user === "string"
      ? user.charAt(0).toUpperCase() + user.slice(1, user.length)
      : false;

  return (
    <div className="dp-admin-wrapper">
      <h1>Welcome {greet}</h1>
    </div>
  );
};

const isAdmin = authUser => authUser && authUser.isAdmin === true;

export default withAuthorization(isAdmin)(AdminPage);
