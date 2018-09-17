import React from "react";
import Tracks from "../Track/Tracks";
import Search from "../../containers/Search/Search";

const Index = () => {
  return (
    <React.Fragment>
      <Search />
      <Tracks />
    </React.Fragment>
  );
};

export default Index;
