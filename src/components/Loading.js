import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const styles = theme => ({
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    color: theme.palette.primary.main,
    transform: "translate(-50%,-50%)",
    textAlign: "center",
  },
});

class Loading extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.center}>
        <CircularProgress />
      </div>
    );
  }
}

export default withStyles(styles)(Loading);
