import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';
import "bootstrap/dist/css/bootstrap.min.css"
import CreateProjectButton from './Project/CreateProjectButton';
import {getProjects} from '../actions/projectActions';
import {connect} from 'react-redux';
import PropType from 'prop-types';

class Dashboard extends Component {

  componentDidMount(){
    this.props.getProjects();
  }

  render() {
    // const projectObject = {
    //   projectName: "ProjectName PROPS",
    //   projectIdentifier: "PROP",
    //   description: "description from PROPS"
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
                  {
                    projects.map(project =>(
                      <ProjectItem key = {project.id} project ={project}/>

                    ))

                  }
             
              </div>
          </div>
      </div>
  </div>
    );

    
  }
}

Dashboard.propType = {
  project: PropType.object.isRequired,
  getProjects: PropType.func.isRequired
};

const mapStateToProp = state =>({
  project: state.project
});

export default connect(mapStateToProp, {getProjects})(Dashboard);