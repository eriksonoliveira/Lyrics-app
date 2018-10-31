import React from "react";
import { AppConsumer } from "../AppContext";
import { firebase, db } from "../firebase";

const withFavourites = (Component, trackData) => {
  class withFavourites extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        saved: false,
        authUser: null
      };

      this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          db.onceGetFavourites(authUser.uid).then(snapshot => {
            //console.log(snapshot.val());

            snapshot.forEach(track => {
              const { track_id } = track.val();
              if (track_id === trackData.track_id) {
                this.setState({ saved: true });
              }
            });
          });
          this.setState({ authUser });
        }
      });
      console.log(trackData);
    }

    handleSaveClick() {
      if (!this.state.saved) {
        const { track, track_id } = trackData;
        const { uid } = this.state.authUser;

        db.doSaveTrack(
          uid,
          track_id,
          track.track_name,
          track.artist_name,
          track.album_name
        ).then(() => {
          this.setState({
            saved: !this.state.saved
          });
        });
      } else {
        // DELETE SAVED TRACK
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
