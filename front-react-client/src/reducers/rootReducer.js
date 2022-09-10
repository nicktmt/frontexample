import { combineReducers } from "redux";
import errorReducer from './errorReducer';
import projectReducer from "./projectReducer";

const xxReducer = combineReducers ({
    errors: errorReducer,
    project: projectReducer

});

export default xxReducer;