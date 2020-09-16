import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import SignoutButton from "../pages/signout";

import * as ROUTES from "../helpers/constants";

const DesktopRoutes = ({ classes, isRoute, isAdmin }) => (
  <MenuList>
    {isRoute.map((rte, idx) => (
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

    {isAdmin && <SignoutButton />}
  </MenuList>
);

const MobileRoutes = ({ classes, handleClick, isRoute, isAdmin }) => {
  return (
    <MenuList>
      {isRoute.map((rte, idx) => (
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

      {isAdmin && <SignoutButton />}
    </MenuList>
  );
};

export { DesktopRoutes, MobileRoutes };
