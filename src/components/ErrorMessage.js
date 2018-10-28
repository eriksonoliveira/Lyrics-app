import React from "react";

const ErrorMessage = props => {
  return <div>{props.error.message}</div>;
};

export default ErrorMessage;
