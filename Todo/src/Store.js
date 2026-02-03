import { createStore, combineReducers } from "redux";
import todoReducer from './Reducers/todoReducer';

const reduxDevToolEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(combineReducers({todos: todoReducer}), {}, reduxDevToolEnhancer);

export default store;