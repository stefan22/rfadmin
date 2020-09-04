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
import LandingPage from "../pages/landing";
import SignupPage from "../pages/signup";
import SigninPage from "../pages/signin";
import SignoutPage from "../pages/signup";
import HomePage from "../pages/home";
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
                path={ROUTES.LANDING}
                component={LandingPage}
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
                path={ROUTES.SIGN_OUT}
                component={SignoutPage}
              />
              <Route exact path={ROUTES.HOME} component={HomePage} />
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
