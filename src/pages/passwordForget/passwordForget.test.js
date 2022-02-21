import React from "react";
import { PasswordForgetForm } from "./";


const mockUser = (
  user = {
    email: "joe@yahoo.com",
  },
) => user;

describe("Signin comp", () => {
  it("matches snapshot when no data entered", () => {
    const wrapper = shallow(<PasswordForgetForm />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("form", () => {
    let props, wrapper;
    beforeEach(() => {
      props = {
        handleSubmit: () => {},
      };
      wrapper = shallow(<PasswordForgetForm {...props} />);
    });

    it("should have a <form /> element", () => {
      expect(wrapper.find("form").length).toBe(1);
    });
    it("should have a <form /> element with an onSubmit attribute", () => {
      expect(wrapper.find("form").props().onSubmit).toBeDefined();
    });
    it("should have onSubmit attribute of type `function`", () => {
      let form = wrapper.find("form");
      expect(typeof form.props().onSubmit === "function").toBe(true);
    });
    it("should have a user <label /> element and an <input /> element within form ", () => {
      let form = wrapper.find("form");
      expect(form.childAt(0).type()).toBe("label");
      expect(form.childAt(1).type()).toBe("input");
    });
    it("should have an <input />field with props of email equal to 'email', type:'email', placeholder: 'Email'", () => {
      let input = wrapper.find("form").childAt(1).props();
      expect(input.name).toBe("email");
      expect(input.placeholder).toBe("Email");
      expect(input.type).toBe("email");
    });

    it("should have <input /> element with onChange attributes attached", () => {
      let input = wrapper.find("form").childAt(1).props();
      expect(input.onChange).toBeDefined();
    });

    it("should submit form with the right prop values", () => {
      const user = mockUser();
      let mockSubmit = jest.fn();
      const wrapper = mount(<PasswordForgetForm handleSubmit={mockSubmit} />);
      const form = wrapper.find("form");
      expect(wrapper.state(user)).toEqual(mockSubmit(user));
    });
  });

  describe("initialisation state props type/values", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PasswordForgetForm />);
    });

    it("should have an email state prop of string/empty", () => {
      expect(wrapper.state("email")).toBe("");
    });
    

   
  });
});
