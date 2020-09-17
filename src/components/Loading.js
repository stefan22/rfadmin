import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import loading from "../images/load3.gif";

const styles = theme => ({
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    color: theme.palette.primary.main,
    transform: "translate(-50%,-50%)",
    textAlign: "center",
  },
  loading: {
    color: "#333",
    fontSize: "1.25rem",
    fontVariant: "all-petite-caps",
  },
  loadimg: {
    width: "100%",
    maxWidth: "150px",
  }
});

class Loading extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.center}>
        <img
          className={classes.loadimg}
          src={loading}
          alt="Loading"
        />
        <h3 className={classes.loading}>Loading</h3>
      </div>
    );
  }
}

export default withStyles(styles)(Loading);
