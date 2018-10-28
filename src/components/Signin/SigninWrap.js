import React from "react";
import Login from "./Signin";
import { AppConsumer } from "../../AppContext";

const SigninWrap = () => {
  return <AppConsumer>{context => <Login context={context} />}</AppConsumer>;
};

export default SigninWrap;
