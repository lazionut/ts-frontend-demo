import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { axiosInstance } from "./api/instance";

async function getResult() {
  let result = await axiosInstance
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      console.log(response.data);
    });
  return result;
}

console.log(getResult());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
