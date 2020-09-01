import React from "react";
// comps
import MainRouter from "./router/Router";
import CssBaseline from "@material-ui/core/CssBaseline";
// theme
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainRouter />
    </ThemeProvider>
  );
};

export default App;
