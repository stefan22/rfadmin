import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import * as ROUTES from "../../helpers/constants";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: null,
  isAdmin: false,
};

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { username, email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        // create db user
        let created = authUser.user.metadata.creationTime;
        let lastSignedIn = authUser.user.metadata.lastSignInTime;
        let emailVerified = authUser.user.emailVerified;
        let uid = authUser.user.uid;

        return this.props.firebase.doGetUser(authUser.user.uid).set({
          username,
          email,
          emailVerified,
          uid,
          lastSignedIn,
          created,
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        return this.props.history.push({
          pathname: ROUTES.HOME,
          username,
        });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    //console.log(this);
    const {
      username,
      email,
      password,
      confirmPassword,
      error,
    } = this.state;

    const isInvalid =
      password !== confirmPassword ||
      password === "" ||
      email === "" ||
      username === "";

    return (
      <section className="dp-signup">
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
              color="default"
            >
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

export default SignupForm;
