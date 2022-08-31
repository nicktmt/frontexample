import './App.css';
import React, { Component }  from 'react';

import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import AddProject from './components/Project/AddProject';
import Views from './Views';
import { Provider } from 'react-redux';
import store from './store';
import { useNavigate } from 'react-router-dom';




function App() {
  return (
    <Provider store={store}>

    <BrowserRouter>

    <Views />
    </BrowserRouter>
    </Provider>


  );
}

export default App;
