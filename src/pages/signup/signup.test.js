import React from "react";
import SignupForm from "./SignupForm";


const mockUser = (
  user = {
    username: "Joe",
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
    it("<form /> element should have a onSubmit attribute", () => {
      expect(wrapper.find("form").props().onSubmit).toBeDefined();
    });
    it("onSubmit attribute should be of type `function`", () => {
      let form = wrapper.find("form");
      expect(typeof form.props().onSubmit === "function").toBe(true);
    });
    it("User field should have a <label /> and <input /> elements ", () => {
      let form = wrapper.find("form");
      expect(form.childAt(0).type()).toBe("label");
      expect(form.childAt(1).type()).toBe("input");
    });
    it("User input field have props of name: 'username', type:'text', placeholder: 'Name'", () => {
      let input = wrapper.find("form").childAt(1).props();
      expect(input.name).toBe("username");
      expect(input.placeholder).toBe("Name");
      expect(input.type).toBe("text");
    });
    it("<input /> fields username and email should be both empty", () => {
      let userInput = wrapper.find("form").childAt(1).props();
      let emailInput = wrapper.find("form").childAt(3).props();
      expect(userInput.value).toBe("");
      expect(emailInput.value).toBe("");
    });
    it("<input /> element should have an onChange attribute", () => {
      let input = wrapper.find("form").childAt(1).props();
      expect(input.onChange).toBeDefined();
    });
 
  });
});
