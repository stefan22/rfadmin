import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withFirebase } from "../../components/Firebase";
import { compose } from "recompose";
// styles
import "./styles.scss";

const PasswordForget = () => (
  <div className="dp-password-wrapper">
    <h1>Password Forget</h1>
    <PasswordForgetFormWrapper />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null,
  isAdmin: false,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <section className="dp-password">
        <div className="password-container">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              value={email}
              onChange={this.handleChange}
              type="email"
              placeholder="Email"
            />
            <Button
              disabled={isInvalid}
              type="submit"
              variant="contained"
              color="default"
            >
              Reset Password
            </Button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
        <hr />
      </section>
    );
  }
}

const PasswordForgetFormWrapper = compose(
  withRouter,
  withFirebase,
)(PasswordForgetForm);

export default PasswordForget;

export { PasswordForgetFormWrapper, PasswordForgetForm };
