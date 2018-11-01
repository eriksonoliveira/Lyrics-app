import React, { Component } from "react";
import { auth } from "../../firebase";
import { withRouter } from "react-router-dom";

import * as routes from "../../constants/routes";

class DeleteAccount extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {}

  handleDelete() {
    console.log(this.props);
    const { authUser } = this.props;
    auth.doDeleteAccount().then(() => {
      // db.doDeleteUser(authUser.uid).then(() => {
      this.props.history.push(routes.HOME);
      // });
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleDelete}>
          Delete Account
        </button>
      </div>
    );
  }
}

export default withRouter(DeleteAccount);
