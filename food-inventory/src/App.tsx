import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import LoginPageScreen from "./screens/LoginScreen";
import DataTableScreen from "./screens/DataTableScreen";
import UploadImageScreen from "./screens/UploadImageScreen";
import loginService from "./hooks/useAuth";
import { userContext } from "./utils/userContext";
import ScheduleScreen from "./screens/ScheduleScreen";

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
              <Link to="/login">Login page</Link>
            </li>
            <li>
              <Link to="/data-table">Data table page</Link>
            </li>
            <li>
              <Link to="/upload-image">Upload image page</Link>
            </li>
            <li>
              <Link to="/schedule">Schedule page</Link>
            </li>
            <li>
              <button onClick={logoutClick}>Log out</button>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <LoginPageScreen />
          </Route>
          <RestrictedRoute path="/data-table">
            <DataTableScreen />
          </RestrictedRoute>
          <RestrictedRoute path="/upload-image">
            <UploadImageScreen />
          </RestrictedRoute>
          <RestrictedRoute path="/schedule">
            <ScheduleScreen />
          </RestrictedRoute>
        </Switch>
      </div>
    </Router>
  );
}

// NGINX image
//docker build -t food-inventory .
//docker run -p 80:80 food-inventory