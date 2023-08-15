import React from "react";
import Form from "./common/form";
import joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { userName: "", password: "" },
    errors: {},
  };

  schema = {
    userName: joi.string().required().label("Username"),
    password: joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // call server
    console.log("Submitted", this.state.data);
  };

  render() {
    return (
      <div className="container">
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("userName", "Username")}
          {this.renderInputField("password", "Password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
