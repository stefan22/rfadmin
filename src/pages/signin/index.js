import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { compose } from "recompose";
import { withFirebase } from "../../components/Firebase";
import "./styles.scss";

import GoogleSignIn from "../../components/googleSignIn/GoogleSignIn";

import * as ROUTES from "../../helpers/constants";

const SigninPage = () => (
  <div className="dp-signin-wrapper">
    <h1>Signin Page</h1>
    <SigninFormWrapper />
    <div className="signin-links">
      <SignUpLink />
      <PasswordForgetLink />
    </div>
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  isAdmin: false,
};

class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {}

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE, user: authUser.uid });
        return this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <section className="dp-signin">
        <div className="signin-container">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              value={email}
              onChange={this.handleChange}
              type="email"
              placeholder="Email"
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={password}
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
            />

            <Button
              disabled={isInvalid}
              type="submit"
              variant="contained"
              color="default"
            >
              Signin
            </Button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
        <hr />

        <section className="social-wrapper">
          <div className="thirdparty-providers">
            <h4>OR</h4>
            <h5>Sign in with your Google Account</h5>
            <GoogleSignIn />
          </div>
        </section>
      </section>
    );
  }
}

const SignUpLink = () => (
  <p className="dp-signup-link">
    Don't have an account? <Link to={ROUTES.SIGNUP}>Sign Up</Link>
  </p>
);

const PasswordForgetLink = () => (
  <p className="dp-passwordforget-link">
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

const SigninFormWrapper = compose(
  withRouter,
  withFirebase,
)(SigninForm);

export default SigninPage;

export { SignUpLink, SigninForm };
