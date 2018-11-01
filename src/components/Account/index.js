import React from "react";
// import { AppConsumer } from "../../AppContext";
import AccountInfo from "./AccountInfo";
import DeleteAccount from "./DeleteAccount";

import withAuthorization from "../withAuthorization";

const Account = props => {
  return (
    <React.Fragment>
      <AccountInfo dispatch={props.dispatch} authUser={props.authUser} />
      <DeleteAccount authUser={props.authUser} />
    </React.Fragment>
  );
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Account);
