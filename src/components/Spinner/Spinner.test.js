import React from "react";
import { shallow } from "enzyme";

import Spinner from "./Spinner";

describe("Spinner component", () => {
  it("has spinner class", () => {
    const component = shallow(<Spinner />);

    expect(component.contains(<div className="spinner" />)).toBeTruthy();
  });
});
