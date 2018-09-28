import React from "react";
import { shallow } from "enzyme";
import Topbar from "./Topbar";

describe("Topbar component", () => {
  it("renders a navbar", () => {
    const Component = shallow(<Topbar />);

    expect(Component.find(".navbar")).toBeDefined();
  });
});
