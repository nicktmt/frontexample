import Testimage from './components/Testimage';
import React, { Component } from 'react'
import {Routes, Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import AddProject from './components/Project/AddProject';

class Views extends Component {
  render() {
    return (
      <Routes>
            <Route exact path='/' element={ <Header />}/>
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/addProject' element={<AddProject />} />

            <Route exact path='/testimage' element={<Testimage/>} />


      </Routes>
    );
  }
}

export default Views;

