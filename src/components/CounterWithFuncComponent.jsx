import ChildComponent from "./ChildComponent";


const CounterWithFuncComponent = ({count,setCount}) => {
   
    return (
        <div className='border-2 p-10'>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <ChildComponent count={count}/>
        </div>
    );
};

export default CounterWithFuncComponent;