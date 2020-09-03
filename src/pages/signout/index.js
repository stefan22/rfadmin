import React from "react";
import { withFirebase } from "../../components/Firebase";
// icons
import IconButton from "@material-ui/core/IconButton";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
// styles
import "./styles.scss";

const SignoutButton = props => (
  <IconButton
    className="doSignOut"
    onClick={props.firebase.doSignOut}
    color="inherit"
  >
    <VpnKeyIcon size="small" />
  </IconButton>
);

export default withFirebase(SignoutButton);
