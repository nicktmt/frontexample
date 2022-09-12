import React, { Component } from 'react'
import {Routes, Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import AddProject from './components/Project/AddProject';
import UpdateProject from './components/Project/UpdateProject';

class Views extends Component {
  render() {
    return (
      <Routes>
          <Route path='/' element={ <Header />}>
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/addProject' element={<AddProject />} />
            <Route exact path='/updateProject/:id' element={<UpdateProject/>} />
          </Route>

      </Routes>
    );
  }
}

export default Views;

