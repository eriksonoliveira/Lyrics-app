import React from "react";
import { shallow } from "enzyme";

import Lyrics from "./Lyrics";
import LyricsPage from "../../components/Lyrics/LyricsPage";

jest.mock("../../services/spotify");
jest.mock("../../services/musixmatch");

describe("<Lyrics />", () => {
  let wrapper;

  beforeAll(done => {
    const mockDispatch = (obj = {}) => obj;
    const mockParams = { params: { id: 84398315 } };

    wrapper = shallow(<Lyrics dispatch={mockDispatch} match={mockParams} />);
    done();
  });

  it("fetches artist, lyrics and track data", () => {
    // setTimeout(() => {
    wrapper.update();

    const state = wrapper.instance().state;
    expect(state.track).toBeInstanceOf(Object);
    expect(
      Object.keys(state.track).length &&
        Object.keys(state.lyrics).length &&
        Object.keys(state.artist).length
    ).toBeGreaterThan(0);

    console.log(state.track);
  });

  it("renders <LyricsPage /> component", () => {
    expect(wrapper.find(LyricsPage)).toHaveLength(1);
  });
});
