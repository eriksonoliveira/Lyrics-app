import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";

// Test spotify API
import { createURLArtist } from "../../spotify";

import Spinner from "../layout/Spinner";
import SpotifyPlayer from "./SpotifyPlayer";
import Lyrics from "./Lyrics";

class LyricsPage extends Component {
  state = {
    track: {},
    lyrics: {},
    artist: {}
  };

  componentDidMount() {
    // Getting lyrics and track info
    // track id comes from url through React router (props.match.params.id)
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
            this.props.match.params.id
          }&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then(res => {
        const track = res.data.message.body.track;
        this.setState({ track });

        // test spotify
        return axios.get("http://localhost:8888/token");
      })
      .then(token => {
        const param = createURLArtist(
          this.state.track.track_name,
          this.state.track.artist_name,
          token.data.token
        );

        return axios.get(param.FETCH_URL, param.headers);
      })
      .then(json => {
        const artist = json.data.tracks.items[0];
        this.setState({ artist });

        console.log(artist);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { track, lyrics, artist } = this.state;

    // console.log(track);
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0 ||
      Object.keys(artist).length === 0
    ) {
      return <Spinner />;
    } else {
      //console.log(lyrics);
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>

          <div className="card">
            <h5 className="card-header">
              {track.track_name} by{" "}
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <Lyrics lyrics_body={lyrics.lyrics_body} />
            </div>
          </div>

          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong>: {track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Song Genre</strong>:{" "}
              {track.primary_genres.music_genre_list.length !== 0
                ? track.primary_genres.music_genre_list[0].music_genre
                    .music_genre_name
                : "N/A"}
            </li>
            <li className="list-group-item">
              <strong>Explicit Words</strong>:{" "}
              {track.explicit === 0 ? "No" : "Yes"}
            </li>
            <li className="list-group-item">
              <strong>Release Date</strong>:{" "}
              <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
            </li>
            <li className="list-group-item">
              <SpotifyPlayer artist_id={artist.id} />
            </li>
            <li className="list-group-item">
              <a
                className="btn btn-success btn-lg"
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noreferrer noopener"
              >
                Listen on <strong>Spotify</strong>
              </a>
            </li>
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default LyricsPage;
