
import React from "react";
import ReactDOM from "react-dom";
import App from "./GitHubRepostories";
import './App.css';
// import { ContextProvider } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    {/* <ContextProvider> */}
      <App />
    {/* </ContextProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);


