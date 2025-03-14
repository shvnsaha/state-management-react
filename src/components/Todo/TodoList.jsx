import React, { useContext } from 'react';
import { TodoContext } from '../../Context/TodoProvider';

const TodoList = () => {

    const { state,dispatch } = useContext(TodoContext)
    return (
        <div>
            {
                state.map((item) => <p key={item.id} onClick={()=>dispatch({type:"completeTodo",payload:item.id})} className={`cursor-pointer ${item.isCompleted? "line-through":''}`}>{item.title}</p>)
            }
        </div>
    );
};

export default TodoList;