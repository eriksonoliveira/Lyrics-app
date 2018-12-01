import axios from "axios";

const API_KEY = process.env.REACT_APP_MUSIXMATCH_KEY;

export function getTrackDataFromMusixmatch(type, song_id) {
  return new Promise((resolve, reject) => {
    let FETCH_URL = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/${type}?track_id=${song_id}&apikey=${API_KEY}`;

    axios
      .get(FETCH_URL)
      .then(res => {
        resolve(res.data.message.body);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getTracksListFromMusixmatch(title) {
  return new Promise((resolve, reject) => {
    const FETCH_URL =
      "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track_artist=" +
      title +
      "&page_size=10&page=1&s_track_rating=desc&apikey=" +
      API_KEY;

    axios
      .get(FETCH_URL)
      .then(res => resolve(res.data.message))
      .catch(error => reject(error));
  });
}
