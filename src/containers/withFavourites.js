import React from "react";
import { AppConsumer } from "../AppContext";
import { firebase, db } from "../firebase";

const withFavourites = (Component, trackData) => {
  class withFavourites extends React.Component {
    _isMounted = false;

    constructor(props) {
      super(props);
      this.state = {
        saved: false,
        track_key: null,
        authUser: null
      };

      this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    componentDidMount() {
      this._isMounted = true;

      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser && this._isMounted === true) {
          db.onceGetFavourites(authUser.uid).then(snapshot => {
            snapshot.forEach(track => {
              const { track_id } = track.val();
              if (track_id === trackData.track_id) {
                this.setState({ saved: true, track_key: track.key });
              }
            });
          });
          this.setState({ authUser });
        }
      });
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    handleSaveClick() {
      const { uid } = this.state.authUser;

      if (!this.state.saved) {
        const { track, track_id } = trackData;

        db.doSaveTrack(
          uid,
          track_id,
          track.track_name,
          track.artist_name,
          track.album_name
        )
          .then(() => this.setState({ saved: !this.state.saved }))
          .then(() => {
            db.onceGetFavourites(uid).then(snapshot => {
              snapshot.forEach(track => {
                const { track_id } = track.val();
                if (track_id === trackData.track_id) {
                  this.setState({ saved: true, track_key: track.key });
                }
              });
            });
          });
      } else {
        // DELETE SAVED TRACK
        const { track_key } = this.state;

        db.doRemoveTrack(uid, track_key).then(() =>
          this.setState({ saved: !this.state.saved })
        );
      }
    }

    render() {
      return (
        <AppConsumer>
          {({ authUser }) => {
            return authUser ? (
              <Component
                {...this.state}
                handleSaveClick={this.handleSaveClick}
              />
            ) : null;
          }}
        </AppConsumer>
      );
    }
  }
  return withFavourites;
};

export default withFavourites;
