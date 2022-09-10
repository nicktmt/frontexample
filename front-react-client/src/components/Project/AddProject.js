import React, { Component } from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createProject} from "../../actions/projectActions";
import classnames from "classnames";
<<<<<<< HEAD
=======

>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f
  
class AddProject extends Component {


    
constructor(){
    super();
    this.state={
        projectName: "",
        projectIdentifier: "",
        description: "",
        start_date:"",
        end_date:"",
        errors: {}
        };
        
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }

<<<<<<< HEAD
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }

=======

    //lifecycle hooks
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }


>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e){

        e.preventDefault();
        const newProject ={
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            start_date: this.state.start_date,
            end_date:this.state.end_date
            };

           
        
            
            this.props.createProject(newProject);



    }




  render() {
<<<<<<< HEAD
    const {errors} = this.state;
=======
const {errors} = this.state;

>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f

    return (
        <div>
        <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create / Edit Project form</h5>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" 
<<<<<<< HEAD
                            className={classnames("form-control form-control-lg",{
                                "is-invalid": errors.projectName
                            })}  
=======
                            className={classnames("form-control form-control-lg",{"is-invalid":errors.projectName})} 
>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f
                            placeholder="Project Name" 
                            name="projectName"
                            value={this.state.projectName}
                            onChange={this.handleChange}/>
<<<<<<< HEAD
                            {errors.projectName && (
                                <div className="invalid-feedback">{errors.projectName}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <input type="text" 
                            className={classnames("form-control form-control-lg",{
                                "is-invalid": errors.projectIdentifier
                            })} 
=======
                            {errors.projectName &&(
                                <div className="invalid-feedback">{errors.projectName}</div>
                            )}

                        </div>
                        <div className="form-group">
                            <input type="text" 
                            className={classnames("form-control form-control-lg",{"is-invalid":errors.projectIdentifier})} 
>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f
                            placeholder="Unique Project ID"
                            name="projectIdentifier"
                            value={this.state.projectIdentifier}
                            onChange={this.handleChange}
                                 />
<<<<<<< HEAD
                            {errors.projectIdentifier && ( <div className="invalid-feedback">{errors.projectIdentifier}</div>)}
=======
                                 {errors.projectIdentifier &&(
                                    <div className="invalid-feedback">{errors.projectIdentifier}</div>
                                )}
>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f

                        </div>

                        <div className="form-group">
                            <textarea 
<<<<<<< HEAD
                            className={classnames("form-control form-control-lg",{
                                "is-invalid": errors.description
                            })}  
=======
                            className={classnames("form-control form-control-lg",{"is-invalid":errors.description})} 
>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f
                            placeholder="Project Description"
                            name="description"
                            value={this.state.description} 
                            onChange={this.handleChange}/>
<<<<<<< HEAD
                            {errors.description && ( <div className="invalid-feedback">{errors.description}</div>)}
=======
                            {errors.description && (
                                <div className="invalid-feedback">{errors.description}</div>
                            )}
>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f

                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" 
                            name="start_date" 
                            value={this.state.start_date}
                            onChange={this.handleChange}/>
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" 
                            name="end_date"
                            value={this.state.end_date}
                            onChange={this.handleChange} />
                        </div>

                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
<<<<<<< HEAD

=======
    </div>
>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f
    );
  }
}

const mapStateToProp = state =>({
    errors: state.errors
})

AddProject.propTypes = {
    createProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
<<<<<<< HEAD
}
export default connect(
    mapStateToProp, {createProject}) 
=======
};

const MapStateToProps = state =>({errors: state.errors })


export default connect(
    MapStateToProps, {createProject}) 
>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f
    (AddProject);
