import React from "react";
import { withRouter } from "react-router-dom";
import { firebase, db } from "../../firebase";

const withFavouriteList = Component => {
  class withFavouriteList extends React.Component {
    _isMounted = false;

    constructor(props) {
      super(props);

      this.state = {
        tracks_list: null,
        authUser: null
      };

      this.deleteFavourite = this.deleteFavourite.bind(this);
      this.readFavourites = this.readFavourites.bind(this);
    }

    componentDidMount() {
      this._isMounted = true;

      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser && this._isMounted === true) {
          this.readFavourites(authUser.uid);
          this.setState({ authUser });
        }
      });
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    readFavourites(uid) {
      db.onceGetFavourites(uid).then(snapshot => {
        let tracks_list = [];
        snapshot.forEach(track => {
          tracks_list.push({ track: track.val(), track_key: track.key });
        });
        if (tracks_list.length > 0) {
          this.setState({ tracks_list });
        } else {
          this.setState({ tracks_list: null });
        }
      });
    }

    deleteFavourite(key) {
      const { uid } = this.state.authUser;
      db.doRemoveTrack(uid, key).then(() => {
        this.readFavourites(uid);
      });
    }

    render() {
      const { tracks_list } = this.state;
      if (tracks_list) {
        return (
          <Component
            {...this.props}
            tracks_list={tracks_list}
            deleteFavourite={this.deleteFavourite}
          />
        );
      } else {
        return <div>You don't have any saved traks</div>;
      }
    }
  }
  return withRouter(withFavouriteList);
};

export default withFavouriteList;
