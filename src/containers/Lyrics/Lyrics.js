import React, { Component } from "react";
import axios from "axios";
import { createURLArtist } from "../../spotify";

import "./Lyrics.css";

import LyricsPage from "../../components/Lyrics/LyricsPage";
import Spinner from "../../components/Spinner/Spinner";

class Lyrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      track: {},
      lyrics: {},
      artist: {}
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
    // track id comes from url through React router (props.match.params.id)
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MUSIXMATCH_KEY}`
      )
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
            this.props.match.params.id
          }&apikey=${process.env.REACT_APP_MUSIXMATCH_KEY}`
        );
      })
      .then(res => {
        const track = res.data.message.body.track;
        this.setState({ track });

        // console.log(track);

        // Get token and track info from spotify
        return axios.get("/token");
        // return axios.get("http://localhost:8888/token");
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
        } else {
          this.setState({
            artist: { id: 0, external_urls: { spotify: "https://spotify.com" } }
          });
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
        <LyricsPage {...this.state} trackId={this.props.match.params.id} />
      );
    }
  }
}

export default Lyrics;
