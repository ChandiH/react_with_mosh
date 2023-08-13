import React, { Component } from "react";
import InputField from "./common/inputField";

class LoginForm extends Component {
  state = {
    account: { userName: "", password: "" },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.userName.trim() === "")
      errors.userName = "UserName is required.";
    if (account.password.trim() === "")
      errors.password = "password is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === "userName") {
      if (value.trim() === "") return "userName is required.";
      //.....
    }
    if (name === "password") {
      if (value.trim() === "") return "password is required.";
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // call server
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="container">
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <InputField
            name="userName"
            label="Username"
            value={account.userName}
            onChange={this.handleChange}
            autoFocus={true}
            error={errors.userName}
          />
          <InputField
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <button style={{ marginTop: 10 }} className="btn btn-primary mt-10">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
