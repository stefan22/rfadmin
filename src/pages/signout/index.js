import React from "react";
import { withFirebase } from "../../components/Firebase";
import Button from "@material-ui/core/Button";

const SignoutButton = props => {
  console.log(props);
  return (
    <Button
      onClick={props.firebase.doSignout}
      variant="contained"
      color="default"
    >
      Signout
    </Button>
  );
};

export default withFirebase(SignoutButton);
