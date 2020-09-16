import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import SignoutButton from "../pages/signout";

import * as ROUTES from "../helpers/constants";

const regRoutes = ["DASHBOARD", "SIGNUP", "SIGNIN"];
const admRoutes = ["DASHBOARD", "HOME", "ACCOUNT", "ADMIN"];

const AdminRoutes = ({ classes }) => (
  <MenuList>
    {admRoutes.map((rte, idx) => (
      <Button
        key={idx}
        color="inherit"
        component={Link}
        className={classes.nested}
        to={ROUTES[rte]}
      >
        {rte}
      </Button>
    ))}

    <SignoutButton />
  </MenuList>
);

const RegRoutes = ({ classes }) => (
  <MenuList>
    {regRoutes.map((rte, idx) => (
      <Button
        key={idx}
        color="inherit"
        component={Link}
        className={classes.nested}
        to={ROUTES[rte]}
      >
        {rte}
      </Button>
    ))}
  </MenuList>
);

const RegMobileRoutes = ({ classes, handleClick }) => {
  return (
    <MenuList>
      {regRoutes.map((rte, idx) => (
        <MenuItem
          key={idx}
          onClick={() => handleClick()}
          component={Link}
          className={classes.nested}
          to={ROUTES[rte]}
        >
          {rte.charAt(0) + rte.slice(1, rte.length).toLowerCase()}
        </MenuItem>
      ))}
    </MenuList>
  );
};

const AdminMobileRoutes = ({ classes, handleClick }) => {
  return (
    <MenuList>
      {admRoutes.map((rte, idx) => (
        <MenuItem
          key={idx}
          onClick={() => handleClick()}
          component={Link}
          className={classes.nested}
          to={ROUTES[rte]}
        >
          {rte.charAt(0) + rte.slice(1, rte.length).toLowerCase()}
        </MenuItem>
      ))}
    </MenuList>
  );
};

export { AdminRoutes, RegRoutes, RegMobileRoutes, AdminMobileRoutes };
