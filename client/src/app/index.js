import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar, SideBar } from '../components';
import { Form, Contributor, Admin } from '../pages';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Switch>
              <Route path="/form" exact component={Form} />
              <Route path="/contributor" exact component={Contributor} />
              <Route path="/admin" exact component={Admin} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
