<<<<<<< HEAD
import { GET_PROJECTS } from "../actions/types";
=======
import { GET_PROJECT, GET_PROJECTS } from "../actions/types";
>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f

const initialState = {
    projects: [],
    project: {}
};

export default function(state = initialState, action){
    switch (action.type){
        case GET_PROJECTS:
<<<<<<< HEAD
        return {
            ...state,
            projects: action.payload
        }
=======
            return {
                ...state,
                projects: action.payload
        };

        case GET_PROJECT:
            return {
                ...state,
                project: action.payload
            };
>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f

        default:
            return state;
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 0b29b3e2480db89558bc7a59a36fc2e9c306305f
