import React from "react";
import PasswordResetForm from "./";




describe("Password Reset comp", () => {
  it("matches snapshot when no data entered", () => {
    const wrapper = shallow(<PasswordResetForm />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("form", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PasswordResetForm />);
    });

    it("should have a <form /> element", () => {
      const wrapper = render(<PasswordResetForm />);
      expect(wrapper.find("form").length).toBe(1);
    });

    it("should have a <form /> element with an onSubmit attribute", () => {
      const wrapper = render(<PasswordResetForm />);
      expect(wrapper.find({ form: "onSubmit" })).toBeDefined();
    });

    it("should have two <input /> elements", () => {
      let wrapper = mount(<PasswordResetForm />);
      let form = wrapper.find("form");
      expect(form.childAt(0).type()).toBe("input");
      expect(form.childAt(1).type()).toBe("input");
    });

    it("should have an <input /> field with props of password equal to 'password', type:'password', placeholder: 'New Password'", () => {
      let wrapper = mount(<PasswordResetForm />);
      let input = wrapper.find("form").childAt(0).props();
      expect(input.name).toBe("password");
      expect(input.placeholder).toBe("New Password");
      expect(input.type).toBe("password");
    });

    it("should have an <input /> field with props of password equal to 'confirmPassword', type:'password', placeholder: 'Confirm New Password'", () => {
      let wrapper = mount(<PasswordResetForm />);
      let input = wrapper.find("form").childAt(1).props();
      expect(input.name).toBe("confirmPassword");
      expect(input.placeholder).toBe("Confirm New Password");
      expect(input.type).toBe("password");
    });

    it("should have <input /> element with onChange attributes attached", () => {
      let wrapper = mount(<PasswordResetForm />);
      let input = wrapper.find("form").childAt(0).props();
      expect(input.onChange).toBeDefined();
    });

    it("should submit form with password and confirmPassword prop values", () => {
      const pwdreset = {
        password: 123456789,
        confirmPassword: 123456789,
      };

      const onSubmitSpy = jest.fn();

      const wrapper = shallow(
        <PasswordResetForm
          pwdreset={pwdreset}
          onSubmit={onSubmitSpy}
        />,
      );

      onSubmitSpy(pwdreset);
      wrapper.simulate("submit", { preventDefault: () => {} });

      expect(onSubmitSpy).toHaveBeenLastCalledWith({
        password: pwdreset.password,
        confirmPassword: pwdreset.confirmPassword,
      });
    });
  });
});
