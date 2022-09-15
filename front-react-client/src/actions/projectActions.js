import axios from "axios";
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS, DELETE_PROJECT } from "./types";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useParams} from 'react-router-dom';

// export const createProject = async(project) =>{
// try{
//     const resp = await axios.post
//     ("http://localhost:8080/api/project",project);
//     // console.log(resp.data);
//     useNavigate()('/dashboard')

    
// }catch(error){
// console.error(error);
// }

  
// }

export const createProject = (project) => async dispatch =>{

    try{
        const resp = await axios.post("http://localhost:8080/api/project",project)
        window.location.assign('/dashboard');
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
        
    }catch(err) {
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
    };
    
    
    export const getProjects = () => async dispatch => {
        const res = await axios.get("http://localhost:8080/api/project/all")
        dispatch ({
            type: GET_PROJECTS, 
            payload: res.data
        });
    };

    export const getProject = (id) => async dispatch => {
        try {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            });
            const res = await axios.get (`http://localhost:8080/api/project/${id}`)
            dispatch({
                type: GET_PROJECT,
                payload: res.data
            });
        } catch (error) {
            window.location.assign('/dashboard');
            
        }
       
    };

    export const deleteProject = (id) => async dispatch => {
        await axios.delete(`http://localhost:8080/api/project/${id}`)
        dispatch({
            type: DELETE_PROJECT,
            payload: id
        });
    };