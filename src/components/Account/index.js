import React from "react";
import { AppConsumer } from "../../AppContext";
import AccountInfo from "./AccountInfo";

const Account = () => {
  return (
    <AppConsumer>
      {appContext => <AccountInfo appContext={appContext} />}
    </AppConsumer>
  );
};

export default Account;
