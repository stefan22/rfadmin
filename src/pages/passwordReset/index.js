import React, { Component } from "react";
import { withFirebase } from "../../components/Firebase";
import "./styles.scss";

const INITIAL_STATE = {
  password: "",
  confirmPassword: "",
  error: null,
};

class PasswordResetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { password } = this.state;

    this.props.firebase
      .doPasswordUpdate(password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    const { password, confirmPassword, error } = this.state;

    const isInvalid = password !== confirmPassword || password === "";

    return (
      <div className="dp-password-wrapper">
        <h1>Password Reset</h1>
        <section className="dp-password">
          <div className="password-container">
            <form onSubmit={this.handleSubmit}>
              <input
                name="password"
                value={password}
                onChange={this.handleChange}
                type="password"
                placeholder="New Password"
              />
              <input
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                type="password"
                placeholder="Confirm New Password"
              />
              <button disabled={isInvalid} type="submit">
                Reset Password
              </button>

              {error && <p>{error.message}</p>}
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default withFirebase(PasswordResetForm);
