import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext(undefined);

const initialState = [];
const reducer = (currentState,action)=>{
    switch (action.type) {
        case "addTodo":
            return [...currentState,action.payload]
        case "completeTodo":
            return currentState.map((item)=>item.id === action.payload? {...item,isCompleted: !item.isCompleted}:item)
        default:
            currentState;
    }
}

const TodoProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer , initialState)
    const values = {
       state,dispatch
    }

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;