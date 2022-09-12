import './App.css';
import React, { Component }  from 'react';

import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Views from './Views';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddProject from './components/Project/AddProject';
import UpdateProject from './components/Project/UpdateProject';



function App() {
  return (
    <div className="container-fluid">
    <div >
      <div >
        <Header />
      </div>
      <main className="col-md-10">

    <BrowserRouter>

    <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/addProject' element={<AddProject />} />
            <Route path='/updateProject/:id' element={<UpdateProject/>} />

      </Routes>
    </BrowserRouter>
    </main>
    </div>
  </div>

  );
}

export default App;
