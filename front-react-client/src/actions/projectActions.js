import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GET_ERRORS } from "./types";

export const createProject = (project) => async(dispatch, getState) =>{
try{
    const res = await axios.post
    ("http://localhost:8080/api/project",project);

    console.log(project);
    return dispatch({
        type: GET_ERRORS,
        payload: project.projectName,
    });
}catch(error){
    console.log(error);
}

  
}
       

  


