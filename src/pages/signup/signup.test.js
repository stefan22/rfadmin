import React from "react";
import SignupForm from "./SignupForm";
import "firebase/firestore";
import "firebase/auth";
import Firebase from "../../components/Firebase";


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
    let mockSubmit, wrapper;
    beforeEach(() => {
      mockSubmit = jest.fn();
      wrapper = shallow(<SignupForm submit={mockSubmit} />);
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

    describe("Username", () => {
      it("should have a Username <label /> and <input /> elements", () => {
        let form = wrapper.find("form");
        expect(form.childAt(0).type()).toBe("label");
        expect(form.childAt(1).type()).toBe("input");
      });

      it("should have name, type & placeholder attributes defined in its input field", () => {
        let input = wrapper.find("form").childAt(1).props();
        expect(input.name).toBe("username");
        expect(input.placeholder).toBe("Name");
        expect(input.type).toBe("text");
      });
      it("should have an onChange listener", () => {
        let input = wrapper.find("form").childAt(1).props();
        expect(input.onChange).toBeDefined();
      });

      it("should update state on changes called by onChange event", () => {
        const mockEvent = {
          target: {
            name: "username",
            value: mockUser().name,
          },
        }; //mockEvent
        const expected = {
          username: "Joe",
          email: "",
          password: "",
          confirmPassword: "",
          error: null,
          isAdmin: false,
        };
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state()).toEqual(expected);
      });
    }); //username

    describe("Email", () => {
      it("should have an Email <label /> and <input /> elements", () => {
        let form = wrapper.find("form");
        expect(form.childAt(2).type()).toBe("label");
        expect(form.childAt(3).type()).toBe("input");
      });

      it("should have name, type & placeholder attributes defined in its input field", () => {
        let input = wrapper.find("form").childAt(3).props();
        expect(input.name).toBe("email");
        expect(input.placeholder).toBe("Email");
        expect(input.type).toBe("email");
      });
      it("should have an onChange listener", () => {
        let input = wrapper.find("form").childAt(3).props();
        expect(input.onChange).toBeDefined();
      });

      it("should update state on changes called by onChange event", () => {
        const mockEvent = {
          target: {
            name: "email",
            value: mockUser().email,
          },
        }; //mockEvent
        const expected = {
          username: "",
          email: "joe@yahoo.com",
          password: "",
          confirmPassword: "",
          error: null,
          isAdmin: false,
        };
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state()).toEqual(expected);
      });
    }); //email

    describe("Password", () => {
      it("should have a Password <label /> and <input /> elements", () => {
        let form = wrapper.find("form");
        expect(form.childAt(4).type()).toBe("label");
        expect(form.childAt(5).type()).toBe("input");
      });

      it("should have name, type & placeholder attributes defined in its input field", () => {
        let input = wrapper.find("form").childAt(5).props();
        expect(input.name).toBe("password");
        expect(input.placeholder).toBe("Password");
        expect(input.type).toBe("password");
      });
      it("should have an onChange listener", () => {
        let input = wrapper.find("form").childAt(5).props();
        expect(input.onChange).toBeDefined();
      });

      it("should update state on changes called by onChange event", () => {
        const mockEvent = {
          target: {
            name: "password",
            value: mockUser().password,
          },
        }; //mockEvent
        const expected = {
          username: "",
          email: "",
          password: "joe123",
          confirmPassword: "",
          error: null,
          isAdmin: false,
        };
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state()).toEqual(expected);
      });
    }); //password

    describe("Confirm Password upon", () => {
      it("should have a Confirm Password <label /> and <input /> elements", () => {
        let form = wrapper.find("form");
        expect(form.childAt(6).type()).toBe("label");
        expect(form.childAt(7).type()).toBe("input");
      });

      it("should have name, type & placeholder attributes defined in its input field", () => {
        let input = wrapper.find("form").childAt(7).props();
        expect(input.name).toBe("confirmPassword");
        expect(input.placeholder).toBe("Confirm Password");
        expect(input.type).toBe("password");
      });
      it("should have an onChange listener", () => {
        let input = wrapper.find("form").childAt(7).props();
        expect(input.onChange).toBeDefined();
      });

      it("should update state on changes called by onChange event", () => {
        const mockEvent = {
          target: {
            name: "confirmPassword",
            value: mockUser().confirmPassword,
          },
        }; //mockEvent
        const expected = {
          username: "",
          email: "",
          password: "",
          confirmPassword: "joe123",
          error: null,
          isAdmin: false,
        };
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state()).toEqual(expected);
      });
    }); //confirmPassword
  });

  describe("initialisation state props type/values", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<SignupForm />);
    });
    it("should have...", () => {});
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

  describe("Firebase", () => {
    let auth, mockSubmit, wrapper;
    beforeAll(async () => {
      auth = new Firebase();
      await auth;
    });
    beforeEach(async () => {
      await auth.doSignOut();
    });

    it("should throw an Error when 'doCreateUserWithEmailAndPassword' without an actual email address", async () => {
      let error = "";
      try {
        await auth.doCreateUserWithEmailAndPassword(
          "hellorabbit",
          "rabbit123",
        );
      } catch (err) {
        error = err.toString();
      }
      expect(error).toEqual(
        "Error: The email address is badly formatted.",
      );
      auth.doSignOut();
    });
  }); //des Firebase
});
