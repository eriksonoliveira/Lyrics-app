import { helpers } from "../helpers";
import axios from "axios";

// Build Spotify fetch URL
export function createURLArtist(track, artist, accessToken) {
  artist = helpers.replaceSpaces(artist);
  track = helpers.replaceSpaces(track);

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

// Send GET request to http://localhost:8888/token to generate spotify's API token
export function getSpotifyToken() {
  return new Promise((resolve, reject) => {
    axios
      .get("/token")
      .then(token => {
        resolve(token.data.token);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getArtistInfoFromSpotify(track_name, artist_name, token) {
  return new Promise((resolve, reject) => {
    const params = createURLArtist(track_name, artist_name, token);

    axios
      .get(params.FETCH_URL, params.headers)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
