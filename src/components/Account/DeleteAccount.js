import React, { Component } from "react";
import { auth } from "../../firebase";
import { withRouter } from "react-router-dom";

import * as routes from "../../constants/routes";

class DeleteAccount extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    auth.doDeleteAccount().then(() => {
      this.props.history.push(routes.HOME);
    });
  }

  render() {
    return (
      <div className="text-center form mt-1">
        <button
          type="button"
          className="submit-btn form-input text-center"
          onClick={this.handleDelete}
        >
          Delete Account
        </button>
      </div>
    );
  }
}

export default withRouter(DeleteAccount);
