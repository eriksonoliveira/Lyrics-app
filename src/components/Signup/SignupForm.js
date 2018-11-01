import React from "react";
import ErrorMessage from "../ErrorMessage";

const SignupForm = props => {
  const { email, username, password, error } = props;

  const isInvalid = password === "" || email === "" || username === "";

  return (
    <form className="form">
      <label htmlFor="signup-username" className="sr-only">
        Username
      </label>
      <input
        id="signup-username"
        className="form-input"
        type="text"
        placeholder="Username"
        maxLength="16"
        value={username}
        name="username"
        required
        onChange={e => props.handleChange(e)}
      />
      <label htmlFor="signup-email" className="sr-only">
        Email
      </label>
      <input
        id="signup-email"
        className="form-input"
        type="email"
        placeholder="Email"
        value={email}
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
        placeholder="Password"
        maxLength="16"
        value={password}
        name="password"
        required
        onChange={e => props.handleChange(e)}
      />
      <button
        disabled={isInvalid}
        type="submit"
        className="form-input submit-btn"
        onClick={props.handleClick}
      >
        {props.btnText}
      </button>
      <ErrorMessage error={error} />
    </form>
  );
};

export default SignupForm;
