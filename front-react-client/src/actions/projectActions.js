import axios from "axios";
import { GET_ERRORS } from "./types";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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

export const createProject = (project, navigate) => async dispatch =>{

const resp = axios.post("http://localhost:8080/api/project",project);
console.log(resp.data);
if (resp.status === 200) {
        navigate('/dashboard');
    }
   


}




       

  


