import './App.css';
import React, { Component }  from 'react';

import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import Views from './Views';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';




function App() {
  return (

    <BrowserRouter>

    <Views />
    </BrowserRouter>


  );
}

export default App;
