import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
// nav route comps
import { AdminRoutes, RegRoutes } from "../router/NavigationRouter";
// icons
import MenuIcon from "@material-ui/icons/Menu";
// styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    "& header": {
      backgroundColor: theme.palette.colors.navigationBg,
    },
    marginBottom: "3rem",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navigationButton: {
    color: theme.palette.colors.white,
    fontSize: theme.palette.fontSizes.small,
  },
  navigationMenu: {
    lineHeight: 2,
    padding: "0",
  },
}));

const Navigation = ({ authUser }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title}></div>

          {
            <section className={classes.navigationMenu}>
              {authUser.authUser !== null ? (
                <AdminRoutes classes={classes} />
              ) : (
                <RegRoutes classes={classes} />
              )}
            </section>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
