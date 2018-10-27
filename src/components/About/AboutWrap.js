import React from "react";
import About from "./About";
import { AppConsumer } from "../../AppContext";

function AboutWrap() {
  return (
    <AppConsumer>
      {context => {
        return <About context={context} />;
      }}
    </AppConsumer>
  );
}

export default AboutWrap;
