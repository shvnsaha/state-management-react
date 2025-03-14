import React, { useReducer } from 'react';
const initialSate = {
     name: "",
     age: "",
     hobbies: []
}

const reducer = (currentState,action) =>{
    switch (action.type) {
        case "addName":
            return {...currentState,name:action.payload}
        case "addAge":
            return {...currentState,age:action.payload}
        case "addHobbies":
            return {...currentState,hobbies:[...currentState.hobbies,action.payload]}
        default:
            return currentState;
    }
}

const UserInfoUseReducer = () => {
     const [state,dispatch] = useReducer(reducer,initialSate)
     console.log(state);

     const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(state);
     }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>dispatch({type:"addName",payload:e.target.value})} className='border border-purple-300 m-10' type="text" name='name' />
            <input onChange={(e)=>dispatch({type:"addAge",payload:e.target.value})} className='border border-purple-300 m-10' type="text" name='age' />
            <input onBlur={(e)=>dispatch({type:"addHobbies",payload:e.target.value})} className='border border-purple-300 m-10' type="text" name='hobbies' />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default UserInfoUseReducer;