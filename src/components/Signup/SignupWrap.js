import React from "react";
import { AppConsumer } from "../../AppContext";
import Signup from "./Signup";

const SignupWrap = () => {
  return <AppConsumer>{context => <Signup context={context} />}</AppConsumer>;
};

export default SignupWrap;
