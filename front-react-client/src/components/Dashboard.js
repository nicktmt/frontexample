import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';
import "bootstrap/dist/css/bootstrap.min.css"
import CreateProjectButton from './Project/CreateProjectButton';
import { getProjects } from '../actions/projectActions';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

 class Dashboard extends Component {

  //life cycle hook

  componentDidMount(){
    this.props.getProjects();
  }
  
  render() {
    // const projectObject = {
    //   projectName: "Test name",
    //   projectIdentifier: "project iden",
    //   projectDescription: "Prop des"
    // }

    const {projects} = this.props.project;

    return  (
      <div className="projects">
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <h1 className="display-4 text-center">Projects</h1>
                  <br />
                  <CreateProjectButton />
                  <br />
                  <hr />
             {projects.map(project =>(
              <ProjectItem key={project.id} project={project} />
             ))}
              </div>
          </div>
      </div>
  </div>
 
  
    );

    
  }
}
Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
}

const MapStateToProps = state =>({project:state.project});

export default connect(MapStateToProps, {getProjects} )(Dashboard);