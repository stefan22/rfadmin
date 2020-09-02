import { createMuiTheme } from "@material-ui/core";
import vars from "../styles/_vars.scss";

import red from "@material-ui/core/colors/red";
import indigo from "@material-ui/core/colors/indigo";
import amber from "@material-ui/core/colors/amber";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";

const palette = {
  primary: {
    main: red[500]
  },
  secondary: {
    main: indigo[400]
  },

  colors: {
    pribg: amber[50],
    black: grey[900],
    white: grey[50],
    lightblack: grey[700],
    footerBg: grey[200],
    navigationBg: grey[400],
    formFbg: blue[50]
  },
  boxShadows: {
    reg: vars.regboxshadow
  },
  fontSizes: {
    h1: vars.h1,
    h2: vars.h2,
    h3: vars.h3,
    h4: vars.h4,
    h5: vars.h5,
    h6: vars.h6,
    p: vars.p,
    reg: vars.reg,
    lg: vars.lg,
    xlg: vars.xlg,
    small: vars.small,
    xsmall: vars.xsmall
  },

  overrides: {
    MuiButton: {
      text: {
        padding: "8px 16px"
      },
      root: {
        fontWeight: "500",
        fontSize: vars.reg,
        padding: "8px 16px"
      }
    },
    MuiFab: {
      root: {
        fontWeight: "500"
      }
    }
  }
};

const theme = createMuiTheme({
  palette
});

export default theme;
