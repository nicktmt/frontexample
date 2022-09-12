import axios from "axios";
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS } from "./types";
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
        window.location.assign('/dashboard')
    }catch(err) {
        console.log("Loi day nay");
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

        const res = await axios.get (`http://localhost:8080/api/project/${id}`)
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        });
    };