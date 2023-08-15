import { Component } from "react";
import joi from "joi-browser";
import InputField from "./inputField";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  changeState = this.setState;
  schema = {};

  printState = () => {
    console.log("state", this.state);
    console.log("schema", this.schema);
  };

  validate = () => {
    const option = { abortEarly: false };
    const { error } = joi.validate(this.state.data, this.schema, option);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    const data = this.state.data;
    this.changeState({ data: data, errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  doSubmit = () => {
    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.changeState({ data, errors });
  };

  renderInputField(name, label) {
    const { data, errors } = this.state;

    return (
      <InputField
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        autoFocus={true}
        error={errors[name]}
      />
    );
  }

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        style={{ marginTop: 10 }}
        className="btn btn-primary mt-10"
      >
        {label}
      </button>
    );
  }
}

export default Form;
