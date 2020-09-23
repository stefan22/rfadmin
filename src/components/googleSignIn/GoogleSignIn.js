import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import Button from "@material-ui/core/Button";
import * as ROUTES from "../../helpers/constants";

import GTranslateIcon from "@material-ui/icons/GTranslate";
import "./styles.scss";

class GoogleSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.firebase
      .doSignInWithGoogle()
      .then(authUser => {
        return this.props.firebase
          .doGetUser(authUser.user.uid)
          .set({
            username: authUser.user.displayName,
            email: authUser.user.email,
          })
          .then(() => {
            this.setState({
              username: authUser.user.displayName,
              email: authUser.user.email,
            });
            this.props.history.push(ROUTES.HOME);
          });
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Button
          type="submit"
          size="large"
          variant="contained"
          color="default"
          startIcon={<GTranslateIcon />}
        >
          Signin with Google
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default compose(withRouter, withFirebase)(GoogleSignIn);
