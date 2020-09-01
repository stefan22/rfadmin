import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import * as ROUTES from "../helpers/constants";

const useStyles = makeStyles((theme) => ({
  navigationButton: {
    color: theme.palette.colors.white,
    fontSize: theme.palette.fontSizes.p
  },
  navigationMenu: {
    lineHeight: 3,
    padding: "0 1rem"
  }
}));

const NavigationRouter = () => {
  const classes = useStyles();
  return (
    <section className={classes.navigationMenu}>
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
    </section>
  );
};

export default NavigationRouter;
