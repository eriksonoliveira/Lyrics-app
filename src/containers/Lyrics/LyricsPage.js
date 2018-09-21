import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";

import { createURLArtist } from "../../spotify";

import Spinner from "../../components/Spinner/Spinner";
import SpotifyPlayer from "../../components/Player/SpotifyPlayer";
import Lyrics from "../../components/Lyrics/Lyrics";

class LyricsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      track: {},
      lyrics: {},
      artist: {}
    };
  }

  componentDidMount() {
    this.props.changeActivePage("lyrics");
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

        // Get token and track info from spotify
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
        if (json.data.tracks.items.length > 0) {
          const artist = json.data.tracks.items[0];
          this.setState({ artist });

          console.log(artist);
        } else {
          this.setState({
            artist: { id: 0, external_urls: { spotify: "https://spotify.com" } }
          });

          console.log(json);
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { track, lyrics, artist } = this.state;

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0 ||
      Object.keys(artist).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <div className="card">
            <h5 className="card-header">
              {track.track_name} by{" "}
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <Lyrics lyrics_body={lyrics.lyrics_body} />
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
