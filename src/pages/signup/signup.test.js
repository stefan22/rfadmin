import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import SignupForm from "./SignupForm";

describe("Signup comp", () => {
  it("matches snapshot when no data entered", () => {
    const wrapper = shallow(<SignupForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("form", () => {
		let props, wrapper;
		beforeEach(() => {
			props = {
				handleSubmit: () => {},
			};
			wrapper = shallow(<SignupForm />);
		});

    it("should have a <form /> element", () => {
      expect(wrapper.find("form").length).toBe(1);
    });
		it("<form /> element should have a onSubmit attribute", () => {
			expect(wrapper.find("form").props().onSubmit).toBeDefined();
		});
		it("onSubmit attribute should be of type `function`", () => {
			let form = wrapper.find("form");
			expect(typeof form.props().onSubmit === "function").toBe(true);
		});
  });
});
