import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";

// comps
import Navigation from "../components/Navigation";
// pages
import DashboardPage from "../pages/dashboard";
import SignupPage from "../pages/signup";
import SigninPage from "../pages/signin";
import PasswordForget from "../pages/passwordForget";
import PasswordReset from "../pages/passwordReset";
import HomePage from "../pages/home";
import AdminPage from "../pages/admin";
import AccountPage from "../pages/account";

import * as ROUTES from "../helpers/constants";

const MainRouter = () => (
  <Router>
    <Switch>
      <Route path="*" render={mainRouter} />
    </Switch>
  </Router>
);

const mainRouter = () => (
  <div className="app-wrapper">
    <Navigation />
    <Route
      render={({ location }) => (
        <TransitionGroup appear>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames="fade"
          >
            <Switch location={location}>
              <Route
                exact
                path={ROUTES.DASHBOARD}
                component={DashboardPage}
              />
              <Route
                exact
                path={ROUTES.SIGN_UP}
                component={SignupPage}
              />
              <Route
                exact
                path={ROUTES.SIGN_IN}
                component={SigninPage}
              />
              <Route
                exact
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForget}
              />
              <Route
                exact
                path={ROUTES.PASSWORD_RESET}
                component={PasswordReset}
              />
              <Route exact path={ROUTES.HOME} component={HomePage} />
              <Route
                exact
                path={ROUTES.ADMIN}
                component={AdminPage}
              />
              <Route
                exact
                path={ROUTES.ACCOUNT}
                component={AccountPage}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </div>
);

export default MainRouter;
