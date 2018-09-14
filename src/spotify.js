import { replaceSpaces } from "./helpers";

export function createURLArtist(track, artist, accessToken) {
  // Build Spotify fetch URL
  // replace spaces with %20
  artist = replaceSpaces(artist);
  track = replaceSpaces(track);

  const BASE_URL = "https://api.spotify.com/v1/search?";
  const FETCH_URL = `${BASE_URL}q=track%3A${track}%20artist%3A${artist}&type=track&limit=1`;
  const headers = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken
    },
    mode: "cors",
    cache: "default"
  };

  return { FETCH_URL, headers };
}
