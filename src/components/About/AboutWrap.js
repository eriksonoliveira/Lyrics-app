import React from "react";
import About from "./About";
import { Consumer } from "../../context";

function AboutWrap() {
  return (
    <Consumer>
      {context => {
        return <About context={context} />;
      }}
    </Consumer>
  );
}

export default AboutWrap;
