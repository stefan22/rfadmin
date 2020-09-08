import React from "react"; 
import { BrowserRouter, Switch} from "react-router-dom";
import { shallow, mount } from "enzyme";
import App from "./App";
import MainRouter from "./router/MainRouter";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";


describe("App component", () => {
  const wrapper = shallow(<App />);
  beforeEach(() => wrapper );

  it("renders App without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("Main Router defined in App wrapper", () => {
    expect(wrapper.find(MainRouter)).toBeDefined();
  });

  it("ThemeProvider, Reset styles defined within App Component", () => {
    expect(wrapper.find(CssBaseline)).toBeDefined();
    expect(wrapper.find(ThemeProvider)).toBeDefined();
  });

})



