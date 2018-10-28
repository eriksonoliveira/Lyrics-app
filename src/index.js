import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Header from "./components/MainHeader/Header";
import registerServiceWorker from "./registerServiceWorker";

import { AppProvider } from "./AppContext";
import { TrackProvider } from "./TrackContext";

ReactDOM.render(
  <AppProvider>
    <TrackProvider>
      <App />
    </TrackProvider>
  </AppProvider>,
  document.getElementById("root")
);

ReactDOM.render(<Header />, document.getElementById("main-header"));
registerServiceWorker();
