import { createMuiTheme } from "@material-ui/core";
import vars from "../styles/_vars.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: vars.pri
    },
    secondary: {
      main: vars.sec
    },
    error: {
      main: vars.pri
    },

    // other colors
    colors: {
      pribg: vars.pribg,
      black: vars.black,
      white: vars.white,
      snow: vars.snow,
      lightblack: vars.lightBlack,
      footerBg: vars.footerBg,
      navigationBg: vars.navigationBg,
      tableHeadingBg: vars.tableHeadingBg,
      borderBottomLight: vars.borderBottomLight,
      jumbg: vars.jumbg,
      darkblue: vars.darkblue
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
      xlg: vars.xlg
    }
  },

  overrides: {
    MuiButton: {
      text: {
        paddingLeft: "14px",
        paddingRight: "14px"
      },
      root: {
        fontWeight: "500",
        fontSize: ".8rem"
      }
    },
    MuiFab: {
      root: {
        fontWeight: "500"
      }
    }
  }
});

console.log(theme);

export default theme;
