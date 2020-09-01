import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
// comps
import NavigationRouter from "../router/NavigationRouter";
// icons
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    "& header": {
      backgroundColor: theme.palette.colors.navigationBg
    },
    marginBottom: "3rem"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit">
            <MenuIcon />
          </IconButton>
          <div className={classes.title}></div>
          <NavigationRouter />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
