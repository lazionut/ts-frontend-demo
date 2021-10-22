import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import LoginPage from './screens/login_screen';
import DataTable from './screens/data_table_screen';
import UploadImage from './screens/upload_image_screen';
import { createContext, useState } from 'react';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/loginPage">Login page</Link>
            </li>
            <li>
              <Link to="/dataTable">Data table page</Link>
            </li>
            <li>
              <Link to="/uploadImage">Upload image page</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/loginPage">
            <LoginPage />
          </Route>
          <Route path="/dataTable">
            <DataTable />
          </Route>
          <Route path="/uploadImage">
            <UploadImage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}