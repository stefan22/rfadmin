import React from "react";
import { withAuthorization } from "../../components/Session";

const HomePage = props => {
  let user = props.history.location.username;
  let greet =
    typeof user === "string"
      ? user.charAt(0).toUpperCase() + user.slice(1, user.length)
      : false;

  return (
    <div className="dp-home-wrapper">
      <h1>Home {greet}</h1>
    </div>
  );
};

const isAdmin = authUser => !!authUser;

export default withAuthorization(isAdmin)(HomePage);
