import React from "react";
import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      this.unsubscribe = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        },
      );
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          {<Component {...this.props} />}
        </AuthUserContext.Provider>
      );
    }
  } // WithAuthentication

  return withFirebase(WithAuthentication);
}; // withAuthentication

export default withAuthentication;
