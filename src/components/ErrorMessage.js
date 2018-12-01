import React from "react";

const ErrorMessage = props => {
  return <div className="text-center">{props.error.message}</div>;
};

export default ErrorMessage;
