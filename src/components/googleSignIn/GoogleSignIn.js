import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import { Button, Grid } from "@material-ui/core";
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
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <form onSubmit={this.handleSubmit}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              startIcon={<GTranslateIcon />}
            >
              Signin with Google
            </Button>

            {error && <p>{error.message}</p>}
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default compose(withRouter, withFirebase)(GoogleSignIn);
