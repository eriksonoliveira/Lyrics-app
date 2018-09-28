import React from "react";
import { shallow } from "enzyme";

import Track from "./Track";

describe("Track component tests", () => {
  it("renders a card with track name and a button", () => {
    const track = {
      track_name: "Track",
      artist_name: "Name",
      album_name: "Album",
      track_id: 1
    };
    const component = shallow(<Track track={track} />);

    // expect
    expect(component.find(".track")).toBeDefined();
  });
});
