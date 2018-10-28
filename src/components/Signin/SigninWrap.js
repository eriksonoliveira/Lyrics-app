import React from "react";
import SignIn from "./Signin";
import { AppConsumer } from "../../AppContext";

const SigninWrap = () => {
  return <AppConsumer>{context => <SignIn context={context} />}</AppConsumer>;
};

export default SigninWrap;
