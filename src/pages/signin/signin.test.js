import React from "react";
import { SigninForm } from "./";
import Firebase from "../../components/Firebase";

const mockUser = (
  user = {
    email: "joe@yahoo.com",
    password: "joe123",
  },
) => user;

describe("Signin comp", () => {
  it("matches snapshot when no data entered", () => {
    const wrapper = shallow(<SigninForm />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("form", () => {
    let props, wrapper;
    beforeEach(() => {
      props = {
        handleSubmit: () => {},
      };
      wrapper = shallow(<SigninForm {...props} />);
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
      const wrapper = mount(<SigninForm onSubmit={mockSubmit} user={user} />);
      const form = wrapper.find("form");
      mockSubmit(user);
      wrapper.simulate("submit", { preventDefault: () => {} });
      expect(mockSubmit).toHaveBeenLastCalledWith({
        email: user.email,
        password: user.password,
      });
      expect(wrapper.state(user)).toEqual(mockSubmit(user));
    });
  });

  describe("initialisation state props type/values", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<SigninForm />);
    });

    it("should have an email state prop of string/empty", () => {
      expect(wrapper.state("email")).toBe("");
    });
    it("should have a password state prop of string/empty", () => {
      expect(wrapper.state("password")).toBe("");
    });

    it("should have isAdmin prop of boolean/false", () => {
      expect(wrapper.state("isAdmin")).toBe(false);
    });
    it("should have error prop set to null", () => {
      expect(wrapper.state("error")).toBe(null);
    });
  });

   describe("Firebase", () => {
    let auth, mockSubmit, wrapper;
    beforeAll(async () => {
      auth = new Firebase();
      await auth;
    });
    beforeEach(async () => {
      await auth.doSignOut();
    });

      it("should throw an Error when 'doSignInWithEmailAndPassword' with wrong password", async () => {
        let error = "";
        try {
          await auth.doSignInWithEmailAndPassword(
            "mario2224@gmail.com",
            "rabbit123",
          );
        } catch (err) {
          error = err.toString();
        }
        expect(error).toEqual(
          "Error: The password is invalid or the user does not have a password.",
        );
        auth.doSignOut();
      });

    it("should login when 'doSignInWithEmailAndPassword' with right credentials", async () => {
       
      let user = await auth.doSignInWithEmailAndPassword(
        "mario2224@gmail.com",
            "123456",
      );

      expect(user.user).toBeTruthy();
      expect(user.user.email).toEqual("mario2224@gmail.com");
    });



  }); //des Firebase



});
