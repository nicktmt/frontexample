import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import counterReducer from '../features/counter/counter-slice'
import rootReducer from "../reducers";
import {createStore, applyMiddleware, compose} from 'redux';

// const initalState={};
// const middleware = [thunk];

// let store;

// if (window.navigator.userAgent.includes("Chrome")) {
//     store = createStore (
//         rootReducer,
//         initalState,
//         compose(
//             applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()
//         )
//     );
// } else {
//     store = createStore(
//         rootReducer,
//         initalState,
//         compose(
//             applyMiddleware(...middleware))
//     );
// }

// export default store;

const store = configureStore({ reducer: rootReducer })
export default store;
