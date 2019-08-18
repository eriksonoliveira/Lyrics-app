import React, { Component } from "react";
import {
  getSpotifyToken,
  getArtistInfoFromSpotify
} from "../../services/spotify";
import { getTrackDataFromMusixmatch } from "../../services/musixmatch";

import "./Lyrics.css";

import LyricsPage from "../../components/Lyrics/LyricsPage";
import Spinner from "../../components/Spinner/Spinner";
import ErrorMessage from "../../components/ErrorMessage";

class Lyrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      track: {},
      lyrics: {},
      artist: {},
      showErrorMsg: false
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: "CHANGE_ACTIVE",
      payload: "lyrics"
    });

    this.props.dispatch({
      type: "SHOW_ARROW"
    });

    // Getting lyrics and track info
    getTrackDataFromMusixmatch("track.lyrics.get", this.props.match.params.id)
      .then(res => {
        const lyrics = res.lyrics;
        this.setState({ lyrics });

        return getTrackDataFromMusixmatch(
          "track.get",
          this.props.match.params.id
        );
      })
      .then(res => {
        const track = res.track;
        this.setState({ track });

        return getSpotifyToken();
      })
      .then(token => {
        const { track_name, artist_name } = this.state.track;

        return getArtistInfoFromSpotify(track_name, artist_name, token);
      })
      .then(data => {
        if (data.tracks.items.length > 0) {
          const artist = data.tracks.items[0];
          this.setState({ artist });
        } else {
          this.setState({
            artist: { id: 0, external_urls: { spotify: "https://spotify.com" } }
          });
        }
      })
      .catch(err => {
        this.setState({ showErrorMsg: true });
      });
  }

  render() {
    const { track, lyrics, artist, showErrorMsg } = this.state;

    if (showErrorMsg) {
      const error = { message: "Lyrics Not Available" };
      return <ErrorMessage error={error} />;
    } else if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0 ||
      Object.keys(artist).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <LyricsPage {...this.state} track_id={this.props.match.params.id} />
      );
    }
  }
}

export default Lyrics;
