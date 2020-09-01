import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { FirebaseContext } from "../../components/Firebase";
import "./styles.scss";

import * as ROUTES from "../../helpers/constants";

const SignupPage = () => (
  <div>
    <h1>Signup Page</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignupFormWrapper firebase={firebase} />}
    </FirebaseContext.Consumer>
    <SignupLink />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: null,
  isAdmin: false
};

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { email, password } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE, authUser });
        return this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    console.log(this);
    const { username, email, password, confirmPassword, error } = this.state;

    const isInvalid =
      password !== confirmPassword ||
      password === "" ||
      email === "" ||
      username === "";

    return (
      <section className="signup">
        <div className="signup-container">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              value={username}
              onChange={this.handleChange}
              type="text"
              placeholder="Name"
            />
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
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              type="password"
              placeholder="Confirm Password"
            />

            <Button
              disabled={isInvalid}
              type="submit"
              variant="contained"
              color="default">
              Signup
            </Button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
        <hr />
      </section>
    );
  }
}

const SignupLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignupFormWrapper = withRouter(SignupForm);

export default SignupPage;

export { SignupLink };
