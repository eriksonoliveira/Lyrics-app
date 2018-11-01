import React from "react";
import AccountInfo from "./AccountInfo";
import DeleteAccount from "./DeleteAccount";

import withAuthorization from "../withAuthorization";
import "./Account.css";

const Account = props => {
  return (
    <div className="account-info">
      <AccountInfo dispatch={props.dispatch} authUser={props.authUser} />
      <DeleteAccount />
    </div>
  );
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Account);
