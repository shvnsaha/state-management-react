
// import { useState } from 'react'
import CounterWithClass from './components/CounterWithClassComponent'
import CounterWithFuncComponent from './components/CounterWithFuncComponent'
import UserInfoUse from './components/UserInfoUse'
import UserInfoUseReducer from './components/UserInfoUseReducer'

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
      <UserInfoUseReducer/>
    </>
  )
}

export default App
