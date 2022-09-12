import Testimage from './components/Testimage';
import React, { Component } from 'react'
import {Routes, Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import AddProject from './components/Project/AddProject';
import UpdateProject from './components/Project/UpdateProject';
import { useParams } from "react-router-dom";

class Views extends Component {
  
  render() {

    const ProjectWrapper = () => {
      const { id } = useParams();
      return <UpdateProject id={id} />;
    };

    return (
      <Routes>
            <Route exact path='/' element={ <Header />}/>
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/addProject' element={<AddProject />} />
            <Route exact path='/updateProject/:id' element= {<ProjectWrapper/>} />
                   


      </Routes>
    );
  }
}

export default Views;

