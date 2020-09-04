import React from "react";
import { Link, withRouter } from "react-router-dom";

import * as ROUTES from "../../helpers/constants";

const AccountPage = () => (
  <div className="dp-account-wrapper">
    <h1>Account Page</h1>
    <PasswordForgetLink />
    <PasswordResetLink />
  </div>
);

const PasswordForgetLink = () => (
  <p className="dp-passwordforget-link">
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

const PasswordResetLink = () => (
  <p className="dp-passwordreset-link">
    <Link to={ROUTES.PASSWORD_RESET}>Reset Password</Link>
  </p>
);

export default withRouter(AccountPage);
