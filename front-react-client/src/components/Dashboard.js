import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';
import "bootstrap/dist/css/bootstrap.min.css"
import CreateProjectButton from './Project/CreateProjectButton';
<<<<<<< HEAD
import {getProjects} from '../actions/projectActions';
import {connect} from 'react-redux';
import PropType from 'prop-types';

class Dashboard extends Component {
=======
import { getProjects } from '../actions/projectActions';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

 class Dashboard extends Component {

  //life cycle hook
>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f

  componentDidMount(){
    this.props.getProjects();
  }
<<<<<<< HEAD

  render() {
    // const projectObject = {
    //   projectName: "ProjectName PROPS",
    //   projectIdentifier: "PROP",
    //   description: "description from PROPS"
    // }

    const {projects} = this.props.project;
=======
  
  render() {
    // const projectObject = {
    //   projectName: "Test name",
    //   projectIdentifier: "project iden",
    //   projectDescription: "Prop des"
    // }

    const {projects} = this.props.project;

>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f
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
<<<<<<< HEAD
                  {
                    projects.map(project =>(
                      <ProjectItem key = {project.id} project ={project}/>

                    ))

                  }
             
=======
             {projects.map(project =>(
              <ProjectItem key={project.id} project={project} />
             ))}
>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f
              </div>
          </div>
      </div>
  </div>
 
  
    );

    
  }
}
<<<<<<< HEAD

Dashboard.propType = {
  project: PropType.object.isRequired,
  getProjects: PropType.func.isRequired
};

const mapStateToProp = state =>({
  project: state.project
});

export default connect(mapStateToProp, {getProjects})(Dashboard);
=======
Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
}

const MapStateToProps = state =>({project:state.project});

export default connect(MapStateToProps, {getProjects} )(Dashboard);
>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f
