import { helpers } from "./index";

describe("prepareString helper function", () => {
  it("returns the same string", () => {
    const artist = "Artist name";

    expect(helpers.prepareString(artist)).toBe(artist);
  });

  it("returns only the first name", () => {
    const artists = "first feat. second";

    expect(helpers.prepareString(artists)).toBe("first");
  });
});

describe("replaceSpaces helper function", () => {
  it("replaces all spaces by %20", () => {
    const str = "string with spaces";

    expect(helpers.replaceSpaces(str)).toMatch(/\w+(%20)+\w*/);
  });
});

describe("makeUrl helper function", () => {
  it("builds the url with the search string and api key", () => {
    const title = "trackTitle";
    const apiKey = "MUSIXMATCH_KEY";
    const expectedUrl =
      "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track_artist=" +
      title +
      "&page_size=10&page=1&s_track_rating=desc&apikey=" +
      apiKey;

    expect(helpers.makeUrl(title, apiKey)).toBe(expectedUrl);
  });
});
