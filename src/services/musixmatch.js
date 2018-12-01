import axios from "axios";

const musixmatch = (type, song_id) =>
  new Promise((resolve, reject) => {
    let FETCH_URL = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/${type}?track_id=${song_id}&apikey=${
      process.env.REACT_APP_MUSIXMATCH_KEY
    }`;

    axios
      .get(FETCH_URL)
      .then(res => {
        resolve(res.data.message.body);
      })
      .catch(error => {
        reject(error);
      });
  });

export default musixmatch;
