import React from "react"; 
import { BrowserRouter, Switch} from "react-router-dom";
import { shallow, mount } from "enzyme";
import App from "./App";
import MainRouter from "./router/MainRouter";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { withAuthentication } from "./components/Session";


describe("App component", () => {
  const wrapper = shallow(<App />);
  beforeEach(() => {
    return wrapper;
  })

  it("renders App without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("Main Router defined in App wrapper", () => {
    //const wrapper = shallow(<App />);
    expect(wrapper.find(MainRouter)).toBeDefined();
  });

  it("ThemeProvider, Reset styles defined within App Component", () => {
    //const wrapper = shallow(<App />);
    expect(wrapper.find(CssBaseline)).toBeDefined();
    expect(wrapper.find(ThemeProvider)).toBeDefined();
  });

   it("Theme provider and Reset Css components defined within top wrapper", () => {
    //const wrapper = shallow(<App />);
    
  });




})



