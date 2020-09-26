import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import sideBanner from "../../images/manlaptop.png";
import { Link, withRouter } from "react-router-dom";
// comps
import SignupForm from "./SignupForm";
import { compose } from "recompose";
import { withFirebase } from "../../components/Firebase";
import "./styles.scss";

import * as ROUTES from "../../helpers/constants";

const SignupPage = () => (
  <Grid container spacing={0}>
    <Hidden lgUp>
      <Grid item xs={12} md={12} lg={6}>
        <div className="banner-wrapper">
          <img
            className="img2"
            src={sideBanner}
            width={910}
            height={607}
          />
        </div>
      </Grid>
    </Hidden>
    <Grid item xs={12} md={12} lg={12}>
      <div className="dp-signup-wrapper">
        <h1>Signup Page</h1>
        <SignupFormWrapper />
        <SignupLink />
      </div>
    </Grid>
  </Grid>
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
