import React, { Component } from "react";
import { withFirebase } from "./components/Firebase";
// comps
import MainRouter from "./router/MainRouter";
import CssBaseline from "@material-ui/core/CssBaseline";
// theme
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

class App extends Component {
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
    const { authUser } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainRouter authUser={authUser} />
      </ThemeProvider>
    );
  }
}

export default withFirebase(App);
