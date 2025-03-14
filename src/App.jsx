
// import { useState } from 'react'
import CounterWithClass from './components/CounterWithClassComponent'
import CounterWithFuncComponent from './components/CounterWithFuncComponent'
import TodoForm from './components/Todo/TodoForm'
import TodoList from './components/Todo/TodoList'
import UserInfoUse from './components/UserInfoUse'
import UserInfoUseReducer from './components/UserInfoUseReducer'
import TodoProvider from './Context/TodoProvider'

function App() {

  // const [count,setCount] = useState(0)
  return (
    <>
      {/* <CounterWithClass /> */}
      {/* <div className='border-2 p-10 m-2'>
        <p>{count}</p>
        <CounterWithFuncComponent  count={count} setCount={setCount}/>
      </div> */}

      {/* <UserInfoUse/> */}
      {/* <UserInfoUseReducer/> */}

      <TodoProvider>
        <TodoForm />
        <TodoList/>
      </TodoProvider>
    </>
  )
}

export default App
