import React from "react";

const HomePage = props => {
  let user = props.history.location.username;
  let greet =
    typeof user === "string"
      ? user.charAt(0).toUpperCase() + user.slice(1, user.length)
      : false;

  return (
    <div className="dp-home-wrapper">
      <h1>Welcome {greet}</h1>
    </div>
  );
};

export default HomePage;
