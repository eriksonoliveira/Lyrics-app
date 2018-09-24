import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";

import { createURLArtist } from "../../spotify";

import Spinner from "../../components/Spinner/Spinner";
import SpotifyPlayer from "../../components/Player/SpotifyPlayer";
import Lyrics from "../../components/Lyrics/Lyrics";

import "./LyricsPage.css";

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
        <div className="lyrics">
          <h1 className="lyrics-track-name">{track.track_name}</h1>
          <h2 className="lyrics-artist-album">{`${track.artist_name} - ${
            track.album_name
          }`}</h2>
          <h2 className="lyrics-release-date">
            <Moment format="YYYY">{track.first_release_date}</Moment>
          </h2>
          <Lyrics lyrics_body={lyrics.lyrics_body} />
          <div>
            <SpotifyPlayer artist_id={artist.id} />
          </div>
          <div className="lyrics-spotify-link">
            <a
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noreferrer noopener"
            >
              Listen on <strong>Spotify</strong>
            </a>
          </div>
        </div>
      );
    }
  }
}

export default LyricsPage;
