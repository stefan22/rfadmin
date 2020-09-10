import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import SignoutButton from "../pages/signout";

import * as ROUTES from "../helpers/constants";

const AdminRoutes = ({ classes }) => (
  <>
    <Button>
      <Link
        className={classes.navigationButton}
        to={ROUTES.DASHBOARD}
      >
        Dashboard
      </Link>
    </Button>

    <Button>
      <Link className={classes.navigationButton} to={ROUTES.HOME}>
        Home
      </Link>
    </Button>

    <Button>
      <Link className={classes.navigationButton} to={ROUTES.ADMIN}>
        Admin
      </Link>
    </Button>

    <Button>
      <Link className={classes.navigationButton} to={ROUTES.ACCOUNT}>
        Account
      </Link>
    </Button>

    <SignoutButton />
  </>
);

const RegRoutes = ({ classes }) => {
  return (
    <div>
      <Button>
        <Link
          className={classes.navigationButton}
          to={ROUTES.DASHBOARD}
        >
          Dashboard
        </Link>
      </Button>

      <Button>
        <Link
          className={classes.navigationButton}
          to={ROUTES.SIGN_UP}
        >
          Signup
        </Link>
      </Button>

      <Button>
        <Link
          className={classes.navigationButton}
          to={ROUTES.SIGN_IN}
        >
          Signin
        </Link>
      </Button>
    </div>
  );
};
export { AdminRoutes, RegRoutes };
