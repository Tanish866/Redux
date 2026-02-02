import { createStore, combineReducers } from "redux";

const state = {
    users: [
        {
            id: 1,
            name: 'Sanket',
        },
        {
            id: 2,
            name: 'Tanish',
        },
        {
            id: 3,
            name: 'JD',
        }
    ],
    todos : [
        { 
            todoId: 1, 
            userId: 1, 
            name: 'complete deployment'
        },
        { 
            todoId: 2, 
            userId: 2, 
            name: 'raise the bug' 
        },
        { 
            todoId: 1, 
            userId: 2, 
            name: 'complete ppt' 
        },
        { 
            todoId: 2, 
            userId: 1, 
            name: 'take interview' 
        },
        { 
            todoId: 1, 
            userId: 3, 
            name: 'plan the sprint' 
        }
    ]
};

function userReducer(users = state.users, action){
    if(action.type == 'Add_Todo'){
        let newUser = {id: action.userId, name: action.userName};
        let newUsers = [...users, newUser];
        return newUsers;
    }
    return users;
}
function todoReducer(todos = state.todos, action){
    if(action.type == 'Edit_todo'){
        let newTodos = todos.map(todo =>{
            if(todo.userId == action.userId && todo.todoId == action.todoId){
                todo.name = action.name;
            }
            return todo;
        });
        return newTodos;
    }
}

const CombineReducer = combineReducers({user: userReducer, todo: todoReducer});
const store = createStore(CombineReducer);
console.log(store.getState());

store.dispatch({type: "Add_Todo", userId: 5, userName: "Tanish"});

console.log(store.getState()); 