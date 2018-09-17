import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      trackTitle: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.findTrack = this.findTrack.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  findTrack(dispatch, e) {
    e.preventDefault();

    dispatch({
      type: "CLEAR_TRACKS",
      payload: []
    });

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
          this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        console.log(res);

        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        });

        this.setState({
          trackTitle: ""
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music" /> Search for a Song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={e => this.findTrack(dispatch, e)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.handleChange}
                  />
                </div>
                <button className="btn btn-primary btn-lg btn-block mb-5">
                  Get track lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;