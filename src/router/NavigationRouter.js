import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import * as ROUTES from "../helpers/constants";

const useStyles = makeStyles(theme => ({
  navigationButton: {
    color: theme.palette.colors.white,
    fontSize: theme.palette.fontSizes.small
  },
  navigationMenu: {
    lineHeight: 2,
    padding: "0 1rem"
  }
}));

const AdminRoutes = ({ classes, handleSignout }) => (
  <>
    <Button>
      <Link className={classes.navigationButton} to={ROUTES.LANDING}>
        Landing
      </Link>
    </Button>

    <Button>
      <Link className={classes.navigationButton} to={ROUTES.HOME}>
        Home
      </Link>
    </Button>

    <Button>
      <Link className={classes.navigationButton} to={ROUTES.ACCOUNT}>
        Account
      </Link>
    </Button>

    <Button>
      <Link
        onClick={handleSignout}
        className={classes.navigationButton}
        to={ROUTES.SIGN_OUT}
      >
        Signout
      </Link>
    </Button>
  </>
);

const RegRoutes = ({ classes }) => (
  <>
    <Button>
      <Link className={classes.navigationButton} to={ROUTES.LANDING}>
        Landing
      </Link>
    </Button>

    <Button>
      <Link className={classes.navigationButton} to={ROUTES.SIGN_UP}>
        Signup
      </Link>
    </Button>

    <Button>
      <Link className={classes.navigationButton} to={ROUTES.SIGN_IN}>
        Signin
      </Link>
    </Button>
  </>
);


const NavigationRouter = ({ authUser }) => {
  console.log("authUser is => ", authUser);

  console.log("authUser authUser is => ", authUser.authUser);

  const classes = useStyles();
  return (
    <section className={classes.navigationMenu}>
      {authUser.authUser !== null ? (
        <AdminRoutes classes={classes} />
      ) : (
        <RegRoutes classes={classes} />
      )}
    </section>
  );
};

export default NavigationRouter;
