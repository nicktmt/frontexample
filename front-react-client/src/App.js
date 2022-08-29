import './App.css';
import React, { Component }  from 'react';

import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import AddProject from './components/Project/AddProject';
import Views from './Views';

function App() {
  return (
    <BrowserRouter>

    <Views />
    </BrowserRouter>
  );
}

export default App;
