import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import LoginPage from "./screens/login_screen";
import DataTable from "./screens/data_table_screen";
import UploadImage from "./screens/upload_image_screen";
import DatePicker from "./components/date-picker";
import loginService from "./hooks/useAuth";
import { userContext } from "./components/userContext";
import { Box } from "@mui/material";

const RestrictedRoute = ({ ...props }) => {
  const usedContext = React.useContext(userContext);
  if (usedContext.isLoggedIn === true) {
    return <Route {...props} />;
  }
  return <Redirect to="/" />;
};

const logoutClick = () => {
  loginService.logout();
  window.location.reload();
};

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login-page">Login page</Link>
            </li>
            <li>
              <Link to="/data-table">Data table page</Link>
            </li>
            <li>
              <Link to="/upload-image">Upload image page</Link>
            </li>
            <li>
              <Link to="/calendar">See calendar</Link>
            </li>
            <li>
              <button onClick={logoutClick}>Log out</button>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login-page">
            <LoginPage />
          </Route>
          <RestrictedRoute path="/data-table">
            <DataTable />
          </RestrictedRoute>
          <RestrictedRoute path="/upload-image">
            <UploadImage />
          </RestrictedRoute>
          <RestrictedRoute path="/calendar">
            <DatePicker />
          </RestrictedRoute>
        </Switch>
      </div>
    </Router>
  );
}
