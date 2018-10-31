import React from "react";
import { AppConsumer } from "../../AppContext";
import AccountInfo from "./AccountInfo";

import withAuthorization from "../withAuthorization";

const Account = () => {
  return (
    <AppConsumer>
      {appContext => <AccountInfo appContext={appContext} />}
    </AppConsumer>
  );
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Account);
