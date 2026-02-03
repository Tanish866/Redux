import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../constants";


function todoReducer(todos = [], action){
    if(action.type == ADD_TODO){
        return [...todos, {id: action.payload.id, title: action.payload.title}];
    }
    if(action.type == EDIT_TODO){
        return todos.map(todo => {
            if(action.payload.id == todo.id){
                todo.title = action.payload.title;
            }
            return todo;
        });
    }
    if(action.type == REMOVE_TODO){
        return todos.filter(todo => {
            if(action.payload != todo.id);
        })
    }
    return todos;
}
export default todoReducer;
