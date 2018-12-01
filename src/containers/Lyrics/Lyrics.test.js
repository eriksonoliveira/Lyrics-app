import React from "react";
import { shallow, mount } from "enzyme";

import Lyrics from "./Lyrics";
import LyricsPage from "../../components/Lyrics/LyricsPage";
import Spinner from "../../components/Spinner/Spinner";

describe("<Lyrics />", () => {
  it("renders <LyricsPage /> component", done => {
    const mockDispatch = (obj = {}) => obj;
    const mockParams = { params: { id: 84398315 } };
    const wrapper = mount(
      <Lyrics dispatch={mockDispatch} match={mockParams} />
    );

    setTimeout(() => {
      expect(wrapper.find(Spinner).length).toBe(1);
      done();
    });
  });
});
