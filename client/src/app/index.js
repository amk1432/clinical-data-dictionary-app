import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar, SideBar } from '../components';

function App() {
  return (
    <Router>
      <NavBar />
      <div class="container-fluid">
        <div class="row">
          <SideBar />
        </div>
      </div>
    </Router>
  );
}

export default App;
