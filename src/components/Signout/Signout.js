import React, { Component } from "react";
import { auth } from "../../firebase";

export class Signout extends Component {
  render() {
    return (
      <div className="menu-item" onClick={auth.doSignOut}>
        <a className="menu-item-link">Log out</a>
      </div>
    );
  }
}

export default Signout;
