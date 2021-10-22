import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import DataTable from './screens/data_table_screen';
import LoginPage from './screens/login_screen';
import UploadImage from './screens/upload_image_screen';
import { userContext } from './userContext';

var state = {
      user: "notLoggedIn"
    };

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
