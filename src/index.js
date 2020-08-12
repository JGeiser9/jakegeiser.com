import React from "react";
import ReactDOM from "react-dom";
// TODO: consider removing/updating this
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// Components
import App from "components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// To learn more about service workers and caching:
// https://create-react-app.dev/docs/making-a-progressive-web-app/
serviceWorker.unregister();
