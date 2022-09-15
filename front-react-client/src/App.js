import './App.css';
import React, { Component }  from 'react';

import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Views from './Views';
import { Provider } from 'react-redux';
import AddProject from './components/Project/AddProject';
import UpdateProject from './components/Project/UpdateProject';



function App() {
  return (
    
    <BrowserRouter>

    <Views/>
    </BrowserRouter>
    

  );
}

export default App;
