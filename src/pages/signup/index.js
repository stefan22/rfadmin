import React from "react";
import { Link, withRouter } from "react-router-dom";
// comps
import SignupForm from "./SignupForm";
import { compose } from "recompose";
import { withFirebase } from "../../components/Firebase";
import "./styles.scss";

import * as ROUTES from "../../helpers/constants";

const SignupPage = () => (
  <div className="dp-signup-wrapper">
    <h1>Signup Page</h1>
    <SignupFormWrapper />
    <SignupLink />
  </div>
);

const SignupLink = () => (
  <p className="dp-signup-link">
    Do you have an account? <Link to={ROUTES.SIGNIN}>Sign In</Link>
  </p>

);

const SignupFormWrapper = compose(
  withRouter,
  withFirebase,
)(SignupForm);

export default SignupPage;

export { SignupLink };
