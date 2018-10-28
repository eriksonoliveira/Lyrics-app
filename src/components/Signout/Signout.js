import React, { Component } from "react";
import { firebaseApp } from "../../firebase";

export class Signout extends Component {
  logOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="menu-item" onClick={() => this.logOut}>
        <a className="menu-item-link">Log out</a>
      </div>
    );
  }
}

export default Signout;
