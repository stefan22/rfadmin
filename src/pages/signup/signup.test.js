import React from "react";
import SignupForm from "./SignupForm";
import { spy } from "sinon";

const mockUser = (
  user = {
    name: "Joe",
    email: "joe@yahoo.com",
    password: "joe123",
    confirmPassword: "joe123",
  },
) => user;

describe("Signup comp", () => {
  it("matches snapshot when no data entered", () => {
    const wrapper = shallow(<SignupForm />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("form", () => {
    let props, wrapper;
    beforeEach(() => {
      props = {
        handleSubmit: () => {},
      };
      wrapper = shallow(<SignupForm {...props} />);
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
    it("should have a user <label /> element and several <input /> elements within form ", () => {
      let form = wrapper.find("form");
      expect(form.childAt(0).type()).toBe("label");
      expect(form.childAt(1).type()).toBe("input");
    });
    it("should have an <input />field with props of name equal to 'username', type:'text', placeholder: 'Name'", () => {
      let input = wrapper.find("form").childAt(1).props();
      expect(input.name).toBe("username");
      expect(input.placeholder).toBe("Name");
      expect(input.type).toBe("text");
    });

    it("should have <input /> elements with onChange attributes attached", () => {
      let input = wrapper.find("form").childAt(1).props();
      expect(input.onChange).toBeDefined();
    });
    it("should update state whenever a new value is entered into username field", () => {
      const handleChange = spy();
      let user = mockUser();
      const wrapper = mount(
        <SignupForm handleChange={handleChange} />,
      );
      wrapper.find("form").simulate("change", {
        target: {
          name: "username",
          value: user.username,
        },
      });
      expect(wrapper.state().name).toBe(user.username);
    });

    it("should submit form with the right prop values", () => {
      const user = mockUser();
      let mockSubmit = jest.fn();
      const wrapper = mount(<SignupForm handleSubmit={mockSubmit} />);
      const form = wrapper.find("form");
      expect(wrapper.state(user)).toEqual(mockSubmit(user));
    });
  });

   describe("initialisation state props type/values", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<SignupForm />);
    });
    it("should have...", () => {
    });
    it(".. username prop of string/empty", () => {
      expect(wrapper.state("username")).toBe("");
    });
    it(".. email prop of string/empty", () => {
      expect(wrapper.state("email")).toBe("");
    });
    it(".. password prop of string/empty", () => {
      expect(wrapper.state("password")).toBe(""); 
    });
    it(".. confirmPassword prop of string/empty", () => {
      expect(wrapper.state("confirmPassword")).toBe("");
    });
    it(".. isAdmin prop of boolean/false", () => {
        expect(wrapper.state("isAdmin")).toBe(false);
    });
    it(".. error prop set to null", () => {
      expect(wrapper.state("error")).toBe(null);
    });

  });
});
