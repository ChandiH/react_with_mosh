import React from "react";

const InputField = ({ name, label, value, onChange, autoFocus, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={autoFocus}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default InputField;
