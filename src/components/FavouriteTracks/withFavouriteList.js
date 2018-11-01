import React from "react";
import { withRouter } from "react-router-dom";
import { firebase, db } from "../../firebase";

import Spinner from "../Spinner/Spinner";

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
        this.setState({ tracks_list });
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
      if (tracks_list !== null) {
        return (
          <Component
            {...this.props}
            tracks_list={tracks_list}
            deleteFavourite={this.deleteFavourite}
          />
        );
      } else {
        return <Spinner />;
      }
    }
  }
  return withRouter(withFavouriteList);
};

export default withFavouriteList;
