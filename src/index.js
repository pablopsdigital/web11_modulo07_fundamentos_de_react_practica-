import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import StorageManager from "./utils/StorageManager";
import "./index.css";
import { setAuthorizationHeader } from "./services/ApiClient";

//Read data localStorage
const rememberme = StorageManager.getItem("rememberme");

let accessToken = null;
if (rememberme) {
  accessToken = StorageManager.getItem("token");
  //Config Header axios client
  setAuthorizationHeader(accessToken);
}

ReactDOM.render(
  <React.StrictMode>
    {/*Send info initial token in localStorage,*/}
    <App hasInitialToken={!!accessToken} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
