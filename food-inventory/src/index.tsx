import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { userContext } from './components/userContext';
import { axiosInstance } from './api/instance';

var state = {
      user: "notLoggedIn"
    };
async function getResult() {
  let result = await axiosInstance.get("http://localhost:3000/api/users").then(function (response) {
    console.log(response.data);
  });
  return result;
}
console.log(getResult());


ReactDOM.render(
  <React.StrictMode>
    <userContext.Provider value={state}>
      <App />
    </userContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
