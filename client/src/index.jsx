import React from "react";
import ReactDOM from "react-dom";

import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

if ("IntersectionObserver" in window) {
  console.log("IntersectionObserver is supported!");
} else {
  console.log("IntersectionObserver is not supported!");
}

reportWebVitals(console.log);
