import React from "react";
import Search from "./Search";
import wish from "wish";
import { shallow } from "enzyme";

describe("FindTrack function", () => {
  it("gets a list of tracks from musixmatch's API", () => {
    const trackTitle = "Hello";
    const changeActivePage = str => {
      return "a string";
    };
    const wrapper = shallow(
      <Search trackTitle={trackTitle} appDispatch={changeActivePage} />
    );
    const instance = wrapper.instance();
    const dispatch = function(obj) {
      // execute some action
    };
    const list_active = false;
    const e = { preventDefault: () => "default prevented" };

    // Simply testing if the function returns true
    wish(instance.findTrack(dispatch, list_active, e));
  });
});
