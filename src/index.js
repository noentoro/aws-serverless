import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import * as serviceWorker from "./serviceWorker";

// Bring in default Element React theme
import "element-theme-default";

Amplify.configure(aws_exports);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Learn more about service workers: http://bit.ly/CRA-PWA
// reportWebVitals();
serviceWorker.unregister();
