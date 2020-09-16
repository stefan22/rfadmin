import React, { Component } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { AuthUserContext } from "../components/Session";
// nav route comps
import {
  DesktopRoutes,
  MobileRoutes,
} from "../router/NavigationRouter";
// icons
import MenuIcon from "@material-ui/icons/Menu";
// styles
import { withStyles } from "@material-ui/core/styles";
import theme from "../theme";

import { regRoutes, admRoutes } from "../helpers/constants";

const styles = {
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
    [theme.breakpoints.up("md")]: {
      fontSize: theme.palette.fontSizes.small,
    },
  },
  navigationMenu: {
    lineHeight: 2,
    padding: "0",
  },
  navigationMobile: {
    position: "fixed",
    right: "-350px",
    padding: "67px 0",
    top: "0px",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#9c9c9c",
    zIndex: 20,
    width: "40%",
    opacity: 0.94,
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
    animation: "sideOut 1.5s",
    "& mobsidePanel": {
      backgroundColor: "rgba(0,0,0,.4)",
      transition: "all 1.5s ease-in 100ms",
    },
  },
  "navigationMobile a": {
    textAlign: "right",
    width: "100%",
  },
  mobileOn: {
    position: "fixed",
    padding: "67px 0",
    top: "0px",
    right: 0,
    animation: "sideIn 1.10s",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#9c9c9c",
    zIndex: 20,
    width: "40%",
    opacity: 0.94,
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.mobileRef = React.createRef(null);
    this.state = {
      mobileOpen: false,
    };
  }

  handleClick = () => {
    const { mobileOpen } = this.state;
    this.setState({ mobileOpen: !mobileOpen }, () => {
      mobileOpen
        ? this.mobileRef.classList.add("mobsidePanel")
        : this.mobileRef.classList.remove("mobsidePanel");
    });
  };

  handleMobileNav = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar hidden>
            <IconButton
              edge="start"
              onClick={this.handleMobileNav}
              className={classes.menuButton}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <div className={classes.title}></div>
            <Hidden smUp>
              <section
                ref={ref => (this.mobileRef = ref)}
                className={`
                  classes.navigationMobile ${
                    this.state.mobileOpen
                      ? classes.mobileOn
                      : classes.navigationMobile
                  } 
                `}
              >
                <AuthUserContext.Consumer>
                  {authUser => (
                    <MobileRoutes
                      classes={classes}
                      isAdmin={authUser ? true : false}
                      isRoute={authUser ? admRoutes : regRoutes}
                      handleClick={this.handleClick}
                    />
                  )}
                </AuthUserContext.Consumer>
              </section>
            </Hidden>

            <Hidden smDown>
              <section className={classes.navigationMenu}>
                <AuthUserContext.Consumer>
                  {authUser => (
                    <DesktopRoutes
                      classes={classes}
                      isAdmin={authUser ? true : false}
                      isRoute={authUser ? admRoutes : regRoutes}
                    />
                  )}
                </AuthUserContext.Consumer>
              </section>
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default compose(withRouter, withStyles(styles))(Navigation);
