import React from "react";
import ErrorMessage from "./ErrorMessage";

const Form = props => {
  return (
    <form className="form">
      <label htmlFor="signup-email" className="sr-only">
        Email
      </label>
      <input
        id="signup-email"
        className="form-input"
        type="email"
        placeholder="email"
        name="email"
        required
        onChange={e => props.handleChange(e)}
      />
      <label htmlFor="signup-email" className="sr-only">
        Password
      </label>
      <input
        id="signup-password"
        className="form-input"
        type="password"
        placeholder="password"
        name="password"
        required
        onChange={e => props.handleChange(e)}
      />
      <button
        type="submit"
        className="form-input submit-btn"
        onClick={props.handleClick}
      >
        {props.btnText}
      </button>
      <ErrorMessage error={props.error} />
    </form>
  );
};

export default Form;
