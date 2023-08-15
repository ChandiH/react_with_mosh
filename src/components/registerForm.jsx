import React from "react";
import Form from "./common/form";
import joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: joi.string().required().email().label("Username"),
    password: joi.string().required().min(5).label("Password"),
    name: joi.string().required().label("Name"),
  };

  doSubmit = () => {
    // call server
    console.log("Submitted", this.state.data);
  };

  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("username", "Username")}
          {this.renderInputField("password", "Password", "password")}
          {this.renderInputField("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
