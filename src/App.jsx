
import { useState } from 'react'
import CounterWithClass from './components/CounterWithClassComponent'
import CounterWithFuncComponent from './components/CounterWithFuncComponent'

function App() {

  const [count,setCount] = useState(0)
  return (
    <>
      {/* <CounterWithClass /> */}
      <div className='border-2 p-10 m-2'>
        <p>{count}</p>
        <CounterWithFuncComponent  count={count} setCount={setCount}/>
      </div>
    </>
  )
}

export default App
