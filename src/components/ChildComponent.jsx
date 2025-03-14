import React from 'react';

const ChildComponent = ({count}) => {
    return (
        <div className='border p-10 m-10'>
           <p>{count}</p>
        </div>
    );
};

export default ChildComponent;