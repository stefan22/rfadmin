import React, { Component } from "react";
// styles
import "./styles.scss";

const initialState = {
  ready: false,
  user: null,
};

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { initialState };
  }

  render() {
    return (
      <div className="dp-landing-wrapper">
        <h1>Landing page </h1>
      </div>
    );
  }
}

export default LandingPage;
