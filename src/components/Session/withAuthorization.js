import React from "react";
import { withRouter } from "react-router-dom";
import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import * as ROUTES from "../../helpers/constants";

const withAuthorization = isAdmin => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.subscribe = this.props.firebase.onAuthUserListener(
        authUser => {
          if (!isAdmin(authUser)) {
            this.props.history.push(ROUTES.SIGNIN);
          }
        },
        () => this.props.history.push(ROUTES.SIGNIN),
      );
    }
    componentWillUnmount() {
      this.subscribe();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            isAdmin(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  } //WithAuthorization

  return compose(withRouter, withFirebase)(WithAuthorization);
};

export default withAuthorization;
