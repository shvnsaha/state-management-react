import React, { useContext, useState } from 'react';
import { TodoContext } from '../../Context/TodoProvider';

const TodoForm = () => {

    const {state,dispatch} = useContext(TodoContext)
    console.log(state);
    const [task,setTask] = useState("");

    const handleSubmit = (e) =>{
      e.preventDefault();
      const Todo = {
        id: "2",
        title: task,
        isCompleted: false
      }
      dispatch({type:"addTodo",payload:Todo})
    }
    return (
        <div>
            <h1>This is Todo Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='todo' onBlur={(e)=>setTask(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default TodoForm;