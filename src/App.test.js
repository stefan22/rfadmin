import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  it("renders App without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});
