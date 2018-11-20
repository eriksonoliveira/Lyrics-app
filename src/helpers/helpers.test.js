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
