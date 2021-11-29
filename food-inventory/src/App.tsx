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

let loggedIn: boolean = false;

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
              <button onClick={loginService.logout}>Log out</button>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login-page">
            <LoginPage />
          </Route>
          <Route path="/data-table">
            <DataTable />
          </Route>
          <Route path="/upload-image">
            <UploadImage />
          </Route>
          <Route path="/calendar">
            <DatePicker />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
