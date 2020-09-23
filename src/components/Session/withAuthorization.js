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
          let dbUser, user;
          if (!isAdmin(authUser)) {
            this.props.history.push(ROUTES.SIGNIN);
          }
          this.props.firebase
            .doGetUser(authUser.uid)
            .get()
            .then(doc => {
              dbUser = doc.data();
            });
          user = {
            uid: authUser.uid,
            email: authUser.email,
            ...dbUser,
          };
          this.setState({ authUser: user });
        },

        () => this.props.history.push(ROUTES.SIGNIN),
        this.setState({ authUser: null }),
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
