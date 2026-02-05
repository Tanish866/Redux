import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { add_todo } from "../../actions";

function TodoInput(){
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();
    const todoList = useSelector((state) => {
        return state.todos;
    });
    function insertTodo(){
        const lastIdx = (todoList.length == 0) ? 0 : todoList[todoList.length - 1].id;
        dispatch(add_todo({title: todoText, id: lastIdx+1}));
        setTodoText('');
    }

    return(
        <>
            <input
                type="text"
                placeholder="Add todo..."
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button onClick={insertTodo}>Add Todo</button>
        </>
    )
}
export default TodoInput;