import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "./style.css";
import "nodep-date-input-polyfill";

ReactDOM.render(<App />, document.getElementById("root"));
