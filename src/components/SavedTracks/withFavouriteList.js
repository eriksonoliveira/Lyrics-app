import React from "react";
import { withRouter } from "react-router-dom";
// import { AppConsumer } from "../AppContext";
import { firebase, db } from "../../firebase";

const withFavouriteList = Component => {
  class withFavouriteList extends React.Component {
    _isMounted = false;

    constructor(props) {
      super(props);

      this.state = {
        tracks_list: null
      };
    }

    componentDidMount() {
      this._isMounted = true;

      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          db.onceGetFavourites(authUser.uid).then(snapshot => {
            let tracks_list = [];
            snapshot.forEach(track => {
              tracks_list.push({ track: track.val() });
            });
            if (tracks_list.length > 0 && this._isMounted === true) {
              this.setState({ tracks_list }, () =>
                console.log(this.state.tracks_list)
              );
            }
          });
        }
      });
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    render() {
      const { tracks_list } = this.state;
      if (tracks_list) {
        return <Component {...this.props} {...this.state} />;
      } else {
        return <div>You don't have any saved traks</div>;
      }
    }
  }
  return withRouter(withFavouriteList);
};

export default withFavouriteList;
