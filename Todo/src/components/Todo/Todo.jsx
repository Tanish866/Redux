import { useDispatch } from 'react-redux';
import './Todo.css';
import { edit_todo, remove_todo } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { useState } from 'react';

function Todo({ title, id }){
    const dispatch = useDispatch();
    const action = bindActionCreators({remove_todo, edit_todo}, dispatch);

    const [ isEditting, setIsEditting ] = useState(false);
    const [ edittedText, setEdittedText ] = useState(title);
    function editTodo(){
        if(isEditting){
            action.edit_todo({id: id, title: edittedText});
            setIsEditting(false);
        }
        else{
            setIsEditting(true);
        }
    }
    return (
        <div className="todos">

            {
                (isEditting) ? <input 
                                    value={edittedText}
                                    onChange={(e) => setEdittedText(e.target.value)}
                                /> : edittedText
            }
            <div>
                <button onClick={() => action.remove_todo(id)}>Delete</button>
                <button onClick={editTodo}>{(isEditting) ? 'Save':'Edit'}</button>
            </div>
        </div>
    )
}

export default Todo;
